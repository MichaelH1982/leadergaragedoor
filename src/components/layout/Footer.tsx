"use client";

import { BUSINESS_INFO } from "@/lib/constants";
import Link from "next/link";
import Script from "next/script";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Leader Garage Door Services</h3>
            <p className="text-slate-300 text-sm mb-2">License #: {BUSINESS_INFO.license}</p>
            <p className="text-slate-300 text-sm">{BUSINESS_INFO.hours}</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-slate-300 hover:text-white text-sm">
                  Privacy Policy
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
              <li>
                <Link href="/faq" className="text-slate-300 hover:text-white text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-slate-300 hover:text-white text-sm">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Service Areas</h3>
            <ul className="text-slate-300 text-sm space-y-2">
              {BUSINESS_INFO.serviceAreas.map((area) => (
                <li key={area.county}>{area.county}</li>
              ))}
            </ul>
          </div>

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

        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row items-center justify-center gap-6">
          <div id="mni-membership-639210142658324773"></div>
          <a href="https://www.bbb.org/us/fl/dunedin/profile/garage-doors/leader-garage-door-services-llc-0653-90461299/#sealclick" target="_blank" rel="nofollow noopener noreferrer">
            <img src="https://seal-westflorida.bbb.org/seals/blue-seal-150-110-bbb-90461299.png" style={{ border: 0 }} alt="Leader Garage Door Services LLC BBB Business Review" />
          </a>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Leader Garage Door Services. All rights reserved.</p>
        </div>
      </div>

      <Script
        src="https://dunedinfl.chambermaster.com/Content/Script/Member.js"
        strategy="afterInteractive"
        onLoad={() => {
          new (window as any).MNI.Widgets.Member("mni-membership-639210142658324773", {
            member: 8924,
            styleTemplate:
              "#@id{text-align:center;position:relative}#@id .mn-widget-member-name{font-weight:700}#@id .mn-widget-member-logo{max-width:100%}",
          }).create();
        }}
      />
    </footer>
  );
}
