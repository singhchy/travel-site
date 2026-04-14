"use client";

import Hero from "@/components/sections/Hero";
import PopularDestinations from "@/components/sections/PopularDestinations";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import TourGrid from "@/components/sections/TourGrid";
import BookingSteps from "@/components/sections/BookingSteps";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PopularDestinations />
      <Stats />
      <Services />
      <TourGrid />
      <BookingSteps />
      <Testimonials />
      <CTABanner />
      <Footer />
    </main>
  );
}
