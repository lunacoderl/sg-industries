import React from "react";
import { companyData } from "../data/company";
import { siteSeo } from "../siteSeo";

export const LocalBusinessSchema: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: companyData.name,
    image: `${siteSeo.baseUrl}/images/hero/hero-workshop.jpg`,
    "@id": `${siteSeo.baseUrl}/#localbusiness`,
    url: siteSeo.baseUrl,
    telephone: companyData.phone,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: companyData.address.line1,
      addressLocality: companyData.address.city,
      addressRegion: companyData.address.state,
      postalCode: companyData.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "17.6908",
      longitude: "83.2104",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:30",
      },
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Precision Laser Cutting",
          description:
            "High-accuracy profile cutting for custom sheet metal components from technical drawings.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "CNC Sheet Metal Bending",
          description:
            "Computer-controlled press brake bending with consistent angles and repeatable tolerances.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};
