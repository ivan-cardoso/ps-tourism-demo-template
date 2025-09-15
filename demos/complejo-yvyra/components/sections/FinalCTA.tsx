import Image from "next/image";
import Button from "@/components/ui/Button";
import AnimatedElement from "@/components/ui/AnimatedElement";
import homeContent from "@/content/home";
import Link from "next/link";
import setting from "@/content/settings.json";
import { Star, Wifi, Utensils } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import SectionWrapper from "../ui/SectionWrapper";

export default function FinalCTA() {
  const { FINAL_CTA } = homeContent;

  return (
    // <SectionWrapper id="final_cta" className="relative min-h-85vh">
    <section
      id="home"
      className="relative min-h-85vh flex items-center overflow-hidden"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/75 to-dark/10 z-10" />

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={FINAL_CTA.image}
          alt={`${setting.business.name} - Cabañas junto al río`}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 relative z-20">
        <div className="flex flex-col gap-8 lg:gap-16 justify-center py-20">
          <div className="space-y-4 sm:space-y-6 max-w-xl">
            {/* Title */}
            <AnimatedElement animation="fade-up" delay={100}>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl  font-bold text-white leading-tight drop-shadow-lg">
                {FINAL_CTA.title}
              </h2>
            </AnimatedElement>

            {/* Subtitle */}
            <AnimatedElement animation="fade-up" delay={100}>
              <p className="text-base sm:text-lg lg:text-xl text-white ">
                {FINAL_CTA.description}
              </p>
            </AnimatedElement>

            {/* Buttons */}
            <AnimatedElement animation="fade-up" delay={200} className="mt-10">
              <div className="flex gap-4 ">
                <Link href={FINAL_CTA.cta.primary.href}>
                  <Button size={"md"} variant="accent">
                    {FINAL_CTA.cta.primary.text}
                  </Button>
                </Link>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
}
