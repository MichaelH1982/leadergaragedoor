import { BUSINESS_INFO } from "@/lib/constants";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://leadergaragedoor.vercel.app",
    "name": "Leader Garage Door Services",
    "image": "https://leadergaragedoor.vercel.app/logo.png",
    "logo": "https://leadergaragedoor.vercel.app/logo.png",
    "url": "https://leadergaragedoor.vercel.app",
    "telephone": BUSINESS_INFO.phoneRaw,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dunedin",
      "addressRegion": "FL",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.0197,
      "longitude": -82.7873
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Dunedin",
        "containedIn": {
          "@type": "State",
          "name": "Florida"
        }
      },
      {
        "@type": "City",
        "name": "Clearwater",
        "containedIn": {
          "@type": "State",
          "name": "Florida"
        }
      },
      {
        "@type": "City",
        "name": "Tampa",
        "containedIn": {
          "@type": "State",
          "name": "Florida"
        }
      },
      {
        "@type": "City",
        "name": "St. Petersburg",
        "containedIn": {
          "@type": "State",
          "name": "Florida"
        }
      },
      {
        "@type": "City",
        "name": "Palm Harbor",
        "containedIn": {
          "@type": "State",
          "name": "Florida"
        }
      },
      {
        "@type": "City",
        "name": "Trinity",
        "containedIn": {
          "@type": "State",
          "name": "Florida"
        }
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Garage Door Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Garage Door Repair",
            "description": "Professional garage door repair services including spring replacement, opener repair, and track alignment."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Garage Door Installation",
            "description": "New garage door installation for residential and commercial properties."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Garage Door Maintenance",
            "description": "Preventive maintenance services to keep your garage door operating smoothly."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Garage Door Service",
            "description": "24/7 emergency garage door repair services available throughout the Tampa Bay area."
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "1",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}