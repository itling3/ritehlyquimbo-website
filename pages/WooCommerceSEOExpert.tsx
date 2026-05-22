
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ChevronDown, 
  Layout, 
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
  ShoppingBag,
  Star,
  Globe
} from 'lucide-react';
import SEO from '../components/SEO';

const WooCommerceSEOExpert: React.FC<{ onBook: () => void }> = ({ onBook }) => {
  const faqs = [
    {
      question: "What makes WooCommerce SEO different from regular SEO?",
      answer: "WooCommerce SEO requires specialized focus on product schema, faceted navigation architecture, category page optimization, and crawl budget management for large ecommerce catalogs. It's not just about content; it's about ecommerce data structures."
    },
    {
      question: "How long does WooCommerce SEO take?",
      answer: "Technical 'wins' like site speed and indexing fixes often manifest in 14-30 days. Significant revenue growth and competitive keyword dominance typically take 4-6 months, depending on the niche competition."
    },
    {
      question: "Do you optimize existing WooCommerce stores?",
      answer: "Yes. We specialize in taking existing, underperforming stores and re-engineering them for search dominance without losing your current ranking equity."
    },
    {
      question: "Can you improve WooCommerce site speed?",
      answer: "Absolutely. WooCommerce can be heavy. We optimize your database, scripts, images, and hosting to ensure you hit 'Green' on all Core Web Vitals, which is a major ranking factor for Google."
    },
    {
      question: "Do you handle technical SEO fixes?",
      answer: "Every single one of them. From XML sitemaps and robots.txt to canonical tags and structural schema issues, we handle the technical heavy lifting."
    },
    {
      question: "Will you optimize product and category pages?",
      answer: "Yes. These are the engines of your store. We optimize every aspect of your product and category pages to capture both search intent and buyer interest."
    },
    {
      question: "How do you measure SEO success?",
      answer: "We focus on revenue and organic sales, not just rankings. We track keyword movement, organic traffic growth, and conversion rate improvements."
    },
    {
      question: "Do you offer monthly reporting?",
      answer: "Yes. Every month you'll receive a detailed dashboard showing exactly how your SEO is performing and the impact on your bottom line."
    }
  ];

  const caseStudies = [
    {
      title: "Ecommerce Fashion Brand",
      metric1: "+312%",
      label1: "Organic Traffic",
      metric2: "+184%",
      label2: "Organic Revenue",
      desc: "Core Web Vitals improved to 'Good'. Ranked top 3 for high-intent keywords."
    },
    {
      title: "WooCommerce Home Store",
      metric1: "4x",
      label1: "Category Traffic",
      metric2: "41%",
      label2: "Conversion Lift",
      desc: "Reduced bounce rate by 28% through UX and technical SEO improvements."
    }
  ];

  const packages = [
    {
      name: "Starter",
      bestFor: "Small WooCommerce stores",
      price: "9,997",
      includes: ["Audit", "On-page SEO", "Sitemap Optimization", "Monthly Reporting"]
    },
    {
      name: "Growth",
      bestFor: "Scaling ecommerce brands",
      price: "24,997",
      highlight: true,
      includes: ["Technical SEO", "Content Strategy", "CRO Testing", "Authority Backlinks", "Speed Optimization"]
    },
    {
      name: "Enterprise",
      bestFor: "Large WooCommerce stores",
      price: "49,997",
      includes: ["Full SEO Strategy", "Advanced Technical Support", "AI Automation", "Dedicated Strategist", "Daily Monitoring"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white overflow-hidden">
      <SEO 
        title="WooCommerce SEO Expert Services | Grow Traffic & Sales"
        description="Hire a WooCommerce SEO Expert to rank higher on Google & AI Search. Specialized technical SEO, product optimization, and revenue-focused growth for WooCommerce stores."
        keywords="woocommerce seo expert, woocommerce seo services, ecommerce seo expert, woocommerce technical seo, seo for woocommerce stores"
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
              WooCommerce Revenue Engineering
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase italic tracking-tighter leading-[0.9] mb-6">
              WooCommerce SEO Expert Services That <span className="text-blue-500">Grow Traffic, Rankings & Sales</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed mb-8 max-w-xl">
              We help WooCommerce stores increase organic traffic, improve rankings, optimize site speed, and convert more visitors into customers through <Link to="/services/technical-on-page-seo-optimization" className="text-blue-400 hover:underline">technical SEO</Link> and <Link to="/services/seo-content-creation-strategy" className="text-blue-400 hover:underline">content strategy</Link>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={onBook}
                className="px-8 py-5 bg-orange-600 hover:bg-orange-700 text-white font-black rounded-2xl transition-all shadow-2xl shadow-orange-500/30 uppercase tracking-tighter text-base flex items-center justify-center gap-3 group"
              >
                <span>Get Free WooCommerce Audit</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={onBook}
                className="px-8 py-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all font-black uppercase tracking-tighter text-base"
              >
                Book Strategy Call
              </button>
            </div>
            <div className="flex items-center gap-6 opacity-60 grayscale scale-90 origin-left">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="text-xs font-black uppercase italic">Rated by Brands</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-black uppercase italic">Global Specialists</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 glass-morphism rounded-[2.5rem] border border-white/10 p-4 md:p-6 shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] bg-[#0f172a]/40">
              <div className="bg-[#030712] rounded-2xl p-6 border border-white/5 font-mono">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-green-600 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-black uppercase tracking-tight">Woo Revenue Audit</span>
                  </div>
                  <div className="text-[10px] font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded">LIVE TRAFFIC SCALE</div>
                </div>
                <div className="h-48 w-full flex items-end gap-1 md:gap-2">
                  {[20, 35, 25, 45, 40, 60, 50, 80, 70, 95, 85, 100].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: 0.5 + (i * 0.05) }}
                      className={`flex-1 rounded-t-sm md:rounded-t-md ${i === 11 ? 'bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.5)]' : 'bg-blue-500/20'}`}
                    />
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <div className="text-[9px] text-gray-500 uppercase font-black mb-1">Store Revenue</div>
                    <div className="text-lg font-black text-white italic">+184%</div>
                  </div>
                   <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <div className="text-[9px] text-gray-500 uppercase font-black mb-1">Total Clicks</div>
                    <div className="text-lg font-black text-white italic">4.3k</div>
                  </div>
                   <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <div className="text-[9px] text-gray-500 uppercase font-black mb-1">CVR</div>
                    <div className="text-lg font-black text-white italic">4.1%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-600/10 blur-[80px] rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 border-y border-white/5 bg-[#030712]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] text-center mb-8 italic">Trusted by Ecommerce Brands Using WooCommerce</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            {['WooCommerce', 'Automattic', 'StoreFront', 'Stripe', 'Google Partner', 'Clutch'].map((brand, i) => (
              <span key={i} className={brand === 'WooCommerce' ? "text-xl md:text-2xl font-black text-white hover:text-blue-500 transition-colors uppercase italic tracking-tighter" : "text-xl md:text-2xl font-black text-white uppercase italic tracking-tighter"}>
                {brand === 'WooCommerce' ? <Link to="/services/cms-seo/wordpress-seo-expert">{brand}</Link> : brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-[10px] font-black text-red-500 uppercase tracking-[0.4em] mb-4 italic">The Revenue Drain</h2>
            <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none mb-6">
              Why Most WooCommerce Stores <span className="text-red-500">Struggle to Rank</span>
            </p>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
              Generic SEO strategies fail because WooCommerce has unique <Link to="/services/technical-on-page-seo-optimization" className="text-blue-400 hover:underline">technical challenges</Link>. Slow performance, duplicate content, and poor indexing are killing your sales.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
                title: "Slow Site Speed",
                desc: "Slow WooCommerce product pages lead to high cart abandonment and poor rankings in Google search."
              },
              {
                icon: <Users className="w-8 h-8 text-orange-500" />,
                title: "Poor Internal Linking",
                desc: "If Google can't crawl your category and product architecture effectively, you'll never dominate your niche."
              },
              {
                icon: <Lock className="w-8 h-8 text-purple-500" />,
                title: "Thin Ecommerce Content",
                desc: "Product pages without structured data or high-value semantic content are ignored by modern search engines."
              }
            ].map((item, i) => (
              <div key={i} className="glass-morphism p-10 rounded-[2.5rem] border border-white/5 hover:border-red-500/20 transition-all group scale-up">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-black text-white uppercase italic tracking-tight mb-4 group-hover:text-red-500 transition-colors uppercase">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-medium italic">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
             <button onClick={onBook} className="px-10 py-5 bg-white text-black font-black rounded-2xl uppercase tracking-tighter hover:scale-105 transition-transform italic">Find My SEO Issues →</button>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-4 md:px-6 bg-blue-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white opacity-5 transform skew-x-12 translate-x-32 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-[10px] font-black text-blue-200 uppercase tracking-[0.4em] mb-4 italic">Specialized Expertise</h2>
            <p className="text-3xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-[0.9] mb-8">
              Specialized WooCommerce SEO — <span className="text-blue-900">Not Generic Agency SEO.</span>
            </p>
            <div className="space-y-4 mb-10">
              {[
                "Product Schema Optimization",
                "Faceted Navigation Architecture Fixes",
                "Category SEO & Siloing Strategy",
                "Crawl Budget & Indexing Optimization",
                "Technical SEO + Revenue Focus"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 text-white font-black uppercase italic tracking-tight text-sm">
                  <CheckCircle2 className="w-5 h-5 text-blue-200" />
                  {text}
                </div>
              ))}
            </div>
            <button 
              onClick={onBook}
              className="px-10 py-5 bg-white text-blue-600 font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-black/20 uppercase tracking-tighter italic"
            >
              Talk to a WooCommerce SEO Expert →
            </button>
          </div>
          <div className="w-full md:w-[400px] shrink-0">
             <div className="glass-morphism p-8 rounded-[2rem] border border-white/20 bg-white/10 shadow-2xl">
                <div className="text-5xl font-black text-white mb-2 italic">100/100</div>
                <div className="text-[10px] font-black text-blue-100 uppercase tracking-widest mb-6 border-b border-white/20 pb-4 italic">Lighthouse Store Score</div>
                <div className="h-2 w-full bg-blue-900/50 rounded-full overflow-hidden mb-6">
                  <div className="w-[98%] h-full bg-green-400"></div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-black text-white italic">0.2s</div>
                    <div className="text-[8px] text-blue-100 uppercase font-black italic">Speed Index</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white italic">A+</div>
                    <div className="text-[8px] text-blue-100 uppercase font-black italic">UX Grade</div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 md:px-6 bg-[#030712]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4 italic">The Growth Toolkit</h2>
             <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter">WooCommerce SEO <span className="text-blue-500">Services Included</span></p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Technical WooCommerce SEO",
                icon: <Zap className="w-6 h-6" />,
                desc: "Crawl audits, indexing fixes, canonical optimization, and <Link to=\"/services/technical-on-page-seo-optimization\" className=\"text-blue-400 hover:underline\">structured data</Link> setup."
              },
              {
                title: "Ecommerce Keyword Research",
                icon: <Search className="w-6 h-6" />,
                desc: "Identifying high-revenue <Link to=\"/services/keyword-research-intent-mapping\" className=\"text-blue-400 hover:underline\">buyer-intent keywords</Link> for your product category through deep intent mapping."
              },
              {
                 title: "On-Page Product SEO",
                 icon: <ShoppingBag className="w-6 h-6" />,
                 desc: "Optimizing product pages, descriptions, and metadata for maximum visibility."
              },
              {
                 title: "WooCommerce Speed Tuning",
                 icon: <Flame className="w-6 h-6" />,
                 desc: "Optimizing images, code, and hosting for lightning-fast ecommerce performance."
              },
              {
                 title: "Revenue Content Strategy",
                 icon: <BarChart3 className="w-6 h-6" />,
                 desc: "Building <Link to=\"/services/topical-maps-semantic-authority\" className=\"text-blue-400 hover:underline\">topical authority</Link> through strategic buying guides and product content."
              },
              {
                 title: "Conversion Optimization",
                 icon: <MousePointer2 className="w-6 h-6" />,
                 desc: "Improving store UX and CTA placement to convert more visitors into organic sales."
              }
            ].map((feat, i) => (
              <div key={i} className="p-8 rounded-3xl border border-white/5 bg-[#0f172a]/20 hover:border-blue-500/30 transition-all group scale-up">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                  {feat.icon}
                </div>
                <h3 className="text-lg font-black text-white uppercase italic tracking-tight mb-3 group-hover:text-blue-400 transition-colors underline decoration-blue-500/0 hover:decoration-blue-500/50">{feat.title}</h3>
                <p className="text-gray-500 text-xs font-bold leading-relaxed italic">{feat.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
             <button onClick={onBook} className="px-10 py-5 bg-orange-600 text-white font-black rounded-2xl uppercase tracking-tighter hover:bg-orange-700 transition-colors shadow-xl shadow-orange-500/20 italic">Request Custom SEO Plan →</button>
          </div>
        </div>
      </section>

      {/* Features vs Benefits Section */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4 italic">Outcome Focused</h2>
            <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter">Features vs <span className="text-blue-500">Benefits</span></p>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-white/5 bg-[#0f172a]/20 shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 border-b border-white/10 uppercase tracking-widest text-[10px] font-black italic">
                  <th className="p-6 md:p-8">SEO Feature</th>
                  <th className="p-6 md:p-8">Business Benefit</th>
                </tr>
              </thead>
              <tbody className="text-xs md:text-sm font-black uppercase italic">
                {[
                  ["Faster WooCommerce Pages", "Higher Conversions"],
                  ["Technical SEO Fixes", "Better Rankings"],
                  ["Keyword Targeting", "Qualified Traffic"],
                  ["Product Schema", "Search Visibility"],
                  ["Category Optimization", "Increased Sales"],
                  ["Content Strategy", "Traffic Growth"]
                ].map(([feat, benefit], i) => (
                  <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                    <td className="p-6 md:p-8 text-gray-400">{feat}</td>
                    <td className="p-6 md:p-8 text-blue-500">{benefit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 px-4 md:px-6 bg-[#030712]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4 italic">The Proof Engine</h2>
              <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter italic">Real WooCommerce <span className="text-blue-500">SEO Results</span></p>
            </div>
            <Link to="/portfolio" className="text-blue-500 font-extrabold uppercase italic tracking-widest text-xs hover:text-blue-400 transition-colors flex items-center gap-2 mb-2">
              View Growth Catalog <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((caseStudy, i) => (
              <div key={i} className="glass-morphism p-8 md:p-12 rounded-[3.5rem] border border-white/5 bg-[#0f172a]/20 relative group hover:border-blue-500/20 transition-all scale-up">
                <div className="flex flex-col gap-8">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-black text-white uppercase italic leading-tight group-hover:text-blue-400 transition-colors underline decoration-blue-500/20 underline-offset-4">{caseStudy.title}</h3>
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                      <TrendingUp className="w-5 h-5 text-blue-500" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 bg-blue-600/10 border border-blue-500/20 rounded-3xl text-center">
                      <div className="text-3xl font-black text-blue-500 italic mb-1">{caseStudy.metric1}</div>
                      <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{caseStudy.label1}</div>
                    </div>
                    <div className="p-6 bg-white/5 border border-white/10 rounded-3xl text-center">
                      <div className="text-3xl font-black text-white italic mb-1">{caseStudy.metric2}</div>
                      <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{caseStudy.label2}</div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm italic font-medium leading-relaxed underline decoration-white/5 underline-offset-8">{caseStudy.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 italic">
            <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4">The Implementation Framework</h2>
            <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter">Our WooCommerce <span className="text-blue-500">SEO Process</span></p>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 hidden lg:block italic"></div>
            <div className="grid lg:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Audit & Discovery", desc: "Analyzing your store, competitors, rankings, and technical debt." },
                { step: "02", title: "Strategy Roadmapping", desc: "Prioritizing the highest-ROI changes for immediate growth." },
                { step: "03", title: "Optimization Loop", desc: "Executing technical, on-page, and speed improvements." },
                { step: "04", title: "Growth & Scaling", desc: "Ongoing authority building and data-driven scaling." }
              ].map((p, i) => (
                <div key={i} className="relative z-10 glass-morphism p-8 rounded-3xl border border-white/5 bg-black/40 group hover:border-blue-500/20 transition-all">
                  <div className="text-4xl font-black text-blue-900 mb-6 italic group-hover:text-blue-600 transition-colors">{p.step}</div>
                  <h3 className="text-xl font-black text-white uppercase italic tracking-tight mb-3 italic">{p.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed italic">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-4 md:px-6 bg-[#030712]" id="pricing">
        <div className="max-w-7xl mx-auto italic">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4 italic">Clear Value</h2>
            <p className="text-3xl md:text-6xl font-black text-white uppercase italic tracking-tighter italic leading-none mb-6">
              WooCommerce <span className="text-blue-500">SEO Packages</span>
            </p>
            <p className="text-gray-400 uppercase font-black text-xs tracking-widest italic">ROI-Focused Ecommerce Strategy</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 italic">
            {packages.map((plan, i) => (
              <div key={i} className={`p-10 rounded-[3rem] border transition-all flex flex-col italic ${plan.highlight ? 'bg-blue-600/10 border-blue-500 shadow-2xl shadow-blue-600/10' : 'bg-white/5 border-white/10'}`}>
                <div className="mb-8">
                   <div className="text-[10px] font-black uppercase tracking-widest mb-2 text-blue-400 italic">{plan.name}</div>
                   <div className="flex items-baseline gap-2">
                     <span className="text-xs font-bold text-gray-500 italic">₱</span>
                     <span className="text-5xl font-black text-white italic tracking-tighter leading-none italic">{plan.price}</span>
                     <span className="text-[10px] font-black text-gray-500 uppercase italic tracking-widest italic">/ Month</span>
                   </div>
                   <p className="text-gray-400 text-[10px] uppercase font-black tracking-widest mt-4 italic">{plan.bestFor}</p>
                </div>
                <div className="space-y-4 mb-10 flex-1 italic">
                  {plan.includes.map((f, j) => (
                    <div key={j} className="flex items-center gap-3 text-xs font-black uppercase tracking-tight text-white/80 italic">
                      <CheckCircle2 className="w-4 h-4 text-blue-500" />
                      {f === 'AI Automation' ? <Link to="/services/ai-seo-automation" className="hover:text-blue-400 underline decoration-blue-500/20">{f}</Link> : 
                       f === 'Technical SEO' ? <Link to="/services/technical-on-page-seo-optimization" className="hover:text-blue-400 underline decoration-blue-500/20">{f}</Link> : f}
                    </div>
                  ))}
                </div>
                <button 
                  onClick={onBook}
                  className={`w-full py-5 rounded-2xl font-black uppercase tracking-tighter text-sm transition-all italic ${plan.highlight ? 'bg-orange-600 text-white' : 'bg-white/10 text-white'}`}
                >
                  Request {plan.name} Strategy
                </button>
              </div>
            ))}
          </div>
          <p className="text-center mt-12 text-gray-600 text-[10px] font-black uppercase tracking-widest italic">No hidden fees. Just ROI.</p>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] border-t border-white/5">
        <div className="max-w-7xl mx-auto italic">
          <div className="text-center mb-16 italic">
            <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4">Client Validation</h2>
            <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter italic underline decoration-blue-500/20 decoration-8 underline-offset-10">Market Leaders Agree</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 italic">
            {[1,2,3].map((_, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-white/5 border border-white/5 italic">
                <div className="flex gap-1 mb-4 italic">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 text-yellow-500 fill-yellow-500" />)}
                </div>
                <p className="text-sm text-gray-400 italic font-medium leading-relaxed mb-6 italic">"Our WooCommerce revenue increased by 300% after just 6 months of specialized SEO strategy. The technical depth is unparalleled."</p>
                <div className="flex items-center gap-3 italic">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 italic"></div>
                  <div>
                    <div className="text-[10px] font-black text-white uppercase italic italic">CEO, Lifestyle Brand</div>
                    <div className="text-[9px] font-black text-blue-500 uppercase italic italic">Verified Client</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] border-t border-white/5">
        <div className="max-w-4xl mx-auto italic">
          <div className="text-center mb-16 italic">
            <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4">Clarity Engine</h2>
            <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter italic">Common Objections</p>
          </div>
          <div className="space-y-4 italic">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-morphism rounded-2xl border border-white/5 bg-[#0f172a]/20 overflow-hidden group italic">
                <div className="p-6 md:p-8 cursor-pointer flex items-center justify-between italic">
                  <h4 className="text-base md:text-lg font-black text-white uppercase italic tracking-tight group-hover:text-blue-400 transition-colors italic">
                    {faq.question}
                  </h4>
                  <ChevronDown className="w-5 h-5 text-gray-600 transition-transform group-hover:rotate-180 italic" />
                </div>
                <div className="px-6 md:px-8 pb-8 pt-0 text-gray-400 leading-relaxed font-medium text-sm md:text-base italic">
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Reversal Section */}
      <section className="py-24 px-4 md:px-6 italic">
        <div className="max-w-5xl mx-auto glass-morphism rounded-[3rem] border border-blue-500/30 p-10 md:p-20 relative overflow-hidden text-center bg-blue-600/5 italic">
           <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
           <div className="relative z-10 italic">
              <div className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-8 border border-blue-500/30 italic">
                <ShieldCheck className="w-10 h-10 text-blue-500" />
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none mb-6 italic italic">Low-Risk WooCommerce <br/> SEO Partnership</h2>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto italic">
                Transparent reporting, no long-term lock-in contracts, and a commitment to revenue-focused execution for all clients.
              </p>
              <button 
                onClick={onBook}
                className="px-12 py-5 bg-orange-600 hover:bg-orange-700 text-white font-black rounded-2xl shadow-2xl shadow-orange-500/40 uppercase tracking-tighter text-xl italic italic"
              >
                Claim Free SEO Audit
              </button>
           </div>
        </div>
      </section>

      {/* Final CTA Strip */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] relative overflow-hidden italic">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 italic">
            <div className="text-center md:text-left italic">
               <h2 className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-none italic italic underline decoration-blue-500/30">Ready to Grow Your <br /> <span className="text-blue-500 italic">Organic Sales?</span></h2>
            </div>
          <div className="flex flex-col items-center md:items-end gap-6 italic">
             <p className="text-gray-400 text-right uppercase font-black text-[10px] tracking-widest hidden md:block italic italic">Speak Directly With an SEO Strategist</p>
             <button 
               onClick={onBook}
               className="px-12 py-6 bg-white text-black font-black rounded-2xl hover:bg-gray-200 transition-all uppercase tracking-tighter text-2xl shadow-2xl shadow-white/5 italic italic underline decoration-black/10"
             >
               Start Free Audit
             </button>
          </div>
        </div>
      </section>

      {/* Footer Branding Area */}
      <div className="py-12 border-t border-white/5 bg-[#030712] text-center italic">
         <span className="text-[10px] font-black text-gray-600 uppercase tracking-[0.5em] italic italic">Ritehly Quimbo • WooCommerce Search Engineer</span>
      </div>
    </div>
  );
};

export default WooCommerceSEOExpert;
