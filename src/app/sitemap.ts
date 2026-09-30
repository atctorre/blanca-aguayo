import type { MetadataRoute } from "next";
import { CATEGORIES } from "@/data/catalog";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/catalogo",
    ...CATEGORIES.map((c) => `/catalogo/${c.slug}`),
    "/nosotros",
    "/visitanos",
    "/envios",
    "/contacto",
    "/joyeria-de-diseno-guadalajara",
    "/preguntas-frecuentes",
  ];
  return paths.map((p) => ({ url: `${SITE_URL}${p}`, lastModified: new Date("2026-09-30") }));
}
