import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { Carousel } from "@/components/ui/Carousel";
import { getHomeContent } from "@/utils/contentMapper";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const { TESTIMONIALS } = getHomeContent();

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={cn(
          "w-4 h-4 md:w-5 md:h-5",
          i < rating ? "text-accent fill-current" : "text-gray-300"
        )}
        aria-hidden="true"
      />
    ));
  };

  return (
    <SectionWrapper id="testimonios" background="white">
      <AnimatedElement animation="fade-up">
        <SectionTitle
          title={TESTIMONIALS.title}
          highlightedText={TESTIMONIALS.highlightedText}
        />
      </AnimatedElement>

      <AnimatedElement animation="fade-up" delay={200}>
        <div className="max-w-6xl mx-auto">
          <Carousel
            options={{
              loop: true,
              align: "start",
              slidesToScroll: 1,
            }}
            autoplay={true}
            autoplayDelay={6000}
            className="testimonials-carousel"
          >
            {TESTIMONIALS.items.map((testimonial) => (
              <div key={testimonial.id} className="px-2 md:px-3">
                <article className="bg-background rounded-2xl p-4 md:p-6 lg:p-8 text-center relative min-h-[280px] md:min-h-48 flex flex-col justify-between select-none">
                  <div>
                    <Quote
                      className="w-8 h-8 md:w-10 md:h-10 text-accent mx-auto mb-3 md:mb-4 opacity-50"
                      aria-hidden="true"
                    />

                    <blockquote className="text-sm md:text-base 2xl:text-lg text-dark leading-relaxed mb-4 md:mb-6 italic line-clamp-4">
                      "{testimonial.comment}"
                    </blockquote>
                  </div>

                  <div>
                    <div
                      className="flex justify-center mb-3 md:mb-4"
                      role="img"
                      aria-label={`${testimonial.rating} de 5 estrellas`}
                    >
                      {renderStars(testimonial.rating)}
                    </div>

                    <footer>
                      <cite className="font-heading text-base md:text-lg font-semibold text-primary not-italic">
                        {testimonial.name}
                      </cite>
                      <p className="text-dark/70 text-xs md:text-sm mt-1">
                        {testimonial.location}
                      </p>
                    </footer>
                  </div>
                </article>
              </div>
            ))}
          </Carousel>
        </div>
      </AnimatedElement>
    </SectionWrapper>
  );
}
