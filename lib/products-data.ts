import { Locale } from "./dictionary";

export interface ProductSpecItem {
  label: string;
  value: string;
}

export interface ProductData {
  slug: string;
  key: string;
  anchorId: string;
  name: string;
  badge: string;
  alternateName?: string;
  eyebrow: string;
  headline: string;
  intro: string;
  image: string;
  imageAlt: string;
  quickSpecs: string[];
  specs: ProductSpecItem[];
  applications: string[];
  functions: string[];
  relatedProductSlugs: string[];
  metaTitle: string;
  metaDescription: string;
}

export const PRODUCT_SLUGS = [
  "truepave",
  "half-tahu",
  "paving-hexagonal",
  "ubin",
  "topi-uskup",
  "kanstein-jepit",
  "kanstein-b1",
  "kanstein-s",
  "stoper",
] as const;

export type ProductSlug = (typeof PRODUCT_SLUGS)[number];

export const PRODUCT_KEY_TO_SLUG: Record<string, ProductSlug> = {
  truepave: "truepave",
  half: "half-tahu",
  hexagonal: "paving-hexagonal",
  ubin: "ubin",
  topiUskup: "topi-uskup",
  kanstein: "kanstein-jepit",
  kansteinB1: "kanstein-b1",
  kansteinS: "kanstein-s",
  stoper: "stoper",
};

export const PRODUCT_SLUG_TO_KEY: Record<ProductSlug, string> = {
  "truepave": "truepave",
  "half-tahu": "half",
  "paving-hexagonal": "hexagonal",
  "ubin": "ubin",
  "topi-uskup": "topiUskup",
  "kanstein-jepit": "kanstein",
  "kanstein-b1": "kansteinB1",
  "kanstein-s": "kansteinS",
  "stoper": "stoper",
};

