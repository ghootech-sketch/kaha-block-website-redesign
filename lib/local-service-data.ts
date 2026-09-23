import { Locale } from "./dictionary";
import { BUSINESS_FACTS } from "./business-facts";

export interface FAQItem {
  q: string;
  a: string;
}

export interface SubregionContext {
  name: string;
  useCase: string;
}

export type RegionalSlug = "jakarta" | "tangerang" | "bekasi" | "depok" | "bogor";

export interface RegionalPageContent {
  slug: RegionalSlug;
  eyebrow: string;
  h1: string;
  heroDesc: string;
  factoryContextNotice: string;
  keyBenefits: { title: string; desc: string }[];
  subregionsTitle: string;
  subregionsIntro: string;
  subregions: SubregionContext[];
  useCaseSectionTitle: string;
  useCases: { title: string; desc: string }[];
  contractorSectionTitle?: string;
  contractorSectionDesc?: string;
  deliveryNotice: string;
  installationNotice: string;
  trustFactsTitle: string;
  trustFacts: { label: string; value: string }[];
  faqs: FAQItem[];
  ctaHeading: string;
  ctaDesc: string;
}

export interface InstallationPageContent {
  eyebrow: string;
  h1: string;
  heroDesc: string;
  advantagesTitle: string;
  advantagesIntro: string;
  advantages: { title: string; desc: string }[];
  contractorSectionTitle?: string;
  contractorSectionDesc?: string;
  scopeTitle: string;
  scopeIntro: string;
  scopes: { title: string; desc: string }[];
  workflowTitle: string;
  workflowSteps: { step: string; title: string; desc: string }[];
  materialsTitle: string;
  materialsDesc: string;
  coverageTitle: string;
  coverageDesc: string;
  regionalLinks: { slug: string; name: string; desc: string }[];
  trustTitle: string;
  trustFacts: { label: string; value: string }[];
  faqs: FAQItem[];
  ctaHeading: string;
  ctaDesc: string;
}

export interface AreaHubContent {
  eyebrow: string;
  h1: string;
  heroDesc: string;
  hubIntro: string;
  regionalCards: {
    slug: "jakarta" | "tangerang" | "bekasi" | "depok" | "bogor";
    name: string;
    subdivisionText: string;
    description: string;
    badge: string;
  }[];
  deliveryStatement: string;
  installationStatement: string;
  faqs: FAQItem[];
  ctaHeading: string;
  ctaDesc: string;
}

