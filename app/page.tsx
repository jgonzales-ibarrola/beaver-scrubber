import Hero from "@/app/components/hero";
import Services from "./components/services-section";
import BookingSection from "./components/booking-section";
import AboutSection from "./components/about-section";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <BookingSection />
      <AboutSection />
    </>
  );
}
