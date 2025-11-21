import { BUSINESS_INFO } from "@/lib/constants";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Leader Garage Door Services</h3>
            <p className="text-slate-300 text-sm mb-2">License #: {BUSINESS_INFO.license}</p>
            <p className="text-slate-300 text-sm">{BUSINESS_INFO.hours}</p>
          </div>
          
          {/* Quick Links */}
<div>
  <h3 className="font-bold text-lg mb-4">Quick Links</h3>
  <ul className="space-y-2">
    <li>
      <Link href="/about" className="text-slate-300 hover:text-white text-sm">
        About Us
      </Link>
    </li>
    <li>
      <Link href="/services" className="text-slate-300 hover:text-white text-sm">
        Services
      </Link>
    </li>
    <li>
      <Link href="/service-areas" className="text-slate-300 hover:text-white text-sm">
        Service Areas
      </Link>
    </li>
    <li>
      <Link href="/contact" className="text-slate-300 hover:text-white text-sm">
        Contact Us
      </Link>
    </li>
  </ul>
</div>
          
          {/* Service Areas */}
          <div>
            <h3 className="font-bold text-lg mb-4">Service Areas</h3>
            <ul className="text-slate-300 text-sm space-y-2">
              {BUSINESS_INFO.serviceAreas.map((area) => (
                <li key={area.county}>{area.county}</li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <p className="text-slate-300 text-sm mb-2">
              Phone: <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-white">{BUSINESS_INFO.phone}</a>
            </p>
            <p className="text-slate-300 text-sm mt-4 font-semibold">
              Veteran & First Responder Discounts Available
            </p>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Leader Garage Door Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}