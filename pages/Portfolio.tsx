
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import PortfolioOverview from '../components/PortfolioOverview';
import WebPortfolio from '../components/WebPortfolio';

const PortfolioPage: React.FC<{ handleNavigate: (id: string) => void }> = ({ handleNavigate }) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <SEO 
        title="SEO Case Studies & Web Development Portfolio | Ritehly Quimbo" 
        description="Explore my portfolio of successful SEO campaigns and high-performance web development projects. Real-world results and live website examples." 
        keywords="seo case studies, web development portfolio, react developer, seo specialist portfolio, cebu web design, ritehly quimbo"
      />
      <PortfolioOverview 
        onBack={() => navigate('/')} 
        onCaseStudyClick={(id) => handleNavigate(id)} 
      />
      <WebPortfolio />
    </div>
  );
};

export default PortfolioPage;
