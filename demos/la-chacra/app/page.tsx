import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Highlights } from "@/components/sections/Highlights";
import { Cottages } from "@/components/sections/Cottages";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { SkipLink } from "@/components/ui/SkipLink";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <SkipLink />
      <Navbar variant="white" />
      <main id="main-content">
        <Hero />
        <About />
        <Highlights />
        <Cottages />
        {/* <Gallery /> */}
        <Testimonials />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
