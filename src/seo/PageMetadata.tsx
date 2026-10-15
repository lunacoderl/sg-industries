import React from "react";
import { Helmet } from "react-helmet-async";
import { siteSeo } from "../siteSeo";

interface PageMetadataProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  ogType?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export const PageMetadata: React.FC<PageMetadataProps> = ({
  title = "SG Industry | Laser Cutting & CNC Bending in Vizag",
  description = "Precision laser cutting and CNC bending services in Gajuwaka, Visakhapatnam. Accurate sheet metal profile cutting and forming for industrial needs.",
  canonicalPath = "/",
  ogType = "website",
  ogImage = "/images/hero/hero-workshop.jpg",
  noIndex = false,
}) => {
  const siteUrl = siteSeo.baseUrl;
  const canonicalUrl = `${siteUrl}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={`${siteUrl}${ogImage.startsWith('/') ? ogImage : `/${ogImage}`}`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage.startsWith('/') ? ogImage : `/${ogImage}`}`} />
    </Helmet>
  );
};
