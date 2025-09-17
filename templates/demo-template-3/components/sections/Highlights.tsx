"use client"

import { SectionWrapper } from "@/components/ui/SectionWrapper"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { AnimatedElement } from "@/components/ui/AnimatedElement"
import { Button } from "@/components/ui/Button"
import { getHomeContent } from "@/utils/contentMapper"
import { Wifi, Coffee, Shirt, Clock } from "lucide-react"

export function Highlights() {
  const { HIGHLIGHTS } = getHomeContent()

  const iconMap = {
    Wifi,
    Coffee,
    Shirt,
    Clock,
  }

  return (
    <SectionWrapper id="servicios" background="primary">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left Column - Content */}
        <AnimatedElement animation="fade-up">
          <div className="text-white">
            <SectionTitle
              title={HIGHLIGHTS.title}
              highlightedText={HIGHLIGHTS.highlightedText}
              centered={false}
              variant="white"
              className="mb-6"
            />
            <p className="text-base md:text-lg lg:text-xl leading-relaxed mb-8 text-white/90">
              {HIGHLIGHTS.description}
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              onClick={() => {
                const element = document.querySelector("#cabanas")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              {HIGHLIGHTS.cta.text}
            </Button>
          </div>
        </AnimatedElement>

        {/* Right Column - Services Grid */}
        <AnimatedElement animation="fade-up" delay={200}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {HIGHLIGHTS.items.map((item, index) => {
              const IconComponent = iconMap[item.icon as keyof typeof iconMap]
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 text-white hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                    <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="font-heading text-base md:text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-xs md:text-sm text-white/80 leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </AnimatedElement>
      </div>
    </SectionWrapper>
  )
}
