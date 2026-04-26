
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import ContactView from '../components/ContactView';

const ContactPage: React.FC<{ onBook: (e?: React.MouseEvent) => void }> = ({ onBook }) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <SEO 
        title="Contact SEO Expert | Scale Your Business Leads" 
        description="Ready to scale your leads? Contact Ritehly Quimbo, the top SEO & Growth Specialist in the Philippines for strategy inquiries and consultations." 
        keywords="contact seo expert, hire growth marketer, seo consultation philippines, business scaling strategy, digital growth leads"
      />
      <ContactView onBack={() => navigate('/')} onBook={onBook} />
    </div>
  );
};

export default ContactPage;
