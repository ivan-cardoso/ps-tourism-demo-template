"use client";

import { useState } from "react";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedElement from "@/components/ui/AnimatedElement";
import ImageCarousel from "@/components/ui/ImageCarousel";
import homeContent from "@/content/home";
import Link from "next/link";
import Card from "../ui/Card";
import { ImageIcon } from "lucide-react";

export default function Gallery() {
  const { GALLERY } = homeContent;
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [initialImageIndex, setInitialImageIndex] = useState(0);

  // Convert gallery images to the format expected by ImageCarousel
  const carouselImages = GALLERY.images.map((image) => ({
    src: image.src,
    alt: image.alt,
    title: image.alt, // Use alt as title for consistency
  }));

  const openCarousel = (index: number) => {
    setInitialImageIndex(index);
    setIsCarouselOpen(true);
  };

  const closeCarousel = () => {
    setIsCarouselOpen(false);
  };

  return (
    <>
      <SectionWrapper id="gallery">
        <div className="relative z-10">
          {/* Gallery Grid - 3x2 layout */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Text Card - spans 2 columns on lg screens */}
            <AnimatedElement
              animation="fade-up"
              delay={0}
              className="col-span-2"
            >
              <div className=" bg-gradient-to-br from-primary via-primary/95 to-primary rounded-xl border-6  border-background p-8 flex flex-col justify-center h-full  text-white shadow-xl">
                <h2 className="font-heading mb-4 leading-tight text-2xl lg:text-4xl font-heading font-bold text-background">
                  {GALLERY.title}
                </h2>
                <p className="md:text-lg  opacity-90 leading-relaxed">
                  {GALLERY.description}
                </p>
              </div>
            </AnimatedElement>

            {/* Gallery Images */}
            {GALLERY.images.map((image, index) => (
              <AnimatedElement
                key={index}
                animation="scale-up"
                delay={(index + 1) * 100}
                className=""
              >
                <div
                  className="relative rounded-xl border-6  border-background overflow-hidden shadow-lg cursor-pointer group aspect-square"
                  onClick={() => openCarousel(index)}
                >
                  <Image
                    src={
                      image.src ||
                      "/placeholder.svg?height=400&width=400&query=bakery pastries"
                    }
                    alt={image.alt || `Gallery image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/35 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3">
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}

            <Link href={GALLERY.cta.href}>
              <Card
                hover
                className=" flex flex-col items-center justify-center h-full "
              >
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center  mb-2">
                  <ImageIcon className="w-8 h-8 text-white" />
                </div>
                <p className="text-lg font-heading font-semibold text-primary mb-1">
                  {GALLERY.cta.text}
                </p>
                <p className="text-dark/70 text-xs md:text-base flex">
                  {GALLERY.cta.description}
                </p>
              </Card>
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* Image Carousel */}
      <ImageCarousel
        images={carouselImages}
        isOpen={isCarouselOpen}
        initialIndex={initialImageIndex}
        onClose={closeCarousel}
      />
    </>
  );
}
