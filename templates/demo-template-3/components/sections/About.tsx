"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { getHomeContent } from "@/utils/contentMapper";
import { Clock, Coffee, Shirt } from "lucide-react";

export function About() {
  const { ABOUT } = getHomeContent();

  const iconMap = {
    "24/7": Clock,
    Desayuno: Coffee,
    Lavandería: Shirt,
  };

  return (
    <SectionWrapper id="sobre-nosotros" background="white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Content */}
        <div className="order-2 lg:order-1">
          <AnimatedElement animation="slide-right">
            <SectionTitle
              subtitle={ABOUT.subtitle}
              title={ABOUT.title}
              centered={false}
            />
          </AnimatedElement>

          <AnimatedElement animation="slide-right" delay={200}>
            <p className="text-[#0B2D22]/70 text-lg leading-relaxed mb-8">
              {ABOUT.description}
            </p>
          </AnimatedElement>

          <AnimatedElement animation="slide-right" delay={400}>
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                const element = document.querySelector("#cabanas");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {ABOUT.cta.text}
            </Button>
          </AnimatedElement>
        </div>

        {/* Image */}
        <div className="order-1 lg:order-2">
          <AnimatedElement animation="slide-left">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/about-image.jpg"
                alt="Interior acogedor de cabaña"
                width={600}
                height={400}
                className="object-cover w-full h-[400px]"
              />
            </div>
          </AnimatedElement>
        </div>
      </div>

      {/*
      <div className="mt-16 lg:mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ABOUT.features.map((feature, index) => {
            const IconComponent = iconMap[feature.title as keyof typeof iconMap] || Clock
            return (
              <AnimatedElement key={index} animation="fade-up" delay={index * 200}>
                <div className="text-center p-6 rounded-xl bg-[#F8F4ED] hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-[#e9a919] rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-[#0B2D22] mb-2">{feature.title}</h3>
                  <p className="text-[#0B2D22]/70">{feature.description}</p>
                </div>
              </AnimatedElement>
            )
          })}
        </div>
      </div>
       */}
    </SectionWrapper>
  );
}
