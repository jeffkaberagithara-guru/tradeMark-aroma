import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export default function SEO({
  title = "TradeMark Aroma - Luxury Fragrances & Scented Candles | Nairobi, Kenya",
  description = "TradeMark Aroma offers luxury fragrances, scented candles, and personalized fragrance consultations. Find your signature scent in Nairobi, Kenya.",
  keywords = "luxury fragrances, scented candles, perfume, cologne, signature scent, fragrance consultation, Nairobi, Kenya",
  image = "https://trademark-aroma.onrender.com/og-image.jpg",
  url = "https://trademark-aroma.onrender.com",
  type = "website",
}: SEOProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TradeMark Aroma",
    description:
      "Luxury fragrance brand offering curated scents and personalized consultations in Nairobi, Kenya.",
    url: url,
    logo: "https://trademark-aroma.onrender.com/favicon.svg",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+254114036858",
      contactType: "customer service",
      availableLanguage: ["English"],
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    sameAs: [
      "https://instagram.com/trademarkaroma",
      "https://facebook.com/trademarkaroma",
      "https://twitter.com/trademarkaroma",
    ],
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Social Media */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="TradeMark Aroma" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}