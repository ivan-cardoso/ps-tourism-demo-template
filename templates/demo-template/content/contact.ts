import settings from "@/content/settings.json";

export const contactContent = {
  HERO: {
    title: "Comunicate con nosotros",
    subtitle: "Te asesoramos para que tengas la mejor experiencia.",
    label: "",
  },
  CONTACT_INFO: {
    title: "¿Dónde estamos?",
    description: "Mirá como llegar",
  },
  CONTACT_DETAILS: {
    title: "Vení a nuestras cabañas",
    description:
      "Te asesoramos para que tengas la mejor experiencia en San Pedro",
    details: [
      {
        type: "address",
        title: "Dónde estamos",
        content: settings.business.address.full,
        icon: "map-pin",
        action: {
          text: "Ver direcciones",
          link: settings.location.map.directionsUrl,
        },
      },
      {
        type: "phone",
        title: "Llamanos",
        content: settings.business.contact.phone,
        icon: "phone",
        action: {
          text: "Llamar ahora",
          link: `tel:${settings.business.contact.phone}`,
        },
      },
      {
        type: "email",
        title: "Email",
        content: settings.business.contact.email,
        icon: "mail",
        action: {
          text: "Enviar Email",
          link: `mailto:${settings.business.contact.email}`,
        },
      },
      {
        type: "hours",
        title: "Nuestros horarios",
        content: `${settings.business.hours.weekdays}\n${settings.business.hours.weekends}`,
        icon: "clock",
      },
    ],
  },
  CONTACT_FORM: {
    title: "Hacé tu reserva!",
    subtitle: "Comunicate por este medio las 24 horas",
    image: "/images/hero.jpg",
  },
  SPECIAL_REQUESTS: {
    title: "Special Orders & Custom Cakes",
    description:
      "Planning something special? We love creating custom cakes and catering for your events.",
    services: [
      {
        title: "Custom Cakes",
        description:
          "Birthday cakes, wedding cakes, and celebration desserts made to your specifications.",
        leadTime: "48-72 hours notice required",
      },
      {
        title: "Catering Services",
        description:
          "Pastry platters, breakfast catering, and dessert tables for corporate events and parties.",
        leadTime: "1 week notice preferred",
      },
      {
        title: "Holiday Specialties",
        description:
          "Seasonal treats and holiday-themed baked goods available throughout the year.",
        leadTime: "Order early for holidays",
      },
    ],
    cta: {
      primary: {
        text: "Request Custom Order",
        link: `mailto:${settings.business.contact.email}`,
      },
      secondary: {
        text: "Call Now",
        link: `tel:${settings.business.contact.phone}`,
      },
    },
  },
  SOCIAL: {
    title: "Seguínos en nuestras redes",
    description:
      "Mantenete conectado en nuestras redes sociales para ver nuestras últimas noticias.",
    platforms: [
      {
        name: "Instagram",
        handle: settings.social.instagram.handle,
        description: "",
        link: settings.social.instagram.url,
      },
      {
        name: "Facebook",
        handle: settings.social.facebook.handle,
        description: "",
        link: settings.social.facebook.url,
      },
    ],
  },
};
