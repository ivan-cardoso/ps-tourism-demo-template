import settings from "@/content/settings.json";

const heroContent = {
  HERO: {
    title: (
      <>
        Viví días inolvidables <br /> en San Pedro
      </>
    ),
    subtitle:
      "Conoce la belleza de San Pedro desde la naturaleza de sus costas",
    cta: {
      primary: {
        text: "Hablanos Ahora",
        href: "/contacto",
      },
      secondary: {
        text: "Ver Cabañas",
        href: "/",
      },
    },
    label: "",
  },
  OVERVIEW: {
    title: "Cabañas junto al río, rodeadas de naturaleza",
    subtitle: (
      <>
        <strong>Cabañas de la Ribera</strong> es un proyecto familiar realizado
        por los fundadores del Barrio Los Nogales que ofrece una alternativa de
        descanso, aire libre y naturaleza,
        <strong> a pocos kilómetros de Capital Federal.</strong>
      </>
    ),
    description: (
      <>
        Se encuentra ubicado dentro de un Área de Reserva Natural Protegida, 6
        Km al norte de la ciudad de{" "}
        <strong>San Pedro, Provincia de Buenos Aires,</strong> en un
        <strong> predio de 6.000 m2</strong> (de los cuales aproximadamente
        3.200 m2 son de barranca natural).
      </>
    ),
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEid9DqwJchjpVO8Wb8Ti7yNmhZ3FgGdY6beN0_TZXv74743VupSEuVohnvgZHRL_ZWkpK2TMYJpwXIZhdj1LAgSULw-v5N7rwCL8xQSkBEM3rPKImwks1_timS-TLArvTHZKjDq1qrEz46h/s1600/PredioServicios.jpg",
  },
  HIGHLIGHTS: {
    title: "Nuestras Servicios",
    description:
      "Contamos con 7 cabañas con capacidad de 2 a 7 personas, totalmente equipadas. Todas las cabañas cuentan con un área de expansión externa con galería para cada unidad para disfrutar de la vista y del aire libre.",
    image: "/images/logo.png",
    cta: {
      primary: {
        text: "Ver Cabañas",
        href: "/",
      },
    },
  },
  SERVICES: {
    title: "Nuestras Cabañas",
    description:
      "Desde confortables cabañas para toda la familia hasta íntimos y pintorescos bungalows donde experimentar la naturaleza sin perder el confort— ¡Encontrá el punto justo para vos!",
    cta: {
      text: "Ver todas las Cabañas",
      href: "/",
    },
    label: "",
    items: [
      {
        name: "Cabaña 1",
        description: [
          {
            icon: "bed-double",
            text: "1 Queen - 3 Individual",
          },
          {
            icon: "car",
            text: "Cubierto",
          },
        ],
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgczXlwgiYmsWfR-Ck968MMX2D8e-9aiPk28Zo6V22JXv__ALBTxgeEfJ9PEvbMAnXQFiMqRrs_alvPh5R3GMrRv98xqU6zFGMIo1S_YEIsUBpnt2iXm_msMYttiKufhIRd9FtjxldHz3eK/s1600/P1200579.JPG?height=200&width=200",
        feature: "5 Huéspedes",
        cta: {
          text: "Ver Cabaña",
          href: "/",
        },
      },
      {
        name: "Cabaña 1",
        description: [
          {
            icon: "bed-double",
            text: "1 Queen - 3 Individual",
          },
          {
            icon: "car",
            text: "Cubierto",
          },
        ],
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgczXlwgiYmsWfR-Ck968MMX2D8e-9aiPk28Zo6V22JXv__ALBTxgeEfJ9PEvbMAnXQFiMqRrs_alvPh5R3GMrRv98xqU6zFGMIo1S_YEIsUBpnt2iXm_msMYttiKufhIRd9FtjxldHz3eK/s1600/P1200579.JPG?height=200&width=200",
        feature: "5 Huéspedes",
        cta: {
          text: "Ver Cabaña",
          href: "/",
        },
      },
      {
        name: "Cabaña 1",
        description: [
          {
            icon: "bed-double",
            text: "1 Queen - 3 Individual",
          },
          {
            icon: "car",
            text: "Cubierto",
          },
        ],
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgczXlwgiYmsWfR-Ck968MMX2D8e-9aiPk28Zo6V22JXv__ALBTxgeEfJ9PEvbMAnXQFiMqRrs_alvPh5R3GMrRv98xqU6zFGMIo1S_YEIsUBpnt2iXm_msMYttiKufhIRd9FtjxldHz3eK/s1600/P1200579.JPG?height=200&width=200",
        feature: "5 Huéspedes",
        cta: {
          text: "Ver Cabaña",
          href: "/",
        },
      },
      {
        name: "Cabaña 1",
        description: [
          {
            icon: "bed-double",
            text: "1 Queen - 3 Individual",
          },
          {
            icon: "car",
            text: "Cubierto",
          },
        ],
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgczXlwgiYmsWfR-Ck968MMX2D8e-9aiPk28Zo6V22JXv__ALBTxgeEfJ9PEvbMAnXQFiMqRrs_alvPh5R3GMrRv98xqU6zFGMIo1S_YEIsUBpnt2iXm_msMYttiKufhIRd9FtjxldHz3eK/s1600/P1200579.JPG?height=200&width=200",
        feature: "5 Huéspedes",
        cta: {
          text: "Ver Cabaña",
          href: "/",
        },
      },
      {
        name: "Cabaña 1",
        description: [
          {
            icon: "bed-double",
            text: "1 Queen - 3 Individual",
          },
          {
            icon: "car",
            text: "Cubierto",
          },
        ],
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgczXlwgiYmsWfR-Ck968MMX2D8e-9aiPk28Zo6V22JXv__ALBTxgeEfJ9PEvbMAnXQFiMqRrs_alvPh5R3GMrRv98xqU6zFGMIo1S_YEIsUBpnt2iXm_msMYttiKufhIRd9FtjxldHz3eK/s1600/P1200579.JPG?height=200&width=200",
        feature: "5 Huéspedes",
        cta: {
          text: "Ver Cabaña",
          href: "/",
        },
      },
      {
        name: "Cabaña 1",
        description: [
          {
            icon: "bed-double",
            text: "1 Queen - 3 Individual",
          },
          {
            icon: "car",
            text: "Descubierto",
          },
        ],
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgczXlwgiYmsWfR-Ck968MMX2D8e-9aiPk28Zo6V22JXv__ALBTxgeEfJ9PEvbMAnXQFiMqRrs_alvPh5R3GMrRv98xqU6zFGMIo1S_YEIsUBpnt2iXm_msMYttiKufhIRd9FtjxldHz3eK/s1600/P1200579.JPG?height=200&width=200",
        feature: "5 Huéspedes",
        cta: {
          text: "Ver Cabaña",
          href: "/",
        },
      },
    ],
  },
  GALLERY: {
    title: "Cabañas junto al río, rodeadas de naturaleza",
    description:
      "Desde confortables cabañas para toda la familia hasta íntimos y pintorescos bungalows donde experimentar la naturaleza.",
    cta: {
      text: "Ver Galería",
      href: "/",
      description: "Mira nuestras cabanas",
    },
    images: [
      {
        src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgczXlwgiYmsWfR-Ck968MMX2D8e-9aiPk28Zo6V22JXv__ALBTxgeEfJ9PEvbMAnXQFiMqRrs_alvPh5R3GMrRv98xqU6zFGMIo1S_YEIsUBpnt2iXm_msMYttiKufhIRd9FtjxldHz3eK/s1600/P1200579.JPG?height=200&width=200",
        alt: "Fresh pastries in our display case",
      },
      {
        src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgczXlwgiYmsWfR-Ck968MMX2D8e-9aiPk28Zo6V22JXv__ALBTxgeEfJ9PEvbMAnXQFiMqRrs_alvPh5R3GMrRv98xqU6zFGMIo1S_YEIsUBpnt2iXm_msMYttiKufhIRd9FtjxldHz3eK/s1600/P1200579.JPG?height=200&width=200",
        alt: "Golden croissants fresh from the oven",
      },
      {
        src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgczXlwgiYmsWfR-Ck968MMX2D8e-9aiPk28Zo6V22JXv__ALBTxgeEfJ9PEvbMAnXQFiMqRrs_alvPh5R3GMrRv98xqU6zFGMIo1S_YEIsUBpnt2iXm_msMYttiKufhIRd9FtjxldHz3eK/s1600/P1200579.JPG?height=200&width=200",
        alt: "Colorful cupcakes with artisan frosting",
      },
      {
        src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgczXlwgiYmsWfR-Ck968MMX2D8e-9aiPk28Zo6V22JXv__ALBTxgeEfJ9PEvbMAnXQFiMqRrs_alvPh5R3GMrRv98xqU6zFGMIo1S_YEIsUBpnt2iXm_msMYttiKufhIRd9FtjxldHz3eK/s1600/P1200579.JPG?height=200&width=200",
        alt: "Handcrafted artisan bread loaves",
      },
      {
        src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgczXlwgiYmsWfR-Ck968MMX2D8e-9aiPk28Zo6V22JXv__ALBTxgeEfJ9PEvbMAnXQFiMqRrs_alvPh5R3GMrRv98xqU6zFGMIo1S_YEIsUBpnt2iXm_msMYttiKufhIRd9FtjxldHz3eK/s1600/P1200579.JPG?height=200&width=200",
        alt: "Fresh berry tart with seasonal fruits",
      },
    ],
  },
  TESTIMONIALS: {
    title: "Nuestros Visitantes",
    subtitle:
      "Algunas de las experiencias que nuestros visitantes vivieron cuando pasaron por nuestras cabanas.",
    cta: {
      text: "Mirá mas testimonios",
      href: "/",
    },
    items: [
      {
        text: "El lugar excelente, bien pensado con muchos detalles q hacen una estadia muy linda, 100% recomendable, sus dueños y encargados del lugar siempre atentos.",
        author: "Esteban P.",
        location: "Capital Federal",
        authorAvatar: "/placeholder-user.jpg",
        rating: 5,
      },
      {
        text: "El lugar excelente, bien pensado con muchos detalles q hacen una estadia muy linda, 100% recomendable, sus dueños y encargados del lugar siempre atentos.",
        author: "Susana L.",
        location: "Rosario",
        authorAvatar: "/placeholder-user.jpg",
        rating: 5,
      },
      {
        text: "El lugar excelente, bien pensado con muchos detalles q hacen una estadia muy linda, 100% recomendable, sus dueños y encargados del lugar siempre atentos.",
        author: "Mario J.",
        location: "Vicente Lopez",
        authorAvatar: "/placeholder-user.jpg",
        rating: 5,
      },
    ],
  },

  FINAL_CTA: {
    title: "Tomate un descanso y vení a visitarnos",
    description:
      "Escapá de la rutina, tomá contacto con la naturaleza. Disfrutá sin interrupciones con todo lo que necesitas a disposición.",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEid9DqwJchjpVO8Wb8Ti7yNmhZ3FgGdY6beN0_TZXv74743VupSEuVohnvgZHRL_ZWkpK2TMYJpwXIZhdj1LAgSULw-v5N7rwCL8xQSkBEM3rPKImwks1_timS-TLArvTHZKjDq1qrEz46h/s1600/PredioServicios.jpg",
    cta: {
      primary: {
        text: "Reservar Ahora",
        href: "/contacto",
      },
    },
  },
};

export default heroContent;
