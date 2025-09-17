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

export default function HomePage() {
  return (
    <>
      {/* <SkipLink /> */}
      <Navbar />

      <Hero />
      <About />
      <Highlights />
      <Cottages />
      {/* <Gallery /> */}
      <Testimonials />
      <Contact />

      <Footer />
    </>
  );
}
