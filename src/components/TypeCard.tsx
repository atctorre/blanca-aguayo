/** Tarjeta tipográfica elegante para categorías sin foto real (Gold filled 14K, Cuarzos). */
export default function TypeCard({
  label,
  note,
  tone = "gold",
  className = "",
}: {
  label: string;
  note: string;
  tone?: "gold" | "quartz";
  className?: string;
}) {
  const gold = tone === "gold";
  return (
    <div
      className={`relative flex aspect-square w-full flex-col items-center justify-center overflow-hidden ${
        gold ? "bg-[#efe3cc]" : "bg-[#f1ebef]"
      } ${className}`}
      aria-hidden
    >
      <div className={`absolute inset-3 border ${gold ? "border-gold/45" : "border-[#b9a3b0]/60"}`} />
      <div className={`absolute inset-5 border ${gold ? "border-gold/20" : "border-[#b9a3b0]/30"}`} />
      <span className={`text-[0.6rem] font-medium uppercase tracking-[0.42em] ${gold ? "text-gold-deep" : "text-[#7d6272]"}`}>
        {note}
      </span>
      <span
        className={`mt-3 font-serif ${label.length < 5 ? "text-7xl" : "text-5xl"} font-light italic leading-none ${
          gold ? "text-gold-deep" : "text-[#5e4556]"
        }`}
      >
        {label}
      </span>
      <svg viewBox="0 0 40 12" className={`mt-4 h-3 w-10 ${gold ? "text-gold" : "text-[#9c8190]"}`} fill="none" stroke="currentColor">
        <path d="M0 6h14M26 6h14" strokeWidth="0.8" />
        <path d="M20 1l3 5-3 5-3-5z" strokeWidth="0.9" />
      </svg>
      <span className={`mt-3 text-[0.6rem] uppercase tracking-[0.3em] ${gold ? "text-gold-deep/80" : "text-[#7d6272]/80"}`}>
        Blanca Aguayo
      </span>
    </div>
  );
}
