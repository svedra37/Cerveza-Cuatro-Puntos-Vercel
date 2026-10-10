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

    a11y: {
      skip: { es: "Saltar al contenido", en: "Skip to content" },
      menuOpen: { es: "Abrir menú", en: "Open menu" },
      menuClose: { es: "Cerrar menú", en: "Close menu" }
    },

    age: {
      title: { es: "¿Eres mayor de 18 años?", en: "Are you 18 or older?" },
      text: {
        es: "Este sitio promueve bebidas alcohólicas y está dirigido exclusivamente a personas mayores de edad.",
        en: "This site promotes alcoholic beverages and is intended exclusively for adults."
      },
      yes: { es: "Sí", en: "Yes" },
      no: { es: "No", en: "No" },
      denied: {
        es: "Lo sentimos. Para acceder a este sitio debes ser mayor de 18 años.",
        en: "Sorry. You must be 18 or older to access this site."
      },
      back: { es: "Volver", en: "Go back" }
    },

    legal: {
      abuse: { es: "El abuso en el consumo de este producto es nocivo para la salud.", en: "Excessive consumption of this product is harmful to your health." },
      minors: { es: "Prohibida su venta a menores de edad.", en: "Sale to minors is prohibited." },
      responsible: { es: "Disfruta con responsabilidad. Si bebes, no manejes.", en: "Enjoy responsibly. Don't drink and drive." }
    },

    nav: [
      { id: "historia", es: "Historia", en: "Story" },
      { id: "variedades", es: "Variedades", en: "Varieties" },
      { id: "proceso", es: "Proceso", en: "Process" },
      { id: "donde", es: "Encuéntranos", en: "Find us" },
      { id: "contacto", es: "Contacto", en: "Contact" }
    ],

    hero: {
      kicker: { es: "Cervecería Artesanal · Conkal, Yucatán", en: "Craft Brewery · Conkal, Yucatán" },
      sub: {
        es: "Cerveza 100% artesanal elaborada con pasión, conciencia y el tiempo que merece, en el corazón de Yucatán.",
        en: "100% craft beer made with passion, awareness and the time it deserves, in the heart of Yucatán."
      },
      ctaPrimary: { es: "Pedir por WhatsApp", en: "Order on WhatsApp" },
      ctaSecondary: { es: "Ver variedades", en: "See varieties" }
    },

    marquee: [
      "MALTA", "LÚPULO", "LEVADURA", "TRADICIÓN", "YUCATÁN"
    ],

    historia: {
      kicker: { es: "Nuestra historia", en: "Our story" },
      kicker2: { es: "Nuestra tierra", en: "Our land" },
      title: {
        es: "Una cervecería pequeña, con raíces profundas.",
        en: "A small brewery, with deep roots."
      },
      paragraphs: [
        {
          es: "En la villa de Conkal, un pueblo yucateco de profunda tradición henequenera a minutos de Mérida, habita Cuatro Puntos. Aquí, donde la tierra exige entrega y tiempo, elaboramos cerveza 100% artesanal con pasión, paciencia y el corazón en cada detalle.",
          en: "In the village of Conkal, a Yucatecan town with a deep henequen-growing tradition just minutes from Mérida, Cuatro Puntos makes its home. Here, where the land demands dedication and time, we brew 100% craft beer with passion, patience and heart in every detail."
        },
        {
          es: "No buscamos producir en masa: buscamos producir bien. Cada botella es resultado de semanas de dedicación, maceración y fermentación controlada, honrando el oficio cervecero.",
          en: "We don't seek mass production — we seek to brew well. Every bottle is the result of weeks of dedication, mashing and controlled fermentation, honoring the brewer's craft."
        },
        {
          es: "Nuestro nombre, \"Cuatro Puntos\" honra los cuatro pilares de este néctar: agua, malta, lúpulo y levadura; y los cuatro rumbos que, en la cosmovisión maya, dan equilibrio a la tierra yucateca que nos vio nacer.",
          en: "Our name, \"Cuatro Puntos\", honors the four pillars of this nectar: water, malt, hops and yeast; and the four cardinal directions that, in Maya cosmology, give balance to the Yucatecan land where we were born."
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
      kicker: { es: "El detalle", en: "The detail" },
      title: {
        es: "Elaborada con tiempo. Servida con orgullo.",
        en: "Brewed with time. Served with pride."
      },
      sub: {
        es: "Sin prisas. Sin atajos. Solo cuatro ingredientes y la paciencia de dejar que la fermentación haga su trabajo.",
        en: "No rush. No shortcuts. Just four ingredients and the patience to let fermentation do its work."
      }
    },

    variedades: {
      kicker: { es: "Nuestras cervezas", en: "Our beers" },
      title: { es: "Caracteres que nos definen.", en: "Characters that define us." },
      items: [
        {
          name: "Ámbar",
          img: "assets/img/amber-glass-marble.jpg",
          abv: "4.5% – 5% ALC. VOL.",
          desc: {
            es: "Cuerpo medio y color cobrizo, con notas a caramelo tostado equilibradas con un lúpulo cítrico. Compleja sin dejar de ser refrescante y fácil de beber.",
            en: "Medium body and copper color, with toasted caramel notes balanced by a citrusy hop. Complex, yet refreshing and easy to drink."
          }
        },
        {
          name: "Oscura",
          img: "assets/img/oscura-pier-sunset.jpg",
          abv: "5.5% – 6.5% ALC. VOL.",
          desc: {
            es: "Robusta y profunda, con notas a café tostado, chocolate amargo y un toque ahumado. Para quien busca carácter en cada trago.",
            en: "Robust and deep, with roasted coffee notes, dark chocolate and a hint of smoke. For those who want character in every sip."
          }
        }
      ]
    },

    proceso: {
      kicker: { es: "Proceso artesanal", en: "Craft process" },
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

    donde: {
      kicker: { es: "Puntos de venta", en: "Where to buy" },
      title: { es: "Dónde encontrarnos.", en: "Where to find us." },
      venues: [
        { name: "The Beer Box", url: "https://www.thebeerbox.com/", meta: { es: "Tienda de cervezas", en: "Beer store" } },
        { name: "Museo de la Gastronomía Yucateca", url: "https://mugy.com.mx/", meta: { es: "Museo · Mérida, Yucatán", en: "Museum · Mérida, Yucatán" } }
      ],
      visit: { es: "Visitar sitio", en: "Visit website" }
    },

    contacto: {
      kicker: { es: "Pide la tuya", en: "Get yours" },
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
