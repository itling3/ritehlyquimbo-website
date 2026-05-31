import React, { useState } from 'react';
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
  ShoppingBag,
  MapPin,
  FileText,
  Settings,
  Activity,
  Award
} from 'lucide-react';
import SEO from '../components/SEO';

interface VapeShopSEOProps {
  onBook: (e?: React.MouseEvent) => void;
}

const VapeShopSEOList: React.FC<VapeShopSEOProps> = ({ onBook }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const challenges = [
    "Limited advertising opportunities",
    "Intense competition from national brands",
    "Declining organic visibility",
    "Poor local search rankings",
    "Low website traffic",
    "Product pages that fail to rank",
    "Technical SEO issues",
    "Inconsistent business listings",
    "Lack of content authority"
  ];

  const searchTerms = [
    "Vape shop near me",
    "Disposable vapes",
    "Vape store online",
    "Best vape juice",
    "Nicotine salt products",
    "Vape starter kits",
    "Local vape shop"
  ];

  const coreStrategies = [
    {
      title: "Local SEO Optimization",
      desc: "We improve your visibility in local search results, helping nearby customers find your vape shop when they're ready to purchase.",
      icon: MapPin,
      benefits: [
        "Higher Google Maps visibility",
        "More local traffic",
        "Increased store visits",
        "Better local keyword rankings"
      ]
    },
    {
      title: "Ecommerce SEO",
      desc: "For online vape stores, we optimize core site zones to help search engines understand your inventory and improve rankings across high-intent search terms.",
      icon: ShoppingBag,
      details: [
        "Product pages",
        "Category pages",
        "Collection pages",
        "Site architecture",
        "Internal linking"
      ]
    },
    {
      title: "Content Authority Building",
      desc: "We create educational content that answers customer questions and establishes your business as a trusted vaping resource.",
      icon: FileText,
      examples: [
        "Vape buying guides",
        "Disposable vape comparisons",
        "Vape maintenance tips",
        "E-liquid guides",
        "Industry updates"
      ]
    },
    {
      title: "Technical SEO",
      desc: "We fix the underlying issues that often prevent vape websites from ranking effectively, ensuring search engines crawl and index perfectly.",
      icon: Settings,
      benefits: [
        "Site speed optimization",
        "Mobile usability improvements",
        "Crawlability enhancements",
        "Schema markup implementation",
        "Indexing optimization"
      ]
    }
  ];

  const successfulPatterns = [
    "Target local and transactional keywords",
    "Build topical authority around vaping topics",
    "Optimize every product category",
    "Maintain accurate business information",
    "Earn high-quality backlinks",
    "Publish helpful educational content"
  ];

  const localSearches = [
    "Vape shop in [city]",
    "Disposable vape store",
    "Vape accessories near me"
  ];

  const ecommerceSearches = [
    "Best disposable vape brands",
    "Nicotine salt vape juice",
    "Refillable pod systems",
    "Vape coils and accessories"
  ];

  const servicesGrid = [
    {
      title: "Keyword Research",
      feature: "Industry-specific keyword analysis.",
      benefit: "Reach customers actively searching for vape products and services."
    },
    {
      title: "On-Page SEO",
      feature: "Optimization of titles, headings, content, and metadata.",
      benefit: "Higher rankings and increased click-through rates."
    },
    {
      title: "Technical SEO Audits",
      feature: "Identification and resolution of technical issues.",
      benefit: "Improved crawling, indexing, and user experience."
    },
    {
      title: "Local SEO Management",
      feature: "Google Business Profile optimization and citation management.",
      benefit: "More local visibility and in-store visits."
    },
    {
      title: "Content Strategy",
      feature: "Creation of authoritative vaping content.",
      benefit: "Increased topical authority and long-term traffic growth."
    },
    {
      title: "Link Building",
      feature: "Acquisition of high-quality backlinks.",
      benefit: "Improved domain authority and stronger rankings."
    },
    {
      title: "Conversion Optimization",
      feature: "Landing page and user experience improvements.",
      benefit: "More leads, sales, and revenue from existing traffic."
    }
  ];

  const trustOutcomes = [
    "Qualified traffic",
    "Store visits",
    "Product sales",
    "Repeat customers",
    "Increased revenue"
  ];

  const trustApproaches = [
    {
      title: "Search Intent Analysis",
      desc: "Understanding what vape customers are actually searching for."
    },
    {
      title: "Competitive Research",
      desc: "Identifying ranking opportunities your competitors are missing."
    },
    {
      title: "Data-Driven Optimization",
      desc: "Using analytics and search data to guide decision-making."
    },
    {
      title: "Long-Term Growth Strategies",
      desc: "Building sustainable visibility rather than short-term gains."
    }
  ];

  const valuePillars = [
    {
      title: "Transparency",
      desc: "We provide clear reporting and explain exactly what work is being completed."
    },
    {
      title: "Honest Recommendations",
      desc: "If something won't significantly impact results, we tell you."
    },
    {
      title: "Measurable Progress",
      desc: "We track: Organic traffic, Keyword rankings, Leads generated, Store visits, Revenue impact"
    },
    {
      title: "White Hat SEO Practices",
      desc: "We follow search engine best practices and avoid risky shortcuts that could harm your website."
    }
  ];

  const clientFeedback = [
    "Our organic traffic steadily increased and we finally started ranking for important local vape keywords.",
    "The SEO strategy helped us reduce dependence on paid advertising while generating more consistent website traffic.",
    "The team understood our niche and focused on rankings that actually generated sales."
  ];

  const ourCommitment = [
    "Transparent communication",
    "Strategic recommendations",
    "Consistent optimization",
    "Ethical SEO practices",
    "Ongoing performance monitoring"
  ];

  const faqs = [
    {
      question: "Why does a vape shop need SEO?",
      answer: "SEO helps vape businesses generate organic traffic from customers actively searching for vape products and local vape stores, reducing dependence on paid advertising."
    },
    {
      question: "How long does vape SEO take?",
      answer: "Most businesses begin seeing measurable improvements within 3 to 6 months, although timelines vary depending on competition and website condition."
    },
    {
      question: "Can SEO help local vape stores?",
      answer: "Yes. Local SEO helps vape shops appear in local search results, Google Maps, and location-based searches."
    },
    {
      question: "Do you provide ecommerce SEO for online vape shops?",
      answer: "Yes. We optimize product pages, category pages, site structure, and content for ecommerce vape websites."
    },
    {
      question: "Is SEO better than paid advertising for vape businesses?",
      answer: "Because many advertising platforms restrict vape-related promotions, SEO often provides one of the most sustainable long-term marketing channels."
    },
    {
      question: "What keywords should a vape shop target?",
      answer: "This depends on your products, location, and customer base. We perform detailed keyword research to identify the highest-value opportunities."
    },
    {
      question: "Can you guarantee first-page rankings?",
      answer: "No reputable SEO company can guarantee rankings. Search engine algorithms are constantly evolving. We focus on proven strategies that maximize your chances of long-term success."
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white overflow-hidden">
      <SEO 
        title="SEO Company for Vape Shop | Specialized Vape SEO Services That Drive Sales"
        description="Looking for an SEO company for vape shop businesses? Increase organic traffic, improve local rankings, and generate more vape product sales with specialized SEO strategies built for the vaping industry."
        keywords="seo company for vape shop, vape shop seo, vape store seo, vape seo services, online vape shop ranking"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-6 overflow-hidden">
        {/* Soft neon gradient glow background typical of vape design aesthetics */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(249,115,22,0.1),transparent_70%)] pointer-events-none"></div>
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-[10px] font-black uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              Industry-Specific Growth
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase italic tracking-tighter leading-[0.9] mb-6">
              SEO Company for <span className="text-orange-500">Vape Shop</span>: Grow Organic Traffic, Increase Sales & Dominate Local Search
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed mb-4">
              Get More Vape Customers with an SEO Company That Understands the Industry
            </p>

            <p className="text-sm md:text-base text-gray-400 font-normal leading-relaxed mb-8">
              Running a vape shop is challenging enough without having to fight for visibility online. As a specialized SEO company for vape shop businesses, we help vape retailers, online vape stores, and eCommerce brands increase search rankings, attract qualified traffic, and generate more sales through proven organic search strategies.
              <br /><br />
              Whether you operate a local vape store, an online vape shop, or a multi-location vaping business, our SEO campaigns are designed to help you reach customers actively searching for vape products, disposable vapes, e-liquids, vape mods, vape accessories, and related products.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onBook}
                className="px-8 py-5 bg-orange-600 hover:bg-orange-700 text-white font-black rounded-2xl transition-all shadow-2xl shadow-orange-500/30 uppercase tracking-tighter text-base flex items-center justify-center gap-3 group cursor-pointer"
              >
                <span>Book Your Free Vape SEO Strategy Session</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Professional Layout with Core Strengths */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 glass-morphism rounded-[2.5rem] border border-white/10 p-6 md:p-8 shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] bg-[#0f172a]/40">
              <h3 className="text-xl font-black uppercase italic tracking-tight mb-4 text-orange-400">Unlock Search Channels</h3>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                Because major platforms ban ads for vaporizers, e-cigarettes, and e-liquids, organic search is the ultimate channel for sustainable vape e-commerce and local shop customer acquisition.
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white uppercase tracking-tight">Zero Paid Ad Waste</h4>
                    <p className="text-xs text-gray-400 mt-1">SEO creates high-intent consumer traffic without recurring PPC expenditure or ad suspension fears.</p>
                  </div>
                </div>

                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 shrink-0">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white uppercase tracking-tight">Compounding Direct ROI</h4>
                    <p className="text-xs text-gray-400 mt-1">Organic presence builds high domain valuation and sustainable month-over-month vape buyer leads.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Ambient Background Glow */}
            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-orange-600/10 blur-[100px] rounded-full pointer-events-none"></div>
          </motion.div>
        </div>
      </section>

      {/* Sustainable ROI Strip Banner */}
      <section className="py-16 bg-gradient-to-r from-orange-600/20 via-black/40 to-blue-600/10 border-y border-white/10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="text-[10px] font-black text-orange-400 uppercase tracking-[0.4em] block mb-3">Organic Leverage</span>
          <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter mb-4 text-white">
            Grow Your Vape Business Without Relying on Paid Ads
          </h2>
          <p className="text-gray-300 text-sm md:text-base max-w-3xl mx-auto mb-8 font-semibold leading-relaxed">
            Many vape businesses face advertising restrictions across major platforms. SEO provides a sustainable way to attract customers without depending solely on paid advertising.
          </p>
          <button 
            onClick={onBook}
            className="px-8 py-4 bg-white hover:bg-gray-100 text-black font-black uppercase tracking-tighter italic text-xs md:text-sm rounded-xl transition-all shadow-xl hover:scale-[1.02] cursor-pointer"
          >
            Book Your Free SEO Consultation Today
          </button>
        </div>
      </section>

      {/* The Challenge section */}
      <section className="py-24 px-4 md:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs text-orange-500 font-black tracking-widest uppercase">The Landscape</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mt-2 mb-4">
              The Challenge Facing Most Vape Shops
            </h2>
            <p className="text-gray-400 text-sm font-semibold">
              The vaping industry operates in one of the most competitive and regulated digital markets. Many vape shop owners struggle daily with critical organic and technical hurdles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Difficulties */}
            <div className="glass-morphism rounded-[2rem] border border-white/10 p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-black uppercase italic text-red-500 tracking-tight mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" /> What Store Owners Struggle With
                </h3>
                <div className="grid sm:grid-cols-1 gap-3.5">
                  {challenges.map((c, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3">
                      <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                      <span className="text-sm font-semibold text-gray-300">{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Keyword struggles block */}
            <div className="glass-morphism rounded-[2rem] border border-white/10 p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-black uppercase italic text-orange-400 tracking-tight mb-6 flex items-center gap-2">
                  <Search className="w-5 h-5" /> Highly Coveted High-Intent Search Queries
                </h3>
                <p className="text-gray-400 text-xs mb-6 font-semibold">
                  Even businesses with excellent products often struggle to appear when customers search for high-volume local or national terms:
                </p>
                <div className="grid grid-cols-2 gap-2.5">
                  {searchTerms.map((term, idx) => (
                    <div key={idx} className="bg-orange-500/5 hover:bg-orange-500/10 border border-orange-500/10 rounded-xl px-4 py-3 flex items-center gap-2.5 transition-colors">
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                      <span className="text-xs font-black uppercase tracking-tight text-white">{term}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/5">
                <p className="text-sm text-gray-400 italic text-center font-bold">
                  "Without a strong SEO strategy, potential customers may never discover your business."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 px-4 md:px-6 bg-gradient-to-b from-[#030712] to-black border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs text-orange-500 font-black tracking-widest uppercase">The Methodology</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mt-2 mb-4">
              Our SEO Solution for Vape Shops
            </h2>
            <p className="text-gray-400 text-sm font-semibold">
              Specialized SEO Strategies Worked Out Specifically for Vape Businesses
            </p>
            <p className="text-gray-500 text-xs mt-3 max-w-xl mx-auto">
              Unlike general marketing agencies, we understand the unique challenges facing vape retailers and vaping brands. Our campaigns focus on building sustainable organic growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreStrategies.map((strategy, index) => {
              const IconComponent = strategy.icon;
              return (
                <div key={index} className="bg-[#0b0f19]/80 border border-white/15 hover:border-orange-500/30 transition-all rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="inline-flex p-4 bg-orange-500/10 rounded-2xl text-orange-500">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-black uppercase italic tracking-tight text-white">{strategy.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed font-medium">{strategy.desc}</p>
                    
                    {strategy.benefits && (
                      <div className="pt-4 space-y-2">
                        <span className="text-[10px] text-gray-500 uppercase font-black tracking-widest block mb-2">Key Outcomes:</span>
                        {strategy.benefits.map((b, i) => (
                          <div key={i} className="flex items-center gap-2.5 text-xs text-gray-300">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full shrink-0" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {strategy.details && (
                      <div className="pt-4 space-y-2">
                        <span className="text-[10px] text-gray-500 uppercase font-black tracking-widest block mb-2">What we optimize:</span>
                        <div className="flex flex-wrap gap-2">
                          {strategy.details.map((d, i) => (
                            <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white font-semibold">
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {strategy.examples && (
                      <div className="pt-4 space-y-2">
                        <span className="text-[10px] text-gray-500 uppercase font-black tracking-widest block mb-2">Authority content topics:</span>
                        <div className="grid grid-cols-2 gap-2 mt-1">
                          {strategy.examples.map((ex, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-gray-400 italic">
                              <span className="text-orange-500 font-bold">✓</span>
                              <span>{ex}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience & Practical Pattern Studies */}
      <section className="py-24 px-4 md:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Narrative & Left block */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs text-orange-500 font-black tracking-widest uppercase">Field Analysis</span>
              <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-[0.9]">
                Real Experience Working with SEO Campaigns
              </h2>
              <p className="text-orange-400 font-bold uppercase tracking-widest text-[10px]">What We Consistently See in Successful Vape Businesses</p>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                After analyzing hundreds of SEO campaigns across competitive industries, several patterns consistently emerge.
                <br /><br />
                The businesses that consistently rank are those that combine technical SEO, content marketing, local SEO, and authority building into a single strategy.
              </p>

              <div className="space-y-3 bg-white/[0.02] border border-white/5 rounded-2xl p-6">
                <span className="text-[10px] text-gray-500 uppercase font-black tracking-wider block">Best Practices Checklist</span>
                {successfulPatterns.map((pat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <span>{pat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Keyword maps right block */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              <div className="bg-[#0b0f19] border border-white/10 rounded-3xl p-6 relative">
                <div className="absolute top-4 right-4 text-[10px] font-black text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">Local Targeting</div>
                <h4 className="text-base font-black italic uppercase text-white mb-4">Local Vape Retailer Keywords</h4>
                <p className="text-xs text-gray-400 mb-4">Focuses on near-me high-intent physical store foot traffic:</p>
                <div className="space-y-2">
                  {localSearches.map((kw, idx) => (
                    <div key={idx} className="p-3 bg-white/[0.03] border border-white/5 rounded-xl text-xs font-bold text-gray-300 italic">
                      "{kw}"
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#0b0f19] border border-white/10 rounded-3xl p-6 relative">
                <div className="absolute top-4 right-4 text-[10px] font-black text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded">E-commerce</div>
                <h4 className="text-base font-black italic uppercase text-white mb-4">E-commerce Vape Keywords</h4>
                <p className="text-xs text-gray-400 mb-4">Focuses on transactional e-commerce category lists:</p>
                <div className="space-y-2">
                  {ecommerceSearches.map((kw, idx) => (
                    <div key={idx} className="p-3 bg-white/[0.03] border border-white/5 rounded-xl text-xs font-bold text-gray-300 italic">
                      "{kw}"
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Grid of Features & Benefits */}
      <section className="py-24 px-4 md:px-6 bg-[#050914] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs text-orange-500 font-black tracking-widest uppercase">The Scope</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mt-2 mb-4">
              Comprehensive Vape SEO Services
            </h2>
            <p className="text-gray-400 text-sm font-semibold">Features & Clear Business Benefits Associated with Our Campaigns</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesGrid.map((svc, i) => (
              <div key={i} className="bg-[#0a0e1a]/80 border border-white/10 rounded-2xl p-6 space-y-4 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-lg font-black uppercase italic text-white tracking-widest">{svc.title}</h3>
                  <div className="text-xs text-orange-400 font-bold uppercase tracking-tight">Feature: {svc.feature}</div>
                  <p className="text-xs text-gray-400 leading-relaxed font-semibold">Benefit: {svc.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Our SEO Expertise */}
      <section className="py-24 px-4 md:px-6 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs text-orange-500 font-black tracking-widest uppercase">Value Driven</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-none mb-4">
              Why Trust Our SEO Expertise?
            </h2>
            <h3 className="text-xl font-bold uppercase text-orange-400 italic">SEO Is More Than Rankings</h3>
            <p className="text-gray-400 text-sm font-semibold">
              Many agencies focus solely on keyword rankings. We focus on business outcomes.
            </p>
            <p className="text-gray-500 text-xs">
              A successful vape SEO campaign should generate:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {trustOutcomes.map((out, idx) => (
                <div key={idx} className="p-3 bg-white/[0.02] border border-white/5 rounded-xl text-center text-xs text-white font-black uppercase tracking-tight">
                  {out}
                </div>
              ))}
            </div>
          </div>

          <div className="glass-morphism rounded-[2.5rem] border border-white/10 p-8 space-y-6">
            <h4 className="text-lg font-black uppercase italic tracking-tight text-white mb-4">Our Core Performance Approach</h4>
            <div className="grid gap-4">
              {trustApproaches.map((app, i) => (
                <div key={i} className="p-4 bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 rounded-xl transition-colors">
                  <div className="text-xs font-black uppercase tracking-wider text-orange-400">{app.title}</div>
                  <p className="text-xs text-gray-400 mt-1">{app.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison: Generic vs Specialized */}
      <section className="py-24 px-4 md:px-6 bg-[#030712] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-center mb-16">
            What Makes Our Vape SEO Services Different?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Generic Column */}
            <div className="bg-[#0b101c]/40 border border-white/10 rounded-3xl p-8 opacity-60">
              <h3 className="text-xl font-black uppercase italic text-gray-400 mb-6 pb-4 border-b border-white/5 flex justify-between items-center">
                <span>Generic SEO Agency</span>
                <XCircle className="w-5 h-5 text-gray-500" />
              </h3>
              <div className="space-y-4">
                <p className="text-xs font-semibold text-gray-400 flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full shrink-0" />
                  Limited vaping industry knowledge
                </p>
                <p className="text-xs font-semibold text-gray-400 flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full shrink-0" />
                  Generic keyword targeting
                </p>
                <p className="text-xs font-semibold text-gray-400 flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full shrink-0" />
                  Broad content strategies
                </p>
                <p className="text-xs font-semibold text-gray-400 flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full shrink-0" />
                  One-size-fits-all campaigns
                </p>
              </div>
            </div>

            {/* Specialized Column */}
            <div className="bg-[#0b101c] border-2 border-orange-500/30 rounded-3xl p-8 shadow-[0_20px_40px_-15px_rgba(249,115,22,0.15)] relative">
              <div className="absolute top-0 right-10 -translate-y-1/2 px-4 py-1.5 bg-orange-500 text-black text-[9px] font-black uppercase tracking-widest rounded-full">Highly Recommended</div>
              
              <h3 className="text-xl font-black uppercase italic text-orange-500 mb-6 pb-4 border-b border-orange-500/10 flex justify-between items-center">
                <span>Specialized Vape SEO Company</span>
                <CheckCircle2 className="w-5 h-5 text-orange-500" />
              </h3>
              <div className="space-y-4">
                <p className="text-xs font-black text-white flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full shrink-0" />
                  Deep understanding of vape search behavior
                </p>
                <p className="text-xs font-black text-white flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full shrink-0" />
                  Industry-specific keyword research
                </p>
                <p className="text-xs font-black text-white flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full shrink-0" />
                  Vape-focused content planning
                </p>
                <p className="text-xs font-black text-white flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full shrink-0" />
                  Local and ecommerce SEO expertise
                </p>
                <p className="text-xs font-black text-white flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full shrink-0" />
                  Strategies built around industry advertising limitations
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="text-sm font-bold text-gray-400">
              The difference is understanding not just SEO, but how vape customers search, compare products, and make purchasing decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-24 px-4 md:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs text-orange-500 font-black tracking-widest uppercase">Transparency</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mt-2 mb-4">
              Trust Signals & Client Values
            </h2>
            <p className="text-gray-400 text-sm font-semibold">What Clients Value Most in Our Partnerships</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {valuePillars.map((p, i) => (
              <div key={i} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                <div className="text-sm font-black text-orange-400 uppercase tracking-tight mb-2">{p.title}</div>
                <p className="text-xs text-gray-400 font-medium leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Feedback Quotes */}
          <div className="grid md:grid-cols-3 gap-6 pb-12 border-b border-white/5">
            {clientFeedback.map((quote, idx) => (
              <div key={idx} className="p-6 bg-[#0c101d] border border-white/10 rounded-2xl relative flex flex-col justify-between">
                <p className="text-xs font-bold text-gray-300 italic mb-4">
                  "{quote}"
                </p>
                <div className="text-[10px] text-orange-400 font-black uppercase tracking-widest">Verified Client Feedback</div>
              </div>
            ))}
          </div>

          {/* Core Commitment */}
          <div className="mt-12 text-center max-w-2xl mx-auto bg-gradient-to-r from-orange-500/10 to-blue-500/5 border border-white/10 p-8 rounded-3xl">
            <h4 className="text-sm font-black uppercase tracking-wide text-orange-400 mb-3 block">Our Commitment</h4>
            <p className="text-gray-400 text-xs mb-4 leading-relaxed font-medium">
              While no SEO company can guarantee specific rankings (as search algorithms are constantly evolving), we guarantee our clients:
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
              {ourCommitment.map((comm, idx) => (
                <div key={idx} className="text-xs font-black text-white flex items-center gap-1.5 uppercase tracking-tighter">
                  <span className="text-orange-500">✓</span> {comm}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-24 px-4 md:px-6 bg-[#050914] relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs text-orange-500 font-black tracking-widest uppercase">Answers</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mt-2 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 text-sm font-semibold">Clarifying Core Questions about Vape SEO</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="glass-morphism border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 pointer-events-none"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 hover:bg-white/[0.02] transition-colors pointer-events-auto cursor-pointer"
                >
                  <span className="text-sm md:text-base font-black uppercase italic tracking-tight text-white">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-orange-500 shrink-0 transition-transform ${activeFaq === index ? 'rotate-180' : ''}`} />
                </button>
                
                {activeFaq === index && (
                  <div className="px-6 pb-6 pt-2 border-t border-white/5 bg-black/10">
                    <p className="text-sm text-gray-400 leading-relaxed font-semibold">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Conversion call-to-action */}
      <section className="py-24 px-4 md:px-6 relative text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.1),transparent_60%)] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10 glass-morphism rounded-[2.5rem] border border-white/10 p-8 md:p-16">
          <span className="text-[10px] font-black text-orange-400 bg-orange-500/10 px-3 py-1.5 rounded-full uppercase tracking-widest block mb-4 w-fit mx-auto">
            Ignite Your Traffic Strategy
          </span>
          <h2 className="text-3xl md:text-6xl font-black uppercase italic tracking-tighter mb-6 leading-none">
            Ready to Grow Your Vape Shop?
          </h2>
          <p className="text-sm md:text-lg text-gray-300 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
            Whether you're running a local vape store, an online vape retailer, or a multi-location vaping business, a strategic SEO campaign can help you attract more customers and generate consistent growth. 
            <br />
            <span className="text-orange-400 block mt-3 font-black uppercase italic text-xs md:text-sm tracking-widest">
              Stop relying solely on paid channels and start building a sustainable source of qualified traffic.
            </span>
          </p>

          <button
            onClick={onBook}
            className="px-10 py-5 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-black uppercase italic tracking-tight text-base md:text-lg rounded-2xl transition-all shadow-2xl shadow-orange-500/40 hover:scale-[1.02] flex items-center justify-center gap-3 mx-auto cursor-pointer"
          >
            <span>Book Your Free Vape SEO Strategy Session</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default VapeShopSEOList;
