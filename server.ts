
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

  // Logging Middleware
  app.use((req, res, next) => {
    const msg = `[${new Date().toISOString()}] ${req.method} ${req.url} (IP: ${req.ip})\n`;
    process.stdout.write(msg);
    fsSync.appendFileSync(logPath, msg);
    next();
  });

  app.use(compression());
  app.use(express.json());

  // --- API SECTION ---
  const apiRouter = express.Router();
  
  apiRouter.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
  });

  const handleContact = (req: express.Request, res: express.Response) => {
    const { name, email, phone, service: bodyService, website, message } = req.body;
    
    if (!name || !email) {
      return res.status(400).json({ success: false, message: 'Name and email are required.' });
    }

    const service = bodyService || 'General Inquiry';
    const leadEntry = {
      timestamp: new Date().toISOString(),
      name, email, 
      phone: phone ? `+63 ${phone}` : 'N/A', 
      service, 
      website: website || 'N/A', 
      message: message || 'No message provided',
      ip: req.ip, 
      userAgent: req.get('user-agent')
    };

    fsSync.appendFileSync(logPath, `[API CONTACT] ${name} (${email})\n`);

    res.status(200).json({ 
      success: true, 
      message: 'Transmission success.' 
    });

    // Background processing
    (async () => {
      try {
        await processLead(leadEntry, name, service);
        fsSync.appendFileSync(logPath, `[API SUCCESS] ${name}\n`);
      } catch (err: any) {
        fsSync.appendFileSync(logPath, `[API FAIL] ${err.message}\n`);
      }
    })();
  };

  apiRouter.post('/contact', handleContact);
  apiRouter.post('/contact/', handleContact);
  
  apiRouter.get('/seo-health', (req, res) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
  });

  // Catch ALL other /api requests
  apiRouter.use((req, res) => {
    res.status(404).json({ 
      success: false, 
      message: `API Route ${req.method} ${req.originalUrl} not found.` 
    });
  });

  app.use('/api', apiRouter);
  // --- END API SECTION ---

  let transporter: nodemailer.Transporter | null = null;
  async function getTransporter() {
    if (!transporter) {
      const user = process.env.EMAIL_USER || 'seo@ritehlyquimbo.com';
      const pass = process.env.EMAIL_PASS;
      if (!pass) {
        console.warn('EMAIL_PASS MISSING - Email will not be sent');
        return null;
      }
      const logMsg = `Initializing SMTP for ${user}...\n`;
      process.stdout.write(logMsg);
      fsSync.appendFileSync(logPath, logMsg);
      transporter = nodemailer.createTransport({
        host: 'smtp.hostinger.com',
        port: 465,
        secure: true,
        auth: { user, pass },
      });
      
      try {
        await transporter.verify();
        const successMsg = 'SMTP connection verified successfully.\n';
        process.stdout.write(successMsg);
        fsSync.appendFileSync(logPath, successMsg);
      } catch (err: any) {
        const errMsg = `SMTP Verification Failed: ${err.message}\n`;
        console.error(errMsg);
        fsSync.appendFileSync(logPath, errMsg);
        transporter = null;
      }
    }
    return transporter;
  }

  // Pre-verify SMTP on startup
  getTransporter().catch(e => console.error('Early SMTP error:', e));

  // Lead Processing Helper (Non-blocking)
  async function processLead(leadEntry: any, name: string, service: string) {
    try {
      await fs.appendFile(path.join(process.cwd(), 'leads.txt'), JSON.stringify(leadEntry) + '\n');
      const mailTransporter = await getTransporter();
      
      if (mailTransporter) {
        const mailOptions = {
          from: `"Ritehly Quimbo Leads" <${process.env.EMAIL_USER || 'seo@ritehlyquimbo.com'}>`,
          to: 'seo@ritehlyquimbo.com, Ritehlyquimbo@gmail.com',
          subject: `🚀 [NEW LEAD] ${service} - ${name}`,
          text: `
--- NEW BUSINESS LEAD ---
Name: ${leadEntry.name}
Email: ${leadEntry.email}
Phone: ${leadEntry.phone}
Service Requested: ${leadEntry.service}
Website: ${leadEntry.website}

Project Brief:
${leadEntry.message}
-------------------------
          `,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1f2937; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
              <div style="background: #2563eb; padding: 20px; color: white;">
                <h1 style="margin: 0; font-size: 24px; font-style: italic;">New Business Lead</h1>
                <p style="margin: 5px 0 0; opacity: 0.8; font-size: 14px;">Inquiry from ritehlyquimbo.com</p>
              </div>
              <div style="padding: 30px; background: white;">
                <div style="margin-bottom: 25px;">
                  <h3 style="margin: 0 0 10px; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Contact Information</h3>
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 8px 0; color: #4b5563; font-weight: bold; width: 100px;">Name:</td>
                      <td style="padding: 8px 0; color: #111827;">${leadEntry.name}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #4b5563; font-weight: bold;">Email:</td>
                      <td style="padding: 8px 0; color: #2563eb;"><a href="mailto:${leadEntry.email}" style="color: #2563eb; text-decoration: none;">${leadEntry.email}</a></td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #4b5563; font-weight: bold;">Phone:</td>
                      <td style="padding: 8px 0; color: #111827;">${leadEntry.phone}</td>
                    </tr>
                  </table>
                </div>
                <div style="margin-bottom: 25px;">
                  <h3 style="margin: 0 0 10px; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Project Details</h3>
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 8px 0; color: #4b5563; font-weight: bold; width: 100px;">Service:</td>
                      <td style="padding: 8px 0; color: #111827;">${leadEntry.service}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #4b5563; font-weight: bold;">Website:</td>
                      <td style="padding: 8px 0; color: #111827;">${leadEntry.website !== 'N/A' ? `<a href="${leadEntry.website}" style="color: #2563eb; text-decoration: none;">${leadEntry.website}</a>` : 'N/A'}</td>
                    </tr>
                  </table>
                </div>
                <div style="margin-top: 30px; padding: 20px; background: #f9fafb; border-radius: 8px; border-left: 4px solid #2563eb;">
                  <h3 style="margin: 0 0 10px; color: #111827; font-size: 14px;">Project Brief:</h3>
                  <p style="margin: 0; color: #374151; line-height: 1.6; white-space: pre-wrap;">${leadEntry.message}</p>
                </div>
              </div>
              <div style="padding: 20px; background: #f3f4f6; text-align: center; color: #9ca3af; font-size: 11px;">
                <p style="margin: 0;">Sent via Secure Transmission from Backend Environment</p>
                <p style="margin: 5px 0 0;">Timestamp: ${leadEntry.timestamp} | IP: ${leadEntry.ip}</p>
              </div>
            </div>`
        };
        await mailTransporter.sendMail(mailOptions);
        const successMsg = `Email sent successfully for: ${name}\n`;
        fsSync.appendFileSync(logPath, successMsg);
      }
    } catch (err: any) {
      console.error('Lead processing background error:', err);
      fsSync.appendFileSync(logPath, `BACKGROUND ERROR: ${err.message}\n`);
    }
  }

  // Vite / Static Setup
  let vite: any;
  if (process.env.NODE_ENV !== 'production') {
    vite = await createViteServer({ server: { middlewareMode: true }, appType: 'custom' });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(process.cwd(), 'dist'), { index: false }));
  }

  // SSR Handler
  app.get(/.*/, async (req, res, next) => {
    const url = req.originalUrl;
    const pathOnly = req.path;
    
    // Skip API and assets with dots
    if (url.startsWith('/api/') || url === '/api' || url.startsWith('/api?')) return next();
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

      // Metadata Logic
      let title = "Hire SEO Expert from Philippines | Scale Your Organic Traffic and Revenue";
      let description = "Partner with Ritehly Quimbo, a results-driven SEO expert specializing in scaling businesses through data-backed organic search strategies.";
      let keywords = "hire seo expert philippines, organic traffic scaling, data-backed seo strategy, ritehly quimbo";
      let is404 = false;

      let cleanPath = (pathOnly || '/').toLowerCase();
      if (cleanPath.length > 1 && cleanPath.endsWith('/')) cleanPath = cleanPath.slice(0, -1);
      if (cleanPath === '') cleanPath = '/';

      const allServices = Object.values(SERVICE_DETAILS);
      const matchedService = allServices.find(s => cleanPath === s.permalink.toLowerCase() || cleanPath === `/services/${s.slug.toLowerCase()}`);
      const matchedCaseStudy = CASE_STUDIES.find(s => cleanPath === s.permalink.toLowerCase() || cleanPath === `/portfolio/${s.slug.toLowerCase()}`);

      if (matchedService) {
        title = matchedService.seoTitle || `${matchedService.title} | Ritehly Quimbo`;
        description = matchedService.metaDescription || matchedService.description;
      } else if (matchedCaseStudy) {
        title = matchedCaseStudy.seoTitle || `${matchedCaseStudy.title} | Ritehly Quimbo`;
        description = matchedCaseStudy.metaDescription || matchedCaseStudy.description;
      } else {
        // Simple switch for main pages
        switch(cleanPath) {
          case '/about': title = "About Ritehly Quimbo | SEO Specialist"; break;
          case '/contact': title = "Contact | Hire SEO Philippines"; break;
          case '/services': title = "Our Services | SEO & Growth"; break;
          case '/portfolio': title = "Portfolio | Proven SEO Results"; break;
          case '/pricing': title = "Pricing | Scalable SEO Packages"; break;
          case '/': break;
          default: 
            if (!cleanPath.startsWith('/api')) is404 = true;
        }
      }

      if (is404) {
        return res.status(404).set({ 'Content-Type': 'text/html' }).send('<!DOCTYPE html><html><body><h1>404 - Not Found</h1><a href="/">Go Home</a></body></html>');
      }

      let html = template;
      const injectedTags = `<title>${title}</title><meta name="description" content="${description}">`;
      html = html.replace('<meta charset="UTF-8">', `<meta charset="UTF-8">${injectedTags}`);
      
      const extraMeta = `<meta name="keywords" content="${keywords}"><link rel="canonical" href="https://ritehlyquimbo.com${url}">`;
      html = html.replace('</head>', `${extraMeta}</head>`);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);

    } catch (e) {
      if (vite) vite.ssrFixStacktrace(e as Error);
      console.error('[SSR ERROR]', e);
      res.status(500).end((e as Error).message);
    }
  });

  app.listen(PORT, '0.0.0.0', () => {
    const msg = `Final server listening at http://0.0.0.0:${PORT}\n`;
    console.log(msg);
    fsSync.appendFileSync(logPath, msg);
  });

}

startServer().catch(err => {
  console.error('CRITICAL: Server failed to start:', err);
  const logPath = path.join(process.cwd(), 'server-boot-log.txt');
  fsSync.appendFileSync(logPath, `CRITICAL ERROR: ${err.message}\n${err.stack}\n`);
});
