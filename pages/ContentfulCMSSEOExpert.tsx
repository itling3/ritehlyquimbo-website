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
  AlertTriangle,
  MousePointer2,
  Lock,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const ContentfulCMSSEOExpert: React.FC<{ onBook: () => void }> = ({ onBook }) => {
  const faqs = [
    {
      question: "How is Contentful CMS SEO different from WordPress SEO?",
      answer: "Contentful is a headless CMS, meaning it doesn't provide the 'frontend' out of the box. Unlike WordPress which has plugins like Yoast, SEO in Contentful must be architected into your content model and implemented correctly in your frontend (Next.js, Gatsby, etc.) to ensure Google can crawl and index your dynamic content."
    },
    {
      question: "How long does SEO take to show results?",
      answer: "Technical crawlability and indexing fixes often show impact in 2-4 weeks. Significant organic keyword movement and lead growth typically take 3-6 months depending on competition."
    },
    {
      question: "Do you guarantee rankings?",
      answer: "No ethical SEO can guarantee #1 rankings because we don't control Google. However, we guarantee a specialized technical framework that historically increases visibility, positions, and organic traffic."
    },
    {
      question: "Can you work with my development team?",
      answer: "Absolutely. We specialize in providing precise technical specifications for developers, ensuring that SEO requirements are integrated directly into your CI/CD pipeline and frontend code."
    },
    {
      question: "Do I need to redesign my website?",
      answer: "Rarely. Most Contentful SEO issues are related to content modeling, API delivery, or frontend rendering (SSR/ISR) which can be optimized without a full visual redesign."
    }
  ];

  const tools = [
    { name: "Search Console", icon: <Search className="w-5 h-5" /> },
    { name: "Ahrefs", icon: <Target className="w-5 h-5" /> },
    { name: "Screaming Frog", icon: <Terminal className="w-5 h-5" /> },
    { name: "Contentful CLI", icon: <Code className="w-5 h-5" /> },
    { name: "Lighthouse", icon: <Gauge className="w-5 h-5 text-yellow-500" /> },
    { name: "Vercel Analytics", icon: <BarChart className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <SEO 
        title="Contentful CMS SEO Expert | Rankings & Headless SEO Specialist"
        description="Hire a Contentful CMS SEO Expert to improve rankings, speed & organic growth. Specialized technical SEO, headless architecture optimization, and content strategy for Contentful."
        keywords="contentful seo expert, contentful seo services, headless cms seo, contentful technical seo, seo for contentful"
      />

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 px-4 md:px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(168,85,247,0.1),transparent_70%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-[10px] font-black uppercase tracking-widest mb-6">
               Headless CMS SEO Specialization
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase italic tracking-tighter leading-[0.9] mb-6">
              Contentful CMS SEO Expert — <span className="text-purple-500">Turn Your Site Into a Traffic Engine</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed mb-8 max-w-xl">
              Technical SEO, content strategy, and performance optimization tailored specifically for Contentful websites that want measurable growth—not generic SEO packages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button 
                onClick={onBook}
                className="px-8 py-5 bg-purple-600 hover:bg-purple-700 text-white font-black rounded-2xl transition-all shadow-[0_20px_50px_rgba(168,85,247,0.3)] uppercase tracking-tighter text-base flex items-center justify-center gap-3 group"
              >
                <span>Get Free SEO Audit</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={onBook}
                className="px-8 py-5 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black rounded-2xl transition-all uppercase tracking-tighter text-base"
              >
                Book a 15-Min Strategy Call
              </button>
            </div>
            <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest mb-8 italic">
              "No obligation. Actionable SEO insights in 24–48 hours."
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-[10px] font-black uppercase tracking-widest text-gray-500 border-t border-white/5 pt-8">
              <div className="flex items-center gap-3 italic"><CheckCircle2 className="w-4 h-4 text-purple-500" /> Contentful technical SEO</div>
              <div className="flex items-center gap-3 italic"><CheckCircle2 className="w-4 h-4 text-purple-500" /> AI + Google optimization</div>
              <div className="flex items-center gap-3 italic"><CheckCircle2 className="w-4 h-4 text-purple-500" /> Speed + Web Vitals fixes</div>
              <div className="flex items-center gap-3 italic"><CheckCircle2 className="w-4 h-4 text-purple-500" /> Conversion-focused strategy</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-morphism rounded-[3rem] border border-white/10 p-10 bg-[#0f172a]/40 shadow-2xl overflow-hidden group">
               <div className="flex items-center justify-between mb-10 text-purple-500">
                  <Database className="w-8 h-8" />
                  <TrendingUp className="w-8 h-8" />
               </div>
               <div className="space-y-8">
                  {[
                    { label: "Indexing Score", value: 98 },
                    { label: "Content Reach", value: 320, isGrowth: true },
                    { label: "Conversion Lift", value: 2.5, isX: true }
                  ].map((stat, i) => (
                    <div key={i}>
                       <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-2 text-gray-400">
                          <span>{stat.label}</span>
                          <span className="text-white italic">{stat.isGrowth ? '+' : ''}{stat.value}{stat.isX ? 'x' : '%'}</span>
                       </div>
                       <div className="h-1.5 w-full bg-white/5 rounded-full">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${stat.isX ? (stat.value / 4) * 100 : Math.min(stat.value, 100)}%` }}
                            transition={{ duration: 1.5, delay: 0.5 + (i * 0.2) }}
                            className="h-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                          />
                       </div>
                    </div>
                  ))}
               </div>
               <div className="mt-12 text-center">
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest italic mb-2">Trusted by startups & SaaS teams</p>
                  <div className="flex justify-center gap-4 opacity-30 grayscale grayscale">
                     <span className="text-[10px] font-black uppercase">Startups</span>
                     <span className="text-[10px] font-black uppercase">SaaS</span>
                     <span className="text-[10px] font-black uppercase">eCommerce</span>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. PROBLEM → AGITATION → SOLUTION SECTION */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] relative border-y border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-[10px] font-black text-red-500 uppercase tracking-[0.4em] mb-4 italic">The Friction</h2>
            <p className="text-3xl md:text-5xl lg:text-7xl font-black text-white uppercase italic tracking-tighter leading-[0.9] mb-8">
              Most Contentful CMS Websites Are <br /> <span className="text-red-500">Built for Developers—Not Search</span>
            </p>
            <p className="text-gray-400 text-lg font-medium leading-relaxed italic mb-8">
              That’s why they look great… but fail to rank, convert, or generate consistent organic traffic.
            </p>
            <button 
              onClick={onBook}
              className="px-8 py-4 bg-red-600/10 border border-red-500/20 text-red-400 font-black rounded-xl uppercase tracking-widest text-[10px] italic hover:bg-red-600/20 transition-all shadow-xl"
            >
              Fix My Contentful SEO — Find out what’s blocking your rankings
            </button>
          </div>
          
          <div className="flex-1 grid gap-4">
             {[
               { t: "Headless Architecture Misconfig", d: "Poor indexation due to incorrect SSR/ISR settings.", icon: <AlertTriangle className="w-5 h-5 text-red-700" />, prob: true },
               { t: "Missing SEO Foundations", d: "Weak titles, schema, and internal linking in the content model.", icon: <XCircle className="w-5 h-5 text-red-700" />, prob: true },
               { t: "Content Intent Gaps", d: "Pages aren't mapped to commercial or informational intent.", icon: <Target className="w-5 h-5 text-red-700" />, prob: true },
               { t: "Contentful Tech Expertise", d: <Link key="link1" to="/services/technical-on-page-seo-optimization" className="text-purple-500 hover:underline">Technical SEO built for headless architecture.</Link>, sol: true },
               { t: "Scalable Content Strategy", d: <Link key="link2" to="/services/keyword-research-intent-mapping" className="text-purple-500 hover:underline">Content strategy mapped to search intent.</Link>, sol: true },
               { t: "AI Search Readiness", d: <Link key="link3" to="/services/ai-seo-automation" className="text-purple-500 hover:underline">Structured data for LLMs and AI search visibility.</Link>, sol: true }
             ].map((box, i) => (
               <div key={i} className={`p-6 rounded-2xl border ${box.prob ? 'border-red-500/10 bg-red-500/5' : 'border-purple-500/10 bg-purple-500/5'} flex items-start gap-4 transition-all group`}>
                  <div className="mt-1">{box.prob ? box.icon : <CheckCircle2 className="w-5 h-5 text-purple-600 font-black" />}</div>
                  <div>
                     <h3 className="text-[10px] font-black text-white uppercase italic mb-1 italic italic italic italic">{box.t}</h3>
                     <div className="text-[9px] font-bold text-gray-500 leading-relaxed uppercase tracking-widest italic italic italic">{box.d}</div>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 3. AUTHORITY / TRUST STACK */}
      <section className="py-24 px-4 md:px-6 bg-[#030712]">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 italic">
               <h2 className="text-[10px] font-black text-purple-500 uppercase tracking-[0.4em] mb-4 italic">Social Proof</h2>
               <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter italic">Trusted by <span className="text-purple-500">Growth-Focused Teams</span></p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
               {[
                 { v: "+320%", l: "Organic Traffic Growth", s: "SaaS Platform" },
                 { v: "2.5x", l: "Conversion Rate Improvement", s: "eCommerce Brand" },
                 { v: "98/100", l: "Average PageSpeed Score", s: "Next.js + Contentful" }
               ].map((stat, i) => (
                 <div key={i} className="p-8 rounded-[3rem] glass-morphism border border-white/5 text-center group hover:border-purple-500/30 transition-all">
                    <div className="text-5xl font-black text-purple-500 italic mb-3 group-hover:scale-110 transition-transform italic">{stat.v}</div>
                    <div className="text-[10px] font-black text-white uppercase tracking-widest mb-1 italic italic italic">{stat.l}</div>
                    <div className="text-[8px] font-bold text-gray-700 uppercase italic italic italic italic italic tracking-widest italic">{stat.s}</div>
                 </div>
               ))}
            </div>

            <div className="flex flex-wrap justify-center gap-6 mb-16">
               {["Technical SEO Specialist", "Headless CMS SEO Optimization", "Core Web Vitals Expert"].map((badge, i) => (
                 <div key={i} className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-[9px] font-black uppercase tracking-[0.2em] text-gray-500 italic">
                    {badge}
                 </div>
               ))}
            </div>

            <div className="text-center">
               <Link to="/portfolio" className="text-xs font-black text-purple-500 uppercase tracking-widest border-b border-purple-900 pb-2 hover:border-purple-500 transition-colors">
                  See Case Studies — Real results from real Contentful projects →
               </Link>
            </div>
         </div>
      </section>

      {/* 4. FEATURES → BENEFITS BREAKDOWN */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(168,85,247,0.05),transparent_50%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 italic">
            <h2 className="text-[10px] font-black text-purple-500 uppercase tracking-[0.4em] mb-4 italic">Execution</h2>
            <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter italic">Everything Your Contentful CMS <br /><span className="text-purple-500">Needs to Rank, Scale & Convert</span></p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
             {[
               { f: <Link to="/services/technical-on-page-seo-optimization" className="text-white hover:text-purple-500 transition-colors uppercase italic font-black underline underline-offset-8 decoration-purple-950">Technical SEO for Contentful</Link>, b: "Fix indexing, crawling, and headless architecture issues." },
               { f: <Link to="/services/keyword-research-intent-mapping" className="text-white hover:text-purple-500 transition-colors uppercase italic font-black underline underline-offset-8 decoration-purple-950">High-Intent Keyword Strategy</Link>, b: "Attract organic traffic that actually converts into sales." },
               { f: <Link to="/services/topical-maps-semantic-authority" className="text-white hover:text-purple-500 transition-colors uppercase italic font-black underline underline-offset-8 decoration-purple-950">Semantic Content Optimization</Link>, b: "Rank for commercial and AI search queries as an authority." },
               { f: "Speed & Core Web Vitals", b: "Improve load times for better UX and higher ranking scores." },
               { f: "Internal Linking Mastery", b: "Boost topical authority across all nested content structures." },
               { f: "SEO Audit & Growth Reporting", b: "Know exactly what's working and how to scale your reach." }
             ].map((item, i) => (
               <div key={i} className="flex gap-6 items-start group">
                  <div className="mt-1 w-12 h-12 bg-purple-600/10 border border-purple-500/20 rounded-2xl flex items-center justify-center text-purple-500 group-hover:scale-110 transition-transform">
                     <Zap className="w-6 h-6" />
                  </div>
                  <div>
                     <h3 className="text-lg font-black text-white hover:text-purple-500 transition-colors mb-2 italic tracking-tighter italic">{item.f}</h3>
                     <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-relaxed italic italic">{item.b}</p>
                  </div>
               </div>
             ))}
             {/* Small logic check for variable naming */}
             {faqs.slice(0,0).map(() => null)}
          </div>
          
          <div className="mt-16 text-center">
             <button 
               onClick={onBook}
               className="px-10 py-5 bg-purple-600 text-white font-black rounded-2xl shadow-xl uppercase tracking-tighter text-lg hover:scale-105 transition-all italic italic"
             >
               Get My SEO Strategy — Built specifically for Contentful CMS
             </button>
          </div>
        </div>
      </section>

      {/* 5. PROCESS / HOW IT WORKS */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] border-b border-white/5">
        <div className="max-w-7xl mx-auto text-center italic">
           <h2 className="text-[10px] font-black text-purple-500 uppercase tracking-[0.4em] mb-4 italic">The Path</h2>
           <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter">A Simple Process to Improve Your <br /><span className="text-purple-500">Contentful CMS SEO</span></p>
           
           <div className="grid md:grid-cols-5 gap-4 mt-24 relative">
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 hidden md:block"></div>
              {[
                { s: "Step 01", t: "SEO Audit", d: "Technical + Content + Performance evaluation." },
                { s: "Step 02", t: "Competitive Map", d: "Keyword & Competitor Analysis in your niche." },
                { s: "Step 03", t: "Strategy Plan", d: "Custom content & technical engineering roadmap." },
                { s: "Step 04", t: "Implementation", d: "Execution & Optimization of site structure." },
                { s: "Step 05", t: "Growth Tracking", d: "Monthly reporting and scaling of results." }
              ].map((step, i) => (
                <div key={i} className="relative z-10 p-8 glass-morphism rounded-[2rem] border border-white/5 bg-[#030712] transition-all hover:border-purple-500/30 group">
                   <div className="text-purple-950 font-black italic text-4xl mb-6 opacity-30 group-hover:text-purple-500 group-hover:opacity-100 transition-all italic">{step.s}</div>
                   <h3 className="text-[10px] font-black text-white uppercase italic mb-2 italic tracking-tight italic">{step.t}</h3>
                   <p className="text-[8px] font-bold text-gray-700 uppercase tracking-widest italic italic">{step.d}</p>
                </div>
              ))}
           </div>

           <div className="mt-20 p-8 border border-white/5 rounded-[2rem] bg-white/[0.01] inline-block">
              <p className="text-xs font-black text-purple-500 uppercase italic italic italic italic">"No technical overwhelm on your side—we handle everything."</p>
              <button 
                onClick={onBook}
                className="mt-6 px-10 py-4 bg-white text-purple-600 font-black rounded-xl shadow-xl uppercase tracking-tighter text-base hover:scale-105 transition-all italic"
              >
                Start My SEO Audit — First step takes less than 24 hours
              </button>
           </div>
        </div>
      </section>

      {/* 6. PRICING / OFFER CLARITY SECTION */}
      <section className="py-24 px-4 md:px-6 bg-[#030712]" id="pricing">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 italic">
               <h2 className="text-[10px] font-black text-purple-500 uppercase tracking-[0.4em] mb-4 italic">Investment</h2>
               <p className="text-3xl md:text-6xl font-black text-white uppercase italic tracking-tighter italic">Transparent SEO <span className="text-purple-500">Engagement Options</span></p>
               <p className="text-gray-600 uppercase font-black text-[10px] tracking-widest mt-6">We'll recommend the best option after your audit</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {[
                 { 
                   name: "SEO Audit", 
                   target: "Diagnostic Phase", 
                   price: "14,997", 
                   items: ["Full Technical Review", "Content Model Check", "Headless Architecture Audit", "Action Plan Report"] 
                 },
                 { 
                   name: "Monthly Growth", 
                   target: "Standard Scaling", 
                   price: "29,997", 
                   items: ["Keyword Tracking", "On-Page Optimization", "Technical Fixes Implementation", <Link key="p-growth" to="/services/keyword-research-intent-mapping" className="text-purple-500 underline underline-offset-4 uppercase font-black italic">Content Strategy</Link>], 
                   featured: true 
                 },
                 { 
                   name: "Full Partnership", 
                   target: "Aggressive Expansion", 
                   price: "59,997", 
                   items: ["Full Strategy + Execution", "Conversion SEO Scaling", "Internal Link Engineering", "Priority Global Support"] 
                 }
               ].map((plan, i) => (
                 <div key={i} className={`p-10 rounded-[3rem] border transition-all flex flex-col ${plan.featured ? 'bg-purple-600/10 border-purple-500 shadow-[0_30px_100px_-20px_rgba(168,85,247,0.3)]' : 'bg-white/5 border-white/10'}`}>
                    <div className="mb-10 text-center uppercase font-black italic">
                       <div className="text-[10px] text-purple-500 mb-1 italic">{plan.name}</div>
                       <div className="text-[8px] text-gray-700 tracking-widest mb-8">{plan.target}</div>
                       <div className="flex items-baseline justify-center gap-1">
                          <span className="text-5xl font-black text-white leading-none italic">{plan.price}</span>
                          <span className="text-[10px] text-gray-600 italic">/ one-time</span>
                       </div>
                    </div>
                    <div className="space-y-4 mb-12 flex-1 pt-10 border-t border-white/5 text-[10px] font-black uppercase text-white/80 italic tracking-tight">
                       {plan.items.map((it, j) => (
                         <div key={j} className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                            {typeof it === 'string' ? it : it}
                         </div>
                       ))}
                    </div>
                    <button 
                      onClick={onBook}
                      className={`w-full py-5 rounded-2xl font-black uppercase tracking-tighter text-sm transition-all ${plan.featured ? 'bg-purple-600 text-white shadow-xl hover:scale-105 active:scale-95' : 'bg-white/10 text-white hover:bg-white/20'}`}
                    >
                      {plan.name === 'SEO Audit' ? 'Request Audit' : 'Get Pricing Details'}
                    </button>
                 </div>
               ))}
            </div>
            <p className="mt-12 text-center text-[10px] font-black text-gray-700 uppercase tracking-widest italic">
              Custom plans available for enterprise Contentful CMS setups.
            </p>
         </div>
      </section>

      {/* 7. RISK REVERSAL + FAQ */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] border-t border-white/5">
         <div className="max-w-4xl mx-auto font-black italic uppercase">
            <div className="text-center mb-20 italic">
               <h2 className="text-[10px] font-black text-purple-500 uppercase tracking-[0.4em] mb-4 italic italic">Certainty</h2>
               <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter italic italic">Still Have Questions?</p>
            </div>
            
            <div className="space-y-4 mb-16 italic font-black">
              {faqs.map((faq, i) => (
                <div key={i} className="glass-morphism rounded-2xl border border-white/5 bg-[#0f172a]/10 overflow-hidden group">
                  <div className="p-6 md:p-8 cursor-pointer flex items-center justify-between">
                    <h4 className="text-base md:text-lg font-black text-white hover:text-purple-500 transition-colors italic uppercase tracking-tight italic italic">
                      {faq.question}
                    </h4>
                    <ChevronDown className="w-5 h-5 text-gray-600 transition-transform group-hover:rotate-180" />
                  </div>
                  <div className="px-6 md:px-8 pb-8 pt-0 text-gray-400 text-xs font-bold leading-relaxed lowercase normal-case italic italic italic italic italic">
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-10 rounded-[3rem] bg-white/[0.01] border border-white/5 text-center relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-1 h-full bg-purple-600 group-hover:w-full transition-all duration-700 opacity-10 pointer-events-none"></div>
               <ShieldCheck className="w-12 h-12 mx-auto text-purple-500 mb-6 group-hover:scale-110 transition-transform" />
               <p className="text-xl font-black mb-4 uppercase tracking-tighter italic">If we don’t identify meaningful SEO opportunities in your audit, you don’t pay.</p>
               <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest italic">No commitment. Full transparency. Risk-free audit.</p>
            </div>

            <div className="mt-12 text-center">
               <button 
                 onClick={onBook}
                 className="px-10 py-5 bg-purple-600/10 border border-purple-500/20 text-purple-400 font-black rounded-2xl uppercase tracking-tighter italic hover:bg-purple-600/20 transition-all italic italic"
               >
                 Get Risk-Free SEO Audit
               </button>
            </div>
         </div>
      </section>

      {/* 8. FINAL CTA SECTION */}
      <section className="py-32 px-4 md:px-6 bg-[#030712] relative overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_150%,rgba(168,85,247,0.15),transparent_70%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-7xl lg:text-9xl font-black text-white uppercase italic tracking-tighter leading-[0.8] mb-10 italic italic">
            Ready to Turn Your Site <br /> <span className="text-purple-500 md:block">Into a Traffic Engine?</span>
          </h2>
          <p className="text-gray-400 text-xl font-medium mb-12 max-w-2xl mx-auto italic italic">
            SEO tailored specifically for Contentful CMS. Built for rankings, conversions, and AI search visibility.
          </p>
          <button 
            onClick={onBook}
            className="px-12 py-6 bg-purple-600 hover:bg-purple-700 text-white font-black rounded-2xl shadow-[0_30px_100px_-20px_rgba(168,85,247,0.5)] uppercase tracking-tighter text-2xl transition-all hover:scale-110 active:scale-95 flex items-center justify-center gap-4 mx-auto italic"
          >
            Book My SEO Consultation
          </button>
          <div className="mt-12 text-[10px] font-black uppercase tracking-[0.4em] text-gray-700 italic italic">
             Limited onboarding slots each month. Response within 24–48 hours.
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContentfulCMSSEOExpert;
