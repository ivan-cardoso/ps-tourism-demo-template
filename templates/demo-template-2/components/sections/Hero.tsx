import Image from "next/image";
import Button from "@/components/ui/Button";
import AnimatedElement from "@/components/ui/AnimatedElement";
import homeContent from "@/content/home";
import Link from "next/link";
import setting from "@/content/settings.json";
import { Star, Wifi, Utensils } from "lucide-react";

export default function Hero() {
  const { HERO } = homeContent;

  return (
    <section
      id="home"
      className="relative min-h-85vh flex items-center overflow-hidden"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-dark/55  z-10" />

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt={`${setting.business.name} - Cabañas junto al río`}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 relative z-20">
        <div className="flex flex-col gap-8 lg:gap-16 justify-end min-h-screen py-20">
          {/* Title */}
          <div className="space-y-4 sm:space-y-6 text-center flex flex-col items-center justify-end h-full w-full ">
            {/* <AnimatedElement animation="fade-in">
              <span className="inline-block px-4 py-2 bg-primary/50 text-accent text-2xl font-heading font-medium">
                Te esperamos
              </span>
            </AnimatedElement> */}

            {/* <AnimatedElement animation="fade-in">
              <span className="inline-block px-4 py-2 bg-primary/50 text-accent text-sm font-medium rounded-full mb-4">
                Te esperamos
              </span>
            </AnimatedElement> */}
            <AnimatedElement animation="fade-up" delay={100}>
              <h1 className="text-4xl sm:text-5xl  lg:text-6xl font-heading font-bold text-white leading-tight drop-shadow-lg">
                {HERO.title}
              </h1>
            </AnimatedElement>

            {/* Subtitle */}
            <AnimatedElement animation="fade-up" delay={200}>
              <p className="text-sm sm:text-lg lg:text-xl text-white max-w-2xl">
                {HERO.subtitle}
              </p>
            </AnimatedElement>

            {/* Badges */}
            {/* <AnimatedElement animation="fade-up" delay={300}>
              <div className="flex flex-wrap gap-4 text-white/90 font-medium">
                <div className="px-3 sm:px-4 py-1.5 sm:py-2 flex items-center gap-2 bg-background/90 text-dark text-xs sm:text-sm font-bold rounded-full">
                  <Image
                    src="/icons/review_logos.png"
                    width={200}
                    height={200}
                    alt={`Tripadvidsor Logo`}
                    className="w-auto h-4 sm:h-6"
                    priority
                  />
                  <span>4.8/5 Reviews</span>
                </div>

                <div className="hidden sm:flex px-3 sm:px-4 py-1.5 sm:py-2 items-center gap-2 bg-background/90 text-dark text-xs sm:text-sm font-bold rounded-full">
                  <Utensils className="w-4 h-4 sm:w-5 sm:h-5 text-dark" />
                  <span>Desayuno</span>
                </div>

                <div className="hidden sm:flex px-3 sm:px-4 py-1.5 sm:py-2 items-center gap-2 bg-background/90 text-dark text-xs sm:text-sm font-bold rounded-full">
                  <Wifi className="w-4 h-4 sm:w-5 sm:h-5 text-dark" />
                  <span>Wi-Fi</span>
                </div>
              </div>
            </AnimatedElement> */}

            {/* Buttons */}
            <AnimatedElement animation="fade-up" delay={400}>
              <div className="flex gap-4">
                <Link href={HERO.cta.primary.href}>
                  <Button size={"lg"} variant="accent">
                    {HERO.cta.primary.text}
                  </Button>
                </Link>
                <Link href={HERO.cta.secondary.href}>
                  <Button size={"lg"} variant="primary">
                    {HERO.cta.secondary.text}
                  </Button>
                </Link>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
}
