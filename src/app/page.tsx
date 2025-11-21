import { LocalBusinessSchema } from "@/components/schema/LocalBusinessSchema";
import { Hero } from "@/components/home/Hero";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { ReviewsCarousel } from "@/components/home/ReviewsCarousel";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <>
  <LocalBusinessSchema />
      <Hero />
      <ServicesGrid />
      <ReviewsCarousel />
      <ContactCTA />
    </>
  );
}