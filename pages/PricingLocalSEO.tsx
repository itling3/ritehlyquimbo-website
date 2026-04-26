
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import LocalSEOPricingView from '../components/LocalSEOPricingView';

interface PricingLocalSEOPageProps {
  onBook: (e?: React.MouseEvent) => void;
  onForm: (e?: React.MouseEvent) => void;
}

const PricingLocalSEOPage: React.FC<PricingLocalSEOPageProps> = ({ onBook, onForm }) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <SEO 
        title="Local SEO Pricing | Dominate Your City Rankings" 
        description="Transparent local SEO pricing tiers designed to help your business dominate the local map pack and neighborhood search results. Affordable growth plans." 
        keywords="local seo pricing, gmb optimization cost, local map pack services, affordable seo philippines, city ranking strategy"
      />
      <LocalSEOPricingView onBack={() => navigate('/')} onBook={onBook} onForm={onForm} />
    </div>
  );
};

export default PricingLocalSEOPage;
