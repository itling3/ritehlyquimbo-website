
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import SEMPricingView from '../components/SEMPricingView';

const PricingSEMPage: React.FC<{ onBook: (e?: React.MouseEvent) => void }> = ({ onBook }) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <SEO 
        title="Google Ads Management Pricing | Transparent PPC Fees for Maximum ROI" 
        description="Professional SEM management pricing. Get the most out of your ad budget with our expert-led PPC strategies." 
        keywords="google ads management, ppc pricing, sem fees, maximum roi, ppc strategy, ritehly quimbo"
      />
      <SEMPricingView onBack={() => navigate('/')} onBook={onBook} />
    </div>
  );
};

export default PricingSEMPage;
