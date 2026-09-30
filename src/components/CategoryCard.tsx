import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/data/catalog";
import { COVER, PHOTOS } from "@/data/photos";
import { wa } from "@/lib/site";
import TypeCard from "./TypeCard";
import { PriceNote } from "./ui";

export default function CategoryCard({ cat, showCta = true }: { cat: Category; showCta?: boolean }) {
  const coverId = COVER[cat.slug];
  const photo = coverId ? PHOTOS[coverId] : null;
  return (
    <article className="group flex flex-col bg-ivory">
      <Link href={`/catalogo/${cat.slug}`} className="block overflow-hidden" aria-label={`Ver ${cat.name}`}>
        {photo ? (
          <div className="relative aspect-square w-full overflow-hidden bg-sand">
            <Image
              src={photo.src}
              alt={`${cat.name}: joyería de diseño Blanca Aguayo Concept Store, Guadalajara`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 360px"
              className="object-cover transition duration-700 group-hover:scale-[1.03]"
            />
          </div>
        ) : (
          <TypeCard label={cat.typeLabel} note={cat.typeNote} tone={cat.slug === "cuarzos" ? "quartz" : "gold"} />
        )}
      </Link>
      <div className="flex flex-1 flex-col pt-4">
        <h3 className="font-serif text-2xl leading-tight text-ink">
          <Link href={`/catalogo/${cat.slug}`} className="hover:text-gold-deep">
            {cat.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm leading-snug text-taupe">{cat.card}</p>
        <PriceNote className="mt-2" />
        {showCta && (
          <a
            href={wa(cat.waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex w-fit items-center gap-2 border-b border-turquoise pb-0.5 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-turquoise hover:text-lapis"
          >
            Lo quiero
          </a>
        )}
      </div>
    </article>
  );
}
