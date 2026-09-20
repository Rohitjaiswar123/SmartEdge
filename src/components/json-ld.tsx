import * as React from "react";
import { FAQS, SERVICES } from "@/data/services-data";

export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    name: "SmartEdge Business Solutions",
    alternateName: "SmartEdge",
    url: "https://smartedgebusiness.com",
    logo: "https://smartedgebusiness.com/logo.png",
    description:
      "Technology, Software, Automation & Digital Growth Company providing Website Development, Custom Software Development, Google Business Profile Optimization, and AI Automation.",
    slogan: "Build. Innovate. Grow.",
    telephone: "+91-9999999999",
    email: "contact@smartedgebusiness.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Tech Park Hub",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "19.0760",
      longitude: "72.8777",
    },
    sameAs: [
      "https://www.linkedin.com/company/smartedge-business-solutions",
      "https://www.instagram.com/smartedgebusiness",
      "https://twitter.com/smartedgebiz",
      "https://facebook.com/smartedgebusiness",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Technology, Software, Automation & Digital Growth Services",
      itemListElement: SERVICES.map((svc) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: svc.title,
          description: svc.shortDescription,
        },
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SmartEdge Business Solutions",
    url: "https://smartedgebusiness.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://smartedgebusiness.com/services?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
