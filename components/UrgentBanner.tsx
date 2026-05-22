import React, { useState, useEffect } from 'react';

interface UrgentBannerProps {
  onAction: (e?: React.MouseEvent) => void;
}

const UrgentBanner: React.FC<UrgentBannerProps> = ({ onAction }) => {
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 10, seconds: 0 });

  useEffect(() => {
    // Standard ticking clock starting at 14h 10m 00s, counting down live
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        if (hours === 0 && minutes === 0 && seconds === 0) {
          // Reset to 14h 10m 00s to maintain authentic urgency
          return { hours: 14, minutes: 10, seconds: 0 };
        }
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            }
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNum = (num: number) => String(num).padStart(2, '0');

  return (
    <div 
      className="bg-[#050b18] border-b border-blue-500/20 py-1.5 sm:py-2 md:py-1.5 flex items-center justify-center cursor-pointer selection:bg-blue-500/30 group px-3 md:px-4 w-full relative z-[110]"
      onClick={() => onAction()}
    >
      <div className="max-w-7xl mx-auto flex flex-row flex-wrap items-center justify-center gap-x-2.5 gap-y-1 md:gap-x-6 text-center w-full">
        {/* Live Timer Section */}
        <div className="flex items-center gap-1.5 md:gap-3 bg-red-950/50 border border-red-500/40 px-2 py-0.5 sm:px-3 sm:py-1 rounded-md sm:rounded-lg shrink-0 shadow-lg shadow-red-950/40">
          <span className="text-[10px] md:text-xs text-red-400 animate-pulse font-black tracking-wider">LTD OFFER</span>
          <div className="flex items-center gap-1 font-mono text-white text-[11px] md:text-xs">
            <span className="text-gray-400 text-[8px] md:text-[9px] font-sans font-black mr-0.5">HRS</span>
            <span className="bg-white/10 border border-white/20 px-1 py-0.5 rounded font-black text-white">{formatNum(timeLeft.hours)}</span>
            <span className="text-gray-400 text-[8px] md:text-[9px] font-sans font-black mr-0.5 ml-0.5">MIN</span>
            <span className="bg-white/10 border border-white/20 px-1 py-0.5 rounded font-black text-white">{formatNum(timeLeft.minutes)}</span>
            <span className="text-gray-400 text-[8px] md:text-[9px] font-sans font-black mr-0.5 ml-0.5">SEC</span>
            <span className="bg-white/10 border border-white/20 px-1 py-0.5 rounded font-black text-red-400 shadow-[0_0_10px_rgba(239,68,68,0.2)]">{formatNum(timeLeft.seconds)}</span>
          </div>
        </div>

        {/* Message and Offer Text */}
        <div className="flex items-center gap-1.5 justify-center text-[10px] sm:text-[11px] md:text-xs font-bold uppercase tracking-wider text-gray-200">
          <span className="text-yellow-500 text-sm md:text-base">👉</span> 
          <span className="text-white group-hover:text-yellow-400 transition-colors font-extrabold max-w-[280px] sm:max-w-md md:max-w-2xl lg:max-w-none text-center leading-normal">
            DON'T MISS OUT - Get High-Performance SEO Services & Local Google Map Pack Strategy Session
          </span>
        </div>

        {/* Dynamic CTA Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAction(e);
          }}
          className="bg-orange-600 hover:bg-orange-500 text-white text-[9px] md:text-[10px] font-black px-3.5 py-1 rounded-full transition-all animate-cta-pulse tracking-tight flex items-center gap-1.5 shadow-lg shadow-orange-500/20 active:scale-95 italic bg-gradient-to-r from-orange-600 to-orange-500 cursor-pointer shrink-0"
        >
          VIEW OFFER
          <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default UrgentBanner;
