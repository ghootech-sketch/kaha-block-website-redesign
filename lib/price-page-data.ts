import { BUSINESS_FACTS } from "./business-facts";
import { Locale } from "./dictionary";

export interface PricePageFAQ {
  q: string;
  a: string;
}

export interface PricePageContent {
  eyebrow: string;
  h1: string;
  heroDesc: string;
  unitTitle: string;
  unitIntro: string;
  unitCards: { title: string; desc: string }[];
  factorsTitle: string;
  factorsIntro: string;
  factors: string[];
  buyerTitle: string;
  buyerDesc: string;
  specTitle: string;
  specDesc: string;
  areaTitle: string;
  areaDesc: string;
  faqs: PricePageFAQ[];
  ctaTitle: string;
  ctaDesc: string;
}

export const PRICE_PAGE_DATA: Record<Locale, PricePageContent> = {
  id: {
    eyebrow: "HARGA LANGSUNG PABRIK • JABODETABEK",
    h1: "Harga Paving Block per m², Satuan & Jasa Pasang",
    heroDesc:
      "Material paving block mulai " +
      BUSINESS_FACTS.pricing.materialStartingPriceDisplay.id +
      "*. Panduan harga per m² / meter persegi, per biji/satuan, mutu K-250/K-300/K-400, ketebalan 6/8/10 cm, serta biaya jasa pasang untuk proyek Jabodetabek.",
    unitTitle: "Cara Membaca Harga Paving Block",
    unitIntro:
      "Orang mencari paving block dengan banyak istilah: harga per m², per meter, per biji, satuan, material saja, atau sekaligus jasa pasang. Bandingkan penawaran dengan satuan dan ruang lingkup yang sama.",
    unitCards: [
      {
        title: "Harga per m² / meter persegi",
        desc:
          "Harga material tersedia mulai " +
          BUSINESS_FACTS.pricing.materialStartingPriceDisplay.id +
          "*. Nilai akhir menyesuaikan model, ketebalan, mutu beton, volume pemesanan, dan lokasi proyek.",
      },
      {
        title: "Harga per biji / satuan",
        desc:
          "Tidak ada satu harga per biji yang berlaku untuk semua model. Ukuran, daya tutup per m², ketebalan, dan tipe paving menentukan jumlah unit serta harga satuannya.",
      },
      {
        title: "Harga K-250, K-300 & K-400",
        desc:
          "Mutu beton harus dibaca bersama ketebalan dan peruntukan area. Penawaran resmi disesuaikan dengan spesifikasi produk dan kebutuhan beban proyek.",
      },
      {
        title: "Biaya jasa pasang / borongan",
        desc:
          "Jasa pemasangan dihitung terpisah dari harga material. Kondisi tanah, luas area, kebutuhan perataan/pemadatan, pola pemasangan, kanstein, dan akses lokasi memengaruhi estimasi.",
      },
    ],
    factorsTitle: "Faktor yang Menentukan Harga Akhir",
    factorsIntro:
      "Harga proyek tidak ditentukan oleh satu angka. Penawaran Kaha Block dihitung dari spesifikasi material, jumlah kebutuhan, lokasi, serta ruang lingkup pekerjaan.",
    factors: [
      "Model paving block atau kanstein yang dipilih.",
      "Ketebalan produk 6 cm, 8 cm, atau 10 cm sesuai tipe yang tersedia.",
      "Mutu beton K-250, K-300, atau K-400 sesuai spesifikasi produk/proyek.",
      "Total kebutuhan dalam meter persegi (m²) dan volume pemesanan.",
      "Pilihan warna serta ketersediaan produksi saat pemesanan.",
      "Lokasi proyek dan akses penurunan material.",
      "Material saja atau paket material + jasa pemasangan.",
      "Kondisi lahan, kebutuhan pemadatan, kanstein pengunci, dan pekerjaan pendukung.",
    ],
    buyerTitle: "Beli dari Pabrik, Supplier & Vendor Paving Block Proyek",
    buyerDesc:
      "Untuk kebutuhan jual/beli dan pengadaan vendor paving block, conblock atau konblok, Kaha Block melayani langsung dari fasilitas PT Kaha Sukses Mandiri di Cisauk, Kabupaten Tangerang. Kontraktor, pengembang, perusahaan, dan pemilik proyek dapat meminta penawaran material saja atau paket material + pemasangan untuk Jakarta, Tangerang, Bekasi, Depok, dan Bogor.",
    specTitle: "Harga Menurut Model, Ketebalan & Mutu",
    specDesc:
      "Buka spesifikasi produk sebelum membandingkan harga. Paving bata/Truepave, Half/Tahu 10,5 × 10,5 cm, Hexagonal/Segi Enam, Ubin, Topi Uskup, dan kanstein memiliki spesifikasi serta kebutuhan material yang berbeda.",
    areaTitle: "Harga & Pengadaan Berdasarkan Lokasi Proyek",
    areaDesc:
      "Kebutuhan pengadaan dan pemasangan dilayani di Jabodetabek. Pilih halaman wilayah untuk konteks pengiriman, cakupan layanan, dan kebutuhan proyek di lokasi Anda.",
    faqs: [
      {
        q: "Berapa harga paving block per m² atau per meter persegi?",
        a:
          "Harga material paving block tersedia mulai " +
          BUSINESS_FACTS.pricing.materialStartingPriceDisplay.id +
          "*. Harga akhir bergantung pada model, ketebalan, mutu beton, volume pemesanan, dan lokasi proyek. Istilah per meter pada penawaran paving perlu dikonfirmasi sebagai meter persegi (m²), bukan meter panjang.",
      },
      {
        q: "Apakah harga paving block per biji atau satuan tersedia?",
        a:
          "Harga satuan bergantung pada model dan daya tutup produk. Karena jumlah unit per m² berbeda antar model, konfirmasikan tipe produk dan jumlah kebutuhan agar perhitungannya tepat.",
      },
      {
        q: "Berapa harga paving block K-300, K-250, atau K-400?",
        a:
          "Tidak ada satu harga yang sama untuk seluruh mutu. Penawaran melihat kombinasi mutu beton, ketebalan, model, jumlah pemesanan, lokasi, dan peruntukan area.",
      },
      {
        q: "Berapa biaya jasa pasang paving block per m²?",
        a:
          "Biaya pemasangan dihitung terpisah berdasarkan kondisi lahan, luas area, kebutuhan perataan dan pemadatan, pola pemasangan, kanstein, akses lokasi, serta ruang lingkup pekerjaan.",
      },
      {
        q: "Apakah Kaha Block melayani harga material sekaligus borongan pemasangan?",
        a:
          "Ya. Kaha Block melayani pengadaan material saja maupun paket material + jasa pemasangan/kontraktor paving block untuk wilayah Jabodetabek.",
      },
      {
        q: "Bagaimana meminta penawaran sebagai vendor paving block proyek?",
        a:
          "Kirim lokasi proyek, jenis atau spesifikasi paving yang dibutuhkan, mutu/ketebalan bila sudah ditentukan, perkiraan luas atau volume, serta kebutuhan material saja atau material + pemasangan. Kaha Block dapat menyiapkan penawaran vendor proyek berdasarkan data tersebut.",
      },
      {
        q: "Apakah pengiriman ke Jakarta, Tangerang, Bekasi, Depok, dan Bogor dikenakan ongkir?",
        a: BUSINESS_FACTS.operations.deliveryPolicy.freeDeliveryAndOffloading.id,
      },
      {
        q: "Apa beda paving block, conblock, dan konblok?",
        a:
          "Dalam pencarian sehari-hari istilah paving block, conblock, dan konblok sering digunakan untuk produk beton pracetak perkerasan. Untuk pemesanan, pastikan model, ketebalan, mutu, warna, dan fungsi produk yang dibutuhkan.",
      },
    ],
    ctaTitle: "Kirim Luas Area & Lokasi untuk Cek Harga",
    ctaDesc:
      "Sampaikan lokasi proyek, perkiraan luas m², kebutuhan material saja atau sekaligus pemasangan, serta model paving jika sudah ditentukan. Tim Kaha Block akan membantu estimasi dan penawaran sesuai kebutuhan.",
  },
  en: {
    eyebrow: "DIRECT FACTORY PRICING • GREATER JAKARTA",
    h1: "Paving Block Price per m², Unit & Installation",
    heroDesc:
      "Paving block material starts from " +
      BUSINESS_FACTS.pricing.materialStartingPriceDisplay.en +
      "*. Review square-meter pricing, unit pricing, K-250/K-300/K-400 grades, 6/8/10 cm thickness options, and installation estimates for Greater Jakarta projects.",
    unitTitle: "How to Read Paving Block Pricing",
    unitIntro:
      "Buyers may ask for pricing per square meter, per unit, material only, or a complete installation package. Compare quotations using the same unit and scope.",
    unitCards: [
      {
        title: "Price per m²",
        desc:
          "Material starts from " +
          BUSINESS_FACTS.pricing.materialStartingPriceDisplay.en +
          "*. Final pricing depends on model, thickness, concrete grade, order volume, and project location.",
      },
      {
        title: "Price per unit",
        desc:
          "There is no single unit price for every paver model. Dimensions, coverage per m², thickness, and profile determine unit quantities and pricing.",
      },
      {
        title: "K-250, K-300 & K-400 pricing",
        desc:
          "Concrete grade must be considered together with thickness and intended application. Formal quotations are tailored to the selected specification.",
      },
      {
        title: "Installation / turnkey cost",
        desc:
          "Installation is quoted separately from material. Ground conditions, total area, compaction, laying pattern, curbs, and site access influence the estimate.",
      },
    ],
    factorsTitle: "What Determines the Final Quote",
    factorsIntro:
      "Project pricing is based on actual product specifications, order volume, site location, and installation scope.",
    factors: [
      "Selected paving block or curb model.",
      "Available thickness: 6 cm, 8 cm, or 10 cm depending on product.",
      "Concrete grade K-250, K-300, or K-400 according to product/project requirements.",
      "Total project area and order volume.",
      "Color selection and current production availability.",
      "Project location and material offloading access.",
      "Material-only supply or material + installation package.",
      "Ground preparation, compaction, edge restraints, and supporting works.",
    ],
    buyerTitle: "Buy Direct from the Paving Block Factory, Supplier & Project Vendor",
    buyerDesc:
      "Kaha Block supplies concrete pavers directly from PT Kaha Sukses Mandiri's facility in Cisauk, Tangerang Regency. Material-only procurement and integrated installation packages are available across Greater Jakarta.",
    specTitle: "Pricing by Model, Thickness & Grade",
    specDesc:
      "Review product specifications before comparing quotations. Rectangular pavers, Half blocks, Hexagonal pavers, Tile pavers, edge units, and curbs have different material requirements.",
    areaTitle: "Pricing & Supply by Project Area",
    areaDesc:
      "Select your Greater Jakarta project area for regional delivery, supply, and installation information.",
    faqs: [
      {
        q: "What is the paving block price per square meter?",
        a:
          "Paving block material starts from " +
          BUSINESS_FACTS.pricing.materialStartingPriceDisplay.en +
          "*. Final pricing depends on model, thickness, concrete grade, order volume, and project location.",
      },
      {
        q: "Is paving block pricing available per unit?",
        a:
          "Unit pricing depends on the selected model and its coverage per square meter. Confirm the product type and required quantity for an accurate calculation.",
      },
      {
        q: "How much are K-250, K-300, or K-400 paving blocks?",
        a:
          "There is no single price across all grades. Quotations consider concrete grade, thickness, model, order quantity, and intended application.",
      },
      {
        q: "How much does paving block installation cost per m²?",
        a:
          "Installation is quoted separately according to ground condition, area size, leveling and compaction requirements, laying pattern, curbs, access, and total work scope.",
      },
      {
        q: "Can Kaha Block quote both materials and installation?",
        a:
          "Yes. Kaha Block provides material-only procurement as well as integrated material + installation packages across Greater Jakarta.",
      },
      {
        q: "Is delivery included across Greater Jakarta?",
        a: BUSINESS_FACTS.operations.deliveryPolicy.freeDeliveryAndOffloading.en,
      },
      {
        q: "Are paving block and conblock the same search term?",
        a:
          "Customers often use paving block and conblock interchangeably when searching for precast concrete pavement products. Ordering should still be based on the exact model, thickness, grade, color, and application required.",
      },
    ],
    ctaTitle: "Send Your Area & Location for a Price Check",
    ctaDesc:
      "Share the project location, estimated square meters, material-only or installation requirement, and preferred paver model if known. The Kaha Block team will prepare a project-specific estimate.",
  },
};
