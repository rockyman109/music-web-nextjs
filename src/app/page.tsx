import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import MusicTestimonial from "@/components/MusicTestimonial";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* <h1 className="text-2xl text-center text-white">Faizan next js </h1> */}
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MusicTestimonial />
      <UpcomingWebinars />
      <Instructor />
      <Footer />
    </main>
  );
}
