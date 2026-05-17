
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SERVICES, SERVICE_DETAILS, CASE_STUDIES } from '../constants';

interface NavigationProps {
  onNavigate: (target: string, isService?: boolean) => void;
  onBook: (e?: React.MouseEvent) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onNavigate, onBook }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<'services' | 'portfolio' | 'pricing' | null>(null);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = (id: string, isService: boolean = false) => {
    onNavigate(id, isService);
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsPortfolioOpen(false);
    setMobileExpanded(null);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileExpanded(null);
  };

  const toggleMobileSubmenu = (type: 'services' | 'portfolio' | 'pricing') => {
    setMobileExpanded(prev => prev === type ? null : type);
  };

  const serviceCategories = [
    { title: 'Search Strategy', services: SERVICES.slice(0, 4), color: 'text-blue-500', hover: 'group-hover/item:text-blue-400' },
    { title: 'Market Domination', services: SERVICES.slice(4, 8), color: 'text-purple-500', hover: 'group-hover/item:text-purple-400' },
    { title: 'Systems & Ops', services: SERVICES.slice(8, 12), color: 'text-green-500', hover: 'group-hover/item:text-green-400' }
  ];

  const portfolioCategories = [
    { 
      title: 'Technical Scaling', 
      studies: CASE_STUDIES.filter(s => ['maewellness', 'monstore'].includes(s.id)), 
      color: 'text-blue-500', 
      hover: 'group-hover/item:text-blue-400' 
    },
    { 
      title: 'Local Pack Dominance', 
      studies: CASE_STUDIES.filter(s => ['chattanooga', 'kinloss'].includes(s.id)), 
      color: 'text-purple-500', 
      hover: 'group-hover/item:text-purple-400' 
    },
    { 
      title: 'Authority & Leads', 
      studies: CASE_STUDIES.filter(s => ['bsl', 'excel'].includes(s.id)), 
      color: 'text-green-500', 
      hover: 'group-hover/item:text-green-400' 
    }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] glass-morphism border-b border-white/10 h-[72px] flex items-center px-4 md:px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full relative">
        {/* Logo */}
        <Link 
          to="/"
          onClick={() => { setIsMobileMenuOpen(false); setMobileExpanded(null); }}
          className="flex items-center gap-2 md:gap-3 group transition-transform active:scale-95"
          aria-label="Ritehly Quimbo Home"
        >
          <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg overflow-hidden border border-blue-500/30 flex-shrink-0 bg-blue-600/20">
            <img 
              src="https://lh3.googleusercontent.com/d/16MsRTezCaczZBh9aG6sz3HqZTDB62ve_" 
              alt="" 
              width="36"
              height="36"
              className="w-full h-full object-cover transition-all duration-300 scale-[1.1]"
            />
          </div>
          <span className="text-lg md:text-xl font-bold tracking-tight uppercase text-white">RITEHLY<span className="text-blue-500">QUIMBO</span></span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-[11px] font-bold uppercase tracking-widest text-gray-400">
          
          {/* Services Dropdown */}
          <div 
            className="relative group py-2"
            onMouseEnter={() => { setIsServicesOpen(true); setIsPortfolioOpen(false); setIsPricingOpen(false); }}
            onMouseLeave={() => setIsServicesOpen(false)}
            onClick={(e) => {
              if (window.matchMedia('(pointer: coarse)').matches) {
                if (!isServicesOpen) {
                  e.preventDefault();
                  setIsServicesOpen(true);
                  setIsPortfolioOpen(false);
                  setIsPricingOpen(false);
                }
              }
            }}
          >
            <Link 
              to="/services"
              onClick={() => { setIsServicesOpen(false); setIsMobileMenuOpen(false); }}
              className={`flex items-center gap-1 hover:text-white transition-colors ${isServicesOpen ? 'text-white' : ''}`}
            >
              Services
              <svg className={`w-3 h-3 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            <div className={`absolute top-full -left-[400px] pt-4 transition-all duration-300 ${isServicesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
              <div className="bg-[#080c18] border border-white/10 rounded-[3rem] p-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] w-[850px] flex overflow-hidden relative">
                <div className="relative z-10 grid grid-cols-3 gap-10 w-full">
                  {serviceCategories.map((cat, idx) => (
                    <div key={idx} className="space-y-6">
                      <span className={`text-[10px] ${cat.color} font-black tracking-[0.4em] uppercase mb-4 border-b border-white/5 pb-2 italic block`}>{cat.title}</span>
                      <div className="space-y-2">
                        {cat.services.map((s) => (
                          <Link 
                            key={s.id} 
                            to={SERVICE_DETAILS[s.id]?.permalink || '/services'}
                            onClick={() => { setIsServicesOpen(false); setIsMobileMenuOpen(false); }}
                            className="flex items-start gap-4 p-3 rounded-2xl hover:bg-white/5 transition-all text-left w-full group/item"
                          >
                            <span className="text-xl mt-1 group-hover/item:scale-125 transition-transform">{s.icon}</span>
                            <div className="flex-1">
                              <div className={`text-white text-xs font-black mb-1 ${cat.hover} uppercase tracking-tight italic`}>{s.title}</div>
                              <div className="text-gray-400 text-[10px] font-medium leading-relaxed line-clamp-2">{s.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio Dropdown */}
          <div 
            className="relative group py-2"
            onMouseEnter={() => { setIsPortfolioOpen(true); setIsServicesOpen(false); setIsPricingOpen(false); }}
            onMouseLeave={() => setIsPortfolioOpen(false)}
            onClick={(e) => {
              if (window.matchMedia('(pointer: coarse)').matches) {
                if (!isPortfolioOpen) {
                  e.preventDefault();
                  setIsPortfolioOpen(true);
                  setIsServicesOpen(false);
                  setIsPricingOpen(false);
                }
              }
            }}
          >
            <Link 
              to="/portfolio"
              onClick={() => { setIsPortfolioOpen(false); setIsMobileMenuOpen(false); }}
              className={`flex items-center gap-1 hover:text-white transition-colors ${isPortfolioOpen ? 'text-white' : ''}`}
            >
              Portfolio
              <svg className={`w-3 h-3 transition-transform duration-300 ${isPortfolioOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            <div className={`absolute top-full -left-[450px] pt-4 transition-all duration-300 ${isPortfolioOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
              <div className="bg-[#080c18] border border-white/10 rounded-[3rem] p-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] w-[900px] flex flex-col gap-10 overflow-hidden relative">
                {/* Main Portfolio Link */}
                <div className="flex items-center justify-between border-b border-white/5 pb-6">
                  <div className="flex gap-4">
                    <Link 
                      to="/portfolio" 
                      onClick={() => { setIsPortfolioOpen(false); setIsMobileMenuOpen(false); }}
                      className="group/main flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-4 rounded-2xl hover:bg-white/10 transition-all"
                    >
                      <div className="text-left">
                        <span className="text-[10px] text-blue-500 font-black tracking-widest uppercase italic block mb-1">Results Catalog</span>
                        <span className="text-white text-sm font-black uppercase tracking-tight italic group-hover/main:text-blue-400">All Case Studies →</span>
                      </div>
                    </Link>
                    <Link 
                      to="/portfolio/web-development" 
                      onClick={() => { setIsPortfolioOpen(false); setIsMobileMenuOpen(false); }}
                      className="group/main flex items-center gap-4 bg-purple-500/10 border border-purple-500/20 px-6 py-4 rounded-2xl hover:bg-purple-500/20 transition-all outline outline-1 outline-purple-500/30"
                    >
                      <div className="text-left">
                        <span className="text-[10px] text-purple-400 font-black tracking-widest uppercase italic block mb-1">Development Showcase</span>
                        <span className="text-white text-sm font-black uppercase tracking-tight italic group-hover/main:text-purple-400">Web Dev Portfolio →</span>
                      </div>
                    </Link>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] text-gray-500 font-black uppercase tracking-[0.3em]">Verified Results • 2024–2026</span>
                  </div>
                </div>

                <div className="relative z-10 grid grid-cols-3 gap-10 w-full">
                  {portfolioCategories.map((cat, idx) => (
                    <div key={idx} className="space-y-6">
                      <span className={`text-[10px] ${cat.color} font-black tracking-[0.4em] uppercase mb-4 border-b border-white/5 pb-2 italic block`}>{cat.title}</span>
                      <div className="space-y-2">
                        {cat.studies.map((s) => (
                          <Link 
                            key={s.id} 
                            to={s.permalink || '/portfolio'}
                            onClick={() => { setIsPortfolioOpen(false); setIsMobileMenuOpen(false); }}
                            className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/5 transition-all text-left w-full group/item"
                          >
                            <div className="w-10 h-10 rounded-lg overflow-hidden bg-white/5 border border-white/10 flex-shrink-0">
                               <img src={s.image} alt="" className="w-full h-full object-cover grayscale group-hover/item:grayscale-0 transition-all" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className={`text-white text-xs font-black mb-0.5 ${cat.hover} uppercase tracking-tight italic truncate`}>{s.title.split('–')[0]}</div>
                              <div className="text-gray-500 text-[9px] font-black uppercase tracking-widest">{s.results.traffic.split(' ')[0]} {s.results.traffic.split(' ')[1] || 'Growth'}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Dropdown */}
          <div 
            className="relative group py-2"
            onMouseEnter={() => { setIsPricingOpen(true); setIsServicesOpen(false); setIsPortfolioOpen(false); }}
            onMouseLeave={() => setIsPricingOpen(false)}
            onClick={(e) => {
              if (window.matchMedia('(pointer: coarse)').matches) {
                if (!isPricingOpen) {
                  e.preventDefault();
                  setIsPricingOpen(true);
                  setIsServicesOpen(false);
                  setIsPortfolioOpen(false);
                }
              }
            }}
          >
            <Link 
              to="/pricing"
              onClick={() => { setIsPricingOpen(false); setIsMobileMenuOpen(false); }}
              className={`flex items-center gap-1 hover:text-white transition-colors ${isPricingOpen ? 'text-white' : ''}`}
            >
              Pricing
              <svg className={`w-3 h-3 transition-transform duration-300 ${isPricingOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${isPricingOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
              <div className="bg-[#080c18] border border-white/10 rounded-3xl p-4 shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] w-[240px] flex flex-col gap-1">
                <Link 
                  to="/pricing"
                  onClick={() => { setIsPricingOpen(false); setIsMobileMenuOpen(false); }}
                  className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 group/item transition-all text-left"
                >
                  <span className="text-white text-[11px] font-black uppercase tracking-tight italic group-hover/item:text-blue-400">SEO Blueprints</span>
                  <ArrowRight className="w-3 h-3 text-gray-600 group-hover/item:text-blue-500 transition-colors" />
                </Link>
                <Link 
                  to="/pricing/local-seo-strategy"
                  onClick={() => { setIsPricingOpen(false); setIsMobileMenuOpen(false); }}
                  className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 group/item transition-all text-left"
                >
                  <span className="text-white text-[11px] font-black uppercase tracking-tight italic group-hover/item:text-blue-400">Local SEO Plans</span>
                  <ArrowRight className="w-3 h-3 text-gray-600 group-hover/item:text-blue-500 transition-colors" />
                </Link>
                <Link 
                  to="/pricing/web-dev-packages"
                  onClick={() => { setIsPricingOpen(false); setIsMobileMenuOpen(false); }}
                  className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 group/item transition-all text-left"
                >
                  <span className="text-white text-[11px] font-black uppercase tracking-tight italic group-hover/item:text-blue-400">Web Dev Packages</span>
                  <ArrowRight className="w-3 h-3 text-gray-600 group-hover/item:text-blue-500 transition-colors" />
                </Link>
                <Link 
                  to="/pricing/ai-automation-plans"
                  onClick={() => { setIsPricingOpen(false); setIsMobileMenuOpen(false); }}
                  className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 group/item transition-all text-left"
                >
                  <span className="text-white text-[11px] font-black uppercase tracking-tight italic group-hover/item:text-blue-400">AI Automation Plans</span>
                  <ArrowRight className="w-3 h-3 text-gray-600 group-hover/item:text-blue-500 transition-colors" />
                </Link>
                <Link 
                  to="/pricing/google-ads-sem"
                  onClick={() => { setIsPricingOpen(false); setIsMobileMenuOpen(false); }}
                  className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 group/item transition-all text-left"
                >
                  <span className="text-white text-[11px] font-black uppercase tracking-tight italic group-hover/item:text-blue-400">Google Ads Plans</span>
                  <ArrowRight className="w-3 h-3 text-gray-600 group-hover/item:text-blue-500 transition-colors" />
                </Link>
              </div>
            </div>
          </div>

          <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors">Blog</Link>
          <Link to="/locations" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors">Locations</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors">About</Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors">Contact</Link>
          <Link to="/resume" onClick={() => setIsMobileMenuOpen(false)} className="text-blue-500 hover:text-blue-400 font-black transition-colors">Resume</Link>
          <button onClick={(e) => { onBook(e); setIsMobileMenuOpen(false); }} className="px-4 py-2 bg-blue-600/10 border border-blue-500/30 rounded-lg hover:bg-blue-600 transition-all text-blue-500 hover:text-white font-black animate-shine glow-blue">Book Now</button>
        </div>

        {/* Mobile Burger Toggle */}
        <button 
          className="lg:hidden text-gray-400 hover:text-white transition-colors p-4 -mr-4 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <span className="w-6 h-0.5 bg-current rounded-full"></span>
          <span className="w-6 h-0.5 bg-current rounded-full"></span>
          <span className="w-4 h-0.5 bg-current rounded-full self-end"></span>
        </button>
      </div>

      {/* Mobile Menu Overlay - TRANSLUCENT BACKGROUND */}
      <div 
        className={`lg:hidden fixed inset-0 bg-[#030712] z-[200] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col ${
          isMobileMenuOpen 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        {/* Mobile Header Inside Menu */}
        <div className="h-[72px] flex items-center justify-between px-6 border-b border-white/10 bg-[#030712] shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-blue-500/30 bg-blue-600/20">
              <img src="https://lh3.googleusercontent.com/d/16MsRTezCaczZBh9aG6sz3HqZTDB62ve_" alt="" className="w-full h-full object-cover" />
            </div>
            <span className="text-base font-black uppercase text-white tracking-tighter italic">RITEHLY<span className="text-blue-500">QUIMBO</span></span>
          </div>
          <button 
            onClick={closeMobileMenu} 
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto bg-transparent px-6 pt-2 pb-72">
          
          <div className="space-y-4">
            {/* Services Accordion */}
            <div className={`rounded-3xl border transition-all duration-300 ${mobileExpanded === 'services' ? 'bg-[#080c18] border-blue-500/30' : 'bg-[#080c18] border-white/5'}`}>
              <button 
                onClick={() => toggleMobileSubmenu('services')}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-black text-white uppercase tracking-[0.3em] italic">Full-Stack Services</span>
                  <span className="text-[9px] text-blue-500 font-bold uppercase tracking-widest">12 Specialized Growth Solutions</span>
                </div>
                <div className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-blue-500 transition-transform duration-300 ${mobileExpanded === 'services' ? 'rotate-180' : ''}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${mobileExpanded === 'services' ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                <div className="px-6 pb-6 pt-2 space-y-8">
                  {serviceCategories.map((cat, idx) => (
                    <div key={idx} className="space-y-4">
                      <div className={`text-[10px] font-black ${cat.color} uppercase tracking-[0.4em] italic flex items-center gap-2`}>
                        <span className="w-4 h-px bg-current opacity-30"></span>
                        {cat.title}
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {cat.services.map(s => (
                          <Link 
                            key={s.id} 
                            to={SERVICE_DETAILS[s.id]?.permalink || '/services'}
                            onClick={() => { setIsMobileMenuOpen(false); setMobileExpanded(null); }}
                            className="flex flex-col items-center justify-center gap-2 p-3 bg-[#0f172a] rounded-xl border border-white/10 text-center active:bg-blue-600/20 active:border-blue-500/30 transition-all"
                          >
                            <span className="text-2xl bg-white/5 w-10 h-10 flex items-center justify-center rounded-lg overflow-hidden mb-0.5">{s.icon}</span>
                            <span className="text-white text-[9px] font-black uppercase italic leading-tight">{s.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  <Link 
                    to="/services"
                    onClick={() => { setIsMobileMenuOpen(false); setMobileExpanded(null); }}
                    className="w-full py-5 border border-blue-500/30 bg-blue-600/10 rounded-xl text-blue-400 font-black text-[11px] uppercase tracking-widest italic flex items-center justify-center"
                  >
                    View Capabilities Map →
                  </Link>
                </div>
              </div>
            </div>

            {/* Portfolio Accordion */}
            <div className={`rounded-3xl border transition-all duration-300 ${mobileExpanded === 'portfolio' ? 'bg-[#080c18] border-purple-500/30' : 'bg-[#080c18] border-white/5'}`}>
              <button 
                onClick={() => toggleMobileSubmenu('portfolio')}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-black text-white uppercase tracking-[0.3em] italic">Growth Portfolio</span>
                  <span className="text-[9px] text-purple-500 font-bold uppercase tracking-widest">Verified Case Studies</span>
                </div>
                <div className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-purple-500 transition-transform duration-300 ${mobileExpanded === 'portfolio' ? 'rotate-180' : ''}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${mobileExpanded === 'portfolio' ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                <div className="px-6 pb-6 pt-2 space-y-8">
                  <div className="grid grid-cols-2 gap-3 pb-2">
                    <Link 
                      to="/portfolio"
                      onClick={() => { setIsMobileMenuOpen(false); setMobileExpanded(null); }}
                      className="flex flex-col items-center justify-center gap-2 p-4 bg-white/5 border border-white/10 rounded-2xl text-center active:bg-white/10 transition-all"
                    >
                      <span className="text-gray-400 font-black text-[10px] uppercase italic tracking-widest">Case Studies</span>
                      <span className="text-white text-xs font-black uppercase italic tracking-tight">Catalog</span>
                    </Link>
                    <Link 
                      to="/portfolio/web-development"
                      onClick={() => { setIsMobileMenuOpen(false); setMobileExpanded(null); }}
                      className="flex flex-col items-center justify-center gap-2 p-4 bg-purple-500/10 border border-purple-500/30 rounded-2xl text-center active:bg-purple-500/20 transition-all"
                    >
                      <span className="text-purple-400 font-black text-[10px] uppercase italic tracking-widest">Showcase</span>
                      <span className="text-white text-xs font-black uppercase italic tracking-tight">Web Portolio</span>
                    </Link>
                  </div>
                  {portfolioCategories.map((cat, idx) => (
                    <div key={idx} className="space-y-4">
                      <div className={`text-[10px] font-black ${cat.color} uppercase tracking-[0.4em] italic flex items-center gap-2`}>
                        <span className="w-4 h-px bg-current opacity-30"></span>
                        {cat.title}
                      </div>
                      <div className="space-y-3">
                        {cat.studies.map(s => (
                          <Link 
                            key={s.id} 
                            to={s.permalink || '/portfolio'}
                            onClick={() => { setIsMobileMenuOpen(false); setMobileExpanded(null); }}
                            className="flex items-center gap-3 w-full p-3 bg-[#0f172a] rounded-xl border border-white/10 text-left active:bg-purple-600/20 active:border-purple-500/30 transition-all"
                          >
                            <div className="w-12 h-12 rounded-lg overflow-hidden bg-white/10 border border-white/5 shrink-0">
                              <img src={s.image} alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-white text-[11px] font-black uppercase italic tracking-tight truncate border-b border-white/10 pb-0.5 mb-0.5">{s.title.split('–')[0]}</div>
                              <div className={`text-[9px] font-bold uppercase tracking-wider ${cat.color}`}>{s.results.traffic.split(' ')[0]} Growth</div>
                            </div>
                            <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  <Link 
                    to="/portfolio"
                    onClick={() => { setIsMobileMenuOpen(false); setMobileExpanded(null); }}
                    className="w-full py-5 border border-purple-500/30 bg-purple-600/10 rounded-xl text-purple-400 font-black text-[11px] uppercase tracking-widest italic flex items-center justify-center"
                  >
                    View Results Portfolio →
                  </Link>
                </div>
              </div>
            </div>

            {/* Pricing Accordion */}
            <div className={`rounded-3xl border transition-all duration-300 ${mobileExpanded === 'pricing' ? 'bg-[#080c18] border-blue-500/30' : 'bg-[#080c18] border-white/5'}`}>
              <button 
                onClick={() => toggleMobileSubmenu('pricing')}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-black text-white uppercase tracking-[0.3em] italic">Pricing Plans</span>
                  <span className="text-[9px] text-blue-500 font-bold uppercase tracking-widest">SEO & Web Development Blueprints</span>
                </div>
                <div className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-blue-500 transition-transform duration-300 ${mobileExpanded === 'pricing' ? 'rotate-180' : ''}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${mobileExpanded === 'pricing' ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                <div className="px-6 pb-6 space-y-3">
                  <Link 
                    to="/pricing"
                    onClick={() => { setIsMobileMenuOpen(false); setMobileExpanded(null); }}
                    className="flex items-center justify-between w-full p-5 bg-[#0f172a] rounded-2xl border border-white/10 active:bg-white/10 transition-colors"
                  >
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-300 italic">SEO Strategy Pricing</span>
                    <ArrowRight className="w-4 h-4 text-blue-500" />
                  </Link>
                  <Link 
                    to="/pricing/local-seo-strategy"
                    onClick={() => { setIsMobileMenuOpen(false); setMobileExpanded(null); }}
                    className="flex items-center justify-between w-full p-5 bg-[#0f172a] rounded-2xl border border-white/10 active:bg-white/10 transition-colors"
                  >
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-300 italic">Local SEO Strategy</span>
                    <ArrowRight className="w-4 h-4 text-blue-500" />
                  </Link>
                  <Link 
                    to="/pricing/web-dev-packages"
                    onClick={() => { setIsMobileMenuOpen(false); setMobileExpanded(null); }}
                    className="flex items-center justify-between w-full p-5 bg-[#0f172a] rounded-2xl border border-white/10 active:bg-white/10 transition-colors"
                  >
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-300 italic">Web Dev Packages</span>
                    <ArrowRight className="w-4 h-4 text-blue-500" />
                  </Link>
                  <Link 
                    to="/pricing/ai-automation-plans"
                    onClick={() => { setIsMobileMenuOpen(false); setMobileExpanded(null); }}
                    className="flex items-center justify-between w-full p-5 bg-[#0f172a] rounded-2xl border border-white/10 active:bg-white/10 transition-colors"
                  >
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-300 italic">AI Automation Plans</span>
                    <ArrowRight className="w-4 h-4 text-blue-500" />
                  </Link>
                  <Link 
                    to="/pricing/google-ads-sem"
                    onClick={() => { setIsMobileMenuOpen(false); setMobileExpanded(null); }}
                    className="flex items-center justify-between w-full p-5 bg-[#0f172a] rounded-2xl border border-white/10 active:bg-white/10 transition-colors"
                  >
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-300 italic">Google Ads Plans</span>
                    <ArrowRight className="w-4 h-4 text-blue-500" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Other Mobile Links */}
            <div className="grid grid-cols-1 gap-3 pt-6">
              {[
                { id: 'blog', label: 'Strategy Blog', color: 'text-blue-400', path: '/blog' },
                { id: 'locations', label: 'Locations', color: 'text-gray-300', path: '/locations' },
                { id: 'about', label: 'About Me', color: 'text-gray-300', path: '/about' },
                { id: 'contact', label: 'Contact', color: 'text-gray-300', path: '/contact' },
                { id: 'resume', label: 'Resume', color: 'text-blue-500', path: '/resume' }
              ].map(link => (
                <Link 
                  key={link.id} 
                  to={link.path}
                  onClick={() => { setIsMobileMenuOpen(false); setMobileExpanded(null); }}
                  className="flex items-center justify-between p-5 bg-[#0f172a] rounded-2xl border border-white/10 active:bg-white/10 transition-colors"
                >
                  <span className={`text-xs font-black uppercase tracking-[0.2em] italic ${link.color}`}>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-blue-500" />
                </Link>
              ))}
            </div>

            <div className="pt-6">
              <button 
                onClick={(e) => { onBook(e); setIsMobileMenuOpen(false); }} 
                className="w-full py-6 bg-blue-600 active:bg-blue-700 text-white font-black rounded-2xl uppercase tracking-tighter text-xl italic shadow-2xl shadow-blue-500/30 transition-all active:scale-[0.98]"
              >
                Inquire (Google Form)
              </button>
            </div>
          </div>

        </div>
      </div>
    </nav>

  );
};

export default Navigation;
