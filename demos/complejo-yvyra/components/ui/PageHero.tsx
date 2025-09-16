import PageTitle from "@/components/ui/PageTitle";
import AnimatedElement from "./AnimatedElement";
import Button from "./Button";
import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  cta?: string;
  ctaHref?: string;
  background?: "white" | "background" | "soft" | "dark";
}

export function PageHero({
  title,
  subtitle,
  cta,
  ctaHref = "#contacto",
  background = "soft",
}: PageHeroProps) {
  return (
    <section className="relative min-h-40 flex items-center overflow-hidden">
      {/* Leaf Background Illustrations */}
      {/* <div className="absolute inset-0 brightness-50 opacity-30  bg-[url('/patterns/leaves-pattern2.png')] bg-no-repeat bg-center bg-contain md:bg-bottom md:bg-cover"></div> */}
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark/35 via-dark/50 to-dark/65 z-10" />

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt={`Cabañas junto al río`}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      {/* Content */}
      <div className="relative z-10 pt-32 md:pt-40 pb-20 md:pb-24 w-full">
        <div className="text-center max-w-4xl mx-auto w-full">
          <AnimatedElement>
            <PageTitle
              title={title}
              subtitle={subtitle}
              centered
              className="mb-0 lg:mb-0"
            />
          </AnimatedElement>

          {cta && (
            <AnimatedElement delay={200}>
              <div className="mt-8">
                <Button size="lg">{cta}</Button>
              </div>
            </AnimatedElement>
          )}
        </div>
      </div>
    </section>
  );
}
