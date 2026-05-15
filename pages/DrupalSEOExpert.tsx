
import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
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
  Database,
  Shield,
  Layers,
  Settings,
  Activity,
  ChevronRight
} from 'lucide-react';
import SEO from '../components/SEO';

const DrupalSEOExpert: React.FC<{ onBook: () => void }> = ({ onBook }) => {
  const faqs = [
    {
      question: "What makes Drupal SEO different from WordPress SEO?",
      answer: "Drupal is inherently more structured and enterprise-focused. While WordPress relies heavily on plugins, Drupal SEO requires deep knowledge of core modules, taxonomy, and server-side caching. It's built for scale and security, whereas WordPress is built for ease of use."
    },
    {
      question: "Do you optimize Drupal 10 websites?",
      answer: "Yes, we specialize in Drupal 9 and 10. We use modern composer-based workflows and optimize for the latest core features to ensure your site is as fast and searchable as possible."
    },
    {
      question: "Can you help after a Drupal migration?",
      answer: "Migration is the most dangerous time for SEO. We provide migration stabilization to ensure your path aliases, redirects, and meta-data remain intact, preventing the common 'ranking cliff' seen after enterprise upgrades."
    },
    {
      question: "Do you work with multilingual Drupal websites?",
      answer: "Absolutely. Multilingual is one of Drupal's greatest strengths. We optimize your hreflang tags, language-specific sitemaps, and translation workflows to ensure global search dominance."
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white overflow-hidden">
      <SEO 
        title="Drupal SEO Expert Services | High-Performance Enterprise SEO"
        description="Hire a Drupal SEO Expert to improve rankings, speed, and scalability. Technical Drupal SEO that drives organic traffic and enterprise growth. Specialist in Drupal 10."
        keywords="drupal seo expert, drupal seo services, enterprise drupal seo, technical drupal seo, drupal performance optimization"
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
              Enterprise Drupal Engineering
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase italic tracking-tighter leading-[0.9] mb-6">
              Drupal SEO Expert Services for <span className="text-blue-500">High-Performance Websites</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed mb-8 max-w-xl">
              Hire a Drupal SEO Expert to Improve Rankings, Speed & Scalability. We don't just optimize meta tags—we re-engineer your Drupal architecture for market dominance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onBook}
                className="px-8 py-5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl transition-all shadow-2xl shadow-blue-500/30 uppercase tracking-tighter text-base flex items-center justify-center gap-3 group"
              >
                <span>Request Free Audit</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link 
                to="/portfolio"
                className="flex items-center gap-4 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all group"
              >
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">
                  <span className="text-white block hover:text-blue-400 underline decoration-blue-500/30 mb-1">View Case Studies →</span>
                  Enterprise Success Stories
                </div>
              </Link>
            </div>
          </motion.div>

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
                      <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                        <Database className="w-6 h-6 text-blue-500" />
                      </div>
                      <span className="text-sm font-black uppercase tracking-tight">Crawl Efficiency Metrics</span>
                    </div>
                    <div className="text-[10px] font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded">Optimized</div>
                 </div>
                 <div className="space-y-4">
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                       <motion.div initial={{ width: 0 }} animate={{ width: '92%' }} transition={{ duration: 1, delay: 0.5 }} className="h-full bg-blue-500" />
                    </div>
                    <div className="flex justify-between text-[10px] font-black uppercase text-gray-500">
                       <span>Database Query Speed</span>
                       <span className="text-white">0.02s</span>
                    </div>
                     <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                       <motion.div initial={{ width: 0 }} animate={{ width: '88%' }} transition={{ duration: 1, delay: 0.7 }} className="h-full bg-purple-500" />
                    </div>
                    <div className="flex justify-between text-[10px] font-black uppercase text-gray-500">
                       <span>Indexation Accuracy</span>
                       <span className="text-white">99.8%</span>
                    </div>
                 </div>
                 <div className="mt-8 pt-6 border-t border-white/5">
                    <div className="text-[9px] text-gray-500 uppercase font-black mb-4">Enterprise Indicators</div>
                    <div className="flex gap-4">
                       <div className="flex-1 p-3 bg-white/5 rounded-xl text-center">
                          <div className="text-lg font-black text-white italic">100k+</div>
                          <div className="text-[8px] text-gray-500 uppercase">Nodes Index</div>
                       </div>
                       <div className="flex-1 p-3 bg-white/5 rounded-xl text-center">
                          <div className="text-lg font-black text-white italic">0.2s</div>
                          <div className="text-[8px] text-gray-500 uppercase">TTFB</div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust & Authority Section */}
      <section className="py-12 border-y border-white/5 bg-[#030712]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] text-center mb-8 italic">Trusted by Organizations Running Drupal</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            {['Acquia', 'Pantheon', 'AWS', 'Google Cloud', 'Cloudflare', 'Ahrefs'].map((brand, i) => (
              <span key={i} className="text-xl md:text-2xl font-black text-white uppercase italic tracking-tighter">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4">Structural Vulnerabilities</h2>
            <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none mb-6">
              Why Many Drupal Websites <span className="text-blue-500">Struggle to Rank</span>
            </p>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
              Drupal is powerful, but without specialized SEO optimization, its technical complexity can lead to crawl bottlenecks and indexation death-spirals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Activity className="w-8 h-8 text-blue-500" />,
                title: "Poor Crawl Efficiency",
                desc: "Complex taxonomy and view-heavy templates generate excessive bloated code that wastes crawl budget."
              },
              {
                icon: <Layers className="w-8 h-8 text-purple-500" />,
                title: "Architecture Conflicts",
                desc: "Incorrectly configured pathauto and taxonomy systems create duplicate content signals that confuse Google."
              },
              {
                icon: <Zap className="w-8 h-8 text-orange-500" />,
                title: "Rendering Bottlenecks",
                desc: "Heavy modules and unoptimized asset delivery cause Core Web Vitals to fail, especially in enterprise environments."
              }
            ].map((item, i) => (
              <div key={i} className="glass-morphism p-10 rounded-[2.5rem] border border-white/5 hover:border-blue-500/20 transition-all group">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-black text-white uppercase italic tracking-tight mb-4 group-hover:text-blue-500 transition-colors">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-medium">
                  {item.desc} If these problems persist, consider our <Link to="/services/full-stack-web-development-seo-performance" className="text-blue-400 hover:text-blue-300 underline decoration-blue-500/30">technical re-engineering</Link> approach.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-4 md:px-6 bg-blue-600 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-black/10 backdrop-blur-[2px]"></div>
         <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center md:text-left mb-16">
               <h2 className="text-[10px] font-black text-blue-200 uppercase tracking-[0.4em] mb-4 italic">Enterprise Solutions</h2>
               <p className="text-3xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-[0.9]">
                 Specialized Drupal SEO Strategies <br />
                 Built for <span className="text-blue-950">Massive Scalability.</span>
               </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {[
                 { title: "Drupal Technical SEO", list: ["Crawl optimization", "Canonical setup", "XML sitemap management"] },
                 { title: "Site Architecture", list: ["Taxonomy mapping", "URL structure refinement", "Navigation improvements"] },
                 { title: "Speed Optimization", list: ["Core Web Vitals", "Server-level caching", "Plugin cleanup"] },
                 { title: "Content Strategy", list: ["Topic clustering", "Intent mapping", "Dynamic silos"] },
                 { title: "Enterprise Scaling", list: ["Multi-site governance", "Large-scale indexing", "Global SEO"] },
                 { title: "Drupal Ecommerce", list: ["Product schema", "WooCommerce comparison", "Conversion tuning"] }
               ].map((item, i) => (
                 <div key={i} className="bg-white/10 border border-white/20 p-8 rounded-3xl backdrop-blur-md">
                    <h3 className="text-xl font-black text-white uppercase italic mb-6">{item.title}</h3>
                    <div className="space-y-3 font-bold text-sm text-blue-100 italic">
                       {item.list.map((l, j) => (
                         <div key={j} className="flex items-center gap-2">
                            <ChevronRight className="w-3 h-3 text-blue-300" />
                            {l}
                         </div>
                       ))}
                    </div>
                    {item.title === "Drupal Ecommerce" && (
                       <div className="mt-8 pt-4 border-t border-white/10">
                          <Link to="/services/ecommerce-seo-specialist" className="text-[10px] uppercase font-black tracking-widest text-white hover:text-blue-200 flex items-center gap-2">
                             Learn about ecommerce SEO <ArrowRight className="w-3 h-3" />
                          </Link>
                       </div>
                    )}
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Features vs Benefits Section */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4">The Advantage</h2>
            <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter italic">Enterprise Features. <span className="text-blue-500">Commercial Outcomes.</span></p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-6 text-[10px] font-black uppercase tracking-widest text-gray-500 italic">Drupal SEO Feature</th>
                  <th className="py-6 text-[10px] font-black uppercase tracking-widest text-blue-500 italic">Business Outcome</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { f: "Technical SEO Audit", b: "Identify & eliminate technical ranking bottlenecks" },
                  { f: "Taxonomy Optimization", b: "Improve site hierarchy & user discoverability" },
                  { f: "Speed Optimization", b: "Lower bounce rates & improve Core Web Vitals" },
                  { f: "Schema Architecture", b: "Increase SERP real estate & click-through rates" },
                  { f: "Topic Cluster Mapping", b: "Capture authority with a specialized Content Strategy", link: "/services/content-strategy-seo-copywriting" },
                  { f: "Enterprise Governance", b: "Maintain consistency across large-scale global sites" }
                ].map((row, i) => (
                  <tr key={i} className="group hover:bg-white/5 transition-colors">
                    <td className="py-6 font-black text-white italic uppercase tracking-tight">{row.f}</td>
                    <td className="py-6 text-gray-400 font-medium">
                       {row.b}
                       {row.link && (
                         <Link to={row.link} className="ml-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                           <ArrowRight className="inline w-4 h-4" />
                         </Link>
                       )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] relative">
        <div className="max-w-7xl mx-auto">
           <div className="mb-16">
              <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4">Our Protocol</h2>
              <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter">The Drupal SEO Process</p>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Deep Audit", desc: "Technical analysis, crawl review, and competitor research." },
                { title: "Architecture Roadmap", desc: "Prioritized recommendations and growth targets." },
                { title: "Execution", desc: "On-page, architecture, and performance optimization." },
                { title: "Expansion", desc: "Monthly reporting, tuning, and local market dominance." }
              ].map((step, i) => (
                <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/5 relative group">
                   <div className="text-3xl font-black text-blue-900 mb-4 italic italic">{i+1}</div>
                   <h3 className="text-lg font-black text-white uppercase mb-2 italic">{step.title}</h3>
                   <p className="text-gray-500 text-xs font-bold leading-relaxed">{step.desc}</p>
                   {step.title === "Expansion" && (
                     <div className="mt-4">
                        <Link to="/services/local-seo-optimization-google-maps" className="text-[8px] font-black uppercase text-blue-500 hover:text-blue-400 italic flex items-center gap-1">
                          Explore Local SEO <ArrowRight className="w-2 h-2" />
                        </Link>
                     </div>
                   )}
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 md:px-6 bg-[#030712]">
         <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div>
                  <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4 italic">Specialized Expertise</h2>
                  <h3 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none mb-8">
                    Why Businesses Hire Our <span className="text-blue-500">Drupal SEO Experts</span>
                  </h3>
                  <p className="text-gray-400 text-lg mb-10 font-medium">
                    Generic agencies use WordPress playbooks on Drupal sites. We understand Drupal's core logic, hook system, and cache architecture.
                  </p>
                  <div className="space-y-4">
                     {[
                       "Drupal CMS Architecture Expertise",
                       "Enterprise SEO Complexity Handling",
                       "Full-Stack Technical Understanding",
                       "Performance-First SEO Methodology"
                     ].map((t, i) => (
                       <div key={i} className="flex items-center gap-3 text-sm font-black text-white uppercase italic">
                          <CheckCircle2 className="w-5 h-5 text-blue-500" />
                          {t}
                       </div>
                     ))}
                  </div>
               </div>
               
               <div className="bg-blue-600/10 border border-blue-500/20 p-10 rounded-[3rem] relative">
                  <div className="space-y-8">
                     <div>
                        <div className="text-red-500 font-black text-[10px] uppercase tracking-widest mb-2">Generic Agencies</div>
                        <p className="text-gray-500 text-sm italic">"Let's just install a meta-tag module and wait."</p>
                     </div>
                     <div className="h-px bg-white/5"></div>
                     <div>
                        <div className="text-green-500 font-black text-[10px] uppercase tracking-widest mb-2">My Drupal Specialists</div>
                        <p className="text-white font-bold text-base italic">"We tuned your varnish cache, optimized the DB queries, and mapped your taxonomy for unshakeable topical authority."</p>
                     </div>
                     <div className="mt-10 pt-6 border-t border-white/5">
                        <Link to="/services/wordpress-seo-expert" className="text-[10px] font-black text-blue-400 hover:text-blue-300 uppercase tracking-[0.2em] italic flex items-center justify-between group">
                           Need something simpler? See WordPress SEO <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4">Investment Structures</h2>
            <p className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter">Flexible Drupal SEO Packages</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Starter SEO", price: "12,997", desc: "Technical stabilization and basic on-page for small to mid Drupal sites." },
              { title: "Growth Engine", price: "29,997", desc: "Scale authority with architecture fixes and deep topic silk maps.", popular: true },
              { title: "Enterprise Lead", price: "59,997", desc: "Full governance, international SEO, and large-scale technical dominance." }
            ].map((plan, i) => (
              <div key={i} className={`p-10 rounded-[3rem] border transition-all flex flex-col ${plan.popular ? 'bg-blue-600/10 border-blue-500 shadow-2xl shadow-blue-500/20' : 'bg-white/5 border-white/10'}`}>
                <h4 className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-4 italic">{plan.title}</h4>
                <div className="mb-6 flex items-baseline gap-2">
                   <span className="text-xs font-bold text-gray-500">₱</span>
                   <span className="text-5xl font-black text-white italic tracking-tighter">{plan.price}</span>
                   <span className="text-[10px] font-black text-gray-500 italic uppercase">/ month</span>
                </div>
                <p className="text-gray-400 text-xs font-bold mb-10 italic leading-relaxed">{plan.desc}</p>
                <div className="mt-auto">
                   <button onClick={onBook} className={`w-full py-5 rounded-2xl font-black uppercase tracking-tighter transition-all ${plan.popular ? 'bg-blue-600 text-white' : 'bg-white/5 border border-white/10 hover:bg-white/10 text-white'}`}>
                      Select Package
                   </button>
                </div>
              </div>
            ))}
          </div>
           <p className="text-center mt-12 text-gray-600 text-[10px] font-black uppercase tracking-widest italic">All plans require a minimum 3-month commitment for performance stabilization.</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] border-t border-white/5">
        <div className="max-w-4xl mx-auto">
           <div className="text-center mb-16">
              <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4">Clarity & Code</h2>
              <h3 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter italic">Common Questions</h3>
           </div>
           
           <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="glass-morphism rounded-3xl border border-white/5 bg-[#0f172a]/20 overflow-hidden group">
                   <div className="p-8 cursor-pointer flex items-center justify-between">
                      <h4 className="text-lg font-black text-white uppercase italic tracking-tight group-hover:text-blue-400 transition-colors">{faq.question}</h4>
                      <ChevronDown className="w-5 h-5 text-gray-600 group-hover:rotate-180 transition-transform" />
                   </div>
                   <div className="px-8 pb-8 text-gray-400 font-medium leading-relaxed italic">{faq.answer}</div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Risk Reversal */}
      <section className="py-24 px-4 md:px-6">
        <div className="max-w-5xl mx-auto glass-morphism rounded-[3rem] border border-blue-500/30 p-12 md:p-24 text-center bg-blue-600/5 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
           <div className="relative z-10">
              <div className="w-20 h-20 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mx-auto mb-10">
                 <ShieldCheck className="w-10 h-10 text-blue-500" />
              </div>
              <h2 className="text-3xl md:text-6xl font-black text-white uppercase italic mb-8 leading-none italic">The Zero-Risk Drupal Audit</h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                If our audit doesn't reveal at least <span className="text-blue-500 font-black italic underline">5 technical Drupal bottlenecks</span> that are hurting your rankings, we'll double your audit fee back. No questions.
              </p>
              <button 
                onClick={onBook}
                className="px-12 py-6 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-[2rem] transition-all shadow-2xl shadow-blue-500/40 uppercase tracking-tighter text-2xl"
              >
                Claim Your Risk-Free Audit
              </button>
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 md:px-6 bg-[#030712] relative">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-center md:text-left">
               <h2 className="text-5xl md:text-8xl font-black text-white uppercase italic tracking-tighter leading-[0.8] italic">
                 Unlock Your <br /> <span className="text-blue-500">Growth Engine.</span>
               </h2>
            </div>
            <div className="flex flex-col items-center md:items-end gap-6 text-center md:text-right">
               <p className="text-gray-500 font-black uppercase text-[10px] tracking-widest hidden md:block">Limited Openings for Enterprise Consulting</p>
               <button 
                 onClick={onBook}
                 className="px-12 py-6 bg-white text-black font-black rounded-3xl hover:bg-gray-200 transition-all uppercase tracking-tighter text-3xl shadow-2xl"
               >
                 Book Strategy Session
               </button>
            </div>
         </div>
      </section>

       <div className="py-12 border-t border-white/5 bg-[#030712] text-center">
         <span className="text-[10px] font-black text-gray-600 uppercase tracking-[0.5em] italic italic">Ritehly Quimbo • Drupal Performance Specialist</span>
      </div>
    </div>
  );
};

export default DrupalSEOExpert;
