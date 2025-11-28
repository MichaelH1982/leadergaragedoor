import { LocalBusinessSchema } from '@/components/schema/LocalBusinessSchema';
import { ContactForm } from "@/components/shared/ContactForm";
import { BUSINESS_INFO } from "@/lib/constants";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import type { Metadata } from 'next';
import { CalendlyWidget } from "@/components/shared/CalendlyWidget";

export const metadata: Metadata = {
  title: 'Contact Us | Free Estimates | Leader Garage Door Services',
  description: 'Contact Leader Garage Door Services for free estimates on garage door repair and installation. Call (727) 855-3715 or fill out our contact form. Serving Tampa Bay.',
  keywords: ['contact garage door service', 'free garage door estimate', 'garage door quote Tampa Bay', 'call garage door repair'],
  openGraph: {
    title: 'Contact Us | Leader Garage Door',
    description: 'Get a free estimate on garage door repair and installation. Serving Tampa Bay.',
    url: 'https://leadergaragedoor.vercel.app/contact',
    siteName: 'Leader Garage Door Services',
    locale: 'en_US',
    type: 'website',
  },
};
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <LocalBusinessSchema />
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

 {/* Schedule Appointment */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Schedule Your Free Estimate</h2>
            <p className="text-lg text-slate-600 mb-8">
              Choose a convenient time and we'll come to you for a free, no-obligation estimate.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <CalendlyWidget />
          </div>
        </div>
      </section>
      {/* Map */}
<section className="py-16 bg-slate-50">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-8">Our Service Area</h2>
    <div className="rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113032.77891347678!2d-82.87379486562503!3d28.01959020000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e1e0a9d3f3e5%3A0x77f0e0d8c5c0e0e0!2sDunedin%2C%20FL!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Leader Garage Door Service Area Map"
      />
    </div>
    <p className="text-center text-slate-600 mt-4">
      Serving Dunedin, Clearwater, Tampa, and the greater Tampa Bay area
    </p>
  </div>
</section>
    </div>
  );
}