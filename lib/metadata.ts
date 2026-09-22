import type { Metadata } from "next";
import { Locale } from "./dictionary";
import { SITE_URL } from "./site-config";

const BASE_URL = SITE_URL;
const OG_IMAGE_URL = `${BASE_URL}/image-og.png`;

interface PageMetaConfig {
  path: "" | "/about" | "/products" | "/projects" | "/projects/production" | "/contact" | "/blog";
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
      title: "KAHA BLOCK - Pabrik Paving Block & Jasa Pemasangan Jabodetabek",
      description:
        "Pabrik paving block mesin full otomatis hidrolik di Cisauk, Kabupaten Tangerang. Melayani pengadaan material dan jasa pemasangan untuk wilayah Jabodetabek.",
    },
    en: {
      title: "KAHA BLOCK - Paving Block Factory & Installation Greater Jakarta",
      description:
        "Hydraulic paving block manufacturer in Cisauk, Tangerang Regency. Supplying precision concrete blocks and installation services across Greater Jakarta (Jabodetabek).",
    },
  },
  about: {
    path: "/about",
    id: {
      title: "Tentang Kami | KAHA BLOCK",
      description:
        "Produsen paving block sejak 2015 dengan pabrik seluas 9.080 m² di Cisauk, Kabupaten Tangerang. Melayani pengadaan dan pemasangan untuk seluruh Jabodetabek.",
    },
    en: {
      title: "About Us | KAHA BLOCK",
      description:
        "Operating since 2015, PT Kaha Sukses Mandiri (Kaha Block) produces precision paving blocks at its 9,080 m² factory in Cisauk, Tangerang Regency, serving Greater Jakarta.",
    },
  },
  products: {
    path: "/products",
    id: {
      title: "Produk Paving Block & Conblock | KAHA BLOCK",
      description:
        "Katalog paving block presisi: Truepave, Half, Hexa, Ubin, dan Kanstein langsung dari pabrik. Pengadaan material dan gratis pengiriman wilayah Jabodetabek.",
    },
    en: {
      title: "Paving Block Products | KAHA BLOCK",
      description:
        "Direct factory paving block products: Truepave, Half, Hexagonal, Tile, and Curb Stones. Material supply with free delivery across Greater Jakarta (Jabodetabek).",
    },
  },
  projects: {
    path: "/projects",
    id: {
      title: "Galeri Dokumentasi Proyek | KAHA BLOCK",
      description:
        "Dokumentasi pengadaan material dan jasa pemasangan paving block PT Kaha Sukses Mandiri untuk berbagai proyek infrastruktur di wilayah Jabodetabek.",
    },
    en: {
      title: "Project Documentation Gallery | KAHA BLOCK",
      description:
        "Visual documentation of paving block material supply and installation projects across Greater Jakarta (Jabodetabek) by PT Kaha Sukses Mandiri.",
    },
  },
  projectsProduction: {
    path: "/projects/production",
    id: {
      title: "Pabrik Paving Block di Cisauk Tangerang | KAHA BLOCK",
      description:
        "Fasilitas pabrik 9.080 m² PT Kaha Sukses Mandiri di Cisauk, Kabupaten Tangerang. Produksi paving block mesin otomatis hidrolik melayani wilayah Jabodetabek.",
    },
    en: {
      title: "Paving Block Factory in Cisauk Tangerang | KAHA BLOCK",
      description:
        "Production documentation from Kaha Block's 9,080 m² manufacturing plant in Cisauk, Tangerang Regency, operating since 2015 with hydraulic machinery serving Jabodetabek.",
    },
  },
  contact: {
    path: "/contact",
    id: {
      title: "Kontak & Area Layanan Jabodetabek | KAHA BLOCK",
      description:
        "Hubungi PT Kaha Sukses Mandiri (Kaha Block) di Cisauk, Kabupaten Tangerang untuk pengadaan material dan jasa pemasangan paving block di seluruh Jabodetabek.",
    },
    en: {
      title: "Contact & Service Area Greater Jakarta | KAHA BLOCK",
      description:
        "Contact PT Kaha Sukses Mandiri (Kaha Block) in Cisauk, Tangerang Regency for paving block supply and installation services across Greater Jakarta.",
    },
  },
  blog: {
    path: "/blog",
    id: {
      title: "Blog & Pusat Panduan Paving Block | KAHA BLOCK",
      description:
        "Panduan teknis, tips perencanaan area, mutu beton K-250, K-300, K-400, serta metode pemasangan dan perawatan paving block dari PT Kaha Sukses Mandiri.",
    },
    en: {
      title: "Blog & Paving Block Guide Center | KAHA BLOCK",
      description:
        "Technical guides, area planning tips, thickness comparisons, K-250, K-300, and K-400 concrete grades insights, and maintenance practices from PT Kaha Sukses Mandiri.",
    },
  },
};

export function constructPageMetadata(
  pageKey: "home" | "about" | "products" | "projects" | "projectsProduction" | "contact" | "blog",
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
