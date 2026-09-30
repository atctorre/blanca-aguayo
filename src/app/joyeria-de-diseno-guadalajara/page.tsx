import type { Metadata } from "next";
import MapEmbed from "@/components/MapEmbed";
import PhotoFrame from "@/components/PhotoFrame";
import { Btn, PageHeader } from "@/components/ui";
import { PHOTOS } from "@/data/photos";
import { MAPS_LINK, WA, wa } from "@/lib/site";

export const metadata: Metadata = {
  title: "Joyería de diseño en Providencia, Guadalajara | Blanca Aguayo",
  description:
    "Concept store de accesorios hechos a mano en Providencia. Chokers, piedras naturales y gold filled 14K. Visítanos en Av. Rubén Darío 1449.",
  alternates: { canonical: "/joyeria-de-diseno-guadalajara" },
};

const bullets = [
  "Tienda física en Providencia 4a. Sección",
  "Chokers y collares de piedras naturales",
  "Gold filled 14K, rodio, perlas y cuarzos",
  "Envíos a México, USA y Canadá",
];

export default function GeoPage() {
  return (
    <>
      <PageHeader eyebrow="Guadalajara · Zapopan · ZMG" title="Joyería de diseño en Providencia, Guadalajara" />
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2">
        <div>
          <p className="text-[1.02rem] leading-relaxed text-taupe">
            En Blanca Aguayo Concept Store encuentras accesorios hechos a mano en Guadalajara: chokers, collares con
            piedras naturales (turquesa, lapislázuli, amatista, ágata y coral) y piezas en gold filled 14K, rodio, perlas y
            cuarzos. Si vives en Guadalajara, Zapopan o cualquier punto de la Zona Metropolitana, visítanos en Av. Rubén
            Darío 1449, en la colonia Providencia. Si estás en otra ciudad de México, en Estados Unidos o en Canadá, te lo
            enviamos.
          </p>
          <ul className="mt-8 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-ink">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" aria-hidden />
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Btn href="/catalogo">Ver catálogo</Btn>
            <Btn href={MAPS_LINK} variant="outline">Cómo llegar</Btn>
            <Btn href={wa(WA.general)} variant="wa">Escríbenos por WhatsApp</Btn>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <PhotoFrame photo={PHOTOS["03"]} sizes="(max-width: 768px) 50vw, 300px" />
          <PhotoFrame photo={PHOTOS["02"]} sizes="(max-width: 768px) 50vw, 300px" />
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 pb-16">
        <MapEmbed className="h-[360px]" />
      </section>
    </>
  );
}
