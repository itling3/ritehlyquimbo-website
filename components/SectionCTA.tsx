
import React from 'react';

interface SectionCTAProps {
  onClick: (e: React.MouseEvent) => void;
  title?: string;
  description?: string;
  text?: string;
  buttonText?: string;
}

const SectionCTA: React.FC<SectionCTAProps> = ({ 
  onClick, 
  title,
  description,
  text,
  buttonText = "Book Free Strategy Session" 
}) => {
  const displayTitle = title || text || "Ready to start your growth journey?";
  return (
    <div className="py-12 md:py-20 px-4 md:px-6 flex flex-col items-center justify-center gap-4 sm:gap-6 bg-gradient-to-b from-transparent via-blue-600/5 to-transparent border-y border-white/5">
      <h2 className="text-3xl md:text-5xl font-black text-white italic tracking-tighter text-center uppercase">
        {displayTitle}
      </h2>
      {description && (
        <p className="text-gray-400 text-lg font-medium italic text-center max-w-2xl">
          {description}
        </p>
      )}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full mt-4">
        <button 
          onClick={onClick}
          className="animate-cta-pulse animate-shine group relative px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-black rounded-xl transition-all shadow-xl shadow-orange-500/20 uppercase tracking-tighter overflow-hidden whitespace-nowrap"
        >
          <span className="relative z-10 flex items-center gap-2">
            {buttonText}
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </button>
        
        <a 
          href="tel:09611525318"
          className="animate-phone-vibrate px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all uppercase tracking-tighter text-sm flex items-center gap-3 whitespace-nowrap group"
        >
          <svg className="w-4 h-4 text-blue-500 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .01 5.403.007 12.04c0 2.123.553 4.197 1.602 6.06L0 24l6.117-1.605a11.803 11.803 0 005.925 1.586h.005c6.635 0 12.04-5.405 12.043-12.041a11.811 11.811 0 00-3.535-8.414"/>
          </svg>
          Call or WhatsApp: 0961 152 5318
        </a>
      </div>
    </div>
  );
};

export default SectionCTA;
