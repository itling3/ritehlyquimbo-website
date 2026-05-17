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
  History,
  FileCode,
  Gauge
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const GhostSEOExpert: React.FC<{ onBook: () => void }> = ({ onBook }) => {
  const faqs = [
    {
      question: "How long does Ghost SEO take?",
      answer: "Technical crawlability improvements usually reflect within 2-4 weeks. Significant organic traffic growth and keyword rankings for competitive terms typically take 3-6 months depending on your niche authority."
    },
    {
      question: "Is Ghost CMS good for SEO?",
      answer: "Yes, Ghost is built with a 'clean' philosophy that is highly search-engine friendly. It has built-in XML sitemaps, canonical tags, and structured data. However, out-of-the-box settings aren't enough to beat aggressive competitors."
    },
    {
      question: "What makes Ghost SEO different from WordPress SEO?",
      answer: "Ghost is much leaner and doesn't rely on bloated plugins like Yoast or RankMath. This makes it faster, but it also means technical SEO requires deeper implementation knowledge of Ghost's dynamic routing and Handlebars templates."
    },
    {
      question: "Do you implement technical fixes directly?",
      answer: "Yes. We can work directly within your Ghost instance (or theme files) to implement structured data, optimize dynamic routing, and harden sitemap configurations."
    },
    {
      question: "Can you improve existing content without deleting it?",
      answer: "Absolutely. We perform content refreshes where we update search intent mapping, internal linking structures, and metadata to make your old posts perform like new assets."
    }
  ];

  const tools = [
    { name: "Search Console", icon: <Search className="w-5 h-5" /> },
    { name: "Ahrefs", icon: <Target className="w-5 h-5" /> },
    { name: "Screaming Frog", icon: <Terminal className="w-5 h-5" /> },
    { name: "Lighthouse", icon: <Gauge className="w-5 h-5 text-yellow-500" /> },
    { name: "SEMrush", icon: <Zap className="w-5 h-5" /> },
    { name: "Ghost Analytics", icon: <BarChart className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white overflow-hidden">
      <SEO 
        title="Ghost SEO Expert | Rank Higher, Scale Traffic & Leads"
        description="Hire a Ghost SEO Expert to improve rankings, speed & organic growth. Specialized technical SEO, performance engineering, and content strategy for Ghost CMS."
        keywords="ghost seo expert, ghost seo services, ghost cms seo, ghost technical seo, ghost seo consultant"
      />

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 px-4 md:px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none"></div>
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
              Ghost CMS SEO Specialist
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase italic tracking-tighter leading-[0.9] mb-6">
              Ghost SEO Expert Services That <span className="text-blue-500">Grow Organic Traffic</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed mb-8 max-w-xl">
              Helping publishers, SaaS brands, and startups increase Google rankings and leads through advanced Ghost SEO strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={onBook}
                className="px-8 py-5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl transition-all shadow-[0_20px_50px_rgba(59,130,246,0.3)] uppercase tracking-tighter text-base flex items-center justify-center gap-3 group"
              >
                <span>Book Free SEO Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={onBook}
                className="px-8 py-5 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black rounded-2xl transition-all uppercase tracking-tighter text-base"
              >
                Request a Free Ghost SEO Audit
              </button>
            </div>
            <div className="flex flex-wrap gap-6 text-[10px] font-black uppercase tracking-widest text-gray-500 border-t border-white/5 pt-6">
              <div className="flex items-center gap-2 italic"><CheckCircle2 className="w-3 h-3 text-blue-500" /> No long-term contracts</div>
              <div className="flex items-center gap-2 italic"><CheckCircle2 className="w-3 h-3 text-blue-500" /> Custom recommendations</div>
              <div className="flex items-center gap-2 italic"><CheckCircle2 className="w-3 h-3 text-blue-500" /> Response within 24h</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-morphism rounded-[2.5rem] border border-white/10 p-8 md:p-10 bg-[#0f172a]/40 shadow-2xl">
               <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                     <Gauge className="w-6 h-6 text-blue-500" />
                     <span className="text-sm font-black uppercase tracking-tighter italic">Ghost Performance Audit</span>
                  </div>
                  <div className="text-xs font-black text-green-500 italic">Score: 98/100</div>
               </div>
               <div className="space-y-6">
                  {[
                    { label: "Technical Optimization", value: 96, color: "bg-blue-500" },
                    { label: "Content Authority", value: 89, color: "bg-purple-500" },
                    { label: "Indexing Efficiency", value: 92, color: "bg-green-500" }
                  ].map((stat, i) => (
                    <div key={i}>
                       <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-2 text-gray-400">
                          <span>{stat.label}</span>
                          <span className="text-white italic">{stat.value}%</span>
                       </div>
                       <div className="h-1 w-full bg-white/5 rounded-full">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${stat.value}%` }}
                            transition={{ duration: 1.5, delay: 0.5 + (i * 0.2) }}
                            className={`h-full ${stat.color} shadow-[0_0_10px_rgba(59,130,246,0.5)]`}
                          />
                       </div>
                    </div>
                  ))}
               </div>
               <div className="mt-10 p-6 bg-blue-600/10 rounded-2xl border border-blue-500/20 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-black text-blue-400 uppercase italic">Organic Traffic Lift</div>
                    <div className="text-3xl font-black text-white italic">+217%</div>
                  </div>
                  <TrendingUp className="w-10 h-10 text-green-500" />
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. PROBLEM AWARENESS SECTION */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-[10px] font-black text-red-500 uppercase tracking-[0.4em] mb-4 italic">The Struggle</h2>
            <p className="text-3xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-[0.9] mb-6 italic">
              Why Most Ghost Websites <br /> <span className="text-red-500">Struggle to Rank</span>
            </p>
            <p className="text-gray-400 text-lg font-medium max-w-2xl mx-auto italic">
              Ghost CMS is fast and modern — but SEO success still requires technical precision, content architecture, and strategic optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                { t: "Thin Content Architecture", d: "Missing internal depth and topical maps." },
                { t: "Weak Structured Data", d: "Failing to appear in rich search snippets." },
                { t: "Indexing Bottlenecks", d: "Dynamic routes being ignored by Google." },
                { t: "High Bounce Rates", d: "Slow image delivery and poor internal linking." }
              ].map((item, i) => (
                <div key={i} className="p-6 glass-morphism rounded-2xl border border-white/5 flex gap-4 items-start group hover:bg-red-600/5 transition-all">
                  <XCircle className="w-6 h-6 text-red-900 group-hover:text-red-600 shrink-0" />
                  <div>
                    <h3 className="text-sm font-black text-white uppercase italic mb-1">{item.t}</h3>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-[2.5rem] border border-white/5 bg-[#0f172a]/20 overflow-hidden relative">
               <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6 border-b border-white/5 pb-4 italic">Business Consequences</div>
               <div className="space-y-6">
                  {[
                    { p: "Weak SEO Structure", i: "Lower rankings & lost traffic" },
                    { p: "Slow Pages", i: "Higher bounce rates & lower CV" },
                    { p: "Generic Strategy", i: "Wasted budget for zero ROI" },
                    { p: "No Conversion Focus", i: "Traffic without actual leads" }
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between items-center text-xs font-black border-b border-white/5 pb-4 last:border-0 italic">
                       <span className="text-white/60">{row.p}</span>
                       <span className="text-red-500 italic uppercase underline decoration-red-900 underline-offset-4">{row.i}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          <div className="mt-16 text-center">
             <button 
               onClick={onBook}
               className="px-8 py-4 bg-red-600/10 border border-red-500/20 text-red-400 font-black rounded-xl uppercase tracking-widest text-[10px] italic hover:bg-red-600/20 transition-all pointer-events-auto"
             >
               See What's Holding Your Rankings Back — Free Prioritized Fixes Included
             </button>
          </div>
        </div>
      </section>

      {/* 3. SOLUTION POSITIONING SECTION */}
      <section className="py-24 px-4 md:px-6 bg-blue-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 transform skew-x-12 translate-x-32 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="flex-1">
             <h2 className="text-[10px] font-black text-blue-200 uppercase tracking-[0.4em] mb-4 italic">The Answer</h2>
             <p className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase italic tracking-tighter leading-none mb-8 italic">
               A Specialized SEO Strategy <br /> <span className="text-blue-900">Built for Ghost CMS</span>
             </p>
             <p className="text-blue-100 text-lg mb-10 max-w-xl italic font-medium leading-relaxed">
               We combine technical Ghost mastery, content architecture, and conversion optimization to help you rank higher and convert more visitors into active customers.
             </p>

             <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  "Ghost-focused workflows", "Technical + Content SEO",
                  "Performance-first focus", "Data-driven targeting",
                  "Transparent reporting", "Zero generic packages"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-[10px] font-black uppercase text-blue-100">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    {item}
                  </div>
                ))}
             </div>

             <button 
               onClick={onBook}
               className="px-10 py-5 bg-white text-blue-600 font-black rounded-2xl shadow-2l uppercase tracking-tighter hover:scale-105 transition-all text-base italic"
             >
               Talk to a Ghost SEO Expert
             </button>
          </div>

          <div className="lg:w-[450px] w-full">
             <div className="glass-morphism p-10 rounded-[3rem] border border-blue-400/30 bg-blue-500/20 shadow-2xl">
                <div className="text-center mb-10 pb-10 border-b border-blue-400/20">
                   <div className="text-2xl font-black text-white italic uppercase tracking-tighter mb-2">Publishing Mastery</div>
                   <p className="text-[10px] font-black text-blue-200 uppercase tracking-widest">Ghost CMS Routing Optimization</p>
                </div>
                <div className="space-y-6">
                   <div className="flex justify-between items-end border-b border-white/10 pb-4">
                      <div className="text-[9px] font-black text-blue-100 uppercase italic">Indexing Velocity</div>
                      <div className="text-xl font-black text-white italic">+148%</div>
                   </div>
                   <div className="flex justify-between items-end border-b border-white/10 pb-4">
                      <div className="text-[9px] font-black text-blue-100 uppercase italic">SERP Visibility</div>
                      <div className="text-xl font-black text-white italic">+212%</div>
                   </div>
                   <div className="flex justify-between items-end">
                      <div className="text-[9px] font-black text-blue-100 uppercase italic">CVR Lift</div>
                      <div className="text-xl font-black text-white italic">+3.2x</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES BREAKDOWN (FEATURES VS BENEFITS) */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 italic">
            <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4 italic">The ROI</h2>
            <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter italic">What's Included in Our <span className="text-blue-500">Ghost SEO Services</span></p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { f: <Link to="/services/technical-on-page-seo-optimization" className="text-white hover:text-blue-500 transition-colors">Technical SEO Audits</Link>, b: "Identify ranking blockers instantly" },
              { f: <Link to="/services/keyword-research-intent-mapping" className="text-white hover:text-blue-500 transition-colors">Keyword Research</Link>, b: "Attract high-intent organic traffic" },
              { f: <Link to="/services/topical-maps-semantic-authority" className="text-white hover:text-blue-500 transition-colors">Topical Authority</Link>, b: "Dominant keyword clustering strategy" },
              { f: <Link to="/services/ai-seo-automation" className="text-white hover:text-blue-500 transition-colors">AI Search Presence</Link>, b: "Optimize for the next gen of AI search" },
              { f: "Speed Optimization", b: "Green Web Vitals & better rankings" },
              { f: "Schema Markup", b: "Enhanced SERP visibility & clicks" },
              { f: "Internal Linking", b: "Improve crawl depth & authority flow" },
              { f: "Conversion Scaling", b: "Turn cold traffic into paid leads" }
            ].map((row, i) => (
              <div key={i} className="p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all group">
                 <div className="text-blue-500 mb-6 group-hover:scale-110 transition-transform"><CheckCircle2 className="w-6 h-6" /></div>
                 <h3 className="text-sm font-black uppercase italic mb-3">{row.f}</h3>
                 <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest italic">{row.b}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <button 
               onClick={onBook}
               className="px-10 py-5 bg-blue-600 text-white font-black rounded-2xl shadow-xl hover:scale-110 active:scale-95 transition-all uppercase tracking-tighter"
             >
               Get a Custom Ghost CMS SEO Plan
             </button>
          </div>
        </div>
      </section>

      {/* 5. PROCESS / HOW IT WORKS */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] relative border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 italic">
            <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4 italic">The Roadmap</h2>
            <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter italic">Simple, Transparent <span className="text-blue-500">SEO Growth Process</span></p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 relative">
             <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 hidden md:block"></div>
             {[
               { s: "01", t: "Discovery & Audit", d: "Technical + content evaluation of Ghost site." },
               { s: "02", t: "Strategy Roadmap", d: "Keyword, content & technical priorities." },
               { s: "03", t: "Optimization", d: "Theme fixes & high-impact SEO execution." },
               { s: "04", t: "Growth & Scaling", d: "Final tuning and monthly ROI analysis." }
             ].map((item, i) => (
               <div key={i} className="z-10 p-8 glass-morphism rounded-[2.5rem] border border-white/5 bg-black/60 text-center hover:border-blue-500/30 transition-all">
                  <div className="text-5xl font-black text-blue-900 italic mb-6 italic opacity-30">{item.s}</div>
                  <h3 className="text-sm font-black text-white uppercase italic mb-2 italic tracking-tighter">{item.t}</h3>
                  <p className="text-[10px] font-bold text-gray-500 leading-relaxed uppercase tracking-widest italic">{item.d}</p>
               </div>
             ))}
          </div>

          <div className="mt-16 text-center italic">
             <button 
               onClick={onBook}
               className="text-[10px] font-black text-gray-500 hover:text-blue-500 transition-colors uppercase tracking-[0.3em] underline decoration-blue-900 underline-offset-8"
             >
               Start With a Free Audit — No Technical Preparation Required
             </button>
          </div>
        </div>
      </section>

      {/* 6. CASE STUDIES / RESULTS SECTION */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4">The Proof</h2>
            <p className="text-3xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-none mb-6 italic">
              Real SEO Growth for <span className="text-blue-500">Content-Driven Businesses</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             {[
               { client: "SaaS Blog (ScaleUp)", organic: "+217%", keyword: "+142%", leads: "4.2x Growth" },
               { client: "Publisher (NewsHub)", organic: "+185%", keyword: "+115%", avgSession: "+63%" },
               { client: "Brand Hub (Lifestyle)", organic: "Page 1", keyword: "Top 3", leads: "+68% CVR" }
             ].map((caseStudy, i) => (
               <div key={i} className="p-10 glass-morphism rounded-[3rem] border border-white/5 bg-white/[0.02] group hover:border-blue-500/20 transition-all overflow-hidden relative">
                  <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-600/5 blur-[50px] rounded-full group-hover:bg-blue-600/10 transition-all"></div>
                  <div className="text-4xl font-black text-blue-500 italic mb-8 italic">{caseStudy.organic}</div>
                  <div className="space-y-4 mb-10 border-b border-white/5 pb-6">
                     <div className="flex justify-between text-[10px] font-black uppercase text-gray-400 italic">
                        <span>Keyword Visibility</span>
                        <span className="text-white italic">{caseStudy.keyword}</span>
                     </div>
                     <div className="flex justify-between text-[10px] font-black uppercase text-gray-400 italic">
                        <span>Success Metric</span>
                        <span className="text-white italic">{caseStudy.leads || caseStudy.avgSession}</span>
                     </div>
                  </div>
                  <div className="flex items-center justify-between">
                     <span className="text-[10px] font-black text-gray-600 uppercase italic tracking-[0.2em]">{caseStudy.client}</span>
                     <Link to="/portfolio" className="text-blue-500 opacity-0 group-hover:opacity-100 transition-all"><ArrowRight className="w-4 h-4" /></Link>
                  </div>
               </div>
             ))}
          </div>

          <div className="mt-16 text-center italic">
             <Link to="/portfolio" className="text-xs font-black text-white uppercase italic tracking-widest decoration-blue-500 underline decoration-2 underline-offset-8">
               See All Ghost SEO Success Stories →
             </Link>
          </div>
        </div>
      </section>

      {/* 7. TRUST & AUTHORITY STACK */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] border-b border-white/5">
        <div className="max-w-7xl mx-auto text-center">
           <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4 italic italic">The Authority</h2>
           <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-16 italic italic">Trusted by Businesses Targeting <span className="text-blue-500">Organic Dominance</span></p>
           
           <div className="flex flex-wrap justify-center gap-6 mb-20">
              {tools.map((tool, i) => (
                <div key={i} className="px-6 py-4 glass-morphism border border-white/5 rounded-2xl flex items-center gap-3 grayscale hover:grayscale-0 transition-all cursor-default">
                   <div className="text-blue-500">{tool.icon}</div>
                   <span className="text-[10px] font-black text-gray-400 uppercase italic">{tool.name}</span>
                </div>
              ))}
           </div>

           <div className="grid md:grid-cols-4 gap-8">
              {[
                "Transparent Reporting", "Dedicated SEO Strategist", "No Outsourced Work", "Ethical White-Hat Only"
              ].map((item, i) => (
                <div key={i} className="p-8 border border-white/5 rounded-3xl bg-white/[0.01] transition-all hover:bg-white/[0.03]">
                   <ShieldCheck className="w-8 h-8 text-blue-900 mb-4 mx-auto" />
                   <div className="text-[10px] font-black text-white uppercase tracking-widest italic">{item}</div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 8. PRICING / PACKAGES SECTION */}
      <section className="py-24 px-4 md:px-6 bg-[#030712]" id="pricing">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 italic">
               <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4 italic italic italic">The Investment</h2>
               <p className="text-3xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-6 italic italic italic">Flexible Ghost <span className="text-blue-500">SEO Packages</span></p>
               <p className="text-gray-500 uppercase font-black text-[10px] tracking-widest italic">Choose the level of growth your project demands</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {[
                 { name: "Starter", bestFor: "Solo Publishers", price: "9,997", items: ["Technical SEO Audit", "Keyword Research", "On-Page Fixes", "Monthly Reporting"] },
                 { name: "Growth", bestFor: "Scaling Brands", price: "24,497", items: ["Full SEO Management", <Link key="p-growth" to="/services/keyword-research-intent-mapping" className="text-blue-500 underline underline-offset-4">Advanced Content Map</Link>, "Global Optimization", "Performance Tuning"], featured: true },
                 { name: "Authority", bestFor: "Enterprise/SaaS", price: "49,997", items: ["Advanced SEO + CRO", "Authority Acquisition", "Conversion Scaling", "24/7 Priority Support"] }
               ].map((plan, i) => (
                 <div key={i} className={`p-10 rounded-[3rem] border transition-all flex flex-col ${plan.featured ? 'bg-blue-600/10 border-blue-500 shadow-[0_30px_100px_-20px_rgba(59,130,246,0.5)]' : 'bg-white/5 border-white/10'}`}>
                    <div className="mb-10">
                       <div className="text-[10px] font-black uppercase text-blue-500 italic mb-1 italic italic">{plan.name} Package</div>
                       <div className="text-[8px] font-bold text-gray-700 uppercase italic mb-8 italic italic tracking-widest">Target: {plan.bestFor}</div>
                       <div className="flex items-baseline gap-2">
                          <span className="text-6xl font-black text-white italic tracking-tighter italic leading-none">{plan.price}</span>
                          <span className="text-[10px] font-black text-gray-600 uppercase italic italic italic">/ One-time</span>
                       </div>
                    </div>
                    <div className="space-y-4 mb-12 flex-1 pt-10 border-t border-white/5">
                       {plan.items.map((it, j) => (
                         <div key={j} className="flex items-center gap-3 text-xs font-black uppercase tracking-tight text-white/80 italic italic italic">
                            <CheckCircle2 className="w-4 h-4 text-blue-500" />
                            {typeof it === 'string' ? it : it}
                         </div>
                       ))}
                    </div>
                    <button 
                      onClick={onBook}
                      className={`w-full py-5 rounded-2xl font-black uppercase tracking-tighter text-sm transition-all ${plan.featured ? 'bg-blue-600 text-white shadow-xl hover:scale-105 active:scale-95' : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'}`}
                    >
                      {plan.name === 'Authority' ? 'Request Custom Proposal' : (plan.featured ? 'Book Strategy Call' : 'Get Started')}
                    </button>
                    <div className="mt-4 text-center">
                       <span className="text-[8px] font-black text-gray-700 uppercase tracking-widest italic italic italic">Custom Pricing Available • No Contracts</span>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] border-t border-white/5">
         <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20 italic">
               <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4 italic italic italic italic">Clarity</h2>
               <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter italic italic italic italic">Frequently Asked Questions</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="glass-morphism rounded-2xl border border-white/10 bg-[#0f172a]/10 overflow-hidden group">
                  <div className="p-6 md:p-8 cursor-pointer flex items-center justify-between">
                    <h4 className="text-base md:text-lg font-black text-white tracking-tight group-hover:text-blue-500 transition-colors uppercase italic italic italic">
                      {faq.question}
                    </h4>
                    <ChevronDown className="w-5 h-5 text-gray-600 transition-transform group-hover:rotate-180" />
                  </div>
                  <div className="px-6 md:px-8 pb-8 pt-0 text-gray-400 leading-relaxed font-bold text-xs md:text-sm uppercase italic">
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-16 text-center italic">
               <span className="text-gray-700 font-black uppercase text-[10px] italic tracking-widest mb-4 block">Still Have Questions?</span>
               <button 
                 onClick={onBook}
                 className="px-8 py-4 bg-white/5 border border-white/10 text-white font-black rounded-xl uppercase tracking-widest text-xs hover:bg-white/10 transition-all hover:text-blue-400"
               >
                 Let's Talk — Free Consultation Available →
               </button>
            </div>
         </div>
      </section>

      {/* 10. RISK REVERSAL SECTION */}
      <section className="py-24 px-4 md:px-6 bg-[#030712]">
         <div className="max-w-4xl mx-auto p-10 md:p-16 glass-morphism rounded-[3rem] border border-blue-500/20 bg-blue-600/5 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent"></div>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-8 italic italic italic italic">Transparent SEO With <span className="text-blue-500">Zero Guesswork</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12 text-center italic italic italic italic italic">
               {["No Black-Hat Tactics", "Regular Progress Reports", "Cancel Anytime Policy", "Clear Deliverables", "Personalized Strategy", "Direct Expert Access"].map((tr, i) => (
                 <div key={i} className="flex flex-col items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-500" />
                    <span className="text-[10px] font-black text-gray-500 uppercase italic tracking-tight italic">{tr}</span>
                 </div>
               ))}
            </div>
            <button 
              onClick={onBook}
              className="px-12 py-5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl shadow-2xl uppercase tracking-tighter text-xl transition-all hover:scale-105 active:scale-95"
            >
              Get Your Free SEO Audit
            </button>
         </div>
      </section>

      {/* 11. FINAL CTA SECTION */}
      <section className="py-32 px-4 md:px-6 bg-[#030712] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_150%,rgba(59,130,246,0.15),transparent_70%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-7xl lg:text-9xl font-black text-white uppercase italic tracking-tighter leading-[0.8] mb-10 italic italic italic italic">
            Ready to Grow With a <br /> <span className="text-blue-500">Ghost SEO Expert?</span>
          </h2>
          <p className="text-gray-400 text-xl font-medium mb-12 max-w-2xl mx-auto italic italic italic italic">
            Get a tailored Ghost SEO strategy focused on rankings, traffic, and sustainable conversions. 
            No pressure sales calls—just actionable growth.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
             <button 
               onClick={onBook}
               className="w-full md:w-auto px-12 py-6 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl shadow-[0_30px_100px_-20px_rgba(59,130,246,0.5)] uppercase tracking-tighter text-2xl transition-all hover:scale-110 active:scale-95 flex items-center justify-center gap-4"
             >
               Book Free Consultation
             </button>
             <button 
               onClick={onBook}
               className="w-full md:w-auto px-12 py-6 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black rounded-2xl uppercase tracking-tighter text-2xl transition-all"
             >
               Request SEO Audit
             </button>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-gray-700 italic">
             <span>No pressure sales call</span>
             <span>Personalized recommendations</span>
             <span>Fast response time</span>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 w-full p-4 z-50 md:hidden pointer-events-none">
         <div className="max-w-md mx-auto pointer-events-auto flex gap-2">
            <button 
              onClick={onBook}
              className="flex-1 py-4 bg-blue-600 text-white font-black rounded-xl uppercase tracking-widest text-[10px] shadow-2xl shadow-blue-500/50"
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

export default GhostSEOExpert;
