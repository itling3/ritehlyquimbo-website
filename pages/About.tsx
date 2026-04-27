
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import AboutView from '../components/AboutView';

const AboutPage: React.FC<{ onBook: (e?: React.MouseEvent) => void }> = ({ onBook }) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <SEO 
        title="Ritehly Quimbo SEO Specialist | Meet the Expert Behind Your Digital Growth" 
        description="Learn about Ritehly Quimbo’s journey and mission to provide high-impact SEO and digital marketing solutions for global brands." 
        keywords="ritehly quimbo, seo specialist, digital growth expert, seo solutions, global brands seo"
      />
      <AboutView onBack={() => navigate('/')} onBook={onBook} />
    </div>
  );
};

export default AboutPage;
