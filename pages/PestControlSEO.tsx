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
  Bug,
  ShieldAlert,
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

const pestControlSeoImg = '/assets/images/pest_control_seo_dashboard_1782371036699.jpg';

interface PestControlSEOProps {
  onBook: (e?: React.MouseEvent) => void;
}

const PestControlSEOPage: React.FC<PestControlSEOProps> = ({ onBook }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Monthly organic pest control lead volume over 12 months (simulated local growth)
  const leadData = [
    { month: 'Month 1', calls: 12, adSpendSaved: 480 },
    { month: 'Month 2', calls: 18, adSpendSaved: 720 },
    { month: 'Month 3', calls: 24, adSpendSaved: 960 },
    { month: 'Month 4', calls: 35, adSpendSaved: 1400 },
    { month: 'Month 5', calls: 49, adSpendSaved: 1960 },
    { month: 'Month 6', calls: 62, adSpendSaved: 2480 },
    { month: 'Month 7', calls: 78, adSpendSaved: 3120 },
    { month: 'Month 8', calls: 94, adSpendSaved: 3760 },
    { month: 'Month 9', calls: 112, adSpendSaved: 4480 },
    { month: 'Month 10', calls: 130, adSpendSaved: 5200 },
    { month: 'Month 11', calls: 148, adSpendSaved: 5920 },
    { month: 'Month 12', calls: 174, adSpendSaved: 6960 }
  ];

  // Pest control keywords baseline vs 12 Month position
  const rankingImprovements = [
    { name: 'Pest Control Near Me', baseline: 54, position: 2 },
    { name: 'Termite Treatment [City]', baseline: 71, position: 1 },
    { name: 'Bed Bug Exterminator', baseline: 63, position: 3 },
    { name: 'Rodent Removal Company', baseline: 42, position: 2 },
    { name: 'Ant Control Specialist', baseline: 88, position: 2 },
    { name: 'Commercial Pest Management', baseline: 95, position: 4 }
  ];

  const faqs = [
    {
      q: "How long does SEO take for pest control companies?",
      a: "Most businesses begin seeing measurable improvements within 3 to 6 months, although timelines vary depending on competition, website quality, and market conditions."
    },
    {
      q: "Is local SEO important for pest control companies?",
      a: "Yes. Most customers search for providers within their area, making local SEO one of the highest-impact marketing channels."
    },
    {
      q: "Can SEO help generate phone calls?",
      a: "Absolutely. Proper optimization increases visibility for high-intent searches, resulting in more calls and appointment requests."
    },
    {
      q: "Do you optimize Google Business Profiles?",
      a: "Yes. Google Business Profile optimization is a core component of local SEO success."
    },
    {
      q: "Can you help multi-location pest control companies?",
      a: "Yes. We create scalable SEO strategies for businesses serving multiple cities and regions."
    },
    {
      q: "Do I need content on my website?",
      a: "Yes. High-quality content helps improve rankings, establish authority, and answer customer questions."
    },
    {
      q: "Is SEO better than Google Ads?",
      a: "Both can be effective. However, SEO typically delivers stronger long-term ROI because traffic continues without ongoing ad spend."
    }
  ];

  return (
    <div className="min-h-screen bg-[#070a13] text-white overflow-hidden font-sans pt-12">
      <SEO 
        title="SEO Services for Pest Control Companies | Local Exterminator SEO Expert"
        description="Dominate local pest control & exterminator searches. Generate more calls, leads & booked jobs with specialized SEO services for pest control companies."
        keywords="seo services for pest control companies, exterminator local seo, termite treatment digital marketing, commercial pest control rankings"
      />

      {/* Hero Section */}
      <section className="relative pt-12 md:pt-16 lg:pt-20 pb-24 px-4 md:px-6 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(234,179,8,0.1),transparent_70%)] pointer-events-none"></div>
        <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-yellow-500/5 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-semibold tracking-wider uppercase mb-2">
              <Bug className="w-4 h-4 text-yellow-400 animate-bounce" /> Dominate Local Search
            </div>
            
            <h1 id="hero-title" className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              SEO Services for Pest Control Companies That Generate <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-orange-400">More Calls, Leads & Booked Jobs</span>
            </h1>
            
            <p className="text-lg sm:text-xl font-bold text-gray-200 leading-relaxed">
              Get Found First With SEO Services for Pest Control Companies
            </p>
            
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              When homeowners and businesses need pest control, they search online first. If your company isn't showing up on the first page of Google, you're losing leads to competitors every day.
            </p>

            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              Our specialized <strong>SEO services for pest control companies</strong> help exterminators, pest management firms, termite specialists, rodent control companies, and wildlife removal businesses increase online visibility, generate qualified leads, and book more service appointments consistently.
            </p>

            <p className="text-yellow-300 font-semibold text-sm leading-relaxed">
              Whether you serve a single city or multiple service areas, we help your business dominate local search results and attract customers who are actively looking for pest control services.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <button 
                onClick={onBook}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-black bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 font-black tracking-wide shadow-lg shadow-yellow-500/20 transition-all duration-300 group hover:scale-[1.02]"
              >
                📞 Book Your Free SEO Strategy Call Now
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              
              <Link 
                to="/pricing/local-seo-strategy" 
                className="inline-flex items-center justify-center px-6 py-4 rounded-xl bg-slate-900 border border-white/10 hover:border-yellow-500/50 hover:bg-slate-950 text-white font-bold transition-all text-sm"
              >
                View Local SEO Package
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Custom generated pest control system layout */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-6"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/10 to-transparent rounded-3xl blur-2xl"></div>
            <div className="relative glass-morphism border border-white/5 rounded-3xl overflow-hidden shadow-2xl bg-slate-900/40">
              <div className="flex items-center justify-between border-b border-white/5 bg-slate-950/80 px-6 py-4">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400 block"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-400 block"></span>
                  <span className="w-3 h-3 rounded-full bg-green-400 block"></span>
                </div>
                <div className="text-[10px] font-mono text-gray-500">pest-control-funnel@exterminator-seo:~$</div>
              </div>
              <div className="p-2 bg-black/30">
                <img 
                  src={pestControlSeoImg} 
                  alt="High-end pest control local search metrics, keyword rankings, and lead generation heatmaps" 
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover max-h-[300px] rounded-xl border border-white/5"
                />
              </div>
              <div className="p-6 font-mono text-xs space-y-2 text-gray-400 border-t border-white/5 bg-slate-950/50">
                <p className="text-yellow-400"># Exterminator Search Market Authority</p>
                <div className="grid grid-cols-2 gap-2 text-[10px] md:text-xs">
                  <div>• Exterminator Leads: <span className="text-yellow-400 font-bold">+145% growth</span></div>
                  <div>• Termite Keywords: <span className="text-yellow-400 font-bold">Top 3 Rank Conquest</span></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Strategy CTA Folder */}
      <section className="py-12 border-b border-white/5 bg-slate-950/20">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center space-y-6">
          <p className="text-yellow-300 font-bold text-base md:text-lg">
            ⚡ Request Your Free SEO Strategy Consultation Today. Discover how to outrank local competitors.
          </p>
          <div className="pt-2">
            <button 
              onClick={onBook} 
              className="inline-flex items-center text-xs font-black tracking-widest text-yellow-400 hover:text-yellow-300 uppercase gap-2 group transition-all"
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
              Market Struggles
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mt-4 mb-4">
              Why Most Pest Control Companies Struggle Online
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              The pest control industry is highly competitive. Every day, potential customers search for urgent services, but traditional marketing and lazy digital setups fall short of capturing warm leads.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="glass-morphism border border-white/5 p-8 rounded-[2rem] space-y-6 bg-slate-950/60">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0" /> Local Service Ranking & Funnel Realities:
              </h3>
              
              {/* Table format statistics */}
              <div className="overflow-hidden border border-white/5 rounded-xl bg-black/40">
                <table className="w-full border-collapse text-left text-xs text-gray-400">
                  <thead className="bg-slate-900 text-[10px] uppercase tracking-wider text-gray-300">
                    <tr>
                      <th className="px-4 py-3">Pest Control Channel</th>
                      <th className="px-4 py-3">Standard Search Reality</th>
                      <th className="px-4 py-3">Strategic Solution</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr>
                      <td className="px-4 py-3 font-semibold text-white">Local Maps Pack</td>
                      <td className="px-4 py-3 text-red-300">National chains capture 80%+ clicks</td>
                      <td className="px-4 py-3 text-yellow-300">Dominate local citation and maps authority</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-white">Termite/Bed Bug Queries</td>
                      <td className="px-4 py-3">Ad click prices drain monthly margin</td>
                      <td className="px-4 py-3 text-emerald-300">High-converting organic SEO structure</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-white">Emergency Services</td>
                      <td className="px-4 py-3">Customers call first visible provider</td>
                      <td className="px-4 py-3 text-yellow-300">Optimize mobile speed & click-to-call CRO</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-white">Multi-Location Funnels</td>
                      <td className="px-4 py-3">Cluttered sites dilute search relevance</td>
                      <td className="px-4 py-3">Scale targeted local landing page templates</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 bg-red-400/5 rounded-xl border border-red-500/10 text-xs text-red-300/80 leading-relaxed font-mono">
                Google typically displays only a handful of local practices on page one. If your business isn't among them, you're missing valuable opportunities every day.
              </div>
            </div>

            {/* List of challenges with visual impact icons */}
            <div className="space-y-4">
              {[
                { title: "Low Search Engine Visibility - Your website looks professional, but fails to rank properly for valuable local keywords." },
                { title: "Dependence on Paid Advertising - High reliance on Google Ads or shared lead platforms. Once ad spend stops, leads vanish." },
                { title: "Inconsistent Lead Flow - Seasonal fluctuations and weak organic visibility create unpredictable revenue streams." },
                { title: "Strong Local Competition - Aggressive national franchises and local competitors dominating high-intent searches." },
                { title: "Poor Website Performance - Slow loading speeds, lack of schema markup, and technical SEO issues that block indexing." }
              ].map((challenge, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl bg-slate-900/30 border border-white/5 items-start">
                  <div className="w-6 h-6 rounded bg-red-500/10 flex items-center justify-center text-red-400 font-mono text-xs shrink-0 mt-1">
                    !
                  </div>
                  <div>
                    <span className="text-gray-200 text-sm font-semibold block">{challenge.title.split(' - ')[0]}</span>
                    <p className="text-gray-400 text-xs mt-1">{challenge.title.split(' - ')[1]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* High-Intent Keyword Query Showcase */}
      <section className="py-16 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-[11px] font-mono uppercase tracking-widest text-yellow-400 font-bold">High-Intent Service Searches</span>
          <h3 className="text-xl md:text-2xl font-bold text-white">Are You Visible When Warm Customers Search These Keywords?</h3>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            {[
              "Pest control near me",
              "Termite treatment services",
              "Rodent removal companies",
              "Bed bug exterminators",
              "Ant control specialists",
              "Emergency pest control services",
              "Wildlife removal"
            ].map((kw) => (
              <span key={kw} className="px-3 py-1.5 rounded-full bg-yellow-950/20 border border-yellow-500/25 text-xs font-mono text-yellow-300">
                🐜 {kw}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-mono uppercase tracking-wider">
              Our Extermination Funnel Model
            </span>
            <h2 id="solution-title" className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mt-4 mb-4">
              SEO Designed Specifically for Pest Control Businesses
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Our SEO services for pest control companies are built around one goal: <strong>Generate more qualified leads and service calls from organic search.</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-morphism border border-white/5 p-8 rounded-3xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-400 border border-yellow-500/20">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Local SEO Domination</h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Most pest control customers search within their local area. We optimize your Google Business Profile, local citations, geographic targeting, and service area pages to ensure high placement in local organic Maps searches.
                </p>
              </div>
              <p className="text-xs text-yellow-400 font-semibold pt-4 border-t border-white/5">
                ⚡ Expand local maps footprint.
              </p>
            </div>

            <div className="glass-morphism border border-white/5 p-8 rounded-3xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-400 border border-yellow-500/20">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Pest Keyword Research</h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  We isolate and target high-converting search terms like:
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {["Pest control services", "Exterminator near me", "Termite treatment", "Bed bug removal", "Rodent control", "Commercial pest control"].map((p) => (
                    <span key={p} className="px-2 py-0.5 bg-black/40 border border-white/5 rounded text-[10px] font-mono text-yellow-300">{p}</span>
                  ))}
                </div>
              </div>
              <p className="text-xs text-yellow-400 font-semibold pt-4 border-t border-white/5">
                ⚡ Drive transaction-ready callers.
              </p>
            </div>

            <div className="glass-morphism border border-white/5 p-8 rounded-3xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-400 border border-yellow-500/20">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Technical SEO & CRO</h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  We boost site speed, refine mobile responsiveness, write structured schemas, and apply high-converting calls-to-action to convert traffic into booked calls.
                </p>
              </div>
              <p className="text-xs text-yellow-400 font-semibold pt-4 border-t border-white/5">
                ⚡ Seamless mobile-first booking experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Analytics / Charts Section */}
      <section className="py-24 px-4 md:px-6 relative bg-slate-950/40 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-mono uppercase tracking-wider">
              Growth Models & Projections
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mt-4 mb-4">
              Pest Control Organic Call Volume Forecast
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Real analytics demonstrating the predictable expansion of local service calls and ad-spend savings when search engines prioritize your company's pest management relevance.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-12">
            {/* Chart 1: Patient Inquiries Projection */}
            <div className="glass-morphism border border-white/5 p-6 md:p-8 rounded-[2rem] flex flex-col justify-between space-y-6 bg-slate-900/40">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <LineIcon className="w-5 h-5 text-yellow-400" /> Projected Exterminator Service Calls & Organic Search Value ($ Equivalent)
                </h3>
                <p className="text-xs text-gray-400 mt-1">12-Month campaign metrics based on localized optimization and maps ranking improvements.</p>
              </div>
              
              <div className="h-72 w-full font-mono">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={leadData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#eab308" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#eab308" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorAdValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                    <XAxis dataKey="month" stroke="#94a3b8" fontSize={10} tickLine={false} />
                    <YAxis stroke="#94a3b8" fontSize={10} tickLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0f172a', borderColor: 'rgba(255,255,255,0.1)', color: '#fff' }}
                      labelStyle={{ color: '#eab308', fontWeight: 'bold' }}
                    />
                    <Area type="monotone" dataKey="calls" name="Service Calls/Mo" stroke="#eab308" fillOpacity={1} fill="url(#colorCalls)" strokeWidth={2} />
                    <Area type="monotone" dataKey="adSpendSaved" name="Equivalent Paid Lead Value ($)" stroke="#10b981" fillOpacity={1} fill="url(#colorAdValue)" strokeWidth={1} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              
              <div className="flex justify-between items-center text-[10px] md:text-xs text-gray-400 border-t border-white/5 pt-4">
                <span>⚡ Baseline: 12 service calls/mo</span>
                <span className="text-yellow-400 font-bold">🚀 Month 12 Target: 174 service calls/mo</span>
              </div>
            </div>

            {/* Chart 2: Keyword Ranking Progressions */}
            <div className="glass-morphism border border-white/5 p-6 md:p-8 rounded-[2rem] flex flex-col justify-between space-y-6 bg-slate-900/40">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Target className="w-5 h-5 text-yellow-400" /> High-Profit Pest Control Keyword Conquest
                </h3>
                <p className="text-xs text-gray-400 mt-1">Simulated movement of core customer search queries from deep indexing page gaps into Page 1.</p>
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
                    <Bar dataKey="baseline" name="Baseline Rank (Page 5+)" fill="#475569" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="position" name="Target Local Rank (Top 3)" fill="#eab308" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="text-center text-[10px] text-gray-550 border-t border-white/5 pt-4 leading-normal font-mono">
                Lower rank figures represent superior organic search positions (e.g., Rank 1 is the most superior organic outcome on Google).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience built around pest search behavior */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="px-3 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-semibold tracking-wider uppercase">
                <ShieldCheck className="w-4 h-4 inline mr-1" /> Search Intent Analysis
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white animate-fade-in">
                Experience That Matters in Pest Control SEO
              </h2>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                SEO for pest control companies is different from SEO for other industries. Customers often need immediate solutions. Search behavior varies by pest type, season, location, and service urgency.
              </p>
              <p className="text-gray-400 text-xs">
                A homeowner discovering termites typically searches differently than a restaurant owner needing commercial pest management. Understanding these search patterns allows us to build targeted SEO campaigns that align with customer intent.
              </p>

              <div className="space-y-4">
                <div className="border border-white/5 bg-slate-900/40 p-5 rounded-2xl">
                  <h4 className="font-bold text-white text-sm">🏡 Residential Pest Control Use Case</h4>
                  <p className="text-xs text-gray-400 mt-1">A local exterminator wants more residential leads. We optimize city-specific service pages, improve local rankings, and increase visibility for high-converting searches.</p>
                  <p className="text-xs text-yellow-400 font-mono mt-1">Result: More phone calls from homeowners actively seeking pest removal services.</p>
                </div>

                <div className="border border-white/5 bg-slate-900/40 p-5 rounded-2xl">
                  <h4 className="font-bold text-white text-sm">🏢 Commercial Pest Control Use Case</h4>
                  <p className="text-xs text-gray-400 mt-1">A company targeting offices, restaurants, and warehouses needs higher-value contracts. We build industry-focused content and optimize commercial service pages.</p>
                  <p className="text-xs text-yellow-400 font-mono mt-1">Result: More inquiries from business decision-makers.</p>
                </div>

                <div className="border border-white/5 bg-slate-900/40 p-5 rounded-2xl">
                  <h4 className="font-bold text-white text-sm">📍 Multi-Location Pest Control Use Case</h4>
                  <p className="text-xs text-gray-400 mt-1">A growing company serves multiple cities. We create optimized location pages and local SEO campaigns for each service area.</p>
                  <p className="text-xs text-yellow-400 font-mono mt-1">Result: Greater visibility across multiple geographic markets.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-900 border border-white/5 rounded-3xl p-8 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-400 border border-yellow-500/20 mb-4">
                  <Award className="w-6 h-6" />
                </div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-yellow-400">Why Authority Structure Matters for Local Exterminators</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Google evaluates environmental and contracting businesses under strict local service quality guidelines. This means your website must demonstrate expertise, geographical proximity, and reliability.
                </p>
                <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                  <p className="text-xs text-gray-300">
                    We optimize websites adhering directly to <a href="https://schema.org/PestControlService" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 underline font-semibold">Schema.org PestControlService technical markup specifications</a>, establishing pristine local search credibility.
                  </p>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  We strengthen these signals through detailed treatment articles (like termite identification or seasonal guides), highly structured local site architectures, and local directory listings.
                </p>
              </div>

              {/* Interlinking callout */}
              <div className="p-6 bg-yellow-950/10 border border-yellow-500/15 rounded-3xl space-y-2">
                <span className="text-[10px] font-mono text-yellow-400 uppercase tracking-widest font-bold block">Internal Integration Links</span>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Building authority begins with clean technical deployment models. For home service companies utilizing robust content setups, explore our analysis on <Link to="/services/cms-seo/wordpress-seo-expert" className="text-yellow-400 hover:text-yellow-300 underline font-semibold">WordPress high-performance local optimization</Link>. Furthermore, if you manage outdoor landscaping client services, read our <Link to="/industry/seo-services-for-landscapers" className="text-yellow-400 hover:text-yellow-300 underline font-semibold">landscaping local SEO blueprints</Link>.
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
              Features and Benefits of Our Pest Control SEO Campaigns
            </h2>
            <p className="text-gray-450 text-sm md:text-base leading-relaxed">
              We cover all technical, local, and content vectors required to outrank competing exterminators.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Comprehensive SEO Audit",
                feat: "Detailed analysis of your website, competitors, and search visibility.",
                benefit: "Identify hidden opportunities and ranking barriers."
              },
              {
                title: "Local SEO Optimization",
                feat: "Google Business Profile optimization and local citation management.",
                benefit: "Appear in local searches where customers are looking."
              },
              {
                title: "Keyword Research & Strategy",
                feat: "Targeting high-converting pest control search terms.",
                benefit: "Attract visitors who are ready to book services."
              },
              {
                title: "Content Creation Engine",
                feat: "SEO-focused content written for both users and search engines.",
                benefit: "Increase rankings while building trust with potential customers."
              },
              {
                title: "Technical SEO Optimization",
                feat: "Performance, speed, and site architecture improvements.",
                benefit: "Improve user experience and ranking potential."
              },
              {
                title: "Monthly Reporting & Analytics",
                feat: "Transparent performance tracking and call-leads tracking.",
                benefit: "Know exactly how your campaign is performing."
              }
            ].map((item, idx) => (
              <div key={idx} className="glass-morphism border border-white/5 p-6 rounded-2xl flex flex-col justify-between space-y-4 hover:border-yellow-500/20 transition-all">
                <div className="space-y-2">
                  <span className="font-mono text-[10px] text-yellow-400 font-bold uppercase tracking-wider block">Campaign Feature {idx + 1}</span>
                  <h3 className="font-bold text-white text-sm leading-snug">{item.title}</h3>
                  <p className="text-gray-400 text-xs leading-normal"><span className="text-gray-200 font-semibold">Scope:</span> {item.feat}</p>
                </div>
                <div className="pt-3 border-t border-white/5 text-[11px] text-yellow-400 font-semibold leading-normal">
                  {idx === 1 ? (
                    <span>
                      Outcome: Target regional hubs using our <Link to="/locations" className="text-yellow-400 hover:text-yellow-300 underline">SEO local search database</Link>.
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
              Pest Control Marketing Comparison Matrix
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Unlike paid advertising models that stop generating traffic the moment you halt payments, SEO creates a long-term commercial asset that continues generating service bookings month after month.
            </p>
          </div>

          <div className="overflow-x-auto max-w-4xl mx-auto border border-white/10 rounded-2xl bg-slate-900/60 shadow-xl">
            <table className="w-full border-collapse text-left text-xs md:text-sm">
              <thead className="bg-slate-950 text-[10px] md:text-xs uppercase tracking-widest text-yellow-400 border-b border-white/10 font-mono">
                <tr>
                  <th className="px-6 py-4">Marketing Option</th>
                  <th className="px-6 py-4">Advantages</th>
                  <th className="px-6 py-4">Limitations</th>
                  <th className="px-6 py-4">Long-Term Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-gray-300">
                <tr className="bg-yellow-950/10">
                  <td className="px-6 py-4 font-bold text-white">🏆 Specialized SEO</td>
                  <td className="px-6 py-4 text-emerald-400 font-bold">Sustainable lead generation, strong local visibility, increased trust, better ROI over time</td>
                  <td className="px-6 py-4">Requires initial ramp-up time (3-6 months)</td>
                  <td className="px-6 py-4 text-emerald-400 font-semibold">Excellent (Long-term asset)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-white">Paid Advertising (PPC)</td>
                  <td className="px-6 py-4 text-emerald-400">Immediate search engine visibility</td>
                  <td className="px-6 py-4 text-red-300">Costs increase over time, leads stop immediately when ads stop</td>
                  <td className="px-6 py-4 text-red-400">No residual value</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-white">Lead Gen Platforms</td>
                  <td className="px-6 py-4">Quick access to local prospects</td>
                  <td className="px-6 py-4 text-red-300">Shared leads, extreme price competition, zero brand control</td>
                  <td className="px-6 py-4 text-red-400">Low retention</td>
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
              <span className="px-3 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-semibold tracking-wider uppercase">
                Ethical Campaign Standards
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white animate-fade-in">
                What Sets Our Pest Control SEO Strategy Apart
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                We follow white-hat techniques outlined directly by the <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 underline font-semibold">Google Search Essentials Starter Guide</a> to protect your domain's health and maintain multi-year authority. 
              </p>
              <p className="text-gray-400 text-xs">
                Learn how this matches other local service structures, like our <Link to="/industry/seo-services-for-window-cleaners" className="text-yellow-400 hover:text-yellow-300 underline font-semibold">window cleaning SEO guides</Link> or our technical <Link to="/industry/seo-services-for-roofers" className="text-yellow-400 hover:text-yellow-300 underline font-semibold">roofer and contractor campaigns</Link>.
              </p>

              <div className="space-y-4 font-sans">
                {[
                  {
                    title: "Transparent Communication",
                    desc: "No confusing reports or hidden tactics. We clearly explain what we're doing, why we're doing it, and how it impacts performance."
                  },
                  {
                    title: "Ethical SEO Practices",
                    desc: "We follow official guidelines and avoid risky short-term hacks that can lead to manual actions or search filters."
                  },
                  {
                    title: "Performance Tracking",
                    desc: "You receive transparent reporting showing exact keyword rankings, organic traffic growth, and phone call trends."
                  },
                  {
                    title: "Long-Term Growth Strategy",
                    desc: "Our goal is sustainable organic growth that turns your local website into a persistent competitive moat."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-xl bg-slate-900/40 border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
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
                <h3 className="text-xl font-bold text-white border-b border-white/5 pb-4">Real Client Feedback</h3>
                
                <div className="space-y-4 text-xs italic text-gray-300">
                  <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                    <p>"Our website started generating consistent service calls after implementing a local SEO strategy. The increase in visibility helped us reduce dependence on paid advertising."</p>
                    <span className="text-[10px] font-mono text-yellow-400 font-bold block mt-2">— Residential Exterminator, Multi-City Franchise</span>
                  </div>
                  
                  <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                    <p>"We finally began ranking for important pest control keywords in our service areas and saw a measurable increase in qualified leads."</p>
                    <span className="text-[10px] font-mono text-yellow-400 font-bold block mt-2">— Termite Specialist, Regional Firm</span>
                  </div>

                  <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                    <p>"The SEO campaign improved both rankings and conversion rates, resulting in more booked appointments."</p>
                    <span className="text-[10px] font-mono text-yellow-400 font-bold block mt-2">— Wildlife and Commercial Pest Provider</span>
                  </div>
                </div>

                <div className="p-4 bg-yellow-950/30 border border-yellow-500/20 rounded-xl">
                  <p className="text-xs text-yellow-300 font-mono leading-normal">
                    💡 Align your campaign with professional SEO models. View our <Link to="/pricing/local-seo-strategy" className="text-yellow-400 hover:text-yellow-300 underline font-semibold">Local SEO Strategy package details</Link> to analyze setup scope.
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
            <span className="px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-mono uppercase tracking-wider">
              Common Inquiries
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mt-4 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Find answers to the most common questions we receive regarding local pest control SEO and organic marketing campaigns.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="border border-white/5 rounded-2xl overflow-hidden bg-slate-900/20"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-900/40 transition-colors"
                >
                  <span className="font-bold text-white text-sm md:text-base flex items-center gap-2">
                    <span className="text-yellow-400 font-mono font-bold text-xs shrink-0">Q. {idx + 1}</span>
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                
                {activeFaq === idx && (
                  <div className="p-6 pt-0 border-t border-white/5 bg-slate-950/40 text-xs md:text-sm text-gray-450 leading-relaxed font-sans space-y-2">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Action / CTA Form */}
      <section className="relative py-24 px-4 md:px-6 bg-slate-950/60 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/5 blur-[200px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <span className="px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/25 text-yellow-400 text-xs font-bold tracking-widest uppercase font-mono">
            Dominate Your Service Area
          </span>
          
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Ready to Grow Your Pest Control Business?
          </h2>
          
          <p className="text-gray-300 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
            Your next customer is already searching online for pest control services. The question is whether they find your company—or your competitor.
          </p>

          <p className="text-gray-400 text-xs md:text-sm max-w-2xl mx-auto">
            Our specialized <strong>SEO services for pest control companies</strong> help you increase visibility, attract qualified leads, and generate more booked jobs through sustainable organic growth.
          </p>

          <div className="p-8 rounded-[2rem] border border-yellow-500/20 bg-slate-900/60 text-left max-w-xl mx-auto space-y-4">
            <h4 className="font-extrabold text-white text-base">Schedule Your Free SEO Consultation Today</h4>
            <p className="text-xs text-gray-400">Discover how a customized pest control SEO strategy can help your business rank higher, generate more calls, and grow consistently.</p>
            <ul className="text-xs text-gray-200 space-y-2 font-semibold">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-yellow-400" /> Receive a personalized local SEO audit</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-yellow-400" /> Identify missed local caller opportunities</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-yellow-400" /> Learn how to outrank competitors in local maps</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-yellow-400" /> Get a custom, risk-free organic growth roadmap</li>
            </ul>
            <div className="pt-2">
              <button 
                onClick={onBook}
                className="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl text-black bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-500 hover:to-amber-500 font-black text-sm tracking-wide shadow-lg shadow-yellow-500/20 transition-all group"
              >
                👉 Book Your Free SEO Strategy Call Now
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PestControlSEOPage;
