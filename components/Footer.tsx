
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, SERVICE_DETAILS } from '../constants';

interface FooterProps {
  onNavigate: (target: string, isService?: boolean) => void;
  onBook: (e?: React.MouseEvent) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate, onBook }) => {
  const handleLinkClick = (e: React.MouseEvent, target: string, isService: boolean = false) => {
    e.preventDefault();
    onNavigate(target, isService);
  };

  const handleFormLink = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdb7q2wXizC43nv4NnNxfwfGQ1xLhqNqcBQ24uu4VxJGz9E_A/viewform?usp=preview', '_blank');
  };

  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-[#030712]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Contact */}
          <div className="space-y-6">
            <div>
              <Link 
                to="/"
                className="flex items-center gap-3 mb-4 group cursor-pointer"
                aria-label="Ritehly Quimbo Home"
              >
                <div className="w-10 h-10 rounded-lg overflow-hidden border border-blue-500/30 bg-blue-600/20 flex-shrink-0 shadow-lg shadow-blue-500/10">
                  <img 
                    src="https://lh3.googleusercontent.com/d/16MsRTezCaczZBh9aG6sz3HqZTDB62ve_" 
                    alt="" 
                    width="40"
                    height="40"
                    loading="lazy"
                    className="w-full h-full object-cover scale-[1.1]"
                  />
                </div>
                <span className="text-xl font-bold tracking-tight text-white uppercase italic">RITEHLY<span className="text-blue-500">QUIMBO</span></span>
              </Link>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs mb-6">
                Precision Search Engineering for ambitious brands. Data-driven growth through elite technical and content excellence.
              </p>
              
              <div className="space-y-3">
                <a href="mailto:seo@ritehlyquimbo.com" className="flex items-center gap-3 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-blue-600/10 border border-white/5 group-hover:border-blue-500/30 transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  seo@ritehlyquimbo.com
                </a>
                <a href="tel:09611525318" className="flex items-center gap-3 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-blue-600/10 border border-white/5 group-hover:border-blue-500/30 transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  09611525318
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://www.facebook.com/ritehly/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-morphism border border-white/10 flex items-center justify-center hover:bg-blue-600/20 hover:border-blue-500/50 transition-all group"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/ritehly-quimbo/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-morphism border border-white/10 flex items-center justify-center hover:bg-blue-600/20 hover:border-blue-500/50 transition-all group"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a 
                href="https://www.youtube.com/@ritseo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-morphism border border-white/10 flex items-center justify-center hover:bg-red-600/20 hover:border-red-500/50 transition-all group"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-widest flex items-center gap-2 italic">
              <span className="w-4 h-[1px] bg-blue-500"></span> Services
            </h4>
            <div className="flex flex-col gap-3">
              {SERVICES.slice(0, 6).map((service, i) => (
                <Link 
                  key={i} 
                  to={SERVICE_DETAILS[service.id]?.permalink || '/services'}
                  className="text-xs text-gray-500 hover:text-blue-400 transition-colors flex items-center gap-2 group text-left"
                >
                  {service.title}
                </Link>
              ))}
              <Link to="/services" className="text-[10px] text-blue-500 hover:text-blue-400 font-black uppercase tracking-widest mt-2">View All Services →</Link>
            </div>
          </div>

          {/* Locations Column */}
          <div>
            <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-widest flex items-center gap-2 italic">
              <span className="w-4 h-[1px] bg-blue-500"></span> Service Areas
            </h4>
            <div className="flex flex-col gap-3">
              <Link to="/locations/seo-cebu" className="text-xs text-gray-500 hover:text-blue-400 transition-colors text-left uppercase tracking-tighter font-black italic">SEO Cebu City</Link>
              <Link to="/locations/seo-mandaue-city" className="text-xs text-gray-500 hover:text-blue-400 transition-colors text-left uppercase tracking-tighter font-black italic">SEO Mandaue City</Link>
              <Link to="/locations/seo-lapu-lapu-city" className="text-xs text-gray-500 hover:text-blue-400 transition-colors text-left uppercase tracking-tighter font-black italic">SEO Lapu-Lapu City</Link>
              <Link to="/locations/seo-talisay-city" className="text-xs text-gray-500 hover:text-blue-400 transition-colors text-left uppercase tracking-tighter font-black italic">SEO Talisay City</Link>
              <Link to="/locations/seo-danao-city" className="text-xs text-gray-500 hover:text-blue-400 transition-colors text-left uppercase tracking-tighter font-black italic">SEO Danao City</Link>
              <Link to="/locations/seo-services-minglanilla" className="text-xs text-gray-500 hover:text-blue-400 transition-colors text-left uppercase tracking-tighter font-black italic">SEO Minglanilla</Link>
              <Link to="/locations/seo-manila" className="text-xs text-gray-500 hover:text-blue-400 transition-colors text-left uppercase tracking-tighter font-black italic text-blue-400/80">SEO Manila</Link>
              <Link to="/locations/seo-quezon-city" className="text-xs text-gray-500 hover:text-blue-400 transition-colors text-left uppercase tracking-tighter font-black italic text-blue-400/80">SEO Quezon City</Link>
              <Link to="/locations/seo-davao" className="text-xs text-gray-500 hover:text-blue-400 transition-colors text-left uppercase tracking-tighter font-black italic text-blue-400/80">SEO Davao</Link>
              <Link to="/locations/seo-makati-city" className="text-xs text-gray-500 hover:text-blue-400 transition-colors text-left uppercase tracking-tighter font-black italic text-blue-400/80">SEO Makati City</Link>
              <Link to="/locations/seo-taguig" className="text-xs text-gray-500 hover:text-blue-400 transition-colors text-left uppercase tracking-tighter font-black italic text-blue-400/80">SEO Taguig</Link>
              <Link to="/locations/seo-pasig-city" className="text-xs text-gray-500 hover:text-blue-400 transition-colors text-left uppercase tracking-tighter font-black italic text-blue-400/80">SEO Pasig City</Link>
              <Link to="/locations" className="text-[10px] text-blue-500 hover:text-blue-400 font-black uppercase tracking-widest mt-2">All Locations →</Link>
            </div>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-widest flex items-center gap-2 italic">
              <span className="w-4 h-[1px] bg-blue-500"></span> Explore
            </h4>
            <div className="flex flex-col gap-3">
              <Link to="/blog" className="text-xs text-blue-400 hover:text-white transition-colors font-bold text-left uppercase tracking-tighter italic">Growth Blog</Link>
              <Link to="/about" className="text-xs text-gray-500 hover:text-blue-400 transition-colors font-medium text-left">About Me</Link>
              <Link to="/portfolio" className="text-xs text-gray-500 hover:text-blue-400 transition-colors font-medium text-left">Portfolio Results</Link>
              <Link to="/pricing" className="text-xs text-gray-500 hover:text-white transition-colors font-medium text-left">SEO Pricing</Link>
              <Link to="/contact" className="text-xs text-gray-500 hover:text-blue-400 transition-colors font-medium text-left">Contact Me</Link>
              <button onClick={(e) => handleLinkClick(e, 'certificates')} className="text-xs text-gray-500 hover:text-blue-400 transition-colors font-medium text-left">Certificates</button>
              <div className="pt-2 flex flex-col gap-2">
                <button onClick={(e) => { onBook(e); }} className="text-xs text-white hover:text-blue-400 transition-colors font-black uppercase italic tracking-tighter text-left underline decoration-blue-500 underline-offset-4">Schedule Audit</button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-gray-500">
          <div>&copy; {new Date().getFullYear()} Ritehly Quimbo. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
