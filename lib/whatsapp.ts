import { BUSINESS_FACTS } from "./business-facts";
import {
  WEBSITE_SOURCE_MARKER,
  WEBSITE_SOURCE_MARKER_ID,
  WEBSITE_SOURCE_MARKER_EN,
  getWebsiteSourceMarker,
  appendWebsiteSourceMarker,
} from "./whatsapp-constants";

export {
  WEBSITE_SOURCE_MARKER,
  WEBSITE_SOURCE_MARKER_ID,
  WEBSITE_SOURCE_MARKER_EN,
  getWebsiteSourceMarker,
  appendWebsiteSourceMarker,
};

export type WhatsAppTopic =
  | "products"
  | "production"
  | "installation"
  | "contact"
  | "pricing"
  | "project-estimate"
  | "area-layanan"
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
    const clean = t.replace(/^regional-pricing:/, "").toLowerCase();
    if (clean === "jakarta") return "Jakarta";
    if (clean === "tangerang") return "Tangerang";
    if (clean === "bekasi") return "Bekasi";
    if (clean === "depok") return "Depok";
    if (clean === "bogor") return "Bogor";
    return clean.charAt(0).toUpperCase() + clean.slice(1);
  };

  if (isEn) {
    if (topic === "quick-quote") {
      message = "Hello Kaha Block, I would like to check paving block price and stock.\n\nProject location:\nEstimated area size:\nRequirements: materials only / materials + installation\nPaving type (if known):";
    } else if (topic === "pricing" || topic === "pricing-starting") {
      message = "Hello Kaha Block, I would like to check paving block pricing.\n\nProject location:\nEstimated area size:\nPaving type (if known):\nRequirements: materials only / materials + installation";
    } else if (topic === "project-estimate") {
      message = "Hello Kaha Block, I would like to request a paving block project estimate.\n\nProject location:\nEstimated area size:\nPaving type (if known):\nRequirements: materials only / materials + installation";
    } else if (topic === "area-layanan") {
      message = "Hello Kaha Block, I would like to check paving block pricing for a project in Greater Jakarta.\n\nProject location:\nEstimated area size:\nRequirements: materials only / materials + installation";
    } else if (topic && topic.startsWith("regional-pricing:")) {
      const region = getRegionName(topic);
      message = `Hello Kaha Block, I would like to check paving block price and delivery for a project in ${region}.\n\nProject location: ${region} / ___\nEstimated area size:\nPaving type (if known):\nRequirements: materials only / materials + installation`;
    } else if (topic && topic.startsWith("regional-installation:")) {
      const region = getRegionName(topic.replace(/^regional-installation:/, ""));
      message = `Hello Kaha Block, I would like to request a paving block installation estimate in ${region}.\n\nProject location: ${region} / ___\nEstimated area size:\nSite condition:\nPaving type (if known):`;
    } else if (topic && topic.startsWith("product:")) {
      const productName = topic.replace(/^product:/, "").trim();
      message = `Hello Kaha Block, I would like to check price and stock for ${productName}.\n\nProject location:\nEstimated area size:\nRequirements: materials only / materials + installation`;
    } else if (topic === "products") {
      message = "Hello Kaha Block, I would like to check paving block price and stock.\n\nProduct of interest:\nEstimated area size:\nProject location:\nRequirements: materials only / materials + installation";
    } else if (topic === "installation") {
      message = "Hello Kaha Block, I would like to request a paving block installation estimate.\n\nProject location:\nEstimated area size:\nSite condition:\nRequirements: installation only / materials + installation";
    } else if (topic === "production") {
      message = "Hello Kaha Block, I have viewed your production documentation and would like to check product specifications, price, and stock.\n\nProject location:\nEstimated area size:\nRequired grade/type (if known):";
    } else if (topic && ["jakarta", "tangerang", "bekasi", "depok", "bogor"].includes(topic.toLowerCase())) {
      const region = getRegionName(topic.toLowerCase());
      message = `Hello Kaha Block, I would like to check paving block price and installation options for ${region}.\n\nProject location: ${region} / ___\nEstimated area size:\nPaving type (if known):`;
    } else if (topic === "contact") {
      message = "Hello Kaha Block, I would like to inquire about paving block products and installation services.\n\nProject location:\nEstimated area size:\nRequirements:";
    } else if (typeof topic === "string") {
      message = `Hello Kaha Block, I am inquiring about ${topic}.`;
    } else {
      message = "Hello Kaha Block, I would like to check paving block price and stock.\n\nProject location:\nEstimated area size:\nRequirements:";
    }
  } else {
    if (topic === "quick-quote") {
      message = "Halo Kaha Block, saya ingin cek harga paving block sesuai luas & lokasi proyek.\n\nLokasi proyek:\nPerkiraan luas area:\nKebutuhan: material saja / material + pemasangan\nJenis paving (jika sudah tahu):";
    } else if (topic === "pricing" || topic === "pricing-starting") {
      message = "Halo Kaha Block, saya melihat harga di website dan ingin cek harga sesuai luas & lokasi proyek.\n\nLokasi proyek:\nPerkiraan luas area:\nJenis paving (jika sudah tahu):\nKebutuhan: material saja / material + pemasangan";
    } else if (topic === "project-estimate") {
      message = "Halo Kaha Block, saya ingin minta estimasi biaya proyek paving block.\n\nLokasi proyek:\nPerkiraan luas area:\nJenis paving (jika sudah tahu):\nKebutuhan: material saja / material + pemasangan";
    } else if (topic === "area-layanan") {
      message = "Halo Kaha Block, saya ingin cek harga paving block sesuai lokasi & luas proyek di Jabodetabek.\n\nLokasi proyek:\nPerkiraan luas area:\nKebutuhan: material saja / material + pemasangan";
    } else if (topic && topic.startsWith("regional-pricing:")) {
      const region = getRegionName(topic);
      message = `Halo Kaha Block, saya ingin cek harga paving block sesuai lokasi & luas proyek di ${region}.\n\nLokasi proyek: ${region} / ___\nPerkiraan luas area:\nJenis paving (jika sudah tahu):\nKebutuhan: material saja / material + pemasangan`;
    } else if (topic && topic.startsWith("regional-installation:")) {
      const region = getRegionName(topic.replace(/^regional-installation:/, ""));
      message = `Halo Kaha Block, saya ingin minta estimasi jasa pemasangan paving block di ${region}.\n\nLokasi proyek: ${region} / ___\nPerkiraan luas area:\nKondisi lahan:\nJenis paving (jika sudah tahu):`;
    } else if (topic && topic.startsWith("product:")) {
      const productName = topic.replace(/^product:/, "").trim();
      message = `Halo Kaha Block, saya ingin cek harga ${productName}.\n\nLokasi proyek:\nPerkiraan luas area:\nKebutuhan: material saja / material + pemasangan`;
    } else if (topic === "products") {
      message = "Halo Kaha Block, saya ingin cek harga paving block sesuai luas & lokasi proyek.\n\nProduk yang diminati:\nPerkiraan luas area:\nLokasi proyek:\nKebutuhan: material saja / material + pemasangan";
    } else if (topic === "installation") {
      message = "Halo Kaha Block, saya ingin minta estimasi jasa pemasangan paving block.\n\nLokasi proyek:\nPerkiraan luas area:\nKondisi lahan:\nKebutuhan: jasa pasang saja / material + pemasangan";
    } else if (topic === "production") {
      message = "Halo Kaha Block, saya sudah melihat dokumentasi produksi Kaha Block dan ingin cek spesifikasi, harga & stok produk.\n\nLokasi proyek:\nPerkiraan luas area:\nMutu/jenis paving yang dibutuhkan (jika sudah tahu):";
    } else if (topic && ["jakarta", "tangerang", "bekasi", "depok", "bogor"].includes(topic.toLowerCase())) {
      const region = getRegionName(topic.toLowerCase());
      message = `Halo Kaha Block, saya ingin cek harga paving block dan opsi pemasangan untuk area ${region}.\n\nLokasi proyek: ${region} / ___\nPerkiraan luas area:\nJenis paving (jika sudah tahu):`;
    } else if (topic === "contact") {
      message = "Halo Kaha Block, saya ingin bertanya tentang produk paving block dan jasa pemasangan.\n\nLokasi proyek:\nPerkiraan luas area:\nKebutuhan:";
    } else if (typeof topic === "string") {
      message = `Halo Kaha Block, saya ingin bertanya tentang ${topic}.`;
    } else {
      message = "Halo Kaha Block, saya ingin cek harga paving block sesuai luas & lokasi proyek.\n\nLokasi proyek:\nPerkiraan luas area:\nKebutuhan:";
    }
  }

  const fullMessage = appendWebsiteSourceMarker(message, lang);
  return `https://wa.me/${phoneE164}?text=${encodeURIComponent(fullMessage)}`;
}
