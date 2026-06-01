import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  XCircle, 
  Search, 
  ArrowRight, 
  ShoppingBag, 
  Activity, 
  Sparkles, 
  Layers, 
  Cpu, 
  Globe, 
  ChevronDown, 
  Star, 
  Award, 
  TrendingUp, 
  Zap,
  Image as ImageIcon
} from 'lucide-react';
import SEO from '../components/SEO';

interface FashionSEOProps {
  onBook: (e?: React.MouseEvent) => void;
}

const FashionSEOPage: React.FC<FashionSEOProps> = ({ onBook }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const challenges = [
    { title: "Low organic visibility", desc: "Your site buried under countless generic search results." },
    { title: "Heavy dependence on paid ads", desc: "Eating away profit margins as PPC costs continuously rise." },
    { title: "Seasonal traffic fluctuations", desc: "Revenue drops when seasons shift and inventories change." },
    { title: "Poor rankings for product keywords", desc: "Specific product queries fail to bring traffic to your store." },
    { title: "Duplicate content issues", desc: "Identical descriptions across sizes, colors, and cuts." },
    { title: "Weak category page optimization", desc: "Unoptimized collection hubs miss high-volume searches." },
    { title: "Limited brand authority", desc: "Struggling to build trusted topical signals in Google's eyes." },
    { title: "High competition from major retailers", desc: "Going up against massive multi-brand department chain giants." },
    { title: "Declining return on ad spend (ROAS)", desc: "Organic foundation is vital as social and search advertising costs soar." }
  ];

  const services = [
    {
      title: "Fashion Keyword Research",
      desc: "We identify high-intent search terms customers use when shopping for: Women's fashion, Men's apparel, Luxury fashion, Sustainable clothing, Streetwear, Activewear, Designer brands, Fashion accessories, and Seasonal collections. This ensures your website targets keywords that drive purchasing intent rather than just traffic."
    },
    {
      title: "Technical SEO Optimization",
      desc: "Fashion websites often contain thousands of products, categories, filters, and collections. We optimize: Site architecture, Crawlability, Core Web Vitals, Mobile usability, Internal linking, Indexation, Structured data, and Faceted navigation. This helps search engines understand and rank your content more effectively."
    },
    {
      title: "Category Page SEO",
      desc: "Category pages often represent the highest revenue opportunities for fashion retailers. We optimize collection pages, product categories, seasonal categories, brand pages, and style guides. These pages frequently generate significantly more traffic than individual product pages."
    },
    {
      title: "Product Page SEO",
      desc: "We improve product descriptions, schema markup, image optimization, metadata, user experience signals, and conversion elements. The result is stronger visibility and better conversion rates."
    },
    {
      title: "Content Marketing for Fashion Brands",
      desc: "We create content that supports every stage of the buyer journey, including fashion trend guides, styling tips, seasonal lookbooks, buying guides, sustainability content, designer spotlights, and fashion care guides. This helps attract traffic while building topical authority."
    }
  ];

  const featuresBenefits = [
    {
      title: "Comprehensive SEO Audits",
      feature: "Detailed analysis of your website.",
      benefit: "Identify ranking obstacles and growth opportunities quickly."
    },
    {
      title: "Fashion-Specific Keyword Strategy",
      feature: "Industry-focused keyword research.",
      benefit: "Attract buyers actively searching for fashion products."
    },
    {
      title: "On-Page SEO Optimization",
      feature: "Optimization of categories, collections, and product pages.",
      benefit: "Increase visibility for revenue-generating keywords."
    },
    {
      title: "Technical SEO Improvements",
      feature: "Performance, indexing, and site structure optimization.",
      benefit: "Improve rankings and user experience."
    },
    {
      title: "Content Strategy Development",
      feature: "Fashion-focused content planning.",
      benefit: "Build authority and attract long-term organic traffic."
    },
    {
      title: "Link Building & Digital PR",
      feature: "Authority-building campaigns.",
      benefit: "Increase trust and improve competitive rankings."
    }
  ];

  const faqs = [
    {
      question: "How long does fashion SEO take?",
      answer: "Most fashion brands begin seeing measurable improvements within 3-6 months, with significant growth typically occurring between 6-12 months."
    },
    {
      question: "Can SEO help reduce reliance on paid advertising?",
      answer: "Yes. Strong organic rankings can generate consistent traffic and sales without ongoing ad spend increases."
    },
    {
      question: "Do you work with fashion eCommerce stores?",
      answer: "Absolutely. We work with clothing brands, fashion retailers, boutiques, luxury brands, and apparel eCommerce businesses."
    },
    {
      question: "Can you optimize Shopify fashion stores?",
      answer: "Yes. We provide SEO services for Shopify, WooCommerce, Magento, BigCommerce, and custom eCommerce platforms."
    },
    {
      question: "Is SEO worth it for small fashion brands?",
      answer: "Yes. SEO helps emerging brands compete by targeting niche and high-intent keywords that larger competitors may overlook."
    },
    {
      question: "Do you provide content creation?",
      answer: "Yes. We create fashion-focused content strategies and content assets designed to improve rankings and build authority."
    },
    {
      question: "How do you measure success?",
      answer: "We track organic traffic, keyword rankings, revenue growth, conversion rates, lead generation, and return on investment."
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white overflow-hidden font-sans">
      <SEO 
        title="SEO Services for Fashion Industry | Grow Your Fashion Brand"
        description="Grow your fashion brand with specialized fashion SEO services. Increase organic ecommerce traffic, drive categories and product sales on Shopify or WooCommerce, and build brand authority."
        keywords="seo services for fashion industry, fashion seo, ecommerce fashion seo, apparel brand seo, clothing boutique seo"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 md:px-6 overflow-hidden border-b border-white/5">
        {/* Elegant haute-couture ambient glow (champagne/rose-gold hues) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(236,72,153,0.12),transparent_70%)] pointer-events-none"></div>
        <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-pink-500/5 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-pink-500/10 border border-pink-500/20 rounded-full text-pink-400 text-[10px] font-black uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-pink-500" />
              Haute Couture Search Dominance
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase italic tracking-tighter leading-[0.9] text-white">
              SEO Services for <span className="text-pink-550 text-pink-500 block sm:inline">Fashion Industry</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 font-extrabold leading-tight tracking-tight">
              Grow Your Fashion Brand with SEO Services for Fashion Industry
            </p>

            <p className="text-lg text-gray-300 font-semibold leading-relaxed">
              Increase Organic Traffic, Drive More Sales, and Build a Fashion Brand Customers Discover Naturally.
            </p>

            <p className="text-sm md:text-base text-gray-400 font-normal leading-relaxed">
              Fashion brands operate in one of the most competitive online markets. Whether you're a clothing brand, luxury fashion label, sustainable apparel company, fashion retailer, boutique, or eCommerce store, our specialized SEO services for fashion industry businesses help you attract high-intent shoppers and turn search traffic into revenue.
              <br /><br />
              Get a customized SEO strategy designed specifically for fashion brands and online retailers. Let's position your collections exactly where modern buyers perform fashion discovery, using custom <Link to="/services" className="text-pink-400 hover:text-pink-300 font-bold underline">organic SEO services</Link> specifically aligned with global buyer intent.
            </p>

            <div className="pt-4">
              <button 
                onClick={onBook}
                className="px-8 py-5 bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-500 hover:to-pink-400 text-white font-black rounded-2xl transition-all shadow-2xl shadow-pink-500/30 uppercase tracking-tight text-base flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>Book Your Free Fashion SEO Strategy Session</span>
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
              <h3 className="text-xl font-black uppercase italic tracking-tight mb-4 text-pink-400 flex items-center gap-2">
                <ShoppingBag className="w-5 h-5" /> Brand Discovery Framework
              </h3>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                Unlock steady visual and text acquisition cycles. To start planning your organic growth metrics, explore our localized frameworks via our <Link to="/pricing" className="text-pink-400 hover:text-pink-300 font-semibold underline">global SEO services pricing</Link> structures, or measure your active boutique authority across our geographic hubs in the <Link to="/locations" className="text-pink-400 hover:text-pink-300 font-semibold underline">service area network</Link>.
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-400 shrink-0">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white uppercase tracking-tight">Topical eCommerce Authority</h4>
                    <p className="text-xs text-gray-400 mt-1">We align collection pages and structural schemas directly to target high-intent buying segments.</p>
                  </div>
                </div>

                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white uppercase tracking-tight">Structured Metadata Precision</h4>
                    <p className="text-xs text-gray-400 mt-1">We implement standard JSON-LD markups to help crawl engines fully contextualize product catalogs.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Why Most Fashion Brands Struggle to Rank Online */}
      <section className="py-24 px-4 md:px-6 relative bg-gradient-to-b from-[#030712] to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs text-red-500 font-black tracking-widest uppercase">The Bottlenecks</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mt-2 mb-4">
              Why Most Fashion Brands Struggle to Rank Online
            </h2>
            <p className="text-gray-400 text-sm font-semibold">
              The fashion industry is incredibly crowded. New clothing brands, boutiques, designers, and eCommerce stores compete daily for visibility across Google, AI search engines, social commerce, and marketplaces.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Block: Description with embedded links */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-2xl font-black uppercase italic text-pink-400 tracking-tight leading-none">
                High Competition, Low Organic Visibility
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed font-semibold">
                Many fashion businesses invest heavily in beautiful websites and product photography but overlook search visibility. The result? Potential customers are actively searching for products you sell, but competitors appear first.
              </p>
              <p className="text-xs text-gray-400 leading-relaxed">
                Without a strong SEO strategy, your fashion brand misses valuable traffic, sales, and long-term growth opportunities. Integrating solid optimizations via standard Content Management Systems is vital: read more on our <Link to="/services/cms-seo/shopify-seo-expert" className="text-pink-400 hover:text-pink-300 font-bold underline">Shopify fashion SEO expertise</Link> setups, compare our <Link to="/services/cms-seo/woocommerce-seo-expert" className="text-pink-400 hover:text-pink-300 font-bold underline">WooCommerce SEO configurations</Link>, or examine lightweight options on our <Link to="/services/cms-seo/squarespace-seo-expert" className="text-pink-400 hover:text-pink-300 font-bold underline">Squarespace SEO setup</Link> checklist.
              </p>
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span className="text-xs text-gray-300">
                  Dependence on pay-per-click ads shrinks margins permanently. Transition your store into an organic traffic powerhouse today.
                </span>
              </div>
            </div>

            {/* Right Block: Dynamic grid of 9 Challenges */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {challenges.map((c, idx) => (
                <div key={idx} className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-red-500/20 transition-all flex flex-col justify-between">
                  <div>
                    <span className="text-red-500 font-black text-xs block mb-1">✕ {idx + 1}</span>
                    <h4 className="text-sm font-black text-white uppercase tracking-tight">{c.title}</h4>
                    <p className="text-xs text-gray-400 mt-1">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Fashion SEO Services Designed to Increase Revenue */}
      <section className="py-24 px-4 md:px-6 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs text-pink-500 font-black tracking-widest uppercase">Our Methodology</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mt-2 mb-4">
              eCommerce SEO Designed to Increase Revenue
            </h2>
            <p className="text-gray-400 text-sm font-semibold">
              Our SEO services for fashion industry businesses focus on one goal: <strong>Generating qualified traffic that converts into customers.</strong> Instead of chasing vanity metrics, we build sustainable search visibility through proven SEO frameworks tailored specifically to fashion brands.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, idx) => (
              <div 
                key={idx} 
                className={`p-8 bg-[#0b0f19] border border-white/10 rounded-3xl space-y-4 hover:border-pink-500/20 transition-all ${idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="inline-flex p-3 bg-pink-500/10 rounded-xl text-pink-500">
                  {idx === 0 && <Search className="w-5 h-5" />}
                  {idx === 1 && <Cpu className="w-5 h-5" />}
                  {idx === 2 && <Layers className="w-5 h-5" />}
                  {idx === 3 && <ShoppingBag className="w-5 h-5" />}
                  {idx === 4 && <ImageIcon className="w-5 h-5" />}
                </div>
                <h3 className="text-lg font-black uppercase italic text-white tracking-tight">{s.title}</h3>
                <p className="text-xs text-gray-450 leading-relaxed font-semibold">{s.desc}</p>
                {idx === 1 && (
                  <div className="text-[11px] text-gray-400 pt-1 border-t border-white/5 font-bold">
                    Learn how we fix faceted links inside our specialized <Link to="/services/cms-seo" className="text-pink-400 hover:text-pink-300 font-bold underline">CMS SEO Hub Page</Link> configurations.
                  </div>
                )}
                {idx === 3 && (
                  <div className="text-[11px] text-gray-405 text-gray-400 font-semibold pt-1 border-t border-white/5">
                    Align your product pages following <a href="https://schema.org/Product" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 font-extrabold underline">Schema.org Product structural definitions</a> standards.
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Real-World Fashion SEO Experience */}
      <section className="py-24 px-4 md:px-6 bg-[#040815] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs text-pink-500 font-black tracking-widest uppercase">Industry Expertise</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-white">
              Real-World Fashion SEO Experience
            </h2>
            <p className="text-gray-400 text-sm font-semibold">
              SEO for fashion brands is completely different from SEO for local businesses or service companies. Fashion consumers are highly visual, trend-driven, and research extensively before purchasing. Our strategies account for these core behaviors:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Experience Pillar 1 */}
            <div className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl flex flex-col justify-between">
              <div>
                <span className="text-[10px] text-pink-400 font-black tracking-widest uppercase block mb-3">01 / Dynamic Seasons</span>
                <h4 className="text-lg font-black uppercase italic text-white mb-3">Seasonal Demand Trends</h4>
                <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                  Fashion search behavior changes throughout the year, including Summer collections, Winter fashion, Holiday shopping, Back-to-school apparel, and Wedding season fashion. We build SEO campaigns that align with these dynamic demand cycles.
                </p>
              </div>
              <div className="border-t border-white/5 pt-4 mt-6 text-xs text-gray-500 italic">
                Leverage standard platforms such as our custom <Link to="/services/cms-seo/wix-seo-expert" className="text-pink-400 hover:text-pink-300 font-semibold underline">Wix optimization frameworks</Link> to deploy rapid seasonal campaign layers.
              </div>
            </div>

            {/* Experience Pillar 2 */}
            <div className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl flex flex-col justify-between">
              <div>
                <span className="text-[10px] text-pink-400 font-black tracking-widest uppercase block mb-3">02 / Platform Synergy</span>
                <h4 className="text-lg font-black uppercase italic text-white mb-3">Fashion eCommerce Optimization</h4>
                <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                  Successful fashion SEO requires balancing user experience, brand storytelling, product discovery, and search engine visibility. We help fashion brands maintain premium branding while systematically improving rankings.
                </p>
              </div>
              <div className="border-t border-white/5 pt-4 mt-6 text-xs text-gray-500 italic">
                Follow best-practices summarized in <a href="https://developers.google.com/search/docs/specialty/ecommerce" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 font-semibold underline">Google's official Ecommerce SEO guide</a> to protect your branding integrity.
              </div>
            </div>

            {/* Experience Pillar 3 */}
            <div className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl flex flex-col justify-between">
              <div>
                <span className="text-[10px] text-pink-400 font-black tracking-widest uppercase block mb-3">03 / Content Moats</span>
                <h4 className="text-lg font-black uppercase italic text-white mb-3">Fashion Content Ecosystems</h4>
                <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                  Rather than publishing random blog posts, we create interconnected content hubs that support rankings across fashion trends, product categories, style advice, and brand expertise. This creates stronger topical authority over time.
                </p>
              </div>
              <div className="border-t border-white/5 pt-4 mt-6 text-xs text-gray-500 italic">
                See real-world content hub patterns we have built on our <Link to="/portfolio" className="text-pink-400 hover:text-pink-300 font-semibold underline">case studies and success portfolio</Link> dashboard pages.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Features and Benefits of Our Fashion SEO Services */}
      <section className="py-24 px-4 md:px-6 relative bg-gradient-to-b from-[#030712] to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs text-pink-400 font-black tracking-widest uppercase">The Pillars</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-white">
              Features and Benefits of Our Fashion SEO Services
            </h2>
            <p className="text-gray-400 text-sm font-semibold">An end-to-end framework built for retail scalability:</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuresBenefits.map((fb, idx) => (
              <div key={idx} className="bg-[#0b101c] border border-white/10 hover:border-pink-500/30 transition-all rounded-3xl p-6 flex flex-col justify-between space-y-4">
                <div>
                  <h4 className="text-base font-black uppercase italic text-white tracking-wider">{fb.title}</h4>
                  <div className="text-xs text-pink-400 font-extrabold uppercase mt-2">Feature: {fb.feature}</div>
                </div>
                <div className="pt-2 border-t border-white/5">
                  <span className="text-xs text-gray-450 block font-semibold">Benefit: {fb.benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Why Fashion Brands Choose Specialized SEO Experts */}
      <section className="py-24 px-4 md:px-6 bg-[#050914] relative border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Block: Approach description */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs text-pink-500 font-black tracking-widest uppercase">The Standard</span>
              <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-white">
                Why Choose Specialized Fashion SEO
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed font-semibold">
                General SEO agencies often apply the same strategy across every industry. Fashion businesses require specialized expertise because of:
              </p>

              <div className="grid grid-cols-2 gap-4 text-xs font-bold text-gray-300">
                <div className="p-3 bg-white/5 rounded-xl border border-white/5">• Large inventories</div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5">• Seasonal shifts</div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5">• Visual queries</div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5">• Fast market steps</div>
              </div>

              <p className="text-xs text-gray-400 leading-relaxed">
                An effective fashion SEO strategy must understand both search engine algorithms and fashion consumer behavior. Our team combines technical SEO expertise with practical eCommerce growth experience. Learn more about our values on the <Link to="/about" className="text-pink-400 hover:text-pink-300 font-semibold underline">agency About page</Link>.
              </p>
            </div>

            {/* Right Block: Core Web Vitals and Tech Audit Visual Unit */}
            <div className="lg:col-span-7 bg-[#0b0f19] border border-white/10 rounded-3xl p-8 space-y-6">
              <span className="text-[10px] text-pink-400 font-black uppercase tracking-wider block">Retail Performance Optimization</span>
              <h3 className="text-xl font-black uppercase italic text-white tracking-tight">Core Technical Vitals Core</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Slow platforms bleed customers during Checkout phases. We align rendering parameters with extreme speed.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl flex items-center justify-between">
                  <div>
                    <span className="text-xs font-black uppercase text-blue-400 block">Performance Loading Analyzer</span>
                    <p className="text-xs text-gray-400 mt-1">Audit speed values instantly via the external tool.</p>
                  </div>
                  <a href="https://pagespeed.web.dev" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 rounded-lg text-xs font-bold uppercase transition-colors shrink-0">
                    Verify Speed
                  </a>
                </div>

                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                  <span className="text-xs font-black uppercase text-pink-400 block">Organic Search vs PPC Allocation</span>
                  <p className="text-xs text-gray-400 mt-1 mt-0.5">
                    Structure campaigns accurately by balancing both channels. Study budget structures on our <Link to="/pricing/google-ads-sem" className="text-pink-400 hover:text-pink-300 font-bold underline">Google Ads and paid acquisition plans</Link> portal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Trust Signals That Matter */}
      <section className="py-24 px-4 md:px-6 relative bg-[#040814]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs text-pink-450 text-pink-550 text-pink-500 font-black tracking-widest uppercase">The Validation</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-white">
              Trust Signals That Matter
            </h2>
            <p className="text-gray-400 text-sm font-semibold">Commitment to transparency and ethical performance standards:</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Testimonials */}
            <div className="bg-[#0b101c] p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black text-pink-400 uppercase block mb-3 font-sans">01 / Testimonials</span>
                <div className="flex gap-1 text-pink-500 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-pink-500" />)}
                </div>
                <div className="space-y-3">
                  <p className="text-xs text-gray-300 italic leading-relaxed font-semibold">
                    "Organic revenue increased by 126% within 12 months after implementing the SEO strategy."
                  </p>
                  <p className="text-xs text-gray-300 italic leading-relaxed font-semibold">
                    "Our collection pages began ranking for competitive terms, reducing paid ad dependency."
                  </p>
                  <p className="text-xs text-gray-300 italic leading-relaxed font-semibold">
                    "SEO became our highest ROI channel."
                  </p>
                </div>
              </div>
              <span className="text-[9px] text-gray-500 uppercase font-black block mt-4">— Verified Brand Owners</span>
            </div>

            {/* Transparent Reporting */}
            <div className="bg-[#0b101c] p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black text-pink-400 uppercase block mb-3">02 / Reporting</span>
                <p className="text-xs text-gray-300 leading-relaxed font-semibold">
                  You'll receive detailed monthly reporting, clear keyword tracking, traffic analysis, conversion insights, and concrete action plans. No hidden metrics. No confusing reports. Just measurable business outcomes.
                </p>
              </div>
              <span className="text-[9px] text-gray-500 uppercase font-black block mt-4">— Complete Accountability</span>
            </div>

            {/* Ethical SEO Practices */}
            <div className="bg-[#0b101c] p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black text-pink-400 uppercase block mb-3">03 / Ethical</span>
                <p className="text-xs text-gray-300 leading-relaxed font-semibold">
                  We follow proven SEO methodologies aligned with search engine guidelines. We do not use spam links, keyword stuffing, manipulative tactics, or black-hat SEO shortcuts. Our focus is long-term growth.
                </p>
              </div>
              <span className="text-[9px] text-gray-500 uppercase font-black block mt-4">— Search Compliant Strategy</span>
            </div>

            {/* Honest Expectations */}
            <div className="bg-[#0b101c] p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black text-pink-400 uppercase block mb-3">04 / Expectations</span>
                <p className="text-xs text-gray-300 leading-relaxed font-semibold">
                  SEO is not an overnight solution. While some improvements may occur quickly, meaningful growth typically develops over several months. We believe transparency builds stronger client relationships and better long-term outcomes.
                </p>
              </div>
              <span className="text-[9px] text-gray-500 uppercase font-black block mt-4">— Data-Driven Timelines</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: What Makes Our SEO Services for Fashion Industry Businesses Different */}
      <section className="py-24 px-4 md:px-6 relative bg-gradient-to-b from-black to-[#030712] border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs text-pink-500 font-black tracking-widest uppercase">Comparison</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-white">
              Why We Are Different
            </h2>
            <p className="text-gray-400 text-sm font-semibold mt-2">Many SEO agencies use the same generic strategy for every industry. Fashion brands require custom approaches.</p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.01]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03]">
                  <th className="p-4 text-xs font-black uppercase tracking-wider text-red-400">Generic SEO Agency</th>
                  <th className="p-4 text-xs font-black uppercase tracking-wider text-green-400">Our Fashion SEO Service</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs">
                <tr>
                  <td className="p-4 text-gray-400 font-semibold">• Broad industry focus</td>
                  <td className="p-4 text-white font-bold">• Fashion-specific expertise</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-400 font-semibold">• Generic keyword targeting</td>
                  <td className="p-4 text-white font-bold">• Buyer-intent fashion keywords</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-400 font-semibold">• Limited eCommerce understanding</td>
                  <td className="p-4 text-white font-bold">• Deep fashion eCommerce knowledge</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-400 font-semibold">• Traffic-focused reporting</td>
                  <td className="p-4 text-white font-bold">• Revenue-focused reporting</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-400 font-semibold">• Standard content strategies</td>
                  <td className="p-4 text-white font-bold">• Fashion content ecosystems</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-400 font-semibold">• One-size-fits-all approach</td>
                  <td className="p-4 text-white font-bold">• Customized growth strategies</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-center text-xs text-gray-500 mt-6 leading-relaxed font-semibold">
            Our focus isn't simply increasing traffic. Our goal is helping fashion brands generate more revenue through organic search.
          </p>
        </div>
      </section>

      {/* Section 8: Frequently Asked Questions */}
      <section className="py-24 px-4 md:px-6 bg-[#050914] relative border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs text-pink-500 font-black tracking-widest uppercase">FAQ</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mt-2 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 text-sm font-semibold">Clarifying core retail search strategy parameters</p>
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
                  <ChevronDown className={`w-5 h-5 text-pink-500 shrink-0 transition-transform ${activeFaq === index ? 'rotate-180' : ''}`} />
                </button>
                
                {activeFaq === index && (
                  <div className="px-6 pb-6 pt-2 border-t border-white/5 bg-black/10">
                    <p className="text-sm text-gray-400 leading-relaxed font-semibold">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Ready to Grow Your Fashion Brand? */}
      <section className="py-24 px-4 md:px-6 relative text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.1),transparent_60%)] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10 glass-morphism rounded-[2.5rem] border border-white/10 p-8 md:p-16 bg-[#0f172a]/40">
          <span className="text-[10px] font-black text-pink-400 bg-pink-500/10 px-3 py-1.5 rounded-full uppercase tracking-widest block mb-4 w-fit mx-auto">
            Consult Specialization
          </span>
          <h2 className="text-3xl md:text-6xl font-black uppercase italic tracking-tighter mb-6 leading-none text-white">
            Ready to Grow Your Fashion Brand?
          </h2>
          <p className="text-sm md:text-lg text-gray-300 font-medium leading-relaxed max-w-2xl mx-auto mb-6">
            The fashion industry is more competitive than ever. Brands that consistently appear in search results gain a significant advantage in traffic, trust, and revenue.
          </p>
          <p className="text-sm md:text-base text-pink-400 font-black uppercase italic tracking-widest mb-10 leading-relaxed">
            Our SEO services for fashion industry businesses help you attract qualified shoppers, increase organic visibility, and create sustainable growth that compounds over time. Book your free SEO consultation today and let's design standard systems together.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left mb-10">
            <div 
              onClick={onBook}
              className="p-5 bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-pink-500/40 rounded-2xl cursor-pointer transition-all flex items-center justify-between group"
            >
              <div>
                <span className="text-[9px] uppercase tracking-widest font-black text-gray-500 group-hover:text-pink-400">Step 1</span>
                <h4 className="text-xs font-black uppercase text-white mt-1">Book Your Free Fashion SEO Strategy Session</h4>
              </div>
              <ArrowRight className="w-4 h-4 text-pink-500 shrink-0" />
            </div>

            <div 
              onClick={onBook}
              className="p-5 bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-pink-500/40 rounded-2xl cursor-pointer transition-all flex items-center justify-between group"
            >
              <div>
                <span className="text-[9px] uppercase tracking-widest font-black text-gray-500 group-hover:text-pink-400">Step 2</span>
                <h4 className="text-xs font-black uppercase text-white mt-1">Request a Fashion SEO Feasibility Analysis</h4>
              </div>
              <ArrowRight className="w-4 h-4 text-pink-500 shrink-0" />
            </div>
          </div>

          <button
            onClick={onBook}
            className="px-10 py-5 bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-500 hover:to-pink-400 text-white font-black uppercase italic tracking-tighter text-base md:text-lg rounded-2xl transition-all shadow-2xl shadow-pink-500/40 hover:scale-[1.02] flex items-center justify-center gap-3 mx-auto cursor-pointer"
          >
            <span>Book Your Free SEO Consultation Today</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <p className="text-xs text-gray-500 mt-6 leading-relaxed font-semibold">
            Ready to design standard operations or compare packages? Talk to our team at the central <Link to="/contact" className="text-pink-450 text-pink-400 hover:underline">Contact Desk</Link> today.
          </p>
        </div>
      </section>
    </div>
  );
};

export default FashionSEOPage;
