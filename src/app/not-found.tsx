import { Btn, Ornament } from "@/components/ui";
import { WA, wa } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-5 py-24 text-center">
      <p className="font-serif text-7xl italic text-gold">404</p>
      <h1 className="mt-4 font-serif text-4xl font-light sm:text-5xl">Esta página se perdió entre los accesorios</h1>
      <Ornament className="mt-6 justify-center" />
      <p className="mt-6 text-taupe">No encontramos lo que buscabas, pero tu próxima pieza favorita sí está aquí.</p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Btn href="/">Volver al inicio</Btn>
        <Btn href="/catalogo" variant="outline">Ver catálogo</Btn>
        <Btn href={wa(WA.notFound)} variant="wa">Escríbenos por WhatsApp</Btn>
      </div>
    </section>
  );
}
