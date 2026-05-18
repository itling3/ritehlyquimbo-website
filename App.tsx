
import React, { useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useParams, Link, Navigate } from 'react-router-dom';
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
import CMSSEOPage from './pages/CMSSEO';
import WordPressSEOExpertPage from './pages/WordPressSEOExpert';
import DrupalSEOExpertPage from './pages/DrupalSEOExpert';
import JoomlaSEOExpertPage from './pages/JoomlaSEOExpert';
import TYPO3SEOExpertPage from './pages/TYPO3SEOExpert';
import GhostSEOExpertPage from './pages/GhostSEOExpert';
import CraftCMSSEOExpertPage from './pages/CraftCMSSEOExpert';
import ConcreteCMSSEOExpertPage from './pages/ConcreteCMSSEOExpert';
import MODXSEOExpertPage from './pages/MODXSEOExpert';
import ContentfulCMSSEOExpertPage from './pages/ContentfulCMSSEOExpert';
import StoryblokSEOExpertPage from './pages/StoryblokSEOExpert';
import WooCommerceSEOExpertPage from './pages/WooCommerceSEOExpert';
import ShopifySEOExpertPage from './pages/ShopifySEOExpert';
import WebflowSEOExpertPage from './pages/WebflowSEOExpert';
import WebDevPortfolioPage from './pages/WebDevPortfolio';
import LocationsPage from './pages/Locations';
import PrivacyPolicyPage from './pages/PrivacyPolicy';
import TermsOfServicePage from './pages/TermsOfService';
import BlogPage from './pages/Blog';
import BlogPostView from './components/BlogPostView';
import NotFound from './components/NotFound';
import Home from './pages/Home';
import { SERVICES, SERVICE_DETAILS, REVIEWS, TOOL_LOGOS, FAQS, CERTIFICATES, CASE_STUDIES, BLOG_POSTS } from './constants';
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
    if (target === 'web-dev-portfolio') {
      navigate('/portfolio/web-development');
      return;
    }
    if (target === 'locations') {
      navigate('/locations');
      return;
    }

    if (isService) {
      const detail = SERVICE_DETAILS[target as keyof typeof SERVICE_DETAILS];
      if (detail) {
        navigate(detail.permalink);
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
        <Route path="/services/cms-seo" element={<CMSSEOPage />} />

        {/* 301 Redirects for Legacy CMS SEO URLs */}
        <Route path="/services/wordpress-seo-expert" element={<Navigate to="/services/cms-seo/wordpress-seo-expert" replace />} />
        <Route path="/services/drupal-seo-expert" element={<Navigate to="/services/cms-seo/drupal-seo-expert" replace />} />
        <Route path="/services/joomla-seo-expert" element={<Navigate to="/services/cms-seo/joomla-seo-expert" replace />} />
        <Route path="/services/typo3-seo-expert" element={<Navigate to="/services/cms-seo/typo3-seo-expert" replace />} />
        <Route path="/services/ghost-seo-expert" element={<Navigate to="/services/cms-seo/ghost-seo-expert" replace />} />
        <Route path="/services/craft-cms-seo-expert" element={<Navigate to="/services/cms-seo/craft-cms-seo-expert" replace />} />
        <Route path="/services/concrete-cms-seo-expert" element={<Navigate to="/services/cms-seo/concrete-cms-seo-expert" replace />} />
        <Route path="/services/modx-seo-expert" element={<Navigate to="/services/cms-seo/modx-seo-expert" replace />} />
        <Route path="/services/contentful-cms-seo-expert" element={<Navigate to="/services/cms-seo/contentful-cms-seo-expert" replace />} />
        <Route path="/services/storyblok-cms-seo-expert" element={<Navigate to="/services/cms-seo/storyblok-cms-seo-expert" replace />} />
        <Route path="/services/shopify-seo-expert" element={<Navigate to="/services/cms-seo/shopify-seo-expert" replace />} />
        <Route path="/services/woocommerce-seo-expert" element={<Navigate to="/services/cms-seo/woocommerce-seo-expert" replace />} />
        <Route path="/services/webflow-seo-expert" element={<Navigate to="/services/cms-seo/webflow-seo-expert" replace />} />

        <Route path="/services/cms-seo/wordpress-seo-expert" element={<WordPressSEOExpertPage onBook={handleBookConsultation} />} />
        <Route path="/services/cms-seo/drupal-seo-expert" element={<DrupalSEOExpertPage onBook={handleBookConsultation} />} />
        <Route path="/services/cms-seo/joomla-seo-expert" element={<JoomlaSEOExpertPage onBook={handleBookConsultation} />} />
        <Route path="/services/cms-seo/typo3-seo-expert" element={<TYPO3SEOExpertPage onBook={handleBookConsultation} />} />
        <Route path="/services/cms-seo/ghost-seo-expert" element={<GhostSEOExpertPage onBook={handleBookConsultation} />} />
        <Route path="/services/cms-seo/craft-cms-seo-expert" element={<CraftCMSSEOExpertPage onBook={handleBookConsultation} />} />
        <Route path="/services/cms-seo/concrete-cms-seo-expert" element={<ConcreteCMSSEOExpertPage onBook={handleBookConsultation} />} />
        <Route path="/services/cms-seo/modx-seo-expert" element={<MODXSEOExpertPage onBook={handleBookConsultation} />} />
        <Route path="/services/cms-seo/contentful-cms-seo-expert" element={<ContentfulCMSSEOExpertPage onBook={handleBookConsultation} />} />
        <Route path="/services/cms-seo/storyblok-cms-seo-expert" element={<StoryblokSEOExpertPage onBook={handleBookConsultation} />} />
        <Route path="/services/cms-seo/woocommerce-seo-expert" element={<WooCommerceSEOExpertPage onBook={handleBookConsultation} />} />
        <Route path="/services/cms-seo/shopify-seo-expert" element={<ShopifySEOExpertPage onBook={handleBookConsultation} />} />
        <Route path="/services/cms-seo/webflow-seo-expert" element={<WebflowSEOExpertPage onBook={handleBookConsultation} />} />

        <Route path="/services/:slug" element={<ServiceSlugWrapper navigate={navigate} handleBook={handleBookConsultation} handleNavigate={handleNavigate} />} />

        <Route path="/portfolio" element={<PortfolioPage handleNavigate={handleNavigate} />} />

        <Route path="/portfolio/web-development" element={<WebDevPortfolioPage />} />

        <Route path="/portfolio/:slug" element={<PortfolioSlugWrapper navigate={navigate} handleBook={handleBookConsultation} />} />

        <Route path="/pricing" element={<PricingPage onBook={handleBookConsultation} onForm={handleOpenForm} />} />
        
        <Route path="/pricing/local-seo-strategy" element={<PricingLocalSEOPage onBook={handleBookConsultation} onForm={handleOpenForm} />} />
        
        <Route path="/pricing/ai-automation-plans" element={<PricingAIPage onBook={handleBookConsultation} onForm={handleOpenForm} />} />
        
        <Route path="/pricing/google-ads-sem" element={<PricingSEMPage onBook={handleBookConsultation} />} />
        
        <Route path="/pricing/web-dev-packages" element={<PricingWebDevPage onBook={handleBookConsultation} onForm={handleOpenForm} />} />
        <Route path="/locations" element={<LocationsPage onBook={handleBookConsultation} />} />
        <Route path="/locations/seo-cebu" element={<ServiceSlugWrapper navigate={navigate} handleBook={handleBookConsultation} handleNavigate={handleNavigate} slugOverride="seo-cebu" />} />
        <Route path="/locations/seo-mandaue-city" element={<ServiceSlugWrapper navigate={navigate} handleBook={handleBookConsultation} handleNavigate={handleNavigate} slugOverride="seo-mandaue-city" />} />
        <Route path="/locations/seo-lapu-lapu-city" element={<ServiceSlugWrapper navigate={navigate} handleBook={handleBookConsultation} handleNavigate={handleNavigate} slugOverride="seo-lapu-lapu-city" />} />
        <Route path="/locations/seo-talisay-city" element={<ServiceSlugWrapper navigate={navigate} handleBook={handleBookConsultation} handleNavigate={handleNavigate} slugOverride="seo-talisay-city" />} />
        <Route path="/locations/seo-danao-city" element={<ServiceSlugWrapper navigate={navigate} handleBook={handleBookConsultation} handleNavigate={handleNavigate} slugOverride="seo-danao-city" />} />
        <Route path="/locations/seo-services-minglanilla" element={<ServiceSlugWrapper navigate={navigate} handleBook={handleBookConsultation} handleNavigate={handleNavigate} slugOverride="seo-services-minglanilla" />} />
        <Route path="/locations/seo-manila" element={<ServiceSlugWrapper navigate={navigate} handleBook={handleBookConsultation} handleNavigate={handleNavigate} slugOverride="seo-manila" />} />
        <Route path="/locations/seo-quezon-city" element={<ServiceSlugWrapper navigate={navigate} handleBook={handleBookConsultation} handleNavigate={handleNavigate} slugOverride="seo-quezon-city" />} />
        <Route path="/locations/seo-davao" element={<ServiceSlugWrapper navigate={navigate} handleBook={handleBookConsultation} handleNavigate={handleNavigate} slugOverride="seo-davao" />} />
        <Route path="/locations/seo-makati-city" element={<ServiceSlugWrapper navigate={navigate} handleBook={handleBookConsultation} handleNavigate={handleNavigate} slugOverride="seo-makati-city" />} />
        <Route path="/locations/seo-taguig" element={<ServiceSlugWrapper navigate={navigate} handleBook={handleBookConsultation} handleNavigate={handleNavigate} slugOverride="seo-taguig" />} />
        <Route path="/locations/seo-pasig-city" element={<ServiceSlugWrapper navigate={navigate} handleBook={handleBookConsultation} handleNavigate={handleNavigate} slugOverride="seo-pasig-city" />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostSlugWrapper navigate={navigate} />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
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

const BlogPostSlugWrapper: React.FC<{ navigate: any }> = ({ navigate }) => {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug);
  
  if (!post) return <NotFound />;

  return (
    <BlogPostView 
      post={post} 
      onBack={() => navigate('/blog')} 
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
