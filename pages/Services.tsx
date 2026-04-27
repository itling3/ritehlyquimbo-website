
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import ServicesOverview from '../components/ServicesOverview';

interface ServicesPageProps {
  onBook: (e?: React.MouseEvent) => void;
  handleNavigate: (target: string, isService?: boolean) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onBook, handleNavigate }) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <SEO 
        title="Professional SEO & Growth Services | Comprehensive Digital Marketing Solutions" 
        description="Discover a full suite of digital services including SEO, AI automation, and web development designed to accelerate business growth." 
        keywords="seo services, growth marketing, ai automation, web development, digital marketing solutions, ritehly quimbo"
      />
      <ServicesOverview 
        onBack={() => navigate('/')} 
        onServiceClick={(id) => id === 'audit' ? onBook() : handleNavigate(id, true)} 
        onBook={onBook}
      />
    </div>
  );
};

export default ServicesPage;
