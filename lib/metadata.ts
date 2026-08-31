import type { Metadata } from "next";
import { Locale } from "./dictionary";

const BASE_URL = "https://kahablock.com";
const OG_IMAGE_URL = `${BASE_URL}/image-og.png`;

interface PageMetaConfig {
  path: "" | "/about" | "/products" | "/projects" | "/contact" | "/blog";
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
        "Pabrik paving block dengan mesin full otomatis hidrolik. Solusi tepat untuk infrastruktur yang kokoh di Jabodetabek dan sekitarnya.",
    },
    en: {
      title: "KAHA BLOCK - Premium Paving Block Factory in Indonesia",
      description:
        "Paving block manufacturing with fully automatic hydraulic machinery. Solid infrastructure solutions across Greater Jakarta and beyond.",
    },
  },
  about: {
    path: "/about",
    id: {
      title: "Tentang Kami | KAHA BLOCK",
      description:
        "Mulai beroperasi sejak tahun 2015, PT Kaha Sukses Mandiri (Kaha Block) adalah produsen paving block dengan mesin full otomatis hidrolik dan pabrik seluas 9.080 m² di Tangerang.",
    },
    en: {
      title: "About Us | KAHA BLOCK",
      description:
        "Operating since 2015, PT Kaha Sukses Mandiri (Kaha Block) manufactures paving blocks using fully automatic hydraulic machinery at our 9,080 m² factory in Tangerang.",
    },
  },
  products: {
    path: "/products",
    id: {
      title: "Produk Paving Block & Conblock | KAHA BLOCK",
      description:
        "Pilihan paving block: Truepave, Half, Hexagonal & Ubin, Uskup, dan Kanstein produksi PT Kaha Sukses Mandiri.",
    },
    en: {
      title: "Paving Block Products | KAHA BLOCK",
      description:
        "Quality paving block products: Truepave, Half, Hexagonal & Tile, Uskup, and Kanstein by PT Kaha Sukses Mandiri.",
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
  blog: {
    path: "/blog",
    id: {
      title: "Blog & Pusat Panduan Paving Block | KAHA BLOCK",
      description:
        "Kumpulan panduan teknis, tips perencanaan area, perbandingan ketebalan, mutu beton K-250, K-300, dan K-400, serta cara merawat paving block dari PT Kaha Sukses Mandiri.",
    },
    en: {
      title: "Blog & Paving Block Guide Center | KAHA BLOCK",
      description:
        "Technical guides, area planning tips, thickness comparisons, K-250, K-300, and K-400 concrete strength insights, and maintenance practices from PT Kaha Sukses Mandiri.",
    },
  },
};

export function constructPageMetadata(
  pageKey: "home" | "about" | "products" | "projects" | "contact" | "blog",
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
        "x-default": idUrl,
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

export function constructBlogPostMetadata({
  slug,
  lang,
  title,
  description,
  publishedAt,
  updatedAt,
}: {
  slug: string;
  lang: Locale;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
}): Metadata {
  // Strip any existing brand suffixes from title to prevent double-branding
  const cleanTitle = title
    .replace(/\s*(\|\s*|-+\s*)(KAHA BLOCK|Kaha Block|kaha block)\s*$/i, "")
    .trim();
  const finalTitle = `${cleanTitle} | KAHA BLOCK`;

  const canonicalUrl = `${BASE_URL}/${lang}/blog/${slug}`;
  const idUrl = `${BASE_URL}/id/blog/${slug}`;
  const enUrl = `${BASE_URL}/en/blog/${slug}`;

  return {
    title: finalTitle,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "id-ID": idUrl,
        en: enUrl,
        "x-default": idUrl,
      },
    },
    openGraph: {
      title: finalTitle,
      description,
      url: canonicalUrl,
      siteName: "KAHA BLOCK",
      locale: lang === "id" ? "id_ID" : "en_US",
      type: "article",
      publishedTime: publishedAt,
      modifiedTime: updatedAt,
      authors: ["PT Kaha Sukses Mandiri"],
      images: [
        {
          url: OG_IMAGE_URL,
          width: 1200,
          height: 630,
          alt: cleanTitle,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description,
      images: [OG_IMAGE_URL],
    },
  };
}
