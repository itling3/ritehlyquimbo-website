
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import PortfolioOverview from '../components/PortfolioOverview';

const PortfolioPage: React.FC<{ handleNavigate: (id: string) => void }> = ({ handleNavigate }) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <SEO 
        title="SEO Case Studies & Results | Real Examples of Search Engine Success" 
        description="View our portfolio of successful SEO campaigns and digital projects that delivered measurable results for clients worldwide." 
        keywords="seo case studies, seo results, successful seo campaigns, search engine success, digital projects portfolio, ritehly quimbo"
      />
      <PortfolioOverview 
        onBack={() => navigate('/')} 
        onCaseStudyClick={(id) => handleNavigate(id)} 
      />
    </div>
  );
};

export default PortfolioPage;
