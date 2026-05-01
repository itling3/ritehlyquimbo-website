
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface HeroProps {
  onAuditClick?: (e: React.MouseEvent) => void;
  onFormClick?: (e: React.MouseEvent) => void;
}

const EXPERTISE = [
  "SEO Expert",
  "Web Developer",
  "AI Automation Specialist",
  "Search Engine Marketing",
  "Growth Engineer",
  "Lead Generation"
];

const Hero: React.FC<HeroProps> = ({ onAuditClick, onFormClick }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % EXPERTISE.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6 overflow-hidden min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
        {/* Left Column: Content */}
        <div className="relative z-10 order-2 lg:order-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-3 mb-4 md:mb-6">
            <span className="hidden md:block h-[1px] w-8 bg-blue-500"></span>
            <span className="text-blue-400 text-[10px] md:text-sm font-black uppercase tracking-[0.2em]">
              Scaling Your Business? <span className="text-gray-400 font-bold">Ops Are Holding You Back.</span>
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-6 md:mb-8 text-white uppercase italic tracking-tighter">
            <div className="mb-2">
              <AnimatePresence mode="wait">
                <motion.span
                  key={EXPERTISE[index]}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="gradient-text block"
                >
                  {EXPERTISE[index]}
                </motion.span>
              </AnimatePresence>
            </div>
            from <span className="text-blue-500">Philippines</span>: <br className="hidden sm:block" />
            <span className="text-white">Business Solutions</span> <br className="hidden sm:block" />
            for Growth
          </h1>

          <p className="text-base md:text-xl text-gray-400 mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed px-4 md:px-0 font-medium">
            I don't just do SEO or Ads. I <span className="text-white font-bold">unify Full-Stack SEO, AI Automations, Lead Gen,</span> and <span className="text-white font-bold">high-conversion Web Development</span> into one growth system—so you stop guessing and start scaling.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 md:mb-16 justify-center lg:justify-start px-4 md:px-0">
            <div className="flex flex-col gap-2">
              <button 
                onClick={onAuditClick}
                className="animate-cta-pulse animate-shine px-8 md:px-10 py-4 md:py-5 bg-blue-600 hover:bg-blue-700 rounded-2xl font-black transition-all text-center text-white uppercase tracking-tighter shadow-xl shadow-blue-500/30 text-base md:text-lg whitespace-nowrap relative"
              >
                Schedule Booking
              </button>
              <button 
                onClick={onFormClick}
                className="text-blue-500 hover:text-blue-400 text-[10px] font-black uppercase tracking-widest transition-all italic text-center underline underline-offset-4"
              >
                Quick Inquiry (Google Form)
              </button>
            </div>
            <a 
              href="tel:09611525318" 
              className="animate-phone-vibrate px-8 md:px-10 py-4 md:py-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl font-black transition-all text-center uppercase tracking-tighter text-white text-base md:text-lg flex items-center justify-center gap-3 whitespace-nowrap group h-fit"
            >
              <svg className="w-5 h-5 text-blue-500 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .01 5.403.007 12.04c0 2.123.553 4.197 1.602 6.06L0 24l6.117-1.605a11.803 11.803 0 005.925 1.586h.005c6.635 0 12.04-5.405 12.043-12.041a11.811 11.811 0 00-3.535-8.414"/>
              </svg>
              0961 152 5318
            </a>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-8 grayscale opacity-70 hover:opacity-100 transition-opacity px-4 md:px-0">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 w-full lg:w-auto">Trusted By:</span>
            <div className="font-black text-lg md:text-xl italic tracking-tighter text-white">ANTASIS</div>
            <div className="font-black text-lg md:text-xl italic tracking-tighter text-white">BSL INDIA</div>
            <div className="font-black text-lg md:text-xl italic tracking-tighter text-white uppercase">Excel SCO</div>
          </div>
        </div>

        {/* Right Column: Visual Composition */}
        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end scale-90 sm:scale-100 mb-12 lg:mb-0">
          <div className="relative w-full max-w-[400px] md:max-w-[550px] aspect-square group">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-blue-600/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] bg-[#FACD15] rounded-full shadow-[0_0_80px_rgba(250,205,21,0.2)] z-0"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%] border border-dashed border-white/10 rounded-full animate-[spin_60s_linear_infinite] z-0"></div>

            <div className="absolute inset-0 z-10 flex items-end justify-center overflow-visible">
              <img 
                src="https://lh3.googleusercontent.com/d/16MsRTezCaczZBh9aG6sz3HqZTDB62ve_" 
                alt="Ritehly Quimbo"
                width="400"
                height="500"
                fetchPriority="high"
                className="w-auto h-[120%] lg:h-[125%] max-w-none object-contain transition-all duration-700 drop-shadow-[0_40px_60px_rgba(0,0,0,0.6)] group-hover:scale-[1.03]"
                loading="eager"
              />
            </div>

            <div className="absolute top-1/2 -left-4 md:-left-16 -translate-y-1/2 z-30 animate-[bounce_5s_infinite]">
              <div className="bg-[#0f172a]/90 backdrop-blur-2xl px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl border border-white/10 shadow-2xl flex items-center gap-2 md:gap-3">
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#22c55e] shadow-[0_0_15px_#22c55e] animate-pulse"></div>
                  <div className="text-[9px] md:text-[11px] font-black text-white uppercase tracking-[0.2em]">Strategy Live</div>
              </div>
            </div>

            <div className="absolute top-[10%] -right-4 md:-right-12 z-30 animate-[bounce_4s_infinite]">
              <div className="bg-[#0f172a]/95 backdrop-blur-2xl p-4 md:p-7 rounded-2xl md:rounded-[2rem] border border-blue-500/30 shadow-2xl shadow-blue-500/20 text-center">
                  <div className="text-[8px] md:text-[11px] font-black text-blue-400 uppercase tracking-widest mb-1">Growth</div>
                  <div className="text-3xl md:text-5xl font-black text-white italic tracking-tighter">+284%</div>
              </div>
            </div>

            <div className="absolute -bottom-6 md:-bottom-8 left-1/2 -translate-x-1/2 z-40 w-[95%] md:w-max">
              <div className="bg-[#0f172a]/95 backdrop-blur-2xl px-6 md:px-14 py-4 md:py-8 rounded-2xl md:rounded-[3rem] border border-white/10 shadow-2xl flex items-center justify-center gap-6 md:gap-14 divide-x divide-white/10">
                  <div className="text-center">
                      <div className="text-xl md:text-3xl font-black text-white italic tracking-tighter uppercase leading-none mb-1">Elite</div>
                      <div className="text-[8px] md:text-[11px] text-gray-300 uppercase font-bold tracking-[0.2em]">Specialist</div>
                  </div>
                  <div className="text-center pl-6 md:pl-14">
                      <div className="text-xl md:text-3xl font-black text-white italic tracking-tighter uppercase leading-none mb-1">Scale</div>
                      <div className="text-[8px] md:text-[11px] text-gray-300 uppercase font-bold tracking-[0.2em]">Systems</div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
