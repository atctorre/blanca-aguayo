import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import CategoryCard from "@/components/CategoryCard";
import PhotoFrame from "@/components/PhotoFrame";
import TypeCard from "@/components/TypeCard";
import { Badge, Btn, Ornament, PriceNote } from "@/components/ui";
import { CATEGORIES, STONE_PIECES, getCategory } from "@/data/catalog";
import { photosFor } from "@/data/photos";
import { INSTAGRAM, SITE_URL, WA, wa } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCategory(slug);
  if (!cat) return {};
  return {
    title: cat.title,
    description: cat.description,
    alternates: { canonical: `/catalogo/${cat.slug}` },
    openGraph: { title: cat.title, description: cat.description },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cat = getCategory(slug);
  if (!cat) notFound();
  const photos = photosFor(cat.slug);
  const related = cat.related.map((s) => getCategory(s)!).filter(Boolean);
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Catálogo", item: `${SITE_URL}/catalogo` },
      { "@type": "ListItem", position: 3, name: cat.name, item: `${SITE_URL}/catalogo/${cat.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <section className="bg-sand/60">
        <div className="mx-auto max-w-6xl px-5 pb-14 pt-8">
          <Breadcrumb items={[{ href: "/", label: "Inicio" }, { href: "/catalogo", label: "Catálogo" }, { label: cat.name }]} />
          <div className="mt-10 grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h1 className="font-serif text-5xl font-light leading-none sm:text-7xl">{cat.name}</h1>
              <Ornament className="mt-6" />
              <p className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-taupe">{cat.intro}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Badge>Hecho a mano</Badge>
                {cat.slug === "piedras-naturales" && <Badge>Piedra natural</Badge>}
                {cat.slug === "gold-filled-14k" && <Badge>Gold filled 14K</Badge>}
                {cat.slug === "rodio" && <Badge>Rodio</Badge>}
                <Badge>Envíos MX · USA · CA</Badge>
              </div>
              <PriceNote className="mt-5 text-sm" />
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Btn href={wa(cat.waMessage)} variant="wa">Lo quiero</Btn>
                <Btn href="/visitanos" variant="outline">Visítanos en Providencia</Btn>
              </div>
            </div>
            <div className="mx-auto w-full max-w-[380px]">
              {photos.length === 0 ? (
                <TypeCard label={cat.typeLabel} note={cat.typeNote} tone={cat.slug === "cuarzos" ? "quartz" : "gold"} />
              ) : (
                <PhotoFrame photo={photos[0]} priority sizes="(max-width: 768px) 90vw, 380px" />
              )}
            </div>
          </div>
        </div>
      </section>

      {cat.slug === "piedras-naturales" && (
        <section className="mx-auto max-w-6xl px-5 pt-16">
          <h2 className="text-center font-serif text-4xl font-light">Collares por piedra</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {STONE_PIECES.map((p) => (
              <article key={p.name} className="flex flex-col border border-linen bg-ivory p-5">
                <div className="flex gap-1.5" aria-hidden>
                  {Array.from({ length: 7 }).map((_, i) => (
                    <span key={i} className="h-3.5 w-3.5 rounded-full" style={{ background: p.color, opacity: 1 - i * 0.07 }} />
                  ))}
                </div>
                <h3 className="mt-5 font-serif text-2xl leading-tight">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm text-taupe">{p.text}</p>
                <PriceNote className="mt-3" />
                <a
                  href={wa(p.wa)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex w-fit border-b border-turquoise pb-0.5 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-turquoise hover:text-lapis"
                >
                  Lo quiero
                </a>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-5 py-16">
        {photos.length > 1 && (
          <>
            <h2 className="text-center font-serif text-4xl font-light">Piezas reales</h2>
            <div className="mt-10 grid grid-cols-2 items-start gap-3 sm:gap-5 lg:grid-cols-4">
              {photos.map((p) => (
                <PhotoFrame key={p.id} photo={p} sizes="(max-width: 640px) 50vw, 280px" />
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-taupe">
              ¿Te gustó una? Mándanos captura por WhatsApp y te damos disponibilidad.
            </p>
          </>
        )}
        {photos.length === 0 && (
          <div className="mx-auto max-w-2xl border border-linen bg-sand/40 px-6 py-10 text-center">
            <p className="leading-relaxed text-taupe">
              Estamos actualizando esta sección. Mientras tanto, pregúntanos por WhatsApp o mira nuestras piezas más
              recientes en Instagram.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Btn href={wa(cat.waMessage)} variant="wa">Escríbenos por WhatsApp</Btn>
              <Btn href={INSTAGRAM} variant="outline">Ver Instagram</Btn>
            </div>
          </div>
        )}
      </section>

      <section className="border-t border-linen bg-ivory">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-center font-serif text-3xl font-light sm:text-4xl">También te puede gustar</h2>
          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-3">
            {related.map((r, i) => (
              <div key={r.slug} className={i === 2 ? "hidden lg:block" : ""}>
                <CategoryCard cat={r} />
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Btn href={wa(WA.help)} variant="ghost">Pedir ayuda por WhatsApp</Btn>
          </div>
        </div>
      </section>
    </>
  );
}
