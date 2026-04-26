
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import AboutView from '../components/AboutView';

const AboutPage: React.FC<{ onBook: (e?: React.MouseEvent) => void }> = ({ onBook }) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <SEO 
        title="About SEO Specialist | Growth Engineer Mission" 
        description="Learn about Ritehly Quimbo, an SEO specialist & growth engineer from the Philippines helping SMBs scale sales with autonomous growth systems." 
        keywords="ritehly quimbo, seo specialist philippines, growth marketing engineer, seo consultant, digital marketing expert"
      />
      <AboutView onBack={() => navigate('/')} onBook={onBook} />
    </div>
  );
};

export default AboutPage;
