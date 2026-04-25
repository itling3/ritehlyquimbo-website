
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, canonical }) => {
  const siteName = "Ritehly Quimbo";
  const baseUrl = "https://ritehlyquimbo.com";
  
  // Prevent double site name if passed title already includes it
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const path = window.location.pathname === '/' ? '' : window.location.pathname;
  const finalCanonical = canonical || `${baseUrl}${path}`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
      <link rel="canonical" href={finalCanonical} />
      
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={finalCanonical} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content="https://lh3.googleusercontent.com/d/1_UNdAwA40hce9EZ6i72RxVNCYAaLDAEo" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Ritehly Quimbo - SEO & Growth Specialist" />
      <meta property="og:image:type" content="image/png" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://lh3.googleusercontent.com/d/1_UNdAwA40hce9EZ6i72RxVNCYAaLDAEo" />
      <meta name="twitter:label1" content="Specialty" />
      <meta name="twitter:data1" content="Full-Stack SEO & AI Automation" />
      <meta name="twitter:label2" content="Location" />
      <meta name="twitter:data2" content="Philippines" />
    </Helmet>
  );
};

export default SEO;
