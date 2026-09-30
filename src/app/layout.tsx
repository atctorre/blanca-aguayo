import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ADDRESS, BRAND, FACEBOOK, INSTAGRAM, PHONE_E164, SITE_URL } from "@/lib/site";
import "./globals.css";

const sans = Jost({ variable: "--font-sans", subsets: ["latin"], display: "swap" });
const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Joyería de diseño en Guadalajara | Blanca Aguayo",
    template: "%s",
  },
  description:
    "Accesorios con estilo hechos a mano: chokers, piedras naturales, gold filled 14K, rodio y perlas. Tienda en Providencia. Envíos a MX, USA y Canadá.",
  keywords: [
    "joyería de diseño Guadalajara",
    "accesorios Guadalajara",
    "joyería Providencia Guadalajara",
    "concept store Providencia Guadalajara",
    "chokers Guadalajara",
    "collares de piedras naturales Guadalajara",
    "joyería gold filled 14K Guadalajara",
    "joyería en rodio Guadalajara",
    "joyería con perlas Guadalajara",
    "joyería hecha a mano México",
    "Blanca Aguayo",
  ],
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: BRAND,
    title: "Joyería de diseño en Guadalajara | Blanca Aguayo",
    description:
      "Accesorios con estilo hechos a mano en Guadalajara. Tienda en Providencia. Envíos a México, USA y Canadá.",
    images: [{ url: "/products/02.webp", width: 400, height: 400, alt: BRAND }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#fbf8f3" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "JewelryStore",
  name: BRAND,
  url: SITE_URL,
  telephone: PHONE_E164,
  image: `${SITE_URL}/products/02.webp`,
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS.street,
    addressLocality: `${ADDRESS.colonia}, ${ADDRESS.city}`,
    addressRegion: ADDRESS.state,
    addressCountry: "MX",
  },
  sameAs: [INSTAGRAM, FACEBOOK],
  areaServed: [
    { "@type": "Country", name: "México" },
    { "@type": "Country", name: "Estados Unidos" },
    { "@type": "Country", name: "Canadá" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-MX" className={`${sans.variable} ${serif.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-ivory font-sans text-ink">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