export const INSTALLATION_DATA: Record<Locale, InstallationPageContent> = {
  id: {
    eyebrow: "LAYANAN KONTRAKTOR & KEMITRAAN",
    h1: "Jasa Pemasangan Paving Block Jabodetabek",
    heroDesc:
      "PT Kaha Sukses Mandiri (Kaha Block) melayani pengadaan material paving block presisi sekaligus jasa pemasangan profesional oleh tim pemasangan berpengalaman untuk kawasan perumahan, area komersial, pergudangan, dan jalan lingkungan di seluruh wilayah Jabodetabek.",
    advantagesTitle: "Keunggulan Layanan Pemasangan Terintegrasi",
    advantagesIntro:
      "Memilih layanan terintegrasi langsung dari produsen memastikan kualitas material dan presisi pemasangan berada dalam satu standar mutu.",
    contractorSectionTitle: "Kontraktor Paving Block untuk Proyek di Jabodetabek",
    contractorSectionDesc:
      "Selain memproduksi dan memasok material paving block, Kaha Block juga melayani pekerjaan sebagai kontraktor pemasangan paving block untuk kebutuhan hunian, komersial, pergudangan, kawasan industri, area parkir, dan jalan lingkungan di wilayah Jabodetabek. Layanan kontraktor ini mencakup spesialisasi pengerjaan tanah dasar, pasir abu batu, penyusunan paving presisi, pengunci kanstein, dan pemadatan akhir.",
    advantages: [
      {
        title: "Material Presisi Langsung dari Pabrik",
        desc: "Paving block diproduksi dengan mesin full otomatis hidrolik di fasilitas Cisauk, Kabupaten Tangerang, menghasilkan kuat tekan dan kerapian ukuran yang konsisten.",
      },
      {
        title: "Tim Pemasangan Berpengalaman",
        desc: "Dikerjakan oleh tim pemasangan berpengalaman yang memahami teknis fondasi pasir abu batu, pemadatan stamper, hingga kunci kanstein penahan.",
      },
      {
        title: "Dukungan Pengiriman & Penurunan Barang",
        desc: "Pengiriman material menggunakan armada pengiriman Kaha Block dengan jaminan gratis pengiriman dan penurunan barang di lokasi proyek wilayah Jabodetabek.",
      },
      {
        title: "Transparansi Penawaran & Standar Pemasangan",
        desc: "Perhitungan estimasi kebutuhan volume m², penentuan spesifikasi mutu beton (K-250, K-300, K-400), serta alur kerja pengerjaan dituangkan secara jelas dalam penawaran resmi tanpa biaya tersembunyi.",
      },
    ],
    scopeTitle: "Cakupan Peruntukan Pemasangan Paving Block",
    scopeIntro:
      "Kami melayani pekerjaan pemasangan konblock dan paving block untuk berbagai tipe infrastruktur darat dan properti:",
    scopes: [
      {
        title: "Halaman & Garasi Perumahan",
        desc: "Penataan halaman rumah tinggal, garasi mobil, serta akses jalan komplek perumahan agar bebas becek dan tampak rapi estetis.",
      },
      {
        title: "Jalan Lingkungan & Kawasan Pemukiman",
        desc: "Pemasangan paving block tebal 6 cm dan 8 cm mutu K-300 / K-400 untuk jalan warga, gang perumahan, serta infrastruktur lingkungan.",
      },
      {
        title: "Area Parkir Perkantoran & Ruko",
        desc: "Kebutuhan perkerasan pelataran ruko, area parkir kendaraan komersial, dan pusat perbelanjaan dengan daya tahan beban tinggi.",
      },
      {
        title: "Kawasan Industri & Pergudangan",
        desc: "Perkerasan area operasional pabrik, pelataran maneuver truk kargo, serta apron gudang menggunakan paving tebal 8 cm mutu K-400.",
      },
      {
        title: "Pedestrian & Fasilitas Umum",
        desc: "Jalur pejalan kaki, trotoar jalan, lapangan olahraga, area taman kota, serta halaman tempat ibadah dan sekolah.",
      },
    ],
    workflowTitle: "Alur Kerja Pemasangan Paving Block",
    workflowSteps: [
      {
        step: "01",
        title: "Konsultasi & Estimasi Kebutuhan",
        desc: "Diskusi awal mengenai lokasi proyek, luas area (m²), tipe paving block, serta rencana intensitas beban lalu lintas.",
      },
      {
        step: "02",
        title: "Survei & Pengukuran Lapangan",
        desc: "Pemeriksaan kondisi tanah, kemiringan drainase, serta perhitungan presisi kebutuhan material dasar dan paving block.",
      },
      {
        step: "03",
        title: "Penawaran Resmi & Kesepakatan Schedule",
        desc: "Penerbitan surat penawaran harga transparan mencakup spesifikasi material, jasa pasang, dan estimasi waktu pengerjaan.",
      },
      {
        step: "04",
        title: "Persiapan Lahan & Leveling",
        desc: "Pembersihan tanah dasar, pemadatan subgrade, serta penggelapan lapisan pasir levelling abu batu setebal 3–5 cm.",
      },
      {
        step: "05",
        title: "Pemasangan Paving & Pengunci Kanstein",
        desc: "Penyusunan pola ikatan paving block secara presisi diapit oleh jepitan kanstein sebagai penahan tepi.",
      },
      {
        step: "06",
        title: "Pengisian Nut & Compacting Akhir",
        desc: "Pengisian celah antar paving dengan abu batu halus lalu dipadatkan menggunakan baby roller / stamper kodok untuk kerapian dan kepadatan ikatan.",
      },
    ],
    materialsTitle: "Pilihan Material Paving Block & Kanstein",
    materialsDesc:
      "Kaha Block menyediakan berbagai varian model seperti Truepave (Bata), Half / Tahu, Hexagonal (Segi Six), Ubin (Segi Four), Grass Block, serta Kanstein Jepit & S.",
    coverageTitle: "Area Layanan Jasa Pemasangan Paving Block",
    coverageDesc:
      "Layanan pemasangan dan pengadaan material Kaha Block mencakup seluruh kota dan kabupaten di wilayah Jabodetabek:",
    regionalLinks: [
      {
        slug: "jakarta",
        name: "DKI Jakarta",
        desc: "Melayani Jakarta Selatan, Jakarta Timur, Jakarta Barat, Jakarta Utara, dan Jakarta Pusat.",
      },
      {
        slug: "tangerang",
        name: "Tangerang Raya",
        desc: "Fasilitas pabrik utama di Cisauk, melayani Kabupaten Tangerang, Kota Tangerang, dan Tangerang Selatan.",
      },
      {
        slug: "bekasi",
        name: "Bekasi",
        desc: "Melayani pengadaan dan pemasangan untuk proyek di Kota Bekasi dan Kabupaten Bekasi.",
      },
      {
        slug: "depok",
        name: "Depok",
        desc: "Melayani perumahan, komersial, dan perkerasan jalan di Kota Depok.",
      },
      {
        slug: "bogor",
        name: "Bogor",
        desc: "Melayani pengadaan material dan tim pasang untuk Kota Bogor dan Kabupaten Bogor.",
      },
    ],
    trustTitle: "Fakta & Bukti Identitas Kaha Block",
    trustFacts: [
      { label: "Beroperasi Sejak", value: "Tahun 2015" },
      { label: "Luas Area Pabrik", value: "9.080 m² di Cisauk, Kab. Tangerang" },
      { label: "Sistem Produksi", value: "Mesin Full Otomatis Hidrolik" },
      { label: "Mutu Beton Tersedia", value: "K-250 • K-300 • K-400" },
      { label: "Pengiriman Jabodetabek", value: "Gratis Pengiriman & Penurunan Barang" },
    ],
    faqs: [
      {
        q: "Apakah Kaha Block melayani pengadaan material sekaligus pemasangan?",
        a: "Ya. Kami menyediakan opsi pembelian material saja maupun paket terintegrasi (material + pengiriman + jasa pemasangan oleh tim profesional).",
      },
      {
        q: "Wilayah mana saja yang dilayani oleh tim pemasangan Kaha Block?",
        a: "Tim pemasangan Kaha Block melayani seluruh wilayah Jabodetabek, meliputi DKI Jakarta, Tangerang Raya, Bekasi, Depok, dan Bogor.",
      },
      {
        q: "Informasi apa saja yang dibutuhkan untuk mendapatkan estimasi biaya pasang?",
        a: "Cukup sampaikan lokasi proyek, estimasi luas area dalam m², peruntukan beban (halaman rumah, jalan warga, atau area gudang), serta pilihan model paving block.",
      },
      {
        q: "Apakah biaya pengiriman dan penurunan barang dikenakan cas tambahan?",
        a: "Untuk seluruh wilayah Jabodetabek, biaya pengiriman material adalah gratis dan sudah termasuk penurunan barang di lokasi proyek.",
      },
      {
        q: "Berapa tebal paving block yang direkomendasikan untuk area mobil/truk?",
        a: "Untuk garasi dan jalan mobil perumahan disarankan tebal 6 cm (K-300). Sedangkan untuk pelataran parkir truk, industri, atau pergudangan disarankan tebal 8 cm (K-400).",
      },
    ],
    ctaHeading: "Konsultasikan Pemasangan Paving Block Proyek Anda",
    ctaDesc:
      "Hubungi tim teknis Kaha Block via WhatsApp untuk survey lokasi, estimasi kebutuhan volume, dan penerbitan penawaran harga resmi.",
  },
  en: {
    eyebrow: "CONTRACTOR SERVICES & PARTNERSHIP",
    h1: "Paving Block Installation Services Greater Jakarta",
    heroDesc:
      "PT Kaha Sukses Mandiri (Kaha Block) provides direct precision paving block material supply alongside professional installation services by experienced crews for residential estates, commercial hubs, warehouses, and neighborhood access roads across Greater Jakarta (Jabodetabek).",
    advantagesTitle: "Advantages of Integrated Direct Supply & Installation",
    advantagesIntro:
      "Choosing an integrated service directly from the manufacturer ensures material quality and installation precision adhere to a single strict standard.",
    contractorSectionTitle: "Paving Block Installation Contractor Across Greater Jakarta",
    contractorSectionDesc:
      "In addition to manufacturing and supplying concrete pavers, Kaha Block serves as a specialized paving block installation contractor for residential, commercial, industrial, and infrastructure developments across Greater Jakarta (Jabodetabek).",
    advantages: [
      {
        title: "Direct Factory Precision Materials",
        desc: "Paving blocks are produced with fully automatic hydraulic press machinery at our Cisauk plant in Tangerang Regency, delivering consistent compressive strength and dimensions.",
      },
      {
        title: "Experienced Field Installation Crew",
        desc: "Executed by skilled field installers knowledgeable in stone dust sub-base levelling, mechanical stamper compaction, and edge curb anchoring.",
      },
      {
        title: "Included Delivery & Material Offloading",
        desc: "Transported via Kaha Block truck fleets with guaranteed free delivery and material lowering included across Greater Jakarta project sites.",
      },
      {
        title: "Transparent Quotations & Installation Standards",
        desc: "Volume estimations (m²), concrete grade specifications (K-250, K-300, K-400), and execution workflows are itemized in official written proposals with no hidden fees.",
      },
    ],
    scopeTitle: "Paving Block Installation Project Scope",
    scopeIntro:
      "We install concrete paving blocks and interlocking pavers across various civil infrastructure and commercial properties:",
    scopes: [
      {
        title: "Residential Driveways & Courtyards",
        desc: "Paving home driveways, car porches, and residential estate access roads for a mud-free, clean aesthetic.",
      },
      {
        title: "Neighborhood Access & Housing Roads",
        desc: "Installing 6 cm and 8 cm pavers in K-300 / K-400 concrete grades for residential streets and communal walkways.",
      },
      {
        title: "Commercial & Shophouse Parking Lots",
        desc: "Hardstanding surfaces for commercial shophouses, office parkings, and retail centers requiring durable load capacity.",
      },
      {
        title: "Industrial Plants & Warehouse Aprons",
        desc: "Operational heavy-duty paving for manufacturing plants, cargo maneuvering yards, and warehouse loading bays using 8 cm K-400 pavers.",
      },
      {
        title: "Pedestrian Paths & Public Facilities",
        desc: "Pedestrian walkways, sidewalks, sports courts, urban park pathways, and educational or place of worship courtyards.",
      },
    ],
    workflowTitle: "Paving Block Installation Process",
    workflowSteps: [
      {
        step: "01",
        title: "Consultation & Volume Requirements",
        desc: "Initial discussion regarding site location, estimated area (m²), paver model choices, and target load capacity.",
      },
      {
        step: "02",
        title: "Site Survey & Measurement",
        desc: "Inspecting subgrade ground conditions, slope drainage, and calculating accurate base material and paver quantities.",
      },
      {
        step: "03",
        title: "Official Proposal & Schedule Agreement",
        desc: "Issuing transparent quotations covering material specifications, labor fees, and execution timelines.",
      },
      {
        step: "04",
        title: "Site Preparation & Base Levelling",
        desc: "Subgrade clearing, soil compaction, and spreading a 3–5 cm levelling bed of fine stone dust.",
      },
      {
        step: "05",
        title: "Paver Laying & Concrete Curb Anchoring",
        desc: "Laying pavers in precise interlocking bond patterns held firmly by concrete edge restraint curbs.",
      },
      {
        step: "06",
        title: "Joint Sand Filling & Final Compaction",
        desc: "Sweeping fine stone dust into joints and compacting with a plate compactor for uniform joint filling and interlocking stability.",
      },
    ],
    materialsTitle: "Paving Block & Concrete Curb Options",
    materialsDesc:
      "Kaha Block supplies diverse paver models including Truepave (Rectangular), Half Block, Hexagonal, Square Tile, Grass Block, and Curb Stones.",
    coverageTitle: "Installation Service Area Coverage",
    coverageDesc:
      "Our material supply and installation services extend to all municipalities across Greater Jakarta (Jabodetabek):",
    regionalLinks: [
      {
        slug: "jakarta",
        name: "DKI Jakarta",
        desc: "Serving South, East, West, North, and Central Jakarta.",
      },
      {
        slug: "tangerang",
        name: "Tangerang Region",
        desc: "Primary factory in Cisauk, serving Tangerang Regency, Tangerang City, and South Tangerang.",
      },
      {
        slug: "bekasi",
        name: "Bekasi Region",
        desc: "Supplying and installing pavers for projects in Bekasi City and Bekasi Regency.",
      },
      {
        slug: "depok",
        name: "Depok City",
        desc: "Serving residential estates, commercial sites, and access roads in Depok.",
      },
      {
        slug: "bogor",
        name: "Bogor Region",
        desc: "Material supply and installation crews for Bogor City and Bogor Regency.",
      },
    ],
    trustTitle: "Kaha Block Verified Business Facts",
    trustFacts: [
      { label: "Operating Since", value: "Year 2015" },
      { label: "Factory Facility", value: "9,080 m² in Cisauk, Tangerang Regency" },
      { label: "Production System", value: "Fully Automatic Hydraulic Press" },
      { label: "Concrete Grades", value: "K-250 • K-300 • K-400" },
      { label: "Jabodetabek Logistics", value: "Free Delivery & Offloading Included" },
    ],
    faqs: [
      {
        q: "Does Kaha Block provide turnkey material supply and installation?",
        a: "Yes. We offer both material-only supply as well as complete turnkey supply, delivery, and installation by experienced field crews.",
      },
      {
        q: "Which areas are covered by Kaha Block's installation crews?",
        a: "Our installation teams serve the entirety of Greater Jakarta (Jabodetabek), including DKI Jakarta, Tangerang Region, Bekasi, Depok, and Bogor.",
      },
      {
        q: "What details are needed to request a cost estimate?",
        a: "Provide your project location, estimated area in m², intended load type (residential yard, driveway, or industrial warehouse), and preferred paver model.",
      },
      {
        q: "Are delivery and offloading fees charged extra?",
        a: "For all locations within Greater Jakarta (Jabodetabek), delivery is free and material offloading/lowering at the site is included.",
      },
      {
        q: "What paver thickness is suitable for vehicle or truck traffic?",
        a: "For residential car porches and driveways, 6 cm pavers (K-300) are recommended. For heavy commercial trucks, industrial plants, or warehouse yards, 8 cm pavers (K-400) are ideal.",
      },
    ],
    ctaHeading: "Consult Your Paving Project Requirements",
    ctaDesc:
      "Contact the Kaha Block technical team via WhatsApp for site evaluation, volume estimation, and an official written proposal.",
  },
};

