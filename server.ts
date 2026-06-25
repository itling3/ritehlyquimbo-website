
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
  app.use(async (req, res, next) => {
    if (req.url === '/api/seo-health') return next();
    const logMsg = `[${new Date().toISOString()}] ${req.method} ${req.url} (Path: ${req.path})\n`;
    await fs.appendFile(path.join(process.cwd(), 'server-boot-log.txt'), logMsg).catch(() => {});
    next();
  });

  app.get('/api/seo-health', (req, res) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
  });

  app.use(compression());

  const cmsRedirects: Record<string, string> = {
    '/services/wordpress-seo-expert': '/services/cms-seo/wordpress-seo-expert',
    '/services/drupal-seo-expert': '/services/cms-seo/drupal-seo-expert',
    '/services/joomla-seo-expert': '/services/cms-seo/joomla-seo-expert',
    '/services/typo3-seo-expert': '/services/cms-seo/typo3-seo-expert',
    '/services/ghost-seo-expert': '/services/cms-seo/ghost-seo-expert',
    '/services/craft-cms-seo-expert': '/services/cms-seo/craft-cms-seo-expert',
    '/services/concrete-cms-seo-expert': '/services/cms-seo/concrete-cms-seo-expert',
    '/services/modx-seo-expert': '/services/cms-seo/modx-seo-expert',
    '/services/contentful-cms-seo-expert': '/services/cms-seo/contentful-cms-seo-expert',
    '/services/storyblok-cms-seo-expert': '/services/cms-seo/storyblok-cms-seo-expert',
    '/services/shopify-seo-expert': '/services/cms-seo/shopify-seo-expert',
    '/services/woocommerce-seo-expert': '/services/cms-seo/woocommerce-seo-expert',
    '/services/webflow-seo-expert': '/services/cms-seo/webflow-seo-expert',
    '/services/wix-seo-expert': '/services/cms-seo/wix-seo-expert',
    '/services/squarespace-seo-expert': '/services/cms-seo/squarespace-seo-expert'
  };

  // Dedicated Redirect Middleware (Run BEFORE Vite or Static assets)
  app.use((req, res, next) => {
    let cp = req.path.toLowerCase();
    if (cp.length > 1 && cp.endsWith('/')) cp = cp.slice(0, -1);
    
    if (cmsRedirects[cp]) {
      return res.redirect(301, cmsRedirects[cp]);
    }
    next();
  });

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
  
  app.get('*all', async (req, res, next) => {
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
      let schemaJson: any = null;

      // Normalize path
      let cleanPath = (pathOnly || '/').toLowerCase();
      if (cleanPath.length > 1 && cleanPath.endsWith('/')) {
        cleanPath = cleanPath.slice(0, -1);
      }
      if (cleanPath === '') cleanPath = '/';

      if (cleanPath === '/') {
        schemaJson = [
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://ritehlyquimbo.com/#local-business",
            "name": "Ritehly Quimbo Precision Search Engineering",
            "image": "https://lh3.googleusercontent.com/d/16MsRTezCaczZBh9aG6sz3HqZTDB62ve_",
            "description": "Elite technical SEO, AI automation, and full-stack web development services. Specialized in hyper-local dominance and ROI-focused growth for ambitious brands.",
            "url": "https://ritehlyquimbo.com/",
            "telephone": "+639611525318",
            "email": "Ritehlyquimbo@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Cebu City",
              "addressRegion": "Cebu",
              "addressCountry": "PH"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 10.3157,
              "longitude": 123.8854
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Ritehly Quimbo",
            "jobTitle": "SEO Specialist & Growth Engineer",
            "description": "With 8 years of dedicated search experience, Ritehly Quimbo focuses 70% of his energy on high-level SEO Intelligence and 30% on Growth Engineering—building AI tools, web infrastructure, and Google Ads frameworks for SMBs.",
            "url": "https://ritehlyquimbo.com",
            "image": "https://lh3.googleusercontent.com/d/16MsRTezCaczZBh9aG6sz3HqZTDB62ve_",
            "email": [
              "mailto:seo@ritehlyquimbo.com",
              "mailto:Ritehlyquimbo@gmail.com"
            ],
            "telephone": "+639611525318"
          }
        ];
      }

      // Handle 404/Matching
      let pageData: any = null;

      const allServices = Object.values(SERVICE_DETAILS);
      const matchedService = allServices.find(s => {
        const p = s.permalink.toLowerCase();
        const sl = `/services/${s.slug.toLowerCase()}`;
        return cleanPath === p || cleanPath === sl;
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
        schemaJson = {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Ritehly Quimbo",
          "jobTitle": "SEO Specialist  | AI Specialist | Web Dev | Ads Specialist",
          "description": "Specialist in creating autonomous growth systems by merging 8 years of search intelligence with cutting-edge AI automation.",
          "url": "https://ritehlyquimboseoexpertphilippines.netlify.app/",
          "image": "https://lh3.googleusercontent.com/d/16MsRTezCaczZBh9aG6sz3HqZTDB62ve_",
          "email": [
            "mailto:seo@ritehlyquimbo.com",
            "mailto:Ritehlyquimbo@gmail.com"
          ],
          "telephone": "+639611525318",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Cebu City",
            "addressRegion": "Cebu",
            "postalCode": "6000",
            "addressCountry": "PH"
          },
          "knowsAbout": [
            "Technical SEO",
            "Topical Mapping",
            "AI Automation & Workflow Engineering",
            "Google Ads Optimization",
            "Full-Stack Web Development",
            "WordPress SEO",
            "Shopify SEO"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "SEO & Automation Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Keyword Research & Topical Maps SEO"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "AI Automation Specialist SEO"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Local SEO & Google Map Pack Dominance"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Full-Stack Web Dev SEO"
                }
              }
            ]
          },
          "sameAs": [
            "https://www.facebook.com/ritehly/",
            "https://www.youtube.com/@ritseo",
            "https://www.linkedin.com/in/ritehly-quimbo/",
            "https://www.quora.com/profile/Ritehly-Quimbo",
            "https://github.com/itling3",
            "https://www.behance.net/ritehly"
          ]
        };
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
      } else if (cleanPath.startsWith('/industry') || cleanPath.startsWith('/locations/') || cleanPath.startsWith('/blog/')) {
        // Dynamic title/description formatting for SSR
        const segments = cleanPath.split('/');
        const pageName = segments[segments.length - 1]
          .split('-')
          .map(w => w.charAt(0).toUpperCase() + w.slice(1))
          .join(' ');
        title = `${pageName === 'Industry' ? 'Industries' : pageName} SEO | Ritehly Quimbo Precision Search Engineering`;
        description = `High-conversion search solutions and organic performance blueprints customized for ${pageName === 'Industry' ? 'Industries' : pageName}. Rank top of Google Maps & drive qualified inbound channels.`;
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
    ${schemaJson ? `<script type="application/ld+json">${JSON.stringify(schemaJson)}</script>` : ''}
`;
      html = html.replace('</head>', `${extraMeta}</head>`);

      // Inject visual-hidden crawl map to make the entire site 100% crawlable by standard scraper spiders/Screaming Frog
      const crawlUrls = [
        '/',
        '/about',
        '/contact',
        '/resume',
        '/services',
        '/services/cms-seo',
        '/portfolio',
        '/portfolio/web-development',
        '/industry',
        '/industry/seo-services-for-roofers',
        '/industry/seo-services-for-electricians',
        '/industry/seo-services-for-financial-advisors',
        '/industry/seo-services-for-real-estate',
        '/industry/seo-services-for-hvac-companies',
        '/industry/seo-services-for-moving-companies',
        '/industry/seo-services-for-landscapers',
        '/industry/seo-services-for-window-cleaners',
        '/industry/seo-services-for-msps',
        '/industry/seo-services-for-plastic-surgeons',
        '/industry/seo-services-for-orthodontists',
        '/industry/seo-services-for-pest-control-companies',
        '/pricing',
        '/pricing/local-seo-strategy',
        '/pricing/ai-automation-plans',
        '/pricing/google-ads-sem',
        '/pricing/web-dev-packages',
        '/locations',
        '/blog',
        '/resources',
        '/resources/seo-audit-checklist',
        '/resources/actionable-seo-templates',
        '/resources/schema-generator',
        '/resources/google-core-updates',
        '/privacy-policy',
        '/terms-of-service',
        '/portfolio/mae-wellness-scaling-holistic-growth',
        '/portfolio/monstore-self-storage-uk',
        '/portfolio/excel-scotland-custom-homes',
        '/portfolio/kinloss-self-storage',
        '/portfolio/british-school-of-languages',
        '/portfolio/ryan-king-team-chattanooga-real-estate',
        '/services/cms-seo/wordpress-seo-expert',
        '/services/cms-seo/drupal-seo-expert',
        '/services/cms-seo/joomla-seo-expert',
        '/services/cms-seo/typo3-seo-expert',
        '/services/cms-seo/ghost-seo-expert',
        '/services/cms-seo/craft-cms-seo-expert',
        '/services/cms-seo/concrete-cms-seo-expert',
        '/services/cms-seo/modx-seo-expert',
        '/services/cms-seo/contentful-cms-seo-expert',
        '/services/cms-seo/shopify-seo-expert',
        '/services/cms-seo/storyblok-cms-seo-expert',
        '/services/cms-seo/woocommerce-seo-expert',
        '/services/cms-seo/webflow-seo-expert',
        '/services/cms-seo/wix-seo-expert',
        '/services/cms-seo/squarespace-seo-expert',
        '/services/keyword-research-intent-mapping',
        '/services/technical-on-page-seo-optimization',
        '/services/digital-pr-authority-backlinks',
        '/services/seo-content-creation-strategy',
        '/services/local-seo-specialist-google-maps',
        '/services/ecommerce-seo-specialist-sales-growth',
        '/services/google-ads-sem-ppc-management',
        '/services/ai-automation-specialist-business-scaling',
        '/services/b2b-lead-generation-sales-pipeline',
        '/services/virtual-assistant-operational-support',
        '/services/full-stack-web-development-seo-performance',
        '/services/topical-maps-semantic-authority',
        '/locations/seo-cebu',
        '/locations/seo-mandaue-city',
        '/locations/seo-lapu-lapu-city',
        '/locations/seo-talisay-city',
        '/locations/seo-manila',
        '/locations/seo-quezon-city',
        '/locations/seo-davao',
        '/locations/seo-makati-city',
        '/locations/seo-taguig',
        '/locations/seo-pasig-city',
        '/locations/seo-danao-city',
        '/locations/seo-services-minglanilla',
        '/blog/seo-lapu-lapu-city-how-local-seo-helps-businesses-rank',
        '/blog/seo-services-for-small-businesses-guide',
        '/blog/seo-services-for-lawyers-ultimate-guide',
        '/blog/seo-vs-ppc-what-is-better',
        '/blog/what-is-seo-full-form-digital-marketing'
      ];

      const htmlCrawlMap = `
    <!-- Crawl Map for Non-JS Crawlers & Screaming Frog -->
    <nav style="display:none;" aria-hidden="true" id="html-sitemap-crawl-map">
      ${crawlUrls.map(u => `<a href="${u}">${u === '/' ? 'Home' : u}</a>`).join('\n      ')}
    </nav>
`;
      html = html.replace('</body>', `${htmlCrawlMap}</body>`);

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
