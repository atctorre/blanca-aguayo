export type Category = {
  slug: string;
  name: string;
  card: string;
  intro: string;
  title: string;
  description: string;
  waMessage: string;
  /** Texto decorativo para la tarjeta tipográfica cuando no hay foto. */
  typeLabel: string;
  typeNote: string;
  related: string[];
};

export const CATEGORIES: Category[] = [
  {
    slug: "chokers",
    name: "Chokers",
    card: "La pieza que define el look.",
    intro:
      "El poder de los chokers: una sola pieza y tu look cambia por completo. Llévalo solo para algo sencillo o combínalo con collares para un estilo más atrevido. Hechos a mano en Guadalajara.",
    title: "Chokers en Guadalajara | Blanca Aguayo Concept Store",
    description:
      "Chokers de diseño hechos a mano en Guadalajara. Encuéntralos en nuestra tienda de Providencia o pídelos por WhatsApp.",
    waMessage:
      "Hola Blanca Aguayo, me interesan sus chokers. ¿Qué modelos tienen disponibles y cuál es su precio?",
    typeLabel: "Chokers",
    typeNote: "Hecho a mano",
    related: ["perlas", "rodio", "piedras-naturales"],
  },
  {
    slug: "piedras-naturales",
    name: "Piedras naturales",
    card: "Turquesa, lapislázuli, amatista, ágata y coral.",
    intro:
      "Collares con turquesa, lapislázuli, amatista, ágata y coral. Nos encanta mezclar colores: combínalos entre sí o úsalos solos para darle un toque especial a tu outfit.",
    title: "Collares de piedras naturales en Guadalajara | Blanca Aguayo",
    description:
      "Collares con turquesa, lapislázuli, amatista, ágata y coral. Joyería de diseño en Providencia, Guadalajara. Consultálos por WhatsApp.",
    waMessage:
      "Hola Blanca Aguayo, me interesan sus collares de piedras naturales. ¿Qué tienen disponible y cuál es su precio?",
    typeLabel: "Piedras naturales",
    typeNote: "Piedra natural",
    related: ["cuarzos", "chokers", "gold-filled-14k"],
  },
  {
    slug: "gold-filled-14k",
    name: "Gold filled 14K",
    card: "Piezas en gold filled 14K para usar todos los días.",
    intro:
      "Piezas en gold filled, una aleación con oro de 14K, para llevar tu estilo del día a la noche. Encuentra diseños con flores, conchas, cruces, alas y corazones.",
    title: "Joyería gold filled 14K en Guadalajara | Blanca Aguayo",
    description:
      "Piezas en gold filled 14K hechas a mano. Visítanos en Providencia, Guadalajara, o pide por WhatsApp con envío a MX, USA y Canadá.",
    waMessage:
      "Hola Blanca Aguayo, me interesan sus piezas en gold filled 14K. ¿Qué tienen disponible y cuál es su precio?",
    typeLabel: "14K",
    typeNote: "Gold filled",
    related: ["perlas", "piedras-naturales", "rodio"],
  },
  {
    slug: "rodio",
    name: "Rodio",
    card: "Brillo plateado con diseño propio.",
    intro:
      "Accesorios en rodio para las que prefieren los tonos plateados. Diseños con estilo para cada plan y cada ocasión.",
    title: "Joyería en rodio en Guadalajara | Blanca Aguayo",
    description:
      "Accesorios en rodio con diseño propio. Tienda en Providencia, Guadalajara. Consulta piezas y disponibilidad por WhatsApp.",
    waMessage:
      "Hola Blanca Aguayo, me interesan sus piezas en rodio. ¿Qué tienen disponible y cuál es su precio?",
    typeLabel: "Rodio",
    typeNote: "Rodio",
    related: ["chokers", "perlas", "gold-filled-14k"],
  },
  {
    slug: "perlas",
    name: "Perlas",
    card: "Un clásico con estilo propio.",
    intro:
      "Las perlas nunca fallan. Piezas para una cena, una boda o para darle un giro elegante a tu look de todos los días.",
    title: "Joyería con perlas en Guadalajara | Blanca Aguayo",
    description:
      "Accesorios con perlas para cada plan y ocasión. Concept store en Providencia, Guadalajara. Pregunta por WhatsApp.",
    waMessage:
      "Hola Blanca Aguayo, me interesan sus piezas con perlas. ¿Qué tienen disponible y cuál es su precio?",
    typeLabel: "Perlas",
    typeNote: "Hecho a mano",
    related: ["chokers", "gold-filled-14k", "rodio"],
  },
  {
    slug: "cuarzos",
    name: "Cuarzos",
    card: "Accesorios con cuarzos, llenos de carácter.",
    intro: "Accesorios con cuarzos, hechos a mano, para sumar color y textura a tu estilo.",
    title: "Accesorios con cuarzos en Guadalajara | Blanca Aguayo",
    description:
      "Piezas con cuarzos hechas a mano en Guadalajara. Visítanos en Providencia o consulta disponibilidad por WhatsApp.",
    waMessage:
      "Hola Blanca Aguayo, me interesan sus piezas con cuarzos. ¿Qué tienen disponible y cuál es su precio?",
    typeLabel: "Cuarzos",
    typeNote: "Hecho a mano",
    related: ["piedras-naturales", "gold-filled-14k", "perlas"],
  },
];

