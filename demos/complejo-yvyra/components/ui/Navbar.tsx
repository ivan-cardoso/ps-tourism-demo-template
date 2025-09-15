"use client";

import { useState, useEffect } from "react";
import cn from "@/utils/cn";
import Button from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import settings from "@/content/settings.json";

interface NavbarProps {
  variant?: "default" | "secondary" | "accent" | "white";
}

export default function Navbar({ variant = "default" }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { navigationItems } = settings;
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const backgroundClasses = {
    default: isScrolled
      ? "bg-secondary/90 backdrop-blur-sm shadow-lg"
      : "bg-transparent",
    secondary: "bg-secondary/90 backdrop-blur-sm shadow-lg",
    accent: "bg-accent/90 backdrop-blur-sm shadow-lg",
    white: "bg-white backdrop-blur-sm shadow-lg",
  };

  const textClasses = {
    default: "text-white/90 hover:text-white",
    secondary: "text-white",
    accent: "text-white",
    white: "text-primary/90 hover:text-accent",
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        backgroundClasses[variant]
      )}
    >
      <nav className={cn("container mx-auto ")}>
        <div
          className={cn(
            "flex items-center justify-between h-20 lg:h-20 px-4 sm:px-6 lg:px-8 transition-all duration-300",
            isOpen ? "bg-secondary/90" : "bg-transparent",
            isScrolled ? "h-16 lg:h-20" : "h-20 lg:h-20"
          )}
        >
          {/* Logo */}

          <Link
            href="/"
            className="flex items-center relative justify-center rounded-xl overflow-hidden"
          >
            <Image
              src="/images/logo.png"
              alt={`${settings.business.name} Logo`}
              width={100}
              height={100}
              className="w-full h-12"
              priority
            />
            {/* <span
              className={cn(
                "text-xl lg:text-2xl font-heading font-semibold  transition-colors",
                textClasses[variant]
              )}
            >
              Cabañas de la Ribera
            </span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="flex space-x-8 xl:space-x-12">
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={`${item.href}-${item.label}`}
                  href={item.href}
                  className={cn(
                    "relative font-medium transition-colors duration-200 group py-1 font-heading",
                    textClasses[variant]
                  )}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
            <Link href="/contacto" className="hidden lg:block">
              <Button variant="accent" size="md">
                Reservar Ahora
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-3 rounded-full transition-colors duration-200 flex-shrink-0",
              isOpen ? "bg-accent" : "bg-secondary/90"
            )}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <div className="w-5 h-5 flex flex-col justify-center space-y-1">
              <span
                className={cn(
                  "block h-0.5 bg-white transition-all duration-300 origin-center",
                  isOpen ? "rotate-45 translate-y-1.5 bg-white" : ""
                )}
              />
              <span
                className={cn(
                  "block h-0.5 bg-white transition-all duration-300",
                  isOpen ? "opacity-0 bg-white" : ""
                )}
              />
              <span
                className={cn(
                  "block h-0.5 bg-white transition-all duration-300 origin-center",
                  isOpen ? "-rotate-45 -translate-y-1.5 bg-white" : ""
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-500 ease-in-out",
            isOpen ? "min-h-[40rem] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div
            className={cn(
              "border-t border-neutral bg-white/95 backdrop-blur-sm transition-transform duration-300 ease-in-out",
              isOpen ? "translate-y-0 min-h-[40rem]" : "-translate-y-4"
            )}
          >
            <div className="section-padding py-6 space-y-1">
              {navigationItems.map((item, index) => (
                <Link
                  key={`${item.href}-${item.label}`}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block text-dark transition-all duration-200 font-medium px-4 py-3 rounded-lg transform font-heading",
                    isOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-4 opacity-0"
                  )}
                  style={{
                    transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4">
                <Link href="/contacto">
                  <Button
                    className={cn(
                      "w-full transition-all duration-300",
                      isOpen
                        ? "translate-x-0 opacity-100"
                        : "translate-x-4 opacity-0"
                    )}
                    variant="accent"
                    size="md"
                    onClick={() => setIsOpen(false)}
                  >
                    Reservar Ahora
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