export const PRODUCTS_DATA_ID: Record<ProductSlug, ProductData> = {
  "truepave": {
    slug: "truepave",
    key: "truepave",
    anchorId: "product-truepave",
    name: "Truepave",
    badge: "Paving Bata",
    alternateName: "Paving Block Bata / Truepave",
    eyebrow: "PRODUK UTAMA PAVING BLOCK",
    headline: "Paving Block Truepave Presisi untuk Jalan Lingkungan & Area Parkir",
    intro:
      "Truepave adalah model paving block berbentuk balok bata persegi panjang standar untuk perkerasan jalan lingkungan, pelataran parkir, kawasan industri, dan trotoar. Diproduksi dengan mesin cetak hidrolik otomatis di pabrik PT Kaha Sukses Mandiri Cisauk, Kabupaten Tangerang.",
    image: "/images/products/kaha-block-truepave.webp",
    imageAlt: "Dokumentasi produk Paving Block Truepave Kaha Block",
    quickSpecs: [
      "Pilihan Warna: Abu-abu, Merah, Hitam, Kuning",
      "Pilihan Tebal: 6 cm, 8 cm, 10 cm",
      "Toleransi Ukuran: ± 2 mm & 2 kg",
    ],
    specs: [
      { label: "Pilihan Warna", value: "Abu-abu, Merah, Hitam, Kuning" },
      { label: "Pilihan Tebal", value: "6 cm, 8 cm, 10 cm" },
      { label: "Toleransi Ukuran", value: "± 2 mm & 2 kg" },
      { label: "Bahan Baku", value: "Semen curah Holcim Dynamix dan semen zak SCG" },
      { label: "Penyerapan Air", value: "Maksimal 6%" },
      { label: "Karakteristik Permukaan", value: "Halus, tidak licin, warna tahan lama" },
    ],
    applications: [
      "Jalan lingkungan komplek perumahan",
      "Area parkir kendaraan dan pelataran ruko",
      "Jalur pedestrian dan trotoar pejalan kaki",
      "Pelataran pergudangan dan kawasan industri",
    ],
    functions: [
      "Kuat menahan beban kendaraan sesuai pilihan ketebalan",
      "Susunan rapi dan presisi dengan toleransi dimensi ketat",
      "Mendukung resapan air permukaan melalui rongga nat pengisi pasir",
      "Dapat dipasang dengan pola susun bata maupun herringbone",
    ],
    relatedProductSlugs: ["half-tahu", "topi-uskup", "paving-hexagonal", "kanstein-jepit"],
    metaTitle: "Truepave | Paving Block Kaha Block",
    metaDescription:
      "Paving block Truepave (bata) presisi tebal 6 cm, 8 cm, dan 10 cm produksi pabrik PT Kaha Sukses Mandiri Cisauk. Pengiriman langsung ke seluruh wilayah Jabodetabek.",
  },

  "half-tahu": {
    slug: "half-tahu",
    key: "half",
    anchorId: "product-half-tahu",
    name: "Half / Tahu",
    badge: "Fleksibel",
    alternateName: "Paving Tahu / Paving Block Half",
    eyebrow: "PAVING PENGUNCI POLA & PEMBATAS WARNA",
    headline: "Paving Block Half / Tahu Ukuran 10,5 × 10,5 cm untuk Pengunci Pola & Pembatas Warna",
    intro:
      "Paving block model Half atau paving tahu memiliki dimensi persegi 10,5 × 10,5 cm yang berfungsi sebagai pengunci pola susunan paving, pembatas kombinasi warna, serta aksen variasi desain pola lantai.",
    image: "/images/products/kaha-block-half-tahu.webp",
    imageAlt: "Dokumentasi produk Paving Block Half Tahu Kaha Block",
    quickSpecs: [
      "Pilihan Warna: Abu-abu, Merah, Hitam, Kuning",
      "Ukuran: 10,5 × 10,5 cm",
      "Pilihan Tebal: 6 cm, 8 cm",
    ],
    specs: [
      { label: "Ukuran Dimensi", value: "10,5 × 10,5 cm" },
      { label: "Pilihan Tebal", value: "6 cm, 8 cm" },
      { label: "Daya Tutup", value: "88 pcs/m²" },
      { label: "Pilihan Warna", value: "Abu-abu, Merah, Hitam, Kuning" },
      { label: "Fungsi Utama", value: "Pengunci pola paving & pembatas warna motif" },
    ],
    applications: [
      "Pembatas kombinasi warna pada perkerasan paving",
      "Jalur pedestrian pejalan kaki",
      "Aksen variasi desain pola perkerasan",
    ],
    functions: [
      "Pengunci pola susunan paving balok agar lebih rapi",
      "Pembatas warna motif pada marka perkerasan",
      "Memudahkan variasi desain tanpa banyak pemotongan balok manual",
    ],
    relatedProductSlugs: ["truepave", "topi-uskup", "paving-hexagonal", "kanstein-jepit"],
    metaTitle: "Paving Block Half / Tahu | Spesifikasi & Fungsi | Kaha Block",
    metaDescription:
      "Paving block Half / Tahu ukuran 10,5 × 10,5 cm tebal 6 cm dan 8 cm daya tutup 88 pcs/m² untuk pengunci pola dan pembatas warna dari pabrik Kaha Block Cisauk.",
  },

  "paving-hexagonal": {
    slug: "paving-hexagonal",
    key: "hexagonal",
    anchorId: "product-hexa",
    name: "Hexa 8 cm",
    badge: "Geometris",
    alternateName: "Paving Block Hexagonal / Segi Enam",
    eyebrow: "PAVING BLOCK GEOMETRIS",
    headline: "Paving Block Hexagonal (Segi Enam) Tebal 8 cm untuk Area Dekoratif & Pedestrian",
    intro:
      "Paving block Hexa (segi enam) memiliki ketebalan 8 cm dengan karakter geometris saling mengunci. Model ini diaplikasikan untuk area dekoratif dan jalur pedestrian yang mengutamakan tampilan estetika pola segi enam.",
    image: "/images/products/kaha-block-hexa-8cm.webp",
    imageAlt: "Dokumentasi produk Paving Block Hexagonal Segi Enam Kaha Block",
    quickSpecs: [
      "Pilihan Warna: Abu-abu, Merah, Hitam",
      "Pilihan Tebal: 8 cm",
      "Aplikasi: Area dekoratif dan pedestrian",
    ],
    specs: [
      { label: "Pilihan Tebal", value: "8 cm" },
      { label: "Pilihan Warna", value: "Abu-abu, Merah, Hitam" },
      { label: "Aplikasi Utama", value: "Area dekoratif dan pedestrian" },
      { label: "Karakteristik Bentuk", value: "Geometris segi enam (Hexagonal)" },
    ],
    applications: [
      "Area dekoratif perkerasan luar ruangan",
      "Jalur pedestrian dan trotoar pejalan kaki",
    ],
    functions: [
      "Bentuk geometris segi enam yang saling mengunci",
      "Memberikan tampilan visual dekoratif yang rapi",
    ],
    relatedProductSlugs: ["truepave", "ubin", "half-tahu", "kanstein-jepit"],
    metaTitle: "Paving Block Hexagonal | Spesifikasi & Kegunaan | Kaha Block",
    metaDescription:
      "Paving block segi enam Hexa tebal 8 cm dengan pilihan warna abu-abu, merah, dan hitam untuk area pedestrian dan dekoratif dari pabrik Kaha Block Cisauk.",
  },

  "ubin": {
    slug: "ubin",
    key: "ubin",
    anchorId: "product-ubin",
    name: "Ubin 8 cm",
    badge: "Kokoh",
    alternateName: "Paving Block Ubin / Tile Paver",
    eyebrow: "PAVING BLOCK BIDANG RATA",
    headline: "Paving Block Model Ubin Tebal 8 cm dengan Permukaan Bidang Rata",
    intro:
      "Paving block model Ubin dirancang dengan bidang penampang rata yang kokoh dan ketebalan 8 cm untuk perkerasan jalur pedestrian dan area luar ruangan yang mengutamakan kerapian permukaan bidang datar.",
    image: "/images/products/kaha-block-ubin-8cm.webp",
    imageAlt: "Dokumentasi produk Paving Block Ubin Kaha Block",
    quickSpecs: [
      "Pilihan Warna: Abu-abu, Merah, Hitam",
      "Pilihan Tebal: 8 cm",
      "Karakteristik: Bidang rata kokoh",
    ],
    specs: [
      { label: "Pilihan Tebal", value: "8 cm" },
      { label: "Pilihan Warna", value: "Abu-abu, Merah, Hitam" },
      { label: "Karakteristik Permukaan", value: "Bidang rata kokoh dan presisi" },
    ],
    applications: [
      "Jalur pedestrian dan trotoar pejalan kaki",
      "Halaman dan teras luar ruangan bangunan",
    ],
    functions: [
      "Penampang bidang rata yang kokoh dengan ketebalan 8 cm",
      "Memberikan susunan permukaan perkerasan yang tertata rapi",
    ],
    relatedProductSlugs: ["truepave", "paving-hexagonal", "kanstein-b1", "kanstein-jepit"],
    metaTitle: "Paving Block Ubin 8 cm | Spesifikasi & Aplikasi | Kaha Block",
    metaDescription:
      "Paving block model Ubin tebal 8 cm dengan bidang rata kokoh untuk trotoar pedestrian dan area eksterior. Pasokan langsung dari produsen Kaha Block Cisauk.",
  },

  "topi-uskup": {
    slug: "topi-uskup",
    key: "topiUskup",
    anchorId: "product-topi-uskup",
    name: "Topi Uskup",
    badge: "K-300",
    alternateName: "Paving Topi Uskup / Pengunci Tepi",
    eyebrow: "PAVING PENGUNCI SISI & SUDUT",
    headline: "Paving Topi Uskup Mutu K-300 Ukuran 30 × 21 cm untuk Pengunci Perimeter Paving",
    intro:
      "Paving Topi Uskup adalah balok paving khusus berprofil sudut untuk mengunci tepi dan sudut susunan pola herringbone (anyaman tulang ikan). Dengan mutu beton K-300 dan ukuran 30 × 21 cm, Topi Uskup menjaga susunan paving tetap rapi dan stabil tanpa perlu pemotongan manual berlebih di bagian tepi.",
    image: "/images/products/kaha-block-topi-uskup.webp",
    imageAlt: "Dokumentasi produk Paving Topi Uskup Kaha Block",
    quickSpecs: [
      "Ukuran: 30 × 21 cm",
      "Pilihan Tebal: 6 cm dan 8 cm",
      "Kuat Tekan: K-300",
    ],
    specs: [
      { label: "Ukuran Dimensi", value: "30 × 21 cm" },
      { label: "Pilihan Tebal", value: "6 cm dan 8 cm" },
      { label: "Kuat Tekan / Mutu Beton", value: "K-300" },
      { label: "Daya Tutup", value: "3,3 pcs/m" },
      { label: "Perkiraan Berat", value: "6 cm: ≈ 5,5 kg | 8 cm: ≈ 7,4 kg" },
      { label: "Material Bahan", value: "Beton" },
      { label: "Pilihan Warna", value: "Abu-abu" },
    ],
    applications: [
      "Batas tepi perkerasan jalan lingkungan pola herringbone",
      "Sudut dan tepi pemasangan paving block",
      "Batas samping pertemuan paving dengan kanstein",
    ],
    functions: [
      "Mengunci sisi dan sudut susunan paving agar tidak bergeser",
      "Menjaga susunan perkerasan tetap rapi dan stabil",
      "Mengurangi kebutuhan pemotongan balok paving manual di tepi",
    ],
    relatedProductSlugs: ["truepave", "half-tahu", "kanstein-jepit", "kanstein-b1"],
    metaTitle: "Paving Topi Uskup | Spesifikasi Mutu K-300 | Kaha Block",
    metaDescription:
      "Paving Topi Uskup ukuran 30 × 21 cm mutu K-300 tebal 6 cm dan 8 cm daya tutup 3,3 pcs/m untuk pengunci tepi pola herringbone dari pabrik Kaha Block Cisauk.",
  },

  "kanstein-jepit": {
    slug: "kanstein-jepit",
    key: "kanstein",
    anchorId: "product-kanstin-jepit",
    name: "Kanstein Jepit",
    badge: "Pengunci Tepi",
    alternateName: "Kanstin Jepit / Kerb Beton Pengunci",
    eyebrow: "PRODUK PEMBATAS & PENGUNCI",
    headline: "Kanstein Jepit Beton untuk Mengunci Tepi Pemasangan Paving Block",
    intro:
      "Kanstein Jepit adalah produk beton pembatas yang dipasang di sepanjang sisi luar pemasangan paving block untuk membantu mengunci tepi susunan paving agar tetap rapi, stabil, dan tidak mudah bergeser.",
    image: "/images/products/kaha-block-kanstein-jepit.webp",
    imageAlt: "Dokumentasi produk Kanstein Jepit Kaha Block",
    quickSpecs: [
      "Kategori: Produk pembatas/pengunci paving",
      "Fungsi: Membantu mengunci tepi pemasangan paving",
      "*Spesifikasi detail dan ukuran bervariasi",
    ],
    specs: [
      { label: "Kategori Produk", value: "Produk pembatas / pengunci paving" },
      { label: "Material Bahan", value: "Beton padat presisi" },
      { label: "Fungsi Utama", value: "Membantu mengunci tepi pemasangan paving" },
      { label: "Catatan Spesifikasi", value: "*Spesifikasi detail dan ukuran bervariasi" },
    ],
    applications: [
      "Batas tepi pemasangan paving block di jalan lingkungan",
      "Batas tepi area parkir dan trotoar pejalan kaki",
    ],
    functions: [
      "Membantu mengunci tepi pemasangan paving block",
      "Menjaga kerapian batas pinggir perkerasan agar susunan paving tidak bergeser",
    ],
    relatedProductSlugs: ["truepave", "topi-uskup", "kanstein-b1", "stoper"],
    metaTitle: "Kanstein Jepit | Pengunci Tepi Paving | Kaha Block",
    metaDescription:
      "Kanstein jepit beton pembatas untuk membantu mengunci tepi pemasangan paving block agar tetap rapi dan stabil. Pasokan langsung pabrik Kaha Block Cisauk.",
  },

  "kanstein-b1": {
    slug: "kanstein-b1",
    key: "kansteinB1",
    anchorId: "product-kanstin-b1",
    name: "Kanstein B1",
    badge: "Pembatas Jalan",
    alternateName: "Kanstin B1 / Kerb Jalan Beton B1",
    eyebrow: "PRODUK PEMBATAS JALAN",
    headline: "Kanstein B1 Beton untuk Pembatas Bahu Jalan & Area Pedestrian",
    intro:
      "Kanstein B1 adalah produk kanstein beton pembatas jalan yang digunakan sebagai pembatas antara bahu jalan dengan area pedestrian pejalan kaki pada jalan lingkungan dan kawasan perumahan.",
    image: "/images/products/kaha-block-kanstein-b1.webp",
    imageAlt: "Dokumentasi produk Kanstein B1 Kaha Block",
    quickSpecs: [
      "Kategori: Produk pembatas jalan / kanstein",
      "Fungsi: Pembatas bahu jalan & area pedestrian",
      "*Spesifikasi detail dan ukuran bervariasi",
    ],
    specs: [
      { label: "Kategori Produk", value: "Produk pembatas jalan / kanstein beton" },
      { label: "Material Bahan", value: "Beton padat presisi" },
      { label: "Fungsi Utama", value: "Pembatas bahu jalan & area pedestrian" },
      { label: "Catatan Spesifikasi", value: "*Spesifikasi detail dan ukuran bervariasi" },
    ],
    applications: [
      "Pembatas bahu jalan lingkungan perumahan",
      "Batas area pedestrian dan trotoar pejalan kaki",
    ],
    functions: [
      "Pembatas fisik antara bahu jalan dan trotoar pedestrian",
      "Menjaga keteraturan batas area sirkulasi jalan",
    ],
    relatedProductSlugs: ["kanstein-jepit", "kanstein-s", "stoper", "truepave"],
    metaTitle: "Kanstein B1 | Pembatas Bahu Jalan Beton | Kaha Block",
    metaDescription:
      "Kanstein beton tipe B1 untuk pembatas bahu jalan dan area pedestrian. Diproduksi di pabrik PT Kaha Sukses Mandiri Cisauk, pengiriman Jabodetabek.",
  },

  "kanstein-s": {
    slug: "kanstein-s",
    key: "kansteinS",
    anchorId: "product-kanstin-s",
    name: "Kanstein S",
    badge: "Drainase & Tepi",
    alternateName: "Kanstin S / Kerb Tali Air Drainase",
    eyebrow: "PRODUK PEMBATAS DRAINASE TEPI",
    headline: "Kanstein S Beton untuk Saluran Air Tepi & Pembatas Trotoar",
    intro:
      "Kanstein tipe S adalah kanstein beton dengan profil alur tali air yang berfungsi sebagai saluran air tepi jalan sekaligus pembatas trotoar perkerasan.",
    image: "/images/products/kaha-block-kanstein-s.webp",
    imageAlt: "Dokumentasi produk Kanstein S Kaha Block",
    quickSpecs: [
      "Kategori: Produk pembatas jalan tipe S",
      "Fungsi: Saluran air tepi & pembatas trotoar",
      "*Spesifikasi detail dan ukuran bervariasi",
    ],
    specs: [
      { label: "Kategori Produk", value: "Produk pembatas jalan tipe S" },
      { label: "Material Bahan", value: "Beton padat presisi" },
      { label: "Fungsi Utama", value: "Saluran air tepi & pembatas trotoar" },
      { label: "Catatan Spesifikasi", value: "*Spesifikasi detail dan ukuran bervariasi" },
    ],
    applications: [
      "Saluran air tepi jalan lingkungan perumahan",
      "Pembatas trotoar pejalan kaki",
    ],
    functions: [
      "Profil tipe S berfungsi ganda sebagai saluran air tepi dan pembatas trotoar",
      "Membantu mengalirkan limpasan air di tepi perkerasan",
    ],
    relatedProductSlugs: ["kanstein-b1", "kanstein-jepit", "stoper", "truepave"],
    metaTitle: "Kanstein S | Saluran Air Tepi & Trotoar | Kaha Block",
    metaDescription:
      "Kanstein tipe S profil tali air untuk saluran tepi jalan dan pembatas trotoar. Pengadaan langsung dari produsen Kaha Block Cisauk melayani Jabodetabek.",
  },

  "stoper": {
    slug: "stoper",
    key: "stoper",
    anchorId: "product-stoper",
    name: "Stoper",
    badge: "Batas Parkir",
    alternateName: "Stoper Parkir / Car Stopper Beton",
    eyebrow: "PRODUK PEMBATAS PARKIR",
    headline: "Stoper Parkir Beton untuk Pembatas Penghenti Roda Kendaraan",
    intro:
      "Stoper (car stopper) beton adalah produk pengaman batas parkir kendaraan yang dipasang pada slot parkir untuk membatasi pergerakan roda kendaraan agar posisi parkir tertib dan aman.",
    image: "/images/products/kaha-block-stoper.webp",
    imageAlt: "Dokumentasi produk Stoper Parkir Kaha Block",
    quickSpecs: [
      "Kategori: Produk pembatas / penghenti roda",
      "Fungsi: Pengaman batas parkir kendaraan",
      "*Spesifikasi detail dan ukuran bervariasi",
    ],
    specs: [
      { label: "Kategori Produk", value: "Produk pembatas / penghenti roda" },
      { label: "Material Bahan", value: "Beton padat presisi" },
      { label: "Fungsi Utama", value: "Pengaman batas parkir kendaraan" },
      { label: "Catatan Spesifikasi", value: "*Spesifikasi detail dan ukuran bervariasi" },
    ],
    applications: [
      "Area parkir ruko komersial dan pusat usaha",
      "Area parkir perkantoran dan perumahan",
    ],
    functions: [
      "Pengaman batas parkir kendaraan agar tertib dan aman",
      "Pembatas penghenti roda pada slot parkir",
    ],
    relatedProductSlugs: ["kanstein-jepit", "kanstein-b1", "truepave", "ubin"],
    metaTitle: "Stoper Parkir Beton | Pembatas Roda Parkir | Kaha Block",
    metaDescription:
      "Stoper beton pengaman batas parkir dan penghenti roda kendaraan untuk area parkir ruko, perkantoran, dan hunian. Pengadaan langsung dari Kaha Block.",
  },
};

