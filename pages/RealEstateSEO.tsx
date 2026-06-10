import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Building2, 
  MapPin, 
  Home, 
  Search, 
  HelpCircle, 
  ArrowRight, 
  Star, 
  ChevronDown, 
  Globe, 
  BarChart3, 
  CheckCircle2, 
  Users, 
  FileText,
  BadgeAlert,
  Sparkles,
  Link2
} from 'lucide-react';
import SEO from '../components/SEO';

interface RealEstateSEOProps {
  onBook: (e?: React.MouseEvent) => void;
}

const RealEstateSEOPage: React.FC<RealEstateSEOProps> = ({ onBook }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden font-sans pt-12">
      <SEO 
        title="SEO Services for Real Estate Industry | Generate Listings & Leads"
        description="Dominate local real estate search queries. Grow website traffic, secure more seller listings, and rank on top of Google Maps with white-hat SEO."
        keywords="seo services for real estate industry, real estate seo expert, realtor local search, property broker seo campaigns"
      />

      {/* Hero Section */}
      <section className="relative pt-12 md:pt-16 lg:pt-20 pb-24 px-4 md:px-6 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(249,115,22,0.1),transparent_70%)] pointer-events-none"></div>
        <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-orange-500/5 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold tracking-wider uppercase mb-2">
              <Building2 className="w-4 h-4 text-orange-400" /> Multi-Family & Commercial Property SEO
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              SEO Services for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-200">Real Estate Industry</span> That Generate More Listings, Leads & Sales
            </h1>
            
            <p className="text-lg sm:text-xl font-bold text-gray-200">
              Dominate Local Search with Expert SEO Services for Real Estate Industry
            </p>
            
            <p className="text-base text-orange-400 font-semibold tracking-wide">
              Get Found by Buyers, Sellers, Investors, and Property Developers Searching Online
            </p>

            <div className="space-y-4 text-gray-400 text-sm md:text-base leading-relaxed">
              <p>
                The real estate market is more competitive than ever. If your agency, brokerage, property management company, or real estate investment business isn't appearing on page one of Google, you're losing valuable leads to competitors every day.
              </p>
              <p>
                Our SEO services for real estate industry businesses are designed to increase your online visibility, attract qualified local traffic, and generate consistent inquiries from motivated buyers and sellers.
              </p>
              <p>
                Whether you're a local real estate agent, multi-location brokerage, commercial property firm, or property developer, we create customized SEO strategies that help your business rank higher, generate more leads, and close more deals.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onBook}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-black bg-gradient-to-r from-orange-400 to-amber-300 hover:from-orange-500 hover:to-amber-450 font-black tracking-wide shadow-lg shadow-orange-500/20 transition-all duration-300 group hover:scale-[1.02]"
              >
                Get Your Free SEO Strategy Consultation Today
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
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-3xl blur-2xl"></div>
            <div className="relative glass-morphism border border-white/5 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl">
              <div className="h-2 w-20 bg-orange-400 rounded-full"></div>
              <h3 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                <Home className="text-orange-400 w-5 h-5" /> Local Mapping Authority
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Brokerages failing to establish consistent location arrays lose key territorial rankings. Maximize listings now. 
              </p>
              
              <div className="pt-4 space-y-3">
                <button 
                  onClick={onBook}
                  className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-550 hover:to-orange-600 text-black font-black transition-all text-xs uppercase tracking-wider"
                >
                  Book Your Free Consultation
                </button>
                <div className="text-center text-[10px] text-gray-500">
                  Are you checking other local solutions? Review our{' '}
                  <Link to="/locations" className="text-blue-400 underline font-bold hover:text-blue-300">
                    Coverage Locations Page
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              The Challenge: Why Most Real Estate Businesses Struggle to Generate Organic Leads
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              The majority of real estate companies rely heavily on paid advertising, referral networks, third-party listing platforms, and social media marketing. While these channels can be effective, they often come with rising costs and inconsistent lead flow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="glass-morphism border border-white/5 p-8 rounded-[2rem] space-y-4">
              <span className="text-[10px] font-black uppercase text-orange-400 tracking-wider">Demand Gap</span>
              <p className="text-sm text-gray-300 font-medium">
                Meanwhile, potential clients are searching Google every day for:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs italic text-gray-400">
                <div>• Real estate agents near me</div>
                <div>• Homes for sale</div>
                <div>• Property investment opportunities</div>
                <div>• Commercial real estate services</div>
                <div>• Property management companies</div>
                <div>• Real estate consultants</div>
                <div className="sm:col-span-2">• Luxury real estate agents</div>
              </div>

              <p className="text-xs text-gray-500 mt-4 leading-relaxed">
                If your competitors appear before you in search results, they're capturing those opportunities first. Without strong visibility, you remain at the mercy of rising bidding costs on national booking channels. Learn why on-page standards matter inside our{' '}
                <Link to="/services" className="text-blue-450 text-blue-400 hover:underline font-bold">
                  comprehensive SEO services
                </Link>.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <BadgeAlert className="w-5 h-5 text-red-400 shrink-0" /> Common challenges we see include:
              </h3>
              
              <div className="space-y-5">
                {[
                  {
                    t: "Low Website Traffic",
                    d: "Many real estate websites receive minimal organic traffic due to poor SEO foundations."
                  },
                  {
                    t: "Lack of Local Visibility",
                    d: "Businesses struggle to rank in Google Maps and local pack queries."
                  },
                  {
                    t: "Poor Lead Quality",
                    d: "Marketing efforts attract generic, unqualified page visitors who never convert into listings."
                  },
                  {
                    t: "High Dependence on Paid Advertising",
                    d: "Businesses become trapped in expensive PPC ad campaigns just to maintain operational lead volume."
                  },
                  {
                    t: "Outdated Website Structure",
                    d: "Many real estate websites are not optimized for modern SEO requirements, mobile users, or search intent."
                  }
                ].map((challenge, idx) => (
                  <div key={idx} className="border-l-2 border-red-500/30 pl-4 space-y-1">
                    <h4 className="text-sm font-bold text-white uppercase">{challenge.t}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">{challenge.d}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link 
                  to="/resources/seo-audit-checklist" 
                  className="inline-flex items-center gap-1 text-xs text-orange-400 hover:text-orange-300 font-bold underline"
                >
                  Retrieve our interactive real-time SEO checklists <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Our Solution: SEO Services Built Specifically for the Real Estate Industry
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              We help real estate businesses increase visibility where buyers and sellers are actively searching. Our approach combines technical SEO, local SEO, content marketing, authority building, and conversion optimization into one comprehensive strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-black uppercase text-orange-400 bg-orange-600/10 px-3 py-1.5 rounded-full border border-orange-500/20">The Main Objective</span>
              <h3 className="text-2xl font-bold text-white leading-tight">
                Help your real estate business become the obvious choice in your target market.
              </h3>
              <p className="text-gray-405 text-sm text-gray-400 leading-relaxed">
                Instead of chasing leads, your website becomes a consistent, high-yield organic lead-generation asset. Check out similar models built for commercial assets in our{' '}
                <Link to="/industry/seo-services-for-hotels" className="text-blue-400 underline font-semibold hover:text-blue-300">
                  SEO for Hotels
                </Link> directory segment.
              </p>

              <div className="space-y-3 pt-2">
                <p className="text-xs font-black uppercase text-white tracking-widest">With a customized SEO campaign, we focus on:</p>
                {[
                  "Increasing qualified organic traffic",
                  "Improving local search rankings",
                  "Generating more property inquiries",
                  "Growing seller leads",
                  "Enhancing brand authority",
                  "Reducing reliance on paid advertising"
                ].map((item, id) => (
                  <div key={id} className="flex items-center gap-2 text-xs text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Real-World Experience Breakdown */}
            <div className="glass-morphism border border-white/5 p-8 rounded-[2.5rem] space-y-6">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-orange-400" /> Real-World Experience in Real Estate SEO
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                SEO for real estate is different from other industries. Property buyers, sellers, investors, and renters search differently depending on location, property type, and intent. Successful campaigns require a hyper-local approach:
              </p>

              <div className="space-y-4">
                <div className="space-y-1">
                  <h5 className="text-xs font-black uppercase text-orange-400 tracking-wider">Local Search Behavior</h5>
                  <p className="text-[11px] text-gray-400 leading-relaxed">
                    Users often search geographically: "Homes for sale in [city]", "Real estate agent in [suburb]", "Luxury homes near me", or "Commercial property for lease". We target searches around direct buyer intent. Match listing requirements inside our specialized{' '}
                    <Link to="/pricing/local-seo-strategy" className="text-blue-400 underline font-semibold">
                      Local SEO strategy outlines
                    </Link>.
                  </p>
                </div>

                <div className="space-y-1">
                  <h5 className="text-xs font-black uppercase text-orange-400 tracking-wider">Property-Specific Content</h5>
                  <p className="text-[11px] text-gray-400 leading-relaxed">
                    Advising through high-value guides (neighborhood profiles, market reports, investment insights, home buying resources, seller advice, relocation tutorials) triggers high domain trust scores on Google.
                  </p>
                </div>

                <div className="space-y-1">
                  <h5 className="text-xs font-black uppercase text-orange-400 tracking-wider">Conversion Optimization</h5>
                  <p className="text-[11px] text-gray-400 leading-relaxed">
                    We optimize contact structures, landing structures, property inquiries, call-to-action segments, and mobile elements to shift general surfers into direct consultation requests.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits Matrix */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Features & Benefits of Our SEO Services for Real Estate Industry
            </h2>
            <p className="text-gray-400 text-xs mt-2">Our structured delivery modules aligned to your growth targets.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                t: "Comprehensive SEO Audit",
                do: "We analyze your website's technical health, content, backlinks, user experience, and rankings.",
                b: "Identify hidden issues preventing your website from reaching its full potential."
              },
              {
                t: "Keyword Research & Intent",
                do: "We uncover high-value keywords used by buyers, sellers, landlords, investors, and commercial clients.",
                b: "Attract visitors who are actively looking for real estate services."
              },
              {
                t: "Local SEO Optimization",
                do: "We optimize your Google Business Profile, local citations, location pages, and local content.",
                b: "Increase visibility in local searches and Google Maps rankings."
              },
              {
                t: "On-Page SEO Strategy",
                do: "We optimize page titles, meta descriptions, headers, internal linking, content structures, and property schemas.",
                b: "Improve rankings and search engine understanding of your property listings."
              },
              {
                t: "Content Marketing",
                do: "Create authoritative content tailored to your target audience like area guides and housing market updates.",
                b: "Generate long-term traffic while building trust and property authority."
              },
              {
                t: "Link Building & Authority",
                do: "Acquire relevant, high-quality backlinks from reputable regional and industrial web domains.",
                b: "Improve domain rating metrics and durable competitive keyword positioning."
              },
              {
                t: "Technical SEO Foundation",
                do: "Enhance site speed parameters, core web vitals, mobile usability, crawlability, and schema implementations.",
                b: "Provide a strong technical foundation for sustainable organic growth."
              },
              {
                t: "Conversion-Centered Optimization",
                do: "Analyze traffic patterns, test CTA placements, and improve property contact form flows.",
                b: "Turn general website visitors into active consultations and property clients."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-900/30 border border-white/5 p-6 rounded-2xl space-y-4 flex flex-col justify-between hover:border-orange-500/10 transition-all">
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-white uppercase tracking-tight">{item.t}</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed font-mono">What We Do: {item.do}</p>
                </div>
                <div className="border-t border-white/5 pt-3 space-y-1">
                  <span className="text-[10px] font-black uppercase text-orange-400 block tracking-wider">Benefit:</span>
                  <p className="text-xs text-gray-400 leading-relaxed font-medium">{item.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Expertise Matters */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Why Expertise Matters in Real Estate SEO
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-2xl mx-auto">
              Google increasingly rewards websites that demonstrate E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness). A generic SEO strategy often fails because real estate search behavior is highly localized and competitive. Find out how web development syncs with SEO on our dedicated{' '}
              <Link to="/portfolio" className="text-blue-400 font-bold underline hover:text-blue-300">
                SEO Web Portfolio
              </Link>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <span className="text-xs font-black uppercase text-amber-400 tracking-wider">Our specialists thoroughly understand:</span>
              <ul className="space-y-3">
                {[
                  "Real estate buyer journeys",
                  "Seller lead generation tactics",
                  "Property search intent trends",
                  "Local market competitive dynamics",
                  "Geographic keyword targeting",
                  "Lead conversion optimization"
                ].map((point, id) => (
                  <li key={id} className="flex items-center gap-2 text-xs text-gray-300 font-bold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-450 text-emerald-400" />
                    {point}
                  </li>
                ))}
              </ul>
              <p className="text-[11px] text-gray-500 leading-relaxed pt-2">
                This allows us to create campaigns that align with both search engine requirements and real estate business objectives. Explore more about compliance-conscious marketing setups in our{' '}
                <Link to="/industry/seo-services-for-financial-advisors" className="text-blue-400 font-bold underline">
                  Financial Advisors SEO
                </Link> page.
              </p>
            </div>

            <div className="glass-morphism border border-white/5 p-8 rounded-[2.5rem] space-y-6">
              <h4 className="text-sm font-black uppercase text-orange-400 tracking-wider flex items-center gap-2">
                <Link2 className="w-4 h-4" /> Recommended External Authority:
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Expert industry analyses point out how property layouts, schema models, and localized maps provide the true foundation for property ranking profiles:
              </p>
              
              <div className="space-y-3 pt-2">
                <a href="https://ahrefs.com/blog/real-estate-seo/" target="_blank" rel="noreferrer" className="block p-3 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-blue-400 font-bold hover:underline">
                  Ahrefs Comprehensive Real Estate SEO Guide <Globe className="w-3.5 h-3.5 inline ml-1" />
                </a>
                <a href="https://www.nar.realtor/" target="_blank" rel="noreferrer" className="block p-3 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-blue-400 font-bold hover:underline">
                  National Association of Realtors (NAR) Official Site <Globe className="w-3.5 h-3.5 inline ml-1" />
                </a>
                <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noreferrer" className="block p-3 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-blue-400 font-bold hover:underline">
                  Google Search Central SEO Starter Guide <Globe className="w-3.5 h-3.5 inline ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">What Makes Our SEO Services Different?</h2>
            <p className="text-xs text-gray-500 mt-2">Structured parameters and premium outcomes.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                t: "Industry-Focused Strategies",
                d: "We understand how people search for real estate services and properties online."
              },
              {
                t: "Data-Driven Decisions",
                d: "Every recommendation is supported by keyword research, analytics, and competitive insights."
              },
              {
                t: "Long-Term Growth Approach",
                d: "We focus on sustainable rankings rather than short-term SEO tricks that risk search penalties."
              },
              {
                t: "Transparent Reporting",
                d: "You'll receive clear reporting showing traffic growth, keyword rankings, lead generation metrics, and conversion improvements."
              }
            ].map((diff, i) => (
              <div key={i} className="glass-morphism border border-white/5 p-6 rounded-2xl space-y-2">
                <h4 className="text-sm font-bold text-white uppercase">{diff.t}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{diff.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-orange-600/5 border border-orange-500/10 p-6 rounded-2xl text-center">
            <h4 className="text-xs font-black uppercase text-orange-400 tracking-widest mb-1">Conversion-Centered SEO:</h4>
            <p className="text-xs text-gray-400 leading-relaxed font-medium">
              We don't just increase traffic. We focus on attracting visitors likely to become clients. Analyze templates in our{' '}
              <Link to="/resources/actionable-seo-templates" className="text-blue-400 font-bold underline">
                Actionable SEO Templates
              </Link> tab.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Signals & Testimonial */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/40">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Trust Signals That Give You Confidence</h2>
            <p className="text-xs text-gray-500">Honesty, compliance, and white-hat guarantees.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="glass-morphism border border-white/5 p-8 rounded-3xl space-y-4">
              <span className="text-xs font-black text-amber-400 block uppercase tracking-wider">Client Testimonials</span>
              
              <div className="space-y-4">
                <div className="flex text-amber-400 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <h4 className="text-xs font-bold text-white italic">
                  "Our organic leads increased significantly within months of implementing their SEO strategy. We now generate consistent inquiries without relying solely on paid advertising."
                </h4>
                <p className="text-[10px] text-gray-500 uppercase font-bold">- Real Estate Agency Owner</p>
              </div>
            </div>

            <div className="space-y-5">
              {[
                {
                  t: "Transparent Process",
                  d: "No hidden tactics. No unrealistic promises. No black-hat SEO techniques. We provide honest recommendations and realistic growth expectations."
                },
                {
                  t: "White-Hat SEO Methodology",
                  d: "Our campaigns follow industry best practices and Google's guidelines. This helps protect your website from future algorithm updates."
                },
                {
                  t: "Dedicated Support",
                  d: "Our team is available to answer questions, explain strategies, and provide ongoing guidance throughout your campaign."
                }
              ].map((item, id) => (
                <div key={id} className="border-l-2 border-orange-500/30 pl-4 space-y-1">
                  <h4 className="text-xs font-black uppercase text-white tracking-widest">{item.t}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Real Estate SEO vs Paid Ads Table */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">SEO Services for Real Estate Industry vs Paid Advertising</h2>
            <p className="text-xs text-gray-500 mt-2">See how long-term positioning stacks up against pay-per-click models.</p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/5">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-900/60 text-white font-bold uppercase tracking-wider">
                  <th className="p-4 border-b border-white/5">Parameter</th>
                  <th className="p-4 border-b border-white/5 text-orange-400">SEO Strategy</th>
                  <th className="p-4 border-b border-white/5 text-gray-400">Paid Ad Campaigns</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-gray-300">
                {[
                  { p: "Primary Asset", s: "Long-term compounding asset value", a: "Temporary visibility (Stops when budget ends)" },
                  { p: "Brand Positioning", s: "Builds absolute market authority & trust", a: "Limited brand trust signals" },
                  { p: "Traffic Continuity", s: "Sustainable, long-term traffic growth", a: "Ongoing, continuous ad spend required" },
                  { p: "ROI Potential", s: "Exponentially higher long-term ROI", a: "Static or increasing cost per lead parameters" },
                  { p: "Site Value Influence", s: "Improves overall domain and website value", a: "Temporary and transactional value only" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.01]">
                    <td className="p-4 font-bold text-white">{row.p}</td>
                    <td className="p-4 text-emerald-400 font-medium">{row.s}</td>
                    <td className="p-4 font-medium">{row.a}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-xs text-gray-500 mt-6 leading-relaxed">
            The strongest marketing strategies often combine both models, but organic SEO provides absolute lasting value that compounds continually over time. Check pricing details in our{' '}
            <Link to="/pricing" className="text-blue-400 underline font-bold">
              Agency SEO Packages
            </Link>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/40">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white flex items-center justify-center gap-2.5">
              <HelpCircle className="text-orange-400 w-8 h-8 shrink-0" /> Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How long does SEO take for real estate businesses?",
                a: "Most businesses begin seeing measurable improvements within 3–6 months, although timelines depend on competition, location, and website condition."
              },
              {
                q: "Do you work with local real estate agents?",
                a: "Yes. We help individual agents, brokerages, property managers, developers, and commercial real estate firms."
              },
              {
                q: "Can SEO help generate seller leads?",
                a: "Absolutely. Strategic content and local SEO can attract homeowners looking to sell their properties."
              },
              {
                q: "Is local SEO important for real estate companies?",
                a: "Yes. Most real estate searches have strong local intent, making local SEO essential for visibility and lead generation."
              },
              {
                q: "Will I need new website content?",
                a: "In most cases, yes. Quality content helps improve rankings, authority, and user engagement."
              },
              {
                q: "Do you provide monthly reporting?",
                a: "Yes. We provide detailed reports covering rankings, traffic, leads, and campaign progress."
              },
              {
                q: "Are your SEO methods safe?",
                a: "Yes. We use ethical, white-hat SEO practices aligned with Google's guidelines, which are optimized with custom markup. Learn more using our custom tools inside our " +
                   "schema builder tab to safeguard code compliance parameters."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className="glass-morphism border border-white/5 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-sm font-bold text-white pr-4">{faq.q}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 shrink-0 ${
                      activeFaq === index ? 'rotate-180 text-orange-400' : ''
                    }`} 
                  />
                </button>
                
                {activeFaq === index && (
                  <div className="p-6 pt-0 border-t border-white/5 bg-slate-950/20 text-xs text-slate-300 leading-relaxed">
                    <p>
                      {faq.q.includes("safe") ? (
                        <>
                          Yes. We use ethical, white-hat SEO practices aligned with Google's guidelines, which are optimized with custom markup. Learn more using our custom tools inside our{' '}
                          <Link to="/resources/schema-generator" className="text-blue-400 font-bold underline">
                            Interactive Schema Generator
                          </Link>{' '}
                          to safeguard code compliance parameters.
                        </>
                      ) : faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 px-4 md:px-6 relative bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(249,115,22,0.1),transparent_60%)] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <div className="w-16 h-16 bg-orange-500/15 border border-orange-500/20 text-orange-450 rounded-2xl flex items-center justify-center mx-auto mb-4 text-orange-400">
            <Building2 className="w-8 h-8" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Ready to Grow Your Real Estate Business Online?
          </h2>

          <div className="space-y-4 max-w-3xl mx-auto text-sm md:text-base text-gray-300 leading-relaxed">
            <p className="font-bold text-white text-base">The real estate professionals who consistently appear at the top of Google capture more listings, more buyer inquiries, and more market share.</p>
            <p>
              Our specialized SEO services for real estate industry businesses help you attract qualified prospects, build authority, and create a reliable source of long-term growth.
            </p>
            <p>
              Whether you're an independent agent, growing brokerage, commercial property firm, or property developer, we can help you build a stronger online presence and generate more leads from organic search.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-white/5 p-6 rounded-2xl max-w-2xl mx-auto text-xs text-gray-500 space-y-2">
            <p className="leading-relaxed">
              We stand for transparent ethics and robust organic systems. We do not provide false guarantees on ranking positions. We focus purely on white-hat procedures. Discover hidden indexing gaps by checking our online repository inside our unified{' '}
              <Link to="/resources" className="text-orange-400 font-bold underline hover:text-orange-300">
                Growth Resources Hub
              </Link>.
            </p>
          </div>

          <div className="pt-4">
            <button
              onClick={onBook}
              className="inline-flex items-center justify-center px-10 py-5 rounded-xl text-black bg-gradient-to-r from-orange-400 to-amber-300 hover:from-orange-500 hover:to-amber-450 font-extrabold tracking-wider uppercase text-sm shadow-xl shadow-orange-500/20 transition-all duration-300 hover:scale-[1.03]"
            >
              Schedule Your Free SEO Consultation Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>

          <div className="pt-4 text-center">
            <p className="text-xs text-gray-500">
              Need immediate technical consulting support? Contact our main{' '}
              <Link to="/contact" className="text-amber-300 underline font-bold hover:text-amber-250">
                Contact and Booking Desk
              </Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealEstateSEOPage;
