import Image from "next/image";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedElement from "@/components/ui/AnimatedElement";
import homeContent from "@/content/home";
import Link from "next/link";
import { BedDouble, Car } from "lucide-react";

export default function ServicesPreview() {
  const { SERVICES } = homeContent;

  const icons = {
    "bed-double": BedDouble,
    car: Car,
  };

  return (
    <SectionWrapper id="services" background="neutral">
      <SectionTitle
        title={SERVICES.title}
        subtitle={SERVICES.description}
        label={SERVICES.label}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
        {SERVICES.items.map((item, index) => {
          return (
            <AnimatedElement
              key={`${item.name}-${index}`}
              animation="fade-up"
              delay={index * 100}
            >
              <Card hover className="h-full bg-background">
                <div className="relative aspect-video">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 space-y-2.5">
                  <h3 className="text-2xl xl:text-3xl font-heading font-semibold text-secondary/95 mb-2">
                    {item.name}
                  </h3>

                  <p className=" text-background w-fit capitalize bg-secondary/80 px-3 py-1 rounded-md">
                    {item.feature}
                  </p>

                  {/* Now description is an array */}
                  <div className="space-y-2">
                    {item.description &&
                      item.description.map((desc, i) => {
                        const Icon =
                          icons[desc.icon as keyof typeof icons] ?? null;
                        return (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-dark/85 text-base"
                          >
                            {Icon && (
                              <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-dark" />
                            )}
                            <span>{desc.text}</span>
                          </div>
                        );
                      })}
                  </div>

                  <div className="w-full">
                    <Link href={item.cta.href}>
                      <Button variant="outline" className="w-full" size="md">
                        {item.cta.text}
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </AnimatedElement>
          );
        })}
      </div>

      <AnimatedElement animation="fade-up" delay={200}>
        <div className="text-center">
          <Link href={SERVICES.cta.href}>
            <Button variant="primary" size="lg">
              {SERVICES.cta.text}
            </Button>
          </Link>
        </div>
      </AnimatedElement>
    </SectionWrapper>
  );
}
