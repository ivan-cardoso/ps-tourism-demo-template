import type React from "react"
import type { Metadata } from "next"
import { Manrope, Inter, Dancing_Script } from "next/font/google"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "600", "700", "800"],
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
})

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-cursive",
  weight: ["400", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Cabañas San Pedro - Tu Refugio Natural | Alojamiento en San Pedro",
  description:
    "Descansá frente al río, rodeado de verde y con la tranquilidad que solo San Pedro puede ofrecer. Cabañas completamente equipadas para una experiencia inolvidable. Reservá ahora.",
  keywords:
    "cabañas san pedro, alojamiento san pedro, turismo rural, cabañas río, naturaleza, descanso, vacaciones, turismo buenos aires, cabañas equipadas, refugio natural",
  authors: [{ name: "Cabañas San Pedro" }],
  creator: "Cabañas San Pedro",
  publisher: "Cabañas San Pedro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://cabanassanpedro.com"),
  alternates: {
    canonical: "/",
    languages: {
      "es-AR": "/",
    },
  },
  openGraph: {
    title: "Cabañas San Pedro - Tu Refugio Natural",
    description:
      "Descansá frente al río, rodeado de verde y con la tranquilidad que solo San Pedro puede ofrecer. Cabañas completamente equipadas.",
    url: "https://cabanassanpedro.com",
    siteName: "Cabañas San Pedro",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Cabañas San Pedro - Refugio Natural",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cabañas San Pedro - Tu Refugio Natural",
    description: "Descansá frente al río, rodeado de verde y con la tranquilidad que solo San Pedro puede ofrecer.",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
    generator: 'v0.app'
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Cabañas San Pedro",
  description: "Cabañas completamente equipadas en San Pedro, Buenos Aires. Refugio natural frente al río.",
  url: "https://cabanassanpedro.com",
  telephone: "+54 9 11 1234-5678",
  email: "info@cabanassanpedro.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ruta Provincial 32, Km 15",
    addressLocality: "San Pedro",
    addressRegion: "Buenos Aires",
    addressCountry: "AR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -33.6792,
    longitude: -59.6681,
  },
  openingHours: "Mo-Su 08:00-20:00",
  priceRange: "$6,500 - $12,000",
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "WiFi gratuito",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Desayuno incluido",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Estacionamiento gratuito",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Pet friendly",
      value: true,
    },
  ],
  image: [
    "https://cabanassanpedro.com/images/hero.jpg",
    "https://cabanassanpedro.com/images/cottage-1.jpg",
    "https://cabanassanpedro.com/images/cottage-2.jpg",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "150",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${manrope.variable} ${inter.variable} ${dancingScript.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
