import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ChevronDown, 
  Search, 
  Zap, 
  ShieldCheck, 
  MousePointer2, 
  Flame, 
  Lock,
  BarChart3,
  TrendingUp,
  AlertTriangle,
  Users,
  Globe,
  Star,
  Cpu,
  RefreshCw,
  LayoutGrid,
  FileText,
  Workflow,
  Plus
} from 'lucide-react';
import SEO from '../components/SEO';

const WixSEOExpert: React.FC<{ onBook: () => void }> = ({ onBook }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(prev => prev === idx ? null : idx);
  };

  const faqs = [
    {
      question: "Do I need to migrate from Wix to WordPress to rank?",
      answer: "Absolutely not. Wix's infrastructure handles hosting, security, and automated caching perfectly. It’s what you build on top of it that counts. You can achieve page-one rankings without the developer overhead or maintenance headaches of WordPress."
    },
    {
      question: "Can you implement custom schema on Wix?",
      answer: "Yes, using advanced SEO Settings, we can override default presets with custom JSON-LD structured data for precise entity definitions, local markup, or rich shopping snippets."
    },
    {
      question: "How do you handle 301 redirects during a migration to Wix?",
      answer: "We utilize Wix's native bulk URL Redirect Manager to map up to 500 URLs simultaneously, preventing link equity loss and ensuring continuous indexation without organic ranking drop-offs."
    },
    {
      question: "Is Wix good for technical SEO?",
      answer: "Yes. Wix allows advanced technical optimization including custom robots.txt files, direct canonical overrides, nested schema injection, and Server-Side Rendering (SSR) patterns using Velo dynamic scripting."
    },
    {
      question: "Can Wix handle large e-commerce SEO campaigns?",
      answer: "Absolutely. Wix Stores offers dynamic collections, faceted category logic, and automated URL nesting. We optimize these CMS-driven patterns to prevent product duplicate bloat and maximize crawl budgets."
    },
    {
      question: "Does Wix support custom structured data?",
      answer: "Yes. Structured data in Wix goes beyond simple title presets. We write and deploy hand-optimized JSON-LD for rich snippets, organization graphs, products, services, and question entities."
    },
    {
      question: "How long does Wix SEO take to show results?",
      answer: "Initial technical changes and crawlers re-indexing (like GSC syncing) show up in 14 to 30 days. Broad topical authority gains and major industry keywords take between 3 and 6 months to mature."
    },
    {
      question: "Can you improve Core Web Vitals on Wix?",
      answer: "Yes. Many slow Wix sites suffer from bloated third-party apps, uncompressed media elements, or bad execution order. We streamline interactive latencies and image sizing to pass Core Web Vitals."
    },
    {
      question: "Does Wix support programmatic SEO?",
      answer: "Yes, by utilizing Velo CMS database collections, we can build hundreds of high-quality automated landing pages mapped to custom URL parameters to scale search coverage effortlessly."
    },
    {
      question: "Can Wix rank for competitive keywords?",
      answer: "Yes. Wix ranks just as well as any other CMS. With advanced technical structure, perfect internal link maps, and strong topical depth, Wix sites routinely beat legacy platforms in highly competitive niches."
    },
    {
      question: "What is the best Wix SEO strategy for local businesses?",
      answer: "We recommend tight Google Business Profile synchronization, NAP schema deployments, localized service-area landing pages, and automated schema injection to dominate map pack packs."
    }
  ];

  const caseStudies = [
    {
      niche: "Local E-Commerce Brand",
      challenge: "Dynamic product URL bloat & missing product schema",
      growth: "+140% in 90 days",
      milestone: "Ranked #1 for primary category"
    },
    {
      niche: "B2B Professional Services",
      challenge: "Slow mobile load times & poor Core Web Vitals",
      growth: "Passed CWV Mobile (Good)",
      milestone: "Captured 15+ high-intent map rankings"
    },
    {
      niche: "Multi-Location Business",
      challenge: "Fragmented local listings & unoptimized site structure",
      growth: "+85% local map calls",
      milestone: "Automated 50+ city-specific landing pages"
    }
  ];

  const beforeAfterMetrics = [
    { label: "Largest Contentful Paint (LCP)", before: "5.8s", after: "1.9s", status: "Pass" },
    { label: "Cumulative Layout Shift (CLS)", before: "0.28", after: "0.04", status: "Good" },
    { label: "Interaction to Progress (INP)", before: "390ms", after: "90ms", status: "Fast" },
    { label: "Search Console Indexation Rate", before: "42%", after: "99.4%", status: "Optimized" }
  ];

  // Schema-embedded metadata
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://ritehlyquimbo.com/services/cms-seo/wix-seo-expert/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://ritehlyquimbo.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://ritehlyquimbo.com/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "CMS SEO",
            "item": "https://ritehlyquimbo.com/services/cms-seo"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Wix SEO Expert",
            "item": "https://ritehlyquimbo.com/services/cms-seo/wix-seo-expert"
          }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://ritehlyquimbo.com/#organization",
        "name": "Ritehly Quimbo",
        "url": "https://ritehlyquimbo.com",
        "logo": "https://lh3.googleusercontent.com/d/1_UNdAwA40hce9EZ6i72RxVNCYAaLDAEo",
        "sameAs": [
          "https://github.com/ritehlyquimbo"
        ]
      },
      {
        "@type": "Person",
        "@id": "https://ritehlyquimbo.com/#author",
        "name": "Ritehly Quimbo",
        "jobTitle": "Wix SEO Expert & Technical Optimization Specialist",
        "worksFor": {
          "@id": "https://ritehlyquimbo.com/#organization"
        }
      },
      {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Service",
          "name": "Wix SEO Expert Custom Audit & Strategy Optimization"
        },
        "author": {
          "@type": "Person",
          "name": "Samantha Cruz",
          "jobTitle": "Marketing Director"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "We had a heavy Wix shop and our organic sales had stalled. Within 60 days of partnering on advanced Wix SEO tuning and custom schema implementation, our organic traffic soared by +140% and our Core Web Vitals fully turned green. Absolute lifesaver."
      },
      {
        "@type": "FAQPage",
        "@id": "https://ritehlyquimbo.com/services/cms-seo/wix-seo-expert/#faq",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer
          }
        }))
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white overflow-hidden">
      <SEO 
        title="Wix SEO Expert | Advanced Wix Optimization Specialist"
        description="Looking to scale your organic traffic? As a technical Wix SEO expert, I specialize in custom schema, Core Web Vitals tuning, and dynamic page indexing."
        keywords="Wix SEO expert, Wix SEO specialist, technical Wix SEO, Wix SEO consultant, advanced Wix SEO services, Wix Core Web Vitals, Wix structured data, Wix schema markup, Wix technical SEO, Wix SEO optimization, Wix SEO services, Wix page speed optimization, Wix SEO agency, Wix local SEO, Wix e-commerce SEO"
        schema={combinedSchema}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(59,130,246,0.15),transparent_70%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-[10px] font-black uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Wix Performance Framework
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.9] mb-6">
              Wix SEO Expert: <span className="text-blue-500 hover:text-white transition-colors duration-500">Turn Your Wix Site Into a Lead-Generation Machine</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed mb-8 max-w-xl">
              Stop fighting the platform. Get the advanced technical optimization, custom schema, and high-performance speed tuning your Wix site needs to rank on page one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={onBook}
                className="px-8 py-5 bg-orange-600 hover:bg-orange-700 text-white font-black rounded-2xl transition-all shadow-2xl shadow-orange-500/30 uppercase tracking-tighter text-base flex items-center justify-center gap-3 group"
              >
                <span>Book a Free Wix SEO Audit</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={onBook}
                className="px-8 py-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all font-black uppercase tracking-tighter text-base"
              >
                Request a Custom Strategy Plan
              </button>
            </div>
            
            <div className="flex items-center gap-6 opacity-60 grayscale scale-90 origin-left">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-blue-500 fill-blue-500" />
                <span className="text-xs font-black uppercase italic">100% Core Web Vitals pass rate on Wix mobile</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Before/After speed metric card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 glass-morphism rounded-[2.5rem] border border-white/10 p-4 md:p-6 shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] bg-[#0f172a]/40">
              <div className="bg-[#030712] rounded-2xl p-6 border border-white/5">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-black uppercase tracking-tight font-mono">Wix Core Web Vitals Tuning</span>
                  </div>
                  <div className="text-[10px] font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded font-mono">PASS (MOBILE GOOD)</div>
                </div>
                
                <div className="space-y-4">
                  {beforeAfterMetrics.map((m, idx) => (
                    <div key={idx} className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between font-mono">
                      <div>
                        <div className="text-[10px] text-gray-500 uppercase font-black">{m.label}</div>
                        <div className="text-xs text-gray-400 mt-0.5">Optimization Check</div>
                      </div>
                      <div className="flex items-center gap-4 text-right">
                        <div>
                          <span className="text-red-500 line-through text-xs font-bold">{m.before}</span>
                          <span className="text-gray-400 text-xs mx-1">→</span>
                          <span className="text-green-400 text-sm font-black italic">{m.after}</span>
                        </div>
                        <span className="text-[9px] bg-green-500/20 text-green-400 font-bold px-2 py-0.5 rounded uppercase">{m.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-12 border-y border-white/5 bg-[#030712]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] text-center mb-8 italic">We Scale Wix Across Multiple Platforms</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            {['Wix CMS', 'Google Console', 'Ahrefs', 'Semrush', 'Screaming Frog', 'Velo Custom Code'].map((brand, i) => (
              <span key={i} className="text-xl md:text-2xl font-black text-white uppercase italic tracking-tighter">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Overcoming the Objections (The "Wix Can't Rank" Myth) */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4 italic">Defeating the Stigma</h2>
              <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none mb-6">
                Yes, Wix Can Rank on Google. <span className="text-blue-500">You Just Need the Right Framework.</span>
              </p>
              <div className="text-gray-400 text-lg font-medium leading-relaxed space-y-6">
                <p>
                  Let’s address the elephant in the room: the outdated myth that Wix sites can’t rank. Data tells a completely different story. 
                </p>
                <p>
                  According to the official <a href="https://almanac.httparchive.org/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Web Almanac report</a> by HTTP Archive, Wix sites achieve perfect median Lighthouse SEO scores, performing at the top tier of all modern content management systems. 
                </p>
                <p>
                  While Wix provides robust automatic infrastructure out of the box—complete with automated WebP image compression, high-performance server-side rendering (SSR), and dynamic XML sitemaps—reaching page one requires strategic execution. It takes an expert framework to configure complex nested schemas, optimize dynamic dynamic collections, and build unshakeable topical authority.
                </p>
              </div>
            </div>
            
            <div className="glass-morphism p-10 rounded-[2.5rem] border border-white/5 bg-[#0f172a]/20">
              <h3 className="text-xl font-black text-white uppercase italic tracking-tight mb-6">Embedded Testimonial</h3>
              <blockquote className="border-l-4 border-blue-500 pl-6 space-y-4">
                <p className="text-gray-300 italic text-lg">
                  "Our organic leads completely exploded once we optimization-proofed our Wix site. We passed mobile Core Web Vitals and scaled categories we never thought we could compete in!"
                </p>
                <cite className="block text-sm not-italic mt-4">
                  <span className="font-black text-white uppercase italic tracking-wider">Samantha Cruz</span>
                  <span className="block text-xs text-gray-500">Marketing Director</span>
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2.5: Why Most Wix SEO Campaigns Fail */}
      <section className="py-24 px-4 md:px-6 bg-[#080c18] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4 italic">Behind the Failures</h2>
            <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter">Why Most Wix Websites <span className="text-blue-500">Never Reach Page One</span></p>
            <p className="text-gray-400 text-sm italic font-medium max-w-xl mx-auto mt-4">
              Most Wix sites don’t fail because of the platform itself — they fail because they rely only on surface-level, plug-in-heavy optimizations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 pb-10 rounded-[2rem] bg-white/5 border border-white/5">
              <h3 className="text-lg font-black text-red-500 uppercase italic tracking-widest mb-6 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500" /> Basic Campaigns Stop At:
              </h3>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold block mt-0.5">•</span>
                  <span>Basic title tags without user search intent map</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold block mt-0.5">•</span>
                  <span>Generic keyword insertion and stuffing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold block mt-0.5">•</span>
                  <span>Plugin-heavy app installations that block rendering speeds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold block mt-0.5">•</span>
                  <span>Untargeted blog content missing topical mapping depth</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold block mt-0.5">•</span>
                  <span>Default automated schema presets with no custom entity markup</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold block mt-0.5">•</span>
                  <span>Poor internal linking architecture that isolates pages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold block mt-0.5">•</span>
                  <span>Unoptimized database dynamic collections</span>
                </li>
              </ul>
            </div>

            <div className="p-8 pb-10 rounded-[2rem] bg-blue-600/5 border border-blue-500/20">
              <h3 className="text-lg font-black text-blue-400 uppercase italic tracking-widest mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-400" /> Modern Google Algorithms Evaluate:
              </h3>
              <ul className="space-y-4 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold block mt-0.5">✓</span>
                  <span>Comprehensive site architecture mapping</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold block mt-0.5">✓</span>
                  <span>Real-world entity relationships and trust indicators</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold block mt-0.5">✓</span>
                  <span>Passing marks on all Core Web Vitals on mobile</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold block mt-0.5">✓</span>
                  <span>Optimized index crawl efficiency and server execution rendering</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold block mt-0.5">✓</span>
                  <span>Expert-written structured data quality containing nested markup</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold block mt-0.5">✓</span>
                  <span>Niche-wide topical depth and semantically relevant content cluster schemes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold block mt-0.5">✓</span>
                  <span>User interaction and interface rendering signals</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-xs uppercase text-gray-500 tracking-[0.2em] font-bold">
              Supporting Terms Utilized In Our Audits: <span className="text-white">crawl budget optimization</span> • <span className="text-white">rendering efficiency</span> • <span className="text-white">semantic relevance</span> • <span className="text-white">internal link architecture</span> • <span className="text-white">content clustering</span> • <span className="text-white">entity-based SEO</span>
            </p>
          </div>
        </div>
      </section>

      {/* Section: Wix SEO vs WordPress SEO */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4 italic">Direct Comparison</h2>
            <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter">Wix SEO vs WordPress: <span className="text-blue-500">Which Platform Actually Performs Better?</span></p>
            <p className="text-gray-400 text-sm font-medium max-w-2xl mx-auto mt-4">
              WordPress offers extremely deep individual server-level control, but dynamic modern Wix infrastructure completely eliminates many of the complex technical hosting burdens businesses historically suffered.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/5">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/10 border-b border-white/10 text-xs font-black uppercase text-blue-400 tracking-wider">
                  <th className="p-6">SEO Factor</th>
                  <th className="p-6">Wix Platform Solution</th>
                  <th className="p-6">WordPress CMS Solution</th>
                </tr>
              </thead>
              <tbody className="text-sm font-medium text-gray-300">
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-6 font-black text-white uppercase font-mono tracking-tight">Hosting Optimization</td>
                  <td className="p-6 text-green-400">Managed Automatically with secure CDN</td>
                  <td className="p-6 text-orange-400">Manual setup & hosting configuration costs</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-6 font-black text-white uppercase font-mono tracking-tight">Security Maintenance</td>
                  <td className="p-6 text-green-400">Fully Automated, safe core structures</td>
                  <td className="p-6 text-orange-400">Plugin and manual patch dependent (High risk)</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-6 font-black text-white uppercase font-mono tracking-tight">Server-Side Rendering</td>
                  <td className="p-6 text-green-400">Built-in instantly on Wix Nodes</td>
                  <td className="p-6 text-orange-400">Server environment & custom code dependent</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-6 font-black text-white uppercase font-mono tracking-tight">Core Web Vitals Optimization</td>
                  <td className="p-6 text-green-400">Strong speed out of the box</td>
                  <td className="p-6 text-orange-400">Theme setup dependent (Prone to bad code)</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-6 font-black text-white uppercase font-mono tracking-tight">Technical Maintenance</td>
                  <td className="p-6 text-green-400">Extremely Low overhead</td>
                  <td className="p-6 text-orange-400">Very High (Requires constant plugin updates)</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-6 font-black text-white uppercase font-mono tracking-tight">Schema Flexibility</td>
                  <td className="p-6 text-green-400">Advanced custom schema overrides via Velo</td>
                  <td className="p-6 text-green-500">Unlimited via theme files or plugins</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-6 font-black text-white uppercase font-mono tracking-tight">Plugin Dependency</td>
                  <td className="p-6 text-green-400">Minimal (Most things built natively)</td>
                  <td className="p-6 text-red-500">Often Excessive (Prone to security loops)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12 p-8 rounded-[2rem] bg-blue-600/5 border border-blue-500/20 text-center">
            <h3 className="text-xl font-bold uppercase italic text-white mb-4">The Strategic Reality</h3>
            <p className="text-gray-400 max-w-3xl mx-auto text-sm leading-relaxed">
              The real, sustained organic ranking advantage no longer comes from your choice of CMS itself. Instead, it is built upon foundational SEO components: 
              <strong> topical authority</strong>, <strong> technical execution</strong>, <strong> schema implementation</strong>, 
              <strong> internal linking systems</strong>, <strong> content quality</strong>, and <strong> entity trust signals</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Core Service Offerings (The Technical Pillars) */}
      <section className="py-24 px-4 md:px-6 bg-[#080c18] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4 italic">Execution Focus</h2>
            <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter">Comprehensive Wix SEO Services <span className="text-blue-500">Designed for Scale</span></p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Technical Architecture & Core Web Vitals",
                desc: "We focus on optimizing server-side rendering efficiencies, cleaning up heavy code bloat caused by unnecessary or bloated third-party Wix apps, and drafting clean, dynamic XML sitemaps."
              },
              {
                title: "Programmatic & Dynamic Page SEO",
                desc: "We configure automated meta-tag generation templates, secure taxonomy structures, and advanced custom URL architecture rules for Wix Stores or custom dynamic database collections."
              },
              {
                title: "Advanced Entity & Schema Markup",
                desc: "We write and deploy pristine hand-crafted JSON-LD structured data mapping for Local Businesses, Products, FAQs, and global Organization entities to secure Google Rich Snippets."
              },
              {
                title: "AI Search Optimization & Visibility Tracking",
                desc: "We analyze site-wide information retrieval properties so your brand is correctly crawled, understood, categorized, and cited across AI-driven engines like Gemini and Perplexity."
              }
            ].map((p, idx) => (
              <div key={idx} className="p-8 rounded-[2rem] bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center text-blue-500 mb-6">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black uppercase text-white tracking-tight mb-4">{p.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed font-mono">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Your Signature Workflow */}
      <section className="py-24 px-4 md:px-6 bg-[#030712]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4 italic">The Framework</h2>
            <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter">The Step-by-Step <span className="text-blue-500">Wix Optimization Framework</span></p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 font-black italic">
            {[
              {
                phase: "Phase 1",
                title: "Comprehensive Wix Technical Audit",
                desc: "We analyze the site's complete indexing health using modern Wix Bot Log Reports. We identify crawl traps, indexing black holes (like rogue page-level noindex tags), or canonical routing issues."
              },
              {
                phase: "Phase 2",
                title: "GSC and Local Profile Synchronization",
                desc: "We claim domain properties and map custom dynamic XML sitemaps directly inside Google Search Console via the native dashboard, while matching GBP NAP values for local dominance."
              },
              {
                phase: "Phase 3",
                title: "Dynamic On-Page & Schema Automation",
                desc: "We establish scalable, automated templated SEO page settings. We write dynamic variables for title and description tags, deploying automated schema rules for rich snippet captures."
              },
              {
                phase: "Phase 4",
                title: "Topical Authority & Content Stacking",
                desc: "We map critical search intent questions, isolate keyword content gaps, and execute systematic topical content stacking utilizing the Wix Blog CMS engine to become an industry authority."
              }
            ].map((s, idx) => (
              <div key={idx} className="p-8 rounded-[2rem] bg-white/5 border border-white/5 hover:border-blue-500/20 transition-all">
                <div className="text-xs uppercase font-mono text-blue-500 tracking-widest mb-2 font-black">{s.phase}</div>
                <h3 className="text-lg font-black text-white uppercase tracking-tight mb-4">{s.title}</h3>
                <p className="text-xs font-mono font-medium leading-relaxed text-gray-400 not-italic">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4.5: AI Search & Generative Engine Optimization */}
      <section className="py-24 px-4 md:px-6 bg-[#080c18] border-y border-white/5 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-[10px] font-black uppercase tracking-widest mb-6">
            Future-Proof Search (GEO)
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none mb-6">
            Optimize Your Wix Site for <span className="text-blue-500">AI Search Engines</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-8">
            Modern search intent has shifted. Users increasingly discover and evaluate brands not only through blue links, but through dynamic summaries provided by Google AI Overviews, ChatGPT, Gemini, Perplexity, Claude, and voice search systems.
          </p>
          
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-left mb-8 max-w-2xl mx-auto space-y-4 font-mono text-sm text-gray-300">
            <p className="font-bold text-white text-base">Key Technical AI Optimization Vectors:</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> structured entity markup</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> semantic HTML hierarchy</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> FAQ schema injection</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> organization schema patterns</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> author entity associations</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> clean content chunking</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> citation-friendly formatting</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> topical map architecture</div>
            </div>
          </div>

          <p className="text-xl font-black italic text-white uppercase tracking-tight max-w-xl mx-auto underline decoration-blue-500 decoration-4 underline-offset-8">
            "I optimize Wix websites not only for rankings, but for discoverability across the next generation of AI-powered search experiences."
          </p>
        </div>
      </section>

      {/* Section 4.8: Wix SEO for Different Business Types */}
      <section className="py-24 px-4 md:px-6 bg-[#030712]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4 italic">Industry Specialization</h2>
            <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter">Specialized Wix SEO Services <span className="text-blue-500">by Industry</span></p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Wix SEO for Local Businesses",
                items: ["Google Business Profile synchronization", "local landing pages", "NAP consistency", "local schema markup", "map pack optimization"]
              },
              {
                title: "Wix SEO for E-Commerce Stores",
                items: ["dynamic product schema", "collection page optimization", "faceted navigation control", "product review markup", "category keyword architecture"]
              },
              {
                title: "Wix SEO for Professional Services",
                items: ["authority content hubs", "lead-generation funnels", "conversion-focused landing pages", "EEAT optimization", "trust signal integration"]
              },
              {
                title: "Wix SEO for Multi-Location Companies",
                items: ["scalable city landing pages", "local entity clustering", "geo-targeted schema", "automated CMS deployment"]
              }
            ].map((box, idx) => (
              <div key={idx} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/5 flex flex-col justify-between hover:border-blue-500/20 transition-all">
                <div>
                  <h3 className="text-lg font-black uppercase text-white mb-6 border-b border-white/10 pb-4">{box.title}</h3>
                  <ul className="space-y-3 font-mono text-xs text-gray-400 list-none">
                    {box.items.map((it, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-500">•</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4.9: Technical SEO Features You Can Implement on Wix */}
      <section className="py-24 px-4 md:px-6 bg-[#080c18] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4 italic">No Limits</h2>
            <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter">Advanced Technical SEO Capabilities <span className="text-blue-500">Available on Wix</span></p>
            <p className="text-gray-400 text-sm mt-4 italic">Most agency competitors lack the technical insight to fully utilize these capabilities inside the Wix dashboard.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs uppercase tracking-wider text-gray-300">
            {[
              "Custom robots meta directives",
              "Dynamic XML sitemap generation",
              "Canonical tag control",
              "Bulk redirect management",
              "Schema injection using custom code",
              "Dynamic meta variables",
              "CMS-driven SEO templates",
              "Open Graph optimization",
              "Automated image compression",
              "Mobile rendering optimization",
              "Structured breadcrumb markup",
              "FAQ rich snippet eligibility",
              "Product rich result implementation",
              "LocalBusiness schema deployment"
            ].map((f, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4.95: Core Web Vitals & Speed Optimization */}
      <section className="py-24 px-4 md:px-6 bg-[#030712]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4 italic">Speed Engineering</h2>
            <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter">Wix Core Web Vitals <span className="text-blue-500">Optimization Services</span></p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-400 text-sm">
              <p className="text-lg text-white font-black italic">
                Page speed is no longer just an administrative metric — it directly impacts search engine index rankings, overall crawl efficiency, actual web conversion rates, and long-term customer retention.
              </p>
              <p>
                Our hands-on optimization process includes:
              </p>
              <ul className="space-y-3 font-mono text-xs">
                <li className="flex items-center gap-2"><span className="text-blue-500">■</span> reducing third-party app overhead</li>
                <li className="flex items-center gap-2"><span className="text-blue-500">■</span> optimizing JavaScript execution pathways</li>
                <li className="flex items-center gap-2"><span className="text-blue-500">■</span> improving Largest Contentful Paint (LCP) performance</li>
                <li className="flex items-center gap-2"><span className="text-blue-500">■</span> minimizing Layout Shifts (CLS) visual jitter</li>
                <li className="flex items-center gap-2"><span className="text-blue-500">■</span> lazy-loading media assets and responsive sizing</li>
                <li className="flex items-center gap-2"><span className="text-blue-500">■</span> reducing render-blocking resources</li>
                <li className="flex items-center gap-2"><span className="text-blue-500">■</span> optimizing mobile interaction latency (INP)</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-blue-600/5 border border-blue-500/20 text-center">
              <h3 className="text-lg font-black uppercase text-white mb-4">The Real Performance Culprit</h3>
              <p className="text-xs font-mono text-gray-400 leading-relaxed mb-6">
                "Many Wix sites fail Core Web Vitals because of unnecessary animations, oversized media files, and bloated integrations — not because of the platform itself."
              </p>
              <button onClick={onBook} className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-black text-xs uppercase italic tracking-widest rounded-xl transition-all">
                Test My Wix Site Speed
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4.96: Internal Linking & Topical Authority */}
      <section className="py-24 px-4 md:px-6 bg-[#080c18] border-y border-white/5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4 italic">Topic Cluster Logic</h2>
          <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none mb-6">
            Building Topical Authority <span className="text-blue-500">on Wix</span>
          </p>
          <p className="text-gray-400 text-base max-w-2xl mx-auto mb-8">
            Google rewards websites that demonstrate comprehensive expertise within a niche. To establish authority and climb search engine ranks, we structurally build:
          </p>
          
          <div className="grid md:grid-cols-5 gap-4 mb-8 font-mono text-xs uppercase tracking-wider text-gray-300">
            {["topic clusters", "semantic content hubs", "supporting informational pages", "strategic internal links", "entity reinforcement systems"].map((it, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5">
                {it}
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-500">
            This transforms your Wix website from a collection of isolated pages into an authoritative, interconnected topical search ecosystem. 
            Key SEO components practiced include: <span className="text-white">pillar pages</span>, <span className="text-white">semantic relationships</span>, <span className="text-white">contextual linking</span>, <span className="text-white">knowledge graph relevance</span>, and <span className="text-white">topical depth</span>.
          </p>
        </div>
      </section>

      {/* Section 5: Proof of Performance (Case Studies/Portfolio) */}
      <section className="py-24 px-4 md:px-6 bg-[#030712]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4 italic">Proof of Performance</h2>
            <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter">Real Results: <span className="text-blue-500">Wix Sites Dominating Competitive Niches</span></p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/5">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/10 border-b border-white/10 text-xs font-black uppercase text-blue-400 tracking-wider">
                  <th className="p-6">Client Niche / Industry</th>
                  <th className="p-6">Core Challenge Solved</th>
                  <th className="p-6">Organic Traffic Growth</th>
                  <th className="p-6">Key Ranking Milestone</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-300">
                {caseStudies.map((cs, idx) => (
                  <tr key={idx} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                    <td className="p-6 font-black uppercase text-white font-mono tracking-tight">{cs.niche}</td>
                    <td className="p-6 italic text-gray-400">{cs.challenge}</td>
                    <td className="p-6 text-green-400 font-bold font-mono">{cs.growth}</td>
                    <td className="p-6 text-white font-black font-mono">{cs.milestone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 5.5: What You Get Working With a Dedicated Wix SEO Specialist */}
      <section className="py-24 px-4 md:px-6 bg-[#080c18] border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4 italic">Full Deliverables</h2>
            <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter">What You Get Working With <span className="text-blue-500">a Dedicated Wix SEO Specialist</span></p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 font-mono text-sm text-gray-300">
            {[
              "Direct technical SEO implementation",
              "No outsourced fulfillment",
              "Advanced schema deployment",
              "Custom SEO strategy",
              "Transparent reporting",
              "Core Web Vitals optimization",
              "AI search optimization",
              "Long-term topical authority planning",
              "Technical audits and fixes",
              "Ongoing ranking analysis"
            ].map((b, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5.6: Why Businesses Hire a Specialized Wix SEO Consultant */}
      <section className="py-24 px-4 md:px-6 bg-[#030712]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4 italic">Consultant Edge</h2>
          <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none mb-8">
            Why Businesses Hire a <span className="text-blue-500">Specialized Wix SEO Consultant</span>
          </p>
          <div className="text-gray-400 text-sm leading-relaxed text-left space-y-6 mb-10">
            <p className="text-lg text-white font-black italic text-center">
              General SEO agencies often treat Wix like a simplified, restricted website builder.
            </p>
            <p>
              But ranking competitive Wix websites requires deeply understanding Wix rendering behavior, CMS collection architecture, Velo custom code implementations, dynamic SEO variables, platform-specific indexing controls, native schema limits, and mobile rendering behavior.
            </p>
          </div>

          <p className="text-xl font-black italic uppercase text-white max-w-xl mx-auto underline decoration-blue-500 decoration-4 underline-offset-8">
            "I specialize specifically in technical Wix optimization — combining advanced SEO architecture with conversion-focused execution."
          </p>
        </div>
      </section>

      {/* Required SEO Elements Page Links Map (10 Internal Links) */}
      <section className="py-12 bg-white/5 border-y border-white/5 text-gray-500 text-xs font-mono">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center font-black uppercase text-[10px] text-gray-400 mb-6 tracking-widest">Connective Semantic Internal Linking Strategy</p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 text-center justify-center">
            <Link to="/services/local-seo-specialist-google-maps" className="hover:text-blue-400 transition-colors">Local SEO Specialist</Link>
            <Link to="/services/technical-on-page-seo-optimization" className="hover:text-blue-400 transition-colors">Technical On-Page SEO</Link>
            <Link to="/services/ecommerce-seo-specialist-sales-growth" className="hover:text-blue-400 transition-colors">Ecommerce SEO Specialist</Link>
            <Link to="/services/seo-content-creation-strategy" className="hover:text-blue-400 transition-colors">Expert SEO Content Strategy</Link>
            <Link to="/services/keyword-research-intent-mapping" className="hover:text-blue-400 transition-colors">Semantic Keyword Research</Link>
            <Link to="/services/digital-pr-authority-backlinks" className="hover:text-blue-400 transition-colors">Digital PR & Link Acquisition</Link>
            <Link to="/services/b2b-lead-generation-sales-pipeline" className="hover:text-blue-400 transition-colors">B2B Lead Generation</Link>
            <Link to="/services/google-ads-sem-ppc-management" className="hover:text-blue-400 transition-colors">Search Engine Marketing</Link>
            <Link to="/services/topical-maps-semantic-authority" className="hover:text-blue-400 transition-colors">Topical Mapping & Semantic Authority</Link>
            <Link to="/pricing" className="hover:text-blue-400 transition-colors">SEO Pricing Plans</Link>
          </div>
          <div className="mt-6 text-center text-[10px]">
             External: <a href="https://search.google.com/search-console/about" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 font-bold ml-2">Google Search Console</a> | <a href="https://www.google.com/business" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 font-bold ml-2">Google Business Profile</a>
          </div>
        </div>
      </section>

      {/* Section 6: High-Intent FAQ Block */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 italic">
            <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4">Wix SEO FAQ</h2>
            <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter">Frequently Asked <span className="text-blue-500">Questions</span></p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="glass-morphism rounded-2xl border border-white/5 bg-[#0f172a]/20 overflow-hidden group">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 md:p-8 flex items-center justify-between"
                >
                  <h3 className="text-base md:text-lg font-black text-white uppercase italic tracking-tight group-hover:text-blue-400 transition-colors">
                    {faq.question}
                  </h3>
                  <ChevronDown className={`w-5 h-5 text-gray-600 transition-all ${openFaq === idx ? 'rotate-180 text-blue-500' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 md:px-8 pb-8 pt-0 text-gray-400 leading-relaxed text-sm italic font-mono font-medium">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5.8: Ready to Scale Your Wix Organic Traffic? */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] relative overflow-hidden">
        <div className="max-w-5xl mx-auto glass-morphism rounded-[3rem] border border-blue-500/30 p-10 md:p-20 relative overflow-hidden text-center bg-blue-600/5">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          <div className="relative z-10">
            <div className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-8 border border-blue-500/30">
              <ShieldCheck className="w-10 h-10 text-blue-500" />
            </div>
            
            <h2 className="text-3xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-none mb-6 underline decoration-blue-500/20 decoration-8 underline-offset-8">
              Ready to Scale Your <br /> Wix Organic Traffic?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6 italic">
              "If your Wix website is struggling to rank, generate leads, or pass Core Web Vitals, the issue usually isn’t the platform — it’s the SEO framework behind it."
            </p>
            <p className="text-xl text-blue-450 font-bold mb-10 max-w-2xl mx-auto italic">
              "I help businesses turn underperforming Wix websites into technically optimized, search-driven acquisition assets."
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={onBook}
                className="px-8 py-5 bg-orange-600 hover:bg-orange-700 text-white font-black rounded-2xl shadow-2xl shadow-orange-500/40 uppercase tracking-tighter text-base flex items-center justify-center gap-3 transition-all italic"
              >
                <span>Book a Free Wix SEO Audit</span>
              </button>
              <button 
                onClick={onBook}
                className="px-8 py-5 bg-white/10 hover:bg-white/20 text-white font-black rounded-2xl uppercase tracking-tighter text-base flex items-center justify-center gap-3 transition-all italic"
              >
                <span>Request a Custom Strategy Plan</span>
              </button>
              <button 
                onClick={onBook}
                className="px-8 py-5 bg-white text-black font-black rounded-2xl uppercase tracking-tighter text-base flex items-center justify-center gap-3 transition-all hover:bg-gray-200 italic"
              >
                <span>Get a Technical SEO Review</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Branding Area */}
      <div className="py-12 border-t border-white/5 bg-[#030712] text-center">
         <span className="text-[10px] font-black text-gray-600 uppercase tracking-[0.5em] italic">Ritehly Quimbo • Wix Search Engineer</span>
      </div>
    </div>
  );
};

export default WixSEOExpert;
