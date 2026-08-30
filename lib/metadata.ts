import type { Metadata } from "next";
import { Locale } from "./dictionary";

const BASE_URL = "https://kahablock.com";
const OG_IMAGE_URL = `${BASE_URL}/image-og.png`;

interface PageMetaConfig {
  path: "" | "/about" | "/products" | "/projects" | "/contact";
  id: {
    title: string;
    description: string;
  };
  en: {
    title: string;
    description: string;
  };
}

const PAGE_META: Record<string, PageMetaConfig> = {
  home: {
    path: "",
    id: {
      title: "KAHA BLOCK - Pabrik Paving Block Berkualitas di Indonesia",
      description:
        "Pabrik Paving Block Full Otomatis Hidrolik K-250, K-300, dan K-400 dengan Kualitas Terbaik. Solusi tepat untuk infrastruktur yang kokoh di Jabodetabek dan sekitarnya.",
    },
    en: {
      title: "KAHA BLOCK - Premium Paving Block Factory in Indonesia",
      description:
        "Fully Automatic Hydraulic Paving Blocks in K-250, K-300, and K-400 Quality. Solid infrastructure solutions across Greater Jakarta and beyond.",
    },
  },
  about: {
    path: "/about",
    id: {
      title: "Tentang Kami | KAHA BLOCK",
      description:
        "Mulai beroperasi sejak tahun 2015, PT Kaha Sukses Mandiri (Kaha Block) adalah produsen paving block hidrolik otomatis dengan pabrik seluas 9.080 m² di Tangerang.",
    },
    en: {
      title: "About Us | KAHA BLOCK",
      description:
        "Operating since 2015, PT Kaha Sukses Mandiri (Kaha Block) produces automatic hydraulic paving blocks at our 9,080 m² factory in Tangerang.",
    },
  },
  products: {
    path: "/products",
    id: {
      title: "Produk Paving Block & Conblock | KAHA BLOCK",
      description:
        "Pilihan paving block: Truepave, Half, Hexagonal & Ubin, Topi Uskup, dan Kanstein Jepit mutu K-250, K-300, K-400 produksi PT Kaha Sukses Mandiri.",
    },
    en: {
      title: "Paving Block Products | KAHA BLOCK",
      description:
        "Quality paving block products: Truepave, Half, Hexagonal & Tile, Bishop Hat, and Kanstein Jepit in K-250, K-300, K-400 grades by PT Kaha Sukses Mandiri.",
    },
  },
  projects: {
    path: "/projects",
    id: {
      title: "Galeri Dokumentasi Proyek | KAHA BLOCK",
      description:
        "Dokumentasi hasil aplikasi di lapangan dan proses distribusi paving block PT Kaha Sukses Mandiri untuk berbagai proyek infrastruktur.",
    },
    en: {
      title: "Project Documentation Gallery | KAHA BLOCK",
      description:
        "Field applications and distribution documentation gallery for paving block infrastructure projects by PT Kaha Sukses Mandiri.",
    },
  },
  contact: {
    path: "/contact",
    id: {
      title: "Konsultasi & Pemesanan | KAHA BLOCK",
      description:
        "Hubungi PT Kaha Sukses Mandiri (Kaha Block) di Cisauk Tangerang untuk konsultasi proyek, ketersediaan produk conblock, dan jasa pemasangan.",
    },
    en: {
      title: "Consultation & Ordering | KAHA BLOCK",
      description:
        "Contact PT Kaha Sukses Mandiri (Kaha Block) in Cisauk Tangerang for project consultation, paving block availability, and installation services.",
    },
  },
};

export function constructPageMetadata(
  pageKey: "home" | "about" | "products" | "projects" | "contact",
  lang: Locale
): Metadata {
  const config = PAGE_META[pageKey];
  const langMeta = config[lang];
  const canonicalUrl = `${BASE_URL}/${lang}${config.path}`;
  const idUrl = `${BASE_URL}/id${config.path}`;
  const enUrl = `${BASE_URL}/en${config.path}`;

  return {
    title: langMeta.title,
    description: langMeta.description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "id-ID": idUrl,
        en: enUrl,
      },
    },
    openGraph: {
      title: langMeta.title,
      description: langMeta.description,
      url: canonicalUrl,
      siteName: "KAHA BLOCK",
      locale: lang === "id" ? "id_ID" : "en_US",
      type: "website",
      images: [
        {
          url: OG_IMAGE_URL,
          width: 1200,
          height: 630,
          alt: "Kaha Block - Paving Block Berkualitas",
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: langMeta.title,
      description: langMeta.description,
      images: [OG_IMAGE_URL],
    },
  };
}
