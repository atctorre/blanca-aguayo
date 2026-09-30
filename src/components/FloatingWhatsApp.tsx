import { WA, wa } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";

export default function FloatingWhatsApp() {
  return (
    <a
      href={wa(WA.floating)}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3"
      aria-label="WhatsApp: ¿Te ayudamos a encontrar tu pieza?"
      title="¿Te ayudamos a encontrar tu pieza?"
    >
      <span className="hidden rounded-full bg-ink/90 px-3 py-1.5 text-xs text-ivory opacity-0 shadow-lg transition group-hover:opacity-100 sm:block">
        ¿Te ayudamos a encontrar tu pieza?
      </span>
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-ink/20 transition hover:scale-105">
        <WhatsAppIcon className="h-7 w-7" />
      </span>
    </a>
  );
}
