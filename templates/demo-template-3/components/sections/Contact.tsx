"use client"

import { SectionWrapper } from "@/components/ui/SectionWrapper"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { AnimatedElement } from "@/components/ui/AnimatedElement"
import { Button } from "@/components/ui/Button"
import { getHomeContent, getSettings } from "@/utils/contentMapper"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Contact() {
  const { CONTACT } = getHomeContent()
  const settings = getSettings()

  return (
    <SectionWrapper id="contacto" background="white">
      <AnimatedElement animation="fade-up">
        <SectionTitle title={CONTACT.title} subtitle={CONTACT.subtitle} />
      </AnimatedElement>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <AnimatedElement animation="slide-right">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#e9a919] rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-[#0B2D22] mb-2">Ubicación</h3>
                <p className="text-[#0B2D22]/70">{CONTACT.info.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#e9a919] rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-[#0B2D22] mb-2">Teléfono</h3>
                <a
                  href={`tel:${CONTACT.info.phone}`}
                  className="text-[#0B2D22]/70 hover:text-[#e9a919] transition-colors"
                >
                  {CONTACT.info.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#e9a919] rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-[#0B2D22] mb-2">Email</h3>
                <a
                  href={`mailto:${CONTACT.info.email}`}
                  className="text-[#0B2D22]/70 hover:text-[#e9a919] transition-colors"
                >
                  {CONTACT.info.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#e9a919] rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-[#0B2D22] mb-2">Horarios</h3>
                <p className="text-[#0B2D22]/70">{CONTACT.info.hours}</p>
              </div>
            </div>

            <div className="pt-4">
              <Button variant="primary" size="lg" onClick={() => window.open(`tel:${CONTACT.info.phone}`, "_self")}>
                Llamar Ahora
              </Button>
            </div>
          </div>
        </AnimatedElement>

        {/* Map */}
        <AnimatedElement animation="slide-left">
          <div className="bg-[#F8F4ED] rounded-2xl p-8 h-full min-h-[400px] flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-[#e9a919] mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold text-[#0B2D22] mb-2">Ubicación</h3>
              <p className="text-[#0B2D22]/70 mb-4">Nos encontramos en San Pedro, Buenos Aires</p>
              <Button
                variant="outline"
                onClick={() => {
                  const address = encodeURIComponent(CONTACT.info.address)
                  window.open(`https://maps.google.com/maps?q=${address}`, "_blank")
                }}
              >
                Ver en Google Maps
              </Button>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </SectionWrapper>
  )
}
