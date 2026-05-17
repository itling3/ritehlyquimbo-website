
import express from 'express';
import compression from 'compression';
import nodemailer from 'nodemailer';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import constants safely for server use
// Note: In ESM node, we might need a dynamic import if extensions are tricky
// But tsx handles this well
import { SERVICE_DETAILS, CASE_STUDIES } from './constants';

async function startServer() {
  console.log('--- SERVER STARTING ---');
  await fs.writeFile(path.join(process.cwd(), 'server-boot-log.txt'), `Boot at ${new Date().toISOString()}\n`).catch(() => {});
  const app = express();
  const PORT = 3000;

  // Add body parser for JSON and Form data
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Track if server is actually handling requests
  app.use(async (req, res, next) => {
    if (req.url === '/api/seo-health' || req.url === '/api/contact') return next();
    const logMsg = `[${new Date().toISOString()}] ${req.method} ${req.url} (Path: ${req.path})\n`;
    await fs.appendFile(path.join(process.cwd(), 'server-boot-log.txt'), logMsg).catch(() => {});
    next();
  });

  app.get('/api/seo-health', (req, res) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
  });

  app.post('/api/contact', async (req, res) => {
    console.log('--- CONTACT API HIT ---');
    console.log('Body keys:', Object.keys(req.body));
    
    try {
      // 3. Capture and Sanitize Inputs to prevent XSS/Injection
      // We use the property names from the frontend data (customer_name, etc.)
      const rawName = (req.body.customer_name || '').toString().trim();
      const rawEmail = (req.body.customer_email || '').toString().trim();
      const rawMessage = (req.body.customer_message || '').toString().trim();

      console.log('Processing message from:', rawName, rawEmail);

      // Simple HTML escape function to mimic htmlspecialchars
      const escape = (str: string) => str.replace(/[&<>"']/g, (m) => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
      }[m] || m));

      const name = escape(rawName);
      const email = rawEmail; // Will be validated by regex
      const message = escape(rawMessage).replace(/\n/g, '<br>');

      // Basic validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!name || !emailRegex.test(email) || !rawMessage) {
        console.warn('Validation failed:', { name: !!name, email: emailRegex.test(email), message: !!rawMessage });
        return res.status(400).json({ success: false, message: 'Please fill out all fields correctly. Name and a valid email are required.' });
      }

      // --- HOSTINGER SETTINGS ---
      const smtpHost = process.env.SMTP_HOST || 'smtp.hostinger.com';
      const smtpPort = parseInt(process.env.SMTP_PORT || '465');
      const smtpUser = process.env.SMTP_USER || 'seo@ritehlyquimbo.com';
      const smtpPass = process.env.SMTP_PASS || '@DrakeDaewon2026';
      const toEmail = process.env.CONTACT_RECEIVER_EMAIL || 'seo@ritehlyquimbo.com';

      console.log(`Connecting to SMTP: ${smtpHost}:${smtpPort} as ${smtpUser}`);

      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465, // true for 465, false for 587
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
        tls: {
          // Do not fail on invalid certificates (often needed in serverless/container envs)
          rejectUnauthorized: false
        },
        connectionTimeout: 10000, // 10 seconds
        greetingTimeout: 10000,
        socketTimeout: 20000,
      });

      // Best Practice: Set the 'From' as your own domain email so Hostinger doesn't block it,
      // but set 'replyTo' as the user's email so you can hit "Reply" directly.
      console.log('Sending email...');
      await transporter.sendMail({
        from: `"Website Contact Form" <${smtpUser}>`, 
        replyTo: `"${name}" <${email}>`,
        to: toEmail,
        subject: 'New Customer Form Submission',
        html: `<strong>Name:</strong> ${name} <br>
               <strong>Email:</strong> ${email} <br><br>
               <strong>Message:</strong> <br> ${message}`,
      });

      console.log('Growth request sent for:', name);
      return res.json({ success: true, message: 'Thank you! Your message has been sent.' });

    } catch (error) {
      console.error('Contact form error detail:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Message could not be sent. Please use direct email or check your SMTP settings.' 
      });
    }
  });

  app.use(compression());

  let vite: any;
  if (process.env.NODE_ENV !== 'production') {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });
    // Assets handled by vite
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    // Important: serve assets BUT NOT index.html yet
    app.use(express.static(distPath, { index: false }));
  }

  app.get('/api/seo-health', (req, res) => {
    res.json({ 
      status: 'ok', 
      time: new Date().toISOString(),
      servicesCount: Object.keys(SERVICE_DETAILS).length,
      caseStudiesCount: CASE_STUDIES.length
    });
  });

  app.use('*all', async (req, res, next) => {
    const url = req.originalUrl;
    const pathOnly = req.path;
    
    // Pass assets to next middleware
    if (pathOnly.includes('.') && !pathOnly.endsWith('.html')) {
      return next();
    }

    try {
      let template: string;
      if (process.env.NODE_ENV !== 'production') {
        const tPath = path.resolve(__dirname, 'index.html');
        template = await fs.readFile(tPath, 'utf-8');
        template = await vite.transformIndexHtml(url, template);
      } else {
        const tPath = path.join(process.cwd(), 'dist/index.html');
        template = await fs.readFile(tPath, 'utf-8');
      }

      // Initial Default Meta (Homepage)
      let title = "Hire SEO Expert from Philippines | Scale Your Organic Traffic and Revenue";
      let description = "Partner with Ritehly Quimbo, a results-driven SEO expert specializing in scaling businesses through data-backed organic search strategies.";
      let keywords = "hire seo expert philippines, organic traffic scaling, data-backed seo strategy, ritehly quimbo";
      let is404 = false;

      // Normalize path
      let cleanPath = (pathOnly || '/').toLowerCase();
      if (cleanPath.length > 1 && cleanPath.endsWith('/')) {
        cleanPath = cleanPath.slice(0, -1);
      }
      if (cleanPath === '') cleanPath = '/';

      // Robust matching
      const allServices = Object.values(SERVICE_DETAILS);
      const matchedService = allServices.find(s => {
        const p = s.permalink.toLowerCase();
        const sl = `/services/${s.slug.toLowerCase()}`;
        return cleanPath === p || cleanPath === sl || cleanPath.endsWith(s.slug.toLowerCase());
      });
      
      const matchedCaseStudy = CASE_STUDIES.find(s => {
        const p = s.permalink.toLowerCase();
        const sl = `/portfolio/${s.slug.toLowerCase()}`;
        return cleanPath === p || cleanPath === sl || cleanPath.endsWith(s.slug.toLowerCase());
      });

      // FORCED PRIORITY OVERRIDE
      if (cleanPath === '/services/local-seo-specialist-google-maps') {
        title = "Local SEO & Google Maps Specialist | Dominate Your Local Market and Get Found";
        description = "Increase foot traffic and local leads. We optimize your Google Business Profile and local citations for maximum neighborhood visibility.";
        keywords = "local seo, gmb management, google maps ranking, local citation building, map pack dominance, seo specialist philippines";
      } else if (matchedService) {
        title = matchedService.seoTitle || `${matchedService.title} | Ritehly Quimbo`;
        description = matchedService.metaDescription || matchedService.description;
        keywords = matchedService.keywords || keywords;
      } else if (matchedCaseStudy) {
        title = matchedCaseStudy.seoTitle || `${matchedCaseStudy.title} | Ritehly Quimbo`;
        description = matchedCaseStudy.metaDescription || matchedCaseStudy.description;
        keywords = matchedCaseStudy.keywords || keywords;
      } else if (cleanPath === '/about') {
        title = "Ritehly Quimbo SEO Specialist | Meet the Expert Behind Your Digital Growth";
        description = "Learn about Ritehly Quimbo’s journey and mission to provide high-impact SEO and digital marketing solutions for global brands.";
      } else if (cleanPath === '/contact') {
        title = "Contact Ritehly Quimbo | Ready to Scale Your Organic Traffic?";
        description = "Get in touch today for a personalized SEO strategy. Let’s discuss how to grow your business through data-driven search marketing.";
      } else if (cleanPath === '/resume') {
        title = "SEO Specialist Resume | Ritehly Quimbo’s Professional Background";
        description = "Detailed career history, certifications, and technical expertise of Ritehly Quimbo, a seasoned SEO professional.";
      } else if (cleanPath === '/services') {
        title = "Professional SEO Services Philippines | Results-Oriented Digital Growth";
        description = "Explore our full suite of SEO services, from technical audits to topical authority mapping and AI automation.";
      } else if (cleanPath === '/portfolio') {
        title = "SEO Case Studies & Success Stories | Proven Results by Ritehly Quimbo";
        description = "See how we’ve scaled organic traffic and revenue for diverse businesses across various industries.";
      } else if (cleanPath === '/pricing') {
        title = "SEO Pricing Packages | Transparent and Scalable Marketing Solutions";
        description = "View our competitive pricing plans for SEO, AI automation, and Google Ads management.";
      } else if (cleanPath === '/pricing/local-seo-strategy') {
        title = "Local SEO Pricing Plans | Affordable Strategies for Local Business Growth";
        description = "Explore our Local SEO pricing tiers designed to help small to medium businesses win the local map pack.";
      } else if (cleanPath === '/pricing/ai-automation-plans') {
        title = "AI Automation Pricing | Invest in Efficient Business Scaling";
        description = "Choose an AI automation plan that fits your workflow. Automate your repetitive tasks and focus on high-level growth.";
      } else if (cleanPath === '/pricing/google-ads-sem') {
        title = "Google Ads Management Pricing | Transparent PPC Fees for Maximum ROI";
        description = "Professional SEM management pricing. Get the most out of your ad budget with our expert-led PPC strategies.";
      } else if (cleanPath === '/pricing/web-dev-packages') {
        title = "Web Development Packages | Quality Coding for Better Performance";
        description = "Find the right web development package for your needs, from simple landing pages to complex full-stack solutions.";
      } else if (cleanPath === '/services/local-seo-specialist-google-maps') {
        title = "Local SEO & Google Maps Specialist | Dominate Your Local Market and Get Found";
        description = "Increase foot traffic and local leads. We optimize your Google Business Profile and local citations for maximum neighborhood visibility.";
      } else if (['/audit', '/calculator', '/privacy'].includes(cleanPath)) {
        title = `${cleanPath.slice(1).charAt(0).toUpperCase() + cleanPath.slice(2)} | Ritehly Quimbo`;
      } else if (cleanPath !== '/' && cleanPath !== '/index') {
         is404 = true;
      }

      if (is404) {
        const html404 = `<!DOCTYPE html><html lang="en-us"><head><meta charset="UTF-8"><title>404 - Page Not Found</title><meta name="description" content="Oops, page lost."><style>body{font-family:sans-serif;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;background:#f4f5ff;color:#1d1e20;}a{background:#3b82f6;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;margin-top:20px;}</style></head><body><h1>This Page Does Not Exist</h1><p>Sorry, we couldn't find what you were looking for.</p><a href="/">Back Home</a></body></html>`;
        return res.status(404).set({ 'Content-Type': 'text/html' }).send(html404);
      }

      let html = template;
      
      const finalTitle = title.trim();
      const finalDesc = description.trim();

      // Since we removed defaults from index.html, we inject them fresh into the <head>
      // We'll inject them right after the <meta charset="UTF-8"> tag for consistency
      const injectedTags = `
    <title>${finalTitle}</title>
    <meta name="description" content="${finalDesc}">`;
      
      html = html.replace('<meta charset="UTF-8">', `<meta charset="UTF-8">${injectedTags}`);

      const extraMeta = `
    <!-- SSR-INFO: ${cleanPath} | ${matchedService ? 'matched-service' : matchedCaseStudy ? 'matched-case' : 'static-route'} -->
    <meta name="keywords" content="${keywords}">
    <meta property="og:title" content="${finalTitle}">
    <meta property="og:description" content="${finalDesc}">
    <meta property="og:url" content="https://ritehlyquimbo.com${url}">
    <meta name="twitter:title" content="${finalTitle}">
    <meta name="twitter:description" content="${finalDesc}">
    <link rel="canonical" href="https://ritehlyquimbo.com${url}">
    <script id="ssr-debug">console.log("SSR DEBUG:", ${JSON.stringify({ path: cleanPath, title: finalTitle, desc: finalDesc.slice(0, 30) + '...', service: !!matchedService, case: !!matchedCaseStudy })});</script>
`;
      html = html.replace('</head>', `${extraMeta}</head>`);

      res.status(200).set({ 
        'Content-Type': 'text/html',
        'X-SSR-Active': 'true',
        'X-SSR-Path': cleanPath,
        'Cache-Control': 'public, max-age=0, must-revalidate'
      }).end(html);

    } catch (e) {
      if (vite) vite.ssrFixStacktrace(e as Error);
      console.error('[SSR ERROR]', e);
      res.status(500).end((e as Error).message);
    }
  });

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
