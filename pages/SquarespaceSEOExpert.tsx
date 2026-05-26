import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ChevronDown, 
  Search, 
  Zap, 
  ShieldCheck, 
  MousePointer, 
  Flame, 
  Lock,
  BarChart3,
  TrendingUp,
  AlertTriangle,
  Users,
  Globe,
  Star,
  Cpu,
  RefreshCw,
  LayoutGrid,
  FileText,
  Workflow,
  Plus,
  Minus,
  Sparkles,
  ArrowLeft
} from 'lucide-react';
import SEO from '../components/SEO';

const SquarespaceSEOExpert: React.FC<{ onBook: () => void }> = ({ onBook }) => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(prev => prev === idx ? null : idx);
  };

  const painPoints = [
    {
      p: "Poor keyword targeting & thin service pages",
      s: "Without research, Squarespace pages target words that hold zero search volume or matching search intent."
    },
    {
      p: "Slow performance & unresolved speed thresholds",
      s: "Heavy media files and unoptimized layout elements bog down responsive load times across mobile devices."
    },
    {
      p: "Missing JSON-LD structured schema markup",
      s: "Search crawlers miss rich snippets, local business profiles, or article cards because of template constraints."
    },
    {
      p: "Generic agencies with zero platform experience",
      s: "Standard teams treat SEO like a generic checklist, fail to handle Squarespace's core settings, and stall your results."
    }
  ];

  const faqs = [
    {
      question: "Can Squarespace rank well on Google?",
      answer: "Yes. With proper technical setup and SEO strategy, Squarespace websites can compete effectively in search results. While there are platform limitations regarding server-level control, the content structure, meta tags, responsive themes, and schema mappings can all be optimized to achieve elite search visibility."
    },
    {
      question: "How long does Squarespace SEO take?",
      answer: "Most websites see measurable improvements within 3–6 months depending on competition and website condition. Initial crawling fixes and indexing triggers generally showcase impact in Google Search Console within 14 to 30 days."
    },
    {
      question: "Do you only work with Squarespace?",
      answer: "Yes. We specialize in Squarespace SEO to provide deeper expertise and faster implementation. By focusing strictly on platform behaviors, we bypass the trial-and-error approach of general agencies."
    },
    {
      question: "Do you provide SEO audits?",
      answer: "Yes. We offer comprehensive Squarespace-specific SEO audits with clear, actionable recommendations mapped directly to your organic business conversion goals."
    },
    {
      question: "Do you help with local SEO?",
      answer: "Absolutely. We specialize in optimizing location pages, local business citations, schema entities, and synchronized Google Business Profiles to dominate map pack blocks."
    },
    {
      question: "Will I receive monthly reports?",
      answer: "Yes. Every campaign includes transparent reporting, organic movement logs, and exact ROI attribution tracking so you always understand where you stand."
    }
  ];

  const comparisonTable = [
    {
      feature: "SEO System Type",
      generic: "Generalized, copy-paste checklists",
      ours: "Squarespace-specific SEO systems"
    },
    {
      feature: "Implementation Loop",
      generic: "Slow cycles, developer back-and-forth",
      ours: "Faster, direct optimization cycles"
    },
    {
      feature: "Reporting Method",
      generic: "Vanity traffic metrics and raw keyword charts",
      ours: "Revenue-focused reporting & conversion metrics"
    },
    {
      feature: "Audit Execution",
      generic: "Generic SEO crawler exports",
      ours: "Platform-specific fixes and direct adjustments"
    },
    {
      feature: "CRO Focus",
      generic: "Weak attention to user purchase behaviors",
      ours: "SEO + conversion optimization (CRO) alignment"
    },
    {
      feature: "Transparency",
      generic: "Minimal transparency, opaque retainers",
      ours: "Clear monthly reporting & plain-English advice"
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white font-sans selection:bg-orange-500/30 selection:text-orange-200 overflow-x-hidden pt-24 md:pt-32 pb-24 px-4 md:px-6">
      <SEO 
        title="Squarespace SEO Expert Services | Rank & Scale Your Site"
        description="Hire a specialized Squarespace SEO expert to rank higher, increase organic visitor traffic, and scale conversions with a proven platform-specific SEO + CRO growth framework."
        keywords="Squarespace SEO expert, Squarespace SEO specialist, Squarespace technical SEO, Squarespace SEO consultant, advanced Squarespace SEO services"
      />

      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 px-2 sm:px-4 lg:px-6">

        {/* --- 1. HERO SECTION --- */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* HERO LEFT CONTAINER */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8">
              <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest italic text-orange-400">
                <Sparkles className="w-3 h-3 text-orange-400 animate-pulse" />
                Squarespace SEO Expert Services
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase italic tracking-tighter leading-none">
                Squarespace SEO Expert Services That Drive <span className="text-orange-500">Rankings, Traffic & Leads</span>
              </h1>

              <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl">
                Help your Squarespace website rank higher on Google with platform-specific SEO strategies, technical optimization, content systems, and conversion-focused growth campaigns tailored for service businesses, ecommerce brands, and local companies.
              </p>

              {/* QUICK BENEFIT BULLETS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-2">
                {[
                  "Increase qualified organic traffic",
                  "Fix hidden Squarespace SEO issues",
                  "Improve Google rankings faster",
                  "Turn traffic into leads & sales",
                  "SEO tailored specifically for Squarespace"
                ].map((bullet, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs md:text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* CTA BUTTONS AND CONTEXT */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={onBook}
                    className="px-6 py-4 bg-orange-600 hover:bg-orange-500 text-white font-black italic uppercase tracking-wider text-xs sm:text-sm rounded-xl transition-all shadow-lg shadow-orange-600/15 cursor-pointer flex items-center justify-center gap-2"
                  >
                    Book Your Free SEO Strategy Call <ArrowRight className="w-4 h-4" />
                  </button>
                  <Link 
                    to="/contact" 
                    className="px-6 py-4 border border-white/10 hover:border-orange-500/30 hover:bg-[#0c1224]/50 text-gray-300 hover:text-white font-black italic uppercase tracking-wider text-xs sm:text-sm rounded-xl transition-all text-center flex items-center justify-center cursor-pointer"
                  >
                    Request a Free Squarespace SEO Audit
                  </Link>
                </div>
                
                {/* MICROCOPY */}
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                  <span>✓ No pressure sales calls</span>
                  <span>✓ Custom recommendations included</span>
                  <span>✓ Response within 24 hours</span>
                </div>
              </div>

              {/* TRUST BAR */}
              <div className="pt-6 border-t border-white/5">
                <span className="text-[10px] text-orange-500 font-extrabold uppercase tracking-widest italic block mb-3">Professional Milestones</span>
                <div className="flex flex-wrap gap-4 text-xs font-black uppercase tracking-wider text-gray-400">
                  <span className="bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">Squarespace SEO Specialist</span>
                  <span className="bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">Technical SEO Certified</span>
                  <span className="bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">Transparent Monthly Reporting</span>
                  <span className="bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">AI Search Optimization Ready</span>
                  <span className="bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">Local SEO + Ecommerce SEO</span>
                </div>
              </div>

            </div>

            {/* HERO RIGHT CONTAINER: WIREFRAME GRAPH MOCKUP */}
            <div className="lg:col-span-5 relative">
              <div className="glass-morphism p-6 sm:p-8 rounded-[2.5rem] border border-white/5 bg-[#080c18]/60 relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent pointer-events-none"></div>
                <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/50"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/50"></span>
                  </div>
                  <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest italic">SEO Metric Engine (2026 Focus)</span>
                </div>

                <div className="space-y-6">
                  {/* Visual before / after ranking graph */}
                  <div className="bg-[#030712]/80 border border-white/5 p-4 rounded-xl">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Organic Traffic Path</span>
                      <span className="text-xs text-orange-400 font-black italic uppercase">+300% Growth</span>
                    </div>
                    {/* Simplified bar/line layout */}
                    <div className="flex items-end gap-1.5 h-24 pt-4">
                      {[15, 20, 18, 30, 28, 45, 50, 42, 65, 80, 75, 95].map((val, idx) => (
                        <div key={idx} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                          <div 
                            style={{ height: `${val}%` }} 
                            className={`w-full rounded-t-sm transition-all duration-300 ${
                              idx > 6 ? 'bg-orange-500 shadow-lg shadow-orange-500/10' : 'bg-gray-600/40'
                            }`}
                          ></div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between text-[8px] text-gray-600 font-bold uppercase tracking-widest mt-2">
                      <span>Baseline Phase</span>
                      <span>Execution Phase</span>
                    </div>
                  </div>

                  {/* Audit preview details */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs border-b border-white/5 pb-2">
                      <span className="text-gray-400 font-semibold">Squarespace Schema Compliance</span>
                      <span className="text-green-400 font-black">99.2% Corrected</span>
                    </div>
                    <div className="flex items-center justify-between text-xs border-b border-white/5 pb-2">
                      <span className="text-gray-400 font-semibold">PageSpeed Experience Score</span>
                      <span className="text-green-400 font-black">Mobile Opt Active</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400 font-semibold">AI Search Entities Indexed</span>
                      <span className="text-orange-400 font-black">Active Grid</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* --- 2. SOCIAL PROOF STRIP --- */}
        <section className="mb-20 py-8 border-t border-b border-white/5 bg-[#080c18]/20 rounded-3xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 px-6">
            <div className="text-center lg:text-left space-y-1 shrink-0">
              <span className="text-[10px] text-orange-500 font-black uppercase tracking-widest italic block">Skepticism Deflated</span>
              <p className="text-sm font-black uppercase italic tracking-tight text-white">Trusted by businesses using Squarespace</p>
            </div>

            {/* Horizontal parameters */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl text-center lg:text-left pl-0 lg:pl-8">
              {[
                { metric: "300% Growth", label: "Organic Traffic Increase" },
                { metric: "120+ Audits", label: "Squarespace Audits Carried Out" },
                { metric: "Page #1 Ranks", label: "Highly Competitive Niches" },
                { metric: "Average +42%", label: "Direct Increase in Leads" }
              ].map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <h3 className="text-xl md:text-2xl font-black italic tracking-tight text-orange-500">{item.metric}</h3>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="shrink-0">
              <Link 
                to="/portfolio" 
                className="text-xs font-black uppercase tracking-widest text-orange-400 hover:text-orange-300 transition-colors inline-flex items-center gap-1 cursor-pointer italic"
              >
                See Client Results <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </section>

        {/* --- 3. THE PROBLEM SECTION --- */}
        <section className="mb-20 glass-morphism p-8 md:p-12 rounded-[2.5rem] border border-white/5 bg-[#080c18]/40">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* PROBLEM LEFT COLUMN */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[10px] text-orange-500 font-extrabold uppercase tracking-widest italic block">The Core Barrier</span>
              <h2 className="text-2xl md:text-4xl font-black text-white uppercase italic tracking-tighter leading-tight">
                Why Most Squarespace Websites Struggle to Rank
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed">
                Most businesses install <a href="https://squarespace.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">Squarespace Platform</a> and expect SEO to “just work.” But without a specialized strategy, rankings stall, traffic stays flat, and agile competitors outperform you in standard search engine results.
              </p>

              {/* Include emotional outcomes block */}
              <div className="space-y-3 pt-4 border-t border-white/5">
                <span className="text-[10px] text-orange-500 font-semibold uppercase tracking-widest block">Emotional Business Outcomes:</span>
                <ul className="space-y-2 text-xs text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-0.5 shrink-0">✕</span>
                    <span>Paying premium monthly designer fees for a website that fails to generate organic leads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-0.5 shrink-0">✕</span>
                    <span>Trapped in expensive search ads or relying only on unpredictable word-of-mouth referrals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-0.5 shrink-0">✕</span>
                    <span>Watching less-qualified competitors effortlessly outrank your brand in local search maps</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4">
                <Link 
                  to="/contact" 
                  className="inline-flex py-3.5 px-6 bg-white/5 border border-white/10 hover:border-orange-500/20 hover:bg-orange-500/5 font-black text-xs uppercase tracking-widest text-white rounded-xl transition-all gap-2 items-center italic cursor-pointer"
                >
                  <span>Get a Custom SEO Diagnosis</span>
                  <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
                </Link>
                <span className="block text-[9px] text-gray-500 font-bold uppercase tracking-widest mt-2 pl-1">
                  We’ll identify your biggest ranking opportunities.
                </span>
              </div>
            </div>

            {/* PROBLEM RIGHT COLUMN: COMMON PROBLEMS LIST */}
            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-4">
                {painPoints.map((point, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-[#030712]/60 border border-white/5 hover:border-white/10 transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                      <div className="space-y-1">
                        <h4 className="text-xs sm:text-sm font-black text-white uppercase tracking-tight">{point.p}</h4>
                        <p className="text-[11px] sm:text-xs text-gray-400 leading-relaxed font-semibold">{point.s}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* LIST GAPS */}
              <div className="mt-6 p-5 rounded-2xl bg-white/[0.01] border border-white/5">
                <span className="text-[9px] text-orange-500 font-extrabold uppercase tracking-widest block mb-2">Platform Constraints Handled:</span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px] text-gray-400 font-semibold">
                  <span>• Poor keyword targeting</span>
                  <span>• Weak page structure</span>
                  <span>• Slow-loading pages</span>
                  <span>• Duplicate metadata</span>
                  <span>• Thin service pages</span>
                  <span>• Weak internal linking</span>
                  <span>• Missing schema markup</span>
                  <span>• Blog content with no strategy</span>
                  <span>• Local SEO gaps</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* --- 4. SOLUTION POSITIONING SECTION --- */}
        <section className="mb-20">
          <div className="text-center mb-12 max-w-3xl mx-auto space-y-3">
            <span className="text-[10px] text-orange-500 font-extrabold uppercase tracking-widest italic block">The Strategy Grid</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase italic tracking-tighter">
              Specialized Squarespace SEO Strategies That Actually Move Rankings
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto font-semibold">
              We combine technical SEO, content strategy, user experience optimization, and conversion-focused improvements specifically for Squarespace websites. Aligning with official requirements set forth in the <a href="https://developers.google.com/search" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">Google Search Central Documents</a>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Technical Squarespace SEO",
                desc: "Overcoming standard indexation issues and clean routing. We optimize meta inputs, crawl pathways, sitemap settings, and structural settings.",
                items: ["Metadata optimization", "Crawlability improvements", "Site structure fixes", "Schema implementation", "Core Web Vitals optimization"],
                num: "01"
              },
              {
                title: "Keyword & Competitor Research",
                desc: "Discovering commercial opportunities with low ranking thresholds. Target phrases mapped strictly to your operational goals.",
                items: ["Buyer intent keywords", "Service-page targeting", "Competitor gap analysis", "Local SEO mapping"],
                num: "02"
              },
              {
                title: "Content Strategy",
                desc: "Scaling relevance with clear semantic models. Publish authoritative clusters that represent real expertise in your industry.",
                items: ["Topic clusters", "SEO blog systems", "Landing page optimization", "AI-search-ready content"],
                num: "03"
              },
              {
                title: "Conversion Optimization",
                desc: "Turning cold traffic spikes into active inbound inquiries and purchases. Aligning layout designs to inspire conversions.",
                items: ["Better calls-to-action", "UX improvements", "Lead funnel optimization", "Higher inquiry rates"],
                num: "04"
              },
              {
                title: "Local SEO Specialist",
                desc: "Owning localized queries and dominating Google map placements in your operational regions.",
                items: ["Google Business Profile optimization", "Location pages", "Local keyword targeting", "Citation optimization"],
                num: "05"
              },
              {
                title: "Ecommerce SEO",
                desc: "Configuring shopping structures and transaction-friendly product markup for e-commerce listings.",
                items: ["Product page SEO", "Collection optimization", "Rich snippets", "Category architecture"],
                num: "06"
              }
            ].map((card, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-[2.5rem] bg-[#0c1224]/30 border border-white/5 hover:border-orange-500/10 hover:bg-[#0c1224]/80 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-xs text-orange-400 font-extrabold">
                      {card.num}
                    </span>
                    <span className="text-[10px] text-gray-600 font-black tracking-widest uppercase">Pillar</span>
                  </div>
                  <h3 className="text-lg font-black text-white uppercase italic tracking-tight">{card.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-semibold">{card.desc}</p>

                  <div className="pt-2">
                    <span className="text-[9px] text-gray-500 font-extrabold uppercase tracking-widest block mb-2">Scope Highlights:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {card.items.map((item, idy) => (
                        <span key={idy} className="bg-white/5 text-gray-300 text-[10px] py-1 px-2.5 rounded-md font-semibold border border-white/5">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button 
              onClick={onBook}
              className="inline-flex py-3 px-6 bg-white/5 border border-white/10 hover:border-orange-500/30 hover:bg-orange-500/10 text-xs font-black uppercase tracking-widest text-gray-300 hover:text-white transition-all rounded-xl gap-2 items-center italic cursor-pointer"
            >
              <span>See What’s Included</span>
              <ArrowRight className="w-4.5 h-4.5 text-orange-400" />
            </button>
          </div>
        </section>

        {/* --- 5. FEATURES VS BENEFITS SECTION --- */}
        <section className="mb-20">
          <div className="glass-morphism p-8 md:p-12 rounded-[3rem] border border-white/5 bg-[#080c18]/40 space-y-8">
            <div className="text-center md:text-left space-y-2">
              <span className="text-[10px] text-orange-500 font-black uppercase tracking-widest italic block">The Value Translation</span>
              <h2 className="text-2xl md:text-3xl font-black text-white uppercase italic tracking-tighter">
                What We Do vs What It Means for Your Business
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm max-w-2xl font-semibold">
                We translate technical optimizations and complex organic processes into transparent, metrics-focused bottom line business outcomes.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-[#0c1224]/40">
                    <th className="py-4 px-6 text-orange-500 font-black uppercase tracking-wider text-xs italic">SEO Technical Feature</th>
                    <th className="py-4 px-6 text-orange-500 font-black uppercase tracking-wider text-xs italic">Real Business Benefit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { f: "Technical SEO Optimization", b: "Better Google search visibility & stable organic traffic crawl routes" },
                    { f: "Strategic Keyword Research", b: "More qualified traffic consisting of direct buyers with high purchase intent" },
                    { f: "Semantic Content Strategy", b: "Consistent incremental search footprint growth and industry topical authority" },
                    { f: "Core Web Vitals & Speed Optimization", b: "Lower bounce rates, improved user dynamic experience, and elevated mobile rankings" },
                    { f: "Internal Link Architecture Mapping", b: "Stronger target page search value and programmatic navigation flows" },
                    { f: "Conversion Rate Optimization (CRO)", b: "More phone calls, direct leads, email sign-ups, and actual digital credit-card sales" },
                    { f: "Local SEO Specialist Methods", b: "More nearby localized customers and increased physical map direction clicks" },
                    { f: "Transparent Monthly Reporting", b: "Clear organic campaign ROI visibility and fully documented milestones" }
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.01] transition-transform">
                      <td className="py-4 px-6 text-white font-black uppercase tracking-tight">{row.f}</td>
                      <td className="py-4 px-6 text-gray-300 font-semibold">{row.b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Structured internal links and references insertion */}
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-4">
              <span className="text-[9px] text-orange-500 font-extrabold uppercase tracking-widest block">Workflow Context Links & Resources:</span>
              <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                To maximize your understanding, you can cross-reference our platform-independent <Link to="/resources/seo-audit-checklist" className="text-orange-400 hover:underline">Interactive SEO Audit Checklist</Link> during your Squarespace audit. Additionally, implement high-performing content workflows with duplicate-proof <Link to="/resources/actionable-seo-templates" className="text-orange-400 hover:underline">Actionable SEO Templates</Link>, and create custom structural metadata scripts using our free <Link to="/resources/schema-generator" className="text-orange-400 hover:underline">JSON-LD Schema Markup Generator</Link> to bypass standard template limitations.
              </p>
            </div>

            <div className="text-center pt-4">
              <button 
                onClick={onBook}
                className="px-6 py-4 bg-white text-black hover:bg-orange-600 hover:text-white font-black italic uppercase tracking-widest text-xs rounded-xl transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>Book a Growth Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* --- 6. PROCESS SECTION --- */}
        <section className="mb-20">
          <div className="text-center mb-12 max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] text-orange-500 font-extrabold uppercase tracking-widest italic block">The Execution Timeline</span>
            <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter">Our Squarespace SEO Process</h2>
            <p className="text-gray-400 text-xs sm:text-sm font-semibold max-w-xl mx-auto">
              A highly targeted five-step operational roadmap designed to safely isolate indexing blockers and scale search engine growth.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                step: "Step 1",
                title: "SEO Audit",
                desc: "Full technical + content performance review mapped against official guidelines."
              },
              {
                step: "Step 2",
                title: "Keyword Strategy",
                desc: "Identify highest-converting transactional opportunities in your target space."
              },
              {
                step: "Step 3",
                title: "Optimization",
                desc: "Implement technical fixes, schema metadata, and custom page elements."
              },
              {
                step: "Step 4",
                title: "Content & Growth",
                desc: "Build authority and scale keywords with clear topical hubs and link signals."
              },
              {
                step: "Step 5",
                title: "Reporting & Scaling",
                desc: "Track rankings, traffic, leads, and true organic campaign ROI monthly."
              }
            ].map((proc, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#080c18]/50 border border-white/5 hover:border-white/10 transition-all duration-300 relative flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-[10px] text-orange-500 font-extrabold uppercase tracking-widest italic">{proc.step}</span>
                    <TrendingUp className="w-3.5 h-3.5 text-orange-500/40" />
                  </div>
                  <h4 className="text-sm font-black text-white uppercase tracking-tight">{proc.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed font-semibold">{proc.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link 
              to="/contact" 
              className="inline-flex py-3 px-6 bg-white/5 border border-white/10 hover:border-orange-500/30 hover:bg-orange-500/10 text-xs font-black uppercase tracking-widest text-white rounded-xl gap-2 items-center italic cursor-pointer"
            >
              <span>Start With a Free Audit</span>
              <ArrowRight className="w-4 h-4 text-orange-400" />
            </Link>
          </div>
        </section>

        {/* --- 7. CASE STUDIES / RESULTS SECTION --- */}
        <section className="mb-20">
          <div className="text-center mb-12 max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] text-orange-500 font-extrabold uppercase tracking-widest italic block">The Empirical Proof</span>
            <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter">Real Results From Squarespace SEO Campaigns</h2>
            <p className="text-gray-400 text-xs sm:text-sm font-semibold max-w-xl mx-auto">
              Actual business metrics showcasing the performance shift when moving from defaults to specialized organic structure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                tag: "Local Service Brand",
                problem: "Fragmented map configurations & flat service pages",
                work: "Local custom schema, nested location-intent page creations, clean architecture setups.",
                time: "90 Days",
                metric: "+420% Traffic",
                outcome: "Captured #1 rankings for premium local queries"
              },
              {
                tag: "B2B Professional Agency",
                problem: "Stagnant organic leads & crawl errors",
                work: "Deep keyword matching, structural indexing fixes, target entity internal maps.",
                time: "120 Days",
                metric: "3X Lead Increase",
                outcome: "Generated steady streams of zero-cost phone bookings"
              },
              {
                tag: "Ecommerce Storefront",
                problem: "Faceted category duplicate blocks & poor metadata",
                work: "Product schema corrections, canonical overrides, keyword mapping structures.",
                time: "180 Days",
                metric: "58% Lower Bounce",
                outcome: "Boosted transaction clickthrough rates on search"
              }
            ].map((cs, idx) => (
              <div 
                key={idx} 
                className="p-8 rounded-[2.5rem] bg-[#0c1224]/40 border border-white/5 hover:border-orange-500/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-[10px] text-orange-500 font-extrabold uppercase tracking-widest italic">{cs.tag}</span>
                    <span className="text-[9px] text-gray-500 font-semibold uppercase">{cs.time}</span>
                  </div>

                  <div className="space-y-2">
                    <div className="text-3xl font-black italic tracking-tighter text-orange-500">{cs.metric}</div>
                    <span className="text-[9px] text-white font-extrabold uppercase tracking-widest block">{cs.outcome}</span>
                  </div>

                  <div className="space-y-2 text-xs text-gray-400 border-t border-white/5 pt-3">
                    <p className="font-semibold"><strong className="text-white text-[10px] font-extrabold uppercase">Problem:</strong> {cs.problem}</p>
                    <p className="font-semibold"><strong className="text-white text-[10px] font-extrabold uppercase">SEO Completed:</strong> {cs.work}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link 
              to="/portfolio" 
              className="inline-flex py-3 px-6 bg-white/5 border border-white/10 hover:border-orange-500/30 hover:bg-orange-500/10 text-xs font-black uppercase tracking-widest text-white rounded-xl gap-2 items-center italic cursor-pointer"
            >
              <span>View More SEO Results</span>
              <ArrowRight className="w-4 h-4 text-orange-400" />
            </Link>
          </div>
        </section>

        {/* --- 8. WHO THIS IS FOR SECTION --- */}
        <section className="mb-20 glass-morphism p-8 md:p-12 rounded-[3.5rem] border border-white/5 bg-[#080c18]/40">
          <div className="text-center mb-10 max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] text-orange-500 font-extrabold uppercase tracking-widest italic block">Target Alignments</span>
            <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter">Squarespace SEO Services for Growth-Focused Businesses</h2>
            <p className="text-gray-400 text-xs sm:text-sm font-semibold max-w-xl mx-auto">
              Our structures are customizable for any modern company that operates its customer pathways natively on the platform.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { t: "Local Businesses", d: "Dominate geographical proximity maps and generate direct local calls." },
              { t: "Coaches & Consultants", d: "Capture organic authority trust and book inbound clients on autopilot." },
              { t: "Ecommerce Brands", d: "Streamline transactional products and rich results schemas directly on SERPs." },
              { t: "SaaS Startups", d: "Scale informative authority clusters to explain services fast and build sign-ups." },
              { t: "Bloggers & Publishers", d: "Speed up loading and indexing configurations for automated search coverage." },
              { t: "Agencies & Partners", d: "Ensure clean campaign scaling and complete client performance goals." },
              { t: "Service Providers", d: "Drive dynamic qualified inquiries with localized landing structures." },
              { t: "Personal Brands", d: "Highlight speaker profiles, entity models, and author profiles correctly on search." }
            ].map((audience, idx) => (
              <div 
                key={idx} 
                className="p-5 rounded-2xl bg-white/[0.01] border border-white/5 hover:bg-[#0c1224]/40 hover:border-white/10 transition-all duration-300 text-center space-y-2"
              >
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-xs text-orange-400 font-extrabold mx-auto">
                  ✓
                </div>
                <h4 className="text-xs sm:text-sm font-black text-white uppercase tracking-tight">{audience.t}</h4>
                <p className="text-[10px] text-gray-500 font-semibold leading-relaxed">{audience.d}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button 
              onClick={onBook}
              className="inline-flex py-3.5 px-6 bg-white text-black hover:bg-orange-600 hover:text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all gap-2 items-center italic cursor-pointer"
            >
              <span>See How We Can Help Your Business</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* --- 9. WHY CHOOSE US SECTION --- */}
        <section className="mb-20">
          <div className="glass-morphism p-8 md:p-12 rounded-[3rem] border border-white/5 bg-[#080c18]/40 space-y-8">
            <div className="text-center md:text-left space-y-2">
              <span className="text-[10px] text-orange-500 font-black uppercase tracking-widest italic block">The Contrast Checklist</span>
              <h2 className="text-2xl md:text-3xl font-black text-white uppercase italic tracking-tighter">
                Why Businesses Choose Our Squarespace SEO Expertise
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm max-w-2xl font-semibold">
                Understand the direct contrast between basic templates and certified specialist systems configured specifically for commercial impact.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-[#0c1224]/40">
                    <th className="py-4 px-6 text-gray-500 font-extrabold uppercase tracking-wider text-xs">Standard Performance Factor</th>
                    <th className="py-4 px-6 text-orange-500 font-black uppercase tracking-wider text-xs italic">Generic SEO Agency</th>
                    <th className="py-4 px-6 text-green-400 font-black uppercase tracking-wider text-xs italic">Our Squarespace SEO Expertise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {comparisonTable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.01] transition-transform">
                      <td className="py-4 px-6 text-gray-400 font-bold uppercase tracking-widest">{row.feature}</td>
                      <td className="py-4 px-6 text-gray-300 font-semibold">{row.generic}</td>
                      <td className="py-4 px-6 text-white font-black uppercase tracking-tight italic">{row.ours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Strategic Internal and External Links integration for rankings value */}
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-3">
              <span className="text-[9px] text-orange-500 font-extrabold uppercase tracking-widest block">Core Technical Benchmarks:</span>
              <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                Understanding platform differences is vital. If you run campaigns across other CMS targets, review our dedicated tutorials on our <Link to="/services/cms-seo/shopify-seo-expert" className="text-orange-400 hover:underline">Shopify SEO Expert Services</Link>, <Link to="/services/cms-seo/wordpress-seo-expert" className="text-orange-400 hover:underline">WordPress SEO Specialist Campaigns</Link>, or explore our master <Link to="/services/cms-seo" className="text-orange-400 hover:underline text-xs">CMS SEO Expert Hub</Link>. Always double check and run speed and server tests directly on Google's <a href="https://pagespeed.web.dev" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline font-bold">PageSpeed Insights</a> before and after deployment for absolute accuracy.
              </p>
            </div>

            <div className="text-center pt-4">
              <button 
                onClick={onBook}
                className="px-6 py-4 bg-orange-600 hover:bg-orange-500 text-white font-black italic uppercase tracking-widest text-xs rounded-xl transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>Talk to a Squarespace SEO Specialist</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* --- 10. PRICING / PACKAGES SECTION --- */}
        <section className="mb-20">
          <div className="text-center mb-12 max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] text-orange-500 font-extrabold uppercase tracking-widest italic block">Budget Options</span>
            <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter">Transparent Squarespace SEO Packages</h2>
            <p className="text-gray-400 text-xs sm:text-sm font-semibold max-w-xl mx-auto">
              Select an execution tier built specifically to scale search impact without hidden monthly operational retainers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            
            {/* PACK 1: STARTER */}
            <div className="p-8 rounded-[2.5rem] bg-[#0c1224]/30 border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] text-gray-500 font-extrabold uppercase tracking-widest block mb-1">Package Tier 01</span>
                  <h3 className="text-xl font-black text-white uppercase italic tracking-tight mb-2">Starter SEO</h3>
                  <p className="text-xs text-gray-400 font-semibold">Best for small localized websites that want clear SEO foundations.</p>
                </div>

                <div className="py-4 border-t border-b border-white/5 space-y-1">
                  <span className="text-[10px] text-orange-500 font-bold uppercase tracking-widest">Pricing Structure</span>
                  <div className="text-2xl font-black italic text-white">Starting From Competitive Rates</div>
                </div>

                <div className="space-y-3">
                  <span className="text-[10px] text-gray-400 font-extrabold uppercase tracking-widest block">Scope Includes:</span>
                  <ul className="space-y-2.5 text-xs text-gray-300 font-semibold">
                    <li className="flex items-center gap-2">✔ SEO audit</li>
                    <li className="flex items-center gap-2">✔ On-page optimization</li>
                    <li className="flex items-center gap-2">✔ Metadata fixes</li>
                    <li className="flex items-center gap-2">✔ Keyword targeting</li>
                    <li className="flex items-center gap-2">✔ Native site configuration</li>
                  </ul>
                </div>
              </div>

              <div className="pt-8 border-t border-white/5 mt-6">
                <Link 
                  to="/contact" 
                  className="w-full py-4 bg-white/5 hover:bg-orange-500/10 border border-white/10 hover:border-orange-500/30 text-gray-300 hover:text-white text-xs font-black uppercase tracking-widest transition-all rounded-xl text-center block italic cursor-pointer"
                >
                  Request Custom Pricing
                </Link>
              </div>
            </div>

            {/* PACK 2: GROWTH (POPULAR) */}
            <div className="p-8 rounded-[2.5rem] bg-[#0c1224]/80 border-2 border-orange-500/30 hover:border-orange-500/50 transition-all duration-300 flex flex-col justify-between relative shadow-2xl">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-orange-600 text-white text-[9px] font-black uppercase tracking-widest py-1 px-3 rounded-full italic">
                Most Popular
              </div>

              <div className="space-y-6">
                <div>
                  <span className="text-[10px] text-orange-400 font-extrabold uppercase tracking-widest block mb-1">Package Tier 02</span>
                  <h3 className="text-2xl font-black text-white uppercase italic tracking-tight mb-2">Growth SEO</h3>
                  <p className="text-xs text-gray-400 font-semibold">Best for scaling service businesses seeking consistent, measurable customer growth.</p>
                </div>

                <div className="py-4 border-t border-b border-orange-500/10 space-y-1">
                  <span className="text-[10px] text-orange-500 font-bold uppercase tracking-widest">Pricing Structure</span>
                  <div className="text-3xl font-black italic text-white">Starting From Competitive Rates</div>
                </div>

                <div className="space-y-3">
                  <span className="text-[10px] text-orange-400 font-extrabold uppercase tracking-widest block">Scope Includes:</span>
                  <ul className="space-y-2.5 text-xs text-gray-300 font-semibold text-left">
                    <li className="flex items-center gap-2">✔ Complete Technical SEO</li>
                    <li className="flex items-center gap-2">✔ Semantic content strategy</li>
                    <li className="flex items-center gap-2">✔ Internal linking setup</li>
                    <li className="flex items-center gap-2">✔ Monthly on-page optimization</li>
                    <li className="flex items-center gap-2">✔ Performance ROI reporting</li>
                    <li className="flex items-center gap-2">✔ Core Web Vitals optimizations</li>
                  </ul>
                </div>
              </div>

              <div className="pt-8 border-t border-white/5 mt-6">
                <button 
                  onClick={onBook}
                  className="w-full py-4 bg-orange-600 hover:bg-orange-500 text-white text-xs font-black uppercase tracking-widest transition-all rounded-xl text-center block italic cursor-pointer shadow-lg shadow-orange-600/10"
                >
                  Book Your Free Call
                </button>
              </div>
            </div>

            {/* PACK 3: AUTHORITY */}
            <div className="p-8 rounded-[2.5rem] bg-[#0c1224]/30 border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] text-gray-500 font-extrabold uppercase tracking-widest block mb-1">Package Tier 03</span>
                  <h3 className="text-xl font-black text-white uppercase italic tracking-tight mb-2">Authority SEO</h3>
                  <p className="text-xs text-gray-400 font-semibold">Best for aggressive corporate brands aiming to dominate search map packs and secure niche rankings.</p>
                </div>

                <div className="py-4 border-t border-b border-white/5 space-y-1">
                  <span className="text-[10px] text-orange-500 font-bold uppercase tracking-widest">Pricing Structure</span>
                  <div className="text-2xl font-black italic text-white">Starting From Competitive Rates</div>
                </div>

                <div className="space-y-3">
                  <span className="text-[10px] text-gray-400 font-extrabold uppercase tracking-widest block">Scope Includes:</span>
                  <ul className="space-y-2.5 text-xs text-gray-300 font-semibold">
                    <li className="flex items-center gap-2">✔ Full-service platform SEO management</li>
                    <li className="flex items-center gap-2">✔ Advanced content systems & workflows</li>
                    <li className="flex items-center gap-2">✔ Landing page conversion optimization (CRO)</li>
                    <li className="flex items-center gap-2">✔ Organic digital PR & link relationships</li>
                    <li className="flex items-center gap-2">✔ Real-time competitor tracking</li>
                  </ul>
                </div>
              </div>

              <div className="pt-8 border-t border-white/5 mt-6">
                <Link 
                  to="/contact" 
                  className="w-full py-4 bg-white/5 hover:bg-orange-500/10 border border-white/10 hover:border-orange-500/30 text-gray-300 hover:text-white text-xs font-black uppercase tracking-widest transition-all rounded-xl text-center block italic cursor-pointer"
                >
                  Request Custom Pricing
                </Link>
              </div>
            </div>

          </div>

          {/* Pricing UX Tips footnotes */}
          <div className="mt-8 text-center space-y-1 max-w-lg mx-auto">
            <span className="text-[9px] text-orange-500 font-black uppercase tracking-widest italic block">Notes & Customization</span>
            <p className="text-[11px] text-gray-500 font-semibold leading-relaxed">
              Every Squarespace website has different SEO needs. Contact us through our comprehensive <Link to="/pricing" className="text-orange-400 hover:underline">Organic SEO Pricing Plans Portal</Link> to map custom milestones.
            </p>
          </div>
        </section>

        {/* --- 11. FAQ SECTION --- */}
        <section className="mb-20">
          <div className="glass-morphism p-8 md:p-12 rounded-[3rem] border border-white/5 bg-[#080c18]/40 space-y-8">
            <div className="text-center md:text-left space-y-2">
              <span className="text-[10px] text-orange-500 font-black uppercase tracking-widest italic block">Knowledge Base</span>
              <h2 className="text-2xl md:text-3xl font-black text-white uppercase italic tracking-tighter">Frequently Asked Questions</h2>
              <p className="text-gray-400 text-xs sm:text-sm max-w-2xl font-semibold">
                Clear answers regarding what to expect when optimizing websites within Squarespace’s parameters.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className="rounded-2xl border border-white/5 bg-[#030712]/60 hover:border-white/15 overflow-hidden transition-all duration-300"
                >
                  <button 
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-5 px-6 flex justify-between items-center text-left text-xs sm:text-sm font-black uppercase tracking-tight text-white focus:outline-none cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <span className="p-1 rounded-md bg-white/5 border border-white/10 text-gray-400 shrink-0">
                      {openFaq === idx ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </span>
                  </button>
                  
                  {openFaq === idx && (
                    <div className="py-5 px-6 border-t border-white/5 bg-white/[0.01] text-xs sm:text-sm text-gray-300 leading-relaxed font-semibold">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Embedded internal and external links for rankings authority */}
            <div className="p-5 bg-white/[0.01] border border-white/5 rounded-2xl text-[11px] text-gray-500 leading-relaxed font-semibold">
              To learn more about core search algorithm metrics, follow along with official listings inside our <Link to="/resources/google-core-updates" className="text-orange-400 hover:underline">Google Core Updates Timeline</Link>, and register metadata properties correctly using standards on <a href="https://schema.org" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">Schema.org</a>.
            </div>

            <div className="text-center pt-4">
              <button 
                onClick={onBook}
                className="inline-flex py-3 px-6 bg-white/5 border border-white/10 hover:border-orange-500/30 hover:bg-orange-500/10 text-xs font-black uppercase tracking-widest text-orange-400 hover:text-orange-300 transition-all rounded-xl gap-2 items-center italic cursor-pointer"
              >
                <span>Still Have Questions? Book a Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* --- 12. RISK REVERSAL SECTION --- */}
        <section className="mb-20 glass-morphism p-8 md:p-12 rounded-[2.5rem] border border-white/5 bg-[#080c18]/40">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-[10px] text-orange-500 font-black uppercase tracking-widest italic block">Commitments Preserved</span>
            <h2 className="text-2xl md:text-3xl font-black text-white uppercase italic tracking-tighter">
              Transparent SEO. No Confusing Contracts. No Empty Promises.
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-semibold">
              We focus entirely on strategy-first actions and clear monthly milestones to maximize ROI without locked operational retainers or black-hat tactics.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 text-xs font-bold uppercase tracking-wider text-gray-300">
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">✓ Clear deliverables</div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">✓ Transparent reporting</div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">✓ Ethical SEO only</div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">✓ No black-hat tactics</div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">✓ Strategy-first approach</div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">✓ Direct communication</div>
            </div>

            {/* Optional Guarantee Angle */}
            <div className="pt-6 border-t border-white/5">
              <p className="text-sm font-black italic uppercase text-orange-400">
                “Actionable recommendations delivered within 7 days.”
              </p>
            </div>

            <div className="pt-2">
              <button 
                onClick={onBook}
                className="px-6 py-4 bg-white hover:bg-orange-600 text-black hover:text-white font-black italic uppercase tracking-widest text-xs rounded-xl transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>Get Started Risk-Free</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* --- 13. FINAL CTA SECTION --- */}
        <section className="glass-morphism p-8 md:p-16 rounded-[3.5rem] border-2 border-orange-500/10 bg-[#080c18]/80 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.03] to-transparent pointer-events-none"></div>

          <div className="max-w-3xl mx-auto space-y-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none">
              Ready to Grow Your Squarespace Website With SEO That Actually Works?
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mx-auto font-semibold">
              Book a free consultation and discover exactly what’s holding your rankings back — and how to fix it with proven platform experts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={onBook}
                className="px-8 py-5 bg-orange-600 hover:bg-orange-500 text-white font-black italic uppercase tracking-wider text-xs sm:text-sm rounded-xl transition-all shadow-lg shadow-orange-600/15 cursor-pointer flex items-center justify-center gap-2 mx-auto sm:mx-0"
              >
                Book Your Free SEO Call <ArrowRight className="w-4 h-4" />
              </button>
              <Link 
                to="/contact" 
                className="px-8 py-5 border border-white/10 hover:border-orange-500/30 hover:bg-[#0c1224]/50 text-gray-300 hover:text-white font-black italic uppercase tracking-wider text-xs sm:text-sm rounded-xl transition-all text-center flex items-center justify-center cursor-pointer mx-auto sm:mx-0"
              >
                Request a Free SEO Audit
              </Link>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/5">
              <span className="text-[10px] text-orange-500 font-extrabold uppercase tracking-widest italic block">Additional Site Resources</span>
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-gray-400">
                <Link to="/resources" className="hover:text-orange-400 transition-colors">SEO Resources Hub</Link>
                <span>•</span>
                <Link to="/about" className="hover:text-orange-400 transition-colors">About Ritehly Quimbo</Link>
                <span>•</span>
                <Link to="/portfolio" className="hover:text-orange-400 transition-colors">Client Case Studies</Link>
                <span>•</span>
                <Link to="/contact" className="hover:text-orange-400 transition-colors">Booking Consultation Portal</Link>
              </div>
              <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">
                No obligation. Personalized recommendations included.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default SquarespaceSEOExpert;
