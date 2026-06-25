import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Activity, 
  Sparkles, 
  TrendingUp, 
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

const orthodontistSeoImg = '/assets/images/orthodontist_seo_growth_1782094804532.jpg';

interface OrthodontistSEOProps {
  onBook: (e?: React.MouseEvent) => void;
}

const OrthodontistSEOPage: React.FC<OrthodontistSEOProps> = ({ onBook }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Monthly organic alignment lead volume over 12 months
  const leadData = [
    { month: 'Month 1', inquiries: 8, adsValue: 600 },
    { month: 'Month 2', inquiries: 11, adsValue: 900 },
    { month: 'Month 3', inquiries: 15, adsValue: 1400 },
    { month: 'Month 4', inquiries: 22, adsValue: 2400 },
    { month: 'Month 5', inquiries: 31, adsValue: 3900 },
    { month: 'Month 6', inquiries: 42, adsValue: 5100 },
    { month: 'Month 7', inquiries: 51, adsValue: 6400 },
    { month: 'Month 8', inquiries: 63, adsValue: 8100 },
    { month: 'Month 9', inquiries: 74, adsValue: 10200 },
    { month: 'Month 10', inquiries: 88, adsValue: 12500 },
    { month: 'Month 11', inquiries: 99, adsValue: 14800 },
    { month: 'Month 12', inquiries: 118, adsValue: 17200 }
  ];

  // Orthodontic keywords (Invisalign, braces) position comparison (Baseline vs 12 Month)
  const rankingImprovements = [
    { name: 'Invisalign Near Me', baseline: 64, position: 2 },
    { name: 'Orthodontist in [City]', baseline: 48, position: 1 },
    { name: 'Braces Consultation [City]', baseline: 75, position: 2 },
    { name: 'Teen Orthodontics Specialist', baseline: 39, position: 3 },
    { name: 'Adult Braces Treatment', baseline: 52, position: 2 },
    { name: 'Clear Aligners Price Guide', baseline: 88, position: 4 }
  ];

  const faqs = [
    {
      q: "How long does SEO take for orthodontists?",
      a: "Most practices begin seeing measurable improvements within 3–6 months. Competitive markets may require additional time, but SEO provides lasting growth compared to paid advertising."
    },
    {
      q: "Can SEO help generate more Invisalign patients?",
      a: "Yes. We specifically target Invisalign-related keywords and create optimized landing pages that attract prospective aligner patients."
    },
    {
      q: "Is local SEO important for orthodontic practices?",
      a: "Absolutely. Most orthodontic patients search for providers near their location. Local SEO is often one of the highest-impact growth opportunities."
    },
    {
      q: "How much traffic can SEO generate?",
      a: "Results vary based on market size, competition, and current website performance. Our focus is not simply increasing traffic but attracting qualified patients."
    },
    {
      q: "Do I need a new website?",
      a: "Not necessarily. Many practices can achieve significant improvements through optimization of their existing website."
    },
    {
      q: "Will SEO replace paid advertising?",
      a: "SEO and paid advertising can work together. However, SEO often reduces dependence on paid ads over time by generating consistent organic traffic."
    },
    {
      q: "How do you measure success?",
      a: "We track rankings, organic traffic, phone calls, consultation requests, conversion rates, and overall patient acquisition growth."
    }
  ];

  return (
    <div className="min-h-screen bg-[#070a13] text-white overflow-hidden font-sans pt-12">
      <SEO 
        title="SEO Services for Orthodontists | Invisalign & Braces Local SEO expert"
        description="Dominate local orthodontist searches. Attract Invisalign & Braces patients with medical-grade Orthodontic SEO services and high-intent rankings."
        keywords="seo services for orthodontists, pediatric orthodontist seo, invisalign doctor marketing, orthodontics local search optimization"
      />

      {/* Hero Section */}
      <section className="relative pt-12 md:pt-16 lg:pt-20 pb-24 px-4 md:px-6 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(6,182,212,0.1),transparent_70%)] pointer-events-none"></div>
        <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-2">
              <Activity className="w-4 h-4 text-cyan-400 animate-pulse" /> SEO for Orthodontists
            </div>
            
            <h1 id="hero-title" className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              SEO Services for Orthodontists That Generate More <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-300">Patient Consultations</span>
            </h1>
            
            <p className="text-lg sm:text-xl font-bold text-gray-200 leading-relaxed">
              Get More Invisalign, Braces, and Orthodontic Patients with Specialized SEO Services for Orthodontists
            </p>
            
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              Your future patients are searching online for orthodontic treatments every day. If your practice isn't appearing on the first page of Google, those patients are booking consultations with competing orthodontists instead.
            </p>

            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              Our SEO services for orthodontists help practices increase online visibility, attract highly qualified local patients, and generate a consistent flow of consultation requests for braces, Invisalign, retainers, and other orthodontic treatments.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <button 
                onClick={onBook}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-black bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-500 hover:to-emerald-500 font-black tracking-wide shadow-lg shadow-cyan-500/20 transition-all duration-300 group hover:scale-[1.02]"
              >
                👉 Book Your Free SEO Strategy Call Now
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              
              <Link 
                to="/pricing" 
                className="inline-flex items-center justify-center px-6 py-4 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-500/50 hover:bg-slate-950 text-white font-bold transition-all text-sm"
              >
                View General Core Plans
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Custom generated orthodontic system layout */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-6"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-3xl blur-2xl"></div>
            <div className="relative glass-morphism border border-white/5 rounded-3xl overflow-hidden shadow-2xl bg-slate-900/40">
              <div className="flex items-center justify-between border-b border-white/5 bg-slate-950/80 px-6 py-4">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400 block"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-400 block"></span>
                  <span className="w-3 h-3 rounded-full bg-green-400 block"></span>
                </div>
                <div className="text-[10px] font-mono text-gray-500">ortho-funnel@interactive-seo:~$</div>
              </div>
              <div className="p-2 bg-black/30">
                <img 
                  src={orthodontistSeoImg} 
                  alt="High-end 3D tooth alignment and Invisalign acquisition metrics analytics interface" 
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover max-h-[300px] rounded-xl border border-white/5"
                />
              </div>
              <div className="p-6 font-mono text-xs space-y-2 text-gray-400 border-t border-white/5 bg-slate-950/50">
                <p className="text-cyan-400"># Orthodontic Search Market Index online</p>
                <div className="grid grid-cols-2 gap-2 text-[10px] md:text-sm">
                  <div>• Invisalign Searches: <span className="text-emerald-400 font-bold">+168% growth</span></div>
                  <div>• Braces Keywords: <span className="text-emerald-400 font-bold">Top 3 Rank Dominance</span></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Strategy CTA Folder */}
      <section className="py-12 border-b border-white/5 bg-slate-950/20">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center space-y-6">
          <p className="text-cyan-300 font-bold text-base md:text-lg">
            ⚡ Discover exactly how many potential patients are searching for orthodontic services in your area and learn how to outrank local competitors.
          </p>
          <div className="pt-2">
            <button 
              onClick={onBook} 
              className="inline-flex items-center text-xs font-black tracking-widest text-emerald-400 hover:text-emerald-300 uppercase gap-2 group transition-all"
            >
              Get Your Free SEO Growth Plan Today <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono uppercase tracking-wider">
              Practice Obstacles
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mt-4 mb-4 uppercase italic">
              Why Most Orthodontic Practices Struggle to Generate Consistent Online Leads
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Many orthodontists invest heavily in their websites, paid advertising, and social media marketing but still fail to achieve sustainable patient growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="glass-morphism border border-white/5 p-8 rounded-[2rem] space-y-6 bg-slate-950/60">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0" /> Local Ranking and Funnel Realities:
              </h3>
              
              {/* Table format statistics */}
              <div className="overflow-hidden border border-white/5 rounded-xl bg-black/40">
                <table className="w-full border-collapse text-left text-xs text-gray-400">
                  <thead className="bg-slate-900 text-[10px] uppercase tracking-wider text-gray-300">
                    <tr>
                      <th className="px-4 py-3">Orthodontic Channel</th>
                      <th className="px-4 py-3">Standard Search Reality</th>
                      <th className="px-4 py-3">Strategic Solution</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr>
                      <td className="px-4 py-3 font-semibold text-white">Local Maps Pack</td>
                      <td className="px-4 py-3 text-red-300">Competitors capture 90%+ local calls</td>
                      <td className="px-4 py-3">Comprehensive local SEO directory setup</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-white">Invisalign Treatment</td>
                      <td className="px-4 py-3">High CPC rates drain advertising budget</td>
                      <td className="px-4 py-3 text-emerald-300">High-intent organic keyword ranks</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-white">Braces Consultation</td>
                      <td className="px-4 py-3">Patients compare 3+ nearby practitioners</td>
                      <td className="px-4 py-3">Establish E-E-A-T and doctor credibility</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-white">Conversion Optimization</td>
                      <td className="px-4 py-3">Sites lose 95%+ of warm local traffic</td>
                      <td className="px-4 py-3 text-emerald-300">Patient-first frictionless booking journeys</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 bg-red-400/5 rounded-xl border border-red-500/10 text-xs text-red-300/80 leading-relaxed font-mono">
                Google typically displays only a handful of local practices on page one. If your practice isn't among them, you're missing valuable opportunities every day.
              </div>
            </div>

            {/* List of challenges with visual impact icons */}
            <div className="space-y-4">
              {[
                { title: "Low Google rankings for high-value orthodontic keywords" },
                { title: "Limited visibility in local search results" },
                { title: "Inconsistent consultation bookings" },
                { title: "Heavy dependence on referrals" },
                { title: "Increasing competition from nearby orthodontic practices" },
                { title: "Rising advertising costs" },
                { title: "Poor website conversion rates" },
                { title: "Lack of authority and trust signals online" }
              ].map((challenge, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl bg-slate-900/30 border border-white/5 items-center">
                  <div className="w-6 h-6 rounded bg-red-500/10 flex items-center justify-center text-red-400 font-mono text-xs shrink-0">
                    !
                  </div>
                  <span className="text-gray-200 text-sm font-semibold">{challenge.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* High-Intent Keyword Query Showcase */}
      <section className="py-16 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-bold">Unlocking High-Intel Volume</span>
          <h3 className="text-xl md:text-2xl font-bold text-white">Are You Visible When Warm Patients Initiate These Searches?</h3>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            {[
              "Invisalign near me",
              "Orthodontist in [city]",
              "Braces consultation",
              "Teen orthodontics",
              "Adult braces treatment",
              "Clear aligners"
            ].map((kw) => (
              <span key={kw} className="px-3 py-1.5 rounded-full bg-cyan-950/20 border border-cyan-500/25 text-xs font-mono text-cyan-300">
                🔍 {kw}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
              Anatomy of our model
            </span>
            <h2 id="solution-title" className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mt-4 mb-4">
              Our SEO Services for Orthodontists: A Proven Patient Acquisition Strategy
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              SEO is not simply about rankings. It's about attracting the right patients at the exact moment they are searching for treatment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-morphism border border-white/5 p-8 rounded-3xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Increase Local Visibility</h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  We optimize your website and Google Business Profile so prospective patients can easily find your practice when searching for orthodontic services in your area.
                </p>
              </div>
              <p className="text-xs text-cyan-400 font-semibold pt-4 border-t border-white/5">
                ⚡ Perfected across regional maps optimization.
              </p>
            </div>

            <div className="glass-morphism border border-white/5 p-8 rounded-3xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Generate Qualified Leads</h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  We target patients actively searching for highly profitable orthodontic procedures, including:
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {["Invisalign", "Traditional braces", "Ceramic braces", "Adult orthodontics", "Teen orthodontics", "Early intervention"].map((p) => (
                    <span key={p} className="px-2 py-0.5 bg-black/40 border border-white/5 rounded text-[10px] font-mono text-emerald-300">{p}</span>
                  ))}
                </div>
              </div>
              <p className="text-xs text-cyan-400 font-semibold pt-4 border-t border-white/5">
                ⚡ Attract high-quality traffic with conversion intent.
              </p>
            </div>

            <div className="glass-morphism border border-white/5 p-8 rounded-3xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Convert Visitors into Consultations</h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Traffic alone doesn't grow a practice. We optimize landing pages, patient journeys, calls-to-action, and trust elements to encourage consultation bookings.
                </p>
              </div>
              <p className="text-xs text-cyan-400 font-semibold pt-4 border-t border-white/5">
                ⚡ Minimize friction for warm patient inquiries.
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
              Growth Models & Projections
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mt-4 mb-4">
              Orthodontic Lead Stream Forecast
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Real analytics demonstrating the predictable expansion of orthodontic inquiries when search engines associate your local practice with Invisalign and braces authority.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-12">
            {/* Chart 1: Patient Inquiries Projection */}
            <div className="glass-morphism border border-white/5 p-6 md:p-8 rounded-[2rem] flex flex-col justify-between space-y-6 bg-slate-900/40">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <LineIcon className="w-5 h-5 text-cyan-400" /> Projected Orthodontic Inquiries & Organic Value ($ Equivalent)
                </h3>
                <p className="text-xs text-gray-400 mt-1">12-Month campaign metrics based on localized optimization and maps ranking improvements.</p>
              </div>
              
              <div className="h-72 w-full font-mono">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={leadData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorInquiries" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                    <XAxis dataKey="month" stroke="#94a3b8" fontSize={10} tickLine={false} />
                    <YAxis stroke="#94a3b8" fontSize={10} tickLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0f172a', borderColor: 'rgba(255,255,255,0.1)', color: '#fff' }}
                      labelStyle={{ color: '#06b6d4', fontWeight: 'bold' }}
                    />
                    <Area type="monotone" dataKey="inquiries" name="Orthodontic Consultations/Mo" stroke="#06b6d4" fillOpacity={1} fill="url(#colorInquiries)" strokeWidth={2} />
                    <Area type="monotone" dataKey="adsValue" name="Equivalent Pay-Per-Click Ad Value ($)" stroke="#10b981" fillOpacity={1} fill="url(#colorValue)" strokeWidth={1} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              
              <div className="flex justify-between items-center text-[10px] md:text-xs text-gray-400 border-t border-white/5 pt-4">
                <span>⚡ Baseline: 8 local inquiries/mo</span>
                <span className="text-cyan-400 font-bold">🚀 Month 12 Projection: 118 local inquiries/mo</span>
              </div>
            </div>

            {/* Chart 2: Keyword Ranking Progressions */}
            <div className="glass-morphism border border-white/5 p-6 md:p-8 rounded-[2rem] flex flex-col justify-between space-y-6 bg-slate-900/40">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Target className="w-5 h-5 text-cyan-400" /> High-Profit Orthodontic Keyword Conquest
                </h3>
                <p className="text-xs text-gray-400 mt-1">Simulated movement of core patient search strings from deep indexing gaps into Page 1.</p>
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
                    <Bar dataKey="baseline" name="Baseline Rank (Deep Pages)" fill="#475569" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="position" name="Target Local Rank (Top 3)" fill="#06b6d4" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="text-center text-[10px] text-gray-450 border-t border-white/5 pt-4 leading-normal font-mono">
                Lower rank figures represent placement on Google Page 1 (e.g. Rank 1 is the most superior organic outcome).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Checklist */}
      <section className="py-20 border-b border-white/5 bg-slate-950/20">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-tr from-cyan-950/20 to-teal-950/10 border border-cyan-500/15 rounded-3xl p-8 space-y-6">
            <h3 className="text-xl font-bold text-center text-white">Results You Can Expect From Our Alignment Campaign</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "More local search visibility",
                "Increased website traffic",
                "More consultation requests",
                "Higher patient acquisition rates",
                "Reduced reliance on paid advertising",
                "Stronger long-term marketing ROI"
              ].map((res) => (
                <div key={res} className="flex items-center gap-3 bg-black/20 p-3 rounded-lg border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-xs font-semibold text-gray-200">{res}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Patient Behavior Stages Section (EEAT Mapping) */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase">
                <ShieldCheck className="w-4 h-4 inline mr-1" /> Cognitive Search Stages
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white animate-fade-in">
                SEO Experience Built Around Real Orthodontic Patient Behavior
              </h2>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                Successful orthodontic SEO requires understanding how patients make treatment decisions. Parents researching braces for their children behave differently from adults considering Invisalign. 
              </p>
              <p className="text-xs text-gray-400 mt-2">
                Just like how we structure campaigns for other high-trust practices (such as clinical <Link to="/industry/seo-services-for-therapists" className="text-cyan-400 hover:text-cyan-300 underline font-semibold">therapists and counselors</Link>), we segment patient behavior to match the user's intent curve.
              </p>

              <div className="space-y-4">
                <div className="border border-white/5 bg-slate-900/40 p-5 rounded-2xl">
                  <h4 className="font-bold text-white text-sm">Example 1: Invisalign Research Process</h4>
                  <p className="text-xs text-gray-400 mt-1">A patient typically moves from high-funnel inquiry keywords to transaction: </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-2 py-0.5 bg-black/40 border border-white/5 rounded text-[10px] font-mono text-gray-300">"What is Invisalign?"</span>
                    <span className="px-2 py-0.5 bg-black/40 border border-white/5 rounded text-[10px] font-mono text-gray-300">"Invisalign vs braces"</span>
                    <span className="px-2 py-0.5 bg-black/40 border border-white/5 rounded text-[10px] font-mono text-gray-300">"Invisalign cost"</span>
                    <span className="px-2 py-0.5 bg-cyan-550/10 border border-cyan-500/20 rounded text-[10px] font-mono text-cyan-400">"Invisalign orthodontist near me"</span>
                  </div>
                </div>

                <div className="border border-white/5 bg-slate-900/40 p-5 rounded-2xl">
                  <h4 className="font-bold text-white text-sm">Example 2: Parent Searching for Child Orthodontics</h4>
                  <p className="text-xs text-gray-400 mt-1">Parents prioritize professional pedigree, pediatric expertise, and scheduling comfort:</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-2 py-0.5 bg-black/40 border border-white/5 rounded text-[10px] font-mono text-gray-300">"Best orthodontist for teenagers"</span>
                    <span className="px-2 py-0.5 bg-black/40 border border-white/5 rounded text-[10px] font-mono text-gray-300">"When should my child get braces?"</span>
                    <span className="px-2 py-0.5 bg-black/40 border border-white/5 rounded text-[10px] font-mono text-gray-300">"Early orthodontic treatment"</span>
                  </div>
                </div>

                <div className="border border-white/5 bg-slate-900/40 p-5 rounded-2xl">
                  <h4 className="font-bold text-white text-sm">Example 3: Adult Orthodontic Patients</h4>
                  <p className="text-xs text-gray-400 mt-1">Adults demand discretion, speed of results, and financial flexibility. Our customized campaigns directly address: </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded text-[10px] font-mono text-emerald-300">Esthetic Braces Appearance</span>
                    <span className="px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded text-[10px] font-mono text-emerald-300">Practice Convenience & Appointment Speed</span>
                    <span className="px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded text-[10px] font-mono text-emerald-300">Flexible Monthly Installment Pricing Plans</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-900 border border-white/5 rounded-3xl p-8 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20 mb-4">
                  <Award className="w-6 h-6 animate-pulse" />
                </div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400">Why Authority Structure Matters (E-E-A-T)</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Google evaluates healthcare-related websites under stricter quality standards. This means your website must demonstrate:
                </p>
                <div className="grid grid-cols-3 gap-2 py-2">
                  <div className="p-3 bg-black/40 rounded-xl border border-white/5 text-center">
                    <span className="font-mono text-xs font-bold text-teal-400 block mb-1">E</span>
                    <span className="text-[9px] text-gray-500 uppercase font-mono tracking-wider">Expertise</span>
                  </div>
                  <div className="p-3 bg-black/40 rounded-xl border border-white/5 text-center">
                    <span className="font-mono text-xs font-bold text-cyan-400 block mb-1">A</span>
                    <span className="text-[9px] text-gray-500 uppercase font-mono tracking-wider">Authority</span>
                  </div>
                  <div className="p-3 bg-black/40 rounded-xl border border-white/5 text-center">
                    <span className="font-mono text-xs font-bold text-emerald-400 block mb-1">T</span>
                    <span className="text-[9px] text-gray-500 uppercase font-mono tracking-wider">Trustworthiness</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  We strengthen these signals through expert-level medical content creation, highly structured clinic website architectures formatted via <a href="https://schema.org/MedicalBusiness" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline font-semibold">Schema.org MedicalBusiness criteria</a>, local healthcare authority building, and ethical reputation management.
                </p>
              </div>

              {/* Interlinking callout */}
              <div className="p-6 bg-emerald-950/10 border border-emerald-500/15 rounded-3xl space-y-2">
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold block">Internal Integration Link</span>
                <p className="text-xs text-gray-300">
                  Building authority begins with secure technical deployment models. For orthodontic practices using robust content backends, explore our developer analysis on <Link to="/services/cms-seo/wordpress-seo-expert" className="text-emerald-400 hover:text-emerald-300 underline font-semibold">WordPress high-performance orthodontics optimization</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grids Section */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              Features and Benefits of Our SEO Services for Orthodontists
            </h2>
            <p className="text-gray-405 text-sm md:text-base leading-relaxed">
              We cover all technical, local, and content vectors required to outrank competing orthodontists.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Comprehensive SEO Audit",
                feat: "Complete analysis of your website and online presence.",
                benefit: "Identify growth opportunities and eliminate ranking barriers."
              },
              {
                title: "Local SEO Optimization",
                feat: "Optimization of local citations, maps listings, and geographic relevance.",
                benefit: "Greater visibility in local searches and Google Maps rankings."
              },
              {
                title: "Google Business Profile Optimization",
                feat: "Full profile enhancement and ongoing management.",
                benefit: "Increased calls, website visits, and consultation inquiries."
              },
              {
                title: "Keyword Research Strategy",
                feat: "Identification of high-converting orthodontic keywords.",
                benefit: "Attract patients actively seeking treatment."
              },
              {
                title: "Content Marketing Engine",
                feat: "Educational articles, treatment pages, and pediatric content.",
                benefit: "Build authority while generating organic search traffic."
              },
              {
                title: "Technical SEO Optimization",
                feat: "Improvements to site speed, mobile usability, crawlability, and indexing.",
                benefit: "Better rankings and improved user experience."
              },
              {
                title: "Conversion Optimization (CRO)",
                feat: "Strategic calls-to-action and patient-focused page design.",
                benefit: "More consultation bookings from existing traffic."
              },
              {
                title: "Reporting and Analytics Dashboard",
                feat: "Transparent monthly performance reports.",
                benefit: "Clear visibility into ROI and campaign progress."
              }
            ].map((item, idx) => (
              <div key={idx} className="glass-morphism border border-white/5 p-6 rounded-2xl flex flex-col justify-between space-y-4 hover:border-cyan-500/20 transition-all">
                <div className="space-y-2">
                  <span className="font-mono text-[10px] text-cyan-400 font-bold uppercase tracking-wider block">Campaign Feature {idx + 1}</span>
                  <h3 className="font-bold text-white text-sm leading-snug">{item.title}</h3>
                  <p className="text-gray-400 text-xs leading-normal"><span className="text-gray-200 font-semibold">Scope:</span> {item.feat}</p>
                </div>
                <div className="pt-3 border-t border-white/5 text-[11px] text-emerald-400 font-semibold leading-normal">
                  {idx === 1 ? (
                    <span>
                      Outcome: Attract patients in your radius. Learn via our <Link to="/locations" className="text-emerald-400 hover:text-emerald-300 underline">SEO local search database</Link>.
                    </span>
                  ) : (
                    <span>Benefit: {item.benefit}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Matrix Table: SEO vs Traditional Marketing Channels */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/40">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              Why SEO Outperforms Traditional Marketing Channels
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Unlike paid advertising models that stop generating traffic the moment you halt payments, SEO creates a long-term medical asset that continues generating patient inquiries month after month.
            </p>
          </div>

          <div className="overflow-x-auto max-w-4xl mx-auto border border-white/10 rounded-2xl bg-slate-900/60 shadow-xl">
            <table className="w-full border-collapse text-left text-xs md:text-sm">
              <thead className="bg-slate-950 text-[10px] md:text-xs uppercase tracking-widest text-cyan-400 border-b border-white/10 font-mono">
                <tr>
                  <th className="px-6 py-4">Marketing Channel</th>
                  <th className="px-6 py-4">Short-Term Results</th>
                  <th className="px-6 py-4">Long-Term Value</th>
                  <th className="px-6 py-4">Cost Sustainability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-gray-300">
                <tr className="bg-cyan-950/10">
                  <td className="px-6 py-4 font-bold text-white">🏆 Orthodontic SEO</td>
                  <td className="px-6 py-4 text-cyan-300">Moderate (3–6 Months build-up)</td>
                  <td className="px-6 py-4 text-emerald-400 font-bold">Excellent (Compounds over years)</td>
                  <td className="px-6 py-4 text-emerald-400 font-mono">Zero CPC; highly sustainable</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-white">Pay-Per-Click Ads (PPC)</td>
                  <td className="px-6 py-4 text-emerald-400">Fast (Instant traffic setup)</td>
                  <td className="px-6 py-4 text-red-300">Stops when budget spending stops</td>
                  <td className="px-6 py-4 text-red-400">High ongoing costs per click</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-white">Direct Physical Mail</td>
                  <td className="px-6 py-4">Limited impact</td>
                  <td className="px-6 py-4 text-red-300">Low sustainability</td>
                  <td className="px-6 py-4">High print & physical postage fees</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-white">Print Advertising</td>
                  <td className="px-6 py-4">Limited tracking</td>
                  <td className="px-6 py-4 text-red-300">Lower overall ROI</td>
                  <td className="px-6 py-4">Fixed publisher advertisement fees</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-white">Referrals Network Only</td>
                  <td className="px-6 py-4">Inconsistent</td>
                  <td className="px-6 py-4">Difficult to scale</td>
                  <td className="px-6 py-4">Unpredictable clinical pipeline flow</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Trust & Differentiation Section */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <span className="px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase">
                Campaign Transparency
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
                Why Orthodontists Trust Our SEO Services
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                We believe in setting transparent clinical goals. We never resort to questionable backlink strategies that risk Google penalty marks. Learn how this pairs with other visual practices, like our <Link to="/industry/seo-services-for-plastic-surgeons" className="text-cyan-400 hover:text-cyan-300 underline font-semibold">patient-first plastic surgery SEO strategies</Link>.
              </p>

              <div className="space-y-4 font-sans">
                {[
                  {
                    title: "Transparent Reporting",
                    desc: "You'll know exactly what work is being performed, which page rankings are improving, and how organic phone calls and leads scale."
                  },
                  {
                    title: "Ethical SEO Practices",
                    desc: "We follow official search engine starter guides and strictly avoid temporary ranking hacks that can destroy domain longevity."
                  },
                  {
                    title: "Patient-Focused Strategy",
                    desc: "Everything we do is designed to capture and convert patients seeking aligner and orthodontic treatment."
                  },
                  {
                    title: "Ongoing Optimization",
                    desc: "A search campaign is not a static project. We refine strategies based on real-time ranking algorithms and local competitor maneuvers."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-xl bg-slate-900/40 border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-white text-sm">{item.title}</h4>
                      <p className="text-xs text-gray-400 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-900/60 border border-white/10 p-8 rounded-[2rem] space-y-6">
                <h3 className="text-xl font-bold text-white border-b border-white/5 pb-4">What Makes Us Different?</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Few agencies specialize in helping orthodontic clinics attract Invisalign and orthodontic-specific patient pipelines.
                </p>
                
                <div className="space-y-4">
                  {[
                    {
                      title: "Orthodontic-Specific Keyword Targeting",
                      p: "We focus on keywords that generate real consultations, not just meaningless high-volume information queries."
                    },
                    {
                      title: "Local Market Domination",
                      p: "We map regional search hubs so patient maps results spotlight your clinic instead of third-party directories."
                    },
                    {
                      title: "Full-Funnel Patient Acquisition",
                      p: "We optimize every single stage of the medical research process—converting initial interest to a confirmed, scheduled consultation."
                    }
                  ].map((feat, idx) => (
                    <div key={idx} className="space-y-1">
                      <span className="text-xs font-black text-cyan-400 block">• {feat.title}</span>
                      <p className="text-xs text-gray-300 leading-relaxed pl-3">{feat.p}</p>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-cyan-950/30 border border-cyan-500/20 rounded-xl">
                  <p className="text-xs text-cyan-300 font-mono leading-normal">
                    📊 Align your strategy with professional healthcare models. View our <Link to="/pricing/local-seo-strategy" className="text-cyan-400 hover:text-cyan-300 underline font-semibold">Local SEO Strategy package details</Link> to analyze coverage budgets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
              Common Inquiries
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mt-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-450 text-sm mt-3">
              Understanding the path to organic braces and Invisalign dominance.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="border border-white/5 rounded-2xl bg-slate-900/20 hover:bg-slate-900/40 transition-colors overflow-hidden"
              >
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold text-white text-sm md:text-base"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${activeFaq === idx ? 'rotate-180 text-cyan-400' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-6 pt-2 border-t border-white/5 text-xs md:text-sm text-gray-400 leading-relaxed bg-black/10">
                    <p>{faq.a}</p>
                    {idx === 3 && (
                      <p className="mt-3 text-xs text-cyan-400 font-semibold">
                        Ready to view detailed localized analytics? Read our <Link to="/locations" className="underline">geographic SEO index</Link> for regional search volume maps.
                      </p>
                    )}
                    {idx === 0 && (
                      <p className="mt-3 text-xs text-cyan-400 font-semibold">
                        Learn about organic domain authority criteria under official <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noopener noreferrer" className="underline">Google Search Essentials Webmasters standards</a>.
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Conversion Box */}
      <section className="py-24 px-4 md:px-6 relative">
        <div className="max-w-5xl mx-auto bg-gradient-to-tr from-cyan-950/30 to-slate-900/60 border border-cyan-500/20 rounded-[2.5rem] p-8 md:p-12 text-center space-y-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.1),transparent_60%)] pointer-events-none"></div>
          
          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase italic">
              Ready to Grow Your Orthodontic Practice?
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Your future patients are searching online right now. The question is whether they find your practice or your competitors. Our specialized SEO services for orthodontists help practices increase visibility, build trust, and generate more consultation bookings through sustainable organic growth.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-black/40 border border-white/5 p-6 rounded-2xl space-y-4 text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-center">Get Your Free Orthodontic SEO Consultation</h4>
            <div className="grid sm:grid-cols-2 gap-3 text-xs text-gray-300">
              <div className="flex items-center gap-2">✓ Personalized custom clinic SEO audit</div>
              <div className="flex items-center gap-2">✓ Learn how to outrank local competitors</div>
              <div className="flex items-center gap-2">✓ Identify missed patient lead opportunities</div>
              <div className="flex items-center gap-2">✓ Get a tailored orthodontic growth roadmap</div>
            </div>
          </div>

          <div className="pt-4">
            <button 
              onClick={onBook}
              className="inline-flex items-center justify-center px-10 py-5 rounded-2xl text-black bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-500 hover:to-emerald-500 font-black tracking-wide text-base shadow-xl shadow-cyan-500/20 transition-all duration-300 group hover:scale-[1.02]"
            >
              👉 Book Your Free SEO Strategy Call Now
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrthodontistSEOPage;
