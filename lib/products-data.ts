import { Locale } from "./dictionary";

export interface ProductSpecItem {
  label: string;
  value: string;
}

export interface ProductData {
  slug: string;
  key: string;
  name: string;
  badge: string;
  alternateName?: string;
  eyebrow: string;
  headline: string;
  intro: string;
  image: string;
  imageAlt: string;
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
    name: "Truepave",
    badge: "Paving Bata",
    alternateName: "Paving Block Bata / Truepave",
    eyebrow: "PRODUK UTAMA PAVING BLOCK",
    headline: "Paving Block Truepave Presisi untuk Jalan Lingkungan & Area Parkir",
    intro:
      "Truepave adalah model paving block berbentuk balok bata persegi panjang standar yang menjadi pilihan utama untuk perkerasan jalan lingkungan, pelataran parkir ruko, kawasan industri, dan trotoar. Diproduksi menggunakan mesin cetak hidrolik otomatis di pabrik Kaha Block Cisauk, Kabupaten Tangerang, Truepave dirancang memiliki kepresisian tinggi serta toleransi ukuran yang ketat.",
    image: "/images/products/kaha-block-truepave.webp",
    imageAlt: "Dokumentasi produk Paving Block Truepave Kaha Block",
    specs: [
      { label: "Pilihan Warna", value: "Abu-abu, Merah, Hitam, Kuning" },
      { label: "Pilihan Tebal", value: "6 cm, 8 cm, 10 cm" },
      { label: "Toleransi Ukuran", value: "± 2 mm & 2 kg" },
      { label: "Bahan Baku", value: "Semen curah Holcim Dynamix dan semen zak SCG" },
      { label: "Penyerapan Air", value: "Maksimal 6%" },
      { label: "Karakteristik Permukaan", value: "Halus, tidak licin, warna tahan lama" },
      { label: "Pilihan Mutu Beton", value: "K-250, K-300, K-400 (konfirmasi saat pemesanan)" },
    ],
    applications: [
      "Jalan lingkungan komplek perumahan dan pemukiman warga",
      "Area parkir kendaraan komersial, ruko, dan pusat bisnis",
      "Pelataran pergudangan logistik dan jalur lalu lintas kawasan industri",
      "Jalur pedestrian, trotoar pejalan kaki, dan area taman",
    ],
    functions: [
      "Kuat menahan beban kendaraan harian hingga kendaraan berat sesuai ketebalan",
      "Susunan rapi dan presisi dengan toleransi dimensi yang sangat ketat",
      "Mendukung penyerapan air permukaan melalui rongga nat pengisi pasir",
      "Dapat diaplikasikan dalam pola susun anyaman tulang ikan (herringbone) atau susun bata",
    ],
    relatedProductSlugs: ["half-tahu", "topi-uskup", "paving-hexagonal", "kanstein-jepit"],
    metaTitle: "Truepave | Paving Block Kaha Block",
    metaDescription:
      "Paving block Truepave (bata) presisi mutu K-250, K-300, K-400 tebal 6 cm, 8 cm, 10 cm dari pabrik PT Kaha Sukses Mandiri Cisauk. Pengiriman gratis Jabodetabek.",
  },

  "half-tahu": {
    slug: "half-tahu",
    key: "half",
    name: "Half / Tahu",
    badge: "Fleksibel",
    alternateName: "Paving Tahu / Paving Block Half",
    eyebrow: "PAVING BLOCK PENGUNCI & PEMBATAS",
    headline: "Paving Block Half / Tahu Ukuran 10,5 × 10,5 cm untuk Pengunci Pola & Pembatas Warna",
    intro:
      "Paving block model Half atau paving tahu memiliki dimensi persegi 10,5 × 10,5 cm yang berfungsi sebagai pengunci pola pada susunan paving balok, pembatas kombinasi warna, serta aksen desain garis. Bentuknya yang fleksibel memudahkan penataan variasi pola lantai tanpa memerlukan banyak pemotongan balok manual.",
    image: "/images/products/kaha-block-half-tahu.webp",
    imageAlt: "Dokumentasi produk Paving Block Half Tahu Kaha Block",
    specs: [
      { label: "Ukuran Dimensi", value: "10,5 × 10,5 cm" },
      { label: "Pilihan Tebal", value: "6 cm, 8 cm" },
      { label: "Daya Tutup", value: "88 pcs/m²" },
      { label: "Pilihan Warna", value: "Abu-abu, Merah, Hitam, Kuning" },
      { label: "Fungsi Utama", value: "Pengunci pola paving & pembatas warna motif" },
    ],
    applications: [
      "Pembatas garis warna pada perkerasan jalan lingkungan",
      "Variasi pola motif dekoratif pada carport dan halaman rumah",
      "Aksen pembatas zona jalur pedestrian dan area taman",
      "Pengisi tepi dan transisi pola kombinasi paving bata",
    ],
    functions: [
      "Mengunci susunan pola kombinasi paving balok agar lebih rapi",
      "Menciptakan batas kontras warna alami pada marka lantai perkerasan",
      "Memperindah estetika visual perkerasan eksterior",
    ],
    relatedProductSlugs: ["truepave", "topi-uskup", "paving-hexagonal", "kanstein-jepit"],
    metaTitle: "Paving Block Half / Tahu | Spesifikasi & Fungsi | Kaha Block",
    metaDescription:
      "Paving block Half / Tahu ukuran 10,5 × 10,5 cm tebal 6 cm dan 8 cm untuk pengunci pola dan pembatas warna perkerasan. Pasokan langsung dari pabrik Kaha Block.",
  },

  "paving-hexagonal": {
    slug: "paving-hexagonal",
    key: "hexagonal",
    name: "Hexa 8 cm",
    badge: "Geometris",
    alternateName: "Paving Block Hexagonal / Segi Enam",
    eyebrow: "PAVING BLOCK GEOMETRIS",
    headline: "Paving Block Hexagonal (Segi Enam) Tebal 8 cm untuk Area Dekoratif & Pedestrian",
    intro:
      "Paving block Hexagonal (segi enam) menghadirkan pola sarang lebah geometris yang saling mengunci di setiap sisinya. Dengan ketebalan 8 cm, model ini sangat ideal untuk area pejalan kaki, pelataran taman publik, halaman komersial, maupun area dekoratif yang mengedepankan kekuatan interlocking sekaligus keindahan bentuk.",
    image: "/images/products/kaha-block-hexa-8cm.webp",
    imageAlt: "Dokumentasi produk Paving Block Hexagonal Segi Enam Kaha Block",
    specs: [
      { label: "Pilihan Tebal", value: "8 cm" },
      { label: "Pilihan Warna", value: "Abu-abu, Merah, Hitam" },
      { label: "Aplikasi Utama", value: "Area dekoratif dan pedestrian" },
      { label: "Karakteristik Bentuk", value: "Geometris segi enam saling mengunci (interlocking)" },
    ],
    applications: [
      "Jalur pedestrian dan trotoar kawasan perkotaan",
      "Halaman taman publik, ruang terbuka hijau, dan plaza",
      "Pelataran komersial ruko, kafe outdoor, dan pusat rekreasi",
      "Carport dan halaman rumah bernuansa geometris modern",
    ],
    functions: [
      "Memberikan ikatan saling mengunci (interlocking) multi-arah yang stabil",
      "Menciptakan nilai estetika pola sarang lebah yang rapi dan elegan",
      "Menopang lalu lintas pejalan kaki serta kendaraan ringan dengan baik",
    ],
    relatedProductSlugs: ["truepave", "ubin", "half-tahu", "kanstein-jepit"],
    metaTitle: "Paving Block Hexagonal | Spesifikasi & Kegunaan | Kaha Block",
    metaDescription:
      "Paving block segi enam Hexa tebal 8 cm dengan pilihan warna abu-abu, merah, dan hitam untuk area pedestrian dan dekoratif. Pengadaan langsung dari pabrik Kaha Block.",
  },

  "ubin": {
    slug: "ubin",
    key: "ubin",
    name: "Ubin 8 cm",
    badge: "Kokoh",
    alternateName: "Paving Block Ubin / Tile Paver",
    eyebrow: "PAVING BLOCK BIDANG RATA",
    headline: "Paving Block Model Ubin Tebal 8 cm untuk Trotoar Pedestrian & Pelataran Komersial",
    intro:
      "Paving block model Ubin dirancang dengan penampang bidang rata yang kokoh dan tebal 8 cm. Model ini memberikan kenyamanan optimal saat dipijak, permukaan yang rapi tanpa celah berlebih, serta nuansa minimalis modern yang sangat diminati untuk plaza komersial, pedestrian perkotaan, dan trotoar pejalan kaki.",
    image: "/images/products/kaha-block-ubin-8cm.webp",
    imageAlt: "Dokumentasi produk Paving Block Ubin Kaha Block",
    specs: [
      { label: "Pilihan Tebal", value: "8 cm" },
      { label: "Pilihan Warna", value: "Abu-abu, Merah, Hitam" },
      { label: "Karakteristik Permukaan", value: "Bidang rata luas, kokoh, dan presisi" },
    ],
    applications: [
      "Trotoar pejalan kaki dan jalur pedestrian perkotaan",
      "Pelataran plaza pusat perbelanjaan dan gedung perkantoran",
      "Area terbuka komersial dan koridor pedestrian hotel/apartemen",
      "Teras luar ruangan dan halaman bangunan modern",
    ],
    functions: [
      "Memberikan kenyamanan langkah bagi pejalan kaki dan pengguna kursi roda",
      "Menciptakan kesan visual bersih, rata, dan teratur pada bentang area luas",
      "Struktur tebal 8 cm yang kokoh dan tahan terhadap cuaca luar ruang",
    ],
    relatedProductSlugs: ["truepave", "paving-hexagonal", "kanstein-b1", "kanstein-jepit"],
    metaTitle: "Paving Block Ubin 8 cm | Spesifikasi & Aplikasi | Kaha Block",
    metaDescription:
      "Paving block model Ubin tebal 8 cm dengan bidang rata kokoh untuk trotoar pedestrian dan pelataran komersial. Pasokan langsung dari produsen Kaha Block Cisauk.",
  },

  "topi-uskup": {
    slug: "topi-uskup",
    key: "topiUskup",
    name: "Topi Uskup",
    badge: "K-300",
    alternateName: "Paving Topi Uskup / Pengunci Tepi Herringbone",
    eyebrow: "PAVING PENGUNCI SISI & SUDUT",
    headline: "Paving Topi Uskup Mutu K-300 Ukuran 30 × 21 cm untuk Pengunci Perimeter Paving",
    intro:
      "Paving Topi Uskup adalah balok paving khusus berprofil sudut yang dirancang khusus untuk mengunci tepi dan sudut susunan pola herringbone (anyaman tulang ikan). Dengan mutu beton K-300 dan ukuran 30 × 21 cm, Topi Uskup menutup batas samping secara presisi sehingga pekerja tidak perlu melakukan pemotongan balok manual yang rawan gompal dan boros material.",
    image: "/images/products/kaha-block-topi-uskup.webp",
    imageAlt: "Dokumentasi produk Paving Topi Uskup Kaha Block",
    specs: [
      { label: "Ukuran Dimensi", value: "30 × 21 cm" },
      { label: "Pilihan Tebal", value: "6 cm dan 8 cm" },
      { label: "Kuat Tekan / Mutu Beton", value: "K-300" },
      { label: "Daya Tutup", value: "3,3 pcs/m (meter lari tepi)" },
      { label: "Perkiraan Berat", value: "6 cm: ≈ 5,5 kg | 8 cm: ≈ 7,4 kg" },
      { label: "Material Bahan", value: "Beton padat presisi" },
      { label: "Pilihan Warna", value: "Abu-abu" },
    ],
    applications: [
      "Batas tepi perkerasan jalan lingkungan yang dipasang pola herringbone",
      "Sisi samping carport rumah dan area parkir perumahan",
      "Perbatasan antara paving block dengan kanstein pembatas luar",
      "Sudut dan tepi perkerasan kawasan komersial",
    ],
    functions: [
      "Mengunci sisi dan sudut susunan paving agar tidak bergeser ke arah lateral",
      "Menghilangkan pemotongan balok paving manual di tepi sehingga lebih hemat waktu dan bahan",
      "Menjaga susunan perkerasan tetap rapi, stabil, dan presisi dalam jangka panjang",
    ],
    relatedProductSlugs: ["truepave", "half-tahu", "kanstein-jepit", "kanstein-b1"],
    metaTitle: "Paving Topi Uskup | Spesifikasi Mutu K-300 | Kaha Block",
    metaDescription:
      "Paving Topi Uskup ukuran 30 × 21 cm mutu K-300 tebal 6 cm dan 8 cm untuk pengunci tepi pola herringbone. Diproduksi di pabrik Kaha Block Cisauk Tangerang.",
  },

  "kanstein-jepit": {
    slug: "kanstein-jepit",
    key: "kanstein",
    name: "Kanstein Jepit",
    badge: "Pengunci Tepi",
    alternateName: "Kanstin Jepit / Kerb Beton Pengunci",
    eyebrow: "PRODUK PENDUKUNG PEMBATAS",
    headline: "Kanstein Jepit Beton untuk Mengunci Perimeter Pemasangan Paving Block",
    intro:
      "Kanstein Jepit adalah elemen kerb beton yang dipasang di sepanjang tepi luar perimeter perkerasan paving block. Fungsinya sangat krusial: menahan dorongan lateral dari roda kendaraan agar pasir bedding dan balok paving tidak bergeser keluar, serta menjaga struktur perkerasan tetap padat dan tidak mudah amblas di bagian pinggir.",
    image: "/images/products/kaha-block-kanstein-jepit.webp",
    imageAlt: "Dokumentasi produk Kanstein Jepit Kaha Block",
    specs: [
      { label: "Kategori Produk", value: "Produk pembatas / pengunci paving (Curb)" },
      { label: "Material Bahan", value: "Beton padat presisi" },
      { label: "Fungsi Utama", value: "Membantu mengunci tepi pemasangan paving block" },
      { label: "Catatan Spesifikasi", value: "Spesifikasi detail dan ukuran bervariasi sesuai kebutuhan proyek" },
    ],
    applications: [
      "Batas perimeter luar perkerasan jalan lingkungan komplek perumahan",
      "Pengunci tepi area parkir kendaraan, ruko, dan pusat usaha",
      "Pembatas trotoar pejalan kaki dengan taman atau bahu jalan",
      "Pemisah antara area paving block dengan permukaan tanah atau rumput",
    ],
    functions: [
      "Menahan gaya geser lateral roda kendaraan pada susunan balok paving",
      "Mencegah pasir alas (bedding sand) hanyut terbawa aliran air hujan di bagian pinggir",
      "Membuat garis batas perkerasan terlihat rapi, kokoh, dan berumur panjang",
    ],
    relatedProductSlugs: ["truepave", "topi-uskup", "kanstein-b1", "stoper"],
    metaTitle: "Kanstein Jepit | Spesifikasi Pengunci Tepi Paving | Kaha Block",
    metaDescription:
      "Kanstein jepit beton pengunci tepi perkerasan paving block untuk mencegah pergeseran lateral. Melayani pengadaan proyek di Jakarta, Tangerang, dan Jabodetabek.",
  },

  "kanstein-b1": {
    slug: "kanstein-b1",
    key: "kansteinB1",
    name: "Kanstein B1",
    badge: "Pembatas Jalan",
    alternateName: "Kanstin B1 / Kerb Jalan Beton B1",
    eyebrow: "PRODUK PENDUKUNG PEMBATAS JALAN",
    headline: "Kanstein B1 Beton untuk Pembatas Bahu Jalan & Area Pedestrian",
    intro:
      "Kanstein tipe B1 merupakan produk kerb beton berprofil pembatas jalan yang kokoh. Kanstein B1 umumnya difungsikan sebagai pembatas antara bahu jalan dengan trotoar pejalan kaki, pemisah jalur sirkulasi kendaraan, serta penahan perbedaan elevasi tanah pada kawasan perkotaan, komersial, maupun perumahan berskala besar.",
    image: "/images/products/kaha-block-kanstein-b1.webp",
    imageAlt: "Dokumentasi produk Kanstein B1 Kaha Block",
    specs: [
      { label: "Kategori Produk", value: "Produk pembatas jalan / kanstein beton" },
      { label: "Material Bahan", value: "Beton padat presisi" },
      { label: "Fungsi Utama", value: "Pembatas bahu jalan & area pedestrian" },
      { label: "Catatan Spesifikasi", value: "Spesifikasi detail dan ukuran bervariasi sesuai kebutuhan proyek" },
    ],
    applications: [
      "Bahu jalan perumahan, kawasan komersial, dan jalan umum perkotaan",
      "Pemisah antara jalur kendaraan dengan trotoar pedestrian",
      "Penahan struktur elevasi pada area taman dan pulau jalan (median)",
      "Area perkerasan kawasan industri dan pergudangan",
    ],
    functions: [
      "Menjaga keteraturan jalur sirkulasi kendaraan dan pejalan kaki",
      "Menahan elevasi trotoar agar struktur tanah dan paving di atasnya tetap stabil",
      "Memberikan perlindungan fisik tepi jalan dari lintasan ban mobil",
    ],
    relatedProductSlugs: ["kanstein-jepit", "kanstein-s", "stoper", "truepave"],
    metaTitle: "Kanstein B1 | Spesifikasi Pembatas Jalan Beton | Kaha Block",
    metaDescription:
      "Kanstein beton tipe B1 untuk pembatas bahu jalan, elevasi trotoar, dan area pedestrian kawasan komersial. Pasokan langsung dari pabrik Kaha Block Cisauk.",
  },

  "kanstein-s": {
    slug: "kanstein-s",
    key: "kansteinS",
    name: "Kanstein S",
    badge: "Drainase & Tepi",
    alternateName: "Kanstin S / Kerb Tali Air Drainase",
    eyebrow: "PRODUK PENDUKUNG DRAINASE TEPI",
    headline: "Kanstein S Beton dengan Alur Tali Air untuk Saluran Tepi & Pembatas Trotoar",
    intro:
      "Kanstein tipe S memiliki profil lengkung khusus yang berfungsi ganda sebagai saluran air tepi jalan (tali air) sekaligus pembatas trotoar atau bahu perkerasan. Desain alur tipe S membantu mengarahkan limpasan air hujan langsung menuju bak kontrol drainase tanpa menggenangi permukaan jalan paving.",
    image: "/images/products/kaha-block-kanstein-s.webp",
    imageAlt: "Dokumentasi produk Kanstein S Kaha Block",
    specs: [
      { label: "Kategori Produk", value: "Produk pembatas jalan tipe S (Curb Drainase)" },
      { label: "Material Bahan", value: "Beton padat presisi" },
      { label: "Fungsi Utama", value: "Saluran air tepi & pembatas trotoar perkerasan" },
      { label: "Catatan Spesifikasi", value: "Spesifikasi detail dan ukuran bervariasi sesuai kebutuhan proyek" },
    ],
    applications: [
      "Saluran tepi jalan lingkungan perumahan modern",
      "Batas perimeter pedestrian kawasan komersial yang membutuhkan drainase permukaan rapi",
      "Area parkir terbuka yang memerlukan pengaliran air terarah ke gutter",
      "Perkerasan kawasan fasilitas umum dan perkantoran",
    ],
    functions: [
      "Mengarahkan aliran limpasan air hujan di pinggir jalan menuju saluran drainase",
      "Mencegah genangan air meresap ke lapisan pasir pondasi paving tepi",
      "Berfungsi sebagai kerb pembatas trotoar yang aman dan estetis",
    ],
    relatedProductSlugs: ["kanstein-b1", "kanstein-jepit", "stoper", "truepave"],
    metaTitle: "Kanstein S | Spesifikasi Kerb Tali Air Drainase | Kaha Block",
    metaDescription:
      "Kanstein tipe S dengan alur drainase (tali air) untuk saluran tepi jalan dan pembatas trotoar. Diproduksi oleh PT Kaha Sukses Mandiri melayani Jabodetabek.",
  },

  "stoper": {
    slug: "stoper",
    key: "stoper",
    name: "Stoper",
    badge: "Batas Parkir",
    alternateName: "Stoper Parkir / Car Stopper Beton",
    eyebrow: "PRODUK PENDUKUNG PARKIR",
    headline: "Stoper Parkir Beton untuk Pembatas Penghenti Roda Kendaraan yang Aman",
    intro:
      "Stoper parkir (car stopper) beton adalah elemen penghenti roda ban kendaraan yang dipasang di setiap slot parkir. Berfungsi untuk mencegah mobil mundur atau maju melebihi batas kavling parkir, sehingga melindungi dinding bangunan, pedestrian trotoar, maupun kendaraan lain dari benturan.",
    image: "/images/products/kaha-block-stoper.webp",
    imageAlt: "Dokumentasi produk Stoper Parkir Kaha Block",
    specs: [
      { label: "Kategori Produk", value: "Produk pembatas / penghenti roda kendaraan (Car Stopper)" },
      { label: "Material Bahan", value: "Beton padat presisi" },
      { label: "Fungsi Utama", value: "Pengaman batas parkir kendaraan agar tertib dan aman" },
      { label: "Catatan Spesifikasi", value: "Spesifikasi detail dan ukuran bervariasi sesuai kebutuhan proyek" },
    ],
    applications: [
      "Pelataran parkir ruko komersial dan pusat perbelanjaan",
      "Gedung perkantoran, perhotelan, dan rumah sakit",
      "Area parkir cluster perumahan dan carport hunian pribadi",
      "Area loading dan parkir fasilitas logistik kawasan industri",
    ],
    functions: [
      "Menghentikan laju roda mobil tepat pada batas slot parkir yang ditentukan",
      "Mencegah benturan antara bodi kendaraan dengan dinding atau pembatas trotoar",
      "Menciptakan penataan parkir kendaraan yang seragam, rapi, dan teratur",
    ],
    relatedProductSlugs: ["kanstein-jepit", "kanstein-b1", "truepave", "ubin"],
    metaTitle: "Stoper Parkir Beton | Spesifikasi Pembatas Roda | Kaha Block",
    metaDescription:
      "Car stopper beton pembatas roda kendaraan untuk area parkir ruko, perkantoran, dan perumahan. Dapatkan penawaran resmi langsung dari produsen Kaha Block.",
  },
};

