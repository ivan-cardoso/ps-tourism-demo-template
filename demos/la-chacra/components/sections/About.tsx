"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { getHomeContent } from "@/utils/contentMapper";
import { Clock, Coffee, Shirt } from "lucide-react";
import { Carousel } from "../ui/Carousel";

export function About() {
  const { ABOUT } = getHomeContent();

  const iconMap = {
    "24/7": Clock,
    Desayuno: Coffee,
    Lavandería: Shirt,
  };

  return (
    <SectionWrapper id="nosotros" background="neutral">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Content */}
        <div className="">
          <AnimatedElement animation="slide-right">
            <SectionTitle
              subtitle={ABOUT.subtitle}
              title={ABOUT.title}
              centered={false}
            />
          </AnimatedElement>

          <AnimatedElement animation="slide-right" delay={200}>
            <p className="text-dark/70 text-lg leading-relaxed mb-8">
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
        <div className="">
          <AnimatedElement animation="slide-left">
            <div className="relative  rounded-2xl overflow-hidden shadow-xl">
              <Carousel
                options={{
                  loop: true,
                  align: "start",
                }}
                autoplay={true}
                autoplayDelay={3000}
                showArrows={false}
                showDots={false}
                className={`about-carousel`}
                itemsPerView={"single"}
              >
                <div className="relative w-full aspect-video flex-[0_0_100%] min-w-0">
                  <Image
                    src="/images/about-2.jpeg"
                    alt="Interior acogedor de cabaña"
                    width={600}
                    height={400}
                    className="object-cover w-full h-[400px]"
                  />
                </div>

                <div className="relative w-full aspect-video flex-[0_0_100%] min-w-0">
                  <Image
                    src="/images/about-3.jpeg"
                    alt="Interior acogedor de cabaña"
                    width={600}
                    height={400}
                    className="object-cover w-full h-[400px]"
                  />
                </div>

                <div className="relative w-full aspect-video flex-[0_0_100%] min-w-0">
                  <Image
                    src="/images/about-4.jpeg"
                    alt="Interior acogedor de cabaña"
                    width={600}
                    height={400}
                    className="object-cover w-full h-[400px]"
                  />
                </div>

                <div className="relative w-full flex-[0_0_100%] min-w-0">
                  <Image
                    src="/images/about.jpeg"
                    alt="Interior acogedor de cabaña"
                    width={600}
                    height={400}
                    className="object-cover w-full h-[400px]"
                  />
                </div>
              </Carousel>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </SectionWrapper>
  );
}
