import { BUSINESS_INFO } from "@/lib/constants";

export function ServiceSchema() {
  const services = [
    {
      "@type": "Service",
      "serviceType": "Garage Door Repair",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Leader Garage Door Services",
        "telephone": BUSINESS_INFO.phoneRaw
      },
      "areaServed": {
        "@type": "State",
        "name": "Florida"
      },
      "description": "Professional garage door repair services including spring replacement, cable repair, track alignment, panel replacement, and sensor repair. Available 24/7 for emergency repairs.",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceRange": "$100-$500"
      }
    },
    {
      "@type": "Service",
      "serviceType": "Garage Door Installation",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Leader Garage Door Services",
        "telephone": BUSINESS_INFO.phoneRaw
      },
      "areaServed": {
        "@type": "State",
        "name": "Florida"
      },
      "description": "Complete garage door installation services for residential and commercial properties. Wide selection of styles, materials, and brands including Clopay, Amarr, Wayne Dalton, and CHI.",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@type": "Service",
      "serviceType": "Garage Door Opener Installation and Repair",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Leader Garage Door Services",
        "telephone": BUSINESS_INFO.phoneRaw
      },
      "areaServed": {
        "@type": "State",
        "name": "Florida"
      },
      "description": "Garage door opener installation, repair, and replacement. We work with all major brands including LiftMaster, Chamberlain, and Genie. Smart opener options available.",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceRange": "$200-$600"
      }
    },
    {
      "@type": "Service",
      "serviceType": "Preventive Maintenance",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Leader Garage Door Services",
        "telephone": BUSINESS_INFO.phoneRaw
      },
      "areaServed": {
        "@type": "State",
        "name": "Florida"
      },
      "description": "Comprehensive garage door maintenance services including lubrication, spring tension adjustment, safety inspections, and performance testing to extend the life of your garage door.",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@type": "Service",
      "serviceType": "Commercial Garage Door Service",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Leader Garage Door Services",
        "telephone": BUSINESS_INFO.phoneRaw
      },
      "areaServed": {
        "@type": "State",
        "name": "Florida"
      },
      "description": "Commercial garage door installation, repair, and maintenance for warehouses, storage facilities, retail locations, and loading docks. Rolling steel doors, sectional doors, and high-speed doors.",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@type": "Service",
      "serviceType": "Emergency Garage Door Repair",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Leader Garage Door Services",
        "telephone": BUSINESS_INFO.phoneRaw
      },
      "areaServed": {
        "@type": "State",
        "name": "Florida"
      },
      "description": "24/7 emergency garage door repair services across Pinellas, Hillsborough, and Pasco Counties. Same-day service available for urgent repairs including broken springs, off-track doors, and malfunctioning openers.",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock"
      }
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": services
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}