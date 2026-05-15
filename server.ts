
import * as fsSync from 'node:fs';
import * as path from 'node:path';
import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

import express from 'express';
import compression from 'compression';
import { createServer as createViteServer } from 'vite';
import nodemailer from 'nodemailer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { SERVICE_DETAILS, CASE_STUDIES } from './constants';

async function startServer() {
  const logPath = path.join(process.cwd(), 'server-boot-log.txt');
  await fs.writeFile(logPath, `Boot at ${new Date().toISOString()}\n`).catch(() => {});
  
  const app = express();
  const PORT = 3000;

  app.use(compression());
  app.use(express.json());

  // Simple Request Logger
  app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
  });

  // API Routes
  app.get('/api/seo-health', (req, res) => {
    res.json({ 
      status: 'ok', 
      time: new Date().toISOString(),
      servicesCount: Object.keys(SERVICE_DETAILS).length,
      caseStudiesCount: CASE_STUDIES.length
    });
  });

  let transporter: nodemailer.Transporter | null = null;
  function getTransporter() {
    if (!transporter) {
      const user = process.env.EMAIL_USER || 'seo@ritehlyquimbo.com';
      const pass = process.env.EMAIL_PASS;
      if (!pass) return null;
      transporter = nodemailer.createTransport({
        host: 'smtp.hostinger.com',
        port: 465,
        secure: true,
        auth: { user, pass },
      });
    }
    return transporter;
  }

  app.post('/api/contact', async (req, res) => {
    const { name, email, phone, service, website, message } = req.body;
    const leadEntry = {
      timestamp: new Date().toISOString(),
      name, email, phone: `+63${phone}`, service, website, message,
      ip: req.ip, userAgent: req.get('user-agent')
    };

    try {
      await fs.appendFile(path.join(process.cwd(), 'leads.txt'), JSON.stringify(leadEntry) + '\n');
      const mailTransporter = getTransporter();
      if (mailTransporter) {
        const mailOptions = {
          from: `"Ritehly Quimbo Leads" <${process.env.EMAIL_USER || 'seo@ritehlyquimbo.com'}>`,
          to: 'seo@ritehlyquimbo.com',
          subject: `🚀 [NEW LEAD] ${service} - ${name}`,
          text: `Name: ${name}\nEmail: ${email}\nPhone: +63${phone}\nService: ${service}\nWebsite: ${website || 'N/A'}\n\nMessage:\n${message}`,
          html: `<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1f2937;">
            <h1 style="color: #2563eb; font-style: italic;">New Business Lead</h1>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong> ${message}</p>
          </div>`
        };
        await mailTransporter.sendMail(mailOptions);
        console.log(`Email sent for: ${name}`);
      } else {
        console.warn('EMAIL_PASS missing, lead saved to file.');
      }
      res.json({ success: true, message: 'Message received.' });
    } catch (error) {
      console.error('Lead error:', error);
      res.status(500).json({ success: false, message: 'Transmission failure.' });
    }
  });

  // Explicit API 404 (Express 5 compatible regex)
  app.all(/^\/api\/.*$/, (req, res) => {
    res.status(404).json({ success: false, message: `API ${req.originalUrl} not found.` });
  });

  // Start listening EARLY
  app.listen(PORT, '0.0.0.0', () => {
    const msg = `Server listening at http://0.0.0.0:${PORT}\n`;
    console.log(msg);
    fsSync.appendFileSync(logPath, msg);
  });

  // Vite / Static (Internal Initialization)
  let vite: any;
  if (process.env.NODE_ENV !== 'production') {
    const vMsg1 = '--- INITIALIZING VITE ---\n';
    console.log(vMsg1);
    await fs.appendFile(logPath, vMsg1).catch(() => {});
    
    vite = await createViteServer({ server: { middlewareMode: true }, appType: 'custom' });
    
    const vMsg2 = '--- VITE READY ---\n';
    console.log(vMsg2);
    await fs.appendFile(logPath, vMsg2).catch(() => {});
    
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(process.cwd(), 'dist'), { index: false }));
  }

  app.get('/api/seo-health', (req, res) => {
    res.json({ 
      status: 'ok', 
      time: new Date().toISOString(),
      servicesCount: Object.keys(SERVICE_DETAILS).length,
      caseStudiesCount: CASE_STUDIES.length
    });
  });

  app.get(/^.*$/, async (req, res, next) => {
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
  fsSync.appendFileSync(logPath, `CRITICAL ERROR: ${err.message}\n${err.stack}\n`);
});
