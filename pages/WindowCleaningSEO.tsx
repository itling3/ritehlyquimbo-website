import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Sparkles, 
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

interface WindowCleaningSEOProps {
  onBook: (e?: React.MouseEvent) => void;
}

const WindowCleaningSEOPage: React.FC<WindowCleaningSEOProps> = ({ onBook }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden font-sans pt-12">
      <SEO 
        title="SEO Company for Window Cleaners | Get More Window Cleaning Jobs"
        description="Book more window washing and commercial cleaning clients with proven SEO for window cleaners. Get found on Google Maps & dominate local search."
        keywords="seo company for window cleaners, window cleaning marketing, local window washing SEO, rank window cleaning Google Maps"
      />

      {/* Hero Section */}
      <section className="relative pt-12 md:pt-16 lg:pt-20 pb-24 px-4 md:px-6 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(56,189,248,0.1),transparent_70%)] pointer-events-none"></div>
        <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-sky-500/5 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-450 text-xs font-semibold tracking-wider uppercase mb-2">
              <Sparkles className="w-4 h-4 text-sky-400" /> Specialty Services & Window Cleaning SEO
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              SEO Company for <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-amber-200">Window Cleaners</span> That Generates More Calls, Leads & Recurring Customers
            </h1>
            
            <p className="text-lg sm:text-xl font-bold text-gray-200">
              Get More Window Cleaning Jobs With a Proven SEO Company for Window Cleaners
            </p>
            
            <div className="space-y-4 text-gray-400 text-sm md:text-base leading-relaxed">
              <p>
                Your customers are already searching Google for services like "window cleaners near me," "commercial window cleaning," and "residential window washing." The question is: are they finding your business or your competitors?
              </p>
              <p>
                As a specialized SEO company for window cleaners, we help window cleaning businesses rank higher in local search results, generate qualified leads, and book more recurring jobs without relying solely on expensive advertising.
              </p>
              <p>
                Whether you operate a solo window cleaning business or manage multiple crews across several service areas, our SEO strategies are designed to increase your visibility, phone calls, quote requests, and revenue.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-white/5 p-4 rounded-xl space-y-1">
              <p className="font-bold text-white text-sm uppercase tracking-wider text-amber-300">Get Your Free SEO Growth Plan Today</p>
              <p className="text-xs text-gray-400">
                Book a free consultation and discover how many leads your window cleaning business could be missing every month.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onBook}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-black bg-gradient-to-r from-sky-400 to-cyan-300 hover:from-sky-550 hover:to-sky-400 font-black tracking-wide shadow-lg shadow-sky-500/20 transition-all duration-300 group hover:scale-[1.02]"
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
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 to-transparent rounded-3xl blur-2xl"></div>
            <div className="relative glass-morphism border border-white/5 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl">
              <div className="h-2 w-20 bg-sky-400 rounded-full"></div>
              <h3 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                <MapPin className="text-orange-400 w-5 h-5" /> Precision Map Domination
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Unlock top rankings in the Google Maps local 3-pack to consistently secure residential contracts and corporate commercial bookings.
              </p>
              
              <div className="pt-4 space-y-3">
                <button 
                  onClick={onBook}
                  className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-sky-400 to-cyan-400 hover:from-sky-555 hover:to-cyan-500 text-black font-black transition-all text-xs uppercase tracking-wider"
                >
                  Schedule Free Consultant Session
                </button>
                <div className="text-center text-[10px] text-gray-500">
                  Targeting multiple residential suburbs or corporate business parks? Check out our central{' '}
                  <Link to="/locations" className="text-sky-400 underline font-bold hover:text-sky-305">
                    Locations Page
                  </Link>{' '}
                  for comprehensive geographic mapping.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Most Window Cleaning Companies Struggle */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              Why Most Window Cleaning Companies Struggle to Get Consistent Leads
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Running a successful window cleaning company requires more than delivering excellent service. Many businesses face challenges such as:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6">
            {[
              {
                title: "Low Google Visibility",
                desc: "Your business gets pushed down below directories and massive multi-service conglomerates."
              },
              {
                title: "Inconsistent Lead Flow",
                desc: "Plunges in bookings during colder winter seasons interrupt stable cashflow margins."
              },
              {
                title: "Referral Dependence",
                desc: "While word-of-mouth is highly valuable, it is too unpredictable to support scaling plans."
              },
              {
                title: "Rising Ad Spend",
                desc: "The cost per click of paid advertising continues to rise, cutting deeply into net margins."
              },
              {
                title: "Competitor Map Domination",
                desc: "Fast-moving competitors capture the best local leads because they sit on the first page of Google."
              },
              {
                title: "Sluggish Site Conversions",
                desc: "Even when visitors arrive, older websites fail to prompt phone calls and quote requests."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-900/40 border border-white/5 p-5 rounded-2xl flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-black text-red-400 tracking-wider">Limitation {idx + 1}</span>
                  <h4 className="text-sm font-bold text-white uppercase">{item.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed font-sans">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-slate-900/60 border border-white/5 p-6 rounded-2xl max-w-4xl mx-auto text-center space-y-4">
            <p className="text-xs text-gray-400 leading-relaxed font-sans">
              You may provide exceptional service, have great reviews, and offer competitive pricing, but if potential customers can't find you online, your growth becomes limited. Today's consumers typically search online before choosing a service provider. If your business doesn't appear near the top of search results, you lose opportunities to competitors who do.
            </p>
            <p className="text-xs text-gray-400 font-sans">
              Many window cleaning firms struggle with technical site structures that block organic visibility. If you suspect your layout prevents you from booking high-ticket recurring jobs, review our visual standards inside the{' '}
              <Link to="/portfolio/web-development" className="text-sky-400 font-bold underline hover:text-sky-300">
                Web Development Portfolio
              </Link>{' '}
              showing optimized customer-facing experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Common Problems We See Grid */}
      <section className="py-16 px-4 md:px-6 relative border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">Common Problems We See</h3>
            <p className="text-xs text-sky-400 font-bold uppercase tracking-widest mt-1">Struggles holding back local operations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Your Website Isn't Ranking",
                desc: "Many window cleaning websites have technical issues, weak content, or poor local SEO signals that prevent strong rankings."
              },
              {
                title: "You're Paying Too Much for Ads",
                desc: "Paid advertising can generate leads, but costs continue to rise. Once you stop spending, leads stop coming."
              },
              {
                title: "Competitors Dominate Local Searches",
                desc: "Businesses appearing in Google's local pack often receive the majority of clicks and phone calls."
              },
              {
                title: "Traffic Doesn't Convert",
                desc: "Even when visitors arrive, poor website design and messaging can reduce conversions."
              }
            ].map((prob, id) => (
              <div key={id} className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 space-y-2">
                <span className="w-6 h-6 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center font-bold text-xs">!</span>
                <h4 className="text-sm font-bold text-white uppercase">{prob.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed font-sans">{prob.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our SEO Services Solve These Problems */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4.5xl font-extrabold tracking-tight text-white uppercase italic">
                Our SEO Services Solve These Problems
              </h2>
              
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                As an experienced SEO company for window cleaners, we focus on generating measurable business results—not vanity metrics. Our process combines local SEO, technical optimization, content marketing, conversion optimization, and authority building to help your business attract more customers. Learn about our primary strategies on our overall{' '}
                <Link to="/industry" className="text-sky-400 font-bold underline hover:text-sky-305">
                  Industry hub options
                </Link>.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "More Qualified Leads",
                    desc: "We target keywords used by people actively looking for window cleaning services, helping attract visitors with strong buying intent."
                  },
                  {
                    title: "Better Local Visibility",
                    desc: "We optimize your Google Business Profile, service pages, citations, and local SEO signals to improve visibility in local searches and map results."
                  },
                  {
                    title: "Increased Phone Calls and Quote Requests",
                    desc: "Traffic alone doesn't grow a business. We optimize your website to encourage visitors to call, request estimates, and book services."
                  },
                  {
                    title: "Long-Term Growth",
                    desc: "Unlike paid ads, SEO continues generating leads long after optimization work is completed."
                  }
                ].map((item, id) => (
                  <div key={id} className="flex gap-4 p-4 rounded-xl bg-slate-900/30 border border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400 shrink-0 font-bold text-xs">{id + 1}</div>
                    <div className="space-y-1">
                      <h4 className="text-xs font-black uppercase text-white tracking-wider">{item.title}</h4>
                      <p className="text-xs text-gray-400 leading-relaxed font-sans">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Keywords Spotlight */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 to-transparent rounded-3xl blur-2xl"></div>
              <div className="relative glass-morphism p-8 rounded-[2rem] border border-white/10 space-y-6 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-white text-lg">High-Intent Term Targets</h3>
                </div>

                <p className="text-xs text-gray-400 leading-relaxed font-sans">
                  We capture active demand by positioning your website for the exact terms window cleaning prospects type into search fields:
                </p>

                <div className="grid grid-cols-2 gap-2.5 font-mono text-[10px]">
                  {[
                    "Residential window cleaning",
                    "Commercial window cleaning",
                    "High-rise window cleaning",
                    "Exterior window washing",
                    "Window cleaning near me",
                    "Professional window cleaners"
                  ].map((kw, i) => (
                    <div key={i} className="bg-white/[0.02] border border-white/5 p-3 rounded-lg text-gray-300">
                      • {kw}
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 text-[10px] text-gray-550 leading-relaxed uppercase tracking-wider font-sans border-t border-white/5 pt-4">
                  <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>White-hat search metrics configured to convert local traffic into high-value clients.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World SEO Experience for Window Cleaning Businesses */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight uppercase italic">
              Real-World SEO Experience for Window Cleaning Businesses
            </h2>
            <p className="text-gray-400 text-sm mt-3 font-sans">
              Our strategies are built around how customers actually search for window cleaning services. Review how different segments leverage our methods below:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-morphism border border-white/5 p-6 rounded-2xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-450">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-[10px] uppercase font-black tracking-widest text-teal-400 block">Residential Focus</span>
              <h4 className="text-sm font-bold text-white uppercase">Residential Window Cleaning</h4>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                A local residential business may want to rank for: <strong>Window cleaning near me</strong>, <strong>House window cleaning</strong>, and <strong>Residential window washing</strong>. We create optimized service pages and local content targeting these searches to secure high-frequency bookings.
              </p>
            </div>

            <div className="glass-morphism border border-white/5 p-6 rounded-2xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400">
                <Globe className="w-6 h-6" />
              </div>
              <span className="text-[10px] uppercase font-black tracking-widest text-sky-400 block">Commercial Focus</span>
              <h4 className="text-sm font-bold text-white uppercase">Commercial Window Cleaning</h4>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Commercial clients often search for: <strong>Commercial window cleaning services</strong>, <strong>Office building window cleaning</strong>, and <strong>Storefront window cleaning</strong>. We build dedicated pages that attract business customers looking for ongoing contracts.
              </p>
            </div>

            <div className="glass-morphism border border-white/5 p-6 rounded-2xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-[10px] uppercase font-black tracking-widest text-orange-400 block">Enterprise Focus</span>
              <h4 className="text-sm font-bold text-white uppercase">Multi-Location Business</h4>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                Businesses serving multiple cities require separate location strategies. We create optimized city pages, local citations, and geographic targeting that improve visibility across multiple service areas.
              </p>
            </div>
          </div>

          <p className="text-xs text-center text-gray-400 mt-12 max-w-3xl mx-auto leading-relaxed">
            These specialized frameworks show how focused positioning accelerates real commercial conversions. Check our similar industry applications like the{' '}
            <Link to="/industry/seo-services-for-landscapers" className="text-sky-400 font-bold underline hover:text-sky-305">
              Landscaping SEO Page
            </Link>,{' '}
            <Link to="/industry/seo-services-for-hvac-companies" className="text-sky-400 font-bold underline hover:text-sky-305">
              HVAC SEO Services
            </Link>, and{' '}
            <Link to="/industry/seo-services-for-electricians" className="text-sky-400 font-bold underline hover:text-sky-305">
              SEO for Electricians
            </Link>{' '}
            for additional contractor service insights.
          </p>
        </div>
      </section>

      {/* Features & Benefits of Our SEO Services */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Features & Benefits of Our SEO Services
            </h2>
            <p className="text-gray-400 text-xs mt-2 uppercase tracking-widest text-sky-400 font-bold">Unlocking Predictable Lead Channels</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 font-sans">
            {[
              {
                f: "Comprehensive SEO Audit",
                b: "Detailed analysis of your website, competitors, rankings, and opportunities.",
                o: "Identify hidden issues preventing your site from ranking and converting."
              },
              {
                f: "Local SEO Optimization",
                b: "Google Business Profile optimization, local citations, NAP consistency, and map pack strategies.",
                o: "Increase visibility when customers search for window cleaning services in your area."
              },
              {
                f: "Keyword Research",
                b: "Identify high-converting search terms with local intent.",
                o: "Attract customers ready to request a quote."
              },
              {
                f: "SEO Content Creation",
                b: "Service pages, city pages, FAQs, and blog content designed to build search relevance.",
                o: "Improve rankings while establishing expertise and trust."
              },
              {
                f: "Technical SEO",
                b: "Site speed optimization, mobile responsiveness, crawlability improvements, and schema markup.",
                o: "Create a better user experience while helping search engines understand your website."
              },
              {
                f: "Link Building & Authority",
                b: "High-quality backlink acquisition and local authority building.",
                o: "Strengthen your website's credibility and rankings over time."
              },
              {
                f: "Conversion Rate Optimization",
                b: "Traffic alone isn't enough. We improve contact forms, calls-to-action, service pages, and user experience.",
                o: "Generate more leads from existing traffic, improve marketing ROI, and raise booking rates."
              }
            ].map((item, id) => (
              <div key={id} className="bg-slate-900/40 border border-white/5 p-6 rounded-2xl flex flex-col justify-between hover:border-sky-500/15 transition-all">
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-black uppercase text-amber-400 tracking-wider">Campaign Component:</span>
                    <h4 className="text-sm font-extrabold text-white uppercase mt-0.5">{item.f}</h4>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed font-sans">{item.b}</p>
                </div>
                <div className="border-t border-white/5 pt-4 mt-4 space-y-1">
                  <span className="text-[10px] font-black uppercase text-sky-400 tracking-wider">Business Benefit:</span>
                  <p className="text-xs text-gray-400 leading-relaxed font-sans">{item.o}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-slate-900/60 border border-white/5 p-6 rounded-2xl max-w-4xl mx-auto text-center">
            <p className="text-xs text-gray-400 leading-relaxed">
              To match your regional growth projections to predefined allocations, check out our unified{' '}
              <Link to="/pricing/local-seo-strategy" className="text-sky-400 font-bold underline hover:text-sky-305">
                Premium Local SEO Packages pricing
              </Link>{' '}
              structures or browse overall tiers inside our central{' '}
              <Link to="/pricing" className="text-sky-400 font-bold underline">
                Agency SEO Plans
              </Link>{' '}
              listing.
            </p>
          </div>
        </div>
      </section>

      {/* Why Industry Expertise Matters & Why Choose Us */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/40">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Why Industry Expertise Matters
            </h2>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto font-sans">
              Not all SEO agencies understand service businesses. Window cleaning customers search differently than customers looking for restaurants, retail stores, or software products.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start font-sans">
            <div className="space-y-4">
              <span className="text-xs font-black uppercase text-amber-400 tracking-wider block">An effective window cleaning SEO strategy requires:</span>
              <ul className="space-y-2 text-xs font-bold text-gray-300 pl-1">
                <li className="flex items-center gap-1.5">• Seasonal demand trends</li>
                <li className="flex items-center gap-1.5">• Local service area targeting</li>
                <li className="flex items-center gap-1.5">• Residential versus commercial search intent</li>
                <li className="flex items-center gap-1.5">• Google Business Profile optimization</li>
                <li className="flex items-center gap-1.5">• Lead generation funnels</li>
                <li className="flex items-center gap-1.5">• Customer acquisition costs</li>
              </ul>
              <p className="text-xs text-gray-400 leading-relaxed mt-4">
                Our approach is specifically designed around the needs of window cleaning businesses. We focus on generating qualified leads and revenue—not simply increasing website traffic.
              </p>

              <div className="pt-4 border-t border-white/5 space-y-2">
                <p className="text-xs text-gray-450 italic">Compare our local methodologies across similar trades:</p>
                <div className="flex flex-wrap gap-4 text-xs font-bold">
                  <Link to="/industry/seo-services-for-roofers" className="text-sky-400 hover:underline">
                    → Roofing SEO Solutions
                  </Link>
                  <Link to="/services/cms-seo/wordpress-seo-expert" className="text-sky-400 hover:underline">
                    → WordPress SEO Guide
                  </Link>
                </div>
              </div>
            </div>

            <div className="glass-morphism border border-white/5 p-8 rounded-[2.5rem] space-y-6">
              <h3 className="text-sm font-black uppercase text-sky-400 tracking-wider">What Makes Our SEO Company Different?</h3>
              <div className="space-y-4 text-xs font-sans">
                {[
                  {
                    t: "We Focus on Revenue, Not Rankings Alone",
                    d: "Many agencies celebrate ranking improvements. We focus on: Phone calls, Contact form submissions, Estimate requests, Booked appointments, Customer acquisition. Because rankings only matter when they generate business growth."
                  },
                  {
                    t: "Transparent Reporting",
                    d: "You'll always know exactly: What work is being completed, which keywords are improving, how much traffic is increasing, and how many leads are being generated. No confusing reports or hidden metrics."
                  },
                  {
                    t: "Customized Strategies",
                    d: "Every window cleaning business is different. A startup serving one city requires a different SEO approach than an established company operating across multiple locations."
                  }
                ].map((item, id) => (
                  <div key={id} className="space-y-1 pl-3 border-l-2 border-sky-500/20">
                    <h4 className="font-extrabold text-white text-[11px] uppercase">{item.t}</h4>
                    <p className="text-gray-400 text-[11px] leading-relaxed">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Service-Based Businesses */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-2 leading-tight uppercase italic text-center">
              Trusted by Service-Based Businesses
            </h2>
            <p className="text-gray-400 text-xs font-semibold text-sky-400 uppercase tracking-widest text-center">
              What Clients Typically Appreciate
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="glass-morphism border border-white/5 p-8 rounded-3xl space-y-4 font-sans">
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 block">Verified Client Feedback</span>
              <div className="space-y-4 italic text-xs text-gray-300 leading-relaxed font-sans">
                <div className="flex text-amber-400 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p>
                  "We started receiving inquiries from customers who were ready to book instead of just price shopping."
                  <span className="block not-italic font-black text-gray-550 text-[10px] uppercase mt-1">— Improved Lead Quality</span>
                </p>
                <p>
                  "Our business began appearing in Google Maps for important local searches."
                  <span className="block not-italic font-black text-gray-550 text-[10px] uppercase mt-1">— Better Local Visibility</span>
                </p>
                <p>
                  "We became less dependent on referrals and seasonal advertising campaigns."
                  <span className="block not-italic font-black text-gray-550 text-[10px] uppercase mt-1">— Consistent Growth</span>
                </p>
              </div>
            </div>

            <div className="space-y-6 font-sans">
              <h3 className="text-sm font-black uppercase text-sky-400 tracking-wider">Our Commitment to Transparency</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                SEO is a long-term marketing investment. While many businesses see improvements within several months, no ethical SEO company can guarantee specific rankings because search engines constantly evolve.
              </p>
              <p className="text-xs text-gray-300 leading-relaxed">
                What we can guarantee is:
              </p>
              <ul className="space-y-1 text-xs text-gray-300 pl-2">
                <li>✓ Honest communication</li>
                <li>✓ Proven SEO best practices</li>
                <li>✓ Transparent reporting</li>
                <li>✓ Continuous optimization</li>
                <li>✓ Strategies aligned with Google's guidelines</li>
              </ul>
              <p className="text-xs text-gray-450 leading-relaxed">
                This approach creates sustainable growth rather than short-term gains that may disappear after algorithm updates. Read extra resources in our specialized{' '}
                <Link to="/resources" className="text-sky-400 font-bold underline hover:text-sky-305">
                  Resources Room
                </Link>{' '}
                for standard checklists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparisons Section */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/40">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 font-sans">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight uppercase italic text-center">
              SEO Company for Window Cleaners vs Other Marketing Options
            </h2>
            <p className="text-xs text-gray-550 mt-2 uppercase tracking-widest font-black text-amber-400 text-center">Operational Channel Comparison</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* SEO vs Paid Advertising */}
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 space-y-4 font-sans">
              <h3 className="text-sm font-black uppercase text-sky-400 tracking-wider">SEO vs Paid Advertising</h3>
              
              <div className="grid grid-cols-2 gap-4 text-xs font-sans">
                <div className="space-y-1">
                  <p className="font-extrabold text-white">SEO</p>
                  <p className="text-gray-400 leading-relaxed">• Long-term asset</p>
                  <p className="text-gray-400 leading-relaxed">• Ongoing lead generation</p>
                  <p className="text-gray-405 leading-relaxed">• Higher trust from searchers</p>
                  <p className="text-gray-405 leading-relaxed">• Better long-term ROI</p>
                </div>

                <div className="space-y-1">
                  <p className="font-extrabold text-white">Paid Ads</p>
                  <p className="text-gray-400 leading-relaxed">• Immediate visibility</p>
                  <p className="text-red-400 leading-relaxed">• Higher ongoing costs</p>
                  <p className="text-red-400 leading-relaxed">• Leads stop when spending stops</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed font-sans pt-2 border-t border-white/5">
                The strongest growth strategy often combines both, with SEO creating a sustainable foundation.
              </p>
            </div>

            {/* SEO vs Lead Gen Platforms */}
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 space-y-4 font-sans">
              <h3 className="text-sm font-black uppercase text-orange-400 tracking-wider">SEO vs Lead Generation Platforms</h3>
              <p className="text-xs text-gray-300 leading-relaxed font-sans">
                Lead generation websites can provide opportunities but often:
              </p>
              <ul className="space-y-1 text-xs text-gray-400 leading-relaxed font-sans pl-1">
                <li>• Sell leads to multiple competitors</li>
                <li>• Increase acquisition costs</li>
                <li>• Limit brand control</li>
              </ul>
              <p className="text-xs text-gray-300 leading-relaxed font-sans">
                SEO builds your own online presence and helps customers contact you directly, bypass middlemen, and build direct equity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Resources (3 external links) */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/20">
        <div className="max-w-4xl mx-auto font-sans">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Recommended Search Guides & Verification Centers</h2>
            <p className="text-xs text-gray-550">Verify index health with official guidelines.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <a 
              href="https://www.google.com/business/" 
              target="_blank" 
              rel="noreferrer" 
              className="block p-5 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-white/10 text-xs text-sky-400 font-bold hover:underline font-sans space-y-2 h-full flex flex-col justify-between"
            >
              <div>
                <span className="text-[9px] uppercase tracking-wider text-amber-400 font-black">Official Service:</span>
                <p className="text-white font-black text-sm uppercase mt-1">Google Business Profile</p>
                <p className="text-slate-400 font-medium text-[11px] mt-2 normal-case">Establish, verify, and monitor your direct business pins on Google Maps.</p>
              </div>
              <div className="pt-4 flex items-center justify-between text-sky-450 text-[10px]">
                <span>Log In To Google Business →</span>
                <Globe className="w-3.5 h-3.5 shrink-0" />
              </div>
            </a>
            
            <a 
              href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" 
              target="_blank" 
              rel="noreferrer" 
              className="block p-5 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-white/10 text-xs text-sky-450 font-bold hover:underline font-sans space-y-2 h-full flex flex-col justify-between"
            >
              <div>
                <span className="text-[9px] uppercase tracking-wider text-sky-400 font-black">Official Playbook:</span>
                <p className="text-white font-black text-sm uppercase mt-1">Google SEO Starter Guide</p>
                <p className="text-slate-400 font-medium text-[11px] mt-2 normal-case font-sans">Review indexing fundamentals written by core Google search engineering teams.</p>
              </div>
              <div className="pt-4 flex items-center justify-between text-sky-400 text-[10px]">
                <span>View Google Starter Guide →</span>
                <Globe className="w-3.5 h-3.5 shrink-0" />
              </div>
            </a>

            <a 
              href="https://ahrefs.com/blog/local-seo/" 
              target="_blank" 
              rel="noreferrer" 
              className="block p-5 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-white/10 text-xs text-sky-400 font-bold hover:underline font-sans space-y-2 h-full flex flex-col justify-between"
            >
              <div>
                <span className="text-[9px] uppercase tracking-wider text-teal-400 font-black">Map Optimizations:</span>
                <p className="text-white font-black text-sm uppercase mt-1">Ahrefs Local Map Guide</p>
                <p className="text-slate-400 font-medium text-[11px] mt-2 normal-case font-sans">Step-by-step local citational patterns created by industry search experts.</p>
              </div>
              <div className="pt-4 flex items-center justify-between text-sky-405 text-[10px]">
                <span>Visit Ahrefs local guide →</span>
                <Globe className="w-3.5 h-3.5 shrink-0" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/40">
        <div className="max-w-4xl mx-auto font-sans">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white flex items-center justify-center gap-2.5">
              <HelpCircle className="text-sky-400 w-8 h-8 shrink-0 animate-pulse" /> Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How long does SEO take for a window cleaning company?",
                a: "Most businesses begin seeing measurable improvements within 3–6 months, depending on competition, website condition, and market size."
              },
              {
                q: "Is local SEO important for window cleaners?",
                a: "Yes. Most customers search for nearby service providers, making local SEO one of the most important growth channels for window cleaning companies."
              },
              {
                q: "Can SEO help both residential and commercial window cleaning businesses?",
                a: "Absolutely. SEO strategies can target residential customers, commercial clients, or both depending on your business goals."
              },
              {
                q: "Do I need a new website?",
                a: "Not always. Many websites can be optimized through optimization, content enhancements, and technical fixes."
              },
              {
                q: "What keywords should window cleaners target?",
                a: "Common targets include: Window cleaning near me, Residential window cleaning, Commercial window cleaning, Window washing services, Professional window cleaners. Keyword selection depends on your market and services."
              },
              {
                q: "Can SEO reduce my advertising costs?",
                a: "Many businesses use SEO to reduce dependence on paid advertising while maintaining a steady stream of qualified leads."
              },
              {
                q: "How do you measure SEO success?",
                a: "We track rankings, organic traffic, phone calls, form submissions, leads, and customer acquisition metrics."
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
                      activeFaq === index ? 'rotate-180 text-sky-400' : ''
                    }`} 
                  />
                </button>
                
                {activeFaq === index && (
                  <div className="p-6 pt-0 border-t border-white/5 bg-slate-950/20 text-xs text-slate-300 leading-relaxed font-sans space-y-2">
                    <p>{faq.a}</p>
                    {index === 1 && (
                      <p className="text-slate-400 italic">
                        Align your business structure to standard options. We layout structured configurations inside our central{' '}
                        <Link to="/pricing/local-seo-strategy" className="text-sky-400 font-bold underline">
                          Local Strategy Packages pricing guide
                        </Link>{' '}
                        for budget optimizations.
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(56,189,248,0.1),transparent_60%)] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8 font-sans">
          <div className="w-16 h-16 bg-sky-500/15 border border-sky-500/20 text-sky-455 rounded-2xl flex items-center justify-center mx-auto mb-4 text-sky-400 animate-bounce">
            <Sparkles className="w-8 h-8" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight uppercase italic text-center">
            Ready to Grow Your Window Cleaning Business?
          </h2>

          <div className="space-y-4 max-w-3xl mx-auto text-sm md:text-base text-gray-350 leading-relaxed font-sans">
            <p className="font-bold text-white text-base">Your next customer is already searching online for window cleaning services.</p>
            <p>The question is whether they find your company—or your competitors.</p>
            <p>
              Partner with an experienced SEO company for window cleaners and build a predictable system for generating more calls, more quotes, and more recurring customers.
            </p>
          </div>

          <div className="pt-4">
            <button
              onClick={onBook}
              className="inline-flex items-center justify-center px-10 py-5 rounded-xl text-black bg-gradient-to-r from-sky-400 to-cyan-300 hover:from-sky-550 hover:to-sky-400 font-extrabold tracking-wider uppercase text-sm shadow-xl shadow-sky-500/20 transition-all duration-300 hover:scale-[1.03]"
            >
              Schedule Your Free SEO Consultation
            </button>
          </div>

          <div className="pt-4 text-center">
            <p className="text-xs text-gray-500">
              Let's map out a customized plan. Submit our central{' '}
              <Link to="/contact" className="text-amber-400 underline font-extrabold hover:text-amber-305">
                Consultation & SEO Audit Form
              </Link>{' '}
              today, or find diverse layouts inside the{' '}
              <Link to="/industry" className="text-amber-400 underline font-extrabold hover:text-amber-305">
                Industry Hub
              </Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WindowCleaningSEOPage;
