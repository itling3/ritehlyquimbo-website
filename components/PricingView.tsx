
import React from 'react';
import { motion } from 'motion/react';
import SEO from './SEO';
import { Check, ChevronLeft, Zap, Target, TrendingUp, BarChart3, Clock, Layout, RefreshCw, Smartphone } from 'lucide-react';

interface PricingViewProps {
  onBack: () => void;
  onBook: () => void;
  onForm?: () => void;
}

const PricingView: React.FC<PricingViewProps> = ({ onBack, onBook, onForm }) => {
  const plans = [
    {
      name: "Local Growth",
      subtitle: "Starter",
      ideal: "Single-location service businesses",
      price: "$800 – $1,500",
      period: "/ month",
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      color: "blue",
      features: [
        "Full GBP Optimization & Weekly Posts",
        "20+ Top-tier Local Citations",
        "5-10 Core Service Pages On-Page",
        "2 Locally-optimized Blog Posts",
        "Quarterly Technical Health Checks",
        "Monthly Performance Dashboard"
      ]
    },
    {
      name: "Multi-Location",
      subtitle: "Growth",
      ideal: "Businesses with 2-5 locations",
      price: "$2,000 – $4,500",
      period: "/ month",
      icon: <TrendingUp className="w-6 h-6 text-purple-500" />,
      color: "purple",
      featured: true,
      features: [
        "Advanced GBP Management",
        "4-6 Authoritative Content Assets",
        "2-4 Niche-relevant Backlinks",
        "Full Technical & Schema Management",
        "AI Search Optimization (GEO)",
        "Bi-weekly Strategy Deep-dives"
      ]
    },
    {
      name: "Programmatic",
      subtitle: "Enterprise",
      ideal: "National brands & E-commerce",
      price: "$5,000+",
      period: "/ month",
      icon: <Target className="w-6 h-6 text-blue-400" />,
      color: "white",
      features: [
        "Large-scale programmatic SEO",
        "Advanced Infrastructure Architecture",
        "10+ Human-refined Content Assets",
        "High-authority Digital PR",
        "Full CRO & Heatmap Analysis",
        "Dedicated Account Management"
      ]
    }
  ];

  const addons = [
    { title: "Comprehensive SEO Audit", desc: "Technical, On-Page, and Competitor gaps", fee: "$1,500 – $3,500", icon: <BarChart3 /> },
    { title: "GBP Recovery/Setup", desc: "Reclaiming or ground-up setup", fee: "$500 – $1,000", icon: <RefreshCw /> },
    { title: "Website Migration", desc: "SEO safety during CMS/Domain change", fee: "$2,500 – $7,000", icon: <Layout /> },
    { title: "Hourly Consulting", desc: "High-level troubleshooting", fee: "$150 – $300 / hr", icon: <Clock /> }
  ];

  return (
    <div className="min-h-screen bg-[#030712] pt-4 md:pt-6 pb-32 px-6">
      <SEO 
        title="SEO Pricing Blueprints | Scalable ROI Strategies | Ritehly Quimbo" 
        description="Transparent SEO pricing for any business size. Choose from Local Growth, Multi-Location, or Enterprise Programmatic blueprints with Ritehly Quimbo." 
        keywords="seo pricing, seo packages, affordable seo services, local seo cost, enterprise seo price, monthly seo retainer, digital marketing rates"
      />
      <div className="max-w-7xl mx-auto">
        <motion.button 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 group"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-black uppercase tracking-widest text-xs italic">Back to Home</span>
        </motion.button>

        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter italic mb-6"
          >
            Scalable <span className="text-blue-500">SEO Packaging</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto font-medium"
          >
            No cookie-cutter plans. Only aggressive, growth-oriented SEO strategies mapped to your business size and revenue goals.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-[2rem] border relative flex flex-col ${
                plan.featured 
                  ? 'bg-blue-600/5 border-blue-500/30 ring-1 ring-blue-500/10' 
                  : 'bg-white/5 border-white/10'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full italic shadow-xl shadow-blue-600/30">
                  Most Recommended
                </div>
              )}

              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                    {plan.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest italic">{plan.subtitle}</div>
                    <div className="text-white font-black uppercase tracking-tighter italic">{plan.name}</div>
                  </div>
                </div>
                <div className="text-sm text-gray-400 font-medium mb-6 italic">{plan.ideal}</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-white uppercase italic tracking-tighter">{plan.price}</span>
                  <span className="text-gray-500 font-bold text-xs uppercase italic tracking-widest">{plan.period}</span>
                </div>
              </div>

              <div className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.featured ? 'text-blue-500' : 'text-gray-600'}`} />
                    <span className="text-xs text-gray-300 font-medium leading-tight">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={onBook}
                className={`w-full py-5 font-black uppercase tracking-widest text-xs italic rounded-2xl transition-all active:scale-[0.98] ${
                  plan.featured 
                    ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20' 
                    : 'bg-white/10 hover:bg-white/15 text-white'
                }`}
              >
                Schedule {plan.subtitle} Blueprint
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

        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter italic mb-4">Add-On & Specialty <span className="text-blue-500">Services</span></h2>
            <p className="text-gray-500 text-sm font-medium uppercase tracking-widest">Immediate tactical support for non-retainer clients</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {addons.map((addon, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + (i * 0.1) }}
                className="p-6 bg-white/5 border border-white/10 rounded-3xl hover:border-blue-500/30 transition-all hover:translate-y-[-4px] group"
              >
                <div className="flex items-center gap-4 mb-4 text-gray-400 group-hover:text-blue-500 transition-colors">
                  <div className="bg-white/5 p-2 rounded-lg border border-white/5">
                    {React.cloneElement(addon.icon as React.ReactElement, { className: "w-5 h-5 cursor-default" })}
                  </div>
                  <h3 className="font-black text-white text-xs uppercase italic tracking-tight">{addon.title}</h3>
                </div>
                <p className="text-[11px] text-gray-500 font-medium mb-4 leading-relaxed">{addon.desc}</p>
                <div className="text-xs font-black text-blue-500 uppercase tracking-widest italic">{addon.fee}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-24 p-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] text-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter italic mb-6">Need a Custom <span className="text-black/30">Enterprise</span> Quote?</h2>
            <p className="text-white/80 font-medium mb-10 leading-relaxed">
              If your site has 10,000+ pages or requires international SEO across multiple languages, let's build a programmatic blueprint specifically for your architecture.
            </p>
            <button 
              onClick={onBook}
              className="px-10 py-6 bg-white text-blue-600 font-black rounded-2xl uppercase tracking-widest text-sm italic shadow-2xl hover:scale-[1.05] transition-all active:scale-[0.95]"
            >
              Start Enterprise Session
            </button>
            <button 
              onClick={onForm}
              className="mt-4 block w-full text-[10px] text-white/40 hover:text-white font-black uppercase tracking-widest transition-all italic"
            >
              Or Submit Detailed Form →
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingView;
