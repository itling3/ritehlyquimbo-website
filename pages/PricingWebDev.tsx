
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import WebDevPricingView from '../components/WebDevPricingView';

interface PricingWebDevPageProps {
  onBook: (e?: React.MouseEvent) => void;
  onForm: (e?: React.MouseEvent) => void;
}

const PricingWebDevPage: React.FC<PricingWebDevPageProps> = ({ onBook, onForm }) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <SEO 
        title="WordPress & Elementor Pricing | SEO-Ready Web Engines" 
        description="High-performance, secure, and SEO-optimized WordPress web builds using Elementor. See our web development pricing packages for growth-ready sites." 
        keywords="wordpress development pricing, elementor web design cost, seo friendly web builds, high performance websites, custom wordpress developer"
      />
      <WebDevPricingView onBack={() => navigate('/')} onBook={onBook} onForm={onForm} />
    </div>
  );
};

export default PricingWebDevPage;
