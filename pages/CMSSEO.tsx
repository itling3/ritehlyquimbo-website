
import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Zap, Shield, Search, Layout } from 'lucide-react';
import { SERVICES, SERVICE_DETAILS } from '../constants';
import SectionCTA from '../components/SectionCTA';

const CMSSEOPage: React.FC = () => {
  // Extract CMS services from the SERVICES array
  const cmsServices = SERVICES.slice(12, 23);

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <Helmet>
        <title>CMS SEO Expert Services — WordPress, Shopify, Headless & More</title>
        <meta name="description" content="Specialized SEO experts for every major CMS. We optimize WordPress, Shopify, Drupal, and Headless platforms like Contentful and Storyblok for maximum rankings." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-white border-b border-slate-200">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-sm font-medium mb-6"
            >
              <Layout size={14} />
              <span>Platform-Specific Search Dominance</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight"
            >
              CMS SEO Expert Solutions for <br className="hidden md:block" />
              <span className="text-orange-600">Every Platform</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 mb-10 leading-relaxed"
            >
              Generic SEO doesn't work for specific platforms. We bridge the gap between technical CMS architecture and search engine dominance.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'CMS Platforms', value: '11+' },
              { label: 'Technical Audits', value: '500+' },
              { label: 'Rankings Improved', value: '10K+' },
              { label: 'CMS Specialists', value: 'Elite' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cmsServices.map((service, idx) => {
              const details = SERVICE_DETAILS[service.id];
              const targetUrl = details?.permalink || `/services/cms-seo/${service.id}-expert`;
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    to={targetUrl}
                    className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 flex flex-col h-full"
                  >
                    <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center text-orange-600 font-semibold group-hover:gap-2 transition-all">
                      <span>Explore Service</span>
                      <ArrowRight size={18} className="ml-2" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Platform Specific Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-600 opacity-20 blur-[120px] rounded-full translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                Why Choose a <span className="text-orange-500">Platform-Specific</span> SEO Expert?
              </h2>
              <p className="text-xl text-slate-300 mb-12">
                A one-size-fits-all SEO approach ignores the unique technical constraints and opportunities of your CMS.
              </p>
              
              <div className="space-y-8">
                {[
                  { 
                    icon: <Globe className="text-orange-500" />, 
                    title: "Technical Native Optimization", 
                    desc: "We understand sitemaps, robots.txt, and URL structures at the core level for each CMS." 
                  },
                  { 
                    icon: <Zap className="text-orange-500" />, 
                    title: "Core Web Vitals Engineering", 
                    desc: "Every CMS has different performance bottlenecks. We know exactly how to hit green scores on yours." 
                  },
                  { 
                    icon: <Shield className="text-orange-500" />, 
                    title: "Security Hardened SEO", 
                    desc: "We don't just optimize for bots; we ensure your platform is secure and ranks for the long term." 
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Search className="text-orange-500" />
                CMS SEO Audit Highlights
              </h3>
              <div className="space-y-4">
                {[
                  "Database indexing efficiency review",
                  "Plugin/Extension bloat analysis",
                  "Platform-specific Schema implementation",
                  "Headless API delivery optimization",
                  "Theme/Template code cleanup",
                  "Internal linking silo architecture"
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3 py-3 border-b border-slate-700 last:border-0">
                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                    <span className="text-slate-300">{point}</span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-10 py-4 bg-orange-600 hover:bg-orange-700 rounded-xl font-bold transition-all shadow-lg shadow-orange-600/20">
                Get Your CMS SEO Audit
              </button>
            </div>
          </div>
        </div>
      </section>

      <SectionCTA 
        title="Ready to Dominate Your Platform's niche?"
        description="Stop fighting your CMS and start using it as a growth engine. Book your free strategy call today."
        buttonText="Book Your Consultation"
      />
    </div>
  );
};

export default CMSSEOPage;
