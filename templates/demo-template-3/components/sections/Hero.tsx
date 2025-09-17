"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { getHomeContent } from "@/utils/contentMapper";
import { Star, Users, Award, MapPin } from "lucide-react";

export function Hero() {
  const { HERO } = getHomeContent();

  const handleCTAClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Cabaña en entorno natural"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center text-white">
        <AnimatedElement animation="fade-up" delay={200}>
          <p className="text-accent font-medium text-sm uppercase tracking-wider mb-4">
            {HERO.label}
          </p>
        </AnimatedElement>

        <AnimatedElement animation="fade-up" delay={400}>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
            {HERO.title}
          </h1>
        </AnimatedElement>

        <AnimatedElement animation="fade-up" delay={600}>
          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed mb-8">
            {HERO.subtitle}
          </p>
        </AnimatedElement>

        <AnimatedElement animation="fade-up" delay={800}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="primary"
              size="lg"
              onClick={() => handleCTAClick(HERO.cta.primary.href)}
              className="w-full sm:w-auto"
            >
              {HERO.cta.primary.text}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => handleCTAClick(HERO.cta.secondary.href)}
              className="w-full sm:w-auto"
            >
              {HERO.cta.secondary.text}
            </Button>
          </div>
        </AnimatedElement>

        <AnimatedElement animation="fade-up" delay={1000}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {HERO.stats.map((stat, index) => {
              const icons = [Star, Users, Award, MapPin];
              const IconComponent = icons[index];

              return (
                <div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4"
                >
                  <div className="flex items-center justify-center mb-2">
                    <IconComponent className="w-4 h-4 md:w-5 md:h-5 text-[#e9a919] mr-1" />
                    <div className="text-lg md:text-2xl font-heading font-bold text-[#e9a919]">
                      {stat.number}
                    </div>
                  </div>
                  <div className="text-xs md:text-sm text-white/90 leading-tight">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
