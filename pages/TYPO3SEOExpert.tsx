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
  Code,
  Terminal,
  Cpu,
  Layers
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const TYPO3SEOExpert: React.FC<{ onBook: () => void }> = ({ onBook }) => {
  const faqs = [
    {
      question: "How long does TYPO3 SEO take?",
      answer: "Technical crawlability and indexing fixes often show results in 2-4 weeks. Competitive keyword stabilization and authority growth typically take 3-6 months depending on the industry competition."
    },
    {
      question: "Do you work with multilingual TYPO3 websites?",
      answer: "Yes. Multilingual SEO is one of TYPO3's strongest features. We optimize hreflang tags, language-specific sitemaps, and content architecture to ensure your global presence is correctly indexed."
    },
    {
      question: "Can you improve Core Web Vitals for TYPO3?",
      answer: "Absolutely. We go beyond basic caching. We optimize TYPO3's rendering pipeline, implement advanced image compression (WebP), and fine-tune resource delivery to hit green scores in Lighthouse."
    },
    {
      question: "Do you provide SEO content strategy?",
      answer: "Yes. We don't just fix technical issues. We map keywords to intent and build topical maps that establish your TYPO3 site as an authority in your niche."
    },
    {
      question: "What TYPO3 SEO tools do you use?",
      answer: "We leverage industry standards like Ahrefs and SEMrush alongside CMS-specific tools like Yoast SEO for TYPO3, CS SEO, and custom audit scripts for the TYPO3 database."
    }
  ];

  const tools = [
    { name: "Search Console", icon: <Search className="w-5 h-5" /> },
    { name: "Analytics", icon: <BarChart className="w-5 h-5" /> },
    { name: "Ahrefs", icon: <Target className="w-5 h-5" /> },
    { name: "SEMrush", icon: <Zap className="w-5 h-5" /> },
    { name: "Screaming Frog", icon: <Terminal className="w-5 h-5" /> },
    { name: "PageSpeed Insights", icon: <Zap className="w-5 h-5 text-yellow-500" /> }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white overflow-hidden">
      <SEO 
        title="TYPO3 SEO Expert | Rankings, Traffic & Leads Optimization"
        description="Hire a TYPO3 SEO Expert to improve rankings, speed & organic growth. Specialized technical SEO, performance engineering, and content strategy for TYPO3 websites."
        keywords="typo3 seo expert, typo3 seo services, typo3 technical seo, typo3 consultant, hire typo3 seo"
      />

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 px-4 md:px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(239,68,68,0.1),transparent_70%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-[10px] font-black uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              TYPO3 SEO Specialist
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black uppercase italic tracking-tighter leading-[0.9] mb-6">
              TYPO3 SEO Expert — <span className="text-red-500">Rank Higher & Scale Growth</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed mb-8 max-w-xl">
              We help businesses optimize TYPO3 websites with technical SEO, Core Web Vitals improvements, and scalable strategies designed to increase qualified organic traffic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={onBook}
                className="px-8 py-5 bg-red-600 hover:bg-red-700 text-white font-black rounded-2xl transition-all shadow-[0_20px_50px_rgba(239,68,68,0.3)] uppercase tracking-tighter text-base flex items-center justify-center gap-3 group"
              >
                <span>Book Free TYPO3 Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={onBook}
                className="px-8 py-5 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black rounded-2xl transition-all uppercase tracking-tighter text-base"
              >
                Request a Free SEO Audit
              </button>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-[10px] font-black uppercase tracking-widest text-gray-500 border-t border-white/5 pt-6">
              <div className="flex items-center gap-2 italic"><CheckCircle2 className="w-3 h-3 text-red-500" /> TYPO3 Specific Mastery</div>
              <div className="flex items-center gap-2 italic"><CheckCircle2 className="w-3 h-3 text-red-500" /> Core Web Vitals Focus</div>
              <div className="flex items-center gap-2 italic"><CheckCircle2 className="w-3 h-3 text-red-500" /> Multilingual Authority</div>
              <div className="flex items-center gap-2 italic"><CheckCircle2 className="w-3 h-3 text-red-500" /> Transparent Reporting</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-morphism rounded-[3rem] border border-white/10 p-8 md:p-10 bg-[#0f172a]/30 shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-6 flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
               </div>
               <div className="text-sm font-black text-white italic uppercase tracking-tighter mb-8 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-red-500" />
                  Performance Benchmarks
               </div>
               <div className="space-y-8">
                  {[
                    { label: "Technical Indexing", value: 96, icon: <Terminal className="w-4 h-4" /> },
                    { label: "Schema Coverage", value: 92, icon: <Layers className="w-4 h-4" /> },
                    { label: "Lighthouse Speed", value: 98, icon: <Zap className="w-4 h-4" /> }
                  ].map((stat, i) => (
                    <div key={i}>
                       <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.2em] mb-3 text-gray-400">
                          <span className="flex items-center gap-2">{stat.icon} {stat.label}</span>
                          <span className="text-white italic">{stat.value}%</span>
                       </div>
                       <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${stat.value}%` }}
                            transition={{ duration: 1.5, delay: 0.5 + (i * 0.2) }}
                            className="h-full bg-gradient-to-r from-red-600 to-orange-500"
                          />
                       </div>
                    </div>
                  ))}
               </div>
               <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/5 flex items-center justify-between group-hover:bg-white/10 transition-colors">
                  <div>
                    <div className="text-[10px] font-black text-gray-500 uppercase italic">Monthly Lead Volume</div>
                    <div className="text-3xl font-black text-white italic">+312%</div>
                  </div>
                  <TrendingUp className="w-10 h-10 text-green-500" />
               </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-600/20 blur-[60px] rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUST BAR / AUTHORITY STRIP */}
      <section className="py-12 border-y border-white/5 bg-[#030712]/50">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-8">
              <span className="text-[10px] font-black text-gray-600 uppercase tracking-[0.5em] italic">Trusted By Businesses Using TYPO3</span>
           </div>
           <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30 grayscale hover:grayscale-0 transition-opacity duration-700">
              {["Enterprise CMS", "Global SaaS", "Public Sector", "Tech Leaders", "Market Dominators"].map((brand, i) => (
                <span key={i} className="text-xl md:text-2xl font-black text-white uppercase italic tracking-tighter">{brand}</span>
              ))}
           </div>
           <div className="mt-8 text-center">
              <Link to="/portfolio" className="text-[10px] font-black text-red-500 uppercase tracking-widest hover:text-red-400 transition-colors">
                 See SEO Case Studies →
              </Link>
           </div>
        </div>
      </section>

      {/* 3. PROBLEM + PAIN AGITATION SECTION */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-[10px] font-black text-red-500 uppercase tracking-[0.4em] mb-4">The Agitation</h2>
            <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-[0.9] mb-8 italic">
              Why Most TYPO3 Websites <br /> <span className="text-red-500">Struggle to Rank</span>
            </p>
            <p className="text-gray-400 text-lg font-medium max-w-xl leading-relaxed italic">
              Even powerful TYPO3 websites can lose rankings because of technical SEO issues, weak site structure, slow performance, and poor optimization strategies.
            </p>
          </div>
          
          <div className="flex-1 grid sm:grid-cols-2 gap-4">
            {[
              { title: "Technical Issues", items: ["Poor Core Web Vitals", "Indexing problems", "Duplicate content", "Canonical errors"] },
              { title: "Content Gaps", items: ["Thin content", "Missing metadata", "Weak targeting", "Low hierarchy"] },
              { title: "Performance", items: ["Slow page speed", "Large image sizes", "Unoptimized scripts", "UX Friction"] },
              { title: "Business Impact", items: ["Low lead quality", "Traffic decline", "Low CV Rate", "Competitor dominance"] }
            ].map((box, i) => (
              <div key={i} className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all group">
                 <h3 className="text-sm font-black text-white uppercase italic mb-4 flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-900 group-hover:text-red-600 transition-colors" />
                    {box.title}
                 </h3>
                 <ul className="space-y-2">
                    {box.items.map((item, j) => (
                       <li key={j} className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{item}</li>
                    ))}
                 </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 text-center">
           <button 
             onClick={onBook}
             className="px-8 py-4 bg-red-600/10 border border-red-500/20 text-red-400 font-black rounded-xl uppercase tracking-widest text-[10px] italic hover:bg-red-600/20 transition-all"
           >
             Get a TYPO3 SEO Audit — Identify Your Highest-Impact Opportunities
           </button>
        </div>
      </section>

      {/* 4. SOLUTION SECTION */}
      <section className="py-24 px-4 md:px-6 bg-red-600 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_10%,rgba(255,255,255,0.1),transparent_50%)] pointer-events-none"></div>
         <div className="max-w-7xl mx-auto text-center relative z-10">
            <h2 className="text-[10px] font-black text-red-900 uppercase tracking-[0.4em] mb-4 italic">The Relief</h2>
            <p className="text-3xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-none mb-8 italic">
              A TYPO3 SEO Strategy Built for <br /> <span className="text-red-900">Sustainable Organic Growth</span>
            </p>
            <p className="text-red-100 text-lg mb-16 max-w-2xl mx-auto font-medium italic">
              We combine technical SEO, <Link to="/services/ai-seo-automation" className="underline decoration-red-400 underline-offset-4 hover:text-white transition-colors">AI search optimization</Link>, UX improvements, and performance engineering to improve rankings and conversions.
            </p>

            <div className="grid md:grid-cols-4 gap-4">
               {[
                 { title: "Technical SEO", icon: <Settings className="w-8 h-8" />, desc: "Crawl optimization, XML sitemaps, robots.txt, canonical implementation." },
                 { title: "On-Page SEO", icon: <Layout className="w-8 h-8" />, desc: "Keyword mapping, metadata, content structure, internal linking, URLs." },
                 { title: "Performance", icon: <Zap className="w-8 h-8" />, desc: "Core Web Vitals, image compression, TYPO3 caching, CDN setup." },
                 { title: "Growth Strategy", icon: <Target className="w-8 h-8" />, desc: "Content planning, competitor analysis, ROI reporting, conversion tracking." }
               ].map((service, i) => (
                 <div key={i} className="p-8 rounded-[2.5rem] bg-red-700/50 border border-red-400/30 text-left hover:scale-[1.02] transition-transform shadow-2xl">
                    <div className="text-white mb-6 bg-red-600 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg">{service.icon}</div>
                    <h3 className="text-xl font-black text-white uppercase italic tracking-tight mb-3">{service.title}</h3>
                    <p className="text-red-100 text-xs font-bold leading-relaxed uppercase">{service.desc}</p>
                 </div>
               ))}
            </div>

            <div className="mt-16">
               <button 
                 onClick={onBook}
                 className="px-10 py-6 bg-white text-red-600 font-black rounded-2xl shadow-2xl uppercase tracking-tighter text-lg hover:scale-110 transition-all active:scale-95"
               >
                 Schedule a TYPO3 SEO Strategy Call
               </button>
            </div>
         </div>
      </section>

      {/* 5. FEATURES VS BENEFITS SECTION */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-[10px] font-black text-red-500 uppercase tracking-[0.4em] mb-4 italic">The Value</h2>
            <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none italic">
              What You Get — And What It <br /> <span className="text-red-500">Means for Your Business</span>
            </p>
          </div>

          <div className="max-w-5xl mx-auto overflow-hidden rounded-[2.5rem] border border-white/5 glass-morphism">
             <table className="w-full text-left border-collapse">
                <thead>
                   <tr className="bg-white/[0.03]">
                      <th className="p-6 md:p-8 text-[10px] font-black text-white uppercase tracking-widest italic border-r border-white/5">TYPO3 SEO Feature</th>
                      <th className="p-6 md:p-8 text-[10px] font-black text-red-500 uppercase tracking-widest italic">Business Benefit</th>
                   </tr>
                </thead>
                <tbody className="text-xs font-bold uppercase text-gray-500 tracking-tight">
                   {[
                     { f: "Technical SEO Audit", b: "Identify ranking blockers" },
                     { f: "Core Web Vitals Optimization", b: "Faster pages & lower bounce rates" },
                     { f: "Structured Data Setup", b: "More visibility in rich snippets" },
                     { f: "Internal Linking Strategy", b: "Improved crawlability & topical authority" },
                     { f: "SEO Content Optimization", b: <Link to="/services/keyword-research-intent-mapping" className="text-red-500 underline underline-offset-4">More high-intent keyword relevance</Link> },
                     { f: "Competitor ROI Analysis", b: "Discover and capture ranking opportunities" }
                   ].map((row, i) => (
                     <tr key={i} className="border-t border-white/5 hover:bg-white/[0.02] transition-colors">
                        <td className="p-6 md:p-8 border-r border-white/5 text-white/80 italic">{row.f}</td>
                        <td className="p-6 md:p-8 text-gray-400">{row.b}</td>
                     </tr>
                   ))}
                </tbody>
             </table>
          </div>
        </div>
      </section>

      {/* 6. TYPO3-SPECIFIC SEO EXPERTISE SECTION */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[10px] font-black text-red-500 uppercase tracking-[0.4em] mb-4 italic">Domain Authority</h2>
            <p className="text-3xl md:text-5xl lg:text-7xl font-black text-white uppercase italic tracking-tighter leading-[0.9] mb-8 italic">
              Why TYPO3 SEO Requires <br /> <span className="text-red-500">Specialized Expertise</span>
            </p>
            <p className="text-gray-400 text-lg mb-10 max-w-xl italic leading-relaxed">
              Standard SEO agencies often struggle with TYPO3's complex architecture. We master the nuances from routing to upgrade preservation.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-10">
               {[
                 "TYPO3 Routing & Slugs", "Multilingual hreflang",
                 "Upgrade SEO Preservation", "Yoast SEO for TYPO3",
                 "CS SEO Integration", "Schema.org Architecture",
                 "Core Caching Framework", "Complex Redirection"
               ].map((skill, i) => (
                 <div key={i} className="flex items-center gap-3 text-[10px] font-black uppercase text-white/50 italic">
                    <Code className="w-4 h-4 text-red-500" />
                    {skill}
                 </div>
               ))}
            </div>

            <button 
              onClick={onBook}
              className="px-8 py-5 bg-white/5 border border-white/10 text-white font-black rounded-2xl hover:bg-white/10 transition-all uppercase tracking-tighter"
            >
              Talk to a TYPO3 SEO Specialist
            </button>
          </div>

          <div className="relative">
             <div className="glass-morphism p-10 rounded-[3rem] border border-red-600/20 bg-red-600/5 shadow-2xl relative z-10">
                <div className="text-5xl font-black text-white italic tracking-tighter mb-4 italic">Scalable SEO</div>
                <div className="text-[10px] font-black text-red-500 uppercase tracking-[0.3em] italic mb-8 border-b border-white/5 pb-6">Enterprise Infrastructure Expertise</div>
                <div className="space-y-6">
                   <div className="p-6 bg-black/40 rounded-2xl border border-white/5">
                      <div className="text-[9px] font-black text-gray-500 uppercase italic mb-2 italic">Specialized Entity Mapping</div>
                      <Link to="/services/topical-maps-semantic-authority" className="text-lg font-black text-white italic hover:text-red-500 transition-colors uppercase italic underline underline-offset-4 decoration-red-500">Semantic Data Integration →</Link>
                   </div>
                   <div className="p-6 bg-black/40 rounded-2xl border border-white/5">
                      <div className="text-[9px] font-black text-gray-500 uppercase italic mb-2 italic">Legacy Site Migration</div>
                      <div className="text-lg font-black text-white italic uppercase italic">0% Ranking Loss Risk</div>
                   </div>
                </div>
             </div>
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600/10 blur-[80px] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* 7. PROCESS / HOW IT WORKS */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 italic">
            <h2 className="text-[10px] font-black text-red-500 uppercase tracking-[0.4em] mb-4 italic italic">The Framework</h2>
            <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter italic">Our Proven <span className="text-red-500">TYPO3 SEO Process</span></p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 relative">
             <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 hidden md:block"></div>
             {[
               { step: "01", title: "Discovery", desc: "Technical ranking & intent research." },
               { step: "02", title: "Strategy", desc: "Roadmap building & KPI definition." },
               { step: "03", title: "Execute", desc: "Technical fixes & on-page work." },
               { step: "04", title: "Scale", desc: "Performance tuning & traffic analysis." }
             ].map((item, i) => (
               <div key={i} className="z-10 p-8 glass-morphism rounded-[2.5rem] border border-white/5 bg-black/60 text-center hover:border-red-500/30 transition-all">
                  <div className="text-6xl font-black text-red-900 italic mb-6 opacity-30 italic">{item.step}</div>
                  <h3 className="text-lg font-black text-white uppercase italic tracking-tight mb-2 italic">{item.title}</h3>
                  <p className="text-[10px] font-bold text-gray-500 leading-relaxed uppercase tracking-wider italic">{item.desc}</p>
               </div>
             ))}
          </div>
          
          <div className="mt-20 text-center">
             <button 
               onClick={onBook}
               className="px-10 py-5 bg-white text-red-600 font-black rounded-2xl shadow-2xl uppercase tracking-tighter text-lg hover:scale-105 transition-all"
             >
               Start with a Free SEO Review
             </button>
          </div>
        </div>
      </section>

      {/* 8. CASE STUDIES / RESULTS SECTION */}
      <section className="py-24 px-4 md:px-6 bg-[#030712]">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 italic">
               <h2 className="text-[10px] font-black text-red-500 uppercase tracking-[0.4em] mb-4 italic italic italic">Evidence</h2>
               <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter italic italic">Real SEO Results for <span className="text-red-500">TYPO3 Websites</span></p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                 { client: "Global Logistics", growth: "+148%", metric: "Organic Leads", domain: "Multi-regional TYPO3" },
                 { client: "Marketplace X", growth: "Top 3", metric: "High-Intent Keywords", domain: "Large-scale v14" },
                 { client: "Tech Innovator", growth: "98/100", metric: "Mobile Performance", domain: "SaaS Enterprise" }
               ].map((res, i) => (
                 <div key={i} className="p-10 glass-morphism rounded-[3rem] border border-white/5 hover:border-red-500/20 transition-all group overflow-hidden relative">
                    <div className="absolute -top-12 -right-12 w-24 h-24 bg-red-600/5 blur-[50px] group-hover:bg-red-600/10 transition-all rounded-full"></div>
                    <div className="text-5xl font-black text-red-500 italic mb-4 group-hover:scale-110 transition-transform duration-500 italic">{res.growth}</div>
                    <div className="text-[10px] font-black text-white uppercase tracking-[0.2em] mb-1 italic">{res.metric}</div>
                    <div className="text-[8px] font-bold text-gray-600 uppercase tracking-[0.2em] mb-8 border-b border-white/5 pb-4 italic">{res.domain}</div>
                    <div className="flex items-center justify-between">
                       <span className="text-xs font-black text-gray-500 uppercase italic italic">{res.client}</span>
                       <ArrowRight className="w-4 h-4 text-red-500" />
                    </div>
                 </div>
               ))}
            </div>

            <div className="mt-16 text-center">
               <Link to="/portfolio" className="text-gray-400 font-black uppercase text-xs italic tracking-widest hover:text-red-500 transition-colors underline decoration-red-900 underline-offset-8 decoration-2">
                  View More SEO Success Stories →
               </Link>
            </div>
         </div>
      </section>

      {/* 9. TESTIMONIALS */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 italic">
            <h2 className="text-[10px] font-black text-red-500 uppercase tracking-[0.4em] mb-4 italic italic italic italic">Social Proof</h2>
            <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter italic italic italic">What Clients Say About Our <span className="text-red-500">Expertise</span></p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { q: "Our organic leads grew by 3x within 4 months of their technical audit.", n: "David R.", c: "Logistics Director" },
              { q: "The only agency that actually understood how TYPO3's caching framework works.", n: "Elena M.", c: "Head of Marketing" },
              { q: " Rankings stayed stable during a massive version migration. Exceptional precision.", n: "Michael K.", c: "E-commerce Founder" }
            ].map((t, i) => (
              <div key={i} className="p-8 rounded-3xl border border-white/5 bg-white/[0.01] relative italic">
                 <div className="text-3xl font-serif text-red-900 opacity-40 mb-4 italic">"</div>
                 <p className="text-gray-400 text-sm font-medium mb-8 leading-relaxed italic uppercase italic">{t.q}</p>
                 <div>
                    <div className="text-xs font-black text-white uppercase italic italic">{t.n}</div>
                    <div className="text-[9px] font-bold text-gray-600 uppercase tracking-widest italic">{t.c}</div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. TOOLS & TECHNOLOGY STACK */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 italic">
            <h2 className="text-[10px] font-black text-red-500 uppercase tracking-[0.4em] mb-4 italic italic italic italic italic">The Stack</h2>
            <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter italic italic italic italic">Our TYPO3 SEO <span className="text-red-500">Technology Stack</span></p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {tools.map((tool, i) => (
              <div key={i} className="px-6 py-4 glass-morphism rounded-2xl border border-white/5 flex items-center gap-3 group hover:border-red-500/30 transition-all hover:scale-105">
                 <div className="text-red-500 group-hover:scale-110 transition-transform">{tool.icon}</div>
                 <span className="text-xs font-black text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors italic">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. PRICING / PACKAGES SECTION */}
      <section className="py-24 px-4 md:px-6 bg-[#030712]" id="pricing">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 md:mb-24 italic">
               <h2 className="text-[10px] font-black text-red-500 uppercase tracking-[0.4em] mb-4 italic italic italic italic italic italic">Transparency</h2>
               <p className="text-3xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-none italic italic italic italic italic">TYPO3 <span className="text-red-500">Growth Packages</span></p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {[
                 { name: "Starter", target: "Small TYPO3 Sites", price: "12,497", items: ["Full SEO Audit", "Metadata Optimization", "Core Technical Fixes", "Monthly Reporting"] },
                 { name: "Growth", target: "Scaling Entities", price: "29,997", items: ["Full Technical SEO", <Link key="p-con" to="/services/technical-on-page-seo-optimization" className="text-red-500 underline underline-offset-4">Advanced Content SEO</Link>, "CWV Optimization", "Competitor Analysis"], featured: true },
                 { name: "Enterprise", target: "Global Multilingual", price: "59,997", items: ["Advanced Technical", "International SEO", "Dedicated Strategist", "CRO Recommendations"] }
               ].map((plan, i) => (
                 <div key={i} className={`p-10 rounded-[3rem] border transition-all flex flex-col ${plan.featured ? 'bg-red-600/10 border-red-500 shadow-[0_30px_100px_-20px_rgba(239,68,68,0.5)]' : 'bg-white/5 border-white/10'}`}>
                    <div className="mb-10">
                       <div className="text-[10px] font-black uppercase text-red-500 italic mb-1 italic">{plan.name} Plan</div>
                       <div className="text-[8px] font-bold text-gray-600 uppercase mb-8 italic italic tracking-widest">Best For: {plan.target}</div>
                       <div className="flex items-baseline gap-2">
                          <span className="text-6xl font-black text-white italic tracking-tighter italic leading-none">{plan.price}</span>
                          <span className="text-[10px] font-black text-gray-600 uppercase italic italic">/ One-time</span>
                       </div>
                    </div>
                    <div className="space-y-4 mb-12 flex-1 pt-10 border-t border-white/5">
                       {plan.items.map((it, j) => (
                         <div key={j} className="flex items-center gap-3 text-xs font-black uppercase tracking-tight text-white/80 italic italic">
                            <CheckCircle2 className="w-4 h-4 text-red-500" />
                            {typeof it === 'string' ? it : it}
                         </div>
                       ))}
                    </div>
                    <button 
                      onClick={onBook}
                      className={`w-full py-5 rounded-2xl font-black uppercase tracking-tighter text-sm transition-all ${plan.featured ? 'bg-red-600 text-white shadow-xl hover:scale-105 active:scale-95' : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'}`}
                    >
                      {plan.name === 'Enterprise' ? 'Request Custom Proposal' : (plan.featured ? 'Book Strategy Call' : 'Get Started')}
                    </button>
                    <div className="mt-4 text-center">
                       <span className="text-[8px] font-black text-gray-700 uppercase tracking-widest italic italic">Flexible Retainers • No Locked Contracts</span>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 12. RISK REVERSAL SECTION */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] border-t border-white/5">
         <div className="max-w-4xl mx-auto p-10 md:p-16 glass-morphism rounded-[3rem] border border-red-500/20 bg-red-600/5 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-20"><ShieldCheck className="w-20 h-20 text-red-600" /></div>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-8 italic italic">Transparent SEO Without the <span className="text-red-500">Guesswork</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12 text-center">
               {["Clear Deliverables", "Monthly Progress Reviews", "Ethical White-Hat", "KPI Focused", "No Long-Term Bind", "TYPO3 Certified Experts"].map((tr, i) => (
                 <div key={i} className="flex flex-col items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500" />
                    <span className="text-[10px] font-black text-gray-500 uppercase italic tracking-tight">{tr}</span>
                 </div>
               ))}
            </div>
            <button 
              onClick={onBook}
              className="px-12 py-5 bg-red-600 hover:bg-red-700 text-white font-black rounded-2xl shadow-2xl uppercase tracking-tighter text-xl transition-all hover:scale-105 active:scale-95"
            >
              Speak With an SEO Expert
            </button>
         </div>
      </section>

      {/* 13. FAQ SECTION */}
      <section className="py-24 px-4 md:px-6 bg-[#030712]">
         <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20 italic">
               <h2 className="text-[10px] font-black text-red-500 uppercase tracking-[0.4em] mb-4 italic italic italic italic italic italic italic">Certainty</h2>
               <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter italic italic italic italic italic italic">Frequently Asked <span className="text-red-500">Questions</span></p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="glass-morphism rounded-2xl border border-white/5 bg-[#0f172a]/10 overflow-hidden group">
                  <div className="p-6 md:p-8 cursor-pointer flex items-center justify-between">
                    <h4 className="text-base md:text-lg font-black text-white tracking-tight group-hover:text-red-500 transition-colors uppercase italic italic">
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
               <span className="text-gray-600 font-black uppercase text-[10px] italic tracking-[0.2em] mb-4 block">Still Have Questions?</span>
               <button 
                 onClick={onBook}
                 className="px-8 py-4 bg-white/5 border border-white/10 text-white font-black rounded-xl uppercase tracking-tighter text-xs hover:bg-white/10 transition-all hover:text-red-500"
               >
                 Book a Free Consultation →
               </button>
            </div>
         </div>
      </section>

      {/* 14. FINAL CTA SECTION */}
      <section className="py-32 px-4 md:px-6 bg-[#030712] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_150%,rgba(239,68,68,0.2),transparent_70%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-7xl lg:text-9xl font-black text-white uppercase italic tracking-tighter leading-[0.8] mb-10 italic">
            Ready to Grow Your <br /> <span className="text-red-500">TYPO3 Traffic?</span>
          </h2>
          <p className="text-gray-400 text-xl font-medium mb-12 max-w-2xl mx-auto italic">
            Get a tailored TYPO3 SEO strategy focused on rankings, leads, and measurable business growth. 
            No jargon. No pressure. Just results.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
             <button 
               onClick={onBook}
               className="w-full md:w-auto px-12 py-6 bg-red-600 hover:bg-red-700 text-white font-black rounded-2xl shadow-[0_30px_100px_-20px_rgba(239,68,68,0.5)] uppercase tracking-tighter text-2xl transition-all hover:scale-110 active:scale-95 flex items-center justify-center gap-4"
             >
               Book Free Consultation
             </button>
             <button 
               onClick={onBook}
               className="w-full md:w-auto px-12 py-6 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black rounded-2xl uppercase tracking-tighter text-2xl transition-all"
             >
               Request Free Audit
             </button>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-gray-700 italic">
             <span>No pressure sales call</span>
             <span>Personalized recommendations</span>
             <span>Fast response time</span>
          </div>
        </div>
      </section>

      {/* 15. FOOTER SEO CONTENT BLOCK */}
      <footer className="py-20 bg-[#030712] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid md:grid-cols-4 gap-12 mb-16">
              <div>
                 <span className="text-xl font-black text-white italic tracking-tighter uppercase mb-6 block italic">TYPO3 SEO Experts</span>
                 <p className="text-[10px] text-gray-500 font-bold leading-relaxed uppercase italic">High-performance technical and content engineering for enterprise-scale TYPO3 websites.</p>
              </div>
              {[
                { t: "Internal Links", links: ["TYPO3 Technical SEO", "TYPO3 Speed Optimization", "SEO Audit Services", "SEO Consulting", "Core Web Vitals Optimization", "Structured Data Services", "SEO Content Strategy"] },
                { t: "CMS Expertise", links: ["WordPress SEO", "Joomla SEO", "Drupal SEO", "Magento SEO", "Shopify SEO"] },
                { t: "Market Growth", links: ["Local Hub SEO", "AI Integration", "Performance SEM", "Automation", "Lead Flow"] }
              ].map((col, i) => (
                <div key={i}>
                   <h4 className="text-[10px] font-black text-red-500 uppercase tracking-widest mb-6 italic italic italic">{col.t}</h4>
                   <ul className="space-y-3 text-[10px] font-black uppercase tracking-tight text-gray-600 italic">
                      {col.links.map((l, j) => (
                        <li key={j} className="hover:text-red-500 cursor-pointer transition-colors italic">{l}</li>
                      ))}
                   </ul>
                </div>
              ))}
           </div>
           <div className="pt-12 border-t border-white/5 text-center">
              <span className="text-[10px] font-black text-gray-700 uppercase tracking-[0.5em] italic">Ritehly Quimbo • TYPO3 SEO & Growth Architect © 2024</span>
           </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 w-full p-4 z-50 md:hidden pointer-events-none">
         <div className="max-w-md mx-auto pointer-events-auto flex gap-2">
            <button 
              onClick={onBook}
              className="flex-1 py-4 bg-red-600 text-white font-black rounded-xl uppercase tracking-widest text-[10px] shadow-2xl shadow-red-500/50"
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

export default TYPO3SEOExpert;
