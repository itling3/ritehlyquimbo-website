
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import ContactView from '../components/ContactView';

const ContactPage: React.FC<{ onBook: (e?: React.MouseEvent) => void }> = ({ onBook }) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <SEO 
        title="Book an SEO Consultation | Start Dominating the Search Results Today" 
        description="Ready to grow? Contact Ritehly Quimbo for a personalized SEO strategy and consultation to take your business to the next level." 
        keywords="seo consultation, book seo expert, personalized seo strategy, grow business online, contact ritehly quimbo"
      />
      <ContactView onBack={() => navigate('/')} onBook={onBook} />
    </div>
  );
};

export default ContactPage;
