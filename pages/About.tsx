
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
          "jobTitle": "SEO Specialist & Growth Engineer",
          "description": "With 8 years of dedicated search experience, Ritehly Quimbo focuses 70% of his energy on high-level SEO Intelligence and 30% on Growth Engineering—building AI tools, web infrastructure, and Google Ads frameworks for SMBs.",
          "url": "https://ritehlyquimbo.com",
          "image": "https://lh3.googleusercontent.com/d/16MsRTezCaczZBh9aG6sz3HqZTDB62ve_",
          "email": [
            "mailto:seo@ritehlyquimbo.com",
            "mailto:Ritehlyquimbo@gmail.com"
          ],
          "telephone": "+639611525318",
          "gender": "https://schema.org/Male",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Cebu City",
            "addressRegion": "Cebu",
            "addressCountry": "PH"
          },
          "knowsAbout": [
            "Search Engine Optimization",
            "Technical SEO",
            "Topical Authority & Topical Mapping",
            "Growth Engineering",
            "AI Automation & Workflow Engineering",
            "Google Ads",
            "WordPress & Elementor Web Development"
          ],
          "skills": "Topical Authority lattices, technical SEO auditing, custom AI agents, lead qualification automation, ROI optimization",
          "hasCredential": {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "Expertise",
            "recognizingOrganization": {
              "@type": "Organization",
              "name": "8 Years of Search Intelligence & Digital Marketing Mastery"
            }
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "consultation",
            "telephone": "+639611525318",
            "email": [
              "mailto:seo@ritehlyquimbo.com",
              "mailto:Ritehlyquimbo@gmail.com"
            ],
            "availableLanguage": ["English", "Tagalog"]
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://ritehlyquimbo.com"
          },
          "sameAs": [
            "https://www.facebook.com/ritehly/",
            "https://www.linkedin.com/in/ritehly-quimbo/",
            "https://www.youtube.com/@ritseo"
          ]
        }}
      />
      <AboutView onBack={() => navigate('/')} onBook={onBook} />
    </div>
  );
};

export default AboutPage;
