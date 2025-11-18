import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SERVICES } from "@/lib/constants";
import { Wrench, Settings, Home, Shield, Zap, PanelTop, Calendar } from "lucide-react";
import Link from "next/link";

const iconMap: { [key: string]: any } = {
  "repair-installation": Wrench,
  "opener": Settings,
  "home-automation": Home,
  "maintenance": Shield,
  "spring-replacement": Zap,
  "panel-repair": PanelTop,
  "maintenance-plan": Calendar,
};

export function ServicesGrid() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Professional garage door solutions for residential and commercial properties
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.id];
            return (
              <Card 
                key={service.id} 
                className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-blue-500"
              >
                <CardHeader>
                  <div className="mb-4 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link 
            href="/services" 
            className="inline-block text-blue-600 hover:text-blue-700 font-semibold text-lg hover:underline"
          >
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}