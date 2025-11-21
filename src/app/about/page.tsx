import { LocalBusinessSchema } from "@/components/schema/LocalBusinessSchema";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BUSINESS_INFO } from "@/lib/constants";
import { Phone, Shield, Clock, Award, Heart, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
  <LocalBusinessSchema />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">About Leader Garage Door Services</h1>
            <p className="text-xl text-blue-100">
              Your trusted partner for garage door solutions across the Tampa Bay area
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-slate-700 mb-4">
                Leader Garage Door Services was founded with a simple mission: to provide the Tampa Bay area 
                with honest, reliable, and professional garage door services. We understand that your garage door 
                is more than just an entry point—it's a critical component of your home's security, convenience, 
                and curb appeal.
              </p>
              <p className="text-lg text-slate-700 mb-4">
                As a locally owned and operated business, we take pride in serving our neighbors throughout 
                Pinellas, Hillsborough, and Pasco Counties. Our team of certified technicians brings years of 
                combined experience to every job, ensuring quality workmanship and lasting results.
              </p>
              <p className="text-lg text-slate-700">
                We're available 24/7 because we know garage door emergencies don't wait for business hours. 
                Whether you need a spring replacement at midnight or a new installation, we're here to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Makes Us Different</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-blue-500 transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Licensed & Insured</h3>
                <p className="text-slate-600">
                  Fully licensed (#{BUSINESS_INFO.license}) and insured for your peace of mind and protection.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-500 transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">24/7 Availability</h3>
                <p className="text-slate-600">
                  Emergency service available around the clock. We're here when you need us most.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-500 transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Expert Technicians</h3>
                <p className="text-slate-600">
                  Certified professionals with years of experience and ongoing training.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-500 transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Veteran Discounts</h3>
                <p className="text-slate-600">
                  Proudly supporting those who served. Special pricing for veterans and first responders.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-500 transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Local Community</h3>
                <p className="text-slate-600">
                  Tampa Bay residents serving Tampa Bay residents. We're your neighbors.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-500 transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Transparent Pricing</h3>
                <p className="text-slate-600">
                  Free estimates with upfront pricing. No hidden fees or surprise charges.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Commitment to You</h2>
            <div className="bg-blue-50 rounded-lg p-8">
              <ul className="space-y-4 text-lg text-slate-700 max-w-md mx-auto">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-xl">✓</span>
                  <span>We arrive on time and respect your property</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-xl">✓</span>
                  <span>We explain the issue and solution in plain language</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-xl">✓</span>
                  <span>We provide upfront pricing before starting any work</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-xl">✓</span>
                  <span>We use high-quality parts and materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-xl">✓</span>
                  <span>We stand behind our work with strong warranties</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-xl">✓</span>
                  <span>We clean up after ourselves—every time</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Experience the Leader Difference?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers across the Tampa Bay area
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