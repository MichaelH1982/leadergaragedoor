import { BUSINESS_INFO } from "@/lib/constants";

export function FAQPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does garage door repair cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Repair costs vary depending on the issue. Spring replacements typically range from $150-$300, while opener repairs run $100-$250. We provide free estimates and upfront pricing before any work begins, so you'll know exactly what to expect with no hidden fees."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a garage door spring last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most garage door springs last 7-10 years or about 10,000 cycles (one cycle = opening and closing). If your door feels heavy, makes loud noises, or won't open fully, your springs may need replacement. We use high-quality torsion springs rated for 25,000+ cycles for longer life."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer emergency service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes! We provide 24/7 emergency garage door service across Pinellas, Hillsborough, and Pasco Counties. Whether your door is stuck open, won't close, or broke at midnight, we're here to help. Call ${BUSINESS_INFO.phone} anytime for immediate assistance.`
        }
      },
      {
        "@type": "Question",
        "name": "How long does garage door installation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most garage door installations take 3-5 hours for a standard single door. Double doors or custom installations may take longer. We'll remove your old door, install the new one, test all safety features, and clean up completely. You'll have a fully functional door the same day."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer warranties on your work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. All our labor comes with a warranty, and the parts we install are covered by manufacturer warranties. Specific warranty terms vary by service and parts used—we'll explain exactly what's covered before we start any work."
        }
      },
      {
        "@type": "Question",
        "name": "What brands of garage doors do you work with?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We work with all major garage door brands including Clopay, Amarr, Wayne Dalton, CHI, and more. Whether you need repairs on an existing door or want to install a new one, we have experience with residential and commercial brands. We can help you choose the right door for your needs and budget."
        }
      },
      {
        "@type": "Question",
        "name": "Do you service commercial properties?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we service both residential and commercial garage doors. From warehouses and storage facilities to retail locations and apartment complexes, we handle commercial overhead doors, rolling steel doors, and loading dock equipment. Contact us for commercial service pricing and scheduling."
        }
      },
      {
        "@type": "Question",
        "name": "How do I know if I need repair or replacement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Generally, if your door is less than 15 years old and the frame is in good condition, repair is the better option. Consider replacement if your door is heavily damaged, outdated, or if repair costs approach 50% of replacement cost. We'll give you an honest assessment and explain all your options—no pressure, just facts."
        }
      },
      {
        "@type": "Question",
        "name": "Are you licensed and insured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes, we're fully licensed (#${BUSINESS_INFO.license}) and insured for your protection and peace of mind. All our technicians are certified professionals who follow strict safety protocols on every job.`
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer veteran or first responder discounts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We're proud to offer special discounts for veterans, active military, and first responders as a thank you for your service. Just let us know when you call to schedule, and we'll apply your discount."
        }
      },
      {
        "@type": "Question",
        "name": "What areas do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `We serve all of Pinellas, Hillsborough, and Pasco Counties, including Dunedin, Clearwater, Tampa, St. Petersburg, Palm Harbor, Trinity, and surrounding areas. If you're in the Tampa Bay area, we can help. Call ${BUSINESS_INFO.phone} to confirm service to your location.`
        }
      },
      {
        "@type": "Question",
        "name": "Can I get a same-day appointment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In most cases, yes! We understand garage door issues need quick solutions. We offer same-day service for most repairs when you call early in the day. For emergency situations, we're available 24/7 to get your door working again as soon as possible."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}