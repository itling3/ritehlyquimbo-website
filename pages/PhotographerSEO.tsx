import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Camera, 
  Eye, 
  Search, 
  ArrowRight, 
  MapPin, 
  Star, 
  Sparkles, 
  TrendingUp, 
  Globe, 
  BookOpen, 
  ChevronDown, 
  Award, 
  ShieldCheck,
  Smartphone,
  HelpCircle,
  XCircle,
  CheckCircle2,
  Image as ImageIcon,
  Cpu
} from 'lucide-react';
import SEO from '../components/SEO';

interface PhotographerSEOProps {
  onBook: (e?: React.MouseEvent) => void;
}

const PhotographerSEOPage: React.FC<PhotographerSEOProps> = ({ onBook }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const typicalVsOur = [
    { typical: "Relying on social algorithms only", our: "Predictable organic google client acquisition" },
    { typical: "Heavy slow unoptimized images", our: "Next-gen lightning fast modern conversion" },
    { typical: "Ignoring search intent mapping", our: "High revenue, bottom-of-funnel keyword targeting" },
    { typical: "Standard generic SEO audit", our: "Industry-specific local authority setups" },
    { typical: "Temporary ranking spikes", our: "Sustainable long-term portfolio growth asset" }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden font-sans">
      <SEO 
        title="SEO Company for Photographers | Book More Clients Organically"
        description="Rank your photography business higher on Google. Dedicated photography SEO services for wedding, portrait, family, and commercial studios."
        keywords="seo company for photographers, photography seo expert, wedding photographer seo, rent-a-lens local map pack, rank photography portfolio"
      />

      {/* Hero Section */}
      <section className="relative pt-12 md:pt-16 lg:pt-20 pb-24 px-4 md:px-6 overflow-hidden border-b border-white/5">
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
              <Camera className="w-4 h-4 text-orange-400 animate-pulse" /> Dedicated SEO Company for Photographers
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              SEO Company for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">Photographers</span> That Helps You Book More Clients
            </h1>
            
            <p className="text-lg sm:text-xld font-bold text-gray-200">
              Get Found by More Photography Clients with a Specialized SEO Company for Photographers
            </p>
            
            <p className="text-base text-orange-400 font-semibold tracking-wide">
              Your photography skills deserve to be seen by the right people.
            </p>

            <div className="space-y-4 text-gray-400 text-sm md:text-base leading-relaxed">
              <p>
                As a dedicated SEO company for photographers, we help wedding photographers, portrait photographers, commercial photographers, family photographers, newborn photographers, and photography studios rank higher on Google, attract qualified leads, and book more sessions consistently.
              </p>
              <p>
                Instead of relying solely on referrals, social media algorithms, or paid ads, our SEO strategies help photographers generate long-term organic traffic that turns into inquiries and paying clients.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onBook}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-black bg-gradient-to-r from-orange-400 to-amber-400 hover:from-orange-500 hover:to-amber-500 font-black tracking-wide shadow-lg shadow-orange-500/20 transition-all duration-300 group hover:scale-[1.02]"
              >
                Book a Free SEO Strategy Session Today
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
                <Eye className="text-orange-400 w-5 h-5" /> True Visual Visibility
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Discover How Many Potential Clients Are Searching for Your Photography Services Every Month. Click below to initiate an automated audit and diagnostic.
              </p>
              
              <div className="pt-4">
                <Link 
                  to="/resources"
                  className="inline-flex w-full items-center justify-center px-6 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 text-white font-bold transition-all text-xs"
                >
                  Get Your Free SEO Audit
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
              The Problem: Great Photographers Are Invisible Online
            </h2>
            <p className="text-gray-400 text-sm md:text-base">
              Many talented photographers struggle to generate consistent inquiries despite producing exceptional work. The challenge isn't the quality of your photography. The challenge is visibility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">When potential clients search for:</h3>
              <ul className="space-y-3">
                {[
                  "Wedding photographer near me",
                  "Family photographer in [city]",
                  "Corporate headshot photographer",
                  "Commercial photography services",
                  "Engagement photographer"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs text-gray-300 font-medium bg-white/[0.01] border border-white/5 p-4 rounded-xl">
                    <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-550 text-gray-400 leading-relaxed italic">
                They typically choose businesses that appear on the first page of Google. If your website isn't ranking, you're losing opportunities to competitors who may not be better photographers—but have better search visibility.
              </p>
            </div>

            <div className="glass-morphism border border-white/5 p-8 rounded-2xl space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-400" /> Common challenges photographers face include:
              </h3>
              
              <div className="space-y-4">
                {[
                  {
                    title: "Lack of Consistent Leads",
                    text: "Many photographers experience seasonal fluctuations and depend heavily on referrals."
                  },
                  {
                    title: "Over-Reliance on Social Media",
                    text: "Social platforms can generate engagement, but algorithm changes can dramatically reduce visibility overnight."
                  },
                  {
                    title: "Poor Local Search Rankings",
                    text: "Photography is highly location-based. If your website isn't optimized for local searches, potential clients may never find you."
                  },
                  {
                    title: "Website Traffic That Doesn't Convert",
                    text: "Even photographers receiving traffic often struggle to turn visitors into inquiries due to poor user experience and weak conversion optimization."
                  },
                  {
                    title: "Increasing Competition",
                    text: "Photography markets continue to become more competitive, making SEO essential for long-term growth."
                  }
                ].map((challenge, idx) => (
                  <div key={idx} className="border-l-2 border-red-500/30 pl-4 space-y-1">
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider">{challenge.title}</h4>
                    <p className="text-xs text-gray-400">{challenge.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
              The Solution: SEO Services Built Specifically for Photographers
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              As an experienced SEO company for photographers, we understand how photography clients search, compare options, and choose providers. Our approach combines technical SEO, local SEO, content strategy, conversion optimization, and authority building to help your website become a lead-generation asset.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
            {/* Step 1 */}
            <div className="glass-morphism border border-white/5 p-6 rounded-2xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 font-extrabold text-sm">
                01
              </div>
              <h4 className="text-lg font-bold text-white">Photography SEO Audit</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                We analyze your website's current performance, rankings, technical issues, content gaps, and competitor landscape. Our{' '}
                <Link to="/portfolio" className="text-orange-400 hover:text-orange-300 font-bold underline">
                  portfolio showcase structures
                </Link>{' '}
                assess search bot capabilities for image indexation.
              </p>
            </div>

            {/* Step 2 */}
            <div className="glass-morphism border border-white/5 p-6 rounded-2xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 font-extrabold text-sm">
                02
              </div>
              <h4 className="text-lg font-bold text-white">Keyword Research</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                We identify high-intent search terms that potential clients use when looking for photography services. Examples include wedding photographer, family photographer, maternity photographer, personal branding photographer, event photographer, photography studio, and engagement photography.
              </p>
            </div>

            {/* Step 3 */}
            <div className="glass-morphism border border-white/5 p-6 rounded-2xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 font-extrabold text-sm">
                03
              </div>
              <h4 className="text-lg font-bold text-white">Local SEO Optimization</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                We optimize your Google Business Profile, local citations, location pages, and local authority signals. Check out how setting a custom{' '}
                <Link to="/pricing/local-seo-strategy" className="text-orange-400 hover:text-orange-300 font-bold underline">
                  local map pack strategy
                </Link>{' '}
                helps capture regional terms out of neighboring towns.
              </p>
              <div className="pt-2">
                <a href="https://support.google.com/business" target="_blank" rel="noreferrer" className="text-[10px] text-amber-300 uppercase tracking-wider font-bold inline-flex items-center gap-1 hover:underline">
                  Official Google Business Support <Globe className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Step 4 */}
            <div className="glass-morphism border border-white/5 p-6 rounded-2xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 font-extrabold text-sm">
                04
              </div>
              <h4 className="text-lg font-bold text-white">Content Strategy</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                We create content that answers client questions and captures searches throughout the buying journey. Browse our latest insights on the{' '}
                <Link to="/blog" className="text-orange-400 hover:text-orange-300 font-bold underline">
                  SEO blogs and guides
                </Link>{' '}
                to get actionable visual-centric content formats.
              </p>
            </div>

            {/* Step 5 */}
            <div className="glass-morphism border border-white/5 p-6 rounded-2xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 font-extrabold text-sm">
                05
              </div>
              <h4 className="text-lg font-bold text-white">Technical SEO</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                We improve website speed, mobile performance, site architecture, indexing, and user experience. High-res photo compression is handled efficiently using advanced layouts tailored with our{' '}
                <Link to="/pricing/web-dev-packages" className="text-orange-400 hover:text-orange-300 font-bold underline">
                  custom web development packages
                </Link>.
              </p>
            </div>

            {/* Step 6 */}
            <div className="glass-morphism border border-white/5 p-6 rounded-2xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 font-extrabold text-sm">
                06
              </div>
              <h4 className="text-lg font-bold text-white">Link Building & Authority</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                We help strengthen your website's authority through ethical, long-term link acquisition strategies to command higher rankings on competitive local domains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Experience / Growth Opportunities */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Real-World Experience Helping Service Businesses Grow Through SEO
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Successful SEO for photographers goes beyond simply adding keywords to a website. We've seen common growth opportunities across photography businesses:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/[0.01] border border-white/5 p-6 rounded-2xl space-y-3">
              <h3 className="font-bold text-white text-lg flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-300" /> Wedding Photographers
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Often benefit from location-focused landing pages targeting venues, cities, and wedding-related searches.
              </p>
            </div>

            <div className="bg-white/[0.01] border border-white/5 p-6 rounded-2xl space-y-3">
              <h3 className="font-bold text-white text-lg flex items-center gap-2">
                <MapPin className="w-5 h-5 text-orange-400" /> Family Photographers
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Can generate consistent leads through local SEO and seasonal content strategies designed for families.
              </p>
            </div>

            <div className="bg-white/[0.01] border border-white/5 p-6 rounded-2xl space-y-3">
              <h3 className="font-bold text-white text-lg flex items-center gap-2">
                <Globe className="w-5 h-5 text-teal-400" /> Commercial Photographers
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Typically achieve strong results by targeting industry-specific keywords and showcasing expertise through case-study content.
              </p>
            </div>

            <div className="bg-white/[0.01] border border-white/5 p-6 rounded-2xl space-y-3">
              <h3 className="font-bold text-white text-lg flex items-center gap-2">
                <Camera className="w-5 h-5 text-blue-400" /> Photography Studios
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Benefit from comprehensive local SEO campaigns that increase visibility in map results and local searches.
              </p>
            </div>

            <div className="bg-white/[0.01] border border-white/5 p-6 rounded-2xl space-y-3">
              <h3 className="font-bold text-white text-lg flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" /> Personal Branding Specialists
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Can attract business owners, entrepreneurs, and professionals through educational content and targeted service pages. Compare our{' '}
                <Link to="/industry/seo-services-for-fashion-industry" className="text-orange-400 hover:text-orange-300 underline font-semibold">
                  fashion industry SEO strategies
                </Link>{' '}
                to expand your personal portfolio model!
              </p>
            </div>

            <div className="bg-white/[0.01] border border-white/5 p-6 rounded-2xl flex flex-col justify-between border-dashed border-white/20">
              <div className="p-6 text-center space-y-4">
                <h4 className="text-sm font-bold text-white">Need a platform-specific setup?</h4>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  Whether your portfolio runs on a{' '}
                  <Link to="/services/cms-seo/wordpress-seo-expert" className="hover:text-orange-400 underline font-bold">WordPress site</Link> or{' '}
                  <Link to="/services/cms-seo/squarespace-seo-expert" className="hover:text-orange-400 underline font-bold">Squarespace site</Link> or even with e-commerce options via{' '}
                  <Link to="/services/cms-seo/shopify-seo-expert" className="hover:text-orange-400 underline font-bold">Shopify</Link>, we adapt our technical stack directly.
                </p>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-400 text-center mt-12 bg-slate-900/40 py-3 px-6 border border-white/5 rounded-xl max-w-2xl mx-auto font-medium">
            These practical strategies help photographers create predictable lead-generation systems rather than relying solely on referrals.
          </p>
        </div>
      </section>

      {/* Features & Benefits Matrix */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
              Features and Benefits of Our Photography SEO Services
            </h2>
            <p className="text-gray-400 text-sm">Engineered bottom-up for high precision visual brands.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-morphism border border-white/5 p-6 rounded-2xl space-y-3">
              <h4 className="text-lg font-bold text-white">Comprehensive SEO Audits</h4>
              <div>
                <span className="text-xs text-orange-400 font-bold block">Feature:</span>
                <p className="text-xs text-gray-300">Detailed technical and content analysis.</p>
              </div>
              <div className="pt-2">
                <span className="text-xs text-amber-350 text-amber-350 font-bold block">Benefit:</span>
                <p className="text-xs text-gray-400">Identify hidden issues preventing your website from ranking.</p>
              </div>
            </div>

            <div className="glass-morphism border border-white/5 p-6 rounded-2xl space-y-3">
              <h4 className="text-lg font-bold text-white">Local SEO Optimization</h4>
              <div>
                <span className="text-xs text-orange-400 font-bold block">Feature:</span>
                <p className="text-xs text-gray-300">Google Business Profile optimization and local search enhancements.</p>
              </div>
              <div className="pt-2">
                <span className="text-xs text-amber-350 text-amber-350 font-bold block">Benefit:</span>
                <p className="text-xs text-gray-400">Appear in local searches where clients are actively looking for photographers.</p>
              </div>
            </div>

            <div className="glass-morphism border border-white/5 p-6 rounded-2xl space-y-3">
              <h4 className="text-lg font-bold text-white">Keyword Research</h4>
              <div>
                <span className="text-xs text-orange-400 font-bold block">Feature:</span>
                <p className="text-xs text-gray-300">Targeted photography-specific keyword analysis.</p>
              </div>
              <div className="pt-2">
                <span className="text-xs text-amber-350 text-amber-350 font-bold block">Benefit:</span>
                <p className="text-xs text-gray-400">Attract visitors with genuine booking intent.</p>
              </div>
            </div>

            <div className="glass-morphism border border-white/5 p-6 rounded-2xl space-y-3">
              <h4 className="text-lg font-bold text-white">Content Creation</h4>
              <div>
                <span className="text-xs text-orange-400 font-bold block">Feature:</span>
                <p className="text-xs text-gray-300">SEO-optimized service pages, blogs, and location pages.</p>
              </div>
              <div className="pt-2">
                <span className="text-xs text-amber-350 text-amber-350 font-bold block">Benefit:</span>
                <p className="text-xs text-gray-450 leading-relaxed text-gray-400">
                  Increase organic traffic while building trust with potential clients. We analyze layouts across key{' '}
                  <Link to="/portfolio" className="text-orange-400 hover:text-orange-300 underline">
                    organic portfolio elements
                  </Link>.
                </p>
              </div>
            </div>

            <div className="glass-morphism border border-white/5 p-6 rounded-2xl space-y-3">
              <h4 className="text-lg font-bold text-white">Conversion Rate Optimization</h4>
              <div>
                <span className="text-xs text-orange-400 font-bold block">Feature:</span>
                <p className="text-xs text-gray-300">Improved website structure, calls-to-action, and inquiry funnels.</p>
              </div>
              <div className="pt-2">
                <span className="text-xs text-amber-350 text-amber-350 font-bold block">Benefit:</span>
                <p className="text-xs text-gray-450 leading-relaxed text-gray-400">
                  Convert more visitors into paying clients. Review details under our complete range of{' '}
                  <Link to="/pricing" className="text-orange-400 hover:text-orange-300 underline">
                    pricing solutions
                  </Link>.
                </p>
              </div>
            </div>

            <div className="glass-morphism border border-white/5 p-6 rounded-2xl space-y-3">
              <h4 className="text-lg font-bold text-white">Ongoing SEO Management</h4>
              <div>
                <span className="text-xs text-orange-400 font-bold block">Feature:</span>
                <p className="text-xs text-gray-300">Continuous monitoring, optimization, and reporting.</p>
              </div>
              <div className="pt-2">
                <span className="text-xs text-amber-350 text-amber-350 font-bold block">Benefit:</span>
                <p className="text-xs text-gray-400">Sustainable growth and long-term search visibility.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Photography SEO Requires Industry Expertise */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                Why Photography SEO Requires Industry Expertise
              </h2>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Not all SEO agencies understand the unique challenges photographers face. Photography SEO involves balancing page speed and heavy high-res visual assets. A generic SEO campaign often misses these critical factors.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Visual portfolios",
                  "Image optimization",
                  "Local rankings",
                  "Seasonal demand",
                  "Service-specific searches",
                  "Geographic targeting",
                  "User experience"
                ].map((item, id) => (
                  <div key={id} className="flex items-center gap-2.5 text-xs text-gray-300 font-bold bg-white/[0.02] border border-white/5 p-3 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <p className="text-xs text-gray-500 leading-relaxed pt-2">
                Our team understands how photography buyers research vendors and what influences their decision-making process. Review our details at{' '}
                <a href="https://www.thinkwithgoogle.com" target="_blank" rel="noreferrer" className="text-orange-400 hover:text-orange-300 underline font-semibold">
                  Think With Google insights
                </a>{' '}
                for standard customer journey benchmarks.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-transparent rounded-3xl blur-2xl"></div>
              <div className="relative p-8 rounded-3xl border border-orange-500/20 bg-slate-950/80 space-y-4">
                <div className="inline-flex px-3 py-1 bg-orange-500 text-black text-[10px] font-black uppercase rounded-full tracking-wide">
                  Expert Insight
                </div>
                <blockquote className="text-lg font-semibold text-white leading-relaxed italic">
                  "Many photographers focus heavily on image quality while overlooking search intent."
                </blockquote>
                <div className="border-t border-white/10 pt-4 space-y-2">
                  <p className="text-sm font-bold text-orange-400">The reality is simple:</p>
                  <p className="text-xs text-gray-350 text-gray-400 leading-relaxed">
                    Potential clients must find your website before they can appreciate your work. That's why SEO should align both visibility and conversion optimization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted SEO Strategies Built for Long-Term Results */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Trusted SEO Strategies Built for Long-Term Results
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                title: "Transparent Reporting",
                text: "You'll receive clear reporting on rankings, traffic, leads, and campaign progress."
              },
              {
                title: "Ethical SEO Practices",
                text: "We follow search engine best practices and avoid risky tactics that could harm your website. Read our reference at Search Engine Land updates.",
                linkHref: "https://searchengineland.com"
              },
              {
                title: "Customized Strategies",
                text: "No two photography businesses are identical. Every campaign is tailored to your goals, services, and target market."
              },
              {
                title: "Clear Communication",
                text: "You'll always know what work is being completed and why it matters."
              },
              {
                title: "Realistic Expectations",
                text: "SEO is a long-term investment. We provide honest timelines and realistic growth projections rather than making unrealistic promises."
              }
            ].map((strategy, idx) => (
              <div key={idx} className="bg-slate-900/40 border border-white/5 p-6 rounded-2xl space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <h4 className="text-sm font-black text-white uppercase tracking-wider">{strategy.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{strategy.text}</p>
                </div>
                {strategy.linkHref && (
                  <div className="pt-2 border-t border-white/5">
                    <a href={strategy.linkHref} target="_blank" rel="noreferrer" className="text-[10px] text-orange-400 underline font-bold inline-flex items-center gap-0.5">
                      Check Search Engine Land <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 px-4 md:px-6 relative border-b border-white/5 bg-slate-950/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              What Makes Our SEO Company for Photographers Different?
            </h2>
            <p className="text-gray-400 text-xs">
              Many agencies offer SEO. Few understand photography businesses.
            </p>
          </div>

          <div className="border border-white/10 rounded-2xl overflow-hidden shadow-2xl glass-morphism">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 border-b border-white/15">
                  <th className="p-4 text-xs font-bold text-slate-300 uppercase tracking-widest">Typical Theme & Setup</th>
                  <th className="p-4 text-xs font-bold text-orange-400 uppercase tracking-widest border-l border-white/10">Our Hotel & Photo Approach</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs text-gray-300">
                {[
                  { k: "We Focus on Revenue, Not Just Rankings", v: "Higher rankings matter only when they generate inquiries and bookings." },
                  { k: "Industry-Specific SEO Strategies", v: "We understand how clients search for photographers and how to position your services effectively." },
                  { k: "Local SEO Expertise", v: "Photography businesses depend heavily on geographic visibility." },
                  { k: "Conversion Optimization Included", v: "Traffic alone isn't enough. We focus on turning visitors into leads." },
                  { k: "Long-Term Growth Approach", v: "Our strategies build sustainable visibility rather than temporary ranking spikes." },
                  { k: "Personalized Support", v: "You'll work with experienced SEO professionals who understand your business goals." }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.01] transition-colors">
                    <td className="p-4 font-semibold text-white">{row.k}</td>
                    <td className="p-4 text-gray-400 border-l border-white/10 flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                      {row.v}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
                q: "How long does SEO take for photographers?",
                a: "Most photographers begin seeing measurable improvements within 3–6 months, while significant growth often occurs between 6–12 months depending on competition and website history."
              },
              {
                q: "Is SEO better than paid advertising?",
                a: "Both can be effective. SEO provides long-term organic visibility, while paid advertising generates immediate traffic. Many successful photographers use both strategies together."
              },
              {
                q: "Can local photographers benefit from SEO?",
                a: "Absolutely. Local SEO is often one of the highest-ROI marketing channels for photographers because clients typically search within specific geographic areas."
              },
              {
                q: "Do you work with wedding photographers?",
                a: "Yes. We work with wedding photographers, portrait photographers, family photographers, newborn photographers, event photographers, commercial photographers, and photography studios."
              },
              {
                q: "What if I already have a website?",
                a: "That's perfectly fine. We can optimize your existing website and identify opportunities for improved rankings and conversions."
              },
              {
                q: "Do you guarantee first-page rankings?",
                a: "No ethical SEO company can guarantee specific rankings. Search algorithms constantly evolve. We focus on implementing proven SEO strategies that maximize your chances of success."
              },
              {
                q: "How do you measure SEO success?",
                a: "We track rankings, organic traffic, inquiries, lead quality, conversions, and overall business growth generated through organic search."
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(249,115,22,0.1),transparent_60%)] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <div className="w-16 h-16 bg-orange-500/15 border border-orange-500/20 text-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Camera className="w-8 h-8" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Ready to Grow Your Photography Business?
          </h2>

          <div className="space-y-4 max-w-3xl mx-auto text-sm md:text-base text-gray-300 leading-relaxed font-semibold">
            <p className="font-bold text-white text-base">Your ideal clients are already searching online for photography services.</p>
            <p>The question is whether they're finding your website—or your competitors'.</p>
            <p>
              As a dedicated SEO company for photographers, we help photography businesses build sustainable visibility, generate qualified leads, and increase bookings through proven search engine optimization strategies.
            </p>
            <p className="text-xs text-orange-400 uppercase tracking-widest pt-2">
              Whether you're a wedding photographer, portrait specialist, commercial photographer, or multi-location photography studio, our team can help you create a long-term growth engine that delivers results.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-white/5 p-6 rounded-2xl max-w-2xl mx-auto space-y-4">
            <h4 className="text-orange-400 font-extrabold tracking-wide text-sm uppercase">
              Schedule Your Free SEO Consultation Today
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Discover what's holding your website back, uncover new growth opportunities, and get a customized SEO roadmap designed specifically for your photography business.
            </p>
          </div>

          <div className="pt-4">
            <button
              onClick={onBook}
              className="inline-flex items-center justify-center px-10 py-5 rounded-xl text-black bg-gradient-to-r from-orange-400 to-amber-400 hover:from-orange-500 hover:to-amber-500 font-extrabold tracking-wider uppercase text-sm shadow-xl shadow-orange-500/20 transition-all duration-300 hover:scale-105"
            >
              Book Your Free SEO Strategy Session
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhotographerSEOPage;
