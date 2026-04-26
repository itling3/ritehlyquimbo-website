
import express from 'express';
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
  const app = express();
  const PORT = 3000;

  let vite: any;
  if (process.env.NODE_ENV !== 'production') {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath, { index: false }));
  }

  // Define valid routes to distinguish from real 404s
  const validStaticRoutes = ['/', '/about', '/contact', '/resume', '/services', '/portfolio', '/pricing'];
  const pricingSubRoutes = ['/pricing/local-seo-strategy', '/pricing/ai-automation-plans', '/pricing/google-ads-sem', '/pricing/web-dev-packages'];
  
  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;
    
    // Check if it's an asset or dynamic route
    if (url.includes('.') && !url.includes('.html')) return next();

    try {
      let template: string;
      if (process.env.NODE_ENV !== 'production') {
        template = await fs.readFile(path.resolve(__dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
      } else {
        template = await fs.readFile(path.join(process.cwd(), 'dist/index.html'), 'utf-8');
      }

      // Default Meta
      let title = "SEO Specialist Philippines | Full-Stack Growth Expert | Ritehly Quimbo";
      let description = "Expert SEO, Google Ads, and AI growth systems for PH businesses. We build and maintain your scalable growth engine with AI automation & VA support.";
      let keywords = "seo specialist philippines, growth marketing specialist ph, technical seo consultant";
      let is404 = false;

      let cleanPath = url.split('?')[0].split('#')[0];
      if (cleanPath.length > 1 && cleanPath.endsWith('/')) {
        cleanPath = cleanPath.slice(0, -1);
      }
      
      const pathParts = cleanPath.split('/').filter(Boolean);

      // Explicit Routing Logic for Meta Tags & Validation
      if (cleanPath === '/' || !cleanPath) {
        // Home meta already set as default
      } else if (validStaticRoutes.includes(cleanPath)) {
        if (cleanPath === '/about') {
          title = "About Ritehly Quimbo | The Growth Engineer Mission";
          description = "Learn how Ritehly Quimbo helps SMBs scale sales with autonomous growth systems and expert technical SEO.";
        } else if (cleanPath === '/contact') {
          title = "Contact SEO Expert | Scale Your Business Leads | Ritehly Quimbo";
          description = "Ready to scale? Contact Ritehly Quimbo for SEO and growth strategy inquiries in the Philippines.";
        } else if (cleanPath === '/pricing') {
          title = "SEO Pricing Blueprints | Scalable ROI Strategies | Ritehly Quimbo";
          description = "Transparent SEO pricing for ambitious brands. Technical blueprints designed for maximum ROI and organic dominance.";
        } else if (cleanPath === '/services') {
          title = "Search Engineering Capabilities | SEO & Growth Services | Ritehly Quimbo";
          description = "Full-service growth engine including Technical SEO, Content Strategy, AI Automation, and Google Ads management.";
        } else if (cleanPath === '/portfolio') {
          title = "SEO Results Portfolio | Data-Driven Success Stories | Ritehly Quimbo";
          description = "Verified case studies demonstrating massive traffic growth and revenue scaling for global brands.";
        } else if (cleanPath === '/resume') {
          title = "Ritehly Quimbo | Senior SEO & Growth Specialist Resume";
          description = "Professional experience, skill set, and technical certifications of Ritehly Quimbo, Growth Marketing Specialist.";
        }
      } else if (pricingSubRoutes.includes(cleanPath)) {
          title = "Selective Growth Pricing | Ritehly Quimbo";
          if (cleanPath.includes('local-seo')) title = "Local SEO Pricing Tiers | Ritehly Quimbo";
          if (cleanPath.includes('ai-automation')) title = "AI Automation Strategy Pricing | Ritehly Quimbo";
          if (cleanPath.includes('google-ads')) title = "SEM & Google Ads Pricing | Ritehly Quimbo";
          if (cleanPath.includes('web-dev')) title = "Web Development Packages | Ritehly Quimbo";
          description = "Detailed pricing breakdown for specialized growth channels. Tailored for maximum impact and ROI.";
      } else if (pathParts[0] === 'services' && pathParts[1]) {
        const service = Object.values(SERVICE_DETAILS).find(s => s.slug === pathParts[1]);
        if (service) {
          title = `${service.title} | Ritehly Quimbo`;
          description = service.metaDescription || service.description;
        } else {
          is404 = true;
        }
      } else if (pathParts[0] === 'portfolio' && pathParts[1]) {
        const study = CASE_STUDIES.find(s => s.slug === pathParts[1]);
        if (study) {
          title = `${study.title.split('–')[0]} | SEO Case Study | Ritehly Quimbo`;
          description = study.metaDescription || study.description;
        } else {
          is404 = true;
        }
      } else {
        is404 = true;
      }

      if (is404) {
        // Return custom 404 HTML matching user template
        const html404 = `
<!DOCTYPE html>
<html lang="en-us">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>This Page Does Not Exist</title>
    <meta name="description" content="Oops, looks like the page is lost.">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link href="https://fonts.googleapis.com/css?family=DM+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet">
    <style>
        body { color: #1d1e20; background: #f4f5ff; font-size: 14px; font-family: "DM Sans", sans-serif; font-weight: 400; }
        .page-not-found { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; padding: 0 16px; }
        .image { max-width: 100%; margin-bottom: 32px; height: auto; object-fit: contain; }
        .title { text-align: center; margin-top: 0; margin-bottom: 8px; font-size: 24px; line-height: 32px; font-weight: 700; }
        .text { text-align: center; max-width: 650px; margin-bottom: 24px; font-size: 16px; line-height: 24px; font-weight: 400; color: #6D7081; }
        .back-btn { background: #3b82f6; color: white; border: none; padding: 12px 24px; border-radius: 8px; font-weight: 700; cursor: pointer; text-decoration: none; display: inline-block; }
    </style>
</head>
<body>
    <div class="page-not-found">
        <img class="image" alt="Page Not Found" src="https://lh3.googleusercontent.com/d/1MToveZaYCNtEpfPNhFDhv8ylDPhqngKR" width="400" />
        <h1 class="title">This Page Does Not Exist</h1>
        <p class="text">
            Sorry, the page you are looking for could not be found. It's just an
            accident that was not intentional.
        </p>
        <a href="/" class="back-btn">Back to Home</a>
    </div>
</body>
</html>`;
        return res.status(404).set({ 'Content-Type': 'text/html' }).send(html404);
      }

      // Inject Meta Tags into Template for valid pages
      let html = template
        .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
        .replace(/<meta name="description" content=".*?">/, `<meta name="description" content="${description}">`)
        .replace('</head>', `
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:url" content="https://ritehlyquimbo.com${url}">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${description}">
    <link rel="canonical" href="https://ritehlyquimbo.com${url}">
    </head>`);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      if (vite) vite.ssrFixStacktrace(e as Error);
      console.error(e);
      res.status(500).end((e as Error).message);
    }
  });

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
