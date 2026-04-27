
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import ResumeView from '../components/ResumeView';

const ResumePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <SEO 
        title="Expert SEO Consultant Resume | Proven Track Record of Digital Success" 
        description="Explore Ritehly Quimbo’s professional background, technical skills, and years of experience in delivering ROI-focused marketing." 
        keywords="seo consultant resume, digital marketing experience, technical seo skills, roi focused marketing, ritehly quimbo"
      />
      <ResumeView onBack={() => navigate('/')} />
    </div>
  );
};

export default ResumePage;
