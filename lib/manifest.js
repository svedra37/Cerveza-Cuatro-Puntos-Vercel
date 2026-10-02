(function () {
  "use strict";

  window.__BRAND__ = {
    meta: {
      name: "Cuatro Puntos",
      tagline: {
        es: "Cervecería Artesanal",
        en: "Craft Brewery"
      },
      location: "Conkal, Yucatán, México",
      whatsapp: "529999006352",
      whatsappMessage: "🍻 ¡Hola, CUATRO PUNTOS!\nSe me antojaron unas buenas chelas artesanales 🍺 y vengo por mi dosis de felicidad.\n¿Qué tienen disponible hoy?",
      instagram: "https://www.instagram.com/cerveza4puntos?stkn=OG9ydjh3eGdlaW1v",
      facebook: "https://www.facebook.com/share/1DaSQEjrCS/",
      year: "2026"
    },

    nav: [
      { id: "historia", es: "Historia", en: "Story" },
      { id: "variedades", es: "Variedades", en: "Varieties" },
      { id: "proceso", es: "Proceso", en: "Process" },
      { id: "yucatan", es: "Yucatán", en: "Yucatán" },
      { id: "contacto", es: "Contacto", en: "Contact" }
    ],

    hero: {
      kicker: { es: "Cervecería Artesanal · Conkal, Yucatán", en: "Craft Brewery · Conkal, Yucatán" },
      titleLines: [
        { es: "Cuatro", en: "Cuatro" },
        { es: "Puntos", en: "Puntos" }
      ],
      sub: {
        es: "Cerveza artesanal elaborada con métodos tradicionales, tiempo y paciencia, en el corazón de Yucatán.",
        en: "Craft beer brewed the traditional way — with time and patience, in the heart of Yucatán."
      },
      ctaPrimary: { es: "Pedir por WhatsApp", en: "Order on WhatsApp" },
      ctaSecondary: { es: "Ver variedades", en: "See varieties" }
    },

    marquee: [
      "MALTA", "LÚPULO", "LEVADURA", "TRADICIÓN", "YUCATÁN"
    ],

    historia: {
      kicker: { es: "01 · Nuestra historia", en: "01 · Our story" },
      title: {
        es: "Una cervecería pequeña, con raíces profundas.",
        en: "A small brewery, with deep roots."
      },
      paragraphs: [
        {
          es: "Cuatro Puntos es una pequeña cervecería artesanal ubicada en la villa de Conkal, Yucatán. Elaboramos nuestra cerveza utilizando los métodos tradicionales, respetando los tiempos que cada receta necesita y cuidando cada lote como si fuera el primero.",
          en: "Cuatro Puntos is a small craft brewery located in the village of Conkal, Yucatán. We brew our beer using traditional methods, respecting the time each recipe needs and caring for every batch as if it were the first."
        },
        {
          es: "No buscamos producir en masa: buscamos producir bien. Cada botella sale de nuestras manos después de semanas de maceración, cocción y fermentación controlada, honrando técnicas cerveceras transmitidas y perfeccionadas por generaciones.",
          en: "We don't seek mass production — we seek to brew well. Every bottle leaves our hands after weeks of mashing, boiling and controlled fermentation, honoring brewing techniques passed down and perfected over generations."
        },
        {
          es: "El nombre \"Cuatro Puntos\" honra los cuatro pilares de este néctar: agua, malta, lúpulo y levadura — y los cuatro rumbos que, según la cosmovisión maya, dan equilibrio a la tierra yucateca que nos vio nacer.",
          en: "The name \"Cuatro Puntos\" honors the four pillars of this nectar: water, malt, hops and yeast — and the four cardinal directions that, in Maya cosmology, give balance to the Yucatecan land where we were born."
        }
      ],
      stats: [
        { value: 4, suffix: "", label: { es: "Ingredientes naturales", en: "Natural ingredients" } },
        { value: 100, suffix: "%", label: { es: "Elaboración artesanal", en: "Handcrafted brewing" } },
        { value: 5, suffix: "%", label: { es: "Vol. de alcohol", en: "Alcohol by volume" } },
        { value: 355, suffix: "ml", label: { es: "Presentación", en: "Bottle size" } }
      ]
    },

    pour: {
      kicker: { es: "02 · El detalle", en: "02 · The detail" },
      title: {
        es: "Elaborada con tiempo. Servida con orgullo.",
        en: "Brewed with time. Served with pride."
      },
      sub: {
        es: "Sin prisas. Sin atajos. Solo cuatro ingredientes y la paciencia de dejar que la fermentación haga su trabajo.",
        en: "No rush. No shortcuts. Just four ingredients and the patience to let fermentation do its work."
      }
    },

    momentos: {
      kicker: { es: "03 · En movimiento", en: "03 · In motion" },
      title: { es: "Así se disfruta, donde sea.", en: "This is how it's enjoyed, anywhere." },
      items: [
        {
          video: "assets/video/bottles-beach.mp4",
          poster: "assets/img/poster-bottles-beach.jpg",
          caption: { es: "Con los pies en la arena.", en: "Toes in the sand." }
        },
        {
          video: "assets/video/pour-glass.mp4",
          poster: "assets/img/poster-pour-glass.jpg",
          caption: { es: "Se sirve con calma.", en: "Poured with calm." }
        }
      ]
    },

    variedades: {
      kicker: { es: "04 · Nuestras cervezas", en: "04 · Our beers" },
      title: { es: "Tres caracteres. Un mismo oficio.", en: "Three characters. One craft." },
      items: [
        {
          name: "Clara",
          img: "assets/img/two-labels-clara-oscura.jpg",
          abv: "5% ALC. VOL.",
          desc: {
            es: "Ligera y refrescante, de cuerpo suave con notas maltosas y un final limpio. La puerta de entrada perfecta al mundo artesanal.",
            en: "Light and refreshing, soft-bodied with malty notes and a clean finish. The perfect gateway into the craft world."
          }
        },
        {
          name: "Ámbar",
          img: "assets/img/warm-glass-ambar.jpg",
          abv: "5% ALC. VOL.",
          desc: {
            es: "Cuerpo medio y color cobrizo, con notas a caramelo tostado equilibradas por un lúpulo sutil. Compleja sin dejar de ser fácil de beber.",
            en: "Medium body and copper color, with toasted caramel notes balanced by subtle hops. Complex, yet easy to drink."
          }
        },
        {
          name: "Oscura",
          img: "assets/img/case-bottles-oscura.jpg",
          abv: "5% ALC. VOL.",
          desc: {
            es: "Robusta y profunda, con notas a café tostado, chocolate amargo y un toque ahumado. Para quien busca carácter en cada trago.",
            en: "Robust and deep, with roasted coffee notes, dark chocolate and a hint of smoke. For those who want character in every sip."
          }
        }
      ]
    },

    proceso: {
      kicker: { es: "05 · Proceso artesanal", en: "05 · Craft process" },
      title: { es: "De la malta a la botella.", en: "From malt to bottle." },
      steps: [
        {
          n: "01",
          name: { es: "Maceración", en: "Mashing" },
          desc: {
            es: "La malta molida se mezcla con agua caliente para liberar los azúcares fermentables. De aquí nace el mosto, la base dulce de toda cerveza.",
            en: "Crushed malt is mixed with hot water to release fermentable sugars. This creates the wort, the sweet base of every beer."
          }
        },
        {
          n: "02",
          name: { es: "Cocción", en: "Boiling" },
          desc: {
            es: "El mosto se hierve y se incorpora el lúpulo, que aporta amargor, aroma y actúa como conservador natural.",
            en: "The wort is boiled and hops are added, contributing bitterness, aroma, and acting as a natural preservative."
          }
        },
        {
          n: "03",
          name: { es: "Fermentación", en: "Fermentation" },
          desc: {
            es: "La levadura transforma los azúcares en alcohol y CO₂ durante días de reposo a temperatura controlada. Aquí nace el carácter de cada receta.",
            en: "Yeast transforms sugars into alcohol and CO₂ over days of rest at controlled temperature. This is where each recipe's character is born."
          }
        },
        {
          n: "04",
          name: { es: "Maduración", en: "Conditioning" },
          desc: {
            es: "La cerveza reposa el tiempo necesario para redondear sabores y afinar su cuerpo, sin prisas ni procesos acelerados.",
            en: "The beer rests as long as it needs to round out flavors and refine its body, with no rush and no shortcuts."
          }
        },
        {
          n: "05",
          name: { es: "Envasado", en: "Bottling" },
          desc: {
            es: "Cada botella se llena, corona y etiqueta a mano, lote por lote, cuidando que llegue a tu mesa en su mejor momento.",
            en: "Every bottle is filled, capped and labeled by hand, batch by batch, ensuring it reaches your table at its best moment."
          }
        }
      ]
    },

    yucatan: {
      kicker: { es: "06 · Nuestra tierra", en: "06 · Our land" },
      title: {
        es: "Hecha en Yucatán, para el mundo.",
        en: "Made in Yucatán, for the world."
      },
      paragraph: {
        es: "Conkal es un pueblo pequeño de tradición henequenera, a minutos de Mérida. Ahí, entre el calor y la calma yucateca, elaboramos cada lote de Cuatro Puntos con la misma calma con la que crece la tierra que nos rodea.",
        en: "Conkal is a small town with a henequen-growing tradition, minutes from Mérida. There, amid Yucatán's heat and calm, we brew every batch of Cuatro Puntos with the same unhurried pace as the land around us."
      }
    },

    contacto: {
      kicker: { es: "07 · Pide la tuya", en: "07 · Get yours" },
      title: { es: "¿Se te antoja una Cuatro Puntos?", en: "Craving a Cuatro Puntos?" },
      sub: {
        es: "Escríbenos por WhatsApp y te decimos qué tenemos disponible hoy.",
        en: "Message us on WhatsApp and we'll tell you what's available today."
      },
      ctaWhatsapp: { es: "Pedir por WhatsApp", en: "Order on WhatsApp" },
      social: { es: "Síguenos", en: "Follow us" }
    },

    footer: {
      rights: { es: "Todos los derechos reservados.", en: "All rights reserved." },
      made: { es: "Elaborada a mano en Conkal, Yucatán.", en: "Handcrafted in Conkal, Yucatán." }
    }
  };
})();
