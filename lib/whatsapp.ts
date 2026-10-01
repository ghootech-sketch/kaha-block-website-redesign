import { BUSINESS_FACTS } from "./business-facts";

export type WhatsAppTopic =
  | "products"
  | "production"
  | "installation"
  | "contact"
  | "jakarta"
  | "tangerang"
  | "bekasi"
  | "depok"
  | "bogor"
  | string;

export function getWhatsAppUrl(
  type: "primary" | "secondary" = "primary",
  topic?: WhatsAppTopic,
  lang: "id" | "en" = "id"
): string {
  const phoneE164 =
    type === "primary"
      ? BUSINESS_FACTS.contact.primaryPhoneE164.replace("+", "")
      : BUSINESS_FACTS.contact.secondaryPhoneE164.replace("+", "");

  let message = "";
  const isEn = lang === "en";

  // Determine regional capitalizations
  const getRegionName = (t: string) => {
    if (t === "jakarta") return "Jakarta";
    if (t === "tangerang") return "Tangerang";
    if (t === "bekasi") return "Bekasi";
    if (t === "depok") return "Depok";
    if (t === "bogor") return "Bogor";
    return t.charAt(0).toUpperCase() + t.slice(1);
  };

  if (isEn) {
    if (topic === "products") {
      message = "Hello Kaha Block, I would like to request a paving block price quote. Products of interest: ___. Estimated volume ± ___ sq m. Project location: ___.";
    } else if (topic === "installation") {
      message = "Hello Kaha Block, I would like to request a paving block installation cost estimate. Project location: ___. Area size ± ___ sq m. Planned application: ___.";
    } else if (topic === "production") {
      message = "Hello Kaha Block, I am interested in your hydraulic press paving blocks. Please provide product catalogs and specifications for K-250, K-300, and K-400 grades.";
    } else if (topic && ["jakarta", "tangerang", "bekasi", "depok", "bogor"].includes(topic.toLowerCase())) {
      const region = getRegionName(topic.toLowerCase());
      message = `Hello Kaha Block, I would like to request a paving block price estimate and installation cost for the ${region} area. Estimated area ± ___ sq m. Paving model: ___. Please provide concrete grade recommendations and the best price quote.`;
    } else if (topic === "contact") {
      message = "Hello Kaha Block, I would like to inquire about your paving block products and installation contractor services.";
    } else if (typeof topic === "string") {
      message = `Hello Kaha Block, I am inquiring about ${topic}.`;
    } else {
      message = "Hello Kaha Block, I would like to request more information about your paving block materials and installation services.";
    }
  } else {
    if (topic === "products") {
      message = "Halo Kaha Block, saya ingin meminta harga paving block. Produk yang diminati: ___. Estimasi kebutuhan ± ___ m². Lokasi proyek: ___.";
    } else if (topic === "installation") {
      message = "Halo Kaha Block, saya ingin meminta estimasi biaya pemasangan paving block. Lokasi proyek: ___. Luas area ± ___ m². Penggunaan area: ___.";
    } else if (topic === "production") {
      message = "Halo Kaha Block, saya tertarik dengan produk paving block press hidrolik. Mohon informasi katalog, spesifikasi mutu beton K-250, K-300, dan K-400 serta penawaran harga.";
    } else if (topic && ["jakarta", "tangerang", "bekasi", "depok", "bogor"].includes(topic.toLowerCase())) {
      const region = getRegionName(topic.toLowerCase());
      message = `Halo Kaha Block, saya ingin meminta estimasi harga paving block dan biaya pemasangan untuk area ${region}. Perkiraan luas ± ___ m². Jenis paving: ___. Mohon rekomendasi mutu dan penawaran harga resmi.`;
    } else if (topic === "contact") {
      message = "Halo Kaha Block, saya ingin bertanya tentang produk conblock dan jasa pasang Kaha Block.";
    } else if (typeof topic === "string") {
      message = `Halo Kaha Block, saya ingin bertanya tentang ${topic}.`;
    } else {
      message = "Halo Kaha Block, saya ingin meminta informasi lebih lanjut tentang produk paving block dan jasa pemasangan.";
    }
  }

  return `https://wa.me/${phoneE164}?text=${encodeURIComponent(message)}`;
}
