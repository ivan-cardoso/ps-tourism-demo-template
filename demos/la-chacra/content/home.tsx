const content = {
  HERO: {
    title: (
      <>
        La Chacra <br /> Hotel de Campo & Spa
      </>
    ),
    highlightedText: "La Chacra",
    subtitle:
      "Un hotel de campo en San Pedro pensado para descansar, relajarte y disfrutar con todo el confort.",
    cta: {
      primary: {
        text: "Reservar Ahora",
        href: "#contacto",
      },
    },
    label: "Hotel de Campo & Spa",
  },
  ABOUT: {
    title: "Tu descanso con naturaleza y confort",
    highlightedText: "descanso",
    subtitle: "Hotel de Campo & Spa en San Pedro",
    description:
      "En La Chacra - Hotel de Campo & Spa combinamos lo mejor del relax en la naturaleza con servicios de hotel: spa, piletas climatizadas, actividades y gastronomía. A solo minutos del centro de San Pedro y a pocas horas de Buenos Aires o Rosario.",
    cta: {
      text: "Conocer Más",
      href: "#cabanas",
    },
  },
  HIGHLIGHTS: {
    title: "Todo lo que hace a tu estadía especial",
    subtitle: "Nuestros servicios",
    highlightedText: "tu estadía especial",
    description:
      "Un espacio pensado para que disfrutes al máximo: relax, entretenimiento y comodidad para toda la familia. Masajes descontracturantes, masoterapia, con piedras calientes, con aceite y reiki",
    cta: {
      text: "Conocer Más",
      href: "#cabanas",
    },
    items: [
      {
        icon: "Coffee",
        title: "Desayuno buffet",
        description:
          "Incluido todas las mañanas, con opciones frescas y abundantes.",
      },
      {
        icon: "HeartPlusIcon",
        title: "Spa & Bienestar",
        description: "Sauna, jacuzzi y masajes para relajarte como te merecés.",
      },
      {
        icon: "Bike",
        title: "Actividades",
        description:
          "Bicicletas, canchas de fútbol, vóley y juegos de mesa para todos.",
      },
      {
        icon: "Waves",
        title: "Piletas",
        description:
          "Cubierta climatizada y descubierta para chicos y adultos.",
      },
    ],
  },

  SERVICES: {
    description:
      "Tenemos opciones para todos: desde cabañas íntimas para dos, hasta espacios familiares amplios para compartir con amigos o en grupo.",
    /* cta: { text: "Ver todas las Cabañas", href: "/" },
    label: "", */
    title: "Nuestras Habitaciones",
    highlightedText: "Habitaciones",
    subtitle: "Elegí el espacio ideal para tu estadía",
    items: [
      {
        id: 1,
        name: "Habitación Triple Superior",
        description:
          "Ambiente amplio con servicios premium y acceso a todas las áreas del spa.",
        amenities: [
          { icon: "wifi", text: "Wi-Fi" },
          { icon: "tv", text: "TV por cable" },
          { icon: "bed-double", text: "Sábanas y toallas" },
          { icon: "droplet", text: "Climatización frío/calor" },
          { icon: "refrigerator", text: "Heladera" },
          { icon: "utensils", text: "Vajilla Completa" },
        ],
        images: ["/images/triple.jpeg", "/images/triple.jpeg"],
        feature: "3 Huéspedes",
        cta: {
          text: "Consultar",
          href: "#contacto",
        },
      },
      {
        id: 2,
        name: "Habitación Standard Triple",
        description:
          "Ambiente amplio con servicios premium y acceso a todas las áreas del spa.",
        amenities: [
          { icon: "wifi", text: "Wi-Fi" },
          { icon: "tv", text: "TV por cable" },
          { icon: "bed-double", text: "Sábanas y toallas" },
          { icon: "droplet", text: "Climatización frío/calor" },
          { icon: "refrigerator", text: "Heladera" },
          { icon: "utensils", text: "Vajilla Completa" },
        ],
        images: [
          "/images/triple-standard.jpeg",
          "/images/triple-standard.jpeg",
        ],
        feature: "3 Huéspedes",
        cta: {
          text: "Consultar",
          href: "#contacto",
        },
      },
      {
        id: 3,
        name: "Habitación Standard",
        description:
          "Ambiente amplio con servicios premium y acceso a todas las áreas del spa.",
        amenities: [
          { icon: "wifi", text: "Wi-Fi" },
          { icon: "tv", text: "TV por cable" },
          { icon: "bed-double", text: "Sábanas y toallas" },
          { icon: "droplet", text: "Climatización frío/calor" },
          { icon: "refrigerator", text: "Heladera" },
          { icon: "utensils", text: "Vajilla Completa" },
        ],
        images: ["/images/standard.jpeg", "/images/standard.jpeg"],
        feature: "2 Huéspedes",
        cta: {
          text: "Consultar",
          href: "#contacto",
        },
      },
    ],
  },
  TESTIMONIALS: {
    title: "Experiencias de nuestros huéspedes",
    highlightedText: "nuestros huéspedes",
    items: [
      {
        id: 1,
        name: "Sofía R.",
        location: "Capital Federal",
        rating: 5,
        comment:
          "Un lugar ideal para desconectar. El spa y la pileta climatizada son un lujo. ¡Volvería sin dudas!",
      },
      {
        id: 2,
        name: "Martín G.",
        location: "Rosario",
        rating: 5,
        comment:
          "La atención fue excelente y el desayuno buffet superó todas las expectativas.",
      },
      {
        id: 3,
        name: "Laura P.",
        location: "La Plata",
        rating: 5,
        comment:
          "Fui con mi familia y todos disfrutamos: los chicos con la pileta y juegos, y nosotros en el spa.",
      },
      {
        id: 4,
        name: "Gabriela M.",
        location: "San Nicolás",
        rating: 5,
        comment:
          "Las habitaciones cómodas y el predio hermoso. Perfecto para escapadas de fin de semana.",
      },
      {
        id: 5,
        name: "Diego L.",
        location: "Buenos Aires",
        rating: 5,
        comment:
          "El combo de naturaleza, confort y buena atención lo hace un lugar único en San Pedro.",
      },
    ],
  },
  CONTACT: {
    title: "Contactanos",
    highlightedText: "Contactanos",
    subtitle: "Consultanos disponibilidad o armá tu escapada ahora",
    info: {
      address:
        "Camino al aeródromo San Pedro, a 300mts de RP191, San Pedro, Buenos Aires",
      phone: "+54 9 3329 30-9619",
      email: "info@lachacrasanpedro.com",
      hours: "Lunes a Sabado: 8:00 - 20:00",
    },
    cta: {
      text: "Enviar Mensaje",
      href: "#",
    },
  },
  FINAL_CTA: {
    title: "Escapate unos días. Te esperamos.",
    description:
      "En La Chacra Hotel de Campo & Spa tenemos un espacio pensado para que disfrutes sin preocupaciones. Vení a visitarnos.",
    image: "/images/cta.jpeg",
    cta: {
      primary: { text: "Reservar Ahora", href: "#contacto" },
    },
  },
};

export default content;
