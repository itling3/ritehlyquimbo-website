import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  MapPin, 
  Users, 
  Search, 
  HelpCircle, 
  ArrowRight, 
  Star, 
  ChevronDown, 
  Globe, 
  BarChart3, 
  CheckCircle2, 
  ShieldCheck, 
  FileText,
  BadgeAlert,
  Sparkles,
  DollarSign
} from 'lucide-react';
import SEO from '../components/SEO';

interface FinancialAdvisorSEOProps {
  onBook: (e?: React.MouseEvent) => void;
}

const FinancialAdvisorSEOPage: React.FC<FinancialAdvisorSEOProps> = ({ onBook }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden font-sans pt-12">
      <SEO 
        title="SEO Services for Financial Advisors | Wealth Manager SEO Agency"
        description="Rank higher, build digital authority, and generate high-net-worth client inquiries with expert white-hat SEO campaigns tailored for financial planners."
        keywords="seo services for financial advisors, wealth management seo, fiduciary advisor local search, retirement planner seo marketing"
      />

      {/* Hero Section */}
      <section className="relative pt-12 md:pt-16 lg:pt-20 pb-24 px-4 md:px-6 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(16,185,129,0.1),transparent_70%)] pointer-events-none"></div>
        <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" /> High-Net-Worth Lead Generation
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              SEO Services for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-250">Financial Advisors</span> & Wealth Planners
            </h1>
            
            <p className="text-lg sm:text-xl font-bold text-gray-200">
              Build Digital Trust & Attract Qualified Clients Automatically
            </p>
            
            <p className="text-sm text-gray-300">
              If you’re looking to scale your assets under management (AUM) and gain visibility over competitors, our tailored fiduciary financial SEO structures are built for your exact specialized audience.
            </p>

            <div className="space-y-4 text-gray-400 text-sm md:text-base leading-relaxed">
              <p>
                In the advisory world, trust is everything. Homeowners, pre-retirees, and corporate executives turning to Google for wealth management expect to find experienced fiduciaries. If your firm lies hidden below the top organic clusters, you are conceding premium clients to local rival institutions daily.
              </p>
              <p>
                Whether you operate a boutique independent planning office or a multi-advisor investment firm, our expert SEO campaigns secure top-tier organic exposure, drive genuine form bookings, and establish unparalleled reputation parameters.
              </p>
            </div>

            <div className="pt-4">
              <button 
                onClick={onBook}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-black bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-555 hover:to-teal-400 font-black tracking-wide shadow-lg shadow-emerald-500/20 transition-all duration-300 group hover:scale-[1.02]"
              >
                Schedule Your Free SEO Strategy Planning Session
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
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent rounded-3xl blur-2xl"></div>
            <div className="relative glass-morphism border border-white/5 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl">
              <div className="h-2 w-20 bg-emerald-400 rounded-full"></div>
              <h3 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                <ShieldCheck className="text-emerald-400 w-5 h-5" /> Local Fiduciary Domination
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Maximize visibility for long-tail search structures like "Fiduciary wealth advisor near me" or "Retirement planning specialist city-name". Start capturing active investors.
              </p>
              
              <div className="pt-4 space-y-3">
                <button 
                  onClick={onBook}
                  className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-500 hover:to-teal-605 text-black font-black transition-all text-xs uppercase tracking-wider"
                >
                  Book Assessment
                </button>
                <div className="text-center text-[10px] text-gray-500">
                  Targeting national coordinates? Check our{' '}
                  <Link to="/pricing/local-seo-strategy" className="text-blue-400 underline font-bold hover:text-blue-300">
                    Local SEO Strategy Package
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              The Reality: Why Wealth Planners Fall Behind
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Standard lead marketplaces and low-tier marketing directories provide subpar, generic contacts that waste your pricing outlays. High-net-worth individuals search for authoritative advisory answers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="glass-morphism border border-white/5 p-8 rounded-[2rem] space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <BadgeAlert className="w-5 h-5 text-red-400 shrink-0" /> Financial SEO Bottlenecks:
              </h3>
              
              <div className="space-y-4">
                {[
                  "Failing to address Google Google's E-E-A-T guidelines for YMYL niches",
                  "Low search visibility for primary regional advisory phrases",
                  "Inconsistent lead pipelines reliant purely on local seminars",
                  "Poor technical foundation with slow-loading client review structures",
                  "Competitor institutions claiming high-intent keywords unopposed"
                ].map((challenge, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                    <p className="text-xs text-gray-300 font-medium">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6 lg:pl-6">
              <h3 className="text-xl font-bold text-white uppercase tracking-wider text-amber-400">Our Strategic Recovery</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                By targeting terms like "wealth management advisory" or "financial estate strategy," we structure your compliance-ready content to establish true domain expertise. Improve your setup details with our premium{' '}
                <Link to="/resources/actionable-seo-templates" className="text-blue-400 hover:underline font-bold">
                  Actionable SEO Templates collection
                </Link>{' '}
                to capture indexing gaps.
              </p>

              <div className="bg-slate-900/60 p-4 rounded-xl border border-white/5 space-y-2">
                <span className="text-[10px] font-black uppercase text-emerald-400">Trust Framework:</span>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Every advisory asset optimization adheres strictly to standard finance compliance guidelines to maintain maximum credential and reputation safety.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits and Pillars */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Tailored Financial Advisor SEO Pillars
            </h2>
            <p className="text-gray-400 text-xs mt-2">Engineered to drive maximum authority and conversion.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                t: "Compliance-Aligned Keyword Mapping",
                c: "Target highly qualified investable-asset search paths designed to meet stringent industry marketing regulations."
              },
              {
                t: "Advanced Local E-E-A-T Signalling",
                c: "Structure credential variables, biography citations, and client TRUST elements clearly to establish unmatched web prestige."
              },
              {
                t: "Geo-Targeted Landing Arrays",
                c: "Claim surrounding regions and city centers to organically dominate local MAP packages."
              },
              {
                t: "Authoritative Link Acquisitions",
                c: "Acquire domain reputation parameters from reputable finance portals, local chambers, and specialized platforms."
              }
            ].map((pillar, id) => (
              <div key={id} className="bg-slate-900/40 border border-white/5 p-6 rounded-2xl space-y-3">
                <span className="text-emerald-400 font-mono text-xs">Pillar 0{id + 1}</span>
                <h4 className="text-xs font-bold text-white uppercase">{pillar.t}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{pillar.c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/40">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white flex items-center justify-center gap-2">
              <HelpCircle className="text-emerald-400 w-8 h-8" /> Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What is YMYL and how does it affect financial advisor SEO?",
                a: "Google classfies financial planning sites as 'Your Money or Your Life' (YMYL). These pages undergo rigorous algorithm reviews regarding safety, security, and proven credentials. We implement extreme E-E-A-T signals to comply perfectly."
              },
              {
                q: "How long does it take to secure high-net-worth leads organically?",
                a: "Advisory SEO typically takes 3 to 6 months to establish authoritative traction due to highly competitive environments, but provides permanent asset generation afterward."
              }
            ].map((faq, index) => (
              <div key={index} className="glass-morphism border border-white/5 rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-white/[0.02]"
                >
                  <span className="text-sm font-bold text-white pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${activeFaq === index ? 'rotate-180 text-emerald-400' : ''}`} />
                </button>
                {activeFaq === index && (
                  <div className="p-6 pt-0 border-t border-white/5 bg-slate-950/20 text-xs text-slate-300 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 px-4 md:px-6 relative bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.15),transparent_60%)] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <div className="w-16 h-16 bg-emerald-500/15 border border-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="w-8 h-8" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Acquire Qualified Premium Clients
          </h2>

          <p className="text-sm text-gray-300 max-w-2xl mx-auto">
            Take control of your directory positions. Eliminate expensive, low-intent paid directories and construct a premier local assets funnel today.
          </p>

          <div className="pt-4">
            <button
              onClick={onBook}
              className="inline-flex items-center justify-center px-10 py-5 rounded-xl text-black bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-500 hover:to-teal-400 font-extrabold tracking-wider uppercase text-sm shadow-xl shadow-emerald-500/20 transition-all duration-300"
            >
              Analyze Your Current SEO Gaps
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinancialAdvisorSEOPage;
