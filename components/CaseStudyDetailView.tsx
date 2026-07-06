
import React from 'react';
import { Link } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import SEO from './SEO';
import { CaseStudy } from '../types';

interface CaseStudyDetailViewProps {
  study: CaseStudy;
  onBack: () => void;
  onBook: () => void;
}

const CaseStudyDetailView: React.FC<CaseStudyDetailViewProps> = ({ study, onBack, onBook }) => {
  const isGscVerified = ['maewellness', 'monstore', 'excel', 'kinloss'].includes(study.id);

  return (
    <div className="relative pt-4 md:pt-6 pb-16 md:pb-24 px-4 md:px-6 animate-in fade-in duration-500 min-h-screen">
      <SEO 
        title={study.seoTitle || `${study.title.split('–')[0]} | ${study.industry} Growth Result`} 
        description={study.metaDescription || study.description} 
        keywords={study.keywords}
        image={study.image}
      />
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
          <div>
            <div className={`inline-flex items-center gap-2 text-[10px] font-black ${isGscVerified ? 'bg-purple-600/20 text-purple-400 border-purple-500/20' : 'bg-blue-600/20 text-blue-400 border-blue-500/20'} px-3 py-1 rounded-full uppercase tracking-widest mb-6 italic border`}>
              {isGscVerified ? 'GSC Data Verified' : 'Deep Dive Analysis'}
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-none mb-8">
              {study.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed mb-10">
              {study.description}
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/5 p-6 rounded-3xl border border-white/5 text-center">
                <div className="text-2xl font-black text-white italic tracking-tighter">{study.results.traffic}</div>
                <div className="text-[9px] text-gray-500 uppercase font-black mt-1">{isGscVerified ? 'Total Clicks' : 'Growth'}</div>
              </div>
              <div className="bg-white/5 p-6 rounded-3xl border border-white/5 text-center">
                <div className="text-2xl font-black text-white italic tracking-tighter">{study.results.keywords}</div>
                <div className="text-[9px] text-gray-500 uppercase font-black mt-1">{isGscVerified ? 'Total Impressions' : 'Map Ranking'}</div>
              </div>
              <div className="bg-white/5 p-6 rounded-3xl border border-white/5 text-center">
                <div className="text-2xl font-black text-white italic tracking-tighter">{study.results.revenue}</div>
                <div className="text-[9px] text-gray-500 uppercase font-black mt-1">{isGscVerified ? 'Average CTR' : 'CVS Rise'}</div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className={`absolute inset-0 ${isGscVerified ? 'bg-purple-600/10' : 'bg-blue-600/10'} blur-[80px] rounded-full pointer-events-none`}></div>
            <div className="relative glass-morphism rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <img src={study.image} alt={study.title} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="glass-morphism p-10 rounded-[2.5rem] border border-red-500/10">
            <h3 className="text-red-500 font-black text-[10px] uppercase tracking-widest mb-6 italic">The Challenge</h3>
            <p className="text-gray-300 leading-relaxed text-sm font-medium">{study.challenge}</p>
          </div>
          <div className="glass-morphism p-10 rounded-[2.5rem] border border-blue-500/10">
            <h3 className="text-blue-500 font-black text-[10px] uppercase tracking-widest mb-6 italic">The Strategy</h3>
            <p className="text-gray-300 leading-relaxed text-sm font-medium">{study.strategy}</p>
          </div>
          <div className="glass-morphism p-10 rounded-[2.5rem] border border-green-500/10">
            <h3 className="text-green-500 font-black text-[10px] uppercase tracking-widest mb-6 italic">The Outcome</h3>
            <p className="text-gray-300 leading-relaxed text-sm font-medium">{study.outcome}</p>
          </div>
        </div>

        <div className="glass-morphism p-8 md:p-12 rounded-[3rem] border border-white/5 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[100px] rounded-full"></div>
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
            <div>
              <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-2">{isGscVerified ? 'Search Performance Report' : 'Traffic compounding Data'}</h2>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">{isGscVerified ? 'Verified Growth Data' : 'Organic Impressions Performance Index'}</p>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {study.keyActionPoints?.map((tag, i) => (
                <span key={i} className={`px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black ${isGscVerified ? 'text-purple-400' : 'text-blue-400'} uppercase tracking-widest`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="h-80 w-full pr-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={study.chartData}>
                <defs>
                  <linearGradient id={`detail-grad-${study.id}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={isGscVerified ? "#a855f7" : "#3b82f6"} stopOpacity={0.4}/>
                    <stop offset="95%" stopColor={isGscVerified ? "#a855f7" : "#3b82f6"} stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 10}} />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', color: '#fff'}}
                  itemStyle={{color: isGscVerified ? '#d8b4fe' : '#60a5fa'}}
                />
                <Area type="monotone" dataKey="value" stroke={isGscVerified ? "#a855f7" : "#3b82f6"} strokeWidth={4} fillOpacity={1} fill={`url(#detail-grad-${study.id})`} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="text-center bg-blue-600/5 p-16 rounded-[4rem] border border-blue-500/20 relative overflow-hidden">
           <div className="absolute inset-0 animate-pulse bg-blue-600/5 pointer-events-none"></div>
           <h3 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-6 relative z-10">
              Ready to duplicate <br /> these results?
           </h3>
           <button 
             onClick={onBook}
             className="relative z-10 px-12 py-5 bg-orange-600 hover:bg-orange-700 text-white font-black rounded-2xl transition-all shadow-2xl shadow-orange-500/40 uppercase tracking-tighter text-xl animate-cta-pulse"
           >
             Book My Strategy Session
           </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetailView;
