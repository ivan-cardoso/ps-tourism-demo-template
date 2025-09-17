import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedElement from "@/components/ui/AnimatedElement";
import homeContent from "@/content/home";
import Link from "next/link";
import Button from "../ui/Button";
import TestimonialCard from "../ui/TestimonialCard";

export default function Testimonials() {
  const { TESTIMONIALS } = homeContent;

  return (
    <SectionWrapper
      id="testimonials"
      background="neutral"
      // className="bg-gradient-to-tr from-primary/90 via-primary/95 to-primary"
    >
      <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-primary mb-12 lg:mb-16">
        {TESTIMONIALS.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TESTIMONIALS.items.map((testimonial, index) => (
          <AnimatedElement
            key={testimonial.author}
            animation="fade-up"
            delay={index * 150}
          >
            <TestimonialCard testimonial={testimonial} />
          </AnimatedElement>
        ))}
      </div>

      <AnimatedElement animation="fade-up" delay={500}>
        <div className="text-center mt-12">
          <Link
            href={TESTIMONIALS.cta.href}
            className="inline-flex items-center transition-colors"
          >
            <Button variant={"accent"} size={"lg"}>
              {TESTIMONIALS.cta.text}
            </Button>
          </Link>
        </div>
      </AnimatedElement>
    </SectionWrapper>
  );
}
