import type React from "react";
import type { Metadata } from "next";
// import { Manrope, Inter, Dancing_Script } from "next/font/google";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import settings from "@/content/settings.json";

/* const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-cursive",
  weight: ["400", "600", "700"],
  display: "swap",
}); */

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: settings.seo.title,
  description: settings.seo.description,
  keywords: settings.seo.keywords,
  authors: [{ name: settings.site.name }],
  creator: settings.site.name,
  publisher: settings.site.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: settings.seo.title,
    description: settings.seo.description,
    url: "",
    siteName: settings.site.name,
    images: [
      {
        url: "/images/hero.jpeg",
        width: 1200,
        height: 630,
        alt: settings.site.name,
      },
    ],
    locale: "es",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: settings.seo.title,
    description: settings.seo.description,
    images: ["/images/hero.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${outfit.variable} `}>
      <head>
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        /> */}
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
