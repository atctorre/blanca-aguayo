# Blanca Aguayo Concept Store

Sitio catálogo — joyería y accesorios de diseño, Providencia, Guadalajara.
Stack: Next.js App Router + TypeScript + Tailwind CSS v4 (Vercel).

- Copy: `redaccion-web/09-blanca-aguayo.md`
- Fotos: `src/data/photos.ts` (mapa único de fotos por categoría). Las imágenes viven como base64 en
  `src/data/product-photos-b64/NN.b64`; `npm run build` las escribe en `public/products/NN.webp`.
- Contacto / WhatsApp: `src/lib/site.ts`. Sin precios, horario ni formas de pago.

```bash
npm run dev
npm run build
```
