import { LocalBusinessSchema } from "@/components/schema/LocalBusinessSchema";
import { FAQPageSchema } from "@/components/schema/FAQPageSchema";
import { BUSINESS_INFO } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQPage() {
  return (
    <div className="min-h-screen">
        <div className="min-h-screen">
  <LocalBusinessSchema />
  <FAQPageSchema />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-blue-100">
              Everything you need to know about our garage door services
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-blue-600">
                  How much does garage door repair cost?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700">
                  Repair costs vary depending on the issue. Spring replacements typically range from $150-$300, 
                  while opener repairs run $100-$250. We provide free estimates and upfront pricing before any 
                  work begins, so you'll know exactly what to expect with no hidden fees.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-blue-600">
                  How long does a garage door spring last?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700">
                  Most garage door springs last 7-10 years or about 10,000 cycles (one cycle = opening and closing). 
                  If your door feels heavy, makes loud noises, or won't open fully, your springs may need replacement. 
                  We use high-quality torsion springs rated for 25,000+ cycles for longer life.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-blue-600">
                  Do you offer emergency service?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700">
                  Yes! We provide 24/7 emergency garage door service across Pinellas, Hillsborough, and Pasco Counties. 
                  Whether your door is stuck open, won't close, or broke at midnight, we're here to help. 
                  Call {BUSINESS_INFO.phone} anytime for immediate assistance.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-blue-600">
                  How long does garage door installation take?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700">
                  Most garage door installations take 3-5 hours for a standard single door. Double doors or custom 
                  installations may take longer. We'll remove your old door, install the new one, test all safety 
                  features, and clean up completely. You'll have a fully functional door the same day.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-blue-600">
                  Do you offer warranties on your work?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700">
                  Absolutely. All our labor comes with a warranty, and the parts we install are covered by 
                  manufacturer warranties. Specific warranty terms vary by service and parts used—we'll explain 
                  exactly what's covered before we start any work.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-blue-600">
                  What brands of garage doors do you work with?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700">
                  We work with all major garage door brands including Clopay, Amarr, Wayne Dalton, CHI, and more. 
                  Whether you need repairs on an existing door or want to install a new one, we have experience 
                  with residential and commercial brands. We can help you choose the right door for your needs and budget.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-blue-600">
                  Do you service commercial properties?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700">
                  Yes, we service both residential and commercial garage doors. From warehouses and storage facilities 
                  to retail locations and apartment complexes, we handle commercial overhead doors, rolling steel doors, 
                  and loading dock equipment. Contact us for commercial service pricing and scheduling.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-blue-600">
                  How do I know if I need repair or replacement?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700">
                  Generally, if your door is less than 15 years old and the frame is in good condition, repair is 
                  the better option. Consider replacement if your door is heavily damaged, outdated, or if repair 
                  costs approach 50% of replacement cost. We'll give you an honest assessment and explain all your 
                  options—no pressure, just facts.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-blue-600">
                  Are you licensed and insured?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700">
                  Yes, we're fully licensed (#{BUSINESS_INFO.license}) and insured for your protection and peace of mind. 
                  All our technicians are certified professionals who follow strict safety protocols on every job.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-blue-600">
                  Do you offer veteran or first responder discounts?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700">
                  Yes! We're proud to offer special discounts for veterans, active military, and first responders 
                  as a thank you for your service. Just let us know when you call to schedule, and we'll apply 
                  your discount.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-11" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-blue-600">
                  What areas do you serve?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700">
                  We serve all of Pinellas, Hillsborough, and Pasco Counties, including Dunedin, Clearwater, 
                  Tampa, St. Petersburg, Palm Harbor, Trinity, and surrounding areas. If you're in the Tampa Bay 
                  area, we can help. Call {BUSINESS_INFO.phone} to confirm service to your location.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-12" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-blue-600">
                  Can I get a same-day appointment?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700">
                  In most cases, yes! We understand garage door issues need quick solutions. We offer same-day 
                  service for most repairs when you call early in the day. For emergency situations, we're available 
                  24/7 to get your door working again as soon as possible.
                </AccordionContent>
              </AccordionItem>

            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Call us anytime—we're happy to answer any questions you have about your garage door
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-6"
          >
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Call Now: {BUSINESS_INFO.phone}
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}