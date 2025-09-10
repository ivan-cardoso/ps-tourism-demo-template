"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedElement from "@/components/ui/AnimatedElement";
import homeContent from "@/content/home";

import {
  Wifi,
  Wind,
  Thermometer,
  Coffee,
  UtensilsCrossed,
  Car,
  BedDouble,
  // Fridge,
  Microwave,
  Tv,
  Music,
  Utensils,
  Flame,
  Droplet,
  Fan,
} from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import Link from "next/link";
import Button from "../ui/Button";

const highlights = [
  { icon: Wifi, label: "Wi-Fi" },
  { icon: Wind, label: "Aire Acondicionado" },
  { icon: Thermometer, label: "Calefacción" },
  { icon: Coffee, label: "Desayuno Incluido" },
  { icon: UtensilsCrossed, label: "Parrilla Privada" },
  { icon: Car, label: "Techo Cubierto (*)" },
  { icon: BedDouble, label: "Ropa de Cama" },
  { icon: Microwave, label: "Refrigerador" },
  { icon: Tv, label: "TV" },
  { icon: Music, label: "Reproductor de Audio" },
  { icon: Utensils, label: "Vajilla Completa" },
  { icon: Flame, label: "Anafe" },
  { icon: Droplet, label: "Agua Caliente" },
  { icon: Fan, label: "Secador de Pelo" },
  { icon: Microwave, label: "Microondas" },
];

export default function Highlights() {
  const { HIGHLIGHTS } = homeContent;
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: true,
  });

  useEffect(() => {
    if (!emblaApi) return;
    let raf: number;

    const autoScroll = () => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
      raf = requestAnimationFrame(() => setTimeout(autoScroll, 2000)); // smooth auto-scroll every 2.5s
    };

    autoScroll();
    return () => cancelAnimationFrame(raf);
  }, [emblaApi]);

  return (
    <SectionWrapper>
      <div className="w-full">
        <SectionTitle
          title={HIGHLIGHTS.title}
          subtitle={HIGHLIGHTS.description}
          className={"mb-4 lg:mb-4"}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex-[0_0_33%] sm:flex-[0_0_33%] md:flex-[0_0_20%] lg:flex-[0_0_14%] flex flex-col items-center justify-center text-center p-3 "
                >
                  <div className="flex flex-col bg-secondary/10 items-center w-full h-full p-3 rounded-md shadow-sm overflow-hidden">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 stroke-[1.5px] text-secondary mb-3" />
                    <p className="text-xs  sm:text-sm md:text-base font-medium text-dark font-family-heading max-w-24 select-none">
                      {item.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <AnimatedElement animation="fade-up" delay={100}>
        <div className="text-center">
          <Link href={HIGHLIGHTS.cta.primary.href}>
            <Button variant="primary" size="lg">
              {HIGHLIGHTS.cta.primary.text}
            </Button>
          </Link>
        </div>
      </AnimatedElement>
    </SectionWrapper>
  );
}
