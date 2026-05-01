
import React from 'react';
import { motion } from 'motion/react';
import { Check, ChevronLeft, Layout, ShieldCheck, Globe, Cpu, Zap, Settings, ArrowRight, Laptop, Server, Key } from 'lucide-react';
import SEO from './SEO';

interface WebDevPricingViewProps {
  onBack: () => void;
  onBook: () => void;
  onForm?: () => void;
}

const WebDevPricingView: React.FC<WebDevPricingViewProps> = ({ onBack, onBook, onForm }) => {
  const packages = [
    {
      name: "Professional",
      subtitle: "Landing Page",
      ideal: "Lead gen for a single service or Coming Soon phase",
      price: "$800 – $1,200",
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      features: [
        "Custom Elementor Flexbox Layout",
        "Strategic CTA & Lead Form Integration",
        "100% Mobile First Responsive Design",
        "Basic On-Page SEO & Schema",
        "Speed Optimized Image Assets",
        "High PageSpeed Insight Scores"
      ]
    },
    {
      name: "Business",
      subtitle: "Essentials",
      ideal: "Service-based businesses (5–8 pages)",
      price: "$2,500 – $4,500",
      icon: <Globe className="w-6 h-6 text-purple-500" />,
      featured: true,
      features: [
        "Home, About, Services, Contact & Blog",
        "Dynamic Tags & Custom Post Types",
        "Global Styles for Easy Maintenance",
        "Essential Security Headers (HSTS, etc.)",
        "Advanced SEO Schema & Search Console",
        "30-Min Elementor Training Session"
      ]
    },
    {
      name: "Enterprise",
      subtitle: "Multi-Location",
      ideal: "Large-scale sites or 15+ pages",
      price: "$6,000+",
      icon: <Server className="w-6 h-6 text-blue-400" />,
      features: [
        "Scalable City/Service Page Architecture",
        "API & Complex Logic Integrations",
        "CDN Setup & Database Optimization",
        "Enterprise-grade Security Hardening",
        "Dynamic Category/Tag Templates",
        "CRM Syncing & Lead Routing"
      ]
    }
  ];

  const maintenanceTiers = [
    { name: "Core Maintenance", fee: "$150 – $250", features: "Core/Plugin updates, Security monitoring, Weekly backups" },
    { name: "Performance Plus", fee: "$350 – $500", features: "All Core + Speed optimization, Image compression, Monthly Tech Audit" },
    { name: "The Power Duo", fee: "$850 – $1,200", features: "Full Tech Maintenance + Basic Local SEO (GBP & 1 Blog post)" }
  ];

  const specialtyServices = [
    { title: "Core Web Vitals Fix", fee: "$500 – $1,000", desc: "Resolving LCP/CLS issues specifically for Elementor sites.", icon: <Cpu /> },
    { title: "WP Security Hardening", fee: "$400", desc: "Fixing insecure headers and implementing firewalls.", icon: <ShieldCheck /> },
    { title: "CMS Migration", fee: "$1,500+", desc: "Moving from Wix/Squarespace to WP without losing SEO.", icon: <Key /> }
  ];

  return (
    <div className="min-h-screen bg-[#030712] pt-4 md:pt-6 pb-32 px-6">
      <SEO 
        title="WordPress & Elementor Pricing | SEO-Ready Web Engines | Ritehly Quimbo" 
        description="High-performance, secure, and SEO-optimized WordPress web builds using Elementor. See our web development pricing packages for growth-ready sites." 
        keywords="wordpress development pricing, elementor web design cost, seo friendly websites, fast loading wordpress, high performance web engines"
      />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 text-balance">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter italic mb-6"
          >
            WordPress <span className="text-blue-500">& Elementor</span> Dev
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-3xl mx-auto font-medium"
          >
            High-performance, secure, and SEO-optimized web builds designed for growth. I build engines, not just brochures.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-[2rem] border relative flex flex-col ${
                pkg.featured 
                  ? 'bg-blue-600/5 border-blue-500/30 ring-1 ring-blue-500/10' 
                  : 'bg-white/5 border-white/10'
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full italic shadow-xl shadow-blue-600/30">
                  Best for Growth
                </div>
              )}

              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                    {pkg.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest italic">{pkg.subtitle}</div>
                    <div className="text-white font-black uppercase tracking-tighter italic text-xl">{pkg.name}</div>
                  </div>
                </div>
                <div className="text-sm text-gray-400 font-medium mb-6 italic min-h-[40px] leading-snug">{pkg.ideal}</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-white uppercase italic tracking-tighter">{pkg.price}</span>
                </div>
              </div>

              <div className="space-y-4 mb-10 flex-1">
                {pkg.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${pkg.featured ? 'text-blue-500' : 'text-gray-600'}`} />
                    <span className="text-xs text-gray-300 font-medium leading-tight">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={onBook}
                className={`w-full py-5 font-black uppercase tracking-widest text-xs italic rounded-2xl transition-all active:scale-[0.98] ${
                  pkg.featured 
                    ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20' 
                    : 'bg-white/10 hover:bg-white/15 text-white'
                }`}
              >
                Schedule This Build
              </button>
              <button 
                onClick={onForm}
                className="mt-4 text-[9px] text-gray-500 hover:text-blue-400 font-black uppercase tracking-[0.2em] transition-all text-center w-full"
              >
                Quick Inquiry (Form)
              </button>
            </motion.div>
          ))}
        </div>

        {/* Maintenance Table Section */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter italic mb-4">Technical Maintenance <span className="text-blue-500">& SEO Care</span></h2>
            <p className="text-gray-500 text-sm font-medium uppercase tracking-widest">Ongoing engineering support for your digital assets</p>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[800px] glass-morphism rounded-[2rem] border border-white/10 overflow-hidden">
               <table className="w-full text-left border-collapse">
                 <thead>
                   <tr className="bg-white/5 border-b border-white/10">
                     <th className="p-8 text-xs font-black text-white uppercase tracking-widest italic">Tier</th>
                     <th className="p-8 text-xs font-black text-white uppercase tracking-widest italic">Services Included</th>
                     <th className="p-8 text-xs font-black text-white uppercase tracking-widest italic text-right">Monthly Fee</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-white/5">
                    {maintenanceTiers.map((tier, i) => (
                      <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                        <td className="p-8">
                          <div className="font-black text-white uppercase italic tracking-tight">{tier.name}</div>
                        </td>
                        <td className="p-8">
                          <div className="text-gray-400 text-xs font-medium leading-relaxed">{tier.features}</div>
                        </td>
                        <td className="p-8 text-right">
                          <div className="text-blue-500 font-black uppercase tracking-widest italic">{tier.fee}</div>
                        </td>
                      </tr>
                    ))}
                 </tbody>
               </table>
            </div>
          </div>
        </div>

        {/* Specialty Services Section */}
        <div className="space-y-12 mb-20">
          <div className="text-center">
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter italic mb-4">The <span className="text-blue-500">Expert Edge</span> Primitives</h2>
            <p className="text-gray-500 text-sm font-medium uppercase tracking-widest italic">Standalone tactical fixes for established sites</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {specialtyServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-blue-500/30 transition-all group"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all text-gray-400 group-hover:text-blue-500">
                    {service.icon && React.isValidElement(service.icon) ? React.cloneElement(service.icon as React.ReactElement<any>, { className: "w-6 h-6" }) : null}
                  </div>
                  <div className="text-right">
                    <div className="text-blue-500 font-black uppercase tracking-widest text-[10px] italic">Standalone Fix</div>
                    <div className="text-white text-xs font-black uppercase tracking-tight italic mt-1">{service.fee}</div>
                  </div>
                </div>
                <h3 className="text-lg font-black text-white uppercase italic tracking-tight mb-3">{service.title}</h3>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-12 md:p-16 bg-white/5 border border-blue-500/20 rounded-[3rem] text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full -mr-32 -mt-32"></div>
          <div className="max-w-2xl mx-auto relative z-10">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter italic mb-6">Need a <span className="text-blue-500">Custom Tool</span> or Plugin?</h2>
            <p className="text-gray-400 font-medium mb-10 leading-relaxed">
              Beyond simple themes, I develop custom Elementor add-ons, CRM connectors, and AI-driven automation for enterprise WordPress instances.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={onBook}
                className="px-8 py-5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl uppercase tracking-widest text-xs italic transition-all shadow-xl shadow-blue-500/20"
              >
                Schedule Custom Dev Call
              </button>
              <button 
                onClick={onForm}
                className="text-xs font-black text-gray-600 hover:text-white uppercase tracking-widest italic transition-colors"
                title="Google Form"
              >
                Submit Request Form
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WebDevPricingView;
