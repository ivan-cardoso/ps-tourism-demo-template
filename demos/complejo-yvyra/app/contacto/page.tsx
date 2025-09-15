import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import PageLayout from "@/components/ui/PageLayout";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import AnimatedElement from "@/components/ui/AnimatedElement";
import { contactContent } from "@/content/contact";
import settings from "@/content/settings.json";
import PageTitle from "@/components/ui/PageTitle";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contacto | Veni a visitarnos",
  description: "Veni a visitarnos",
};

const iconMap = {
  "map-pin": MapPin,
  phone: Phone,
  mail: Mail,
  clock: Clock,
  Phone,
  Mail,
  MapPin,
  Clock,
};

export default function ContactPage() {
  const {
    HERO,
    CONTACT_INFO,
    SPECIAL_REQUESTS,
    SOCIAL,
    CONTACT_FORM,
    CONTACT_DETAILS,
  } = contactContent;

  return (
    <PageLayout>
      <PageHero title={HERO.title} subtitle={HERO.subtitle} />

      {/* Contact Information */}
      <SectionWrapper>
        <SectionTitle
          title={CONTACT_INFO.title}
          subtitle={CONTACT_INFO.description}
        />

        {/* Map */}
        <AnimatedElement animation="scale-up" delay={400}>
          <div className="group relative aspect-video rounded-2xl overflow-hidden shadow-lg max-w-4xl mx-auto">
            {/*  <iframe
              src={`https://www.google.com/maps/embed?${settings.location.map.embedId}`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${settings.business.name} Location`}
            /> */}
            <div className="absolute inset-0 bg-secondary/10 opacity-80 z-10" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full w-16 h-16 bg-accent  flex items-center justify-center">
                <MapPin className="w-8 h-8 text-white" />
              </div>
            </div>
            <img
              alt="Direccion Mapa"
              className="w-full h-full object-cover"
              src={"/images/map.png"}
            />
          </div>
        </AnimatedElement>
      </SectionWrapper>

      <SectionWrapper id="specialties" background="neutral">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">
          <div className="">
            <SectionTitle
              title={CONTACT_FORM.title}
              subtitle={CONTACT_FORM.subtitle}
              centered={false}
              className={"mb-4 lg:mb-4"}
            />

            {/* {CONTACT_FORM.description && (
              <AnimatedElement animation="fade-up" delay={300}>
                <p className="text-lg text-dark/90 mb-6">
                  {CONTACT_FORM.description}
                </p>
              </AnimatedElement>
            )} */}

            <ContactForm />
          </div>

          {/* Image */}
          <div className="relative ">
            <AnimatedElement animation="fade-in" delay={700}>
              <div className="relative aspect-[6/5]  overflow-hidden shadow-sm rounded-xl rounded-tl-[6rem]  border-6  border-background">
                <img
                  alt="Artisan baker at work"
                  className="w-full h-full object-cover"
                  src={
                    CONTACT_FORM.image ||
                    "/placeholder.svg?height=400&width=500&query=Portrait"
                  }
                />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle
          title={CONTACT_DETAILS.title}
          subtitle={CONTACT_DETAILS.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {CONTACT_DETAILS.details.map((detail, index) => {
            const IconComponent = iconMap[detail.icon as keyof typeof iconMap];

            return (
              <AnimatedElement
                key={detail.title}
                animation="fade-up"
                delay={index * 100}
              >
                <Card className="text-center p-6 h-full">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-primary mb-3">
                    {detail.title}
                  </h3>
                  <p className="text-dark/70 text-sm mb-4 whitespace-pre-line">
                    {detail.content}
                  </p>
                  {detail.action && (
                    <Link
                      href={detail.action.link}
                      className="text-accent hover:text-accent/80 font-medium transition-colors text-sm"
                    >
                      {detail.action.text}
                    </Link>
                  )}
                </Card>
              </AnimatedElement>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Social Media */}
      <SectionWrapper background="neutral">
        <SectionTitle title={SOCIAL.title} subtitle={SOCIAL.description} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {SOCIAL.platforms.map((platform, index) => (
            <AnimatedElement
              key={platform.name}
              animation="fade-up"
              delay={index * 100}
            >
              <Card className="p-6 text-center">
                <Link
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    {platform.name === "Instagram" ? (
                      <Instagram className="w-8 h-8 text-white" />
                    ) : (
                      <Facebook className="w-8 h-8 text-white" />
                    )}
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-primary mb-2">
                    {platform.name}
                  </h3>
                  <p className="text-accent font-medium mb-3">
                    {platform.handle}
                  </p>
                  <p className="text-dark/70 text-sm mb-4">
                    {platform.description}
                  </p>

                  <Button variant="accent" size="sm">
                    Seguinos
                  </Button>
                </Link>
              </Card>
            </AnimatedElement>
          ))}
        </div>
      </SectionWrapper>
    </PageLayout>
  );
}
