export const SITE_URL = "https://blanca-aguayo.vercel.app";
export const BRAND = "Blanca Aguayo Concept Store";
export const TAGLINE = "accesorios con estilo";

export const PHONE_E164 = "+523312162923";
export const PHONE_DISPLAY = "33 1216 2923";
export const PHONE_INTL = "+52 33 1216 2923";
export const WA_BASE = "https://wa.me/523312162923";

export const INSTAGRAM = "https://www.instagram.com/blancaaguayoshrm/";
export const INSTAGRAM_HANDLE = "@blancaaguayoshrm";
export const FACEBOOK = "https://www.facebook.com/bashowroom/";
export const AGENCY_URL = "https://agendadosv.com/";

export const ADDRESS = {
  street: "Av. Rubén Darío 1449",
  colonia: "Providencia 4a. Sección",
  city: "Guadalajara",
  state: "Jalisco",
  stateShort: "Jal.",
  country: "MX",
  full: "Av. Rubén Darío 1449, Providencia 4a. Sección, Guadalajara, Jal.",
};

export const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(ADDRESS.full);
export const MAPS_EMBED =
  "https://www.google.com/maps?q=" + encodeURIComponent(ADDRESS.full) + "&output=embed";

/** Mensajes prellenados (copy autoritativo 09-blanca-aguayo.md). */
export const WA = {
  general: "Hola Blanca Aguayo, vi su página web y me gustaría información sobre sus accesorios.",
  floating: "Hola Blanca Aguayo, vengo de su página web y tengo una pregunta.",
  help: "Hola Blanca Aguayo, busco un accesorio en especial y me gustaría que me ayudaran a elegir. Es para: ___.",
  gift: "Hola Blanca Aguayo, busco un regalo. Es para: ___. Ocasión: ___.",
  instagram:
    "Hola Blanca Aguayo, vi esta pieza en su Instagram y quiero saber si está disponible y su precio: ___.",
  visit: "Hola Blanca Aguayo, quiero visitar la tienda en Providencia. ¿Tienen disponible esta pieza?: ___.",
  ship: "Hola Blanca Aguayo, quiero cotizar un envío. Ciudad y país: ___. Pieza: ___.",
  shipMX: "Hola Blanca Aguayo, quiero cotizar un envío dentro de México. Ciudad y estado: ___. Pieza: ___.",
  shipUS: "Hola Blanca Aguayo, quiero cotizar un envío a Estados Unidos. Ciudad y estado: ___. Pieza: ___.",
  shipCA: "Hola Blanca Aguayo, quiero cotizar un envío a Canadá. Ciudad y provincia: ___. Pieza: ___.",
  contact: "Hola Blanca Aguayo, vengo de su página web y quiero más información.",
  notFound: "Hola Blanca Aguayo, estaba en su página web y no encontré lo que buscaba.",
} as const;

export function wa(message: string) {
  return `${WA_BASE}?text=${encodeURIComponent(message)}`;
}

export const NAV = [
  { href: "/", label: "Inicio" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/visitanos", label: "Visítanos" },
  { href: "/envios", label: "Envíos" },
  { href: "/contacto", label: "Contacto" },
];
