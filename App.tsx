
import React, { useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useParams, Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';
import SEO from './components/SEO';
import Navigation from './components/Navigation';
import Breadcrumbs from './components/Breadcrumbs';
import Hero from './components/Hero';
import WhyChooseMe from './components/WhyChooseMe';
import HowItWorks from './components/HowItWorks';
import Portfolio from './components/Portfolio';
import ClientsMarquee from './components/ClientsMarquee';
import TestimonialsSlider from './components/TestimonialsSlider';
import AuditTool from './components/AuditTool';
import SEOExpenseCalculator from './components/SEOExpenseCalculator';
import SectionCTA from './components/SectionCTA';
import Footer from './components/Footer';
import ServiceDetailView from './components/ServiceDetailView';
import CaseStudyDetailView from './components/CaseStudyDetailView';
import ServicesOverview from './components/ServicesOverview';
import PortfolioOverview from './components/PortfolioOverview';
import ResumeView from './components/ResumeView';
import PricingView from './components/PricingView';
import WebDevPricingView from './components/WebDevPricingView';
import LocalSEOPricingView from './components/LocalSEOPricingView';
import AIAutomationPricingView from './components/AIAutomationPricingView';
import SEMPricingView from './components/SEMPricingView';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import ResumePage from './pages/Resume';
import ServicesPage from './pages/Services';
import PortfolioPage from './pages/Portfolio';
import PricingPage from './pages/Pricing';
import PricingLocalSEOPage from './pages/PricingLocalSEO';
import PricingAIPage from './pages/PricingAI';
import PricingSEMPage from './pages/PricingSEM';
import PricingWebDevPage from './pages/PricingWebDev';
import LocationsPage from './pages/Locations';
import NotFound from './components/NotFound';
import Home from './pages/Home';
import { SERVICES, SERVICE_DETAILS, REVIEWS, TOOL_LOGOS, FAQS, CERTIFICATES, CASE_STUDIES } from './constants';
import { ServiceContent, CaseStudy } from './types';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AppContent />
      </BrowserRouter>
    </HelmetProvider>
  );
};

