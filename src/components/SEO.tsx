import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
  canonical?: string;
  structuredData?: object;
}

const SEO = ({
  title,
  description,
  keywords,
  image = "https://dseducation.com/og-image.jpg",
  url,
  type = "website",
  author = "DS Education",
  publishedTime,
  modifiedTime,
  noindex = false,
  canonical,
  structuredData,
}: SEOProps) => {
  const { t, i18n } = useTranslation();
  
  // Default SEO values
  const defaultTitle = t("seo.defaultTitle", "DS Education - Your Gateway to Global Education");
  const defaultDescription = t(
    "seo.defaultDescription",
    "Expert overseas education consulting for 9+ countries. Free consultation, visa assistance, and 98% success rate. Start your study abroad journey with DS Education today."
  );
  const defaultKeywords = t(
    "seo.defaultKeywords",
    "study abroad, overseas education, education consultant, study in Singapore, study in UK, study in Australia, DS Education, Cambodia education"
  );

  const siteUrl = "https://dseducation.com";
  const fullTitle = title ? `${title} | DS Education` : defaultTitle;
  const fullDescription = description || defaultDescription;
  const fullKeywords = keywords || defaultKeywords;
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const canonicalUrl = canonical || fullUrl;

  // Language alternate links
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  const alternateLinks = [
    { lang: 'en', url: `${siteUrl}${currentPath}` },
    { lang: 'km', url: `${siteUrl}${currentPath}?lang=kh` },
  ];

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={fullKeywords} />
      <meta name="author" content={author} />
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      {/* Language */}
      <html lang={i18n.language} />
      <meta name="language" content={i18n.language === 'kh' ? 'Khmer' : 'English'} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Alternate Languages */}
      {alternateLinks.map((link) => (
        <link key={link.lang} rel="alternate" hreflang={link.lang} href={link.url} />
      ))}
      <link rel="alternate" hreflang="x-default" href={`${siteUrl}${currentPath}`} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="DS Education" />
      <meta property="og:locale" content={i18n.language === 'kh' ? 'km_KH' : 'en_US'} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@DSEducation" />
      
      {/* Schema.org for Google */}
      <meta itemProp="name" content={fullTitle} />
      <meta itemProp="description" content={fullDescription} />
      <meta itemProp="image" content={image} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
