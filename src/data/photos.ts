/**
 * Fotos reales de producto (Instagram @blancaaguayoshrm).
 * Archivo único para cambiar o sumar fotos: guarda la imagen como base64 en
 * src/data/product-photos-b64/NN.b64 (el build la escribe en /public/products/NN.webp)
 * y regístrala aquí con su id, dimensiones reales y categorías.
 * Las fotos nunca se muestran más anchas que su tamaño real (`lowRes` = fuente pequeña).
 */
export type Photo = {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  categories: string[];
  lowRes?: boolean;
};

const ALT = "joyería de diseño Blanca Aguayo Concept Store, Guadalajara";

export const PHOTOS: Record<string, Photo> = {
  "01": {
    id: "01",
    src: "/products/01.webp",
    width: 400,
    height: 400,
    alt: `Aretes statement dorados de chaquira: ${ALT}`,
    categories: ["aretes"],
  },
  "02": {
    id: "02",
    src: "/products/02.webp",
    width: 400,
    height: 400,
    alt: `Collares de piedras naturales de colores: ${ALT}`,
    categories: ["piedras-naturales"],
  },
  "03": {
    id: "03",
    src: "/products/03.webp",
    width: 400,
    height: 400,
    alt: `Choker negro con cristales: ${ALT}`,
    categories: ["chokers"],
  },
  "04": {
    id: "04",
    src: "/products/04.webp",
    width: 400,
    height: 400,
    alt: `Aretes de gota con cristal y chaquira: ${ALT}`,
    categories: ["aretes"],
  },
  "05": {
    id: "05",
    src: "/products/05.webp",
    width: 400,
    height: 400,
    alt: `Collares con turquesa y amatista: ${ALT}`,
    categories: ["piedras-naturales"],
  },
  "06": {
    id: "06",
    src: "/products/06.webp",
    width: 400,
    height: 399,
    alt: `Collares con perlas y piedras naturales: ${ALT}`,
    categories: ["perlas"],
  },
  "07": {
    id: "07",
    src: "/products/07.webp",
    width: 400,
    height: 399,
    alt: `Choker en rodio con cristales y perla: ${ALT}`,
    categories: ["chokers", "rodio", "perlas"],
  },
  "08": {
    id: "08",
    src: "/products/08.webp",
    width: 301,
    height: 362,
    alt: `Aretes de gota con piedra: ${ALT}`,
    categories: ["piedras-naturales"],
    lowRes: true,
  },
  "09": {
    id: "09",
    src: "/products/09.webp",
    width: 301,
    height: 362,
    alt: `Aretes statement de gota: ${ALT}`,
    categories: ["aretes"],
    lowRes: true,
  },
  "10": {
    id: "10",
    src: "/products/10.webp",
    width: 256,
    height: 379,
    alt: `Collares de piedras naturales en capas: ${ALT}`,
    categories: ["piedras-naturales"],
    lowRes: true,
  },
};

/** Galería por categoría, en orden de aparición. Categorías sin fotos usan tarjeta tipográfica. */
export const GALLERY: Record<string, string[]> = {
  chokers: ["03", "07"],
  "piedras-naturales": ["02", "05", "10", "08"],
  "gold-filled-14k": [],
  rodio: ["07"],
  perlas: ["06", "07"],
  cuarzos: [],
  aretes: ["01", "04", "09"],
};

/** Foto de portada de cada categoría (null = tarjeta tipográfica). */
export const COVER: Record<string, string | null> = {
  chokers: "03",
  "piedras-naturales": "02",
  "gold-filled-14k": null,
  rodio: "07",
  perlas: "06",
  cuarzos: null,
};

export const HERO_PHOTO = "10";
export const HERO_SECONDARY = "07";

export function photosFor(slug: string): Photo[] {
  return (GALLERY[slug] ?? []).map((id) => PHOTOS[id]).filter(Boolean);
}
