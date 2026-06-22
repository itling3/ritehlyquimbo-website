import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Server, 
  Cpu, 
  Terminal, 
  Target, 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  ChevronDown, 
  AlertCircle, 
  Sparkles, 
  BarChart3, 
  Zap,
  Clock, 
  Layers
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

interface MspSEOProps {
  onBook: (e?: React.MouseEvent) => void;
}

const MspSEOPage: React.FC<MspSEOProps> = ({ onBook }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const useCases: { title: string; details: React.ReactNode }[] = [
    {
      title: "Regional MSP Growth (Multi-Vertical)",
      details: "A regional MSP targeting “managed IT services + city” increased inbound demo requests after optimizing service pages for industry-specific keywords (legal, healthcare, construction)."
    },
    {
      title: "Cybersecurity Positioning Shift",
      details: (
        <span>
          A cybersecurity-focused MSP improved lead quality by ranking for compliance-driven terms, mimicking the high-conviction client acquisition tactics optimized specifically for <Link to="/industry/seo-services-for-financial-advisors" className="text-violet-400 hover:text-violet-300 underline font-semibold">financial advisors</Link>.
        </span>
      )
    },
    {
      title: "Hyper-Local Lead Capture",
      details: "MSPs that optimized their Google Business Profile saw a significant lift in local “near me” calls within weeks of structured citation cleanup and review strategy implementation."
    }
  ];

  const features: { num: string; title: string; description: React.ReactNode; benefit: React.ReactNode }[] = [
    {
      num: "01",
      title: "MSP Keyword Strategy Built for Buyer Intent",
      description: "We target commercial keywords like: 'managed IT services for law firms', 'outsourced IT support for healthcare', and 'IT helpdesk for small business'.",
      benefit: "You attract clients ready to buy—not just browsing traffic."
    },
    {
      num: "02",
      title: "Local SEO + Google Business Profile Optimization",
      description: (
        <span>
          We optimize your presence across Google Maps and local search to put your business in front of regional owners. Learn more via our regional <Link to="/locations" className="text-cyan-400 hover:text-cyan-300 underline font-semibold">SEO locations folder</Link>.
        </span>
      ),
      benefit: "More calls from businesses near you actively searching for IT support."
    },
    {
      num: "03",
      title: "High-Converting MSP Service Pages",
      description: "We build and optimize clean, high-conviction landing pages designed to convert business leads, not just rank.",
      benefit: "Higher conversion rates from existing traffic."
    },
    {
      num: "04",
      title: "Technical SEO for MSP Websites",
      description: (
        <span>
          We resolve crawling inefficiencies, optimize page speed, correct indexing, and configure content management structures, such as customized <Link to="/services/cms-seo/wordpress-seo-expert" className="text-cyan-400 hover:text-cyan-300 underline font-semibold">WordPress technical optimization</Link>.
        </span>
      ),
      benefit: "Better rankings and improved user experience."
    },
    {
      num: "05",
      title: "Authority Building (Backlinks + Citations)",
      description: (
        <span>
          We construct industry-relevant authority signals, high-trust citations, and targeted business-to-business links that match the latest <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline font-semibold">Google Search Essentials guidelines</a>.
        </span>
      ),
      benefit: "Stronger trust with Google and improved rankings over time."
    },
    {
      num: "06",
      title: "Conversion Optimization Layer",
      description: "We refine primary call-to-actions, page layouts, intake forms, and friction-free lead capture mechanisms.",
      benefit: "More leads from the same traffic."
    }
  ];

  const testimonials = [
    {
      quote: "We finally started getting inbound leads from law firms and medical practices within our region. SEO finally made sense for our business.",
      author: "MSP Owner",
      role: "Regional IT Provider"
    },
    {
      quote: "Before this, we relied entirely on referrals. Now we get consistent booked calls every week.",
      author: "Founder",
      role: "Managed IT Services Company"
    }
  ];

  const expectations = [
    {
      period: "30–60 Days",
      phase: "Early Improvements",
      details: "Began seeing visible improvements in indexing, key technical checks, and local SEO ranking signals."
    },
    {
      period: "3–6 Months",
      phase: "Strong Lead Growth",
      details: "Measurable uptick in organic clicks for conversion-ready keywords, delivering routine high-intent sales calls."
    },
    {
      period: "6–12 Months",
      phase: "Competitive Dominance",
      details: "Solidifying stable first-page ranks across multiple business-focused services and geographic targets."
    }
  ];

  const faqs = [
    {
      q: "What makes SEO for MSPs different from regular SEO?",
      a: "MSPs sell high-value B2B services, so SEO must target decision-makers searching for IT support—not general traffic."
    },
    {
      q: "How long does it take for MSP SEO to work?",
      a: "Most MSPs see initial improvements within 30–60 days, with stronger lead flow in 3–6 months."
    },
    {
      q: "Do you help with local SEO for MSPs?",
      a: "Yes. Local SEO is a core part of MSP growth, especially for “near me” and city-based searches."
    },
    {
      q: "Can SEO replace PPC for MSP lead generation?",
      a: "SEO can significantly reduce dependence on PPC, but many MSPs use both for maximum coverage."
    },
    {
      q: "What types of MSPs benefit most from SEO?",
      a: "Small to mid-sized MSPs targeting SMBs, healthcare, legal, and finance sectors see the strongest results."
    },
    {
      q: "Do you guarantee rankings?",
      a: "No ethical SEO provider can guarantee rankings. We focus on sustainable visibility and lead generation."
    },
    {
      q: "What do you need from us to start?",
      a: "We typically need access to your website, Google Business Profile, and an understanding of your ideal client profile."
    }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden font-sans pt-12">
      <SEO 
        title="SEO Services for MSPs | Generate Qualified IT Leads"
        description="Rank your MSP on Google, attract high-value business clients, and convert search traffic into recurring managed IT service contracts."
        keywords="seo services for msps, managed service provider seo, b2b IT support marketing, rank managed it services website"
      />

      {/* Hero Section */}
      <section className="relative pt-12 md:pt-16 lg:pt-20 pb-24 px-4 md:px-6 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(139,92,246,0.1),transparent_70%)] pointer-events-none"></div>
        <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-violet-500/5 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold tracking-wider uppercase mb-2">
              <Server className="w-4 h-4 text-violet-400 animate-pulse" /> SEO Services for MSPs
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              SEO Services for MSPs That Turn Local Searches Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-300">Managed IT Contracts</span>
            </h1>
            
            <p className="text-lg sm:text-xl font-bold text-gray-200">
              SEO Services for MSPs That Generate Qualified IT Leads, Not Just Traffic
            </p>
            
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              We help Managed Service Providers (MSPs) rank on Google, expand visibility within our <Link to="/industry" className="text-violet-400 hover:text-violet-300 underline font-semibold">industry-focused segments</Link>, attract high-value business clients, and convert search traffic into recurring IT service contracts—without wasting budget on vanity SEO metrics.
            </p>

            <div className="pt-4">
              <button 
                onClick={onBook}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-black bg-gradient-to-r from-violet-400 to-cyan-400 hover:from-violet-500 hover:to-cyan-500 font-black tracking-wide shadow-lg shadow-violet-500/20 transition-all duration-300 group hover:scale-[1.02]"
              >
                👉 Get a Free MSP SEO Growth Audit
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

          {/* Right Column Custom Container - Engineering Tech Look */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-6"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 to-transparent rounded-3xl blur-2xl"></div>
            <div className="relative glass-morphism border border-white/5 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/60 block"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/60 block"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/60 block"></span>
                </div>
                <div className="text-[10px] font-mono text-gray-500">terminal@msp-seo:~$</div>
              </div>
              <div className="font-mono text-xs space-y-2 text-gray-400">
                <p className="text-violet-400"># Current MSP Search Engine Footprint</p>
                <p><span className="text-cyan-400">msp_domain:</span> "unoptimized_brochure_site"</p>
                <p><span className="text-cyan-400">lead_generation_score:</span> 12% <span className="text-red-400">[CRITICAL_UNDERPERFORMANCE]</span></p>
                <p><span className="text-cyan-400">remedy:</span> "run_commercial_buyer_intent_funnel"</p>
                <div className="border border-white/5 bg-black/40 p-3 rounded-lg text-[11px] text-gray-300 mt-4 leading-normal">
                  <p className="font-bold text-violet-300 mb-1">💡 B2B Contract Search Shift</p>
                  Most MSP agencies focus purely on aggregate traffic volume. True growth requires mapping highly targeted searches like "IT support for law firms" to secure long-term MRR deals.
                </div>
              </div>
              <div className="pt-2">
                <Link to="/pricing/local-seo-strategy" className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-900 border border-white/10 hover:border-violet-500 hover:bg-slate-950 text-white font-bold transition-all text-xs uppercase tracking-wider">
                  View Service Plan Costs
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/40 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4 uppercase italic">
              The Problem: Why Most MSPs Struggle with SEO
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Most MSPs struggle with SEO for one simple reason: they’re targeting the wrong kind of traffic—or none at all.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="glass-morphism border border-white/5 p-8 rounded-[2rem] space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0" /> You might already relate to this:
              </h3>
              <ul className="space-y-4">
                {[
                  "Your website gets visitors, but no qualified IT leads",
                  "Competitors rank above you for “managed IT services near me”",
                  "You rely too heavily on referrals and cold outreach",
                  "Your Google Business Profile barely generates inquiries",
                  "PPC is expensive and stops working the moment you stop paying"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                    <span className="text-gray-300 text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 bg-red-500/5 rounded-xl border border-red-500/10 text-xs text-red-300/80 leading-relaxed font-mono">
                The real issue isn’t your service quality—it’s visibility and positioning.
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative border border-white/5 bg-slate-900/40 p-8 rounded-[2rem] space-y-4">
                <h3 className="text-xl font-bold text-white">How High-Value B2B IT Buyers Search</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  MSP buyers (SMBs, healthcare clinics, law firms, financial advisors) don’t search randomly. They search with urgency and intent:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    "“IT support for law firms”",
                    "“managed IT services near me”",
                    "“cybersecurity for small business”",
                    "“outsourced IT helpdesk”"
                  ].map((phrase, idx) => (
                    <div key={idx} className="bg-black/50 border border-white/5 p-3 rounded-lg flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span className="text-xs font-mono text-cyan-100">{phrase}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm font-semibold text-violet-300 pt-2">
                  If your MSP doesn’t appear in those moments, you lose deals before you even know they exist.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              Our Solution: Predictable Lead Generation for MSPs
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Our SEO services for MSPs are built specifically for how IT buyers search, evaluate, and hire managed service providers. We don't just “do SEO.” We build a predictable lead generation system for MSPs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            {/* Left side: How it works */}
            <div className="relative border border-white/5 bg-slate-900/30 p-8 rounded-[2.5rem] flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                  How our system works
                </h3>
                <div className="space-y-6">
                  {[
                    { title: "Identify High-Intent Keywords", desc: "We identify high-intent IT service keywords your ideal clients are already searching." },
                    { title: "Optimize for Local & Niche Searches", desc: "We optimize your website to rank for local and niche MSP searches." },
                    { title: "Construct High-Trust Authority", desc: "We build authority so Google trusts your MSP over competitors." },
                    { title: "Maximize Lead Conversions", desc: "We convert traffic into booked consultations and sales calls." }
                  ].map((step, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-8 h-8 rounded-lg bg-violet-550/10 border border-violet-500/20 text-violet-400 flex items-center justify-center font-mono font-bold shrink-0">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">{step.title}</h4>
                        <p className="text-xs text-gray-400">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side: Benefits */}
            <div className="relative border border-white/5 bg-slate-900/30 p-8 rounded-[2.5rem] flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
                  What this means for you
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 bg-black/30 p-4 rounded-xl border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span className="text-sm font-semibold text-gray-200">More inbound IT support inquiries</span>
                  </div>
                  <div className="flex items-center gap-4 bg-black/30 p-4 rounded-xl border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span className="text-sm font-semibold text-gray-200">Higher-quality leads (SMBs with real budgets)</span>
                  </div>
                  <div className="flex items-center gap-4 bg-black/30 p-4 rounded-xl border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span className="text-sm font-semibold text-gray-200">Reduced dependence on referrals</span>
                  </div>
                  <div className="flex items-center gap-4 bg-black/30 p-4 rounded-xl border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span className="text-sm font-semibold text-gray-200">
                      Steady monthly pipeline via our <Link to="/pricing" className="text-cyan-400 hover:text-cyan-300 underline font-semibold">sustainable growth plans</Link>
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-8 border-t border-white/5 text-center text-sm font-bold text-violet-300">
                Instead of chasing clients, your MSP becomes the one they find first.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Signals Section */}
      <section className="py-24 px-4 md:px-6 relative bg-slate-950/40 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
              Experience Signals
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mt-4 mb-4">
              Real-World MSP SEO Use Cases
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              We’ve worked with service-based businesses where SEO directly impacts monthly recurring revenue (MRR)—and MSPs are one of the most SEO-sensitive industries because of high contract values.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch mb-12">
            {useCases.map((useCase, idx) => (
              <div key={idx} className="glass-morphism border border-white/5 rounded-2xl p-6 hover:border-violet-500/30 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 border border-violet-500/20 mb-4">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{useCase.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{useCase.details}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-900/60 border border-white/5 p-8 rounded-3xl max-w-4xl mx-auto text-center space-y-4">
            <p className="text-sm text-gray-300 uppercase font-mono tracking-widest text-violet-400">What We Consistently See:</p>
            <p className="text-base font-bold text-white max-w-2xl mx-auto">
              MSPs don’t fail at SEO because of competition—they fail because they target:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-3 py-1 bg-black/40 border border-white/5 rounded text-xs text-red-300">overly broad keywords (“IT services”)</span>
              <span className="px-3 py-1 bg-black/40 border border-white/5 rounded text-xs text-red-300">weak local SEO structure</span>
              <span className="px-3 py-1 bg-black/40 border border-white/5 rounded text-xs text-red-300">no industry segmentation (law firms, clinics, etc.)</span>
            </div>
            <p className="text-sm font-semibold text-emerald-400 pt-2">
              When SEO is aligned with buyer intent, MSPs typically see a dramatic improvement in lead quality—not just traffic volume.
            </p>
          </div>
        </div>
      </section>

      {/* Features & Benefits Section */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              MSP SEO Features & Benefits
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              We provide comprehensive SEO strategies detailed below, specifically engineered to attract decision-makers.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, idx) => (
              <div key={idx} className="glass-morphism border border-white/5 p-6 rounded-[2rem] hover:border-cyan-500/20 transition-all flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="text-3xl font-black text-white/10 font-mono">{feat.num}</div>
                  <h3 className="text-base font-black text-white leading-normal">{feat.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{feat.description}</p>
                </div>
                <div className="pt-4 border-t border-white/5 space-y-1">
                  <span className="text-[10px] font-mono text-cyan-400 block uppercase tracking-wider font-semibold">Benefit</span>
                  <p className="text-xs font-bold text-gray-200">{feat.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authority Signals */}
      <section className="py-24 px-4 md:px-6 relative bg-slate-950/40 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold tracking-wider uppercase">
                <ShieldCheck className="w-3.5 h-3.5 inline mr-1 text-violet-400" /> B2B Specialization
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
                Bespoke MSP Search Authority
              </h2>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                MSP SEO is not the same as general SEO. It requires a profound understanding of IT buyer behavior, complicated B2B sales cycles, intent patterns, and localized search behaviors.
              </p>
              <div className="space-y-3 bg-slate-900 border border-white/5 p-6 rounded-2xl font-mono text-xs">
                <div className="text-cyan-400"># Compulsory MSP Evaluation Pillars</div>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex gap-2"><span className="text-violet-400">✔</span> IT buyer behavior</li>
                  <li className="flex gap-2"><span className="text-violet-400">✔</span> B2B service funnels</li>
                  <li className="flex gap-2"><span className="text-violet-400">✔</span> Structured B2B data schema according to <a href="https://schema.org" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline font-semibold">Schema.org vocabularies</a></li>
                  <li className="flex gap-2"><span className="text-violet-400">✔</span> High-ticket contract decision cycles</li>
                </ul>
              </div>
              <p className="text-xs text-gray-400">
                We apply proven frameworks used in competitive service industries where one client can be worth thousands in monthly recurring revenue.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-900/60 border border-white/5 rounded-3xl p-8 relative">
                <div className="absolute top-4 right-4 text-violet-500">
                  <Cpu className="w-8 h-8 animate-pulse" />
                </div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-violet-400 mb-2">Expert Insights</h4>
                <p className="text-sm font-bold text-white italic leading-relaxed">
                  "Most MSP websites fail not because of SEO complexity—but because they are structured like 'brochure sites' instead of lead-generation assets."
                </p>
              </div>

              <div className="bg-slate-900/40 border border-white/5 rounded-3xl p-8 space-y-4">
                <h4 className="text-sm font-bold text-white">Industry comparison:</h4>
                <p className="text-xs text-gray-450">
                  Compared to generic SEO agencies, MSP-focused SEO prioritizes:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-black/40 p-3 rounded-xl border border-white/5 text-center">
                    <span className="text-[11px] font-bold text-violet-300">Conversion-First Layout</span>
                  </div>
                  <div className="bg-black/40 p-3 rounded-xl border border-white/5 text-center">
                    <span className="text-[11px] font-bold text-violet-300">Service-Area Target</span>
                  </div>
                  <div className="bg-black/40 p-3 rounded-xl border border-white/5 text-center">
                    <span className="text-[11px] font-bold text-violet-300">Vertical SEO Focus</span>
                  </div>
                </div>
                <p className="text-xs text-gray-450 text-center font-semibold text-emerald-400 pt-2">
                  This is why MSP-specific SEO consistently outperforms general SEO campaigns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              Validated Trust Signals
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Transparent reporting, explicit timelines, and direct client validations keep us accountable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {testimonials.map((t, idx) => (
              <div key={idx} className="glass-morphism border border-white/5 p-8 rounded-3xl flex flex-col justify-between space-y-6">
                <p className="text-sm md:text-base text-gray-300 italic leading-relaxed">
                  “{t.quote}”
                </p>
                <div className="flex justify-between items-center border-t border-white/5 pt-4">
                  <div>
                    <span className="text-xs font-bold text-white block">{t.author}</span>
                    <span className="text-[10px] text-gray-500 block">{t.role}</span>
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-violet-500/10 border border-violet-500/20 text-violet-400">Verified Client</span>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <p className="text-center text-sm font-bold text-gray-300 uppercase tracking-widest text-violet-400">Transparency & Realistic Expectations</p>
            <p className="text-center text-xs text-gray-450 max-w-lg mx-auto leading-relaxed">
              SEO for MSPs is powerful—but not instant. We do NOT promise overnight rankings or unrealistic guarantees.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto pt-6">
              {expectations.map((exp, idx) => (
                <div key={idx} className="bg-slate-900/60 border border-white/5 p-6 rounded-2xl flex flex-col justify-between relative">
                  <div>
                    <div className="text-xs font-mono font-bold text-violet-400 uppercase tracking-widest mb-1">{exp.period}</div>
                    <h4 className="text-sm font-black text-white mb-2">{exp.phase}</h4>
                    <p className="text-xs text-gray-400">{exp.details}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-black/30 p-8 rounded-3xl max-w-4xl mx-auto text-center border border-white/5 space-y-4">
              <span className="text-[10px] text-gray-500 font-bold block uppercase tracking-widest">Trust Elements We Prioritize</span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                {["Clear reporting dashboards", "Transparent monthly tracking", "Ethical white-hat SEO", "No locked-in long-term plans"].map((el, i) => (
                  <div key={i} className="bg-slate-900/40 p-3 rounded-lg border border-white/5 text-center">
                    <span className="text-[11px] font-semibold text-gray-300">{el}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 px-4 md:px-6 relative bg-slate-950/40 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              Why MSP SEO is Different from Generic SEO Agencies
            </h2>
            <p className="text-gray-450 text-sm md:text-base leading-relaxed">
              Most agencies treat MSP websites like any other business site. That approach fails because MSPs require specialized targeting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-stretch">
            {/* Left side: Traditional */}
            <div className="bg-slate-900/30 border border-white/5 p-8 rounded-3xl space-y-6">
              <h3 className="text-red-400 font-bold text-lg border-b border-white/5 pb-3">Traditional SEO Agency</h3>
              <ul className="space-y-4 font-mono text-xs text-gray-400">
                <li className="flex items-center gap-2"><span className="text-red-400">✖</span> Focus on vanity traffic</li>
                <li className="flex items-center gap-2"><span className="text-red-400">✖</span> Generic keyword targeting</li>
                <li className="flex items-center gap-2"><span className="text-red-400">✖</span> Weak conversion strategy</li>
              </ul>
            </div>

            {/* Right side: Specialized */}
            <div className="bg-violet-950/20 border border-violet-500/20 p-8 rounded-3xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-violet-500/10 blur-xl rounded-full"></div>
              <h3 className="text-violet-400 font-bold text-lg border-b border-violet-500/10 pb-3">Our MSP SEO System</h3>
              <ul className="space-y-4 font-mono text-xs text-gray-200">
                <li className="flex items-center gap-2"><span className="text-violet-400 font-bold">✔</span> Focus on booked IT consultations</li>
                <li className="flex items-center gap-2"><span className="text-violet-400 font-bold">✔</span> High-intent keyword targeting</li>
                <li className="flex items-center gap-2"><span className="text-violet-400 font-bold">✔</span> Conversion-first page design</li>
                <li className="flex items-center gap-2"><span className="text-violet-400 font-bold">✔</span> Industry-specific lead strategy</li>
              </ul>
            </div>
          </div>

          <div className="text-center pt-12 max-w-sm mx-auto space-y-1">
            <p className="text-xs text-mono text-gray-500">The difference is simple:</p>
            <p className="text-base font-bold text-white">We don’t just want you to rank. We want your MSP to grow revenue predictably.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-450 text-sm md:text-base leading-relaxed">
              Everything you need to know about our specialized SEO campaigns.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="glass-morphism border border-white/5 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center text-white hover:bg-white/[0.02] transition-colors gap-4"
                >
                  <span className="font-bold text-sm md:text-base flex items-center gap-3">
                    <span className="text-violet-400 font-mono text-xs">{idx + 1}.</span>
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-305 shrink-0 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                
                {activeFaq === idx && (
                  <div className="px-6 pb-6 text-xs md:text-sm text-gray-300 border-t border-white/5 pt-4 leading-relaxed bg-black/20">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 md:px-6 relative overflow-hidden bg-slate-950">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-500/5 blur-[200px] rounded-full pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/15 border border-violet-500/20 text-violet-400 text-xs font-mono uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" /> High-MRR Growth Accelerator
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-none text-white">
            Lead Dominance <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-300">Awaits</span>
          </h2>
          
          <div className="space-y-4 max-w-2xl mx-auto text-sm md:text-base text-gray-300 leading-relaxed font-sans">
            <p className="font-bold text-white text-lg">
              Your MSP doesn’t need more traffic—it needs qualified IT buyers ready to sign contracts.
            </p>
            <p>
              If you want predictable inbound leads instead of inconsistent referrals, SEO is one of the most powerful long-term growth channels available.
            </p>
          </div>

          <div className="pt-4 space-y-6">
            <button 
              onClick={onBook}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-black bg-gradient-to-r from-violet-400 to-cyan-400 hover:from-violet-500 hover:to-cyan-500 font-black tracking-wide shadow-lg shadow-violet-500/20 transition-all duration-300 group hover:scale-[1.02]"
            >
              👉 Get Your Free MSP SEO Growth Audit Today
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <p className="text-xs text-gray-400 max-w-md mx-auto leading-relaxed">
              We’ll analyze your website, competitors, and keyword opportunities—and show you exactly how many leads you could be generating from Google.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MspSEOPage;
