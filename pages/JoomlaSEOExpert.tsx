
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
  Code
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const JoomlaSEOExpert: React.FC<{ onBook: () => void }> = ({ onBook }) => {
  const faqs = [
    {
      question: "Is Joomla good for SEO?",
      answer: "Yes, Joomla is excellent for SEO when configured correctly. It has native support for SEF (Search Engine Friendly) URLs, metadata management, and path structures. However, it requires expert technical tuning to compete with modern high-performance architectures."
    },
    {
      question: "How long does Joomla SEO take?",
      answer: "Technical crawlability improvements often show results in 2-4 weeks. Significant organic traffic growth and keyword dominance typically take 3-6 months depending on competition and current site authority."
    },
    {
      question: "Do I need SEO extensions like SH404SEF or RSSeo?",
      answer: "While extensions can help, they often add bloat. We prefer a lean approach, utilizing core Joomla features and light optimization tools to keep your site fast. If you already have them, we optimize their configuration to ensure they aren't hurting your speed."
    },
    {
      question: "Can you fix technical SEO issues like duplicate URLs in Joomla?",
      answer: "Absolutely. Joomla's menu systems can sometimes generate multiple URLs for the same content. We implement strict canonicalization, robots.txt hardening, and URL rewrites to eliminate duplicate content issues."
    },
    {
       question: "Do you optimize for AI search (ChatGPT, Gemini, Perplexity)?",
       answer: "Yes. Our Joomla SEO framework includes structured data (Schema.org) and topical clustering designed specifically to be parsed and cited by AI discovery engines and LLMs."
    }
  ];

  const industries = [
    "Ecommerce", "Healthcare", "Lawyers", "Real Estate", 
    "Dentists", "Finance", "Roofing", "SaaS", 
    "Local Services", "Startups"
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white overflow-hidden">
      <SEO 
        title="Joomla SEO Expert | Rank Higher on Google & AI Search"
        description="Specialized Joomla SEO optimization for businesses that want higher Google rankings, faster websites, better visibility in AI search, and more qualified leads."
        keywords="joomla seo expert, joomla seo services, joomla technical seo, joomla speed optimization"
      />

      {/* 1. HERO SECTION */}
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
              Technical Joomla Specialist
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase italic tracking-tighter leading-[0.9] mb-6">
              Joomla SEO Expert — <span className="text-blue-500">Rank Higher on Google & AI Search</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed mb-8 max-w-xl">
              Specialized Joomla SEO optimization for businesses that want higher Google rankings, faster websites, better visibility in AI search, and more qualified leads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={onBook}
                className="px-8 py-5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl transition-all shadow-[0_20px_50px_rgba(59,130,246,0.3)] uppercase tracking-tighter text-base flex items-center justify-center gap-3 group"
              >
                <span>Get Free Joomla SEO Audit</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={onBook}
                className="px-8 py-5 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black rounded-2xl transition-all uppercase tracking-tighter text-base"
              >
                Book SEO Consultation
              </button>
            </div>
            <div className="flex flex-wrap gap-6 text-[10px] font-black uppercase tracking-widest text-gray-500 border-t border-white/5 pt-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3 h-3 text-blue-500" />
                No-obligation consultation
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3 h-3 text-blue-500" />
                Custom Joomla SEO strategy
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3 h-3 text-blue-500" />
                Transparent reporting
              </div>
            </div>
            <p className="mt-4 text-[10px] text-gray-500 font-bold uppercase italic tracking-widest">
              * Response within 24 hours.
            </p>
          </motion.div>

          {/* Right Column: Mini Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-morphism rounded-[2.5rem] border border-white/10 p-6 md:p-8 bg-[#0f172a]/40 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <Globe className="w-6 h-6 text-blue-500" />
                  <span className="text-sm font-black uppercase tracking-tighter italic">Ranking Visibility</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
              </div>
              
              <div className="space-y-6">
                {[
                  { label: "Technical Health", value: 98, color: "bg-blue-500" },
                  { label: "Content Authority", value: 85, color: "bg-purple-500" },
                  { label: "AI Search Readiness", value: 92, color: "bg-green-500" }
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-2">
                      <span>{stat.label}</span>
                      <span className="text-white italic">{stat.value}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${stat.value}%` }}
                        transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                        className={`h-full ${stat.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-4 bg-white/5 rounded-2xl border border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-gray-500 font-black uppercase mb-1">Organic Traffic</div>
                  <div className="text-2xl font-black text-white italic">+248%</div>
                </div>
                <TrendingUp className="w-8 h-8 text-green-500" />
              </div>
            </div>
            
            {/* Trust Stack Row Labels */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {['10+ Years Experience', 'Joomla Specialist', 'AI Optimization', 'Performance Focused'].map((tag, i) => (
                <div key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[9px] font-black uppercase tracking-widest text-gray-400">
                  {tag}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Mini Row */}
      <section className="py-10 border-y border-white/5 bg-[#030712]/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div className="flex items-center gap-2">
             <div className="flex -space-x-2">
                {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-[#030712] bg-blue-600 flex items-center justify-center text-[10px] font-black">UJ</div>)}
             </div>
             <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">Trusted by 50+ businesses</div>
          </div>
          <div className="h-4 w-px bg-white/10 hidden md:block"></div>
          <div className="flex items-center gap-1">
             {[1,2,3,4,5].map(i => <Zap key={i} className="w-3 h-3 text-blue-500 fill-blue-500" />)}
             <span className="text-[10px] font-black text-white uppercase italic ml-2">5.0 Star Rating</span>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM AGITATION SECTION */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] relative">
        <div className="max-w-7xl mx-auto text-center mb-16 md:mb-24">
          <h2 className="text-[10px] font-black text-red-500 uppercase tracking-[0.4em] mb-4">The Frustration</h2>
          <p className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase italic tracking-tighter leading-none mb-6">
            Why Most Joomla Websites <br /> <span className="text-red-500">Struggle to Rank</span>
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            Even good-looking Joomla websites fail because of technical SEO problems, weak content structure, slow speed, and outdated optimization practices.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Settings className="w-8 h-8 text-red-500" />,
              title: "Technical",
              problems: ["Broken crawl paths", "Poor Core Web Vitals", "Duplicate URLs", "Indexing issues"]
            },
            {
              icon: <Layout className="w-8 h-8 text-orange-500" />,
              title: "Content",
              problems: ["Weak keyword targeting", "Thin service pages", "Poor heading structure", "Low topic authority"]
            },
            {
              icon: <ShieldCheck className="w-8 h-8 text-purple-500" />,
              title: "Authority",
              problems: ["Weak backlink profile", "No topical authority", "Low AI search visibility", "Trust issues"]
            },
            {
              icon: <MousePointer2 className="w-8 h-8 text-blue-500" />,
              title: "Conversion",
              problems: ["Traffic without leads", "Poor UX / Friction", "Weak calls-to-action", "High bounce rate"]
            }
          ].map((card, i) => (
            <div key={i} className="p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all group lg:mt-0 mt-8">
              <div className="mb-6 group-hover:scale-110 transition-transform">{card.icon}</div>
              <h3 className="text-xl font-black text-white uppercase italic tracking-tight mb-6">{card.title} Problems</h3>
              <ul className="space-y-3">
                {card.problems.map((prob, j) => (
                  <li key={j} className="flex items-center gap-2 text-xs font-bold text-gray-500">
                    <XCircle className="w-3 h-3 text-red-900" />
                    {prob}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
             onClick={onBook}
             className="px-8 py-4 bg-red-600/10 border border-red-500/20 text-red-500 font-black rounded-xl uppercase tracking-widest text-[10px] hover:bg-red-600/20 transition-all"
          >
             See What's Hurting Your Rankings — Free Technical SEO Review Included
          </button>
        </div>
      </section>

      {/* 3. SOLUTION POSITIONING SECTION */}
      <section className="py-24 px-4 md:px-6 bg-blue-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 transform skew-x-12 translate-x-20"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="flex-1">
             <h2 className="text-[10px] font-black text-blue-200 uppercase tracking-[0.4em] mb-4">The Solution</h2>
             <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none mb-8">
               Specialized Joomla SEO — <br /> <span className="text-blue-900">Not Generic Packages</span>
             </p>
             <p className="text-blue-100 text-lg mb-10 max-w-xl">
               We combine technical Joomla expertise, content strategy, and <Link to="/services/ai-seo-automation" className="underline decoration-blue-300 underline-offset-4 hover:text-white transition-colors">AI search optimization</Link> to grow rankings and revenue.
             </p>

             <div className="grid grid-cols-2 gap-4 mb-10">
               {[
                 { label: "Generic Agency", text: "Basic CMS knowledge", check: false },
                 { label: "Our Expertise", text: "Joomla-specific re-builds", check: true },
                 { label: "Generic Agency", text: "Generic audit sheets", check: false },
                 { label: "Our Expertise", text: "Deep technical analysis", check: true },
                 { label: "Generic Agency", text: "Vanity metrics only", check: false },
                 { label: "Our Expertise", text: "Leads & Revenue focus", check: true }
               ].map((item, i) => (
                 <div key={i} className={`p-4 rounded-xl border ${item.check ? 'bg-blue-700/50 border-blue-400/30' : 'bg-black/10 border-black/20'}`}>
                    <div className={`text-[8px] font-black uppercase mb-2 ${item.check ? 'text-blue-200' : 'text-blue-400'}`}>{item.label}</div>
                    <div className="text-xs font-bold text-white flex items-center gap-2">
                       {item.check ? <CheckCircle2 className="w-3 h-3 text-green-300" /> : <XCircle className="w-3 h-3 text-red-400 opacity-50" />}
                       {item.text}
                    </div>
                 </div>
               ))}
             </div>

             <button 
               onClick={onBook}
               className="px-10 py-5 bg-white text-blue-600 font-black rounded-2xl shadow-xl uppercase tracking-tighter hover:scale-105 transition-all text-base"
             >
               Get a Custom Joomla SEO Strategy
             </button>
          </div>
          
          <div className="lg:w-[450px] w-full shrink-0">
             <div className="glass-morphism p-8 rounded-[3rem] border border-blue-400/30 bg-blue-500/20 shadow-2xl relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-lg">
                   <Target className="w-6 h-6" />
                </div>
                <div className="text-3xl font-black text-white italic mb-2">Revenue Focus</div>
                <div className="text-[10px] font-black text-blue-200 uppercase tracking-widest mb-6 border-b border-blue-400/20 pb-4 italic">Execution results overview</div>
                
                <div className="space-y-6">
                   <div className="flex justify-between items-end">
                      <div className="text-[10px] font-black uppercase text-blue-100">Visibility Lift</div>
                      <div className="text-2xl font-black text-white">+115%</div>
                   </div>
                   <div className="w-full h-1.5 bg-blue-900 rounded-full overflow-hidden">
                      <div className="w-[85%] h-full bg-green-300 shadow-[0_0_10px_rgba(134,239,172,0.5)]"></div>
                   </div>
                   <div className="flex justify-between items-end">
                      <div className="text-[10px] font-black uppercase text-blue-100">Conv. Rate Opt.</div>
                      <div className="text-2xl font-black text-white">+48%</div>
                   </div>
                   <div className="w-full h-1.5 bg-blue-900 rounded-full overflow-hidden">
                      <div className="w-[65%] h-full bg-purple-300 shadow-[0_0_10px_rgba(216,180,254,0.5)]"></div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. TRUST & SOCIAL PROOF SECTION */}
      <section className="py-24 px-4 md:px-6 bg-[#030712]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4">Proven Results</h2>
          <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none mb-6">
            Businesses Trust Our <span className="text-blue-500">Joomla Expertise</span>
          </p>
          <p className="text-gray-400 max-w-xl mx-auto text-lg font-medium leading-relaxed italic">
            “Real ranking improvements, real <Link to="/portfolio" className="text-blue-500 hover:text-blue-400 transition-colors">traffic growth</Link>, real business results.”
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
          {[
            { metric: "+240%", label: "Organic Growth", context: "B2B SaaS Firm" },
            { metric: "1.2s", label: "Page Load Speed", context: "Ecommerce Site" },
            { metric: "Top 3", label: "Keyword Rankings", context: "Local Law Practice" }
          ].map((stat, i) => (
            <div key={i} className="text-center p-10 glass-morphism rounded-[2.5rem] border border-white/5 relative group">
               <div className="text-5xl font-black text-blue-500 italic mb-4 group-hover:scale-110 transition-transform duration-500">{stat.metric}</div>
               <div className="text-[10px] font-black text-white uppercase tracking-widest mb-1 italic">{stat.label}</div>
               <div className="text-[9px] font-bold text-gray-500 uppercase tracking-tight">{stat.context}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
          {['Joomla.org', 'Cloudflare', 'Ahrefs', 'SEMrush', 'WP Engine', 'Bluehost'].map((brand, i) => (
             <span key={i} className="text-xl md:text-2xl font-black text-white uppercase italic tracking-tighter">{brand}</span>
          ))}
        </div>

        <div className="mt-16 text-center">
           <Link 
             to="/portfolio"
             className="inline-flex items-center gap-3 text-blue-500 font-black uppercase italic tracking-widest text-xs hover:text-blue-400 transition-colors"
           >
             See All Joomla SEO Case Studies <ArrowRight className="w-4 h-4" />
           </Link>
        </div>
      </section>

      {/* 5. SERVICES SECTION */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center lg:text-left">
            <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4">Deliverables</h2>
            <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter">
              Joomla SEO Services That <span className="text-blue-500">Drive Growth</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Settings className="w-8 h-8" />,
                title: <Link to="/services/technical-on-page-seo-optimization" className="hover:text-blue-500 transition-colors uppercase italic">Technical SEO Audit</Link>,
                features: ["Crawl analysis", "Indexing review", "Structured data audit"],
                benefit: "Better Google crawlability & indexing."
              },
              {
                icon: <Layout className="w-8 h-8" />,
                title: "On-Page Optimization",
                features: ["Title/Meta tuning", "Internal linking", "Heading structure"],
                benefit: "Higher CTR & better topical relevance."
              },
              {
                icon: <Search className="w-8 h-8" />,
                title: <Link to="/services/keyword-research-intent-mapping" className="hover:text-blue-500 transition-colors uppercase italic">Keyword & Intent Mapping</Link>,
                features: ["Search intent analysis", "Competitor gaps", "Topic clustering"],
                benefit: "Target keywords that actually convert."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Speed Optimization",
                features: ["Core Web Vitals", "Image optimization", "Caching tuning"],
                benefit: "Faster UX = Higher Google rankings."
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "AI Search Presence",
                features: ["ChatGPT visibility", "LLM optimization", "Snippet control"],
                benefit: "Be found by the next generation of search."
              },
              {
                icon: <BarChart className="w-8 h-8" />,
                title: "Reporting & ROI Tracking",
                features: ["Monthly reports", "Conversion analytics", "Keyword tracking"],
                benefit: "Transparent visibility into your growth."
              }
            ].map((service, i) => (
              <div key={i} className="p-10 rounded-[3rem] border border-white/5 bg-[#0f172a]/20 hover:border-blue-500/30 transition-all group relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-600/10 blur-[50px] rounded-full group-hover:bg-blue-600/20 transition-all"></div>
                <div className="text-blue-500 mb-8">{service.icon}</div>
                <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-4">{service.title}</h3>
                <ul className="space-y-2 mb-8">
                  {service.features.map((f, j) => (
                    <li key={j} className="text-[10px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                       <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                       {f}
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-white/5">
                   <p className="text-xs font-black text-blue-400 uppercase italic tracking-tight">{service.benefit}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <button 
               onClick={onBook}
               className="px-8 py-5 bg-blue-600 text-white font-black rounded-2xl shadow-lg uppercase tracking-tighter hover:bg-blue-700 transition-all"
             >
               Start Growing Your Joomla Rankings
             </button>
          </div>
        </div>
      </section>

      {/* 6. PROCESS SECTION */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
             <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4">The Framework</h2>
             <p className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase italic tracking-tighter">How Our <span className="text-blue-500">Joomla Process</span> Works</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-4 relative">
             <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 hidden lg:block"></div>
             {[
               { step: "01", title: "Audit", desc: "Technical + content depth review." },
               { step: "02", title: "Strategy", desc: "Keyword mapping + competitor analysis." },
               { step: "03", title: "Optimize", desc: "Technical fixes + on-page improvements." },
               { step: "04", title: "Authority", desc: "Content expansion + quality acquisition." },
               { step: "05", title: "Scale", desc: "Monthly reporting & growth tuning." }
             ].map((item, i) => (
               <div key={i} className="z-10 p-8 glass-morphism rounded-[2.5rem] border border-white/5 bg-black/40 text-center scale-up">
                  <div className="text-5xl font-black text-blue-900 italic mb-6 opacity-40">{item.step}</div>
                  <h3 className="text-lg font-black text-white uppercase italic tracking-tight mb-2">{item.title}</h3>
                  <p className="text-[10px] font-bold text-gray-500 leading-relaxed uppercase tracking-wider">{item.desc}</p>
               </div>
             ))}
          </div>
          
          <div className="mt-20 text-center">
             <button 
               onClick={onBook}
               className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black rounded-2xl hover:bg-white/10 transition-all uppercase tracking-tighter"
             >
               Book Your SEO Strategy Call
             </button>
          </div>
        </div>
      </section>

      {/* 7. RESULTS / OUTCOMES SECTION */}
      <section className="py-24 px-4 md:px-6 bg-[#030712]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4">The Future</h2>
            <p className="text-3xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-none mb-8">
              What Results Can <br /> <span className="text-blue-500">You Expect?</span>
            </p>
            <p className="text-gray-400 text-lg mb-10 max-w-xl">
              SEO focused on measurable business growth — not vanity metrics. We provide clear ROI visibility from Day 1.
            </p>

            <div className="grid grid-cols-2 gap-6">
               {[
                 "Higher Google Rankings", "Increased Organic Traffic",
                 "More Qualified Leads", "Better Conv. Rates",
                 "Faster Site Performance", "Increased Local Visibility",
                 "AI Search Presence", <Link key="res-ta" to="/services/topical-maps-semantic-authority" className="hover:text-blue-500 transition-colors">Topical Authority</Link>
               ].map((res, i) => (
                 <div key={i} className="flex items-center gap-3 text-xs font-black uppercase tracking-tight text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                    {typeof res === 'string' ? res : res}
                 </div>
               ))}
            </div>
          </div>

          <div className="relative">
             <div className="glass-morphism p-10 rounded-[3rem] border border-blue-500/20 bg-blue-600/5 shadow-2xl">
                <div className="text-center mb-10 pb-10 border-b border-white/10">
                   <div className="text-7xl font-black text-white italic tracking-tighter">+185%</div>
                   <div className="text-[10px] font-black text-blue-400 uppercase tracking-widest mt-2">Avg. Growth After 6 Months</div>
                </div>
                <div className="space-y-6">
                   <div className="flex items-center justify-between p-6 bg-white/5 rounded-2xl border border-white/5">
                      <div>
                         <div className="text-[9px] font-black text-gray-500 uppercase mb-1">Timeline</div>
                         <div className="text-lg font-black text-white italic">4-6 Months</div>
                      </div>
                      <Flame className="w-8 h-8 text-orange-500" />
                   </div>
                   <button 
                     onClick={onBook}
                     className="w-full py-5 bg-blue-600 text-white font-black rounded-xl uppercase tracking-widest text-xs shadow-lg shadow-blue-500/20"
                   >
                     Get Your Growth Forecast
                   </button>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 8. INDUSTRIES SECTION */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4">Specialization</h2>
            <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter">Joomla SEO for <span className="text-blue-500">Competitive Industries</span></p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {industries.map((ind, i) => (
              <div key={i} className="p-8 glass-morphism rounded-2xl border border-white/5 text-center group hover:border-blue-500/30 transition-all">
                <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">{ind}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <button 
               onClick={onBook}
               className="text-white font-black uppercase italic tracking-widest text-xs underline decoration-blue-500 underline-offset-8"
             >
               See Industry-Specific SEO Strategies
             </button>
          </div>
        </div>
      </section>

      {/* 9. PRICING / OFFER SECTION */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] relative overflow-hidden" id="pricing">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4">Growth Plans</h2>
            <p className="text-3xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-none mb-6 italic">
              Flexible Joomla <span className="text-blue-500">SEO Packages</span>
            </p>
            <p className="text-gray-400 font-black uppercase text-[10px] tracking-widest">Choose the level of <Link to="/pricing" className="text-blue-500 hover:text-blue-400 underline underline-offset-4">support your business needs</Link></p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                bestFor: "Small websites",
                price: "9,997",
                period: "Once",
                features: ["Technical SEO Audit", "On-Page Optimization", "Basic Keyword Mapping", "Monthly Report"]
              },
              {
                name: "Growth",
                bestFor: "Growing businesses",
                price: "24,997",
                period: "Monthly",
                featured: true,
                features: ["Everything in Starter", "Weekly Technical Fixes", "Content SEO Strategy", "Speed Optimization", "Competitive Tracking"]
              },
              {
                name: "Authority",
                bestFor: "Competitive niches",
                price: "49,997",
                period: "Monthly",
                features: ["Everything in Growth", "AI Search Strategy", "Full Content Production", "Advanced Schema/Entity Plan", "Priority 24/7 Support"]
              }
            ].map((plan, i) => (
              <div key={i} className={`p-10 rounded-[3rem] border transition-all flex flex-col ${plan.featured ? 'bg-blue-600/10 border-blue-500 shadow-[0_30px_100px_-20px_rgba(59,130,246,0.5)]' : 'bg-white/5 border-white/10'}`}>
                 <div className="mb-8">
                    <div className="text-[10px] font-black uppercase tracking-widest mb-1 text-blue-400 italic">{plan.name} Package</div>
                    <div className="text-[8px] font-bold text-gray-500 uppercase tracking-widest mb-6">Best For: {plan.bestFor}</div>
                    <div className="flex items-baseline gap-2">
                       <span className="text-6xl font-black text-white italic tracking-tighter leading-none">{plan.price}</span>
                       <span className="text-[10px] font-black text-gray-500 uppercase tracking-tighter leading-none">/ {plan.period}</span>
                    </div>
                 </div>
                 
                 <div className="space-y-4 mb-12 flex-1 pt-10 border-t border-white/5">
                    {plan.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-3 text-xs font-black uppercase tracking-tight text-white/80">
                         <CheckCircle2 className="w-4 h-4 text-blue-500" />
                         {f}
                      </div>
                    ))}
                 </div>

                 <button 
                   onClick={onBook}
                   className={`w-full py-5 rounded-2xl font-black uppercase tracking-tighter text-sm transition-all ${plan.featured ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/20 hover:scale-105' : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'}`}
                 >
                   Request Custom Pricing
                 </button>
                 <div className="mt-4 text-center">
                    <span className="text-[8px] font-black text-gray-600 uppercase tracking-widest italic">No hidden fees • Cancel anytime</span>
                 </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center text-gray-500 uppercase font-black text-[9px] tracking-[0.3em]">Custom enterprise plans available upon request</div>
        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] border-t border-white/5">
         <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
               <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4 italic">Clarity</h2>
               <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none italic">Frequently Asked Questions</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="glass-morphism rounded-2xl border border-white/5 bg-[#0f172a]/20 overflow-hidden group">
                  <div className="p-6 md:p-8 cursor-pointer flex items-center justify-between">
                    <h4 className="text-base md:text-lg font-black text-white tracking-tight group-hover:text-blue-400 transition-colors uppercase italic">
                      {faq.question}
                    </h4>
                    <ChevronDown className="w-5 h-5 text-gray-600 transition-transform group-hover:rotate-180" />
                  </div>
                  <div className="px-6 md:px-8 pb-8 pt-0 text-gray-400 leading-relaxed font-medium text-sm md:text-base">
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
               <p className="text-gray-500 font-bold mb-4 uppercase italic tracking-widest text-[10px]">Still have questions?</p>
               <button 
                 onClick={onBook}
                 className="px-8 py-4 bg-white/5 border border-white/10 text-white font-black rounded-xl uppercase tracking-tighter text-sm hover:bg-white/10 transition-all"
               >
                 Let's Talk →
               </button>
            </div>
         </div>
      </section>

      {/* 11. RISK REVERSAL SECTION */}
      <section className="py-24 px-4 md:px-6 bg-[#030712]">
         <div className="max-w-5xl mx-auto glass-morphism rounded-[3rem] border border-blue-500/30 p-10 md:p-20 relative overflow-hidden bg-blue-600/5 text-center">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            <div className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-10 border border-blue-500/30 shadow-2xl">
               <ShieldCheck className="w-10 h-10 text-blue-500" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none mb-8 italic">Transparent SEO With Zero Guesswork</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
               {[
                 "No long-term contracts", "Clear deliverables", "Ethical (White Hat) SEO",
                 "Monthly reporting", "Direct access to experts", "Strategy for ROI"
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-2 text-[10px] font-black uppercase text-gray-400 justify-center">
                    <CheckCircle2 className="w-3 h-3 text-blue-500" />
                    {item}
                 </div>
               ))}
            </div>

            <button 
              onClick={onBook}
              className="px-12 py-5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl shadow-2xl shadow-blue-500/40 uppercase tracking-tighter text-xl transition-all hover:scale-105 active:scale-95"
            >
              Start With a Free SEO Audit
            </button>
         </div>
      </section>

      {/* 12. FINAL CTA SECTION */}
      <section className="py-32 px-4 md:px-6 bg-[#030712] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.2),transparent_70%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-white uppercase italic tracking-tighter leading-[0.9] mb-10">
            Ready to Grow Your <br /> <span className="text-blue-500">Joomla Rankings?</span>
          </h2>
          <p className="text-gray-400 text-xl font-medium mb-12 max-w-2xl mx-auto">
            Get a custom Joomla SEO strategy built around your business goals. 
            No pressure, no sales talk—just actionable insights.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
             <button 
               onClick={onBook}
               className="w-full md:w-auto px-12 py-6 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl shadow-2xl shadow-blue-500/40 uppercase tracking-tighter text-2xl transition-all hover:scale-110 active:scale-95 flex items-center justify-center gap-4"
             >
               Get Free Joomla Audit
             </button>
             <button 
               onClick={onBook}
               className="w-full md:w-auto px-12 py-6 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black rounded-2xl uppercase tracking-tighter text-2xl transition-all"
             >
               Book Consultation
             </button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 italic">
             <span>No pressure sales call</span>
             <span>Personalized recommendations</span>
             <span>Actionable SEO insights</span>
          </div>
        </div>
      </section>

      {/* Footer Branding Area */}
      <div className="py-12 border-t border-white/5 bg-[#030712] text-center">
         <span className="text-[10px] font-black text-gray-600 uppercase tracking-[0.5em] italic">Ritehly Quimbo • Joomla Growth Engineer</span>
      </div>

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

export default JoomlaSEOExpert;
