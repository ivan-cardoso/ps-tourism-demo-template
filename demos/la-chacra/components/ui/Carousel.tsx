"use client";

import type React from "react";

import useEmblaCarousel, { type EmblaOptionsType } from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarouselProps {
  children: React.ReactNode[];
  options?: EmblaOptionsType;
  className?: string;
  showDots?: boolean;
  showArrows?: boolean;
  autoplay?: boolean;
  autoplayDelay?: number;
  itemsPerView?: "single" | "double" | "triple";
}

export function Carousel({
  children,
  options = { loop: true },
  className,
  showDots = true,
  showArrows = true,
  autoplay = false,
  autoplayDelay = 4000,
  itemsPerView = "triple",
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  // Autoplay functionality
  useEffect(() => {
    if (!emblaApi || !autoplay) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, autoplayDelay);

    return () => clearInterval(interval);
  }, [emblaApi, autoplay, autoplayDelay]);

  const itemsPerViewClasses = {
    single: "flex-[0_0_100%]",
    double: "flex-[0_0_100%] md:flex-[0_0_50%]",
    triple: "flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%]",
  };

  return (
    <div className={cn("relative", className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {children.map((child, index) => (
            <div
              key={index}
              // className={`${itemsPerViewClasses[itemsPerView]} min-w-0`}
              className={cn("min-w-0", itemsPerViewClasses[itemsPerView])}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {showArrows && (
        <>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105 z-10"
            onClick={scrollPrev}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 text-primary" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105 z-10"
            onClick={scrollNext}
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 text-primary" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {showDots && (
        <div className="flex justify-center gap-2 mt-6">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-200",
                index === selectedIndex
                  ? "bg-accent scale-110"
                  : "bg-dark/30 hover:bg-dark/50"
              )}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
