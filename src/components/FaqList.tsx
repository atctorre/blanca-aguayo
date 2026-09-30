export default function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-linen border-y border-linen">
      {items.map((f) => (
        <details key={f.q} className="group py-5">
          <summary className="flex cursor-pointer items-start justify-between gap-6 font-serif text-xl leading-snug text-ink">
            {f.q}
            <span className="mt-1 text-gold transition group-open:rotate-45" aria-hidden>
              +
            </span>
          </summary>
          <p className="mt-3 max-w-2xl text-[0.97rem] leading-relaxed text-taupe">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
