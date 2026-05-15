
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import WebPortfolio from '../components/WebPortfolio';
import SectionCTA from '../components/SectionCTA';

const WebDevPortfolioPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBook = (e?: React.MouseEvent) => {
    e?.preventDefault();
    // This will be handled by the parent App component via message or context if needed, 
    // but here we can just use the behavior where it might scroll to contact or similar.
    // For now, let's keep it simple.
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-[#030712]">
      <SEO 
        title="Web Development Portfolio | Performance-First Builds | Ritehly Quimbo" 
        description="A specialized showcase of high-performance websites built for lead generation, speed, and local SEO dominance. React, WordPress, and custom builds." 
        keywords="web development portfolio, react developer portfolio, wordpress developer, performance websites, lead generation sites, ritehly quimbo"
      />
      
      {/* Hero-like header for this specific page */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6 italic">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
            Technical Showcase
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white uppercase italic tracking-tighter leading-[0.9] mb-8">
            WEB <br />
            <span className="text-purple-500">ENGINEERING</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-medium italic leading-relaxed max-w-2xl mb-8">
            Beyond aesthetics. I build websites as high-performance sales engines, fully optimized for both humans and search algorithms.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/services/full-stack-web-development-seo-performance"
              className="inline-flex items-center gap-2 text-white/60 hover:text-purple-400 transition-colors text-[10px] font-black uppercase tracking-[0.2em] bg-white/5 border border-white/10 px-6 py-3 rounded-xl backdrop-blur-md group"
            >
              System Details <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/services/wordpress-seo-expert"
              className="inline-flex items-center gap-2 text-white/60 hover:text-blue-400 transition-colors text-[10px] font-black uppercase tracking-[0.2em] bg-white/5 border border-white/10 px-6 py-3 rounded-xl backdrop-blur-md group"
            >
              WordPress SEO <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </Link>
             <Link 
              to="/services/drupal-seo-expert"
              className="inline-flex items-center gap-2 text-white/60 hover:text-blue-400 transition-colors text-[10px] font-black uppercase tracking-[0.2em] bg-white/5 border border-white/10 px-6 py-3 rounded-xl backdrop-blur-md group"
            >
              Drupal SEO <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <WebPortfolio />

      <SectionCTA 
        text="Ready to build your growth engine?" 
        buttonText="Schedule a Build Call"
        onClick={() => navigate('/contact')}
      />
    </div>
  );
};

export default WebDevPortfolioPage;
