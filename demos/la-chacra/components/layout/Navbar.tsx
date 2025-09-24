// "use client";

// import { useState, useEffect } from "react";
// import { Menu, X, Phone } from "lucide-react";
// import { Button } from "@/components/ui/Button";
// import { getSettings } from "@/utils/contentMapper";
// import { cn } from "@/lib/utils";
// import Link from "next/link";

// export function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const settings = getSettings();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleNavClick = (href: string) => {
//     setIsOpen(false);
//     if (href.startsWith("#")) {
//       const element = document.querySelector(href);
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   };

//   return (
//     <header
//       className={cn(
//         "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
//         "bg-white shadow-md"
//       )}
//     >
//       <nav
//         className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"
//         role="navigation"
//         aria-label="Navegación principal"
//       >
//         <div className="flex items-center justify-between h-16 md:h-20">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Link
//               href="#inicio"
//               onClick={(e) => {
//                 e.preventDefault();
//                 handleNavClick("#inicio");
//               }}
//               className="font-heading text-xl md:text-2xl font-bold text-dark hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
//               aria-label="Cabañas San Pedro - Ir al inicio"
//             >
//               {settings.site.name}
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             <ul className="flex items-center space-x-8" role="menubar">
//               {settings.navigation.map((item) => (
//                 <li key={item.href} role="none">
//                   <Link
//                     href={item.href}
//                     onClick={(e) => {
//                       e.preventDefault();
//                       handleNavClick(item.href);
//                     }}
//                     className="text-dark hover:text-accent font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded px-2 py-1"
//                     role="menuitem"
//                   >
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//             <Button
//               variant="primary"
//               size="md"
//               onClick={() => handleNavClick("#contacto")}
//               className="ml-4"
//               aria-label="Ir a la sección de contacto"
//             >
//               <Phone className="w-4 h-4" aria-hidden="true" />
//               Contacto
//             </Button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-primary hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded p-2"
//               aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
//               aria-expanded={isOpen}
//               aria-controls="mobile-menu"
//             >
//               {isOpen ? (
//                 <X className="w-6 h-6" />
//               ) : (
//                 <Menu className="w-6 h-6" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div
//             id="mobile-menu"
//             className="md:hidden bg-white border-t border-[#EDE3D1] shadow-lg"
//           >
//             <nav
//               className="px-2 pt-2 pb-3 space-y-1"
//               role="navigation"
//               aria-label="Navegación móvil"
//             >
//               {settings.navigation.map((item) => (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     handleNavClick(item.href);
//                   }}
//                   className="block px-3 py-2 text-primary hover:text-accent  rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//               <div className="px-3 py-2">
//                 <Button
//                   variant="primary"
//                   size="md"
//                   className="w-full"
//                   onClick={() => handleNavClick("#contacto")}
//                   aria-label="Ir a la sección de contacto"
//                 >
//                   <Phone className="w-4 h-4" aria-hidden="true" />
//                   Contacto
//                 </Button>
//               </div>
//             </nav>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { getSettings } from "@/utils/contentMapper";

interface NavbarProps {
  variant?: "default" | "secondary" | "accent" | "white";
}

export function Navbar({ variant = "default" }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const settings = getSettings();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

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
              src="/images/logo.jpg"
              alt={`${settings.site.name} Logo`}
              width={100}
              height={100}
              className="w-full h-16"
              priority
            />
          </Link>

          {/* <div className="flex-shrink-0">
            <Link
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#inicio");
              }}
              className="font-heading text-xl md:text-2xl font-bold text-dark hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
              aria-label="Cabañas San Pedro - Ir al inicio"
            >
              {settings.site.name}
            </Link>
          </div> */}

          {/* Desktop Navigation */}
          <div className="flex space-x-8 xl:space-x-12">
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {settings.navigation.map((item) => (
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
            <Link href="#contacto" className="hidden lg:block">
              <Button variant="primary" size="md">
                Reservar Ahora
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-3 rounded-full transition-colors duration-200 flex-shrink-0",
              isOpen ? "bg-accent" : "bg-primary/90"
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
              {settings.navigation.map((item, index) => (
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
                <Link href="#contacto">
                  <Button
                    className={cn(
                      "w-full transition-all duration-300",
                      isOpen
                        ? "translate-x-0 opacity-100"
                        : "translate-x-4 opacity-0"
                    )}
                    variant="primary"
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
