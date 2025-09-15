import type React from "react";
import type { Metadata } from "next";
import { Lato, Arvo } from "next/font/google";
import "./globals.css";
import settings from "@/content/settings.json";

const arvo = Arvo({
  subsets: ["latin"],
  variable: "--font-arvo",
  display: "swap",
  weight: ["400"],
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: settings.seo.title,
  description: settings.seo.description,
  keywords: settings.seo.keywords,
  authors: [{ name: settings.business.name }],
  creator: settings.business.name,
  publisher: settings.business.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: settings.seo.title,
    description: settings.seo.description,
    url: "",
    siteName: settings.business.name,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: settings.business.name,
      },
    ],
    locale: "es",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: settings.seo.title,
    description: settings.seo.description,
    images: ["/images/og-image.png"],
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
    <html lang="es" className="scroll-smooth">
      <body
        className={`${arvo.variable} ${lato.variable}  font-body antialiased`}
        // className={`font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
