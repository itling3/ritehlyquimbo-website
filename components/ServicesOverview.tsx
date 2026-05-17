
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import { SERVICES, SERVICE_DETAILS } from '../constants';

interface ServicesOverviewProps {
  onBack: () => void;
  onServiceClick: (id: string) => void;
  onBook: (e?: React.MouseEvent) => void;
}

const ServicesOverview: React.FC<ServicesOverviewProps> = ({ onBack, onServiceClick, onBook }) => {
  const categories = [
    { 
      title: 'SEARCH STRATEGY', 
      services: SERVICES.slice(0, 4), 
      color: 'text-blue-500', 
      borderColor: 'border-blue-500/20',
      glow: 'shadow-blue-500/10'
    },
    { 
      title: 'MARKET DOMINATION', 
      services: SERVICES.slice(4, 8), 
      color: 'text-purple-500', 
      borderColor: 'border-purple-500/20',
      glow: 'shadow-purple-500/10'
    },
    { 
      title: 'SYSTEMS & OPS', 
      services: SERVICES.slice(8, 12), 
      color: 'text-green-500', 
      borderColor: 'border-green-500/20',
      glow: 'shadow-green-500/10'
    },
    { 
      title: 'CMS EXPERTISE', 
      services: SERVICES.slice(12, 23), 
      color: 'text-orange-500', 
      borderColor: 'border-orange-500/20',
      glow: 'shadow-orange-500/10'
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712] pt-4 md:pt-6 pb-24 px-4 md:px-6 animate-in fade-in duration-500">
      <SEO 
        title="SEO & Marketing Capabilities Map | Elite Growth Strategy" 
        description="Explore the complete SEO and growth marketing capabilities of Ritehly Quimbo. From search strategy to market domination and automated ops. We build systems for predictable revenue." 
        keywords="seo services overview, digital marketing capabilities, growth strategy map, marketing systems, seo audit services, growth engineering map"
      />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6 md:gap-8">
          <div className="relative">

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-[0.9] mb-4">
              CAPABILITIES <br className="md:hidden" />
              <span className="text-blue-500">MAP</span>
            </h1>
            <p className="text-gray-400 max-w-2xl font-medium text-base md:text-lg leading-snug md:leading-relaxed italic">
              A comprehensive breakdown of the systems we build to turn search traffic into predictable revenue.
            </p>
          </div>
          <div className="hidden md:block">
             <div className="px-6 py-3 border border-white/10 rounded-2xl bg-white/5 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                <span className="text-[10px] font-black text-white uppercase tracking-widest italic">Full-Stack Growth Engine</span>
             </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="space-y-8 md:space-y-10">
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                {cat.title === 'CMS EXPERTISE' ? (
                  <Link to="/services/cms-seo" className={`text-sm md:text-base font-black italic tracking-[0.3em] uppercase ${cat.color} hover:text-white transition-colors`}>
                    {cat.title} →
                  </Link>
                ) : (
                  <h2 className={`text-sm md:text-base font-black italic tracking-[0.3em] uppercase ${cat.color}`}>
                    {cat.title}
                  </h2>
                )}
                <div className="h-[1px] flex-1 bg-white/5"></div>
              </div>

              <div className="space-y-10 md:space-y-12">
                {cat.services.map((service) => (
                  <Link 
                    key={service.id}
                    to={SERVICE_DETAILS[service.id]?.permalink || '/services'}
                    className="flex items-start gap-4 md:gap-5 group text-left w-full transition-all active:scale-95"
                  >
                    <div className={`text-2xl md:text-3xl bg-white/5 p-3 md:p-4 rounded-xl md:rounded-2xl border border-white/10 group-hover:border-blue-500/50 group-hover:bg-blue-600/10 transition-all ${cat.glow} shadow-2xl flex-shrink-0`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base md:text-lg font-black text-white uppercase italic tracking-tight mb-1.5 md:mb-2 group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-500 text-[12px] md:text-[13px] leading-relaxed font-medium line-clamp-2">
                        {service.description}
                      </p>
                      <div className="mt-2 md:mt-3 flex flex-wrap items-center gap-4 lg:opacity-0 lg:group-hover:opacity-100 transition-all lg:-translate-x-2 lg:group-hover:translate-x-0">
                         <span className={`text-[8px] md:text-[9px] font-black uppercase tracking-widest ${cat.color}`}>Explore Strategy →</span>
                        <div className="flex gap-2">
                          <span 
                            role="button"
                            tabIndex={0}
                            onClick={(e) => { e.preventDefault(); e.stopPropagation(); onBook(); }}
                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); onBook(); } }}
                            className="text-[7px] font-black uppercase tracking-widest text-white/40 hover:text-blue-400 underline underline-offset-2 transition-colors cursor-pointer"
                          >
                            Calendar
                          </span>
                          <span 
                            role="button"
                            tabIndex={0}
                            onClick={(e) => { 
                              e.preventDefault();
                              e.stopPropagation(); 
                              window.open('https://docs.google.com/forms/d/e/1FAIpQLSdb7q2wXizC43nv4NnNxfwfGQ1xLhqNqcBQ24uu4VxJGz9E_A/viewform?usp=preview', '_blank'); 
                            }}
                            onKeyDown={(e) => { 
                              if (e.key === 'Enter' || e.key === ' ') { 
                                e.preventDefault();
                                e.stopPropagation(); 
                                window.open('https://docs.google.com/forms/d/e/1FAIpQLSdb7q2wXizC43nv4NnNxfwfGQ1xLhqNqcBQ24uu4VxJGz9E_A/viewform?usp=preview', '_blank'); 
                              } 
                            }}
                            className="text-[7px] font-black uppercase tracking-widest text-white/40 hover:text-blue-400 underline underline-offset-2 transition-colors cursor-pointer"
                          >
                            Form
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 md:mt-32">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-12 md:mb-16 text-center">
            Growth Solved: <span className="text-blue-500">Common Roadblocks</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { q: 'Why is traffic high but sales are low?', a: 'This is usually caused by a "Search Intent Mismatch" where you attract visitors seeking information rather than buyers. We re-align your keywords with high-conversion "Transactional" terms to fix your sales funnel and stop wasted marketing effort. This ensures every visitor is a high-intent prospect.' },
              { q: 'How long until I see real growth?', a: 'SEO typically takes 3-6 months to build unshakeable authority and stable rankings. However, we deploy Google Ads and Digital PR in parallel to drive high-quality leads starting in as little as 14 days. This "Dual-Speed" strategy keeps your cash flow healthy while we build long-term equity.' },
              { q: 'Is my slow site killing my rankings?', a: 'Yes, Google uses Core Web Vitals to penalize slow sites and reward those with "Snap" performance. We optimize your technical health to achieve under 2s load times, which significantly lowers your bounce rates and builds immediate trust with visitors. A fast site is a requirement for modern search dominance.' },
              { q: 'Which is better: SEO or Google Ads?', a: 'Neither is "Better" alone; they work best as a unified growth engine for your brand. SEO builds long-term authority and predictable organic traffic, while Google Ads allows you to capture immediate demand and test new markets. Using both protects your brand from every angle of the search results.' },
              { q: 'How do I beat bigger competitors?', a: 'Bigger brands are often "Broad and Shallow," leaving massive content gaps that you can exploit. We use Topical Maps and deep semantic research to own the specific, profitable niches they are too slow to cover. This niche authority builds a "Moat" that even massive budgets find hard to cross.' },
              { q: 'Are backlinks still important?', a: 'Yes, but generic link building will get you penalized; you need "Elite Authority" from real industry sites. We focus on Digital PR and high-DR outreach that earns your brand "Votes of Confidence" from trusted leaders. This builds the massive trust Google requires to rank you for competitive terms.' },
              { q: 'Can I automate my content safely?', a: 'Generic AI spam will eventually destroy your rankings, but an "AI+Expert" hybrid model provides scale with perfect quality. We use custom-built AI workflows for research and drafting, followed by deep human editing for brand voice and accuracy. This allows you to produce 10x more content while remaining safe from algorithm shifts.' },
              { q: 'What is a Topical Map exactly?', a: 'It is a semantic blueprint that proves to Google you are the ultimate expert in your specific niche. By covering every related sub-topic and entity, you build "Topical Authority" that makes your rankings resilient and near-impossible to displace. It is the architectural foundation of a modern winning SEO strategy.' },
              { q: 'Why hire you vs. a big agency?', a: 'Big agencies often prioritize "Reporting and Fluff" over actual system building and sales growth. When you work with me, you get a direct growth partner who builds AI-Ops engines and high-conversion funnels tailored to your specific goals. You get high-level expertise without the bloat, slow communication, or junior-level execution.' }
            ].map((faq, i) => (
              <div key={i} className="glass-morphism p-8 rounded-[2rem] border border-white/5 hover:border-blue-500/20 transition-all group">
                <div className="text-blue-500 font-bold mb-3 italic uppercase tracking-widest text-[10px]">Q: {faq.q}</div>
                <p className="text-gray-400 text-sm leading-relaxed font-medium">
                  <span className="text-white font-bold mr-1 italic">Answer:</span> {faq.a}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
             <button 
               onClick={onBook}
               className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 hover:text-blue-400 transition-colors underline underline-offset-8"
             >
               View All 120+ Service-Specific FAQs →
             </button>
          </div>
        </div>

        <div className="mt-24 md:mt-32 p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] bg-white/[0.02] border border-white/10 text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-blue-600/5 blur-[100px] md:blur-[120px] rounded-full"></div>
           
           <h2 className="text-2xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-4 md:mb-6 relative z-10 leading-[1.1]">
             Not sure where to start? <br />
             <span className="text-blue-500 text-3xl md:text-5xl">Let's audit your current stack.</span>
           </h2>
           <p className="text-gray-400 max-w-xl mx-auto mb-8 md:mb-10 text-sm md:text-lg font-medium italic relative z-10">
             Every business has hidden leakage. We'll find the gaps in your Search Strategy and Market Domination in a single 30-minute session.
           </p>
           <button 
             onClick={onBook}
             className="relative z-10 w-full md:w-auto px-8 md:px-12 py-5 bg-white text-black font-black rounded-xl md:rounded-2xl hover:bg-gray-200 transition-all shadow-xl shadow-white/10 uppercase tracking-tighter text-base md:text-xl italic"
           >
             Book My Strategy Deep-Dive
           </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesOverview;
