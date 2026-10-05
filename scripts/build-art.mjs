#!/usr/bin/env node
/*
 * Exports every illustration in art/pieces.mjs to public/art/ as
 * .svg (used on the site), plus .png and .webp at 1x and 2x for sharing.
 */
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import pieces from "../art/pieces.mjs";

const OUT = path.resolve("public/art");
await fs.mkdir(OUT, { recursive: true });

for (const [name, draw] of Object.entries(pieces)) {
  const svg = draw();
  await fs.writeFile(path.join(OUT, `${name}.svg`), svg);
  for (const scale of [1, 2]) {
    const suffix = scale === 1 ? "" : "@2x";
    const img = sharp(Buffer.from(svg), { density: 72 * scale });
    await img.clone().png().toFile(path.join(OUT, `${name}${suffix}.png`));
    await img.clone().webp({ quality: 90 }).toFile(path.join(OUT, `${name}${suffix}.webp`));
  }
}
console.log(`art: exported ${Object.keys(pieces).length} illustrations → public/art/`);
