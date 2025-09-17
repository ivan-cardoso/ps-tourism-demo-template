import { MapPin, Clock, Car } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedElement from "@/components/ui/AnimatedElement";
import settings from "@/content/settings.json";
import homeContent from "@/content/home";
import Link from "next/link";
import Image from "next/image";

export default function VisitUs() {
  // const { VISIT_US } = homeContent;

  return (
    <SectionWrapper id="location">
      {/* <SectionTitle title={VISIT_US.title} /> */}
      <SectionTitle title="Te esperamos" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Map */}
        <AnimatedElement animation="scale-up">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
            {/* <iframe
              src={`https://www.google.com/maps/embed?${settings.location.map.embedId}`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${settings.business.name} Location`}
            /> */}

            <Image
              src={"/images/map.png"}
              alt="Maddie, founder of Maddie's Bakery"
              fill
              className="object-cover"
            />
          </div>
        </AnimatedElement>

        {/* Info */}
        <div className="space-y-8">
          <AnimatedElement animation="fade-up">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-semibold text-primary mb-2">
                  Address
                </h3>
                <p className="text-dark/80">{settings.business.address.full}</p>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement animation="fade-up" delay={100}>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-semibold text-primary mb-2">
                  Business Hours
                </h3>
                <div className="space-y-1 text-dark/80">
                  <p>{settings.business.hours.weekdays}</p>
                  <p>{settings.business.hours.weekends}</p>
                </div>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement animation="fade-up" delay={200}>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Car className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-semibold text-primary mb-2">
                  Additional Info
                </h3>
                <div className="space-y-1 text-dark/80">
                  {settings.business.features
                    .slice(0, 2)
                    .map((feature, index) => (
                      <p key={index}>{feature}</p>
                    ))}
                </div>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement animation="fade-up" delay={300}>
            <Link href={"/contact"}>
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                {/* {VISIT_US.cta} */}
                Te Esperamos!
              </Button>
            </Link>
          </AnimatedElement>
        </div>
      </div>
    </SectionWrapper>
  );
}
