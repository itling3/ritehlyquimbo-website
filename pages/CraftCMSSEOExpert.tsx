import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  XCircle, 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  Search, 
  ArrowRight, 
  Layout, 
  BarChart3, 
  Users,
  AlertTriangle,
  Flame,
  MousePointer2,
  Lock,
  ChevronDown,
  Globe,
  Settings,
  Target,
  BarChart,
  Terminal,
  Cpu,
  Layers,
  FileCode,
  Gauge,
  Database,
  Code
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const CraftCMSSEOExpert: React.FC<{ onBook: () => void }> = ({ onBook }) => {
  const faqs = [
    {
      question: "Why hire a Craft CMS SEO expert?",
      answer: "Craft CMS gives developers incredible power, but if technical SEO isn't implemented within the Twig templates and field structures correctly, you lose critical search signals. A specialist ensures your flexible architecture remains a search powerhouse."
    },
    {
      question: "Can you optimize an existing Craft CMS website?",
      answer: "Yes. We perform deep technical audits to identify legacy ranking blockers, incorrect URL routing, and schema gaps, then implement fixes directly or work with your dev team."
    },
    {
      question: "Do you work with Craft Commerce stores?",
      answer: "Absolutely. We specialize in faceted navigation SEO, product schema, and category optimization specifically for Craft Commerce environments to drive high-intent shoppers."
    },
    {
      question: "How long does Craft CMS SEO take?",
      answer: "Technical crawlability lifts often happen within 30 days. Full topical authority and competitive keyword rankings typically stabilize over a 3-6 month window."
    },
    {
      question: "Do you provide technical SEO fixes directly?",
      answer: "We prefer to work in your staging environment or provide exact Twig/template-level documentation for your developers to ensure zero breakage of your custom workflows."
    }
  ];

  const tools = [
    { name: "Search Console", icon: <Search className="w-5 h-5" /> },
    { name: "Ahrefs", icon: <Target className="w-5 h-5" /> },
    { name: "Screaming Frog", icon: <Terminal className="w-5 h-5" /> },
    { name: "SEMrush", icon: <Zap className="w-5 h-5" /> },
    { name: "PageSpeed Insights", icon: <Gauge className="w-5 h-5 text-yellow-500" /> },
    { name: "Craft Analytics", icon: <BarChart className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white overflow-hidden">
      <SEO 
        title="Craft CMS SEO Expert | Rankings, Traffic & Revenue Optimization"
        description="Hire a Craft CMS SEO Expert to improve rankings, speed & organic growth. Specialized technical SEO, performance engineering, and content strategy for Craft CMS."
        keywords="craft cms seo expert, craft cms seo services, craft technical seo, craft cms consultant, craft commerce seo"
      />

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 px-4 md:px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(16,185,129,0.1),transparent_70%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Craft CMS SEO Specialist
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase italic tracking-tighter leading-[0.9] mb-6">
              Craft CMS SEO Expert — <span className="text-emerald-500">Drive Rankings & Revenue</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed mb-8 max-w-xl">
              Technical SEO, content strategy, and AI-search-ready SEO campaigns built specifically for brands using Craft CMS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button 
                onClick={onBook}
                className="px-8 py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-2xl transition-all shadow-[0_20px_50px_rgba(16,185,129,0.3)] uppercase tracking-tighter text-base flex items-center justify-center gap-3 group"
              >
                <span>Book Free SEO Strategy Call</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={onBook}
                className="px-8 py-5 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black rounded-2xl transition-all uppercase tracking-tighter text-base"
              >
                Request a Free SEO Audit
              </button>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-[10px] font-black uppercase tracking-widest text-gray-500 border-t border-white/5 pt-8">
              <div className="flex items-center gap-3 italic"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 150+ Campaigns Managed</div>
              <div className="flex items-center gap-3 italic"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 92% Client Retention</div>
              <div className="flex items-center gap-3 italic"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Technical Specialists</div>
              <div className="flex items-center gap-3 italic"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> AI-Search Optimized</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-morphism rounded-[3rem] border border-white/10 p-8 md:p-10 bg-[#0f172a]/40 shadow-2xl overflow-hidden group">
               <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-3">
                     <Database className="w-6 h-6 text-emerald-500" />
                     <span className="text-sm font-black uppercase tracking-tighter italic">Craft CMS Growth Model</span>
                  </div>
                  <TrendingUp className="w-8 h-8 text-green-500" />
               </div>
               <div className="space-y-8">
                  {[
                    { label: "Technical Architecture", value: 98, icon: <Code className="w-4 h-4" /> },
                    { label: "Content Modeling", value: 94, icon: <Layers className="w-4 h-4" /> },
                    { label: "Search Revenue Lift", value: 320, icon: <Zap className="w-4 h-4 text-yellow-500" />, isGrowth: true }
                  ].map((stat, i) => (
                    <div key={i}>
                       <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-3 text-gray-400">
                          <span className="flex items-center gap-2">{stat.icon} {stat.label}</span>
                          <span className="text-white italic">{stat.isGrowth ? '+' : ''}{stat.value}%</span>
                       </div>
                       <div className="h-1.5 w-full bg-white/5 rounded-full">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${Math.min(stat.value, 100)}%` }}
                            transition={{ duration: 1.5, delay: 0.5 + (i * 0.2) }}
                            className="h-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                          />
                       </div>
                    </div>
                  ))}
               </div>
               <div className="mt-12 p-6 bg-emerald-600/10 rounded-2xl border border-emerald-500/20 text-center">
                  <div className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-1 italic">Average Page Load</div>
                  <div className="text-3xl font-black text-white italic">0.4s — Lightning Fast</div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. SOCIAL PROOF BAR */}
      <section className="py-12 border-y border-white/5 bg-[#030712]/50">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30 grayscale hover:grayscale-0 transition-opacity duration-700">
              {["Enterprise SaaS", "Luxury E-com", "Tech Portfolios", "Creative Agencies", "Global Brands"].map((brand, i) => (
                <span key={i} className="text-xl md:text-2xl font-black text-white uppercase italic tracking-tighter">{brand}</span>
              ))}
           </div>
           <div className="mt-8 text-center">
              <Link to="/portfolio" className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.3em] hover:text-emerald-400 transition-colors">
                 See Client Results →
              </Link>
           </div>
        </div>
      </section>

      {/* 3. THE PROBLEM SECTION */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[10px] font-black text-red-500 uppercase tracking-[0.4em] mb-4 italic italic">The Friction</h2>
            <p className="text-3xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-[0.9] mb-8 italic">
              Why Most Craft CMS Websites <br /> <span className="text-red-500">Struggle to Rank</span>
            </p>
            <p className="text-gray-400 text-lg font-medium max-w-xl italic leading-relaxed">
              Craft CMS is highly SEO-friendly — but only when technical architecture, content modeling, and performance optimization are implemented correctly.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { t: "Technical Bottlenecks", d: "Improper URL structures, missing schema, and slow templates.", icon: <AlertTriangle className="w-5 h-5 text-red-600" /> },
              { t: "Content Gaps", d: "Thin pages and missing topical authority clusters.", icon: <XCircle className="w-5 h-5 text-red-600" /> },
              { t: "Performance Issues", d: "Unoptimized Core Web Vitals and caching errors.", icon: <Zap className="w-5 h-5 text-red-600" /> },
              { t: "Business Drag", d: "High traffic but low conversion quality leads.", icon: <BarChart3 className="w-5 h-5 text-red-600" /> }
            ].map((box, i) => (
              <div key={i} className="p-8 rounded-3xl border border-white/5 bg-white/[0.01] hover:bg-red-600/[0.03] transition-all group">
                 <div className="mb-4">{box.icon}</div>
                 <h3 className="text-xs font-black text-white uppercase italic mb-2 tracking-tight">{box.t}</h3>
                 <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-relaxed italic">{box.d}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 text-center">
           <button 
             onClick={onBook}
             className="px-8 py-4 bg-red-600/10 border border-red-500/20 text-red-400 font-black rounded-xl uppercase tracking-widest text-[10px] italic hover:bg-red-600/20 transition-all"
           >
             Get a Technical Craft SEO Audit — See Exactly What's Hurting Your Rankings
           </button>
        </div>
      </section>

      {/* 4. WHY CRAFT CMS SEO IS DIFFERENT */}
      <section className="py-32 px-4 md:px-6 bg-[#030712] border-y border-white/5 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(16,185,129,0.05),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 italic">
            <h2 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.4em] mb-4 italic">Specialization</h2>
            <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter italic">Craft CMS SEO Requires <br /> <span className="text-emerald-500">More Than Generic Strategy</span></p>
            <p className="text-gray-500 text-lg mt-8 max-w-2xl mx-auto uppercase font-black text-xs tracking-widest leading-relaxed">
              Flexibility is Craft's strength, but if your CMS isn't architected for search, it's a liability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             {[
               { t: "Clean Architecture", d: "Lean templates and semantic markup for maximum crawlability.", icon: <Code className="w-8 h-8" /> },
               { t: "Structured Modeling", d: "Scalable SEO structures and dynamic metadata mapping.", icon: <Layers className="w-8 h-8" /> },
               { t: "Performance Engineering", d: "Core Web Vitals, caching, and ultra-fast image optimization.", icon: <Zap className="w-8 h-8" /> },
               { t: "Advanced Schema", d: "Complex JSON-LD implementations for organization & articles.", icon: <FileCode className="w-8 h-8" /> },
               { t: "AI Search Readiness", d: "Entity optimization and semantic relevance clustering.", icon: <Cpu className="w-8 h-8" /> },
               { t: "Conversion CRO", d: "Tailored lead-flow paths built directly into your Craft templates.", icon: <MousePointer2 className="w-8 h-8" /> }
             ].map((feat, i) => (
               <div key={i} className="p-10 glass-morphism rounded-[3rem] border border-white/5 hover:border-emerald-500/20 transition-all group">
                  <div className="text-emerald-500 mb-8 group-hover:scale-110 transition-transform">{feat.icon}</div>
                  <h3 className="text-lg font-black text-white uppercase italic tracking-tight mb-4 italic">{feat.t}</h3>
                  <p className="text-[10px] font-bold text-gray-500 leading-relaxed uppercase tracking-widest italic">{feat.d}</p>
               </div>
             ))}
          </div>
          
          <div className="mt-16 text-center">
             <button 
               onClick={onBook}
               className="px-10 py-5 bg-emerald-600/10 border border-emerald-500/20 text-emerald-400 font-black rounded-2xl uppercase tracking-tighter italic hover:bg-emerald-600/20 transition-all"
             >
               Talk to a Craft CMS SEO Specialist
             </button>
          </div>
        </div>
      </section>

      {/* 5. SERVICES SECTION */}
      <section className="py-24 px-4 md:px-6 bg-[#030712]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 italic">
             <h2 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.4em] mb-4 italic">Execution</h2>
             <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter italic">Complete Craft <span className="text-emerald-500">SEO Services</span></p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
             {[
               { title: "Technical Audit", desc: "Crawl optimization, XML sitemaps, robots.txt, and canonicalization fixes.", icon: <Settings className="w-6 h-6" />, link: "/services/technical-on-page-seo-optimization" },
               { title: "Keyword Research", desc: "Commercial intent mapping, topical authority clusters, and semantic SEO.", icon: <Search className="w-6 h-6" />, link: "/services/keyword-research-intent-mapping" },
               { title: "On-Page SEO", desc: "Metadata, headings, image optimization, and internal links in Craft CMS.", icon: <Layout className="w-6 h-6" /> },
               { title: "Semantic Authority", desc: "Establish your brand as an authority via structured topical maps.", icon: <Layers className="w-6 h-6" />, link: "/services/topical-maps-semantic-authority" },
               { title: "AI SEO Automation", desc: "Next-gen discovery optimization for LLMs and AI Overviews.", icon: <Cpu className="w-6 h-6" />, link: "/services/ai-seo-automation" },
               { title: "Craft Commerce SEO", desc: "Product schema, faceted navigation, and conversion-focused product pages.", icon: <BarChart3 className="w-6 h-6" /> }
             ].map((service, i) => (
               <div key={i} className="p-8 border-b border-r border-white/5 hover:bg-white/[0.02] transition-colors group">
                  <div className="text-emerald-500 mb-6 group-hover:translate-x-2 transition-transform">{service.icon}</div>
                  <h3 className="text-xl font-black text-white uppercase italic tracking-tight mb-4 italic italic">
                     {service.link ? (
                       <Link to={service.link} className="hover:text-emerald-500 transition-colors uppercase italic">{service.title}</Link>
                     ) : service.title}
                  </h3>
                  <p className="text-xs font-bold text-gray-500 leading-relaxed uppercase italic italic mb-8">{service.desc}</p>
                  <ArrowRight className="w-5 h-5 text-emerald-900 group-hover:text-emerald-500 transition-colors" />
               </div>
             ))}
          </div>
          <div className="mt-20 text-center">
             <button 
               onClick={onBook}
               className="px-10 py-6 bg-emerald-600 text-white font-black rounded-2xl shadow-2xl uppercase tracking-tighter text-lg hover:scale-105 active:scale-95 transition-all italic"
             >
               Request Custom SEO Proposal
             </button>
             <p className="mt-4 text-[9px] font-black text-gray-700 uppercase tracking-widest italic">Tailored specifically to your Craft CMS setup and business goals.</p>
          </div>
        </div>
      </section>

      {/* 6. FEATURES VS BENEFITS SECTION */}
      <section className="py-24 px-4 md:px-6 bg-emerald-600">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 italic">
             <h2 className="text-[10px] font-black text-emerald-900 uppercase tracking-[0.4em] mb-4 italic">The Transformation</h2>
             <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter italic">What We Do vs <span className="text-emerald-900">What You Get</span></p>
          </div>
          
          <div className="overflow-hidden rounded-[2.5rem] bg-emerald-700 border border-emerald-400 shadow-2xl">
             <table className="w-full text-left border-collapse">
                <thead className="bg-emerald-800/50">
                   <tr>
                      <th className="p-8 text-[10px] font-black text-emerald-200 uppercase tracking-widest italic">What We Optimize</th>
                      <th className="p-8 text-[10px] font-black text-white uppercase tracking-widest italic">Business Benefit</th>
                   </tr>
                </thead>
                <tbody className="text-xs font-bold uppercase text-white/90">
                   {[
                     { f: "Technical SEO Audit", b: "Higher rankings and clear crawl paths" },
                     { f: "Core Web Vitals", b: <Link key="b-c" to="/services/technical-on-page-seo-optimization" className="text-emerald-200 underline underline-offset-4">Faster pages & lower bounce rates</Link> },
                     { f: "Structured Data Implementation", b: "Increased visibility & click-through rates" },
                     { f: "Keyword Strategy", b: "More high-intent qualified leads" },
                     { f: "Internal Link Mapping", b: "Dominant topical authority" },
                     { f: "Conversion Engineering", b: "Measurable SEO ROI and more sales" }
                   ].map((row, i) => (
                     <tr key={i} className="border-t border-emerald-500/30 hover:bg-emerald-800/20 transition-colors">
                        <td className="p-8 font-black uppercase text-[11px] italic tracking-tight">{row.f}</td>
                        <td className="p-8 italic">{typeof row.b === 'string' ? row.b : row.b}</td>
                     </tr>
                   ))}
                </tbody>
             </table>
          </div>
        </div>
      </section>

      {/* 7. CASE STUDIES / RESULTS SECTION */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] border-b border-white/5">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 italic">
               <h2 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.4em] mb-4 italic italic">Evidence</h2>
               <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter italic italic">Proven SEO Growth for <span className="text-emerald-500">Craft CMS Websites</span></p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
               {[
                 { v: "+320%", l: "Organic Traffic", i: "E-commerce" },
                 { v: "+180%", l: "Lead Volume", i: "SaaS Brand" },
                 { v: "4.2x", l: "Growth ROI", i: "Tech Agency" },
                 { v: "67%", l: "Faster Load Times", i: "Legal Hub" }
               ].map((stat, i) => (
                 <div key={i} className="p-10 glass-morphism rounded-[2.5rem] border border-white/5 text-center group hover:border-emerald-500/20 transition-all">
                    <div className="text-4xl md:text-5xl font-black text-emerald-500 italic mb-3 group-hover:scale-110 transition-transform italic">{stat.v}</div>
                    <div className="text-[10px] font-black text-white uppercase tracking-widest mb-1 italic">{stat.l}</div>
                    <div className="text-[8px] font-bold text-gray-600 uppercase tracking-widest italic">{stat.i}</div>
                 </div>
               ))}
            </div>

            <div className="mt-12 text-center italic">
               <Link to="/portfolio" className="text-gray-500 font-black uppercase text-xs tracking-widest hover:text-emerald-500 transition-colors underline decoration-emerald-900 underline-offset-8 decoration-2 italic">
                  View More SEO Success Stories →
               </Link>
            </div>
         </div>
      </section>

      {/* 8. PROCESS SECTION */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] border-b border-white/5">
        <div className="max-w-7xl mx-auto text-center italic">
           <h2 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.4em] mb-4 italic italic italic">The Framework</h2>
           <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter italic italic italic">Our Craft CMS <span className="text-emerald-500">SEO Process</span></p>
           
           <div className="grid md:grid-cols-4 gap-8 mt-24 relative">
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 hidden md:block"></div>
              {[
                { s: "Step 1", t: "Audit & Research", d: "Technical review + commercial intent mapping." },
                { s: "Step 2", t: "Strategy", d: "Custom SEO growth roadmap & KPI definition." },
                { s: "Step 3", t: "Implementation", d: "Execution of technical fixes & content work." },
                { s: "Step 4", t: "Growth & Scaling", d: "Reporting, iteration & continuous performance tuning." }
              ].map((step, i) => (
                <div key={i} className="relative z-10 p-8 glass-morphism rounded-[2.5rem] border border-white/5 bg-[#030712] hover:border-emerald-500/30 transition-all">
                   <div className="text-emerald-600 font-black uppercase text-[10px] italic mb-6 italic italic italic">{step.s}</div>
                   <h3 className="text-base font-black text-white uppercase italic tracking-tight mb-2 italic italic italic">{step.t}</h3>
                   <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest italic italic">{step.d}</p>
                </div>
              ))}
           </div>

           <div className="mt-20">
              <button 
                onClick={onBook}
                className="px-10 py-5 bg-white text-emerald-600 font-black rounded-2xl shadow-xl uppercase tracking-tighter text-lg hover:scale-105 transition-all italic"
              >
                Start With a Free Discovery Call
              </button>
           </div>
        </div>
      </section>

      {/* 9. TOOLSTACK / AUTHORITY SECTION */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 italic">
            <h2 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.4em] mb-4 italic italic italic italic">The Stack</h2>
            <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter italic italic italic italic">SEO Tools & <span className="text-emerald-500">Technology We Use</span></p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {tools.map((tool, i) => (
              <div key={i} className="px-6 py-4 glass-morphism border border-white/5 rounded-2xl flex items-center gap-3 group hover:border-emerald-500/30 transition-all">
                 <div className="text-emerald-500 group-hover:scale-110 transition-transform">{tool.icon}</div>
                 <span className="text-xs font-black text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors italic italic">{tool.name}</span>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center italic">
             <span className="text-[10px] font-black text-gray-700 uppercase tracking-widest italic italic italic italic">Including Schema Validation • Log Analysis • AI Search Optimization Tools</span>
          </div>
        </div>
      </section>

      {/* 10. PRICING / ENGAGEMENT SECTION */}
      <section className="py-24 px-4 md:px-6 bg-[#030712]" id="pricing">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 italic">
               <h2 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.4em] mb-4 italic italic italic italic italic">Transparency</h2>
               <p className="text-3xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-6 italic italic italic italic italic">Flexible Craft CMS <span className="text-emerald-500">SEO Engagements</span></p>
               <p className="text-gray-500 uppercase font-black text-[10px] tracking-widest italic">Qualify your path to organic dominance</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {[
                 { name: "SEO Audit", target: "Small Websites", price: "14,997", items: ["Technical SEO Check", "Entity Mapping", "Keyword Discovery", "Prioritized Roadmap"] },
                 { name: "Growth SEO", target: "Scaling Brands", price: "34,997", items: ["Full SEO Roadmap", <Link key="p-growth" to="/services/keyword-research-intent-mapping" className="text-emerald-500 underline underline-offset-4">Topical Map Setup</Link>, "Technical Execution", "Monthly Reporting"], featured: true },
                 { name: "Full Partnership", target: "Aggressive Growth", price: "69,997", items: ["Enterprise SEO Scale", "Conversion Strategy", "Dedicated Strategist", "Continuous Testing"] }
               ].map((plan, i) => (
                 <div key={i} className={`p-10 rounded-[3rem] border transition-all flex flex-col ${plan.featured ? 'bg-emerald-600/10 border-emerald-500 shadow-[0_30px_100px_-20px_rgba(16,185,129,0.5)]' : 'bg-white/5 border-white/10'}`}>
                    <div className="mb-10">
                       <div className="text-[10px] font-black uppercase text-emerald-500 italic mb-1 italic italic italic italic">{plan.name} Package</div>
                       <div className="text-[8px] font-bold text-gray-700 uppercase italic mb-8 italic italic italic tracking-widest italic">Best For: {plan.target}</div>
                       <div className="flex items-baseline gap-2">
                          <span className="text-6xl font-black text-white italic tracking-tighter leading-none italic">{plan.price}</span>
                          <span className="text-[10px] font-black text-gray-600 uppercase italic italic italic">/ One-time</span>
                       </div>
                    </div>
                    <div className="space-y-4 mb-12 flex-1 pt-10 border-t border-white/5 text-[11px] font-black uppercase tracking-tight text-white/80 italic italic italic italic">
                       {plan.items.map((it, j) => (
                         <div key={j} className="flex items-center gap-3">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            {typeof it === 'string' ? it : it}
                         </div>
                       ))}
                    </div>
                    <button 
                      onClick={onBook}
                      className={`w-full py-5 rounded-2xl font-black uppercase tracking-tighter text-sm transition-all ${plan.featured ? 'bg-emerald-600 text-white shadow-xl hover:scale-105 active:scale-95' : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'}`}
                    >
                      {plan.name === 'Full Partnership' ? 'Request Custom Proposal' : (plan.featured ? 'Book Strategy Call' : 'Request Pricing')}
                    </button>
                    <div className="mt-4 text-center">
                       <span className="text-[8px] font-black text-gray-700 uppercase tracking-widest italic italic">No locked-in contracts • Transparent deliverables</span>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 11. COMPARISON SECTION */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 italic">
             <h2 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.4em] mb-4 italic">The Contrast</h2>
             <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter italic">Generic Agency vs <span className="text-emerald-500">Craft CMS SEO Expert</span></p>
          </div>
          
          <div className="glass-morphism rounded-[2.5rem] border border-white/5 overflow-hidden">
             <table className="w-full text-left">
                <thead className="bg-white/5">
                   <tr>
                      <th className="p-6 md:p-8 text-[10px] font-black text-gray-500 uppercase italic">Metric</th>
                      <th className="p-6 md:p-8 text-[10px] font-black text-gray-400 uppercase italic">Generic Agency</th>
                      <th className="p-6 md:p-8 text-[10px] font-black text-emerald-500 uppercase italic"> especializado Expertise</th>
                   </tr>
                </thead>
                <tbody className="text-xs font-bold uppercase tracking-tight text-white/70">
                   {[
                     { m: "Audit Style", g: "Automated general scan", s: "CMS-specific code audit" },
                     { m: "Implementation", g: "Basic plugins only", s: "Custom template-level work" },
                     { m: "Developer EQ", g: "Limited tech understanding", s: "Craft architecture masters" },
                     { m: "Focus", g: "Vanity traffic rankings", s: "High-intent revenue growth" }
                   ].map((row, i) => (
                     <tr key={i} className="border-t border-white/5">
                        <td className="p-6 md:p-8 text-[10px] text-gray-500 italic">{row.m}</td>
                        <td className="p-6 md:p-8 italic">{row.g}</td>
                        <td className="p-6 md:p-8 text-emerald-400 italic">{row.s}</td>
                     </tr>
                   ))}
                </tbody>
             </table>
          </div>
        </div>
      </section>

      {/* 12. FAQ SECTION */}
      <section className="py-24 px-4 md:px-6 bg-[#030712]">
         <div className="max-w-4xl mx-auto font-black italic">
            <div className="text-center mb-20 italic">
               <h2 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.4em] mb-4 italic italic">Certainty</h2>
               <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter italic italic">Frequently Asked Questions</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="glass-morphism rounded-2xl border border-white/5 bg-[#0f172a]/10 overflow-hidden group">
                  <div className="p-6 md:p-8 cursor-pointer flex items-center justify-between">
                    <h4 className="text-base md:text-lg font-black text-white uppercase italic tracking-tight group-hover:text-emerald-500 transition-colors italic italic">
                      {faq.question}
                    </h4>
                    <ChevronDown className="w-5 h-5 text-gray-600 transition-transform group-hover:rotate-180" />
                  </div>
                  <div className="px-6 md:px-8 pb-8 pt-0 text-gray-400 leading-relaxed font-bold text-[10px] md:text-xs uppercase italic italic">
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* 13. FINAL CTA SECTION */}
      <section className="py-32 px-4 md:px-6 bg-[#030712] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_150%,rgba(16,185,129,0.15),transparent_70%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-7xl lg:text-9xl font-black text-white uppercase italic tracking-tighter leading-[0.8] mb-10 italic italic">
            Ready to Dominant Your <br /> <span className="text-emerald-500">Market With Craft CMS?</span>
          </h2>
          <p className="text-gray-400 text-xl font-medium mb-12 max-w-2xl mx-auto italic italic">
            Get a tailored Craft CMS SEO strategy built specifically for your audience, search behavior, and growth goals.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
             <button 
               onClick={onBook}
               className="w-full md:w-auto px-12 py-6 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-2xl shadow-[0_30px_100px_-20px_rgba(16,185,129,0.5)] uppercase tracking-tighter text-2xl transition-all hover:scale-110 active:scale-95 flex items-center justify-center gap-4 italic"
             >
               Book Free Consultation
             </button>
             <button 
               onClick={onBook}
               className="w-full md:w-auto px-12 py-6 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black rounded-2xl uppercase tracking-tighter text-2xl transition-all italic"
             >
               Request Free SEO Audit
             </button>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-gray-700 italic italic">
             <span>No hard selling</span>
             <span>Transparent recommendations</span>
             <span>Tailored growth strategy</span>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 w-full p-4 z-50 md:hidden pointer-events-none">
         <div className="max-w-md mx-auto pointer-events-auto flex gap-2">
            <button 
              onClick={onBook}
              className="flex-1 py-4 bg-emerald-600 text-white font-black rounded-xl uppercase tracking-widest text-[10px] shadow-2xl shadow-emerald-500/50"
            >
               Free Audit
            </button>
            <button 
              onClick={onBook}
              className="flex-1 py-4 bg-white text-black font-black rounded-xl uppercase tracking-widest text-[10px] shadow-2xl"
            >
               Book Call
            </button>
         </div>
      </div>
    </div>
  );
};

export default CraftCMSSEOExpert;
