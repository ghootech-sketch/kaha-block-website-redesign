import { getAllProducts } from "./products-data";
import { PAVING_COLORS, type ColorProduct } from "./paving-colors";
import type { Locale } from "./dictionary";

// Read the existing catalog instead of inventing extra color availability.
export function getColorProducts(lang: Locale): ColorProduct[] {
  const ids = ["truepave", "half-tahu", "paving-hexagonal", "ubin", "topi-uskup"];
  return getAllProducts(lang).filter((p) => ids.includes(p.slug)).map((p) => {
    const colorSpec = p.specs.find((s) => s.label === (lang === "id" ? "Pilihan Warna" : "Color Options"));
    const allowed = colorSpec?.value.split(",").map((v) => v.trim().toLowerCase()) || [];
    return {
      slug: p.slug,
      name: p.name,
      image: p.image,
      colors: PAVING_COLORS.filter((c) => allowed.includes((lang === "id" ? c.idLabel : c.enLabel).toLowerCase())).map((c) => c.id),
      thickness: p.specs.find((s) => /tebal|thickness/i.test(s.label))?.value || "",
    };
  });
}
