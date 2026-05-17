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
  Globe,
  Rocket,
  Shield,
  Clock,
  HelpCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const StoryblokSEOExpert: React.FC<{ onBook: () => void }> = ({ onBook }) => {
  const faqs = [
    {
      question: "Do you work with Next.js, Nuxt, Astro, or Gatsby?",
      answer: "Yes. We optimize Storyblok websites across modern frontend frameworks. Whether you are using React-based frameworks like Next.js or Vue-based ones like Nuxt, we ensure your Storyblok content is delivered with SEO best practices in mind."
    },
    {
      question: "Can Storyblok websites rank as well as WordPress?",
      answer: "Absolutely — when properly configured for crawlability, rendering (SSR/SSG), and structured SEO architecture. In many cases, Storyblok sites can outperform WordPress due to superior page speed and cleaner code structures."
    },
    {
      question: "Do you implement fixes or only provide audits?",
      answer: "Both. We offer strategy-only engagements and hands-on implementation support. We can work directly with your developers or provide detailed technical specifications for your team to execute."
    },
    {
      question: "How long does SEO take?",
      answer: "Most clients begin seeing measurable improvements within 3–6 months depending on competition and initial technical condition. Technical fixes often result in indexing improvements within weeks."
    },
    {
      question: "Do you optimize for AI search engines?",
      answer: "Yes. We optimize structured content, semantic architecture, entity signals, and crawlability for modern AI-driven search experiences like Perplexity and Google Search Generative Experience (SGE)."
    }
  ];

  const problemCards = [
    {
      title: "Indexing & Rendering Issues",
      issue: "Client-side rendering causing crawl inefficiencies",
      impact: "JavaScript-heavy pages not indexed correctly"
    },
    {
      title: "Fragmented Content Structures",
      issue: "Poor heading hierarchy across reusable components",
      impact: "Duplicate metadata from modular templates"
    },
    {
      title: "Weak Internal Linking",
      issue: "Dynamic navigation structures hurting crawl depth",
      impact: "Key pages buried too deep for Google to value"
    },
    {
      title: "Slow Performance",
      issue: "Unoptimized hydration and asset loading",
      impact: "Poor Core Web Vitals hurting mobile rankings"
    },
    {
      title: "Localization Problems",
      issue: "Incorrect hreflang implementation",
      impact: "Duplicate multilingual pages competing with each other"
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white overflow-x-hidden">
      <SEO 
        title="Storyblok CMS SEO Expert | Rankings & Headless SEO Specialist"
        description="Hire a Storyblok CMS SEO Expert to improve rankings, speed & organic growth. Specialized technical SEO, Jamstack optimization, and content strategy for Storyblok."
        keywords="storyblok seo expert, storyblok seo services, headless cms seo consultant, jamstack seo expert, storyblok technical seo, storyblok seo agency"
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
               Storyblok SEO Specialization
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase italic tracking-tighter leading-[0.9] mb-6">
              Storyblok CMS SEO Expert — <span className="text-emerald-500">Scale Your Organic Growth</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed mb-8 max-w-xl">
              From SSR rendering optimization to schema markup injection and Core Web Vitals improvements, we help Storyblok-powered websites rank higher on Google and AI search engines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button 
                onClick={onBook}
                className="px-8 py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-2xl transition-all shadow-[0_20px_50px_rgba(16,185,129,0.3)] uppercase tracking-tighter text-base flex items-center justify-center gap-3 group"
              >
                <span>Request Free Storyblok SEO Audit</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={onBook}
                className="px-8 py-5 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black rounded-2xl transition-all uppercase tracking-tighter text-base"
              >
                Book a Headless SEO Consultation
              </button>
            </div>
            <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest mb-8 italic">
              "No obligation. Personalized recommendations delivered within 48 hours."
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-[10px] font-black uppercase tracking-widest text-gray-500 border-t border-white/5 pt-8">
              <div className="flex items-center gap-3 italic"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Fix indexing issues</div>
              <div className="flex items-center gap-3 italic"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Improve crawlability</div>
              <div className="flex items-center gap-3 italic"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Optimize component structures</div>
              <div className="flex items-center gap-3 italic"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Scale multilingual SEO</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-morphism rounded-[3rem] border border-white/10 p-10 bg-[#0f172a]/40 shadow-2xl overflow-hidden group">
               <div className="flex items-center justify-between mb-10 text-emerald-500">
                  <Cpu className="w-8 h-8" />
                  <TrendingUp className="w-8 h-8" />
               </div>
               <div className="space-y-8">
                  {[
                    { label: "Crawl Efficiency", value: 96 },
                    { label: "Organic Traffic", value: 187, isGrowth: true },
                    { label: "Load Speed Lift", value: 43, isGrowth: true }
                  ].map((stat, i) => (
                    <div key={i}>
                       <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-2 text-gray-400">
                          <span>{stat.label}</span>
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
               <div className="mt-12 text-center border-t border-white/5 pt-8">
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest italic mb-4">Trusted by Modern Brands Building on Headless</p>
                  <div className="flex flex-wrap justify-center gap-6 opacity-30 grayscale saturate-0">
                     <span className="text-[10px] font-black uppercase tracking-tighter">Vercel</span>
                     <span className="text-[10px] font-black uppercase tracking-tighter">Next.js</span>
                     <span className="text-[10px] font-black uppercase tracking-tighter">Storyblok</span>
                     <span className="text-[10px] font-black uppercase tracking-tighter">Commercelayer</span>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <section className="py-12 border-y border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-12 md:gap-20">
           <div className="flex flex-col items-center">
              <span className="text-2xl font-black text-white italic">100+</span>
              <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Technical Audits</span>
           </div>
           {["Vercel", "Next.js", "Nuxt", "Hydrogen", "Astro"].map((brand, i) => (
             <span key={i} className="text-xs font-black text-gray-700 uppercase tracking-widest italic">{brand}</span>
           ))}
           <Link to="/portfolio" className="text-[10px] font-black text-emerald-500 uppercase tracking-widest border-b border-emerald-900 pb-1 hover:border-emerald-500 transition-colors">
             See SEO Case Studies
           </Link>
        </div>
      </section>

      {/* 3. THE PROBLEM SECTION */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] relative border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-black text-red-500 uppercase tracking-[0.4em] mb-4 italic">The Friction</h2>
            <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-[0.9] mb-4">
              Why Most SEO Strategies Fail on <br /> <span className="text-red-500">Storyblok & Headless CMS Websites</span>
            </p>
            <p className="text-gray-400 text-lg font-medium leading-relaxed italic">
              Traditional SEO tactics often break in API-driven, component-based environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
             {problemCards.map((card, i) => (
                <div key={i} className="p-8 rounded-3xl bg-red-500/5 border border-red-500/10 flex gap-6 hover:border-red-500/30 transition-all">
                   <div className="w-12 h-12 bg-red-500/20 rounded-2xl flex items-center justify-center text-red-500 flex-shrink-0">
                      <AlertTriangle className="w-6 h-6" />
                   </div>
                   <div>
                      <h3 className="text-lg font-black text-white uppercase italic mb-2 tracking-tight">{card.title}</h3>
                      <p className="text-sm text-gray-400 font-medium mb-1">{card.issue}</p>
                      <p className="text-[10px] font-black text-red-700 uppercase tracking-widest italic">{card.impact}</p>
                   </div>
                </div>
             ))}
          </div>

          <div className="max-w-3xl mx-auto p-10 rounded-[3rem] bg-red-600/10 border border-red-500/20 text-center">
             <h4 className="text-xl font-black text-white uppercase italic mb-6">What This Costs You</h4>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Lost Revenue", "Hidden from AI", "Lower UX", "Higher CAC"].map((cost, i) => (
                  <div key={i} className="px-4 py-2 bg-red-500/10 rounded-full text-[9px] font-black text-red-400 uppercase tracking-widest italic">{cost}</div>
                ))}
             </div>
             <button 
               onClick={onBook}
               className="mt-10 px-8 py-4 bg-red-600 text-white font-black rounded-xl uppercase tracking-tighter text-sm hover:scale-105 transition-all"
             >
               Get a Technical SEO Assessment
             </button>
          </div>
        </div>
      </section>

      {/* 4. SOLUTION / POSITIONING SECTION */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.4em] mb-4 italic">Execution</h2>
            <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter italic">Specialized SEO Strategies <br /><span className="text-emerald-500">Built for Storyblok CMS</span></p>
            <p className="text-gray-400 text-lg font-medium italic mt-6">We align technical SEO, modern rendering frameworks, and content architecture to maximize visibility.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
             {[
               { 
                 t: "Technical & Headless SEO", 
                 d: "SSR/SSG optimization, Dynamic rendering analysis, Crawl budget optimization, Structured data injection, XML sitemap architecture.",
                 icon: <Cpu className="w-8 h-8" />
               },
               { 
                 t: "Component-Based SEO", 
                 d: "SEO-friendly content modeling, Reusable component optimization, Heading hierarchy systems, Metadata governance.",
                 icon: <Layers className="w-8 h-8" />
               },
               { 
                 t: "Performance & UX", 
                 d: "Core Web Vitals optimization, Image delivery optimization, CDN configuration, Lazy loading refinement.",
                 icon: <Gauge className="w-8 h-8" />
               }
             ].map((pillar, i) => (
               <div key={i} className="p-10 rounded-[3rem] glass-morphism border border-white/5 hover:border-emerald-500/30 transition-all group">
                  <div className="mb-8 text-emerald-500 group-hover:scale-110 transition-transform">{pillar.icon}</div>
                  <h3 className="text-xl font-black text-white uppercase italic mb-4 tracking-tighter italic">{pillar.t}</h3>
                  <p className="text-xs font-medium text-gray-400 leading-relaxed italic">{pillar.d}</p>
               </div>
             ))}
          </div>

          <div className="text-center">
             <button 
                onClick={onBook}
                className="px-10 py-5 bg-emerald-600 text-white font-black rounded-2xl shadow-xl uppercase tracking-tighter text-lg hover:scale-105 transition-all italic"
             >
               Talk to a Storyblok SEO Expert
             </button>
          </div>
        </div>
      </section>

      {/* 5. FEATURES VS BENEFITS SECTION */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.4em] mb-4 italic">Value Prop</h2>
            <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter italic">What We Optimize vs What You Gain</p>
          </div>

          <div className="rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/[0.02]">
             <table className="w-full text-left">
                <thead className="bg-[#10b981]/10">
                   <tr>
                      <th className="p-6 text-[10px] font-black text-emerald-500 uppercase tracking-widest italic">SEO Feature</th>
                      <th className="p-6 text-[10px] font-black text-emerald-500 uppercase tracking-widest italic">Business Benefit</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                   {[
                     ["Schema markup injection", "Rich snippets & improved SERP CTR"],
                     ["SSR/SSG optimization", "Faster indexing & rankings"],
                     ["Core Web Vitals improvements", "Better UX and conversions"],
                     ["International SEO setup", "Global organic traffic growth"],
                     ["Technical audits", "Faster issue resolution"],
                     ["Internal linking architecture", "Improved crawl depth"],
                     ["Component SEO systems", "Consistent scalable optimization"]
                   ].map(([feat, ben], i) => (
                     <tr key={i} className="hover:bg-white/5 transition-colors">
                        <td className="p-6 text-sm font-black text-white italic">{feat}</td>
                        <td className="p-6 text-xs font-medium text-gray-400">{ben}</td>
                     </tr>
                   ))}
                </tbody>
             </table>
          </div>
          
          <div className="mt-12 text-center">
             <Link to="/pricing" className="text-xs font-black text-emerald-500 uppercase tracking-widest border-b border-emerald-900 pb-2 hover:border-emerald-500 transition-colors">
                See What’s Included in an SEO Engagement
             </Link>
          </div>
        </div>
      </section>

      {/* 6. PROCESS / HOW IT WORKS */}
      <section className="py-24 px-4 md:px-6 bg-[#030712]">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-24">
              <h2 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.4em] mb-4 italic">Execution</h2>
              <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter italic">Our Storyblok SEO Process</p>
           </div>
           
           <div className="grid md:grid-cols-4 gap-8 relative">
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 hidden md:block"></div>
              {[
                { s: "Step 01", t: "Technical Discovery", d: "Stack analysis, Rendering review, Crawl diagnostics." },
                { s: "Step 02", t: "SEO Audit & Roadmap", d: "Priority scoring, Competitive gap analysis, Opportunity mapping." },
                { s: "Step 03", t: "Optimization Implementation", d: "Technical fixes, Content optimization, Performance improvements." },
                { s: "Step 04", t: "Ongoing Growth", d: "Monthly reporting, AI search optimization, Continuous SEO iteration." }
              ].map((step, i) => (
                <div key={i} className="relative z-10 p-8 glass-morphism rounded-[2rem] border border-white/5 bg-[#030712] transition-all hover:border-emerald-500/30 group">
                   <div className="text-emerald-950 font-black italic text-4xl mb-6 opacity-30 group-hover:text-emerald-500 group-hover:opacity-100 transition-all italic">{step.s}</div>
                   <h3 className="text-[10px] font-black text-white uppercase italic mb-2 italic tracking-tight italic">{step.t}</h3>
                   <p className="text-[8px] font-bold text-gray-700 uppercase tracking-widest italic italic">{step.d}</p>
                </div>
              ))}
           </div>

           <div className="mt-20 text-center">
              <button 
                onClick={onBook}
                className="px-10 py-5 bg-white text-emerald-600 font-black rounded-2xl shadow-xl uppercase tracking-tighter text-lg hover:scale-105 transition-all italic italic"
              >
                Start With a Free Audit
              </button>
           </div>
        </div>
      </section>

      {/* 7. CASE STUDIES / RESULTS SECTION */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] border-y border-white/5">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.4em] mb-4 italic">Proof</h2>
               <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter italic">Real SEO Growth for Modern Web Platforms</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
               {[
                 { v: "+187%", l: "Organic Traffic Growth", s: "Next.js + Storyblok" },
                 { v: "43%", l: "Faster Load Speed", s: "Core Web Vitals Boost" },
                 { v: "3x", l: "More Indexed Pages", s: "Crawlability Optimization" },
                 { v: "62%", l: "Keyword Visibility Lift", s: "Non-Branded Terms" }
               ].map((stat, i) => (
                 <div key={i} className="p-8 rounded-[2.5rem] glass-morphism border border-white/5 text-center transition-all hover:border-emerald-500/20">
                    <div className="text-4xl font-black text-emerald-500 italic mb-2 italic">{stat.v}</div>
                    <div className="text-[10px] font-black text-white uppercase tracking-widest mb-1 italic">{stat.l}</div>
                    <div className="text-[8px] font-bold text-gray-700 uppercase italic tracking-widest italic">{stat.s}</div>
                 </div>
               ))}
            </div>

            <div className="text-center">
               <Link to="/portfolio" className="bg-white/5 border border-white/10 px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-all inline-block italic">
                  View More SEO Success Stories
               </Link>
            </div>
         </div>
      </section>

      {/* 8. SERVICE PACKAGES / PRICING SECTION */}
      <section className="py-24 px-4 md:px-6 bg-[#030712]">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 italic">
               <h2 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.4em] mb-4 italic">Investment</h2>
               <p className="text-3xl md:text-6xl font-black text-white uppercase italic tracking-tighter italic">Storyblok SEO <span className="text-emerald-500">Service Packages</span></p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {[
                 { 
                   name: "SEO Audit", 
                   target: "Startups", 
                   price: "15,000", 
                   items: ["Technical audit", "CWV review", "SEO roadmap", "Rendering analysis"] 
                 },
                 { 
                   name: "Growth SEO", 
                   target: "SaaS & eCommerce", 
                   price: "25,000", 
                   items: ["Monthly optimization", "Keyword research", "Reporting dashboard", "Content strategy"], 
                   featured: true 
                 },
                 { 
                   name: "Enterprise SEO", 
                   target: "Large brands", 
                   price: "Custom", 
                   items: ["Full-stack management", "International SEO", "AI search strategy", "Priority support"] 
                 }
               ].map((plan, i) => (
                 <div key={i} className={`p-10 rounded-[3rem] border transition-all flex flex-col ${plan.featured ? 'bg-emerald-600/10 border-emerald-500 shadow-[0_30px_100px_-20px_rgba(16,185,129,0.3)]' : 'bg-white/5 border-white/10'}`}>
                    <div className="mb-10 text-center uppercase font-black italic">
                       <div className="text-[10px] text-emerald-500 mb-1 italic">{plan.name}</div>
                       <div className="text-[8px] text-gray-700 tracking-widest mb-8 uppercase">Best For: {plan.target}</div>
                       <div className="flex items-baseline justify-center gap-1">
                          <span className="text-4xl font-black text-white leading-none italic">{plan.price === 'Custom' ? 'Custom' : `₱${plan.price}`}</span>
                          {plan.price !== 'Custom' && <span className="text-[10px] text-gray-600 italic"> / start</span>}
                       </div>
                    </div>
                    <div className="space-y-4 mb-12 flex-1 pt-10 border-t border-white/5 text-[10px] font-black uppercase text-white/80 italic tracking-tight">
                       {plan.items.map((it, j) => (
                         <div key={j} className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                            {it}
                         </div>
                       ))}
                    </div>
                    <button 
                      onClick={onBook}
                      className={`w-full py-5 rounded-2xl font-black uppercase tracking-tighter text-sm transition-all ${plan.featured ? 'bg-emerald-600 text-white shadow-xl hover:scale-105 active:scale-95' : 'bg-white/10 text-white hover:bg-white/20'}`}
                    >
                      {plan.name === 'Enterprise SEO' ? 'Request Custom Proposal' : 'Request Free Audit'}
                    </button>
                    <p className="mt-4 text-[8px] font-black text-center text-gray-700 uppercase tracking-widest">
                       {plan.name === 'Enterprise SEO' ? 'Tailored to your stack' : 'No long-term commitment'}
                    </p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 9. COMPARISON SECTION */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20 italic">
            <h2 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.4em] mb-4 italic">Comparison</h2>
            <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter italic">Generic SEO Agency vs <br /><span className="text-emerald-500">Storyblok SEO Expert</span></p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-white/5 rounded-3xl overflow-hidden border border-white/5">
             <div className="p-10 bg-[#030712]">
                <h4 className="text-lg font-black text-gray-600 uppercase italic mb-8 border-b border-white/5 pb-4">Generic SEO Agency</h4>
                <ul className="space-y-6">
                   {[
                     "Limited headless SEO knowledge",
                     "Basic WordPress SEO tactics",
                     "Minimal rendering expertise",
                     "Generic audits",
                     "Slow issue diagnosis"
                   ].map((item, i) => (
                     <li key={i} className="flex items-center gap-4 text-xs font-bold text-gray-500 uppercase tracking-tight italic">
                        <XCircle className="w-4 h-4 text-red-900" />
                        {item}
                     </li>
                   ))}
                </ul>
             </div>
             <div className="p-10 bg-emerald-600/5">
                <h4 className="text-lg font-black text-emerald-500 uppercase italic mb-8 border-b border-white/5 pb-4 italic">Storyblok SEO Expert</h4>
                <ul className="space-y-6">
                   {[
                     "Specialized Storyblok expertise",
                     "Jamstack-focused optimization",
                     "SSR/SSG technical implementation",
                     "Component-level SEO systems",
                     "Framework-aware troubleshooting"
                   ].map((item, i) => (
                     <li key={i} className="flex items-center gap-4 text-xs font-black text-white uppercase tracking-tight italic italic">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        {item}
                     </li>
                   ))}
                </ul>
             </div>
          </div>
          
          <div className="mt-12 text-center">
             <button 
               onClick={onBook}
               className="px-10 py-5 bg-white text-emerald-600 font-black rounded-2xl shadow-xl uppercase tracking-tighter text-lg hover:rotate-1 transition-all italic"
             >
               Work With a Specialized SEO Team
             </button>
          </div>
        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section className="py-24 px-4 md:px-6 bg-[#030712]">
         <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20 italic">
               <h2 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.4em] mb-4 italic">Consulting</h2>
               <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter italic">Frequently Asked Questions</p>
            </div>
            
            <div className="space-y-4 mb-20">
              {faqs.map((faq, i) => (
                <div key={i} className="glass-morphism rounded-2xl border border-white/5 bg-[#0f172a]/10 overflow-hidden group">
                  <div className="p-6 md:p-8 cursor-pointer flex items-center justify-between">
                    <h4 className="text-base md:text-lg font-black text-white hover:text-emerald-500 transition-colors italic uppercase tracking-tight italic">
                      {faq.question}
                    </h4>
                    <ChevronDown className="w-5 h-5 text-gray-600 transition-transform group-hover:rotate-180" />
                  </div>
                  <div className="px-6 md:px-8 pb-8 pt-0 text-gray-400 text-xs font-medium leading-relaxed italic">
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
               <button 
                 onClick={onBook}
                 className="text-emerald-500 font-black uppercase tracking-widest text-[10px] border-b border-emerald-900 pb-2 hover:border-emerald-500 transition-colors italic"
               >
                 Still Have Questions? Talk to an SEO Strategist →
               </button>
            </div>
         </div>
      </section>

      {/* 11. RISK REVERSAL SECTION */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] border-t border-white/5">
         <div className="max-w-4xl mx-auto text-center italic">
            <div className="p-16 rounded-[4rem] bg-emerald-600/5 border border-emerald-500/20 relative overflow-hidden group">
               <div className="absolute -top-24 -left-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
               
               <ShieldCheck className="w-16 h-16 mx-auto text-emerald-500 mb-8" />
               <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-6 italic">SEO Expertise Built for Modern Architecture — <span className="text-emerald-500 block">Without the Guesswork</span></h2>
               
               <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-10 text-[9px] font-black uppercase tracking-widest text-gray-500">
                  <div className="flex items-center gap-2 justify-center italic"><Shield className="w-3 h-3 text-emerald-500" /> Transparent deliverables</div>
                  <div className="flex items-center gap-2 justify-center italic"><Clock className="w-3 h-3 text-emerald-500" /> Clear timelines</div>
                  <div className="flex items-center gap-2 justify-center italic"><Target className="w-3 h-3 text-emerald-500" /> Dedicated strategist</div>
                  <div className="flex items-center gap-2 justify-center italic"><BarChart className="w-3 h-3 text-emerald-500" /> Monthly reporting</div>
                  <div className="flex items-center gap-2 justify-center italic"><CheckCircle2 className="w-3 h-3 text-emerald-500" /> No black-hat SEO</div>
                  <div className="flex items-center gap-2 justify-center italic"><Settings className="w-3 h-3 text-emerald-500" /> Flexible models</div>
               </div>

               <button 
                 onClick={onBook}
                 className="px-12 py-6 bg-emerald-600 text-white font-black rounded-2xl shadow-2xl uppercase tracking-tighter text-xl hover:scale-105 active:scale-95 transition-all italic"
               >
                 Request Your Free Storyblok SEO Audit
               </button>
            </div>
         </div>
      </section>

      {/* 12. FINAL CTA SECTION */}
      <section className="py-32 px-4 md:px-6 bg-[#030712] relative overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_150%,rgba(16,185,129,0.15),transparent_70%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-white uppercase italic tracking-tighter leading-[0.85] mb-10 italic">
            Ready to Unlock the Full SEO <br /> <span className="text-emerald-500">Potential of Your Storyblok Website?</span>
          </h2>
          <p className="text-gray-400 text-xl font-medium mb-12 max-w-2xl mx-auto italic">
            Get a custom technical SEO roadmap tailored to your headless architecture. No long-term commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
             <button 
               onClick={onBook}
               className="px-12 py-6 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-2xl shadow-[0_30px_100px_-20px_rgba(16,185,129,0.5)] uppercase tracking-tighter text-2xl transition-all hover:scale-110 active:scale-95 italic"
             >
               Book My SEO Consultation
             </button>
             <button 
               onClick={onBook}
               className="px-12 py-6 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black rounded-2xl uppercase tracking-tighter text-2xl transition-all italic"
             >
               Request Free Audit
             </button>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] font-black uppercase tracking-[0.4em] text-gray-700 italic">
             <span>Response within 1 business day</span>
             <span>Enterprise-ready expertise</span>
             <span>ROI-focused strategy</span>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS SECTION (for SEO) */}
      <section className="py-20 px-4 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {[
                { t: "Expert SEO Solutions", links: [
                  <Link key="l1" to="/services/wordpress-seo-expert" className="hover:text-emerald-500">WordPress SEO Expert</Link>,
                  <Link key="l2" to="/services/shopify-seo-expert" className="hover:text-emerald-500">Shopify SEO Specialist</Link>,
                  <Link key="l3" to="/services/contentful-cms-seo-expert" className="hover:text-emerald-500">Contentful SEO Specialist</Link>,
                  <Link key="l4" to="/services/ghost-seo-expert" className="hover:text-emerald-500">Ghost CMS SEO</Link>
                ] },
                { t: "Core SEO Frameworks", links: [
                  <Link key="l5" to="/services/technical-on-page-seo-optimization" className="hover:text-emerald-500">Technical SEO Audit</Link>,
                  <Link key="l6" to="/services/keyword-research-intent-mapping" className="hover:text-emerald-500">Keyword Intent Mapping</Link>,
                  <Link key="l7" to="/services/topical-maps-semantic-authority" className="hover:text-emerald-500">Topical Authority Strategy</Link>,
                  <Link key="l8" to="/services/ai-seo-automation" className="hover:text-emerald-500">AI Search Optimization</Link>
                ] },
                { t: "Success & Engagement", links: [
                  <Link key="l9" to="/portfolio" className="hover:text-emerald-500">SEO Success Stories</Link>,
                  <Link key="l10" to="/pricing" className="hover:text-emerald-500">SEO Management Pricing</Link>,
                  <Link key="l11" to="/contact" className="hover:text-emerald-500">Hire an SEO Expert</Link>,
                  <Link key="l12" to="/about" className="hover:text-emerald-500">The SEO Methodology</Link>
                ] }
              ].map((col, i) => (
                <div key={i}>
                   <h4 className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-6 italic">{col.t}</h4>
                   <ul className="space-y-4">
                      {col.links.map((link, ii) => (
                        <li key={ii} className="text-sm font-bold text-gray-500 italic">
                           {link}
                        </li>
                      ))}
                   </ul>
                </div>
              ))}
           </div>
           <div className="mt-20 pt-10 border-t border-white/5 text-center">
              <div className="text-[10px] font-black text-gray-600 uppercase tracking-widest italic">
                 &copy; {new Date().getFullYear()} Storyblok SEO Growth Architectural Systems. All rights reserved.
              </div>
           </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 w-full p-4 z-50 md:hidden pointer-events-none">
         <div className="max-w-md mx-auto pointer-events-auto flex gap-2">
            <button 
              onClick={onBook}
              className="flex-1 py-4 bg-emerald-600 text-white font-black uppercase text-xs rounded-xl shadow-2xl flex items-center justify-center gap-2 italic"
            >
              <Target className="w-4 h-4" />
              Free Audit
            </button>
            <button 
              onClick={onBook}
              className="flex-1 py-4 bg-white text-black font-black uppercase text-xs rounded-xl shadow-2xl flex items-center justify-center gap-2 italic"
            >
              <Globe className="w-4 h-4" />
              Book Call
            </button>
         </div>
      </div>
    </div>
  );
};

export default StoryblokSEOExpert;
