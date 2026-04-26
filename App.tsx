
import React, { useState, useEffect, useCallback } from 'react';
import ScrollToTop from './components/ScrollToTop';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ServiceDetailView from './components/ServiceDetailView';
import CaseStudyDetailView from './components/CaseStudyDetailView';
import ServicesOverview from './components/ServicesOverview';
import PortfolioOverview from './components/PortfolioOverview';
import PricingView from './components/PricingView';
import WebDevPricingView from './components/WebDevPricingView';
import LocalSEOPricingView from './components/LocalSEOPricingView';
import AIAutomationPricingView from './components/AIAutomationPricingView';
import SEMPricingView from './components/SEMPricingView';
import ResumeView from './components/ResumeView';
import AboutView from './components/AboutView';
import ContactView from './components/ContactView';
import NotFound from './components/NotFound';
import Home from './pages/Home';
import { SERVICE_DETAILS, CASE_STUDIES } from './constants';

const App: React.FC = () => {
  const [path, setPath] = useState(window.location.pathname);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleBookConsultation = useCallback((e?: React.MouseEvent) => {
    e?.preventDefault();
    setIsCalendarOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeCalendar = useCallback(() => {
    setIsCalendarOpen(false);
    document.body.style.overflow = 'unset';
  }, []);

  const handleNavigate = (target: string) => {
    window.location.href = target;
  };

  // Normalization
  let cleanPath = path.split('?')[0].split('#')[0];
  if (cleanPath.length > 1 && cleanPath.endsWith('/')) {
    cleanPath = cleanPath.slice(0, -1);
  }

  const renderContent = () => {
    if (cleanPath === '/' || !cleanPath) {
      return (
        <Home 
          onNavigate={handleNavigate} 
          onBook={handleBookConsultation} 
          onOpenForm={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdb7q2wXizC43nv4NnNxfwfGQ1xLhqNqcBQ24uu4VxJGz9E_A/viewform?usp=preview', '_blank')}
          onViewCaseStudy={(id) => {
            const study = CASE_STUDIES.find(s => s.id === id);
            if (study) handleNavigate(study.permalink);
          }}
        />
      );
    }

    if (cleanPath === '/about') return <AboutView onBack={() => handleNavigate('/')} onBook={handleBookConsultation} />;
    if (cleanPath === '/contact') return <ContactView onBack={() => handleNavigate('/')} />;
    if (cleanPath === '/resume') return <ResumeView onBack={() => handleNavigate('/')} />;
    if (cleanPath === '/pricing') return <PricingView onBack={() => handleNavigate('/')} onBook={handleBookConsultation} onForm={() => {}} />;
    if (cleanPath === '/pricing/local-seo-strategy') return <LocalSEOPricingView onBack={() => handleNavigate('/pricing')} onBook={handleBookConsultation} onForm={() => {}} />;
    if (cleanPath === '/pricing/ai-automation-plans') return <AIAutomationPricingView onBack={() => handleNavigate('/pricing')} onBook={handleBookConsultation} onForm={() => {}} />;
    if (cleanPath === '/pricing/google-ads-sem') return <SEMPricingView onBack={() => handleNavigate('/pricing')} onBook={handleBookConsultation} />;
    if (cleanPath === '/pricing/web-dev-packages') return <WebDevPricingView onBack={() => handleNavigate('/pricing')} onBook={handleBookConsultation} onForm={() => {}} />;
    if (cleanPath === '/services') return <ServicesOverview onBack={() => handleNavigate('/')} onServiceClick={(id) => handleNavigate(SERVICE_DETAILS[id as keyof typeof SERVICE_DETAILS]?.permalink || '/services')} onBook={handleBookConsultation} />;
    if (cleanPath === '/portfolio') return <PortfolioOverview onBack={() => handleNavigate('/')} onCaseStudyClick={(id) => {
      const study = CASE_STUDIES.find(s => s.id === id);
      if (study) handleNavigate(study.permalink);
    }} />;

    const pathParts = cleanPath.split('/').filter(Boolean);
    if (pathParts[0] === 'services' && pathParts[1]) {
      const service = Object.values(SERVICE_DETAILS).find(s => s.slug === pathParts[1]);
      if (service) return <ServiceDetailView service={service} onBack={() => handleNavigate('/services')} onBook={handleBookConsultation} onPricingClick={handleNavigate} />;
    }
    if (pathParts[0] === 'portfolio' && pathParts[1]) {
      const study = CASE_STUDIES.find(s => s.slug === pathParts[1]);
      if (study) return <CaseStudyDetailView study={study} onBack={() => handleNavigate('/portfolio')} onBook={handleBookConsultation} />;
    }

    return <NotFound />;
  };

  return (
    <div className="min-h-screen bg-[#020617]">
      <ScrollToTop />
      <Navigation onNavigate={handleNavigate} onBook={handleBookConsultation} />
      <main className="pt-[72px]">
        {renderContent()}
      </main>
      <Footer onNavigate={handleNavigate} onBook={handleBookConsultation} />
      {isCalendarOpen && <CalendarModal onClose={closeCalendar} />}
    </div>
  );
};

interface CalendarModalProps {
  onClose: () => void;
}

const CalendarModal: React.FC<CalendarModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-pointer" 
        onClick={onClose}
      ></div>
      <div className="relative w-full max-w-4xl h-[85vh] glass-morphism border border-white/10 rounded-[2rem] overflow-hidden flex flex-col shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)]">
        <div className="px-6 py-4 border-b border-white/10 flex justify-between items-center bg-black/40">
          <div>
            <h2 className="text-white font-black uppercase italic tracking-tighter text-xl">Schedule Session</h2>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex-1 bg-white relative">
          <iframe 
            src="https://calendar.google.com/calendar/embed?src=ritehlyquimbo%40gmail.com&ctz=Asia%2FManila" 
            style={{ border: 0 }} 
            className="w-full h-full"
            frameBorder="0" 
            scrolling="no"
          ></iframe>
        </div>
        <div className="px-6 py-3 border-t border-white/10 bg-black/40 text-center">
          <p className="text-[10px] text-gray-500 uppercase font-black tracking-[0.2em]">
            Time Zone: Asia/Manila (GMT+8)
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
