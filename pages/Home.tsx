
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ClientsMarquee from '../components/ClientsMarquee';
import SectionCTA from '../components/SectionCTA';
import WhyChooseMe from '../components/WhyChooseMe';
import HowItWorks from '../components/HowItWorks';
import Portfolio from '../components/Portfolio';
import SEOExpenseCalculator from '../components/SEOExpenseCalculator';
import TestimonialsSlider from '../components/TestimonialsSlider';
import AuditTool from '../components/AuditTool';
import SEO from '../components/SEO';
import { SERVICES, CERTIFICATES, REVIEWS, FAQS, TOOL_LOGOS, SERVICE_DETAILS } from '../constants';

interface HomeProps {
  onNavigate: (target: string, isService?: boolean) => void;
  onBook: (e?: React.MouseEvent) => void;
  onOpenForm: (e?: React.MouseEvent) => void;
  onViewCaseStudy: (id: string) => void;
  activeFaq: number | null;
  setActiveFaq: (index: number | null) => void;
}

const HOME_SCHEMAS = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://ritehlyquimbo.com/#local-business",
    "name": "Ritehly Quimbo Precision Search Engineering",
    "image": "https://lh3.googleusercontent.com/d/16MsRTezCaczZBh9aG6sz3HqZTDB62ve_",
    "description": "Elite technical SEO, AI automation, and full-stack web development services. Specialized in hyper-local dominance and ROI-focused growth for ambitious brands.",
    "url": "https://ritehlyquimbo.com/",
    "telephone": "+639611525318",
    "email": "Ritehlyquimbo@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Cebu City",
      "addressRegion": "Cebu",
      "addressCountry": "PH"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 10.3157,
      "longitude": 123.8854
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "12",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Charm Garcia" },
        "reviewBody": "Rihteley was super helpful. Easy and smooth transaction. Highly recommended!",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Rebecca Jordan" },
        "reviewBody": "I’ve worked with a few SEO services before, but Ritehly Website SEO Ranker really stands out. improvements in our technical metrics.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Mariel Angeles" },
        "reviewBody": "Of all the SEO trainings I attended I can say that with Sir Ritehly the word from SEO Beginner to Experts really fits.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Full-Stack SEO & Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Local SEO & Google Maps Optimization",
            "description": "Hyper-local dominance strategies to capture the #1 spot in the Google Map Pack."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Technical On-Page SEO",
            "description": "Precision semantic optimization and technical architecture for maximum crawlability."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Automation & Workflows",
            "description": "Implementation of custom AI agents to scale business operations and content production."
          }
        }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ritehly Quimbo",
    "jobTitle": "SEO Specialist & Growth Engineer",
    "description": "With 8 years of dedicated search experience, Ritehly Quimbo focuses 70% of his energy on high-level SEO Intelligence and 30% on Growth Engineering—building AI tools, web infrastructure, and Google Ads frameworks for SMBs.",
    "url": "https://ritehlyquimbo.com",
    "image": "https://lh3.googleusercontent.com/d/16MsRTezCaczZBh9aG6sz3HqZTDB62ve_",
    "email": [
      "mailto:seo@ritehlyquimbo.com",
      "mailto:Ritehlyquimbo@gmail.com"
    ],
    "telephone": "+639611525318",
    "gender": "https://schema.org/Male",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Cebu City",
      "addressRegion": "Cebu",
      "addressCountry": "PH"
    },
    "knowsAbout": [
      "Search Engine Optimization",
      "Technical SEO",
      "Topical Authority & Topical Mapping",
      "Growth Engineering",
      "AI Automation & Workflow Engineering",
      "Google Ads",
      "WordPress & Elementor Web Development"
    ],
    "skills": "Topical Authority lattices, technical SEO auditing, custom AI agents, lead qualification automation, ROI optimization",
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Expertise",
      "recognizingOrganization": {
        "@type": "Organization",
        "name": "8 Years of Search Intelligence & Digital Marketing Mastery"
      }
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "consultation",
      "telephone": "+639611525318",
      "email": [
        "mailto:seo@ritehlyquimbo.com",
        "mailto:Ritehlyquimbo@gmail.com"
      ],
      "availableLanguage": ["English", "Tagalog"]
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://ritehlyquimbo.com"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why is my traffic increasing, but I’m not getting any leads?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This usually indicates a mismatch in search intent. We target high-intent keywords that map to the specific stage of your buyer's journey to ensure ROI."
        }
      },
      {
        "@type": "Question",
        "name": "Can AI really automate growth without hurting rankings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We implement custom AI workflows that focus on quality and operational scale, ensuring content remains expert-led and search-engine friendly."
        }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ritehlyquimbo.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Portfolio",
        "item": "https://ritehlyquimbo.com/portfolio/"
      }
    ]
  }
];

