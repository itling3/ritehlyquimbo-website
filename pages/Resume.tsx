
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import ResumeView from '../components/ResumeView';

const ResumePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <SEO 
        title="SEO Specialist Resume | Growth Engineer Track Record" 
        description="View the professional trajectory and technical mastery of Ritehly Quimbo, a top-tier SEO specialist and growth marketing engineer with a proven track record." 
        keywords="seo resume, ritehly quimbo portfolio, search analyst experience, growth engineering background, technical seo expert"
      />
      <ResumeView onBack={() => navigate('/')} />
    </div>
  );
};

export default ResumePage;
