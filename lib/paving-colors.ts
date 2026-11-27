import type { Locale } from "./dictionary";

export const PAVING_COLORS = [
  { id: "grey", idLabel: "Abu-abu", enLabel: "Grey", hex: "#93918b" },
  { id: "red", idLabel: "Merah", enLabel: "Red", hex: "#a84436" },
  { id: "black", idLabel: "Hitam", enLabel: "Black", hex: "#353535" },
  { id: "yellow", idLabel: "Kuning", enLabel: "Yellow", hex: "#c9a641" },
] as const;

export type PavingColor = (typeof PAVING_COLORS)[number]["id"];
export interface ColorProduct {
  slug: string;
  name: string;
  image: string;
  colors: PavingColor[];
  thickness: string;
}

export function colorLabel(color: PavingColor, lang: Locale) {
  const item = PAVING_COLORS.find((entry) => entry.id === color);
  return item ? (lang === "id" ? item.idLabel : item.enLabel) : color;
}

