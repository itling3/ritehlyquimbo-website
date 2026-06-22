import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Camera, 
  Activity,
  ShoppingBag, 
  Heart, 
  Hotel, 
  Zap, 
  Home as HomeIcon, 
  Building2,
  Wind, 
  Truck,
  Sprout,
  ArrowRight, 
  Sparkles,
  BarChart3,
  Cpu,
  TrendingUp,
  Search,
  CheckCircle2,
  Lock,
  Compass
} from 'lucide-react';
import SEO from '../components/SEO';
import SectionCTA from '../components/SectionCTA';

interface IndustryHubProps {
  onBook: (e?: React.MouseEvent) => void;
}

const IndustryHubPage: React.FC<IndustryHubProps> = ({ onBook }) => {
  const industries = [
    {
      title: "Photographers & Visual Artists",
      path: "/industry/seo-company-for-photographers",
      description: "Rich image optimization, portfolio indexing, and high-revenue local map pack strategies for wedding, family, and studio photographers.",
      icon: Camera,
      badge: "Local Authority",
      accent: "from-orange-500 to-amber-500",
      accentText: "text-orange-400",
      borderHover: "hover:border-orange-500/30",
      keywords: ["Wedding photographer near me", "Family portrait studio", "Commercial photography SEO"],
      stats: "Inquiries +145% on avg."
    },
    {
      title: "Fashion & Apparel Retails",
      path: "/industry/seo-services-for-fashion-industry",
      description: "Advanced category and collection page architecture, structured data, search intent mapping, and digital PR for modern apparel brands.",
      icon: ShoppingBag,
      badge: "E-Commerce",
      accent: "from-pink-500 to-rose-500",
      accentText: "text-pink-400",
      borderHover: "hover:border-pink-500/30",
      keywords: ["Sustainable activewear shop", "Designer sunglasses online", "Custom leather boots"],
      stats: "Organic sales +94% on avg."
    },
    {
      title: "Therapists & Wellness Clinics",
      path: "/industry/seo-services-for-therapists",
      description: "High-empathy wellness keyword optimization, strict medical trust signals, local clinic ranking, and custom booking conversion funnels.",
      icon: Heart,
      badge: "YMYL specialist",
      accent: "from-rose-500 to-pink-500",
      accentText: "text-rose-400",
      borderHover: "hover:border-rose-500/30",
      keywords: ["Anxiety therapist near me", "Virtual marriage counseling", "Mental health clinic"],
      stats: "New patients +85% on avg."
    },
    {
      title: "Hotels, Resorts & Hospitality",
      path: "/industry/seo-services-for-hotels",
      description: "Bypass OTAs with bespoke hotel SEO. Rank directly for holiday planning terms, leisure activities, and organic boutique bookings.",
      icon: Hotel,
      badge: "Direct Bookings",
      accent: "from-cyan-500 to-teal-500",
      accentText: "text-cyan-400",
      borderHover: "hover:border-cyan-500/30",
      keywords: ["Boutique resort with pool", "Beachfront hotel booking", "Best weekend getaway stay"],
      stats: "Direct bookings +112% avg."
    },
    {
      title: "Electricians & Electrical Pros",
      path: "/industry/seo-services-for-electricians",
      description: "Hyper-local emergency search dominance, neighborhood routing pages, schema markup, and dynamic conversion setups for trade companies.",
      icon: Zap,
      badge: "High Urgency",
      accent: "from-yellow-500 to-amber-500",
      accentText: "text-yellow-400",
      borderHover: "hover:border-yellow-500/30",
      keywords: ["Emergency electrician near me", "Commercial generator setup", "Home panel upgrade cost"],
      stats: "Local leads +210% on avg."
    },
    {
      title: "Vape Shops & Brand Chains",
      path: "/industry/seo-company-for-vape-shop",
      description: "Organic growth strategy for restricted markets. Compliant keyword targeting, digital PR, and advanced local store locator SEO.",
      icon: Wind,
      badge: "Regulated Niche",
      accent: "from-purple-500 to-violet-500",
      accentText: "text-purple-400",
      borderHover: "hover:border-purple-500/30",
      keywords: ["Buy vape devices online", "Best local vape stores", "E-liquid fast delivery"],
      stats: "Store visits +78% on avg."
    },
    {
      title: "Roofers & Home Contractors",
      path: "/industry/seo-services-for-roofers",
      description: "Storm repair keyword traps, high-ticket roofing lead capture, visual credibility blueprints, and long-term county SEO setups.",
      icon: HomeIcon,
      badge: "Premium High Ticket",
      accent: "from-blue-500 to-indigo-500",
      accentText: "text-blue-400",
      borderHover: "hover:border-blue-500/30",
      keywords: ["Emergency roof repair", "Metal roofing installation", "Best commercial roofers near me"],
      stats: "Quote requests +125% avg."
    },
    {
      title: "Financial Advisors & Wealth RIAs",
      path: "/industry/seo-services-for-financial-advisors",
      description: "YMYL compliant strategies, fiduciary branding, advanced retirement planning topic clusters, and direct wealthy investor lead generation.",
      icon: BarChart3,
      badge: "High Net Worth",
      accent: "from-blue-600 via-sky-500 to-amber-400",
      accentText: "text-blue-400",
      borderHover: "hover:border-blue-500/30",
      keywords: ["Wealth management services", "Retirement planning advisor", "Fiduciary financial planner"],
      stats: "Lead conversions +165% avg."
    },
    {
      title: "Real Estate Brokers & Developers",
      path: "/industry/seo-services-for-real-estate",
      description: "Custom geographic indexing, advanced multi-unit structured property schema layouts, automated buyer/seller search arrays, and listing dominance.",
      icon: Building2,
      badge: "High Listing Conversion",
      accent: "from-orange-500 via-amber-500 to-yellow-400",
      accentText: "text-orange-400",
      borderHover: "hover:border-orange-500/30",
      keywords: ["Homes for sale", "Real estate agents near me", "Property management companies"],
      stats: "Listing leads +145% avg."
    },
    {
      title: "HVAC Companies & Mechanicals",
      path: "/industry/seo-services-for-hvac-companies",
      description: "Local search signals, emergency repair search mapping, GBP maps dominance, seasonal search traps, and robust service area visibility.",
      icon: Wind,
      badge: "High Call Rate",
      accent: "from-sky-500 via-sky-300 to-amber-400",
      accentText: "text-sky-400",
      borderHover: "hover:border-sky-500/30",
      keywords: ["HVAC repair", "AC installation near me", "Furnace maintenance"],
      stats: "Service calls +155% avg."
    },
    {
      title: "Moving Companies & Relocations",
      path: "/industry/seo-services-for-moving-companies",
      description: "Local search maps, long-distance territory funnels, service-area targeting, intent-driven keyword architecture, and organic booking engines.",
      icon: Truck,
      badge: "High Booking Rate",
      accent: "from-blue-600 via-sky-400 to-amber-300",
      accentText: "text-blue-400",
      borderHover: "hover:border-blue-500/30",
      keywords: ["Local movers near me", "Long-distance moving companies", "Office relocation services"],
      stats: "Booked moves +140% avg."
    },
    {
      title: "Landscapers & Gardeners",
      path: "/industry/seo-services-for-landscapers",
      description: "Green industry map-pack domination, multi-territory ranking configurations, seasonal keyword targeting, and conversion-optimized service pages.",
      icon: Sprout,
      badge: "High Intent",
      accent: "from-emerald-500 via-teal-400 to-amber-300",
      accentText: "text-emerald-450",
      borderHover: "hover:border-emerald-500/30",
      keywords: ["Landscaping company near me", "Lawn care services", "Landscape design contractor"],
      stats: "Service quotes +150% avg."
    },
    {
      title: "Window Cleaners",
      path: "/industry/seo-services-for-window-cleaners",
      description: "Proven search campaign designs for glass washing, residential multi-crew route density, commercial monthly contracts, and local map pack dominance.",
      icon: Sparkles,
      badge: "Leads Generator",
      accent: "from-sky-500 via-cyan-400 to-amber-200",
      accentText: "text-sky-400",
      borderHover: "hover:border-sky-500/30",
      keywords: ["Window washing near me", "Commercial window cleaning", "Residential window cleaner"],
      stats: "More calls & jobs +160% avg."
    },
    {
      title: "Managed Service Providers (MSPs)",
      path: "/industry/seo-services-for-msps",
      description: "Rank for high-intent B2B IT support keywords, attract high-value business clients, and convert search traffic into recurring managed IT service contracts.",
      icon: Cpu,
      badge: "Managed IT & MRR",
      accent: "from-violet-500 via-indigo-500 to-cyan-400",
      accentText: "text-violet-400",
      borderHover: "hover:border-violet-500/30",
      keywords: ["IT support for law firms", "Managed IT services near me", "Cybersecurity for small business"],
      stats: "Booked contracts +130% avg."
    },
    {
      title: "Plastic Surgeons & Cosmetic Clinics",
      path: "/industry/seo-services-for-plastic-surgeons",
      description: "Rank for high-intent aesthetic procedure searches, build extreme E-E-A-T trust signals, and convert procedural searchers into high-value consultations.",
      icon: Activity,
      badge: "Healthcare & Aesthetics",
      accent: "from-teal-500 via-emerald-500 to-cyan-400",
      accentText: "text-teal-400",
      borderHover: "hover:border-teal-500/30",
      keywords: ["Rhinoplasty surgeon", "Plastic surgeon near me", "Breast augmentation specialist"],
      stats: "Consultation sign-ups +184% avg."
    }
  ];

  return (
    <div className="pt-24 md:pt-32 pb-12 md:pb-24 px-4 md:px-6 min-h-screen bg-[#020617] text-white">
      <SEO 
        title="SEO Services for Industries | Custom Growth Solutions" 
        description="Rank higher in Google in your specific commercial niche. Explore custom SEO strategies for financial advisors, real estate, therapists, photographers, and hotels."
        keywords="industry seo services, real estate seo, financial advisor seo, photography seo company, trade contractor local marketing"
      />
      
      <div className="max-w-7xl mx-auto">
        {/* Hero Area */}
        <div className="text-center mb-16 md:mb-24 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 w-[350px] md:w-[600px] h-[350px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[250px] md:w-[450px] h-[250px] bg-orange-500/5 blur-[100px] rounded-full pointer-events-none"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 md:space-y-6 relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-blue-400" /> Niche Search Engine Dominance
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-none">
              Industry Specific <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">SEO Spokes</span>
            </h1>
            
            <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
              Generic SEO strategies fail because search intent and customer journeys vary drastically by sector. We design bespoke, bottom-up campaigns built on deep-domain industry expertise.
            </p>
          </motion.div>
        </div>

        {/* Dynamic Industry Hub Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20">
          {industries.map((ind, index) => {
            const IconComponent = ind.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass-morphism rounded-[2rem] border border-white/5 ${ind.borderHover} transition-all duration-300 flex flex-col justify-between group overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-blue-500/5 relative`}
              >
                {/* Glowing subtle top border accent */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${ind.accent} opacity-40 group-hover:opacity-100 transition-opacity`}></div>
                
                <div className="p-8 space-y-6 flex-1">
                  {/* Top row: badge + icon */}
                  <div className="flex items-center justify-between">
                    <div className="inline-flex px-3 py-1 rounded-full bg-white/[0.03] border border-white/5 text-[10px] font-black uppercase tracking-wider text-gray-400">
                      {ind.badge}
                    </div>
                    <div className={`w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
                      <IconComponent className={`w-6 h-6 ${ind.accentText}`} />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {ind.title}
                    </h2>
                    <p className="text-xs text-gray-400 leading-relaxed min-h-[64px]">
                      {ind.description}
                    </p>
                  </div>

                  {/* High intent terms */}
                  <div className="space-y-2 pt-2 border-t border-white/5">
                    <div className="text-[10px] font-black uppercase tracking-widest text-orange-400/80 flex items-center gap-1.5">
                      <Search className="w-3 h-3" /> Targeted Search Terms
                    </div>
                    <ul className="space-y-1.5">
                      {ind.keywords.map((kw, i) => (
                        <li key={i} className="text-xs text-gray-300 flex items-center gap-2">
                          <span className={`w-1 h-1 rounded-full bg-gradient-to-r ${ind.accent}`}></span>
                          <span className="font-medium font-mono text-[11px] text-gray-400 italic">"{kw}"</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer and CTA link */}
                <div className="px-8 pb-8 pt-4 bg-white/[0.01] border-t border-white/5 flex items-center justify-between">
                  <div className="text-xs text-emerald-400 font-bold bg-emerald-500/5 px-2.5 py-1 rounded-lg border border-emerald-500/10 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {ind.stats}
                  </div>
                  <Link
                    to={ind.path}
                    className="inline-flex items-center gap-1.5 font-bold text-xs uppercase tracking-tighter text-white group-hover:text-orange-400 transition-colors"
                  >
                    Explore Spoke
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            )
          })}

          {/* Special custom widget block (coming soon / custom requests) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="glass-morphism rounded-[2rem] border border-white/5 border-dashed border-white/15 flex flex-col justify-center items-center p-8 text-center bg-white/[0.01]"
          >
            <div className="w-16 h-16 rounded-3xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-orange-400/80 mb-6">
              <Compass className="w-8 h-8 animate-spin-slow text-orange-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">My Industry Is Not Listed?</h3>
            <p className="text-xs text-gray-400 leading-relaxed max-w-xs mb-6">
              Don't worry. We custom compile search semantic maps for all high-value consumer service and luxury e-commerce niches.
            </p>
            <button
              onClick={onBook}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-orange-600/10 hover:bg-orange-600/20 border border-orange-500/20 text-orange-400 font-bold text-xs tracking-wide transition-all uppercase"
            >
              Request Custom Blueprint
            </button>
          </motion.div>
        </div>

        {/* Industry SEO Methodology Matrix */}
        <section className="py-16 md:py-24 border-t border-white/5 mt-16 md:mt-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase italic">
                Why Standard One-Size-Fits-All SEO <span className="text-orange-500">Always Fails</span>
              </h2>
              
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Most general marketing agencies apply the exact same checklist to a bridal photographer that they do to a local roofing contractor. This is highly ineffective because search behaviors are completely separate:
              </p>

              <div className="space-y-4">
                {[
                  {
                    t: "Search Intensity Difference",
                    d: "An electrician search is high-urgency and map-based. A fashion search is inspiration-based and visual. The layouts MUST match these behaviors."
                  },
                  {
                    t: "Indexation Challenges",
                    d: "Heavy visual portfolios (photography, hotels) require advanced server-side image scaling and compression to pass Core Web Vitals while indexing beautiful details."
                  },
                  {
                    t: "Trust Signals (YMYL)",
                    d: "Therapists, medical hubs, and financial products require strict implementation of Google's E-E-A-T algorithm to prove real accreditation and background safety."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="border-l-2 border-orange-500/40 pl-4 space-y-1">
                    <h4 className="text-xs font-black uppercase text-white tracking-widest">{item.t}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-3xl blur-2xl"></div>
              <div className="relative glass-morphism p-8 rounded-[2rem] border border-white/10 space-y-6 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-white text-lg">Engineered Niche Benchmarks</h3>
                </div>

                <div className="space-y-4">
                  {[
                    { label: "Google Business Hub Profile Strength", val: "94%" },
                    { label: "Optimized Mobile Conversion Speed", val: "< 1.2s" },
                    { label: "High Intent Commercial Target Match", val: "99%" },
                    { label: "Long Term Organic Equity Score", val: "A+" }
                  ].map((stat, id) => (
                    <div key={id} className="space-y-1.5">
                      <div className="flex justify-between text-xs text-gray-400 font-medium">
                        <span>{stat.label}</span>
                        <span className="font-mono text-orange-400 font-bold">{stat.val}</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-orange-500 rounded-full"
                          style={{ width: stat.val.includes('%') ? stat.val : '100%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-[11px] text-gray-400 leading-relaxed">
                  <Lock className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>All industrial campaign frameworks are strictly backed by non-disclosure legalities.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Call to Action */}
        <div className="mt-24">
          <SectionCTA 
            onClick={onBook} 
            text="Ready to build a customized growth blueprint for your specific industry?" 
            buttonText="Request Industry Blueprint"
          />
        </div>
      </div>
    </div>
  );
};

export default IndustryHubPage;
