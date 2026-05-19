
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
        description="Learn about Ritehly Quimbo’s journey and mission to provide high-impact SEO and digital marketing solutions for small and medium businesses." 
        keywords="ritehly quimbo, seo specialist, digital growth expert, seo solutions, SMB seo, search authority"
        schema={{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Ritehly Quimbo",
          "url": "https://ritehlyquimbo.com/about",
          "image": "https://lh3.googleusercontent.com/d/16MsRTezCaczZBh9aG6sz3HqZTDB62ve_",
          "sameAs": [
            "https://www.facebook.com/ritehly/",
            "https://www.linkedin.com/in/ritehly-quimbo/",
            "https://www.youtube.com/@ritseo"
          ],
          "jobTitle": "SEO Specialist & Growth Engineer",
          "worksFor": {
            "@type": "Organization",
            "name": "Ritehly Quimbo SEO Services"
          },
          "description": "Ritehly Quimbo is a Senior SEO Specialist and Growth Engineer with over 8 years of experience helping small and medium businesses scale through technical SEO, topical mapping, and AI automation."
        }}
      />
      <AboutView onBack={() => navigate('/')} onBook={onBook} />
    </div>
  );
};

export default AboutPage;
