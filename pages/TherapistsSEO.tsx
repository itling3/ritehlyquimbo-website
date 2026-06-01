import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  XCircle, 
  Search, 
  ArrowRight, 
  Heart, 
  Compass, 
  ShieldAlert, 
  Sparkles, 
  Calendar, 
  MapPin, 
  UserCheck, 
  ChevronDown, 
  Star, 
  Users, 
  BookOpen, 
  Activity, 
  FileText, 
  Award, 
  Layers
} from 'lucide-react';
import SEO from '../components/SEO';

interface TherapistsSEOProps {
  onBook: (e?: React.MouseEvent) => void;
}

const TherapistsSEOPage: React.FC<TherapistsSEOProps> = ({ onBook }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const challenges = [
    {
      title: "You have a website, but it doesn't rank on Google",
      desc: "An elegant online brochure provides zero business growth if clients never discover it."
    },
    {
      title: "You rely heavily on directory subscriptions",
      desc: "Being buried among hundreds of other practitioners on generic list boards lowers your premium positioning."
    },
    {
      title: "Competitors appear above you—even with less experience",
      desc: "Less qualified private practices dominate local inquiries simply by having superior search signals."
    },
    {
      title: "Potential clients cannot find you in critical moments",
      desc: "Failing to claim top rankings means losing high-intent localized search opportunities."
    }
  ];

  const outcomes = [
    {
      title: "Higher rankings on Google Maps & local search",
      desc: "Capture ready-to-book local patients inside your exact geographic boundaries."
    },
    {
      title: "More consultation requests",
      desc: "Receive consistent inbound calls and booking inquiries right through your active intake form."
    },
    {
      title: "Increased website traffic from ready-to-book clients",
      desc: "Turn passive search engine visibility into high-intent clinical evaluation bookings."
    },
    {
      title: "Stronger online reputation and credibility",
      desc: "Position your clinical practice as the unassailable, highly trusted local authority."
    }
  ];

  const valuePillars = [
    {
      title: "1. Local SEO Optimization",
      feature: "Google Business Profile optimization.",
      benefit: "Appear in \"near me\" searches and Google Maps results."
    },
    {
      title: "2. Keyword Strategy for Therapy Niches",
      feature: "Niche-targeted keyword selection (Anxiety therapy, Trauma counseling, Couples therapy, Depression treatment SEO targeting).",
      benefit: "Attract clients searching for your exact services."
    },
    {
      title: "3. Conversion-Optimized Website Content",
      feature: "Service pages designed to convert visitors into inquiries.",
      benefit: "More bookings from the same traffic."
    },
    {
      title: "4. Content Marketing for Authority Building",
      feature: "Blog articles targeting client questions.",
      benefit: "Build trust before the first consultation."
    },
    {
      title: "5. Technical SEO Fixes",
      feature: "Site speed improvements, mobile optimization, and indexing fixes.",
      benefit: "Better rankings and user experience."
    },
    {
      title: "6. Link Building & Authority Signals",
      feature: "Ethical, relevant backlinks.",
      benefit: "Higher domain authority and Google trust."
    }
  ];

  const faqs = [
    {
      question: "How long does SEO take for therapists?",
      answer: "Most therapy websites start seeing measurable improvements in 60–120 days, with stronger results building over time."
    },
    {
      question: "Do I need SEO if I already get referrals?",
      answer: "Yes. SEO creates a second consistent client source, reducing dependence on referrals alone."
    },
    {
      question: "Will I rank in my local area?",
      answer: "Yes, local SEO is a core focus. We optimize for your specific city, suburb, or service area."
    },
    {
      question: "What therapy niches do you support?",
      answer: "We support anxiety, depression, trauma, couples therapy, CBT, family therapy, and more."
    },
    {
      question: "Is SEO better than ads for therapists?",
      answer: "SEO typically provides longer-term, more sustainable client acquisition compared to paid ads."
    },
    {
      question: "Do I need a new website?",
      answer: "Not always. Many existing therapy websites can be optimized without a full rebuild."
    },
    {
      question: "Is SEO safe for mental health professionals?",
      answer: "Yes. We use ethical, Google-compliant strategies designed specifically for YMYL industries."
    }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden font-sans">
      <SEO 
        title="SEO Services for Therapists | Get More Private Practice Clients"
        description="Grow your private practice with specialized SEO services for therapists. Rank higher on Google, dominate Google Maps, attract high-intent clients, and fill your calendar."
        keywords="seo services for therapists, therapy seo, seo for counselors, therapy marketing, therapist seo"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 md:px-6 overflow-hidden border-b border-white/5">
        {/* Soft, calming, clinical teal ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(13,148,136,0.12),transparent_70%)] pointer-events-none"></div>
        <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-teal-500/5 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-[10px] font-black uppercase tracking-widest">
              <Heart className="w-3.5 h-3.5 text-teal-400 fill-teal-400/20" />
              Mindful Visibility Expansion
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase italic tracking-tighter leading-[0.9] text-white">
              SEO Services for <span className="text-teal-400 block sm:inline">Therapists</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 font-extrabold leading-tight tracking-tight">
              SEO Services for Therapists That Bring You More Clients, Not Just Traffic
            </p>

            <p className="text-lg text-gray-300 font-medium leading-relaxed">
              SEO Services for Therapists That Fill Your Calendar With Qualified Clients
            </p>

            <p className="text-sm md:text-base text-gray-400 font-normal leading-relaxed">
              If you're a therapist, counselor, or mental health professional struggling to get consistent client inquiries online, you're not alone. Most therapy websites are built to “exist,” not to rank, convert, or generate steady bookings.
              <br /><br />
              Our custom optimization methodologies help private practices get found on Google and turn search traffic into real client appointments. We utilize proven, data-informed organic strategy networks built specifically for mental health professionals.
              <br /><br />
              By aligning your digital footprints with our premium <Link to="/services" className="text-teal-400 hover:text-teal-300 font-bold underline">organic SEO services</Link>, we position your clinic exactly where localized high-intent discovery triggers.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onBook}
                className="px-8 py-5 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white font-black rounded-2xl transition-all shadow-2xl shadow-teal-500/35 uppercase tracking-tight text-base flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>Get a Free SEO Audit & Growth Plan</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 glass-morphism rounded-[2.5rem] border border-white/10 p-8 md:p-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] bg-[#0f172a]/30">
              <h3 className="text-xl font-black uppercase italic tracking-tight mb-4 text-teal-400 flex items-center gap-2">
                <Compass className="w-5 h-5 text-teal-400" /> Private Practice Growth Map
              </h3>
              <p className="text-gray-305 text-sm mb-6 leading-relaxed">
                Connect your brand to patients actively seeking help. To align your organic budget efficiently, explore our customized <Link to="/pricing" className="text-teal-400 hover:text-teal-300 font-semibold underline">SEO service pricing frameworks</Link>, or design a highly targetable geographic reach across our localized <Link to="/locations" className="text-teal-400 hover:text-teal-300 font-semibold underline">service boundaries database</Link>.
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 shrink-0">
                    <UserCheck className="w-5 h-5 text-teal-450" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white uppercase tracking-tight">Active Patient Acquisition</h4>
                    <p className="text-xs text-gray-400 mt-1">We optimize local clinical profile maps to convert search traffic into direct calendar scheduling.</p>
                  </div>
                </div>

                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                    <Award className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white uppercase tracking-tight">E-E-A-T Quality Safeguards</h4>
                    <p className="text-xs text-gray-400 mt-1">We align the architecture of your clinic's blog with Google's medical and core quality algorithms.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-24 px-4 md:px-6 relative bg-gradient-to-b from-[#020617] to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs text-red-500 font-black tracking-widest uppercase">The Disconnect</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mt-2 mb-4 text-white">
              Most Therapists Are Invisible on Google
            </h2>
            <p className="text-gray-450 text-sm font-semibold text-gray-400">
              Even highly skilled therapists often struggle with one major issue: low online visibility.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-stretch">
            {/* Left Block: Description with embedded links & external indicators */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-black uppercase italic text-teal-400">The Directory Ceiling</h3>
                <p className="text-sm text-gray-300 leading-relaxed font-semibold">
                  Most counselors rely heavily on general subscription directories like <a href="https://www.psychologytoday.com/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 hover:underline inline-flex items-center gap-1 font-bold">Psychology Today <span className="text-[9px] font-normal font-sans">↗</span></a>. However, competing alongside hundreds of other local practitioners on lists lowers your premium positioning and brand equity.
                </p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  In today's digital landscape, modern search metrics show that <strong>over 72%</strong> of consumers seeking specialized therapy perform local web searches prior to scheduling. Google prioritizes websites that verify clinical expertise, absolute relevance, and local trustworthiness signals.
                </p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  To reduce directory dependency, ensure your practice implements clean local search configurations. Measure details on our dedicated <Link to="/pricing/local-seo-strategy" className="text-teal-400 hover:text-teal-300 underline font-bold">Local SEO pricing models</Link> page, or inspect how we build regional authorities across our <Link to="/locations" className="text-teal-400 hover:text-teal-350 underline">regional service area maps</Link>.
                </p>
              </div>

              <div className="p-4 bg-red-500/10 border border-red-500/15 rounded-2xl flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div className="text-xs text-gray-300">
                  <strong className="text-white">The Cost of Search Invisibility:</strong>
                  <ul className="list-disc pl-4 mt-1 space-y-0.5">
                    <li>Empty appointment slots and unpredictable income</li>
                    <li>Sinking marketing budgets into shared-lead directories</li>
                    <li>Missed opportunities to help clinical patients who need you</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Block: 4 Challenges Grid & 2026 Search Reality */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-6">
              <div className="grid sm:grid-cols-2 gap-4">
                {challenges.map((challenge, idx) => (
                  <div key={idx} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-red-500/20 transition-all">
                    <span className="text-red-500 text-xs font-black block mb-2">✕ CHALLENGE 0{idx + 1}</span>
                    <h4 className="text-sm font-black text-white uppercase tracking-tight">{challenge.title}</h4>
                    <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">{challenge.desc}</p>
                  </div>
                ))}
              </div>

              {/* Verified CTR statistics block */}
              <div className="p-6 bg-[#0c1020] border border-white/10 rounded-2xl space-y-3">
                <h4 className="text-xs font-black text-teal-400 uppercase tracking-widest font-sans flex items-center gap-2">
                  <Activity className="w-4 h-4 text-teal-400" /> Search CTR Performance Studies (Updated 2026)
                </h4>
                <p className="text-[11px] text-gray-400 leading-relaxed font-semibold">
                  According to comprehensive search analyses by <a href="https://backlinko.com/google-ctr-stats" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 font-extrabold underline inline-flex items-center gap-0.5">Backlinko CTR Studies <span className="text-[8px] font-normal">↗</span></a>, the top natural result gets an average of <strong>27.6% of all organic clicks</strong>. Strikingly, <strong>less than 0.63%</strong> of searchers click on results from page two of Google, making first-page placement an absolute operational necessity for private practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="py-24 px-4 md:px-6 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs text-teal-500 font-black tracking-widest uppercase">The Solution</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mt-2 mb-4 text-white">
              SEO Designed Specifically for Therapists and Private Practices
            </h2>
            <p className="text-gray-400 text-sm font-semibold">
              Our SEO services for therapists are built to solve one core problem: Helping your ideal clients find you at the exact moment they need help.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Graphics/Visual Representation of the Solution */}
            <div className="space-y-6">
              <div className="p-6 bg-[#0b0f19] border border-white/10 rounded-3xl space-y-4">
                <h3 className="text-base font-black text-white uppercase tracking-tight">Our Four-Tier Architecture:</h3>
                
                <div className="space-y-3">
                  <div className="flex gap-3 items-start">
                    <span className="w-5 h-5 rounded bg-teal-500/10 text-teal-400 font-bold text-xs flex items-center justify-center shrink-0">1</span>
                    <p className="text-xs text-gray-300"><strong className="text-teal-400">Local SEO optimization:</strong> Target regional search queries via Map optimization sets.</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="w-5 h-5 rounded bg-teal-500/10 text-teal-400 font-bold text-xs flex items-center justify-center shrink-0">2</span>
                    <p className="text-xs text-gray-300"><strong className="text-teal-400">High-intent keyword targeting:</strong> Capture searchers with high conversion intent.</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="w-5 h-5 rounded bg-teal-500/10 text-teal-400 font-bold text-xs flex items-center justify-center shrink-0">3</span>
                    <p className="text-xs text-gray-300"><strong className="text-teal-400">Authority-Focused Content Hubs:</strong> Satisfy Google's rigorous E-E-A-T and medical trust filters.</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="w-5 h-5 rounded bg-teal-500/10 text-teal-400 font-bold text-xs flex items-center justify-center shrink-0">4</span>
                    <p className="text-xs text-gray-300"><strong className="text-teal-400">Conversion-focused landing components:</strong> Turn high-interest users into calendar consultation bookings.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-r from-teal-950/20 to-blue-950/20 border border-teal-500/20 rounded-3xl">
                <p className="text-xs text-gray-350 leading-relaxed font-semibold">
                  Instead of hoping clients find you, you become the first therapist they see on Google, the most trusted option in your area, and a consistent source of inbound leads. Ensure you discover detailed package structures mapped within our overarching <Link to="/services" className="text-teal-450 text-teal-400 hover:underline">organic search services catalog</Link>.
                </p>
              </div>
            </div>

            {/* Right Columns: Core Outcomes */}
            <div className="grid sm:grid-cols-2 gap-4">
              {outcomes.map((outcome, idx) => (
                <div key={idx} className="p-6 bg-white/[0.01] border border-white/5 hover:border-teal-500/20 transition-all rounded-3xl flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="w-8 h-8 rounded bg-teal-550/10 bg-teal-500/10 text-teal-400 font-extrabold text-xs flex items-center justify-center">
                      ✔
                    </div>
                    <h4 className="text-sm font-black text-white uppercase tracking-tight">{outcome.title}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">{outcome.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SIGNALS */}
      <section className="py-24 px-4 md:px-6 bg-[#040815] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs text-teal-500 font-black tracking-widest uppercase">The Credentials</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-white">
              Built From Real SEO Work With Service-Based Businesses
            </h2>
            <p className="text-gray-400 text-sm font-semibold">
              We don’t use generic “blog SEO tactics.” Our approach is based on real-world experience working with local service businesses that depend on trust and visibility—like therapy, healthcare, and wellness practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Case 1 */}
            <div className="p-8 bg-[#0b101d] rounded-3xl border border-white/10 hover:border-teal-500/30 transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-[10px] text-teal-400 font-black uppercase tracking-wider block">Case 1 / Solo Practitioner</span>
                <h3 className="text-lg font-black uppercase italic text-white">Private Practice Growth</h3>
                <p className="text-xs text-gray-300 leading-relaxed font-semibold">
                  A solo therapist struggling with referrals implemented local SEO optimization and started ranking for high-intent queries including “anxiety therapist + city” and “CBT therapy near me.”
                </p>
                <div className="p-3.5 bg-green-500/10 border border-green-550/20 border-green-500/20 rounded-xl text-green-450 text-green-400 text-xs font-bold uppercase tracking-tight">
                  Result: Consistent weekly inquiries within 90 days.
                </div>
              </div>
              <div className="border-t border-white/5 mt-6 pt-4 text-xs text-gray-500 italic">
                Read how to structure niche-specific conversion blueprints inside our comprehensive <Link to="/portfolio" className="text-teal-400 hover:text-teal-300 underline font-semibold">case studies growth portfolio</Link>.
              </div>
            </div>

            {/* Case 2 */}
            <div className="p-8 bg-[#0b101d] rounded-3xl border border-white/10 hover:border-teal-500/30 transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-[10px] text-teal-400 font-black uppercase tracking-wider block">Case 2 / Group Clinic</span>
                <h3 className="text-lg font-black uppercase italic text-white">Multi-therapist Clinic</h3>
                <p className="text-xs text-gray-300 leading-relaxed font-semibold">
                  A clinic with multiple therapists used location-based landing pages and content clusters to expand visibility across multiple suburbs and increase bookings from organic search.
                </p>
                <div className="p-3.5 bg-green-500/10 border border-green-550/20 border-green-500/20 rounded-xl text-green-450 text-green-400 text-xs font-bold uppercase tracking-tight">
                  Result: Multiplied intake appointments from organic channels.
                </div>
              </div>
              <div className="border-t border-white/5 mt-6 pt-4 text-xs text-gray-500 italic">
                Group structures require optimized multi-location mapping. See details on our dynamic <Link to="/services/cms-seo" className="text-teal-450 text-teal-400 hover:underline">CMS SEO configurations</Link> panel.
              </div>
            </div>
          </div>

          <div className="mt-12 text-center max-w-2xl mx-auto">
            <p className="text-xs text-gray-450 text-gray-400 leading-relaxed font-medium">
              What we consistently see: When therapy websites are properly optimized, they become lead-generation systems, not just digital brochures. Learn about our direct business methodologies on the <Link to="/about" className="text-teal-400 hover:text-teal-300 font-semibold underline">About agency page</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES AND BENEFITS */}
      <section className="py-24 px-4 md:px-6 relative bg-gradient-to-b from-black to-[#020617]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs text-teal-400 font-black tracking-widest uppercase">The Breakdown</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-white">
              What’s Included in Our SEO Services for Therapists
            </h2>
            <p className="text-gray-400 text-sm font-semibold mt-2">Comprehensive elements engineered to optimize your intake calendar:</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valuePillars.map((pillar, idx) => (
              <div key={idx} className="bg-[#0b101c] p-6 rounded-3xl border border-white/10 hover:border-teal-500/30 transition-all flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <h4 className="text-sm font-black uppercase italic text-white tracking-widest">{pillar.title}</h4>
                  <div className="text-xs text-teal-400 font-extrabold uppercase">Feature: {pillar.feature}</div>
                </div>
                <div className="pt-2 border-t border-white/5">
                  <span className="text-xs text-gray-400 block font-semibold leading-relaxed">Benefit: {pillar.benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUTHORITY SIGNALS */}
      <section className="py-24 px-4 md:px-6 bg-[#050914] relative border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Block: YMYL & E-E-A-T Framework explanations */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs text-teal-500 font-black tracking-widest uppercase font-sans">YMYL Trust Standards</span>
              <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-white">
                Why SEO Matters More for Therapists Than Most Industries
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed font-semibold">
                Google treats mental health content as a <strong className="text-white bg-teal-550/10 px-1 py-0.5 rounded">Your Money or Your Life (YMYL)</strong> category. This means it evaluates therapy websites with significantly stricter trust and authority standards.
              </p>
              <p className="text-xs text-gray-450 text-gray-400 leading-relaxed">
                To rank well, your site must satisfy Google's guidelines by aligning with E-E-A-T principles: 
                <br /><br />
                • <strong className="text-white uppercase italic">Experience:</strong> demonstrating real-world clinical context directly in content.
                <br />
                • <strong className="text-white uppercase italic">Expertise:</strong> structuring accurate, informative service and method descriptions.
                <br />
                • <strong className="text-white uppercase italic">Authoritativeness:</strong> earning trustworthy local directory listings and quality citations.
                <br />
                • <strong className="text-white uppercase italic">Trustworthiness:</strong> presenting clear professional qualifications and transparent business operations.
              </p>
              <p className="text-xs text-gray-400 leading-relaxed">
                Verify Google's evaluation systems by checking <a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-350 font-bold underline inline-flex items-center gap-0.5">Google's Creating Helpful Content Guide <span className="text-[8px] font-normal">↗</span></a> to ensure fully compliant standards.
              </p>
            </div>

            {/* Right Block: Dynamic Industry metrics and structured schema tools */}
            <div className="lg:col-span-7 bg-[#0b0f19] border border-white/10 rounded-3xl p-8 space-y-6">
              <span className="text-[10px] text-teal-400 font-black uppercase tracking-wider block">Local Clinic Optimization</span>
              <h3 className="text-xl font-black uppercase italic text-white tracking-tight">Structured Therapy Schema Standard</h3>
              <p className="text-xs text-gray-450 text-gray-400 leading-relaxed">
                We implement schemas matching global standards to index your clinic. Check custom definitions mapped specifically on <a href="https://schema.org/Therapist" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 font-extrabold underline inline-flex items-center gap-1 font-sans">Schema.org Therapist Specifications <span className="text-[9px] font-normal">↗</span></a>.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                  <span className="text-xs font-black uppercase text-blue-400 block">Performance Analysis</span>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    Verify actual load metrics and Core Web Vitals using Google's public performance tool. Measure benchmark parameters at <a href="https://pagespeed.web.dev" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 font-bold underline">Google PageSpeed Insights</a>.
                  </p>
                </div>

                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                  <span className="text-xs font-black uppercase text-pink-400 block">Organic SEO vs Paid ADS</span>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed text-gray-350 font-bold">
                    Balance organic patient discovery with paid Google advertising. Track costs and package structures over our <Link to="/pricing/google-ads-sem" className="text-pink-400 hover:text-pink-300 underline font-bold">SEM & Paid Ads Pricing page</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SIGNALS */}
      <section className="py-24 px-4 md:px-6 relative bg-[#030615]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs text-teal-500 font-black tracking-widest uppercase font-sans">The Verification</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-white">
              What Our Clients Value Most
            </h2>
            <p className="text-gray-450 text-sm font-semibold text-gray-400 mt-2">Hear directly from practitioners who transformed their intake predictability:</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {/* Reviews */}
            <div className="bg-[#0b101c] p-8 rounded-3xl border border-white/10 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[10px] text-teal-400 font-black uppercase tracking-wider block mb-2">01 / Consistent Intake</span>
                <div className="flex gap-1 text-teal-500 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-teal-500 text-teal-500" />)}
                </div>
                <h4 className="text-sm font-black text-white uppercase italic tracking-tight mb-2">“Finally getting consistent inquiries”</h4>
                <p className="text-xs text-gray-300 italic leading-relaxed">
                  “Before SEO, I relied only on referrals. Now I get regular client inquiries every week from Google.”
                </p>
              </div>
              <span className="text-[9px] text-gray-500 uppercase font-black block pt-4 border-t border-white/5">— Verified Private Therapist</span>
            </div>

            <div className="bg-[#0b101c] p-8 rounded-3xl border border-white/10 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[10px] text-teal-400 font-black uppercase tracking-wider block mb-2">02 / Clinical Reach</span>
                <div className="flex gap-1 text-teal-500 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-teal-500 text-teal-500" />)}
                </div>
                <h4 className="text-sm font-black text-white uppercase italic tracking-tight mb-2">“My website actually brings clients now”</h4>
                <p className="text-xs text-gray-300 italic leading-relaxed">
                  “I didn’t realize how much visibility I was missing until SEO was implemented.”
                </p>
              </div>
              <span className="text-[9px] text-gray-500 uppercase font-black block pt-4 border-t border-white/5">— Counselor & Clinic Director</span>
            </div>
          </div>

          {/* Ethics Commitment */}
          <div className="p-8 bg-[#0a0e1a]/80 border border-white/10 rounded-3xl max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-sm font-black uppercase italic text-teal-400 tracking-wider">What You Can Expect From Us:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold text-gray-350">
                  <p className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0" /> Transparent reporting (no vanity metrics)
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0" /> Ethical, white-hat SEO only
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0" /> Clear monthly progress updates
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0" /> Realistic growth timelines
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-black uppercase italic text-teal-400 tracking-wider">Our Trust & Safety Commitment:</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  We understand therapists operate in a sensitive, trust-based profession. That’s why we make a firm promise: no spam tactics, no misleading rankings promises, and no risky shortcuts that could harm your clinical reputation.
                  <br /><br />
                  While no ethical provider can guarantee #1 rankings, we ensure complete transparency and progress tracking. Read our client guidelines on the main <Link to="/privacy-policy" className="text-teal-400 hover:text-teal-300 underline">Privacy Policy</Link> and <Link to="/terms-of-service" className="text-teal-400 hover:text-teal-300 underline">Terms of Service</Link> pages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON OR DIFFERENTIATION */}
      <section className="py-24 px-4 md:px-6 relative bg-gradient-to-b from-black to-[#020617] border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs text-teal-500 font-black tracking-widest uppercase">The Differentiation</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-white">
              Why Most SEO Agencies Fail Therapists
            </h2>
            <p className="text-gray-405 text-sm text-gray-400 mt-2 font-semibold">Generic SEO agencies often use the same strategy for every industry. Therapy companies require specialized knowledge.</p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/[0.01]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03]">
                  <th className="p-5 text-xs font-black uppercase tracking-wider text-red-400">Generic SEO Agency</th>
                  <th className="p-5 text-xs font-black uppercase tracking-wider text-green-400">Our SEO for Therapists</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs font-semibold">
                <tr>
                  <td className="p-5 text-gray-400">• Broad keyword focus</td>
                  <td className="p-5 text-white font-bold">• Therapy-specific keywords</td>
                </tr>
                <tr>
                  <td className="p-5 text-gray-400">• Traffic-focused</td>
                  <td className="p-5 text-white font-bold">• Client acquisition focused</td>
                </tr>
                <tr>
                  <td className="p-5 text-gray-400">• One-size-fits-all</td>
                  <td className="p-5 text-white font-bold">• Mental health niche strategy</td>
                </tr>
                <tr>
                  <td className="p-5 text-gray-400">• Weak local SEO</td>
                  <td className="p-5 text-white font-bold">• Strong Google Maps ranking focus</td>
                </tr>
                <tr>
                  <td className="p-5 text-gray-400">• No conversion optimization</td>
                  <td className="p-5 text-white font-bold">• Designed to get bookings</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-center text-xs text-gray-500 mt-6 leading-relaxed font-semibold">
            We don’t just bring generic website visitors—we bring potential clients ready to book sessions. Consult pricing setups via the main <Link to="/pricing" className="text-teal-400 hover:text-teal-350 underline">service packages</Link> section.
          </p>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 px-4 md:px-6 bg-[#050914] relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs text-teal-500 font-black tracking-widest uppercase">FAQ</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mt-2 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 text-sm font-semibold">Answering core parameters regarding mental health SEO</p>
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
                  <ChevronDown className={`w-5 h-5 text-teal-400 shrink-0 transition-transform ${activeFaq === index ? 'rotate-180' : ''}`} />
                </button>
                
                {activeFaq === index && (
                  <div className="px-6 pb-6 pt-2 border-t border-white/5 bg-black/10">
                    <p className="text-sm text-gray-400 leading-relaxed font-semibold">
                      {faq.answer}
                      {index === 4 && (
                        <span> If you're looking for immediate visibility prior to organic rankings developing, learn about our <Link to="/pricing/google-ads-sem" className="text-teal-405 text-teal-400 hover:underline">Google Ads models</Link> as potential temporary accelerators.</span>
                      )}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-24 px-4 md:px-6 relative text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(13,148,136,0.1),transparent_60%)] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10 glass-morphism rounded-[2.5rem] border border-white/10 p-8 md:p-16 bg-[#0f172a]/40">
          <span className="text-[10px] font-black text-teal-400 bg-teal-500/10 px-3 py-1.5 rounded-full uppercase tracking-widest block mb-4 w-fit mx-auto">
            Scale Clinical Operations
          </span>
          <h2 className="text-3xl md:text-6xl font-black uppercase italic tracking-tighter mb-6 leading-none text-white">
            Get More Clients for Your Therapy Practice Starting This Month
          </h2>
          <p className="text-sm md:text-lg text-gray-350 text-gray-300 font-medium leading-relaxed max-w-2xl mx-auto mb-6">
            If your website isn’t bringing in consistent client inquiries, it’s not working hard enough for your practice.
          </p>
          <p className="text-sm md:text-base text-teal-400 font-black uppercase italic tracking-widest mb-10 leading-relaxed">
            We help therapists turn their websites into reliable client-generation systems using proven SEO strategies built for the mental health industry. Request your free SEO Audit for Therapists today to understand missable local keywords.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left mb-10">
            <div 
              onClick={onBook}
              className="p-5 bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-teal-500/40 rounded-2xl cursor-pointer transition-all flex items-center justify-between group"
            >
              <div>
                <span className="text-[9px] uppercase tracking-widest font-black text-gray-500 group-hover:text-teal-400">Intake A</span>
                <h4 className="text-xs font-black uppercase text-white mt-1">Get My Free visibility Analysis</h4>
              </div>
              <ArrowRight className="w-4 h-4 text-teal-500 shrink-0" />
            </div>

            <div 
              onClick={onBook}
              className="p-5 bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-teal-500/40 rounded-2xl cursor-pointer transition-all flex items-center justify-between group"
            >
              <div>
                <span className="text-[9px] uppercase tracking-widest font-black text-gray-500 group-hover:text-teal-400">Intake B</span>
                <h4 className="text-xs font-black uppercase text-white mt-1">Check Local Competitor Rankings Gaps</h4>
              </div>
              <ArrowRight className="w-4 h-4 text-teal-500 shrink-0" />
            </div>

            <div 
              onClick={onBook}
              className="p-5 bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-teal-500/40 rounded-2xl cursor-pointer transition-all flex items-center justify-between group"
            >
              <div>
                <span className="text-[9px] uppercase tracking-widest font-black text-gray-500 group-hover:text-teal-400">Automation</span>
                <h4 className="text-xs font-black uppercase text-white mt-1">Explore custom booking auto integrations</h4>
              </div>
              <ArrowRight className="w-4 h-4 text-teal-500 shrink-0" />
            </div>

            <div 
              onClick={onBook}
              className="p-5 bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-teal-500/40 rounded-2xl cursor-pointer transition-all flex items-center justify-between group"
            >
              <div>
                <span className="text-[9px] uppercase tracking-widest font-black text-gray-500 group-hover:text-teal-400 font-sans">Resources</span>
                <h4 className="text-xs font-black uppercase text-white mt-1">Review clinical SEO checklist sets</h4>
              </div>
              <ArrowRight className="w-4 h-4 text-teal-500 shrink-0" />
            </div>
          </div>

          <button
            onClick={onBook}
            className="px-10 py-5 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white font-black uppercase italic tracking-tighter text-base md:text-lg rounded-2xl transition-all shadow-2xl shadow-teal-500/40 hover:scale-[1.02] flex items-center justify-center gap-3 mx-auto cursor-pointer"
          >
            <span>Request Your Free SEO Audit for Therapists</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <p className="text-xs text-gray-500 mt-6 leading-relaxed font-semibold">
            Ready to design standard operations or explore agency capabilities? Reach our main <Link to="/contact" className="text-teal-450 text-teal-450 hover:underline">Consultation & Contact Desk</Link>, learn about free template resources at the <Link to="/resources" className="text-teal-400 hover:underline">Resources Panel</Link>, or read the search dynamics on our clinical <Link to="/blog" className="text-teal-450 text-teal-400 hover:underline">SEO blog</Link>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TherapistsSEOPage;
