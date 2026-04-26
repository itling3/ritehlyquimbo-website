
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
        title="SEO & Growth Services | Philippines Growth Engineer" 
        description="Comprehensive SEO, Google Ads, and AI Growth systems. View our full list of services designed to scale your revenue."
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
