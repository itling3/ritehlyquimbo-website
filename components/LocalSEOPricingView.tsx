
import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Check, Calendar, FileText, BarChart3, MapPin, Search, Users } from 'lucide-react';
import SEO from './SEO';

interface LocalSEOPricingViewProps {
  onBack: () => void;
  onBook: () => void;
  onForm?: () => void;
}

const LocalSEOPricingView: React.FC<LocalSEOPricingViewProps> = ({ onBack, onBook, onForm }) => {
  const tiers = [
    {
      name: "Local Foundation",
      subtitle: "Basic",
      bestFor: "Single-location businesses in low-to-medium competition niches.",
      price: "$750 – $1,250",
      features: [
        "GBP Weekly updates & photo optimization",
        "Q&A management for profile trust",
        "TAP/NAP cleanup (20 directories)",
        "Review acquisition strategy setup",
        "Automated review responses",
        "On-Page SEO for 3-5 geo-keywords",
        "Monthly Map Pack ranking tracking",
        "Call & direction conversion data"
      ],
      color: "border-gray-500/30"
    },
    {
      name: "Market Leader",
      subtitle: "Standard",
      bestFor: "Competitive niches (Law, HVAC, Dental) city dominance.",
      price: "$1,500 – $3,000",
      isPopular: true,
      features: [
        "Everything in Local Foundation",
        "Geo-targeted service area optimization",
        "Competitor 'Spam Fighting' reports",
        "2 High-authority local blog posts/mo",
        "Schema (LocalBusiness, Review, FAQ)",
        "2 Local backlinks per month",
        "Core Web Vitals monitoring",
        "Advanced city-level dominance strategy"
      ],
      color: "border-blue-500/50"
    },
    {
      name: "Multi-Location",
      subtitle: "Enterprise",
      bestFor: "Businesses with 5+ locations or wide region targets.",
      price: "$4,500+",
      features: [
        "Everything in Market Leader",
        "Multi-location gap analysis",
        "Programmatic location landing pages",
        "Aggregator feed management",
        "Foursquare & Data Axle syndication",
        "Cross-location reputation analysis",
        "Per-location performance breakdowns",
        "Dedicated strategic accounts' lead"
      ],
      color: "border-purple-500/30"
    }
  ];

  const projects = [
    { name: "Local SEO Audit", fee: "$1,200 – $2,000", deliverable: "Deep dive into GBP, Citations, Tech & Competitors" },
    { name: "GBP Recovery", fee: "$600 – $1,000", deliverable: "Solving suspensions and reclaiming ownership" },
    { name: "Citation Burst", fee: "$500 – $800", deliverable: "50+ high-quality local citations in 30 days" },
    { name: "Schema Injection", fee: "$400 – $750", deliverable: "Full implementation of local-specific JSON-LD" }
  ];

  return (
    <div className="min-h-screen bg-[#030712] pt-32 pb-20 px-4 md:px-6">
      <SEO 
        title="Local SEO Pricing | Dominate Your City Rankings | Ritehly Quimbo" 
        description="Transparent local SEO pricing tiers designed to help your business dominate the local map pack and search results." 
      />
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-black uppercase tracking-widest italic">Return to growth</span>
        </button>

        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter mb-6 leading-none">
            Local SEO <span className="text-blue-500">Pricing</span> Tiers
          </h1>
          <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Dominate your city and take the #1 spot in the local map pack with our specialized local growth systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative glass-morphism p-8 md:p-10 rounded-[2.5rem] border ${tier.color} flex flex-col h-full group hover:shadow-2xl hover:shadow-blue-500/5 transition-all`}
            >
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg shadow-blue-500/30 italic">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-black text-white uppercase italic tracking-tight mb-1">{tier.name}</h3>
                <span className="text-[10px] text-blue-500 font-bold uppercase tracking-widest">{tier.subtitle}</span>
              </div>

              <div className="mb-8">
                <div className="text-3xl font-black text-white italic mb-2 tracking-tighter">{tier.price}</div>
                <div className="text-[10px] text-gray-400 font-medium leading-tight">
                  <span className="text-white">Best for:</span> {tier.bestFor}
                </div>
              </div>

              <div className="space-y-4 mb-10 flex-1">
                {tier.features.map((feature, j) => (
                  <div key={j} className="flex gap-3">
                    <Check className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                    <span className="text-xs text-gray-300 font-medium leading-tight">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={onBook}
                className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-[11px] italic transition-all active:scale-[0.98] ${
                  tier.isPopular 
                    ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-500/20' 
                    : 'bg-white/10 hover:bg-white/15 text-white'
                }`}
              >
                Schedule {tier.subtitle} Growth
              </button>
              <button 
                onClick={onForm}
                className="mt-4 text-[9px] text-gray-500 hover:text-blue-400 font-black uppercase tracking-[0.2em] transition-all text-center"
              >
                Quick Inquiry (Google Form)
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mb-24">
          <h2 className="text-2xl md:text-4xl font-black text-white uppercase italic tracking-tighter mb-12 text-center md:text-left">
            One-Time <span className="text-blue-500">Local SEO</span> Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-morphism p-8 rounded-3xl border border-white/5 group hover:border-blue-500/20 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div>
                  <h4 className="text-lg font-black text-white uppercase italic tracking-tight mb-2 group-hover:text-blue-400 transition-colors">
                    {project.name}
                  </h4>
                  <p className="text-xs text-gray-500 font-medium">{project.deliverable}</p>
                </div>
                <div className="flex items-center gap-6 shrink-0">
                  <span className="text-xl font-black text-white italic tracking-tighter">{project.fee}</span>
                  <button 
                    onClick={onBook}
                    className="p-3 bg-white/5 hover:bg-blue-600 rounded-xl text-blue-500 hover:text-white transition-all group/btn"
                  >
                    <Calendar className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-10 md:p-16 glass-morphism rounded-[3rem] border border-white/10 relative overflow-hidden text-center"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-6">
              Ready to <span className="text-blue-500">Dominate</span> Your Area?
            </h2>
            <p className="text-gray-400 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
              Don't let competitors take your customers. Start your Local SEO dominance plan today and lock in your geographic territory.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={onBook}
                className="px-10 py-6 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl uppercase tracking-widest text-sm italic shadow-2xl hover:scale-[1.05] transition-all active:scale-[0.95]"
              >
                Schedule Local Session
              </button>
              <button 
                onClick={onForm}
                className="px-10 py-6 bg-white/5 hover:bg-white/10 text-white font-black rounded-2xl uppercase tracking-widest text-sm italic transition-all active:scale-[0.95] border border-white/10"
              >
                Submit Inquiry Form
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LocalSEOPricingView;
