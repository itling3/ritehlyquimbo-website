
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
  app.use(express.urlencoded({ extended: true }));

  // Debugging Middleware for API requests
  app.use('/api', (req, res, next) => {
    const debugMsg = `>>> API REQUEST: ${req.method} ${req.url} | Body Keys: ${Object.keys(req.body || {}).join(', ')}\n`;
    process.stdout.write(debugMsg);
    fsSync.appendFileSync(logPath, debugMsg);
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

  app.post('/api/contact', async (req, res) => {
    const rawBody = req.body;
    console.log('--- CONTACT FORM SUBMISSION ---', rawBody);
    
    // Explicitly destructure with fallbacks to avoid 'undefined' strings in email
    const name = rawBody.name || '';
    const email = rawBody.email || '';
    const phone = rawBody.phone || '';
    const bodyService = rawBody.service || '';
    const website = rawBody.website || '';
    const message = rawBody.message || '';

    const service = bodyService || 'General Inquiry';
    const safeMessage = message || 'No message provided';
    
    // Clean phone number: if it doesn't start with +, add +63
    let safePhone = phone.trim();
    if (safePhone && !safePhone.startsWith('+')) {
      // Remove leading zero if present
      if (safePhone.startsWith('0')) safePhone = safePhone.substring(1);
      safePhone = `+63 ${safePhone}`;
    } else if (!safePhone) {
      safePhone = 'N/A';
    }

    const safeWebsite = website || 'N/A';
    
    if (!name || !email) {
      const missingMsg = `Missing name (${!!name}) or email (${!!email})`;
      console.warn(missingMsg);
      return res.status(400).json({ success: false, message: 'Name and email are required.' });
    }

    const leadEntry = {
      timestamp: new Date().toISOString(),
      name, email, phone: safePhone, service, website: safeWebsite, message: safeMessage,
      ip: req.ip, userAgent: req.get('user-agent'),
      raw: rawBody
    };

    try {
      await fs.appendFile(path.join(process.cwd(), 'leads.txt'), JSON.stringify(leadEntry) + '\n');
      const mailTransporter = await getTransporter();
      
      if (mailTransporter) {
        const sentMsg = `Attempting to send email to seo@ritehlyquimbo.com and Ritehlyquimbo@gmail.com for ${name}...\n`;
        fsSync.appendFileSync(logPath, sentMsg);
        
        const mailOptions = {
          from: `"Ritehly Quimbo Leads" <${process.env.EMAIL_USER || 'seo@ritehlyquimbo.com'}>`,
          to: 'seo@ritehlyquimbo.com, Ritehlyquimbo@gmail.com',
          replyTo: email, // Allow replying directly to the lead
          subject: `🚀 [NEW LEAD] ${service} - ${name}`,
          text: `
--- NEW BUSINESS LEAD ---
Name: ${name}
Email: ${email}
Phone: ${safePhone}
Service Requested: ${service}
Website: ${safeWebsite}

Project Brief:
${safeMessage}

Submission Details:
Date: ${leadEntry.timestamp}
IP: ${req.ip}
-------------------------
          `,
          html: `
            <div style="font-family: 'Inter', system-ui, sans-serif; max-width: 600px; margin: 0 auto; color: #1f2937; border: 1px solid #e5e7eb; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
              <div style="background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); padding: 32px 24px; color: white; text-align: center;">
                <div style="display: inline-block; background: rgba(255, 255, 255, 0.2); padding: 8px 16px; border-radius: 20px; font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 12px; font-style: italic;">
                  New Inquiry Received
                </div>
                <h1 style="margin: 0; font-size: 28px; font-weight: 900; font-style: italic; letter-spacing: -0.02em;">New Business Lead</h1>
                <p style="margin: 8px 0 0; opacity: 0.9; font-size: 14px; font-weight: 500;">Direct from ritehlyquimbo.com</p>
              </div>
              
              <div style="padding: 32px; background: white;">
                <div style="margin-bottom: 32px;">
                  <h3 style="margin: 0 0 16px; color: #9ca3af; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.2em;">Lead Profile</h3>
                  <div style="background: #f8fafc; border-radius: 12px; padding: 20px; border: 1px solid #f1f5f9;">
                    <table style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 10px 0; color: #64748b; font-size: 13px; font-weight: 600; width: 110px;">Full Name</td>
                        <td style="padding: 10px 0; color: #0f172a; font-size: 14px; font-weight: 700;">${name}</td>
                      </tr>
                      <tr>
                        <td style="padding: 10px 0; color: #64748b; font-size: 13px; font-weight: 600;">Email</td>
                        <td style="padding: 10px 0; color: #2563eb; font-size: 14px; font-weight: 700;">
                          <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 10px 0; color: #64748b; font-size: 13px; font-weight: 600;">Phone</td>
                        <td style="padding: 10px 0; color: #0f172a; font-size: 14px; font-weight: 700;">${safePhone}</td>
                      </tr>
                    </table>
                  </div>
                </div>

                <div style="margin-bottom: 32px;">
                  <h3 style="margin: 0 0 16px; color: #9ca3af; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.2em;">Project Context</h3>
                  <div style="background: #f8fafc; border-radius: 12px; padding: 20px; border: 1px solid #f1f5f9;">
                    <table style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 10px 0; color: #64748b; font-size: 13px; font-weight: 600; width: 110px;">Service</td>
                        <td style="padding: 10px 0; color: #0f172a; font-size: 14px; font-weight: 700; border-bottom: 1px dashed #e2e8f0;">${service}</td>
                      </tr>
                      <tr>
                        <td style="padding: 10px 0; color: #64748b; font-size: 13px; font-weight: 600; padding-top: 20px;">Website</td>
                        <td style="padding: 10px 0; color: #0f172a; font-size: 14px; font-weight: 700; padding-top: 20px;">
                          ${safeWebsite !== 'N/A' ? `<a href="${safeWebsite}" style="color: #2563eb; text-decoration: none;">${safeWebsite}</a>` : 'N/A'}
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 style="margin: 0 0 16px; color: #9ca3af; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.2em;">Message Contents</h3>
                  <div style="background: #eff6ff; border-radius: 12px; padding: 24px; border-left: 4px solid #2563eb;">
                    <p style="margin: 0; color: #1e3a8a; line-height: 1.7; font-size: 15px; font-weight: 500; white-space: pre-wrap;">${safeMessage}</p>
                  </div>
                </div>
              </div>

              <div style="padding: 24px; background: #f8fafc; text-align: center; border-t: 1px solid #e2e8f0;">
                <p style="margin: 0; color: #94a3b8; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em;">Secure Lead Transmission Engine</p>
                <div style="margin-top: 8px; color: #cbd5e1; font-size: 10px;">
                  ID: ${leadEntry.timestamp.replace(/[^0-9]/g, '').slice(-12)} | Origin IP: ${req.ip}
                </div>
              </div>
            </div>`
        };
        
        await mailTransporter.sendMail(mailOptions);
        const successMsg = `Email sent successfully for: ${name}\n`;
        process.stdout.write(successMsg);
        fsSync.appendFileSync(logPath, successMsg);
      } else {
        console.warn('SMTP Transporter not available.');
        throw new Error('Email configuration error.');
      }
      res.json({ success: true, message: 'Message successfully sent.' });
    } catch (error: any) {
      console.error('Lead process error:', error);
      fsSync.appendFileSync(logPath, `LEAD ERROR: ${error.message}\n`);
      res.status(500).json({ success: false, message: `Transmission failure: ${error.message}` });
    }
  });

  // Explicit API 404
  app.all(/\/api\/.*/, (req, res) => {
    res.status(404).json({ success: false, message: `API ${req.originalUrl} not found.` });
  });

  // Vite / Static Setup
  let vite: any;
  if (process.env.NODE_ENV !== 'production') {
    vite = await createViteServer({ server: { middlewareMode: true }, appType: 'custom' });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(process.cwd(), 'dist'), { index: false }));
  }

  // SSR Handler - Strict GET only
  app.get(/.*/, async (req, res, next) => {
    // Only handle GET requests for SSR
    if (req.method !== 'GET') return next();
    
    const url = req.originalUrl;
    const pathOnly = req.path;
    
    // Skip API and assets with dots
    if (url.startsWith('/api/')) return next();
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
            if (!cleanPath.startsWith('/api/')) is404 = true;
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
