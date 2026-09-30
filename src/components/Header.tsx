"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CATEGORIES } from "@/data/catalog";
import { NAV, WA, wa } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";
import Wordmark from "./Wordmark";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-linen/80 bg-ivory/95 backdrop-blur">
      <div className="bg-ink px-4 py-1.5 text-center text-[0.62rem] uppercase tracking-[0.26em] text-linen">
        Accesorios con estilo · Envíos a México, USA y Canadá
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5">
        <Wordmark />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {NAV.map((item) =>
            item.href === "/catalogo" ? (
              <div key={item.href} className="group relative">
                <Link href="/catalogo" className="py-3 text-[0.74rem] uppercase tracking-[0.18em] text-ink hover:text-gold-deep">
                  Catálogo ▾
                </Link>
                <div className="invisible absolute left-1/2 top-full w-60 -translate-x-1/2 border border-linen bg-ivory p-3 opacity-0 shadow-xl shadow-ink/5 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  {CATEGORIES.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/catalogo/${c.slug}`}
                      className="block px-3 py-2 font-serif text-lg text-ink hover:bg-sand hover:text-gold-deep"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[0.74rem] uppercase tracking-[0.18em] hover:text-gold-deep ${
                  pathname === item.href ? "text-gold-deep" : "text-ink"
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={wa(WA.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-turquoise px-3.5 py-2.5 text-[0.66rem] font-medium uppercase tracking-[0.14em] text-white hover:bg-[#347a77] sm:px-5"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Escríbenos por WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            <span className="relative block h-3 w-6">
              <span className={`absolute left-0 h-px w-6 bg-ink transition ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 h-px w-6 bg-ink transition ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </div>
      {open && (
        <nav id="menu-movil" className="max-h-[80vh] overflow-y-auto border-t border-linen bg-ivory px-6 pb-8 pt-4 lg:hidden" aria-label="Menú móvil" onClick={(e) => { if ((e.target as HTMLElement).closest("a")) setOpen(false); }}>
          {NAV.map((item) => (
            <div key={item.href}>
              <Link href={item.href} className="block border-b border-linen/70 py-3.5 font-serif text-2xl text-ink">
                {item.label}
              </Link>
              {item.href === "/catalogo" && (
                <div className="grid grid-cols-2 gap-x-4 border-b border-linen/70 py-3">
                  {CATEGORIES.map((c) => (
                    <Link key={c.slug} href={`/catalogo/${c.slug}`} className="py-1.5 text-sm text-taupe">
                      {c.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/preguntas-frecuentes" className="block py-3.5 font-serif text-2xl text-ink">
            Preguntas frecuentes
          </Link>
        </nav>
      )}
    </header>
  );
}