export const AREA_HUB_DATA: Record<Locale, AreaHubContent> = {
  id: {
    eyebrow: "CAKUPAN WILAYAH JABODETABEK",
    h1: "Area Layanan Paving Block Kaha Block di Jabodetabek",
    heroDesc:
      "PT Kaha Sukses Mandiri (Kaha Block) beroperasi dari fasilitas pabrik seluas 9.080 m² di Cisauk, Kabupaten Tangerang. Kami melayani pengadaan material paving block presisi, gratis pengiriman termasuk penurunan barang, serta jasa pemasangan berpengalaman di seluruh kota dan kabupaten wilayah Jabodetabek.",
    hubIntro:
      "Pilih wilayah proyek Anda untuk mempelajari lebih lanjut mengenai pasokan material langsung pabrik, opsi pengiriman, dan dukungan tim pemasangan Kaha Block:",
    regionalCards: [
      {
        slug: "jakarta",
        name: "DKI Jakarta",
        subdivisionText: "Jakarta Selatan • Jakarta Timur • Jakarta Barat • Jakarta Utara • Jakarta Pusat",
        description:
          "Pengadaan paving block dan jasa pemasangan untuk area pemukiman, kawasan perkantoran, fasilitas komersial, dan proyek infrastruktur publik di DKI Jakarta.",
        badge: "Pengiriman Direct Pabrik Cisauk",
      },
      {
        slug: "tangerang",
        name: "Tangerang Raya",
        subdivisionText: "Kabupaten Tangerang • Kota Tangerang • Tangerang Selatan • Cisauk",
        description:
          "Lokasi pabrik utama Kaha Block berlokasi di Cisauk, Kabupaten Tangerang. Melayani pasokan tercepat dan pekerjaan perkerasan tanah di seluruh Tangerang Raya.",
        badge: "Lokasi Pabrik Utama Kaha Block",
      },
      {
        slug: "bekasi",
        name: "Bekasi",
        subdivisionText: "Kota Bekasi • Kabupaten Bekasi",
        description:
          "Pasokan paving block presisi dan tim pasang berpengalaman untuk perumahan, pusat perbelanjaan, kawasan industri, dan pelataran gudang di Bekasi.",
        badge: "Gratis Pengiriman & Penurunan",
      },
      {
        slug: "depok",
        name: "Depok",
        subdivisionText: "Kota Depok & Sekitarnya",
        description:
          "Layanan pengadaan material conblock dan jasa pemasangan untuk komplek pemukiman, pelataran usaha, jalan warga, dan properti di Kota Depok.",
        badge: "Gratis Pengiriman & Penurunan",
      },
      {
        slug: "bogor",
        name: "Bogor",
        subdivisionText: "Kota Bogor • Kabupaten Bogor",
        description:
          "Pengadaan paving block berkualitas mutu K-250, K-300, K-400 beserta layanan pemasangan untuk proyek villa, perumahan, dan jalan lingkungan di Bogor.",
        badge: "Gratis Pengiriman & Penurunan",
      },
    ],
    deliveryStatement:
      "Seluruh pengiriman material ke wilayah Jabodetabek tidak dikenakan biaya ongkos kirim (Gratis Pengiriman) dan sudah termasuk layanan penurunan barang oleh pengiriman Kaha Block.",
    installationStatement:
      "Tersedia pilihan pembelian material saja maupun pengadaan lengkap dengan jasa pemasangan oleh tim lapangan Kaha Block yang berpengalaman.",
    faqs: [
      {
        q: "Di mana lokasi fasilitas produksi utama Kaha Block?",
        a: `Fasilitas pabrik utama PT Kaha Sukses Mandiri seluas 9.080 m² berlokasi di ${BUSINESS_FACTS.address.formatted}.`,
      },
      {
        q: "Apakah Kaha Block melayani seluruh wilayah Jabodetabek?",
        a: "Ya. Kami melayani pengadaan material, pengiriman gratis termasuk penurunan barang, serta jasa pemasangan di seluruh DKI Jakarta, Tangerang Raya, Bekasi, Depok, dan Bogor.",
      },
      {
        q: "Bagaimana cara memesan material atau meminta penawaran resmi?",
        a: "Anda dapat menghubungi tim sales Kaha Block melalui WhatsApp dengan menginformasikan tipe produk, estimasi luas area (m²), dan lokasi proyek.",
      },
    ],
    ctaHeading: "Diskusi Kebutuhan Proyek di Wilayah Anda",
    ctaDesc:
      "Dapatkan informasi spesifikasi teknis, estimasi kebutuhan material, serta jadwal pengiriman dan pemasangan untuk lokasi proyek Anda.",
  },
  en: {
    eyebrow: "GREATER JAKARTA SERVICE COVERAGE",
    h1: "Kaha Block Paving Service Areas Greater Jakarta",
    heroDesc:
      "PT Kaha Sukses Mandiri (Kaha Block) operates from its 9,080 m² manufacturing plant in Cisauk, Tangerang Regency. We provide precision paving block material supply, free delivery including offloading, and professional installation services across all municipalities in Greater Jakarta (Jabodetabek).",
    hubIntro:
      "Select your project location to learn more about direct factory material supply, delivery logistics, and Kaha Block installation support:",
    regionalCards: [
      {
        slug: "jakarta",
        name: "DKI Jakarta",
        subdivisionText: "South Jakarta • East Jakarta • West Jakarta • North Jakarta • Central Jakarta",
        description:
          "Direct paving block material supply and installation services for residential properties, commercial offices, retail centers, and public infrastructure in Jakarta.",
        badge: "Direct Supply from Cisauk Plant",
      },
      {
        slug: "tangerang",
        name: "Tangerang Region",
        subdivisionText: "Tangerang Regency • Tangerang City • South Tangerang • Cisauk",
        description:
          "Home to Kaha Block's primary manufacturing plant in Cisauk, Tangerang Regency. Providing rapid logistics and paving installation across the entire Tangerang region.",
        badge: "Primary Kaha Block Plant Location",
      },
      {
        slug: "bekasi",
        name: "Bekasi Region",
        subdivisionText: "Bekasi City • Bekasi Regency",
        description:
          "Precision paving block supply and skilled installation crews for housing developments, retail hubs, industrial parks, and warehouse aprons in Bekasi.",
        badge: "Free Delivery & Offloading Included",
      },
      {
        slug: "depok",
        name: "Depok City",
        subdivisionText: "Depok City & Surrounding Neighborhoods",
        description:
          "Concrete paver supply and professional laying services for housing estates, commercial premises, neighborhood streets, and private properties in Depok.",
        badge: "Free Delivery & Offloading Included",
      },
      {
        slug: "bogor",
        name: "Bogor Region",
        subdivisionText: "Bogor City • Bogor Regency",
        description:
          "High-grade paving block supply (K-250, K-300, K-400) and installation services for villa estates, residential projects, and access roads in Bogor.",
        badge: "Free Delivery & Offloading Included",
      },
    ],
    deliveryStatement:
      "All material deliveries within Greater Jakarta (Jabodetabek) enjoy free freight with material offloading and lowering at the site included via Kaha Block truck fleets.",
    installationStatement:
      "Choose between material-only procurement or turnkey supply paired with professional installation by Kaha Block field crews.",
    faqs: [
      {
        q: "Where is Kaha Block's main manufacturing plant located?",
        a: `PT Kaha Sukses Mandiri's 9,080 m² primary production facility is located at ${BUSINESS_FACTS.address.formattedEn}.`,
      },
      {
        q: "Does Kaha Block serve all municipalities in Greater Jakarta?",
        a: "Yes. We supply paving materials with free delivery and offloading, plus installation services across DKI Jakarta, Tangerang Region, Bekasi, Depok, and Bogor.",
      },
      {
        q: "How can I request an official price proposal?",
        a: "Contact the Kaha Block team via WhatsApp with your preferred paver model, estimated volume (m²), and site location.",
      },
    ],
    ctaHeading: "Discuss Your Project Requirements",
    ctaDesc:
      "Receive technical advice, volume estimation support, and official price quotes tailored to your project site location.",
  },
};

export const REGIONAL_PAGES_DATA: Record<
  "jakarta" | "tangerang" | "bekasi" | "depok" | "bogor",
  Record<Locale, RegionalPageContent>
