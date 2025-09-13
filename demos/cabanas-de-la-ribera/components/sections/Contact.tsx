import { Phone, Mail, Instagram } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedElement from "@/components/ui/AnimatedElement";
import homeContent from "@/content/home";
import settings from "@/content/settings.json";
import Link from "next/link";

export default function Contact() {
  const { CONTACT } = homeContent;

  return (
    <SectionWrapper id="contact" background="secondary">
      <SectionTitle title={CONTACT.title} subtitle={CONTACT.description} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <AnimatedElement animation="fade-up">
          <Card className="text-center p-8 h-full">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-heading font-semibold text-primary mb-2">
              Call Us
            </h3>
            <p className="text-dark/70 mb-4">
              Ready to place an order or have questions?
            </p>
            <Link
              href={`tel:${settings.business.contact.phone}`}
              className="text-accent hover:text-accent/80 font-medium transition-colors"
            >
              {settings.business.contact.phone}
            </Link>
          </Card>
        </AnimatedElement>

        <AnimatedElement animation="fade-up" delay={100}>
          <Card className="text-center p-8 h-full">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-heading font-semibold text-primary mb-2">
              Email Us
            </h3>
            <p className="text-dark/70 mb-4">Send us a message anytime</p>
            <Link
              href={`mailto:${settings.business.contact.email}`}
              className="text-accent hover:text-accent/80 font-medium transition-colors"
            >
              {settings.business.contact.email}
            </Link>
          </Card>
        </AnimatedElement>

        <AnimatedElement animation="fade-up" delay={200}>
          <Card className="text-center p-8 h-full">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Instagram className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-heading font-semibold text-primary mb-2">
              Follow Us
            </h3>
            <p className="text-dark/70 mb-4">See our latest creations</p>
            <Link
              href={settings.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 font-medium transition-colors"
            >
              {settings.social.instagram.handle}
            </Link>
          </Card>
        </AnimatedElement>
      </div>

      <AnimatedElement animation="fade-up" delay={300}>
        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/contact`}>
              <Button variant="primary" size="lg" className="w-full">
                {CONTACT.cta.primary}
              </Button>
            </Link>
            {/* <Link href={`tel:${settings.business.contact.phone}`}>
              <Button variant="outline" size="lg" className="w-full">
                {CONTACT.cta.secondary}
              </Button>
            </Link> */}
          </div>
        </div>
      </AnimatedElement>
    </SectionWrapper>
  );
}