const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleBookConsultation = useCallback((e?: React.MouseEvent) => {
    e?.preventDefault();
    setIsCalendarOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const handleOpenForm = useCallback((e?: React.MouseEvent) => {
    e?.preventDefault();
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdb7q2wXizC43nv4NnNxfwfGQ1xLhqNqcBQ24uu4VxJGz9E_A/viewform?usp=preview', '_blank');
  }, []);

  const closeCalendar = useCallback(() => {
    setIsCalendarOpen(false);
    document.body.style.overflow = 'unset';
  }, []);

  const handleNavigate = useCallback((target: string, isService: boolean = false) => {
    if (target === 'contact') {
      navigate('/contact');
      return;
    }
    if (target === 'about') {
      navigate('/about');
      return;
    }
    if (target === 'resume') {
      navigate('/resume');
      return;
    }
    if (target === 'pricing') {
      navigate('/pricing');
      return;
    }
    if (target === 'sem-pricing') {
      navigate('/pricing/google-ads-sem');
      return;
    }
    if (target === 'ai-automation-pricing') {
      navigate('/pricing/ai-automation-plans');
      return;
    }
    if (target === 'local-seo-pricing') {
      navigate('/pricing/local-seo-strategy');
      return;
    }
    if (target === 'web-dev-pricing') {
      navigate('/pricing/web-dev-packages');
      return;
    }
    if (target === 'services-overview') {
      navigate('/services');
      return;
    }
    if (target === 'portfolio-overview') {
      navigate('/portfolio');
      return;
    }
    if (target === 'locations') {
      navigate('/locations');
      return;
    }

    if (isService) {
      const detail = SERVICE_DETAILS[target as keyof typeof SERVICE_DETAILS];
      if (detail) {
        navigate(`/services/${detail.slug}`);
      }
    } else {
      const study = CASE_STUDIES.find(s => s.id === target);
      if (study) {
        navigate(`/portfolio/${study.slug}`);
      } else {
        if (target === '') {
          navigate('/');
        } else {
          // Check if we are on home page, if so scroll. If not, go home then scroll.
          if (window.location.pathname === '/') {
            const element = document.getElementById(target);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          } else {
            navigate(`/#${target}`);
          }
        }
      }
    }
  }, [navigate]);

  return (
    <div className="min-h-screen">
      <Navigation onNavigate={handleNavigate} onBook={handleBookConsultation} />
      <Breadcrumbs />
      
      <Routes>
        <Route path="/" element={
          <Home 
            onNavigate={handleNavigate} 
            onBook={handleBookConsultation} 
            onOpenForm={handleOpenForm}
            onViewCaseStudy={(id) => handleNavigate(id)}
            activeFaq={activeFaq}
            setActiveFaq={setActiveFaq}
          />
        } />
        
        <Route path="/about" element={<AboutPage onBook={handleBookConsultation} />} />

        <Route path="/resume" element={<ResumePage />} />

        <Route path="/contact" element={<ContactPage onBook={handleBookConsultation} />} />

        <Route path="/services" element={<ServicesPage onBook={handleBookConsultation} handleNavigate={handleNavigate} />} />

        <Route path="/services/:slug" element={<ServiceSlugWrapper navigate={navigate} handleBook={handleBookConsultation} handleNavigate={handleNavigate} />} />

        <Route path="/portfolio" element={<PortfolioPage handleNavigate={handleNavigate} />} />

        <Route path="/portfolio/:slug" element={<PortfolioSlugWrapper navigate={navigate} handleBook={handleBookConsultation} />} />

        <Route path="/pricing" element={<PricingPage onBook={handleBookConsultation} onForm={handleOpenForm} />} />
        
        <Route path="/pricing/local-seo-strategy" element={<PricingLocalSEOPage onBook={handleBookConsultation} onForm={handleOpenForm} />} />
        
        <Route path="/pricing/ai-automation-plans" element={<PricingAIPage onBook={handleBookConsultation} onForm={handleOpenForm} />} />
        
        <Route path="/pricing/google-ads-sem" element={<PricingSEMPage onBook={handleBookConsultation} />} />
        
        <Route path="/pricing/web-dev-packages" element={<PricingWebDevPage onBook={handleBookConsultation} onForm={handleOpenForm} />} />
        <Route path="/locations" element={<LocationsPage onBook={handleBookConsultation} />} />
        <Route path="/locations/seo-cebu" element={<ServiceSlugWrapper navigate={navigate} handleBook={handleBookConsultation} handleNavigate={handleNavigate} slugOverride="seo-cebu" />} />
        <Route path="/locations/seo-mandaue-city" element={<ServiceSlugWrapper navigate={navigate} handleBook={handleBookConsultation} handleNavigate={handleNavigate} slugOverride="seo-mandaue-city" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer onNavigate={handleNavigate} onBook={handleBookConsultation} />
      {isCalendarOpen && <CalendarModal onClose={closeCalendar} />}
    </div>
  );
};

const ServiceSlugWrapper: React.FC<{ navigate: any, handleBook: any, handleNavigate: any, slugOverride?: string }> = ({ navigate, handleBook, handleNavigate, slugOverride }) => {
  const { slug } = useParams();
  const currentSlug = slugOverride || slug;
  const service = Object.values(SERVICE_DETAILS).find(s => s.slug === currentSlug);
  
  if (!service) return <NotFound />;

  return (
    <ServiceDetailView 
      service={service} 
      onBack={() => navigate('/services')} 
      onBook={handleBook}
      onPricingClick={(id) => handleNavigate(id)}
    />
  );
};

const PortfolioSlugWrapper: React.FC<{ navigate: any, handleBook: any }> = ({ navigate, handleBook }) => {
  const { slug } = useParams();
  const study = CASE_STUDIES.find(s => s.slug === slug);
  
  if (!study) return <NotFound />;

  return (
    <CaseStudyDetailView 
      study={study} 
      onBack={() => navigate('/portfolio')} 
      onBook={handleBook}
    />
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
