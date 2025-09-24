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
import { Users, Bed, ChefHat, Wifi } from "lucide-react";

export function Cottages() {
  const { COTTAGES } = getHomeContent();

  const getAmenityIcon = (amenity: string) => {
    if (amenity.includes("persona")) return Users;
    if (amenity.includes("habitacion")) return Bed;
    if (amenity.includes("Cocina") || amenity.includes("Parrilla"))
      return ChefHat;
    if (amenity.includes("WiFi")) return Wifi;
    return Users;
  };

  return (
    <SectionWrapper id="cabanas" background="neutral">
      <AnimatedElement animation="fade-up">
        <SectionTitle
          title={COTTAGES.title}
          subtitle={COTTAGES.subtitle}
          highlightedText={COTTAGES.highlightedText}
        />
      </AnimatedElement>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {COTTAGES.items.map((cottage, index) => (
          <AnimatedElement
            key={cottage.id}
            animation="fade-up"
            delay={index * 200}
          >
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
              <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
                <Image
                  src={cottage.image || "/placeholder.svg"}
                  alt={cottage.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <CardHeader className="flex-grow">
                <CardTitle className="text-xl md:text-2xl">
                  {cottage.name}
                </CardTitle>
                <p className="text-dark/70 leading-relaxed text-sm md:text-base">
                  {cottage.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="grid grid-cols-2 gap-2 md:gap-3">
                  {cottage.amenities.map((amenity, amenityIndex) => {
                    const IconComponent = getAmenityIcon(amenity);
                    return (
                      <div
                        key={amenityIndex}
                        className="flex items-center gap-2 text-xs md:text-sm text-dark/70"
                      >
                        <IconComponent className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
                        <span className="truncate">{amenity}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>

              <CardFooter className="pt-0">
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={() => {
                    const element = document.querySelector("#contacto");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {cottage.cta.text}
                </Button>
              </CardFooter>
            </Card>
          </AnimatedElement>
        ))}
      </div>

      {/* CTA Section */}
      {/* <AnimatedElement animation="fade-up" delay={600}>
        <div className="text-center mt-12 md:mt-16 p-6 md:p-8 bg-[#F8F4ED] rounded-2xl">
          <h3 className="font-heading text-xl md:text-2xl font-bold text-dark mb-4">
            ¿Listo para tu escape perfecto?
          </h3>
          <p className="text-dark/70 mb-6 max-w-2xl mx-auto text-sm md:text-base">
            Contactanos ahora para verificar disponibilidad y hacer tu reserva. Nuestro equipo está listo para ayudarte
            a planificar tu estadía ideal.
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              const element = document.querySelector("#contacto")
              if (element) {
                element.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            Verificar Disponibilidad
          </Button>
        </div>
      </AnimatedElement> */}
    </SectionWrapper>
  );
}
