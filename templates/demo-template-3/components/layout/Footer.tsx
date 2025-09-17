import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react"
import { getSettings } from "@/utils/contentMapper"

export function Footer() {
  const settings = getSettings()

  return (
    <footer className="bg-[#274423] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <h3 className="font-heading text-2xl font-bold">{settings.site.name}</h3>
            <p className="text-white/80 leading-relaxed">{settings.site.description}</p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">{settings.footer.contactTitle}</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#e9a919] flex-shrink-0 mt-0.5" />
                <p className="text-white/80 text-sm">{settings.contact.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#e9a919] flex-shrink-0" />
                <a
                  href={`tel:${settings.contact.phone}`}
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  {settings.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#e9a919] flex-shrink-0" />
                <a
                  href={`mailto:${settings.contact.email}`}
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  {settings.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">{settings.footer.socialTitle}</h4>
            <div className="flex gap-4">
              <a
                href={settings.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#e9a919] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={settings.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#e9a919] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-white/60 text-sm">Horarios: {settings.hours.display}</p>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2024 {settings.site.name}. {settings.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
