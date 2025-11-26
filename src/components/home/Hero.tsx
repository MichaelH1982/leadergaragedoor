import { Button } from "@/components/ui/button";
import { Phone, Clock } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          {/* Emergency Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-500 px-4 py-2 rounded-full mb-6">
            <Clock className="h-4 w-4" />
            <span className="font-semibold text-sm">24/7 Emergency Service Available</span>
          </div>

          {/* Main Headline */}
<h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Leader in Quality.<br />
            Leader in Service.
</h1>

{/* Veteran-Owned Statement */}
<p className="text-xl md:text-2xl font-semibold text-white mb-6">
  Proudly Veteran-Owned & Operated
</p>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Expert garage door repair, installation, and maintenance serving Pinellas, Hillsborough, and Pasco Counties.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6"
            >
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call Now: {BUSINESS_INFO.phone}
              </a>
            </Button>

            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-6"
            >
              <a href="/contact">
                Get Free Estimate
              </a>
            </Button>
          </div>

          {/* Trust Signals */}
          <div className="mt-8 pt-8 border-t border-blue-700">
            <div className="flex flex-wrap gap-6 text-sm">
              <div>
                <span className="font-semibold">✓</span> Licensed & Insured
              </div>
              <div>
                <span className="font-semibold">✓</span> Veteran Discounts
              </div>
              <div>
                <span className="font-semibold">✓</span> Same-Day Service
              </div>
              <div>
                <span className="font-semibold">✓</span> Free Estimates
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}