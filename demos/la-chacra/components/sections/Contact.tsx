"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { Button } from "@/components/ui/Button";
import { getHomeContent, getSettings } from "@/utils/contentMapper";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Image from "next/image";

export function Contact() {
  const { CONTACT } = getHomeContent();
  const settings = getSettings();

  return (
    <SectionWrapper id="contacto" background="white">
      <AnimatedElement animation="fade-up">
        <SectionTitle title={CONTACT.title} subtitle={CONTACT.subtitle} />
      </AnimatedElement>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <AnimatedElement animation="slide-right" className="order-2 lg:order-1">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-dark mb-2">
                  Ubicación
                </h3>
                <p className="text-dark/70">{CONTACT.info.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-dark mb-2">
                  Teléfono
                </h3>
                <a
                  href={`tel:${CONTACT.info.phone}`}
                  className="text-dark/70 hover:text-accent transition-colors"
                >
                  {CONTACT.info.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-dark mb-2">
                  Email
                </h3>
                <a
                  href={`mailto:${CONTACT.info.email}`}
                  className="text-dark/70 hover:text-accent transition-colors"
                >
                  {CONTACT.info.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-dark mb-2">
                  Horarios
                </h3>
                <p className="text-dark/70">{CONTACT.info.hours}</p>
              </div>
            </div>

            <div className="pt-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() =>
                  window.open(`tel:${CONTACT.info.phone}`, "_self")
                }
              >
                Llamar Ahora
              </Button>
            </div>
          </div>
        </AnimatedElement>

        {/* Map */}
        {/* <AnimatedElement animation="slide-left" className="order-1 lg:order-2">
          <div className="bg-neutral/30 rounded-2xl p-8 aspect-auto min-h-92 lg:min-h-auto lg:aspect-video flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-accent mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold text-dark mb-2">
                Ubicación
              </h3>

              <Button
                variant="primary"
                onClick={() => {
                  const address = encodeURIComponent(CONTACT.info.address);
                  window.open(
                    `https://maps.google.com/maps?q=${address}`,
                    "_blank"
                  );
                }}
              >
                Ver en Google Maps
              </Button>
            </div>
          </div>
        </AnimatedElement> */}

        <AnimatedElement animation="scale-up" className="order-1 lg:order-2">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={"/images/map.png"}
              alt="Maddie, founder of Maddie's Bakery"
              fill
              className="object-cover"
            />

            <div className="bg-background/40 flex items-center justify-center absolute top-0 left-0 w-full h-full">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-dark mx-auto mb-4" />
                <h3 className="font-heading text-xl font-semibold text-dark mb-2">
                  Ubicación
                </h3>

                <Button
                  variant="primary"
                  onClick={() => {
                    const address = encodeURIComponent(CONTACT.info.address);
                    window.open(
                      `https://maps.google.com/maps?q=${address}`,
                      "_blank"
                    );
                  }}
                >
                  Ver en Google Maps
                </Button>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </SectionWrapper>
  );
}
