import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedElement from "@/components/ui/AnimatedElement";
import homeContent from "@/content/home";
import Link from "next/link";
import Button from "../ui/Button";
import { ArrowRight } from "lucide-react";

export default function About() {
  const { ABOUT } = homeContent;

  return (
    <SectionWrapper id="about" background="neutral">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Image */}
        <div className="relative">
          <AnimatedElement animation="scale-up">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src={
                  ABOUT.image ||
                  "/placeholder.svg?height=400&width=500&query=bakery founder portrait"
                }
                alt="Maddie, founder of Maddie's Bakery"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedElement>
        </div>

        {/* Content */}
        <div>
          <SectionTitle
            title={ABOUT.title}
            label={ABOUT.label}
            centered={false}
            className={"mb-4 lg:mb-4"}
          />

          <AnimatedElement animation="fade-up" delay={200}>
            <p className="text-lg text-dark/80 mb-4">{ABOUT.content}</p>
          </AnimatedElement>

          {ABOUT.tagline && (
            <AnimatedElement animation="fade-up" delay={300}>
              <p className="text-xl font-heading font-semibold text-accent mb-4">
                {ABOUT.tagline}
              </p>
            </AnimatedElement>
          )}

          <AnimatedElement animation="fade-up" className="mt-8" delay={400}>
            <Link href="/about">
              <Button variant="primary" size="lg">
                {ABOUT.cta} <ArrowRight className="ml-1.5 w-5 h-5 text-white" />
              </Button>
            </Link>
          </AnimatedElement>
        </div>
      </div>
    </SectionWrapper>
  );
}
