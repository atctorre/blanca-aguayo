import type { Metadata } from "next";
import { PinIcon } from "@/components/Icons";
import MapEmbed from "@/components/MapEmbed";
import { Btn, PageHeader } from "@/components/ui";
import { ADDRESS, MAPS_LINK, WA, wa } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tienda en Providencia, Guadalajara | Blanca Aguayo",
  description:
    "Visítanos en Av. Rubén Darío 1449, Providencia 4a. Sección, Guadalajara, Jal. Chokers, piedras naturales, gold filled y más.",
  alternates: { canonical: "/visitanos" },
};

export default function VisitanosPage() {
  return (
    <>
      <PageHeader eyebrow="La tienda" title="Visítanos en Providencia">
        <p>Ven a ver y probarte las piezas en persona. Te esperamos en nuestro concept store.</p>
      </PageHeader>
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div>
          <PinIcon className="h-8 w-8 text-gold" />
          <address className="mt-4 font-serif text-4xl font-light not-italic leading-tight sm:text-5xl">
            {ADDRESS.street}
            <br />
            {ADDRESS.colonia}
            <br />
            {ADDRESS.city}, {ADDRESS.state}
          </address>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-taupe">
            ¿Buscas una pieza en especial? Escríbenos antes de venir y te decimos si la tenemos en tienda.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Btn href={MAPS_LINK}>Abrir en Google Maps</Btn>
            <Btn href={wa(WA.visit)} variant="wa">Escríbenos antes de venir</Btn>
          </div>
        </div>
        <MapEmbed className="h-[380px] md:h-[460px]" />
      </section>
    </>
  );
}
