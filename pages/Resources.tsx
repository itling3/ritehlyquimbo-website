import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, Check, Download, Copy, RotateCcw, FileText, 
  Globe, Search, Sparkles, Award, Terminal, CheckSquare, 
  Square, Calendar, HelpCircle, ArrowRight, ExternalLink, 
  Settings, CheckCircle2, ChevronRight, Info
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import SEO from '../components/SEO';

// Structure of Checklist Task
interface Task {
  id: string;
  category: 'technical' | 'onpage' | 'keyword' | 'offpage';
  name: string;
  description: string;
  importance: 'Critical' | 'High' | 'Medium';
}

const RESOURCES_SEO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "SEO Resources, Tools & Interactive Checklists | Ritehly Quimbo",
  "description": "Access free, highly actionable SEO calculators, interactive checklists, schema markup generator playground, templates, and Google Algorithm core updates logs.",
  "publisher": {
    "@type": "Person",
    "name": "Ritehly Quimbo",
    "url": "https://ritehlyquimboseoexpertphilippines.netlify.app/"
  }
};

interface GlossaryTerm {
  term: string;
  definition: string;
  letter: string;
  resourceId: 'checklist' | 'templates' | 'schema' | 'updates';
  resourceName: string;
}

const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: "Alt Attribute (Alt Text)",
    definition: "An HTML attribute applied to image tags to describe the graphic content. It helps search engines parse image subject matter and provides vital descriptions for screen readers.",
    letter: "A",
    resourceId: "checklist",
    resourceName: "Checklist: On-Page Essentials"
  },
  {
    term: "Algorithm Rollout",
    definition: "The launch and propagation of a search ranking system update. Broad core updates alter core neural retrieval signals and generally take 1 to 2 weeks to settle.",
    letter: "A",
    resourceId: "updates",
    resourceName: "Google Core Updates Timeline"
  },
  {
    term: "Canonical Tag",
    definition: "An HTML element (rel=\"canonical\") used to declare the original, master version of a page. It prevents duplication indexation issues across similar search paths.",
    letter: "C",
    resourceId: "checklist",
    resourceName: "Checklist: Technical SEO"
  },
  {
    term: "Content Brief",
    definition: "A comprehensive operational blueprint guiding writers. It structures specified heading levels, core entities, keyword mapping targets, and visual placements before drafting.",
    letter: "C",
    resourceId: "templates",
    resourceName: "Templates: Content Operations"
  },
  {
    term: "Core Web Vitals",
    definition: "Three speed and experience metrics compiled by Google: Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS).",
    letter: "C",
    resourceId: "checklist",
    resourceName: "Checklist: Technical SEO"
  },
  {
    term: "E-E-A-T",
    definition: "An evaluative concept from Google's Guidelines meaning Experience, Expertise, Authoritativeness, and Trustworthiness. It determines human editorial value.",
    letter: "E",
    resourceId: "updates",
    resourceName: "Google Core Updates Timeline"
  },
  {
    term: "JSON-LD",
    definition: "JavaScript Object Notation for Linked Data. A clean syntax used to write structural metadata easily processed by search crawlers.",
    letter: "J",
    resourceId: "schema",
    resourceName: "JSON-LD Schema Markup Generator"
  },
  {
    term: "Local Business Schema",
    definition: "A localized structured data blueprint specifying address, geo-coordinates, hours of operation, phone, and brand details for map presentation.",
    letter: "L",
    resourceId: "schema",
    resourceName: "JSON-LD Schema Markup Generator"
  },
  {
    term: "NAP Consistency",
    definition: "The exact matching alignment of your Name, Address, and Phone number profiles across business web properties and high-authority local directories.",
    letter: "N",
    resourceId: "checklist",
    resourceName: "Checklist: Local & Off-Page"
  },
  {
    term: "Robots.txt",
    definition: "A standard instructions file uploaded to the root directory explaining which folders crawl engines may access and which are restricted.",
    letter: "R",
    resourceId: "checklist",
    resourceName: "Checklist: Technical SEO"
  },
  {
    term: "Schema Markup",
    definition: "Specific vocabulary tags added to HTML schemas to alter the way search engines parse and display rich snippets within SERP components.",
    letter: "S",
    resourceId: "schema",
    resourceName: "JSON-LD Schema Markup Generator"
  },
  {
    term: "Topical Authority",
    definition: "A status earned by coverages mapping entire niches and user search journeys. Google ranks sites with dense, structurally mapped topical hubs instead of isolated pages.",
    letter: "T",
    resourceId: "templates",
    resourceName: "Templates: Topical Architecture"
  },
  {
    term: "XML Sitemap",
    definition: "A navigation list containing links to all vital canonical urls on a domain, guiding crawlers to find and index content quickly.",
    letter: "X",
    resourceId: "checklist",
    resourceName: "Checklist: Technical SEO"
  }
];

const ResourcesPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Map paths to tab IDs
  const getTabFromPath = (pathname: string): 'checklist' | 'templates' | 'schema' | 'updates' | 'index' => {
    if (pathname.includes('/resources/seo-audit-checklist')) return 'checklist';
    if (pathname.includes('/resources/actionable-seo-templates')) return 'templates';
    if (pathname.includes('/resources/schema-generator')) return 'schema';
    if (pathname.includes('/resources/google-core-updates')) return 'updates';
    return 'index';
  };

  const activeTab = getTabFromPath(location.pathname);

  const setActiveTab = (tabId: 'checklist' | 'templates' | 'schema' | 'updates' | 'index') => {
    const paths = {
      index: '/resources',
      checklist: '/resources/seo-audit-checklist',
      templates: '/resources/actionable-seo-templates',
      schema: '/resources/schema-generator',
      updates: '/resources/google-core-updates',
    };
    navigate(paths[tabId]);
  };

  useEffect(() => {
    // Reset scroll when path changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // --- TAB INDEX (GLOSSARY & SITEMAP) STATE ---
  const [glossaryLetter, setGlossaryLetter] = useState<string>('All');
  const [glossarySearch, setGlossarySearch] = useState<string>('');

  // --- TAB 4 STATE ---
  const [updatesYearFilter, setUpdatesYearFilter] = useState<string>('All');
  const [updatesSearchQuery, setUpdatesSearchQuery] = useState<string>('');
  const [updatesSortOrder, setUpdatesSortOrder] = useState<'oldest' | 'newest'>('newest');

  // --- TAB 1: INTERACTIVE SEO CHECKLIST STATE ---
  const initialTasks: Task[] = [
    // Technical
    { id: 'tech_1', category: 'technical', name: 'Google Search Console & Bing Webmaster Verification', description: 'Setup and verify your properties in GSC and Bing Webmaster Tools to track indexation and performance metrics.', importance: 'Critical' },
    { id: 'tech_2', category: 'technical', name: 'Submit Optimized Sitemap.xml', description: 'Create an XML sitemap of all canonical URLs and submit it inside Search Console for fast, accurate crawling.', importance: 'Critical' },
    { id: 'tech_3', category: 'technical', name: 'Inspect & Configure Robots.txt file', description: 'Setup robots.txt with disallows for admin nodes, a reference path pointing to your sitemap, and verify crawl paths.', importance: 'High' },
    { id: 'tech_4', category: 'technical', name: 'Install SSL Certificate & Enforce HTTPS Redirects', description: 'Secure user connections and align with Google’s site security rank signals. Verify 301 redirects from HTTP to HTTPS.', importance: 'Critical' },
    { id: 'tech_5', category: 'technical', name: 'Crawl Domain for Indexability & 404 Errors', description: 'Scan your site for broken internal links, duplicate canonical targets, and ensure no unintended noindex tags are present.', importance: 'High' },
    { id: 'tech_6', category: 'technical', name: 'Examine & Fix Core Web Vitals (INP, LCP, CLS)', description: 'Optimize CSS, defer non-critical JS/fonts, size images, and enhance web page responsiveness to meet speed criteria.', importance: 'High' },
    { id: 'tech_7', category: 'technical', name: 'Verify Mobile Responsiveness', description: 'Run audits to guarantee your template adjusts perfectly, touch-target dimensions are met, and elements do not bleed horizontally.', importance: 'Critical' },

    // On-Page
    { id: 'on_1', category: 'onpage', name: 'Match Search Intent & Primary Keyword in Meta Title', description: 'Ensure the primary keyword is located near the start of the title, styled to evoke visual CTR, under 60 characters.', importance: 'Critical' },
    { id: 'on_2', category: 'onpage', name: 'Formulate Persuasive CTR Meta Description', description: 'Draft a meta description under 155 characters featuring a definitive CTA, summarizing key topics, and targeting latent intent.', importance: 'High' },
    { id: 'on_3', category: 'onpage', name: 'Check H1 & Subheading Hierarchy Integrity', description: 'Confirm exactly one H1 exists matching the core topic, nested cleanly with H2 and H3 elements reflecting logical content flow.', importance: 'Critical' },
    { id: 'on_4', category: 'onpage', name: 'Incorporate Primary Keyword (First 100 Words)', description: 'Establish top-of-page search contextual signals immediately by including the topic or target entity in your intro paragraph.', importance: 'High' },
    { id: 'on_5', category: 'onpage', name: 'Optimize Image Alt Attributes for Screen Readers & Engines', description: 'Include natural, semantically keyword-inclusive alt text describing active graphics throughout. Prevent keyword-stuffing.', importance: 'High' },
    { id: 'on_6', category: 'onpage', name: 'Setup Descriptive Short URL Handles', description: 'Create clean, intuitive, lowercase URL structures containing only the core keyword and hyphens (avoid numerical dates/IDs).', importance: 'Critical' },
    { id: 'on_7', category: 'onpage', name: 'Apply Local/Service Schema Markup', description: 'Inject precise, valid JSON-LD context reflecting business configurations, author credentials, or article blueprints.', importance: 'Medium' },

    // Keyword & Content
    { id: 'key_1', category: 'keyword', name: 'Categorize Search Queries by Buyer Funnel Intent', description: 'Classify your primary targets as Informational, Commercial, Navigational, or Transactional before writing.', importance: 'High' },
    { id: 'key_2', category: 'keyword', name: 'Identify High-Volume / Low-Difficulty Keywords', description: 'Analyze search volume and keyword difficulty metrics using tools to identify long-tail sweet-spot queries.', importance: 'Critical' },
    { id: 'key_3', category: 'keyword', name: 'Map Out a Unified Topical Authority Hierarchy', description: 'Cluster keywords into comprehensive sub-groups, establishing clear parent-child topical relationships.', importance: 'Critical' },
    { id: 'key_4', category: 'keyword', name: 'Synthesize First-Page Competitor Content Length & Coverage', description: 'Analyze structural sub-topics and content length of top rankers. Design guides that are 10x better and more exhaustive.', importance: 'High' },
    { id: 'key_5', category: 'keyword', name: 'Draft a Structurally Complete Content Brief', description: 'Provide precise direction on required headings, required entities, word counts, and visual layouts to writers.', importance: 'Medium' },

    // Off-Page & Local
    { id: 'off_1', category: 'offpage', name: 'Claim & Fully Complete Google Business Profile (GBP)', description: 'Claim your GBP, input standard NAP profiles, select exact categories, upload photos, and verify verification.', importance: 'Critical' },
    { id: 'off_2', category: 'offpage', name: 'Audit Citation Consistency (Name, Address, Phone)', description: 'Eliminate local inconsistencies. Ensure NAP details on social accounts, directories, and your footer match exactly.', importance: 'High' },
    { id: 'off_3', category: 'offpage', name: 'Formulate a Verified Review Generation Cycle', description: 'Empower happy users to leave feedback containing crucial local keywords to build active Map Pack authority.', importance: 'High' },
    { id: 'off_4', category: 'offpage', name: 'Execute Link Gap Analysis Against Top Ranking Competitors', description: 'Discover overlapping domains referencing first-page competitor assets. Prioritize outreach targets accordingly.', importance: 'High' },
    { id: 'off_5', category: 'offpage', name: 'Build Natural Editorial Links via Targeted Outreach', description: 'Formulate personalized outreach campaigns offering informational content, original research, or value-adds.', importance: 'Medium' }
  ];

  const [completed, setCompleted] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('seo_checklist_progress');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [checklistFilter, setChecklistFilter] = useState<'all' | 'technical' | 'onpage' | 'keyword' | 'offpage'>('all');
  const [copiedNotification, setCopiedNotification] = useState(false);

  useEffect(() => {
    localStorage.setItem('seo_checklist_progress', JSON.stringify(completed));
  }, [completed]);

  const toggleTask = (id: string) => {
    setCompleted(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const resetChecklist = () => {
    if (window.confirm('Are you sure you want to reset all checklist progress?')) {
      setCompleted({});
    }
  };

  const getPercent = () => {
    const total = initialTasks.length;
    const checked = Object.values(completed).filter(Boolean).length;
    return total > 0 ? Math.round((checked / total) * 100) : 0;
  };

  const getFilteredTasks = () => {
    if (checklistFilter === 'all') return initialTasks;
    return initialTasks.filter(t => t.category === checklistFilter);
  };

  const exportChecklistMarkdown = () => {
    let markdown = `# Ritehly Quimbo’s Enterprise SEO Audit Report\n\nGenerated on: ${new Date().toLocaleDateString()}\nProgress: ${getPercent()}% Completed\n\n`;
    
    const categoriesLabels = {
      technical: 'Technical Essentials',
      onpage: 'On-Page Optimization',
      keyword: 'Keyword Research & Topical Map',
      offpage: 'Local SEO & Off-Page Dominance'
    };

    Object.entries(categoriesLabels).forEach(([catKey, label]) => {
      markdown += `## ${label}\n`;
      const catTasks = initialTasks.filter(t => t.category === catKey);
      catTasks.forEach(t => {
        const isDone = completed[t.id] ? '[x]' : '[ ]';
        markdown += `- ${isDone} **${t.name}** (${t.importance} priority)\n  _${t.description}_\n\n`;
      });
    });

    navigator.clipboard.writeText(markdown).then(() => {
      setCopiedNotification(true);
      setTimeout(() => setCopiedNotification(false), 2000);
    });
  };

  const downloadChecklistCSV = () => {
    let csv = 'Category,Task,Importance,Status,Description\n';
    initialTasks.forEach(t => {
      const status = completed[t.id] ? 'Completed' : 'Pending';
      // Clean quotes
      const cleanName = t.name.replace(/"/g, '""');
      const cleanDesc = t.description.replace(/"/g, '""');
      csv += `"${t.category.toUpperCase()}","${cleanName}","${t.importance}","${status}","${cleanDesc}"\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `seo_audit_checklist_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  // --- TAB 2: INTERACTIVE TEMPLATES STATE ---
  const [downloadingTemplate, setDownloadingTemplate] = useState<string | null>(null);

  const downloadTemplateCSV = (templateId: string, templateName: string) => {
    setDownloadingTemplate(templateId);
    setTimeout(() => {
      let csvData = '';
      if (templateId === 'topical_map') {
        csvData = 'Parent Category,Sub-Topic,Target Keyword,Search Intent,Monthly Search Volume,Keyword Difficulty (KD%),Target Page URL,Recommended Content Type\n' +
                  'Technical SEO,Core Web Vitals,Optimize INP Score,Informational,2400,34,/technical/optimize-inp-score,In-depth Guide\n' +
                  'Technical SEO,Core Web Vitals,Optimize LCP Metrics,Informational,1800,28,/technical/optimize-lcp-metrics,Technical Walkthrough\n' +
                  'Technical SEO,Indexing Errors,How to Fix Crawled Currently Not Indexed,Commercial Intent,5600,42,/technical/fix-crawled-currently-not-indexed,Problem-Solver Hub\n' +
                  'Local SEO,Google Maps Ranking,Claim Google Business Profile,Transactional,780,12,/local/claim-google-business-profile,Interactive Checklist\n' +
                  'On-Page SEO,Title Optimization,Best Custom Title Characters Length,Informational,390,15,/on-page/best-title-characters-length,Short Explainer\n' +
                  'AI Automation,Workflow Integrations,AI Agents to Automate Keyword Mapping,Commercial,850,22,/automation/ai-agents-keyword-mapping,Case Study';
      } else if (templateId === 'gsc_regex') {
        csvData = 'Goal,Regex Pattern,How to Use inside GSC Console,Sample Match Results\n' +
                  'Find Long Tail Questions,"^(who|what|where|why|how|when|is|are|can) ","Filter queries using Custom Regex matching to extract untapped FAQs.",how to hire a top remote technical seo specialist\n' +
                  'Strike-Distance High-Opportunity Keywords,.*,"Filter pages with positions between 11-20 inside GSC to discover low-hanging ranking gains. Add 3-5 high-relevance internal links.","Keywords resting on Page 2 ready to explode with on-page updates"\n' +
                  'Identify Navigational/Brand Splits,"(ritehly|quimbo|ritseo)","Expose navigational non-brand click shares vs organic branded trust.","ritehly quimbo seo philippines, ritehly seo audits"\n' +
                  'Intent Modifier Queries,"^(best|top|expert|agency|services|hire|buy|price|cost) ","Filter transactional keywords to direct straight to landing services page.","best enterprise seo services philippines, hire technical seo specialist"';
      } else if (templateId === 'screaming_frog') {
        csvData = 'Element,Configuration Parameter,Export Filter Rules,Priority Remediation Target\n' +
                  'Redirect Loops,Crawl Path Mapping,Find Status Code 301/302 chaining,Re-route directly to correct canonical target endpoint\n' +
                  'Broken Anchors,In-links Report,Source URLs yielding Status Code 404,Replace internal hyperlink anchor target with updated URL\n' +
                  'Missing Schema,Custom Extraction rules,Extract json-ld script nodes,Inject unified organization or developer structured schemas\n' +
                  'H1 Errors,Page Headers Report,Filter H1 length 0 or multi-H1 entries,Consolidate page structure into exactly one semantic H1 per url';
      } else {
        csvData = 'Heading Outline,Intent Target,Entity Targets,Word Count Goal,Internal Link Anchors,Primary Visual Layout\n' +
                  'H1: Ultimate Guide to Enterprise Platform SEO,High Informational,Enterprise CMS Core Web Vitals,3500 words,"Topical Maps Web Dev SEO",Interactive comparison grid\n' +
                  'H2: Core Architecture Bottlenecks in CMS Databases,Technical,"Database indexes caching latency",800 words,technical seo expert,Detailed execution logs terminal code';
      }

      const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${templateId}_blueprint_matrix.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDownloadingTemplate(null);
    }, 800);
  };


  // --- TAB 3: INTERACTIVE SCHEMA MARKUP PLAYGROUND STATE ---
  const [schemaType, setSchemaType] = useState<'LocalBusiness' | 'Organization' | 'Article' | 'WebSite'>('LocalBusiness');
  
  // LocalBusiness Fields
  const [lbName, setLbName] = useState('Ritehly Quimbo SEO Consultant');
  const [lbUrl, setLbUrl] = useState('https://ritehlyquimbo.com');
  const [lbPhone, setLbPhone] = useState('+639611525318');
  const [lbCity, setLbCity] = useState('Cebu City');
  const [lbCountry, setLbCountry] = useState('PH');
  const [lbImage, setLbImage] = useState('https://lh3.googleusercontent.com/d/16MsRTezCaczZBh9aG6sz3HqZTDB62ve_');

  // Organization Fields
  const [orgName, setOrgName] = useState('Enterprise Search Labs LLC');
  const [orgUrl, setOrgUrl] = useState('https://ritehlyquimbo.com');
  const [orgLogo, setOrgLogo] = useState('https://lh3.googleusercontent.com/d/16MsRTezCaczZBh9aG6sz3HqZTDB62ve_');
  const [orgLinkedIn, setOrgLinkedIn] = useState('https://www.linkedin.com/in/ritehly-quimbo/');

  // Article Fields
  const [artTitle, setArtTitle] = useState('Topical Mapping: The Enterprise Blueprint for Search Dominance');
  const [artAuthor, setArtAuthor] = useState('Ritehly Quimbo');
  const [artImage, setArtImage] = useState('https://lh3.googleusercontent.com/d/16MsRTezCaczZBh9aG6sz3HqZTDB62ve_');
  const [artDate, setArtDate] = useState('2026-05-22');

  // Website Fields
  const [wsName, setWsName] = useState('Ritehly Quimbo Tech SEO Expert');
  const [wsUrl, setWsUrl] = useState('https://ritehlyquimbo.com');

  const [schemaCopied, setSchemaCopied] = useState(false);

  // Computed JSON-LD Schema
  const getComputedSchema = () => {
    let schemaObj: any = {};
    if (schemaType === 'LocalBusiness') {
      schemaObj = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": lbName,
        "url": lbUrl,
        "image": lbImage,
        "telephone": lbPhone,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": lbCity,
          "addressCountry": lbCountry
        },
        "priceRange": "$$",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 10.3157,
          "longitude": 123.8854
        }
      };
    } else if (schemaType === 'Organization') {
      schemaObj = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": orgName,
        "url": orgUrl,
        "logo": orgLogo,
        "sameAs": [
          orgLinkedIn
        ]
      };
    } else if (schemaType === 'Article') {
      schemaObj = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": artTitle,
        "image": artImage,
        "author": {
          "@type": "Person",
          "name": artAuthor
        },
        "publisher": {
          "@type": "Organization",
          "name": lbName || "SEO Specialist",
          "logo": {
            "@type": "ImageObject",
            "url": lbImage
          }
        },
        "datePublished": artDate,
        "dateModified": new Date().toISOString().slice(0, 10)
      };
    } else {
      schemaObj = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": wsName,
        "url": wsUrl,
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${wsUrl}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      };
    }
    return JSON.stringify(schemaObj, null, 2);
  };

  const copySchemaToClipboard = () => {
    const code = getComputedSchema();
    const scriptTag = `<script type="application/ld+json">\n${code}\n</script>`;
    navigator.clipboard.writeText(scriptTag).then(() => {
      setSchemaCopied(true);
      setTimeout(() => setSchemaCopied(false), 2000);
    });
  };


  // --- TAB 4: GOOGLE ALGORITHM UPDATES TIMELINE DATA ---
  const googleUpdates = [
    {
      year: 2018,
      date: 'March 12, 2018',
      name: 'March 2018 Broad Core Update',
      type: 'Core Update',
      impact: 'High',
      color: 'border-blue-500/10 hover:border-blue-500/30 bg-blue-500/[0.01]',
      labelColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      description: 'Google officially confirmed a broad core search algorithm update aimed at highlighting high-quality content that provides rich context. It adjusted weighting for trust factors across informative pages, rewarding authoritative topical coverage.',
      remediation: 'Focus on improving overall content quality and detail rather than trying to optimize for specific keywords. Enrich meta descriptions and provide highly reliable answers.',
      sourceName: 'Ignite Visibility',
      sourceUrl: 'https://ignitevisibility.com/'
    },
    {
      year: 2018,
      date: 'August 1, 2018',
      name: 'August 2018 Broad Core Update ("Medic")',
      type: 'Core Update',
      impact: 'Critical',
      color: 'border-red-500/10 hover:border-red-500/30 bg-red-500/[0.01]',
      labelColor: 'bg-red-500/10 text-red-400 border-red-500/20',
      description: 'A massive core update that heavily affected health, medical, wellness, and financial websites (coined "Medic" by search analysts). This marked the initial major implementation of Google\'s E-A-T (Expertise, Authoritativeness, and Trustworthiness) standards, drastically shifting ranking distribution.',
      remediation: 'Build ironclad trust: Display verified author bios with credentials, reference medical peer reviews, display full institutional contact info, and cite high-trust external data sources.',
      sourceName: 'Ignite Visibility',
      sourceUrl: 'https://ignitevisibility.com/'
    },
    {
      year: 2019,
      date: 'March 12, 2019',
      name: 'March 2019 Broad Core Update',
      type: 'Core Update',
      impact: 'High',
      color: 'border-blue-500/10 hover:border-blue-500/30 bg-blue-500/[0.01]',
      labelColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      description: 'Refined the Medic updates to balance trust factors. Re-awarded certain medical and affiliate sites that had lost ranking share by validating general contextual value, establishing that search intent dominates raw authority metrics.',
      remediation: 'Match the specific intent behind the queries. If a keyword is informational, do not force promotional affiliate widgets above-the-fold.',
      sourceName: 'Search Engine Land',
      sourceUrl: 'https://searchengineland.com/'
    },
    {
      year: 2019,
      date: 'June 3, 2019',
      name: 'June 2019 Broad Core Update',
      type: 'Core Update',
      impact: 'High',
      color: 'border-orange-500/10 hover:border-orange-500/30 bg-orange-500/[0.01]',
      labelColor: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
      description: 'The first broad core update to be formally pre-announced by Google beforehand. Volatility was observed in major news aggregation platforms, alternative health niches, and heavy database directories.',
      remediation: 'De-duplicate broad database records, minimize interstitial advertisements, and improve user experience parameters (UX and mobile speed).',
      sourceName: 'Ignite Visibility',
      sourceUrl: 'https://ignitevisibility.com/'
    },
    {
      year: 2019,
      date: 'September 24, 2019',
      name: 'September 2019 Broad Core Update',
      type: 'Core Update',
      impact: 'Medium',
      color: 'border-purple-500/10 hover:border-purple-500/30 bg-purple-500/[0.01]',
      labelColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      description: 'A less volatile but steady update refining search signals. Impact was felt across content portals displaying high density of product ads or low-tier informational clusters.',
      remediation: 'Audit site-wide ratio of ads to real body content. Consolidate pages which have thin, duplicate, or outdated coverage into a robust single canonical resource.',
      sourceName: 'Search Engine Land',
      sourceUrl: 'https://searchengineland.com/'
    },
    {
      year: 2020,
      date: 'January 13–17, 2020',
      name: 'January 2020 Broad Core Update',
      type: 'Core Update',
      impact: 'High',
      color: 'border-blue-500/10 hover:border-blue-500/30 bg-blue-500/[0.01]',
      labelColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      description: 'Rebalanced broad relevance signals globally, adjusting how Google rates general brand trust and authority. Impacted thin reviews columns and portal networks.',
      remediation: 'Inject expert editorial oversight into all reviewing frameworks. Ensure review scores align with direct personal user testing or physical proof.',
      sourceName: 'Search Engine Roundtable',
      sourceUrl: 'https://www.seroundtable.com/'
    },
    {
      year: 2020,
      date: 'May 4–18, 2020',
      name: 'May 2020 Broad Core Update',
      type: 'Core Update',
      impact: 'Very High',
      color: 'border-orange-500/10 hover:border-orange-500/30 bg-orange-500/[0.01]',
      labelColor: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
      description: 'A highly volatile rollout following changes in global search behavior due to COVID-19. Heavily shifted local search maps, recipe sites, travel portals, and offline businesses shifting digital assets.',
      remediation: 'Claim local authority. Complete schema markup for physical stores, keep opening hours and listings consistent across directory networks.',
      sourceName: 'Search Engine Roundtable',
      sourceUrl: 'https://www.seroundtable.com/'
    },
    {
      year: 2020,
      date: 'December 3–16, 2020',
      name: 'December 2020 Broad Core Update',
      type: 'Core Update',
      impact: 'Very High',
      color: 'border-blue-500/10 hover:border-blue-500/30 bg-blue-500/[0.01]',
      labelColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      description: 'A major global update deployed right before the holiday season. Rerouted search queries to direct local listings while pushing down low-intensity content portals that lacked secure SSL footprints.',
      remediation: 'Ensure HTTPS is flawless. Use tools to check for mixed content HTTP/HTTPS assets on site load, speed up your hosting setup, and eliminate code latency.',
      sourceName: 'Search Engine Roundtable',
      sourceUrl: 'https://www.seroundtable.com/'
    },
    {
      year: 2021,
      date: 'June 2–12, 2021',
      name: 'June 2021 Broad Core Update',
      type: 'Core Update',
      impact: 'High',
      color: 'border-purple-500/10 hover:border-purple-500/30 bg-purple-500/[0.01]',
      labelColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      description: 'The first of a two-part core update rollout (with July being part two). Laid the deep technical foundation for Core Web Vitals (CWV) page experience assessment scoring processes.',
      remediation: 'Audit raw page speeds. Shorten CSS delivery pipelines, serve modern WebP images, defer third-party scripts, and ensure layout responsiveness.',
      sourceName: 'Search Engine Roundtable',
      sourceUrl: 'https://www.seroundtable.com/'
    },
    {
      year: 2021,
      date: 'July 1–12, 2021',
      name: 'July 2021 Broad Core Update',
      type: 'Core Update',
      impact: 'Medium',
      color: 'border-blue-500/10 hover:border-blue-500/30 bg-blue-500/[0.01]',
      labelColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      description: 'Part two of the twin-summer core update. Normalized indexing anomalies caused by June shifts, focusing on link relevance and entity authority matching within Google’s Knowledge Graph.',
      remediation: 'Perform strict external outbound link hygiene. Make sure you only link to certified, secure domains of high domain authority and relevance.',
      sourceName: 'Search Engine Roundtable',
      sourceUrl: 'https://www.seroundtable.com/'
    },
    {
      year: 2021,
      date: 'November 17–30, 2021',
      name: 'November 2021 Broad Core Update',
      type: 'Core Update',
      impact: 'Very High',
      color: 'border-orange-500/10 hover:border-orange-500/30 bg-orange-500/[0.01]',
      labelColor: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
      description: 'Deployed directly before major global holiday shopping weeks. Targeted transactional intent matching, drastically favoring online marketplaces with excellent UX and clear return policies.',
      remediation: 'Exhaustively clarify pricing structures, store refund/shipping rules, and optimize checkout forms for mobile touch accuracy.',
      sourceName: 'Search Engine Roundtable',
      sourceUrl: 'https://www.seroundtable.com/'
    },
    {
      year: 2022,
      date: 'May 25 – June 9, 2022',
      name: 'May 2022 Broad Core Update',
      type: 'Core Update',
      impact: 'Very High',
      color: 'border-red-500/10 hover:border-red-500/30 bg-red-500/[0.01]',
      labelColor: 'bg-red-500/10 text-red-400 border-red-500/20',
      description: 'Upgraded Google’s Natural Language Processing (NLP) capacities to weed out low-effort, mass AI content networks that lacked secondary verification. Refined semantic grouping calculations.',
      remediation: 'Avoid plain auto-generated texts. Feed AI tools with proprietary checklists, primary database rows, and unique quotes from industry professionals.',
      sourceName: 'Search Engine Roundtable',
      sourceUrl: 'https://www.seroundtable.com/'
    },
    {
      year: 2022,
      date: 'September 12–26, 2022',
      name: 'September 2022 Broad Core Update',
      type: 'Core Update',
      impact: 'High',
      color: 'border-indigo-500/10 hover:border-indigo-500/30 bg-indigo-500/[0.01]',
      labelColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
      description: 'Overlapped the major Helpful Content Update, targeting affiliate and informational blogs with excessive guest-posting links and zero unique value additions.',
      remediation: 'Devalue manual link schemes. Ensure your backlink profile grows naturally by writing shareable primary source materials (original stats, tools).',
      sourceName: 'Search Engine Roundtable',
      sourceUrl: 'https://www.seroundtable.com/'
    },
    {
      year: 2023,
      date: 'March 15–28, 2023',
      name: 'March 2023 Broad Core Update',
      type: 'Core Update',
      impact: 'Very High',
      color: 'border-indigo-500/10 hover:border-indigo-500/30 bg-indigo-500/[0.01]',
      labelColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
      description: 'Upgraded spam de-indexation layers. Shifted search shares significantly away from websites using programmatic SEO templates that generated thin mass location variations.',
      remediation: 'Inject localized unique maps, custom testimonials, specific local photos, and native details to programmatic pages to pass quality gates.',
      sourceName: 'Search Engine Roundtable',
      sourceUrl: 'https://www.seroundtable.com/'
    },
    {
      year: 2023,
      date: 'August 22 – September 7, 2023',
      name: 'August 2023 Broad Core Update',
      type: 'Core Update',
      impact: 'High',
      color: 'border-blue-500/10 hover:border-blue-500/30 bg-blue-500/[0.01]',
      labelColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      description: 'Refined brand footprints and authority thresholds. Re-allocated traffic to authoritative major brands while tightening local ranking filters for transactional clusters.',
      remediation: 'Optimize site-wide brand signals: build profiles on major citation nodes, claim social entities, and secure brand search volume.',
      sourceName: 'Search Engine Land',
      sourceUrl: 'https://searchengineland.com/'
    },
    {
      year: 2023,
      date: 'October 5–19, 2023',
      name: 'October 2023 Broad Core Update',
      type: 'Core Update',
      impact: 'Very High',
      color: 'border-orange-500/10 hover:border-orange-500/30 bg-orange-500/[0.01]',
      labelColor: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
      description: 'Rolled out side-by-side with a volatile Spam Update. Drastically reduced ranking metrics of domains containing large counts of low-effort product comparison hubs.',
      remediation: 'Provide clear, physical product evidence (e.g., photos showing you actually held/tested the items being compared on-page).',
      sourceName: 'Search Engine Land',
      sourceUrl: 'https://searchengineland.com/'
    },
    {
      year: 2023,
      date: 'November 2–28, 2023',
      name: 'November 2023 Broad Core Update',
      type: 'Core Update',
      impact: 'Very High',
      color: 'border-purple-500/10 hover:border-purple-500/30 bg-purple-500/[0.01]',
      labelColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      description: 'Integrated the helpfulness systems deeper within real-time crawling. Strongly penalized layouts featuring high-density ad placement, intrusive pop-ups, or floating marketing headers.',
      remediation: 'Shift secondary display banner ads beneath the folding margin. Ensure reading paths on mobile are completely unobstructed and scroll smoothly.',
      sourceName: 'Search Engine Land',
      sourceUrl: 'https://searchengineland.com/'
    },
    {
      year: 2024,
      date: 'March 5 – April 19, 2024',
      name: 'March 2024 Broad Core Update',
      type: 'Core Update',
      impact: 'Critical',
      color: 'border-red-500/10 hover:border-red-500/30 bg-red-500/[0.01]',
      labelColor: 'bg-red-500/10 text-red-400 border-red-500/20',
      description: 'An exceptionally long, tectonic core update (~45 days) that fully integrated the Helpful Content System into the core algorithm. Deleted over 40% of unhelpful, low-grade AI sites from index results & launched severe manual penalties.',
      remediation: 'Systematically prune thin, programmatic, or duplicate pages from your CMS. Re-invest solely in comprehensive, human-written guide hub clusters.',
      sourceName: 'Search Engine Land',
      sourceUrl: 'https://searchengineland.com/'
    },
    {
      year: 2024,
      date: 'August 15 – September 3, 2024',
      name: 'August 2024 Broad Core Update',
      type: 'Core Update',
      impact: 'Very High',
      color: 'border-green-500/10 hover:border-green-500/30 bg-green-500/[0.01]',
      labelColor: 'bg-green-500/10 text-green-400 border-green-500/20',
      description: 'Google reworked algorithm nodes specifically to highlight independent authors, creators, and small businesses sharing direct, first-hand expertise, aiming to balance corporate mega-brand dominance.',
      remediation: 'Add human stories, case study outcomes, step-by-step photos, and direct quotes from people detailing direct experiences.',
      sourceName: 'Search Engine Land',
      sourceUrl: 'https://searchengineland.com/'
    },
    {
      year: 2024,
      date: 'November 11 – December 5, 2024',
      name: 'November 2024 Broad Core Update',
      type: 'Core Update',
      impact: 'Very High',
      color: 'border-orange-500/10 hover:border-orange-500/30 bg-orange-500/[0.01]',
      labelColor: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
      description: 'Targeted Parasite SEO: the abuse of high-authority host domains to rank low-grade affiliate reviews in subleased folders (e.g. newspaper domains hosting third-party coupon sections).',
      remediation: 'Separate rented out domains. Clean up directories that host sponsored content mismatched with your theme\'s prime topical cluster.',
      sourceName: 'Search Engine Land',
      sourceUrl: 'https://searchengineland.com/'
    },
    {
      year: 2024,
      date: 'December 12–18, 2024',
      name: 'December 2024 Broad Core Update',
      type: 'Core Update',
      impact: 'High',
      color: 'border-blue-500/10 hover:border-blue-500/30 bg-blue-500/[0.01]',
      labelColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      description: 'Quick core correction and ranking stabilization rollout before the global holidays. Focused on fast spam devaluing metrics.',
      remediation: 'Eliminate over-optimized footer links and toxic mass guest-publishing anchors.',
      sourceName: 'Search Engine Land',
      sourceUrl: 'https://searchengineland.com/'
    },
    {
      year: 2025,
      date: 'March 13–27, 2025',
      name: 'March 2025 Broad Core Update',
      type: 'Core Update',
      impact: 'Very High',
      color: 'border-purple-500/10 hover:border-purple-500/30 bg-purple-500/[0.01]',
      labelColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      description: 'Devaluations for massive automated content clusters built solely for indexing scale without adding a shred of secondary value or expert source citation.',
      remediation: 'Implement strict verification: add expert review checkers, real citations, and original spreadsheet downloads of proprietary calculations.',
      sourceName: 'Search Engine Land',
      sourceUrl: 'https://searchengineland.com/'
    },
    {
      year: 2025,
      date: 'June 30 – July 17, 2025',
      name: 'June 2025 Broad Core Update',
      type: 'Core Update',
      impact: 'High',
      color: 'border-blue-500/10 hover:border-blue-500/30 bg-blue-500/[0.01]',
      labelColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      description: 'Rewarded platforms featuring comprehensive multi-modal assets – incorporating video step-by-steps, illustrative vectors, podcasts, and data downloads direct in layout views.',
      remediation: 'Level up content layouts: Embed helpful video walkthroughs, audio versions, and original diagrams inside informational posts.',
      sourceName: 'Search Engine Land',
      sourceUrl: 'https://searchengineland.com/'
    },
    {
      year: 2025,
      date: 'December 12–29, 2025',
      name: 'December 2025 Broad Core Update',
      type: 'Core Update',
      impact: 'High',
      color: 'border-orange-500/10 hover:border-orange-500/30 bg-orange-500/[0.01]',
      labelColor: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
      description: 'A major core integration tightening verification flags surrounding redirect pathways, expired domains, and author credential nodes footprint mapping.',
      remediation: 'Fix broken redirect schemas, ensure verified schema markers exist on all author bio card layout frameworks.',
      sourceName: 'Search Engine Land',
      sourceUrl: 'https://searchengineland.com/'
    },
    {
      year: 2026,
      date: 'March 27 – April 8, 2026',
      name: 'March 2026 Broad Core Update',
      type: 'Core Update',
      impact: 'Very High',
      color: 'border-red-500/10 hover:border-red-500/30 bg-red-500/[0.01]',
      labelColor: 'bg-red-500/10 text-red-400 border-red-500/20',
      description: 'Integration of highly complex semantic quality checks. Drastically pruned translated content columns that lacked verified references (e.g., auto-translating English hubs to regional languages without native localization edits), and further enforced spam protocols.',
      remediation: 'Hire professional localized transcreators to edit regional language content. Maintain exact cultural context, locally accurate citations, and eliminate mechanical translations.',
      sourceName: 'Search Engine Land',
      sourceUrl: 'https://searchengineland.com/'
    },
    {
      year: 2026,
      date: 'May 21, 2026 (Ongoing)',
      name: 'May 2026 Broad Core Update',
      type: 'Core Update',
      impact: 'Critical',
      color: 'border-orange-500/30 hover:border-orange-500/50 bg-orange-500/10 shadow-lg shadow-orange-500/10',
      labelColor: 'bg-orange-500/20 text-orange-400 border-orange-500/40',
      description: 'Began rolling out yesterday (May 21, 2026) and is expected to take up to two weeks to fully propagate. Early analysis points to intense tracking adjustments in search trends, neural intent matching structures, and elevating highly verified brand search shares.',
      remediation: 'Closely monitor indexing performance via Search Console. Keep content structures clean, avoid making rapid layout updates during rollout, and focus on building genuine organic brand trust indicators.',
      sourceName: 'Search Engine Roundtable',
      sourceUrl: 'https://www.seroundtable.com/'
    }
  ];

  // --- TAB 4 COMPUTED FILTER & SORT ---
  const filteredUpdates = googleUpdates.filter(upd => {
    const matchesYear = updatesYearFilter === 'All' || upd.year.toString() === updatesYearFilter;
    const searchString = `${upd.name} ${upd.description} ${upd.remediation} ${upd.sourceName} ${upd.date}`.toLowerCase();
    const matchesSearch = searchString.includes(updatesSearchQuery.toLowerCase());
    return matchesYear && matchesSearch;
  });

  const sortedUpdates = [...filteredUpdates].sort((a, b) => {
    const idxA = googleUpdates.indexOf(a);
    const idxB = googleUpdates.indexOf(b);
    return updatesSortOrder === 'newest' ? idxB - idxA : idxA - idxB;
  });

  const getSeoMetadata = (tab: 'checklist' | 'templates' | 'schema' | 'updates' | 'index') => {
    const meta = {
      index: {
        title: "SEO Resources Directory & Search Growth Glossary Hub | Ritehly Quimbo",
        description: "Official search marketing resource sitemap and SEO glossary curated by Ritehly Quimbo. Streamline content with templates, draft rich markup schemas, or track core update metrics.",
        keywords: "seo sitemap, seo glossary, ranking resources, content templates, organic tools, ritehly quimbo"
      },
      checklist: {
        title: "Direct SEO Audit Checklist & Core Ranking Benchmarks | Ritehly Quimbo",
        description: "Access Ritehly Quimbo's ultimate interactive SEO checklist. Audit your technical, on-page, keyword, and off-page structures to dominate Google ranking metrics.",
        keywords: "seo checklist, seo audit checklist, technical seo checklist, onpage seo checklist, ritehly quimbo"
      },
      templates: {
        title: "Proven SEO & Content Operations Templates | Ritehly Quimbo",
        description: "Download real-world, high-performance SEO templates, content briefs, outreach formats, and topical mapping schemas to accelerate your organic growth pipelines.",
        keywords: "seo templates, content briefs, blogger outreach templates, topical map templates, organic seo blueprints"
      },
      schema: {
        title: "JSON-LD Schema Markup Generator Wizard | Ritehly Quimbo",
        description: "Build perfectly compliant JSON-LD structured data for Local Business, Organization, and Professional Person profiles. Generate and copy schema instantly to boost SERP features.",
        keywords: "schema generator, json-ld generator, local business schema, organization schema, rich snippets generator"
      },
      updates: {
        title: "Google Broad Core Algorithm Updates Index | Ritehly Quimbo",
        description: "Stay ahead of search trends. Explore the historical broad core algorithm update timeline from 2018 up to the active system rollout, with remediation guidelines.",
        keywords: "google algorithm updates, google core updates timeline, google medic update, march core update, rank tracking"
      }
    };
    return meta[tab] || meta.index;
  };

  const seoData = getSeoMetadata(activeTab);

  return (
    <div className="min-h-screen bg-[#030712] pt-24 md:pt-32 pb-24 px-4 md:px-6">
      <SEO 
        title={seoData.title} 
        description={seoData.description} 
        keywords={seoData.keywords}
        schema={{
          ...RESOURCES_SEO_SCHEMA,
          "name": seoData.title,
          "description": seoData.description
        }}
      />

      {/* Decorative Glow Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 px-2 sm:px-4 lg:px-6">
        
        {/* Back Button */}
        {activeTab === 'index' && (
          <button 
            onClick={() => navigate('/')}
            className="group mb-8 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-500 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </button>
        )}

        {/* Hero Section */}
        {activeTab === 'checklist' ? (
          <div className="text-center mb-8 px-4 sm:px-6 max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-tight mb-4">
              SEO AUDIT <span className="text-orange-500">CHECKLIST</span>
            </h1>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              Use this interactive audit checklist to systematically analyze, track, and optimize your website's search performance. Ensure your technical setup, content quality, and link architecture adhere to the latest search ranking benchmarks for maximum visibility.
            </p>
          </div>
        ) : activeTab === 'templates' ? (
          <div className="text-center mb-8 px-4 sm:px-6 max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-tight mb-4">
              ACTIONABLE SEO <span className="text-orange-500">TEMPLATES</span>
            </h1>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              Accelerate your campaign workflows and overall content execution speed with these verified organic resource blueprints. Download or duplicate production-tested templates for writing detailed briefs, managing blogger networks, and creating functional B2B funnels.
            </p>
          </div>
        ) : activeTab === 'schema' ? (
          <div className="text-center mb-8 px-4 sm:px-6 max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-tight mb-4">
              SCHEMA MARKUP <span className="text-orange-500">GENERATOR</span>
            </h1>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              Generate flawless, search-engine-ready JSON-LD schema markup for your pages, business listings, or profile data in real time. Boost your rich snippet potential and establish unmistakable semantic entity relevance with structured scripts that are perfectly compliant with official Schema.org standards.
            </p>
          </div>
        ) : activeTab === 'updates' ? (
          <div className="text-center mb-8 px-4 sm:px-6 max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-tight mb-4">
              GOOGLE CORE <span className="text-orange-500">UPDATES</span>
            </h1>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              Track the official history, rollout timelines, and ranking fluctuations of major search engine algorithm changes. Equip your business with precise recovery procedures and E-E-A-T compliance guides to preserve organic traffic integrity.
            </p>
          </div>
        ) : (
          <div className="text-center mb-16 px-4 sm:px-6">
            <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest italic text-blue-400 mb-4 animate-pulse">
              <Sparkles className="w-3 h-3 text-blue-400" />
              Vetted Tools & Blueprints
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase italic tracking-tighter leading-none mb-6">
              GROWTH <span className="text-orange-500">RESOURCES</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Stop relying on generic, outdated advice. Access advanced tools, interactive audit checklists, ready-to-run schema generator wizards, and proven templates designed for pure search authority.
            </p>
          </div>
        )}

        {/* Navigation Tabs - GLOWING COSMIC SLATE TABS */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12 max-w-5xl mx-auto border border-white/5 bg-[#080c18]/80 p-2 rounded-2xl md:rounded-full backdrop-blur-md">
          {[
            { id: 'index', label: 'All Resources Hub', icon: <HelpCircle className="w-4 h-4" /> },
            { id: 'checklist', label: 'SEO Audit Checklist', icon: <CheckSquare className="w-4 h-4" /> },
            { id: 'templates', label: 'Actionable Templates', icon: <FileText className="w-4 h-4" /> },
            { id: 'schema', label: 'Schema Generator', icon: <Terminal className="w-4 h-4" /> },
            { id: 'updates', label: 'Google Core Updates', icon: <Globe className="w-4 h-4" /> },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 pointer-events-auto cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-orange-600 text-white shadow-[0_4px_20px_rgba(249,115,22,0.4)] hover:scale-102'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Tab Panel Container */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            
            {/* INDEX VIEW: SITEMAP & GLOSSARY DIRECTORY */}
            {activeTab === 'index' && (
              <motion.div
                key="index"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="space-y-16"
              >
                {/* 1. VISUAL SITEMAP MAP */}
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/5 pb-6">
                    <div>
                      <span className="text-[10px] text-orange-500 font-extrabold uppercase tracking-widest italic block mb-1">Navigation Sitemap</span>
                      <h2 className="text-2xl md:text-3xl font-black text-white uppercase italic tracking-tighter font-display">RESOURCE PILLARS</h2>
                    </div>
                    <p className="text-gray-400 text-xs md:text-sm max-w-md">
                      A visual guide mapping out all specialized search marketing assets available on this domain. Select a pillar below to begin.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "Interactive SEO Audit Checklist",
                        desc: "Systematically scan and verify your core technical, on-page, keyword, and local setups with client-side state memory.",
                        path: "checklist",
                        items: ["Interactive Checklist Checker", "Markdown Audit Report Exporter", "Spreadsheet CSV Download", "Core Web Vitals Benchmarks"],
                        icon: <CheckSquare className="w-5 h-5 text-orange-400" />
                      },
                      {
                        title: "Actionable Content & Growth Templates",
                        desc: "Get access to copy-ready layouts, outreach scripts, and content briefing schemas configured by Ritehly.",
                        path: "templates",
                        items: ["Topic Clustering & Master Sheet", "Enterprise Writing Content Brief", "Personalized Blogger Outreach", "B2B Lead Funnel Schema"],
                        icon: <FileText className="w-5 h-5 text-blue-400" />
                      },
                      {
                        title: "JSON-LD Schema Markup Generator",
                        desc: "Create perfectly optimized structured data metadata scripts to enable rich snippet awards in SERPs.",
                        path: "schema",
                        items: ["Local Business Blueprint", "Corporate Organization Schema", "Professional Person Profiles", "Compliant Article Scripts"],
                        icon: <Terminal className="w-5 h-5 text-amber-400" />
                      },
                      {
                        title: "Google Core Updates Timeline",
                        desc: "An exhaustive rolling reference log from 2018 onwards compiling rollout dates, community response, and fix methodologies.",
                        path: "updates",
                        items: ["Chronological Updates Feed", "E-E-A-T Compliance Guides", "Algorithmic Drift Mitigation Actions", "Community Reference Logs"],
                        icon: <Globe className="w-5 h-5 text-teal-400" />
                      }
                    ].map((pillar, i) => (
                      <div 
                        key={i} 
                        className="glass-morphism p-8 rounded-[2.5rem] border border-white/5 bg-[#080c18]/60 hover:border-orange-500/20 transition-all duration-300 flex flex-col justify-between"
                      >
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                              {pillar.icon}
                            </div>
                            <h3 className="text-lg font-black text-white uppercase italic tracking-tight">{pillar.title}</h3>
                          </div>
                          
                          <p className="text-gray-400 text-sm leading-relaxed">{pillar.desc}</p>
                          
                          <div className="space-y-2 pt-2">
                            <span className="text-[9px] text-gray-500 font-extrabold uppercase tracking-widest block">Featured Sections</span>
                            <div className="grid grid-cols-2 gap-2">
                              {pillar.items.map((it, idx) => (
                                <div key={idx} className="flex items-center gap-1.5 text-xs text-gray-300">
                                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500/60 grow-0 shrink-0"></span>
                                  <span className="truncate">{it}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="pt-6 border-t border-white/5 mt-6">
                          <button
                            onClick={() => setActiveTab(pillar.path as any)}
                            className="w-full py-3.5 bg-white/5 border border-white/10 hover:border-orange-500/30 hover:bg-orange-500/10 hover:text-white text-gray-300 text-xs font-black uppercase tracking-widest transition-all rounded-xl flex items-center justify-center gap-2 italic cursor-pointer"
                          >
                            <span>Open {pillar.title}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. SEO & GROWTH GLOSSARY */}
                <div className="glass-morphism p-8 md:p-12 rounded-[3.5rem] border border-white/5 bg-[#080c18]/40 space-y-8">
                  <div className="space-y-2">
                    <span className="text-[10px] text-blue-500 font-extrabold uppercase tracking-widest italic block">Terminological index</span>
                    <h2 className="text-2xl md:text-3xl font-black text-white uppercase italic tracking-tighter">
                      SEO & GROWTH <span className="text-orange-500">GLOSSARY</span>
                    </h2>
                    <p className="text-gray-400 text-sm max-w-2xl leading-relaxed">
                      A structured dictionary of essential organic marketing jargon and concepts. Each term is defined and mapped to client-side calculators or checklists where its strategy is directly executed.
                    </p>
                  </div>

                  {/* Interactive search and letter filter row */}
                  <div className="flex flex-col lg:flex-row gap-4 items-center border-t border-b border-white/5 py-6">
                    {/* Search field */}
                    <div className="relative w-full lg:w-80 shrink-0">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <input
                        type="text"
                        placeholder="Search glossary terms..."
                        value={glossarySearch}
                        onChange={(e) => setGlossarySearch(e.target.value)}
                        className="w-full bg-white/5 text-white border border-white/10 rounded-xl pl-11 pr-4 py-3 text-xs focus:outline-none focus:border-orange-500 font-medium placeholder-gray-500"
                      />
                    </div>

                    {/* A-Z selectors */}
                    <div className="flex flex-wrap items-center gap-1 w-full overflow-x-auto justify-start lg:justify-end py-1">
                      {['All', 'A', 'C', 'E', 'J', 'L', 'N', 'R', 'S', 'T', 'X'].map((letter) => (
                        <button
                          key={letter}
                          onClick={() => setGlossaryLetter(letter)}
                          className={`w-8 h-8 rounded-lg text-[10px] font-bold transition-all shrink-0 cursor-pointer ${
                            glossaryLetter === letter
                              ? 'bg-orange-600 text-white shadow-lg shadow-orange-500/20'
                              : 'text-gray-400 hover:bg-white/5 hover:text-white'
                          }`}
                        >
                          {letter}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Active glossary mapping list */}
                  <div className="grid md:grid-cols-2 gap-6 pt-4">
                    {GLOSSARY_TERMS.filter(item => {
                      const matchesSearch = item.term.toLowerCase().includes(glossarySearch.toLowerCase()) || 
                                           item.definition.toLowerCase().includes(glossarySearch.toLowerCase());
                      const matchesLetter = glossaryLetter === 'All' || item.letter === glossaryLetter;
                      return matchesSearch && matchesLetter;
                    }).map((g, idx) => (
                      <div key={idx} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-[#0c1224]/80 hover:border-white/10 transition-all duration-300 flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-md bg-orange-600/10 border border-orange-500/20 flex items-center justify-center text-[10px] font-black text-orange-400 shrink-0 select-none">
                              {g.letter}
                            </span>
                            <h4 className="text-sm font-black text-white uppercase tracking-tight">{g.term}</h4>
                          </div>
                          <p className="text-gray-400 text-xs leading-relaxed font-semibold">{g.definition}</p>
                        </div>

                        <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
                          <span className="text-[9px] text-gray-500 font-extrabold uppercase tracking-widest block font-mono">Reference</span>
                          <button
                            onClick={() => setActiveTab(g.resourceId)}
                            className="inline-flex items-center gap-1 text-[10px] font-black text-orange-400 hover:text-orange-300 transition-colors uppercase tracking-wider italic cursor-pointer"
                          >
                            <span>{g.resourceName}</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                    
                    {GLOSSARY_TERMS.filter(item => {
                      const matchesSearch = item.term.toLowerCase().includes(glossarySearch.toLowerCase()) || 
                                           item.definition.toLowerCase().includes(glossarySearch.toLowerCase());
                      const matchesLetter = glossaryLetter === 'All' || item.letter === glossaryLetter;
                      return matchesSearch && matchesLetter;
                    }).length === 0 && (
                      <div className="col-span-2 text-center py-12 text-gray-500 text-xs">
                        No glossary definitions match your search parameters.
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 1: INTERACTIVE AUDIT CHECKLIST */}
            {activeTab === 'checklist' && (
              <motion.div
                key="checklist"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="space-y-8"
              >
                
                {/* Stats Header Block */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="glass-morphism p-8 rounded-3xl border border-white/5 bg-white/5 relative overflow-hidden flex flex-col justify-between">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-2xl rounded-full"></div>
                    <div>
                      <span className="text-[10px] text-blue-500 font-extrabold uppercase tracking-widest italic block mb-2">Checklist Core Goal</span>
                      <h3 className="text-xl font-black text-white uppercase italic tracking-tight">Structured Performance Audit</h3>
                    </div>
                    <p className="text-gray-500 text-xs mt-4">Follow this list systematically from technical setup to off-page local trust to optimize indexing speed and ranking potentials.</p>
                  </div>

                  <div className="glass-morphism p-8 rounded-3xl border border-blue-500/20 bg-blue-600/5 relative overflow-hidden flex flex-col justify-between md:col-span-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[10px] text-orange-500 font-extrabold uppercase tracking-widest italic block mb-2">Self-Running Statistics</span>
                        <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter">Your Progress: {getPercent()}%</h3>
                      </div>
                      <div className="flex gap-2">
                        <button 
                          onClick={exportChecklistMarkdown}
                          className="p-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/12 hover:text-white transition-all text-xs text-gray-400 flex items-center gap-1.5 uppercase font-bold tracking-tight"
                          title="Copy Markdown Report to Clipboard"
                        >
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Markdown</span>
                        </button>
                        <button 
                          onClick={downloadChecklistCSV}
                          className="p-2.5 bg-orange-600/20 border border-orange-500/30 rounded-xl hover:bg-orange-600/30 text-orange-400 transition-all text-xs flex items-center gap-1.5 uppercase font-bold tracking-tight"
                          title="Download Spreadsheet"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Download CSV</span>
                        </button>
                        <button 
                          onClick={resetChecklist}
                          className="p-2.5 bg-red-600/10 border border-red-500/20 rounded-xl hover:bg-red-600/20 text-red-500 transition-all text-xs flex items-center justify-center p-2.5 font-bold"
                          title="Clear Checklist Progress"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-6">
                      <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-500"
                          style={{ width: `${getPercent()}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Filter & Listing Row */}
                <div className="glass-morphism p-8 rounded-[2.5rem] border border-white/5 bg-[#080c18]/40 space-y-6">
                  {/* Category select links */}
                  <div className="flex flex-wrap items-center gap-2 border-b border-white/5 pb-6">
                    <span className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em] mr-4">Filter Core Chapters:</span>
                    {[
                      { id: 'all', label: 'All Actions' },
                      { id: 'technical', label: 'Technical SEO' },
                      { id: 'onpage', label: 'On-Page Essentials' },
                      { id: 'keyword', label: 'Keyword/Content' },
                      { id: 'offpage', label: 'Local & Off-Page' }
                    ].map(f => (
                      <button
                        key={f.id}
                        onClick={() => setChecklistFilter(f.id as any)}
                        className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                          checklistFilter === f.id
                            ? 'bg-white/10 text-white font-black'
                            : 'text-gray-500 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>

                  {/* Notification toast */}
                  {copiedNotification && (
                    <div className="bg-green-600/20 border border-green-500/30 text-green-400 p-3 rounded-xl text-center text-xs font-bold animate-pulse">
                      ✓ Audit Checklist copied as markdown report to clipboard!
                    </div>
                  )}

                  {/* Active Tasks Grid */}
                  <div className="space-y-4">
                    {getFilteredTasks().map(task => {
                      const isCompleted = completed[task.id];
                      return (
                        <div 
                          key={task.id}
                          onClick={() => toggleTask(task.id)}
                          className={`group p-5 rounded-2xl border transition-all flex items-start gap-4 cursor-pointer hover:scale-[1.005] select-none ${
                            isCompleted 
                              ? 'bg-white/[0.01] border-white/5 opacity-50' 
                              : 'bg-white/5 border-white/10 hover:border-blue-500/30 hover:bg-[#0c1224]/80'
                          }`}
                        >
                          <div className="mt-1 flex-shrink-0">
                            {isCompleted ? (
                              <div className="w-5 h-5 rounded-md bg-green-600 flex items-center justify-center text-white scale-110 shadow-lg shadow-green-600/20">
                                <Check className="w-3.5 h-3.5 stroke-[4]" />
                              </div>
                            ) : (
                              <div className="w-5 h-5 rounded-md border border-white/30 hover:border-blue-500 transition-colors"></div>
                            )}
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                              <h4 className={`text-sm md:text-base font-bold ${isCompleted ? 'line-through text-gray-500' : 'text-white'}`}>
                                {task.name}
                              </h4>
                              <span className={`text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md border ${
                                task.importance === 'Critical' 
                                  ? 'bg-red-500/10 text-red-400 border-red-500/20' 
                                  : task.importance === 'High' 
                                  ? 'bg-orange-500/10 text-orange-400 border-orange-500/20' 
                                  : 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                              }`}>
                                {task.importance}
                              </span>
                            </div>
                            <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                              {task.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 2: INTERACTIVE ACTIONABLE TEMPLATES */}
            {activeTab === 'templates' && (
              <motion.div
                key="templates"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="grid md:grid-cols-2 gap-8"
              >
                {[
                  {
                    id: 'topical_map',
                    title: 'Keyword Clustering & Topical Authority Blueprint',
                    desc: 'Excel/Google Sheets starter matrix containing structured columns designed to map parent clusters, sub-topics, buyers funnel intent metrics, KD parameters, and target canonical slugs.',
                    features: ['Strict parent-child relationships', 'Pre-formatted intent filters', 'Clustering formula columns'],
                    tag: 'Topical Authority'
                  },
                  {
                    id: 'gsc_regex',
                    title: 'Google Search Console Regex Filter Cheat Sheet',
                    desc: 'Copy-paste regex codes to run directly inside GSC organic filters to isolate premium strike-distance rankings (position 11-20), clear informational interrogatives, or split brand/non-brand traffic share.',
                    features: ['Long-tail question isolation', 'Branded vs Generic categorizers', 'High-click CTR templates'],
                    tag: 'Console Intelligence'
                  },
                  {
                    id: 'screaming_frog',
                    title: 'Screaming Frog Enterprise Crawl Settings',
                    desc: 'Screaming Frog XML configurations list to prioritize technical audits: isolate duplicate meta strings, detect infinite status code 301 loops, find page indexing blockers, and export custom json-ld fields.',
                    features: ['API configurations checklist', 'Regex capture indicators', 'Optimized resource crawlers'],
                    tag: 'Technical Scraping'
                  },
                  {
                    id: 'content_brief',
                    title: 'Intent-Optimized High-Performance Content Brief',
                    desc: 'A complete content brief template ensuring freelance writers target the absolute core of Google intent. Guarantees structured heading nests, entity integrations, links anchors mapping, and CTRCTAs.',
                    features: ['Entity integrations schema', 'Competitive analysis blueprints', 'Pre-structured H2/H3 layouts'],
                    tag: 'Content Architecture'
                  }
                ].map(tmpl => (
                  <div 
                    key={tmpl.id} 
                    className="glass-morphism p-10 rounded-[2.5rem] border border-white/5 bg-[#080c18]/40 hover:border-blue-500/30 hover:bg-[#0c1224]/20 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <span className="text-[9px] text-blue-500 font-extrabold uppercase tracking-widest italic bg-blue-600/10 border border-blue-500/20 px-3 py-1 rounded-full">{tmpl.tag}</span>
                        <FileText className="w-5 h-5 text-gray-500" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-black text-white uppercase italic tracking-tight leading-tight mb-4">
                        {tmpl.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-6">
                        {tmpl.desc}
                      </p>
                      
                      <ul className="space-y-2 mb-8 border-t border-white/5 pt-6">
                        {tmpl.features.map((f, i) => (
                          <li key={i} className="flex items-center gap-3 text-xs text-gray-400 font-medium">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => downloadTemplateCSV(tmpl.id, tmpl.title)}
                      disabled={downloadingTemplate === tmpl.id}
                      className="w-full py-4 bg-orange-600 text-white hover:bg-orange-700 disabled:bg-orange-600/50 font-black rounded-xl uppercase tracking-widest text-[11px] flex items-center justify-center gap-2 italic shadow-lg shadow-orange-500/20 active:scale-95 transition-all text-sm pointer-events-auto cursor-pointer"
                    >
                      {downloadingTemplate === tmpl.id ? (
                        <>
                          <RotateCcw className="w-4 h-4 animate-spin text-white" />
                          <span>Generating Blueprint...</span>
                        </>
                      ) : (
                        <>
                          <Download className="w-4 h-4 text-white" />
                          <span>Download CSV Blueprint</span>
                        </>
                      )}
                    </button>
                  </div>
                ))}
              </motion.div>
            )}

            {/* TAB 3: SCHEMA GENERATOR PLAYGROUND */}
            {activeTab === 'schema' && (
              <motion.div
                key="schema"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="grid lg:grid-cols-12 gap-8 items-start"
              >
                
                {/* Form Input Side */}
                <div className="lg:col-span-5 glass-morphism p-8 rounded-[2.5rem] border border-white/5 bg-[#080c18]/40 space-y-6">
                  <div>
                    <span className="text-[10px] text-orange-500 font-extrabold uppercase tracking-widest italic block mb-1">Interactive Sandbox</span>
                    <h3 className="text-2xl font-black text-white uppercase italic tracking-tight">Structured Markups</h3>
                  </div>

                  {/* Schema Type selector buttons */}
                  <div className="grid grid-cols-2 gap-2 border-b border-white/5 pb-6">
                    {(['LocalBusiness', 'Organization', 'Article', 'WebSite'] as const).map(type => (
                      <button
                        key={type}
                        onClick={() => setSchemaType(type)}
                        className={`py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                          schemaType === type
                            ? 'bg-orange-600 text-white'
                            : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        {type === 'LocalBusiness' ? 'Local Business' : type === 'WebSite' ? 'Web Site' : type}
                      </button>
                    ))}
                  </div>

                  {/* Dynamic Fields Form */}
                  <div className="space-y-4">
                    {schemaType === 'LocalBusiness' && (
                      <>
                        <div className="space-y-1">
                          <label className="text-[10px] text-gray-500 font-extrabold uppercase tracking-widest">Business Name</label>
                          <input type="text" value={lbName} onChange={e => setLbName(e.target.value)} className="w-full bg-white/5 text-white border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 font-bold" />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] text-gray-500 font-extrabold uppercase tracking-widest">Web Address (URL)</label>
                          <input type="text" value={lbUrl} onChange={e => setLbUrl(e.target.value)} className="w-full bg-white/5 text-white border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 font-mono" />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] text-gray-500 font-extrabold uppercase tracking-widest">Phone Number</label>
                          <input type="text" value={lbPhone} onChange={e => setLbPhone(e.target.value)} className="w-full bg-white/5 text-white border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 font-bold" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <label className="text-[10px] text-gray-500 font-extrabold uppercase tracking-widest">City</label>
                            <input type="text" value={lbCity} onChange={e => setLbCity(e.target.value)} className="w-full bg-white/5 text-white border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 font-bold" />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] text-gray-500 font-extrabold uppercase tracking-widest">Country Code (ISO)</label>
                            <input type="text" value={lbCountry} onChange={e => setLbCountry(e.target.value)} className="w-full bg-white/5 text-white border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 font-bold" />
                          </div>
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] text-gray-500 font-extrabold uppercase tracking-widest">Representative Image URL</label>
                          <input type="text" value={lbImage} onChange={e => setLbImage(e.target.value)} className="w-full bg-white/5 text-white border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 font-mono" />
                        </div>
                      </>
                    )}

                    {schemaType === 'Organization' && (
                      <>
                        <div className="space-y-1">
                          <label className="text-[10px] text-gray-500 font-extrabold uppercase tracking-widest">Organization Name</label>
                          <input type="text" value={orgName} onChange={e => setOrgName(e.target.value)} className="w-full bg-white/5 text-white border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 font-bold" />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] text-gray-500 font-extrabold uppercase tracking-widest">Primary Domain URL</label>
                          <input type="text" value={orgUrl} onChange={e => setOrgUrl(e.target.value)} className="w-full bg-white/5 text-white border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 font-mono" />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] text-gray-500 font-extrabold uppercase tracking-widest">Logo Branding URL</label>
                          <input type="text" value={orgLogo} onChange={e => setOrgLogo(e.target.value)} className="w-full bg-white/5 text-white border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 font-mono" />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] text-gray-500 font-extrabold uppercase tracking-widest">LinkedIn Profile (sameAs)</label>
                          <input type="text" value={orgLinkedIn} onChange={e => setOrgLinkedIn(e.target.value)} className="w-full bg-white/5 text-white border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 font-mono" />
                        </div>
                      </>
                    )}

                    {schemaType === 'Article' && (
                      <>
                        <div className="space-y-1">
                          <label className="text-[10px] text-gray-500 font-extrabold uppercase tracking-widest">Article Title / Headline</label>
                          <input type="text" value={artTitle} onChange={e => setArtTitle(e.target.value)} className="w-full bg-white/5 text-white border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 font-bold" />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] text-gray-500 font-extrabold uppercase tracking-widest">Author Person Name</label>
                          <input type="text" value={artAuthor} onChange={e => setArtAuthor(e.target.value)} className="w-full bg-white/5 text-white border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 font-bold" />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] text-gray-500 font-extrabold uppercase tracking-widest">Hero Image Attachment</label>
                          <input type="text" value={artImage} onChange={e => setArtImage(e.target.value)} className="w-full bg-white/5 text-white border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 font-mono" />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] text-gray-500 font-extrabold uppercase tracking-widest">Publication Date (YYYY-MM-DD)</label>
                          <input type="text" value={artDate} onChange={e => setArtDate(e.target.value)} className="w-full bg-white/5 text-white border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 font-bold" />
                        </div>
                      </>
                    )}

                    {schemaType === 'WebSite' && (
                      <>
                        <div className="space-y-1">
                          <label className="text-[10px] text-gray-500 font-extrabold uppercase tracking-widest">Website Label</label>
                          <input type="text" value={wsName} onChange={e => setWsName(e.target.value)} className="w-full bg-white/5 text-white border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 font-bold" />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] text-gray-500 font-extrabold uppercase tracking-widest">Primary URL</label>
                          <input type="text" value={wsUrl} onChange={e => setWsUrl(e.target.value)} className="w-full bg-white/5 text-white border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 font-mono" />
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Output Visual Panel */}
                <div className="lg:col-span-7 glass-morphism p-8 rounded-[2.5rem] border border-blue-500/20 bg-[#0c1224]/80 flex flex-col justify-between self-stretch">
                  <div className="space-y-4 flex-1 flex flex-col">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-orange-500" />
                        <span className="text-white text-xs font-black uppercase tracking-wider font-mono">Output code: &lt;script&gt; JSON-LD</span>
                      </div>
                      <span className="text-gray-500 text-[10px] uppercase font-black tracking-widest font-mono">Validate Ready</span>
                    </div>

                    <div className="flex-1 bg-black/60 rounded-2xl border border-white/10 p-6 font-mono text-xs text-orange-400 overflow-x-auto min-h-[320px] max-h-[450px] whitespace-pre flex flex-col">
                      <div className="text-gray-500 select-none pb-2">&lt;script type="application/ld+json"&gt;</div>
                      <div className="flex-1 overflow-y-auto select-all text-gray-300">
                        {getComputedSchema()}
                      </div>
                      <div className="text-gray-500 select-none pt-2">&lt;/script&gt;</div>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="mt-6 flex flex-col sm:flex-row gap-4 border-t border-white/5 pt-6 select-none">
                    <button
                      onClick={copySchemaToClipboard}
                      className="flex-1 py-4 bg-orange-600 hover:bg-orange-700 text-white font-black rounded-xl uppercase tracking-widest text-xs flex items-center justify-center gap-2 italic pointer-events-auto cursor-pointer"
                    >
                      <Copy className="w-4 h-4 text-white" />
                      <span>{schemaCopied ? 'Script Copied!' : 'Copy Script Tag'}</span>
                    </button>
                    <a
                      href="https://validator.schema.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black rounded-xl uppercase tracking-widest text-xs flex items-center justify-center gap-2 italic"
                    >
                      <ExternalLink className="w-4 h-4 text-gray-400" />
                      <span>Validate Markup</span>
                    </a>
                  </div>

                  {schemaCopied && (
                    <p className="text-[10px] text-green-400 font-extrabold uppercase tracking-widest text-center mt-3 animate-pulse">
                      ✓ Script Tag with wrapping elements successfully copied to clipboard!
                    </p>
                  )}
                </div>

              </motion.div>
            )}

            {/* TAB 4: GOOGLE CORE UPDATES TIMELINE */}
            {activeTab === 'updates' && (
              <motion.div
                key="updates"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="space-y-8"
              >
                {/* Intro Ribbon & Stats block */}
                <div className="glass-morphism p-8 rounded-[2.5rem] border border-orange-500/20 bg-orange-600/5 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-[120px] rounded-full"></div>
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-orange-600/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                      <Globe className="w-6 h-6 text-orange-400 animate-pulse" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-white uppercase italic tracking-tight">Broad Core Updates Index</h3>
                      <p className="text-gray-400 text-sm">Chronological reference tracker listing historical broad core algorithm shifts from 2018 up to the current active environment.</p>
                    </div>
                  </div>
                  <a
                    href="https://developers.google.com/search/updates"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 bg-white text-black font-black hover:bg-gray-200 transition-all text-xs rounded-xl uppercase tracking-widest italic flex items-center gap-2"
                  >
                    <span>Google release logs</span>
                    <ExternalLink className="w-3.5 h-3.5 text-black" />
                  </a>
                </div>

                {/* Important Historical Caveat Banner */}
                <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 flex gap-4 items-start relative overflow-hidden">
                  <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/30 text-blue-400 mt-1 flex-shrink-0">
                    <Info className="w-3 h-3" />
                  </div>
                  <div>
                    <span className="text-[10px] text-blue-400 font-extrabold uppercase tracking-widest block mb-1">Timeline Scope & Target Criteria</span>
                    <p className="text-[13px] text-gray-400 leading-relaxed">
                      Google began formally confirming "broad core updates" in March 2018, which is why the list starts there — earlier algorithm shifts (Panda, Penguin, Hummingbird, RankBrain, etc.) predate the "core update" naming convention. Since 2024, the cadence has settled into roughly 3–4 core updates per year, often with overlapping spam updates and reviews updates in between.
                    </p>
                  </div>
                </div>

                {/* Interactive Controls Bar Card */}
                <div className="glass-morphism p-6 rounded-3xl border border-white/5 bg-[#080c18]/60 space-y-4">
                  <div className="flex flex-col lg:flex-row gap-4 items-center">
                    {/* Search box */}
                    <div className="relative w-full lg:flex-1">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <input
                        type="text"
                        placeholder="Search updates by keywords, text, dates, or publishers (e.g. Medic, Land)..."
                        value={updatesSearchQuery}
                        onChange={(e) => setUpdatesSearchQuery(e.target.value)}
                        className="w-full bg-white/5 text-white border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-sm focus:outline-none focus:border-orange-500 font-medium placeholder-gray-500"
                      />
                    </div>

                    {/* Sorting Toggle button */}
                    <div className="flex gap-2 w-full lg:w-auto shrink-0">
                      <button
                        onClick={() => setUpdatesSortOrder(prev => prev === 'newest' ? 'oldest' : 'newest')}
                        className="flex-1 lg:flex-initial flex items-center justify-center gap-2 px-6 py-3.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 text-white font-black text-xs uppercase tracking-widest transition-all cursor-pointer"
                      >
                        <span>Sort: {updatesSortOrder === 'newest' ? 'Newest First' : 'Oldest First'}</span>
                      </button>
                      <button
                        onClick={() => {
                          setUpdatesSearchQuery('');
                          setUpdatesYearFilter('All');
                        }}
                        className="p-3.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 text-gray-400 hover:text-white transition-all cursor-pointer"
                        title="Reset Filters"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Horizontal scrolling Year filters */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-white/5">
                    <span className="text-[10px] text-gray-500 font-extrabold uppercase tracking-widest mr-2">Filter Year:</span>
                    {['All', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026'].map(year => (
                      <button
                        key={year}
                        onClick={() => setUpdatesYearFilter(year)}
                        className={`px-3.5 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                          updatesYearFilter === year
                            ? 'bg-orange-600/20 border border-orange-500/50 text-orange-400'
                            : 'bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-white/8'
                        }`}
                      >
                        {year}
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-between items-center text-xs text-gray-400 font-mono">
                    <span>Showing {sortedUpdates.length} of {googleUpdates.length} core updates</span>
                    {updatesYearFilter !== 'All' || updatesSearchQuery ? (
                      <button
                        onClick={() => {
                          setUpdatesSearchQuery('');
                          setUpdatesYearFilter('All');
                        }}
                        className="text-orange-500 hover:underline font-bold transition-all"
                      >
                        Clear Filters
                      </button>
                    ) : null}
                  </div>
                </div>

                {/* Timeline Layout */}
                {sortedUpdates.length > 0 ? (
                  <div className="relative pl-6 md:pl-12 border-l-2 border-white/5 space-y-10">
                    {sortedUpdates.map((upd, idx) => (
                      <div key={idx} className="relative group">
                        {/* Interactive indicator dot */}
                        <div className="absolute -left-[31px] md:-left-[55px] top-1.5 w-4 h-4 rounded-full bg-[#030712] border-2 border-orange-500 z-10 group-hover:scale-120 group-hover:bg-orange-500 transition-all duration-300"></div>

                        <div className={`p-8 rounded-[2.5rem] border ${upd.color} transition-all space-y-4`}>
                          <div className="flex flex-wrap items-center justify-between gap-4">
                            <div className="space-y-1">
                              <span className="text-[10px] text-gray-500 font-extrabold uppercase tracking-widest">{upd.date} update log</span>
                              <h4 className="text-xl md:text-2xl font-black text-white uppercase italic tracking-tight leading-relaxed">
                                {upd.name}
                              </h4>
                            </div>
                            
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="text-[9px] font-black uppercase tracking-widest px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400">{upd.type}</span>
                              <span className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 border rounded-full ${
                                upd.impact === 'Critical'
                                  ? 'bg-red-500/20 text-red-400 border-red-500/30'
                                  : upd.impact === 'Very High'
                                  ? 'bg-orange-500/20 text-orange-400 border-orange-500/30'
                                  : upd.impact === 'High'
                                  ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                                  : 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                              }`}>{upd.impact} Impact</span>
                              
                              {/* Publisher Link Badge */}
                              <a
                                href={upd.sourceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest px-3 py-1 bg-white/5 border border-white/10 hover:border-orange-500/40 text-gray-400 hover:text-white rounded-full transition-all"
                              >
                                <span>Source: {upd.sourceName}</span>
                                <ExternalLink className="w-2.5 h-2.5 text-gray-500" />
                              </a>
                            </div>
                          </div>

                          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                            {upd.description}
                          </p>

                          <div className="pt-4 border-t border-white/5 flex items-start gap-4">
                            <div className="w-8 h-8 rounded-lg bg-orange-600/10 flex items-center justify-center shrink-0 border border-orange-500/20">
                              <Info className="w-4 h-4 text-orange-400" />
                            </div>
                            <div>
                              <span className="text-[10px] text-orange-500 font-extrabold uppercase tracking-widest block mb-1">Expert Recommended Remediation Action</span>
                              <p className="text-gray-300 text-xs md:text-sm leading-relaxed">{upd.remediation}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 glass-morphism border border-white/5 rounded-3xl bg-[#080c18]/40">
                    <p className="text-gray-400 text-base">No core updates match your search filters.</p>
                    <button
                      onClick={() => {
                        setUpdatesSearchQuery('');
                        setUpdatesYearFilter('All');
                      }}
                      className="mt-4 px-6 py-2.5 bg-orange-600 text-white font-black rounded-lg text-xs uppercase tracking-widest italic"
                    >
                      Reset Search Filters
                    </button>
                  </div>
                )}

              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

export default ResourcesPage;
