
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturedEvents from "@/components/FeaturedEvents";
import UpcomingEvents from "@/components/UpcomingEvents";
import TestimonialSection from "@/components/TestimonialSection";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturedEvents />
        <TestimonialSection />
        <UpcomingEvents />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