export const PRODUCTS_DATA_EN: Record<ProductSlug, ProductData> = {
  "truepave": {
    slug: "truepave",
    key: "truepave",
    name: "Truepave",
    badge: "Standard Paver",
    alternateName: "Truepave Rectangular Paving Block",
    eyebrow: "CORE PAVING BLOCK PRODUCT",
    headline: "Precision Truepave Rectangular Pavers for Neighborhood Roads & Parking Areas",
    intro:
      "Truepave is the standard rectangular brick-shaped paving block model that serves as the premier choice for neighborhood roads, commercial parking lots, industrial logistics areas, and pedestrian walkways. Manufactured using automated hydraulic press machinery at Kaha Block's Cisauk plant in Tangerang Regency, Truepave delivers high dimensional precision and tight tolerances.",
    image: "/images/products/kaha-block-truepave.webp",
    imageAlt: "Kaha Block Truepave Paving Block product documentation",
    specs: [
      { label: "Color Options", value: "Grey, Red, Black, Yellow" },
      { label: "Thickness Options", value: "6 cm, 8 cm, 10 cm" },
      { label: "Size Tolerance", value: "± 2 mm & 2 kg" },
      { label: "Raw Materials", value: "Holcim Dynamix bulk cement and SCG bag cement" },
      { label: "Water Absorption", value: "Max 6%" },
      { label: "Surface Characteristics", value: "Smooth, non-slip, durable coloration" },
      { label: "Concrete Grade Options", value: "K-250, K-300, K-400 (confirmed upon order)" },
    ],
    applications: [
      "Residential cluster streets and neighborhood roads",
      "Commercial shophouse parking lots and business centers",
      "Warehouse loading docks and industrial vehicular corridors",
      "Pedestrian sidewalks and public garden pathways",
    ],
    functions: [
      "Withstands daily passenger traffic up to heavy freight vehicles depending on thickness",
      "Neat and consistent alignment enabled by strict dimensional tolerances",
      "Supports natural stormwater infiltration through sand-filled joint gaps",
      "Compatible with herringbone (45° or 90°) or stretcher bond laying patterns",
    ],
    relatedProductSlugs: ["half-tahu", "topi-uskup", "paving-hexagonal", "kanstein-jepit"],
    metaTitle: "Truepave | Precision Paving Block | Kaha Block",
    metaDescription:
      "Precision Truepave rectangular paving blocks with 6 cm, 8 cm, and 10 cm height options directly manufactured at Kaha Block's factory in Cisauk, Tangerang.",
  },

  "half-tahu": {
    slug: "half-tahu",
    key: "half",
    name: "Half / Tahu",
    badge: "Flexible",
    alternateName: "Square Half Paver / Paving Tahu",
    eyebrow: "PATTERN LOCKING & BORDER PAVER",
    headline: "Half / Tahu Pavers (10.5 × 10.5 cm) for Pattern Interlocking & Color Borders",
    intro:
      "The Half (paving tahu) model features a compact 10.5 × 10.5 cm square dimension that functions as an interlocking pattern anchor, color demarcation boundary, and decorative motif accent. Its flexible geometry facilitates creative exterior floor patterns with minimal need for manual cutting on site.",
    image: "/images/products/kaha-block-half-tahu.webp",
    imageAlt: "Kaha Block Half Tahu Paving Block product documentation",
    specs: [
      { label: "Dimensions", value: "10.5 × 10.5 cm" },
      { label: "Thickness Options", value: "6 cm, 8 cm" },
      { label: "Coverage", value: "88 pcs/m²" },
      { label: "Color Options", value: "Grey, Red, Black, Yellow" },
      { label: "Primary Function", value: "Pattern locking & color border accentuation" },
    ],
    applications: [
      "Contrasting color perimeter bands on neighborhood pavements",
      "Decorative patterned accents in carports and residential courtyards",
      "Demarcation lines in pedestrian corridors and landscaped parks",
      "Edge infill and pattern transition along brick paver layouts",
    ],
    functions: [
      "Anchors combination paving layouts for enhanced structural stability",
      "Creates clean, permanent visual lines without surface paint",
      "Elevates exterior architectural aesthetics with geometric rhythm",
    ],
    relatedProductSlugs: ["truepave", "topi-uskup", "paving-hexagonal", "kanstein-jepit"],
    metaTitle: "Half / Tahu Paver | Specifications & Uses | Kaha Block",
    metaDescription:
      "Half / Tahu square pavers (10.5 × 10.5 cm) in 6 cm and 8 cm thicknesses for pattern locking and border accents. Direct supply from Kaha Block factory.",
  },

  "paving-hexagonal": {
    slug: "paving-hexagonal",
    key: "hexagonal",
    name: "Hexa 8 cm",
    badge: "Geometric",
    alternateName: "Hexagonal Paving Block 8 cm",
    eyebrow: "GEOMETRIC INTERLOCKING PAVER",
    headline: "Hexagonal Paving Blocks in 8 cm Thickness for Decorative & Pedestrian Areas",
    intro:
      "Hexagonal paving blocks provide a multi-faceted honeycomb pattern that naturally interlocks across all six sides. Engineered with an 8 cm structural thickness, this model is ideal for urban walkways, public park courtyards, commercial terraces, and landscaped plazas that demand multi-directional lateral stability and geometric elegance.",
    image: "/images/products/kaha-block-hexa-8cm.webp",
    imageAlt: "Kaha Block Hexagonal Paving Block product documentation",
    specs: [
      { label: "Thickness Options", value: "8 cm" },
      { label: "Color Options", value: "Grey, Red, Black" },
      { label: "Primary Application", value: "Decorative and pedestrian pavements" },
      { label: "Design Character", value: "Six-sided multi-directional interlocking geometry" },
    ],
    applications: [
      "Urban pedestrian sidewalks and public transit corridors",
      "Public park open spaces, recreational promenades, and civic plazas",
      "Outdoor cafe terraces and commercial lifestyle courtyards",
      "Modern residential carports and perimeter landscaping",
    ],
    functions: [
      "Delivers robust multi-directional lateral interlock resistance",
      "Produces a visually striking honeycomb paving pattern",
      "Comfortably accommodates foot traffic and light service vehicles",
    ],
    relatedProductSlugs: ["truepave", "ubin", "half-tahu", "kanstein-jepit"],
    metaTitle: "Hexagonal Paving Block 8 cm | Specifications | Kaha Block",
    metaDescription:
      "Hexagonal interlocking pavers in 8 cm thickness and multiple color options for decorative pathways and pedestrian areas. Direct supply from Kaha Block.",
  },

  "ubin": {
    slug: "ubin",
    key: "ubin",
    name: "Tile 8 cm",
    badge: "Sturdy",
    alternateName: "Tile Paver 8 cm",
    eyebrow: "PLANAR CONCRETE PAVING TILE",
    headline: "Tile Model Concrete Pavers in 8 cm Thickness for Urban Sidewalks & Commercial Plazas",
    intro:
      "The Tile (Ubin) paving block is designed with a broad, flat planar surface and substantial 8 cm thickness. It provides optimal walking comfort, minimal surface tripping hazards, and a crisp minimalist aesthetic favored in civic plazas, modern shopping arcades, and high-footfall pedestrian avenues.",
    image: "/images/products/kaha-block-ubin-8cm.webp",
    imageAlt: "Kaha Block Tile Paving Block product documentation",
    specs: [
      { label: "Thickness Options", value: "8 cm" },
      { label: "Color Options", value: "Grey, Red, Black" },
      { label: "Surface Characteristics", value: "Broad planar surface, sturdy, and dimensionally accurate" },
    ],
    applications: [
      "Civic sidewalks and urban pedestrian transit thoroughfares",
      "Retail center forecourts and office park entrance plazas",
      "Commercial outdoor terraces and apartment promenade corridors",
      "Contemporary residential patios and courtyard landscapes",
    ],
    functions: [
      "Ensures barrier-free, smooth pedestrian and wheelchair transit",
      "Creates an uncluttered, modern geometric appearance on large surface areas",
      "Durable 8 cm solid concrete body withstands outdoor weathering and cyclic footfall",
    ],
    relatedProductSlugs: ["truepave", "paving-hexagonal", "kanstein-b1", "kanstein-jepit"],
    metaTitle: "Tile Paver 8 cm | Specifications & Applications | Kaha Block",
    metaDescription:
      "Sturdy 8 cm concrete tile pavers for urban walkways, commercial plazas, and pedestrian walkways from Kaha Block manufacturing facility in Tangerang.",
  },

  "topi-uskup": {
    slug: "topi-uskup",
    key: "topiUskup",
    name: "Bishop Hat",
    badge: "K-300",
    alternateName: "Bishop Hat Paver / Herringbone Edge Paver",
    eyebrow: "EDGE RESTRAINT PAVER",
    headline: "Bishop Hat Edge Paver (K-300 Grade, 30 × 21 cm) for Herringbone Pavement Locking",
    intro:
      "The Bishop Hat (Topi Uskup) is an engineered angled perimeter paver tailored specifically to enclose herringbone patterns cleanly. Featuring K-300 compressive strength and standardized 30 × 21 cm dimensions, it locks herringbone edges tightly against outer curbs without requiring wasteful on-site manual block cutting.",
    image: "/images/products/kaha-block-topi-uskup.webp",
    imageAlt: "Kaha Block Bishop Hat Paver product documentation",
    specs: [
      { label: "Dimensions", value: "30 × 21 cm" },
      { label: "Thickness Options", value: "6 cm and 8 cm" },
      { label: "Compressive Strength", value: "K-300" },
      { label: "Linear Coverage", value: "3.3 pcs/m (linear meter of edge)" },
      { label: "Approximate Weight", value: "6 cm: ≈ 5.5 kg | 8 cm: ≈ 7.4 kg" },
      { label: "Material", value: "High-density concrete" },
      { label: "Color Options", value: "Grey" },
    ],
    applications: [
      "Perimeter edge containment on herringbone residential access roads",
      "Side restraints for housing carport driveways and parking bays",
      "Interface boundary between brick paving fields and perimeter curbs",
      "Edge locking for commercial complex circulation routes",
    ],
    functions: [
      "Restrains herringbone paving layouts from outward lateral migration under traffic",
      "Eliminates erratic manual block chopping on site, saving labor and material",
      "Maintains long-term structural tightness and visual alignment across perimeter lines",
    ],
    relatedProductSlugs: ["truepave", "half-tahu", "kanstein-jepit", "kanstein-b1"],
    metaTitle: "Bishop Hat Paver | K-300 Compressive Strength | Kaha Block",
    metaDescription:
      "Bishop hat edge pavers (30 × 21 cm) with K-300 compressive strength in 6 cm and 8 cm thicknesses for herringbone edge locking by Kaha Block.",
  },

  "kanstein-jepit": {
    slug: "kanstein-jepit",
    key: "kanstein",
    name: "Kanstein Jepit",
    badge: "Edge Lock",
    alternateName: "Edge Curb / Pavement Lock Curb",
    eyebrow: "SUPPORTING CURB PRODUCT",
    headline: "Concrete Kanstein Jepit to Secure & Restrain Paving Pavement Perimeters",
    intro:
      "Kanstein Jepit is an essential precast concrete perimeter curb installed around paving block installations. Its role is indispensable: it resists lateral shear forces exerted by vehicle tires, holding both the bedding sand layer and paver blocks securely in place to stop edge spreading and pavement rutting.",
    image: "/images/products/kaha-block-kanstein-jepit.webp",
    imageAlt: "Kaha Block Kanstein Jepit product documentation",
    specs: [
      { label: "Product Category", value: "Paving border / restraint curb" },
      { label: "Material", value: "Dense precast concrete" },
      { label: "Primary Function", value: "Secures and restrains outer edges of paving blocks" },
      { label: "Specification Note", value: "Detailed dimensions and weights vary based on project requirements" },
    ],
    applications: [
      "Outer perimeter edges of residential subdivision roads",
      "Border containment for commercial parking bays and shophouse fronts",
      "Sidewalk border separating paved footpaths from garden soil",
      "Boundary divider between paving stone fields and landscape beds",
    ],
    functions: [
      "Counteracts dynamic lateral thrust generated by turning and braking vehicle wheels",
      "Prevents bedding sand wash-out along edges during seasonal rainfall",
      "Provides a clean, durable architectural frame for prolonged pavement life",
    ],
    relatedProductSlugs: ["truepave", "topi-uskup", "kanstein-b1", "stoper"],
    metaTitle: "Kanstein Jepit | Edge Curb Specifications | Kaha Block",
    metaDescription:
      "Concrete edge curbs (kanstein jepit) designed to lock pavement perimeters and prevent lateral shifting. Direct factory supply across Greater Jakarta.",
  },

  "kanstein-b1": {
    slug: "kanstein-b1",
    key: "kansteinB1",
    name: "Kanstein B1",
    badge: "Road Curb",
    alternateName: "Road Curb B1 / Kanstein B1",
    eyebrow: "ROAD CURB INFRASTRUCTURE",
    headline: "Concrete Kanstein B1 for Roadway Shoulders & Pedestrian Elevation Separation",
    intro:
      "The B1 type concrete road curb is a robust precast civil element designed to demarcate roadways and support elevation changes. Kanstein B1 separates vehicle carriageways from pedestrian sidewalks, maintains traffic channelization, and retains raised grade layers across municipal, commercial, and large-scale residential projects.",
    image: "/images/products/kaha-block-kanstein-b1.webp",
    imageAlt: "Kaha Block Kanstein B1 product documentation",
    specs: [
      { label: "Product Category", value: "Road curb / infrastructure boundary unit" },
      { label: "Material", value: "Dense precast concrete" },
      { label: "Primary Function", value: "Road shoulder boundary & pedestrian elevation barrier" },
      { label: "Specification Note", value: "Detailed dimensions and profiles vary by project specifications" },
    ],
    applications: [
      "Road shoulders across residential master plans, commercial areas, and urban streets",
      "Elevation barrier separating vehicular lanes from elevated walkways",
      "Retaining edge for landscaped medians and roadway traffic islands",
      "Corridor boundaries in industrial logistics and distribution parks",
    ],
    functions: [
      "Maintains safe, organized separation between moving vehicles and pedestrians",
      "Retains elevated walkway soil and subbase layers to prevent lateral collapse",
      "Provides physical edge guidance for vehicle tires along roadways",
    ],
    relatedProductSlugs: ["kanstein-jepit", "kanstein-s", "stoper", "truepave"],
    metaTitle: "Kanstein B1 | Road Curb Specifications | Kaha Block",
    metaDescription:
      "Standard B1 road curb concrete elements for roadside boundaries, sidewalk separation, and commercial vehicle lanes from Kaha Block plant in Cisauk.",
  },

  "kanstein-s": {
    slug: "kanstein-s",
    key: "kansteinS",
    name: "Kanstein S",
    badge: "Drainage & Curb",
    alternateName: "Kanstein S / Gutter Drainage Curb",
    eyebrow: "DRAINAGE PROFILE CURB",
    headline: "S-Type Concrete Gutter Curb for Surface Runoff Drainage & Sidewalk Containment",
    intro:
      "Kanstein S features a specially contoured profile that performs dual duties: channeling rainwater runoff along roadway gutters while serving as a perimeter curb for sidewalks. Its shaped channel guides surface water smoothly toward catchment basins, keeping paved road surfaces free from standing water puddles.",
    image: "/images/products/kaha-block-kanstein-s.webp",
    imageAlt: "Kaha Block Kanstein S product documentation",
    specs: [
      { label: "Product Category", value: "S-type drainage curb unit (Gutter Curb)" },
      { label: "Material", value: "Dense precast concrete" },
      { label: "Primary Function", value: "Roadside gutter drainage & sidewalk border" },
      { label: "Specification Note", value: "Detailed dimensions and weights vary by project design" },
    ],
    applications: [
      "Roadside drainage channels in modern residential subdivisions",
      "Perimeter curbs for commercial parking lots requiring directed runoff flow",
      "Pedestrian avenues requiring neat integrated guttering along edge kerbs",
      "Public facility open areas and civic infrastructure projects",
    ],
    functions: [
      "Directs rainfall runoff along the pavement edge straight to drainage inlets",
      "Prevents surface water from ponding and infiltrating edge sub-sand bedding",
      "Functions as an attractive, safe border separating walkways from streets",
    ],
    relatedProductSlugs: ["kanstein-b1", "kanstein-jepit", "stoper", "truepave"],
    metaTitle: "Kanstein S | Gutter Drainage Curb Specifications | Kaha Block",
    metaDescription:
      "S-type road curb units featuring integrated drainage gutter profiles for residential streets and urban sidewalks by PT Kaha Sukses Mandiri.",
  },

  "stoper": {
    slug: "stoper",
    key: "stoper",
    name: "Stoper",
    badge: "Wheel Stop",
    alternateName: "Concrete Car Stopper / Wheel Stop",
    eyebrow: "PARKING LOT ACCESSORY",
    headline: "Solid Concrete Wheel Stops for Safe, Orderly Vehicle Parking Demarcation",
    intro:
      "Concrete car wheel stops (stoper parkir) are rugged vehicle parking barriers anchored in parking bays. They safely arrest vehicle tires before bumpers strike building walls, walkway curbs, landscaped beds, or neighboring vehicles, ensuring disciplined parking layout in residential and commercial facilities.",
    image: "/images/products/kaha-block-stoper.webp",
    imageAlt: "Kaha Block Concrete Wheel Stop product documentation",
    specs: [
      { label: "Product Category", value: "Vehicle wheel stop barrier (Car Stopper)" },
      { label: "Material", value: "Dense precast concrete" },
      { label: "Primary Function", value: "Safeguards parking boundaries for orderly vehicle parking" },
      { label: "Specification Note", value: "Detailed dimensions and profiles vary according to project requirements" },
    ],
    applications: [
      "Commercial shophouse forecourts and retail shopping mall parking lots",
      "Office buildings, hotels, medical centers, and public institutions",
      "Residential cluster parking bays and private home carports",
      "Logistics distribution centers and industrial vehicle staging areas",
    ],
    functions: [
      "Halts passenger car and light vehicle wheels within designated stall depths",
      "Protects exterior walls, storefront glazing, and curbs from bumper impact",
      "Establishes a uniform, professional, and orderly parking layout",
    ],
    relatedProductSlugs: ["kanstein-jepit", "kanstein-b1", "truepave", "ubin"],
    metaTitle: "Concrete Wheel Stop | Parking Barrier Specifications | Kaha Block",
    metaDescription:
      "Solid concrete wheel stop barriers for commercial parking lots, residential carports, and office facilities. Direct supply from Kaha Block.",
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
