
import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import constants to access SEO data for server-side injection
// We use a dynamic import or relative require if needed, but since server.ts is run via tsx, we can import
import { SERVICE_DETAILS, CASE_STUDIES } from './constants.js';

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Vite middleware for development
  let vite: any;
  if (process.env.NODE_ENV !== 'production') {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom', // Use custom to handle routing ourselves
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath, { index: false }));
  }

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;
    
    try {
      let template: string;
      if (process.env.NODE_ENV !== 'production') {
        template = await fs.readFile(path.resolve(__dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
      } else {
        template = await fs.readFile(path.join(process.cwd(), 'dist/index.html'), 'utf-8');
      }

      // SEO Logic: Determine meta tags based on URL
      let title = "SEO Specialist Philippines | Full-Stack Growth Expert | Ritehly Quimbo";
      let description = "Expert SEO, Google Ads, and AI growth systems for PH businesses. Build your scalable revenue engine.";
      let keywords = "seo specialist philippines, growth marketing, technical seo expert";
      let image = "https://lh3.googleusercontent.com/d/1_UNdAwA40hce9EZ6i72RxVNCYAaLDAEo";

      const pathParts = url.split('/').filter(Boolean);

      if (pathParts[0] === 'services' && pathParts[1]) {
        const service = SERVICE_DETAILS[pathParts[1]];
        if (service) {
          title = `${service.title} | Ritehly Quimbo SEO`;
          description = service.metaDescription || service.description;
          keywords = service.keywords || keywords;
        }
      } else if (pathParts[0] === 'portfolio' && pathParts[1]) {
        const study = CASE_STUDIES.find(s => s.id === pathParts[1]);
        if (study) {
          title = `${study.title.split('–')[0]} Case Study | Ritehly Quimbo`;
          description = study.metaDescription || study.description;
          keywords = study.keywords || keywords;
        }
      } else if (pathParts[0] === 'pricing') {
        title = "SEO Pricing & Blueprints | Measurable ROI Plans | Ritehly Quimbo";
        description = "View our transparent SEO and growth marketing pricing plans tailored for scale.";
      } else if (pathParts[0] === 'about') {
        title = "About Ritehly Quimbo | The Growth Engineer behind the Code";
        description = "Learn more about Ritehly's mission to help PH businesses dominate global and local search.";
      }

      // Inject Meta Tags into Template
      const metaTags = `
    <title>${title}</title>
    <meta name="description" content="${description}">
    <meta name="keywords" content="${keywords}">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:image" content="${image}">
    <meta property="og:url" content="https://ritehlyquimbo.com${url}">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${description}">
    <meta name="twitter:image" content="${image}">
    <link rel="canonical" href="https://ritehlyquimbo.com${url}">
      `;

      // Replace placeholders or existing meta tags
      // This is a simple regex injection approach for the demo
      let html = template
        .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
        .replace(/<meta name="description" content=".*?">/, `<meta name="description" content="${description}">`)
        .replace('</head>', `${metaTags}\n</head>`);

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
