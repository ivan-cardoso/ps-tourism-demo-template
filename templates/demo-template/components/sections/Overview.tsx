import { Coffee, Cake, Croissant, Leaf } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedElement from "@/components/ui/AnimatedElement";
import homeContent from "@/content/home";

const iconMap = {
  croissant: Croissant,
  coffee: Coffee,
  cake: Cake,
  leaf: Leaf,
};

export default function Overview() {
  const { OVERVIEW } = homeContent;

  return (
    <SectionWrapper id="specialties" background="neutral">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Content */}
        <div>
          <SectionTitle
            title={OVERVIEW.title}
            subtitle={OVERVIEW.subtitle}
            centered={false}
            className={"mb-4 lg:mb-4"}
          />

          {OVERVIEW.description && (
            <AnimatedElement animation="fade-up" delay={300}>
              <p className="text-lg text-dark/90 mb-6">
                {OVERVIEW.description}
              </p>
            </AnimatedElement>
          )}

          {/* <div className="space-y-4">
            {OVERVIEW.items.map((item, index) => {
              const IconComponent = iconMap[item.icon as keyof typeof iconMap];

              return (
                <AnimatedElement
                  key={item.title}
                  animation="slide-right"
                  delay={400 + index * 100}
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-primary">
                      {item.title}
                    </h3>
                  </div>
                </AnimatedElement>
              );
            })}
          </div> */}
        </div>

        {/* Image */}
        <div className="relative">
          <AnimatedElement animation="fade-in" delay={700}>
            <div className="relative aspect-[6/5]  overflow-hidden shadow-sm rounded-xl rounded-tl-[6rem]  border-6  border-background">
              <img
                alt="Artisan baker at work"
                className="w-full h-full object-cover"
                src={
                  OVERVIEW.image ||
                  "/placeholder.svg?height=400&width=500&query=bakery specialties portrait"
                }
              />
            </div>
          </AnimatedElement>
        </div>
      </div>
    </SectionWrapper>
  );
}
