import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Building2, 
  Search, 
  MapPin, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  HelpCircle, 
  Star, 
  ChevronDown, 
  TrendingUp, 
  Key, 
  Compass, 
  Globe, 
  ExternalLink 
} from 'lucide-react';
import SEO from '../components/SEO';

interface RealEstateSEOProps {
  onBook: (e?: React.MouseEvent) => void;
}

const RealEstateSEOPage: React.FC<RealEstateSEOProps> = ({ onBook }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden font-sans pt-12">
      <SEO 
        title="SEO Services for Real Estate Industry | Generate Listings & Leads"
        description="Premium real estate SEO services to rank first-page on Google, attract commercial or residential buyers and sellers, and dominate local real estate map packs."
        keywords="real estate seo, realtor search marketing, property developer lead generation, commercial real estate marketing, seo for listings"
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
              <Building2 className="w-4 h-4 text-emerald-400" /> Real Estate Lead Generation SEO
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              SEO Services for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Real Estate Industry</span> That Generate More Listings, Leads & Sales
            </h1>
            
            <h2 className="text-lg sm:text-xl font-bold text-gray-200">
              Dominate Local Search with Expert SEO Services for Real Estate Industry
            </h2>
            
            <p className="text-base text-teal-400 font-semibold tracking-wide">
              Get Found by Buyers, Sellers, Investors, and Property Developers Searching Online
            </p>

            <div className="space-y-4 text-gray-400 text-sm md:text-base leading-relaxed">
              <p>
                The real estate market is more competitive than ever. If your agency, brokerage, property management company, or real estate investment business isn't appearing on page one of Google, you're losing valuable leads to competitors every day.
              </p>
              <p>
                Our SEO services for real estate industry businesses are designed to increase your online visibility, attract qualified local traffic, and generate consistent inquiries from motivated buyers and sellers.
              </p>
              <p>
                Whether you're a local real estate agent, multi-location brokerage, commercial property firm, or property developer, we create customized SEO strategies that help your business rank higher, generate more leads, and close more deals.
              </p>
            </div>

            <p className="font-bold text-white text-sm">
              Get Your Free SEO Strategy Consultation Today
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onBook}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-black bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-500 hover:to-teal-400 font-black tracking-wide shadow-lg shadow-emerald-500/20 transition-all duration-300 group hover:scale-[1.02]"
              >
                Book Your Free Consultation
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
              <div className="h-2 w-20 bg-teal-400 rounded-full"></div>
              <h3 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                <Compass className="text-teal-400 w-5 h-5" /> Market Authority Blueprint
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Discover organic search visibility gaps, leverage location-specific landing frames, and expand your listing footprint. Link pages seamlessly using our specialized resources.
              </p>
              
              <div className="pt-4 space-y-3">
                <button 
                  onClick={onBook}
                  className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600 text-black font-black transition-all text-xs uppercase tracking-wider"
                >
                  Schedule Free Strategy Session
                </button>
                <div className="text-center text-[10px] text-gray-500">
                  Are you checking other local industries? Review our{' '}
                  <Link to="/industry" className="text-emerald-400 underline font-bold hover:text-emerald-300">
                    Industry Hub
                  </Link> to explore specialized verticals.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Real Estate Businesses Struggle */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              The Challenge: Why Most Real Estate Businesses Struggle to Generate Organic Leads
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              The majority of real estate companies rely heavily on paid advertising, referral networks, third-party listing platforms, and social media marketing. While these channels can be effective, they often come with rising costs and inconsistent lead flow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="glass-morphism border border-white/5 p-8 rounded-[2rem] space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Search className="w-5 h-5 text-emerald-400" /> Common challenges we see include:
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-black text-white uppercase tracking-wider mb-1">Low Website Traffic</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Many real estate websites receive minimal organic traffic due to poor SEO foundations. Evaluate your present layout with our professional <Link to="/resources/seo-audit-checklist" className="text-emerald-400 hover:underline font-bold">SEO Audit Checklist</Link>.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-black text-white uppercase tracking-wider mb-1">Lack of Local Visibility</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Businesses struggle to rank in Google Maps and local search results. Overcome this using geographical mapping built for specific territories.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-black text-white uppercase tracking-wider mb-1">Poor Lead Quality</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Marketing efforts attract unqualified visitors who never convert. Discover better options with pre-optimized landing pages.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-black text-white uppercase tracking-wider mb-1">High Dependence on Paid Advertising</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Businesses become trapped in expensive PPC campaigns just to maintain lead volume. See a better long-term ROI alternative over at our agency-wide <Link to="/pricing" className="text-emerald-400 hover:underline font-bold">SEO packages & transparency pricing schemas</Link>.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-black text-white uppercase tracking-wider mb-1">Outdated Website Structure</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Many real estate websites are not optimized for modern SEO requirements, mobile users, or search intent. Check your layout compatibility utilizing the Google core criteria.
                  </p>
                </div>
              </div>

              <p className="text-xs text-gray-500 leading-relaxed pt-2">
                Without a strategic SEO plan, growth becomes difficult and expensive.
              </p>
            </div>

            <div className="space-y-6 lg:pl-6">
              <h3 className="text-xl font-bold text-white uppercase tracking-wider text-teal-400">Prospect Search Intent</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Meanwhile, potential clients are searching Google every day for high-commercial terms:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Real estate agents near me",
                  "Homes for sale",
                  "Property investment opportunities",
                  "Commercial real estate services",
                  "Property management companies",
                  "Real estate consultants",
                  "Luxury real estate agents"
                ].map((term, i) => (
                  <div key={i} className="text-xs text-gray-200 bg-white/[0.02] border border-white/5 p-3 rounded-xl italic font-mono">
                    "{term}"
                  </div>
                ))}
              </div>

              <p className="text-xs text-gray-400 leading-relaxed">
                If your competitors appear before you in search results, they're capturing those opportunities first. Without strong search visibility, growth becomes heavily dependent on manual referrals, slowing scalability.
              </p>

              <div className="pt-2">
                <Link 
                  to="/services" 
                  className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-bold underline"
                >
                  Learn about our full-scale digital search options <ArrowRight className="w-4 h-4" />
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
              Our Solution: SEO Services Built Specifically for the Real Estate Industry
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              We help real estate businesses increase visibility where buyers and sellers are actively searching. Our approach combines technical SEO, local SEO, content marketing, authority building, and conversion optimization into one comprehensive strategy.
            </p>
          </div>

          <div className="bg-slate-900/40 p-8 rounded-3xl border border-white/5 max-w-4xl mx-auto space-y-6">
            <h3 className="text-xl font-black uppercase text-center text-emerald-400 tracking-wider">
              Our Goal Is Simple: Help your real estate business become the obvious choice in your target market.
            </h3>
            <p className="text-sm text-center text-gray-300 leading-relaxed">
              With a customized SEO campaign, we focus on:
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Increasing qualified organic traffic",
                "Improving local search rankings",
                "Generating more property inquiries",
                "Growing seller leads",
                "Enhancing brand authority",
                "Reducing reliance on paid advertising"
              ].map((focusItem, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-[#020617] border border-white/5 p-4 rounded-xl">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span className="text-xs font-bold text-gray-200">{focusItem}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-center text-gray-500 font-semibold italic">
              Instead of chasing leads, your website becomes a consistent lead-generation asset.
            </p>
          </div>
        </div>
      </section>

      {/* Real-World Experiece Section */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Real-World Experience in Real Estate SEO
            </h2>
            <p className="text-gray-400 text-sm mt-3 leading-relaxed">
              SEO for real estate is different from SEO in other industries. Property buyers, sellers, investors, and renters search differently depending on location, property type, and intent.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-morphism border border-white/5 p-8 rounded-3xl space-y-4">
              <span className="text-emerald-400 font-black uppercase text-xs tracking-wider block">Local Search Behavior</span>
              <p className="text-xs text-gray-400 leading-relaxed">
                Users often search for highly specific geographic terms. We optimize your website around local buyer intent to capture these critical local searches:
              </p>
              <div className="space-y-1.5 font-mono italic text-[11px] text-gray-300 border-l-2 border-emerald-500/20 pl-3">
                <p>• Homes for sale in [city]</p>
                <p>• Real estate agent in [suburb]</p>
                <p>• Luxury homes near me</p>
                <p>• Commercial property for lease</p>
              </div>
              <p className="text-[11px] text-gray-500">
                To capture regional and neighborhood flows, check out our customized territory blueprints across our extensive list of locations on the main{' '}
                <Link to="/locations" className="text-emerald-400 underline font-bold">Locations Page</Link>.
              </p>
            </div>

            <div className="glass-morphism border border-white/5 p-8 rounded-3xl space-y-4">
              <span className="text-emerald-400 font-black uppercase text-xs tracking-wider block">Property-Specific Content</span>
              <p className="text-xs text-gray-400 leading-relaxed">
                High-performing real estate websites provide valuable information beyond standard residential listings. Useful examples include:
              </p>
              <div className="space-y-1.5 font-mono text-[11px] text-gray-300 pl-1">
                <p><strong>- Neighborhood Guides:</strong> Local demographic and transit analysis.</p>
                <p><strong>- Market Reports:</strong> Quarterly pricing data and capital appreciation forecasts.</p>
                <p><strong>- Buying Resources:</strong> Fiduciary guides, tax tips, and seller resources.</p>
              </div>
              <div className="pt-2 border-t border-white/5">
                <a 
                  href="https://developers.google.com/search/docs/appearance/structured-data/real-estate-listing" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-[10px] text-teal-300 font-bold inline-flex items-center gap-1 hover:underline"
                >
                  Google Real Estate Metadata Guidelines <Globe className="w-3 h-3 text-teal-400" />
                </a>
              </div>
            </div>

            <div className="glass-morphism border border-white/5 p-8 rounded-3xl space-y-4">
              <span className="text-emerald-400 font-black uppercase text-xs tracking-wider block">Conversion Optimization</span>
              <p className="text-xs text-gray-400 leading-relaxed">
                Traffic alone doesn't generate revenue. We optimize contact forms, landing pages, property inquiry modules, CTA placements, and mobile layouts to transform raw queries into genuine consultations.
              </p>
              <p className="text-[11px] text-gray-500">
                Check our customized templates to automate lead capture pipelines at our interactive <Link to="/resources/actionable-seo-templates" className="text-emerald-400 underline font-bold">SEO Templates database</Link> page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits Component */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Features & Benefits of Our SEO Services for Real Estate Industry
            </h2>
            <p className="text-xs text-gray-500 mt-2">Highly aligned technical delivery and clear strategic goals.</p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {[
              {
                title: "Comprehensive SEO Audit",
                do: "We analyze your website's technical health, content, backlinks, user experience, and rankings.",
                benefit: "Identify hidden issues preventing your website from reaching its full potential."
              },
              {
                title: "Keyword Research & Search Intent Analysis",
                do: "We uncover high-value keywords used by buyers, sellers, landlords, investors, and commercial property clients.",
                benefit: "Attract visitors who are actively looking for real estate services."
              },
              {
                title: "Local SEO Optimization",
                do: "We optimize your Google Business Profile, local citations, location pages, and local content.",
                benefit: "Increase visibility in local searches and Google Maps, as detailed on our dedicated pricing blueprint."
              },
              {
                title: "On-Page SEO",
                do: "We optimize: page titles, meta descriptions, headers, internal linking, content structure, and schema markup.",
                benefit: "Improve rankings and search engine understanding of your website. Generate pristine technical data with our schema tool."
              },
              {
                title: "Content Marketing",
                do: "Create authoritative content tailored to your audience. Examples include area guides, housing market updates, investment articles, and buyer or seller resources.",
                benefit: "Generate long-term traffic while building trust and authority."
              },
              {
                title: "Link Building & Authority Development",
                do: "Acquire relevant, high-quality backlinks from reputable websites.",
                benefit: "Improve domain authority and competitive rankings."
              },
              {
                title: "Technical SEO",
                do: "Enhance site speed, mobile usability, crawlability, indexing, and structured data.",
                benefit: "Provide a stronger foundation for sustainable ranking growth."
              }
            ].map((f, i) => (
              <div key={i} className="bg-slate-900/30 border border-white/5 rounded-2xl p-6 md:p-8 grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-black text-emerald-400 uppercase tracking-wider mb-2">{f.title}</h4>
                  <div className="text-xs text-gray-300">
                    <span className="text-[10px] uppercase font-black text-emerald-500 inline-block mr-1">What We Do:</span>
                    {f.do}
                  </div>
                </div>
                <div className="border-t md:border-t-0 md:border-l border-white/5 pt-4 md:pt-0 md:pl-6 flex flex-col justify-center">
                  <span className="text-[10px] uppercase font-black text-teal-400 mb-1">Benefit:</span>
                  <p className="text-xs text-gray-400 leading-relaxed font-semibold">{f.benefit}</p>
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
              Why Expertise Matters in Real Estate SEO
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
              <p>
                Google increasingly rewards websites that demonstrate <strong>Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T)</strong>. 
                A generic SEO strategy often fails because real estate search behavior is highly localized and competitive.
              </p>
            </div>
            <div className="pt-2">
              <a 
                href="https://www.searchenginejournal.com/google-e-e-a-t-how-to-demonstrate-it/474149/" 
                target="_blank" 
                rel="noreferrer" 
                className="text-[10px] text-teal-400 font-bold inline-flex items-center gap-1 hover:underline"
              >
                Learn E-E-A-T Framework on Search Engine Journal <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-morphism border border-white/5 p-8 rounded-3xl space-y-4">
              <h4 className="text-sm font-black text-emerald-400 uppercase tracking-widest">Our Specialists Understand:</h4>
              <ul className="space-y-2 text-xs text-gray-300 leading-relaxed">
                <li>• Real estate buyer journeys & investment pathways</li>
                <li>• Seller lead generation and commercial listing optimization</li>
                <li>• Local property search intent</li>
                <li>• Local market competition & bidding flows</li>
                <li>• Geographic keyword targeting</li>
                <li>• Lead conversion optimization strategies</li>
              </ul>
              <p className="text-[10px] text-gray-500 leading-relaxed pt-2">
                This allows us to create campaigns that align with both search engine requirements and business objectives.
              </p>
            </div>

            <div className="glass-morphism border border-white/5 p-8 rounded-3xl flex flex-col justify-between">
              <div className="space-y-4">
                <h4 className="text-sm font-black text-white uppercase tracking-widest">Cross-Industry Authority</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Real estate firms need specialized local map optimization and content modeling models. Explore these same high-performing components inside our dedicated solutions for other domains:
                </p>
                <div className="grid grid-cols-2 gap-2 pt-2 text-[10px] text-gray-300 font-bold">
                  <Link to="/industry/seo-services-for-roofers" className="hover:text-emerald-400 underline">• SEO for Roofers</Link>
                  <Link to="/industry/seo-services-for-financial-advisors" className="hover:text-emerald-400 underline">• SEO for Financial Advisors</Link>
                  <Link to="/industry/seo-company-for-photographers" className="hover:text-emerald-400 underline">• SEO for Photographers</Link>
                  <Link to="/pricing/local-seo-strategy" className="hover:text-emerald-400 underline">• Local Web Campaign Pricing</Link>
                </div>
              </div>
              <div className="pt-4 border-t border-white/5">
                <Link to="/resources/schema-generator" className="text-xs text-emerald-400 font-bold underline inline-flex items-center gap-1.5 hover:text-emerald-300">
                  Try our custom structural Schema Generator <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Difference: Generic vs Custom */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
              What Makes Our SEO Services Different?
            </h2>
            <p className="text-xs text-gray-500">Every single milestone is reinforced through factual market insights.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-white/5 bg-slate-900/30 p-6 rounded-2xl space-y-2">
              <h4 className="text-xs font-black uppercase text-emerald-400 tracking-wider">Industry-Focused Strategies</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                We understand how people search for real estate services and properties online.
              </p>
            </div>

            <div className="border border-white/5 bg-slate-900/30 p-6 rounded-2xl space-y-2">
              <h4 className="text-xs font-black uppercase text-emerald-400 tracking-wider">Data-Driven Decisions</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Every recommendation is supported by keyword research, analytics, and competitive insights.
              </p>
            </div>

            <div className="border border-white/5 bg-slate-900/30 p-6 rounded-2xl space-y-2">
              <h4 className="text-xs font-black uppercase text-emerald-400 tracking-wider">Long-Term Growth</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                We focus on sustainable rankings rather than short-term SEO tricks.
              </p>
            </div>

            <div className="border border-white/5 bg-slate-900/30 p-6 rounded-2xl space-y-2 lg:col-span-1">
              <h4 className="text-xs font-black uppercase text-emerald-400 tracking-wider">Transparent Reporting</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                You'll receive clear reporting showing: traffic growth, keyword rankings, lead generation metrics, and conversion improvements.
              </p>
            </div>

            <div className="border border-white/5 bg-slate-900/30 p-6 rounded-2xl space-y-2 lg:col-span-2">
              <h4 className="text-xs font-black uppercase text-emerald-400 tracking-wider">Conversion-Centered SEO</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                We don't just increase traffic. We focus on attracting visitors likely to become clients and scheduling listing consultations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/40">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Trust Signals That Give You Confidence</h2>
            <p className="text-xs text-gray-500">Formulated on strict standards of professional integrity.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-morphism border border-white/5 p-8 rounded-3xl space-y-4">
              <span className="text-[10px] uppercase tracking-widest font-black text-amber-400">Client Testimonial</span>
              <div className="flex gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
              </div>
              <p className="text-xs text-gray-200 italic leading-relaxed">
                "Our organic leads increased significantly within months of implementing their SEO strategy. We now generate consistent inquiries without relying solely on paid advertising."
              </p>
              <div className="font-bold text-[10px] text-gray-400 uppercase tracking-wider block">
                — Real Estate Agency Owner
              </div>
            </div>

            <div className="space-y-4 flex flex-col justify-center">
              {[
                { t: "Transparent Process", d: "No hidden tactics. No unrealistic promises. No black-hat SEO techniques. We provide honest recommendations and realistic growth expectations." },
                { t: "White-Hat SEO Methodology", d: "Our campaigns follow industry best practices and Google's guidelines. This helps protect your website from future algorithm updates." },
                { t: "Dedicated Support", d: "Our team is available to answer questions, explain strategies, and provide ongoing guidance throughout your campaign." }
              ].map((sig, id) => (
                <div key={id} className="border-l-2 border-emerald-500/30 pl-4 space-y-1">
                  <h4 className="text-xs font-black uppercase text-white tracking-wider">{sig.t}</h4>
                  <p className="text-xs text-gray-400">{sig.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison: SEO vs Paid Ads */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">SEO Services for Real Estate Industry vs Paid Advertising</h2>
            <p className="text-xs text-gray-500 mt-2">See how compound growth compares to recurring monthly expenditures.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs md:text-sm">
              <thead>
                <tr className="border-b border-white/10 uppercase font-black text-teal-400">
                  <th className="py-3 px-4">SEO Dimension</th>
                  <th className="py-3 px-4 text-emerald-400">SEO Strategy</th>
                  <th className="py-3 px-4 text-red-400">Paid Advertising (Ads)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-gray-300">
                <tr>
                  <td className="py-4 px-4 font-bold text-white">Asset Horizon</td>
                  <td className="py-4 px-4">Long-term compound asset</td>
                  <td className="py-4 px-4">Stops completely when daily budget ends</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-white">Brand Influence</td>
                  <td className="py-4 px-4">Builds natural marketplace authority</td>
                  <td className="py-4 px-4">Limited organic brand trust and visibility</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-white">Traffic Engine</td>
                  <td className="py-4 px-4">Sustainable & compounding traffic growth</td>
                  <td className="py-4 px-4">Demands ongoing, rising ad spend requirements</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-white">Advisory ROI</td>
                  <td className="py-4 px-4">Significantly higher long-term return</td>
                  <td className="py-4 px-4">Experiencing increasing cost per lead year-over-year</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-white">Equity Impact</td>
                  <td className="py-4 px-4">Improves overall website asset value</td>
                  <td className="py-4 px-4">Provides only temporary, immediate visibility</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center bg-slate-900/30 p-6 rounded-2xl border border-white/5 max-w-2xl mx-auto">
            <p className="text-xs text-gray-400">
              The strongest marketing strategies often combine both, but SEO provides lasting value that compounds over time. Review details at our professional{' '}
              <Link to="/resources/professional-resume" className="text-emerald-400 underline font-bold hover:text-emerald-300">
                SEO Specialist CV & Track Record
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white flex items-center justify-center gap-2.5">
              <HelpCircle className="text-emerald-400 w-8 h-8 shrink-0" /> Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How long does SEO take for real estate businesses?",
                a: "Most businesses begin seeing measurable improvements within 3–6 months, although timelines depend on competition, location, and website condition."
              },
              {
                q: "Do you work with local real estate agents?",
                a: "Yes. We help individual agents, brokerages, property managers, developers, and commercial real estate firms reach home buying and selling prospects."
              },
              {
                q: "Can SEO help generate seller leads?",
                a: "Absolutely. Strategic content and local SEO can attract homeowners looking to sell their properties by answering high-value market queries."
              },
              {
                q: "Is local SEO important for real estate companies?",
                a: "Yes. Most real estate searches have strong local intent, making local SEO essential for visibility and lead generation."
              },
              {
                q: "Will I need new website content?",
                a: "In most cases, yes. Quality content helps improve rankings, authority, and user engagement."
              },
              {
                q: "Do you provide monthly reporting?",
                a: "Yes. We provide detailed reports covering rankings, traffic, leads, and campaign progress."
              },
              {
                q: "Are your SEO methods safe?",
                a: "Yes. We use ethical, white-hat SEO practices aligned with Google's guidelines, strictly protecting your digital presence."
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
                      activeFaq === index ? 'rotate-180 text-emerald-400' : ''
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.1),transparent_60%)] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <div className="w-16 h-16 bg-emerald-500/15 border border-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Building2 className="w-8 h-8" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Ready to Grow Your Real Estate Business Online?
          </h2>

          <div className="space-y-4 max-w-3xl mx-auto text-sm md:text-base text-gray-300 leading-relaxed">
            <p className="font-bold text-white text-base">The real estate professionals who consistently appear at the top of Google capture more listings, more buyer inquiries, and more market share.</p>
            <p>
              Our specialized SEO services for real estate industry businesses help you attract qualified prospects, build authority, and create a reliable source of long-term growth.
            </p>
            <p>
              Whether you're an independent agent, growing brokerage, commercial property firm, or property developer, we can help you build a stronger online presence and generate more leads from organic search.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-white/5 p-6 rounded-2xl max-w-2xl mx-auto space-y-2">
            <p className="text-xs text-secondary leading-relaxed">
              Let's create a customized SEO strategy that helps your real estate business rank higher, attract better leads, and achieve sustainable growth. Inspect professional templates inside our resources collection at the{' '}
              <Link to="/resources" className="text-emerald-400 font-bold underline hover:text-emerald-300">
                SEO Resource Hub
              </Link>.
            </p>
          </div>

          <div className="pt-4">
            <button
              onClick={onBook}
              className="inline-flex items-center justify-center px-10 py-5 rounded-xl text-black bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-500 hover:to-teal-400 font-extrabold tracking-wider uppercase text-sm shadow-xl shadow-emerald-500/20 transition-all duration-300 hover:scale-[1.03]"
            >
              Schedule Your Free SEO Consultation Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>

          <div className="pt-4 text-center">
            <p className="text-xs text-gray-500">
              Have immediate inquiries or custom needs? Contact our main consultation desk by visiting the{' '}
              <Link to="/contact" className="text-emerald-400 underline font-bold hover:text-emerald-300">
                Contact Page
              </Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealEstateSEOPage;
