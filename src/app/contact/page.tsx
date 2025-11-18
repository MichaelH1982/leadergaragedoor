import { ContactForm } from "@/components/shared/ContactForm";
import { BUSINESS_INFO } from "@/lib/constants";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-blue-100">
              Get in touch for a free estimate or emergency service
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-lg text-slate-600 mb-8">
                Have a question or need immediate service? We're here to help 24/7.
              </p>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <a 
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="text-blue-600 hover:text-blue-700 text-lg font-semibold"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                    <p className="text-slate-600 text-sm mt-1">Call for immediate assistance</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Hours</h3>
                    <p className="text-slate-700">{BUSINESS_INFO.hours}</p>
                  </div>
                </div>

                {/* Service Areas */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Service Areas</h3>
                    <ul className="text-slate-700 space-y-1">
                      {BUSINESS_INFO.serviceAreas.map((area) => (
                        <li key={area.county}>{area.county}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* License */}
                <div className="bg-slate-100 rounded-lg p-4 mt-8">
                  <p className="text-sm text-slate-600">
                    <strong>Licensed & Insured</strong><br />
                    License #: {BUSINESS_INFO.license}
                  </p>
                  <p className="text-sm text-slate-600 mt-2">
                    Veteran & First Responder Discounts Available
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-slate-50 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Request a Free Estimate</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Find Us</h2>
          <div className="bg-slate-200 rounded-lg h-96 flex items-center justify-center">
            <p className="text-slate-500 text-lg">
              📍 Google Maps integration coming soon
            </p>
          </div>
          <p className="text-center text-slate-600 mt-4">
            Serving the greater Tampa Bay area
          </p>
        </div>
      </section>
    </div>
  );
}