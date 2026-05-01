
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  schema?: any;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, canonical, schema }) => {
  const siteName = "Ritehly Quimbo";
  const baseUrl = "https://ritehlyquimbo.com";
  
  const path = window.location.pathname === '/' ? '' : window.location.pathname;
  const finalCanonical = canonical || `${baseUrl}${path}`;
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta data-rh="true" name="description" content={description} />
      {keywords && <meta data-rh="true" name="keywords" content={keywords} />}
      <meta data-rh="true" name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
      <link data-rh="true" rel="canonical" href={finalCanonical} />
      
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}      
      <meta data-rh="true" property="og:locale" content="en_US" />
      <meta data-rh="true" property="og:type" content="website" />
      <meta data-rh="true" property="og:title" content={title} />
      <meta data-rh="true" property="og:description" content={description} />
      <meta data-rh="true" property="og:url" content={finalCanonical} />
      <meta data-rh="true" property="og:site_name" content={siteName} />
      <meta data-rh="true" property="og:image" content="https://lh3.googleusercontent.com/d/1_UNdAwA40hce9EZ6i72RxVNCYAaLDAEo" />
      
      <meta data-rh="true" name="twitter:card" content="summary_large_image" />
      <meta data-rh="true" name="twitter:title" content={title} />
      <meta data-rh="true" name="twitter:description" content={description} />
      <meta data-rh="true" name="twitter:image" content="https://lh3.googleusercontent.com/d/1_UNdAwA40hce9EZ6i72RxVNCYAaLDAEo" />
    </Helmet>
  );
};

export default SEO;