export function getCategory(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}

/** Piezas concretas (post de IG del 11-sep-2026): se nombran por piedra. */
export const STONE_PIECES = [
  {
    name: "Collar de turquesa",
    text: "El azul que ilumina cualquier look.",
    color: "#40B5AD",
    wa: "Hola Blanca Aguayo, me interesa el collar de turquesa. ¿Está disponible y cuál es su precio?",
  },
  {
    name: "Collar de lapislázuli",
    text: "Azul profundo, elegante de día y de noche.",
    color: "#26477A",
    wa: "Hola Blanca Aguayo, me interesa el collar de lapislázuli. ¿Está disponible y cuál es su precio?",
  },
  {
    name: "Collar de amatista",
    text: "Tonos violeta para un toque distinto.",
    color: "#6E4A86",
    wa: "Hola Blanca Aguayo, me interesa el collar de amatista. ¿Está disponible y cuál es su precio?",
  },
  {
    name: "Collar de ágata",
    text: "Una piedra natural con mucha personalidad.",
    color: "#2F7D5B",
    wa: "Hola Blanca Aguayo, me interesa el collar de ágata. ¿Está disponible y cuál es su precio?",
  },
  {
    name: "Collar de coral",
    text: "Color cálido para mezclar y combinar.",
    color: "#C0392B",
    wa: "Hola Blanca Aguayo, me interesa el collar de coral. ¿Está disponible y cuál es su precio?",
  },
];

export const FAQS = [
  {
    q: "¿Dónde está la tienda?",
    a: "En Av. Rubén Darío 1449, Providencia 4a. Sección, Guadalajara, Jalisco.",
  },
  {
    q: "¿Puedo comprar sin ir a la tienda?",
    a: "Sí. Escríbenos por WhatsApp al 33 1216 2923 con la pieza que te gustó y te confirmamos disponibilidad y precio.",
  },
  {
    q: "¿Por qué no hay precios en la página?",
    a: "Muchas piezas están hechas a mano y la disponibilidad cambia seguido. Escríbenos por WhatsApp y te damos el precio al momento.",
  },
  {
    q: "¿Hacen envíos?",
    a: "Sí, a toda la República Mexicana, Estados Unidos y Canadá. El costo y el tiempo dependen del destino; te los confirmamos por WhatsApp.",
  },
  {
    q: "¿De qué materiales son las piezas?",
    a: "Trabajamos con piedras naturales (turquesa, lapislázuli, amatista, ágata y coral), gold filled 14K, rodio, perlas y cuarzos. Pregúntanos por la pieza que te interesa y te damos el detalle.",
  },
  {
    q: "¿Qué es el gold filled 14K?",
    a: "Es una aleación con oro de 14K. Si tienes dudas sobre una pieza en particular, escríbenos.",
  },
  {
    q: "¿Las piezas son hechas a mano?",
    a: "Sí, son diseños de joyería y accesorios hechos a mano.",
  },
  {
    q: "¿Vi una pieza en Instagram, cómo la pido?",
    a: "Toma captura de pantalla o copia el enlace del post y mándanoslo por WhatsApp. Te decimos si está disponible.",
  },
  {
    q: "¿Me ayudan a elegir un regalo?",
    a: "Claro. Cuéntanos para quién es y para qué ocasión, y te sugerimos opciones.",
  },
];
