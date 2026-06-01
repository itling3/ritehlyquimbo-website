import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  XCircle, 
  Search, 
  ArrowRight, 
  MapPin, 
  FileText, 
  Settings, 
  ChevronDown,
  AlertTriangle,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
  Award,
  Star,
  Zap,
  Flame,
  Activity
} from 'lucide-react';
import SEO from '../components/SEO';

interface RoofersSEOProps {
  onBook: (e?: React.MouseEvent) => void;
}

const RoofersSEOPage: React.FC<RoofersSEOProps> = ({ onBook }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const targetedKeywords = [
    "Roof repair near me",
    "Roofing contractor",
    "Emergency roof repair",
    "Roof replacement company",
    "Commercial roofing services"
  ];

  const valuePillars = [
    {
      title: "Comprehensive Roofing SEO Strategy",
      feature: "Custom SEO campaign built specifically for roofing businesses.",
      benefit: "Better rankings for the services that generate revenue."
    },
    {
      title: "Local Market Optimization",
      feature: "City, suburb, and service-area targeting.",
      benefit: "Increased visibility where your customers are searching."
    },
    {
      title: "Google Business Profile Optimization",
      feature: "Complete local profile optimization.",
      benefit: "Higher map rankings and more local calls."
    },
    {
      title: "Technical SEO Improvements",
      feature: "Website performance and technical audits.",
      benefit: "Better user experience and improved rankings."
    },
    {
      title: "Content Creation",
      feature: "Roofing-focused content strategy.",
      benefit: "Builds trust and attracts organic traffic."
    },
    {
      title: "Authority Link Building",
      feature: "High-quality backlink acquisition.",
      benefit: "Stronger domain authority and competitive rankings."
    },
    {
      title: "Conversion Optimization",
      feature: "Lead generation-focused website improvements.",
      benefit: "More calls, quote requests, and booked jobs."
    }
  ];

  const trustSignals = [
    "Transparent reporting",
    "Monthly performance tracking",
    "Clear deliverables",
    "Ethical SEO practices",
    "No black-hat tactics",
    "Ongoing communication",
    "Customized strategy development"
  ];

  const faqs = [
    {
      question: "How long does roofing SEO take?",
      answer: "Most roofing companies begin seeing measurable improvements within 3 to 6 months, with stronger results typically developing over 6 to 12 months."
    },
    {
      question: "Is SEO better than Google Ads for roofers?",
      answer: "SEO and Google Ads work best together. SEO provides long-term lead generation while reducing dependence on paid advertising."
    },
    {
      question: "Can you help my roofing company rank in multiple cities?",
      answer: "Yes. We create service-area and location-specific SEO strategies that help roofing companies expand visibility across multiple markets."
    },
    {
      question: "Do you optimize Google Business Profiles?",
      answer: "Absolutely. Google Business Profile optimization is a critical part of local roofing SEO."
    },
    {
      question: "What roofing keywords do you target?",
      answer: "We target high-intent keywords such as roof repair, roof replacement, roofing contractor, emergency roofing, commercial roofing, and location-specific searches."
    },
    {
      question: "Will I receive SEO reports?",
      answer: "Yes. We provide regular reporting that tracks rankings, traffic, visibility, and lead-generation performance."
    },
    {
      question: "Do you require long-term contracts?",
      answer: "We focus on long-term partnerships but maintain transparency regarding campaign expectations, deliverables, and timelines."
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white overflow-hidden">
      <SEO 
        title="SEO Services for Roofers | Get More Roofing Leads"
        description="Grow your roofing business with SEO services for roofers. Rank higher in Google, generate qualified local leads, increase calls, and book more roofing jobs with a proven SEO strategy."
        keywords="seo services for roofers, roofing seo, roofer seo, seo for roofing companies, roofing leads"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-6 overflow-hidden">
        {/* Soft geometric sky glow background (similar to high-elevation rooflines) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(249,115,22,0.1),transparent_70%)] pointer-events-none"></div>
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>
        
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
              Roofline Authority Domination
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase italic tracking-tighter leading-[0.9] mb-6">
              SEO Services for <span className="text-orange-500">Roofers</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 font-extrabold leading-tight mb-4 text-orange-400">
              Get More Roofing Leads with SEO Services for Roofers
            </p>

            <p className="text-base md:text-lg text-gray-300 font-bold mb-6">
              Stop relying on expensive lead platforms and start generating qualified roofing leads directly from Google.
            </p>

            <p className="text-sm md:text-base text-gray-400 font-normal leading-relaxed mb-8">
              Our SEO services for roofers help roofing companies increase visibility, rank higher in local search results, and consistently attract homeowners and commercial property owners actively searching for roofing services.
              <br /><br />
              Whether you specialize in roof repairs, roof replacements, storm damage restoration, metal roofing, or commercial roofing, our roofing SEO strategies are designed to help you dominate your local market and grow revenue predictably.
              <br /><br />
              By aligning with our proven <Link to="/services" className="text-orange-400 hover:underline font-bold">organic SEO strategies</Link>, we position your company exactly where modern property owners are performing service evaluations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onBook}
                className="px-8 py-5 bg-orange-600 hover:bg-orange-700 text-white font-black rounded-2xl transition-all shadow-2xl shadow-orange-500/30 uppercase tracking-tighter text-base flex items-center justify-center gap-3 group cursor-pointer"
              >
                <span>Get Your Free Roofing SEO Audit</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Visual Component highlighting Geographic Authority */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 glass-morphism rounded-[2.5rem] border border-white/10 p-6 md:p-8 shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] bg-[#0f172a]/40">
              <h3 className="text-xl font-black uppercase italic tracking-tight mb-4 text-orange-400">Scale Regional Revenue</h3>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                Roofing leads should belong to your brand, not third-party bidding aggregates. Map out your commercial expansion coordinates across our <Link to="/locations" className="text-orange-400 hover:underline font-semibold">service boundary database</Link>, or design a predictable campaign using our custom <Link to="/pricing/local-seo-strategy" className="text-orange-400 hover:underline">Local SEO strategy pricing models</Link>.
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 shrink-0">
                    <Activity className="w-4 h-4 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white uppercase tracking-tight font-sans">Immediate Brand Authority</h4>
                    <p className="text-xs text-gray-400 mt-1">Structure critical local search credentials directly to outpace competitors inside high-interest areas.</p>
                  </div>
                </div>

                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                    <ShieldCheck className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white uppercase tracking-tight font-sans">Verified Acquisition Frameworks</h4>
                    <p className="text-xs text-gray-400 mt-1">We optimize local signals and citations, allowing you to secure leads without paying per click.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Ambient Background Glow */}
            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-orange-600/10 blur-[100px] rounded-full pointer-events-none"></div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1: Why Most Roofing Companies Struggle to Generate Consistent Leads */}
      <section className="py-24 px-4 md:px-6 relative bg-gradient-to-b from-[#030712] to-black border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs text-red-500 font-black tracking-widest uppercase">The Challenges</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mt-2 mb-4">
              Why Most Roofing Companies Struggle to Generate Consistent Leads
            </h2>
            <p className="text-gray-400 text-sm font-semibold">
              The roofing industry is one of the most competitive local service markets online.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Left Box: High-intent queries */}
            <div className="bg-[#0c101d] border border-white/10 rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-black uppercase italic text-orange-400 mb-4 flex items-center gap-2">
                  <Search className="w-5 h-5 text-orange-500" /> Core Local Searches
                </h3>
                <p className="text-gray-450 text-xs mb-6 font-medium leading-relaxed">
                  When homeowners or commercial property owners search for help, Google displays a highly selective cluster of top-tier contractors. If your roofing company is not prominent, those high-value contracts route straight to competitors.
                </p>
                
                <span className="text-[10px] text-gray-500 uppercase font-black tracking-wider block mb-2">High-Intent Keywords We Target:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl text-xs font-bold text-gray-300 italic">"Roof repair near me"</div>
                  <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl text-xs font-bold text-gray-300 italic">"Roofing contractor"</div>
                  <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl text-xs font-bold text-gray-300 italic">"Emergency roof repair"</div>
                  <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl text-xs font-bold text-gray-300 italic">"Roof replacement company"</div>
                  <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl text-xs font-bold text-gray-300 italic">"Commercial roofing services"</div>
                </div>
              </div>
              
              <div className="mt-8 pt-4 border-t border-white/5 text-xs text-gray-500 italic font-semibold">
                Google typically displays only a handful of businesses on page one. Ensure your service area coverage maps accurately within our <Link to="/locations" className="text-orange-400 hover:underline">geographic landing configurations</Link>.
              </div>
            </div>

            {/* Right Box: The 7 Challenges */}
            <div className="space-y-4 flex flex-col justify-center">
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex gap-3.5 items-start">
                <span className="text-red-500 font-bold text-lg">■</span>
                <div>
                  <h4 className="text-xs font-black uppercase text-white">Dependence on lead generation websites</h4>
                  <p className="text-[11px] text-gray-400 mt-1">Paying high fees for shared leads that competitors are dialing simultaneously.</p>
                </div>
              </div>

              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex gap-3.5 items-start">
                <span className="text-red-500 font-bold text-lg">■</span>
                <div>
                  <h4 className="text-xs font-black uppercase text-white">Rising Google Ads costs</h4>
                  <p className="text-[11px] text-gray-400 mt-1">Pay-per-click margins are continuously increasing, making search campaign efficiency difficult.</p>
                </div>
              </div>

              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex gap-3.5 items-start">
                <span className="text-red-500 font-bold text-lg">■</span>
                <div>
                  <h4 className="text-xs font-black uppercase text-white">Inconsistent lead flow throughout the year</h4>
                  <p className="text-[11px] text-gray-400 mt-1">Unpredictable volume declines outside of major dynamic weather seasons.</p>
                </div>
              </div>

              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex gap-3.5 items-start">
                <span className="text-red-500 font-bold text-lg">■</span>
                <div>
                  <h4 className="text-xs font-black uppercase text-white">Low visibility in Google Maps</h4>
                  <p className="text-[11px] text-gray-400 mt-1">Failures to show up consistently inside Google's highly visual Map Pack.</p>
                </div>
              </div>

              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex gap-3.5 items-start">
                <span className="text-red-500 font-bold text-lg">■</span>
                <div>
                  <h4 className="text-xs font-black uppercase text-white">Competitors outranking them</h4>
                  <p className="text-[11px] text-gray-400 mt-1">Industry competitors receiving the dominant search and contact volume.</p>
                </div>
              </div>
              
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex gap-3.5 items-start">
                <span className="text-red-500 font-bold text-lg">■</span>
                <div>
                  <h4 className="text-xs font-black uppercase text-white">Poor website performance & low conversions</h4>
                  <p className="text-[11px] text-gray-400 mt-1">Slow load speeds and weak calls-to-action that actively drive traffic away.</p>
                </div>
              </div>

              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex gap-3.5 items-start">
                <span className="text-red-500 font-bold text-lg">■</span>
                <div>
                  <h4 className="text-xs font-black uppercase text-white">Limited brand recognition in service areas</h4>
                  <p className="text-[11px] text-gray-400 mt-1">Failing to capture native consumer familiarity over the long term.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Roofing SEO That Turns Search Traffic into Qualified Leads */}
      <section className="py-24 px-4 md:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs text-orange-500 font-black tracking-widest uppercase">Our Methodology</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mt-2 mb-4">
              Roofing SEO That Turns Search Traffic into Qualified Leads
            </h2>
            <p className="text-gray-400 text-sm font-semibold">
              Our SEO services for roofers are designed specifically for roofing businesses that want sustainable growth. Instead of chasing short-term traffic, we build a long-term SEO strategy that helps your company become the trusted roofing authority in your service area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Process 1 */}
            <div className="p-8 bg-[#0b0f19] border border-white/10 rounded-3xl space-y-4">
              <div className="inline-flex p-3 bg-orange-500/10 rounded-xl text-orange-500">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black uppercase italic text-white">Local SEO Optimization</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                We optimize your website and business profiles to improve visibility in Google Maps, Local Pack rankings, local search results, and service-area searches. Connect this seamlessly with our customized <Link to="/pricing/local-seo-strategy" className="text-orange-400 hover:underline">Local SEO strategy pricing models</Link>, matching local business structures mapped by the <a href="https://schema.org/RoofingContractor" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline font-bold">Schema.org RoofingContractor specifications</a>.
              </p>
            </div>

            {/* Process 2 */}
            <div className="p-8 bg-[#0b0f19] border border-white/10 rounded-3xl space-y-4">
              <div className="inline-flex p-3 bg-orange-500/10 rounded-xl text-orange-500">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black uppercase italic text-white">Roofing Keyword Research</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                We identify high-intent keywords that generate leads, including roof repair, roof replacement, metal roofing, emergency roofing, commercial roofing, storm damage roofing, and residential roofing services. We optimize standard profiles to align with <a href="https://support.google.com/business/answer/3038177" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline font-bold">Google's official instructions for representing local operations</a>.
              </p>
            </div>

            {/* Process 3 */}
            <div className="p-8 bg-[#0b0f19] border border-white/10 rounded-3xl space-y-4">
              <div className="inline-flex p-3 bg-orange-500/10 rounded-xl text-orange-500">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black uppercase italic text-white">Service Area SEO</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                We create optimized location pages targeting every city, suburb, and neighborhood you serve, expanding regional authority. Compare localized strategies on our <Link to="/pricing" className="text-orange-400 hover:underline font-bold">main SEO packages dashboard</Link> to calibrate regional coverage.
              </p>
            </div>

            {/* Process 4 */}
            <div className="p-8 bg-[#0b0f19] border border-white/10 rounded-3xl space-y-4">
              <div className="inline-flex p-3 bg-orange-500/10 rounded-xl text-orange-500">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black uppercase italic text-white">Content Marketing</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                We publish authoritative roofing content that answers customer questions and demonstrates expertise. For content CMS integrations, inspect our optimized <Link to="/services/cms-seo/wordpress-seo-expert" className="text-orange-400 hover:underline">WordPress CMS SEO setups</Link>, or explore lightweight structures via <Link to="/services/cms-seo/squarespace-seo-expert" className="text-orange-400 hover:underline">Squarespace CMS SEO workflows</Link>.
              </p>
            </div>

            {/* Process 5 */}
            <div className="p-8 bg-[#0b0f19] border border-white/10 rounded-3xl space-y-4">
              <div className="inline-flex p-3 bg-orange-500/10 rounded-xl text-orange-500">
                <Settings className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black uppercase italic text-white">Technical SEO</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                We improve site speed, mobile usability, crawlability, indexation, Core Web Vitals, and website architecture. Enterprise roofing platforms can integrate our <Link to="/services/cms-seo/drupal-seo-expert" className="text-orange-400 hover:underline">Drupal CMS SEO structures</Link>. Measure your baseline performance instantly using <a href="https://pagespeed.web.dev" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline font-bold">Google's PageSpeed Insights analyzer</a>.
              </p>
            </div>

            {/* Process 6 */}
            <div className="p-8 bg-[#0b0f19] border border-white/10 rounded-3xl space-y-4">
              <div className="inline-flex p-3 bg-orange-500/10 rounded-xl text-orange-500">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black uppercase italic text-white">Link Building</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                We earn high-quality backlinks that strengthen your website's authority and improve rankings, creating a resilient moat.
              </p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-[#0a0f1d] border border-white/15 rounded-2xl text-center max-w-3xl mx-auto">
            <h3 className="text-lg font-black text-white uppercase italic">The Result</h3>
            <p className="text-xs text-gray-400 mt-1 font-semibold leading-relaxed">
              A roofing website that attracts more qualified visitors, generates more calls, and produces more estimate requests systematically.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: Real Roofing SEO Experience That Delivers Results */}
      <section className="py-24 px-4 md:px-6 bg-[#040815] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs text-orange-500 font-black tracking-widest uppercase">Case Studies</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-white">
              Real Roofing SEO Experience That Delivers Results
            </h2>
            <p className="text-gray-450 text-sm leading-relaxed font-semibold">
              Roofing SEO is different from SEO for other industries. Homeowners often need roofing services during urgent situations. They search with strong purchase intent and expect immediate trust signals. Over the years, we've observed consistent patterns among successful roofing companies:
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {/* Example 1 */}
            <div className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl">
              <h3 className="text-base font-black text-orange-500 uppercase italic tracking-wide mb-2">Example 1: Local Roof Repair Contractor</h3>
              <p className="text-xs text-gray-300 leading-relaxed font-semibold">
                A roofing company ranking beyond page two for local repair keywords implemented: service-area landing pages, Google Business Profile optimization, local citation cleanup, and a structured review acquisition strategy.
              </p>
              <div className="text-xs text-green-400 mt-3 font-bold uppercase tracking-tight">
                Result: Increased local visibility, more phone inquiries, and improved map rankings.
              </div>
            </div>

            {/* Example 2 */}
            <div className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl">
              <h3 className="text-base font-black text-orange-500 uppercase italic tracking-wide mb-2">Example 2: Commercial Roofing Company</h3>
              <p className="text-xs text-gray-300 leading-relaxed font-semibold">
                A commercial roofing contractor expanded into multiple cities using: location-based SEO, industry-specific content, and authority-building backlinks. Secure your position across similar frameworks inside our comprehensive <Link to="/portfolio" className="text-orange-400 hover:underline">growth marketing portfolio</Link>.
              </p>
              <div className="text-xs text-green-400 mt-3 font-bold uppercase tracking-tight">
                Result: Expanded geographic reach and increased qualified commercial inquiries.
              </div>
            </div>

            {/* Example 3 */}
            <div className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl">
              <h3 className="text-base font-black text-orange-500 uppercase italic tracking-wide mb-2">Example 3: Storm Damage Roofing Specialist</h3>
              <p className="text-xs text-gray-300 leading-relaxed font-semibold">
                Following severe weather events, optimized emergency roofing pages helped capture high-intent searches and generate immediate storm damage leads.
              </p>
              <div className="text-xs text-gray-400 mt-3 leading-relaxed font-semibold">
                These examples highlight how roofing-specific SEO strategies produce measurable business outcomes, backed by lead conversion frameworks crafted with the standards detailed on our <Link to="/about" className="text-orange-400 hover:underline">agency About page</Link>.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Features and Benefits of Our SEO Services for Roofers */}
      <section className="py-24 px-4 md:px-6 bg-[#030712]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs text-blue-500 font-black tracking-widest uppercase">The Inventory</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mt-2 mb-4">
              Features and Benefits of Our SEO Services for Roofers
            </h2>
            <p className="text-gray-400 text-sm font-semibold">Custom-built solutions engineered for roofing business expansion:</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valuePillars.map((p, idx) => (
              <div key={idx} className="bg-[#0b101d] border border-white/10 hover:border-orange-500/30 transition-all rounded-3xl p-6 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-base font-black uppercase italic text-white tracking-wider">{p.title}</h3>
                  <div className="text-xs text-orange-405 text-orange-400 font-extrabold uppercase">Feature: {p.feature}</div>
                  <p className="text-xs text-gray-400 leading-relaxed font-semibold">Benefit: {p.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Roofing Industry Expertise You Can Trust */}
      <section className="py-24 px-4 md:px-6 bg-[#050914] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Block: Approach */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs text-orange-500 font-black tracking-widest uppercase">Real Authority</span>
              <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-white">
                Roofing Industry Expertise You Can Trust
              </h2>
              <p className="text-gray-400 text-sm font-semibold leading-relaxed">
                SEO success requires more than simply adding keywords to a website. Our approach combines:
              </p>

              <div className="space-y-4 text-xs text-gray-400 font-semibold">
                <p>• <strong className="text-white uppercase italic">Search Engine Expertise:</strong> We stay updated with search algorithm changes, local ranking factors, and SEO best practices.</p>
                <p>• <strong className="text-white uppercase italic">Roofing Industry Knowledge:</strong> We understand how roofing customers search, compare contractors, and make purchasing decisions.</p>
                <p>• <strong className="text-white uppercase italic">Local Search Experience:</strong> We focus heavily on Google Maps rankings, local citations, service-area optimization, and reputation management.</p>
                <p>• <strong className="text-white uppercase italic">Data-Driven Decision Making:</strong> Every recommendation is supported by search data, competitor analysis, user behavior insights, and performance tracking.</p>
              </div>

              <p className="text-xs text-gray-500 font-bold leading-relaxed pt-2 border-t border-white/5">
                This allows us to prioritize strategies that generate real business growth rather than vanity metrics.
              </p>
            </div>

            {/* Right Block: Interactive Value Pillars */}
            <div className="lg:col-span-7 bg-[#0b0f19] border border-white/10 rounded-3xl p-8 space-y-6">
              <span className="text-[10px] text-orange-400 font-black uppercase tracking-wider block">Local Search Authority</span>
              <h3 className="text-xl font-black uppercase italic text-white tracking-tight">Long-Term Growth Frameworks</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                We design fully authority-compliant lead generation models, allowing you to establish localized dominance.
              </p>

              <div className="grid gap-4 mt-2">
                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                  <span className="text-xs font-black uppercase text-blue-400 block">Google Maps rankings</span>
                  <p className="text-xs text-gray-400 mt-1">Positioning your business profile exactly where local map queries trigger.</p>
                </div>
                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                  <span className="text-xs font-black uppercase text-blue-400 block">Service-area optimization</span>
                  <p className="text-xs text-gray-400 mt-1">Expanding search visibility outwards into all target boroughs and cities.</p>
                </div>
                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                  <span className="text-xs font-black uppercase text-blue-400 block">Reputation management</span>
                  <p className="text-xs text-gray-400 mt-1">Fostering high-trust buyer review acquisition programs systematically.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Trusted by Roofing Companies Looking for Long-Term Growth */}
      <section className="py-24 px-4 md:px-6 relative bg-[#040814] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs text-orange-500 font-black tracking-widest uppercase">Client Voices</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mt-2 mb-4">
              Trusted by Roofing Companies Looking for Long-Term Growth
            </h2>
            <p className="text-gray-400 text-sm font-semibold">What Clients Appreciate Modelled and Communicated:</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-[#0b101c] p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-orange-500 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-orange-500" />)}
                </div>
                <p className="text-xs text-gray-300 italic mb-4 leading-relaxed">
                  "Lead quality improved significantly after implementing the SEO strategy. We now receive consistent inquiries from homeowners actively searching for roofing services."
                </p>
              </div>
              <span className="text-[10px] text-gray-500 uppercase font-black block mt-2">— Local Roof Repair Contractor</span>
            </div>

            <div className="bg-[#0b101c] p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-orange-500 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-orange-500" />)}
                </div>
                <p className="text-xs text-gray-300 italic mb-4 leading-relaxed">
                  "Our Google Maps visibility increased and estimate requests started growing month after month."
                </p>
              </div>
              <span className="text-[10px] text-gray-500 uppercase font-black block mt-2">— Regional Residential Roofer</span>
            </div>

            <div className="bg-[#0b101c] p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-orange-500 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-orange-500" />)}
                </div>
                <p className="text-xs text-gray-300 italic mb-4 leading-relaxed">
                  "The transparency and reporting made it easy to understand exactly what was being done and why."
                </p>
              </div>
              <span className="text-[10px] text-gray-500 uppercase font-black block mt-2">— Commercial Roofing Specialist</span>
            </div>
          </div>

          {/* Trust Signals and Commitment list */}
          <div className="p-8 bg-[#0a0e1a]/80 border border-white/10 rounded-3xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-sm font-black uppercase italic text-orange-500 tracking-wider">Our Trust Signals:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {trustSignals.map((sig, id) => (
                    <div key={id} className="flex items-center gap-2 text-xs text-gray-350 font-bold">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0" />
                      <span>{sig}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-black uppercase italic text-blue-400 tracking-wider">Our Commitment:</h4>
                <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                  We never guarantee specific rankings because no legitimate SEO provider can control Google's algorithms. What we do guarantee is a strategic, proven process focused on increasing visibility, traffic, and lead generation over time. Consult our team directly via our <Link to="/contact" className="text-orange-400 hover:underline">Consultation & Contact Desk</Link> to schedule a milestone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Why Our SEO Services for Roofers Are Different */}
      <section className="py-24 px-4 md:px-6 relative bg-gradient-to-b from-black to-[#030712] border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs text-orange-500 font-black tracking-widest uppercase">The Differentiation</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-white">
              Why Our SEO Services for Roofers Are Different
            </h2>
            <p className="text-gray-400 text-sm font-semibold mt-2">Many SEO agencies use the same strategy for every industry. Roofing companies require a specialized approach.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Generic Agencies */}
            <div className="bg-[#110e0e]/40 p-6 rounded-2xl border border-red-500/15">
              <h3 className="text-sm font-black text-red-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <XCircle className="w-4 h-4 text-red-500" /> Generic SEO Agencies
              </h3>
              <ul className="space-y-3 text-xs text-gray-450 font-semibold">
                <li className="flex items-start gap-2">• <span>Limited roofing knowledge</span></li>
                <li className="flex items-start gap-2">• <span>Generic content</span></li>
                <li className="flex items-start gap-2">• <span>Broad keyword targeting</span></li>
                <li className="flex items-start gap-2">• <span>Minimal local optimization</span></li>
              </ul>
            </div>

            {/* Our Roofing SEO Approach */}
            <div className="bg-[#0e111d]/50 p-6 rounded-2xl border border-green-500/15">
              <h3 className="text-sm font-black text-green-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> Our Roofing SEO Approach
              </h3>
              <ul className="space-y-3 text-xs text-gray-300 font-bold">
                <li className="flex items-start gap-2">• <span>Roofing-focused keyword research</span></li>
                <li className="flex items-start gap-2">• <span>Local lead generation strategies</span></li>
                <li className="flex items-start gap-2">• <span>Service-area expansion campaigns</span></li>
                <li className="flex items-start gap-2">• <span>Google Business Profile optimization</span></li>
                <li className="flex items-start gap-2">• <span>Conversion-focused website improvements</span></li>
                <li className="flex items-start gap-2">• <span>Roofing industry content marketing</span></li>
              </ul>
            </div>
          </div>

          <p className="text-center text-xs text-gray-500 mt-6 leading-relaxed">
            The result is a strategy built around generating roofing leads rather than simply increasing traffic. Take a step towards high-intent conversion growth today.
          </p>
        </div>
      </section>

      {/* SECTION 8: Frequently Asked Questions */}
      <section className="py-24 px-4 md:px-6 bg-[#050914] relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs text-orange-500 font-black tracking-widest uppercase">FAQ</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mt-2 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 text-sm font-semibold">Clarifying core mechanics of Roofing SEO</p>
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
                    <p className="text-sm text-gray-400 leading-relaxed font-semibold">
                      {faq.answer}
                      {index === 1 && (
                        <span> If you are also interested in paid acquisition channels, comparison frameworks exist on our <Link to="/pricing/google-ads-sem" className="text-orange-400 hover:underline">Google Ads and SEM pricing channels</Link>.</span>
                      )}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: Ready to Generate More Roofing Leads? */}
      <section className="py-24 px-4 md:px-6 relative text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.1),transparent_60%)] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10 glass-morphism rounded-[2.5rem] border border-white/10 p-8 md:p-16 bg-[#0f172a]/50">
          <span className="text-[10px] font-black text-orange-400 bg-orange-500/10 px-3 py-1.5 rounded-full uppercase tracking-widest block mb-4 w-fit mx-auto">
            Book Estimations Instantly
          </span>
          <h2 className="text-3xl md:text-6xl font-black uppercase italic tracking-tighter mb-6 leading-none">
            Ready to Generate More Roofing Leads?
          </h2>
          <p className="text-sm md:text-lg text-gray-300 font-medium leading-relaxed max-w-2xl mx-auto mb-6">
            Your next customer is already searching for roofing services online. The question is whether they find your company or your competitors.
          </p>
          <p className="text-sm md:text-base text-orange-400 font-black uppercase italic tracking-widest mb-10">
            With a proven roofing SEO strategy, you can increase local visibility, generate qualified leads, strengthen your online authority, and create a reliable source of long-term growth. Get your free Roofing SEO audit today and discover the opportunities currently being missed in your market.
          </p>

          {/* CTA Options displayed beautifully in structural visual cards to prevent clunky margins */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left mb-10">
            <div 
              onClick={onBook}
              className="p-5 bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-orange-500/50 rounded-2xl cursor-pointer transition-all flex items-center justify-between group"
            >
              <div>
                <span className="text-[9px] uppercase tracking-widest font-black text-gray-500 group-hover:text-orange-400">Option 1</span>
                <h4 className="text-xs font-black uppercase text-white mt-1">Book a Free Roofing SEO Strategy Call</h4>
              </div>
              <ArrowRight className="w-4 h-4 text-orange-500 shrink-0" />
            </div>

            <div 
              onClick={onBook}
              className="p-5 bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-orange-500/50 rounded-2xl cursor-pointer transition-all flex items-center justify-between group"
            >
              <div>
                <span className="text-[9px] uppercase tracking-widest font-black text-gray-500 group-hover:text-orange-400">Option 2</span>
                <h4 className="text-xs font-black uppercase text-white mt-1">Get My Free Roofing SEO Audit</h4>
              </div>
              <ArrowRight className="w-4 h-4 text-orange-500 shrink-0" />
            </div>

            <div 
              onClick={onBook}
              className="p-5 bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-orange-500/50 rounded-2xl cursor-pointer transition-all flex items-center justify-between group"
            >
              <div>
                <span className="text-[9px] uppercase tracking-widest font-black text-gray-500 group-hover:text-orange-400">Option 3</span>
                <h4 className="text-xs font-black uppercase text-white mt-1">Request a Custom Roofing SEO Proposal</h4>
              </div>
              <ArrowRight className="w-4 h-4 text-orange-500 shrink-0" />
            </div>

            <div 
              onClick={onBook}
              className="p-5 bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-orange-500/50 rounded-2xl cursor-pointer transition-all flex items-center justify-between group"
            >
              <div>
                <span className="text-[9px] uppercase tracking-widest font-black text-gray-500 group-hover:text-orange-400">Option 4</span>
                <h4 className="text-xs font-black uppercase text-white mt-1 font-sans">See How Many Roofing Leads You're Missing</h4>
              </div>
              <ArrowRight className="w-4 h-4 text-orange-500 shrink-0" />
            </div>
          </div>

          <button
            onClick={onBook}
            className="px-10 py-5 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-black uppercase italic tracking-tight text-base md:text-lg rounded-2xl transition-all shadow-2xl shadow-orange-500/40 hover:scale-[1.02] flex items-center justify-center gap-3 mx-auto cursor-pointer"
          >
            <span>Schedule a Free Growth Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default RoofersSEOPage;
