import Link from "next/link";
import { WhatsAppIcon } from "./Icons";

type BtnProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "wa" | "ghost" | "light";
  className?: string;
};

const styles: Record<NonNullable<BtnProps["variant"]>, string> = {
  primary: "bg-ink text-ivory hover:bg-gold-deep",
  outline: "border border-ink/25 text-ink hover:border-gold hover:text-gold-deep",
  wa: "bg-turquoise text-white hover:bg-[#347a77]",
  ghost: "text-ink underline decoration-gold/60 underline-offset-4 hover:text-gold-deep px-0",
  light: "bg-ivory text-ink hover:bg-sand",
};

export function Btn({ href, children, variant = "primary", className = "" }: BtnProps) {
  const external = href.startsWith("http");
  const cls = `inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-[0.8rem] font-medium uppercase tracking-[0.14em] transition ${styles[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {variant === "wa" && <WhatsAppIcon className="h-4 w-4" />}
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-[0.68rem] font-medium uppercase tracking-[0.32em] text-gold-deep ${className}`}>{children}</p>
  );
}

export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 text-gold ${className}`} aria-hidden>
      <span className="h-px w-10 bg-gold/50" />
      <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 fill-current">
        <path d="M6 0 7.4 4.6 12 6 7.4 7.4 6 12 4.6 7.4 0 6l4.6-1.4Z" />
      </svg>
      <span className="h-px w-10 bg-gold/50" />
    </div>
  );
}

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-gold/40 bg-ivory px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-gold-deep">
      {children}
    </span>
  );
}

export function PriceNote({ className = "" }: { className?: string }) {
  return <p className={`text-xs italic text-taupe ${className}`}>Consúltalo por WhatsApp</p>;
}

export function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="border-b border-linen/70 bg-sand/60">
      <div className="mx-auto max-w-5xl px-5 py-14 text-center sm:py-20">
        {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
        <h1 className="font-serif text-[2.6rem] font-light leading-[1.05] text-ink sm:text-6xl">{title}</h1>
        <Ornament className="mt-6 justify-center" />
        {children && <div className="mx-auto mt-6 max-w-2xl text-[1.02rem] leading-relaxed text-taupe">{children}</div>}
      </div>
    </section>
  );
}
