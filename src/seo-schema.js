// SEO Structured Data for TopTec
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "TopTec Private Limited",
  "alternateName": "TopTec",
  "url": "https://toptec.pk",
  "logo": "https://toptec.pk/favicon.png",
  "description": "Leading pharmaceutical cleanroom manufacturer and HVAC solutions provider serving healthcare facilities worldwide with ISO 14644-1 certified cleanroom design and GMP-compliant equipment.",
  "foundingDate": "1998",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "PK"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "United Arab Emirates"
    },
    {
      "@type": "Country",
      "name": "Saudi Arabia"
    },
    {
      "@type": "Country",
      "name": "Qatar"
    },
    {
      "@type": "Country",
      "name": "Bangladesh"
    },
    {
      "@type": "Country",
      "name": "Sri Lanka"
    },
    {
      "@type": "Country",
      "name": "Vietnam"
    },
    {
      "@type": "Country",
      "name": "Kenya"
    },
    {
      "@type": "Country",
      "name": "Nigeria"
    },
    {
      "@type": "Country",
      "name": "Ethiopia"
    },
    {
      "@type": "Country",
      "name": "Jordan"
    },
    {
      "@type": "Country",
      "name": "United States"
    },
    {
      "@type": "Country",
      "name": "Germany"
    },
    {
      "@type": "Country",
      "name": "United Kingdom"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Pharmaceutical Cleanroom Equipment & Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "ISO 14644-1 Cleanroom Design & Construction",
          "description": "Complete cleanroom design, construction, and certification for ISO Class 1 through Class 9 controlled environments"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "H14 HEPA Filter Systems",
          "description": "99.995% particle removal efficiency HEPA filtration for pharmaceutical sterile areas"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Pharmaceutical HVAC Systems",
          "description": "Custom air handling units, pharmaceutical-grade chillers, and precision HVAC controls"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Laminar Flow Hoods",
          "description": "ISO Class 5 cleanroom standard laminar flow hoods for sterile pharmaceutical manufacturing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Biosafety Cabinets",
          "description": "NSF/ANSI 49 certified Class II A2 biosafety cabinets for laboratory safety"
        }
      }
    ]
  },
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Cleanroom Engineering & Design",
        "description": "BIM-integrated cleanroom design with CFD analysis for pharmaceutical facilities"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Turnkey Cleanroom Construction",
        "description": "Complete cleanroom installation from design to validation with DQ/IQ/OQ/PQ documentation"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "GMP Compliance Consulting",
        "description": "EU GMP Annex 1 and FDA compliance consulting for pharmaceutical manufacturing facilities"
      }
    }
  ],
  "knowsAbout": [
    "Pharmaceutical Cleanroom Design",
    "ISO 14644-1 Standards",
    "EU GMP Compliance",
    "HVAC Systems",
    "HEPA Filtration",
    "Biosafety Cabinets",
    "Laminar Flow Hoods",
    "Cleanroom Validation",
    "Pharmaceutical Engineering",
    "Sterile Manufacturing"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "TopTec - Pharmaceutical Cleanroom Solutions",
  "url": "https://toptec.pk",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://toptec.pk/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://toptec.pk"
    }
  ]
};
