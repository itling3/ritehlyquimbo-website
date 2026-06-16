import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  XCircle, 
  TrendingUp, 
  Zap, 
  Search, 
  ArrowRight, 
  MapPin, 
  FileText, 
  Settings, 
  ChevronDown,
  AlertTriangle,
  Lightbulb,
  PhoneCall,
  UserCheck,
  ShieldAlert,
  ZapOff
} from 'lucide-react';
import SEO from '../components/SEO';

interface ElectricianSEOProps {
  onBook: (e?: React.MouseEvent) => void;
}

const ElectricianSEOPage: React.FC<ElectricianSEOProps> = ({ onBook }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const targetedKeywords = [
    "Electrician near me",
    "Emergency electrician",
    "Residential electrician",
    "Commercial electrical contractor",
    "Switchboard upgrades",
    "EV charger installation",
    "Solar electrician"
  ];

  const serviceOffers = [
    "Electrical repairs",
    "Rewiring",
    "Smoke alarms",
    "Switchboard upgrades",
    "Ceiling fan installation",
    "EV charger installation"
  ];

  const valuePillars = [
    {
      title: "Comprehensive SEO Audit",
      feature: "Detailed analysis of your website, rankings, competitors, and technical performance.",
      benefit: "Identify growth opportunities and eliminate issues holding back rankings."
    },
    {
      title: "Local SEO Optimization",
      feature: "Google Business Profile optimization, local citations, and location relevance improvements.",
      benefit: "Increase visibility in local searches and Google Maps."
    },
    {
      title: "Service Page SEO",
      feature: "Optimized content targeting specific electrical services.",
      benefit: "Generate leads from customers searching for exactly what you offer."
    },
    {
      title: "Technical SEO Improvements",
      feature: "Site speed, indexing, mobile optimization, and schema implementation.",
      benefit: "Improve user experience and search engine performance."
    },
    {
      title: "Authority Building",
      feature: "Quality backlinks and local authority signals.",
      benefit: "Increase trust with search engines and improve rankings."
    },
    {
      title: "Conversion Optimization",
      feature: "Lead-focused website improvements.",
      benefit: "Turn more website visitors into paying customers."
    }
  ];

  const eeatSignals = [
    {
      title: "Expert content",
      desc: "Answering specific homeowners' technical questions with precise advice."
    },
    {
      title: "Service expertise",
      desc: "Categorizing specializations like emergency response and green solar retrofits."
    },
    {
      title: "Local authority",
      desc: "Building citations that align with your municipal registration coordinates."
    },
    {
      title: "Customer reviews",
      desc: "Structured systems to continuously funnel genuine buyer success indicators."
    },
    {
      title: "Trust-building website elements",
      desc: "Highlighting physical commercial licenses and industry safety compliance seals."
    }
  ];

  const clientBenefits = [
    "Qualified leads",
    "Phone calls",
    "Contact form submissions",
    "Quote requests",
    "Booked jobs"
  ];

  const promisedStandards = [
    "Data-driven strategies",
    "Clear communication",
    "Ethical SEO practices",
    "Measurable progress"
  ];

  const neverPromise = [
    "Guaranteed #1 rankings",
    "Overnight results",
    "Instant traffic growth"
  ];

  const faqs = [
    {
      question: "How long does SEO take for electricians?",
      answer: "Most electrical businesses begin seeing improvements within three to six months, with stronger growth typically occurring between six and twelve months."
    },
    {
      question: "Can SEO help me rank in multiple service areas?",
      answer: "Yes. Strategic location page optimization can help electricians improve visibility across multiple cities, suburbs, and service regions."
    },
    {
      question: "Do I need a Google Business Profile?",
      answer: "Absolutely. A well-optimized Google Business Profile is one of the most important local SEO assets for electricians."
    },
    {
      question: "What electrical services can benefit from SEO?",
      answer: "Virtually all services can benefit, including emergency electrical work, residential services, commercial projects, switchboard upgrades, EV charger installations, rewiring, solar electrical work, and maintenance services."
    },
    {
      question: "How do you measure SEO success?",
      answer: "We track metrics such as keyword rankings, organic traffic, phone calls, lead submissions, conversion rates, and revenue opportunities."
    },
    {
      question: "Is SEO better than Google Ads?",
      answer: "Both can be effective. Google Ads generates immediate visibility, while SEO builds long-term organic lead generation and reduces reliance on advertising spend."
    },
    {
      question: "What makes electrician SEO different?",
      answer: "Electrical SEO focuses heavily on local search intent, service-area optimization, trust signals, and converting urgent service searches into enquiries."
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white overflow-hidden">
      <SEO 
        title="SEO Services for Electricians | Get More Local Leads & Booked Jobs"
        description="Grow your electrical business with SEO services for electricians. Rank higher in Google, generate qualified local leads, increase calls, and book more electrical jobs with a proven SEO strategy."
        keywords="seo services for electricians, electrician seo, electrical contractor seo, seo for electrical companies, local leads for electricians"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-6 overflow-hidden">
        {/* Soft electrical grid glow background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none"></div>
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-orange-500/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-[10px] font-black uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Local Service Domination
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.9] mb-6">
              SEO Services for <span className="text-orange-500">Electricians</span> That Generate More Calls, Leads & Booked Jobs
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed mb-4 text-orange-400">
              Get More Electrical Jobs with SEO Services for Electricians
            </p>

            <p className="text-sm md:text-base text-gray-400 font-normal leading-relaxed mb-8">
              Your customers are already searching for electricians on Google. The question is: are they finding your business or your competitors?
              <br /><br />
              Our SEO services for electricians help electrical contractors rank higher in local search results, attract qualified leads, and consistently generate more calls, quote requests, and booked jobs without relying solely on paid advertising.
              <br /><br />
              Whether you're a residential electrician, commercial electrical contractor, emergency electrician, solar installer, or electrical services company, we build custom <Link to="/services" className="text-orange-400 hover:underline font-bold">organic SEO strategies</Link> designed to increase visibility where customers are actively searching. 
              <br /><br />
              Get found by local customers. Increase enquiries. Grow your electrical business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onBook}
                className="px-8 py-5 bg-orange-600 hover:bg-orange-700 text-white font-black rounded-2xl transition-all shadow-2xl shadow-orange-500/30 uppercase tracking-tighter text-base flex items-center justify-center gap-3 group cursor-pointer"
              >
                <span>Get Your Free Electrician SEO Audit</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Visual Layout with Service Areas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 glass-morphism rounded-[2.5rem] border border-white/10 p-6 md:p-8 shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] bg-[#0f172a]/40">
              <h3 className="text-xl font-black uppercase italic tracking-tight mb-4 text-blue-400">Connect Suburbs To Sales</h3>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                When emergency blackouts strike or premium commercial developments commence, buyers choose top-rated local results immediately. Find out who owns your target areas across our structured <Link to="/locations" className="text-orange-400 hover:underline">high-intent locations database</Link> or map out custom investments via our <Link to="/pricing/local-seo-strategy" className="text-orange-400 hover:underline">Local SEO pricing models</Link>.
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 shrink-0">
                    <Lightbulb className="w-4 h-4 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white uppercase tracking-tight">Structured Content Vaults</h4>
                    <p className="text-xs text-gray-400 mt-1">We optimize separate service pathways for complex integrations, matching search parameters flawlessly.</p>
                  </div>
                </div>

                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                    <UserCheck className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white uppercase tracking-tight">Vetted Consumer Growth</h4>
                    <p className="text-xs text-gray-400 mt-1">Strengthen local trust factors and citations across professional digital registries automatically.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Ambient Background Glow */}
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>
          </motion.div>
        </div>
      </section>

      {/* Embedded Problem Statement */}
      <section className="py-24 px-4 md:px-6 relative bg-gradient-to-b from-[#030712] to-black border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs text-red-500 font-black tracking-widest uppercase">The Diagnosis</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mt-2 mb-4">
              The Problem: Why Most Electricians Struggle to Generate Consistent Leads Online
            </h2>
            <p className="text-gray-400 text-sm font-semibold">
              Many electricians provide excellent service but remain invisible online.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* What Buyers Query */}
            <div className="bg-[#0c101d] border border-white/10 rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-black uppercase italic text-orange-400 mb-4 flex items-center gap-2">
                  <Search className="w-5 h-5 text-orange-500" /> High-conversion Local Queries
                </h3>
                <p className="text-gray-400 text-xs mb-6">
                  When homeowners or businesses search for electrical services, Google displays matching results that have strong local signals.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {targetedKeywords.map((kw, i) => (
                    <div key={i} className="p-3 bg-white/[0.02] border border-white/5 rounded-xl text-xs font-bold text-gray-300 italic">
                      "{kw}"
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-white/5 text-xs text-gray-500 italic">
                If potential customers cannot find you online, they cannot hire you.
              </div>
            </div>

            {/* Core Issues list */}
            <div className="space-y-4">
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 flex gap-4 items-start">
                <div className="p-3 bg-red-500/10 rounded-xl text-red-500 shrink-0">
                  <ZapOff className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase text-white">Low Search Visibility</h4>
                  <p className="text-xs text-gray-400 mt-1">Your website may not appear on page one for valuable local keywords.</p>
                </div>
              </div>

              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 flex gap-4 items-start">
                <div className="p-3 bg-red-500/10 rounded-xl text-red-500 shrink-0">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase text-white">Inconsistent Lead Flow</h4>
                  <p className="text-xs text-gray-400 mt-1">Some months generate plenty of enquiries while others are slow and unpredictable.</p>
                </div>
              </div>

              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 flex gap-4 items-start">
                <div className="p-3 bg-red-500/10 rounded-xl text-red-500 shrink-0">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase text-white">Heavy Dependence on Paid Ads</h4>
                  <p className="text-xs text-gray-400 mt-1">Advertising produces leads, but costs continue to rise and results stop when the budget ends.</p>
                </div>
              </div>

              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 flex gap-4 items-start">
                <div className="p-3 bg-red-500/10 rounded-xl text-red-500 shrink-0">
                  <XCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase text-white">Competitors Dominating Search</h4>
                  <p className="text-xs text-gray-400 mt-1">Competitors with stronger setups receive the majority of phone calls and service requests.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-24 px-4 md:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs text-blue-500 font-black tracking-widest uppercase">The Strategy</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mt-2 mb-4">
              The Solution: SEO Services Built Specifically for Electricians
            </h2>
            <p className="text-gray-400 text-sm font-semibold">
              Instead of generic SEO tactics, we focus on strategies that help electrical contractors appear in front of high-intent searchers who are ready to book.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 bg-[#0b0f19] border border-white/10 rounded-3xl space-y-4">
              <div className="inline-flex p-3 bg-orange-500/10 rounded-xl text-orange-500">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black uppercase italic text-white">Local SEO Optimization</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                We optimize your local presence so your business appears in Google Maps, Local Pack results, location-based searches, and service-area targets. These map coordinates integrate directly with <Link to="/locations" className="text-orange-400 hover:underline">our physical service area layouts</Link>, ensuring optimal relevance and compliance with <a href="https://developers.google.com/search/docs/appearance/structured-data/local-business" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">Google's local business structured specifications</a>.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 bg-[#0b0f19] border border-white/10 rounded-3xl space-y-4">
              <div className="inline-flex p-3 bg-orange-500/10 rounded-xl text-orange-500">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black uppercase italic text-white">Keyword Research</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                We target precise electrical terms like residential electrician, emergency electrician, electrical repairs, commercial electrician, switchboard upgrades, smoke alarm installation, EV charger installation, and solar electrical modifications.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 bg-[#0b0f19] border border-white/10 rounded-3xl space-y-4">
              <div className="inline-flex p-3 bg-orange-500/10 rounded-xl text-orange-500">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black uppercase italic text-white">Service Page Optimization</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                Each service receives dedicated content built to rank. If you run your shop through WordPress, we deploy our tailored <Link to="/services/cms-seo/wordpress-seo-expert" className="text-orange-400 hover:underline">WordPress SEO systems</Link>, or on Drupal, our robust <Link to="/services/cms-seo/drupal-seo-expert" className="text-orange-400 hover:underline">Drupal SEO structures</Link>. We also support layouts on <Link to="/services/cms-seo/squarespace-seo-expert" className="text-orange-400 hover:underline">Squarespace SEO configurations</Link>.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-8 bg-[#0b0f19] border border-white/10 rounded-3xl space-y-4">
              <div className="inline-flex p-3 bg-orange-500/10 rounded-xl text-orange-500">
                <Settings className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black uppercase italic text-white">Technical SEO</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                We optimize site speed, mobile usability, crawlability, indexation, and implement proper schema markup using standard definitions from <a href="https://schema.org" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">Schema.org</a>. Check your system performance using Google's official <a href="https://pagespeed.web.dev" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline font-bold">PageSpeed Insights auditing tool</a>.
              </p>
            </div>

            {/* Card 5 */}
            <div className="p-8 bg-[#0b0f19] border border-white/10 rounded-3xl space-y-4">
              <div className="inline-flex p-3 bg-orange-500/10 rounded-xl text-orange-500">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black uppercase italic text-white">Authority Building</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                We improve domain authority through structured link-building campaigns, industry directories, relevant citations, local brand mentions, and organic partnerships.
              </p>
            </div>

            {/* Card 6 */}
            <div className="p-8 bg-[#0b0f19] border border-white/10 rounded-3xl space-y-4">
              <div className="inline-flex p-3 bg-orange-500/10 rounded-xl text-orange-500">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black uppercase italic text-white">Conversion Optimization</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                Traffic alone does not pay the bills. We refine service page layouts, clear call-to-actions, trust indicators, and user flow architectures, tracking everything inside our custom <Link to="/pricing" className="text-orange-400 hover:underline">SEO pricing plans</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience narrative */}
      <section className="py-24 px-4 md:px-6 bg-[#040815] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs text-orange-500 font-black tracking-widest uppercase">Target Focus</span>
              <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-none text-white">
                Experience That Comes From Working With Local Service Businesses
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed font-semibold">
                SEO for electricians requires a completely different approach than SEO for eCommerce stores or national brands. Electrical customers typically have urgent needs and search with strong buying intent.
              </p>
              
              <div className="space-y-2 text-xs text-gray-400 font-medium">
                <p>• A homeowner searching <strong className="text-white">"emergency electrician near me"</strong> often needs assistance immediately.</p>
                <p>• A property manager searching <strong className="text-white">"commercial electrician"</strong> is typically looking for a reliable contractor.</p>
                <p>• A homeowner searching <strong className="text-white">"EV charger installation"</strong> is actively evaluating specialized providers.</p>
              </div>

              <div className="pt-4">
                <button 
                  onClick={onBook}
                  className="px-6 py-4 bg-orange-600 hover:bg-orange-700 text-white text-xs font-black uppercase italic rounded-xl tracking-wider transition-colors max-w-fit cursor-pointer"
                >
                  Get Your Free Consultation
                </button>
              </div>
            </div>

            {/* Opportunities (Right Column) */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-xl font-black uppercase italic text-orange-400 block">Real-World Electrician SEO Opportunities</h3>
              
              <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-2">
                <h4 className="text-sm font-black text-white uppercase">Opportunity 1: Expanding Into New Service Areas</h4>
                <p className="text-xs text-gray-400 leading-relaxed font-medium">
                  An electrician servicing only one city can create optimized location pages targeting surrounding suburbs and towns, increasing visibility across a larger geographic area. Explore how our master <Link to="/locations" className="text-orange-400 hover:underline">locations directory</Link> scales targeting.
                </p>
              </div>

              <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-2">
                <h4 className="text-sm font-black text-white uppercase">Opportunity 2: Ranking Individual Services</h4>
                <p className="text-xs text-gray-400 leading-relaxed font-medium">
                  Rather than relying on a single general list, dedicated separate pages can target specialized service queries (e.g., electrical repair, smoke alarms, rewiring, or switches).
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {serviceOffers.map((item, id) => (
                    <span key={id} className="text-[10px] uppercase font-bold px-2 py-1 bg-white/5 border border-white/10 rounded-lg text-white">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-2">
                <h4 className="text-sm font-black text-white uppercase">Opportunity 3: Building Authority Through Helpful Content</h4>
                <p className="text-xs text-gray-400 leading-relaxed font-medium">
                  Publishing educational content about solar connections, electrical safety, and appliance installations helps establish expertise while attracting organic search traffic. Connect with our creator on the <Link to="/about" className="text-orange-400 hover:underline">About Page</Link> to design custom workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Features & Benefits */}
      <section className="py-24 px-4 md:px-6 bg-[#030712]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs text-blue-500 font-black tracking-widest uppercase">The Inventory</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mt-2 mb-4">
              Comprehensive Electrician Features & Benefits
            </h2>
            <p className="text-gray-400 text-sm font-semibold">Explore tactical campaign features and matching commercial benefits:</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valuePillars.map((p, idx) => (
              <div key={idx} className="bg-[#0b101d] border border-white/10 hover:border-blue-500/30 transition-all rounded-3xl p-6 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-base font-black uppercase italic text-white tracking-wider">{p.title}</h3>
                  <div className="text-xs text-orange-400 font-bold uppercase tracking-tight">Feature: {p.feature}</div>
                  <p className="text-xs text-gray-400 leading-relaxed font-semibold">Benefit: {p.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Electrician SEO Approach Works */}
      <section className="py-24 px-4 md:px-6 bg-[#050914] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Block: Approach */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs text-orange-500 font-black tracking-widest uppercase">The Philosophy</span>
              <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-white">
                Why Our Electrician SEO Approach Works
              </h2>
              <p className="text-gray-400 text-sm font-semibold leading-relaxed">
                We understand how customers search and focus strictly on organic conversions and growth:
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex gap-3">
                  <span className="text-blue-500 font-black">✓</span>
                  <div>
                    <h4 className="text-xs font-black uppercase text-white">We Understand How Customers Search</h4>
                    <p className="text-[11px] text-gray-400 mt-0.5">Urgent, local, high-intent queries that need fast response paths.</p>
                  </div>
                </div>

                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex gap-3">
                  <span className="text-blue-500 font-black">✓</span>
                  <div>
                    <h4 className="text-xs font-black uppercase text-white">We Focus on Revenue, Not Vanity</h4>
                    <p className="text-[11px] text-gray-400 mt-0.5">Measuring phone calls, booked jobs, quote requests, and contact forms.</p>
                  </div>
                </div>

                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex gap-3">
                  <span className="text-blue-500 font-black">✓</span>
                  <div>
                    <h4 className="text-xs font-black uppercase text-white">Ethical SEO Practices</h4>
                    <p className="text-[11px] text-gray-400 mt-0.5">Always white-hat search guidelines that eliminate algorithm penalties.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Block: EEAT */}
            <div className="lg:col-span-7 bg-[#0b0f19] border border-white/10 rounded-3xl p-8 space-y-6">
              <span className="text-[10px] text-orange-400 font-black uppercase tracking-wider block">Strengthening Google’s Quality Evaluation Metres</span>
              <h3 className="text-xl font-black uppercase italic text-white tracking-tight">Building E-E-A-T Signals</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Search engines increasingly evaluate Experience, Expertise, Authoritativeness, and Trustworthiness. We strengthen these metrics for your brand:
              </p>

              <div className="grid gap-4 mt-2">
                {eeatSignals.map((sig, i) => (
                  <div key={i} className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                    <span className="text-xs font-black uppercase text-orange-500 block">{sig.title}</span>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">{sig.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparisons */}
      <section className="py-24 px-4 md:px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs text-blue-500 font-black tracking-widest uppercase">The Numbers</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-white">
              SEO Services for Electricians vs Other Marketing Channels
            </h2>
            <p className="text-gray-400 text-sm font-semibold mt-2">Compare long-term performance values across core commercial systems:</p>
          </div>

          <div className="overflow-x-auto border border-white/10 rounded-3xl bg-[#0b0f19]/80">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-[#101626] border-b border-white/10">
                <tr>
                  <th className="p-4 md:p-5 text-gray-400 font-black text-xs uppercase tracking-wider">Marketing Channel</th>
                  <th className="p-4 md:p-5 text-gray-400 font-black text-xs uppercase tracking-wider">Short-Term Results</th>
                  <th className="p-4 md:p-5 text-gray-400 font-black text-xs uppercase tracking-wider">Long-Term Value</th>
                  <th className="p-4 md:p-5 text-[#f97316] font-black text-xs uppercase tracking-wider">Cost Efficiency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="p-4 md:p-5 text-white font-black uppercase text-xs">SEO</td>
                  <td className="p-4 md:p-5 text-gray-300 font-medium">Moderate</td>
                  <td className="p-4 md:p-5 text-green-400 font-bold uppercase tracking-tight">Excellent</td>
                  <td className="p-4 md:p-5 text-green-400 font-bold uppercase tracking-tight">Excellent</td>
                </tr>
                <tr>
                  <td className="p-4 md:p-5 text-white font-bold text-xs uppercase">Google Ads</td>
                  <td className="p-4 md:p-5 text-gray-300 font-medium">Fast</td>
                  <td className="p-4 md:p-5 text-red-500 font-medium">Low</td>
                  <td className="p-4 md:p-5 text-gray-300 font-medium">Moderate</td>
                </tr>
                <tr>
                  <td className="p-4 md:p-5 text-white font-bold text-xs uppercase">Social Media Ads</td>
                  <td className="p-4 md:p-5 text-gray-300 font-medium">Fast</td>
                  <td className="p-4 md:p-5 text-gray-300 font-medium">Moderate</td>
                  <td className="p-4 md:p-5 text-gray-300 font-medium">Moderate</td>
                </tr>
                <tr>
                  <td className="p-4 md:p-5 text-white font-bold text-xs uppercase">Direct Mail</td>
                  <td className="p-4 md:p-5 text-gray-300 font-medium">Low</td>
                  <td className="p-4 md:p-5 text-red-500 font-medium">Low</td>
                  <td className="p-4 md:p-5 text-red-500 font-medium">Low</td>
                </tr>
                <tr>
                  <td className="p-4 md:p-5 text-white font-bold text-xs uppercase">Referral Marketing</td>
                  <td className="p-4 md:p-5 text-gray-300 font-medium">Variable</td>
                  <td className="p-4 md:p-5 text-green-400 font-bold uppercase">Strong</td>
                  <td className="p-4 md:p-5 text-green-400 font-bold uppercase">Strong</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center mt-6">
            <p className="text-xs text-gray-400">
              The strongest growth strategies often combine SEO with other marketing efforts, but SEO remains one of the most cost-effective lead generation channels over the long term. If you run PPC trials, check our dedicated <Link to="/pricing/google-ads-sem" className="text-orange-400 hover:underline">Google Ads and SEM structures</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Trust & Commitments */}
      <section className="py-24 px-4 md:px-6 relative bg-[#040814] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs text-blue-500 font-black tracking-widest uppercase">Transparency</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mt-2 mb-4">
              Trust & Absolute Transparency
            </h2>
            <p className="text-gray-400 text-sm font-semibold">What Clients Value Most in Our Partnerships</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0b101c] p-6 rounded-2xl border border-white/10">
              <span className="text-xs text-orange-400 font-black uppercase tracking-wider block mb-2">Benefit 1</span>
              <h4 className="text-base font-black text-white uppercase italic tracking-tight mb-2">Increased Visibility</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Businesses gain stronger local search presence and greater exposure to potential customers. Let's design these systems together. Check our credentials on the <Link to="/about" className="text-orange-400 hover:underline">Ritehly Quimbo about page</Link>.
              </p>
            </div>

            <div className="bg-[#0b101c] p-6 rounded-2xl border border-white/10">
              <span className="text-xs text-orange-400 font-black uppercase tracking-wider block mb-2">Benefit 2</span>
              <h4 className="text-base font-black text-white uppercase italic tracking-tight mb-2">Better Lead Quality</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Higher rankings often attract homeowners actively seeking specialized electrical help, converting faster. Review previous buyer structures in our <Link to="/portfolio" className="text-orange-400 hover:underline font-semibold">case studies portal</Link>.
              </p>
            </div>

            <div className="bg-[#0b101c] p-6 rounded-2xl border border-white/10">
              <span className="text-xs text-orange-400 font-black uppercase tracking-wider block mb-2">Benefit 3</span>
              <h4 className="text-base font-black text-white uppercase italic tracking-tight mb-2">Long-Term Growth</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Unlike paid ads, SEO continues generating value long after optimization work is completed, keeping operational acquisition costs lean. Consult our <Link to="/contact" className="text-orange-400 hover:underline">Consultation booking desk</Link> directly to schedule milestones.
              </p>
            </div>
          </div>

          {/* Commitments list */}
          <div className="grid md:grid-cols-2 gap-8 mt-12 p-8 bg-[#0a0e1a]/80 border border-white/10 rounded-3xl">
            <div className="space-y-4">
              <h4 className="text-sm font-black uppercase italic text-red-500 tracking-wider">We Will Never Promise:</h4>
              <div className="space-y-2">
                {neverPromise.map((item, id) => (
                  <div key={id} className="flex items-center gap-2.5 text-xs text-gray-300">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-black uppercase italic text-green-500 tracking-wider">We Will Promise:</h4>
              <div className="space-y-2">
                {promisedStandards.map((item, id) => (
                  <div key={id} className="flex items-center gap-2.5 text-xs text-gray-300">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-24 px-4 md:px-6 bg-[#050914] relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs text-orange-500 font-black tracking-widest uppercase">FAQ</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mt-2 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 text-sm font-semibold">Clarifying core questions about Electrician SEO</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="glass-morphism border border-white/10 rounded-2xl overflow-hidden pointer-events-none"
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

      {/* Final Conversion Call-To-Action */}
      <section className="py-24 px-4 md:px-6 relative text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_60%)] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10 glass-morphism rounded-[2.5rem] border border-white/10 p-8 md:p-16">
          <span className="text-[10px] font-black text-orange-400 bg-orange-500/10 px-3 py-1.5 rounded-full uppercase tracking-widest block mb-4 w-fit mx-auto">
            Ignite Electrical Enquiries
          </span>
          <h2 className="text-3xl md:text-6xl font-black uppercase italic tracking-tighter mb-6 leading-none">
            Ready to Generate More Electrical Leads?
          </h2>
          <p className="text-sm md:text-lg text-gray-300 font-medium leading-relaxed max-w-2xl mx-auto mb-4">
            Your next customer is already searching for an electrician. The question is whether they find your business or a competitor.
          </p>
          <p className="text-sm md:text-base text-orange-400 font-black uppercase italic tracking-widest mb-10">
            Our SEO services for electricians help electrical contractors improve rankings, increase visibility, generate qualified leads, and grow revenue through sustainable organic search marketing.
          </p>

          <div className="bg-[#0f172a]/80 p-6 rounded-2xl border border-white/5 max-w-lg mx-auto text-left mb-8 space-y-2">
            <span className="text-[10px] font-black uppercase tracking-wider text-blue-400 block">Electrician SEO Audit Discoveries:</span>
            <div className="text-xs text-gray-300">✓ Current ranking opportunities & local SEO gaps</div>
            <div className="text-xs text-gray-300">✓ Competitor visibility advantages & physical coordinates</div>
            <div className="text-xs text-gray-300">✓ Technical site issues limiting mobile booking speed</div>
            <div className="text-xs text-gray-300">✓ Highly responsive quote and phone lead generation setups</div>
          </div>

          <button
            onClick={onBook}
            className="px-10 py-5 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-black uppercase italic tracking-tight text-base md:text-lg rounded-2xl transition-all shadow-2xl shadow-orange-500/40 hover:scale-[1.02] flex items-center justify-center gap-3 mx-auto cursor-pointer"
          >
            <span>Book Your Free Consultation Today</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ElectricianSEOPage;
