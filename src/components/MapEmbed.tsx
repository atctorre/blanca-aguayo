import { ADDRESS, MAPS_EMBED, MAPS_LINK } from "@/lib/site";

export default function MapEmbed({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden border border-linen bg-sand ${className}`}>
      <p className="absolute inset-0 flex items-center justify-center p-6 text-center text-sm text-taupe">
        Estamos en {ADDRESS.full}{" "}
        <a href={MAPS_LINK} className="ml-1 underline" target="_blank" rel="noopener noreferrer">
          Abrir en Google Maps
        </a>
      </p>
      <iframe
        title={`Mapa: ${ADDRESS.full}`}
        src={MAPS_EMBED}
        className="relative h-full min-h-[320px] w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
