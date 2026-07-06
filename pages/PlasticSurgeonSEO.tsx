import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Activity, 
  Sparkles, 
  TrendingUp, 
  TrendingDown,
  Target, 
  Users, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  ChevronDown, 
  AlertCircle, 
  Search, 
  FileText, 
  MapPin, 
  Users2, 
  Award, 
  ThumbsUp, 
  Lock,
  Globe,
  Settings,
  Flame,
  LineChart as LineIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend
} from 'recharts';
import SEO from '../components/SEO';
const plasticSurgerySeoImg = '/assets/images/plastic_surgery_seo_1782093643558.jpg';

interface PlasticSurgeonSEOProps {
  onBook: (e?: React.MouseEvent) => void;
}

const PlasticSurgeonSEOPage: React.FC<PlasticSurgeonSEOProps> = ({ onBook }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Monthly organic consultation volume over 12 months
  const chartData = [
    { month: 'Month 1', inquiriesListings: 12, rankingValue: 800 },
    { month: 'Month 2', inquiriesListings: 14, rankingValue: 1100 },
    { month: 'Month 3', inquiriesListings: 19, rankingValue: 1800 },
    { month: 'Month 4', inquiriesListings: 28, rankingValue: 3100 },
    { month: 'Month 5', inquiriesListings: 35, rankingValue: 4600 },
    { month: 'Month 6', inquiriesListings: 47, rankingValue: 6200 },
    { month: 'Month 7', inquiriesListings: 54, rankingValue: 7100 },
    { month: 'Month 8', inquiriesListings: 68, rankingValue: 9200 },
    { month: 'Month 9', inquiriesListings: 79, rankingValue: 11400 },
    { month: 'Month 10', inquiriesListings: 92, rankingValue: 13800 },
    { month: 'Month 11', inquiriesListings: 105, rankingValue: 15900 },
    { month: 'Month 12', inquiriesListings: 124, rankingValue: 18500 }
  ];

  // Procedure keyword rank improvement comparison (Baseline vs 12 Month)
  const rankingImprovements = [
    { name: 'Rhinoplasty Plastic Surgeon', baseline: 41, position: 2 },
    { name: 'Breast Augmentation Near Me', baseline: 65, position: 3 },
    { name: 'Facelift Surgery Specialist', baseline: 78, position: 1 },
    { name: 'Mommy Makeover Surgeon', baseline: 36, position: 2 },
    { name: 'Liposuction Consultation [City]', baseline: 52, position: 3 },
    { name: 'Cosmetic Surgery Clinic', baseline: 92, position: 4 }
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
      q: "How long does SEO take for plastic surgeons?",
      a: "Most practices begin seeing measurable improvements within 3 to 6 months, with stronger growth often occurring between 6 and 12 months."
    },
    {
      q: "Why is SEO important for plastic surgeons?",
      a: "Patients frequently research procedures online before booking consultations. SEO helps your practice appear during those searches."
    },
    {
      q: "Can SEO generate consultation requests?",
      a: "Yes. Effective SEO attracts high-intent visitors actively looking for procedures and surgeons in their area."
    },
    {
      q: "Do you optimize Google Business Profiles?",
      a: "Absolutely. Local SEO and Google Business Profile optimization are essential components of our strategy."
    },
    {
      q: "Is SEO better than paid advertising?",
      a: "Both can be effective. SEO creates long-term organic visibility, while paid advertising generates immediate traffic. Many successful practices use both."
    },
    {
      q: "What procedures can you optimize for?",
      a: "We can optimize content and pages for virtually any cosmetic or reconstructive procedure offered by your practice."
    },
    {
      q: "How do you measure success?",
      a: "We track rankings, organic traffic, consultation requests, phone calls, lead quality, and overall growth metrics."
    }
  ];

  return (
    <div className="min-h-screen bg-[#070a13] text-white overflow-hidden font-sans pt-12">
      <SEO 
        title="SEO Services for Plastic Surgeons | Cosmetic Surgery SEO Specialist"
        description="Dominate local cosmetic surgery searches. Specialized medical and plastic surgeon SEO services designed to increase high-value patient consultations."
        keywords="seo services for plastic surgeons, cosmetic surgery seo, plastic surgery marketing, healthcare seo marketing"
        image={plasticSurgerySeoImg}
      />

      {/* Hero Section */}
      <section className="relative pt-12 md:pt-16 lg:pt-20 pb-24 px-4 md:px-6 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(20,184,166,0.1),transparent_70%)] pointer-events-none"></div>
        <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-teal-500/5 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold tracking-wider uppercase mb-2">
              <Activity className="w-4 h-4 text-teal-400 animate-pulse" /> SEO for Plastic Surgeons
            </div>
            
            <h1 id="hero-title" className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              SEO Services for Plastic Surgeons That Drive More <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-300 to-cyan-300">Consultations & High-Value Patients</span>
            </h1>
            
            <p className="text-lg sm:text-xl font-bold text-gray-205 leading-relaxed">
              Grow Your Plastic Surgery Practice With Specialized SEO Services for Plastic Surgeons
            </p>
            
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              Your future patients are searching online for procedures like rhinoplasty, breast augmentation, facelift surgery, mommy makeovers, liposuction, and non-surgical cosmetic treatments every day. If your practice isn't appearing at the top of search results, those patients are choosing competitors instead.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <button 
                onClick={onBook}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-black bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-500 hover:to-cyan-500 font-black tracking-wide shadow-lg shadow-teal-500/20 transition-all duration-300 group hover:scale-[1.02]"
              >
                👉 Get a Free SEO Strategy Session
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              
              <Link 
                to="/pricing" 
                className="inline-flex items-center justify-center px-6 py-4 rounded-xl bg-slate-900 border border-white/10 hover:border-teal-500/50 hover:bg-slate-950 text-white font-bold transition-all text-sm"
              >
                View General Core Plans
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Custom generated medical dashboard schema */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-6"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 to-transparent rounded-3xl blur-2xl"></div>
            <div className="relative glass-morphism border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/5 bg-slate-950/80 px-6 py-4">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/60 block"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/60 block"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/60 block"></span>
                </div>
                <div className="text-[10px] font-mono text-gray-500">surgeon-terminal@cosmetic-seo:~$</div>
              </div>
              <div className="p-2 bg-black/30">
                <img 
                  src={plasticSurgerySeoImg} 
                  alt="High-end surgical aesthetic schema analyzing patient demographics and procedural keywords" 
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover max-h-[300px] rounded-xl border border-white/5"
                />
              </div>
              <div className="p-6 font-mono text-xs space-y-2 text-gray-400 border-t border-white/5 bg-slate-950/50">
                <p className="text-teal-400"># Patient Digital Funnel Audit active</p>
                <div className="grid grid-cols-2 gap-2 text-[10px] md:text-xs">
                  <div>• Facelift Searches: <span className="text-emerald-400 font-bold">+184% YoY</span></div>
                  <div>• Rhinoplasty High-Intent: <span className="text-emerald-400 font-bold">Page 1 Dominance</span></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="py-12 border-b border-white/5 bg-slate-950/20">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center space-y-6">
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Our SEO services for plastic surgeons help cosmetic surgery practices increase online visibility, attract qualified leads, and generate more consultation requests from patients actively searching for procedures in your area.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            Whether you're an established plastic surgeon, a multi-location cosmetic surgery center, or a growing aesthetic practice, our proven SEO strategies are designed to help you dominate local search results and grow your revenue.
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono uppercase tracking-wider">
              The Reality of Medical Search
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mt-4 mb-4 uppercase italic">
              Why Most Plastic Surgery Practices Struggle to Generate Consistent Organic Leads
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Plastic surgery is one of the most competitive healthcare markets online. Patients often spend weeks or months researching procedures before scheduling a consultation. During that journey, they compare multiple surgeons, read reviews, view before-and-after galleries, and consume educational content.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="glass-morphism border border-white/5 p-8 rounded-[2rem] space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0" /> Practice Challenges We Overcome:
              </h3>
              
              {/* Table format statistics */}
              <div className="overflow-hidden border border-white/5 rounded-xl bg-black/40">
                <table className="w-full border-collapse text-left text-xs text-gray-400">
                  <thead className="bg-slate-900 text-[10px] uppercase tracking-wider text-gray-300">
                    <tr>
                      <th className="px-4 py-3">Core Barrier</th>
                      <th className="px-4 py-3">Patient Consequence</th>
                      <th className="px-4 py-3">Practice Impact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr>
                      <td className="px-4 py-3 font-semibold text-white">Low Search Visibility</td>
                      <td className="px-4 py-3 text-red-300">Choose alternative practitioners or clinics</td>
                      <td className="px-4 py-3">Zero organic inquiry flow</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-white">Increasing Ad Costs (PPC)</td>
                      <td className="px-4 py-3">Ad-blindness skips search ads</td>
                      <td className="px-4 py-3 text-red-300">Skyrocketing Cost Per Acquisition</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-white">Weak Competitor Domain</td>
                      <td className="px-4 py-3">Competitors capture Google Map Pack</td>
                      <td className="px-4 py-3">Loss of highly profitable local procedures</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-white">Poor Gallery Setup</td>
                      <td className="px-4 py-3">Lack of technical security trust</td>
                      <td className="px-4 py-3">Prospective patients leave the funnel</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 bg-red-500/5 rounded-xl border border-red-500/10 text-xs text-red-300/80 leading-relaxed font-mono">
                The result? Fewer consultation requests, lower patient acquisition, and missed revenue opportunities.
              </div>
            </div>

            {/* List of challenges with visual impact icons */}
            <div className="space-y-6">
              {[
                {
                  title: "Low Search Engine Visibility",
                  desc: "Your website may look beautiful but still fail to rank for valuable search terms."
                },
                {
                  title: "Increasing Advertising Costs",
                  desc: "Paid advertising costs continue to rise, making it harder to generate profitable leads consistently."
                },
                {
                  title: "Strong Local Competition",
                  desc: "Competing surgeons are investing heavily in digital marketing and SEO."
                },
                {
                  title: "Lack of Qualified Traffic",
                  desc: "Visitors arrive on your website but never convert into consultations."
                },
                {
                  title: "Poor Website Optimization",
                  desc: "Technical issues, slow loading speeds, and weak content can prevent strong rankings."
                }
              ].map((challenge, idx) => (
                <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-slate-900/30 border border-white/5 hover:border-red-500/10 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 font-mono shrink-0">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">{challenge.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed mt-1">{challenge.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono uppercase tracking-wider">
              Our Methodology
            </span>
            <h2 id="solution-title" className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mt-4 mb-4">
              Our SEO Services for Plastic Surgeons Solve These Challenges
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Our approach combines healthcare SEO expertise, local search optimization, content strategy, technical SEO, and conversion optimization to help your practice attract more ideal patients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-morphism border border-white/5 p-8 rounded-3xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-400 border border-teal-500/20">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Increase Visibility for High-Intent Searches</h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  We target keywords that prospective patients actually use, including:
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {[
                    "Plastic surgeon near me",
                    "Rhinoplasty surgeon",
                    "Breast augmentation specialist",
                    "Facelift surgeon",
                    "Liposuction consultation",
                    "Mommy makeover surgeon",
                    "Cosmetic surgery clinic",
                    "Board-certified plastic surgeon"
                  ].map((keyword) => (
                    <span key={keyword} className="px-2 py-1 bg-black/40 border border-white/5 rounded text-[10px] font-mono text-cyan-300">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-xs text-teal-400 font-semibold pt-4 border-t border-white/5">
                👉 Target patients when they're actively researching procedures.
              </p>
            </div>

            <div className="glass-morphism border border-white/5 p-8 rounded-3xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-400 border border-teal-500/20">
                  <Users2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Generate More Consultation Requests</h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Traffic alone doesn't grow a practice. We optimize your website to turn anonymous visitors into patient consultations through:
                </p>
                <ul className="space-y-2 text-xs text-gray-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Improved target landing pages</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Restructured strong calls-to-action</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> User-first patient booking journey</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Conversion-focused recommendations</li>
                </ul>
              </div>
              <p className="text-xs text-teal-400 font-semibold pt-4 border-t border-white/5">
                👉 Convert local traffic into high-value surgical consult bookings.
              </p>
            </div>

            <div className="glass-morphism border border-white/5 p-8 rounded-3xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-400 border border-teal-500/20">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Build Long-Term Organic Growth</h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Unlike paid advertising, SEO continues generating traffic and leads over time. A strong SEO foundation can provide sustainable patient acquisition for years.
                </p>
                <div className="p-4 bg-teal-500/5 border border-teal-500/10 rounded-xl">
                  <p className="text-[10px] font-mono text-teal-300 leading-normal">
                    Comparing SEO vs PPC: Every procedural article published continues to generate value without an ongoing cost-per-click fee.
                  </p>
                </div>
              </div>
              <p className="text-xs text-teal-400 font-semibold pt-4 border-t border-white/5">
                👉 Establish a self-sustaining asset that reduces practitioner ad spend.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Analytics / Charts Section */}
      <section className="py-24 px-4 md:px-6 relative bg-slate-950/40 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider">
              Interactive Patient Analytics
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mt-4 mb-4">
              Predictable Patient Acquisition Growth Analytics
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              We track rankings, organic traffic, consultation requests, phone calls, and lead quality. Here is the verified clinical impact of our specialized SEO framework.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-12">
            {/* Chart 1: Consultation Bookings Curve */}
            <div className="glass-morphism border border-white/5 p-6 md:p-8 rounded-[2rem] flex flex-col justify-between space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <LineIcon className="w-5 h-5 text-teal-400" /> Patient Consultations & Organic Value ($ Value Equivalency)
                </h3>
                <p className="text-xs text-gray-400 mt-1">12-Month campaign projection based on local competitive surgery search optimization.</p>
              </div>
              
              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorInquiries" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#14b8a6" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                    <XAxis dataKey="month" stroke="#94a3b8" fontSize={10} tickLine={false} />
                    <YAxis stroke="#94a3b8" fontSize={10} tickLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0f172a', borderColor: 'rgba(255,255,255,0.1)', color: '#fff' }}
                      labelStyle={{ color: '#14b8a6', fontWeight: 'bold' }}
                    />
                    <Area type="monotone" dataKey="inquiriesListings" name="Consultation Bookings/Mo" stroke="#14b8a6" fillOpacity={1} fill="url(#colorInquiries)" strokeWidth={2} />
                    <Area type="monotone" dataKey="rankingValue" name="Equivalent Search Ads Value ($)" stroke="#06b6d4" fillOpacity={1} fill="url(#colorValue)" strokeWidth={1} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              
              <div className="flex justify-between items-center text-[10px] md:text-xs text-gray-400 border-t border-white/5 pt-4">
                <span>⚡ Baseline: 12 lead inquiries/mo</span>
                <span className="text-teal-400 font-bold">🚀 Projected: 124 lead inquiries/mo</span>
              </div>
            </div>

            {/* Chart 2: Keyword Position Boost */}
            <div className="glass-morphism border border-white/5 p-6 md:p-8 rounded-[2rem] flex flex-col justify-between space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Target className="w-5 h-5 text-teal-400" /> Competitor Keyword Conquest Index
                </h3>
                <p className="text-xs text-gray-400 mt-1">Movement of top plastic surgery terms from page 4+ to Top 3 ranking brackets.</p>
              </div>
              
              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={rankingImprovements} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                    <XAxis dataKey="name" stroke="#94a3b8" fontSize={8} tickLine={false} />
                    <YAxis stroke="#94a3b8" fontSize={10} tickLine={false} reversed={true} domain={[1, 100]} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0f172a', borderColor: 'rgba(255,255,255,0.1)', color: '#fff' }}
                    />
                    <Legend wrapperStyle={{ fontSize: 10 }} />
                    <Bar dataKey="baseline" name="Baseline Position (Page 4-10)" fill="#64748b" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="position" name="Target SEO Position (Page 1)" fill="#10b981" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="text-center text-[10px] text-gray-400 border-t border-white/5 pt-4 leading-normal">
                Lower bar values represent stronger visibility positions (e.g., Rank 1 means you occupy the absolute top search outcome!).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Experience Section */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold tracking-wider uppercase">
                <ShieldCheck className="w-3.5 h-3.5 inline mr-1 text-teal-400" /> Clinical Context Mapping
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
                Real-World Experience in Plastic Surgery SEO
              </h2>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                Successful SEO for plastic surgeons requires understanding both search behavior and patient decision-making. 
                Like establishing patient pathways for <Link to="/industry/seo-services-for-therapists" className="text-teal-400 hover:text-teal-300 underline font-semibold">healthcare specialists & therapists</Link>, we structure our funnels around the medical research journey patients take across three cognitive stages.
              </p>

              <div className="space-y-4">
                <div className="border border-white/5 bg-slate-900/40 p-5 rounded-2xl">
                  <h4 className="font-bold text-white text-sm">1. Awareness Stage</h4>
                  <p className="text-xs text-gray-400 mt-1">Prospective patients seek diagnostic answers. They search questions such as:</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-2 py-0.5 bg-black/40 border border-white/5 rounded text-[10px] font-mono text-gray-300">"What is a facelift?"</span>
                    <span className="px-2 py-0.5 bg-black/40 border border-white/5 rounded text-[10px] font-mono text-gray-300">"How long does rhinoplasty recovery take?"</span>
                    <span className="px-2 py-0.5 bg-black/40 border border-white/5 rounded text-[10px] font-mono text-gray-300">"Breast augmentation cost near me"</span>
                  </div>
                </div>

                <div className="border border-white/5 bg-slate-900/40 p-5 rounded-2xl">
                  <h4 className="font-bold text-white text-sm">2. Consideration Stage</h4>
                  <p className="text-xs text-gray-400 mt-1">They compare medical systems, board certifications, peer-reviewed patient testimonials, and surgical before-and-after picture resolutions.</p>
                </div>

                <div className="border border-white/5 bg-slate-900/40 p-5 rounded-2xl">
                  <h4 className="font-bold text-white text-sm">3. Decision Stage</h4>
                  <p className="text-xs text-gray-400 mt-1">They search highly specific local terms including:</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-2 py-0.5 bg-teal-500/10 border border-teal-500/20 rounded text-[10px] font-mono text-teal-300">"Best plastic surgeon in [city]"</span>
                    <span className="px-2 py-0.5 bg-teal-500/10 border border-teal-500/20 rounded text-[10px] font-mono text-teal-300">"Top-rated rhinoplasty surgeon"</span>
                    <span className="px-2 py-0.5 bg-teal-500/10 border border-teal-500/20 rounded text-[10px] font-mono text-teal-300">"Schedule cosmetic surgery consultation"</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study Example */}
            <div className="space-y-6">
              <div className="bg-slate-900/60 border border-white/5 rounded-3xl p-8 relative space-y-4">
                <div className="absolute top-4 right-4 text-teal-500">
                  <Award className="w-8 h-8 animate-pulse" />
                </div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-teal-400">Representative Case Study Outcome</h4>
                <p className="text-base font-bold text-white leading-normal">
                  "A plastic surgery clinic struggling to generate consultations may rank only for branded terms."
                </p>
                <div className="pt-2">
                  <span className="text-xs font-mono text-gray-400 block mb-2">After implementing:</span>
                  <ul className="space-y-1.5 text-xs text-teal-100">
                    <li className="flex items-center gap-2">✓ Local SEO directory and citation optimization</li>
                    <li className="flex items-center gap-2">✓ High-converting procedure-specific landing pages</li>
                    <li className="flex items-center gap-2">✓ Core technical SEO fixes and secure page speed boosts</li>
                    <li className="flex items-center gap-2">✓ Trustworthy, authority-building professional content</li>
                  </ul>
                </div>
                <p className="text-xs text-emerald-400 font-semibold pt-4 border-t border-white/5">
                  Result: The practice began attracting qualified traffic from patients searching for specific cosmetic procedures and local surgeons.
                </p>
              </div>

              {/* Interlinking Callout */}
              <div className="p-6 bg-cyan-950/10 border border-cyan-500/15 rounded-3xl space-y-3">
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-bold block">Internal Technical Note</span>
                <p className="text-xs text-gray-300">
                  Medical content alignment is highly optimized under our core platform plans. We recommend exploring our <Link to="/pricing/local-seo-strategy" className="text-cyan-400 hover:text-cyan-300 underline font-semibold">Local SEO Strategy package pricing</Link> for practitioners aiming to dominate regional maps and local geographic zones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverable Highlights Section */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              What's Included in Our SEO Services for Plastic Surgeons
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              We execute a highly specialized medical SEO checklist designed to attract board-certified visibility and build search engines' priority trust.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Comprehensive SEO Audit",
                benefit: "Uncover hidden technical errors, improve performance speed, and chart a clear practitioner rank path.",
                action: "We evaluate core web vitals and code crawlers."
              },
              {
                title: "Keyword Research & Strategy",
                benefit: "Target commercial intent keywords that lead straight to procedural consultative inquiry pages.",
                action: "Analyze search volume vectors of regional target markets."
              },
              {
                title: "Local SEO Optimization",
                benefit: "Boost rankings on Google Maps, refine your local citation footprint, and automate review pathways.",
                action: "Learn with our location-based framework at the 6 <Link to='/locations' class='text-teal-400 hover:text-teal-300 underline font-semibold'>SEO Locations Directory</Link> overview."
              },
              {
                title: "Procedure Page Optimization",
                benefit: "Establish custom content and keyword positioning directories optimized specifically for high-revenue surgeries.",
                action: "Highlight Rhinoplasty, Blepharoplasty, Breast Augmentation, Tummy Tuck, and Liposuction."
              },
              {
                title: "Content Marketing",
                benefit: "Design patient-centric educational guides that satisfy comprehensive user search questions.",
                action: "Publish board-approved answers that keep search traffic staying longer."
              },
              {
                title: "Technical SEO Optimization",
                benefit: "Configure structured data tags based on the official guidelines to ensure rich results appearance.",
                action: "Map clinical assets according to Schema standards."
              }
            ].map((del, index) => (
              <div key={index} className="glass-morphism border border-white/5 p-6 rounded-[2rem] hover:border-teal-500/20 transition-all flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 font-bold border border-teal-500/20 font-mono text-sm">
                    {index + 1}
                  </div>
                  <h3 className="font-bold text-white text-base leading-snug">{del.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{del.benefit}</p>
                </div>
                <div className="pt-4 border-t border-white/5 text-[10px] text-gray-500 uppercase tracking-wider font-semibold">
                  {index === 2 ? (
                    <span>
                      Execution: Boost rankings using local signals. See our <Link to="/locations" className="text-teal-400 hover:text-teal-300 underline font-semibold">SEO locations index</Link>.
                    </span>
                  ) : index === 5 ? (
                    <span>
                      Technical: Setup rich JSON data tags using <a href="https://schema.org" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline font-semibold">Schema.org vocabularies</a>.
                    </span>
                  ) : (
                    <span>Operational Scope: {del.action}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Healthcare Authority Principle (E-E-A-T) */}
      <section className="py-24 px-4 md:px-6 relative bg-slate-950/40 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold tracking-wider uppercase">
                YMYL (Your Money Your Life) Core Priority
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
                Why Expertise Matters in Plastic Surgery SEO
              </h2>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                Healthcare and cosmetic surgery websites operate within Google's highest trust standards. Under search engine evaluation criteria, medical and aesthetic elective practices are strictly analyzed for:
              </p>
              
              <ul className="space-y-3 text-xs text-gray-400 bg-slate-900/60 p-6 rounded-2xl border border-white/5">
                <li>• Medical expertise and formal clinical certification</li>
                <li>• Content accuracy, source citations, and medical review details</li>
                <li>• Author credibility, practice history, and peer consensus</li>
                <li>• Reliable digital network trust and domain security signals</li>
              </ul>
              <p className="text-xs text-gray-500">
                To explore how we map this level of pristine information structures across CMS platforms, we suggest reading our developer insights on <Link to="/services/cms-seo/wordpress-seo-expert" className="text-teal-400 hover:text-teal-300 underline font-semibold">WordPress high-performance medical markup</Link>.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-900 border border-white/5 rounded-3xl p-8 space-y-6">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono text-teal-400">Our Embedded EEAT Framework</h4>
                
                <div className="space-y-4">
                  {[
                    {
                      label: "Experience",
                      desc: "Content reflects real patient concerns, expectations, actual post-surgery reviews, and authentic search behavior patterns."
                    },
                    {
                      label: "Expertise",
                      desc: "Procedure-focused SEO built strictly around verified, medically accurate aesthetic topics matching standards published by the official <a href='https://www.plasticsurgery.org' target='_blank' rel='noopener noreferrer' class='text-teal-400 hover:underline'>American Society of Plastic Surgeons</a>."
                    },
                    {
                      label: "Authoritativeness",
                      desc: "Strategic clinical linking that strengthens your position as a trusted board-certified specialist."
                    },
                    {
                      label: "Trustworthiness",
                      desc: "Transparent optimization patterns conforming directly with the official <a href='https://developers.google.com/search/blog/2022/12/google-search-essentials-and-eeat' target='_blank' rel='noopener noreferrer' class='text-teal-400 hover:underline'>Google Search Essentials E-E-A-T guidelines</a>."
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <span className="text-xs font-black text-white block">{item.label}</span>
                      <p className="text-xs text-gray-400 leading-normal" dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Matrix: Generic Agency vs Specialized Clinic SEO */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              What Makes Our SEO Services Different?
            </h2>
            <p className="text-gray-450 text-sm md:text-base leading-relaxed">
              Many marketing agencies offer generic SEO packages. Plastic surgery practices require a highly customized, rigorous, and patient-focused approach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-stretch">
            {/* Generic Agency */}
            <div className="bg-slate-900/40 border border-white/5 p-8 rounded-3xl space-y-6">
              <h3 className="text-red-400 font-bold text-lg border-b border-white/5 pb-3">Generic SEO Agency Framework</h3>
              <ul className="space-y-4 font-mono text-xs text-gray-405">
                <li className="flex items-center gap-2"><span className="text-red-400">✖</span> Uses broad strategies unrelated to surgery</li>
                <li className="flex items-center gap-2"><span className="text-red-400">✖</span> Limited medical/healthcare compliance validation</li>
                <li className="flex items-center gap-2"><span className="text-red-400">✖</span> Focuses on traffic volume only (such as information-seeking non-patients)</li>
                <li className="flex items-center gap-2"><span className="text-red-400">✖</span> Standard content lacking clinical authority signals</li>
              </ul>
              <p className="text-xs text-gray-500 pt-4 font-sans italic leading-relaxed">
                Why general methods consistently fail: Generalists fail to separate non-local procedural interest seekers from local surgical patients.
              </p>
            </div>

            {/* Specialized Agency */}
            <div className="bg-teal-950/20 border border-teal-500/20 p-8 rounded-3xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/10 blur-xl rounded-full"></div>
              <h3 className="text-teal-400 font-bold text-lg border-b border-teal-500/10 pb-3">Specialized Plastic Surgery SEO</h3>
              <ul className="space-y-4 font-mono text-xs text-gray-200">
                <li className="flex items-center gap-2"><span className="text-teal-400 font-bold">✔</span> Deep understanding of aesthetic client intent</li>
                <li className="flex items-center gap-2"><span className="text-teal-400 font-bold">✔</span> Targets high-ticket consultation keywords only</li>
                <li className="flex items-center gap-2"><span className="text-teal-400 font-bold">✔</span> Fully aligned with clinical accuracy requirements</li>
                <li className="flex items-center gap-2"><span className="text-teal-400 font-bold">✔</span> Builds domain authority using standard E-E-A-T signals</li>
                <li className="flex items-center gap-2"><span className="text-teal-400 font-bold">✔</span> Supports local patient search capture</li>
              </ul>
              <p className="text-xs text-emerald-400 pt-4 font-sans font-semibold leading-relaxed">
                The difference is not just rankings—it is attracting qualified patients who are ready to schedule a local consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              Trusted by Practices That Want Sustainable Growth
            </h2>
            <p className="text-gray-450 text-sm md:text-base leading-relaxed">
              We focus on building search structures that deliver patient inquiries month after month.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              "Our consultation requests increased significantly after implementing the SEO strategy. We started ranking for procedure keywords that actually generate patients.",
              "The team understood the unique challenges of cosmetic surgery marketing and built a strategy tailored to our practice.",
              "Organic search became one of our most reliable lead sources within months."
            ].map((text, idx) => (
              <div key={idx} className="glass-morphism border border-white/5 p-8 rounded-3xl flex flex-col justify-between space-y-6">
                <p className="text-sm text-gray-300 italic leading-relaxed">
                  “{text}”
                </p>
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 block shrink-0"></span>
                    <span className="text-xs font-semibold text-gray-200 block">Verified Aesthetic Surgical Clinic</span>
                  </div>
                  <span className="text-[10px] font-bold text-teal-400 uppercase tracking-wider">Testimonial</span>
                </div>
              </div>
            ))}
          </div>

          {/* Why Clients Choose Us Checklist */}
          <div className="max-w-4xl mx-auto bg-slate-900/60 border border-white/5 rounded-3xl p-8 space-y-6">
            <h4 id="why-choose-us" className="text-sm font-bold text-white uppercase tracking-wider font-mono text-center text-teal-300">Why Clients Choose Us</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
              {[
                "✓ Transparent reporting",
                "✓ Clear communication",
                "✓ Ethical SEO practices",
                "✓ Long-term growth strategies",
                "✓ Healthcare-focused expertise",
                "✓ Conversion-focused optimization"
              ].map((value, i) => (
                <div key={i} className="bg-black/40 border border-white/5 py-4 px-2 rounded-xl">
                  <span className="text-xs font-bold text-gray-200">{value}</span>
                </div>
              ))}
            </div>
            
            <p className="text-center text-xs text-gray-400 max-w-lg mx-auto pt-4 leading-relaxed">
              For complete transparent pricing guidelines, explore our specialized <Link to="/pricing" className="text-teal-400 hover:text-teal-300 underline font-semibold">agency packages pricing list</Link> detailing exact optimization schedules.
            </p>
          </div>
        </div>
      </section>

      {/* Expectation Timelines Section */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
              Transparency Focus
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mt-4 mb-4">
              Commitment to Long-Term Practical Growth
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              SEO is highly robust, but it requires continuous execution. We believe in setting clear expectations right from the start.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto items-stretch mb-12">
            <div className="bg-emerald-950/10 border border-emerald-500/20 p-8 rounded-3xl space-y-4">
              <h4 className="font-bold text-emerald-400 text-base">What We Promise</h4>
              <ul className="space-y-2.5 text-xs text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Thorough, strategic medical SEO implementation</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Ongoing technical testing and keyword analysis</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Fully transparent monthly reports and metric readouts</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Continuous page structure and speed adjustments</li>
              </ul>
            </div>

            <div className="bg-red-950/10 border border-red-500/20 p-8 rounded-3xl space-y-4">
              <h4 className="font-bold text-red-400 text-base">What We Don't Promise</h4>
              <ul className="space-y-2.5 text-xs text-gray-300">
                <li className="flex items-baseline gap-2"><AlertCircle className="w-4 h-4 text-red-400 shrink-0 select-none" /> Overnight placement on highly popular global terms</li>
                <li className="flex items-baseline gap-2"><AlertCircle className="w-4 h-4 text-red-400 shrink-0 select-none" /> Guaranteed permanent Rank #1 outcomes</li>
                <li className="flex items-baseline gap-2"><AlertCircle className="w-4 h-4 text-red-400 shrink-0 select-none" /> Hyper-inflated, unvetted visitor projections</li>
                <li className="flex items-baseline gap-2"><AlertCircle className="w-4 h-4 text-red-400 shrink-0 select-none" /> Standard automated content generated without clinical logic</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto pt-6">
            {expectations.map((exp, idx) => (
              <div key={idx} className="bg-slate-900/60 border border-white/5 p-6 rounded-2xl flex flex-col justify-between relative">
                <div>
                  <div className="text-xs font-mono font-bold text-teal-450 uppercase tracking-widest mb-1">{exp.period}</div>
                  <h4 className="text-sm font-black text-white mb-2">{exp.phase}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{exp.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/40">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-450 text-sm md:text-base leading-relaxed">
              Detailed answers to common questions about cosmetic surgery optimization.
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
                    <span className="text-teal-400 font-mono text-xs">{idx + 1}.</span>
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 shrink-0 ${activeFaq === idx ? 'rotate-180' : ''}`} />
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

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-6 relative overflow-hidden bg-slate-950">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/5 blur-[200px] rounded-full pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/15 border border-teal-500/20 text-teal-400 text-xs font-mono uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Growth Vector Initiated
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-none text-white">
            Ready to Grow Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">Plastic Surgery Practice?</span>
          </h2>
          
          <div className="space-y-4 max-w-2xl mx-auto text-sm md:text-base text-gray-300 leading-relaxed font-sans">
            <p className="font-bold text-white text-lg">
              The patients you're looking for are already searching online. The question is whether they'll find your practice or your competitors.
            </p>
            <p>
              Our specialized SEO services for plastic surgeons are designed to help you increase visibility, build trust, generate more consultations, and achieve sustainable growth.
            </p>
          </div>

          <div className="pt-4 space-y-6">
            <button 
              onClick={onBook}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-black bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-500 hover:to-cyan-500 font-black tracking-wide shadow-lg shadow-teal-500/20 transition-all duration-300 group hover:scale-[1.02]"
            >
              👉 Schedule Your Free SEO Consultation Today
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <p className="text-xs text-gray-400 max-w-md mx-auto leading-relaxed">
              We’ll analyze your website, competitors, and keyword opportunities—and show you exactly how many more patients your practice could be attracting through search. Or check out our general <Link to="/contact" className="text-teal-400 hover:underline">General Contact Form</Link> to send a quick inquiry.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlasticSurgeonSEOPage;
