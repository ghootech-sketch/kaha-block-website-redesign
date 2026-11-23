// Validate visible production HTML, not JSON-LD or bundled source strings.
import assert from "node:assert/strict";
const base = (process.env.TEST_BASE_URL || process.argv[2] || "http://127.0.0.1:3000").replace(/\/+$/, "");
const pages = {
  "/id/harga-paving-block": [
    "harga konblok per meter",
    "harga paving block per meter",
    "harga paving block per meter persegi",
    "harga paving block 8 cm per m2",
    "harga paving block k 300",
    "harga paving block k300 per m2"
  ],
  "/id/products": [
    "jual paving block terdekat",
    "paving block terdekat"
  ],
  "/id/products/paving-hexagonal": [
    "harga paving block segi 6"
  ],
  "/id/jasa-pemasangan-paving-block": [
    "jasa pasang paving block",
    "jasa pasang paving block terdekat",
    "harga pasang paving block per m2",
    "borongan pasang paving per meter",
    "abu batu paving",
    "driveway paving"
  ],
  "/id/area-layanan/tangerang": [
    "pabrik paving block terdekat"
  ],
  "/id/area-layanan/bekasi": [
    "pabrik paving block bekasi"
  ],
  "/id/area-layanan/depok": [
    "conblock depok"
  ],
  "/id/area-layanan/bogor": [
    "paving block bogor"
  ]
};
for (const [path, terms] of Object.entries(pages)) {
  const response = await fetch(base + path);
  assert.equal(response.status, 200, `${path}: HTTP 200`);
  const html = await response.text();
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${path}: one H1`);
  const text = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ").toLowerCase();
  for (const term of terms) assert.ok(text.includes(term), `${path}: visible ${term}`);
  assert.ok(/href="https:\/\/wa\.me\/628558893030/.test(html), `${path}: primary WhatsApp link`);
  console.log(`[INTENT-CHECK] PASS ${path}: ${terms.length} contextual terms, one H1, primary WhatsApp`);
}
