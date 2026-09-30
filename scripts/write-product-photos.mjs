// Prebuild: decodifica las fotos de producto (base64 en src/data/product-photos-b64/NN.b64)
// a public/products/NN.webp. Así el repo solo contiene texto.
import { mkdirSync, readFileSync, writeFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const srcDir = join(root, "src/data/product-photos-b64");
const outDir = join(root, "public/products");
mkdirSync(outDir, { recursive: true });

const files = readdirSync(srcDir).filter((f) => f.endsWith(".b64")).sort();
if (files.length === 0) {
  console.warn("write-product-photos: no photo payloads found, skipping");
  process.exit(0);
}
for (const f of files) {
  const b64 = readFileSync(join(srcDir, f), "utf8").replace(/\s+/g, "");
  const buf = Buffer.from(b64, "base64");
  const name = f.replace(/\.b64$/, ".webp");
  writeFileSync(join(outDir, name), buf);
  console.log(`wrote public/products/${name} (${buf.length} bytes)`);
}
