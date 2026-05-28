import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const dir = path.join(process.cwd(), "public", "images");
const files = fs.readdirSync(dir);
const src = files.find((f) => f.includes("PJJ negativo"));

if (!src) {
  console.error("Arquivo 'Símbolo PJJ negativo.png' não encontrado em public/images");
  process.exit(1);
}

const out = path.join(dir, "logo-pjj-trimmed.png");

await sharp(path.join(dir, src))
  .trim({ threshold: 10 })
  .png()
  .toFile(out);

console.log(`Logo recortado: ${out}`);
