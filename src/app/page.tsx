import Image from "next/image";
import CategoryCard from "@/components/CategoryCard";
import FaqList from "@/components/FaqList";
import { HandIcon, HeartIcon, InstagramIcon, PinIcon, PlaneIcon, WhatsAppIcon } from "@/components/Icons";
import MapEmbed from "@/components/MapEmbed";
import PhotoFrame from "@/components/PhotoFrame";
import { Btn, Eyebrow, Ornament } from "@/components/ui";
import { CATEGORIES, FAQS } from "@/data/catalog";
import { HERO_PHOTO, HERO_SECONDARY, PHOTOS, photosFor } from "@/data/photos";
import { ADDRESS, INSTAGRAM, INSTAGRAM_HANDLE, MAPS_LINK, WA, wa } from "@/lib/site";

const CHOKERS_WA =
  "Hola Blanca Aguayo, me interesan sus chokers. ¿Qué modelos tienen disponibles y cuál es su precio?";

const trust = [
  { icon: HandIcon, text: "Diseños hechos a mano" },
  { icon: PinIcon, text: "Tienda física en Providencia, Guadalajara" },
  { icon: PlaneIcon, text: "Envíos a México, USA y Canadá" },
  { icon: WhatsAppIcon, text: "Atención directa por WhatsApp" },
  { icon: HeartIcon, text: "Más de 80 mil personas nos siguen en Instagram" },
];

