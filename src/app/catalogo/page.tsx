import type { Metadata } from "next";
import CategoryCard from "@/components/CategoryCard";
import { Btn, PageHeader } from "@/components/ui";
import { CATEGORIES } from "@/data/catalog";
import { WA, wa } from "@/lib/site";

export const metadata: Metadata = {
  title: "Catálogo de joyería y accesorios | Blanca Aguayo",
  description:
    "Explora chokers, collares con piedras naturales, gold filled 14K, rodio, perlas y cuarzos. Consulta disponibilidad por WhatsApp.",
  alternates: { canonical: "/catalogo" },
};

const motifs = ["Flores", "Animales", "Conchas de mar", "Cruces", "Alas", "Corazones"];

export default function CatalogoPage() {
  return (
    <>
      <PageHeader eyebrow="Blanca Aguayo Concept Store" title="Catálogo">
        <p>
          Joyería y accesorios de diseño hechos a mano. Explora por categoría y, cuando encuentres tu pieza, dale a
          &ldquo;Lo quiero&rdquo;: te llevamos directo a WhatsApp para darte disponibilidad y precio.
        </p>
        <p className="mt-4 text-sm italic">
          Precio y disponibilidad: consúltalos por WhatsApp. También puedes verlos en la tienda de Providencia.
        </p>
      </PageHeader>
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="mb-10 flex flex-wrap justify-center gap-2" aria-label="Detalles de diseño">
          {motifs.map((m) => (
            <span key={m} className="rounded-full border border-linen px-3.5 py-1.5 text-[0.7rem] uppercase tracking-[0.16em] text-taupe">
              {m}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 lg:grid-cols-3">
          {CATEGORIES.map((c) => (
            <CategoryCard key={c.slug} cat={c} />
          ))}
        </div>
      </section>
      <section className="bg-sand/70">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center">
          <h2 className="font-serif text-4xl font-light">¿Buscas algo en especial?</h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-taupe">
            Mándanos una foto de la pieza que viste en Instagram o cuéntanos la ocasión y te ayudamos a elegir.
          </p>
          <div className="mt-8">
            <Btn href={wa(WA.help)} variant="wa">Pedir ayuda por WhatsApp</Btn>
          </div>
        </div>
      </section>
    </>
  );
}
