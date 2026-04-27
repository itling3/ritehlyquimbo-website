
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
        title="Local SEO Pricing Plans | Affordable Strategies for Local Business Growth" 
        description="Explore our Local SEO pricing tiers designed to help small to medium businesses win the local map pack." 
        keywords="local seo pricing, small business growth, local map pack, affordable seo strategies, ritehly quimbo"
      />
      <LocalSEOPricingView onBack={() => navigate('/')} onBook={onBook} onForm={onForm} />
    </div>
  );
};

export default PricingLocalSEOPage;
