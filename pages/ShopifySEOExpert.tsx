import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Globe2, 
  ShoppingBag, 
  Search, 
  Bot, 
  BarChart4, 
  Lightbulb,
  AlertCircle,
  Clock,
  Plus,
  Minus,
  Settings,
  MousePointerClick
} from 'lucide-react';
import SEO from '../components/SEO';
import { SERVICE_DETAILS } from '../constants';

const ShopifySEOExpert: React.FC<{ onBook: () => void }> = ({ onBook }) => {
  const service = SERVICE_DETAILS['shopify-seo'];
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  if (!service) return null;

  const painPoints = [
    {
      p: "Your products are great, but no one finds them",
      s: "We target high-intent transactional keywords that put your products in front of ready-to-buy customers."
    },
    {
      p: "You rank for nothing that brings buyers",
      s: "Our keyword strategy filters out informational junk and focuses on pure revenue alignment."
    },
    {
      p: "Your competitors dominate Google results",
      s: "We build a technical and semantic moat that allows your store to outrank even legacy brands."
    },
    {
      p: "AI search tools don't mention your brand",
      s: "We optimize your entity authority so your products are recommended by ChatGPT, Perplexity, and SGE."
    }
  ];

  const frameworkSteps = [
    {
      t: "Collection Page Optimization",
      d: "Shopify's collections are your most powerful SEO assets. We optimize hierarchy and semantic triggers."
    },
    {
      t: "Product Schema Engineering",
      d: "Deep implementation of JSON-LD for rich results, pricing, and availability to boost CTR."
    },
    {
      t: "Duplicate Content Resolution",
      d: "Fixing Shopify's canonical issues and faceted navigation bloat that dilutes ranking power."
    },
    {
      t: "Internal Link Funnels",
      d: "Strategically distributing authority from high-traffic pages to high-margin products."
    },
    {
      t: "Speed & Web Vitals Stacking",
      d: "Aggressively optimizing themes and apps to hit lightning-fast page experience scores."
    }
  ];

  const processSteps = [
    { n: "01", t: "SEO Audit", d: "Deep technical dive to identify exactly what is blocking your revenue growth." },
    { n: "02", t: "Strategy Plan", d: "Mapping your products to intent, structure, and semantic authority silos." },
    { n: "03", t: "Implementation", d: "Hands-on technical fixes, content optimization, and performance tracking." }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30 selection:text-purple-200 overflow-x-hidden">
      <SEO 
        title={service.seoTitle}
        description={service.metaDescription}
        keywords={service.keywords}
      />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full mb-8">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse"></span>
                <span className="text-[10px] font-black uppercase tracking-widest text-purple-400 italic">Verified Shopify Specialist</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black italic tracking-tighter leading-[0.85] mb-8 uppercase">
                Rank Your Shopify Store <span className="text-purple-500">Higher</span>
              </h1>
              <p className="text-xl md:text-2xl font-bold text-gray-400 italic mb-10 max-w-xl leading-snug">
                {service.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link 
                  to="/contact" 
                  className="px-8 py-5 bg-white text-black font-black italic uppercase tracking-tighter text-lg rounded-2xl hover:bg-purple-500 hover:text-white transition-all text-center flex items-center justify-center gap-2"
                >
                  Get Free Shopify SEO Audit <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                   to="/contact" 
                   className="px-8 py-5 border border-white/10 text-white font-black italic uppercase tracking-tighter text-lg rounded-2xl hover:bg-white/5 transition-all text-center"
                >
                   Book a Strategy Call
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-white/5">
                {[
                  { t: "24-48h Audit", d: "Fast identification of blocking issues" },
                  { t: "Revenue Focus", d: "Targeting clicks that turn into cash" },
                  { t: "Google + AI Ready", d: "Visible in ChatGPT and SGE" }
                ].map((item, i) => (
                  <div key={i}>
                    <h3 className="text-lg font-black italic tracking-tighter text-purple-500 mb-1">{item.t}</h3>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{item.d}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative lg:h-[600px] w-full bg-gradient-to-br from-white/5 to-transparent rounded-[3rem] border border-white/10 p-8 overflow-hidden group"
            >
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
               {/* Mock Dashboard Representation */}
               <div className="relative h-full flex flex-col justify-center items-center">
                  <div className="w-full max-w-md aspect-video bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl relative">
                     <div className="flex items-center justify-between mb-8">
                        <div className="flex gap-2">
                           <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                           <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                           <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                        </div>
                        <div className="text-[10px] font-black text-gray-500 tracking-widest uppercase italic">Organic Revenue Graph</div>
                     </div>
                     <div className="flex items-end gap-2 h-32 mb-4">
                        {[40, 60, 45, 80, 70, 95, 85, 120, 110, 150].map((h, i) => (
                           <motion.div 
                              key={i} 
                              className="flex-1 bg-purple-500/60 rounded-t-sm"
                              initial={{ height: 0 }}
                              animate={{ height: `${h}%` }}
                              transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                           />
                        ))}
                     </div>
                     <div className="text-center">
                        <div className="text-3xl font-black italic text-white mb-1">+312%</div>
                        <div className="text-[9px] font-black text-purple-400 uppercase tracking-[0.2em] italic">Organic Revenue Growth</div>
                     </div>
                  </div>
                  <div className="mt-8 flex gap-4">
                     <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl">
                        <div className="text-[10px] font-black text-gray-500 uppercase italic">Conversion</div>
                        <div className="text-xl font-bold tracking-tighter">+24%</div>
                     </div>
                     <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl">
                        <div className="text-[10px] font-black text-gray-500 uppercase italic">Avg. Position</div>
                        <div className="text-xl font-bold tracking-tighter">#2.4</div>
                     </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PROBLEM/AGITATION SECTION --- */}
      <section className="py-24 md:py-32 px-4 bg-[#0a0a0a] relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter leading-none mb-6">
              MOST SHOPIFY STORES DON'T FAIL BECAUSE OF PRODUCTS — <br />
              <span className="text-purple-500">THEY FAIL BECAUSE OF SEO</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-medium italic text-lg">
              You have a high-quality store, but if you're invisible to Google and AI search, you're relying entirely on paid ads that eat your profit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {painPoints.map((item, i) => (
              <div key={i} className="p-8 bg-white/5 border border-white/5 rounded-[2rem] hover:border-purple-500/30 transition-all group">
                <div className="w-12 h-12 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black italic tracking-tighter mb-4 text-white uppercase">{item.p}</h3>
                <p className="text-sm font-medium text-gray-400 leading-relaxed italic">{item.s}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 p-12 bg-purple-500 rounded-[3rem] relative overflow-hidden text-center group">
             <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <div className="relative z-10">
                <h3 className="text-3xl md:text-5xl font-black italic text-black tracking-tighter mb-8 uppercase">The Shopify Strategy Built for Modern Search</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 text-black">
                   <div className="font-bold flex flex-col items-center gap-2">
                       <CheckCircle2 className="w-8 h-8" />
                       <span className="italic uppercase tracking-tight">Structured for Products</span>
                   </div>
                   <div className="font-bold flex flex-col items-center gap-2">
                       <CheckCircle2 className="w-8 h-8" />
                       <span className="italic uppercase tracking-tight">AI Retrieval Optimized</span>
                   </div>
                   <div className="font-bold flex flex-col items-center gap-2">
                       <CheckCircle2 className="w-8 h-8" />
                       <span className="italic uppercase tracking-tight">Semantic Collection Design</span>
                   </div>
                </div>
                <Link 
                   to="/contact"
                   className="inline-flex items-center gap-2 px-10 py-5 bg-black text-white font-black italic uppercase tracking-tighter text-xl rounded-2xl hover:scale-105 transition-all shadow-2xl"
                >
                   Fix My Shopify SEO <ArrowRight className="w-6 h-6" />
                </Link>
                <div className="mt-6 text-[10px] font-black text-black/60 uppercase tracking-widest italic">Get a breakdown of what's blocking your rankings</div>
             </div>
          </div>
        </div>
      </section>

      {/* --- WHY SHOPIFY SEO IS DIFFERENT --- */}
      <section className="py-24 md:py-32 px-4 bg-black relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-3xl">
               <div className="text-purple-500 text-sm font-black italic tracking-[0.3em] uppercase mb-4">Platform Specialization</div>
               <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter leading-none mb-6">
                 SHOPIFY SEO REQUIRES A <span className="text-purple-500">DIFFERENT STRATEGY</span> THAN TRADITIONAL SEO
               </h2>
               <p className="text-gray-400 font-medium italic text-lg leading-relaxed">
                  Most generic SEO agencies treat Shopify like a regular blog. We treat it like the high-stakes commerce machine it is.
               </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <ShoppingBag className="w-6 h-6" />, t: "Collection Path Optimization", d: "Strategic organization of categories to ensure maximum semantic relevance for top-level search terms." },
              { icon: <Bot className="w-6 h-6" />, t: "Product Schema Engineering", d: "Advanced JSON-LD for rich snippets including price, stock, and high-conversion rating signals." },
              { icon: <Globe2 className="w-6 h-6" />, t: "Duplicate Content Handling", d: "Fixing Shopify's native canonical errors that split your ranking power across multiple URLs." },
              { icon: <MousePointerClick className="w-6 h-6" />, t: "Conversion Funnel Linking", d: "Internal linking systems that guide bots and users towards high-profit product pages." },
              { icon: <Zap className="w-6 h-6" />, t: "Web Vitals Performance", d: "Aggressive optimization of fonts, scripts, and app payloads to hit lightning speed on mobile." },
              { icon: <Settings className="w-6 h-6" />, t: "App Stack SEO Audit", d: "Auditing your Shopify app ecosystem to eliminate performance leaks and script bloat." }
            ].map((item, i) => (
              <div key={i} className="p-10 bg-white/5 border border-white/5 rounded-[3rem] hover:bg-white/[0.08] transition-all group border-b-4 border-b-purple-500/20">
                <div className="w-14 h-14 bg-purple-500/10 border border-purple-500/20 rounded-2xl flex items-center justify-center text-purple-500 mb-8 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black italic tracking-tighter text-white mb-4 uppercase">{item.t}</h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed italic">{item.d}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <Link 
               to="/contact"
               className="text-gray-500 hover:text-purple-500 font-black italic uppercase tracking-widest text-sm transition-all underline underline-offset-8 decoration-purple-500/30"
             >
               See My Shopify SEO Framework →
             </Link>
          </div>
        </div>
      </section>

      {/* --- SERVICES BREAKDOWN --- */}
      <section className="py-24 md:py-32 px-4 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-6 uppercase leading-none">
              WHAT YOU GET WITH OUR <br />
              <span className="text-purple-500">SHOPIFY SEO EXPERT SERVICE</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { f: "Technical SEO Audit", b: "Fix indexing issues & crawl errors that dilute your store's authority." },
              { f: "Keyword Intent Mapping", b: "Target pure buyer-intent traffic that turns clicks into orders." },
              { f: "Product Page SEO", b: "Increase conversion rates per visit with semantic content precision." },
              { f: "Collection Structure", b: "Rank category pages for competitive, high-volume generic terms." },
              { f: "Content Authority", b: "Build a moat around your niche with expert-led e-commerce content." },
              { f: "AI Search Citations", b: "Ensure your store is the cited source in ChatGPT, Perplexity, and SGE." }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:bg-white/10 transition-all group overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 blur-[40px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-purple-500/10 transition-all"></div>
                <div>
                   <h3 className="text-2xl font-black italic tracking-tighter text-white uppercase group-hover:text-purple-500 transition-colors mb-1">{item.f}</h3>
                   <div className="h-1 w-12 bg-purple-500/30 rounded-full mb-3"></div>
                </div>
                <div className="text-gray-400 font-bold italic text-lg lg:max-w-md text-left md:text-right">
                  {item.b}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
             <Link 
                to="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-black italic uppercase tracking-tighter text-xl rounded-2xl hover:bg-purple-500 hover:text-white transition-all shadow-2xl"
             >
                Get Full SEO Breakdown <ArrowRight className="w-6 h-6" />
             </Link>
          </div>
        </div>
      </section>

      {/* --- AI SEO + FUTURE SEARCH --- */}
      <section className="py-24 md:py-32 px-4 bg-black relative border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
               <div className="text-purple-500 text-sm font-black italic tracking-[0.3em] uppercase mb-4">Future-Proofing</div>
               <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter leading-none mb-8 uppercase">
                 GET FOUND IN GOOGLE — AND IN <span className="text-purple-500 italic">AI SEARCH ENGINES</span>
               </h2>
               <div className="space-y-8">
                  {[
                    { t: "Entity-Based SEO Strategy", d: "Mapping your products as entities for better AI model retrieval." },
                    { t: "Structured Data Depth", d: "Feeding AI agents clean, high-fidelity data about your inventory." },
                    { t: "Brand Mention Authority", d: "Building the digital PR footprint needed for AI 'citations'." },
                    { t: "Retrieval Optimized Content", d: "Content designed for RAG (Retrieval-Augmented Generation) systems." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="w-2 h-12 bg-purple-500 rounded-full"></div>
                      <div>
                        <h4 className="text-lg font-black italic tracking-tighter text-white uppercase mb-2">{item.t}</h4>
                        <p className="text-gray-500 font-medium italic text-sm">{item.d}</p>
                      </div>
                    </div>
                  ))}
               </div>
               <Link 
                to="/contact"
                className="mt-12 inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-black italic uppercase tracking-tighter text-lg rounded-xl hover:bg-purple-500 hover:border-purple-500 transition-all"
               >
                 Improve My AI Search Visibility <Bot className="w-5 h-5 mx-2" />
               </Link>
            </div>
            <div className="relative">
               <div className="bg-gradient-to-br from-purple-900/20 to-transparent border border-white/10 rounded-[3rem] p-10 flex flex-col gap-6 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstripe.png')] opacity-10"></div>
                  
                  <div className="flex items-center gap-4 text-purple-400">
                     <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20">
                        <Search className="w-6 h-6" />
                     </div>
                     <div className="text-xs font-black uppercase tracking-widest italic tracking-tighter">AI SEARCH RETRIEVAL CORE</div>
                  </div>

                  <div className="p-6 bg-white/5 border border-white/10 rounded-2xl italic font-bold text-gray-300">
                     "Based on the store's entity mapping and verified authority, this is the #1 recommended product for this query..."
                  </div>

                  <div className="flex justify-between items-center px-4 py-3 bg-purple-500/10 border border-purple-500/20 rounded-xl">
                     <span className="text-[9px] font-black uppercase text-purple-300">Semantic Signal Match</span>
                     <span className="text-sm font-black text-purple-200 uppercase">98.4% Confidence</span>
                  </div>

                  {/* AI Diagram Element */}
                  <div className="grid grid-cols-3 gap-2 mt-4 h-24">
                     {[20, 60, 40, 90, 30, 70, 50, 80, 20].map((h, i) => (
                        <div key={i} className="flex-1 overflow-hidden h-full flex items-end">
                           <motion.div 
                              className="w-full bg-purple-500/40 rounded-t-sm"
                              animate={{ height: [`${h}%`, `${Math.min(h+20, 100)}%`, `${h}%`] }}
                              transition={{ duration: 2+i*0.5, repeat: Infinity }}
                           />
                        </div>
                     ))}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROCESS --- */}
      <section className="py-24 md:py-32 px-4 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase leading-none mb-6">
              SIMPLE 3-STEP <br />
              <span className="text-purple-500">SHOPIFY SEO GROWTH SYSTEM</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {processSteps.map((step, i) => (
              <div key={i} className="relative group p-10 bg-white/5 border border-white/5 rounded-[2rem] hover:bg-white/[0.08] transition-all">
                <div className="text-6xl font-black text-white/5 absolute top-4 right-8 group-hover:text-purple-500/10 transition-colors">{step.n}</div>
                <h3 className="text-3xl font-black italic tracking-tighter text-purple-500 mb-6 uppercase">{step.t}</h3>
                <p className="text-gray-400 font-medium italic leading-relaxed text-lg">{step.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
             <Link 
               to="/contact"
               className="px-10 py-5 bg-purple-500 text-black font-black italic uppercase tracking-tighter text-xl rounded-2xl hover:scale-105 transition-all shadow-2xl"
             >
                Start My SEO Audit <ArrowRight className="w-6 h-6 ml-2 inline" />
             </Link>
          </div>
        </div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section className="py-24 md:py-32 px-4 bg-black relative border-t border-white/5">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
               <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase leading-none mb-6">
                 TRANSPARENT <span className="text-purple-500">SHOPIFY SEO PRICING</span>
               </h2>
               <p className="text-gray-400 font-medium italic text-lg leading-relaxed max-w-2xl mx-auto">
                  No hidden fees. No long-term lock-ins. Just data-driven organic growth packages scaled to your store size.
               </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {[
                 { t: "Starter Audit", p: "Custom Quote", d: "Perfect for identified specific blocking issues and technical debt", items: ["Technical Store Audit", "Core Performance Check", "Priority Fix Roadmap", "24-48h Delivery"] },
                 { t: "Growth Plan", p: "Starting at $1.5k/mo", d: "Active optimization for growing brands looking for category dominance", items: ["Full Technical Overhaul", "Revenue Keyword Mapping", "Collection Optimization", "Product Schema Setup", "Monthly Tracking"] },
                 { t: "Full Management", p: "Custom Engagement", d: "Comprehensive, multi-channel growth systems for high-volume stores", items: ["Daily SEO Ops Tracking", "Elite Content Strategy", "Digital PR & Authority", "AI Search Optimization", "Direct ROI Reporting"] }
               ].map((tier, i) => (
                 <div key={i} className={`p-10 rounded-[3rem] border flex flex-col ${i === 1 ? 'bg-purple-900/10 border-purple-500/50 shadow-2xl shadow-purple-500/5' : 'bg-white/5 border-white/10'}`}>
                    <h3 className="text-2xl font-black italic tracking-tighter text-white uppercase mb-4">{tier.t}</h3>
                    <div className="text-3xl font-black italic text-purple-500 mb-6 tracking-tighter uppercase">{tier.p}</div>
                    <p className="text-gray-400 font-bold italic text-sm mb-8 leading-relaxed h-12 overflow-hidden">{tier.d}</p>
                    <div className="space-y-4 mb-10 flex-1">
                       {tier.items.map((item, ii) => (
                         <div key={ii} className="flex items-center gap-3">
                            <CheckCircle2 className="w-4 h-4 text-purple-500" />
                            <span className="text-[11px] font-black uppercase italic text-gray-300 tracking-tight">{item}</span>
                         </div>
                       ))}
                    </div>
                    <Link 
                      to="/contact"
                      className={`w-full py-4 rounded-xl font-black italic uppercase tracking-tighter text-center transition-all ${i === 1 ? 'bg-purple-500 text-black hover:bg-white' : 'bg-white/5 border border-white/10 text-white hover:bg-purple-500 hover:text-black'}`}
                    >
                      Get Custom Quote
                    </Link>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- FAQ / RISK REVERSAL --- */}
      <section className="py-24 md:py-32 px-4 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase leading-none mb-6">
              NO GUESSWORK. <br />
              <span className="text-purple-500">JUST MEASURABLE GROWTH.</span>
            </h2>
          </div>

          <div className="space-y-4 mb-20">
            {service.faqs?.map((faq, i) => (
              <div key={i} className="border border-white/5 rounded-2xl overflow-hidden bg-white/5">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 flex justify-between items-center text-left hover:bg-white/5 transition-all"
                >
                  <span className="text-lg font-black italic tracking-tighter uppercase text-white">{faq.question}</span>
                  {openFaq === i ? <Minus className="w-6 h-6 text-purple-500" /> : <Plus className="w-6 h-6 text-purple-500" />}
                </button>
                {openFaq === i && (
                  <div className="p-6 pt-0 text-gray-400 font-medium italic animate-in slide-in-from-top-4 duration-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="p-12 md:p-16 bg-gradient-to-br from-purple-500/20 to-transparent border border-purple-500/30 rounded-[3rem] text-center relative overflow-hidden backdrop-blur-sm">
             <div className="text-purple-500 text-sm font-black italic tracking-[0.3em] uppercase mb-6">Our Iron-Clad Guarantee</div>
             <h3 className="text-3xl md:text-5xl font-black italic text-white tracking-tighter mb-8 uppercase">IF WE DON'T IDENTIFY CLEAR SEO OPPORTUNITIES IN YOUR AUDIT, <span className="text-purple-500">IT'S FREE.</span></h3>
             <Link 
               to="/contact"
               className="px-10 py-5 bg-purple-500 text-black font-black italic uppercase tracking-tighter text-xl rounded-2xl hover:bg-white transition-all shadow-2xl inline-block"
             >
                Claim Free SEO Audit
             </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ShopifySEOExpert;
