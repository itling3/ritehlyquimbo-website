
import React from 'react';
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
  LayoutGrid
} from 'lucide-react';
import SEO from '../components/SEO';

const WebflowSEOExpert: React.FC<{ onBook: () => void }> = ({ onBook }) => {
  const faqs = [
    {
      question: "Is Webflow good for SEO?",
      answer: "Webflow is excellent for SEO because it provides clean, semantic HTML and gives you direct control over most ranking factors. However, it requires specialized configuration of CMS structures, schema, and page speed settings to outperform competitors in tough niches."
    },
    {
      question: "How long does Webflow SEO take?",
      answer: "Technical 'wins' like site speed and indexing improvements often manifest in 14-30 days. Significant revenue growth and competitive keyword dominance typically take 4-6 months, depending on the niche and authority level."
    },
    {
      question: "Can you recover lost rankings after migration?",
      answer: "Yes. Webflow migrations are high-risk. We specialize in redirect mapping and traffic preservation to ensure your rankings remain stable or even improve after moving to Webflow."
    },
    {
      question: "Do you optimize for AI search?",
      answer: "Absolutely. We are pioneers in Generative Engine Optimization (GEO). We optimize your Webflow content to be cited by AI search engines like ChatGPT, Perplexity, and Google's SGE."
    },
    {
      question: "Do you provide content writing?",
      answer: "Yes. We offer SEO-engineered copywriting that is designed for both search engines and human conversion. We help you build topical authority through strategic clusters."
    },
    {
      question: "Can you help local businesses?",
      answer: "Yes. We implement advanced local SEO strategies for Webflow, including GMB optimization, geo-targeted landing pages, and local schema markup."
    },
    {
      question: "Do you work with ecommerce brands?",
      answer: "Yes. We optimize Webflow Ecommerce stores for product rankings, category SEO, and faster checkout experiences to boost conversion rates. See our <Link to=\"/services/ecommerce-seo-specialist-sales-growth\" className=\"text-blue-400 hover:underline\">Ecommerce SEO</Link> services for more."
    }
  ];

  const caseStudies = [
    {
      title: "SaaS Enterprise Brand",
      metric1: "+312%",
      label1: "Organic Traffic",
      metric2: "8mo",
      label2: "Timeline",
      desc: "Dominated high-intent SaaS keywords through technical Webflow optimization and content clusters."
    },
    {
      title: "Local Service Leader",
      metric1: "3x",
      label1: "Quality Leads",
      metric2: "41%",
      label2: "Conversion Lift",
      desc: "Increased lead volume through local intent targeting and UX speed improvements."
    }
  ];

  const packages = [
    {
      name: "SEO Audit",
      bestFor: "Businesses needing clarity",
      price: "15,000",
      includes: ["Technical Webflow Audit", "Competitor Research", "Content Gap Analysis", "Growth Roadmap"]
    },
    {
      name: "Growth SEO",
      bestFor: "Small to mid-sized businesses",
      highlight: true,
      price: "35,000",
      includes: ["Technical Implementation", "Content Clusters", "Backlink Strategy", "Weekly Monitoring", "AI Search Prep"]
    },
    {
      name: "SEO Partner",
      bestFor: "Scaling brands",
      price: "75,000",
      includes: ["Full Strategic Management", "Programmatic SEO", "CRO Integration", "Digital PR", "24/7 Support"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white overflow-hidden">
      <SEO 
        title="Webflow SEO Expert Services | Rank Higher & Growth Revenue"
        description="Hire a Webflow SEO Expert to rank higher on Google, ChatGPT & AI Search. Specialized technical Webflow SEO, site architecture, and revenue-focused growth."
        keywords="webflow seo expert, webflow seo services, webflow seo agency, technical webflow seo, webflow technical seo consultant"
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
              AI-Driven Webflow Optimization
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase italic tracking-tighter leading-[0.9] mb-6">
              Webflow SEO Expert Services That <span className="text-blue-500 transition-colors duration-500 hover:text-white">Grow Rankings, Traffic & Revenue</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed mb-8 max-w-xl">
              Technical <Link to="/services/technical-on-page-seo-optimization" className="text-blue-400 hover:underline">Webflow SEO</Link>, <Link to="/services/seo-content-creation-strategy" className="text-blue-400 hover:underline">content strategy</Link>, AI search optimization, and conversion-focused growth systems for brands that want measurable organic results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={onBook}
                className="px-8 py-5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl transition-all shadow-2xl shadow-blue-500/30 uppercase tracking-tighter text-base flex items-center justify-center gap-3 group"
              >
                <span>Get Free Webflow Audit</span>
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
                <Star className="w-4 h-4 text-blue-500 fill-blue-500" />
                <span className="text-xs font-black uppercase italic">Certified Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-xs font-black uppercase italic">Performance Guaranteed</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 glass-morphism rounded-[2.5rem] border border-white/10 p-4 md:p-6 shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] bg-[#0f172a]/40">
              <div className="bg-[#030712] rounded-2xl p-6 border border-white/5 font-mono">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-black uppercase tracking-tight">Growth Velocity</span>
                  </div>
                  <div className="text-[10px] font-bold text-blue-400 bg-blue-500/10 px-2 py-1 rounded">AI SEARCH READY</div>
                </div>
                <div className="h-48 w-full flex items-end gap-1 md:gap-2">
                  {[15, 25, 20, 35, 45, 40, 55, 65, 60, 80, 95, 100].map((h, i) => (
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
                    <div className="text-[9px] text-gray-500 uppercase font-black mb-1">Rankings</div>
                    <div className="text-lg font-black text-white italic">#1</div>
                  </div>
                   <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <div className="text-[9px] text-gray-500 uppercase font-black mb-1">AI Citations</div>
                    <div className="text-lg font-black text-white italic">+412%</div>
                  </div>
                   <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <div className="text-[9px] text-gray-500 uppercase font-black mb-1">CVR</div>
                    <div className="text-lg font-black text-white italic">5.4%</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-12 border-y border-white/5 bg-[#030712]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] text-center mb-8 italic">Trusted by Businesses That Take Growth Seriously</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            {['Webflow', 'Memberstack', 'Wized', 'Airtable', 'Zapier', 'Relume'].map((brand, i) => (
              <span key={i} className="text-xl md:text-2xl font-black text-white uppercase italic tracking-tighter">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4 italic">The Visibility Gap</h2>
            <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none mb-6">
              Why Most Webflow Websites <span className="text-blue-500">Struggle to Rank</span>
            </p>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-medium leading-relaxed underline decoration-blue-500/10 decoration-8 underline-offset-8">
              A beautiful Webflow site means nothing if your ideal customers can’t find you. Generic agencies don't understand Webflow's specific technical architecture.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                icon: <Zap className="w-8 h-8 text-blue-500" />,
                title: "Slow Performance",
                desc: "Poorly optimized Webflow sites suffer from slow Core Web Vitals, hurting both search rankings and user experience."
              },
              {
                icon: <LayoutGrid className="w-8 h-8 text-purple-500" />,
                title: "Poor CMS Structure",
                desc: "Unstructured or bloated CMS collections limit your ability to scale content and create topical clusters effectively."
              },
              {
                icon: <Cpu className="w-8 h-8 text-green-500" />,
                title: "Missing AI Prep",
                desc: "Most sites lack relevant schema and semantic metadata required to appear in ChatGPT or SearchGPT search results."
              }
            ].map((item, i) => (
              <div key={i} className="glass-morphism p-10 rounded-[2.5rem] border border-white/5 hover:border-blue-500/20 transition-all group scale-up">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-black text-white uppercase italic tracking-tight mb-4 group-hover:text-blue-400 transition-colors uppercase">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-medium italic">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
             <button onClick={onBook} className="px-10 py-5 bg-white text-black font-black rounded-2xl uppercase tracking-tighter hover:scale-105 transition-transform italic">See What's Hurting Your Rankings →</button>
          </div>
        </div>
      </section>

      {/* Why Webflow SEO Section */}
      <section className="py-24 px-4 md:px-6 bg-[#080c18] border-y border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="flex-1">
             <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4 italic">The Platform Edge</h2>
             <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none mb-8">
               Webflow SEO Requires <span className="text-blue-500">Platform-Specific Expertise</span>
             </p>
             <p className="text-gray-400 text-lg font-medium leading-relaxed mb-8">
               Webflow gives businesses powerful SEO capabilities—but only when configured correctly. We bridge the gap between technical complexity and search engine dominance.
             </p>
             <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  "Semantic HTML structure",
                  "CMS scalability",
                  "Dynamic SEO fields",
                  "Canonical management",
                  "Structured data",
                  "Redirect systems"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-[10px] font-black uppercase text-white italic tracking-widest border-l-2 border-blue-500 pl-3">
                    {item}
                  </div>
                ))}
             </div>
             <button onClick={onBook} className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl uppercase tracking-tighter italic">Talk to a Webflow SEO Specialist →</button>
          </div>
          <div className="flex-1 w-full overflow-hidden rounded-3xl border border-white/10 bg-[#030712]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 border-b border-white/10 text-[10px] font-black uppercase tracking-widest italic text-blue-400">
                  <th className="p-6">Generic Agency</th>
                  <th className="p-6">Webflow SEO Expert</th>
                </tr>
              </thead>
              <tbody className="text-[10px] font-black uppercase italic text-gray-500">
                {[
                  ["Basic keyword targeting", "Full Webflow SEO architecture"],
                  ["Generic audits", "Platform-specific fixes"],
                  ["Minimal technical depth", "CMS, schema & speed opt"],
                  ["Focus on rankings", "Focus on leads & revenue"],
                  ["Limited AI search prep", "AI search optimization included"]
                ].map(([gen, pro], i) => (
                  <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                    <td className="p-6 border-r border-white/5">{gen}</td>
                    <td className="p-6 text-white">{pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* AI Search Section */}
      <section className="py-24 px-4 md:px-6 bg-gradient-to-b from-[#030712] to-[#080c18] relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="flex-1 order-2 md:order-1">
             <div className="glass-morphism p-10 rounded-[3rem] border border-blue-500/30 bg-blue-600/5 relative group">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-600/20 blur-[60px] rounded-full group-hover:bg-blue-600/40 transition-all duration-500"></div>
                <div className="text-4xl font-black text-white italic mb-4 leading-none">AI Citations: <span className="text-blue-500">+412%</span></div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6 border-b border-white/10 pb-4 italic">Performance in SearchGPT & ChatGPT Browsing</p>
                <div className="space-y-4">
                  {["Entity Optimization", "Semantic topical authority", "Conversational optimization"].map((t, i) => (
                     <div key={i} className="flex items-center gap-2 text-[10px] font-black uppercase text-blue-400 italic">
                        <CheckCircle2 className="w-4 h-4" />
                        {t === "Semantic topical authority" ? <Link to="/services/topical-maps-semantic-authority" className="hover:underline">{t}</Link> : t}
                     </div>
                  ))}
                </div>
             </div>
          </div>
          <div className="flex-1 order-1 md:order-2">
            <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4 italic">The Future of Search</h2>
            <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none mb-8">
              Optimize Your Webflow Site for <span className="text-blue-500">Google, ChatGPT & AI Search</span>
            </p>
            <p className="text-gray-400 text-lg font-medium leading-relaxed mb-8 italic">
              Modern SEO is no longer just about rankings. It’s about visibility across AI-powered search experiences like <Link to="/services/ai-seo-automation" className="text-blue-400 hover:underline">SearchGPT</Link> and Perplexity.
            </p>
            <button onClick={onBook} className="px-10 py-5 bg-blue-600 text-white font-black rounded-2xl uppercase tracking-tighter hover:bg-blue-700 transition-colors shadow-xl shadow-blue-500/20 italic">Future-Proof Your SEO Strategy →</button>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-24 px-4 md:px-6 bg-[#030712]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4 italic">The Growth System</h2>
             <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter">Complete Webflow <span className="text-blue-500">SEO Services</span></p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Technical Webflow SEO",
                icon: <Zap className="w-6 h-6" />,
                items: ["Crawlability", "Indexation", "XML Sitemaps", "Canonicals", "Structured Data"]
              },
              {
                title: "Webflow Speed Tuning",
                icon: <Flame className="w-6 h-6" />,
                items: ["Core Web Vitals", "Image Compression", "Lazy Loading", "Script Optimization"]
              },
              {
                title: "Keyword & Intent Strategy",
                icon: <Search className="w-6 h-6" />,
                items: ["Search Intent Analysis", "Competitor Gap Analysis", "Revenue Keywords"]
              },
              {
                title: "Authority Content clusters",
                icon: <BarChart3 className="w-6 h-6" />,
                items: ["Topic Clusters", "SEO Landing Pages", "Programmatic SEO", "AI-Search Ready"]
              },
              {
                title: "Local & Regional SEO",
                icon: <Globe className="w-6 h-6" />,
                items: ["GBP Optimization", "Location Pages", "Local Schema", "Geo-Targeting"]
              },
              {
                title: "Migration & Redesign",
                icon: <RefreshCw className="w-6 h-6" />,
                items: ["Traffic Preservation", "Redirect Mapping", "Ranking Protection"]
              }
            ].map((service, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] bg-[#0f172a]/20 border border-white/5 hover:border-blue-500/30 transition-all group scale-up">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-black text-white uppercase italic tracking-tight mb-4 group-hover:text-blue-400 transition-colors uppercase italic">{service.title}</h3>
                <div className="space-y-2">
                   {service.items.map((item, j) => (
                      <div key={j} className="flex items-center gap-2 text-[10px] font-black text-gray-500 uppercase tracking-widest italic group-hover:text-gray-400 transition-colors">
                         <span className="w-1 h-1 rounded-full bg-blue-500/40"></span>
                         {item === "Structured Data" ? <Link to="/services/technical-on-page-seo-optimization" className="hover:text-blue-400 decoration-blue-500/20 underline">{item}</Link> : 
                          item === "Programmatic SEO" ? <Link to="/services/programmatic-seo-automation" className="hover:text-blue-400 decoration-blue-500/20 underline">{item}</Link> : 
                          item === "Search Intent Analysis" ? <Link to="/services/keyword-research-intent-mapping" className="hover:text-blue-400 decoration-blue-500/20 underline">{item}</Link> : item}
                      </div>
                   ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
             <button onClick={onBook} className="px-10 py-5 bg-blue-600 text-white font-black rounded-2xl uppercase tracking-tighter hover:bg-blue-700 transition-colors italic">Request Custom SEO Plan →</button>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4 italic">Proof Engineering</h2>
              <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter italic">Real Results For <span className="text-blue-500">Webflow Businesses</span></p>
            </div>
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
      <section className="py-24 px-4 md:px-6 bg-[#030712] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 italic">
            <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4">The Implementation Framework</h2>
            <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter">Our Webflow <span className="text-blue-500">SEO Process</span></p>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 hidden lg:block"></div>
            <div className="grid lg:grid-cols-4 gap-8 relative z-10 font-black italic">
              {[
                { step: "01", title: "Audit & Research", desc: "Technical audit, competitor mapping, and keyword gap analysis." },
                { step: "02", title: "Strategy Roadmapping", desc: "Custom SEO roadmap aligned with your specific business goals." },
                { step: "03", title: "Optimization Loop", desc: "Technical implementation, content clusters, and speed fixes." },
                { step: "04", title: "Scaling & Growth", desc: "Continuous testing, ranking reports, and authoritative growth." }
              ].map((p, i) => (
                <div key={i} className="glass-morphism p-8 rounded-3xl border border-white/5 bg-black/40 group hover:border-blue-500/20 transition-all">
                  <div className="text-4xl font-black text-blue-900 mb-6 italic group-hover:text-blue-600 transition-colors">{p.step}</div>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight mb-3 italic">{p.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-medium italic">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-4 md:px-6 bg-[#030712]" id="pricing">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24 italic">
            <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4">Clear ROI</h2>
            <p className="text-3xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-none mb-6">
               Flexible Webflow <span className="text-blue-500">SEO Packages</span>
            </p>
            <p className="text-gray-400 uppercase font-black text-xs tracking-widest italic underline decoration-blue-500/20 decoration-2 underline-offset-4">Performance-Centered Ecommerce & B2B Solutions</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((plan, i) => (
              <div key={i} className={`p-10 rounded-[3rem] border transition-all flex flex-col italic ${plan.highlight ? 'bg-blue-600/10 border-blue-500 shadow-2xl shadow-blue-600/10' : 'bg-white/5 border-white/10'}`}>
                <div className="mb-8">
                   <div className="text-[10px] font-black uppercase tracking-widest mb-2 text-blue-400">{plan.name}</div>
                   <div className="flex items-baseline gap-2">
                     <span className="text-xs font-bold text-gray-500 italic">₱</span>
                     <span className="text-5xl font-black text-white italic tracking-tighter leading-none underline decoration-blue-500/10">{plan.price}</span>
                     <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">/ Project-Base</span>
                   </div>
                   <p className="text-gray-400 text-[10px] uppercase font-black tracking-widest mt-4 italic">{plan.bestFor}</p>
                </div>
                <div className="space-y-4 mb-10 flex-1 italic">
                  {plan.includes.map((f, j) => (
                    <div key={j} className="flex items-center gap-3 text-xs font-black uppercase tracking-tight text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-blue-500" />
                      {f === "AI Search Prep" ? <Link to="/services/ai-seo-automation" className="hover:text-blue-400 decoration-blue-500/20 underline">{f}</Link> : 
                       f === "Content Clusters" ? <Link to="/services/seo-content-creation-strategy" className="hover:text-blue-400 decoration-blue-500/20 underline">{f}</Link> : f}
                    </div>
                  ))}
                </div>
                <button 
                  onClick={onBook}
                  className={`w-full py-5 rounded-2xl font-black uppercase tracking-tighter text-sm transition-all italic ${plan.highlight ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white/10 text-white hover:bg-white/20'}`}
                >
                  Get Custom Pricing
                </button>
              </div>
            ))}
          </div>
          <p className="text-center mt-12 text-gray-600 text-[10px] font-black uppercase tracking-widest italic">No pressure. No generic packages. Just actionable growth.</p>
        </div>
      </section>

      {/* Differentiation Section */}
      <section className="py-24 px-4 md:px-6 bg-[#080c18] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 italic">
            <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4">Why Us?</h2>
            <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter">Why Businesses Choose Our <span className="text-blue-500">Webflow Expertise</span></p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: "Webflow-Specific Systems", icon: <LayoutGrid className="w-6 h-6" /> },
              { title: "Technical + Content SEO", icon: <Cpu className="w-6 h-6" /> },
              { title: "AI Search Optimization", icon: <Zap className="w-6 h-6" /> },
              { title: "Conversion-Focused SEO", icon: <MousePointer2 className="w-6 h-6" /> },
              { title: "Transparent ROI Reporting", icon: <BarChart3 className="w-6 h-6" /> },
              { title: "Fast Implementation", icon: <Flame className="w-6 h-6" /> }
            ].map((diff, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center text-center group hover:border-blue-500/20 transition-all">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4 group-hover:scale-110 transition-transform">{diff.icon}</div>
                <h3 className="text-[10px] font-black text-white uppercase italic tracking-widest group-hover:text-blue-400 transition-colors underline decoration-blue-500/0 hover:decoration-blue-500/30 underline-offset-4">{diff.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 italic">
            <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4">Clarity Engine</h2>
            <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter">Frequently Asked <span className="text-blue-500">Questions</span></p>
          </div>
          <div className="space-y-4 italic">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-morphism rounded-2xl border border-white/5 bg-[#0f172a]/20 overflow-hidden group italic">
                <div className="p-6 md:p-8 cursor-pointer flex items-center justify-between italic">
                  <h4 className="text-base md:text-lg font-black text-white uppercase italic tracking-tight group-hover:text-blue-400 transition-colors uppercase underline decoration-blue-500/0 hover:decoration-blue-500/30 italic">
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

      {/* Final CTA Section */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] relative overflow-hidden italic">
        <div className="max-w-5xl mx-auto glass-morphism rounded-[3rem] border border-blue-500/30 p-10 md:p-20 relative overflow-hidden text-center bg-blue-600/5 italic">
           <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent italic"></div>
           <div className="relative z-10 italic">
              <div className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-8 border border-blue-500/30 italic">
                <ShieldCheck className="w-10 h-10 text-blue-500" />
              </div>
              <h2 className="text-3xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-none mb-6 italic underline decoration-blue-500/20 decoration-8 underline-offset-8">Ready to Grow Your <br /> Traffic, Rankings & Revenue?</h2>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto italic">
                Get a custom Webflow SEO strategy built around your business goals. No pressure. No generic pitches. Just actionable growth.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 italic">
                <button 
                  onClick={onBook}
                  className="px-12 py-5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl shadow-2xl shadow-blue-500/40 uppercase tracking-tighter text-base flex items-center justify-center gap-3 transition-all italic"
                >
                  Book Free Strategic Call
                </button>
                <button 
                  onClick={onBook}
                  className="px-12 py-5 bg-white text-black font-black rounded-2xl uppercase tracking-tighter text-base flex items-center justify-center gap-3 transition-all hover:bg-gray-200 italic"
                >
                  Request SEO Audit
                </button>
              </div>
           </div>
        </div>
      </section>

      {/* Footer Branding Area */}
      <div className="py-12 border-t border-white/5 bg-[#030712] text-center italic">
         <span className="text-[10px] font-black text-gray-600 uppercase tracking-[0.5em] italic">Ritehly Quimbo • Webflow Search Engineer</span>
      </div>
    </div>
  );
};

export default WebflowSEOExpert;
