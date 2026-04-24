
import React, { useState, useCallback } from 'react';
import { HelmetProvider } from 'react-helmet-async';
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
import { SERVICES, SERVICE_DETAILS, REVIEWS, TOOL_LOGOS, FAQS, CERTIFICATES, CASE_STUDIES } from './constants';
import { ServiceContent, CaseStudy } from './types';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <AppContent />
    </HelmetProvider>
  );
};

const AppContent: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceContent | null>(null);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [isServicesOverview, setIsServicesOverview] = useState(false);
  const [isPortfolioOverview, setIsPortfolioOverview] = useState(false);
  const [isResumeView, setIsResumeView] = useState(false);
  const [isPricingView, setIsPricingView] = useState(false);
  const [isWebDevPricingView, setIsWebDevPricingView] = useState(false);
  const [isLocalSEOPricingView, setIsLocalSEOPricingView] = useState(false);
  const [isAIAutomationPricingView, setIsAIAutomationPricingView] = useState(false);
  const [isSEMPricingView, setIsSEMPricingView] = useState(false);
  const [isAboutView, setIsAboutView] = useState(false);
  const [isContactView, setIsContactView] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

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
      setIsContactView(true);
      setIsAboutView(false);
      setIsSEMPricingView(false);
      setIsAIAutomationPricingView(false);
      setIsLocalSEOPricingView(false);
      setIsWebDevPricingView(false);
      setIsPricingView(false);
      setIsResumeView(false);
      setIsServicesOverview(false);
      setIsPortfolioOverview(false);
      setSelectedService(null);
      setSelectedCaseStudy(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (target === 'about') {
      setIsAboutView(true);
      setIsContactView(false);
      setIsSEMPricingView(false);
      setIsAIAutomationPricingView(false);
      setIsLocalSEOPricingView(false);
      setIsWebDevPricingView(false);
      setIsPricingView(false);
      setIsResumeView(false);
      setIsServicesOverview(false);
      setIsPortfolioOverview(false);
      setSelectedService(null);
      setSelectedCaseStudy(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (target === 'sem-pricing') {
      setIsSEMPricingView(true);
      setIsAboutView(false);
      setIsContactView(false);
      setIsAIAutomationPricingView(false);
      setIsLocalSEOPricingView(false);
      setIsWebDevPricingView(false);
      setIsPricingView(false);
      setIsResumeView(false);
      setIsServicesOverview(false);
      setIsPortfolioOverview(false);
      setSelectedService(null);
      setSelectedCaseStudy(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (target === 'ai-automation-pricing') {
      setIsAIAutomationPricingView(true);
      setIsAboutView(false);
      setIsContactView(false);
      setIsLocalSEOPricingView(false);
      setIsWebDevPricingView(false);
      setIsPricingView(false);
      setIsResumeView(false);
      setIsServicesOverview(false);
      setIsPortfolioOverview(false);
      setSelectedService(null);
      setSelectedCaseStudy(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (target === 'local-seo-pricing') {
      setIsLocalSEOPricingView(true);
      setIsAboutView(false);
      setIsContactView(false);
      setIsWebDevPricingView(false);
      setIsAIAutomationPricingView(false);
      setIsSEMPricingView(false);
      setIsPricingView(false);
      setIsResumeView(false);
      setIsServicesOverview(false);
      setIsPortfolioOverview(false);
      setSelectedService(null);
      setSelectedCaseStudy(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (target === 'web-dev-pricing') {
      setIsWebDevPricingView(true);
      setIsPricingView(false);
      setIsAIAutomationPricingView(false);
      setIsSEMPricingView(false);
      setIsLocalSEOPricingView(false);
      setIsResumeView(false);
      setIsServicesOverview(false);
      setIsPortfolioOverview(false);
      setSelectedService(null);
      setSelectedCaseStudy(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (target === 'pricing') {
      setIsPricingView(true);
      setIsAboutView(false);
      setIsWebDevPricingView(false);
      setIsLocalSEOPricingView(false);
      setIsAIAutomationPricingView(false);
      setIsSEMPricingView(false);
      setIsResumeView(false);
      setIsServicesOverview(false);
      setIsPortfolioOverview(false);
      setSelectedService(null);
      setSelectedCaseStudy(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (target === 'resume') {
      setIsResumeView(true);
      setIsAboutView(false);
      setIsPricingView(false);
      setIsAIAutomationPricingView(false);
      setIsSEMPricingView(false);
      setIsWebDevPricingView(false);
      setIsServicesOverview(false);
      setIsPortfolioOverview(false);
      setSelectedService(null);
      setSelectedCaseStudy(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (target === 'services-overview') {
      setIsServicesOverview(true);
      setIsAboutView(false);
      setIsPortfolioOverview(false);
      setIsResumeView(false);
      setIsPricingView(false);
      setIsWebDevPricingView(false);
      setIsAIAutomationPricingView(false);
      setIsSEMPricingView(false);
      setSelectedService(null);
      setSelectedCaseStudy(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (target === 'portfolio-overview') {
      setIsPortfolioOverview(true);
      setIsAboutView(false);
      setIsServicesOverview(false);
      setIsResumeView(false);
      setIsPricingView(false);
      setIsWebDevPricingView(false);
      setIsAIAutomationPricingView(false);
      setIsSEMPricingView(false);
      setSelectedService(null);
      setSelectedCaseStudy(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (isService) {
      const detail = SERVICE_DETAILS[target as keyof typeof SERVICE_DETAILS];
      if (detail) {
        setSelectedService(detail);
        setSelectedCaseStudy(null);
        setIsServicesOverview(false);
        setIsPortfolioOverview(false);
        setIsResumeView(false);
        setIsPricingView(false);
        setIsWebDevPricingView(false);
        setIsAIAutomationPricingView(false);
        setIsSEMPricingView(false);
        setIsAboutView(false);
        setIsContactView(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      // Check if this target is a specific case study ID
      const studyMatch = CASE_STUDIES.find(s => s.id === target);
      if (studyMatch) {
        setSelectedCaseStudy(studyMatch);
        setSelectedService(null);
        setIsServicesOverview(false);
        setIsPortfolioOverview(false);
        setIsResumeView(false);
        setIsPricingView(false);
        setIsAIAutomationPricingView(false);
        setIsSEMPricingView(false);
        setIsAboutView(false);
        setIsContactView(false);
        setIsWebDevPricingView(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      // Default section navigation
      setSelectedService(null);
      setSelectedCaseStudy(null);
      setIsServicesOverview(false);
      setIsPortfolioOverview(false);
      setIsResumeView(false);
      setIsPricingView(false);
      setIsAIAutomationPricingView(false);
      setIsSEMPricingView(false);
      setIsAboutView(false);
      setIsContactView(false);
      setIsWebDevPricingView(false);
      if (target === '') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setTimeout(() => {
          const element = document.getElementById(target);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 50);
      }
    }
  }, []);

  const handleViewCaseStudy = useCallback((id: string) => {
    if (id === 'audit') {
      handleNavigate('audit', false);
      return;
    }
    const study = CASE_STUDIES.find(s => s.id === id);
    if (study) {
      setSelectedCaseStudy(study);
      setSelectedService(null);
      setIsServicesOverview(false);
      setIsPortfolioOverview(false);
      setIsResumeView(false);
      setIsPricingView(false);
      setIsAIAutomationPricingView(false);
      setIsSEMPricingView(false);
      setIsWebDevPricingView(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [handleNavigate]);

  if (isContactView) {
    return (
      <div className="min-h-screen">
        <SEO 
          title="Contact SEO Expert | Scale Your Business Leads | Ritehly Quimbo" 
          description="Ready to scale your leads? Contact Ritehly Quimbo, the top SEO & Growth Specialist in the Philippines for strategy inquiries." 
        />
        <Navigation onNavigate={handleNavigate} onBook={handleBookConsultation} />
        <ContactView onBack={() => handleNavigate('', false)} onBook={handleBookConsultation} />
        <Footer onNavigate={handleNavigate} onBook={handleBookConsultation} />
        {isCalendarOpen && <CalendarModal onClose={closeCalendar} />}
      </div>
    );
  }

  if (isAboutView) {
    return (
      <div className="min-h-screen">
        <SEO 
          title="About SEO Specialist | Growth Engineer Mission | Ritehly Quimbo" 
          description="Learn about Ritehly Quimbo, an SEO specialist & growth engineer helping SMBs scale sales with autonomous growth systems." 
        />
        <Navigation onNavigate={handleNavigate} onBook={handleBookConsultation} />
        <AboutView onBack={() => handleNavigate('', false)} onBook={handleBookConsultation} />
        <Footer onNavigate={handleNavigate} onBook={handleBookConsultation} />
        {isCalendarOpen && <CalendarModal onClose={closeCalendar} />}
      </div>
    );
  }

  if (isResumeView) {
    return (
      <div className="min-h-screen">
        <SEO 
          title="SEO Specialist Resume | Growth Engineer Track Record | Ritehly Quimbo" 
          description="View the professional trajectory and technical mastery of Ritehly Quimbo, a top-tier SEO specialist and growth marketing engineer." 
        />
        <Navigation onNavigate={handleNavigate} onBook={handleBookConsultation} />
        <ResumeView onBack={() => handleNavigate('', false)} />
        <Footer onNavigate={handleNavigate} onBook={handleBookConsultation} />
        {isCalendarOpen && <CalendarModal onClose={closeCalendar} />}
      </div>
    );
  }

  if (isPricingView) {
    return (
      <div className="min-h-screen">
        <Navigation onNavigate={handleNavigate} onBook={handleBookConsultation} />
        <PricingView onBack={() => handleNavigate('', false)} onBook={handleBookConsultation} onForm={handleOpenForm} />
        <Footer onNavigate={handleNavigate} onBook={handleBookConsultation} />
        {isCalendarOpen && <CalendarModal onClose={closeCalendar} />}
      </div>
    );
  }

  if (isLocalSEOPricingView) {
    return (
      <div className="min-h-screen">
        <SEO 
          title="Local SEO Pricing | Dominate Your City Rankings | Ritehly Quimbo" 
          description="Transparent local SEO pricing tiers designed to help your business dominate the local map pack and search results." 
        />
        <Navigation onNavigate={handleNavigate} onBook={handleBookConsultation} />
        <LocalSEOPricingView onBack={() => handleNavigate('', false)} onBook={handleBookConsultation} onForm={handleOpenForm} />
        <Footer onNavigate={handleNavigate} onBook={handleBookConsultation} />
        {isCalendarOpen && <CalendarModal onClose={closeCalendar} />}
      </div>
    );
  }

  if (isAIAutomationPricingView) {
    return (
      <div className="min-h-screen">
        <SEO 
          title="AI Automation Pricing | High-Performance Marketing Ops | Ritehly Quimbo" 
          description="Scale your marketing operations with AI-driven automation. See our pricing plans for custom AI workflows and growth systems." 
        />
        <Navigation onNavigate={handleNavigate} onBook={handleBookConsultation} />
        <AIAutomationPricingView onBack={() => handleNavigate('', false)} onBook={handleBookConsultation} onForm={handleOpenForm} />
        <Footer onNavigate={handleNavigate} onBook={handleBookConsultation} />
        {isCalendarOpen && <CalendarModal onClose={closeCalendar} />}
      </div>
    );
  }

  if (isSEMPricingView) {
    return (
      <div className="min-h-screen">
        <SEO 
          title="Google Ads Pricing | Immediate Demand Capture | Ritehly Quimbo" 
          description="Accelerate your growth with precision managed Google Ads. View our PPC management pricing and ROI-focused strategies." 
        />
        <Navigation onNavigate={handleNavigate} onBook={handleBookConsultation} />
        <SEMPricingView onBack={() => handleNavigate('', false)} onBook={handleBookConsultation} />
        <Footer onNavigate={handleNavigate} onBook={handleBookConsultation} />
        {isCalendarOpen && <CalendarModal onClose={closeCalendar} />}
      </div>
    );
  }

  if (isWebDevPricingView) {
    return (
      <div className="min-h-screen">
        <SEO 
          title="WordPress & Elementor Pricing | SEO-Ready Web Engines | Ritehly Quimbo" 
          description="High-performance, secure, and SEO-optimized WordPress web builds. See our Elementor development pricing packages." 
        />
        <Navigation onNavigate={handleNavigate} onBook={handleBookConsultation} />
        <WebDevPricingView onBack={() => handleNavigate('', false)} onBook={handleBookConsultation} onForm={handleOpenForm} />
        <Footer onNavigate={handleNavigate} onBook={handleBookConsultation} />
        {isCalendarOpen && <CalendarModal onClose={closeCalendar} />}
      </div>
    );
  }

  if (isServicesOverview) {
    return (
      <div className="min-h-screen">
        <Navigation onNavigate={handleNavigate} onBook={handleBookConsultation} />
        <ServicesOverview 
          onBack={() => handleNavigate('', false)} 
          onServiceClick={(id) => id === 'audit' ? handleNavigate('audit', false) : handleNavigate(id, true)} 
          onBook={handleBookConsultation}
        />
        <Footer onNavigate={handleNavigate} onBook={handleBookConsultation} />
        {isCalendarOpen && <CalendarModal onClose={closeCalendar} />}
      </div>
    );
  }

  if (isPortfolioOverview) {
    return (
      <div className="min-h-screen">
        <Navigation onNavigate={handleNavigate} onBook={handleBookConsultation} />
        <PortfolioOverview 
          onBack={() => handleNavigate('', false)} 
          onCaseStudyClick={handleViewCaseStudy} 
        />
        <Footer onNavigate={handleNavigate} onBook={handleBookConsultation} />
        {isCalendarOpen && <CalendarModal onClose={closeCalendar} />}
      </div>
    );
  }

  if (selectedService) {
    return (
      <div className="min-h-screen">
        <Navigation onNavigate={handleNavigate} onBook={handleBookConsultation} />
        <ServiceDetailView 
          service={selectedService} 
          onBack={() => { setSelectedService(null); setIsServicesOverview(true); }} 
          onBook={handleBookConsultation}
          onPricingClick={(id) => { setSelectedService(null); handleNavigate(id); }}
        />
        <Footer onNavigate={handleNavigate} onBook={handleBookConsultation} />
        {isCalendarOpen && <CalendarModal onClose={closeCalendar} />}
      </div>
    );
  }

  if (selectedCaseStudy) {
    return (
      <div className="min-h-screen">
        <Navigation onNavigate={handleNavigate} onBook={handleBookConsultation} />
        <CaseStudyDetailView 
          study={selectedCaseStudy} 
          onBack={() => setIsPortfolioOverview(true)} 
          onBook={handleBookConsultation}
        />
        <Footer onNavigate={handleNavigate} onBook={handleBookConsultation} />
        {isCalendarOpen && <CalendarModal onClose={closeCalendar} />}
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <SEO 
        title="Hire SEO Specialist | Dominate Rankings & Growth | Ritehly Quimbo" 
        description="Ritehly Quimbo is the top Full-Stack SEO & Growth Marketing Specialist in the Philippines. Build autonomous systems for scale." 
      />
      <Navigation onNavigate={handleNavigate} onBook={handleBookConsultation} />
      
      <main>
        <Hero onAuditClick={handleBookConsultation} onFormClick={handleOpenForm} />

        <ClientsMarquee />
        
        <SectionCTA 
          onClick={handleBookConsultation} 
          text="Join our elite network of growing brands" 
          buttonText="Schedule Booking"
        />

        {/* Services Section */}
        <section id="services" className="py-24 px-6 relative overflow-hidden bg-white/5">
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black mb-2 text-white uppercase tracking-tighter italic">My Services</h2>
              <div className="text-blue-500 font-bold text-sm mb-4 tracking-[0.3em] uppercase">Full-Stack SEO & Marketing</div>
              <p className="text-gray-400 max-w-2xl mx-auto">Elite strategy across the entire search and digital landscape, designed for aggressive growth and market dominance.</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {SERVICES.map((service, i) => (
                <div 
                  key={i} 
                  className="glass-morphism p-6 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all group flex flex-col h-full"
                >
                  <button 
                    onClick={() => handleNavigate(service.id, true)}
                    className="text-left w-full flex-1"
                  >
                    <div className="text-3xl mb-4 group-hover:scale-110 transition-transform inline-block">{service.icon}</div>
                    <h3 className="text-lg font-bold mb-2 text-white flex items-center justify-between">
                      {service.title}
                      <span className="text-[10px] text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">EXPLORE →</span>
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-6">{service.description}</p>
                  </button>
                  <div className="mt-auto pt-4 border-t border-white/5 flex flex-col gap-2">
                    <button 
                      onClick={handleBookConsultation}
                      className="w-full py-2 bg-blue-600/10 hover:bg-blue-600 text-blue-500 hover:text-white font-black rounded-lg transition-all text-[9px] uppercase tracking-widest italic border border-blue-500/20"
                    >
                      Schedule Session (Calendar)
                    </button>
                    <button 
                      onClick={handleOpenForm}
                      className="text-[8px] text-gray-500 hover:text-blue-400 font-bold uppercase tracking-widest text-center transition-colors"
                    >
                      Quick Inquiry (Form)
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
               <button 
                 onClick={() => handleNavigate('services-overview')}
                 className="px-10 py-4 bg-white/5 border border-white/10 text-white font-black rounded-xl hover:bg-white/10 transition-all uppercase tracking-widest text-xs italic"
               >
                 View Complete Capabilities Map →
               </button>
            </div>
          </div>
        </section>

        <SectionCTA 
          onClick={handleOpenForm} 
          text="Which services do you need most?" 
          buttonText="Request Quote (Form)"
        />

        <WhyChooseMe />

        {/* Certificates Section */}
        <section id="certificates" className="py-24 px-6 bg-black/20 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4 text-white uppercase italic tracking-tighter">Professional Recognition</h2>
              <div className="text-blue-500 font-bold text-[10px] uppercase tracking-[0.3em] mb-4">Verified Industry Credentials</div>
              <p className="text-gray-400 max-w-2xl mx-auto">Mastery across technical SEO, link building, and site performance validated by leading institutions.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {CERTIFICATES.map((cert, i) => (
                <a 
                  key={i} 
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-morphism rounded-3xl overflow-hidden border border-white/5 hover:border-blue-500/50 transition-all group block shadow-2xl hover:shadow-blue-500/10"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img 
                      src={cert.url} 
                      alt={cert.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-[1.02] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-blue-600/90 text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        Verify Certificate ↗
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="text-blue-500 font-black text-[10px] uppercase tracking-[0.2em] mb-3">{cert.issuer} Certified Specialist</div>
                    <h3 className="text-lg font-bold text-white uppercase tracking-tight leading-tight group-hover:text-blue-400 transition-colors">
                      {cert.title}
                    </h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <SectionCTA 
          onClick={handleBookConsultation} 
          text="Don't settle for average SEO results" 
          buttonText="Start Booking"
        />

        {/* VERIFIED RESULTS MARQUEE */}
        <section className="py-20 bg-black/40 border-y border-white/5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 mb-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-8 h-[2px] bg-blue-500"></span> Verified Results
                </h3>
              </div>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full w-fit">
                <div className="flex text-yellow-500 text-xs">
                  {[1, 2, 3, 4, 5].map((s) => <span key={s}>★</span>)}
                </div>
                <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest">5.0 Google Rating</span>
              </div>
            </div>
          </div>
          
          <div className="marquee-container">
            <div className="marquee-content reviews-speed">
              {[...REVIEWS, ...REVIEWS, ...REVIEWS].map((review, i) => (
                <div key={i} className="review-marquee-card">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex text-yellow-500 text-[10px]">
                      {[1, 2, 3, 4, 5].map((s) => <span key={s}>★</span>)}
                    </div>
                    <div className="w-5 h-5 rounded bg-blue-600/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.48 10.92v3.28h4.74c-.2 1.04-1.18 3.06-4.74 3.06-3.08 0-5.6-2.54-5.6-5.68s2.52-5.68 5.6-5.68 5.6-5.68c1.76 0 2.94.74 3.62 1.38l2.58-2.48C17.06 3.16 14.98 2 12.48 2 6.48 2 1.64 6.84 1.64 12.84s4.84 10.84 10.84 10.84c6.26 0 10.42-4.4 10.42-10.6 0-.72-.08-1.26-.18-1.8h-10.24z"/>
                      </svg>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300 italic leading-relaxed line-clamp-3">"{review.text}"</p>
                  <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-xs font-bold text-blue-400">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-xs text-white font-bold uppercase tracking-tight">{review.name}</div>
                      <div className="text-[10px] text-gray-500 uppercase">{review.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <HowItWorks />

        <section className="py-20 bg-black/60 border-y border-white/5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 mb-12">
            <h3 className="text-xl font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
              <span className="w-8 h-[2px] bg-blue-500"></span> Technical Stack
            </h3>
            <p className="text-sm text-gray-500 mt-2">I leverage enterprise-grade data and automation tools to drive precision results.</p>
          </div>
          
          <div className="marquee-container">
            <div className="marquee-content marquee-fast">
              {[...TOOL_LOGOS, ...TOOL_LOGOS, ...TOOL_LOGOS, ...TOOL_LOGOS].map((tool, i) => (
                <div key={i} className="tool-capsule">
                  <img 
                    src={tool.url} 
                    alt={tool.name} 
                    className="h-7 w-auto object-contain"
                  />
                  <span className="tool-label">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Portfolio onViewCaseStudy={handleViewCaseStudy} />

        <SEOExpenseCalculator onExecute={handleBookConsultation} />

        <TestimonialsSlider />

        <AuditTool />

        {/* FAQ Section */}
        <section id="faq" className="py-24 px-6 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4 text-white uppercase italic tracking-tighter">Knowledge Base</h2>
              <div className="text-blue-500 font-bold text-[10px] uppercase tracking-[0.3em] mb-4">Frequently Asked Questions</div>
              <p className="text-gray-400">Deep insights into the methodology and strategy that powers our growth engine.</p>
            </div>
            
            <div className="grid gap-4">
              <div className="glass-morphism rounded-3xl border border-blue-500/20 overflow-hidden mb-8 p-8 bg-blue-500/5">
                 <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">💡</div>
                    <h3 className="text-blue-400 font-black uppercase text-xs tracking-widest">Elite Strategic Tip</h3>
                 </div>
                 <p className="text-gray-300 text-sm leading-relaxed">
                   Most businesses fail because they ignore <span className="text-white font-bold">search intent</span>. Targeting high-volume keywords without mapping them to the specific stage of the buyer journey leads to vanity metrics and zero ROI.
                 </p>
              </div>

              {FAQS.map((faq, index) => (
                <div key={index} className="glass-morphism rounded-2xl border border-white/5 overflow-hidden transition-all duration-300 hover:border-white/10">
                  <button
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-full p-6 text-left flex justify-between items-center group"
                  >
                    <span className={`text-base font-bold transition-colors uppercase tracking-tight ${activeFaq === index ? 'text-blue-400' : 'text-white group-hover:text-blue-400'}`}>
                      {faq.question}
                    </span>
                    <span className={`w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-blue-500 transition-all duration-500 ${activeFaq === index ? 'rotate-180 bg-blue-600/10' : ''}`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  <div className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${activeFaq === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <div className="p-6 pt-0 border-t border-white/5 mt-2">
                      <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-24 px-6">
          <div className="max-w-4xl mx-auto glass-morphism rounded-[40px] p-12 text-center border border-white/10 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 relative z-10 text-white uppercase italic tracking-tighter">Ready for Domination?</h2>
            <p className="text-lg text-gray-400 mb-10 relative z-10 max-w-xl mx-auto">
              I only work with a handful of clients at a time to ensure elite results. Secure your strategy session now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <button 
                onClick={handleBookConsultation}
                className="animate-cta-pulse animate-shine px-10 py-5 bg-white text-black font-bold rounded-2xl hover:bg-gray-200 transition-all text-lg shadow-xl shadow-white/10 uppercase tracking-tighter"
              >
                Schedule Session
              </button>
              <button onClick={() => handleNavigate('services-overview')} className="px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all text-lg uppercase tracking-tighter">
                Explore Services
              </button>
            </div>
          </div>
        </section>
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
