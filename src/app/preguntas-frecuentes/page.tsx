import type { Metadata } from "next";
import FaqList from "@/components/FaqList";
import { Btn, PageHeader } from "@/components/ui";
import { FAQS } from "@/data/catalog";
import { WA, wa } from "@/lib/site";

export const metadata: Metadata = {
  title: "Preguntas frecuentes | Blanca Aguayo Concept Store",
  description: "Cómo pedir, envíos a México, USA y Canadá, visitas a la tienda en Providencia y más.",
  alternates: { canonical: "/preguntas-frecuentes" },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <PageHeader eyebrow="Ayuda" title="Preguntas frecuentes" />
      <section className="mx-auto max-w-3xl px-5 py-16">
        <FaqList items={FAQS} />
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Btn href={wa(WA.instagram)} variant="outline">Vi una pieza en Instagram</Btn>
          <Btn href={wa(WA.gift)} variant="wa">Buscar un regalo</Btn>
        </div>
      </section>
    </>
  );
}
