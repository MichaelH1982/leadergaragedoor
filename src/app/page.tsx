import { BeforeAfter } from '@/components/home/BeforeAfter';
import { LocalBusinessSchema } from "@/components/schema/LocalBusinessSchema";
import { Hero } from "@/components/home/Hero";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { ReviewsCarousel } from "@/components/home/ReviewsCarousel";
import { ContactCTA } from "@/components/home/ContactCTA";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Leader Garage Door Services | Installation & Repair in Tampa Bay',
  description: 'Veteran-owned garage door installation, repair, and maintenance serving Dunedin, Clearwater, Tampa, and surrounding areas. Same-day emergency service available. Call (727) 855-3715.',
  keywords: ['garage door repair', 'garage door installation', 'Dunedin FL', 'Clearwater', 'Tampa Bay', 'veteran owned', 'emergency garage door service'],
  openGraph: {
    title: 'Leader Garage Door Services | Tampa Bay',
    description: 'Veteran-owned garage door installation, repair, and maintenance. Same-day emergency service.',
    url: 'https://leadergaragedoor.vercel.app',
    siteName: 'Leader Garage Door Services',
    locale: 'en_US',
    type: 'website',
  },
};
export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <Hero />
      <ServicesGrid />
      <BeforeAfter />
      <ReviewsCarousel />
      <ContactCTA />
    </>
  );
}