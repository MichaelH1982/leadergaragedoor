import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SERVICES, BUSINESS_INFO } from "@/lib/constants";
import { Phone, Wrench, Settings, Home, Shield, Zap, PanelTop, Calendar, CheckCircle } from "lucide-react";

const iconMap: { [key: string]: any } = {
  "repair-installation": Wrench,
  "opener": Settings,
  "home-automation": Home,
  "maintenance": Shield,
  "spring-replacement": Zap,
  "panel-repair": PanelTop,
  "maintenance-plan": Calendar,
};

const serviceDetails: { [key: string]: string[] } = {
  "repair-installation": [
    "New garage door installation",
    "Residential and commercial doors",
    "Panel-by-panel replacement",
    "All brands and styles",
    "Professional measurements"
  ],
  "opener": [
    "Opener repair and replacement",
    "Smart home integration",
    "Belt, chain, and screw drive systems",
    "Remote programming",
    "Safety sensor installation"
  ],
  "home-automation": [
    "MyQ smart garage integration",
    "WiFi-enabled openers",
    "Voice control setup (Alexa, Google)",
    "Smartphone app integration",
    "Remote monitoring"
  ],
  "maintenance": [
    "Annual safety inspections",
    "Lubrication and adjustment",
    "Track alignment",
    "Hardware tightening",
    "Weatherstripping replacement"
  ],
  "spring-replacement": [
    "Torsion spring replacement",
    "Extension spring systems",
    "Same-day emergency service",
    "High-cycle springs available",
    "Safety cable installation"
  ],
  "panel-repair": [
    "Single panel replacement",
    "Dent and damage repair",
    "Color matching",
    "Insulated panel options",
    "Storm damage repair"
  ],
  "maintenance-plan": [
    "Bi-annual service visits",
    "Priority scheduling",
    "Discounted repairs",
    "Extended parts warranty",
    "24/7 emergency support"
  ]
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-blue-100">
              Comprehensive garage door solutions for homes and businesses across the Tampa Bay area
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {SERVICES.map((service) => {
              const Icon = iconMap[service.id];
              const details = serviceDetails[service.id] || [];
              
              return (
                <Card key={service.id} className="border-2 hover:border-blue-500 transition-all">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-8 w-8 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                        <CardDescription className="text-base">
                          {service.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a free estimate on any of our services
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