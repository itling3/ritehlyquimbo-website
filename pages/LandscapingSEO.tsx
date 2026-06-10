import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Sprout, 
  MapPin, 
  PhoneCall, 
  Search, 
  HelpCircle, 
  ArrowRight, 
  Star, 
  ChevronDown, 
  Globe, 
  BarChart3, 
  CheckCircle2, 
  TrendingUp,
  Shield,
  Users,
  Calendar,
  FileText
} from 'lucide-react';
import SEO from '../components/SEO';

interface LandscapingSEOProps {
  onBook: (e?: React.MouseEvent) => void;
}

const LandscapingSEOPage: React.FC<LandscapingSEOProps> = ({ onBook }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden font-sans pt-12">
      <SEO 
        title="SEO Services for Landscapers | Get More Leads & Booked Jobs"
        description="Grow your landscaping business with professional local SEO. Rank top on Google Search and Maps, generate more service queries and quote requests."
        keywords="seo services for landscapers, landscaping company marketing, lawn care SEO, local nursery search engine optimization"
      />

      {/* Hero Section */}
      <section className="relative pt-12 md:pt-16 lg:pt-20 pb-24 px-4 md:px-6 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(16,185,129,0.1),transparent_70%)] pointer-events-none"></div>
        <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-2">
              <Sprout className="w-4 h-4 text-emerald-400" /> Green Industry & Landscaping SEO
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              SEO Services for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-200">Landscapers</span> That Generate More Calls, Quotes & Landscaping Jobs
            </h1>
            
            <p className="text-lg sm:text-xl font-bold text-gray-200">
              Grow Your Landscaping Business with Professional SEO Services for Landscapers
            </p>
            
            <div className="space-y-4 text-gray-400 text-sm md:text-base leading-relaxed">
              <p>
                Your next customer is already searching for landscaping services online. The question is: will they find your business or your competitors?
              </p>
              <p>
                Our specialized SEO services for landscapers help landscaping companies rank higher on Google, attract qualified local leads, and turn website visitors into paying customers. Whether you offer lawn care, landscape design, hardscaping, irrigation installation, tree services, or commercial landscaping, our SEO strategies are designed to generate consistent growth.
              </p>
              <p className="font-bold text-white">
                Get more visibility. Generate more leads. Win more landscaping projects.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-white/5 p-4 rounded-xl space-y-1">
              <p className="font-bold text-white text-sm uppercase tracking-wider text-amber-300">Ready to Grow?</p>
              <p className="text-xs text-gray-400">
                Discover how much traffic, leads, and revenue your landscaping business could be missing—and get a customized growth strategy designed specifically for your market.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onBook}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-black bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-550 hover:to-emerald-400 font-black tracking-wide shadow-lg shadow-emerald-500/20 transition-all duration-300 group hover:scale-[1.02]"
              >
                Schedule Your Free SEO Consultation Today
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

          {/* Right Column Custom Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-6"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent rounded-3xl blur-2xl"></div>
            <div className="relative glass-morphism border border-white/5 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl">
              <div className="h-2 w-20 bg-emerald-400 rounded-full"></div>
              <h3 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                <MapPin className="text-orange-400 w-5 h-5" /> Local Territory Maps Domain
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Win the Local 3-Pack and capture recurring grounds maintenance, turfing, and design-build requests from active homeowners in your service parameters.
              </p>
              
              <div className="pt-4 space-y-3">
                <button 
                  onClick={onBook}
                  className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-450 hover:from-emerald-500 hover:to-teal-500 text-black font-black transition-all text-xs uppercase tracking-wider"
                >
                  Request A Free SEO Audit Today
                </button>
                <div className="text-center text-[10px] text-gray-500">
                  Targeting multiple regional councils or neighborhoods? Access our central{' '}
                  <Link to="/locations" className="text-emerald-400 underline font-bold hover:text-emerald-300">
                    Locations Page
                  </Link>{' '}
                  for more geo-targeting guidelines.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Most Landscaping Companies Struggle to Generate Consistent Leads Online */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              Why Most Landscaping Companies Struggle to Generate Consistent Leads Online
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              The landscaping industry is highly competitive. Homeowners and commercial property managers search online when they need landscaping services, and they typically contact businesses that appear on the first page of Google.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-7 gap-6">
            {[
              {
                title: "Low Google rankings",
                desc: "Your website gets buried beneath directories and competitor brands, making it invisible to top-tier buyers."
              },
              {
                title: "Inconsistent lead flow",
                desc: "Seasonal fluctuations in landscaping mean your leads dry up right when you have staff and equipment bills to pay."
              },
              {
                title: "Heavy dependence on referrals",
                desc: "While word of mouth is valuable, it is unpredictable and won't fuel scale or group level expansion plans."
              },
              {
                title: "Expensive advertising campaigns",
                desc: "PPC bids are continuously escalating, driving up acquisition costs and cutting your net profit margins."
              },
              {
                title: "Poor website performance",
                desc: "Even when users find you, old sluggish sites fail to capture high-ticket landscaping conversions."
              },
              {
                title: "Limited visibility in local markets",
                desc: "Not ranking in neighboring service territories results in missed leads just a few miles away."
              },
              {
                title: "Competitors dominating local search",
                desc: "Established competitors hog the map space, reaping all incoming service calls and recurring contracts."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-900/40 border border-white/5 p-5 rounded-2xl flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-black text-red-400 tracking-wider">Problem {idx + 1}</span>
                  <h4 className="text-sm font-bold text-white uppercase">{item.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed font-sans">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-slate-900/60 border border-white/5 p-6 rounded-2xl max-w-4xl mx-auto text-center space-y-4">
            <p className="text-xs text-gray-400 leading-relaxed">
              Many landscaping businesses invest heavily in equipment, vehicles, and staff but overlook the importance of digital visibility. The result? Potential customers choose competitors simply because they appear first in search results.
            </p>
            <p className="text-xs text-gray-450 leading-relaxed">
              If your business isn't showing up when people search terms like: <strong>"Landscaping company near me"</strong>, <strong>"Lawn care services"</strong>, <strong>"Landscape design contractor"</strong>, <strong>"Hardscaping services"</strong>, <strong>"Commercial landscaping company"</strong>, or <strong>"Irrigation installation services"</strong>, you're losing valuable opportunities every day. If you suspect an outdated design is hurting your brand equity, see our designs in the official{' '}
              <Link to="/portfolio/web-development" className="text-emerald-400 font-bold underline hover:text-emerald-300">
                Web Development Portfolio
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Our SEO Services for Landscapers Solve the Visibility Problem */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4.5xl font-extrabold tracking-tight text-white uppercase italic">
                Our SEO Services for Landscapers Solve the Visibility Problem
              </h2>
              
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Search engine optimization is one of the most cost-effective marketing investments available to landscaping companies. Unlike paid advertising, SEO continues generating leads long after the initial work is completed.
              </p>
              
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Our landscaping SEO campaigns focus on helping your business across multiple strategic pillars. Read our core design methodologies in our{' '}
                <Link to="/services" className="text-emerald-400 font-bold underline hover:text-emerald-300">
                  Services Page
                </Link>.
              </p>

              <div className="space-y-4">
                {[
                  {
                    t: "Rank Higher in Local Search Results",
                    d: "We optimize your website and local presence so customers can find you when searching for landscaping services in your service area."
                  },
                  {
                    t: "Generate Qualified Leads",
                    d: "Instead of attracting random website visitors, we target homeowners, property managers, and businesses actively looking for landscaping solutions."
                  },
                  {
                    t: "Increase Phone Calls and Quote Requests",
                    d: "Higher rankings lead to more website traffic, which creates more opportunities for inquiries and bookings."
                  },
                  {
                    t: "Build Long-Term Brand Authority",
                    d: "When your company consistently appears at the top of search results, potential customers view your business as a trusted local authority."
                  },
                  {
                    t: "Reduce Dependence on Paid Advertising",
                    d: "Many landscapers spend thousands on PPC campaigns. SEO helps create a sustainable source of organic leads that lowers acquisition costs over time."
                  }
                ].map((sol, id) => (
                  <div key={id} className="flex gap-4 p-4 rounded-xl bg-slate-900/40 border border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0 font-bold text-xs">{id + 1}</div>
                    <div className="space-y-1">
                      <h4 className="text-xs font-black uppercase text-white tracking-wider">{sol.t}</h4>
                      <p className="text-xs text-gray-400 leading-relaxed font-sans">{sol.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent rounded-3xl blur-2xl"></div>
              <div className="relative glass-morphism p-8 rounded-[2rem] border border-white/10 space-y-6 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-white text-lg">Measurable Planting & Lawn Authority</h3>
                </div>

                <div className="space-y-4">
                  {[
                    { label: "GBP Map Enclosure Index", val: "94%" },
                    { label: "Contract Value Yield Ratio", val: "A+" },
                    { label: "Average Mobile Core Web Vitals Match", val: "98%" },
                    { label: "Target Keyword In-pack Density", val: "88%" }
                  ].map((stat, id) => (
                    <div key={id} className="space-y-1.5">
                      <div className="flex justify-between text-xs text-gray-400 font-medium font-sans">
                        <span>{stat.label}</span>
                        <span className="font-mono text-emerald-400 font-bold">{stat.val}</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
                          style={{ width: stat.val.includes('%') ? stat.val : '100%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 text-[10px] text-gray-500 leading-relaxed uppercase tracking-wider font-sans border-t border-white/5 pt-4">
                  <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>White-hat search metrics configured strictly around seasonal organic conversions.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Landscaping SEO Experience */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight uppercase italic">
              Real-World Landscaping SEO Experience
            </h2>
            <p className="text-gray-400 text-sm mt-3 font-sans">
              Successful landscaping SEO requires more than generic marketing tactics. We understand how landscaping customers search throughout different seasons and service cycles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-morphism border border-white/5 p-6 rounded-2xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-[10px] uppercase font-black tracking-widest text-teal-400 block">Example 1</span>
              <h4 className="text-sm font-bold text-white uppercase">Lawn Care Company</h4>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                A lawn care provider may target keywords such as: Lawn maintenance services, Weekly lawn mowing, Fertilization services, and Lawn treatment company. By creating optimized service pages and strengthening local SEO signals, the business can capture customers actively searching for recurring lawn care services.
              </p>
            </div>

            <div className="glass-morphism border border-white/5 p-6 rounded-2xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Sprout className="w-6 h-6" />
              </div>
              <span className="text-[10px] uppercase font-black tracking-widest text-emerald-400 block">Example 2</span>
              <h4 className="text-sm font-bold text-white uppercase">Landscape Design Contractor</h4>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Landscape design projects often involve larger budgets and longer decision-making processes. SEO strategies focus on: Portfolio optimization, Project galleries, Service-area pages, and Educational content. This helps establish credibility and attracts higher-value projects.
              </p>
            </div>

            <div className="glass-morphism border border-white/5 p-6 rounded-2xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400">
                <TrendingUp className="w-6 h-6" />
              </div>
              <span className="text-[10px] uppercase font-black tracking-widest text-orange-400 block">Example 3</span>
              <h4 className="text-sm font-bold text-white uppercase">Commercial Landscaping Company</h4>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Commercial clients search differently than residential customers. SEO campaigns can target: Commercial landscaping services, Property maintenance contracts, HOA landscaping, and Grounds maintenance companies. This creates opportunities for recurring contracts and long-term revenue growth.
              </p>
            </div>
          </div>

          <p className="text-xs text-center text-gray-400 mt-12 max-w-3xl mx-auto leading-relaxed">
            These practical applications demonstrate how industry-specific SEO creates measurable business growth. To check matching contractor layouts, see our specialized central{' '}
            <Link to="/industry" className="text-emerald-400 font-bold underline hover:text-emerald-300">
              Industry Hub Page
            </Link>.
          </p>
        </div>
      </section>

      {/* What's Included in Our SEO Services for Landscapers */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              What's Included in Our SEO Services for Landscapers
            </h2>
            <p className="text-gray-400 text-xs mt-2 uppercase tracking-widest text-emerald-450 font-bold">Comprehensive Marketing Deliverables</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 font-sans">
            {[
              {
                f: "Comprehensive SEO Audit",
                b: "We identify technical issues, ranking obstacles, and growth opportunities.",
                o: ["Uncovers hidden website problems", "Improves website performance", "Creates a clear SEO roadmap"]
              },
              {
                f: "Keyword Research",
                b: "We identify high-intent landscaping keywords that potential customers are actively searching for.",
                o: ["Attracts qualified visitors", "Increases conversion opportunities", "Improves ROI"]
              },
              {
                f: "Local SEO Optimization",
                b: "We optimize Google Business Profile, local citations, service area pages, local landing pages, Map Pack rankings.",
                o: ["More local leads", "Better visibility in Google Maps", "Increased trust with local customers"]
              },
              {
                f: "On-Page SEO",
                b: "We optimize every important page on your website to ensure search crawlers comprehend structure.",
                o: ["Higher rankings", "Better user experience", "Improved conversion rates"]
              },
              {
                f: "Content Marketing",
                b: "Quality content helps attract and educate. Examples include: Landscaping guides, Seasonal lawn care tips, Hardscape project ideas, Irrigation maintenance advice.",
                o: ["More organic traffic", "Increased authority", "Better keyword coverage"]
              },
              {
                f: "Link Building",
                b: "Backlinks remain one of Google's strongest ranking factors. We help earn high-quality links through industry-relevant strategies.",
                o: ["Increased domain authority", "Improved rankings", "Stronger competitive position"]
              },
              {
                f: "Conversion Rate Optimization",
                b: "Traffic alone isn't enough. We improve contact forms, calls-to-action, service pages, and overall UI navigation.",
                o: ["More leads from existing traffic", "Improved marketing ROI", "Higher booking rates"]
              }
            ].map((item, id) => (
              <div key={id} className="bg-slate-900/40 border border-white/5 p-6 rounded-2xl flex flex-col justify-between hover:border-emerald-500/15 transition-all">
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-black uppercase text-amber-400 tracking-wider">Service Feature:</span>
                    <h4 className="text-sm font-extrabold text-white uppercase mt-0.5">{item.f}</h4>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed font-sans">{item.b}</p>
                </div>
                <div className="border-t border-white/5 pt-4 mt-4 space-y-1.5Packed">
                  <span className="text-[10px] font-black uppercase text-emerald-400 tracking-wider">Strategic Benefits:</span>
                  <ul className="space-y-1">
                    {item.o.map((benef, idx) => (
                      <li key={idx} className="text-xs text-gray-400 font-medium font-sans flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span>{benef}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-slate-900/60 border border-white/5 p-6 rounded-2xl max-w-4xl mx-auto text-center">
            <p className="text-xs text-gray-400 leading-relaxed">
              Plan and match options with your budget by reviewing our specialized{' '}
              <Link to="/pricing/local-seo-strategy" className="text-emerald-400 font-bold underline hover:text-emerald-300">
                Premium Local SEO Packages page
              </Link>{' '}
              or find diverse agency tiers in our central{' '}
              <Link to="/pricing" className="text-emerald-400 font-bold underline">
                Agency SEO Plans
              </Link>{' '}
              sheet list.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Our SEO Services for Landscapers Instead of Generic SEO Agencies? */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/40">
        <div className="max-w-4xl mx-auto font-sans">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Why Choose Our SEO Services for Landscapers Instead of Generic SEO Agencies?
            </h2>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              Many SEO agencies use the same strategy for every business. Landscaping companies require a different approach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start font-sans">
            <div className="space-y-6">
              {[
                {
                  t: "We Focus on Local Search Intent",
                  d: "Customers typically search within specific service areas. We build strategies that target local buyers ready to hire."
                },
                {
                  t: "We Understand Seasonal Demand",
                  d: "Landscaping demand fluctuates throughout the year. SEO campaigns are planned around seasonal opportunities."
                },
                {
                  t: "We Prioritize Lead Generation",
                  d: "Rankings are important, but revenue matters more. Our campaigns focus on generating phone calls, quote requests, and booked projects."
                },
                {
                  t: "Transparent Reporting",
                  d: "You'll know exactly: What work is being completed, which keywords are improving, how much traffic is increasing, and how many leads are being generated. No confusing reports. No hidden metrics."
                }
              ].map((pill, id) => (
                <div key={id} className="space-y-1.5 border-l-2 border-emerald-500/30 pl-4 font-sans">
                  <h4 className="font-extrabold text-white text-sm uppercase">{pill.t}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{pill.d}</p>
                </div>
              ))}
            </div>

            <div className="glass-morphism border border-white/5 p-8 rounded-[2.5rem] space-y-6">
              <h3 className="text-xs font-black uppercase text-emerald-400 tracking-wider">Landscaping SEO Expertise You Can Trust</h3>
              <div className="space-y-4 text-xs font-sans">
                {[
                  {
                    t: "Industry-Specific Research",
                    d: "We analyze landscaping search trends, seasonal demand patterns, and local market competition."
                  },
                  {
                    t: "Data-Driven Decision Making",
                    d: "Every recommendation is supported by measurable performance data."
                  },
                  {
                    t: "Ethical SEO Practices",
                    d: "We follow Google's best practices and avoid risky shortcuts that could harm rankings."
                  },
                  {
                    t: "Continuous Optimization",
                    d: "Search engines evolve constantly. We continuously refine campaigns to maintain and improve results."
                  }
                ].map((item, id) => (
                  <div key={id} className="space-y-1">
                    <h4 className="font-extrabold text-white text-[11px] uppercase flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span> {item.t}
                    </h4>
                    <p className="text-gray-400 text-[11px] leading-relaxed pl-3">{item.d}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/5 space-y-2">
                <p className="text-[10px] text-gray-500">Compare with other high-performance sectors:</p>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-[11px]">
                  <Link to="/industry/seo-services-for-hvac-companies" className="text-emerald-400 hover:underline">
                    → HVAC Systems SEO Page
                  </Link>
                  <Link to="/industry/seo-services-for-moving-companies" className="text-emerald-400 hover:underline">
                    → Moving Operators SEO Page
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Credibility */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-2 leading-tight uppercase italic">
              Our Commitment to Transparency and Trust
            </h2>
            <p className="text-gray-400 text-xs font-semibold text-emerald-400 uppercase tracking-widest">
              We believe in setting realistic expectations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="glass-morphism border border-white/5 p-8 rounded-3xl space-y-4 font-sans">
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 block">What Clients Say</span>
              <div className="space-y-4 italic text-xs text-gray-300 leading-relaxed font-sans">
                <div className="flex text-amber-400 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p>
                  "After implementing the SEO strategy, our website traffic increased significantly, and we started receiving consistent quote requests every week."
                  <span className="block not-italic text-[10px] text-gray-550 uppercase font-black mt-1">— Landscaping Business Owner</span>
                </p>
                <p>
                  "Our Google rankings improved for several local keywords, helping us reduce dependence on paid ads."
                  <span className="block not-italic text-[10px] text-gray-550 uppercase font-black mt-1">— Lawn Care Company</span>
                </p>
                <p>
                  "The SEO campaign helped us attract larger residential projects and establish stronger online authority."
                  <span className="block not-italic text-[10px] text-gray-550 uppercase font-black mt-1">— Landscape Design Firm</span>
                </p>
              </div>
            </div>

            <div className="space-y-6 font-sans">
              <div className="space-y-2">
                <h3 className="text-xs font-black uppercase text-emerald-450 tracking-wider">What SEO Can Do</h3>
                <ul className="space-y-1.5 text-xs text-gray-300 pl-2">
                  <li>• Improve rankings</li>
                  <li>• Increase visibility</li>
                  <li>• Generate qualified traffic</li>
                  <li>• Produce long-term growth</li>
                </ul>
              </div>

              <div className="space-y-2 border-t border-white/5 pt-4">
                <h3 className="text-xs font-black uppercase text-red-400 tracking-wider">What SEO Cannot Guarantee</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  No agency can legitimately guarantee #1 rankings for every keyword, instant results, or overnight success. SEO is a long-term investment, and sustainable results typically require ongoing optimization. This honest approach helps build lasting client relationships based on trust and measurable outcomes.
                </p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <p className="text-xs text-gray-450 leading-relaxed">
                  We maintain extensive resources for checking organic search behaviors. Visit our specialized{' '}
                  <Link to="/resources" className="text-emerald-400 font-bold underline hover:text-emerald-350">
                    Resources Room
                  </Link>{' '}
                  for comprehensive tutorials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* External Resources Section (3 external links) */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/20">
        <div className="max-w-4xl mx-auto font-sans">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Recommended Landscaping & Search Guidelines</h2>
            <p className="text-xs text-gray-550 uppercase tracking-widest text-emerald-400 font-bold mt-1">Official Industry Reference Hubs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <a 
              href="https://www.google.com/business/" 
              target="_blank" 
              rel="noreferrer" 
              className="block p-5 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-white/10 text-xs text-emerald-400 font-bold hover:underline font-sans space-y-2 h-full flex flex-col justify-between"
            >
              <div>
                <span className="text-[9px] uppercase tracking-wider text-amber-400 font-black">Official Platform:</span>
                <p className="text-white font-black text-sm uppercase mt-1">Google Business Profile</p>
                <p className="text-slate-400 font-medium text-[11px] mt-2 normal-case">Establish, verify, and streamline visual map listings directly managed by Google.</p>
              </div>
              <div className="pt-4 flex items-center justify-between text-emerald-450 text-[10px]">
                <span>Log In To Google Business →</span>
                <Globe className="w-3.5 h-3.5 shrink-0" />
              </div>
            </a>
            
            <a 
              href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" 
              target="_blank" 
              rel="noreferrer" 
              className="block p-5 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-white/10 text-xs text-emerald-400 font-bold hover:underline font-sans space-y-2 h-full flex flex-col justify-between"
            >
              <div>
                <span className="text-[9px] uppercase tracking-wider text-emerald-400 font-black">Official Manual:</span>
                <p className="text-white font-black text-sm uppercase mt-1">Google SEO Starter Guide</p>
                <p className="text-slate-400 font-medium text-[11px] mt-2 normal-case">Understand structure, search queries, indexing pathways, and web vitals rules.</p>
              </div>
              <div className="pt-4 flex items-center justify-between text-emerald-450 text-[10px]">
                <span>View Official Manual →</span>
                <Globe className="w-3.5 h-3.5 shrink-0" />
              </div>
            </a>

            <a 
              href="https://ahrefs.com/blog/local-seo/" 
              target="_blank" 
              rel="noreferrer" 
              className="block p-5 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-white/10 text-xs text-emerald-400 font-bold hover:underline font-sans space-y-2 h-full flex flex-col justify-between"
            >
              <div>
                <span className="text-[9px] uppercase tracking-wider text-sky-400 font-black">Local Map guide:</span>
                <p className="text-white font-black text-sm uppercase mt-1">Ahrefs Local Map Guide</p>
                <p className="text-slate-400 font-medium text-[11px] mt-2 normal-case font-sans">Step-by-step local citational patterns written by renowned SEO search specialists.</p>
              </div>
              <div className="pt-4 flex items-center justify-between text-sky-400 text-[10px]">
                <span>Ahrefs Guide →</span>
                <Globe className="w-3.5 h-3.5 shrink-0" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/40">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white flex items-center justify-center gap-2.5">
              <HelpCircle className="text-emerald-400 w-8 h-8 shrink-0 animate-pulse" /> Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How long does SEO take for landscaping companies?",
                a: "Most landscaping businesses begin seeing measurable improvements within 3–6 months, although competitive markets may require additional time."
              },
              {
                q: "Is SEO better than Google Ads?",
                a: "SEO and Google Ads can complement each other. SEO typically delivers stronger long-term ROI because organic traffic continues without paying for every click."
              },
              {
                q: "Can you help local landscaping businesses?",
                a: "Yes. Local SEO is a core component of our landscaping SEO strategy and helps businesses improve visibility within their service areas."
              },
              {
                q: "Do I need a new website?",
                a: "Not necessarily. Many landscaping websites can be optimized without a complete redesign."
              },
              {
                q: "What keywords should landscapers target?",
                a: "This depends on services and location. Examples include lawn care services, landscaping company, hardscape contractor, landscape design services, and commercial landscaping."
              },
              {
                q: "How do you measure success?",
                a: "We track rankings, organic traffic, phone calls, quote requests, leads, and overall return on investment."
              },
              {
                q: "Do you offer reporting?",
                a: "Yes. Clients receive regular reporting and performance updates showing progress and key growth metrics."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className="glass-morphism border border-white/5 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-white/[0.02] transition-colors font-sans"
                >
                  <span className="text-sm font-bold text-white pr-4">{faq.q}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 shrink-0 ${
                      activeFaq === index ? 'rotate-180 text-emerald-400' : ''
                    }`} 
                  />
                </button>
                
                {activeFaq === index && (
                  <div className="p-6 pt-0 border-t border-white/5 bg-slate-950/20 text-xs text-slate-300 leading-relaxed font-sans space-y-2">
                    <p>{faq.a}</p>
                    {index === 2 && (
                      <p className="text-slate-400 italic">
                        Verify regional options on our central{' '}
                        <Link to="/pricing/local-seo-strategy" className="text-emerald-400 font-bold underline">
                          Local Strategy Packages pricing guide
                        </Link>{' '}
                        for specific cost parameters.
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 px-4 md:px-6 relative bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.1),transparent_60%)] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8 font-sans">
          <div className="w-16 h-16 bg-emerald-500/15 border border-emerald-500/20 text-emerald-450 rounded-2xl flex items-center justify-center mx-auto mb-4 text-emerald-400">
            <Sprout className="w-8 h-8" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight uppercase italic animate-pulse">
            Get More Landscaping Leads with Expert SEO Services for Landscapers
          </h2>

          <div className="space-y-4 max-w-3xl mx-auto text-sm md:text-base text-gray-350 leading-relaxed">
            <p className="font-bold text-white text-base">Your future customers are searching online right now.</p>
            <p>If your competitors appear first, they're winning business that could be yours.</p>
            <p>
              Our specialized SEO services for landscapers help landscaping companies increase visibility, attract qualified leads, and generate sustainable growth through proven search engine optimization strategies.
            </p>
          </div>

          <div className="pt-4">
            <button
              onClick={onBook}
              className="inline-flex items-center justify-center px-10 py-5 rounded-xl text-black bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-550 hover:to-emerald-400 font-extrabold tracking-wider uppercase text-sm shadow-xl shadow-emerald-500/20 transition-all duration-300 hover:scale-[1.03]"
            >
              Schedule Your Free SEO Consultation
            </button>
          </div>

          <div className="pt-4 text-center">
            <p className="text-xs text-gray-500 font-sans">
              Connect with our core team on our local{' '}
              <Link to="/contact" className="text-amber-400 underline font-extrabold hover:text-amber-300">
                Consultation & SEO Audit Form
              </Link>{' '}
              today, or navigate inside our master directory of templates under the{' '}
              <Link to="/industry" className="text-amber-400 underline font-extrabold hover:text-amber-350">
                Industry Hub
              </Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandscapingSEOPage;
