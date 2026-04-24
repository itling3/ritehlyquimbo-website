
import React, { useState, useRef, useEffect } from 'react';
import { REVIEWS } from '../constants';

const TestimonialsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(REVIEWS.length / itemsPerView);
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % totalPages);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);

  return (
    <section className="py-24 px-6 bg-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-black text-white mb-2 uppercase tracking-tighter italic leading-none">Selected Testimonials</h2>
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((s) => <span key={s}>★</span>)}
              </div>
              <span className="text-gray-400 text-sm font-bold tracking-tight uppercase">5.0 CLIENT SCORE</span>
            </div>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={prevSlide}
              className="w-14 h-14 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 hover:bg-blue-600/20 hover:border-blue-500/50 transition-all group"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-500 transition-transform group-active:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="w-14 h-14 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 hover:bg-blue-600/20 hover:border-blue-500/50 transition-all group"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-500 transition-transform group-active:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative overflow-visible">
          <div 
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {REVIEWS.map((review, i) => (
              <div 
                key={i} 
                className={`w-full flex-shrink-0 px-4 transition-opacity duration-500 ${
                  Math.floor(i / itemsPerView) === currentIndex ? 'opacity-100' : 'opacity-20'
                }`}
                style={{ flexBasis: `${100 / itemsPerView}%` }}
              >
                <div className="glass-morphism p-8 rounded-3xl border border-white/5 h-full relative group hover:border-blue-500/20 transition-all">
                  <div className="flex text-yellow-400 mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                    {[1, 2, 3, 4, 5].map((s) => <span key={s} className="text-xs">★</span>)}
                  </div>
                  <p className="text-gray-300 italic mb-8 text-sm md:text-base leading-relaxed h-[120px] overflow-y-auto custom-scrollbar font-medium">
                    "{review.text}"
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center font-black text-blue-400 text-sm shadow-inner">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-white font-black text-sm uppercase tracking-tight">{review.name}</div>
                      <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{review.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots - Increased Target Size */}
        <div className="flex justify-center gap-4 mt-12">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className="p-2 transition-all group"
              aria-label={`Go to slide page ${i + 1}`}
            >
              <div className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === i ? 'w-10 bg-blue-500' : 'w-2 bg-white/20 group-hover:bg-white/40'
              }`}></div>
            </button>
          ))}
        </div>
      </div>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(59, 130, 246, 0.2); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(59, 130, 246, 0.4); }
      `}</style>
    </section>
  );
};

export default TestimonialsSlider;
