
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
        title="Web Development Packages | Quality Coding for Better Performance" 
        description="Find the right web development package for your needs, from simple landing pages to complex full-stack solutions." 
        keywords="web development packages, quality coding, site performance, landing pages, full-stack solutions, ritehly quimbo"
      />
      <WebDevPricingView onBack={() => navigate('/')} onBook={onBook} onForm={onForm} />
    </div>
  );
};

export default PricingWebDevPage;
