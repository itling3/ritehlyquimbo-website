
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import PortfolioOverview from '../components/PortfolioOverview';

const PortfolioPage: React.FC<{ handleNavigate: (id: string) => void }> = ({ handleNavigate }) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <SEO 
        title="SEO Portfolio | Growth Engineering Case Studies" 
        description="Explore real results and growth case studies from Ritehly Quimbo. Data-driven SEO and marketing performance for global and local brands."
      />
      <PortfolioOverview 
        onBack={() => navigate('/')} 
        onCaseStudyClick={(id) => handleNavigate(id)} 
      />
    </div>
  );
};

export default PortfolioPage;
