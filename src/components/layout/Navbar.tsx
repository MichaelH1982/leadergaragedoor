import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

export function Navbar() {
  return (
    <nav className="border-b bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo - placeholder for now */}
      <Link href="/" className="flex items-center -ml-24">
  <img 
    src="/logo.png" 
    alt="Leader Garage Door Services" 
    className="h-auto w-96 -my-30"
  />
</Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/services" className="hover:text-blue-600 font-medium">
            Services
          </Link>
          <Link href="/service-areas" className="hover:text-blue-600 font-medium">
            Service Areas
          </Link>
          <Link href="/contact" className="hover:text-blue-600 font-medium">
            Contact
          </Link>
          
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              {BUSINESS_INFO.phone}
            </a>
          </Button>
        </div>

        {/* Mobile phone button */}
        <Button asChild className="md:hidden bg-blue-600 hover:bg-blue-700">
          <a href={`tel:${BUSINESS_INFO.phoneRaw}`}>
            <Phone className="h-5 w-5" />
          </a>
        </Button>
      </div>
    </nav>
  );
}