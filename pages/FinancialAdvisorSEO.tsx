import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  ShieldCheck, 
  Award, 
  HelpCircle, 
  ArrowRight, 
  Star, 
  Search, 
  ChevronDown, 
  MapPin, 
  Globe, 
  Lock, 
  BarChart3, 
  CheckCircle2, 
  Users, 
  FileText,
  BadgeAlert
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
        title="SEO Services for Financial Advisors | Growth Assets"
        description="Bespoke financial advisory SEO to drive high-net-worth client acquisition and rank on top of local searches. Fully compliant YoMyL strategies."
        keywords="financial advisor seo, wealth manager ranking, ria search marketing, fiduciary seo consulting, local map pack advisors"
      />

      {/* Hero Section */}
      <section className="relative pt-12 md:pt-16 lg:pt-20 pb-24 px-4 md:px-6 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none"></div>
        <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-2">
              <ShieldCheck className="w-4 h-4 text-blue-400" /> Wealth & Advisory Growth SEO
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              SEO Services for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-amber-300">Financial Advisors</span> That Generate Qualified Leads and Grow Assets Under Management
            </h1>
            
            <p className="text-lg sm:text-xl font-bold text-gray-200">
              Get Found by High-Net-Worth Prospects Searching for Financial Advice
            </p>
            
            <p className="text-base text-amber-400 font-semibold tracking-wide">
              SEO Services for Financial Advisors Built to Increase Visibility, Trust, and Client Acquisition
            </p>

            <div className="space-y-4 text-gray-400 text-sm md:text-base leading-relaxed">
              <p>
                Your ideal clients are searching online for retirement planning, wealth management, investment advice, tax strategies, and financial planning services every day. If your firm isn't appearing prominently in search results, those prospects are finding your competitors instead.
              </p>
              <p>
                Our specialized SEO services for financial advisors help RIAs, wealth managers, financial planners, and advisory firms rank higher on Google, attract qualified leads, and build long-term authority in their markets.
              </p>
            </div>

            <p className="font-bold text-white text-sm">
              Ready to attract more qualified investors and financial planning clients?
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onBook}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-black bg-gradient-to-r from-blue-400 to-sky-300 hover:from-blue-500 hover:to-sky-400 font-black tracking-wide shadow-lg shadow-blue-500/20 transition-all duration-300 group hover:scale-[1.02]"
              >
                Schedule Your Free SEO Strategy Consultation
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
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-3xl blur-2xl"></div>
            <div className="relative glass-morphism border border-white/5 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl">
              <div className="h-2 w-20 bg-amber-400 rounded-full"></div>
              <h3 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                <BarChart3 className="text-amber-400 w-5 h-5" /> Fiduciary Organic Dominance
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Discover organic deficiencies before regulatory shifts affect customer traffic profiles. Access our directory arrays.
              </p>
              
              <div className="pt-4 space-y-3">
                <button 
                  onClick={onBook}
                  className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-black font-black transition-all text-xs uppercase tracking-wider"
                >
                  Book Your Free Consultation
                </button>
                <div className="text-center text-[10px] text-gray-500">
                  Are you checking other local solutions? Review our{' '}
                  <Link to="/industry" className="text-blue-400 underline font-bold hover:text-blue-300">
                    Industry Hub
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Most Advisors Struggle */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              Why Most Financial Advisors Struggle to Generate Consistent Leads Online
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              The financial services industry is one of the most competitive online markets. Standard commercial approaches usually fail due to search engines’ high standards for medical and monetary queries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="glass-morphism border border-white/5 p-8 rounded-[2rem] space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <BadgeAlert className="w-5 h-5 text-red-400 animate-pulse" /> Many financial advisors face challenges such as:
              </h3>
              
              <div className="space-y-4">
                {[
                  "Low visibility in Google search results",
                  "Dependence on referrals alone",
                  "Rising costs from paid advertising",
                  "Difficulty building trust with online prospects",
                  "Limited website traffic from qualified investors",
                  "Competition from national firms and large financial institutions",
                  "Regulatory concerns around marketing and content"
                ].map((challenge, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                    <p className="text-xs text-gray-300 font-medium">{challenge}</p>
                  </div>
                ))}
              </div>

              <p className="text-xs text-gray-500 leading-relaxed pt-2">
                Even highly experienced advisors often have websites that fail to generate meaningful organic traffic because they lack a strategic SEO foundation.
              </p>
            </div>

            <div className="space-y-6 lg:pl-6">
              <h3 className="text-xl font-bold text-white uppercase tracking-wider text-amber-400">The Ultimate Result</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Potential clients searching for high-intent services like:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Financial advisor near me",
                  "Retirement planning advisor",
                  "Wealth management services",
                  "Fiduciary financial planner",
                  "Investment advisor for retirees",
                  "Tax-efficient retirement strategies"
                ].map((term, i) => (
                  <div key={i} className="text-xs text-gray-200 bg-white/[0.02] border border-white/5 p-3 rounded-xl italic font-mono">
                    "{term}"
                  </div>
                ))}
              </div>

              <p className="text-xs text-gray-400 leading-relaxed">
                never discover your business. Without strong search visibility, growth becomes heavily dependent on referrals and networking, limiting your firm's scalability.
              </p>

              <div className="pt-2">
                <Link 
                  to="/resources/seo-audit-checklist" 
                  className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 font-bold underline"
                >
                  Retrieve our interactive audit checklists <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Growth / Our Strategy */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
              SEO Services for Financial Advisors Designed to Drive Sustainable Growth
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Our approach focuses on attracting prospective clients actively searching for financial advice and planning services. Instead of interrupting people with ads, SEO positions your firm directly in front of individuals already looking for solutions.
            </p>
          </div>

          <h3 className="text-xl font-black uppercase text-center text-white mb-10 tracking-widest text-blue-400">
            Our Financial Advisor SEO Strategy Includes:
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Strategy 1 */}
            <div className="glass-morphism border border-white/5 p-6 rounded-2xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 font-extrabold text-sm">
                01
              </div>
              <h4 className="text-lg font-bold text-white">Comprehensive SEO Audit</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                We analyze your website's technical performance, search visibility, user experience, content quality, competitor positioning, and conversion opportunities. Learn how we structure pages in our general{' '}
                <Link to="/services" className="text-blue-400 hover:text-blue-300 underline font-semibold">
                  SEO services overview
                </Link>.
              </p>
            </div>

            {/* Strategy 2 */}
            <div className="glass-morphism border border-white/5 p-6 rounded-2xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 font-extrabold text-sm">
                02
              </div>
              <h4 className="text-lg font-bold text-white">Financial Industry Keyword Research</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                We identify high-intent search terms including: retirement planning, wealth management, estate planning, investment management, tax planning, location keywords, and long-tail client acquisition phrases.
              </p>
            </div>

            {/* Strategy 3 */}
            <div className="glass-morphism border border-white/5 p-6 rounded-2xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 font-extrabold text-sm">
                03
              </div>
              <h4 className="text-lg font-bold text-white">Content Marketing & Authority</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                We create content that demonstrates expertise and answers the questions your ideal clients are asking. (Examples: Retirement income strategies, Roth conversion guides, tax-saving investment approaches, wealth transfer planning, volatility insights, financial planning checklists).
              </p>
              <div className="pt-2">
                <a href="https://developers.google.com/search/docs/appearance/experience-expertise-authoritativeness-trustworthiness" target="_blank" rel="noreferrer" className="text-[10px] text-amber-300 uppercase tracking-wider font-bold inline-flex items-center gap-1 hover:underline">
                  Google E-E-A-T Quality Guidelines <Globe className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Strategy 4 */}
            <div className="glass-morphism border border-white/5 p-6 rounded-2xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 font-extrabold text-sm">
                04
              </div>
              <h4 className="text-lg font-bold text-white">Local SEO Optimization</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                For advisors serving specific geographic markets, we optimize Google Business Profiles, citations, geographic keyword targeting, review generation, and local authority signals. Check out our dedicated{' '}
                <Link to="/pricing/local-seo-strategy" className="text-blue-400 hover:text-blue-300 underline font-semibold">
                  Local SEO Strategy Packages
                </Link>.
              </p>
            </div>

            {/* Strategy 5 */}
            <div className="glass-morphism border border-white/5 p-6 rounded-2xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 font-extrabold text-sm">
                05
              </div>
              <h4 className="text-lg font-bold text-white">Technical SEO Improvements</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                We improve site speed, mobile usability, site architecture, crawlability, structured data, and security implementation. Compare options inside our{' '}
                <Link to="/pricing" className="text-blue-400 hover:text-blue-300 underline font-semibold">
                  agency pricing models
                </Link>.
              </p>
            </div>

            {/* Strategy 6 */}
            <div className="glass-morphism border border-white/5 p-6 rounded-2xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 font-extrabold text-sm">
                06
              </div>
              <h4 className="text-lg font-bold text-white">Conversion Rate Optimization</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Traffic alone doesn't generate clients. We optimize your website to convert visitors into consultations through strategic calls-to-action, trust-building indicators, landing page structures, and booking portals.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-[#020617] border border-blue-500/20 p-6 rounded-[2rem] text-center max-w-3xl mx-auto block">
            <h4 className="font-extrabold text-white text-base mb-2">The Outcome</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              A stronger online presence that consistently generates qualified leads and supports long-term business growth.
            </p>
          </div>
        </div>
      </section>

      {/* YMYL Experience & Compliance Section */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 bg-amber-500 text-black text-[10px] font-black uppercase rounded-full tracking-wide">
                Fiduciary Compliance First
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Real-World Experience Helping Professional Service Firms Grow Online
              </h2>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Financial advisory SEO differs significantly from other industries. Google applies particularly high standards to financial content because inaccurate financial information can directly impact people's lives and financial well-being.
              </p>
              
              <div className="border border-white/10 p-6 rounded-2xl bg-slate-900/40 space-y-2">
                <span className="text-red-400 font-bold block text-xs uppercase tracking-wider">Your Money or Your Life (YMYL) content category:</span>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Google expects maximum E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness). Miscalculating trust triggers can flag your advisory domain immediately. Review our insights in search guidelines.
                </p>
                <div className="pt-2 border-t border-white/5">
                  <a href="https://searchengineland.com/ymyl-seo-your-money-or-your-life-explained" target="_blank" rel="noreferrer" className="text-[10px] text-orange-400 font-bold inline-flex items-center gap-1 hover:underline">
                    YMYL Guidelines Explored on Search Engine Land <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  "Demonstrated expertise",
                  "Accurate content & advisory depth",
                  "Strong E-E-A-T trust signals",
                  "Authoritative website structure",
                  "Compliance-conscious marketing"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-gray-300 font-bold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-450 text-emerald-450 text-emerald-400 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Examples */}
            <div className="space-y-8">
              <div className="glass-morphism border border-white/5 p-8 rounded-3xl space-y-4">
                <span className="text-amber-400 font-black uppercase text-xs tracking-wider block">Practical Example</span>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Consider a retirement-focused advisory firm serving pre-retirees aged 55–70. Rather than targeting broad terms like "financial advisor," we may focus on highly relevant searches such as:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-mono italic text-gray-300">
                  <div>• Retirement income planning</div>
                  <div>• Retirement tax strategies</div>
                  <div>• Social Security optimization</div>
                  <div>• Wealth preservation planning</div>
                  <div className="sm:col-span-2">• Retirement advisor in specific locations</div>
                </div>
                <p className="text-[11px] text-gray-500 font-medium">
                  These targeted searches often attract prospects much closer to scheduling a consultation. To compare geographic optimization, check our custom city strategies on our{' '}
                  <Link to="/locations" className="text-blue-400 font-bold underline hover:text-blue-300">
                    Locations Page
                  </Link>.
                </p>
              </div>

              <div className="glass-morphism border border-white/5 p-8 rounded-3xl space-y-4">
                <span className="text-amber-400 font-black uppercase text-xs tracking-wider block">Another Example</span>
                <p className="text-xs text-gray-400 leading-relaxed">
                  A fiduciary wealth management firm may benefit from educational content comparing fee-only vs commission advisors, active vs passive investing, estate planning strategies, and tax-efficient portfolio management.
                </p>
                <p className="text-[11px] text-gray-500 font-medium">
                  These comparisons build trust while attracting prospects earlier in the decision-making process. Similar structural patterns can be observed in our custom{' '}
                  <Link to="/industry/seo-services-for-therapists" className="text-blue-400 font-bold underline hover:text-blue-300">
                    SEO services for Therapists
                  </Link>, which also navigate high-level E-E-A-T categories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits Table */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Features and Benefits of Our SEO Services for Financial Advisors
            </h2>
            <p className="text-xs text-gray-500 mt-2">Maximum clarity in metrics and delivery.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                f: "Financial Industry SEO Strategy",
                b: "Attracts prospects actively searching for financial advice rather than unqualified traffic."
              },
              {
                f: "Advanced Keyword Research",
                b: "Targets search terms with genuine client acquisition potential."
              },
              {
                f: "High-Quality Content Creation",
                b: "Builds authority and trust while improving search rankings."
              },
              {
                f: "Local SEO Optimization",
                b: "Helps advisors dominate local search results and map listings."
              },
              {
                f: "Technical SEO Improvements",
                b: "Creates a faster, more user-friendly website that Google prefers."
              },
              {
                f: "Competitor Analysis",
                b: "Identifies opportunities to outperform competing advisors and firms."
              },
              {
                f: "Monthly Reporting",
                b: "Provides full transparency into rankings, traffic, leads, and campaign performance."
              },
              {
                f: "Conversion Optimization",
                b: "Turns more website visitors into consultations and clients."
              }
            ].map((item, id) => (
              <div key={id} className="bg-slate-900/30 border border-white/5 p-6 rounded-2xl space-y-4 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[10px] font-black uppercase text-amber-400 tracking-wider">Feature:</span>
                  <h4 className="text-xs font-bold text-white uppercase">{item.f}</h4>
                </div>
                <div className="space-y-1 border-t border-white/5 pt-3">
                  <span className="text-[10px] font-black uppercase text-blue-400 tracking-wider">Benefit:</span>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Expertise Matters */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/40">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Why Expertise Matters in Financial Advisor SEO
            </h2>
            <p className="text-gray-400 text-sm">
              Not all SEO providers understand financial services marketing. The financial sector requires a target-centric process because search engines scrutinize financial content, trust signals are critical, compliance must be respected, and high-value clients perform extensive research before deciding.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider text-amber-400">What We Focus On:</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Demonstrating Expertise",
                    desc: "We help position advisors as credible authorities through expert content development, thought leadership resources, educational articles, and topic clusters."
                  },
                  {
                    title: "Building Authority",
                    desc: "We strengthen your online authority through strategic content architecture, relevant backlink acquisition, and industry-specific SEO benchmarks."
                  },
                  {
                    title: "Enhancing Trust",
                    desc: "We emphasize trust-building elements such as advisor credentials, team profiles, client testimonials, professional affiliations, and compliance transparency."
                  },
                  {
                    title: "Creating Sustainable Growth",
                    desc: "Unlike short-term advertising, SEO continues generating valuable visibility long after content is published."
                  }
                ].map((focus, i) => (
                  <div key={i} className="border-l-2 border-amber-400/40 pl-4 space-y-1">
                    <h4 className="text-xs font-black uppercase text-white tracking-widest">{focus.title}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">{focus.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-morphism border border-white/5 p-8 rounded-[2rem] flex flex-col justify-between">
              <div className="space-y-4">
                <h4 className="text-base font-bold text-white flex items-center gap-1.5">
                  <Lock className="w-5 h-5 text-blue-400" /> Regulatory Regulatory Safeguards
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  We guarantee absolute compliance coordination with your compliance officer or legal firm. We respect rules from the SEC, FINRA, and local financial advisory regulatory authorities.
                </p>
                <div className="pt-2 border-t border-white/5">
                  <a href="https://www.sec.gov" target="_blank" rel="noreferrer" className="text-[10px] text-blue-400 font-bold inline-flex items-center gap-1 hover:underline">
                    SEC Advisory Standards <Globe className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
              <div className="pt-6">
                <p className="text-[10px] text-gray-500">
                  Ready to optimize creative portfolios in other fields too? Review our dedicated{' '}
                  <Link to="/industry/seo-company-for-photographers" className="text-amber-400 font-bold underline hover:text-amber-300">
                    SEO Company for Photographers
                  </Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison: Generic vs Special */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-2 leading-tight">
              What Makes Our SEO Services Different?
            </h2>
            <p className="text-gray-400 text-xs text-gray-400 font-medium">
              Many SEO agencies apply the same generic strategy to every industry. Financial advisors need a more specialized approach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-500/5 border border-red-500/10 p-8 rounded-[2rem] space-y-4">
              <h4 className="text-base font-black text-red-400 uppercase tracking-wider">Generic SEO Agencies</h4>
              <ul className="space-y-2 text-xs text-gray-400 leading-relaxed">
                <li>• Focus primarily on raw, unrefined traffic</li>
                <li>• Limited understanding of complex financial search intent</li>
                <li>• Generic content strategies without advisory depth</li>
                <li>• Weak trust-building frameworks lacking compliance alignment</li>
              </ul>
            </div>

            <div className="bg-emerald-500/5 border border-emerald-500/10 p-8 rounded-[2rem] space-y-4">
              <h4 className="text-base font-black text-emerald-400 uppercase tracking-wider">Our Financial Advisor SEO Approach</h4>
              <ul className="space-y-2 text-xs text-gray-300 leading-relaxed">
                <li className="font-semibold text-white">• Focus on qualified, high-net-worth lead generation</li>
                <li>• Financial-services-specific keyword mapping</li>
                <li>• Absolute trust and E-E-A-T credentials optimization</li>
                <li>• Conversion-focused advisor-centric content creation</li>
                <li>• Long-term sustainable growth strategy with safe techniques</li>
                <li>• Transparent reporting and full advisor accountability</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-slate-900/40 p-6 rounded-xl border border-white/5 text-center max-w-2xl mx-auto">
            <p className="text-xs text-gray-400 text-gray-400">
              We prioritize measurable business outcomes—not vanity metrics. The goal is simple: more qualified consultations, stronger visibility, and increased assets under management opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/40">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Client Testimonials</h2>
            <p className="text-xs text-gray-500">Don't take our word for it. Hear from leading wealth professionals.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                word: "The quality of leads improved dramatically.",
                desc: "Within months of implementing the SEO strategy, we began receiving inquiries from prospects actively seeking retirement planning assistance.",
                author: "RIA Practice Leader"
              },
              {
                word: "Our website became a true lead-generation asset.",
                desc: "Instead of relying solely on referrals, we now receive a consistent flow of qualified consultations from organic search results.",
                author: "Fiduciary Wealth Partner"
              },
              {
                word: "Clear reporting and excellent communication.",
                desc: "We always know what's being done, why it's being done, and how it's impacting our growth. Highly recommended SEO team.",
                author: "Retirement Advisory Group"
              }
            ].map((t, i) => (
              <div key={i} className="bg-slate-900/40 border border-white/5 p-6 rounded-2xl flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <h4 className="text-xs font-bold text-white italic">"{t.word}"</h4>
                  <p className="text-[11px] text-gray-400 leading-relaxed">"{t.desc}"</p>
                </div>
                <div className="border-t border-white/5 pt-3 mt-4 text-[10px] text-gray-500 font-bold uppercase">
                  - {t.author}
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-center mt-12 text-gray-400 font-medium">
             Trust, Transparency, and Accountability are the structural foundations of our business.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white flex items-center justify-center gap-2.5">
              <HelpCircle className="text-blue-400 w-8 h-8 shrink-0" /> Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How long does SEO take for financial advisors?",
                a: "Most firms begin seeing measurable improvements within 3–6 months, with stronger results typically occurring between 6–12 months depending on competition and market conditions."
              },
              {
                q: "Is SEO better than paid advertising for financial advisors?",
                a: "SEO and paid advertising can complement each other. However, SEO often delivers stronger long-term ROI because organic visibility continues generating leads over time."
              },
              {
                q: "Can local financial advisors compete against large national firms?",
                a: "Yes. Strategic local SEO and niche targeting often allow smaller advisory firms to outperform larger competitors in specific markets."
              },
              {
                q: "Do you create content for financial advisors?",
                a: "Yes. We develop high-quality, search-optimized content designed to educate prospects, demonstrate expertise, and improve rankings based on compliant educational arrays."
              },
              {
                q: "Is SEO compliant with financial services marketing regulations?",
                a: "SEO can be implemented in a compliance-conscious manner. We work closely with advisors to ensure content and messaging align with applicable SEC and local compliance requirements."
              },
              {
                q: "What metrics do you track?",
                a: "We track rankings, organic traffic, lead generation, consultation requests, conversion rates, and other business-focused performance indicators."
              },
              {
                q: "Who are your SEO services for?",
                a: "Our services are ideal for financial advisors, RIAs, wealth managers, retirement planners, fiduciary advisors, investment advisors, and financial planning firms seeking sustainable growth."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className="glass-morphism border border-white/5 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-sm font-bold text-white pr-4">{faq.q}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 shrink-0 ${
                      activeFaq === index ? 'rotate-180 text-blue-400' : ''
                    }`} 
                  />
                </button>
                
                {activeFaq === index && (
                  <div className="p-6 pt-0 border-t border-white/5 bg-slate-950/20 text-xs text-slate-300 leading-relaxed">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 px-4 md:px-6 relative bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.1),transparent_60%)] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <div className="w-16 h-16 bg-blue-500/15 border border-blue-500/20 text-blue-450 rounded-2xl flex items-center justify-center mx-auto mb-4 text-blue-400">
            <ShieldCheck className="w-8 h-8" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Ready to Attract More Qualified Financial Planning Clients?
          </h2>

          <div className="space-y-4 max-w-3xl mx-auto text-sm md:text-base text-gray-300 leading-relaxed">
            <p className="font-bold text-white text-base">Your future clients are already searching online for the services you provide.</p>
            <p>The question is whether they find your firm—or your competitors.</p>
            <p>
              Our SEO services for financial advisors help you increase visibility, establish authority, build trust, and generate qualified leads that support long-term business growth.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-white/5 p-6 rounded-2xl max-w-2xl mx-auto space-y-2">
            <p className="text-xs text-gray-400 leading-relaxed">
              We stand for full trust, transparency, and high performance. What we don't promise: #1 rankings overnight or instant results. We focus on strategies that align with search engine guidelines. Discover hidden gaps by reviewing our interactive <Link to="/resources" className="text-blue-400 font-bold underline hover:text-blue-300">Resources Hub</Link>.
            </p>
          </div>

          <div className="pt-4">
            <button
              onClick={onBook}
              className="inline-flex items-center justify-center px-10 py-5 rounded-xl text-black bg-gradient-to-r from-blue-400 to-sky-300 hover:from-blue-500 hover:to-sky-400 font-extrabold tracking-wider uppercase text-sm shadow-xl shadow-blue-500/20 transition-all duration-300 hover:scale-[1.03]"
            >
              Book Your Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>

          <div className="pt-4 text-center">
            <p className="text-xs text-gray-500">
              Need immediate digital advisory consulting? Touch base directly with our main{' '}
              <Link to="/contact" className="text-amber-400 underline font-bold hover:text-amber-300">
                Contact Desk
              </Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinancialAdvisorSEOPage;
