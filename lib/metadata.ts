import type { Metadata } from "next";
import { Locale } from "./dictionary";
import { SITE_URL } from "./site-config";

const BASE_URL = SITE_URL;
const OG_IMAGE_URL = `${BASE_URL}/image-og.png`;

interface PageMetaConfig {
  path:
    | ""
    | "/about"
    | "/products"
    | "/projects"
    | "/projects/production"
    | "/contact"
    | "/blog"
    | "/jasa-pemasangan-paving-block"
    | "/harga-paving-block"
    | "/area-layanan"
    | "/area-layanan/jakarta"
    | "/area-layanan/tangerang"
    | "/area-layanan/bekasi"
    | "/area-layanan/depok"
    | "/area-layanan/bogor";
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
      title: "Pabrik & Supplier Paving Block Jabodetabek | KAHA BLOCK",
      description:
        "PT Kaha Sukses Mandiri (Kaha Block), pabrik, produsen dan supplier paving block/conblock di Cisauk Tangerang. Melayani jual/pengadaan material dan jasa pasang Jabodetabek.",
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
      title: "PT Kaha Sukses Mandiri (KAHA BLOCK) | Pabrik Paving Block",
      description:
        "Profil PT Kaha Sukses Mandiri (Kaha Block), produsen paving block sejak 2015 dengan fasilitas produksi 9.080 m² di Cisauk, Kabupaten Tangerang.",
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
      title: "Jual Paving Block & Conblock Langsung Pabrik | KAHA BLOCK",
      description:
        "Katalog paving block, conblock dan kanstein langsung dari pabrik Kaha Block Cisauk. Pilih model, ketebalan, mutu, warna dan cek stok untuk proyek Jabodetabek.",
    },
    en: {
      title: "Paving Block Prices & Direct Factory Supplier | KAHA BLOCK",
      description:
        "Paving block material prices start from Rp90,000/m²*. Direct factory supply from Cisauk with K-250, K-300, K-400 grades and free delivery only within Greater Jakarta.",
    },
  },
  hargaPaving: {
    path: "/harga-paving-block",
    id: {
      title: "Harga Paving Block per m², Satuan & Jasa Pasang 2026 | KAHA BLOCK",
      description:
        "Cek acuan harga paving block per m²/meter persegi, per biji/satuan, mutu K-250/K-300/K-400, tebal 6/8/10 cm dan estimasi jasa pasang Jabodetabek.",
    },
    en: {
      title: "Paving Block Price per m², Unit & Installation 2026 | KAHA BLOCK",
      description:
        "Review paving block pricing per m²/unit, K-250/K-300/K-400 grades, 6/8/10 cm thickness options and installation estimates across Greater Jakarta.",
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
      title: "Info Harga & Artikel Paving Block | KAHA BLOCK",
      description:
        "Temukan informasi harga paving block, panduan memilih produk, mutu beton K-250, K-300, K-400, pemasangan, serta referensi proyek dari PT Kaha Sukses Mandiri.",
    },
    en: {
      title: "Paving Block Pricing Info & Articles | KAHA BLOCK",
      description:
        "Explore paving block pricing information, product selection guides, concrete grades K-250/K-300/K-400, installation methods, and project references from Kaha Block.",
    },
  },
  jasaPemasangan: {
    path: "/jasa-pemasangan-paving-block",
    id: {
      title: "Jasa Pasang & Kontraktor Paving Block Jabodetabek | KAHA BLOCK",
      description:
        "Jasa pasang, borongan dan kontraktor paving block untuk Jakarta, Tangerang, Bekasi, Depok dan Bogor. Estimasi material + pemasangan berdasarkan luas dan kondisi lahan.",
    },
    en: {
      title: "Paving Block Installation Contractor Jabodetabek | KAHA BLOCK",
      description:
        "Kaha Block supplies paving blocks and serves as an installation contractor across Greater Jakarta (Jakarta, Tangerang, Bekasi, Depok, Bogor) with experienced crews.",
    },
  },
  areaLayanan: {
    path: "/area-layanan",
    id: {
      title: "Area Layanan Paving Block Jabodetabek | KAHA BLOCK",
      description:
        "Area layanan pengadaan dan jasa pemasangan paving block Kaha Block mencakup DKI Jakarta, Tangerang Raya, Bekasi, Depok, dan Bogor (Jabodetabek).",
    },
    en: {
      title: "Paving Block Service Areas Greater Jakarta | KAHA BLOCK",
      description:
        "Kaha Block supply and installation service coverage across Greater Jakarta including Jakarta, Tangerang, Bekasi, Depok, and Bogor municipalities.",
    },
  },
  areaJakarta: {
    path: "/area-layanan/jakarta",
    id: {
      title: "Supplier Paving Block Jakarta & Jasa Pasang | KAHA BLOCK",
      description:
        "Supplier dan jual paving block/conblock untuk Jakarta langsung dari pabrik Cisauk. Melayani pengadaan material, harga proyek, jasa pasang, pengiriman dan penurunan Jabodetabek.",
    },
    en: {
      title: "Paving Block Supplier Jakarta & Installation | KAHA BLOCK",
      description:
        "Direct factory paving block supply and installation across South, East, West, North, and Central Jakarta. Free delivery and offloading included.",
    },
  },
  areaTangerang: {
    path: "/area-layanan/tangerang",
    id: {
      title: "Pabrik & Supplier Paving Block Tangerang | KAHA BLOCK",
      description:
        "Pabrik dan supplier paving block/conblock di Cisauk Tangerang. Melayani jual/pengadaan, mutu K-250/K-300/K-400, harga proyek dan jasa pasang untuk Tangerang Raya.",
    },
    en: {
      title: "Paving Block Factory Tangerang & Installation | KAHA BLOCK",
      description:
        "Direct factory paving block plant in Cisauk, Tangerang Regency. Supplying pavers and installation crews across the entire Tangerang region.",
    },
  },
  areaBekasi: {
    path: "/area-layanan/bekasi",
    id: {
      title: "Supplier Paving Block Bekasi & Jasa Pasang | KAHA BLOCK",
      description:
        "Supplier paving block/conblock untuk Kota dan Kabupaten Bekasi termasuk Cikarang. Pengadaan langsung pabrik Cisauk, jasa pasang dan pengiriman Jabodetabek.",
    },
    en: {
      title: "Paving Block Supplier Bekasi & Installation | KAHA BLOCK",
      description:
        "Direct factory paving block supply and professional installation services for Bekasi City and Bekasi Regency. Free delivery and offloading.",
    },
  },
  areaDepok: {
    path: "/area-layanan/depok",
    id: {
      title: "Supplier Paving Block Depok & Jasa Pasang | KAHA BLOCK",
      description:
        "Supplier dan pengadaan paving block/conblock untuk Depok, pilihan mutu K-250/K-300/K-400, jasa pasang, serta pengiriman langsung dari pabrik Cisauk.",
    },
    en: {
      title: "Paving Block Supplier Depok & Installation | KAHA BLOCK",
      description:
        "Paving block supply (K-250, K-300, K-400) and laying services for Depok City. Direct factory shipments from Cisauk with free delivery included.",
    },
  },
  areaBogor: {
    path: "/area-layanan/bogor",
    id: {
      title: "Supplier Paving Block Bogor & Jasa Pasang | KAHA BLOCK",
      description:
        "Supplier dan pengadaan paving block/conblock untuk Kota dan Kabupaten Bogor, lengkap dengan jasa pasang serta pengiriman langsung dari pabrik Cisauk.",
    },
    en: {
      title: "Paving Block Supplier Bogor & Installation | KAHA BLOCK",
      description:
        "Precision paving block supply and installation services for Bogor City and Bogor Regency. Direct factory dispatches from Cisauk with free delivery.",
    },
  },
};

export function constructPageMetadata(
  pageKey:
    | "home"
    | "about"
    | "products"
    | "projects"
    | "projectsProduction"
    | "contact"
    | "blog"
    | "jasaPemasangan"
    | "hargaPaving"
    | "areaLayanan"
    | "areaJakarta"
    | "areaTangerang"
    | "areaBekasi"
    | "areaDepok"
    | "areaBogor",
  lang: Locale
): Metadata {
  const config = PAGE_META[pageKey];
  const langMeta = config[lang];
  const canonicalUrl = `${BASE_URL}/${lang}${config.path}`;
  const idUrl = `${BASE_URL}/id${config.path}`;
  const enUrl = `${BASE_URL}/en${config.path}`;

  let pageOgImage = OG_IMAGE_URL;
  if (pageKey === "home") {
    pageOgImage = `${BASE_URL}/images/hero/hero-main.webp`;
  } else if (pageKey === "projects") {
    pageOgImage = `${BASE_URL}/images/projects/kaha-block-dokumentasi-03.webp`;
  } else if (pageKey === "projectsProduction") {
    pageOgImage = `${BASE_URL}/images/production/kaha-block-produksi-02.webp`;
  }

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
          url: pageOgImage,
          width: 1200,
          height: 630,
          alt: langMeta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: langMeta.title,
      description: langMeta.description,
      images: [pageOgImage],
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
  image,
  imageAlt,
}: {
  slug: string;
  lang: Locale;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  image?: string;
  imageAlt?: string;
}): Metadata {
  // Strip any existing brand suffixes from title to prevent double-branding
  const cleanTitle = title
    .replace(/\s*(\|\s*|-+\s*)(KAHA BLOCK|Kaha Block|kaha block)\s*$/i, "")
    .trim();
  const finalTitle = `${cleanTitle} | KAHA BLOCK`;

  const canonicalUrl = `${BASE_URL}/${lang}/blog/${slug}`;
  const idUrl = `${BASE_URL}/id/blog/${slug}`;
  const enUrl = `${BASE_URL}/en/blog/${slug}`;
  const ogImage = image ? `${BASE_URL}${image}` : OG_IMAGE_URL;

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
          url: ogImage,
          width: 1200,
          height: 630,
          alt: imageAlt || cleanTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description,
      images: [ogImage],
    },
  };
}

export function constructProductMetadata({
  slug,
  lang,
  title,
  description,
  image,
}: {
  slug: string;
  lang: Locale;
  title: string;
  description: string;
  image?: string;
}): Metadata {
  const canonicalUrl = `${BASE_URL}/${lang}/products/${slug}`;
  const idUrl = `${BASE_URL}/id/products/${slug}`;
  const enUrl = `${BASE_URL}/en/products/${slug}`;
  const ogImage = image ? `${BASE_URL}${image}` : OG_IMAGE_URL;

  return {
    title,
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
      title,
      description,
      url: canonicalUrl,
      siteName: "KAHA BLOCK",
      locale: lang === "id" ? "id_ID" : "en_US",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export function constructVideoMetadata({
  slug,
  lang,
  title,
  description,
  posterImage,
}: {
  slug: string;
  lang: Locale;
  title: string;
  description: string;
  posterImage?: string;
}): Metadata {
  const canonicalUrl = `${BASE_URL}/${lang}/videos/${slug}`;
  const idUrl = `${BASE_URL}/id/videos/${slug}`;
  const enUrl = `${BASE_URL}/en/videos/${slug}`;
  const ogImage = posterImage ? `${BASE_URL}${posterImage}` : OG_IMAGE_URL;
  const pageTitle = `${title} | KAHA BLOCK`;

  return {
    title: pageTitle,
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
      title: pageTitle,
      description,
      url: canonicalUrl,
      siteName: "KAHA BLOCK",
      locale: lang === "id" ? "id_ID" : "en_US",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [ogImage],
    },
  };
}
