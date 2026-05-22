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
  ChevronDown,
  Settings,
  Target,
  BarChart,
  Terminal,
  Cpu,
  Layers,
  Gauge,
  Database,
  Code,
  AlertTriangle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const ConcreteCMSSEOExpert: React.FC<{ onBook: () => void }> = ({ onBook }) => {
  const faqs = [
    {
      question: "What is a Concrete CMS SEO expert?",
      answer: "A Concrete CMS SEO expert specialized in the unique architecture of the Concrete CMS (formerly concrete5) platform. Unlike generic SEOs, an expert understands block-based content delivery, attribute-based metadata mapping, and the specific caching requirements needed to ensure search engines can efficiently crawl and index your site."
    },
    {
      question: "Can you improve rankings without rebuilding my site?",
      answer: "Yes. Most ranking issues in Concrete CMS are due to configuration errors, theme bottlenecks, or sub-optimal content modeling. We can implement technical fixes and content optimizations directly within your existing site structure."
    },
    {
      question: "How long before I see results?",
      answer: "Technical lifts (fixing indexing and speed) usually show impact in 2-4 weeks. Significant organic traffic growth and competitive keyword movement typically takes 3-6 months depending on niche competition."
    },
    {
      question: "Do you provide technical fixes or just recommendations?",
      answer: "We provide both. We can work directly in your Concrete CMS dashboard and theme files to implement fixes, or provide exact documentation for your internal developers."
    },
    {
      question: "Is Concrete CMS good for SEO?",
      answer: "Concrete CMS is highly SEO-friendly out of the box, but it requires 'active' configuration. Its flexibility means it's easy to break SEO best practices if you don't know how the platform handles URLs, sitemaps, and canonicals."
    }
  ];

  const tools = [
    { name: "Search Console", icon: <Search className="w-5 h-5 text-blue-500" /> },
    { name: "Ahrefs", icon: <Target className="w-5 h-5 text-blue-500" /> },
    { name: "Screaming Frog", icon: <Terminal className="w-5 h-5 text-blue-500" /> },
    { name: "SEMrush", icon: <Zap className="w-5 h-5 text-blue-500" /> },
    { name: "Lighthouse", icon: <Gauge className="w-5 h-5 text-yellow-500" /> },
    { name: "Concrete Analytics", icon: <BarChart className="w-5 h-5 text-blue-500" /> }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white overflow-hidden">
      <SEO 
        title="Concrete CMS SEO Expert | Rankings & Lead Optimization"
        description="Hire a Concrete CMS SEO Expert to improve rankings, speed & organic growth. Specialized technical SEO, performance tuning, and content strategy for Concrete CMS."
        keywords="concrete cms seo expert, concrete cms seo services, concrete5 seo, technical seo concrete cms"
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
              Concrete CMS SEO Specialist
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase italic tracking-tighter leading-[0.9] mb-6">
              Concrete CMS SEO Expert — <span className="text-blue-500">Rank Higher & Get Qualified Traffic</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed mb-8 max-w-xl">
              Technical SEO, content optimization, and performance tuning built specifically for Concrete CMS websites to increase visibility, traffic, and conversions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button 
                onClick={onBook}
                className="px-8 py-5 bg-orange-600 hover:bg-orange-700 text-white font-black rounded-2xl transition-all shadow-[0_20px_50px_rgba(249,115,22,0.3)] uppercase tracking-tighter text-base flex items-center justify-center gap-3 group"
              >
                <span>Get Free SEO Audit</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={onBook}
                className="px-8 py-5 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black rounded-2xl transition-all uppercase tracking-tighter text-base"
              >
                Book a Strategy Call
              </button>
            </div>
            <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest mb-8 italic">
              "No obligation. Includes Concrete CMS SEO review report."
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-[10px] font-black uppercase tracking-widest text-gray-500 border-t border-white/5 pt-8">
              <div className="flex items-center gap-3 italic"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Concrete CMS technical SEO</div>
              <div className="flex items-center gap-3 italic"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Structured data & schema</div>
              <div className="flex items-center gap-3 italic"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Core Web Vitals tuning</div>
              <div className="flex items-center gap-3 italic"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Niche-specific keyword strategy</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-morphism rounded-[2.5rem] border border-white/10 p-8 md:p-10 bg-[#0f172a]/40 shadow-2xl overflow-hidden group">
               <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-3">
                     <Database className="w-6 h-6 text-blue-500" />
                     <span className="text-sm font-black uppercase tracking-tighter italic">Concrete CMS Optimization</span>
                  </div>
                  <TrendingUp className="w-8 h-8 text-green-500" />
               </div>
               <div className="space-y-8">
                  {[
                    { label: "Indexing Efficiency", value: 97, icon: <Code className="w-4 h-4" /> },
                    { label: "Lighthouse Speed", value: 95, icon: <Zap className="w-4 h-4 text-yellow-500" /> },
                    { label: "Organic Reach Lift", value: 312, icon: <BarChart className="w-4 h-4" />, isGrowth: true }
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
                            className="h-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                          />
                       </div>
                    </div>
                  ))}
               </div>
               <div className="mt-12 p-6 bg-white/5 border border-white/5 rounded-2xl text-center">
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2 italic">Focused exclusively on CMS-based systems</p>
                  <p className="text-xs font-bold text-white uppercase tracking-tight">Ensuring platform-specific optimization—not generic SEO.</p>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. PROBLEM → SOLUTION SECTION */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-[10px] font-black text-red-500 uppercase tracking-[0.4em] mb-4 italic italic">The Friction</h2>
            <p className="text-3xl md:text-5xl lg:text-7xl font-black text-white uppercase italic tracking-tighter leading-[0.9] mb-8 italic">
              Why Most Concrete CMS <br /> <span className="text-red-500">Websites Struggle to Rank</span>
            </p>
            <button 
              onClick={onBook}
              className="px-8 py-4 bg-red-600/10 border border-red-500/20 text-red-400 font-black rounded-xl uppercase tracking-widest text-[10px] italic hover:bg-red-600/20 transition-all pointer-events-auto"
            >
              Fix My Concrete CMS SEO — Delivered in 48-72 Hours
            </button>
          </div>
          
          <div className="flex-1 space-y-4">
            <div className="p-8 rounded-[2rem] border border-white/5 bg-white/[0.01] hover:bg-red-600/[0.02] transition-all group">
               <div className="flex items-center gap-3 mb-6">
                  <XCircle className="w-6 h-6 text-red-900 group-hover:text-red-600 transition-colors" />
                  <h3 className="text-sm font-black text-white uppercase italic">Common Platform Blockers</h3>
               </div>
               <ul className="grid grid-cols-2 gap-4">
                  {[
                    "Poor URL structures", "Missing schema markup",
                    "Weak internal linking", "Slow page performance",
                    "Duplicate content", "Unoptimized attributes"
                  ].map((p, i) => (
                    <li key={i} className="text-[10px] font-black text-gray-600 uppercase tracking-tighter italic flex items-center gap-2">
                       <AlertTriangle className="w-3 h-3 text-red-900" /> {p}
                    </li>
                  ))}
               </ul>
            </div>

            <div className="p-8 rounded-[2rem] border border-white/5 bg-blue-600/5 hover:bg-blue-600/10 transition-all group">
               <div className="flex items-center gap-3 mb-6">
                  <CheckCircle2 className="w-6 h-6 text-blue-900 group-hover:text-blue-500 transition-colors" />
                  <h3 className="text-sm font-black text-white uppercase italic">Specialized Growth Solution</h3>
               </div>
               <ul className="grid grid-cols-2 gap-4">
                  {[
                    <Link key="s1" to="/services/technical-on-page-seo-optimization" className="hover:text-blue-500 transition-colors">Technical Audit System</Link>, 
                    "Architecture restructuring",
                    <Link key="s2" to="/services/keyword-research-intent-mapping" className="hover:text-blue-500 transition-colors">Keyword Intent Mapping</Link>, 
                    "Speed & Web Vitals tuning",
                    <Link key="s3" to="/services/topical-maps-semantic-authority" className="hover:text-blue-500 transition-colors">Topical Map Strategy</Link>, 
                    <Link key="s4" to="/services/ai-seo-automation" className="hover:text-blue-500 transition-colors">AI-Search Integration</Link>
                  ].map((s, i) => (
                    <li key={i} className="text-[10px] font-black text-gray-500 uppercase tracking-tighter italic flex items-center gap-2">
                       <CheckCircle2 className="w-3 h-3 text-blue-900" /> {s}
                    </li>
                  ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TRUST STACK / SOCIAL PROOF */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 italic">
             <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4 italic">Authority</h2>
             <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter italic">Trusted by Businesses Using <span className="text-blue-500">Concrete CMS Platforms</span></p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
             <div className="p-8 rounded-[2.5rem] glass-morphism border border-white/5 text-center">
                <div className="text-5xl font-black text-blue-500 italic mb-4 italic">+312%</div>
                <div className="text-[10px] font-black text-white uppercase tracking-widest mb-6 border-b border-white/5 pb-4 italic">Organic Traffic Lift</div>
                <p className="text-[9px] font-bold text-gray-600 uppercase italic">Enterprise SaaS Migration</p>
             </div>
             <div className="p-8 rounded-[2.5rem] glass-morphism border border-white/5 text-center">
                <div className="text-5xl font-black text-blue-500 italic mb-4 italic">6 Weeks</div>
                <div className="text-[10px] font-black text-white uppercase tracking-widest mb-6 border-b border-white/5 pb-4 italic">Ranking Recovery</div>
                <p className="text-[9px] font-bold text-gray-600 uppercase italic">Concrete CMS Site Audit</p>
             </div>
             <div className="p-8 rounded-[2.5rem] glass-morphism border border-white/5 text-center">
                <div className="text-5xl font-black text-white italic mb-4 italic">120+</div>
                <div className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-6 border-b border-white/5 pb-4 italic">Keywords on Page 1</div>
                <p className="text-[9px] font-bold text-gray-600 uppercase italic">Niche Market Domination</p>
             </div>
          </div>

          <div className="max-w-4xl mx-auto p-10 rounded-[3rem] bg-white/[0.01] border border-white/5 text-center italic">
             <div className="text-3xl font-serif text-blue-900 opacity-30 mb-8 italic italic">"</div>
             <p className="text-gray-400 text-lg font-medium italic mb-8 italic uppercase tracking-tight leading-relaxed font-black">
                "Our Concrete CMS site was technically sound but invisible. Their audit uncovered the exactly how the platform was blocking Google. Within two months, we reached P1 for our main keywords."
             </p>
             <div className="text-xs font-black text-white uppercase italic italic">Sarah L. • Marketing Director</div>
          </div>

          <div className="mt-12 text-center italic">
             <Link to="/portfolio" className="text-xs font-black text-white uppercase italic tracking-widest border-b border-blue-900 pb-2 hover:text-blue-500 transition-colors italic">
                See Full SEO Case Studies →
             </Link>
          </div>
        </div>
      </section>

      {/* 4. SERVICES BREAKDOWN (FEATURES → BENEFITS) */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 italic">
            <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4 italic">Capability</h2>
            <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter italic">What Our Concrete CMS <span className="text-blue-500">SEO Services Include</span></p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
             {[
               { f: <Link to="/services/technical-on-page-seo-optimization" className="text-white hover:text-blue-500 transition-colors uppercase italic">Technical SEO Audit</Link>, b: "Fix hidden platform ranking issues" },
               { f: <Link to="/services/keyword-research-intent-mapping" className="text-white hover:text-blue-500 transition-colors uppercase italic">Keyword Research</Link>, b: "Target high-intent niche traffic" },
               { f: "Content Optimization", b: "Improve search relevance & scores" },
               { f: "Speed Optimization", b: "Better Web Vitals & ranking boost" },
               { f: "Schema Markup", b: "Enhanced rich-snippet visibility" },
               { f: <Link to="/services/topical-maps-semantic-authority" className="text-white hover:text-blue-500 transition-colors uppercase italic">Internal Link Strategy</Link>, b: "Build stronger semantic SEO structure" }
             ].map((row, i) => (
               <div key={i} className="p-10 glass-morphism rounded-[2.5rem] border border-white/5 hover:border-blue-500/20 transition-all group relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-blue-600/10 group-hover:bg-blue-600 transition-all"></div>
                  <div className="text-blue-500 mb-6 group-hover:scale-110 transition-transform"><CheckCircle2 className="w-8 h-8" /></div>
                  <h3 className="text-lg font-black text-white hover:text-blue-500 transition-colors mb-2 italic tracking-tighter">{row.f}</h3>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest italic">{row.b}</p>
               </div>
             ))}
          </div>

          <div className="mt-16 text-center italic">
             <button 
               onClick={onBook}
               className="px-12 py-6 bg-orange-600 hover:bg-orange-700 text-white font-black rounded-2xl shadow-2xl uppercase tracking-tighter text-xl transition-all hover:scale-110 active:scale-[0.95] italic"
             >
               Get My Custom SEO Plan
             </button>
          </div>
        </div>
      </section>

      {/* 5. PROCESS SECTION */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 italic">
            <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4 italic italic">Transparency</h2>
            <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter italic italic">How We Improve Your <span className="text-blue-500">Concrete CMS Rankings</span></p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 relative">
             <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 hidden md:block"></div>
             {[
               { s: "01", t: "SEO Audit", d: "Technical + Content + Speed evaluation." },
               { s: "02", t: "Strategy Mapping", d: "Keywords + Architecture structure." },
               { s: "03", t: "Optimization", d: "Fix + Implement platform changes." },
               { s: "04", t: "Growth Tracking", d: "Rankings + traffic + lead reporting." }
             ].map((item, i) => (
               <div key={i} className="z-10 p-10 glass-morphism rounded-[3rem] border border-white/5 bg-[#030712] text-center hover:border-blue-500/30 transition-all">
                  <div className="text-4xl font-black text-blue-900 italic mb-8 italic opacity-40">{item.s}</div>
                  <h3 className="text-sm font-black text-white uppercase italic mb-2 italic tracking-tighter italic">{item.t}</h3>
                  <p className="text-[10px] font-bold text-gray-500 leading-relaxed uppercase tracking-widest italic italic">{item.d}</p>
               </div>
             ))}
          </div>
          
          <div className="mt-16 text-center italic">
             <button 
               onClick={onBook}
               className="px-8 py-4 bg-white/5 border border-white/10 text-white font-black rounded-xl uppercase tracking-tighter text-xs hover:bg-white/10 transition-all italic"
             >
               Start SEO Audit — Delivered in 48-72 Hours
             </button>
          </div>
        </div>
      </section>

      {/* 6. PRICING / OFFER CLARITY */}
      <section className="py-24 px-4 md:px-6 bg-[#030712]" id="pricing">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 italic">
               <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4 italic italic italic">The Investment</h2>
               <p className="text-3xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-6 italic italic italic">Transparent SEO <span className="text-blue-500">Packages</span></p>
               <p className="text-gray-600 uppercase font-black text-[10px] tracking-widest italic">Built for Concrete CMS growth and revenue</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {[
                 { name: "Starter Audit", target: "Platform Diagnostic", items: ["Technical Audit Report", "Keyword Mapping", "Technical Fixes List", "Priority Action Plan"], price: "12,997" },
                 { name: "Growth Opt", target: "Scaling Visibility", items: ["Full On-Page SEO", <Link key="p-growth" to="/services/technical-on-page-seo-optimization" className="text-blue-500 underline underline-offset-4">Advanced Speed Tuning</Link>, "Content Architecture", "Internal Map Creation"], featured: true, price: "24,997" },
                 { name: "Authority Plan", target: "Market Leadership", items: ["Monthly SEO Management", "Link Authority Strategy", "Advanced Content Scaling", "24/7 Priority Support"], price: "49,997" }
               ].map((plan, i) => (
                 <div key={i} className={`p-10 rounded-[3rem] border transition-all flex flex-col ${plan.featured ? 'bg-blue-500/10 border-blue-500 shadow-[0_30px_100px_-20px_rgba(59,130,246,0.5)]' : 'bg-white/5 border-white/10'}`}>
                    <div className="mb-10 text-center">
                       <div className="text-[10px] font-black uppercase text-blue-500 italic mb-1 italic italic italic italic">{plan.name} Package</div>
                       <div className="text-[8px] font-bold text-gray-700 uppercase italic mb-8 italic italic italic tracking-widest italic italic">{plan.target}</div>
                       <div className="flex items-baseline justify-center gap-2">
                          <span className="text-6xl font-black text-white italic tracking-tighter italic leading-none">{plan.price}</span>
                          <span className="text-[10px] font-black text-gray-600 uppercase italic italic italic italic">/ One-time</span>
                       </div>
                    </div>
                    <div className="space-y-4 mb-12 flex-1 pt-10 border-t border-white/5 text-[11px] font-black uppercase tracking-tight text-white/80 italic italic italic italic italic">
                       {plan.items.map((it, i) => (
                         <div key={i} className="flex items-center gap-3">
                            <CheckCircle2 className="w-4 h-4 text-blue-500" />
                            {typeof it === 'string' ? it : it}
                         </div>
                       ))}
                    </div>
                    <button 
                      onClick={onBook}
                      className={`w-full py-5 rounded-2xl font-black uppercase tracking-tighter text-sm transition-all ${plan.featured ? 'bg-orange-600 text-white shadow-xl hover:scale-110 active:scale-95' : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'}`}
                    >
                      {plan.name === 'Starter Audit' ? 'Request Pricing' : (plan.featured ? 'Book Strategy Call' : 'Choose My Plan')}
                    </button>
                    <div className="mt-4 text-center">
                       <span className="text-[8px] font-black text-gray-700 uppercase tracking-widest italic italic">Or Start With a Free Audit First</span>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 7. FAQ / OBJECTION HANDLING */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] border-t border-white/5">
         <div className="max-w-4xl mx-auto font-black">
            <div className="text-center mb-20 italic">
               <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4 italic italic">Certainty</h2>
               <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter italic italic">Frequently Asked Questions</p>
            </div>
            <div className="space-y-4 font-black mt-10">
              {faqs.map((faq, i) => (
                <div key={i} className="glass-morphism rounded-2xl border border-white/10 bg-[#0f172a]/10 overflow-hidden group">
                  <div className="p-6 md:p-8 cursor-pointer flex items-center justify-between">
                    <h4 className="text-base md:text-lg font-black text-white hover:text-blue-500 transition-colors uppercase italic italic italic italic">
                      {faq.question}
                    </h4>
                    <ChevronDown className="w-5 h-5 text-gray-600 transition-transform group-hover:rotate-180" />
                  </div>
                  <div className="px-6 md:px-8 pb-8 pt-0 text-gray-400 leading-relaxed font-bold text-[10px] md:text-xs uppercase italic italic italic">
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-16 text-center italic">
               <button 
                 onClick={onBook}
                 className="px-8 py-4 bg-white/5 border border-white/10 text-white font-black rounded-xl uppercase tracking-widest text-[10px] hover:text-blue-500 transition-colors italic"
               >
                 Still Have Questions? Talk to an Expert →
               </button>
            </div>
         </div>
      </section>

      {/* 8. FINAL CTA / CLOSING SECTION */}
      <section className="py-32 px-4 md:px-6 bg-[#030712] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_150%,rgba(59,130,246,0.15),transparent_70%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-7xl lg:text-9xl font-black text-white uppercase italic tracking-tighter leading-[0.8] mb-10 italic italic italic">
            Ready to Rank Your <br /> <span className="text-blue-500">Concrete CMS Website?</span>
          </h2>
          <p className="text-gray-400 text-xl font-medium mb-12 max-w-2xl mx-auto italic italic italic">
            A Concrete CMS SEO Expert focused on ranking + revenue, not just SEO theory. No long-term commitments required.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
             <button 
               onClick={onBook}
               className="w-full md:w-auto px-12 py-6 bg-orange-600 hover:bg-orange-700 text-white font-black rounded-2xl shadow-[0_30px_100px_-20px_rgba(249,115,22,0.5)] uppercase tracking-tighter text-2xl transition-all hover:scale-110 active:scale-95 flex items-center justify-center gap-4 italic"
             >
               Get Free SEO Audit
             </button>
             <button 
               onClick={onBook}
               className="w-full md:w-auto px-12 py-6 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black rounded-2xl uppercase tracking-tighter text-2xl transition-all italic"
             >
               Book a Call
             </button>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-gray-700 italic italic">
             <span>We respond within 24 hours</span>
             <span>Fast SEO audit</span>
             <span>Clear growth roadmap</span>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 w-full p-4 z-50 md:hidden pointer-events-none">
         <div className="max-w-md mx-auto pointer-events-auto flex gap-2">
            <button 
              onClick={onBook}
              className="flex-1 py-4 bg-orange-600 text-white font-black rounded-xl uppercase tracking-widest text-[10px] shadow-2xl shadow-orange-500/50"
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

export default ConcreteCMSSEOExpert;
