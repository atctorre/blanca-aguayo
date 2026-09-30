import type { Metadata } from "next";
import { Btn, PageHeader } from "@/components/ui";
import { WA, wa } from "@/lib/site";

export const metadata: Metadata = {
  title: "Envíos a México, USA y Canadá | Blanca Aguayo",
  description:
    "Enviamos nuestra joyería de diseño desde Guadalajara a México, Estados Unidos y Canadá. Cotiza tu envío por WhatsApp.",
  alternates: { canonical: "/envios" },
};

const steps = [
  { t: "Elige", d: "tu pieza en el catálogo o en nuestro Instagram." },
  { t: "Escríbenos", d: "por WhatsApp con la pieza y tu ciudad y país." },
  { t: "Te confirmamos", d: "disponibilidad, precio y costo de envío." },
  { t: "Recibe", d: "tu pedido en casa." },
];

const destinos = [
  { n: "México", d: "Envíos a toda la República.", cta: "Cotizar envío en México", msg: WA.shipMX },
  { n: "Estados Unidos", d: "Envíos desde Guadalajara.", cta: "Cotizar envío a USA", msg: WA.shipUS },
  { n: "Canadá", d: "Envíos desde Guadalajara.", cta: "Cotizar envío a Canadá", msg: WA.shipCA },
];

export default function EnviosPage() {
  return (
    <>
      <PageHeader eyebrow="Envíos MX · USA · CA" title="Envíos a México, USA y Canadá">
        <p>
          Estés donde estés, tu próximo accesorio puede llegar a tu puerta. Enviamos desde Guadalajara a toda la
          República Mexicana, Estados Unidos y Canadá.
        </p>
      </PageHeader>
      <section className="mx-auto max-w-5xl px-5 py-16">
        <h2 className="text-center font-serif text-4xl font-light">Cómo pedir con envío</h2>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.t} className="border-t border-gold/50 pt-5">
              <span className="font-serif text-4xl italic text-gold">{i + 1}</span>
              <p className="mt-2 leading-relaxed text-taupe">
                <strong className="font-medium text-ink">{s.t}</strong> {s.d}
              </p>
            </li>
          ))}
        </ol>
      </section>
      <section className="bg-sand/70">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <div className="grid gap-5 md:grid-cols-3">
            {destinos.map((d) => (
              <article key={d.n} className="flex flex-col items-center border border-linen bg-ivory px-6 py-10 text-center">
                <h3 className="font-serif text-3xl">{d.n}</h3>
                <p className="mt-2 text-sm text-taupe">{d.d}</p>
                <Btn href={wa(d.msg)} variant="wa" className="mt-6 !px-5 !text-[0.7rem]">
                  {d.cta}
                </Btn>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-xl text-center text-sm leading-relaxed text-taupe">
            El costo y el tiempo de envío dependen del destino. Te los confirmamos por WhatsApp antes de cerrar tu pedido.
          </p>
        </div>
      </section>
    </>
  );
}
