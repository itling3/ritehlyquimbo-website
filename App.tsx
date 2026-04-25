
import React, { useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useParams, Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';
import SEO from './components/SEO';
import Navigation from './components/Navigation';
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
import AboutView from './components/AboutView';
import ContactView from './components/ContactView';
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
        
        <Route path="/about" element={
          <div className="min-h-screen">
            <SEO 
              title="About SEO Specialist | Growth Engineer Mission" 
              description="Learn about Ritehly Quimbo, an SEO specialist & growth engineer from the Philippines helping SMBs scale sales with autonomous growth systems." 
              keywords="ritehly quimbo, seo specialist philippines, growth marketing engineer, seo consultant, digital marketing expert"
            />
            <AboutView onBack={() => navigate('/')} onBook={handleBookConsultation} />
          </div>
        } />

        <Route path="/resume" element={
          <div className="min-h-screen">
            <SEO 
              title="SEO Specialist Resume | Growth Engineer Track Record" 
              description="View the professional trajectory and technical mastery of Ritehly Quimbo, a top-tier SEO specialist and growth marketing engineer with a proven track record." 
              keywords="seo resume, ritehly quimbo portfolio, search analyst experience, growth engineering background, technical seo expert"
            />
            <ResumeView onBack={() => navigate('/')} />
          </div>
        } />

        <Route path="/contact" element={
          <div className="min-h-screen">
            <SEO 
              title="Contact SEO Expert | Scale Your Business Leads" 
              description="Ready to scale your leads? Contact Ritehly Quimbo, the top SEO & Growth Specialist in the Philippines for strategy inquiries and consultations." 
              keywords="contact seo expert, hire growth marketer, seo consultation philippines, business scaling strategy, digital growth leads"
            />
            <ContactView onBack={() => navigate('/')} onBook={handleBookConsultation} />
          </div>
        } />

        <Route path="/services" element={
          <ServicesOverview 
            onBack={() => navigate('/')} 
            onServiceClick={(id) => id === 'audit' ? handleBookConsultation() : handleNavigate(id, true)} 
            onBook={handleBookConsultation}
          />
        } />

        <Route path="/services/:slug" element={<ServiceSlugWrapper navigate={navigate} handleBook={handleBookConsultation} handleNavigate={handleNavigate} />} />

        <Route path="/portfolio" element={
          <PortfolioOverview 
            onBack={() => navigate('/')} 
            onCaseStudyClick={(id) => handleNavigate(id)} 
          />
        } />

        <Route path="/portfolio/:slug" element={<PortfolioSlugWrapper navigate={navigate} handleBook={handleBookConsultation} />} />

        <Route path="/pricing" element={<PricingView onBack={() => navigate('/')} onBook={handleBookConsultation} onForm={handleOpenForm} />} />
        <Route path="/pricing/local-seo-strategy" element={
          <div className="min-h-screen">
            <SEO 
              title="Local SEO Pricing | Dominate Your City Rankings" 
              description="Transparent local SEO pricing tiers designed to help your business dominate the local map pack and neighborhood search results. Affordable growth plans." 
              keywords="local seo pricing, gmb optimization cost, local map pack services, affordable seo philippines, city ranking strategy"
            />
            <LocalSEOPricingView onBack={() => navigate('/')} onBook={handleBookConsultation} onForm={handleOpenForm} />
          </div>
        } />
        <Route path="/pricing/ai-automation-plans" element={
          <div className="min-h-screen">
            <SEO 
              title="AI Automation Pricing | High-Performance Marketing Ops" 
              description="Scale your marketing operations with AI-driven automation. See our pricing plans for custom AI workflows, agents, and autonomous growth systems." 
              keywords="ai automation pricing, marketing automation cost, n8n workflow services, ai agent development, business automation plans"
            />
            <AIAutomationPricingView onBack={() => navigate('/')} onBook={handleBookConsultation} onForm={handleOpenForm} />
          </div>
        } />
        <Route path="/pricing/google-ads-sem" element={
          <div className="min-h-screen">
            <SEO 
              title="Google Ads Pricing | Immediate Demand Capture" 
              description="Accelerate your growth with precision managed Google Ads. View our ROI-focused PPC management pricing and immediate demand capture strategies." 
              keywords="google ads management pricing, ppc management cost, sem services price, google ads expert philippines, roi focused ads"
            />
            <SEMPricingView onBack={() => navigate('/')} onBook={handleBookConsultation} />
          </div>
        } />
        <Route path="/pricing/web-dev-packages" element={
          <div className="min-h-screen">
            <SEO 
              title="WordPress & Elementor Pricing | SEO-Ready Web Engines" 
              description="High-performance, secure, and SEO-optimized WordPress web builds using Elementor. See our web development pricing packages for growth-ready sites." 
              keywords="wordpress development pricing, elementor web design cost, seo friendly web builds, high performance websites, custom wordpress developer"
            />
            <WebDevPricingView onBack={() => navigate('/')} onBook={handleBookConsultation} onForm={handleOpenForm} />
          </div>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer onNavigate={handleNavigate} onBook={handleBookConsultation} />
      {isCalendarOpen && <CalendarModal onClose={closeCalendar} />}
    </div>
  );
};

const ServiceSlugWrapper: React.FC<{ navigate: any, handleBook: any, handleNavigate: any }> = ({ navigate, handleBook, handleNavigate }) => {
  const { slug } = useParams();
  const service = Object.values(SERVICE_DETAILS).find(s => s.slug === slug);
  
  if (!service) return <div className="min-h-screen flex items-center justify-center text-white">Service Not Found</div>;

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
  
  if (!study) return <div className="min-h-screen flex items-center justify-center text-white">Case Study Not Found</div>;

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
