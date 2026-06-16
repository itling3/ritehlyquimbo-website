import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Wind, 
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
  Flame,
  Snowflake,
  ShieldAlert,
  AlertCircle,
  TrendingUp,
  Award
} from 'lucide-react';
import SEO from '../components/SEO';

interface HVACSEOProps {
  onBook: (e?: React.MouseEvent) => void;
}

const HVACSEOPage: React.FC<HVACSEOProps> = ({ onBook }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden font-sans pt-12">
      <SEO 
        title="SEO Services for HVAC Companies | Generate Calls & Leads"
        description="Rank higher, get found in local searches, and book more heating & cooling service appointments. Expert white-hat local SEO services for HVAC contractors."
        keywords="seo services for hvac companies, hvac local seo strategy, rank heating and cooling specialist, local map pack ac installers"
      />

      {/* Hero Section */}
      <section className="relative pt-12 md:pt-16 lg:pt-20 pb-24 px-4 md:px-6 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(14,165,233,0.1),transparent_70%)] pointer-events-none"></div>
        <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-sky-500/5 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-450 text-xs font-semibold tracking-wider uppercase mb-2">
              <Wind className="w-4 h-4 text-sky-400 rotate-180 animate-pulse" /> Local Contractor & Mechanical SEO
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              SEO Services for <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-amber-250">HVAC Companies</span> That Generate More Calls, Leads, and Booked Jobs
            </h1>
            
            <p className="text-lg sm:text-xl font-bold text-gray-200">
              Grow Your HVAC Business with SEO Services for HVAC Companies
            </p>
            
            <p className="text-sm text-gray-300">
              If you're looking for reliable SEO services for HVAC companies, you're in the right place.
            </p>

            <div className="space-y-4 text-gray-450 text-sm md:text-base leading-relaxed text-gray-400 font-sans">
              <p>
                We help HVAC contractors, heating and cooling specialists, air conditioning installers, and commercial HVAC businesses increase their visibility in Google search results, attract qualified local leads, and generate more service calls without relying solely on paid advertising.
              </p>
              <p>
                Whether you operate in a single city or manage multiple service areas, our HVAC SEO strategies are designed to help your business rank higher, get found by homeowners and businesses actively searching for HVAC services, and convert website visitors into paying customers.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-white/5 p-4 rounded-xl space-y-1">
              <p className="font-bold text-white text-sm uppercase tracking-wider text-amber-300">Get More HVAC Leads from Google</p>
              <p className="text-xs text-gray-400">
                Book a Free SEO Consultation Today and Discover How Many Potential Customers Are Searching for Your Services Right Now.
              </p>
            </div>

            <div className="pt-4">
              <button 
                onClick={onBook}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-black bg-gradient-to-r from-sky-400 to-sky-300 hover:from-sky-550 hover:to-sky-400 font-black tracking-wide shadow-lg shadow-sky-500/20 transition-all duration-300 group hover:scale-[1.02]"
              >
                Book Your Free HVAC Strategy Session Today
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
                <Flame className="text-orange-400 w-5 h-5" /> / <Snowflake className="text-sky-400 w-5 h-5" /> Local Map Dominance
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Ad AC specialist domains failing to claim geographic territory arrays will immediately drop off from high-conversion map clusters. Protect your calls.
              </p>
              
              <div className="pt-4 space-y-3">
                <button 
                  onClick={onBook}
                  className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-500 hover:to-sky-600 text-black font-black transition-all text-xs uppercase tracking-wider"
                >
                  Schedule Your Free Consultation
                </button>
                <div className="text-center text-[10px] text-gray-500">
                  Targeting another state or region? Review our unified{' '}
                  <Link to="/locations" className="text-blue-400 underline font-bold hover:text-blue-300">
                    Locations Page
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Most Contractors Struggle */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/40 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              The Problem: Why Most HVAC Companies Struggle to Generate Consistent Leads Online
            </h2>
            <p className="text-gray-450 text-sm md:text-base leading-relaxed text-gray-450">
              The HVAC industry is highly competitive. When homeowners need emergency AC repair, furnace replacement, duct cleaning, or heating maintenance, they typically turn to Google first. The challenge is simple: if your company isn't showing up on the first page of search results, potential customers are calling your competitors instead.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="glass-morphism border border-white/5 p-8 rounded-[2rem] space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0" /> Many HVAC businesses face common marketing problems:
              </h3>
              
              <div className="space-y-4">
                {[
                  "Low visibility in Google search results",
                  "Inconsistent lead generation",
                  "Dependence on expensive PPC advertising",
                  "Poor local search rankings",
                  "Outdated websites that don't convert visitors",
                  "Limited presence in Google Maps",
                  "Competitors outranking them for valuable service keywords"
                ].map((challenge, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                    <p className="text-xs text-gray-300 font-medium">{challenge}</p>
                  </div>
                ))}
              </div>

              <div className="bg-red-500/5 p-4 rounded-xl border border-red-500/10">
                <p className="text-xs leading-relaxed text-gray-450">
                  Even excellent HVAC companies can struggle to grow when potential customers cannot find them online. Without a strong SEO strategy, you're missing opportunities every day.
                </p>
              </div>
            </div>

            <div className="space-y-6 lg:pl-6">
              <h3 className="text-xl font-bold text-white uppercase tracking-wider text-amber-400">The Revenue Threat</h3>
              <p className="text-sm text-gray-450 leading-relaxed font-sans">
                Failing to implement correct web standards leads to severe operational loss. If you are struggling with outdated code, review our high-performance{' '}
                <Link to="/portfolio/web-development" className="text-blue-400 hover:underline font-bold">
                  Web Development Portfolio
                </Link>{' '}
                to see how we program conversion-optimized contractor websites. Similar contractor programs can be explored in our page on{' '}
                <Link to="/industry/seo-services-for-electricians" className="text-blue-400 hover:underline font-bold">
                  SEO services for Electricians
                </Link>.
              </p>

              <p className="text-xs text-gray-450 leading-relaxed">
                Ensure your site's structure is properly checked using our custom{' '}
                <Link to="/resources/seo-audit-checklist" className="text-sky-400 underline font-bold">
                  SEO Audit Checklist
                </Link>{' '}
                to eliminate page performance defects.
              </p>

              <div className="space-y-2 pt-2">
                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Immediate external tool target:</p>
                <a href="https://www.google.com/business/" target="_blank" rel="noreferrer" className="block text-xs text-blue-400 font-bold hover:underline inline-flex items-center gap-1">
                  Claim and Build Your Google Business Profile Account <Globe className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Growth / Our Solution */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
              The Solution: HVAC SEO Services Designed to Drive Qualified Leads
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed font-sans">
              Our SEO services for HVAC companies are built specifically around how customers search for heating and cooling services. Instead of focusing on vanity metrics, we focus on outcomes that matter:
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6 text-center">
            {[
              "More phone calls",
              "More quote requests",
              "More booked service appointments",
              "More HVAC installation projects",
              "Increased revenue"
            ].map((outcome, idx) => (
              <div key={idx} className="bg-slate-900/40 border border-white/5 p-6 rounded-2xl flex flex-col justify-center items-center space-y-2">
                <span className="w-8 h-8 rounded-full bg-sky-500/10 text-sky-400 flex items-center justify-center font-bold text-xs">{idx + 1}</span>
                <p className="text-xs font-bold text-white uppercase">{outcome}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-center text-gray-400 max-w-3xl mx-auto mt-8 leading-relaxed font-sans">
            Our approach combines technical SEO, local SEO, content marketing, conversion optimization, and authority building to help HVAC companies dominate local search results. Compare customizable options in our{' '}
            <Link to="/pricing" className="text-blue-400 font-bold underline hover:text-blue-300">
              Agency SEO packages
            </Link> options.
          </p>
        </div>
      </section>

      {/* Strategic Outcome */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            What Happens When HVAC SEO Is Done Correctly?
          </h2>
          <p className="text-gray-400 text-sm">
            Your business appears when customers search for high-intent queries:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              "HVAC company near me",
              "AC repair services",
              "Air conditioning installation",
              "Furnace repair",
              "Emergency HVAC repair",
              "Heating contractor",
              "Commercial HVAC services",
              "HVAC maintenance plans"
            ].map((term, i) => (
              <div key={i} className="text-xs text-gray-200 bg-white/[0.01] border border-white/5 p-4 rounded-xl italic font-mono flex items-center justify-center">
                "{term}"
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-450 max-w-2xl mx-auto leading-relaxed font-sans">
            As your rankings improve, website traffic grows, leads increase, and your business gains a competitive advantage in your local market. If you serve outlying areas, compare geographic routing on our dedicated{' '}
            <Link to="/locations/seo-services-minglanilla" className="text-blue-400 font-bold underline hover:text-blue-300">
              Minglanilla Search Optimization Guide
            </Link>.
          </p>
        </div>
      </section>

      {/* Practical Insights & Examples */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Real HVAC Industry Experience and Practical Insights
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mt-2 font-sans">
              Successful HVAC SEO requires more than generic marketing tactics. We understand how HVAC customers search online because we've studied service-based businesses and local lead generation campaigns extensively.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-morphism border border-white/5 p-6 rounded-2xl space-y-4">
              <span className="text-[10px] uppercase font-black tracking-widest text-orange-400 block">Example 1</span>
              <h4 className="text-sm font-bold text-white uppercase">Emergency Repair Searches</h4>
              <p className="text-xs text-gray-450 leading-relaxed font-sans">
                When a homeowner's AC fails during summer, they typically search for immediate solutions. Optimizing pages for emergency HVAC repair services can generate highly qualified leads with strong purchase intent.
              </p>
            </div>

            <div className="glass-morphism border border-white/5 p-6 rounded-2xl space-y-4">
              <span className="text-[10px] uppercase font-black tracking-widest text-sky-400 block">Example 2</span>
              <h4 className="text-sm font-bold text-white uppercase">Seasonal Demand Opportunities</h4>
              <p className="text-xs text-gray-450 leading-relaxed font-sans">
                HVAC demand fluctuates throughout the year. Strategic SEO content targeting seasonal keywords such as spring AC tune-ups, summer cooling services, fall furnace inspections, and winter heating repairs helps maintain consistent traffic and lead flow.
              </p>
            </div>

            <div className="glass-morphism border border-white/5 p-6 rounded-2xl space-y-4 font-sans">
              <span className="text-[10px] uppercase font-black tracking-widest text-amber-400 block">Example 3</span>
              <h4 className="text-sm font-bold text-white uppercase">Service Area Optimization</h4>
              <p className="text-xs text-gray-450 leading-relaxed font-sans">
                Many HVAC companies serve multiple cities. Creating optimized location pages helps businesses rank in surrounding service areas and expand their customer reach. These practical strategies help HVAC contractors capture demand exactly when customers need their services.
              </p>
              <div className="pt-2">
                <Link to="/pricing/local-seo-strategy" className="text-[10px] font-black uppercase text-sky-400 hover:underline">
                  Review Multi-Location Plans <ArrowRight className="w-3 h-3 inline pb-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features and Benefits Column Blocks */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              HVAC SEO Features and Benefits
            </h2>
            <p className="text-gray-400 text-xs mt-2">Comprehensive service segments matching search guidelines.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">
            {[
              {
                f: "Comprehensive HVAC Keyword Research",
                b: "Identify high-intent HVAC search terms to attract customers actively looking for heating and cooling services."
              },
              {
                f: "Local SEO Optimization",
                b: "Optimize Google Business Profile, citations, and local signals to increase visibility in Google Maps and local search results."
              },
              {
                f: "Service Page Optimization",
                b: "Optimize pages for individual HVAC services to improve rankings for specific revenue-generating services."
              },
              {
                f: "Technical SEO Foundation",
                b: "Improve website speed, mobile usability, indexing, and crawlability to provide a better user experience and improve search performance."
              },
              {
                f: "Content Marketing",
                b: "Create HVAC-focused content that answers customer questions to build authority and attract organic traffic throughout the buying journey."
              },
              {
                f: "Link Building and Authority Development",
                b: "Acquire high-quality backlinks and industry citations to increase website authority and improve rankings against competitors."
              },
              {
                f: "Conversion Rate Optimization",
                b: "Improve calls-to-action, forms, and user experience to turn more website visitors into paying customers."
              },
              {
                f: "Targeted Competitor Auditing",
                b: "Map and dissect other local service websites to exploit optimization gaps and capture key rankings."
              }
            ].map((item, id) => (
              <div key={id} className="bg-slate-900/30 border border-white/5 p-6 rounded-2xl space-y-4 flex flex-col justify-between hover:border-sky-500/10 transition-colors">
                <div className="space-y-2">
                  <span className="text-[10px] font-black uppercase text-amber-400 tracking-wider">Feature:</span>
                  <h4 className="text-xs font-bold text-white uppercase">{item.f}</h4>
                </div>
                <div className="space-y-1 border-t border-white/5 pt-3">
                  <span className="text-[10px] font-black uppercase text-sky-400 tracking-wider">Benefit:</span>
                  <p className="text-xs text-gray-455 leading-relaxed text-gray-400">{item.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why HVAC SEO Requires Industry Expertise */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/40">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 font-sans">
              Why HVAC SEO Requires Industry Expertise
            </h2>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed font-sans">
              Not all SEO agencies understand HVAC marketing. The HVAC customer journey is unique. Each search intent requires a different optimization strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4 font-sans">
              <span className="text-xs font-black uppercase text-amber-400 block tracking-wider">Customers may search for:</span>
              <div className="space-y-3 font-semibold text-gray-300 text-xs">
                <div className="flex items-center gap-2">• Emergency repairs</div>
                <div className="flex items-center gap-2">• Scheduled maintenance</div>
                <div className="flex items-center gap-2">• Equipment replacement</div>
                <div className="flex items-center gap-2">• Energy-efficient upgrades</div>
                <div className="flex items-center gap-2">• Commercial HVAC services</div>
              </div>

              <p className="text-xs text-gray-450 leading-relaxed pt-2">
                An effective HVAC SEO campaign must consider seasonal search trends, service-area targeting, emergency service demand, competitive local markets, mobile-first customer behavior, and Google Maps visibility. Our strategies are tailored specifically for HVAC businesses rather than applying generic SEO methods.
              </p>

              <div className="pt-2">
                <Link to="/industry/seo-services-for-roofers" className="text-xs text-blue-400 font-bold underline hover:text-blue-300">
                  Compare similar campaigns with our SEO services for Roofers <ArrowRight className="w-3.5 h-3.5 inline" />
                </Link>
              </div>
            </div>

            {/* Authority Signals */}
            <div className="glass-morphism border border-white/5 p-8 rounded-[2.5rem] space-y-6">
              <h3 className="text-sm font-black uppercase text-sky-400 tracking-wider">Authority Signals That Matter:</h3>
              <div className="space-y-4 text-xs font-sans">
                {[
                  {
                    t: "Data-Driven SEO Decisions",
                    d: "Every recommendation is based on search demand, competitive analysis, and measurable performance metrics."
                  },
                  {
                    t: "Local Search Expertise",
                    d: "We understand how local ranking factors influence HVAC lead generation."
                  },
                  {
                    t: "Proven SEO Frameworks",
                    d: "Our campaigns follow established SEO best practices focused on long-term growth rather than short-term tricks."
                  },
                  {
                    t: "Competitor Analysis",
                    d: "We evaluate competing HVAC businesses to identify ranking opportunities and market gaps."
                  },
                  {
                    t: "Ongoing Performance Monitoring",
                    d: "Rankings, traffic, lead generation, and conversion metrics are tracked continuously to ensure measurable progress."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <h4 className="font-bold text-white uppercase text-[11px] text-gray-200">{item.t}</h4>
                    <p className="text-gray-400 text-[11px] leading-relaxed">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Transparency */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-2 leading-tight">
              Trust and Transparency
            </h2>
            <p className="text-gray-300 text-xs font-semibold text-sky-400 uppercase tracking-widest">
              What Clients Appreciate About Our Approach
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="glass-morphism border border-white/5 p-8 rounded-3xl space-y-4">
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 block">Client Testimonials</span>
              
              <div className="space-y-4 font-sans">
                <div className="flex text-amber-400 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <div className="space-y-3 italic text-xs text-gray-350 leading-relaxed">
                  <p>"Our HVAC website traffic increased significantly within months, and we began receiving more qualified service inquiries from Google."</p>
                  <p>"The local SEO improvements helped us appear in Google Maps for key service areas, resulting in more calls and appointments."</p>
                  <p>"Their HVAC-focused SEO strategy helped us compete against larger companies in our market."</p>
                </div>
                <p className="text-[10px] text-gray-500 uppercase font-black">- HVAC Service Owners</p>
              </div>
            </div>

            {/* Guarantees and Principles */}
            <div className="space-y-5 font-sans">
              {[
                {
                  t: "Transparent Reporting",
                  d: "You'll know exactly what work is being completed and how campaigns are performing."
                },
                {
                  t: "No Unrealistic Promises",
                  d: "No ethical SEO provider can guarantee a #1 ranking for every keyword. Instead, we focus on sustainable growth and measurable improvements."
                },
                {
                  t: "Long-Term Strategy",
                  d: "SEO is an investment that builds momentum over time. Our goal is to create lasting visibility rather than temporary gains."
                },
                {
                  t: "Clear Communication",
                  d: "You'll receive regular updates, insights, and recommendations."
                }
              ].map((item, idx) => (
                <div key={idx} className="border-l-2 border-sky-400/40 pl-4 space-y-1">
                  <h4 className="text-xs font-black uppercase text-white tracking-widest">{item.t}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.d}</p>
                </div>
              ))}

              <div className="pt-4 border-t border-white/5 space-y-2">
                <p className="text-xs font-bold text-white">Trust Indicators:</p>
                <div className="grid grid-cols-2 gap-2 text-[10px] uppercase font-black tracking-wider text-gray-400">
                  <div>✓ Ethical White-Hat SEO Practices</div>
                  <div>✓ Google-Compliant Optimization</div>
                  <div>✓ Transparent Reporting</div>
                  <div>✓ Industry-Focused Strategies</div>
                  <div>✓ Local SEO Expertise</div>
                  <div>✓ Long-Term Growth Approach</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparisons Section */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/40">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 font-sans">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Why Choose Our SEO Services for HVAC Companies Instead of Alternatives?
            </h2>
            <p className="text-xs text-gray-500 mt-2">Maximum efficiency stacked against typical alternatives.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 font-sans">
            {[
              {
                v: "Compared to PPC Advertising",
                d: "PPC stops generating leads when you stop spending. SEO continues driving organic traffic long after content and optimization efforts are implemented."
              },
              {
                v: "Compared to General Marketing Agencies",
                d: "General agencies often lack HVAC-specific knowledge. Our strategies focus on HVAC search behavior, service categories, and local ranking opportunities."
              },
              {
                v: "Compared to DIY SEO",
                d: "DIY SEO can consume significant time and often leads to missed opportunities. Professional SEO allows HVAC business owners to focus on serving customers while experts manage growth."
              },
              {
                v: "Compared to Low-Cost SEO Providers",
                d: "Cheap SEO services frequently rely on outdated tactics that can harm rankings. We focus on sustainable strategies that align with search engine guidelines."
              }
            ].map((alt, i) => (
              <div key={i} className="bg-slate-900/30 border border-white/5 p-6 rounded-2xl space-y-2">
                <h4 className="text-sm font-bold text-white uppercase tracking-tight text-sky-400">{alt.v}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{alt.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-sky-950/40 border border-sky-500/20 p-6 rounded-2xl text-center max-w-2xl mx-auto font-sans">
            <p className="text-xs text-gray-400 leading-relaxed">
              Ensure you integrate high-intent markup. Protect your technical parameters with our custom{' '}
              <Link to="/resources/schema-generator" className="text-blue-400 font-bold underline">
                Interactive Schema Generator
              </Link>{' '}
              prior to deployment. Read Google recommendations directly in the{' '}
              <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noreferrer" className="text-blue-400 underline font-bold inline-flex items-center gap-0.5">
                Google SEO Starter Guide <Globe className="w-3.5 h-3.5 inline" />
              </a>.
            </p>
          </div>
        </div>
      </section>

      {/* External Resources Anchor Blocks */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/20">
        <div className="max-w-4xl mx-auto font-sans">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Recommended Search Guidelines & Authority Centers</h2>
            <p className="text-xs text-gray-500">Access official search guidelines to verify crawl capabilities.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <a href="https://ahrefs.com/blog/local-seo/" target="_blank" rel="noreferrer" className="block p-4 rounded-xl bg-white/[0.01] border border-white/5 hover:border-white/10 text-xs text-blue-400 font-bold hover:underline">
              Ahrefs Local Map SEO Blueprint Guide <Globe className="w-3.5 h-3.5 inline ml-1" />
            </a>
            <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noreferrer" className="block p-4 rounded-xl bg-white/[0.01] border border-white/5 hover:border-white/10 text-xs text-blue-400 font-bold hover:underline">
              Google Developers Official Search Starter Instructions <Globe className="w-3.5 h-3.5 inline ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/40">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white flex items-center justify-center gap-2.5">
              <HelpCircle className="text-sky-400 w-8 h-8 shrink-0" /> Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How long does HVAC SEO take to produce results?",
                a: "Most HVAC companies begin seeing measurable improvements within 3–6 months, with stronger growth occurring over time as authority increases."
              },
              {
                q: "Is SEO better than Google Ads for HVAC companies?",
                a: "Both can be effective. SEO provides long-term organic visibility, while Google Ads delivers immediate traffic. Many successful HVAC businesses use both."
              },
              {
                q: "Can you help multi-location HVAC companies?",
                a: "Yes. We develop local SEO strategies for businesses operating across multiple cities and service areas."
              },
              {
                q: "Do HVAC companies really need local SEO?",
                a: "Absolutely. Local SEO helps your business appear in Google Maps and local search results where customers are actively searching."
              },
              {
                q: "What HVAC keywords should we target?",
                a: "Keyword selection depends on your services, location, and competition. Common targets include HVAC repair, AC installation, furnace repair, and commercial HVAC services."
              },
              {
                q: "Will SEO increase phone calls?",
                a: "When implemented correctly, SEO improves visibility for high-intent searches, which often leads to more calls, quote requests, and booked jobs."
              },
              {
                q: "Do you provide monthly reporting?",
                a: "Yes. We provide transparent reporting so you can track rankings, traffic, leads, and campaign progress."
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
                  <div className="p-6 pt-0 border-t border-white/5 bg-slate-950/20 text-xs text-slate-300 leading-relaxed font-sans">
                    <p>{faq.a}</p>
                    {faq.q.includes("local") && (
                      <p className="mt-2 text-slate-400 italic">
                        Align your business's regional coordinates. Review our customizable packages inside the{' '}
                        <Link to="/pricing/local-seo-strategy" className="text-sky-400 font-bold underline">
                          Local SEO Strategy Pricing Module
                        </Link>{' '}
                        today.
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(14,165,233,0.1),transparent_60%)] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8 font-sans">
          <div className="w-16 h-16 bg-sky-500/15 border border-sky-500/20 text-sky-450 rounded-2xl flex items-center justify-center mx-auto mb-4 text-sky-400">
            <Wind className="w-8 h-8" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Ready to Grow Your HVAC Business?
          </h2>

          <div className="space-y-4 max-w-3xl mx-auto text-sm md:text-base text-gray-300 leading-relaxed">
            <p className="font-bold text-white text-base">The majority of HVAC customers begin their search online.</p>
            <p>If your competitors are ranking above you in Google, they are likely capturing leads that could be yours.</p>
            <p>
              Our SEO services for HVAC companies are designed to help you increase visibility, attract qualified local customers, and generate more booked jobs through sustainable organic growth.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-white/5 p-6 rounded-2xl max-w-2xl mx-auto space-y-2">
            <p className="text-xs text-gray-550 leading-relaxed text-gray-400">
              We stand for transparent ethics and robust organic systems. We do not provide false guarantees on ranking positions. We focus purely on white-hat procedures. Discover hidden indexing gaps by checking our online templates inside our unified{' '}
              <Link to="/resources/actionable-seo-templates" className="text-sky-400 font-bold underline hover:text-sky-300">
                Actionable SEO Templates Hub
              </Link>{' '}
              or reach our central{' '}
              <Link to="/resources" className="text-sky-400 underline font-bold">
                Resource Center
              </Link>.
            </p>
          </div>

          <div className="pt-4">
            <button
              onClick={onBook}
              className="inline-flex items-center justify-center px-10 py-5 rounded-xl text-black bg-gradient-to-r from-sky-400 to-sky-300 hover:from-sky-550 hover:to-sky-400 font-extrabold tracking-wider uppercase text-sm shadow-xl shadow-sky-500/20 transition-all duration-300 hover:scale-[1.03]"
            >
              Schedule Your Free HVAC SEO Strategy Session Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>

          <div className="pt-4 text-center">
            <p className="text-xs text-gray-500">
              Let's identify the opportunities available in your market and build a roadmap for long-term growth, increased leads, and higher revenue. Explore our diverse industrial layouts in our{' '}
              <Link to="/industry" className="text-amber-400 underline font-extrabold">
                Industry Solutions Hub
              </Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HVACSEOPage;
