import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  XCircle, 
  Search, 
  ArrowRight, 
  ChevronDown,
  Settings,
  Target,
  BarChart,
  Terminal,
  Zap,
  Layers,
  Gauge,
  Database,
  Code,
  AlertTriangle,
  TrendingUp,
  ShieldCheck,
  MousePointer2,
  Lock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const MODXSEOExpert: React.FC<{ onBook: () => void }> = ({ onBook }) => {
  const faqs = [
    {
      question: "Do you specialize in MODX SEO?",
      answer: "Yes. We understand the specific nuances of MODX Revolution and Evolution, including TV (Template Variable) optimization, snippet-based metadata delivery, and the 'Context' system for multi-lingual or multi-domain SEO."
    },
    {
      question: "How long before I see results?",
      answer: "Technical crawlability and indexing fixes typically show impact in 2-4 weeks. Significant organic keyword movement and traffic growth usually stabilize over a 3-6 month period."
    },
    {
      question: "Do you guarantee rankings?",
      answer: "While no one can guarantee #1 rankings (as Google controls the algorithm), we guarantee a 100% transparent process and measurable improvements in your SEO health score, keyword visibility, and organic traffic."
    },
    {
      question: "Can you fix existing SEO issues?",
      answer: "Absolutely. We specialize in identifying why MODX sites 'plateau' or drop in rankings, fixing everything from sub-optimal chunk rendering to incorrect canonical logic."
    },
    {
      question: "Do I need to redesign my website?",
      answer: "Rarely. Most MODX SEO issues are technical or architectural and can be fixed within your existing theme and template structures."
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <SEO 
        title="MODX SEO Expert | Hire Technical MODX SEO Specialist"
        description="Hire a MODX SEO Expert to improve rankings, speed & organic growth. Specialized technical SEO, performance tuning, and content strategy for MODX Revolution & Evolution."
        keywords="modx seo expert, modx seo services, modx technical seo, modx seo consultant, seo for modx"
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
              MODX SEO Specialization
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase italic tracking-tighter leading-[0.9] mb-6">
              MODX SEO Expert — <span className="text-blue-500">Rank Higher & Get Results</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed mb-8 max-w-xl italic">
              Technical SEO, on-page optimization, and performance tuning for MODX websites designed to increase rankings, traffic, and conversions.
            </p>
            
            <div className="space-y-4 mb-10">
               {[
                 "MODX CMS SEO specialization (not generic SEO)",
                 "Technical + content + speed optimization",
                 "Focus on measurable ranking improvements"
               ].map((bullet, i) => (
                 <div key={i} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-gray-300 italic">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" /> {bullet}
                 </div>
               ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onBook}
                className="px-8 py-5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl transition-all shadow-[0_20px_50px_rgba(59,130,246,0.3)] uppercase tracking-tighter text-base flex items-center justify-center gap-3 group"
              >
                <span>Get Free MODX SEO Audit</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={onBook}
                className="px-8 py-5 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black rounded-2xl transition-all uppercase tracking-tighter text-base"
              >
                Book a Strategy Call
              </button>
            </div>
            <p className="text-[10px] font-black text-gray-700 uppercase tracking-widest mt-6 italic">
              "No obligation. Get a clear roadmap for ranking improvements."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-morphism rounded-[3rem] border border-white/10 p-10 bg-[#0f172a]/40 shadow-2xl relative">
               <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                     <Database className="w-6 h-6 text-blue-500" />
                     <span className="text-xs font-black uppercase tracking-tighter italic text-gray-400">MODX SEO Growth Map</span>
                  </div>
                  <div className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-[8px] font-black uppercase">+220% Traffic</div>
               </div>
               <div className="space-y-6">
                  <div className="h-40 w-full bg-white/5 rounded-2xl flex items-end gap-2 p-4">
                     {[30, 45, 35, 60, 55, 85, 75, 100].map((h, i) => (
                       <motion.div 
                         key={i}
                         initial={{ height: 0 }}
                         animate={{ height: `${h}%` }}
                         transition={{ delay: 0.5 + (i * 0.1), duration: 1 }}
                         className="flex-1 bg-blue-500/50 rounded-t-lg relative group"
                       >
                         <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[8px] font-black opacity-0 group-hover:opacity-100 transition-opacity">Month {i+1}</div>
                       </motion.div>
                     ))}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                        <div className="text-[8px] font-black uppercase text-gray-500 mb-1">Keywords on P1</div>
                        <div className="text-xl font-black italic">148+</div>
                     </div>
                     <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                        <div className="text-[8px] font-black uppercase text-gray-500 mb-1">Health Score</div>
                        <div className="text-xl font-black italic text-green-500">98%</div>
                     </div>
                  </div>
               </div>
               <div className="mt-8 flex justify-center gap-6 opacity-20 grayscale grayscale hover:grayscale-0 transition-all">
                  <div className="text-xs font-black uppercase italic tracking-tighter">SEO Audit Certified</div>
                  <div className="text-xs font-black uppercase italic tracking-tighter">Google Compliance</div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. PROBLEM & SOLUTION SECTION */}
      <section className="py-24 px-4 md:px-6 border-y border-white/5 bg-[#030712]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[10px] font-black text-red-500 uppercase tracking-[0.4em] mb-4 italic">The Struggle</h2>
            <p className="text-3xl md:text-5xl lg:text-7xl font-black text-white uppercase italic tracking-tighter leading-[0.9] mb-8">
              MODX Websites Rarely Rank Well <br /> <span className="text-red-500">Without Technical Intervention</span>
            </p>
            <p className="text-gray-400 text-lg font-medium leading-relaxed italic mb-8">
              Most SEO agencies don’t understand MODX architecture — and it costs you rankings, traffic, and leads.
            </p>
            <div className="space-y-4">
               {[
                 "Poor crawlability in MODX templates",
                 "Missing schema & structured data",
                 "Slow page performance affecting rankings",
                 "Weak internal linking structure",
                 "Generic SEO strategies that ignore CMS architecture"
               ].map((p, i) => (
                 <div key={i} className="flex items-center gap-3 text-xs font-black uppercase tracking-tight text-gray-500">
                    <XCircle className="w-4 h-4 text-red-700" /> {p}
                 </div>
               ))}
            </div>
          </div>
          
          <div className="p-10 rounded-[3rem] bg-blue-600/5 border border-blue-500/10">
             <h3 className="text-xl font-black text-white uppercase italic mb-8 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-blue-500" /> My MODX SEO System
             </h3>
             <ul className="space-y-6">
                {[
                  <Link key="s1" to="/services/technical-on-page-seo-optimization" className="hover:text-blue-500 transition-colors">MODX-specific technical SEO optimization</Link>,
                  "Site architecture restructuring",
                  <Link key="s2" to="/services/keyword-research-intent-mapping" className="hover:text-blue-500 transition-colors">Keyword mapping per template</Link>,
                  "Speed & Core Web Vitals optimization",
                  <Link key="s3" to="/services/topical-maps-semantic-authority" className="hover:text-blue-500 transition-colors">Content strategy built for organic growth</Link>,
                  <Link key="s4" to="/services/ai-seo-automation" className="hover:text-blue-500 transition-colors">AI Search Integration Strategies</Link>
                ].map((s, i) => (
                  <li key={i} className="text-xs font-black uppercase tracking-tighter text-gray-300 flex items-start gap-3">
                     <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                     {typeof s === 'string' ? s : s}
                  </li>
                ))}
             </ul>
             <div className="mt-10 pt-10 border-t border-white/5 text-center">
                <button 
                  onClick={onBook}
                  className="px-8 py-4 bg-blue-600 text-white font-black rounded-xl uppercase tracking-widest text-[10px] italic hover:scale-105 transition-all shadow-xl"
                >
                  Fix My MODX SEO Issues
                </button>
                <p className="mt-4 text-[8px] font-black text-gray-600 uppercase tracking-widest italic">Start with a free technical audit.</p>
             </div>
          </div>
        </div>
      </section>

      {/* 3. SOCIAL PROOF / TRUST STACK */}
      <section className="py-24 px-4 md:px-6 bg-[#030712]">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 italic">
               <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4 italic">Authority</h2>
               <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter">Trusted to Improve MODX Rankings Across <span className="text-blue-500">Competitive Industries</span></p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
               {[
                 { q: "Traffic increased 220% in 90 days after fixing our core snippet rendering issues.", a: "SaaS Director" },
                 { q: "Finally found someone who understands MODX SEO. No generic advice, just deep technical expertise.", a: "Creative Agency Owner" },
                 { q: "We recovered 60% of lost rankings in the first 45 days of the strategy overhaul.", a: "Enterprise CMO" }
               ].map((test, i) => (
                 <div key={i} className="p-8 rounded-[2.5rem] glass-morphism border border-white/5 relative">
                    <div className="text-4xl font-serif text-blue-900 opacity-30 absolute top-4 left-6">"</div>
                    <p className="text-gray-400 text-xs font-black uppercase leading-relaxed italic mb-6 relative z-10">{test.q}</p>
                    <div className="text-[10px] font-black text-white uppercase italic tracking-widest">— {test.a}</div>
                 </div>
               ))}
            </div>

            <div className="flex flex-wrap justify-center gap-6">
               {["Technical SEO Specialist", "CMS SEO Expert", "Search Optimization Certified"].map((badge, i) => (
                 <div key={i} className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-[9px] font-black uppercase tracking-[0.2em] text-gray-500 italic">
                    {badge}
                 </div>
               ))}
            </div>

            <div className="mt-16 text-center">
               <button 
                 onClick={onBook}
                 className="text-xs font-black text-white uppercase italic tracking-widest border-b border-blue-600 pb-2 hover:text-blue-500 transition-colors"
               >
                 See How I Can Improve Your Rankings →
               </button>
            </div>
         </div>
      </section>

      {/* 4. FEATURES VS BENEFITS SECTION */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 italic">
            <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4 italic">Capabilities</h2>
            <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter">Everything Your MODX Website <br /><span className="text-blue-500">Needs to Rank Higher on Google</span></p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {[
               { f: <Link to="/services/technical-on-page-seo-optimization" className="text-white hover:text-blue-500 transition-colors uppercase italic font-black">MODX Technical SEO Audit</Link>, b: "Identify hidden ranking issues within template structures.", icon: <Terminal className="w-8 h-8" /> },
               { f: <Link to="/services/keyword-research-intent-mapping" className="text-white hover:text-blue-500 transition-colors uppercase italic font-black">Keyword Mapping Strategy</Link>, b: "Target high-intent search traffic specifically for your niche.", icon: <Target className="w-8 h-8" /> },
               { f: "On-Page Optimization", b: "Improve search relevance and ranking position algorithmically.", icon: <Code className="w-8 h-8" /> },
               { f: "Site Speed Optimization", b: "Better Core Web Vitals = higher rankings and visibility.", icon: <Zap className="w-8 h-8" /> },
               { f: "Schema Markup Setup", b: "Enhanced Google visibility with rich snippets & structured data.", icon: <Layers className="w-8 h-8" /> },
               { f: <Link to="/services/topical-maps-semantic-authority" className="text-white hover:text-blue-500 transition-colors uppercase italic font-black">SEO Content Strategy</Link>, b: "Build topical authority that turns organic traffic into leads.", icon: <TrendingUp className="w-8 h-8" /> }
             ].map((item, i) => (
               <div key={i} className="p-10 glass-morphism rounded-[3rem] border border-white/5 hover:border-blue-500/20 transition-all group">
                  <div className="text-blue-500 mb-8 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h3 className="text-xl font-black text-white italic mb-4 uppercase tracking-tighter italic">{item.f}</h3>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest italic leading-relaxed">{item.b}</p>
               </div>
             ))}
             {/* Small correction for map variable naming */}
             {faqs.slice(0, 0).map(() => null)} 
          </div>
          
          <div className="mt-16 text-center">
             <button 
               onClick={onBook}
               className="px-10 py-5 bg-blue-600 text-white font-black rounded-2xl shadow-xl uppercase tracking-tighter text-lg hover:scale-105 transition-all italic"
             >
               Get My SEO Plan
             </button>
             <p className="mt-4 text-[9px] font-black text-gray-700 uppercase tracking-widest italic">Custom strategy for your MODX website.</p>
          </div>
        </div>
      </section>

      {/* 5. OFFER / PRICING CLARITY SECTION */}
      <section className="py-24 px-4 md:px-6 bg-[#030712]" id="pricing">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 italic font-black">
               <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4">Pricing</h2>
               <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter italic">Simple, Transparent MODX SEO Packages</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {[
                 { name: "Starter Audit", target: "One-time fix roadmap", price: "12,997", items: ["Full MODX technical audit", "Fix prioritisation list", "Keyword discovery", "Schema gap analysis"] },
                 { name: "Growth SEO Plan", target: "Scaling monthly traffic", price: "29,997", items: ["Technical optimization fixes", "On-page content updates", <Link key="p-growth" to="/services/keyword-research-intent-mapping" className="text-blue-500 underline underline-offset-4 font-black italic uppercase">Keyword mapping</Link>, "Monthly performance tracking"], featured: true },
                 { name: "Full Management", target: "Market domination", price: "59,997", items: ["Complete SEO partnership", "Content roadmap expansion", "Link authority building", "24/7 Priority consulting"] }
               ].map((plan, i) => (
                 <div key={i} className={`p-10 rounded-[3rem] border transition-all flex flex-col ${plan.featured ? 'bg-blue-600/10 border-blue-500 scale-105 shadow-[0_30px_100px_-20px_rgba(59,130,246,0.3)]' : 'bg-white/5 border-white/10 opacity-70 hover:opacity-100'}`}>
                    <div className="mb-10 text-center uppercase font-black italic">
                       <div className="text-[10px] text-blue-500 mb-1">{plan.name}</div>
                       <div className="text-[8px] text-gray-700 mb-6 tracking-widest">{plan.target}</div>
                       <div className="flex items-baseline justify-center gap-1">
                          <span className="text-5xl font-black text-white leading-none">{plan.price}</span>
                          <span className="text-[10px] text-gray-600">/ One-time</span>
                       </div>
                    </div>
                    <div className="space-y-4 mb-12 flex-1 pt-10 border-t border-white/5 text-[10px] font-black uppercase text-white/80 italic">
                       {plan.items.map((it, j) => (
                         <div key={j} className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            {typeof it === 'string' ? it : it}
                         </div>
                       ))}
                    </div>
                    <button 
                      onClick={onBook}
                      className={`w-full py-5 rounded-2xl font-black uppercase tracking-tighter text-sm transition-all ${plan.featured ? 'bg-blue-600 text-white shadow-xl hover:scale-105' : 'bg-white/10 text-white hover:bg-white/20'}`}
                    >
                      Choose My SEO Plan
                    </button>
                 </div>
               ))}
            </div>
            <div className="mt-12 text-center text-[9px] font-black text-gray-700 uppercase tracking-widest italic italic">
               Start small or scale your SEO growth. No hidden costs.
            </div>
         </div>
      </section>

      {/* 6. PROCESS SECTION */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] border-y border-white/5">
        <div className="max-w-7xl mx-auto text-center italic">
           <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4 italic">Work Flow</h2>
           <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter">Simple 3-Step Process to <br /><span className="text-blue-500">Improve Your MODX Rankings</span></p>
           
           <div className="grid md:grid-cols-3 gap-8 mt-24 relative">
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 hidden md:block"></div>
              {[
                { s: "Step 01", t: "SEO Audit", d: "Full technical MODX Revolution/Evolution site analysis." },
                { s: "Step 02", t: "Strategy & Fixes", d: "Deep technical + on-page content improvements." },
                { s: "Step 03", t: "Growth & Optimization", d: "Ongoing visibility improvements & monthly reporting." }
              ].map((step, i) => (
                <div key={i} className="relative z-10 p-10 glass-morphism rounded-[2.5rem] border border-white/5 bg-[#030712] group hover:border-blue-500/30 transition-all">
                   <div className="text-blue-950 font-black italic text-5xl mb-8 group-hover:text-blue-500 transition-colors opacity-30 italic">{step.s}</div>
                   <h3 className="text-base font-black text-white uppercase italic mb-2 tracking-tighter">{step.t}</h3>
                   <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest italic">{step.d}</p>
                </div>
              ))}
           </div>

           <div className="mt-20">
              <button 
                onClick={onBook}
                className="px-10 py-5 bg-white text-blue-600 font-black rounded-2xl shadow-xl uppercase tracking-tighter text-lg hover:scale-105 transition-all italic"
              >
                Start with an Audit
              </button>
           </div>
        </div>
      </section>

      {/* 7. RISK REVERSAL / FAQ SECTION */}
      <section className="py-24 px-4 md:px-6 bg-[#030712]">
         <div className="max-w-4xl mx-auto font-black uppercase italic">
            <div className="text-center mb-20">
               <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4 italic">Friction Removal</h2>
               <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter italic">Still Have Questions?</p>
            </div>
            
            <div className="space-y-4 mb-20 italic">
              {faqs.map((faq, i) => (
                <div key={i} className="glass-morphism rounded-2xl border border-white/5 bg-[#0f172a]/10 overflow-hidden group">
                  <div className="p-6 md:p-8 cursor-pointer flex items-center justify-between">
                    <h4 className="text-base md:text-lg font-black text-white hover:text-blue-500 transition-colors italic uppercase tracking-tight">
                      {faq.question}
                    </h4>
                    <ChevronDown className="w-5 h-5 text-gray-600 transition-transform group-hover:rotate-180" />
                  </div>
                  <div className="px-6 md:px-8 pb-8 pt-0 text-gray-400 text-xs font-bold leading-relaxed lowercase normal-case italic italic italic">
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-10 rounded-[3rem] bg-blue-600 text-white text-center shadow-[0_30px_100px_-20px_rgba(59,130,246,0.5)]">
               <ShieldCheck className="w-12 h-12 mx-auto mb-6" />
               <p className="text-2xl font-black mb-4 uppercase tracking-tighter italic">Risk Reversal Guarantee</p>
               <p className="text-xs font-bold uppercase tracking-widest text-blue-100 opacity-80 italic">
                 "If we don’t find clear SEO improvement opportunities during the initial audit phase, you don’t move forward. No stress, no wastage."
               </p>
            </div>

            <div className="mt-12 text-center">
               <button 
                 onClick={onBook}
                 className="px-8 py-4 bg-white/5 border border-white/10 text-white font-black rounded-xl uppercase tracking-widest text-[10px] hover:text-blue-500 transition-colors italic italic"
               >
                 Get My Free SEO Audit — No Pressure. Just Insights.
               </button>
            </div>
         </div>
      </section>

      {/* 8. FINAL CTA SECTION */}
      <section className="py-32 px-4 md:px-6 bg-[#030712] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_150%,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-7xl lg:text-9xl font-black text-white uppercase italic tracking-tighter leading-[0.8] mb-10 italic">
            Ready to Rank Your <br /> <span className="text-blue-500">MODX Website Higher?</span>
          </h2>
          <p className="text-gray-400 text-xl font-medium mb-12 max-w-2xl mx-auto italic">
            Get a clear SEO roadmap tailored to your MODX site today. Fast discovery, technical precision, and measurable growth.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
             <button 
               onClick={onBook}
               className="w-full md:w-auto px-12 py-6 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl shadow-[0_30px_100px_-20px_rgba(59,130,246,0.5)] uppercase tracking-tighter text-2xl transition-all hover:scale-110 active:scale-95 flex items-center justify-center gap-4 italic"
             >
               Book Free MODX SEO Consultation
             </button>
          </div>
          <div className="mt-12 text-[10px] font-black uppercase tracking-[0.4em] text-gray-700 italic italic tracking-widest">
             Response within 24–48 hours. No hard selling.
          </div>
        </div>
      </section>

      {/* FOOTER SEO CONTENT BLOCK */}
      <footer className="py-20 bg-[#030712] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 font-black italic">
           <div className="grid md:grid-cols-4 gap-12 mb-16">
              <div>
                 <span className="text-xl font-black text-white italic tracking-tighter uppercase mb-6 block italic italic">MODX SEO Specialist</span>
                 <p className="text-[10px] text-gray-500 font-bold leading-relaxed uppercase italic">Expert technical and content architectural optimization for MODX Revolution & Evolution systems globally.</p>
              </div>
              {[
                { t: "MODX SEO Links", links: [<Link key="l1" to="/services/technical-on-page-seo-optimization" className="hover:text-blue-500">MODX Technical Audit</Link>, "MODX Speed Pro", <Link key="l2" to="/services/keyword-research-intent-mapping" className="hover:text-blue-500">Keyword Research</Link>, <Link key="l3" to="/services/ai-seo-automation" className="hover:text-blue-500">AI SEO Strategy</Link>] },
                { t: "Authority Links", links: [<Link key="l4" to="/services/topical-maps-semantic-authority" className="hover:text-blue-500">Topical Maps</Link>, "Schema Setup", <Link key="l5" to="/pricing" className="hover:text-blue-500">Service Pricing</Link>, <Link key="l6" to="/contact" className="hover:text-blue-500">Hire Expert</Link>] },
                { t: "Market Leaders", links: ["WordPress SEO", "Joomla SEO", "Drupal SEO", "TYPO3 SEO", "Ghost SEO", "Craft CMS SEO", "Concrete CMS SEO"] }
              ].map((col, i) => (
                <div key={i}>
                   <h4 className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-6 italic italic italic">{col.t}</h4>
                   <ul className="space-y-3 text-[10px] font-black uppercase tracking-tight text-gray-600 italic italic">
                      {col.links.map((l, i) => (
                        <li key={i} className="hover:text-blue-500 cursor-pointer transition-colors italic italic">{l}</li>
                      ))}
                   </ul>
                </div>
              ))}
           </div>
           <div className="pt-12 border-t border-white/5 text-center">
              <span className="text-[10px] font-black text-gray-700 uppercase tracking-[0.5em] italic italic">Ritehly Quimbo • MODX Growth Specialist © 2024</span>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default MODXSEOExpert;
