import HeroSection from "@/app/components/hero-section";
import Services from "./components/services-section";
import BookingSection from "./components/booking-section";
import AboutSection from "./components/about-section";
import ContactSection from "./components/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <BookingSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