export default function Home() {
  const hero = PHOTOS[HERO_PHOTO];
  const heroBack = PHOTOS[HERO_SECONDARY];
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sand/70 to-ivory">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-10 sm:pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:pb-24">
          <div className="text-center lg:text-left">
            <Eyebrow className="leading-relaxed">
              Concept store en Providencia, Guadalajara · Envíos a México, USA y Canadá
            </Eyebrow>
            <h1 className="mt-5 font-serif text-[2.7rem] font-light leading-[1.02] text-ink sm:text-6xl lg:text-[4.4rem]">
              Accesorios con estilo, <em className="font-normal text-gold-deep">hechos a mano</em> en Guadalajara
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-[1.02rem] leading-relaxed text-taupe lg:mx-0">
              Chokers, piedras naturales, gold filled 14K, rodio y perlas para cada plan, cada estilo y cada ocasión.
              Visítanos en Providencia o pide tu pieza por WhatsApp.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Btn href="/catalogo" className="w-full sm:w-auto">Ver catálogo</Btn>
              <Btn href={wa(WA.general)} variant="wa" className="w-full sm:w-auto">
                Escríbenos por WhatsApp
              </Btn>
            </div>
            <div className="mt-4">
              <Btn href="/visitanos" variant="ghost">Cómo llegar</Btn>
            </div>
          </div>
          <div className="relative mx-auto h-[420px] w-full max-w-[400px] sm:h-[470px]">
            <div className="absolute right-0 top-0 w-[62%] overflow-hidden rounded-sm shadow-lg shadow-ink/10">
              <div className="relative aspect-square">
                <Image src={heroBack.src} alt={heroBack.alt} fill sizes="260px" className="object-cover" priority />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-[64%] max-w-[290px] rounded-t-full border-[6px] border-ivory bg-ivory shadow-2xl shadow-ink/15">
              <div className="relative overflow-hidden rounded-t-full" style={{ aspectRatio: `${hero.width} / ${hero.height}` }}>
                <Image src={hero.src} alt={hero.alt} fill sizes="290px" className="object-cover" priority />
              </div>
            </div>
            <p className="absolute bottom-6 right-0 max-w-[34%] text-right font-serif text-lg italic leading-snug text-gold-deep">
              accesorios con estilo
            </p>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="border-y border-linen bg-ivory">
        <ul className="mx-auto grid max-w-6xl grid-cols-1 gap-y-4 px-6 py-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {trust.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-3 text-sm text-ink lg:flex-col lg:text-center">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold-deep">
                <Icon className="h-[18px] w-[18px]" />
              </span>
              {text}
            </li>
          ))}
        </ul>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Catálogo</Eyebrow>
          <h2 className="mt-3 font-serif text-4xl font-light sm:text-5xl">Encuentra tu accesorio</h2>
          <Ornament className="mt-5 justify-center" />
          <p className="mt-5 leading-relaxed text-taupe">
            Del choker que usas todos los días al collar de piedras naturales que guardas para una boda: elige por
            categoría y pregúntanos por la pieza que te enamoró.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-3">
          {CATEGORIES.map((c) => (
            <CategoryCard key={c.slug} cat={c} showCta={false} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Btn href="/catalogo" variant="outline">Ver todo el catálogo</Btn>
        </div>
      </section>

      {/* CHOKERS */}
      <section className="bg-sand/70">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-3">
            {photosFor("chokers").map((p) => (
              <PhotoFrame key={p.id} photo={p} sizes="(max-width: 768px) 50vw, 300px" />
            ))}
          </div>
          <div>
            <Eyebrow>Chokers</Eyebrow>
            <h2 className="mt-3 font-serif text-4xl font-light sm:text-5xl">El poder de los chokers</h2>
            <p className="mt-5 max-w-md leading-relaxed text-taupe">
              Una pieza que cambia todo el look. Tenemos chokers para llevar solos o combinar con tus collares favoritos.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Btn href="/catalogo/chokers">Ver chokers</Btn>
              <Btn href={wa(CHOKERS_WA)} variant="outline">Preguntar por un choker</Btn>
            </div>
          </div>
        </div>
      </section>

      {/* PIEDRAS */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-2">
        <div className="md:order-2">
          <div className="grid grid-cols-2 gap-3">
            <PhotoFrame photo={PHOTOS["02"]} sizes="(max-width: 768px) 50vw, 300px" />
            <PhotoFrame photo={PHOTOS["05"]} sizes="(max-width: 768px) 50vw, 300px" />
          </div>
        </div>
        <div>
          <Eyebrow>Piedras naturales</Eyebrow>
          <h2 className="mt-3 font-serif text-4xl font-light sm:text-5xl">Color que viene de la tierra</h2>
          <p className="mt-5 max-w-md leading-relaxed text-taupe">
            Turquesa, lapislázuli, amatista, ágata y coral. Collares con piedras naturales para mezclar colores y darle
            personalidad a cualquier outfit.
          </p>
          <div className="mt-6 flex gap-2" aria-hidden>
            {["#40B5AD", "#26477A", "#6E4A86", "#2F7D5B", "#C0392B"].map((c) => (
              <span key={c} className="h-4 w-4 rounded-full ring-2 ring-ivory" style={{ background: c }} />
            ))}
          </div>
          <div className="mt-8">
            <Btn href="/catalogo/piedras-naturales">Ver piedras naturales</Btn>
          </div>
        </div>
      </section>

      {/* DETALLES */}
      <section className="bg-ink text-ivory">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center">
          <Eyebrow className="!text-gold">Detalles que cuentan una historia</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl font-light italic sm:text-5xl">Flores, conchas, alas y corazones</h2>
          <Ornament className="mt-6 justify-center" />
          <p className="mt-6 leading-relaxed text-linen/85">
            En nuestros diseños encuentras flores, animales, conchas de mar, cruces, alas y corazones, en gold filled
            14K, rodio, perlas y cuarzos. Cada pieza tiene su propio carácter.
          </p>
        </div>
      </section>

      {/* OCASIÓN */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Para cada ocasión</Eyebrow>
          <h2 className="mt-3 font-serif text-4xl font-light sm:text-5xl">De lo más casual a lo más especial</h2>
          <p className="mt-5 leading-relaxed text-taupe">
            Para todos los días, una comida, una cena, una boda, un evento o ese regalo que quieres que se sienta
            diferente. El accesorio correcto lo es todo.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 items-end gap-3 sm:grid-cols-3 sm:gap-5">
          {photosFor("aretes").map((p, i) => (
            <div key={p.id} className={i === 2 ? "col-span-2 sm:col-span-1" : ""}>
              <PhotoFrame photo={p} sizes="(max-width: 640px) 50vw, 360px" />
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Btn href={wa(WA.gift)} variant="wa">Buscar un regalo</Btn>
        </div>
      </section>

      {/* TIENDA */}
      <section className="bg-sand/70">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center">
          <div>
            <Eyebrow>La tienda</Eyebrow>
            <h2 className="mt-3 font-serif text-4xl font-light sm:text-5xl">Visítanos en Providencia</h2>
            <p className="mt-5 max-w-md leading-relaxed text-taupe">
              Ven a conocer las piezas en persona en nuestro concept store de {ADDRESS.full.replace(", Jal.", "")}.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Btn href={MAPS_LINK}>Ver en el mapa</Btn>
              <Btn href="/visitanos" variant="outline">Cómo llegar</Btn>
            </div>
          </div>
          <MapEmbed className="h-[340px]" />
        </div>
      </section>

      {/* ENVÍOS */}
      <section className="mx-auto max-w-4xl px-5 py-20 text-center">
        <Eyebrow>Envíos MX · USA · CA</Eyebrow>
        <h2 className="mt-3 font-serif text-4xl font-light sm:text-5xl">¿No estás en Guadalajara?</h2>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-taupe">
          Te lo enviamos. Hacemos envíos a toda la República Mexicana, Estados Unidos y Canadá. Escríbenos y cotizamos
          tu envío.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Btn href={wa(WA.ship)} variant="wa">Cotizar mi envío</Btn>
          <Btn href="/envios" variant="outline">Cómo funcionan los envíos</Btn>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="border-t border-linen bg-ivory">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="text-center">
            <Eyebrow>Instagram</Eyebrow>
            <h2 className="mt-3 font-serif text-[2rem] font-light sm:text-5xl">Síguenos en {INSTAGRAM_HANDLE}</h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-taupe">
              Casi todos los días compartimos piezas, combinaciones y lo que vas a encontrar en la tienda.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-2 sm:grid-cols-6">
            {["06", "03", "01", "05", "07", "04"].map((id) => (
              <a key={id} href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="relative block aspect-square overflow-hidden bg-sand">
                <Image src={PHOTOS[id].src} alt={PHOTOS[id].alt} fill sizes="(max-width: 640px) 33vw, 180px" className="object-cover transition hover:opacity-85" />
              </a>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-6 py-3 text-[0.8rem] font-medium uppercase tracking-[0.14em] text-ivory hover:bg-gold-deep"
            >
              <InstagramIcon className="h-4 w-4" /> Ver Instagram
            </a>
            <Btn href={wa(WA.instagram)} variant="ghost" className="text-center">¿Viste una pieza en Instagram? Pregúntanos</Btn>
          </div>
        </div>
      </section>

      {/* FAQ (5) */}
      <section className="bg-sand/60">
        <div className="mx-auto max-w-3xl px-5 py-20">
          <div className="text-center">
            <Eyebrow>Preguntas frecuentes</Eyebrow>
            <h2 className="mt-3 font-serif text-4xl font-light sm:text-5xl">Lo que más nos preguntan</h2>
          </div>
          <div className="mt-10">
            <FaqList items={FAQS.slice(0, 5)} />
          </div>
          <div className="mt-8 text-center">
            <Btn href="/preguntas-frecuentes" variant="ghost">Ver todas las preguntas</Btn>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-ink text-ivory">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center">
          <h2 className="font-serif text-4xl font-light sm:text-5xl">¿Ya viste la pieza que quieres?</h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-linen/85">
            Mándanos foto o el nombre de la categoría y te respondemos por WhatsApp con disponibilidad y precio.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Btn href={wa(WA.general)} variant="wa">Escríbenos por WhatsApp</Btn>
            <Btn href="/catalogo" variant="light">Ver catálogo</Btn>
          </div>
        </div>
      </section>
    </>
  );
}
