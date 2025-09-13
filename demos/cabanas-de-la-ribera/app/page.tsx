import Hero from "@/components/sections/Hero";
import Overview from "@/components/sections/Overview";
import Highlights from "@/components/sections/Highlights";
import ServicesPreview from "@/components/sections/ServicesPreview";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import VisitUs from "@/components/sections/VisitUs";
import Contact from "@/components/sections/Contact";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Overview />
        <Highlights />
        <ServicesPreview />
        <Gallery />
        <Testimonials />
        <FinalCTA />
        {/* <About />
        <VisitUs />
        <Contact /> */}
      </main>
      <Footer />
    </>
  );
}
