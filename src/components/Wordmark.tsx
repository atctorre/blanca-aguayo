import Link from "next/link";

export default function Wordmark({ light = false, size = "md" }: { light?: boolean; size?: "md" | "lg" }) {
  const big = size === "lg";
  return (
    <Link href="/" aria-label="Blanca Aguayo Concept Store, inicio" className="group inline-flex flex-col items-start leading-none">
      <span
        className={`font-serif ${big ? "text-4xl" : "text-[1.55rem] sm:text-[1.75rem]"} font-medium tracking-[0.01em] ${
          light ? "text-ivory" : "text-ink"
        }`}
      >
        Blanca Aguayo
      </span>
      <span
        className={`mt-1 flex items-center gap-2 ${big ? "text-[0.7rem]" : "text-[0.58rem]"} font-medium uppercase tracking-[0.42em] ${
          light ? "text-linen" : "text-gold-deep"
        }`}
      >
        <span className={`h-px w-4 ${light ? "bg-linen/70" : "bg-gold/70"}`} aria-hidden />
        Concept Store
      </span>
    </Link>
  );
}