export const PRODUCTS_DATA_EN: Record<ProductSlug, ProductData> = {
  "truepave": {
    slug: "truepave",
    key: "truepave",
    anchorId: "product-truepave",
    name: "Truepave",
    badge: "Standard Paver",
    alternateName: "Truepave Rectangular Paving Block",
    eyebrow: "CORE PAVING BLOCK PRODUCT",
    headline: "Precision Truepave Rectangular Pavers for Neighborhood Roads & Parking Areas",
    intro:
      "Truepave is the standard rectangular brick-shaped paving block model for neighborhood roads, commercial parking lots, industrial logistics areas, and pedestrian walkways. Manufactured with automated hydraulic press machines at PT Kaha Sukses Mandiri Cisauk plant in Tangerang Regency.",
    image: "/images/products/kaha-block-truepave.webp",
    imageAlt: "Kaha Block Truepave Paving Block product documentation",
    quickSpecs: [
      "Color Options: Grey, Red, Black, Yellow",
      "Thickness Options: 6 cm, 8 cm, 10 cm",
      "Size Tolerance: ± 2 mm & 2 kg",
    ],
    specs: [
      { label: "Color Options", value: "Grey, Red, Black, Yellow" },
      { label: "Thickness Options", value: "6 cm, 8 cm, 10 cm" },
      { label: "Size Tolerance", value: "± 2 mm & 2 kg" },
      { label: "Raw Materials", value: "Holcim Dynamix bulk cement and SCG bag cement" },
      { label: "Water Absorption", value: "Max 6%" },
      { label: "Surface Characteristics", value: "Smooth, non-slip, durable coloration" },
    ],
    applications: [
      "Residential neighborhood roads",
      "Commercial vehicle parking areas and shophouse forecourts",
      "Pedestrian walkways and sidewalks",
      "Warehouse staging and industrial logistics grounds",
    ],
    functions: [
      "Supports vehicular traffic loads according to selected thickness",
      "Consistent, neat alignment enabled by strict dimensional tolerances",
      "Supports stormwater infiltration through sand joint gaps",
      "Compatible with stretcher bond and herringbone laying patterns",
    ],
    relatedProductSlugs: ["half-tahu", "topi-uskup", "paving-hexagonal", "kanstein-jepit"],
    metaTitle: "Truepave | Precision Paving Block | Kaha Block",
    metaDescription:
      "Precision Truepave rectangular paving blocks in 6 cm, 8 cm, and 10 cm thickness options from PT Kaha Sukses Mandiri factory in Cisauk. Direct delivery across Greater Jakarta.",
  },

  "half-tahu": {
    slug: "half-tahu",
    key: "half",
    anchorId: "product-half-tahu",
    name: "Half / Tahu",
    badge: "Flexible",
    alternateName: "Square Half Paver / Paving Tahu",
    eyebrow: "PATTERN LOCKING & BORDER PAVER",
    headline: "Half / Tahu Pavers (10.5 × 10.5 cm) for Pattern Interlocking & Color Borders",
    intro:
      "The Half (paving tahu) model features a compact 10.5 × 10.5 cm square dimension that functions as a pattern lock, color demarcation boundary, and decorative motif accent for paving installations.",
    image: "/images/products/kaha-block-half-tahu.webp",
    imageAlt: "Kaha Block Half Tahu Paving Block product documentation",
    quickSpecs: [
      "Color Options: Grey, Red, Black, Yellow",
      "Dimensions: 10.5 × 10.5 cm",
      "Thickness Options: 6 cm, 8 cm",
    ],
    specs: [
      { label: "Dimensions", value: "10.5 × 10.5 cm" },
      { label: "Thickness Options", value: "6 cm, 8 cm" },
      { label: "Coverage", value: "88 pcs/m²" },
      { label: "Color Options", value: "Grey, Red, Black, Yellow" },
      { label: "Primary Function", value: "Pattern locking & color border accentuation" },
    ],
    applications: [
      "Color demarcation borders on paving surfaces",
      "Pedestrian walkways",
      "Decorative patterned accents on exterior pavement",
    ],
    functions: [
      "Locks rectangular paver patterns neatly",
      "Provides natural color contrast demarcation",
      "Facilitates decorative patterns with minimal on-site cutting",
    ],
    relatedProductSlugs: ["truepave", "topi-uskup", "paving-hexagonal", "kanstein-jepit"],
    metaTitle: "Half / Tahu Paver | Specifications & Function | Kaha Block",
    metaDescription:
      "Half / Tahu square pavers (10.5 × 10.5 cm) with 6 cm and 8 cm thickness options and 88 pcs/m² coverage for pattern interlocking and color borders from Kaha Block Cisauk.",
  },

  "paving-hexagonal": {
    slug: "paving-hexagonal",
    key: "hexagonal",
    anchorId: "product-hexa",
    name: "Hexa 8 cm",
    badge: "Geometric",
    alternateName: "Hexagonal Paving Block",
    eyebrow: "GEOMETRIC PAVING BLOCK",
    headline: "Hexagonal Paving Blocks (8 cm) for Decorative & Pedestrian Areas",
    intro:
      "Hexa (hexagonal) paving blocks feature an 8 cm thickness and geometric interlocking shape. This model is utilized for decorative grounds and pedestrian walkways requiring geometric visual aesthetics.",
    image: "/images/products/kaha-block-hexa-8cm.webp",
    imageAlt: "Kaha Block Hexagonal Paving Block product documentation",
    quickSpecs: [
      "Color Options: Grey, Red, Black",
      "Thickness: 8 cm",
      "Applications: Decorative & pedestrian areas",
    ],
    specs: [
      { label: "Thickness", value: "8 cm" },
      { label: "Color Options", value: "Grey, Red, Black" },
      { label: "Primary Applications", value: "Decorative and pedestrian areas" },
      { label: "Geometric Shape", value: "Six-sided interlocking hexagon" },
    ],
    applications: [
      "Decorative outdoor paved areas",
      "Pedestrian walkways and sidewalks",
    ],
    functions: [
      "Interlocking hexagonal geometric structure",
      "Provides neat decorative visual surface patterns",
    ],
    relatedProductSlugs: ["truepave", "ubin", "half-tahu", "kanstein-jepit"],
    metaTitle: "Hexagonal Paving Block | Specifications & Uses | Kaha Block",
    metaDescription:
      "Hexa 8 cm hexagonal paving blocks available in grey, red, and black for pedestrian and decorative pavement areas from Kaha Block factory in Cisauk.",
  },

  "ubin": {
    slug: "ubin",
    key: "ubin",
    anchorId: "product-ubin",
    name: "Ubin 8 cm",
    badge: "Solid",
    alternateName: "Tile Paver 8 cm",
    eyebrow: "FLAT SURFACE PAVER",
    headline: "Tile Model Pavers (8 cm) with Uniform Flat Surface",
    intro:
      "Tile-model (Ubin) paving blocks feature a solid flat surface profile with 8 cm thickness, suitable for pedestrian sidewalks and outdoor ground surfaces prioritizing a uniform flat plane.",
    image: "/images/products/kaha-block-ubin-8cm.webp",
    imageAlt: "Kaha Block Tile Paver product documentation",
    quickSpecs: [
      "Color Options: Grey, Red, Black",
      "Thickness: 8 cm",
      "Surface: Solid flat plane",
    ],
    specs: [
      { label: "Thickness", value: "8 cm" },
      { label: "Color Options", value: "Grey, Red, Black" },
      { label: "Surface Characteristics", value: "Solid, flat, and precise plane" },
    ],
    applications: [
      "Pedestrian sidewalks and walkways",
      "Outdoor terraces and courtyards",
    ],
    functions: [
      "Solid flat cross-section with 8 cm thickness",
      "Provides an orderly, uniform surface finish",
    ],
    relatedProductSlugs: ["truepave", "paving-hexagonal", "kanstein-b1", "kanstein-jepit"],
    metaTitle: "Tile Paver 8 cm | Specifications & Application | Kaha Block",
    metaDescription:
      "Solid 8 cm tile pavers (Ubin) with flat surface for pedestrian walkways and exterior areas. Factory-direct supply from Kaha Block in Cisauk.",
  },

  "topi-uskup": {
    slug: "topi-uskup",
    key: "topiUskup",
    anchorId: "product-topi-uskup",
    name: "Topi Uskup",
    badge: "K-300",
    alternateName: "Bishop Hat Paver / Herringbone Edge Lock",
    eyebrow: "EDGE & CORNER LOCKING PAVER",
    headline: "Topi Uskup (Bishop Hat) Pavers K-300 (30 × 21 cm) for Perimeter Locking",
    intro:
      "Topi Uskup (Bishop Hat) pavers are specialized angled edge units designed to lock perimeter edges and corners in herringbone laying patterns. Featuring K-300 concrete grade and 30 × 21 cm dimensions, they keep pavements stable and neat without excessive manual cutting.",
    image: "/images/products/kaha-block-topi-uskup.webp",
    imageAlt: "Kaha Block Topi Uskup Bishop Hat Paver product documentation",
    quickSpecs: [
      "Dimensions: 30 × 21 cm",
      "Thickness Options: 6 cm and 8 cm",
      "Compressive Strength: K-300",
    ],
    specs: [
      { label: "Dimensions", value: "30 × 21 cm" },
      { label: "Thickness Options", value: "6 cm and 8 cm" },
      { label: "Compressive Strength", value: "K-300" },
      { label: "Coverage", value: "3.3 pcs/m (linear meter)" },
      { label: "Approximate Weight", value: "6 cm: ≈ 5.5 kg | 8 cm: ≈ 7.4 kg" },
      { label: "Material", value: "Concrete" },
      { label: "Color Options", value: "Grey" },
    ],
    applications: [
      "Perimeter edge of herringbone-pattern neighborhood roads",
      "Corners and borders of paving installations",
      "Interface boundary between paving blocks and curb stones",
    ],
    functions: [
      "Locks side and corner perimeter of paving installations to prevent lateral shifting",
      "Maintains pavement stability and alignment",
      "Reduces the necessity of manual paver block cutting at edges",
    ],
    relatedProductSlugs: ["truepave", "half-tahu", "kanstein-jepit", "kanstein-b1"],
    metaTitle: "Topi Uskup Paver | K-300 Edge Locking Specifications | Kaha Block",
    metaDescription:
      "Topi Uskup (Bishop Hat) pavers (30 × 21 cm) with K-300 compressive strength in 6 cm and 8 cm thickness for herringbone pattern edge locking from Kaha Block factory.",
  },

  "kanstein-jepit": {
    slug: "kanstein-jepit",
    key: "kanstein",
    anchorId: "product-kanstin-jepit",
    name: "Kanstein Jepit",
    badge: "Edge Curb",
    alternateName: "Edge Curb / Paving Lock Curb",
    eyebrow: "BORDER & PERIMETER RESTRAINTS",
    headline: "Precast Concrete Kanstein Jepit to Restrain Paving Block Perimeters",
    intro:
      "Kanstein Jepit is a precast concrete boundary curb installed along the perimeter edges of paving installations to help restrain paver units and maintain stable, neat alignment.",
    image: "/images/products/kaha-block-kanstein-jepit.webp",
    imageAlt: "Kaha Block Kanstein Jepit Precast Curb product documentation",
    quickSpecs: [
      "Category: Paving edge restraint curb",
      "Function: Restrains paving block perimeter edges",
      "*Detailed dimensions and profiles vary per project",
    ],
    specs: [
      { label: "Product Category", value: "Paving boundary / edge restraint curb" },
      { label: "Material", value: "Dense precast concrete" },
      { label: "Primary Function", value: "Restrains paving installation perimeter edges" },
      { label: "Specification Note", value: "Detailed dimensions and profiles vary per project" },
    ],
    applications: [
      "Perimeter boundaries of residential neighborhood paving roads",
      "Borders of parking areas and pedestrian walkways",
    ],
    functions: [
      "Helps lock outer boundaries of paving installations",
      "Maintains neat edge demarcation to prevent paver displacement",
    ],
    relatedProductSlugs: ["truepave", "topi-uskup", "kanstein-b1", "stoper"],
    metaTitle: "Kanstein Jepit | Paving Edge Curb | Kaha Block",
    metaDescription:
      "Precast concrete Kanstein Jepit edge curbs to restrain paving block perimeters and maintain structural neatness. Factory-direct from Kaha Block Cisauk.",
  },

  "kanstein-b1": {
    slug: "kanstein-b1",
    key: "kansteinB1",
    anchorId: "product-kanstin-b1",
    name: "Kanstein B1",
    badge: "Road Curb",
    alternateName: "B1 Road Curb / Concrete Kerb",
    eyebrow: "ROAD BOUNDARY CURB",
    headline: "Precast Concrete Kanstein B1 for Road Shoulders & Pedestrian Walkways",
    intro:
      "Kanstein B1 is a precast concrete road curb utilized as a physical demarcation barrier between road shoulders and pedestrian walkways along neighborhood and residential roads.",
    image: "/images/products/kaha-block-kanstein-b1.webp",
    imageAlt: "Kaha Block Kanstein B1 Road Curb product documentation",
    quickSpecs: [
      "Category: Road curb / concrete kerb",
      "Function: Demarcates road shoulders & pedestrian zones",
      "*Detailed dimensions and profiles vary per project",
    ],
    specs: [
      { label: "Product Category", value: "Road curb / concrete kerb" },
      { label: "Material", value: "Dense precast concrete" },
      { label: "Primary Function", value: "Demarcates road shoulders & pedestrian walkways" },
      { label: "Specification Note", value: "Detailed dimensions and profiles vary per project" },
    ],
    applications: [
      "Residential neighborhood road shoulders",
      "Pedestrian walkway and sidewalk boundaries",
    ],
    functions: [
      "Physical barrier between roadway shoulders and pedestrian walkways",
      "Maintains organized circulation boundaries",
    ],
    relatedProductSlugs: ["kanstein-jepit", "kanstein-s", "stoper", "truepave"],
    metaTitle: "Kanstein B1 | Road Shoulder Concrete Curb | Kaha Block",
    metaDescription:
      "Concrete Kanstein B1 curbs for road shoulder and pedestrian walkway demarcation. Manufactured at PT Kaha Sukses Mandiri plant in Cisauk, Tangerang.",
  },

  "kanstein-s": {
    slug: "kanstein-s",
    key: "kansteinS",
    anchorId: "product-kanstin-s",
    name: "Kanstein S",
    badge: "Drainage Curb",
    alternateName: "S-Type Drainage Curb / Gutter Curb",
    eyebrow: "DRAINAGE EDGE CURB",
    headline: "Precast Concrete Kanstein S for Edge Drainage & Walkway Demarcation",
    intro:
      "Kanstein S features an S-curved gutter profile functioning as an edge water channel while simultaneously demarcating pedestrian walkways from road surfaces.",
    image: "/images/products/kaha-block-kanstein-s.webp",
    imageAlt: "Kaha Block Kanstein S Drainage Curb product documentation",
    quickSpecs: [
      "Category: S-type road curb (Drainage curb)",
      "Function: Edge water channel & walkway boundary",
      "*Detailed dimensions and profiles vary per project",
    ],
    specs: [
      { label: "Product Category", value: "S-type road curb (Drainage curb)" },
      { label: "Material", value: "Dense precast concrete" },
      { label: "Primary Function", value: "Edge drainage channel & walkway boundary" },
      { label: "Specification Note", value: "Detailed dimensions and profiles vary per project" },
    ],
    applications: [
      "Roadside drainage channels along neighborhood streets",
      "Pedestrian walkway boundaries",
    ],
    functions: [
      "Dual-function profile serving as edge drainage channel and walkway curb",
      "Helps channel roadside surface runoff",
    ],
    relatedProductSlugs: ["kanstein-b1", "kanstein-jepit", "stoper", "truepave"],
    metaTitle: "Kanstein S | Edge Drainage & Walkway Curb | Kaha Block",
    metaDescription:
      "Kanstein S drainage curb with gutter profile for roadside runoff and pedestrian sidewalk demarcation. Factory-direct from Kaha Block Cisauk.",
  },

  "stoper": {
    slug: "stoper",
    key: "stoper",
    anchorId: "product-stoper",
    name: "Stoper",
    badge: "Wheel Stop",
    alternateName: "Concrete Car Stopper / Wheel Stop",
    eyebrow: "PARKING ACCESSORY",
    headline: "Solid Concrete Wheel Stops for Orderly Vehicle Parking Demarcation",
    intro:
      "Precast concrete car stoppers (stoper parkir) are vehicle parking barriers installed in parking bays to limit wheel travel for orderly, safe vehicle parking.",
    image: "/images/products/kaha-block-stoper.webp",
    imageAlt: "Kaha Block Concrete Wheel Stop product documentation",
    quickSpecs: [
      "Category: Vehicle wheel stop barrier",
      "Function: Safeguards vehicle parking boundaries",
      "*Detailed dimensions and profiles vary per project",
    ],
    specs: [
      { label: "Product Category", value: "Vehicle wheel stop barrier (Car Stopper)" },
      { label: "Material", value: "Dense precast concrete" },
      { label: "Primary Function", value: "Safeguards vehicle parking boundaries" },
      { label: "Specification Note", value: "Detailed dimensions and profiles vary per project" },
    ],
    applications: [
      "Commercial shophouse forecourts and business center parking bays",
      "Office buildings and residential parking areas",
    ],
    functions: [
      "Safeguards parking stall limits for orderly parking",
      "Acts as a concrete wheel stop barrier in parking bays",
    ],
    relatedProductSlugs: ["kanstein-jepit", "kanstein-b1", "truepave", "ubin"],
    metaTitle: "Concrete Wheel Stop | Parking Barrier | Kaha Block",
    metaDescription:
      "Solid precast concrete wheel stop barriers for commercial parking lots, shophouses, and residential facilities. Direct supply from Kaha Block.",
  },
};

export function getProductData(slug: string, lang: Locale = "id"): ProductData | null {
  const normalizedSlug = slug.toLowerCase() as ProductSlug;
  if (!PRODUCT_SLUGS.includes(normalizedSlug)) {
    return null;
  }
  return lang === "en" ? PRODUCTS_DATA_EN[normalizedSlug] : PRODUCTS_DATA_ID[normalizedSlug];
}

export function getAllProducts(lang: Locale = "id"): ProductData[] {
  const dataset = lang === "en" ? PRODUCTS_DATA_EN : PRODUCTS_DATA_ID;
  return PRODUCT_SLUGS.map((slug) => dataset[slug]);
}
