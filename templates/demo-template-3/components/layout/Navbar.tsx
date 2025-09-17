"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { getSettings } from "@/utils/contentMapper"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const settings = getSettings()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", "bg-white shadow-md")}>
      <nav
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"
        role="navigation"
        aria-label="Navegación principal"
      >
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick("#inicio")
              }}
              className="font-heading text-xl md:text-2xl font-bold text-[#274423] hover:text-[#e9a919] transition-colors focus:outline-none focus:ring-2 focus:ring-[#e9a919] focus:ring-offset-2 rounded"
              aria-label="Cabañas San Pedro - Ir al inicio"
            >
              {settings.site.name}
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-8" role="menubar">
              {settings.navigation.map((item) => (
                <li key={item.href} role="none">
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.href)
                    }}
                    className="text-[#274423] hover:text-[#e9a919] font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#e9a919] focus:ring-offset-2 rounded px-2 py-1"
                    role="menuitem"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button
              variant="primary"
              size="sm"
              onClick={() => handleNavClick("#contacto")}
              className="ml-4"
              aria-label="Ir a la sección de contacto"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Contacto
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#274423] hover:text-[#e9a919] transition-colors focus:outline-none focus:ring-2 focus:ring-[#e9a919] focus:ring-offset-2 rounded p-2"
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div id="mobile-menu" className="md:hidden bg-white border-t border-[#EDE3D1] shadow-lg">
            <nav className="px-2 pt-2 pb-3 space-y-1" role="navigation" aria-label="Navegación móvil">
              {settings.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                  className="block px-3 py-2 text-[#274423] hover:text-[#e9a919] hover:bg-[#F8F4ED] rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#e9a919] focus:ring-offset-2"
                >
                  {item.label}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button
                  variant="primary"
                  size="sm"
                  className="w-full"
                  onClick={() => handleNavClick("#contacto")}
                  aria-label="Ir a la sección de contacto"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  Contacto
                </Button>
              </div>
            </nav>
          </div>
        )}
      </nav>
    </header>
  )
}
