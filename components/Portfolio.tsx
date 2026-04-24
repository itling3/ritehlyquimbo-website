
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CASE_STUDIES } from '../constants';

interface PortfolioProps {
  onViewCaseStudy?: (id: string) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onViewCaseStudy }) => {
  return (
    <section id="proven-results" className="py-24 px-6 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white uppercase italic tracking-tighter">Proven Results</h2>
            <p className="text-gray-400 max-w-2xl font-medium italic">Real data from real campaigns. I focus on the metrics that actually impact your bottom line.</p>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-2xl">
               <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]"></span>
               <span className="text-xs font-black text-white uppercase tracking-widest">Live Campaign Data</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {CASE_STUDIES.map((study) => (
            <div key={study.id} className="glass-morphism rounded-[2.5rem] overflow-hidden border border-white/10 flex flex-col group hover:border-blue-500/30 transition-all duration-500">
              <div className="p-8 md:p-10 pb-4">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] italic">{study.industry}</span>
                    <h3 className="text-2xl md:text-3xl font-black mt-2 text-white uppercase italic tracking-tighter">{study.title}</h3>
                  </div>
                  {onViewCaseStudy && (
                    <button 
                      onClick={() => onViewCaseStudy(study.id)}
                      className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white hover:bg-blue-600 transition-all group/btn"
                    >
                      <svg className="w-5 h-5 group-hover/btn:scale-125 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  )}
                </div>
                <p className="text-gray-400 mb-8 font-medium line-clamp-2">{study.description}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5 group-hover:bg-blue-600/5 transition-colors">
                    <div className="text-xl md:text-2xl font-black text-white italic tracking-tighter">{study.results.traffic}</div>
                    <div className="text-[9px] text-gray-500 uppercase font-black tracking-widest">Traffic</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5 group-hover:bg-blue-600/5 transition-colors">
                    <div className="text-xl md:text-2xl font-black text-white italic tracking-tighter">{study.results.keywords}</div>
                    <div className="text-[9px] text-gray-500 uppercase font-black tracking-widest">Visibility</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5 group-hover:bg-blue-600/5 transition-colors">
                    <div className="text-xl md:text-2xl font-black text-white italic tracking-tighter">{study.results.revenue}</div>
                    <div className="text-[9px] text-gray-500 uppercase font-black tracking-widest">Growth</div>
                  </div>
                </div>

                {onViewCaseStudy && (
                  <button 
                    onClick={() => onViewCaseStudy(study.id)}
                    className="w-full py-4 mb-6 border border-white/10 rounded-xl text-[10px] font-black text-gray-400 uppercase tracking-widest hover:text-white hover:border-white transition-all bg-white/[0.01]"
                  >
                    View Full Case Study Narrative
                  </button>
                )}
              </div>

              <div className="mt-auto h-56 w-full p-4 pr-10 overflow-hidden relative">
                <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-blue-600/10 transition-colors"></div>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={study.chartData}>
                    <defs>
                      <linearGradient id={`gradient-${study.id}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{fill: '#6b7280', fontSize: 10}} 
                    />
                    <YAxis hide />
                    <Tooltip 
                      contentStyle={{backgroundColor: '#111827', border: '1px solid #374151', borderRadius: '8px', color: '#fff'}}
                      itemStyle={{color: '#60a5fa'}}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#3b82f6" 
                      strokeWidth={4} 
                      fillOpacity={1} 
                      fill={`url(#gradient-${study.id})`} 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
