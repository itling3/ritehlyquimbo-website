
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import { CASE_STUDIES } from '../constants';

interface PortfolioOverviewProps {
  onBack: () => void;
  onCaseStudyClick: (id: string) => void;
}

const PortfolioOverview: React.FC<PortfolioOverviewProps> = ({ onBack, onCaseStudyClick }) => {
  const categories = [
    { 
      title: 'TECHNICAL SCALING', 
      studies: CASE_STUDIES.filter(s => ['maewellness', 'monstore'].includes(s.id)), 
      color: 'text-blue-500', 
      borderColor: 'border-blue-500/20',
      glow: 'shadow-blue-500/10'
    },
    { 
      title: 'LOCAL PACK DOMINATION', 
      studies: CASE_STUDIES.filter(s => ['chattanooga', 'kinloss'].includes(s.id)), 
      color: 'text-purple-500', 
      borderColor: 'border-purple-500/20',
      glow: 'shadow-purple-500/10'
    },
    { 
      title: 'AUTHORITY & LEADS', 
      studies: CASE_STUDIES.filter(s => ['bsl', 'excel'].includes(s.id)), 
      color: 'text-green-500', 
      borderColor: 'border-green-500/20',
      glow: 'shadow-green-500/10'
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712] pt-4 md:pt-6 pb-24 px-4 md:px-6 animate-in fade-in duration-500">
      <SEO 
        title="SEO Case Studies Portfolio | Proven Search Results" 
        description="Browse Ritehly Quimbo's SEO portfolio and case studies. technical scaling, local pack domination, and authority building for diverse industries. Search Console verified results." 
        keywords="seo portfolio, case studies, search results, organic traffic growth, technical seo results, local seo case study, growth marketing evidence"
      />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6 md:gap-8">
          <div>
            <Link 
              to="/"
              className="group mb-4 md:mb-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
            >
              <span className="transition-transform group-hover:-translate-x-1">←</span> 
              Back to Home
            </Link>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-[0.9] mb-4">
              PROVEN <br className="md:hidden" />
              <span className="text-purple-500">RESULTS</span>
            </h1>
            <p className="text-gray-400 max-w-2xl font-medium text-base md:text-lg leading-snug md:leading-relaxed italic">
              A data-first breakdown of our most successful growth campaigns across technical, local, and authority sectors.
            </p>
          </div>
          <div className="hidden md:block">
             <div className="px-6 py-3 border border-white/10 rounded-2xl bg-white/5 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                <span className="text-[10px] font-black text-white uppercase tracking-widest italic">Search Console Verified</span>
             </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 md:gap-12 lg:gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="space-y-8 md:space-y-10">
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                <h2 className={`text-sm md:text-base font-black italic tracking-[0.3em] uppercase ${cat.color}`}>
                  {cat.title}
                </h2>
                <div className="h-[1px] flex-1 bg-white/5"></div>
              </div>

              <div className="space-y-10 md:space-y-12">
                {cat.studies.map((study) => (
                  <Link 
                    key={study.id}
                    to={study.permalink}
                    className="flex items-start gap-4 md:gap-5 group text-left w-full transition-all active:scale-95"
                  >
                    <div className={`relative w-16 md:w-20 h-16 md:h-20 flex-shrink-0 bg-white/5 rounded-xl md:rounded-2xl border border-white/10 overflow-hidden transition-all ${cat.glow} flex-shrink-0`}>
                      <img 
                        src={study.image} 
                        alt={study.title} 
                        className="w-full h-full object-cover grayscale md:group-hover:grayscale-0 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 md:group-hover:bg-transparent transition-colors"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-0.5 md:mb-1 gap-2">
                        <h3 className="text-base md:text-lg font-black text-white uppercase italic tracking-tight group-hover:text-purple-400 transition-colors truncate">
                          {study.title.split('–')[0]}
                        </h3>
                        {['maewellness', 'monstore', 'excel', 'kinloss'].includes(study.id) && (
                           <span className="text-[7px] md:text-[8px] font-black bg-purple-600/20 text-purple-400 px-1 py-0.5 rounded border border-purple-500/20 uppercase tracking-widest italic flex-shrink-0">GSC</span>
                        )}
                      </div>
                      <p className="text-gray-500 text-[10px] md:text-[11px] font-bold uppercase tracking-widest mb-2">
                        {study.industry}
                      </p>
                      <div className="flex gap-2.5 md:gap-3">
                         <div className="text-[9px] md:text-[10px] font-black text-white">
                           <span className={cat.color}>{study.results.traffic.split(' ')[0]}</span> {study.results.traffic.split(' ')[1] || 'Growth'}
                         </div>
                         <div className="w-[1px] h-3 bg-white/10 self-center"></div>
                         <div className="text-[9px] md:text-[10px] font-black text-white">
                           <span className={cat.color}>{study.results.keywords.split(' ')[0]}</span> {study.results.keywords.split(' ')[1] || 'Impr'}
                         </div>
                      </div>
                      <div className="mt-2 md:mt-3 flex items-center gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all lg:-translate-x-2 lg:group-hover:translate-x-0">
                         <span className={`text-[8px] md:text-[9px] font-black uppercase tracking-widest ${cat.color}`}>Deep Dive Case Study</span>
                         <svg className={`w-2.5 h-2.5 md:w-3 md:h-3 ${cat.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                         </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 md:mt-24 p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] bg-white/[0.02] border border-white/10 text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-purple-600/5 blur-[100px] md:blur-[120px] rounded-full"></div>
           
           <h2 className="text-2xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-4 md:mb-6 relative z-10 leading-[1.1]">
             Want these numbers <br />
             <span className="text-purple-500 text-3xl md:text-5xl">for your website?</span>
           </h2>
           <p className="text-gray-400 max-w-xl mx-auto mb-8 md:mb-10 text-sm md:text-lg font-medium italic relative z-10">
             We don't sell services. We deliver growth systems. Every case study above started with a single 30-minute growth audit.
           </p>
           <button 
             onClick={() => onCaseStudyClick('audit')}
             className="relative z-10 w-full md:w-auto px-8 md:px-12 py-5 bg-purple-600 text-white font-black rounded-xl md:rounded-2xl hover:bg-purple-700 transition-all shadow-xl shadow-purple-500/20 uppercase tracking-tighter text-base md:text-xl italic"
           >
             Book My Growth Audit
           </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioOverview;
