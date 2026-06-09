import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  XCircle, 
  Search, 
  ArrowRight, 
  Hotel, 
  Calendar, 
  MapPin, 
  Star, 
  Users, 
  Sparkles, 
  TrendingUp, 
  Globe, 
  BookOpen, 
  ChevronDown, 
  Award, 
  ShieldCheck,
  Smartphone,
  BarChart,
  HelpCircle,
  Bed
} from 'lucide-react';
import SEO from '../components/SEO';

interface HotelSEOProps {
  onBook: (e?: React.MouseEvent) => void;
}

const HotelSEOPage: React.FC<HotelSEOProps> = ({ onBook }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const typicalVsOur = [
    { typical: "Generic SEO campaigns", our: "Hospitality-focused strategies" },
    { typical: "Traffic-focused reporting", our: "Revenue-focused reporting" },
    { typical: "Limited local optimization", our: "Comprehensive local SEO" },
    { typical: "Generic content", our: "Destination-specific content" },
    { typical: "Minimal booking optimization", our: "Direct booking conversion strategy" }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden font-sans">
      <SEO 
        title="SEO Services for Hotels | Grow Direct Bookings & Occupancy"
        description="Rank higher on Google, outrank OTAs, and maximize direct hotel bookings. Specialized hotel SEO strategies covering Keyword Research, Local Map Pack, and Technical optimization."
        keywords="hotel seo services, hospitality seo expert, digital marketing for hotels, hotel seo strategy, increase hotel direct bookings"
      />

      {/* Hero Section */}
      <section className="relative pt-12 md:pt-16 lg:pt-20 pb-24 px-4 md:px-6 overflow-hidden border-b border-white/5">
        {/* Calm hospitality-inspired luxury ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(249,115,22,0.08),transparent_70%)] pointer-events-none"></div>
        <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-orange-500/5 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold tracking-wider uppercase mb-2">
              <Hotel className="w-4 h-4" /> Hotel & Hospitality Specialist
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              SEO Services for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">Hotels</span>
            </h1>
            
            <p className="text-lg sm:text-xl font-bold text-gray-200">
              Increase Direct Hotel Bookings with Expert SEO Services for Hotels
            </p>
            
            <p className="text-base text-orange-400 font-semibold tracking-wide">
              Get Found by Travelers at the Exact Moment They're Ready to Book
            </p>

            <div className="space-y-4 text-gray-400 text-sm md:text-base leading-relaxed">
              <p>
                Hotels face intense competition from OTAs, travel directories, and local competitors. Our{' '}
                <Link to="/services" className="text-orange-400 hover:text-orange-300 font-bold underline decoration-orange-500/40">
                  specialized SEO services
                </Link>{' '}
                for hotels help hospitality businesses increase online visibility, attract qualified travelers, and generate more direct bookings without relying solely on third-party booking platforms.
              </p>
              <p>
                Whether you operate a{' '}
                <Link to="/about" className="text-orange-400 hover:text-orange-300 font-bold underline decoration-orange-500/40">
                  boutique hotel, luxury resort, business hotel, serviced apartment, or hotel group
                </Link>
                , our hotel SEO strategies are designed to improve rankings, increase occupancy rates, and maximize revenue.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onBook}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-black bg-gradient-to-r from-orange-400 to-amber-400 hover:from-orange-500 hover:to-amber-500 font-black tracking-wide shadow-lg shadow-orange-500/20 transition-all duration-300 group hover:scale-[1.02]"
              >
                Book a Free Hotel SEO Strategy Session Today
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-6"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-3xl blur-2xl"></div>
            <div className="relative glass-morphism border border-white/5 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl">
              <div className="h-2 w-20 bg-orange-500 rounded-full"></div>
              <h3 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                <TrendingUp className="text-orange-400 w-5 h-5" /> Direct Booking Impact
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                By bypassing Online Travel Agencies (OTAs) and positioning your website directly in front of searchers, you retain 100% of the guest relationship and avoid high commission margins.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="text-2xl font-black text-orange-400">93%</div>
                  <div className="text-xs text-gray-500 font-medium">Of travel journeys begin on a search engine</div>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="text-2xl font-black text-amber-300">0%</div>
                  <div className="text-xs text-gray-500 font-medium">OTA commissions on organic bookings</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
              Is Your Hotel Losing Bookings to Competitors?
            </h2>
            <p className="text-gray-400 text-sm md:text-base">
              Research consistently shows that the majority of users never move beyond the first page of Google search results. If your hotel isn't visible when travelers are searching, you're missing valuable revenue opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Column 1: What Travelers Search */}
            <div className="glass-morphism border border-white/5 p-6 rounded-2xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Every day, potential guests search Google for:</h3>
              <ul className="space-y-3">
                {[
                  "Hotels near me",
                  "Luxury hotels in [city]",
                  "Beachfront hotels",
                  "Family-friendly hotels",
                  "Business accommodation",
                  "Weekend getaway packages"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-xs text-gray-300 font-medium bg-white/[0.01] border border-white/5 p-3 rounded-xl">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-500 font-medium italic pt-2">
                The challenge is that most hotels never appear on page one.
              </p>
            </div>

            {/* Column 2: What They Find Instead */}
            <div className="glass-morphism border border-white/5 p-6 rounded-2xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400">
                <XCircle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Instead, travelers find:</h3>
              <ul className="space-y-3">
                {[
                  "Online Travel Agencies (OTAs)",
                  "Competitor hotels",
                  "Local accommodation directories",
                  "Travel blogs and booking portals"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-xs text-gray-300 font-medium bg-white/[0.01] border border-white/5 p-3 rounded-xl">
                    <XCircle className="w-4 h-4 text-red-500/70 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: The Business Impact */}
            <div className="glass-morphism border border-white/5 p-6 rounded-2xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">As a result, hotels often experience:</h3>
              <ul className="space-y-3">
                {[
                  "Low direct bookings",
                  "High OTA commission costs",
                  "Seasonal occupancy fluctuations",
                  "Poor visibility in local search",
                  "Underperforming websites",
                  "Reduced revenue per available room (RevPAR)"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-xs text-gray-300 font-medium bg-white/[0.01] border border-white/5 p-3 rounded-xl">
                    <span className="text-orange-500 font-bold shrink-0">!</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
              Our SEO Services for Hotels: A Revenue-Focused Solution
            </h2>
            <p className="text-gray-400 text-sm md:text-base">
              SEO is more than ranking for keywords. A successful hotel SEO strategy connects your property with travelers actively searching for accommodation in your destination.
            </p>
          </div>

          <div className="space-y-16">
            {/* Approach Title */}
            <h3 className="text-xl font-bold tracking-wide text-orange-400 text-center uppercase border-b border-white/5 pb-4 max-w-lg mx-auto">
              Our approach focuses on:
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Hotel Keyword Research */}
              <div className="glass-morphism border border-white/5 p-6 rounded-2xl space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase">
                    Keyword Strategy
                  </div>
                  <h4 className="text-xl font-bold text-white">Hotel Keyword Research</h4>
                  <p className="text-xs text-gray-400">We identify high-intent searches such as:</p>
                  <ul className="space-y-2">
                    {[
                      "Hotels in [location]",
                      "Luxury hotels",
                      "Boutique accommodation",
                      "Family resorts",
                      "Romantic getaway hotels",
                      "Conference hotels",
                      "Pet-friendly accommodation"
                    ].map((kw, idx) => (
                      <li key={idx} className="text-xs text-gray-300 flex items-center gap-2 bg-slate-900/40 px-3 py-1.5 rounded-lg border border-white/5">
                        <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                        {kw}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-xs text-gray-500 mt-4 leading-relaxed">
                  This ensures your hotel attracts visitors who are ready to book.
                </p>
              </div>

              {/* Local SEO for Hotels */}
              <div className="glass-morphism border border-white/5 p-6 rounded-2xl space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase">
                    Maps & Local Pack
                  </div>
                  <h4 className="text-xl font-bold text-white">Local SEO for Hotels</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Local search is critical for hospitality businesses. We optimize key factors such as yours:
                  </p>
                  <ul className="space-y-2">
                    <li className="text-xs text-gray-300 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-400" />
                      <Link to="/pricing/local-seo-strategy" className="hover:text-orange-400 underline font-semibold">
                        Google Business Profile
                      </Link>
                    </li>
                    <li className="text-xs text-gray-300 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-400" /> Local citations
                    </li>
                    <li className="text-xs text-gray-300 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-400" /> Location landing pages
                    </li>
                    <li className="text-xs text-gray-300 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-400" />
                      <a href="https://support.google.com/business" target="_blank" rel="noreferrer" className="hover:text-amber-300 underline">
                        Maps visibility
                      </a>
                    </li>
                    <li className="text-xs text-gray-300 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-400" /> Review signals
                    </li>
                  </ul>
                </div>
                <p className="text-xs text-gray-500 mt-4 leading-relaxed border-t border-white/5 pt-3">
                  Helping your hotel appear in local search results and Google Maps.
                </p>
              </div>

              {/* Technical SEO */}
              <div className="glass-morphism border border-white/5 p-6 rounded-2xl space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase">
                    Speed & UX Optimization
                  </div>
                  <h4 className="text-xl font-bold text-white">Technical SEO</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Many hotel websites struggle with speed, crawlability, or configuration errors. We fix:
                  </p>
                  <ul className="space-y-2">
                    <li className="text-xs text-gray-300 flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-red-400/80 shrink-0" /> Slow page speed
                    </li>
                    <li className="text-xs text-gray-300 flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-red-400/80 shrink-0" /> Duplicate content
                    </li>
                    <li className="text-xs text-gray-300 flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-red-400/80 shrink-0" /> Booking engine conflicts
                    </li>
                    <li className="text-xs text-gray-300 flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-red-400/80 shrink-0" /> Poor mobile usability
                    </li>
                    <li className="text-xs text-gray-300 flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-red-400/80 shrink-0" /> Crawlability issues
                    </li>
                  </ul>
                </div>
                <p className="text-xs text-gray-500 mt-4 leading-relaxed">
                  We fix technical barriers that prevent search engines from properly ranking your website—whether you run custom engines or need{' '}
                  <Link to="/services/cms-seo/wordpress-seo-expert" className="text-orange-400 hover:text-orange-300 underline font-semibold">
                    WordPress SEO expert assistance
                  </Link>.
                </p>
              </div>

              {/* Content Marketing */}
              <div className="glass-morphism border border-white/5 p-6 rounded-2xl space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase">
                    Authority & Reach
                  </div>
                  <h4 className="text-xl font-bold text-white">Content Marketing</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Travelers seek information before booking. We create content such as:
                  </p>
                  <ul className="space-y-2">
                    <li className="text-xs text-slate-300 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-amber-400" /> Local travel guides
                    </li>
                    <li className="text-xs text-slate-300 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-amber-400" /> Destination content
                    </li>
                    <li className="text-xs text-slate-300 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-amber-400" /> Event guides
                    </li>
                    <li className="text-xs text-slate-300 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-amber-400" /> Things-to-do articles
                    </li>
                    <li className="text-xs text-slate-300 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-amber-400" />
                      <Link to="/blog" className="hover:text-orange-400 underline font-semibold">
                        Seasonal travel resources
                      </Link>
                    </li>
                  </ul>
                </div>
                <p className="text-xs text-gray-500 mt-4 leading-relaxed">
                  This attracts visitors throughout the customer journey and builds topical authority.
                </p>
              </div>

              {/* Conversion Optimization */}
              <div className="glass-morphism border border-white/5 p-6 rounded-2xl space-y-4 flex flex-col justify-between lg:col-span-2">
                <div className="space-y-4 animate-pulse-slow">
                  <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase">
                    Direct Booking Conversion
                  </div>
                  <h4 className="text-xl font-bold text-white">Conversion Optimization</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Traffic alone doesn't generate revenue. We systematically optimize:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-slate-900/50 p-4 rounded-xl space-y-2 border border-white/5">
                      <div className="text-xs font-bold text-white uppercase tracking-wider">Interface Pathways</div>
                      <p className="text-xs text-gray-400">Booking pathways, landing pages, and calls-to-action.</p>
                    </div>
                    <div className="bg-slate-900/50 p-4 rounded-xl space-y-2 border border-white/5">
                      <div className="text-xs font-bold text-white uppercase tracking-wider">Experience & Flow</div>
                      <p className="text-xs text-gray-400">Mobile booking experiences and user engagement metrics.</p>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-6 leading-relaxed border-t border-white/5 pt-3">
                  The result is more direct bookings from existing traffic.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Real Hospitality SEO Experience
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Hotels have unique SEO requirements that differ from other industries. We've developed strategies that align with how travelers search, compare, and book accommodations online.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Case 1 */}
            <div className="glass-morphism border border-white/10 p-6 rounded-2xl relative space-y-4">
              <div className="absolute top-4 right-4 text-xs font-black uppercase text-orange-400 tracking-widest bg-orange-500/10 px-2 py-1 rounded-md border border-orange-500/20">
                01
              </div>
              <div className="text-sm font-bold text-slate-400 tracking-wider uppercase mb-1">Boutique Hotel</div>
              <p className="text-sm text-gray-300 italic font-semibold leading-relaxed">
                "A boutique hotel struggled with OTA dependency."
              </p>
              <p className="text-xs text-gray-400 leading-relaxed">
                By targeting local accommodation keywords and destination-focused content, direct booking inquiries increased while reliance on commission-based bookings decreased.
              </p>
            </div>

            {/* Case 2 */}
            <div className="glass-morphism border border-white/10 p-6 rounded-2xl relative space-y-4">
              <div className="absolute top-4 right-4 text-xs font-black uppercase text-orange-400 tracking-widest bg-orange-500/10 px-2 py-1 rounded-md border border-orange-500/20">
                02
              </div>
              <div className="text-sm font-bold text-slate-400 tracking-wider uppercase mb-1">Coastal Resort</div>
              <p className="text-sm text-gray-300 italic font-semibold leading-relaxed">
                "A resort competing against large booking platforms..."
              </p>
              <p className="text-xs text-gray-400 leading-relaxed">
                A resort competing against large booking platforms improved visibility for location-specific searches, leading to increased organic traffic during peak travel seasons.
              </p>
            </div>

            {/* Case 3 */}
            <div className="glass-morphism border border-white/10 p-6 rounded-2xl relative space-y-4">
              <div className="absolute top-4 right-4 text-xs font-black uppercase text-orange-400 tracking-widest bg-orange-500/10 px-2 py-1 rounded-md border border-orange-500/20">
                03
              </div>
              <div className="text-sm font-bold text-slate-400 tracking-wider uppercase mb-1">Business Hotel</div>
              <p className="text-sm text-gray-300 italic font-semibold leading-relaxed">
                "A city hotel optimized for corporate accommodation..."
              </p>
              <p className="text-xs text-gray-400 leading-relaxed">
                A city hotel optimized for conference accommodation and corporate travel keywords, attracting more business travelers and event attendees.
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-400 text-center mt-12 bg-slate-900/40 py-3 px-6 border border-white/5 rounded-xl max-w-2xl mx-auto">
            These practical applications demonstrate how SEO directly impacts hotel occupancy and revenue generation.
          </p>
        </div>
      </section>

      {/* Features & Benefits Grid */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
              Features and Benefits
            </h2>
            <p className="text-gray-400 text-sm">Our comprehensive campaigns deliver sustainable occupancy growth.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Comprehensive SEO Audit",
                feature: "Full website analysis.",
                benefit: "Identifies hidden issues limiting rankings and bookings.",
                linkText: "Get an SEO audit",
                linkPath: "/resources"
              },
              {
                title: "Hotel-Specific Keyword Research",
                feature: "Search intent mapping.",
                benefit: "Attracts travelers actively searching for accommodation."
              },
              {
                title: "Local SEO Optimization",
                feature: "Google Maps and local search improvements.",
                benefit: "Increases visibility for nearby guests."
              },
              {
                title: "Content Strategy",
                feature: "Destination and travel-focused content.",
                benefit: "Builds authority and attracts organic traffic year-round."
              },
              {
                title: "Technical SEO",
                feature: "Site performance improvements.",
                benefit: "Better rankings and improved user experience."
              },
              {
                title: "Conversion Optimization",
                feature: "Booking funnel enhancements.",
                benefit: "More direct reservations from website visitors."
              }
            ].map((item, idx) => (
              <div key={idx} className="glass-morphism border border-white/5 p-6 rounded-2xl relative flex flex-col justify-between">
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                    {item.title}
                  </h4>
                  <div className="text-xs">
                    <span className="text-orange-400 font-bold block mb-1">Feature:</span>
                    <span className="text-gray-300">{item.feature}</span>
                  </div>
                  <div className="text-xs pt-1">
                    <span className="text-amber-350 font-bold block mb-1 text-amber-300">Benefit:</span>
                    <span className="text-gray-400 leading-relaxed">{item.benefit}</span>
                  </div>
                </div>
                {item.linkPath && (
                  <div className="pt-4 mt-4 border-t border-white/5">
                    <Link to={item.linkPath} className="text-orange-400 hover:text-orange-300 text-xs font-bold inline-flex items-center gap-1">
                      {item.linkText} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Insights */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Hotel Industry SEO Expertise You Can Trust
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Hotel SEO requires understanding hospitality booking behavior, traveler intent, seasonality, and local competition. Key industry insights include:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-morphism border border-white/5 p-6 rounded-2xl space-y-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-orange-400 w-5 h-5" />
                <h3 className="text-lg font-bold text-white">OTA Competition is Increasing</h3>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Online Travel Agencies invest heavily in SEO and advertising. Hotels need strong organic visibility to reduce commission dependency.{' '}
                <a href="https://searchengineland.com" target="_blank" rel="noreferrer" className="text-orange-400 hover:text-orange-300 underline font-semibold">
                  Read industry updates from Search Engine Land
                </a>.
              </p>
            </div>

            <div className="glass-morphism border border-white/5 p-6 rounded-2xl space-y-4">
              <div className="flex items-center gap-2">
                <Smartphone className="text-amber-300 w-5 h-5 animate-pulse" />
                <h3 className="text-lg font-bold text-white">Mobile Searches Dominate Travel Research</h3>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Industry studies show that most travel-related searches occur on mobile devices. Fast, mobile-friendly websites significantly improve conversion rates.{' '}
                <a href="https://www.thinkwithgoogle.com" target="_blank" rel="noreferrer" className="text-amber-300 hover:text-amber-200 underline font-semibold">
                  Explore traveler insights at Think With Google
                </a>.
              </p>
            </div>

            <div className="glass-morphism border border-white/5 p-6 rounded-2xl space-y-4">
              <div className="flex items-center gap-2">
                <Star className="text-yellow-400 w-5 h-5 fill-yellow-400" />
                <h3 className="text-lg font-bold text-white">Reviews Influence Booking Decisions</h3>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Guest reviews impact both rankings and booking decisions. A strong reputation management strategy supports SEO performance across organic result maps.
              </p>
            </div>

            <div className="glass-morphism border border-white/5 p-6 rounded-2xl space-y-4">
              <div className="flex items-center gap-2">
                <MapPin className="text-orange-500 w-5 h-5" />
                <h3 className="text-lg font-bold text-white">Local Search Matters</h3>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Travelers frequently search for accommodations using location-based terms. Optimizing local visibility remains one of the highest ROI activities for hotels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hotels Choose Our Campaign */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Why Hotels Choose Our SEO Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="bg-white/[0.01] border border-white/5 p-6 rounded-2xl space-y-3">
              <h3 className="font-bold text-white text-lg">Hospitality-Focused Strategy</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                We understand hotel booking journeys and traveler behavior.
              </p>
            </div>

            <div className="bg-white/[0.01] border border-white/5 p-6 rounded-2xl space-y-3">
              <h3 className="font-bold text-white text-lg">Revenue-Oriented Approach</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Our goal isn't simply rankings. We focus on direct booking growth and revenue generation.
              </p>
            </div>

            <div className="bg-white/[0.01] border border-white/5 p-6 rounded-2xl space-y-3">
              <h3 className="font-bold text-white text-lg">Transparent Reporting</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                You'll receive clear reporting showing: Organic traffic growth, Keyword improvements, Booking-related metrics, and Local visibility performance. Check our{' '}
                <Link to="/pricing" className="text-orange-400 hover:text-orange-300 underline font-semibold">
                  flexible SEO packages and details
                </Link>.
              </p>
            </div>

            <div className="bg-white/[0.01] border border-white/5 p-6 rounded-2xl space-y-3">
              <h3 className="font-bold text-white text-lg">Long-Term Growth</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Unlike paid advertising, SEO continues generating traffic and bookings over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compare Table */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              What Makes Our SEO Services for Hotels Different?
            </h2>
            <p className="text-gray-400 text-xs">
              Our hotel SEO campaigns are built around occupancy growth, guest acquisition, and long-term profitability.
            </p>
          </div>

          <div className="border border-white/10 rounded-2xl overflow-hidden shadow-2xl glass-morphism">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 border-b border-white/15">
                  <th className="p-4 text-xs font-bold text-slate-300 uppercase tracking-widest">Typical SEO Agency</th>
                  <th className="p-4 text-xs font-bold text-orange-400 uppercase tracking-widest border-l border-white/10">Our Hotel SEO Approach</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                {typicalVsOur.map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.01] transition-colors">
                    <td className="p-4 text-xs text-gray-400">{row.typical}</td>
                    <td className="p-4 text-xs text-white font-semibold border-l border-white/10 flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                      {row.our}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Reviews (Trust & Transparency) */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase">
                Trust and Transparency
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                What Clients Appreciate
              </h2>
              <div className="space-y-6">
                {[
                  "Our direct bookings increased significantly after implementing a structured SEO strategy.",
                  "We finally started appearing for competitive local hotel searches.",
                  "The reporting was transparent and focused on business outcomes, not vanity metrics."
                ].map((testimonial, idx) => (
                  <div key={idx} className="bg-white/[0.01] border border-white/5 p-5 rounded-2xl space-y-3">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-orange-400 fill-orange-400" />
                      ))}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-medium italic">
                      "{testimonial}"
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8 lg:pt-14">
              <div className="bg-slate-950/70 border border-orange-500/10 p-8 rounded-3xl space-y-6 relative">
                <div className="absolute top-0 right-10 -translate-y-1/2 px-4 py-1.5 bg-orange-500 text-black text-xs font-black tracking-wider uppercase rounded-full">
                  Commitment
                </div>
                <h3 className="text-xl font-bold text-white">Our Commitment</h3>
                <ul className="space-y-3">
                  {[
                    "No unrealistic ranking guarantees",
                    "No black-hat SEO tactics",
                    "Transparent communication",
                    "Ethical optimization methods",
                    "Long-term sustainable growth"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-300 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-slate-900/30 border border-white/5 rounded-2xl relative">
                <h4 className="text-sm font-bold text-orange-400 mb-2">Important Note</h4>
                <p className="text-xs text-gray-450 leading-relaxed text-gray-400">
                  SEO is not an overnight solution. Depending on competition, market size, and website condition, meaningful results often take several months to develop. Sustainable growth requires consistent optimization and ongoing strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white flex items-center justify-center gap-2.5">
              <HelpCircle className="text-orange-400 w-8 h-8 shrink-0" /> Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How long does hotel SEO take?",
                a: "Most hotels begin seeing measurable improvements within 3–6 months, with stronger results developing over 6–12 months depending on competition."
              },
              {
                q: "Can SEO increase direct bookings?",
                a: "Yes. SEO helps hotels attract travelers directly from search engines, reducing reliance on OTAs and increasing booking profitability.",
                linkText: "Learn more about reducing OTA dependencies",
                linkPath: "/services"
              },
              {
                q: "Do you work with boutique hotels and resorts?",
                a: "Absolutely. We work with boutique hotels, resorts, serviced apartments, luxury accommodations, and hotel groups.",
                linkText: "Learn more about our team and background",
                linkPath: "/about"
              },
              {
                q: "Is local SEO important for hotels?",
                a: "Yes. Local SEO is one of the most important ranking factors for accommodation businesses because travelers often search using location-based queries."
              },
              {
                q: "Can you optimize existing hotel websites?",
                a: "Yes. We can optimize existing websites or collaborate with your web development team.",
                linkText: "View web development collaborations",
                linkPath: "/portfolio/web-development"
              },
              {
                q: "Do you provide content creation?",
                a: "Yes. We develop hotel-focused content strategies including destination guides, travel resources, and location-specific pages."
              },
              {
                q: "What metrics do you track?",
                a: "We track rankings, organic traffic, local visibility, conversions, and booking-related performance indicators."
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
                      activeFaq === index ? 'rotate-180 text-orange-450 text-orange-400' : ''
                    }`} 
                  />
                </button>
                
                {activeFaq === index && (
                  <div className="p-6 pt-0 border-t border-white/5 bg-slate-950/20 text-xs text-gray-300 leading-relaxed space-y-3">
                    <p>{faq.a}</p>
                    {faq.linkPath && (
                      <div className="pt-2">
                        <Link to={faq.linkPath} className="text-orange-400 hover:text-orange-300 font-bold inline-flex items-center gap-1">
                          {faq.linkText} <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 px-4 md:px-6 relative bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(249,115,22,0.1),transparent_60%)] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <div className="w-16 h-16 bg-orange-500/15 border border-orange-500/20 text-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Bed className="w-8 h-8" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Ready to Increase Direct Hotel Bookings?
          </h2>

          <div className="space-y-4 max-w-3xl mx-auto text-sm md:text-base text-gray-300 leading-relaxed font-medium">
            <p className="font-bold text-white text-base">Your next guest is already searching online.</p>
            <p>The question is whether they'll find your hotel or your competitor.</p>
            <p>
              Our specialized SEO services for hotels help hospitality businesses improve visibility, attract qualified travelers, and generate more direct bookings through sustainable organic growth.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-white/5 p-6 rounded-2xl max-w-2xl mx-auto space-y-4">
            <h4 className="text-orange-400 font-extrabold tracking-wide text-sm uppercase">
              Schedule Your Free Hotel SEO Consultation Today
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Discover how a tailored SEO strategy can help your hotel reduce OTA dependence, improve occupancy rates, and increase revenue.
            </p>
          </div>

          <div className="pt-4">
            <button
              onClick={onBook}
              className="inline-flex items-center justify-center px-10 py-5 rounded-xl text-black bg-gradient-to-r from-orange-400 to-amber-400 hover:from-orange-500 hover:to-amber-500 font-extrabold tracking-wider uppercase text-sm shadow-xl shadow-orange-500/20 transition-all duration-300 hover:scale-105"
            >
              Get My Free Strategy Session
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HotelSEOPage;
