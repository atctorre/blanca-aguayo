import type { Metadata } from "next";
import { FacebookIcon, InstagramIcon, PinIcon, WhatsAppIcon } from "@/components/Icons";
import { PageHeader } from "@/components/ui";
import { ADDRESS, FACEBOOK, INSTAGRAM, INSTAGRAM_HANDLE, MAPS_LINK, PHONE_DISPLAY, PHONE_INTL, WA, wa } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto | Blanca Aguayo Concept Store",
  description:
    "WhatsApp 33 1216 2923 · Av. Rubén Darío 1449, Providencia, Guadalajara · Instagram @blancaaguayoshrm.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  const items = [
    {
      icon: WhatsAppIcon,
      label: "WhatsApp",
      value: `${PHONE_DISPLAY} (${PHONE_INTL})`,
      href: wa(WA.contact),
      cta: "Escríbenos por WhatsApp",
    },
    { icon: PinIcon, label: "Tienda", value: ADDRESS.full, href: MAPS_LINK, cta: "Ver en el mapa" },
    { icon: InstagramIcon, label: "Instagram", value: INSTAGRAM_HANDLE, href: INSTAGRAM, cta: "Ver Instagram" },
    { icon: FacebookIcon, label: "Facebook", value: "Blanca Aguayo Concept Store", href: FACEBOOK, cta: "Ver Facebook" },
  ];
  return (
    <>
      <PageHeader eyebrow="Hablemos" title="Contacto">
        <p>¿Te gustó una pieza, buscas un regalo o quieres saber si hacemos envíos a tu ciudad? Escríbenos.</p>
      </PageHeader>
      <section className="mx-auto max-w-4xl px-5 py-16">
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map(({ icon: Icon, label, value, href, cta }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col border border-linen bg-ivory p-7 transition hover:border-gold"
            >
              <Icon className="h-6 w-6 text-gold-deep" />
              <p className="mt-4 text-[0.66rem] uppercase tracking-[0.28em] text-gold-deep">{label}</p>
              <p className="mt-2 font-serif text-2xl leading-snug text-ink">{value}</p>
              <span className="mt-4 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-turquoise group-hover:text-lapis">
                {cta} →
              </span>
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-taupe">Si WhatsApp no se abrió, escríbenos al {PHONE_INTL}.</p>
      </section>
    </>
  );
}
