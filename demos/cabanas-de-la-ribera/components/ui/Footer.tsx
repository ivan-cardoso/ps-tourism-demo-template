import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import settings from "@/content/settings.json";
import Link from "next/link";
import Image from "next/image";
import TripadvisorIcon from "../icons/TripAdvisor";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { navigationItems } = settings;

  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Tagline */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-heading font-bold mb-4">
              {settings.business.name}
            </h3>
            <p className="text-white/80 mb-6 max-w-md">
              {settings.business.tagline}
            </p>
            <div className="flex space-x-4">
              <Link
                href={settings.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Seguinos en Instagram"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href={settings.social.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Seguinos en Facebook"
              >
                <Facebook className="h-6 w-6" />
              </Link>
              <Link
                href={settings.social.tripadvisor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors flex items-center justify-center"
                aria-label="Seguinos en Tripadvisor"
              >
                <TripadvisorIcon className="h-7 w-7" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">
              Navegación
            </h4>
            <ul className="space-y-2">
              {navigationItems.map((item) => {
                return (
                  <li key={`${item.href}-${item.label}`}>
                    <Link
                      href={item.href}
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">
              Contacto
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-white/80 mt-0.5 flex-shrink-0" />
                <span className="text-white/80 text-sm">
                  {settings.business.address.full}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-white/80 flex-shrink-0" />
                <Link
                  href={`tel:${settings.business.contact.phone}`}
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  {settings.business.contact.phone}
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-white/80 flex-shrink-0" />
                <Link
                  href={`mailto:${settings.business.contact.email}`}
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  {settings.business.contact.email}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-white/80 text-sm">
            © {currentYear} {settings.business.name}.
          </p>
        </div>
      </div>
    </footer>
  );
}
