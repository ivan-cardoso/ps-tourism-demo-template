"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { getHomeContent } from "@/utils/contentMapper";
import {
  Users,
  Bed,
  ChefHat,
  Wifi,
  BedDouble,
  Droplet,
  Tv,
  Refrigerator,
  Utensils,
} from "lucide-react";
import { Carousel } from "../ui/Carousel";

export function Cottages() {
  const { SERVICES } = getHomeContent();

  const getAmenityIcon = (amenity: string) => {
    if (amenity.includes("persona")) return Users;
    if (amenity.includes("habitacion")) return Bed;
    if (amenity.includes("Cocina") || amenity.includes("Parrilla"))
      return ChefHat;
    if (amenity.includes("WiFi")) return Wifi;
    return Users;
  };

  const icons = {
    "bed-double": BedDouble,

    tv: Tv,
    wifi: Wifi,
    droplet: Droplet,
    refrigerator: Refrigerator,
    utensils: Utensils,
  };

  return (
    <SectionWrapper id="habitaciones" background="neutral">
      <AnimatedElement animation="fade-up">
        <SectionTitle
          title={SERVICES.title}
          subtitle={SERVICES.subtitle}
          highlightedText={SERVICES.highlightedText}
        />
      </AnimatedElement>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {SERVICES.items.map((item, index) => {
          return (
            <AnimatedElement
              key={`${item.name}-${index}`}
              animation="fade-up"
              delay={600}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col bg-background">
                <div className="relative aspect-video">
                  <Carousel
                    options={{
                      loop: true,
                      align: "start",
                    }}
                    autoplay={true}
                    autoplayDelay={3000}
                    showArrows={false}
                    // showDots={false}
                    className={`room-carousel-${item.id}`}
                    itemsPerView={"single"}
                  >
                    {item.images.map((image, index) => (
                      <div
                        key={index}
                        className="relative w-full aspect-video flex-[0_0_100%] min-w-0"
                      >
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${item.name}-image-${index}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-2xl xl:text-3xl font-heading font-semibold text-dark/95 mb-3">
                    {item.name}
                  </h3>

                  <p className="text-background w-fit capitalize bg-dark/80 px-3 py-1 rounded-md">
                    {item.feature}
                  </p>

                  <div className="space-y-2">
                    {item.amenities?.map((desc, i) => {
                      const Icon =
                        icons[desc.icon as keyof typeof icons] ?? null;
                      return (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-dark/85 text-base"
                        >
                          {Icon && (
                            <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-dark" />
                          )}
                          <span>{desc.text}</span>
                        </div>
                      );
                    })}
                  </div>

                  <p className="w-fit text-dark/80 py-2.5">
                    {item.description}
                  </p>

                  <CardFooter className="pt-2">
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => {
                        const element = document.querySelector("#contacto");
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      {item.cta.text}
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            </AnimatedElement>
          );
        })}
      </div>

      {/* CTA Section */}
    </SectionWrapper>
  );
}
