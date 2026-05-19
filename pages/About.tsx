
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import AboutView from '../components/AboutView';

const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ritehly Quimbo",
  "jobTitle": "SEO Specialist  | AI Specialist | Web Dev | Ads Specialist",
  "description": "Specialist in creating autonomous growth systems by merging 8 years of search intelligence with cutting-edge AI automation.",
  "url": "https://ritehlyquimboseoexpertphilippines.netlify.app/",
  "image": "https://lh3.googleusercontent.com/d/16MsRTezCaczZBh9aG6sz3HqZTDB62ve_",
  "email": [
    "mailto:seo@ritehlyquimbo.com",
    "mailto:Ritehlyquimbo@gmail.com"
  ],
  "telephone": "+639611525318",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Cebu City",
    "addressRegion": "Cebu",
    "postalCode": "6000",
    "addressCountry": "PH"
  },
  "knowsAbout": [
    "Technical SEO",
    "Topical Mapping",
    "AI Automation & Workflow Engineering",
    "Google Ads Optimization",
    "Full-Stack Web Development",
    "WordPress SEO",
    "Shopify SEO"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "SEO & Automation Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Keyword Research & Topical Maps SEO"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Automation Specialist SEO"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Local SEO & Google Map Pack Dominance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Full-Stack Web Dev SEO"
        }
      }
    ]
  },
  "sameAs": [
    "https://www.facebook.com/ritehly/",
    "https://www.youtube.com/@ritseo",
    "https://www.linkedin.com/in/ritehly-quimbo/",
    "https://www.quora.com/profile/Ritehly-Quimbo",
    "https://github.com/itling3",
    "https://www.behance.net/ritehly"
  ]
};

const AboutPage: React.FC<{ onBook: (e?: React.MouseEvent) => void }> = ({ onBook }) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_SCHEMA) }}
      />
      <SEO 
        title="Ritehly Quimbo SEO Specialist | Meet the Expert Behind Your Digital Growth" 
        description="Learn about Ritehly Quimbo’s journey and mission to provide high-impact SEO and digital marketing solutions for small and medium businesses." 
        keywords="ritehly quimbo, seo specialist, digital growth expert, seo solutions, SMB seo, search authority"
      />
      <AboutView onBack={() => navigate('/')} onBook={onBook} />
    </div>
  );
};

export default AboutPage;
