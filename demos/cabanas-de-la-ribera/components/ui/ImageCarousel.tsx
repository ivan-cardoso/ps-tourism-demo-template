"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import cn from "@/utils/cn";

interface ImageCarouselProps {
  images: Array<{
    src: string;
    alt: string;
    title?: string;
  }>;
  isOpen: boolean;
  initialIndex: number;
  onClose: () => void;
}

export default function ImageCarousel({
  images,
  isOpen,
  initialIndex,
  onClose,
}: ImageCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    startIndex: initialIndex,
  });
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);

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

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // Update carousel when initialIndex changes
  useEffect(() => {
    if (emblaApi && isOpen) {
      emblaApi.scrollTo(initialIndex);
      setSelectedIndex(initialIndex);
    }
  }, [emblaApi, initialIndex, isOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          scrollPrev();
          break;
        case "ArrowRight":
          scrollNext();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, scrollPrev, scrollNext]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative z-10 w-full h-full flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 text-white">
          <div className="text-sm">
            {selectedIndex + 1} / {images.length}
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Main Carousel */}
        <div className="flex-1 flex items-center justify-center px-4 pb-4">
          <div className="relative max-w-6xl max-h-full w-full">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {images.map((image, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0 relative">
                    <div className="flex items-center justify-center h-[70vh]">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        width={800}
                        height={600}
                        className="max-w-full max-h-full object-contain rounded-lg"
                        priority={index === initialIndex}
                      />
                    </div>
                    {/* {image.title && (
                      <div className="absolute bottom-4 left-4 bg-black/50 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
                        <p className="font-medium">{image.title}</p>
                      </div>
                    )} */}
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={scrollPrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={scrollNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
          </div>
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="p-4 md:hidden">
            <div className="flex justify-center gap-2 max-w-6xl  overflow-x-auto">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={cn(
                    "flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all",
                    index === selectedIndex
                      ? "border-white"
                      : "border-transparent hover:border-white/50"
                  )}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
