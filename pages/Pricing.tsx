
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
        title="SEO Pricing Blueprints | Scalable ROI Strategies" 
        description="Transparent SEO pricing for any business size. Choose from Local Growth, Multi-Location, or Enterprise Programmatic blueprints."
      />
      <PricingView onBack={() => navigate('/')} onBook={onBook} onForm={onForm} />
    </div>
  );
};

export default PricingPage;
