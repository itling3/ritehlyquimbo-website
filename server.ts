
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

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;
    const pathOnly = req.path;
    
    // Ignore assets that might have slipped through
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

      // Default Meta (Homepage)
      let title = "Hire SEO Expert from Philippines | Scale Your Organic Traffic and Revenue";
      let description = "Partner with Ritehly Quimbo, a results-driven SEO expert specializing in scaling businesses through data-backed organic search strategies.";
      let keywords = "hire seo expert philippines, organic traffic scaling, data-backed seo strategy, ritehly quimbo";
      let is404 = false;

      // Normalize path
      let cleanPath = pathOnly.toLowerCase();
      if (cleanPath.length > 1 && cleanPath.endsWith('/')) {
        cleanPath = cleanPath.slice(0, -1);
      }
      if (cleanPath === '' || cleanPath === undefined) cleanPath = '/';

      // Advanced Matching Logic
      const matchedService = Object.values(SERVICE_DETAILS).find(s => 
        cleanPath === s.permalink.toLowerCase() || 
        cleanPath === `/services/${s.slug.toLowerCase()}`
      );
      
      const matchedCaseStudy = CASE_STUDIES.find(s => 
        cleanPath === s.permalink.toLowerCase() || 
        cleanPath === `/portfolio/${s.slug.toLowerCase()}`
      );

      if (cleanPath === '/' || cleanPath === '/index') {
        // Home meta (already default)
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
      } else if (cleanPath === '/pricing/ai-automation-plans') {
        title = "AI Automation Pricing | Invest in Efficient Business Scaling";
        description = "Choose an AI automation plan that fits your workflow. Automate your repetitive tasks and focus on high-level growth.";
      } else if (cleanPath === '/pricing/google-ads-sem') {
        title = "Google Ads Management Pricing | Transparent PPC Fees for Maximum ROI";
        description = "Professional SEM management pricing. Get the most out of your ad budget with our expert-led PPC strategies.";
      } else if (cleanPath === '/pricing/web-dev-packages') {
        title = "Web Development Packages | Quality Coding for Better Performance";
        description = "Find the right web development package for your needs, from simple landing pages to complex full-stack solutions.";
      } else if (matchedService) {
        title = matchedService.seoTitle || `${matchedService.title} | Ritehly Quimbo`;
        description = matchedService.metaDescription || matchedService.description;
        keywords = matchedService.keywords || keywords;
      } else if (matchedCaseStudy) {
        title = matchedCaseStudy.seoTitle || `${matchedCaseStudy.title} | Ritehly Quimbo`;
        description = matchedCaseStudy.metaDescription || matchedCaseStudy.description;
        keywords = matchedCaseStudy.keywords || keywords;
      } else if (['/audit', '/calculator', '/privacy'].includes(cleanPath)) {
        // Basic meta for these
        title = `${cleanPath.slice(1).charAt(0).toUpperCase() + cleanPath.slice(2)} | Ritehly Quimbo`;
      } else {
        is404 = true;
      }

      if (is404) {
        // Return 404 HTML
        const html404 = `<!DOCTYPE html><html lang="en-us"><head><meta charset="UTF-8"><title>404 - Page Not Found</title><meta name="description" content="Oops, page lost."><style>body{font-family:sans-serif;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;background:#f4f5ff;color:#1d1e20;}a{background:#3b82f6;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;margin-top:20px;}</style></head><body><h1>This Page Does Not Exist</h1><p>Sorry, we couldn't find what you were looking for.</p><a href="/">Back Home</a></body></html>`;
        return res.status(404).set({ 'Content-Type': 'text/html' }).send(html404);
      }

      // Final Meta Injection
      let html = template;
      
      // Replace Title
      const titleTagRegex = /<title[^>]*>([\s\S]*?)<\/title>/i;
      if (titleTagRegex.test(html)) {
        html = html.replace(titleTagRegex, `<title>${title}</title>`);
      } else {
        html = html.replace('<head>', `<head><title>${title}</title>`);
      }

      // Replace/Inject Meta Description
      const descTagRegex = /<meta[^>]*?name=["']description["'][^>]*?>/i;
      const newMetaDesc = `<meta name="description" content="${description}">`;
      if (descTagRegex.test(html)) {
        html = html.replace(descTagRegex, newMetaDesc);
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
    <script id="ssr-info">console.log("SSR Active:", ${JSON.stringify({ path: cleanPath, title: title.slice(0, 20) + '...' })});</script>
`;
      html = html.replace('</head>', `${extraMeta}</head>`);

      // Add a debug header
      res.status(200).set({ 
        'Content-Type': 'text/html',
        'X-SSR-Generated': 'true',
        'X-SSR-Path': cleanPath
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
