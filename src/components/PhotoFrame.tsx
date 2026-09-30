import Image from "next/image";
import type { Photo } from "@/data/photos";

/**
 * Muestra una foto real sin estirarla: las fotos lowRes nunca se muestran más anchas que su tamaño real.
 */
export default function PhotoFrame({
  photo,
  className = "",
  priority = false,
  sizes = "(max-width: 640px) 100vw, 400px",
  rounded = "rounded-sm",
}: {
  photo: Photo;
  className?: string;
  priority?: boolean;
  sizes?: string;
  rounded?: string;
}) {
  const maxW = photo.width;
  return (
    <figure className={`mx-auto w-full ${className}`} style={{ maxWidth: maxW }}>
      <div className={`relative overflow-hidden bg-sand ${rounded}`} style={{ aspectRatio: `${photo.width} / ${photo.height}` }}>
        <Image src={photo.src} alt={photo.alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </div>
    </figure>
  );
}
