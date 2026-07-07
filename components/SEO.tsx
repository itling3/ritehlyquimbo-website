
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  schema?: any;
  image?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, canonical, schema, image }) => {
  const siteName = "Ritehly Quimbo";
  const baseUrl = "https://ritehlyquimbo.com";
  
  const path = window.location.pathname === '/' ? '' : window.location.pathname;
  const finalCanonical = canonical || `${baseUrl}${path}`;

  // Resolve image to absolute URL
  const defaultImage = "https://lh3.googleusercontent.com/d/16MsRTezCaczZBh9aG6sz3HqZTDB62ve_";
  let finalImage = defaultImage;
  if (image) {
    if (image.startsWith('http://') || image.startsWith('https://')) {
      finalImage = image;
    } else {
      const cleanImgPath = image.startsWith('/') ? image : `/${image}`;
      finalImage = `${baseUrl}${cleanImgPath}`;
    }
  }
  
  return (
    <Helmet>
      {schema && (
        <script 
          data-rh="true" 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <title>{title}</title>
      <meta data-rh="true" name="description" content={description} />
      {keywords && <meta data-rh="true" name="keywords" content={keywords} />}
      <meta data-rh="true" name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
      <link data-rh="true" rel="canonical" href={finalCanonical} />
      <meta data-rh="true" property="og:locale" content="en_US" />
      <meta data-rh="true" property="og:type" content="website" />
      <meta data-rh="true" property="og:title" content={title} />
      <meta data-rh="true" property="og:description" content={description} />
      <meta data-rh="true" property="og:url" content={finalCanonical} />
      <meta data-rh="true" property="og:site_name" content={siteName} />
      <meta data-rh="true" property="og:image" content={finalImage} />
      
      <meta data-rh="true" name="twitter:card" content="summary_large_image" />
      <meta data-rh="true" name="twitter:title" content={title} />
      <meta data-rh="true" name="twitter:description" content={description} />
      <meta data-rh="true" name="twitter:image" content={finalImage} />
    </Helmet>
  );
};

export default SEO;
