import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

export function ContactCTA() {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Need Garage Door Service Today?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Our expert technicians are ready to help. Available 24/7 for emergency repairs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6"
          >
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              {BUSINESS_INFO.phone}
            </a>
          </Button>

          <Button 
            asChild 
            size="lg" 
            variant="outline"
            className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-6"
          >
            <a href="/contact" className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Request Free Estimate
            </a>
          </Button>
        </div>

        <p className="mt-8 text-blue-200 text-sm">
          Serving Pinellas, Hillsborough, and Pasco Counties • Licensed & Insured (SCC131153999)
        </p>
      </div>
    </section>
  );
}