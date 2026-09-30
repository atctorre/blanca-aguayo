import Link from "next/link";
import { ADDRESS, AGENCY_URL, FACEBOOK, INSTAGRAM, INSTAGRAM_HANDLE, MAPS_LINK, PHONE_INTL, WA, wa } from "@/lib/site";
import { FacebookIcon, InstagramIcon } from "./Icons";
import Wordmark from "./Wordmark";

const links = [
  { href: "/catalogo", label: "Catálogo" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/visitanos", label: "Visítanos" },
  { href: "/envios", label: "Envíos" },
  { href: "/contacto", label: "Contacto" },
  { href: "/preguntas-frecuentes", label: "Preguntas frecuentes" },
  { href: "/joyeria-de-diseno-guadalajara", label: "Joyería en Providencia" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-linen">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Wordmark light size="lg" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-linen/80">
            Accesorios con estilo, hechos a mano en Guadalajara.
          </p>
          <p className="mt-4 text-[0.66rem] uppercase tracking-[0.24em] text-gold">Envíos a México, USA y Canadá</p>
        </div>
        <div className="text-sm leading-relaxed">
          <p className="mb-3 text-[0.66rem] uppercase tracking-[0.28em] text-gold">Tienda</p>
          <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-ivory">
            {ADDRESS.street}
            <br />
            {ADDRESS.colonia}
            <br />
            {ADDRESS.city}, {ADDRESS.stateShort}
          </a>
          <p className="mb-2 mt-5 text-[0.66rem] uppercase tracking-[0.28em] text-gold">WhatsApp</p>
          <a href={wa(WA.general)} target="_blank" rel="noopener noreferrer" className="hover:text-ivory">
            {PHONE_INTL}
          </a>
        </div>
        <div className="text-sm">
          <p className="mb-3 text-[0.66rem] uppercase tracking-[0.28em] text-gold">Navegación</p>
          <ul className="space-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-ivory">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-sm">
          <p className="mb-3 text-[0.66rem] uppercase tracking-[0.28em] text-gold">Síguenos</p>
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 py-1 hover:text-ivory">
            <InstagramIcon className="h-4 w-4" /> Instagram {INSTAGRAM_HANDLE}
          </a>
          <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 py-1 hover:text-ivory">
            <FacebookIcon className="h-4 w-4" /> Facebook
          </a>
        </div>
      </div>
      <div className="border-t border-linen/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 pb-24 text-xs text-linen/60 sm:flex-row sm:items-center sm:justify-between sm:pb-6">
          <p>© 2026 Blanca Aguayo Concept Store. Todos los derechos reservados.</p>
          <p className="text-linen/45">
            Sitio por{" "}
            <a href={AGENCY_URL} target="_blank" rel="noopener" className="hover:text-linen">
              AgendadoSV · soluciones digitales
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