> = {
  jakarta: {
    id: {
      slug: "jakarta",
      eyebrow: "PRODUSEN & SUPPLIER PAVING BLOCK",
      h1: "Produsen Paving Block untuk Jakarta & Jasa Pemasangan",
      heroDesc:
        "Kaha Block memproduksi paving block presisi mesin full otomatis hidrolik di fasilitas pabrik Cisauk, Kabupaten Tangerang, untuk melayani kebutuhan pengadaan material dan jasa pemasangan di seluruh wilayah DKI Jakarta (Jakarta Selatan, Timur, Barat, Utara, dan Pusat).",
      factoryContextNotice:
        "Pengiriman material ke wilayah Jakarta dilakukan langsung dari pabrik Kaha Block di Cisauk, Kabupaten Tangerang, dengan jaminan gratis ongkos kirim dan termasuk penurunan barang.",
      keyBenefits: [
        {
          title: "Pengadaan Langsung Pabrik",
          desc: "Mendapatkan harga kompetitif langsung dari produsen tanpa rantai perantara berlebih.",
        },
        {
          title: "Mutu Teruji K-250 hingga K-400",
          desc: "Pilihan spesifikasi kuat tekan beton sesuai peruntukan halaman perumahan hingga area komersial berbeban tinggi.",
        },
        {
          title: "Gratis Pengiriman & Penurunan Barang",
          desc: "Armada truk Kaha Block mengantar material tepat waktu ke lokasi proyek di Jakarta lengkap dengan penurunan barang.",
        },
        {
          title: "Layanan Pasang Berpengalaman",
          desc: "Tersedia tim profesional pemasangan paving block untuk hasil akhir yang presisi, rata, dan rapi.",
        },
      ],
      subregionsTitle: "Cakupan Wilayah Layanan DKI Jakarta",
      subregionsIntro:
        "Kaha Block siap memasok kebutuhan paving block dan menyediakan tim pemasangan untuk seluruh wilayah kota administrasi DKI Jakarta:",
      subregions: [
        {
          name: "Jakarta Selatan",
          useCase:
            "Kebutuhan perkerasan halaman rumah tinggal, perkantoran komersial, area cafe & resto, serta pelataran parkir properti.",
        },
        {
          name: "Jakarta Timur",
          useCase:
            "Pengadaan jalan akses perumahan, area pemukiman warga, pelataran ruko, serta kawasan pergudangan dan logistik.",
        },
        {
          name: "Jakarta Barat",
          useCase:
            "Perkerasan pelataran pertokoan komersial, komplek hunian, fasilitas sekolah, dan garasi kendaraan.",
        },
        {
          name: "Jakarta Utara",
          useCase:
            "Kebutuhan paving block presisi mutu K-300 / K-400 untuk area operasional, pergudangan, serta pelataran fasilitas publik.",
        },
        {
          name: "Jakarta Pusat",
          useCase:
            "Pekerjaan pedestrian, pelataran gedung perkantoran, instansi, serta lanskap area komersial perkotaan.",
        },
      ],
      useCaseSectionTitle: "Aplikasi Paving Block untuk Proyek Jakarta",
      contractorSectionTitle: "Kontraktor Paving Block untuk Jakarta",
      contractorSectionDesc:
        "Kaha Block melayani pengadaan material supplier paving block sekaligus pekerjaan kontraktor pemasangan paving block untuk Jakarta Selatan, Jakarta Timur, Jakarta Barat, Jakarta Utara, dan Jakarta Pusat. Tim kami berpengalaman dalam menangani lokasi padat kota dan area komersial.",
      useCases: [
        {
          title: "Perumahan & Properti Residensial",
          desc: "Pemasangan paving block model Truepave (Bata), Hexagonal, atau Ubin untuk garasi dan jalan warga agar rapi dan menyerap air hujan.",
        },
        {
          title: "Kawasan Komersial & Parkir Perkantoran",
          desc: "Solusi pelataran perkantoran dan ruko yang membutuhkan estetika warna serta ketahanan beban lalu lintas kendaraan konsumen.",
        },
        {
          title: "Pergudangan & Fasilitas Logistik",
          desc: "Paving tebal 8 cm mutu K-400 untuk kebutuhan area pergudangan, operasional, dan kendaraan berat.",
        },
      ],
      deliveryNotice:
        "Pengiriman ke Jakarta mendapat fasilitas Gratis Pengiriman dan Penurunan Barang oleh pengiriman Kaha Block.",
      installationNotice:
        "Dapatkan opsi paket pengadaan material sekaligus jasa pemasangan oleh tim terampil Kaha Block.",
      trustFactsTitle: "Identitas Pabrik & Layanan Kaha Block",
      trustFacts: [
        { label: "Lokasi Pabrik Direct", value: "Cisauk, Kabupaten Tangerang" },
        { label: "Pengalaman Beroperasi", value: "Sejak Tahun 2015" },
        { label: "Luas Area Produksi", value: "9.080 m² Mesin Full Otomatis" },
        { label: "Pengiriman Jakarta", value: "Gratis Ongkir & Penurunan Barang" },
      ],
      faqs: [
        {
          q: "Mencari pabrik paving block yang melayani Jakarta?",
          a: "Produksi dilakukan di pabrik Kaha Block di Cisauk, Kabupaten Tangerang, kemudian material dikirim untuk kebutuhan proyek di seluruh wilayah DKI Jakarta dengan layanan gratis pengiriman dan penurunan barang.",
        },
        {
          q: "Apakah Kaha Block melayani jual dan pemasangan paving block di Jakarta?",
          a: "Ya, kami melayani jual material paving block presisi (K-250, K-300, K-400) dan pekerjaan kontraktor pemasangan paving block untuk wilayah Jakarta Selatan, Jakarta Timur, Jakarta Barat, Jakarta Utara, dan Jakarta Pusat.",
        },
        {
          q: "Apakah lokasi pabrik Kaha Block berada di Jakarta?",
          a: "Fasilitas pabrik utama Kaha Block berlokasi di Cisauk, Kabupaten Tangerang. Namun kami melayani pengiriman langsung dari pabrik dan jasa pemasangan untuk seluruh wilayah DKI Jakarta.",
        },
        {
          q: "Apakah pengiriman paving block ke lokasi proyek di Jakarta gratis?",
          a: "Ya. Pengiriman material ke seluruh wilayah DKI Jakarta tidak dikenakan biaya pengiriman (Gratis Ongkir) dan sudah termasuk penurunan barang.",
        },
        {
          q: "Apakah Kaha Block menyediakan jasa pemasangan di Jakarta?",
          a: "Ya. Selain pengadaan material, kami memiliki tim pasang berpengalaman yang siap mengerjakan perkerasan lahan di lokasi proyek Anda di Jakarta.",
        },
        {
          q: "Berapa lama estimasi pengiriman dari pabrik Cisauk ke Jakarta?",
          a: "Jadwal pengiriman disesuaikan dengan ketersediaan stok produk dan jadwal kesepakatan penawaran resmi.",
        },
      ],
      ctaHeading: "Konsultasikan Kebutuhan Paving Block di Jakarta",
      ctaDesc:
        "Hubungi tim Kaha Block via WhatsApp untuk mendapatkan estimasi harga, spesifikasi mutu beton, dan penawaran resmi proyek Anda.",
    },
    en: {
      slug: "jakarta",
      eyebrow: "PAVING BLOCK MANUFACTURER & SUPPLIER",
      h1: "Paving Block Supplier for Jakarta & Installation Services",
      heroDesc:
        "Kaha Block manufactures precision hydraulic paving blocks at its Cisauk plant in Tangerang Regency, serving material supply and professional installation across all administrative cities of DKI Jakarta (South, East, West, North, and Central Jakarta).",
      factoryContextNotice:
        "Material deliveries to Jakarta sites are dispatched directly from our Cisauk factory in Tangerang Regency, featuring guaranteed free shipping and material offloading included.",
      keyBenefits: [
        {
          title: "Direct Factory Procurement",
          desc: "Gain competitive direct-from-manufacturer pricing without unnecessary intermediary markups.",
        },
        {
          title: "Tested K-250 to K-400 Concrete Grades",
          desc: "Versatile compressive strength options suited for residential driveways up to heavy commercial yards.",
        },
        {
          title: "Free Jakarta Delivery & Offloading",
          desc: "Transported on time via Kaha Block trucks with material lowering at your site included.",
        },
        {
          title: "Experienced Laying Crews",
          desc: "Skilled installation teams ready to deliver clean, level, and durable interlocking paving.",
        },
      ],
      subregionsTitle: "DKI Jakarta Service Area Coverage",
      subregionsIntro:
        "Kaha Block supplies paving products and field installation teams across all administrative municipalities in DKI Jakarta:",
      subregions: [
        {
          name: "South Jakarta",
          useCase:
            "Hardstanding driveways for residential homes, commercial office yards, cafes, and property parking lots.",
        },
        {
          name: "East Jakarta",
          useCase:
            "Housing estate access roads, residential alleys, shophouse aprons, and logistics warehouse yards.",
        },
        {
          name: "West Jakarta",
          useCase:
            "Commercial shophouse forecourts, residential complexes, school grounds, and vehicle garages.",
        },
        {
          name: "North Jakarta",
          useCase:
            "High-grade K-300 / K-400 pavers for industrial operational yards, logistics plants, and public facilities.",
        },
        {
          name: "Central Jakarta",
          useCase:
            "Pedestrian walkways, office building courtyards, institutions, and urban commercial landscape paving.",
        },
      ],
      useCaseSectionTitle: "Paving Applications for Jakarta Projects",
      useCases: [
        {
          title: "Residential Estates & Private Homes",
          desc: "Laying Truepave, Hexagonal, or Square pavers for clean driveways and water-permeable residential pathways.",
        },
        {
          title: "Commercial Parks & Office Parking",
          desc: "Aesthetic color patterns and high load-bearing pavers for customer vehicle parking areas.",
        },
        {
          title: "Logistics Facilities & Warehouses",
          desc: "Heavy-duty 8 cm pavers in K-400 grade suited for warehouse operations, logistics aprons, and heavy vehicle areas.",
        },
      ],
      deliveryNotice:
        "All deliveries to Jakarta include Free Delivery and Material Offloading by Kaha Block delivery trucks.",
      installationNotice:
        "Turnkey packages combining material supply and professional laying services are available.",
      trustFactsTitle: "Kaha Block Manufacturing & Identity",
      trustFacts: [
        { label: "Factory Location", value: "Cisauk, Tangerang Regency" },
        { label: "Operating Experience", value: "Established Year 2015" },
        { label: "Facility Footprint", value: "9,080 m² Automatic Press Plant" },
        { label: "Jakarta Logistics", value: "Free Delivery & Offloading Included" },
      ],
      faqs: [
        {
          q: "Is Kaha Block's factory located inside Jakarta?",
          a: "Our main production plant is located in Cisauk, Tangerang Regency. However, we supply materials directly from our plant and provide installation crews across all of DKI Jakarta.",
        },
        {
          q: "Are material delivery fees to Jakarta project sites free?",
          a: "Yes. All material deliveries to DKI Jakarta enjoy free shipping with material lowering and offloading included at the site.",
        },
        {
          q: "Does Kaha Block offer installation services in Jakarta?",
          a: "Yes. In addition to material supply, our experienced field crews are available to execute complete site paving in Jakarta.",
        },
        {
          q: "How long does delivery from the Cisauk plant to Jakarta take?",
          a: "Delivery schedules depend on product stock availability and agreed terms in the official written quotation.",
        },
      ],
      ctaHeading: "Discuss Your Jakarta Paving Project",
      ctaDesc:
        "Connect with Kaha Block via WhatsApp to receive price quotes, concrete grade advice, and official project proposals.",
    },
  },

  tangerang: {
    id: {
      slug: "tangerang",
      eyebrow: "PABRIK UTAMA & SUPPLIER DIRECT",
      h1: "Pabrik Paving Block Cisauk, Tangerang & Jasa Pemasangan",
      heroDesc:
        "PT Kaha Sukses Mandiri (Kaha Block) berlokasi di fasilitas pabrik seluas 9.080 m² di Cisauk, Kabupaten Tangerang. Kami adalah produsen langsung paving block presisi otomatis hidrolik yang melayani wilayah Kabupaten Tangerang, Kota Tangerang, Tangerang Selatan, dan Cisauk.",
      factoryContextNotice:
        "Pabrik fisik Kaha Block berada di Cisauk, Kabupaten Tangerang. Beroperasi sejak 2015 memproduksi paving mutu K-250, K-300, dan K-400 untuk pengadaan langsung pabrik dan jasa pemasangan di Tangerang Raya.",
      keyBenefits: [
        {
          title: "Pabrik Fisik di Cisauk, Kab. Tangerang",
          desc: "Fasilitas produksi seluas 9.080 m² berlokasi strategis di Cisauk, Kabupaten Tangerang.",
        },
        {
          title: "Kecepatan Respons & Distribusi",
          desc: "Kedekatan jarak lokasi pabrik memberikan kemudahan koordinasi, peninjauan stok, dan jadwal pengiriman cepat.",
        },
        {
          title: "Harga Produsen Langsung",
          desc: "Mendapatkan jaminan kualitas material dan kepastian spesifikasi langsung dari tangan pertama.",
        },
        {
          title: "Tim Pasang & Peralatan Lengkap",
          desc: "Dukungan penuh tim ahli pasang berpengalaman untuk proyek perumahan, industri, dan kawasan komersial.",
        },
      ],
      subregionsTitle: "Cakupan Layanan Wilayah Tangerang Raya",
      subregionsIntro:
        "Sebagai produsen lokal di Cisauk, Kabupaten Tangerang, Kaha Block melayani seluruh wilayah Tangerang Raya:",
      subregions: [
        {
          name: "Cisauk & Kabupaten Tangerang",
          useCase:
            "Wilayah keberadaan pabrik Kaha Block. Melayani perumahan baru, kawasan industri, jalan desa, dan fasos fasum.",
        },
        {
          name: "Kota Tangerang",
          useCase:
            "Pekerjaan pelataran ruko komersial, jalan pemukiman, kawasan industri, dan fasilitas parkir perkotaan.",
        },
        {
          name: "Tangerang Selatan",
          useCase:
            "Pengadaan material dan pemasangan untuk perumahan modern, cluster residensial, area bisnis, dan pedestrian.",
        },
      ],
      useCaseSectionTitle: "Aplikasi Paving Block di Wilayah Tangerang",
      contractorSectionTitle: "Produsen & Kontraktor Paving Block Tangerang",
      contractorSectionDesc:
        "Sebagai produsen paving block dengan fasilitas pabrik di Cisauk, Kabupaten Tangerang, Kaha Block melayani jual dan pengadaan material supplier paving block sekaligus jasa kontraktor pemasangan paving block untuk wilayah Tangerang Raya (Kabupaten Tangerang, Kota Tangerang, dan Tangerang Selatan).",
      useCases: [
        {
          title: "Kawasan Industri & Pergudangan Tangerang",
          desc: "Perkerasan pelataran pabrik dan tempat muat barang menggunakan paving tebal 8 cm mutu K-400 yang disesuaikan untuk area operasional dan lalu lintas kendaraan berat.",
        },
        {
          title: "Cluster Perumahan & Pemukiman Warga",
          desc: "Perkerasan jalan komplek dengan pilihan pola Truepave, Hexagonal, atau Ubin warna agar kawasan tampil rapi.",
        },
        {
          title: "Pelataran Komersial & Pusat Bisnis",
          desc: "Area parkir ruko dan pusat kuliner yang membutuhkan permukaan rata, kuat, dan bernilai estetika tinggi.",
        },
      ],
      deliveryNotice:
        "Pengiriman ke seluruh Tangerang Raya dijamin Gratis Ongkir dan termasuk fasilitas Penurunan Barang.",
      installationNotice:
        "Konsultasikan pengadaan material beserta tim pasang untuk pengerjaan perkerasan lahan di Tangerang.",
      trustFactsTitle: "Fakta Fasilitas Pabrik Kaha Block Cisauk",
      trustFacts: [
        { label: "Lokasi Alamat Pabrik", value: "Jl. Raya Cibadak No. 7, Suradita, Cisauk, Kab. Tangerang" },
        { label: "Luas Area Fasilitas", value: "9.080 m² (Sejak 2015)" },
        { label: "Teknologi Produksi", value: "Mesin Full Otomatis Hidrolik" },
        { label: "Status Wilayah Pabrik", value: "Kabupaten Tangerang, Banten" },
      ],
      faqs: [
        {
          q: "Apakah Kaha Block melayani jual dan jasa kontraktor pemasangan paving block di Tangerang?",
          a: "Ya. Kaha Block melayani penjualan material paving block langsung dari pabrik Cisauk maupun paket jasa kontraktor pemasangan lengkap untuk wilayah Kabupaten Tangerang, Kota Tangerang, dan Tangerang Selatan.",
        },
        {
          q: "Di mana alamat pasti pabrik paving block Kaha Block?",
          a: `Pabrik utama Kaha Block berlokasi di ${BUSINESS_FACTS.address.formatted}.`,
        },
        {
          q: "Apakah Cisauk masuk dalam wilayah Kabupaten Tangerang atau Tangerang Selatan?",
          a: "Kecamatan Cisauk secara administratif terletak di wilayah Kabupaten Tangerang, Banten.",
        },
        {
          q: "Apakah pelanggan bisa meninjau sampel material langsung ke lokasi pabrik?",
          a: "Ya. Pelanggan atau perwakilan proyek dapat berkoordinasi terlebih dahulu via WhatsApp untuk peninjauan sampel dan diskusi teknis.",
        },
        {
          q: "Apakah Kaha Block melayani jasa pemasangan di Tangerang Selatan dan Kota Tangerang?",
          a: "Tentu saja. Kami melayani pengadaan material dan jasa pemasangan untuk seluruh wilayah Kabupaten Tangerang, Kota Tangerang, dan Tangerang Selatan.",
        },
      ],
      ctaHeading: "Hubungi Pabrik Paving Block Kaha di Cisauk",
      ctaDesc:
        "Diskusi kebutuhan proyek Anda langsung dengan tim pabrik Kaha Block untuk mendapatkan harga terbaik dan jadwal ketersediaan material.",
    },
    en: {
      slug: "tangerang",
      eyebrow: "PRIMARY FACTORY & DIRECT SUPPLIER",
      h1: "Paving Block Factory Cisauk, Tangerang & Installation Services",
      heroDesc:
        "PT Kaha Sukses Mandiri (Kaha Block) operates its 9,080 m² manufacturing facility in Cisauk, Tangerang Regency. We are a direct manufacturer of automatic hydraulic pavers serving Tangerang Regency, Tangerang City, South Tangerang, and Cisauk.",
      factoryContextNotice:
        "Kaha Block's physical plant is located in Cisauk, Tangerang Regency. Operating since 2015 producing K-250, K-300, and K-400 pavers for direct factory procurement and installation across the Tangerang region.",
      keyBenefits: [
        {
          title: "Physical Plant in Cisauk, Tangerang Regency",
          desc: "A 9,080 m² production facility strategically situated in Cisauk, Tangerang Regency.",
        },
        {
          title: "Rapid Distribution & Supply Response",
          desc: "Proximity allows seamless communication, stock verification, and fast delivery scheduling.",
        },
        {
          title: "Direct First-Hand Pricing",
          desc: "Benefit from manufacturer pricing and verified product specifications directly from the source.",
        },
        {
          title: "Full Laying Crew & Equipment Support",
          desc: "Complete support from experienced field installation teams for residential, commercial, and industrial sites.",
        },
      ],
      subregionsTitle: "Tangerang Region Service Coverage",
      subregionsIntro:
        "As a local manufacturer in Cisauk, Tangerang Regency, Kaha Block serves the entire Tangerang region:",
      subregions: [
        {
          name: "Cisauk & Tangerang Regency",
          useCase:
            "Home municipality of our plant. Serving new housing estates, industrial parks, village access roads, and public spaces.",
        },
        {
          name: "Tangerang City",
          useCase:
            "Commercial shophouse yards, residential streets, industrial facilities, and urban parking spaces.",
        },
        {
          name: "South Tangerang",
          useCase:
            "Paving supply and installation for modern housing clusters, business hubs, commercial spaces, and walkways.",
        },
      ],
      useCaseSectionTitle: "Paving Applications for Tangerang Projects",
      useCases: [
        {
          title: "Tangerang Industrial Parks & Warehouses",
          desc: "Heavy-duty paving for factory aprons and cargo loading yards using 8 cm K-400 pavers suited for industrial vehicle movement.",
        },
        {
          title: "Residential Estates & Community Roads",
          desc: "Clean residential access paving with Truepave, Hexagonal, or Square tiles in various color options.",
        },
        {
          title: "Commercial Forecourts & Retail Hubs",
          desc: "Shophouse parking and dining plazas requiring flat, durable, and visually appealing paving surfaces.",
        },
      ],
      deliveryNotice:
        "Deliveries across the entire Tangerang region include Free Shipping and Material Offloading.",
      installationNotice:
        "Consult material supply together with our laying crew for site paving projects in Tangerang.",
      trustFactsTitle: "Kaha Block Cisauk Plant Facts",
      trustFacts: [
        { label: "Plant Address", value: "Jl. Raya Cibadak No. 7, Suradita, Cisauk, Tangerang Regency" },
        { label: "Facility Area", value: "9,080 m² (Operating Since 2015)" },
        { label: "Production Line", value: "Fully Automatic Hydraulic Press" },
        { label: "Administrative Location", value: "Tangerang Regency, Banten" },
      ],
      faqs: [
        {
          q: "What is the exact physical address of the Kaha Block paving plant?",
          a: `Kaha Block's primary plant is located at ${BUSINESS_FACTS.address.formattedEn}.`,
        },
        {
          q: "Is Cisauk part of Tangerang Regency or South Tangerang?",
          a: "Cisauk sub-district is administratively part of Tangerang Regency, Banten province.",
        },
        {
          q: "Can clients visit the plant to inspect material samples?",
          a: "Yes. Clients or project representatives can coordinate via WhatsApp prior to visiting for sample evaluation and technical discussions.",
        },
        {
          q: "Does Kaha Block provide installation services in South Tangerang and Tangerang City?",
          a: "Absolutely. We supply materials and provide installation crews across Tangerang Regency, Tangerang City, and South Tangerang.",
        },
      ],
      ctaHeading: "Contact Kaha Block Factory in Cisauk",
      ctaDesc:
        "Discuss your project requirements directly with the Kaha Block factory team for direct pricing and stock schedules.",
    },
  },

  bekasi: {
    id: {
      slug: "bekasi",
      eyebrow: "PRODUSEN & SUPPLIER PAVING BLOCK",
      h1: "Produsen Paving Block untuk Bekasi & Jasa Pemasangan",
      heroDesc:
        "Mencari produsen atau pabrik paving block untuk kebutuhan proyek di Bekasi? Kaha Block memproduksi paving block presisi di Cisauk, Kabupaten Tangerang, dan melayani pengadaan material serta jasa pemasangan untuk wilayah Kota Bekasi dan Kabupaten Bekasi.",
      factoryContextNotice:
        "Pasokan material untuk proyek di Bekasi dikirim langsung dari pabrik utama Kaha Block di Cisauk, Kabupaten Tangerang, dengan fasilitas gratis pengiriman dan penurunan barang di lokasi.",
      keyBenefits: [
        {
          title: "Pasokan Direct dari Pabrik Prospektif",
          desc: "Material diproduksi secara konsisten dengan mesin otomatis hidrolik untuk kepastian kualitas.",
        },
        {
          title: "Pengiriman Jabodetabek Tanpa Ongkir",
          desc: "Seluruh pengiriman ke Kota Bekasi dan Kabupaten Bekasi tidak dikenakan biaya ongkos kirim.",
        },
        {
          title: "Penurunan Barang Sudah Termasuk",
          desc: "Armada pengiriman Kaha Block dilengkapi tim penurunan barang di lokasi proyek.",
        },
        {
          title: "Tersedia Jasa Pemasangan Berpengalaman",
          desc: "Solusi lengkap mencakup penyediaan material, peralatan, dan tim pemasangan berpengalaman.",
        },
      ],
      subregionsTitle: "Cakupan Wilayah Layanan Bekasi",
      subregionsIntro:
        "Kaha Block siap melayani pengadaan material dan tim pemasangan untuk wilayah Bekasi meliputi:",
      subregions: [
        {
          name: "Kota Bekasi",
          useCase:
            "Kebutuhan perkerasan komplek perumahan, garasi rumah, ruko komersial, dan jalan lingkungan warga.",
        },
        {
          name: "Kabupaten Bekasi",
          useCase:
            "Pengadaan paving block mutu tinggi K-300 / K-400 untuk kawasan industri, pelataran gudang, area operasional, dan hunian.",
        },
      ],
      useCaseSectionTitle: "Aplikasi Paving Block untuk Proyek Bekasi",
      contractorSectionTitle: "Kontraktor & Pengadaan Paving Block Bekasi",
      contractorSectionDesc:
        "Kaha Block melayani jual dan pengadaan material supplier paving block serta pekerjaan kontraktor pemasangan paving block untuk Kota Bekasi dan Kabupaten Bekasi (Cikarang, Tambun, Cibitung, Mustikajaya).",
      useCases: [
        {
          title: "Pergudangan & Area Industri Bekasi",
          desc: "Penggunaan paving block tebal 8 cm mutu K-400 untuk menahan manuver kendaraan kargo, kontainer, dan area operasional gudang.",
        },
        {
          title: "Kawasan Perumahan & Pemukiman",
          desc: "Penataan jalan komplek perumahan dan halaman rumah warga dengan model Truepave atau Hexagonal agar bebas genangan air.",
        },
        {
          title: "Pusat Perbelanjaan & Parkir Ruko",
          desc: "Pavement area parkir pengunjung ruko dan pusat bisnis yang membutuhkan daya tahan serta daya serap air yang baik.",
        },
      ],
      deliveryNotice:
        "Pengiriman ke Kota dan Kabupaten Bekasi dilengkapi jaminan Gratis Pengiriman dan Penurunan Barang.",
      installationNotice:
        "Tersedia layanan jasa pasang berpengalaman dari Kaha Block untuk wilayah Bekasi.",
      trustFactsTitle: "Identitas Produsen Kaha Block",
      trustFacts: [
        { label: "Lokasi Pabrik Direct", value: "Cisauk, Kabupaten Tangerang" },
        { label: "Pengalaman Beroperasi", value: "Sejak Tahun 2015" },
        { label: "Sistem Produksi", value: "Full Otomatis Hidrolik" },
        { label: "Layanan Bekasi", value: "Gratis Ongkir & Penurunan Barang" },
      ],
      faqs: [
        {
          q: "Mencari pabrik paving block yang melayani Bekasi?",
          a: "Kaha Block memproduksi paving block berkualitas di fasilitas pabrik Cisauk, Kabupaten Tangerang dan melayani pengadaan serta jasa kontraktor pemasangan paving block untuk seluruh area Kota dan Kabupaten Bekasi.",
        },
        {
          q: "Apakah Kaha Block produsen paving block yang melayani Kabupaten Bekasi?",
          a: "Ya, Kaha Block adalah produsen paving block (PT Kaha Sukses Mandiri) yang secara rutin memasok material dan mengerjakan pemasangan untuk kawasan hunian serta industri di Kota dan Kabupaten Bekasi.",
        },
        {
          q: "Apakah Kaha Block memiliki fasilitas pabrik fisik di Bekasi?",
          a: "Fasilitas pabrik utama Kaha Block berlokasi di Cisauk, Kabupaten Tangerang. Namun kami melayani pengadaan material dan jasa pemasangan untuk Kota dan Kabupaten Bekasi.",
        },
        {
          q: "Apakah ada ongkos kirim untuk pengiriman paving block ke Bekasi?",
          a: "Tidak ada. Seluruh pengiriman material Kaha Block ke wilayah Bekasi adalah gratis pengiriman dan sudah termasuk penurunan barang.",
        },
        {
          q: "Apakah Kaha Block melayani jasa pemasangan di kawasan industri Bekasi?",
          a: "Ya. Kami melayani pengadaan material mutu K-400 tebal 8 cm beserta tim pasang berpengalaman untuk area komersial dan industri di Bekasi.",
        },
      ],
      ctaHeading: "Konsultasikan Kebutuhan Paving Block di Bekasi",
      ctaDesc:
        "Hubungi tim Kaha Block via WhatsApp untuk estimasi kebutuhan volume, diskusi harga, dan penerbitan penawaran resmi.",
    },
    en: {
      slug: "bekasi",
      eyebrow: "PAVING BLOCK MANUFACTURER & SUPPLIER",
      h1: "Paving Block Supplier for Bekasi & Installation Services",
      heroDesc:
        "Looking for a paving block manufacturer or supplier for your project in Bekasi? Kaha Block produces precision paving blocks at its Cisauk plant in Tangerang Regency, supplying material and professional installation for Bekasi City and Bekasi Regency.",
      factoryContextNotice:
        "Material supply for Bekasi projects is dispatched directly from Kaha Block's primary plant in Cisauk, Tangerang Regency, featuring free shipping and offloading included.",
      keyBenefits: [
        {
          title: "Direct Supply from Hydraulic Press Plant",
          desc: "Materials produced consistently with automatic hydraulic machinery for assured structural strength.",
        },
        {
          title: "Free Greater Jakarta Delivery",
          desc: "All material shipments to Bekasi City and Bekasi Regency are free of transport fees.",
        },
        {
          title: "Material Offloading Included",
          desc: "Kaha Block delivery fleets include trained crews for lowering and offloading materials on site.",
        },
        {
          title: "Experienced Field Laying Teams",
          desc: "Comprehensive solutions covering materials, site equipment, and skilled installation labor.",
        },
      ],
      subregionsTitle: "Bekasi Service Area Coverage",
      subregionsIntro:
        "Kaha Block provides material supply and installation crews for the Bekasi region including:",
      subregions: [
        {
          name: "Bekasi City",
          useCase:
            "Hardstanding driveways for housing estates, private homes, commercial shophouses, and neighborhood streets.",
        },
        {
          name: "Bekasi Regency",
          useCase:
            "High-grade paving supply (K-300 / K-400) for industrial parks, warehouse yards, logistics aprons, and residential projects.",
        },
      ],
      useCaseSectionTitle: "Paving Applications for Bekasi Projects",
      useCases: [
        {
          title: "Bekasi Industrial Parks & Warehouses",
          desc: "8 cm K-400 heavy-duty pavers suited for heavy cargo trucks, container maneuvering, and warehouse yard operations.",
        },
        {
          title: "Residential Estates & Housing Communities",
          desc: "Paving residential access roads and home yards with Truepave or Hexagonal pavers for mud-free surface drainage.",
        },
        {
          title: "Commercial Retail Hubs & Shophouse Parking",
          desc: "Durable customer vehicle parking lots for shophouses and business centers with good rainwater permeability.",
        },
      ],
      deliveryNotice:
        "Shipments to Bekasi City and Regency include Free Freight and Material Offloading.",
      installationNotice:
        "Experienced laying services by Kaha Block field crews are available across Bekasi.",
      trustFactsTitle: "Kaha Block Manufacturing Identity",
      trustFacts: [
        { label: "Plant Location", value: "Cisauk, Tangerang Regency" },
        { label: "Operating Experience", value: "Established Year 2015" },
        { label: "Production System", value: "Fully Automatic Hydraulic Press" },
        { label: "Bekasi Service", value: "Free Delivery & Offloading Included" },
      ],
      faqs: [
        {
          q: "Does Kaha Block have a physical manufacturing plant in Bekasi?",
          a: "Kaha Block's primary factory is in Cisauk, Tangerang Regency. However, we supply materials and provide installation services across Bekasi City and Bekasi Regency.",
        },
        {
          q: "Are shipping fees charged for paving block delivery to Bekasi?",
          a: "No. All Kaha Block material deliveries to the Bekasi region are free of shipping charges and include offloading at the site.",
        },
        {
          q: "Does Kaha Block provide laying services in Bekasi industrial areas?",
          a: "Yes. We supply K-400 grade 8 cm pavers along with experienced installation crews for commercial and industrial sites in Bekasi.",
        },
      ],
      ctaHeading: "Discuss Your Bekasi Paving Project",
      ctaDesc:
        "Contact Kaha Block via WhatsApp for volume estimations, price quotes, and official project proposals.",
    },
  },

  depok: {
    id: {
      slug: "depok",
      eyebrow: "PRODUSEN & SUPPLIER PAVING BLOCK",
      h1: "Produsen Paving Block untuk Depok & Jasa Pemasangan",
      heroDesc:
        "Kaha Block menyediakan pengadaan paving block presisi langsung dari fasilitas pabrik di Cisauk, Kabupaten Tangerang, untuk melayani kebutuhan proyek perumahan, ruko komersial, dan jalan lingkungan di wilayah Kota Depok.",
      factoryContextNotice:
        "Pengiriman paving block ke lokasi proyek di Depok dipasok langsung dari pabrik Kaha Block di Cisauk, Kabupaten Tangerang, dengan jaminan gratis pengiriman dan penurunan barang.",
      keyBenefits: [
        {
          title: "Material Presisi Hidrolik",
          desc: "Paving block diproduksi dengan presisi tinggi untuk kemudahan pemasangan dan kerapian akhir.",
        },
        {
          title: "Gratis Pengiriman Wilayah Depok",
          desc: "Fasilitas bebas biaya ongkos kirim untuk pengadaan material proyek di Kota Depok.",
        },
        {
          title: "Layanan Penurunan Barang",
          desc: "Armada truk kami menangani proses pemindahan material turun di tempat proyek Anda.",
        },
        {
          title: "Pilihan Jasa Pemasangan",
          desc: "Tersedia tim profesional untuk pengerjaan perkerasan lahan secara rapi dan terstruktur.",
        },
      ],
      subregionsTitle: "Cakupan Layanan Wilayah Depok",
      subregionsIntro:
        "Kaha Block siap melayani kebutuhan pengadaan dan tim pemasangan di Kota Depok meliputi:",
      subregions: [
        {
          name: "Kota Depok & Pemukiman",
          useCase:
            "Perkerasan komplek perumahan, garasi rumah tinggal, jalan warga, pelataran usaha ruko, dan tempat ibadah.",
        },
      ],
      useCaseSectionTitle: "Aplikasi Paving Block untuk Proyek Depok",
      contractorSectionTitle: "Kontraktor & Pengadaan Paving Block Depok",
      contractorSectionDesc:
        "Kaha Block melayani jual dan pengadaan material supplier paving block serta pekerjaan kontraktor pemasangan paving block untuk Kota Depok (Margonda, Cinere, Cimanggis, Sawangan, Tapos, Bojongsari).",
      useCases: [
        {
          title: "Halaman Garasi & Perumahan Depok",
          desc: "Pemasangan paving block Truepave atau Segi Enam untuk area garasi dan halaman rumah agar tampil rapi, bersih, dan cepat menyerap air.",
        },
        {
          title: "Jalan Lingkungan & Gang Pemukiman",
          desc: "Perkerasan jalan warga perumahan dengan paving block tebal 6 cm mutu K-300 yang tahan lalu lintas kendaraan harian.",
        },
        {
          title: "Area Parkir Usaha & Fasilitas Publik",
          desc: "Pelataran ruko komersial dan area parkir usaha kuliner yang memerlukan struktur perkerasan yang kokoh.",
        },
      ],
      deliveryNotice:
        "Pengiriman ke Kota Depok dijamin Gratis Ongkir dan termasuk penurunan barang.",
      installationNotice:
        "Dapatkan kemudahan layanan pasang paving block profesional oleh tim terampil Kaha Block.",
      trustFactsTitle: "Identitas Produsen Kaha Block",
      trustFacts: [
        { label: "Lokasi Pabrik Direct", value: "Cisauk, Kabupaten Tangerang" },
        { label: "Pengalaman Beroperasi", value: "Sejak Tahun 2015" },
        { label: "Pilihan Mutu Beton", value: "K-250 • K-300 • K-400" },
        { label: "Layanan Depok", value: "Gratis Ongkir & Penurunan Barang" },
      ],
      faqs: [
        {
          q: "Mencari pabrik paving block yang melayani Depok?",
          a: "Produksi dilakukan di fasilitas pabrik Kaha Block di Cisauk, Kabupaten Tangerang dengan layanan gratis pengiriman dan jasa kontraktor pemasangan untuk seluruh wilayah Kota Depok.",
        },
        {
          q: "Apakah Kaha Block melayani pengadaan dan jasa kontraktor di Depok?",
          a: "Ya, kami melayani penjualan material paving block presisi sekaligus pengerjaan kontraktor pemasangan untuk perumahan, ruko, dan sarana umum di Depok.",
        },
        {
          q: "Dari mana asal pengiriman paving block untuk wilayah Depok?",
          a: "Seluruh material dikirim langsung dari fasilitas pabrik Kaha Block di Cisauk, Kabupaten Tangerang.",
        },
        {
          q: "Apakah ada biaya ongkos kirim ke Depok?",
          a: "Tidak ada. Seluruh pengiriman material ke Kota Depok adalah gratis ongkos kirim dan sudah termasuk penurunan barang.",
        },
        {
          q: "Apakah Kaha Block menyediakan paket material sekaligus jasa pasang di Depok?",
          a: "Ya. Kami menyediakan opsi pembelian material saja maupun paket lengkap terintegrasi dengan tim pemasangan.",
        },
      ],
      ctaHeading: "Konsultasikan Proyek Paving Block Anda di Depok",
      ctaDesc:
        "Hubungi tim Kaha Block via WhatsApp untuk estimasi volume, diskusi harga, dan penawaran resmi.",
    },
    en: {
      slug: "depok",
      eyebrow: "PAVING BLOCK MANUFACTURER & SUPPLIER",
      h1: "Paving Block Supplier for Depok & Installation Services",
      heroDesc:
        "Kaha Block provides direct precision paving block supply from its production facility in Cisauk, Tangerang Regency, serving housing projects, commercial shophouses, and neighborhood roads in Depok City.",
      factoryContextNotice:
        "Material shipments to Depok sites are supplied directly from Kaha Block's factory in Cisauk, Tangerang Regency, with guaranteed free delivery and material offloading included.",
      keyBenefits: [
        {
          title: "Precision Hydraulic Pavers",
          desc: "High-precision pavers for seamless interlocking assembly and clean surface finishing.",
        },
        {
          title: "Free Shipping to Depok",
          desc: "Enjoy zero delivery transport fees for paver material procurement in Depok City.",
        },
        {
          title: "Offloading Service Included",
          desc: "Our delivery fleets handle material lowering directly at your project location.",
        },
        {
          title: "Professional Installation Option",
          desc: "Skilled laying crews available for structured and neat site paving execution.",
        },
      ],
      subregionsTitle: "Depok Service Area Coverage",
      subregionsIntro:
        "Kaha Block serves material supply and installation teams in Depok City including:",
      subregions: [
        {
          name: "Depok City & Neighborhoods",
          useCase:
            "Residential driveways, private car porches, neighborhood access roads, shophouse aprons, and community spaces.",
        },
      ],
      useCaseSectionTitle: "Paving Applications for Depok Projects",
      useCases: [
        {
          title: "Depok Residential Driveways & Yards",
          desc: "Laying Truepave or Hexagonal pavers for private driveways and gardens to maintain clean, water-permeable surfaces.",
        },
        {
          title: "Neighborhood Access & Estate Roads",
          desc: "Paving community streets with 6 cm K-300 pavers designed for daily residential vehicle traffic.",
        },
        {
          title: "Commercial Shophouse Parking Lots",
          desc: "Hardstanding surfaces for retail stores, cafes, and business centers needing durable paver bases.",
        },
      ],
      deliveryNotice:
        "Deliveries to Depok City feature Free Freight and Material Offloading.",
      installationNotice:
        "Experience seamless turnkey laying services by Kaha Block skilled crews.",
      trustFactsTitle: "Kaha Block Manufacturer Identity",
      trustFacts: [
        { label: "Direct Factory Location", value: "Cisauk, Tangerang Regency" },
        { label: "Operating Experience", value: "Established Year 2015" },
        { label: "Concrete Grade Range", value: "K-250 • K-300 • K-400" },
        { label: "Depok Service", value: "Free Delivery & Offloading Included" },
      ],
      faqs: [
        {
          q: "Where are paving blocks for Depok projects shipped from?",
          a: "All materials are dispatched directly from Kaha Block's manufacturing plant in Cisauk, Tangerang Regency.",
        },
        {
          q: "Are there shipping costs for deliveries to Depok?",
          a: "No. All material deliveries to Depok City enjoy free shipping and include material offloading at the site.",
        },
        {
          q: "Does Kaha Block offer material supply together with installation in Depok?",
          a: "Yes. We offer both material-only supply and complete turnkey supply with installation services.",
        },
      ],
      ctaHeading: "Discuss Your Depok Paving Project",
      ctaDesc:
        "Contact Kaha Block via WhatsApp for volume estimation, pricing, and official proposals.",
    },
  },

  bogor: {
    id: {
      slug: "bogor",
      eyebrow: "PRODUSEN & SUPPLIER PAVING BLOCK",
      h1: "Produsen Paving Block untuk Bogor & Jasa Pemasangan",
      heroDesc:
        "Kaha Block memproduksi paving block presisi di Cisauk, Kabupaten Tangerang, untuk melayani pengadaan material dan jasa pemasangan di Kota Bogor dan Kabupaten Bogor.",
      factoryContextNotice:
        "Pengiriman paving block ke lokasi proyek di Bogor dipasok langsung dari fasilitas pabrik Kaha Block di Cisauk, Kabupaten Tangerang, dengan jaminan gratis pengiriman dan penurunan barang.",
      keyBenefits: [
        {
          title: "Produsen Langsung Mesin Otomatis",
          desc: "Paving block diproduksi dengan mesin hidrolik presisi untuk ketahanan daya tekan yang optimal.",
        },
        {
          title: "Gratis Pengiriman Wilayah Bogor",
          desc: "Fasilitas pengiriman tanpa biaya ongkos kirim ke lokasi proyek Anda di Bogor.",
        },
        {
          title: "Penurunan Barang Terjamin",
          desc: "Armada pengiriman Kaha Block dilengkapi petugas untuk proses penurunan barang di tempat.",
        },
        {
          title: "Tim Pemasangan Profesional",
          desc: "Dukungan penuh tim pasang terampil untuk pengerjaan perkerasan lahan perumahan dan komersial.",
        },
      ],
      subregionsTitle: "Cakupan Wilayah Layanan Bogor",
      subregionsIntro:
        "Kaha Block melayani pengadaan material dan tim pasang untuk wilayah Bogor meliputi:",
      subregions: [
        {
          name: "Kota Bogor",
          useCase:
            "Kebutuhan pemukiman perumahan, garasi rumah, pelataran komersial, pertokoan, dan jalan lingkungan.",
        },
        {
          name: "Kabupaten Bogor",
          useCase:
            "Pengadaan paving block untuk villa, kawasan hunian, perkebunan, pelataran komersial, dan fasilitas umum.",
        },
      ],
      useCaseSectionTitle: "Aplikasi Paving Block untuk Proyek Bogor",
      contractorSectionTitle: "Kontraktor & Pengadaan Paving Block Bogor",
      contractorSectionDesc:
        "Kaha Block melayani pengadaan material supplier paving block dan pekerjaan kontraktor pemasangan paving block untuk Kota Bogor dan Kabupaten Bogor (Cibinong, Sentul, Cileungsi, Parung).",
      useCases: [
        {
          title: "Perumahan, Villa & Hunian Bogor",
          desc: "Penataan halaman villa dan komplek perumahan dengan paving block bermutu K-250 / K-300 agar lahan rapi dan cepat meresapkan air.",
        },
        {
          title: "Jalan Lingkungan & Akses Desa",
          desc: "Pemasangan jalan warga dan komplek hunian dengan paving block tebal 6 cm mutu K-300 yang tahan lama.",
        },
        {
          title: "Area Parkir Usaha & Komersial",
          desc: "Solusi pelataran perkantoran, pertokoan, dan kawasan usaha komersial yang kokoh dan bernilai estetis.",
        },
      ],
      deliveryNotice:
        "Pengiriman ke Kota dan Kabupaten Bogor mendapat fasilitas Gratis Pengiriman dan Penurunan Barang.",
      installationNotice:
        "Tersedia pilihan pengadaan material lengkap dengan jasa pasang dari tim Kaha Block.",
      trustFactsTitle: "Identitas Pabrik & Layanan Kaha Block",
      trustFacts: [
        { label: "Lokasi Pabrik Direct", value: "Cisauk, Kabupaten Tangerang" },
        { label: "Pengalaman Beroperasi", value: "Sejak Tahun 2015" },
        { label: "Pilihan Mutu Beton", value: "K-250 • K-300 • K-400" },
        { label: "Layanan Bogor", value: "Gratis Ongkir & Penurunan Barang" },
      ],
      faqs: [
        {
          q: "Mencari pabrik paving block yang melayani Bogor?",
          a: "Pengadaan paving block diproduksi langsung dari pabrik Cisauk, Kabupaten Tangerang dan dikirim untuk proyek di Kota Bogor dan Kabupaten Bogor.",
        },
        {
          q: "Apakah Kaha Block melayani jual paving block di Bogor?",
          a: "Ya, Kaha Block melayani jual paving block berbagai tipe (Truepave, Half, Hexa, Kanstein) dengan pilihan mutu K-250, K-300, dan K-400 langsung ke wilayah Kota dan Kabupaten Bogor.",
        },
        {
          q: "Apakah Kaha Block melayani Kota Bogor dan Kabupaten Bogor?",
          a: "Ya. Kami melayani pengadaan material dan jasa pemasangan untuk seluruh wilayah Kota Bogor maupun Kabupaten Bogor.",
        },
        {
          q: "Dari mana asal pengiriman paving block untuk proyek di Bogor?",
          a: "Seluruh material diproduksi dan dikirim langsung dari pabrik utama Kaha Block di Cisauk, Kabupaten Tangerang.",
        },
        {
          q: "Apakah biaya pengiriman ke Bogor gratis?",
          a: "Ya. Seluruh pengiriman ke wilayah Bogor tidak dikenakan biaya pengiriman (Gratis Ongkir) dan sudah termasuk penurunan barang.",
        },
      ],
      ctaHeading: "Konsultasikan Kebutuhan Paving Block di Bogor",
      ctaDesc:
        "Hubungi tim Kaha Block via WhatsApp untuk estimasi kebutuhan volume, informasi harga, dan penawaran resmi.",
    },
    en: {
      slug: "bogor",
      eyebrow: "PAVING BLOCK MANUFACTURER & SUPPLIER",
      h1: "Paving Block Supplier for Bogor & Installation Services",
      heroDesc:
        "Kaha Block manufactures precision paving blocks at its Cisauk facility in Tangerang Regency, serving material supply and installation services for Bogor City and Bogor Regency.",
      factoryContextNotice:
        "Paving block deliveries to Bogor project sites are dispatched directly from Kaha Block's factory in Cisauk, Tangerang Regency, featuring free delivery and offloading included.",
      keyBenefits: [
        {
          title: "Direct Automatic Press Manufacturer",
          desc: "Paving blocks are produced using hydraulic press machinery for optimal compressive strength.",
        },
        {
          title: "Free Shipping across Bogor",
          desc: "Zero freight delivery charges for material procurement at your Bogor site.",
        },
        {
          title: "Offloading Included",
          desc: "Kaha Block truck fleets handle unloading and material lowering at the site.",
        },
        {
          title: "Professional Laying Crews",
          desc: "Skilled installation support for residential, villa, and commercial paving projects.",
        },
      ],
      subregionsTitle: "Bogor Service Area Coverage",
      subregionsIntro:
        "Kaha Block provides material supply and installation teams in the Bogor region including:",
      subregions: [
        {
          name: "Bogor City",
          useCase:
            "Residential housing estates, private driveways, commercial retail yards, and neighborhood access roads.",
        },
        {
          name: "Bogor Regency",
          useCase:
            "Paving supply for villa estates, residential developments, agricultural properties, and commercial sites.",
        },
      ],
      useCaseSectionTitle: "Paving Applications for Bogor Projects",
      useCases: [
        {
          title: "Residential Estates & Villa Properties",
          desc: "Paving villa courtyards and residential driveways with K-250 / K-300 pavers for permeable, neat ground surfaces.",
        },
        {
          title: "Neighborhood Roads & Rural Access",
          desc: "Laying 6 cm K-300 pavers for community access roads designed for long-term durability.",
        },
        {
          title: "Commercial Parking & Retail Spaces",
          desc: "Solid and attractive hardstanding paving for shophouses, office yards, and commercial premises.",
        },
      ],
      deliveryNotice:
        "Deliveries to Bogor City and Regency feature Free Freight and Material Offloading.",
      installationNotice:
        "Turnkey material supply and installation services by Kaha Block field crews are available.",
      trustFactsTitle: "Kaha Block Manufacturing Identity",
      trustFacts: [
        { label: "Direct Plant Location", value: "Cisauk, Tangerang Regency" },
        { label: "Operating Experience", value: "Established Year 2015" },
        { label: "Concrete Grade Options", value: "K-250 • K-300 • K-400" },
        { label: "Bogor Service", value: "Free Delivery & Offloading Included" },
      ],
      faqs: [
        {
          q: "Does Kaha Block serve both Bogor City and Bogor Regency?",
          a: "Yes. We supply paving materials and provide installation services across Bogor City and Bogor Regency.",
        },
        {
          q: "Where are paving blocks for Bogor projects dispatched from?",
          a: "All materials are manufactured and shipped directly from Kaha Block's primary plant in Cisauk, Tangerang Regency.",
        },
        {
          q: "Are delivery fees to Bogor free?",
          a: "Yes. All material shipments to the Bogor region are free of shipping charges and include offloading at the site.",
        },
      ],
      ctaHeading: "Discuss Your Bogor Paving Project",
      ctaDesc:
        "Contact Kaha Block via WhatsApp for volume estimation, price quotes, and official proposals.",
    },
  },
};
