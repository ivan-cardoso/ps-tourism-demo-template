const heroContent = {
  HERO: {
    title: (
      <>
        Desconectá y descansá <br /> frente al Paraná
      </>
    ),
    subtitle:
      "A solo 2 hs de Buenos Aires y a 1 de Rosario, encontrá en Ramallo el lugar ideal para recargar energías junto al río.",
    cta: {
      primary: { text: "Hablanos Ahora", href: "/contacto" },
      secondary: { text: "Ver Cabañas", href: "/" },
    },
    label: "",
  },
  OVERVIEW: {
    title: "Un complejo pensado para tu descanso",
    subtitle: (
      <>
        <strong>Cabañas Yvyra</strong> es un espacio único frente al río Paraná,
        con 17 cabañas equipadas para que disfrutes en pareja, en familia o con
        amigos. Todo rodeado de naturaleza y tranquilidad,
        <strong> a pasos del agua.</strong>
      </>
    ),
    description: (
      <>
        Nuestro predio cuenta con pileta, playa, parrillas y actividades al aire
        libre. Una propuesta para quienes buscan combinar relax y comodidad,
        cerca de casa pero lejos de la rutina. Consultanos por disponibilidad.{" "}
        <strong>¡Te esperamos!</strong>
      </>
    ),
    image: "/images/about.jpg",
  },
  HIGHLIGHTS: {
    title: "Servicios para disfrutar",
    description:
      "Contamos con 17 cabañas totalmente equipadas. Espacio verdes y todas las comodidades para que tengas lo que necesitás y descanses sin preocupaciones.",
    image: "/images/logo.png",
    cta: {
      primary: { text: "Ver Cabañas", href: "/" },
    },
  },
  SERVICES: {
    title: "Nuestras Cabañas",
    description:
      "Tenemos opciones para todos: desde cabañas íntimas para dos, hasta espacios familiares amplios para compartir con amigos o en grupo.",
    cta: { text: "Ver todas las Cabañas", href: "/" },
    label: "",
    items: [
      {
        name: "Cabaña Familiar",
        description: [
          { icon: "bed-double", text: "1 Queen - 3 Individual" },
          { icon: "car", text: "Cochera cubierta" },
          { icon: "tv", text: "TV por cable" },
          { icon: "wifi", text: "Wi-Fi" },
          { icon: "droplet", text: "Aire acondicionado" },
        ],
        image: "/images/cabana1.jpg",
        feature: "5 Huéspedes",
        cta: { text: "Ver Cabaña", href: "/" },
      },
      {
        name: "Cabaña para Parejas",
        description: [
          { icon: "bed-double", text: "1 Queen - 3 Individual" },
          { icon: "car", text: "Cochera cubierta" },
          { icon: "tv", text: "TV por cable" },
          { icon: "wifi", text: "Wi-Fi" },
          { icon: "droplet", text: "Aire acondicionado" },
        ],
        image: "/images/cabana1.jpg",
        feature: "2 Huéspedes",
        cta: { text: "Ver Cabaña", href: "/" },
      },
      {
        name: "Cabaña Grupo",
        description: [
          { icon: "bed-double", text: "1 Queen - 3 Individual" },
          { icon: "car", text: "Cochera cubierta" },
          { icon: "tv", text: "TV por cable" },
          { icon: "wifi", text: "Wi-Fi" },
          { icon: "droplet", text: "Aire acondicionado" },
        ],
        image: "/images/cabana1.jpg",
        feature: "7 Huéspedes",
        cta: { text: "Ver Cabaña", href: "/" },
      },
    ],
  },
  GALLERY: {
    title: "Viví la experiencia Yvyra",
    description:
      "Recorré en imágenes nuestro complejo: las cabañas, los espacios verdes y el río Paraná siempre presente.",
    cta: {
      text: "Ver Galería",
      href: "/",
      description: "Mira nuestras cabanas",
    },
    images: [
      {
        src: "/images/gallery1.jpg",
        alt: "Cabaña Yvyra 1",
      },
      {
        src: "/images/gallery2.jpg",
        alt: "Cabaña Yvyra 2",
      },
      {
        src: "/images/gallery3.jpg",
        alt: "Cabaña Yvyra 3",
      },
      {
        src: "/images/gallery4.jpg",
        alt: "Cabaña Yvyra 4",
      },
      {
        src: "/images/gallery5.jpg",
        alt: "Cabaña Yvyra 5",
      },
      {
        src: "/images/gallery6.jpg",
        alt: "Cabaña Yvyra 6",
      },
    ],
  },
  TESTIMONIALS: {
    title: "Lo que dicen nuestros visitantes",
    subtitle:
      "Historias de quienes ya eligieron Yvyra para sus días de descanso en Ramallo.",
    cta: { text: "Mirá más testimonios", href: "/" },
    items: [
      {
        text: "Hermoso lugar frente al río. Pasamos un finde en familia y la atención fue excelente.",
        author: "Luciana F.",
        location: "Rosario",
        authorAvatar: "/placeholder-user.jpg",
        rating: 5,
      },
      {
        text: "Las cabañas muy cómodas y bien equipadas. Ideal para descansar y disfrutar de la naturaleza.",
        author: "Carlos M.",
        location: "San Nicolás",
        authorAvatar: "/placeholder-user.jpg",
        rating: 5,
      },
      {
        text: "Un lugar perfecto para desconectarse. La pileta y la playa privada son un plus increíble.",
        author: "Mariana G.",
        location: "Capital Federal",
        authorAvatar: "/placeholder-user.jpg",
        rating: 5,
      },
    ],
  },
  FINAL_CTA: {
    title: "Tu descanso te espera en Yvyra",
    description:
      "Escapate unos días, respirá aire puro y viví frente al Paraná. Un plan distinto para disfrutar en pareja, en familia o con amigos.",
    image: "/images/cta.jpeg",
    cta: {
      primary: { text: "Reservar Ahora", href: "/contacto" },
    },
  },
};

export default heroContent;
