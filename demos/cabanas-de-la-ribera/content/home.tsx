/* import settings from "@/content/settings.json";

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
 */

const heroContent = {
  HERO: {
    title: (
      <>
        Viví días inolvidables <br /> en San Pedro
      </>
    ),
    subtitle:
      "Descansá frente al río, rodeado de verde y con la tranquilidad que solo San Pedro puede ofrecer.",
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
        <strong>Cabañas de la Ribera</strong> es un emprendimiento familiar
        pensado para quienes buscan desconectar y disfrutar del aire libre,
        <strong> a solo unas horas de Capital Federal.</strong>
      </>
    ),
    description: (
      <>
        Ubicadas en un <strong>predio de 6.000 m²</strong>, dentro de un Área de
        Reserva Natural Protegida, nuestras cabañas están rodeadas de barrancas
        y paisajes únicos, a solo 6 km al norte de la ciudad de{" "}
        <strong>San Pedro, Buenos Aires.</strong>
      </>
    ),
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEid9DqwJchjpVO8Wb8Ti7yNmhZ3FgGdY6beN0_TZXv74743VupSEuVohnvgZHRL_ZWkpK2TMYJpwXIZhdj1LAgSULw-v5N7rwCL8xQSkBEM3rPKImwks1_timS-TLArvTHZKjDq1qrEz46h/s1600/PredioServicios.jpg",
  },
  HIGHLIGHTS: {
    title: "Nuestros Servicios",
    description:
      "Ofrecemos 7 cabañas equipadas para 2 a 7 personas, todas con galería privada y espacio al aire libre para disfrutar de la vista al río y el sonido de la naturaleza.",
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
      "Cada cabaña fue pensada para que disfrutes tu estadía al máximo: desde espacios familiares amplios hasta más íntimos. Siempre con el confort necesario para sentirte como en casa.",
    cta: {
      text: "Ver todas las Cabañas",
      href: "/",
    },
    label: "",
    items: [
      {
        name: "Cabaña Roja",
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
        name: "Cabaña Amarilla",
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
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhoijI6XNaEAp5elswTx7uFbJtpL17VYKtyMdVOI0APQ33AM3KjqwcU11r5QrwKSBHoxJcDQh-uuoUWneKJbaTg5AiCR7fI7oSULXIkkocs1dRLrMchWfvyUXYE0nUT47VxTlL6lD2Ztipy/s1600/P1190232.jpg?height=200&width=200",
        feature: "5 Huéspedes",
        cta: {
          text: "Ver Cabaña",
          href: "/",
        },
      },
      {
        name: "Cabaña Verde",
        description: [
          {
            icon: "bed-double",
            text: "1 Queen - 1 Individual - 2 Futones",
          },
          {
            icon: "car",
            text: "Cubierto",
          },
        ],
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiFsHnCH4BVEY9cHdHjWKLCt65RwCBP8kKQ1wCGyyCbnr2g-JLau1-GbjCc7kzSuGccq8zfbVoNXI9XwR1TMxHxcbD9RehyphenhyphenpDiLQqR8GAOBRnuEgYuIH5gWFqaXUbRJ0yBqQNIQHiO4YRm0/s1600/P1190719.jpg?height=200&width=200",
        feature: "7 Huéspedes",
        cta: {
          text: "Ver Cabaña",
          href: "/",
        },
      },
      {
        name: "Cabaña Naranja",
        description: [
          {
            icon: "bed-double",
            text: "1 Queen - 2 Individual",
          },
          {
            icon: "car",
            text: "Cubierto",
          },
        ],
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiVX1c4mbkVfDLSRT2zAuS-8_gitaQ5FvKbGJbeP5fAd9KUmP7GjyYWhBkWBbgnmRULqmN8N75PqTMLjIYyNXXYIOKuz9llC6f72Y13RTFSRzORJR-hOB0A03Ui2mEtw-JmqYAd-8_K44Od/s1600/P1240454r.JPG?height=200&width=200",
        feature: "4 Huéspedes",
        cta: {
          text: "Ver Cabaña",
          href: "/",
        },
      },
      {
        name: "Cabaña Lila",
        description: [
          {
            icon: "bed-double",
            text: "1 Queen - 2 Individual",
          },
          {
            icon: "car",
            text: "Cubierto",
          },
        ],
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjnnWtYumF1UgeIjr_jvBs_GBJBhi7Wb9PciDNdrcqam7vIkoZmbtfUDjh-HDoJUlB68ZuWOgLMuR5IwZXCumKXZR2zu3fT3QYRhNChMRS-sQo3t5Xuw_Z6BfPMkY1isxPgiUQtbeIyuws_/s1600/P1230691.jpg?height=200&width=200",
        feature: "4 Huéspedes",
        cta: {
          text: "Ver Cabaña",
          href: "/",
        },
      },
      {
        name: "Cabaña Azul",
        description: [
          {
            icon: "bed-double",
            text: "1 Queen",
          },
          {
            icon: "car",
            text: "Descubierto",
          },
        ],
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgC9reRXwnj1mqM6Nl3WxGNU7VeH9jWLVYOwyfWJPiwujxqJpgJnBM8tiTU5vCYd9xcLwAY0j8OyoK1OdIMUAroz9fdYiG8LmMWeO63Oy70jsqX7S0X-p-8_n7GdQsY8-vtAMSGFD986icg/s1600/P1190740.JPG?height=200&width=200",
        feature: "2 Huéspedes",
        cta: {
          text: "Ver Cabaña",
          href: "/",
        },
      },
    ],
  },
  GALLERY: {
    title: "Un entorno para relajarse",
    description:
      "Descubrí en imágenes la tranquilidad del predio, sus rincones verdes y las cabañas diseñadas para disfrutar cada momento.",
    cta: {
      text: "Ver Galería",
      href: "/",
      description: "Mira nuestras cabanas",
    },
    images: [
      {
        src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgczXlwgiYmsWfR-Ck968MMX2D8e-9aiPk28Zo6V22JXv__ALBTxgeEfJ9PEvbMAnXQFiMqRrs_alvPh5R3GMrRv98xqU6zFGMIo1S_YEIsUBpnt2iXm_msMYttiKufhIRd9FtjxldHz3eK/s1600/P1200579.JPG?height=200&width=200",
        alt: "Cabaña de la Ribera 1",
      },
      {
        src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhoijI6XNaEAp5elswTx7uFbJtpL17VYKtyMdVOI0APQ33AM3KjqwcU11r5QrwKSBHoxJcDQh-uuoUWneKJbaTg5AiCR7fI7oSULXIkkocs1dRLrMchWfvyUXYE0nUT47VxTlL6lD2Ztipy/s1600/P1190232.jpg?height=200&width=200",
        alt: "Cabaña de la Ribera 2",
      },
      {
        src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiFsHnCH4BVEY9cHdHjWKLCt65RwCBP8kKQ1wCGyyCbnr2g-JLau1-GbjCc7kzSuGccq8zfbVoNXI9XwR1TMxHxcbD9RehyphenhyphenpDiLQqR8GAOBRnuEgYuIH5gWFqaXUbRJ0yBqQNIQHiO4YRm0/s1600/P1190719.jpg?height=200&width=200",
        alt: "Cabaña de la Ribera 3",
      },
      {
        src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgC9reRXwnj1mqM6Nl3WxGNU7VeH9jWLVYOwyfWJPiwujxqJpgJnBM8tiTU5vCYd9xcLwAY0j8OyoK1OdIMUAroz9fdYiG8LmMWeO63Oy70jsqX7S0X-p-8_n7GdQsY8-vtAMSGFD986icg/s1600/P1190740.JPG?height=200&width=200",
        alt: "Cabaña de la Ribera 4",
      },
      {
        src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjnnWtYumF1UgeIjr_jvBs_GBJBhi7Wb9PciDNdrcqam7vIkoZmbtfUDjh-HDoJUlB68ZuWOgLMuR5IwZXCumKXZR2zu3fT3QYRhNChMRS-sQo3t5Xuw_Z6BfPMkY1isxPgiUQtbeIyuws_/s1600/P1230691.jpg?height=200&width=200",
        alt: "Cabaña de la Ribera 5",
      },
    ],
  },
  TESTIMONIALS: {
    title: "Nuestros Visitantes",
    subtitle:
      "Lo que dicen quienes ya nos eligieron para desconectar y disfrutar de San Pedro.",
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
      "Regalate unos días de calma frente al río, rodeado de naturaleza y comodidad. Un espacio pensado para que disfrutes sin preocupaciones.",
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
