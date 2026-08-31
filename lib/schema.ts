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
      addressRegion: BUSINESS_FACTS.address.city,
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
        : "Pabrik produsen paving block presisi mesin hidrolik otomatis mutu K-250, K-300, hingga K-400 di Cisauk, Tangerang.";
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
        : "Kumpulan artikel teknis, panduan ketebalan, mutu beton K-250, K-300, dan K-400, serta tips pemasangan paving block presisi.";
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
        name: isEn ? "Truepave Paving Block (Rectangle)" : "Paving Block Truepave (Bata)",
        description: isEn
          ? "Standard rectangular paving block (10.5 x 21 cm) available in 6 cm, 8 cm, and 10 cm thickness, strength K-300 to K-400."
          : "Paving block model bata persegi panjang (10,5 x 21 cm) ketebalan 6 cm, 8 cm, dan 10 cm mutu beton K-300 hingga K-400.",
        brand: { "@id": `${baseUrl}/#organization` },
        category: "Concrete Paving Blocks",
        image: `${baseUrl}/images/products/kaha-block-truepave.webp`,
        url: `${canonicalUrl}#product-truepave`,
      },
      {
        "@type": "Product",
        name: isEn ? "Hexagonal Paving Block" : "Paving Block Hexagonal (Segi Enam)",
        description: isEn
          ? "Interlocking hexagonal paving block (20 x 20 cm) in 6 cm and 8 cm thickness, strength K-300 to K-400."
          : "Paving block segi enam (20 x 20 cm) dengan enam sisi pengunci tebal 6 cm dan 8 cm mutu K-300 hingga K-400.",
        brand: { "@id": `${baseUrl}/#organization` },
        category: "Concrete Paving Blocks",
        image: `${baseUrl}/images/products/kaha-block-hexa-8cm.webp`,
        url: `${canonicalUrl}#product-hexa`,
      },
      {
        "@type": "Product",
        name: isEn ? "Half-Truepave Paving Block" : "Paving Block Half / Setengah Bata",
        description: isEn
          ? "Half-block complement (10.5 x 10.5 cm) for clean pattern finishing without on-site cutting."
          : "Paving setengah bata (10,5 x 10,5 cm) pelengkap pola susun Truepave untuk kerapian tepian.",
        brand: { "@id": `${baseUrl}/#organization` },
        category: "Concrete Paving Blocks",
        image: `${baseUrl}/images/products/kaha-block-half-tahu.webp`,
        url: `${canonicalUrl}#product-half-tahu`,
      },
      {
        "@type": "Product",
        name: isEn ? "Square Paver (Ubin)" : "Paving Block Ubin (Square)",
        description: isEn
          ? "Square paving block (20 x 20 cm) for modern residential pathways and plaza pedestrian areas."
          : "Paving block model kotak ubin (20 x 20 cm) untuk pedestrian, plaza, dan teras hunian modern.",
        brand: { "@id": `${baseUrl}/#organization` },
        category: "Concrete Paving Blocks",
        image: `${baseUrl}/images/products/kaha-block-ubin-8cm.webp`,
        url: `${canonicalUrl}#product-ubin`,
      },
      {
        "@type": "Product",
        name: isEn ? "Bishop Hat (Topi Uskup)" : "Paving Topi Uskup",
        description: isEn
          ? "Special angular edge-locking block designed for herringbone layout borders."
          : "Paving pengunci tepi sudut pola anyaman tulang ikan (herringbone) Truepave.",
        brand: { "@id": `${baseUrl}/#organization` },
        category: "Concrete Paving Blocks",
        image: `${baseUrl}/images/products/kaha-block-topi-uskup.webp`,
        url: `${canonicalUrl}#product-topi-uskup`,
      },
      {
        "@type": "Product",
        name: isEn ? "Concrete Curb Stone (Kanstein)" : "Kanstein Beton (Curb Stone)",
        description: isEn
          ? "Concrete border curb stones (Jepit, B1, S-type) for lateral pavement confinement and road borders."
          : "Kanstein pembatas jalan dan trotoar (Kanstein Jepit, B1, Tipe S) pengunci perkerasan.",
        brand: { "@id": `${baseUrl}/#organization` },
        category: "Concrete Curb Stones",
        image: `${baseUrl}/images/products/kaha-block-kanstein-jepit.webp`,
        url: `${canonicalUrl}#product-kanstin-jepit`,
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
