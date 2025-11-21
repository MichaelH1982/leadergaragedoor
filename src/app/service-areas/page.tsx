import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BUSINESS_INFO } from "@/lib/constants";
import { MapPin, Phone, CheckCircle } from "lucide-react";

export default function ServiceAreasPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">Service Areas</h1>
            <p className="text-xl text-blue-100">
              Proudly serving residential and commercial customers throughout the Tampa Bay region
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {BUSINESS_INFO.serviceAreas.map((area) => (
              <Card key={area.county} className="border-2 hover:border-blue-500 transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-2xl">{area.county}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {area.cities.map((city) => (
                      <li key={city} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-slate-700">{city}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="bg-blue-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4 text-center">Why Choose Leader Garage Door?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <p className="text-slate-700">Emergency Service</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">Same Day</div>
                <p className="text-slate-700">Service Available</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">Licensed</div>
                <p className="text-slate-700">& Insured</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">Free</div>
                <p className="text-slate-700">Estimates</p>
              </div>
            </div>
          </div>

          {/* Coverage Note */}
          <div className="bg-slate-100 rounded-lg p-6 text-center">
            <p className="text-lg text-slate-700 mb-2">
              <strong>Don't see your city listed?</strong>
            </p>
            <p className="text-slate-600 mb-4">
              We serve many additional areas throughout the Tampa Bay region. Give us a call to confirm service availability in your location.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700"
            >
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                {BUSINESS_INFO.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Map Section */}
<section className="py-16 bg-slate-50">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-8">Our Service Area Coverage</h2>
    <div className="rounded-lg overflow-hidden shadow-lg">
      <iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d180000!2d-82.5!3d28.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Tampa Bay Service Area Map"
/>
    </div>
    <p className="text-center text-slate-600 mt-4">
      Serving Pinellas, Hillsborough, and Pasco Counties
    </p>
  </div>
</section>
    </div>
  );
}