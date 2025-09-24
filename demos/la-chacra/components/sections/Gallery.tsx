import Image from "next/image"
import { SectionWrapper } from "@/components/ui/SectionWrapper"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { AnimatedElement } from "@/components/ui/AnimatedElement"
import { Carousel } from "@/components/ui/Carousel"
import { getHomeContent } from "@/utils/contentMapper"

export function Gallery() {
  const { GALLERY } = getHomeContent()

  return (
    <SectionWrapper id="galeria" background="neutral">
      <AnimatedElement animation="fade-up">
        <SectionTitle title={GALLERY.title} subtitle={GALLERY.subtitle} />
      </AnimatedElement>

      <AnimatedElement animation="fade-up" delay={200}>
        <div className="max-w-4xl mx-auto">
          <Carousel
            options={{ loop: true }}
            autoplay={true}
            autoplayDelay={5000}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            {GALLERY.images.map((image, index) => (
              <div key={index} className="relative h-[400px] md:h-[500px]">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  quality={90}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </AnimatedElement>

      {/* Grid Gallery Preview */}
      <AnimatedElement animation="fade-up" delay={400}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-6xl mx-auto">
          {GALLERY.images.slice(0, 4).map((image, index) => (
            <div
              key={index}
              className="relative h-32 md:h-40 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </AnimatedElement>
    </SectionWrapper>
  )
}
