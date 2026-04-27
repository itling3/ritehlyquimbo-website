
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import PricingView from '../components/PricingView';

interface PricingPageProps {
  onBook: (e?: React.MouseEvent) => void;
  onForm: (e?: React.MouseEvent) => void;
}

const PricingPage: React.FC<PricingPageProps> = ({ onBook, onForm }) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <SEO 
        title="SEO Service Packages & Pricing | Affordable Growth Plans for Every Business" 
        description="Transparent pricing for SEO, Google Ads, and AI automation. Choose the perfect plan to fit your business goals and budget." 
        keywords="seo pricing, google ads pricing, ai automation plans, seo packages, affordable seo plans, ritehly quimbo"
      />
      <PricingView onBack={() => navigate('/')} onBook={onBook} onForm={onForm} />
    </div>
  );
};

export default PricingPage;
