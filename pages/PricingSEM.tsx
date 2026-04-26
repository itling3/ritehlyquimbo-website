
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import SEMPricingView from '../components/SEMPricingView';

const PricingSEMPage: React.FC<{ onBook: (e?: React.MouseEvent) => void }> = ({ onBook }) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <SEO 
        title="Google Ads Pricing | Immediate Demand Capture" 
        description="Accelerate your growth with precision managed Google Ads. View our ROI-focused PPC management pricing and immediate demand capture strategies." 
        keywords="google ads management pricing, ppc management cost, sem services price, google ads expert philippines, roi focused ads"
      />
      <SEMPricingView onBack={() => navigate('/')} onBook={onBook} />
    </div>
  );
};

export default PricingSEMPage;
