
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import { ServiceContent } from '../types';

interface ServiceDetailViewProps {
  service: ServiceContent;
  onBack: () => void;
  onBook: () => void;
  onPricingClick?: (id: string) => void;
}

const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({ service, onBack, onBook, onPricingClick }) => {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6 animate-in fade-in duration-500">
      <SEO 
        title={`${service.title} | ${service.features[0] || 'Scale Your Results'}`} 
        description={service.metaDescription || service.description} 
        keywords={service.keywords}
      />
      <div className="max-w-5xl mx-auto">
        <Link 
          to="/services"
          className="group mb-8 md:mb-12 flex items-center gap-2 text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span> 
          Back to Overview
        </Link>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-12 items-start mb-12 md:mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <div className="text-3xl md:text-4xl">{service.icon}</div>
              <h1 className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-none">
                {service.title}
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed">
              {service.description}
            </p>
          </div>
          <div className="glass-morphism p-6 md:p-8 rounded-2xl md:rounded-3xl border border-blue-500/20 bg-blue-500/5">
             <div className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 mb-4">Core Focus</div>
             <ul className="space-y-2 md:space-y-3">
               {service.features.map((feat, i) => (
                 <li key={i} className="flex items-center gap-3 text-xs md:text-sm text-gray-300 font-bold uppercase tracking-tight">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                    {feat}
                 </li>
               ))}
             </ul>
             <div className="mt-6 md:mt-8 flex flex-col gap-3">
               <button 
                 onClick={onBook}
                 className="w-full py-3 md:py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl transition-all shadow-xl shadow-blue-500/20 uppercase tracking-tighter text-xs md:text-sm"
               >
                 Book Strategy Session
               </button>
               {service.pricingId && onPricingClick && (
                 <button 
                   onClick={() => onPricingClick(service.pricingId!)}
                   className="w-full py-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 font-black rounded-lg hover:bg-blue-500 hover:text-white transition-all uppercase tracking-tighter text-[10px]"
                 >
                   View Pricing & Plans
                 </button>
               )}
               <a 
                 href="tel:09611525318"
                 className="w-full py-3 md:py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all uppercase tracking-tighter text-[9px] md:text-[10px] flex items-center justify-center gap-2"
               >
                 <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .01 5.403.007 12.04c0 2.123.553 4.197 1.602 6.06L0 24l6.117-1.605a11.803 11.803 0 005.925 1.586h.005c6.635 0 12.04-5.405 12.043-12.041a11.811 11.811 0 00-3.535-8.414"/>
                 </svg>
                 Call/WhatsApp
               </a>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="glass-morphism p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-red-500/10 hover:border-red-500/30 transition-all group">
            <div className="text-red-500 font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em] mb-4">The Pain Point</div>
            <h3 className="text-xl md:text-2xl font-black text-white mb-6 uppercase italic tracking-tighter leading-none">
              "I'm Invisible"
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              {service.painPoint}
            </p>
          </div>

          <div className="glass-morphism p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-orange-500/10 hover:border-orange-500/30 transition-all group">
            <div className="text-orange-500 font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em] mb-4">The Real Problem</div>
            <h3 className="text-xl md:text-2xl font-black text-white mb-6 uppercase italic tracking-tighter leading-none">
              Hidden Leakage
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              {service.problem}
            </p>
          </div>

          <div className="glass-morphism p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-green-500/10 hover:border-green-500/30 transition-all group md:col-span-2 lg:col-span-1 shadow-2xl shadow-green-500/5 bg-green-500/[0.02]">
            <div className="text-green-500 font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em] mb-4">The Solution</div>
            <h3 className="text-xl md:text-2xl font-black text-white mb-6 uppercase italic tracking-tighter leading-none">
              Precision Engineering
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              {service.solution}
            </p>
          </div>
        </div>

        {service.faqs && service.faqs.length > 0 && (
          <div className="mt-12 md:mt-20">
            <h2 className="text-2xl md:text-4xl font-black text-white uppercase italic tracking-tighter mb-8 md:mb-12 text-center md:text-left">
              Common Questions (FAQ)
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {service.faqs.map((faq, i) => (
                <div key={i} className="glass-morphism p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all group">
                  <h4 className="text-sm md:text-base font-black text-white uppercase italic tracking-tight mb-3 group-hover:text-blue-400 transition-colors">
                    {faq.question}
                  </h4>
                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-medium">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 md:mt-20 p-8 md:p-12 glass-morphism rounded-3xl md:rounded-[3rem] border border-white/5 relative overflow-hidden">
          <div className="absolute -right-24 -bottom-24 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full"></div>
          <div className="relative z-10 max-w-3xl">
            <h4 className="text-[10px] md:text-xs font-black text-blue-400 uppercase tracking-[0.3em] mb-4">Strategic Importance</h4>
            <p className="text-xl md:text-3xl font-black text-white uppercase italic tracking-tighter leading-tight mb-6 md:mb-8">
              Why you can't afford to ignore this in {new Date().getFullYear()}
            </p>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
              {service.importance}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
               <button 
                 onClick={onBook}
                 className="px-6 md:px-8 py-4 bg-white text-black font-black rounded-xl hover:bg-gray-200 transition-all uppercase tracking-tighter text-sm"
               >
                 Book Strategy Session
               </button>
               <a 
                 href="tel:09611525318"
                 className="px-6 md:px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all uppercase tracking-tighter flex items-center justify-center gap-3 text-sm"
               >
                 Call/WhatsApp
               </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailView;
