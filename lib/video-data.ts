import { Locale } from "./dictionary";

export interface VideoItem {
  id: string;
  slug: string;
  videoSrc: string;
  posterSrc: string;
  title: {
    id: string;
    en: string;
  };
  description: {
    id: string;
    en: string;
  };
  tag?: {
    id: string;
    en: string;
  };
  publishedAt: string;
  durationSeconds: number;
  isoDuration: string;
}

export const PRODUCTION_VIDEOS: VideoItem[] = [
  {
    id: "prod-vid-07",
    slug: "factory-production-07",
    videoSrc: "/videos/factory/factory-production-07.mp4",
    posterSrc: "/images/factory/factory-production-07.webp",
    title: {
      id: "Pencetakan & Produksi Paving Block Merah",
      en: "Red Paving Block Press & Production",
    },
    description: {
      id: "Dokumentasi video proses pencetakan dan produksi paving block merah presisi menggunakan mesin hidrolik otomatis di pabrik PT Kaha Sukses Mandiri Cisauk, Kabupaten Tangerang.",
      en: "Video documentation of red paving block molding and press production using fully automated hydraulic machinery at PT Kaha Sukses Mandiri plant in Cisauk, Tangerang Regency.",
    },
    tag: {
      id: "Paving Merah",
      en: "Red Paving",
    },
    publishedAt: "2026-10-01T17:18:11.000Z",
    durationSeconds: 73,
    isoDuration: "PT1M13S",
  },
  {
    id: "prod-vid-23",
    slug: "factory-production-23",
    videoSrc: "/videos/factory/factory-production-23.mp4",
    posterSrc: "/images/factory/factory-production-23.webp",
    title: {
      id: "Siklus Pencetakan Paving Block Merah",
      en: "Red Paving Block Molding Cycle",
    },
    description: {
      id: "Siklus pencetakan paving block warna merah dengan matriks cetakan hidrolik presisi di pabrik Kaha Block Cisauk.",
      en: "Molding cycle of red concrete paving block with precision hydraulic press matrix at Kaha Block plant in Cisauk.",
    },
    tag: {
      id: "Paving Merah",
      en: "Red Paving",
    },
    publishedAt: "2026-10-01T17:18:11.000Z",
    durationSeconds: 70,
    isoDuration: "PT1M10S",
  },
  {
    id: "prod-vid-05",
    slug: "factory-production-05",
    videoSrc: "/videos/factory/factory-production-05.mp4",
    posterSrc: "/images/factory/factory-production-05.webp",
    title: {
      id: "Dokumentasi Produksi Paving Block 05",
      en: "Paving Block Production Documentation 05",
    },
    description: {
      id: "Rekaman operasional mesin pencetak paving block otomatis hidrolik di fasilitas produksi PT Kaha Sukses Mandiri.",
      en: "Operational footage of automated hydraulic paving block machinery at PT Kaha Sukses Mandiri production plant.",
    },
    publishedAt: "2026-10-01T17:18:11.000Z",
    durationSeconds: 21,
    isoDuration: "PT21S",
  },
  {
    id: "prod-vid-06",
    slug: "factory-production-06",
    videoSrc: "/videos/factory/factory-production-06.mp4",
    posterSrc: "/images/factory/factory-production-06.webp",
    title: {
      id: "Proses Produksi Paving Block 06",
      en: "Paving Block Production Process 06",
    },
    description: {
      id: "Proses pencetakan paving block beton mutu K-250, K-300, dan K-400 dengan pengawasan mutu ketat di pabrik Cisauk.",
      en: "Concrete paving block molding process for K-250, K-300, and K-400 grades with strict quality control at Cisauk plant.",
    },
    publishedAt: "2026-10-01T17:18:11.000Z",
    durationSeconds: 61,
    isoDuration: "PT1M1S",
  },
  {
    id: "prod-vid-12",
    slug: "factory-production-12",
    videoSrc: "/videos/factory/factory-production-12.mp4",
    posterSrc: "/images/factory/factory-production-12.webp",
    title: {
      id: "Operasional Produksi Paving Block 12",
      en: "Paving Block Production Operations 12",
    },
    description: {
      id: "Operasional mesin press hidrolik otomatis dalam memproduksi paving block presisi di kawasan Cisauk, Kabupaten Tangerang.",
      en: "Automated hydraulic press machine operation producing precision paving blocks in Cisauk, Tangerang Regency.",
    },
    publishedAt: "2026-10-01T17:18:11.000Z",
    durationSeconds: 62,
    isoDuration: "PT1M2S",
  },
  {
    id: "prod-vid-13",
    slug: "factory-production-13",
    videoSrc: "/videos/factory/factory-production-13.mp4",
    posterSrc: "/images/factory/factory-production-13.webp",
    title: {
      id: "Dokumentasi Produksi Paving Block 13",
      en: "Paving Block Production Documentation 13",
    },
    description: {
      id: "Proses pemindahan dan penataan hasil cetakan paving block di area pengeringan pabrik Kaha Block.",
      en: "Handling and stacking process of molded paving blocks in the curing area at Kaha Block factory.",
    },
    publishedAt: "2026-10-01T17:18:11.000Z",
    durationSeconds: 70,
    isoDuration: "PT1M10S",
  },
  {
    id: "prod-vid-19",
    slug: "factory-production-19",
    videoSrc: "/videos/factory/factory-production-19.mp4",
    posterSrc: "/images/factory/factory-production-19.webp",
    title: {
      id: "Proses Produksi Paving Block 19",
      en: "Paving Block Production Process 19",
    },
    description: {
      id: "Dokumentasi pencetakan paving block hidrolik dengan kepadatan tinggi untuk kebutuhan perkerasan jalan perumahan dan komersial.",
      en: "High-density hydraulic paving block molding documentation for residential and commercial paving applications.",
    },
    publishedAt: "2026-10-01T17:18:11.000Z",
    durationSeconds: 66,
    isoDuration: "PT1M6S",
  },
  {
    id: "prod-vid-20",
    slug: "factory-production-20",
    videoSrc: "/videos/factory/factory-production-20.mp4",
    posterSrc: "/images/factory/factory-production-20.webp",
    title: {
      id: "Operasional Produksi Paving Block 20",
      en: "Paving Block Production Operations 20",
    },
    description: {
      id: "Pengoperasian mesin hidrolik bertekanan tinggi untuk menghasilkan paving block konsisten dan bebas retak.",
      en: "High-pressure hydraulic machine operation producing consistent, crack-free concrete paving blocks.",
    },
    publishedAt: "2026-10-01T17:18:11.000Z",
    durationSeconds: 65,
    isoDuration: "PT1M5S",
  },
  {
    id: "prod-vid-21",
    slug: "factory-production-21",
    videoSrc: "/videos/factory/factory-production-21.mp4",
    posterSrc: "/images/factory/factory-production-21.webp",
    title: {
      id: "Dokumentasi Produksi Paving Block 21",
      en: "Paving Block Production Documentation 21",
    },
    description: {
      id: "Tahapan pencetakan paving block kapasitas besar di fasilitas manufaktur PT Kaha Sukses Mandiri Cisauk.",
      en: "Large-capacity paving block molding stages at PT Kaha Sukses Mandiri manufacturing facility in Cisauk.",
    },
    publishedAt: "2026-10-01T17:18:11.000Z",
    durationSeconds: 132,
    isoDuration: "PT2M12S",
  },
  {
    id: "prod-vid-22",
    slug: "factory-production-22",
    videoSrc: "/videos/factory/factory-production-22.mp4",
    posterSrc: "/images/factory/factory-production-22.webp",
    title: {
      id: "Proses Produksi Paving Block 22",
      en: "Paving Block Production Process 22",
    },
    description: {
      id: "Visualisasi proses pengisian matris cetakan dan pemadatan hidrolik paving block berkualitas.",
      en: "Visualization of mold matrix filling and hydraulic compaction for quality concrete pavers.",
    },
    publishedAt: "2026-10-01T17:18:11.000Z",
    durationSeconds: 45,
    isoDuration: "PT45S",
  },
  {
    id: "prod-vid-08",
    slug: "factory-production-08",
    videoSrc: "/videos/factory/factory-production-08.mp4",
    posterSrc: "/images/factory/factory-production-08.webp",
    title: {
      id: "Operasional Produksi Paving Block 08",
      en: "Paving Block Production Operations 08",
    },
    description: {
      id: "Dokumentasi siklus press hidrolik otomatis dalam pembuatan paving block tahan beban.",
      en: "Automated hydraulic press cycle documentation in heavy-duty paving block manufacturing.",
    },
    publishedAt: "2026-10-01T17:18:11.000Z",
    durationSeconds: 66,
    isoDuration: "PT1M6S",
  },
  {
    id: "prod-vid-09",
    slug: "factory-production-09",
    videoSrc: "/videos/factory/factory-production-09.mp4",
    posterSrc: "/images/factory/factory-production-09.webp",
    title: {
      id: "Dokumentasi Produksi Paving Block 09",
      en: "Paving Block Production Documentation 09",
    },
    description: {
      id: "Proses pembentukan produk paving block beton presisi tinggi di pabrik Kaha Block Cisauk.",
      en: "High-precision concrete paving block forming process at Kaha Block factory in Cisauk.",
    },
    publishedAt: "2026-10-01T17:18:11.000Z",
    durationSeconds: 68,
    isoDuration: "PT1M8S",
  },
  {
    id: "prod-vid-10",
    slug: "factory-production-10",
    videoSrc: "/videos/factory/factory-production-10.mp4",
    posterSrc: "/images/factory/factory-production-10.webp",
    title: {
      id: "Proses Produksi Paving Block 10",
      en: "Paving Block Production Process 10",
    },
    description: {
      id: "Alur pencetakan dan pemadatan beton segar pada mesin paving hidrolik otomatis.",
      en: "Molding and compaction workflow of fresh concrete on automated hydraulic paver machine.",
    },
    publishedAt: "2026-10-01T17:18:11.000Z",
    durationSeconds: 69,
    isoDuration: "PT1M9S",
  },
  {
    id: "prod-vid-11",
    slug: "factory-production-11",
    videoSrc: "/videos/factory/factory-production-11.mp4",
    posterSrc: "/images/factory/factory-production-11.webp",
    title: {
      id: "Operasional Produksi Paving Block 11",
      en: "Paving Block Production Operations 11",
    },
    description: {
      id: "Proses pengeluaran hasil cetakan paving block dari mesin hidrolik menuju tatakan palet.",
      en: "Release process of molded paving blocks from hydraulic press onto curing pallets.",
    },
    publishedAt: "2026-10-01T17:18:11.000Z",
    durationSeconds: 62,
    isoDuration: "PT1M2S",
  },
  {
    id: "prod-vid-18",
    slug: "factory-production-18",
    videoSrc: "/videos/factory/factory-production-18.mp4",
    posterSrc: "/images/factory/factory-production-18.webp",
    title: {
      id: "Dokumentasi Produksi Paving Block 18",
      en: "Paving Block Production Documentation 18",
    },
    description: {
      id: "Dokumentasi menyeluruh fasilitas produksi dan siklus pencetakan paving block PT Kaha Sukses Mandiri.",
      en: "Comprehensive documentation of production facilities and paver molding cycles at PT Kaha Sukses Mandiri.",
    },
    publishedAt: "2026-10-01T17:18:11.000Z",
    durationSeconds: 71,
    isoDuration: "PT1M11S",
  },
];

export function getAllVideos(): VideoItem[] {
  return PRODUCTION_VIDEOS;
}

export function getVideoBySlug(slug: string): VideoItem | undefined {
  return PRODUCTION_VIDEOS.find((v) => v.slug === slug);
}

export function getAllVideoSlugs(): string[] {
  return PRODUCTION_VIDEOS.map((v) => v.slug);
}

export function getLocalizedVideoData(item: VideoItem, lang: Locale) {
  const isEn = lang === "en";
  return {
    ...item,
    localizedTitle: isEn ? item.title.en : item.title.id,
    localizedDescription: isEn ? item.description.en : item.description.id,
    localizedTag: item.tag ? (isEn ? item.tag.en : item.tag.id) : undefined,
  };
}
