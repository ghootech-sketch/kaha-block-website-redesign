import { BUSINESS_FACTS } from "./business-facts";
import { Locale } from "./dictionary";
import { BlogPost } from "./blog-types";

export type SchemaPageType =
  | "home"
  | "about"
  | "products"
  | "projects"
  | "projectsProduction"
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
  const pagePath =
    page === "home"
      ? ""
      : page === "projectsProduction"
      ? "/projects/production"
      : page === "blogPost" && post
      ? `/blog/${post.slug}`
      : `/${page}`;
  const canonicalUrl = `${baseUrl}/${lang}${pagePath}`;

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
      streetAddress: `${BUSINESS_FACTS.address.street}, ${BUSINESS_FACTS.address.locality}`,
      addressLocality: isEn ? BUSINESS_FACTS.address.cityEn : BUSINESS_FACTS.address.city,
      addressRegion: BUSINESS_FACTS.address.region,
      postalCode: BUSINESS_FACTS.address.postalCode,
      addressCountry: BUSINESS_FACTS.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS_FACTS.geo.latitude,
      longitude: BUSINESS_FACTS.geo.longitude,
    },
    hasMap: BUSINESS_FACTS.maps.googleMapsUrl,
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: isEn ? "Greater Jakarta (Jabodetabek)" : "Jabodetabek",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: BUSINESS_FACTS.contact.primaryPhoneE164,
        contactType: "sales and customer support",
        areaServed: isEn ? "Greater Jakarta (Jabodetabek)" : "Jabodetabek",
        availableLanguage: ["id", "en"],
      },
    ],
    sameAs: [BUSINESS_FACTS.social.instagram, BUSINESS_FACTS.social.facebook],
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
    } else if (page === "projectsProduction") {
      items.push({
        "@type": "ListItem",
        position: 2,
        name: isEn ? "Production Gallery" : "Galeri Produksi",
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
        : "Pabrik produsen paving block presisi mesin hidrolik otomatis mutu K-250, K-300, dan K-400 di Cisauk, Tangerang.";
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
    case "projectsProduction":
      pageType = "CollectionPage";
      pageName = isEn
        ? "Paving Block Production Gallery | Kaha Block"
        : "Galeri Produksi Paving Block | Kaha Block";
      pageDescription = isEn
        ? "Production documentation from Kaha Block's paving block facility in Cisauk, Tangerang using full automatic hydraulic machinery."
        : "Dokumentasi proses produksi paving block Kaha Block di Cisauk, Tangerang dengan mesin full otomatis hidrolik.";
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
    const productSections = [
      {
        name: "Truepave",
        url: `${canonicalUrl}#product-truepave`,
      },
      {
        name: "Half / Tahu",
        url: `${canonicalUrl}#product-half-tahu`,
      },
      {
        name: "Hexa 8 cm",
        url: `${canonicalUrl}#product-hexa`,
      },
      {
        name: "Ubin 8 cm",
        url: `${canonicalUrl}#product-ubin`,
      },
      {
        name: "Topi Uskup",
        url: `${canonicalUrl}#product-topi-uskup`,
      },
      {
        name: "Kanstein Jepit",
        url: `${canonicalUrl}#product-kanstin-jepit`,
      },
      {
        name: "Kanstein S",
        url: `${canonicalUrl}#product-kanstin-s`,
      },
      {
        name: "Kanstein B1",
        url: `${canonicalUrl}#product-kanstin-b1`,
      },
      {
        name: "Stoper",
        url: `${canonicalUrl}#product-stoper`,
      },
    ];

    graph.push({
      "@type": "ItemList",
      "@id": `${canonicalUrl}#products`,
      name: isEn ? "Kaha Block Product Catalogue" : "Katalog Produk Kaha Block",
      numberOfItems: productSections.length,
      itemListElement: productSections.map((section, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: section.name,
        url: section.url,
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