const Home: React.FC<HomeProps> = ({ 
  onNavigate, 
  onBook, 
  onOpenForm, 
  onViewCaseStudy,
  activeFaq,
  setActiveFaq
}) => {
  return (
    <>
      <SEO 
        title="Hire SEO Expert from Philippines | Scale Your Organic Traffic and Revenue" 
        description="Partner with Ritehly Quimbo, a results-driven SEO expert specializing in scaling businesses through data-backed organic search strategies." 
        keywords="hire seo expert philippines, organic traffic scaling, data-backed seo strategy, ritehly quimbo"
        schema={HOME_SCHEMAS}
      />
      <main>
        <Hero onAuditClick={onBook} onFormClick={onOpenForm} />

        <ClientsMarquee />
        
        <SectionCTA 
          onClick={onBook} 
          text="Join our elite network of growing brands" 
          buttonText="Schedule Booking"
        />

        {/* Services Section */}
        <section id="services" className="py-14 md:py-24 px-4 md:px-6 relative overflow-hidden bg-white/5">
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black mb-2 text-white uppercase tracking-tighter italic">My Services</h2>
              <div className="text-blue-500 font-bold text-sm mb-4 tracking-[0.3em] uppercase">Full-Stack SEO & Marketing</div>
              <p className="text-gray-400 max-w-2xl mx-auto">Elite strategy across the entire search and digital landscape, designed for aggressive growth and market dominance.</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {SERVICES.slice(0, 12).map((service, i) => (
                <div 
                  key={i} 
                  className="glass-morphism p-6 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all group flex flex-col h-full"
                >
                  <Link 
                    to={SERVICE_DETAILS[service.id]?.permalink || '/services'}
                    className="text-left w-full flex-1"
                  >
                    <div className="text-3xl mb-4 group-hover:scale-110 transition-transform inline-block">{service.icon}</div>
                    <h3 className="text-lg font-bold mb-2 text-white flex items-center justify-between">
                      {service.title}
                      <span className="text-[10px] text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">EXPLORE →</span>
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-6">{service.description}</p>
                  </Link>
                  <div className="mt-auto pt-4 border-t border-white/5 flex flex-col gap-2">
                    <button 
                      onClick={onBook}
                      className="w-full py-2 bg-orange-600/10 hover:bg-orange-600 text-orange-500 hover:text-white font-black rounded-lg transition-all text-[9px] uppercase tracking-widest italic border border-orange-500/20"
                    >
                      Schedule Session (Calendar)
                    </button>
                    <button 
                      onClick={onOpenForm}
                      className="text-[8px] text-gray-500 hover:text-blue-400 font-bold uppercase tracking-widest text-center transition-colors"
                    >
                      Quick Inquiry (Form)
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
               <Link 
                 to="/services"
                 className="px-10 py-4 bg-white/5 border border-white/10 text-white font-black rounded-xl hover:bg-white/10 transition-all uppercase tracking-widest text-xs italic inline-block"
               >
                 View Complete Services
               </Link>
            </div>
          </div>
        </section>

        <SectionCTA 
          onClick={onOpenForm} 
          text="Which services do you need most?" 
          buttonText="Request Quote (Form)"
        />

        <WhyChooseMe />

        {/* Certificates Section */}
        <section id="certificates" className="py-14 md:py-24 px-4 md:px-6 bg-black/20 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4 text-white uppercase italic tracking-tighter">Professional Recognition</h2>
              <div className="text-blue-500 font-bold text-[10px] uppercase tracking-[0.3em] mb-4">Verified Industry Credentials</div>
              <p className="text-gray-400 max-w-2xl mx-auto">Mastery across technical SEO, link building, and site performance validated by leading institutions.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {CERTIFICATES.map((cert, i) => (
                <a 
                  key={i} 
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-morphism rounded-3xl overflow-hidden border border-white/5 hover:border-blue-500/50 transition-all group block shadow-2xl hover:shadow-blue-500/10"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img 
                      src={cert.url} 
                      alt={cert.title} 
                      width="400"
                      height="300"
                      loading="lazy"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-[1.02] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-blue-600/90 text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        Verify Certificate ↗
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="text-blue-500 font-black text-[10px] uppercase tracking-[0.2em] mb-3">{cert.issuer} Certified Specialist</div>
                    <h3 className="text-lg font-bold text-white uppercase tracking-tight leading-tight group-hover:text-blue-400 transition-colors">
                      {cert.title}
                    </h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <SectionCTA 
          onClick={onBook} 
          text="Don't settle for average SEO results" 
          buttonText="Start Booking"
        />

        {/* VERIFIED RESULTS MARQUEE */}
        <section className="py-12 md:py-20 bg-black/40 border-y border-white/5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8 md:mb-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-8 h-[2px] bg-blue-500"></span> Verified Results
                </h3>
              </div>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full w-fit">
                <div className="flex text-yellow-500 text-xs">
                  {[1, 2, 3, 4, 5].map((s) => <span key={s}>★</span>)}
                </div>
                <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest">5.0 Google Rating</span>
              </div>
            </div>
          </div>
          
          <div className="marquee-container">
            <div className="marquee-content reviews-speed">
              {[...REVIEWS, ...REVIEWS, ...REVIEWS].map((review, i) => (
                <div key={i} className="review-marquee-card">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex text-yellow-500 text-[10px]">
                      {[1, 2, 3, 4, 5].map((s) => <span key={s}>★</span>)}
                    </div>
                    <div className="w-5 h-5 rounded bg-blue-600/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.48 10.92v3.28h4.74c-.2 1.04-1.18 3.06-4.74 3.06-3.08 0-5.6-2.54-5.6-5.68s2.52-5.68 5.6-5.68 5.6-5.68c1.76 0 2.94.74 3.62 1.38l2.58-2.48C17.06 3.16 14.98 2 12.48 2 6.48 2 1.64 6.84 1.64 12.84s4.84 10.84 10.84 10.84c6.26 0 10.42-4.4 10.42-10.6 0-.72-.08-1.26-.18-1.8h-10.24z"/>
                      </svg>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300 italic leading-relaxed line-clamp-3">"{review.text}"</p>
                  <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-xs font-bold text-blue-400">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-xs text-white font-bold uppercase tracking-tight">{review.name}</div>
                      <div className="text-[10px] text-gray-500 uppercase">{review.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <HowItWorks />

        <section className="py-12 md:py-20 bg-black/60 border-y border-white/5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8 md:mb-12">
            <h3 className="text-xl font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
              <span className="w-8 h-[2px] bg-blue-500"></span> Technical Stack
            </h3>
            <p className="text-sm text-gray-500 mt-2">I leverage enterprise-grade data and automation tools to drive precision results.</p>
          </div>
          
          <div className="marquee-container">
            <div className="marquee-content marquee-fast">
              {[...TOOL_LOGOS, ...TOOL_LOGOS, ...TOOL_LOGOS, ...TOOL_LOGOS].map((tool, i) => (
                <div key={i} className="tool-capsule">
                  <img 
                    src={tool.url} 
                    alt={tool.name} 
                    width="28"
                    height="28"
                    loading="lazy"
                    className="h-7 w-auto object-contain"
                  />
                  <span className="tool-label">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Portfolio onViewCaseStudy={onViewCaseStudy} />

        <SEOExpenseCalculator onExecute={onBook} />

        <TestimonialsSlider />

        <AuditTool />

        {/* FAQ Section */}
        <section id="faq" className="py-14 md:py-24 px-4 md:px-6 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4 text-white uppercase italic tracking-tighter">Knowledge Base</h2>
              <div className="text-blue-500 font-bold text-[10px] uppercase tracking-[0.3em] mb-4">Frequently Asked Questions</div>
              <p className="text-gray-400">Deep insights into the methodology and strategy that powers our growth engine.</p>
            </div>
            
            <div className="grid gap-4">
              <div className="glass-morphism rounded-3xl border border-blue-500/20 overflow-hidden mb-8 p-8 bg-blue-500/5">
                 <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">💡</div>
                    <h3 className="text-blue-400 font-black uppercase text-xs tracking-widest">Elite Strategic Tip</h3>
                 </div>
                 <p className="text-gray-300 text-sm leading-relaxed">
                   Most businesses fail because they ignore <span className="text-white font-bold">search intent</span>. Targeting high-volume keywords without mapping them to the specific stage of the buyer journey leads to vanity metrics and zero ROI.
                 </p>
              </div>

              {FAQS.map((faq, index) => (
                <div key={index} className="glass-morphism rounded-2xl border border-white/5 overflow-hidden transition-all duration-300 hover:border-white/10">
                  <button
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-full p-6 text-left flex justify-between items-center group"
                  >
                    <span className={`text-base font-bold transition-colors uppercase tracking-tight ${activeFaq === index ? 'text-blue-400' : 'text-white group-hover:text-blue-400'}`}>
                      {faq.question}
                    </span>
                    <span className={`w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-blue-500 transition-all duration-500 ${activeFaq === index ? 'rotate-180 bg-blue-600/10' : ''}`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  <div className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${activeFaq === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <div className="p-6 pt-0 border-t border-white/5 mt-2">
                      <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-14 md:py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto glass-morphism rounded-3xl md:rounded-[40px] p-6 sm:p-10 md:p-12 text-center border border-white/10 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 relative z-10 text-white uppercase italic tracking-tighter">Ready for Domination?</h2>
            <p className="text-lg text-gray-400 mb-10 relative z-10 max-w-xl mx-auto">
              I only work with a handful of clients at a time to ensure elite results. Secure your strategy session now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <button 
                onClick={onBook}
                className="animate-cta-pulse animate-shine px-10 py-5 bg-white text-black font-bold rounded-2xl hover:bg-gray-200 transition-all text-lg shadow-xl shadow-white/10 uppercase tracking-tighter"
              >
                Schedule Session
              </button>
              <Link to="/services" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all text-lg uppercase tracking-tighter inline-block">
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
