
import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Check, TrendingUp, Target, Rocket, ShieldCheck, Microscope, LineChart, Zap, Search, MousePointerClick } from 'lucide-react';
import SEO from './SEO';

interface SEMPricingViewProps {
  onBack: () => void;
  onBook: () => void;
}

const SEMPricingView: React.FC<SEMPricingViewProps> = ({ onBack, onBook }) => {
  const retainers = [
    {
      type: "Local / Small Biz",
      price: "$500 – $1,250",
      description: "Ideal for single-location businesses or service providers starting their growth journey.",
      features: [
        "Management of 1–2 campaigns",
        "Keyword Research & Bidding",
        "Basic monthly reporting",
        "Conversion tracking setup",
        "Negative keyword filtering"
      ],
      icon: <Target className="w-6 h-6 text-blue-500" />
    },
    {
      type: "Growth / Mid-Market",
      price: "$1,500 – $3,500",
      isPopular: true,
      description: "Comprehensive multi-channel approach for businesses ready to scale rapidly.",
      features: [
        "Multi-campaign (Search + PMax)",
        "Advanced A/B testing",
        "Landing page audits & CRO",
        "Weekly performance optimization",
        "Audience segment building",
        "Competitor analysis reports"
      ],
      icon: <TrendingUp className="w-6 h-6 text-purple-500" />
    },
    {
      type: "Enterprise / Multi-Loc",
      price: "$4,000 – $10,000+",
      description: "Elite management for high-volume accounts and complex business structures.",
      features: [
        "Multi-location management",
        "CRM & Backend integration",
        "Advanced AI bidding scripts",
        "High-volume asset testing",
        "Dedicated account manager",
        "Custom Looker Studio dashboards"
      ],
      icon: <ShieldCheck className="w-6 h-6 text-blue-400" />
    }
  ];

  const oneTimeProjects = [
    {
      title: "One-Time Account Audit",
      price: "$500 – $1,500",
      description: "A deep-dive 'health check' to find wasted spend and tracking errors. Perfect for checking existing agency work.",
      icon: <Microscope className="w-5 h-5 text-blue-500" />
    },
    {
      title: "Conversion Tracking Setup",
      price: "$300 – $800",
      description: "Essential GTM/GA4 setup including server-side tracking and 'Enhanced Conversions' for 2026 standards.",
      icon: <Zap className="w-5 h-5 text-purple-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712] pt-4 md:pt-6 pb-20 px-4 md:px-6">
      <SEO 
        title="Google Ads Pricing | Immediate Demand Capture | Ritehly Quimbo" 
        description="Accelerate your growth with precision managed Google Ads. View our ROI-focused PPC management pricing and immediate demand capture strategies." 
        keywords="google ads management, ppc pricing, sem services, roi focused ads, google ads cost, marketing performance, search engine ads"
      />
      <div className="max-w-7xl mx-auto">
        <motion.button 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-black uppercase tracking-widest italic">Return to home</span>
        </motion.button>

        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter mb-6 leading-none"
          >
            Google Ads <span className="text-blue-500">SEM Pricing</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto font-medium leading-relaxed"
          >
            Precision-targeted campaigns designed for scale. We don't just buy clicks; we acquire customers with surgical accuracy.
          </motion.p>
        </div>

        {/* Retainers Section */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/5 pb-8">
            <div>
              <h2 className="text-2xl md:text-4xl font-black text-white uppercase italic tracking-tighter mb-2">
                1. Professional <span className="text-blue-500">Management</span>
              </h2>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest leading-none">Monthly Retainers • Continuous Optimization</p>
            </div>
            <div className="bg-blue-600/10 border border-blue-500/20 px-4 py-2 rounded-xl">
              <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.2em] italic">Budgets &gt; $10k/mo: 10-20% Ad Spend</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {retainers.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                className={`relative glass-morphism p-8 md:p-10 rounded-[2.5rem] border flex flex-col h-full group transition-all ${
                  plan.isPopular ? 'border-blue-500/50 bg-blue-600/5' : 'border-white/5'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg shadow-blue-500/30 italic">
                    Most Selected
                  </div>
                )}

                <div className="mb-8 flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-black text-white uppercase italic tracking-tight mb-1">{plan.type}</h3>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-tight">{plan.description}</p>
                  </div>
                  <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform">
                    {plan.icon}
                  </div>
                </div>

                <div className="mb-8">
                  <div className="text-3xl font-black text-white italic mb-1 tracking-tighter">{plan.price}</div>
                  <div className="text-[10px] text-blue-500 font-black uppercase tracking-widest">Fixed Monthly Fee</div>
                </div>

                <div className="space-y-4 mb-10 flex-1">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex gap-3">
                      <Check className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                      <span className="text-xs text-gray-300 font-medium leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={onBook}
                  className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-[11px] italic transition-all active:scale-[0.98] ${
                    plan.isPopular 
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-500/20' 
                      : 'bg-white/10 hover:bg-white/15 text-white'
                  }`}
                >
                  Apply for Growth Plan
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Project Section */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/5 pb-8">
            <div>
              <h2 className="text-2xl md:text-4xl font-black text-white uppercase italic tracking-tighter mb-2">
                2. Project & <span className="text-blue-500">Hourly</span> Rates
              </h2>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest leading-none italic">One-off audits • consulting • technical setups</p>
            </div>
            <div className="bg-white/5 px-4 py-2 rounded-xl flex items-center gap-2">
              <Search className="w-3 h-3 text-blue-500" />
              <span className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] italic">Search Intelligence Specialists</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {oneTimeProjects.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="p-10 glass-morphism rounded-[3rem] border border-white/5 hover:border-blue-500/30 transition-all group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white uppercase italic tracking-tight">{item.title}</h3>
                    <div className="text-blue-500 text-lg font-black italic tracking-tighter">{item.price}</div>
                  </div>
                </div>
                <p className="text-sm text-gray-400 font-medium leading-relaxed mb-8">
                  {item.description}
                </p>
                <button 
                  onClick={onBook}
                  className="px-8 py-4 bg-white/10 hover:bg-blue-500 text-white font-black rounded-xl uppercase tracking-widest text-[10px] italic transition-all group-hover:shadow-lg group-hover:shadow-blue-500/20"
                >
                  Book One-Time Task →
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-10 glass-morphism rounded-[3rem] border border-blue-500/40 bg-blue-600/5 text-center"
          >
            <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-4">Consulting <span className="text-blue-500">Hourly Rate</span></h3>
            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
              <div className="space-y-1">
                <div className="text-gray-500 text-[10px] font-black uppercase tracking-widest italic">International Market</div>
                <div className="text-3xl font-black text-white italic tracking-tighter">$100 – $250 / hr</div>
              </div>
              <div className="w-px h-full bg-white/10 hidden md:block"></div>
              <div className="space-y-1">
                <div className="text-gray-500 text-[10px] font-black uppercase tracking-widest italic tracking-tighter">Philippines Market (Senior)</div>
                <div className="text-3xl font-black text-blue-500 italic tracking-tighter">₱1,700 – ₱3,500 / hr</div>
              </div>
            </div>
            <p className="text-gray-400 text-[11px] font-medium mt-8 max-w-xl mx-auto italic">
              Leverage 30 years of multidisciplinary expertise. Rates are based on market location and scope complexity.
            </p>
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {[
            { title: "No Wasted Spend", desc: "Negative keyword sculpting ensures every peso/dollar goes to high-intent buyers." },
            { title: "PMax Mastery", desc: "Optimized Performance Max asset groups that actually convert across YouTube and Gmail." },
            { title: "2026 Standards", desc: "Server-side GTM tracking to bypass cookie restrictions and recover attribution data." },
            { title: "ROI Driven", desc: "We focus on Quality Scores to reduce CPC and maximize your total conversion volume." }
          ].map((item, i) => (
            <div key={i} className="p-8 glass-morphism rounded-3xl border border-white/5 hover:border-blue-500/20 transition-all">
              <h4 className="text-white font-black uppercase italic tracking-tight mb-2 text-xs">{item.title}</h4>
              <p className="text-[10px] text-gray-500 font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="p-10 md:p-16 glass-morphism rounded-[3rem] border border-white/10 relative overflow-hidden text-center"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-blue-600/5 blur-[120px] rounded-full -z-10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-6 leading-tight">
              Ready to <span className="text-blue-500">Dominate</span> the Search?
            </h2>
            <p className="text-gray-400 font-medium mb-10 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
              Whether you need a one-time audit or high-scale monthly management, we build the engine that fuels your revenue growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={onBook}
                className="px-10 py-6 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl uppercase tracking-widest text-sm italic shadow-2xl hover:scale-[1.05] transition-all active:scale-[0.95] flex items-center justify-center gap-2"
              >
                 <Rocket className="w-4 h-4" /> Schedule Strategy Call
              </button>
              <button 
                onClick={() => window.location.href = "mailto:Ritehlyquimbo@gmail.com"}
                className="px-10 py-6 bg-white/5 hover:bg-white/10 text-white font-black rounded-2xl uppercase tracking-widest text-sm italic transition-all active:scale-[0.95] border border-white/10 flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4 text-blue-500" /> Custom Project Brief
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SEMPricingView;
