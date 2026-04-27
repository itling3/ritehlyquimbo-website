
import express from 'express';
import compression from 'compression';
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

  // Track if server is actually handling requests
  app.use((req, res, next) => {
    if (req.url === '/api/seo-health') return next();
    console.log(`[REQUEST] ${req.method} ${req.url}`);
    next();
  });

  app.get('/api/seo-health', (req, res) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
  });

  app.use(compression());

  let vite: any;
  if (process.env.NODE_ENV !== 'production') {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath, { index: false }));
  }

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;
    const pathOnly = req.path;
    
    // Pass assets to Vite or static middleware
    if (url.includes('.') && !url.endsWith('.html')) {
      if (vite) return vite.middlewares(req, res, next);
      return next();
    }

    try {
      let template: string;
      if (process.env.NODE_ENV !== 'production') {
        const tPath = path.resolve(__dirname, 'index.html');
        console.log(`[SEO] Reading dev template from: ${tPath}`);
        template = await fs.readFile(tPath, 'utf-8');
        template = await vite.transformIndexHtml(url, template);
      } else {
        const tPath = path.join(process.cwd(), 'dist/index.html');
        console.log(`[SEO] Reading prod template from: ${tPath}`);
        template = await fs.readFile(tPath, 'utf-8');
      }

      // Default Meta
      let title = "Hire SEO Expert from Philippines | Scale Your Organic Traffic and Revenue";
      let description = "Partner with Ritehly Quimbo, a results-driven SEO expert specializing in scaling businesses through data-backed organic search strategies.";
      let keywords = "hire seo expert philippines, organic traffic scaling, data-backed seo strategy, ritehly quimbo";
      let is404 = false;

      // Normalize path: handle trailing slashes and normalize to lowercase for matching
      let cleanPath = pathOnly.toLowerCase();
      if (cleanPath.length > 1 && cleanPath.endsWith('/')) {
        cleanPath = cleanPath.slice(0, -1);
      }
      if (cleanPath === '' || cleanPath === undefined) cleanPath = '/';

      const pathParts = cleanPath.split('/').filter(Boolean);
      await fs.appendFile(path.join(process.cwd(), 'seo-analysis.txt'), `[ANALYSIS] ${new Date().toISOString()} | Path: ${cleanPath} | Parts: ${JSON.stringify(pathParts)}\n`).catch(() => {});
      
      const logEntry = `[${new Date().toISOString()}] Path: ${cleanPath} | URL: ${url}\n`;
      await fs.appendFile(path.join(process.cwd(), 'seo-logs.txt'), logEntry).catch(() => {});

      // Routing Logic for Meta Tags
      // Normalize to handle home page and various path formats
      if (cleanPath === '/' || cleanPath === '/index' || cleanPath === '') {
        // Home meta already set as default
      } else if (cleanPath === '/about') {
        title = "Ritehly Quimbo SEO Specialist | Meet the Expert Behind Your Digital Growth";
        description = "Learn about Ritehly Quimbo’s journey and mission to provide high-impact SEO and digital marketing solutions for global brands.";
        keywords = "ritehly quimbo, seo specialist journey, digital marketing mission";
      } else if (cleanPath === '/contact') {
        title = "Book an SEO Consultation | Start Dominating the Search Results Today";
        description = "Ready to grow? Contact Ritehly Quimbo for a personalized SEO strategy and consultation to take your business to the next level.";
        keywords = "book seo consultation, hire seo expert, organic growth contact";
      } else if (cleanPath === '/resume') {
        title = "Expert SEO Consultant Resume | Proven Track Record of Digital Success";
        description = "Explore Ritehly Quimbo’s professional background, technical skills, and years of experience in delivering ROI-focused marketing.";
        keywords = "seo resume, digital marketing track record, seo technical skills";
      } else if (cleanPath === '/services') {
        title = "Professional SEO & Growth Services | Comprehensive Digital Marketing Solutions";
        description = "Discover a full suite of digital services including SEO, AI automation, and web development designed to accelerate business growth.";
        keywords = "seo services, ai automation, growth marketing solutions";
      } else if (cleanPath === '/portfolio') {
        title = "SEO Case Studies & Results | Real Examples of Search Engine Success";
        description = "View our portfolio of successful SEO campaigns and digital projects that delivered measurable results for clients worldwide.";
        keywords = "seo case studies, search engine success examples, portfolio";
      } else if (cleanPath === '/pricing') {
        title = "SEO Service Packages & Pricing | Affordable Growth Plans for Every Business";
        description = "Transparent pricing for SEO, Google Ads, and AI automation. Choose the perfect plan to fit your business goals and budget.";
        keywords = "seo pricing, seo packages, google ads pricing";
      } else if (cleanPath === '/pricing/local-seo-strategy') {
        title = "Local SEO Pricing Plans | Affordable Strategies for Local Business Growth";
        description = "Explore our Local SEO pricing tiers designed to help small to medium businesses win the local map pack.";
        keywords = "local seo pricing, map pack ranking cost";
      } else if (cleanPath === '/pricing/ai-automation-plans') {
        title = "AI Automation Pricing | Invest in Efficient Business Scaling";
        description = "Choose an AI automation plan that fits your workflow. Automate your repetitive tasks and focus on high-level growth.";
        keywords = "ai automation pricing, workflow automation cost";
      } else if (cleanPath === '/pricing/google-ads-sem') {
        title = "Google Ads Management Pricing | Transparent PPC Fees for Maximum ROI";
        description = "Professional SEM management pricing. Get the most out of your ad budget with our expert-led PPC strategies.";
        keywords = "google ads pricing, ppc management fees";
      } else if (cleanPath === '/pricing/web-dev-packages') {
        title = "Web Development Packages | Quality Coding for Better Performance";
        description = "Find the right web development package for your needs, from simple landing pages to complex full-stack solutions.";
        keywords = "web development pricing, full stack packages";
      } else if (pathParts[0] === 'services' && pathParts[1]) {
        const service = Object.values(SERVICE_DETAILS).find(s => s.slug.toLowerCase() === pathParts[1].toLowerCase());
        if (service) {
          title = service.seoTitle || `${service.title} | Ritehly Quimbo`;
          description = service.metaDescription || service.description;
          keywords = service.keywords || keywords;
        } else {
          is404 = true;
        }
      } else if (pathParts[0] === 'portfolio' && pathParts[1]) {
        const study = CASE_STUDIES.find(s => s.slug.toLowerCase() === pathParts[1].toLowerCase());
        if (study) {
          title = study.seoTitle || `${study.title.split('–')[0]} | SEO Case Study | Ritehly Quimbo`;
          description = study.metaDescription || study.description;
          keywords = study.keywords || keywords;
        } else {
          is404 = true;
        }
      } else {
        // Fallback for other valid static routes if any missed
        const knownPaths = [
          '/', '/about', '/contact', '/resume', '/services', '/portfolio', '/pricing',
          '/pricing/local-seo-strategy', '/pricing/ai-automation-plans', '/pricing/google-ads-sem', '/pricing/web-dev-packages',
          '/audit', '/calculator', '/privacy'
        ];
        if (!knownPaths.includes(cleanPath)) {
          is404 = true;
        }
      }

      console.log(`[SEO] Serving Title: ${title}`);


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
      let html = template;
      
      // Extremely aggressive replacement
      const newTitle = `<title>${title}</title>`;
      const newMetaDesc = `<meta name="description" content="${description}">`;

      // Try title replacement
      if (html.includes('<title>')) {
        html = html.replace(/<title[^>]*>[\s\S]*?<\/title>/i, newTitle);
      } else {
        html = html.replace('<head>', `<head>${newTitle}`);
      }

      // Try description replacement
      if (html.includes('name="description"')) {
        html = html.replace(/<meta[^>]*?name=["']description["'][^>]*?>/i, newMetaDesc);
      } else {
        html = html.replace('<head>', `<head>${newMetaDesc}`);
      }

      // Inject extra meta tags before </head>
      const extraMeta = `
    <meta name="ssr-applied" content="${new Date().toISOString()}">
    <meta name="keywords" content="${keywords}">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:url" content="https://ritehlyquimbo.com${url}">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${description}">
    <link rel="canonical" href="https://ritehlyquimbo.com${url}">
    <script id="ssr-log">console.log("SSR Applied for: " + window.location.pathname);</script>
`;
      html = html.replace('</head>', `${extraMeta}</head>`);

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
