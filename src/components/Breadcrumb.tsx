import Link from "next/link";

export default function Breadcrumb({ items }: { items: { href?: string; label: string }[] }) {
  return (
    <nav aria-label="Ruta" className="text-[0.7rem] uppercase tracking-[0.2em] text-taupe">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((it, i) => (
          <li key={it.label} className="flex items-center gap-2">
            {it.href ? (
              <Link href={it.href} className="hover:text-gold-deep">
                {it.label}
              </Link>
            ) : (
              <span className="text-ink">{it.label}</span>
            )}
            {i < items.length - 1 && <span className="text-gold">›</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
