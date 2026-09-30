import type { Metadata } from "next";
import PhotoFrame from "@/components/PhotoFrame";
import { Btn, PageHeader } from "@/components/ui";
import { PHOTOS } from "@/data/photos";
import { WA, wa } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nosotros | Blanca Aguayo Concept Store Guadalajara",
  description: "Accesorios con estilo, hechos a mano en Guadalajara. Conoce nuestro concept store en Providencia.",
  alternates: { canonical: "/nosotros" },
};

export default function NosotrosPage() {
  return (
    <>
      <PageHeader eyebrow="Nosotros" title="Blanca Aguayo Concept Store">
        <p className="font-serif text-2xl italic text-gold-deep">Accesorios con estilo, hechos a mano en Guadalajara.</p>
      </PageHeader>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2">
        <div className="grid grid-cols-2 gap-3">
          <PhotoFrame photo={PHOTOS["06"]} className="col-span-2" sizes="(max-width: 768px) 90vw, 520px" />
        </div>
        <div className="space-y-5 text-[1.02rem] leading-relaxed text-taupe">
          <p>
            Somos un concept store de joyería y accesorios de diseño en Providencia, Guadalajara. Hacemos a mano chokers,
            collares con piedras naturales y piezas en gold filled 14K, rodio, perlas y cuarzos, con detalles que nos
            encantan: flores, animales, conchas de mar, cruces, alas y corazones.
          </p>
          <p>
            Creemos que el accesorio correcto lo es todo. Por eso diseñamos para cada plan, cada estilo y cada ocasión:
            para el día a día, una comida, una cena, una boda, un evento o ese regalo que quieres que se sienta diferente.
          </p>
          <p>Puedes visitarnos en la tienda o escribirnos por WhatsApp. Enviamos a México, USA y Canadá.</p>
          <div className="flex flex-col gap-3 pt-3 sm:flex-row">
            <Btn href="/visitanos">Visítanos</Btn>
            <Btn href={wa(WA.general)} variant="wa">Escríbenos por WhatsApp</Btn>
          </div>
        </div>
      </section>
    </>
  );
}
