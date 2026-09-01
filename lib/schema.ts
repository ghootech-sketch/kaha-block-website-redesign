import { BUSINESS_FACTS } from "./business-facts";
import { Locale } from "./dictionary";
import { BlogPost } from "./blog-types";

export type SchemaPageType =
  | "home"
  | "about"
  | "products"
  | "projects"
  | "contact"
  | "blog"
  | "blogPost";

interface GenerateGraphParams {
  page: SchemaPageType;
  lang: Locale;
  post?: BlogPost;
}

export function generateStructuredDataGraph({
  page,
  lang,
  post,
}: GenerateGraphParams) {
  const isEn = lang === "en";
  const baseUrl = BUSINESS_FACTS.domain;
  const canonicalUrl =
    page === "home"
      ? `${baseUrl}/${lang}`
      : page === "blogPost" && post
      ? `${baseUrl}/${lang}/blog/${post.slug}`
      : `${baseUrl}/${lang}/${page}`;

  // 1. Organization Entity (Master Business Entity)
  const organizationEntity = {
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${baseUrl}/#organization`,
    name: "PT Kaha Sukses Mandiri",
    alternateName: "Kaha Block",
    legalName: BUSINESS_FACTS.legalName,
    url: baseUrl,
    logo: {
      "@type": "ImageObject",
      "@id": `${baseUrl}/#logo`,
      url: `${baseUrl}/icon.png`,
      caption: "Kaha Block Logo",
    },
    image: `${baseUrl}/image-og.png`,
    foundingDate: `${BUSINESS_FACTS.foundingYear}`,
    email: BUSINESS_FACTS.contact.email,
    telephone: BUSINESS_FACTS.contact.primaryPhoneE164,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_FACTS.address.street,
      addressLocality: BUSINESS_FACTS.address.locality,
      addressRegion: BUSINESS_FACTS.address.region,
      postalCode: BUSINESS_FACTS.address.postalCode,
      addressCountry: BUSINESS_FACTS.address.countryCode,
    },
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: isEn ? "Greater Jakarta (Jabodetabek)" : "Jabodetabek",
      },
      {
        "@type": "Country",
        name: "Indonesia",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: BUSINESS_FACTS.contact.primaryPhoneE164,
        contactType: "sales",
        areaServed: "ID",
        availableLanguage: ["id", "en"],
      },
      {
        "@type": "ContactPoint",
        telephone: BUSINESS_FACTS.contact.altPhoneE164,
        contactType: "customer support",
        areaServed: "ID",
        availableLanguage: ["id", "en"],
      },
    ],
    sameAs: [BUSINESS_FACTS.social.instagram],
  };

  // 2. WebSite Entity
  const websiteEntity = {
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: "Kaha Block",
    description: isEn
      ? "Precision hydraulic concrete paving block manufacturer and material supplier in Cisauk, Tangerang."
      : "Pabrik produsen dan supplier paving block berkualitas presisi dengan mesin full otomatis hidrolik di Cisauk, Tangerang.",
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
    inLanguage: ["id", "en"],
  };

  // 3. BreadcrumbList Entity (for non-home pages)
  let breadcrumbEntity: Record<string, unknown> | null = null;
  if (page !== "home") {
    const homeName = isEn ? "Home" : "Beranda";
    const items: Array<{
      "@type": string;
      position: number;
      name: string;
      item: string;
    }> = [
      {
        "@type": "ListItem",
        position: 1,
        name: homeName,
        item: `${baseUrl}/${lang}`,
      },
    ];

    if (page === "about") {
      items.push({
        "@type": "ListItem",
        position: 2,
        name: isEn ? "About Us" : "Tentang Kami",
        item: canonicalUrl,
      });
    } else if (page === "products") {
      items.push({
        "@type": "ListItem",
        position: 2,
        name: isEn ? "Products" : "Produk",
        item: canonicalUrl,
      });
    } else if (page === "projects") {
      items.push({
        "@type": "ListItem",
        position: 2,
        name: isEn ? "Project Gallery" : "Galeri Proyek",
        item: canonicalUrl,
      });
    } else if (page === "contact") {
      items.push({
        "@type": "ListItem",
        position: 2,
        name: isEn ? "Contact & Consultation" : "Kontak & Konsultasi",
        item: canonicalUrl,
      });
    } else if (page === "blog") {
      items.push({
        "@type": "ListItem",
        position: 2,
        name: isEn ? "Insights & Articles" : "Artikel & Wawasan",
        item: canonicalUrl,
      });
    } else if (page === "blogPost" && post) {
      items.push({
        "@type": "ListItem",
        position: 2,
        name: isEn ? "Insights & Articles" : "Artikel & Wawasan",
        item: `${baseUrl}/${lang}/blog`,
      });
      items.push({
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: canonicalUrl,
      });
    }

    breadcrumbEntity = {
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      itemListElement: items,
    };
  }

  // 4. WebPage / Specific Page Entity
  let pageType = "WebPage";
  let pageName = "Kaha Block";
  let pageDescription = "";

  switch (page) {
    case "home":
      pageType = "WebPage";
      pageName = isEn
        ? "Kaha Block | Precision Paving Block Manufacturer"
        : "Kaha Block | Pabrik Paving Block Berkualitas Mesin Hidrolik";
      pageDescription = isEn
        ? "Manufacturer of high-strength hydraulic concrete paving blocks, Truepave, Hexagonal, and curb stones in Tangerang."
        : "Pabrik produsen paving block presisi mesin hidrolik otomatis mutu K-300 hingga K-350 di Cisauk, Tangerang.";
      break;
    case "about":
      pageType = "AboutPage";
      pageName = isEn
        ? "About PT Kaha Sukses Mandiri (Kaha Block)"
        : "Tentang PT Kaha Sukses Mandiri (Kaha Block)";
      pageDescription = isEn
        ? "Learn about Kaha Block's 9,080 m² manufacturing facility, hydraulic automated production, and quality commitment since 2015."
        : "Profil PT Kaha Sukses Mandiri (Kaha Block), fasilitas pabrik 9.080 m², mesin hidrolik otomatis, dan komitmen mutu sejak 2015.";
      break;
    case "products":
      pageType = "CollectionPage";
      pageName = isEn
        ? "Paving Block & Curb Stone Products | Kaha Block"
        : "Produk Paving Block & Kanstein Beton | Kaha Block";
      pageDescription = isEn
        ? "Explore Kaha Block concrete paving product specifications: Truepave, Hexagonal, Bishop Hat, and Curb Stones."
        : "Katalog spesifikasi paving block Truepave, Hexagonal, Ubin, Topi Uskup, dan Kanstein beton mesin hidrolik otomatis.";
      break;
    case "projects":
      pageType = "CollectionPage";
      pageName = isEn
        ? "Project Portfolio & Installation Gallery | Kaha Block"
        : "Portofolio & Galeri Pemasangan Paving Block | Kaha Block";
      pageDescription = isEn
        ? "Documentation of paving block applications across residential estates, commercial parking lots, and industrial facilities."
        : "Dokumentasi aplikasi paving block Kaha Block pada perumahan, area parkir ruko komersial, dan kawasan industri.";
      break;
    case "contact":
      pageType = "ContactPage";
      pageName = isEn
        ? "Contact & Consultation | Kaha Block"
        : "Kontak & Konsultasi Teknis | Kaha Block";
      pageDescription = isEn
        ? "Contact Kaha Block for price estimates, product consultations, and factory orders in Cisauk, Tangerang."
        : "Hubungi Kaha Block via WhatsApp atau telepon untuk estimasi kebutuhan material, konsultasi teknis, dan pemesanan.";
      break;
    case "blog":
      pageType = "CollectionPage";
      pageName = isEn
        ? "Paving Block Insights & Guides | Kaha Block"
        : "Artikel & Panduan Teknis Paving Block | Kaha Block";
      pageDescription = isEn
        ? "Technical guides, thickness selection, concrete strength grades, and installation methods from Kaha Block."
        : "Kumpulan artikel teknis, panduan ketebalan, mutu beton K-300 dan K-350, serta tips pemasangan paving block presisi.";
      break;
    case "blogPost":
      if (post) {
        pageType = "WebPage";
        pageName = post.title;
        pageDescription = post.seoDescription;
      }
      break;
  }

  const webPageEntity: Record<string, unknown> = {
    "@type": pageType,
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: pageName,
    description: pageDescription,
    isPartOf: {
      "@id": `${baseUrl}/#website`,
    },
    about: {
      "@id": `${baseUrl}/#organization`,
    },
    inLanguage: lang,
  };

  if (breadcrumbEntity) {
    webPageEntity.breadcrumb = {
      "@id": `${canonicalUrl}#breadcrumb`,
    };
  }

  const graph: Array<Record<string, unknown>> = [
    organizationEntity,
    websiteEntity,
    webPageEntity,
  ];

  if (breadcrumbEntity) {
    graph.push(breadcrumbEntity);
  }

  // 5. Page-Specific Entities

  // A. Products Collection ItemList
  if (page === "products") {
    const productsList = [
      {
        "@type": "Product",
        "@id": `${canonicalUrl}#product-truepave`,
        name: isEn ? "Truepave" : "Truepave",
        description: isEn
          ? "Size: 21 × 10.5 cm. Color Options: Grey, Red, Black, Yellow. Thickness Options: 6 cm, 8 cm, 10 cm. Coverage: 44 pcs/m². Compressive Strength: K-300 to K-350. Max water absorption 6%. Raw materials: Holcim Dynamix & SCG. Applications: Roads, parking, and industrial areas."
          : "Ukuran: 21 × 10,5 cm. Pilihan Warna: Abu-abu, Merah, Hitam, Kuning. Pilihan Tebal: 6 cm, 8 cm, 10 cm. Daya Tutup: 44 pcs/m². Kuat Tekan: K-300 sampai K-350. Penyerapan air maks 6%. Material: Holcim Dynamix & SCG. Aplikasi: Jalan, parkir, dan area industri.",
        brand: {
          "@type": "Brand",
          name: "Kaha Block",
        },
        manufacturer: {
          "@id": `${baseUrl}/#organization`,
        },
        category: "Concrete Paving Blocks",
        image: `${baseUrl}/images/products/kaha-block-truepave.webp`,
        url: `${canonicalUrl}#product-truepave`,
      },
      {
        "@type": "Product",
        "@id": `${canonicalUrl}#product-half-tahu`,
        name: isEn ? "Half / Tahu" : "Half / Tahu",
        description: isEn
          ? "Size: 10.5 × 10.5 cm. Color Options: Grey, Red, Black, Yellow. Thickness Options: 6 cm, 8 cm. Coverage: 88 pcs/m². Compressive Strength: K-300 & K-350. Function: Paving pattern lock & color boundary."
          : "Ukuran: 10,5 × 10,5 cm. Pilihan Warna: Abu-abu, Merah, Hitam, Kuning. Pilihan Tebal: 6 cm, 8 cm. Daya Tutup: 88 pcs/m². Kuat Tekan: K-300 & K-350. Fungsi: Pengunci pola paving & pembatas warna.",
        brand: {
          "@type": "Brand",
          name: "Kaha Block",
        },
        manufacturer: {
          "@id": `${baseUrl}/#organization`,
        },
        category: "Concrete Paving Blocks",
        image: `${baseUrl}/images/products/kaha-block-half-tahu.webp`,
        url: `${canonicalUrl}#product-half-tahu`,
      },
      {
        "@type": "Product",
        "@id": `${canonicalUrl}#product-hexa`,
        name: isEn ? "Hexa 8 cm" : "Hexa 8 cm",
        description: isEn
          ? "Product family: K-300 to K-350. Thickness Options: 6 cm, 8 cm. Color Options: Grey, Red, Black. Application: Decorative areas and pedestrians."
          : "Keluarga produk: K-300 hingga K-350. Pilihan Tebal: 6 cm, 8 cm. Pilihan Warna: Abu-abu, Merah, Hitam. Aplikasi: Area dekoratif dan pedestrian.",
        brand: {
          "@type": "Brand",
          name: "Kaha Block",
        },
        manufacturer: {
          "@id": `${baseUrl}/#organization`,
        },
        category: "Concrete Paving Blocks",
        image: `${baseUrl}/images/products/kaha-block-hexa-8cm.webp`,
        url: `${canonicalUrl}#product-hexa`,
      },
      {
        "@type": "Product",
        "@id": `${canonicalUrl}#product-ubin`,
        name: isEn ? "Ubin 8 cm" : "Ubin 8 cm",
        description: isEn
          ? "Product family: K-300 to K-350. Thickness Options: 6 cm, 8 cm. Color Options: Grey, Red, Black."
          : "Keluarga produk: K-300 hingga K-350. Pilihan Tebal: 6 cm, 8 cm. Pilihan Warna: Abu-abu, Merah, Hitam.",
        brand: {
          "@type": "Brand",
          name: "Kaha Block",
        },
        manufacturer: {
          "@id": `${baseUrl}/#organization`,
        },
        category: "Concrete Paving Blocks",
        image: `${baseUrl}/images/products/kaha-block-ubin-8cm.webp`,
        url: `${canonicalUrl}#product-ubin`,
      },
      {
        "@type": "Product",
        "@id": `${canonicalUrl}#product-topi-uskup`,
        name: isEn ? "Bishop Hat" : "Topi Uskup",
        description: isEn
          ? "Size: 30 × 21 cm. Height Options: 6 cm and 8 cm. Compressive Strength: K-300. Coverage: 3.3 pcs/m. Material: Concrete. Color Options: Grey. Weight: 6 cm: ≈ 5.5 kg | 8 cm: ≈ 7.4 kg. Function: Locks edges/corners, prevents shifting, maintains stable arrangement."
          : "Ukuran: 30 × 21 cm. Pilihan Tebal: 6 cm dan 8 cm. Kuat Tekan: K-300. Daya Tutup: 3,3 pcs/m. Material: Beton. Pilihan Warna: Abu-abu. Berat: 6 cm: ≈ 5,5 kg | 8 cm: ≈ 7,4 kg. Fungsi: Mengunci sisi/sudut paving, mencegah pergeseran, menjaga susunan tetap rapi dan stabil.",
        brand: {
          "@type": "Brand",
          name: "Kaha Block",
        },
        manufacturer: {
          "@id": `${baseUrl}/#organization`,
        },
        category: "Concrete Paving Blocks",
        image: `${baseUrl}/images/products/kaha-block-topi-uskup.webp`,
        url: `${canonicalUrl}#product-topi-uskup`,
      },
      {
        "@type": "Product",
        "@id": `${canonicalUrl}#product-kanstin-jepit`,
        name: isEn ? "Kanstein Jepit" : "Kanstein Jepit",
        description: isEn
          ? "Category: Paving border/lock curb. Size: 10 × 20 × 40 cm. Coverage: 2.5 pcs/m². Class: High Grade / Heavy Duty. Function: Locks and secures paving edges."
          : "Kategori: Produk pembatas/pengunci paving. Ukuran: 10 × 20 × 40 cm. Daya Tutup: 2,5 pcs/m². Kelas: High Grade / Heavy Duty. Fungsi: Membantu mengunci tepi pemasangan paving.",
        brand: {
          "@type": "Brand",
          name: "Kaha Block",
        },
        manufacturer: {
          "@id": `${baseUrl}/#organization`,
        },
        category: "Concrete Curb Stones",
        image: `${baseUrl}/images/products/kaha-block-kanstein-jepit.webp`,
        url: `${canonicalUrl}#product-kanstin-jepit`,
      },
      {
        "@type": "Product",
        "@id": `${canonicalUrl}#product-kanstin-s`,
        name: isEn ? "Kanstein S" : "Kanstein S",
        description: isEn
          ? "Category: S-type road curb product. Size: 10 × 20 × 40 cm. Coverage: 2.5 pcs/m². Class: High Grade / Heavy Duty. Function: Water gutter & sidewalk border."
          : "Kategori: Produk pembatas jalan tipe S. Ukuran: 10 × 20 × 40 cm. Daya Tutup: 2,5 pcs/m². Kelas: High Grade / Heavy Duty. Fungsi: Saluran air tepi & pembatas trotoar.",
        brand: {
          "@type": "Brand",
          name: "Kaha Block",
        },
        manufacturer: {
          "@id": `${baseUrl}/#organization`,
        },
        category: "Concrete Curb Stones",
        image: `${baseUrl}/images/products/kaha-block-kanstein-s.webp`,
        url: `${canonicalUrl}#product-kanstin-s`,
      },
      {
        "@type": "Product",
        "@id": `${canonicalUrl}#product-kanstin-b1`,
        name: isEn ? "Kanstein B1" : "Kanstein B1",
        description: isEn
          ? "Category: Road curb / border product. Size: 10 × 20 × 40 cm. Coverage: 2.5 pcs/m². Class: High Grade / Heavy Duty. Function: Road shoulder & pedestrian border."
          : "Kategori: Produk pembatas jalan / kanstein. Ukuran: 10 × 20 × 40 cm. Daya Tutup: 2,5 pcs/m². Kelas: High Grade / Heavy Duty. Fungsi: Pembatas bahu jalan & area pedestrian.",
        brand: {
          "@type": "Brand",
          name: "Kaha Block",
        },
        manufacturer: {
          "@id": `${baseUrl}/#organization`,
        },
        category: "Concrete Curb Stones",
        image: `${baseUrl}/images/products/kaha-block-kanstein-b1.webp`,
        url: `${canonicalUrl}#product-kanstin-b1`,
      },
      {
        "@type": "Product",
        "@id": `${canonicalUrl}#product-stoper`,
        name: isEn ? "Stoper" : "Stoper",
        description: isEn
          ? "Category: Wheel stop / border product. Size: 10 × 20 × 40 cm. Coverage: 2.5 pcs/m². Class: High Grade / Heavy Duty. Function: Vehicle parking boundary lock."
          : "Kategori: Produk pembatas / penghenti roda. Ukuran: 10 × 20 × 40 cm. Daya Tutup: 2,5 pcs/m². Kelas: High Grade / Heavy Duty. Fungsi: Pengaman batas parkir kendaraan.",
        brand: {
          "@type": "Brand",
          name: "Kaha Block",
        },
        manufacturer: {
          "@id": `${baseUrl}/#organization`,
        },
        category: "Concrete Curb Stones",
        image: `${baseUrl}/images/products/kaha-block-stoper.webp`,
        url: `${canonicalUrl}#product-stoper`,
      },
    ];

    graph.push({
      "@type": "ItemList",
      "@id": `${canonicalUrl}#products`,
      name: isEn ? "Kaha Block Product Catalog" : "Katalog Produk Kaha Block",
      numberOfItems: productsList.length,
      itemListElement: productsList.map((prod, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        item: prod,
      })),
    });
  }

  // B. Single Blog Article Posting & FAQ
  if (page === "blogPost" && post) {
    const articleEntity: Record<string, unknown> = {
      "@type": "BlogPosting",
      "@id": `${canonicalUrl}#article`,
      mainEntityOfPage: {
        "@id": `${canonicalUrl}#webpage`,
      },
      headline: post.title,
      description: post.seoDescription,
      url: canonicalUrl,
      datePublished: `${post.publishedAt}T00:00:00+07:00`,
      dateModified: `${post.updatedAt}T00:00:00+07:00`,
      author: {
        "@id": `${baseUrl}/#organization`,
      },
      publisher: {
        "@id": `${baseUrl}/#organization`,
      },
      inLanguage: lang,
      articleSection: post.category,
      image: `${baseUrl}/image-og.png`,
    };

    graph.push(articleEntity);

    // If article contains FAQ items, add structured FAQPage graph node
    if (post.faq && post.faq.items && post.faq.items.length > 0) {
      const faqEntity = {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        mainEntity: post.faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      };
      graph.push(faqEntity);
    }
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
