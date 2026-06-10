import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Truck, 
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

interface MovingSEOProps {
  onBook: (e?: React.MouseEvent) => void;
}

const MovingSEOPage: React.FC<MovingSEOProps> = ({ onBook }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden font-sans pt-12">
      <SEO 
        title="SEO Services for Moving Companies | Book More Moves"
        description="Rank higher, get found on Google Maps, and generate consistent moving job bookings. Specialized local search engine optimization for professional moving companies."
        keywords="seo services for moving companies, local moving company marketing, rank moving business Google Maps, book more moving jobs organic SEO"
      />

      {/* Hero Section */}
      <section className="relative pt-12 md:pt-16 lg:pt-20 pb-24 px-4 md:px-6 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none"></div>
        <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-2">
              <Truck className="w-4 h-4 text-blue-400" /> Logistics & Moving Company SEO
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              SEO Services for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-amber-200">Moving Companies</span> That Generate More Calls, Leads & Booked Moves
            </h1>
            
            <p className="text-lg sm:text-xl font-bold text-gray-200">
              Get More Local Moving Customers with Professional SEO Services for Moving Companies
            </p>
            
            <div className="space-y-4 text-gray-400 text-sm md:text-base leading-relaxed">
              <p>
                Your potential customers are searching online every day for moving services in their area. If your moving company isn't appearing on the first page of Google, you're losing leads to competitors who are.
              </p>
              <p>
                Our specialized SEO services for moving companies help local and long-distance movers increase online visibility, generate qualified leads, and book more moving jobs without relying solely on expensive paid advertising.
              </p>
              <p>
                Whether you operate a local moving business, interstate moving company, commercial relocation service, or full-service moving and storage company, we create customized SEO strategies designed to drive consistent growth.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-white/5 p-4 rounded-xl space-y-1">
              <p className="font-bold text-white text-sm uppercase tracking-wider text-amber-300">Get a Free SEO Strategy Session</p>
              <p className="text-xs text-gray-400">
                Discover how many additional moving leads your website could generate with a customized SEO plan.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onBook}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-black bg-gradient-to-r from-blue-400 to-sky-300 hover:from-blue-550 hover:to-blue-400 font-black tracking-wide shadow-lg shadow-blue-500/20 transition-all duration-300 group hover:scale-[1.02]"
              >
                Request Your Free SEO Audit Today
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
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-3xl blur-2xl"></div>
            <div className="relative glass-morphism border border-white/5 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl">
              <div className="h-2 w-20 bg-blue-400 rounded-full"></div>
              <h3 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                <MapPin className="text-orange-400 w-5 h-5" /> Local Territory Domination
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Unlock higher booking frequencies across all your operating boundaries by optimizing local maps, structured schemas, zip-code mappings, and regional hubs.
              </p>
              
              <div className="pt-4 space-y-3">
                <button 
                  onClick={onBook}
                  className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-400 to-sky-400 hover:from-blue-500 hover:to-sky-500 text-black font-black transition-all text-xs uppercase tracking-wider"
                >
                  Schedule Your Free Consultation
                </button>
                <div className="text-center text-[10px] text-gray-500">
                  Targeting multiple service territories? Read our central{' '}
                  <Link to="/locations" className="text-blue-400 underline font-bold hover:text-blue-300">
                    Locations Page
                  </Link>{' '}
                  for more geo-targeting guidelines.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Challenge: Why Most Moving Companies Struggle */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              The Challenge: Why Most Moving Companies Struggle to Generate Consistent Leads Online
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              The moving industry is highly competitive. Every day, potential customers search Google using terms such as:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16 max-w-4xl mx-auto">
            {[
              "Local movers near me",
              "Long-distance moving companies",
              "Office relocation services",
              "Affordable movers",
              "Moving and storage companies",
              "Interstate movers"
            ].map((term, i) => (
              <div key={i} className="text-xs text-gray-200 bg-white/[0.02] border border-white/5 p-4 rounded-xl italic font-mono flex items-center justify-center text-center">
                "{term}"
              </div>
            ))}
          </div>

          <p className="text-center text-gray-450 text-sm mb-12 max-w-2xl mx-auto">
            The problem is that most moving companies face several common challenges:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                title: "Limited Online Visibility",
                desc: "Many moving company websites are buried on page two, three, or beyond in Google search results where very few customers ever look."
              },
              {
                title: "Rising Advertising Costs",
                desc: "Pay-per-click advertising costs continue to increase, making lead generation more expensive and reducing profit margins."
              },
              {
                title: "Inconsistent Lead Flow",
                desc: "Many movers experience seasonal fluctuations and unpredictable lead volumes that make growth planning difficult."
              },
              {
                title: "Strong Local Competition",
                desc: "Competing against national franchises, lead-generation websites, and established local movers can feel overwhelming."
              },
              {
                title: "Poor Website Performance",
                desc: "Even when traffic reaches the website, outdated designs and poor user experiences often fail to convert visitors into inquiries."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-900/40 border border-white/5 p-6 rounded-2xl flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-black text-red-400 tracking-wider">Problem {idx + 1}</span>
                  <h4 className="text-sm font-bold text-white uppercase">{item.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-slate-900/60 border border-white/5 p-6 rounded-2xl max-w-4xl mx-auto text-center space-y-4">
            <p className="text-xs text-gray-400 leading-relaxed">
              Without a strong SEO strategy, moving companies often depend heavily on referrals, third-party lead platforms, or costly advertising campaigns. If you suspect your website performance is holding you back, check out our work in our specialized{' '}
              <Link to="/portfolio/web-development" className="text-blue-400 font-bold underline hover:text-blue-300">
                Web Development Portfolio
              </Link>{' '}
              to see how we design optimized and responsive sites that convert views into phone calls.
            </p>
          </div>
        </div>
      </section>

      {/* Our Solution: SEO Services Built Specifically for Moving Companies */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase italic">
                Our Solution: SEO Services Built Specifically for Moving Companies
              </h2>
              
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                We help moving companies attract more qualified customers by improving their visibility across Google Search, Google Maps, and local search results.
              </p>
              
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Our approach combines technical SEO, local optimization, content marketing, and conversion-focused strategies designed specifically for the moving industry. Explore our general frameworks on our central{' '}
                <Link to="/services" className="text-blue-400 font-bold underline hover:text-blue-300">
                  Services Page
                </Link>.
              </p>

              <div className="bg-blue-500/5 border border-blue-500/10 p-6 rounded-2xl space-y-4">
                <h4 className="font-extrabold text-blue-400 uppercase text-xs tracking-wider">What You Can Expect:</h4>
                <div className="grid grid-cols-2 gap-3 text-xs text-gray-300">
                  <div className="flex items-center gap-2">• More qualified moving leads</div>
                  <div className="flex items-center gap-2">• Higher rankings in local searches</div>
                  <div className="flex items-center gap-2">• Increased website traffic</div>
                  <div className="flex items-center gap-2">• More phone calls and quote requests</div>
                  <div className="flex items-center gap-2">• Better visibility on Google Maps</div>
                  <div className="flex items-center gap-2">• Stronger local brand authority</div>
                  <div className="flex items-center gap-2">• Long-term lead generation growth</div>
                </div>
              </div>

              <p className="text-xs text-gray-450 leading-relaxed font-sans">
                Unlike short-term advertising campaigns, SEO continues working for your business around the clock. When your website ranks well, potential customers find you exactly when they need moving services.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-3xl blur-2xl"></div>
              <div className="relative glass-morphism p-8 rounded-[2rem] border border-white/10 space-y-6 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-white text-lg">Measurable Organic Growth</h3>
                </div>

                <div className="space-y-4">
                  {[
                    { label: "Google Maps Package Inclusion", val: "93%" },
                    { label: "Average Mobile Conversion Speed", val: "< 1.1s" },
                    { label: "Phone Call Lead Conversion Match", val: "97%" },
                    { label: "Organic Acquisition Value Ratio", val: "A+" }
                  ].map((stat, id) => (
                    <div key={id} className="space-y-1.5">
                      <div className="flex justify-between text-xs text-gray-400 font-medium font-sans">
                        <span>{stat.label}</span>
                        <span className="font-mono text-blue-400 font-bold">{stat.val}</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-sky-400 rounded-full"
                          style={{ width: stat.val.includes('%') ? stat.val : '100%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 text-[10px] text-gray-500 leading-relaxed uppercase tracking-wider font-sans">
                  <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>White-hat compliant techniques strictly tailored for long term lead equity.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Experience in Moving Company SEO */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Real-World Experience in Moving Company SEO
            </h2>
            <p className="text-gray-400 text-sm mt-3">
              Through years of SEO experience across local service industries, we've identified patterns that consistently drive results for moving businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-morphism border border-white/5 p-6 rounded-2xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-[10px] uppercase font-black tracking-widest text-orange-400 block">Example 1</span>
              <h4 className="text-sm font-bold text-white uppercase">Local Residential Movers</h4>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                A local moving company often relies heavily on referrals. By optimizing service pages, improving local SEO signals, and enhancing Google Business Profile visibility, movers can significantly increase quote requests from local search traffic.
              </p>
            </div>

            <div className="glass-morphism border border-white/5 p-6 rounded-2xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                <Globe className="w-6 h-6" />
              </div>
              <span className="text-[10px] uppercase font-black tracking-widest text-blue-400 block">Example 2</span>
              <h4 className="text-sm font-bold text-white uppercase">Long-Distance Moving Companies</h4>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Long-distance movers benefit from targeting destination-specific keywords and creating location-focused content that attracts customers planning interstate moves.
              </p>
            </div>

            <div className="glass-morphism border border-white/5 p-6 rounded-2xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-450">
                <TrendingUp className="w-6 h-6" />
              </div>
              <span className="text-[10px] uppercase font-black tracking-widest text-sky-400 block">Example 3</span>
              <h4 className="text-sm font-bold text-white uppercase">Commercial Moving Services</h4>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Businesses searching for office relocation services often conduct extensive research before making contact. Strategic content and SEO help establish authority throughout the decision-making process.
              </p>
            </div>

            <div className="glass-morphism border border-white/5 p-6 rounded-2xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-450">
                <Shield className="w-6 h-6" />
              </div>
              <span className="text-[10px] uppercase font-black tracking-widest text-emerald-400 block">Example 4</span>
              <h4 className="text-sm font-bold text-white uppercase">Moving & Storage Providers</h4>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Companies offering storage solutions alongside moving services can target additional search opportunities that expand lead volume and customer value.
              </p>
            </div>
          </div>

          <p className="text-xs text-center text-gray-400 mt-12 max-w-3xl mx-auto leading-relaxed">
            These practical applications demonstrate how industry-specific SEO creates measurable business growth. Find customized, high-performing strategies for local service marketing in our official{' '}
            <Link to="/industry" className="text-blue-400 font-bold underline hover:text-blue-300">
              Industry Hub Page
            </Link>.
          </p>
        </div>
      </section>

      {/* Features & Benefits of Our SEO Services */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Features & Benefits of Our SEO Services for Moving Companies
            </h2>
            <p className="text-gray-400 text-xs mt-2 uppercase tracking-widest text-blue-400 font-bold">Unlocking Organic Lead Channels</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 font-sans">
            {[
              {
                f: "Comprehensive SEO Audit",
                b: "Detailed analysis of your website, rankings, competitors, and technical SEO performance.",
                o: "Identify opportunities that can immediately improve visibility and lead generation."
              },
              {
                f: "Local SEO Optimization",
                b: "Optimization of your Google Business Profile, local citations, NAP consistency, and location signals.",
                o: "Increase visibility in Google Maps and local search results where moving customers are actively searching."
              },
              {
                f: "Keyword Research for Moving Services",
                b: "Targeting high-intent search phrases used by potential customers.",
                o: "Attract visitors who are ready to request estimates and book moving services."
              },
              {
                f: "Service Page Optimization",
                b: "SEO-focused optimization of residential moving, commercial moving, packing, storage, and specialty moving pages.",
                o: "Improve rankings while increasing conversions."
              },
              {
                f: "Content Marketing",
                b: "Creation of informative moving guides, relocation resources, and location-based content.",
                o: "Build authority, trust, and long-term organic traffic."
              },
              {
                f: "Technical SEO",
                b: "Website speed optimization, crawlability improvements, schema markup, and mobile optimization.",
                o: "Enhance user experience and improve search engine rankings."
              },
              {
                f: "Conversion Rate Optimization",
                b: "Strategic improvements to forms, calls-to-action, and user journeys.",
                o: "Generate more inquiries from existing website traffic."
              }
            ].map((item, id) => (
              <div key={id} className="bg-slate-900/40 border border-white/5 p-6 rounded-2xl flex flex-col justify-between hover:border-blue-500/15 transition-all">
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-black uppercase text-amber-400 tracking-wider">Feature segment:</span>
                    <h4 className="text-sm font-extrabold text-white uppercase mt-0.5">{item.f}</h4>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed font-sans">{item.b}</p>
                </div>
                <div className="border-t border-white/5 pt-4 mt-4 space-y-1">
                  <span className="text-[10px] font-black uppercase text-blue-400 tracking-wider">Benefit:</span>
                  <p className="text-xs text-gray-400 leading-relaxed font-sans">{item.o}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-slate-900/60 border border-white/5 p-6 rounded-2xl max-w-4xl mx-auto text-center col-span-full">
            <p className="text-xs text-gray-400 leading-relaxed">
              To match your strategy to specific budgets, compare details on our unified{' '}
              <Link to="/pricing/local-seo-strategy" className="text-blue-400 font-bold underline hover:text-blue-300">
                Premium Local SEO Packages pricing page
              </Link>{' '}
              or find general campaign details inside our central{' '}
              <Link to="/pricing" className="text-blue-400 font-bold underline">
                Agency SEO Plans
              </Link>{' '}
              document list.
            </p>
          </div>
        </div>
      </section>

      {/* Why Industry-Specific SEO Matters for Moving Companies */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/40">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Why Industry-Specific SEO Matters for Moving Companies
            </h2>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              General SEO agencies often apply the same strategy to every business. The moving industry requires a specialized approach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start font-sans">
            <div className="space-y-4">
              <span className="text-xs font-black uppercase text-amber-400 tracking-wider block">Successful moving company SEO involves understanding:</span>
              <ul className="space-y-2 text-xs font-bold text-gray-300">
                <li>• Seasonal search trends</li>
                <li>• Service area targeting</li>
                <li>• Local ranking factors</li>
                <li>• Customer booking behavior</li>
                <li>• Competitive local markets</li>
                <li>• Moving-related search intent</li>
              </ul>
              <p className="text-xs text-gray-450 leading-relaxed font-sans">
                A targeted strategy helps moving companies compete effectively against larger competitors and lead-generation websites.
              </p>
              
              <div className="pt-4 border-t border-white/5 space-y-3">
                <p className="text-xs text-gray-400">
                  Compare similar contractor search optimizations in our expert guides:
                </p>
                <div className="flex flex-wrap gap-4 text-xs">
                  <Link to="/industry/seo-services-for-hvac-companies" className="text-blue-400 hover:underline font-bold">
                    → HVAC Contractors SEO Page
                  </Link>
                  <Link to="/industry/seo-services-for-roofers" className="text-blue-400 hover:underline font-bold">
                    → Roofers Service SEO Page
                  </Link>
                </div>
              </div>
            </div>

            <div className="glass-morphism border border-white/5 p-8 rounded-[2.5rem] space-y-6">
              <h3 className="text-sm font-black uppercase text-blue-400 tracking-wider">Why Businesses Choose Our SEO Services</h3>
              <div className="space-y-4 text-xs">
                {[
                  {
                    t: "Specialized Local Service SEO Knowledge",
                    d: "We understand how customers search for moving services and what influences their buying decisions."
                  },
                  {
                    t: "Data-Driven Strategy",
                    d: "Every recommendation is backed by research, analytics, and performance data."
                  },
                  {
                    t: "Transparent Reporting",
                    d: "Clients receive clear reporting on rankings, traffic growth, leads, and campaign progress."
                  },
                  {
                    t: "Long-Term Growth Focus",
                    d: "We prioritize sustainable growth rather than short-term ranking spikes."
                  },
                  {
                    t: "Conversion-Focused SEO",
                    d: "Traffic alone isn't enough. Our goal is generating real inquiries and booked moving jobs."
                  }
                ].map((item, id) => (
                  <div key={id} className="space-y-1 border-l-2 border-blue-500/20 pl-3">
                    <h4 className="font-extrabold text-white text-[11px] uppercase">{item.t}</h4>
                    <p className="text-gray-400 text-[11px] leading-relaxed">{item.d}</p>
                  </div>
                ))}
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
              Trust & Credibility
            </h2>
            <p className="text-gray-400 text-xs font-semibold text-blue-400 uppercase tracking-widest">
              What Clients Appreciate Most
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="glass-morphism border border-white/5 p-8 rounded-3xl space-y-4 font-sans">
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 block">Sample Client Feedback</span>
              <div className="space-y-4 italic text-xs text-gray-300 leading-relaxed">
                <div className="flex text-amber-400 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p>
                  "Our website started generating significantly more local inquiries after implementing the SEO strategy. The increase in qualified leads made a noticeable difference in our business."
                </p>
                <p>
                  "We finally started appearing in Google Maps searches for important moving-related keywords, leading to more calls and estimate requests."
                </p>
                <p>
                  "The reporting was clear, transparent, and focused on actual business results."
                </p>
              </div>
              <p className="text-[10px] text-gray-500 uppercase font-black">- Booked Moving Company Partners</p>
            </div>

            <div className="space-y-6">
              <h3 className="text-sm font-black uppercase text-blue-400 tracking-wider">Our Commitment</h3>
              <ul className="space-y-3 text-xs text-gray-300">
                <li className="flex items-center gap-2 text-white">✓ Ethical SEO practices</li>
                <li className="flex items-center gap-2 text-white">✓ Transparent communication</li>
                <li className="flex items-center gap-2 text-white">✓ Customized strategies</li>
                <li className="flex items-center gap-2 text-white">✓ Ongoing optimization</li>
                <li className="flex items-center gap-2 text-white">✓ Continuous performance improvement</li>
              </ul>

              <div className="pt-4 border-t border-white/5">
                <p className="text-xs text-gray-400 leading-relaxed font-sans">
                  We stand behind our white-hat workflows. For further independent learning resources or schema configurations, browse details on our central{' '}
                  <Link to="/resources" className="text-blue-400 font-bold underline hover:hover-sky-400">
                    Resources Room
                  </Link>{' '}
                  hub.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparisons Section */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/40">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 font-sans">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight uppercase italic">
              SEO Services for Moving Companies vs Other Marketing Channels
            </h2>
            <p className="text-xs text-gray-500 mt-2 uppercase tracking-widest font-black text-amber-400">Cost-Benefit Acquisition Efficiency Matrix</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-white/10 text-xs md:text-sm">
              <thead>
                <tr className="bg-slate-900 border-b border-white/10">
                  <th className="p-4 font-black uppercase tracking-wider text-white">Marketing Channel</th>
                  <th className="p-4 font-black uppercase tracking-wider text-white">Short-Term Results</th>
                  <th className="p-4 font-black uppercase tracking-wider text-white">Long-Term Value</th>
                  <th className="p-4 font-black uppercase tracking-wider text-white">Lead Quality</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-sans">
                <tr>
                  <td className="p-4 font-bold text-white">SEO</td>
                  <td className="p-4 text-gray-300">Medium</td>
                  <td className="p-4 text-emerald-400 font-bold">Excellent</td>
                  <td className="p-4 text-emerald-400 font-bold">High</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">PPC Advertising</td>
                  <td className="p-4 text-gray-300">Fast</td>
                  <td className="p-4 text-gray-300">Moderate</td>
                  <td className="p-4 text-gray-300">Medium to High</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">Social Media Ads</td>
                  <td className="p-4 text-gray-300">Fast</td>
                  <td className="p-4 text-gray-300">Moderate</td>
                  <td className="p-4 text-gray-300">Medium</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">Referral Marketing</td>
                  <td className="p-4 text-gray-300">Variable</td>
                  <td className="p-4 text-gray-300">Good</td>
                  <td className="p-4 text-emerald-400 font-bold">High</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white">Third-Party Lead Platforms</td>
                  <td className="p-4 text-gray-300">Fast</td>
                  <td className="p-4 text-red-400 font-bold">Low</td>
                  <td className="p-4 text-gray-300">Variable</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs text-center text-gray-400 mt-8 max-w-3xl mx-auto leading-relaxed">
            SEO remains one of the most cost-effective long-term customer acquisition strategies for moving companies because rankings continue generating traffic long after optimization work begins.
          </p>
        </div>
      </section>

      {/* External Authority Resources (3 external links) */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/20">
        <div className="max-w-4xl mx-auto font-sans">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Recommended Search Guidelines & Authority Centers</h2>
            <p className="text-xs text-gray-550">Access official search blueprints to verify index integrity and local search guidelines.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <a 
              href="https://www.google.com/business/" 
              target="_blank" 
              rel="noreferrer" 
              className="block p-5 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-white/10 text-xs text-blue-400 font-bold hover:underline font-sans space-y-2 h-full flex flex-col justify-between"
            >
              <div>
                <span className="text-[9px] uppercase tracking-wider text-amber-400 font-black">Official Platform:</span>
                <p className="text-white font-black text-sm uppercase mt-1">Google Business Profile</p>
                <p className="text-slate-400 font-medium text-[11px] mt-2 normal-case">Register, verify, and monitor your direct business pins on Google Maps.</p>
              </div>
              <div className="pt-4 flex items-center justify-between text-blue-450 text-[10px]">
                <span>Visit Google Business →</span>
                <Globe className="w-3.5 h-3.5 shrink-0" />
              </div>
            </a>
            
            <a 
              href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" 
              target="_blank" 
              rel="noreferrer" 
              className="block p-5 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-white/10 text-xs text-blue-400 font-bold hover:underline font-sans space-y-2 h-full flex flex-col justify-between"
            >
              <div>
                <span className="text-[9px] uppercase tracking-wider text-blue-400 font-black">Official Manual:</span>
                <p className="text-white font-black text-sm uppercase mt-1">Google SEO Starter Guide</p>
                <p className="text-slate-400 font-medium text-[11px] mt-2 normal-case">Master the indexing guidelines directly formulated by Google Search core team.</p>
              </div>
              <div className="pt-4 flex items-center justify-between text-blue-450 text-[10px]">
                <span>Visit Starter Guide →</span>
                <Globe className="w-3.5 h-3.5 shrink-0" />
              </div>
            </a>

            <a 
              href="https://ahrefs.com/blog/local-seo/" 
              target="_blank" 
              rel="noreferrer" 
              className="block p-5 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-white/10 text-xs text-blue-400 font-bold hover:underline font-sans space-y-2 h-full flex flex-col justify-between"
            >
              <div>
                <span className="text-[9px] uppercase tracking-wider text-sky-400 font-black">Local SEO Blueprint:</span>
                <p className="text-white font-black text-sm uppercase mt-1">Ahrefs Local Map Guide</p>
                <p className="text-slate-400 font-medium text-[11px] mt-2 normal-case">Comprehensive local citation and mapping patterns crafted by industry experts.</p>
              </div>
              <div className="pt-4 flex items-center justify-between text-sky-400 text-[10px]">
                <span>Visit Ahrefs Guide →</span>
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
              <HelpCircle className="text-blue-400 w-8 h-8 shrink-0 animate-pulse" /> Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How long does SEO take for moving companies?",
                a: "Most moving companies begin seeing measurable improvements within three to six months, with stronger growth occurring over time as authority increases."
              },
              {
                q: "Can SEO help local moving companies?",
                a: "Yes. Local SEO is one of the most effective ways for movers to attract customers searching within their service area. Make sure to claim and construct geographic boundaries correctly by analyzing local search patterns."
              },
              {
                q: "Do I need SEO if I'm already running Google Ads?",
                a: "Absolutely. SEO and paid advertising complement each other. SEO provides sustainable long-term traffic while reducing dependence on ad spend."
              },
              {
                q: "Will SEO help my Google Maps rankings?",
                a: "Yes. Local SEO strategies improve visibility in Google Maps and local search results. Make sure to maintain consistent address records across the web."
              },
              {
                q: "What keywords should moving companies target?",
                a: "This depends on services and locations. Common targets include local movers, long-distance movers, office relocation services, moving and storage services, and city-specific searches."
              },
              {
                q: "Can you optimize multiple service areas?",
                a: "Yes. We can create and optimize location-specific pages to help increase visibility across multiple markets."
              },
              {
                q: "Do you guarantee first-page rankings?",
                a: "No reputable SEO provider can guarantee rankings. Search engines control rankings. We focus on implementing proven strategies that improve visibility and business results."
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
                      activeFaq === index ? 'rotate-180 text-blue-400' : ''
                    }`} 
                  />
                </button>
                
                {activeFaq === index && (
                  <div className="p-6 pt-0 border-t border-white/5 bg-slate-950/20 text-xs text-slate-300 leading-relaxed font-sans space-y-2">
                    <p>{faq.a}</p>
                    {index === 1 && (
                      <p className="text-slate-400 italic">
                        Configure geographic routes systematically. Review our central{' '}
                        <Link to="/pricing/local-seo-strategy" className="text-blue-400 font-bold underline">
                          Local Strategy Packages pricing page
                        </Link>{' '}
                        today for a complete budget guide.
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.1),transparent_60%)] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8 font-sans">
          <div className="w-16 h-16 bg-blue-500/15 border border-blue-500/20 text-blue-450 rounded-2xl flex items-center justify-center mx-auto mb-4 text-blue-400">
            <Truck className="w-8 h-8" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight uppercase italic">
            Ready to Generate More Moving Leads?
          </h2>

          <div className="space-y-4 max-w-3xl mx-auto text-sm md:text-base text-gray-350 leading-relaxed">
            <p className="font-bold text-white text-base">Your next customer is already searching online for moving services.</p>
            <p>The question is whether they'll find your company or your competitors.</p>
            <p>
              Our specialized SEO services for moving companies are designed to help you increase visibility, generate qualified leads, and grow your business through sustainable organic search marketing.
            </p>
          </div>

          <div className="pt-4">
            <button
              onClick={onBook}
              className="inline-flex items-center justify-center px-10 py-5 rounded-xl text-black bg-gradient-to-r from-blue-400 to-sky-300 hover:from-blue-550 hover:to-blue-400 font-extrabold tracking-wider uppercase text-sm shadow-xl shadow-blue-500/20 transition-all duration-300 hover:scale-[1.03]"
            >
              Schedule Your Free SEO Consultation Today
              <ArrowRight className="ml-2 w-5 h-5 animate-pulse" />
            </button>
          </div>

          <div className="pt-4 text-center">
            <p className="text-xs text-gray-500">
              Let's locate key search opportunities in your market. Connect with our central{' '}
              <Link to="/contact" className="text-amber-400 underline font-extrabold">
                Consultation & SEO Audit Form
              </Link>{' '}
              today, or explore diverse layouts inside the{' '}
              <Link to="/industry" className="text-amber-400 underline font-extrabold">
                Industry Hub
              </Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MovingSEOPage;
