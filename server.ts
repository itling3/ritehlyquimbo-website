
import express from 'express';
import compression from 'compression';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import constants safely for server use
// Note: In ESM node, we might need a dynamic import if extensions are tricky
// But tsx handles this well
import { SERVICE_DETAILS, CASE_STUDIES } from './constants';

async function startServer() {
  console.log('--- SERVER STARTING ---');
  console.log('EMAIL_PASS present:', !!process.env.EMAIL_PASS);
  const logPath = path.join(process.cwd(), 'server-boot-log.txt');
  let logContent = `Boot at ${new Date().toISOString()}\n`;
  await fs.writeFile(logPath, logContent).catch(() => {});

  const app = express();
  const PORT = 3000;

  const server = app.listen(PORT, '0.0.0.0', async () => {
    console.log(`Server listening on port ${PORT}`);
    await fs.appendFile(logPath, `Listening on ${PORT} at ${new Date().toISOString()}\n`).catch(() => {});
  });

  app.get('/api/seo-health', (req, res) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
  });

  app.use(express.json());

  let transporter: nodemailer.Transporter | null = null;

  function getTransporter() {
    if (!transporter) {
      const user = process.env.EMAIL_USER || 'seo@ritehlyquimbo.com';
      const pass = process.env.EMAIL_PASS;

      if (!pass) {
        console.warn('EMAIL_PASS not set. Emails will not be sent.');
        return null;
      }

      transporter = nodemailer.createTransport({
        host: 'smtp.hostinger.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user,
          pass,
        },
      });
    }
    return transporter;
  }

  app.post('/api/contact', async (req, res) => {
    const { name, email, phone, service, website, message } = req.body;
    const leadEntry = {
      timestamp: new Date().toISOString(),
      name,
      email,
      phone: `+63${phone}`,
      service,
      website,
      message,
      ip: req.ip,
      userAgent: req.get('user-agent')
    };

    try {
      // 1. Backup to file
      await fs.appendFile(path.join(process.cwd(), 'leads.txt'), JSON.stringify(leadEntry) + '\n');
      
      // 2. Send Email
      const mailTransporter = getTransporter();
      if (mailTransporter) {
        const mailOptions = {
          from: `"Ritehly Quimbo Leads" <${process.env.EMAIL_USER || 'seo@ritehlyquimbo.com'}>`,
          to: 'seo@ritehlyquimbo.com',
          subject: `🚀 [NEW LEAD] ${service} - ${name}`,
          text: `
New Lead Details:
-----------------
Name: ${name}
Email: ${email}
Phone: +63${phone}
Service: ${service}
Website: ${website || 'N/A'}

Project Brief:
${message}

---
Technical Info:
Timestamp: ${leadEntry.timestamp}
IP: ${leadEntry.ip}
User Agent: ${leadEntry.userAgent}
          `,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1f2937;">
              <h1 style="color: #2563eb; font-style: italic;">New Business Lead</h1>
              <p>You have a new inquiry from your website portfolio.</p>
              
              <div style="background: #f3f4f6; padding: 20px; border-radius: 10px; margin: 20px 0;">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Phone:</strong> <a href="tel:+63${phone}">+63 ${phone}</a></p>
                <p><strong>Service Requested:</strong> ${service}</p>
                <p><strong>Website:</strong> ${website ? `<a href="${website}">${website}</a>` : 'N/A'}</p>
              </div>

              <div style="border-left: 4px solid #2563eb; padding-left: 15px; margin: 20px 0;">
                <p><strong>Project Brief:</strong></p>
                <p style="white-space: pre-wrap;">${message}</p>
              </div>

              <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 30px 0;" />
              <p style="font-size: 10px; color: #9ca3af; text-transform: uppercase;">Sent from ritehlyquimbo.com backend</p>
            </div>
          `
        };

        await mailTransporter.sendMail(mailOptions);
        console.log(`Email sent successfully for lead: ${name}`);
      } else {
        console.log('Skipping email send because EMAIL_PASS is missing.');
        return res.status(500).json({ 
          success: false, 
          message: 'Contact form is partially configured. Lead saved to server but email skipped. Please set EMAIL_PASS in settings.' 
        });
      }

      console.log('--- NEW ENTERPRISE LEAD ---');
      console.log(`From: ${name} (${email})`);
      console.log(`Service: ${service}`);
      console.log('--------------------------');

      res.json({ success: true, message: 'Message received and encrypted for transmission.' });
    } catch (error) {
      console.error('Lead processing error:', error);
      res.status(500).json({ success: false, message: 'Internal transmission failure.' });
    }
  });

  app.use(compression());

  let vite: any;
  if (process.env.NODE_ENV !== 'production') {
    const msg1 = '--- INITIALIZING VITE ---\n';
    console.log(msg1);
    await fs.appendFile(logPath, msg1).catch(() => {});
    
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });
    
    const msg2 = '--- VITE INITIALIZED ---\n';
    console.log(msg2);
    await fs.appendFile(logPath, msg2).catch(() => {});
    
    // Assets handled by vite
    app.use(vite.middlewares);
  } else {
    const msg3 = '--- PRODUCTION MODE: SERVING STATIC ---\n';
    console.log(msg3);
    await fs.appendFile(logPath, msg3).catch(() => {});
    
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

  app.use('*', async (req, res, next) => {
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
}

startServer().catch(err => {
  console.error('CRITICAL: Server failed to start:', err);
  const logPath = path.join(process.cwd(), 'server-boot-log.txt');
  fs.appendFileSync(logPath, `CRITICAL ERROR: ${err.message}\n${err.stack}\n`);
});
