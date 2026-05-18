
import React from 'react';
import { Link } from 'react-router-dom';
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
  ChevronDown
} from 'lucide-react';
import SEO from '../components/SEO';

const WordPressSEOExpert: React.FC<{ onBook: () => void }> = ({ onBook }) => {
  const faqs = [
    {
      question: "Why can't I just use Yoast or Rank Math and do it myself?",
      answer: "Plugins are tools, not a strategy. A plugin won't fix your database bloat, optimize your server-side rendering, or create a topical map that establishes authority. We handle the 90% that plugins can't reach."
    },
    {
      question: "How long until we see #1 rankings?",
      answer: "Technical 'wins' often manifest in 14-30 days. Broad authority and competitive keyword dominance typically take 3-6 months. We focus on 'Low-Hanging Fruit' first to get you ROI as fast as possible."
    },
    {
      question: "Is this a one-time thing or monthly?",
      answer: "We offer both. However, SEO is a dynamic competition. Our monthly 'Maintenance & Growth' plans ensure your competitors never leapfrog you while we constantly push for new keyword territory."
    },
    {
      question: "Do you handle WordPress speed optimization too?",
      answer: "Absolutely. Speed is a core ranking factor. We optimize images, scripts, and hosting environments to ensure you hit 'Green' on all Core Web Vitals."
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white overflow-hidden">
      <SEO 
        title="WordPress SEO Expert Services | Rank #1 & Convert More Leads"
        description="Hire a WordPress SEO Expert that actually understands conversion. We optimize your CMS for speed, security, and sales. No fluff, just pure search engineering."
        keywords="wordpress seo expert, wordpress seo services, wordpress speed optimization, technical seo wordpress"
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
              WordPress Growth Engineering
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase italic tracking-tighter leading-[0.9] mb-6">
              WordPress SEO Expert Services That <span className="text-blue-500">Drive Rankings, Traffic & Leads</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed mb-8 max-w-xl">
              Hire a WordPress SEO Expert that actually understands conversion. We don't just 'install plugins'—we engineer your site for unshakeable market dominance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onBook}
                className="px-8 py-5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl transition-all shadow-2xl shadow-blue-500/30 uppercase tracking-tighter text-base flex items-center justify-center gap-3 group"
              >
                <span>Get My Free WP Audit</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                to="/portfolio"
                className="flex items-center gap-4 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all group"
              >
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">
                  <span className="text-white block group-hover:text-blue-400 transition-colors underline decoration-blue-500/30">View Case Studies →</span>
                  500k+ organic visitors
                </div>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 glass-morphism rounded-[2.5rem] border border-white/10 p-4 md:p-6 shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] bg-[#0f172a]/40">
              <div className="bg-[#030712] rounded-2xl p-6 border border-white/5">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-black uppercase tracking-tight">Traffic Growth Chart</span>
                  </div>
                  <div className="text-[10px] font-bold text-blue-400 bg-blue-500/10 px-2 py-1 rounded">+342% vs Prey Month</div>
                </div>
                <div className="h-48 w-full flex items-end gap-1 md:gap-2">
                  {[40, 25, 45, 30, 55, 40, 70, 50, 85, 60, 95, 80].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: 0.5 + (i * 0.05) }}
                      className={`flex-1 rounded-t-sm md:rounded-t-md ${i === 10 ? 'bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.5)]' : 'bg-blue-500/20'}`}
                    />
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <div className="text-[9px] text-gray-500 uppercase font-black mb-1">Keywords</div>
                    <div className="text-xl font-black text-white italic">14.2k</div>
                  </div>
                   <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <div className="text-[9px] text-gray-500 uppercase font-black mb-1">Backlinks</div>
                    <div className="text-xl font-black text-white italic">2.8k</div>
                  </div>
                   <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <div className="text-[9px] text-gray-500 uppercase font-black mb-1">Conv. Rate</div>
                    <div className="text-xl font-black text-white italic">4.8%</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Background elements */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-600/10 blur-[80px] rounded-full"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Strip */}
      <section className="py-12 border-y border-white/5 bg-[#030712]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] text-center mb-8 italic">Trusted by WordPress Businesses Worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            {['WordPress', 'Elementor', 'WooCommerce', 'WP Engine', 'Cloudflare', 'Ahrefs'].map((brand, i) => (
              <span key={i} className="text-xl md:text-2xl font-black text-white uppercase italic tracking-tighter">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-[10px] font-black text-red-500 uppercase tracking-[0.4em] mb-4">The Burning Truth</h2>
            <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none mb-6">
              Is Your WordPress Site Being <span className="text-red-500">Held Hostage</span> By Bad SEO?
            </p>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
              Most WordPress themes are bloated with code that slows you down, confuses Google, and kills your conversion rate. If your foundation is broken, you need <Link to="/services/full-stack-web-development-seo-performance" className="text-white hover:text-red-400 underline decoration-red-500/50">Full-Stack Re-Engineering</Link> before SEO can work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
                title: "Code Bloat / Slow Speed",
                desc: "Your site takes 5+ seconds to load. You fail Core Web Vitals, and Google is actively pushing you down the rankings."
              },
              {
                icon: <Users className="w-8 h-8 text-orange-500" />,
                title: "Traffic Without Leads",
                desc: "You have visitors, but no sales. Your site hierarchy is confusing, and users leave without taking action."
              },
              {
                icon: <Lock className="w-8 h-8 text-purple-500" />,
                title: "Shadow Penalties",
                desc: "Hidden technical errors in your XML sitemap or robots.txt are preventing your best pages from being indexed."
              }
            ].map((item, i) => (
              <div key={i} className="glass-morphism p-10 rounded-[2.5rem] border border-white/5 hover:border-red-500/20 transition-all group scale-up">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-black text-white uppercase italic tracking-tight mb-4 group-hover:text-red-500 transition-colors">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-4 md:px-6 bg-blue-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white opacity-5 transform skew-x-12 translate-x-32 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-[10px] font-black text-blue-200 uppercase tracking-[0.4em] mb-4">A Different Approach</h2>
            <p className="text-3xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-[0.9] mb-8">
              We Don't Just Optimize Blogs. <br />
              We Engineer <span className="text-blue-900">Revenue Machines.</span>
            </p>
            <p className="text-blue-100/60 text-xs font-bold uppercase tracking-widest mb-8 max-w-md">
              We combine deep technical audits with <Link to="/services/local-seo-optimization-google-maps" className="text-white hover:text-blue-200 underline decoration-blue-300/30">Local SEO Dominance</Link> to capture high-intent regional traffic.
            </p>
            <div className="space-y-4 mb-10">
              {[
                "Plugin-Free Speed Optimization (Custom Caching)",
                "Elite Topical Authority Mapping",
                "Conversion-Centered Site Architecture",
                "Hardened Security & Malware Protection"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 text-white font-black uppercase italic tracking-tight text-sm">
                  <CheckCircle2 className="w-5 h-5 text-blue-200" />
                  {text}
                </div>
              ))}
            </div>
            <button 
              onClick={onBook}
              className="px-10 py-5 bg-white text-blue-600 font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-black/20 uppercase tracking-tighter"
            >
              See My Full Process →
            </button>
          </div>
          <div className="w-full md:w-[400px] shrink-0">
             <div className="glass-morphism p-8 rounded-[2rem] border border-white/20 bg-white/10 shadow-2xl">
                <div className="text-5xl font-black text-white mb-2 italic">100/100</div>
                <div className="text-xs font-black text-blue-100 uppercase tracking-widest mb-6 border-b border-white/20 pb-4">Lighthouse Performance Score</div>
                <div className="space-y-6">
                  <div className="w-full h-2 bg-blue-900/50 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-green-400"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-black text-white italic">0.4s</div>
                      <div className="text-[8px] text-blue-100 uppercase font-black">LCP</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-black text-white italic">0ms</div>
                      <div className="text-[8px] text-blue-100 uppercase font-black">FID</div>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Features vs Benefits Section */}
      <section className="py-24 px-4 md:px-6 bg-[#030712]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4">Feature Grid</h2>
             <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter">Everything You Need To <span className="text-blue-500">Dominate Search</span></p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Custom Semantic Markup",
                icon: <Layout className="w-6 h-6" />,
                benefit: "Help Google understand exactly what you sell - instantly."
              },
              {
                title: "Topic Cluster Strategy",
                icon: <Search className="w-6 h-6" />,
                benefit: "Establish unshakeable authority in your specific niche."
              },
              {
                 title: "Advanced WP Hardening",
                 icon: <ShieldCheck className="w-6 h-6" />,
                 benefit: "Prevent hacks and downtime that kill your rankings."
              },
              {
                 title: "UX Conversion Engineering",
                 icon: <MousePointer2 className="w-6 h-6" />,
                 benefit: "Turn more of your existing traffic into qualified leads."
              },
              {
                 title: "Dynamic Content Silos",
                 icon: <BarChart3 className="w-6 h-6" />,
                 benefit: "Structure your data so internal links pass maximum juice."
              },
              {
                 title: "24/7 Health Monitoring",
                 icon: <Flame className="w-6 h-6" />,
                 benefit: "We catch issues before Google does. Every single time."
              }
            ].map((feat, i) => (
              <div key={i} className="p-8 rounded-3xl border border-white/5 bg-[#0f172a]/20 hover:border-blue-500/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                  {feat.icon}
                </div>
                <h3 className="text-lg font-black text-white uppercase italic tracking-tight mb-2 group-hover:text-blue-400 transition-colors">{feat.title}</h3>
                <p className="text-gray-500 text-xs font-bold leading-relaxed">{feat.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4">Execution Protocol</h2>
            <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter">Your Road to <span className="text-blue-500">Market Dominance</span></p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 hidden lg:block"></div>
            
            <div className="grid lg:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Full Tech Audit", desc: "We map your database, plugins, and server config for leaks." },
                { step: "02", title: "Keyword Blueprint", desc: "We identify the high-intent terms that drive actual sales." },
                { step: "03", title: "Authority Setup", desc: "Topical silos and content clusters to establish dominance." },
                { step: "04", title: "Growth & Scale", desc: "Iterative testing and conversion tuning for 24/7 revenue." }
              ].map((p, i) => (
                <div key={i} className="relative z-10 glass-morphism p-8 rounded-3xl border border-white/5 bg-black/40">
                  <div className="text-4xl font-black text-blue-900 mb-6 italic opacity-50">{p.step}</div>
                  <h3 className="text-xl font-black text-white uppercase italic tracking-tight mb-3">{p.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-blue-500/5 blur-xl rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 md:px-6 bg-[#030712]">
         <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div>
                  <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4">The Differentiator</h2>
                  <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none mb-8">
                    Why Companies Prefer My <span className="text-blue-500">WordPress Growth Approach</span>
                  </p>
                  <p className="text-gray-400 text-lg mb-12 font-medium">
                    Unlike generic agencies, I prioritize Engineering over Art. Every pixel must justify its existence in your bank account. See my 
                    <Link to="/portfolio/web-development" className="text-blue-500 hover:text-blue-400 font-black italic mx-2 underline decoration-blue-500/30">Technical Build Portfolio</Link> 
                    to see the engines behind the rankings.
                  </p>
                  
                  <div className="space-y-6">
                    {[
                      { icon: <ShieldCheck className="w-5 h-5" />, title: "Zero Data Blind Spots", text: "Advanced UTM and event tracking for 100% visibility." },
                      { icon: <Zap className="w-5 h-5" />, title: "Server-Side Optimization", text: "We go deeper than just the WordPress dashboard." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/5">
                        <div className="text-blue-500">{item.icon}</div>
                        <div>
                          <h4 className="text-white font-black uppercase tracking-tight italic mb-1">{item.title}</h4>
                          <p className="text-gray-500 text-sm">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
               </div>
               
               <div className="relative">
                  <div className="glass-morphism p-10 rounded-[3rem] border border-blue-500/20 bg-blue-500/5">
                    <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-8 italic">Old Way vs My Way</h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                        <div>
                          <div className="text-gray-500 text-[10px] font-black uppercase mb-1">Old Agency Way</div>
                          <p className="text-sm text-gray-400 italic">"We installed Yoast, now you wait 6 months for results."</p>
                        </div>
                      </div>
                      <div className="h-px bg-white/5"></div>
                      <div className="flex items-start gap-4">
                        <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                        <div>
                          <div className="text-blue-500 text-[10px] font-black uppercase mb-1">My Precision Way</div>
                          <p className="text-sm text-white font-bold italic">"We re-architected your DB, established Topical Moats, and hit Green Core Web Vitals in 14 days."</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 blur-[50px] rounded-full"></div>
               </div>
            </div>
         </div>
      </section>

      {/* Case Studies / Results Section */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4 italic">Proof of Engineering</h2>
              <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter">Real Results for <span className="text-blue-500">Real Companies</span></p>
            </div>
            <Link to="/portfolio" className="text-blue-500 font-extrabold uppercase italic tracking-widest text-xs hover:text-blue-400 transition-colors flex items-center gap-2 mb-2">
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Ecommerce Growth – 342% Traffic Increase",
                desc: "Re-architected a bloated WooCommerce store. Reduced load time from 8.4s to 1.1s and secured #1 position for 'Designer Furniture Online'.",
                metric: "+342%",
                label: "Organic Growth"
              },
              {
                title: "B2B Lead Gen – 52 High-Intent Leads/Mo",
                desc: "Transformed a static corporate site into a conversion engine. Implemented topical maps and semantic siloing to dominate the 'SaaS Consultancy' niche.",
                metric: "+180%",
                label: "Conversion Lift"
              }
            ].map((caseStudy, i) => (
              <div key={i} className="glass-morphism p-8 md:p-12 rounded-[3rem] border border-white/5 bg-[#0f172a]/20 relative group hover:border-blue-500/20 transition-all">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1">
                    <h3 className="text-2xl font-black text-white uppercase italic mb-4 leading-tight">{caseStudy.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 italic">{caseStudy.desc}</p>
                  </div>
                  <div className="w-full md:w-auto px-10 py-8 bg-blue-600/10 border border-blue-500/20 rounded-3xl text-center">
                    <div className="text-4xl font-black text-blue-500 italic mb-1">{caseStudy.metric}</div>
                    <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{caseStudy.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Offer Section */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] relative overflow-hidden" id="pricing">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4">Investment Blueprints</h2>
            <p className="text-3xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-none mb-6 italic">
              Simple Pricing. <span className="text-blue-500">Unfair Advantage.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "WP Audit & Fix",
                price: "9,997",
                period: "One-Time",
                desc: "Perfect for cleaning up technical debt and mapping your growth strategy.",
                features: ["Full Technical Audit", "Speed Optimization", "Schema Setup", "Keyword Mapping"],
                highlight: false
              },
              {
                name: "Growth Engine",
                price: "24,997",
                period: "Monthly",
                desc: "For businesses ready to scale authority and dominate their niche.",
                features: ["Everything in Audit", "Bi-Weekly Content Posting", "Link Acquisition", "CRO A/B Testing"],
                highlight: true
              },
              {
                name: "Market Leader",
                price: "49,997",
                period: "Monthly",
                desc: "Total market domination with AI integration and daily performance tuning.",
                features: ["Everything in Growth", "Daily Health Checks", "AI Workflow Integration", "Direct Engineer Access"],
                highlight: false
              }
            ].map((plan, i) => (
              <div key={i} className={`p-10 rounded-[3rem] border transition-all flex flex-col ${plan.highlight ? 'bg-blue-600/10 border-blue-500 shadow-[0_30px_60px_-15px_rgba(59,130,246,0.3)] shadow-blue-500/20' : 'bg-white/5 border-white/10'}`}>
                <div className="mb-8">
                   <div className="text-[10px] font-black uppercase tracking-widest mb-2 text-blue-400">{plan.name}</div>
                   <div className="flex items-baseline gap-2">
                     <span className="text-xs font-bold text-gray-500">₱</span>
                     <span className="text-5xl font-black text-white italic tracking-tighter leading-none">{plan.price}</span>
                     <span className="text-[10px] font-black text-gray-500 uppercase italic tracking-widest">/ {plan.period}</span>
                   </div>
                </div>
                <p className="text-gray-400 text-xs font-bold mb-8 italic leading-relaxed">{plan.desc}</p>
                <div className="space-y-4 mb-10 flex-1">
                  {plan.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-3 text-xs font-black uppercase tracking-tight text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-blue-500" />
                      {f}
                    </div>
                  ))}
                </div>
                <button 
                  onClick={onBook}
                  className={`w-full py-5 rounded-2xl font-black uppercase tracking-tighter text-sm transition-all ${plan.highlight ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20' : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'}`}
                >
                  Choose {plan.name.split(' ')[0]}
                </button>
              </div>
            ))}
          </div>
          <p className="text-center mt-12 text-gray-600 text-[10px] font-black uppercase tracking-widest italic">All plans include regular reporting and performance transparency.</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4">Clarity & Confidence</h2>
             <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter">Common Questions</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-morphism rounded-2xl border border-white/5 bg-[#0f172a]/20 overflow-hidden group">
                <div className="p-6 md:p-8 cursor-pointer flex items-center justify-between">
                  <h4 className="text-base md:text-lg font-black text-white uppercase italic tracking-tight group-hover:text-blue-400 transition-colors">
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
        </div>
      </section>

      {/* Risk Reversal Section */}
      <section className="py-24 px-4 md:px-6">
        <div className="max-w-5xl mx-auto glass-morphism rounded-[3rem] border border-blue-500/30 p-10 md:p-20 relative overflow-hidden text-center bg-blue-600/5">
           <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
           <div className="relative z-10">
              <div className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-8 border border-blue-500/30">
                <ShieldCheck className="w-10 h-10 text-blue-500" />
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none mb-6 italic">The Zero-Risk Performance Guarantee</h2>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                If we don't find at least <span className="text-blue-500 font-black italic">5 critical technical SEO leaks </span> in your first audit, we'll double your audit fee back. We believe in performance, not promises.
              </p>
              <button 
                onClick={onBook}
                className="px-12 py-5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl shadow-2xl shadow-blue-500/40 uppercase tracking-tighter text-xl scale-down"
              >
                Claim Your Zero-Risk Audit
              </button>
           </div>
        </div>
      </section>

      {/* Final CTA Strip */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left">
             <h2 className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-none italic">Let's Rule Your <br /> <span className="text-blue-500">Market Today.</span></h2>
          </div>
          <div className="flex flex-col items-center md:items-end gap-6">
             <p className="text-gray-400 text-right uppercase font-black text-[10px] tracking-widest hidden md:block">Limited Client Openings for Q2 2024</p>
             <button 
               onClick={onBook}
               className="px-12 py-6 bg-white text-black font-black rounded-2xl hover:bg-gray-200 transition-all uppercase tracking-tighter text-2xl shadow-2xl shadow-white/5 scale-up"
             >
               Book Strategy Session
             </button>
          </div>
        </div>
      </section>

      {/* Footer Branding Area */}
      <div className="py-12 border-t border-white/5 bg-[#030712] text-center">
         <span className="text-[10px] font-black text-gray-600 uppercase tracking-[0.5em] italic">Ritehly Quimbo • WordPress Growth Engineer</span>
      </div>
    </div>
  );
};

export default WordPressSEOExpert;
