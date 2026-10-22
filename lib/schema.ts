import { BUSINESS_FACTS } from "./business-facts";
import { dictionaries, Locale } from "./dictionary";
import { BlogPost } from "./blog-types";
import { ProductData, getAllProducts } from "./products-data";
import { VideoItem } from "./video-data";
import { AREA_HUB_DATA, INSTALLATION_DATA, REGIONAL_PAGES_DATA } from "./local-service-data";

export type SchemaPageType =
  | "home"
  | "about"
  | "products"
  | "productDetail"
  | "projects"
  | "projectsProduction"
  | "contact"
  | "blog"
  | "blogPost"
  | "jasaPemasangan"
  | "areaLayanan"
  | "areaJakarta"
  | "areaTangerang"
  | "areaBekasi"
  | "areaDepok"
  | "areaBogor"
  | "videoWatch";

interface GenerateGraphParams {
  page: SchemaPageType;
  lang: Locale;
  post?: BlogPost;
  product?: ProductData;
  videoItem?: VideoItem;
}

export function generateStructuredDataGraph({
  page,
  lang,
  post,
  product,
  videoItem,
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
      : page === "productDetail" && product
      ? `/products/${product.slug}`
      : page === "videoWatch" && videoItem
      ? `/videos/${videoItem.slug}`
      : page === "jasaPemasangan"
      ? "/jasa-pemasangan-paving-block"
      : page === "areaLayanan"
      ? "/area-layanan"
      : page === "areaJakarta"
      ? "/area-layanan/jakarta"
      : page === "areaTangerang"
      ? "/area-layanan/tangerang"
      : page === "areaBekasi"
      ? "/area-layanan/bekasi"
      : page === "areaDepok"
      ? "/area-layanan/depok"
      : page === "areaBogor"
      ? "/area-layanan/bogor"
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
      { "@type": "AdministrativeArea", name: isEn ? "Greater Jakarta (Jabodetabek)" : "Jabodetabek" },
      { "@type": "AdministrativeArea", name: "DKI Jakarta" },
      { "@type": "AdministrativeArea", name: isEn ? "South Jakarta" : "Jakarta Selatan" },
      { "@type": "AdministrativeArea", name: isEn ? "East Jakarta" : "Jakarta Timur" },
      { "@type": "AdministrativeArea", name: isEn ? "West Jakarta" : "Jakarta Barat" },
      { "@type": "AdministrativeArea", name: isEn ? "North Jakarta" : "Jakarta Utara" },
      { "@type": "AdministrativeArea", name: isEn ? "Central Jakarta" : "Jakarta Pusat" },
      { "@type": "AdministrativeArea", name: isEn ? "Tangerang Regency" : "Kabupaten Tangerang" },
      { "@type": "AdministrativeArea", name: isEn ? "Tangerang City" : "Kota Tangerang" },
      { "@type": "AdministrativeArea", name: isEn ? "South Tangerang" : "Tangerang Selatan" },
      { "@type": "AdministrativeArea", name: isEn ? "Bekasi City" : "Kota Bekasi" },
      { "@type": "AdministrativeArea", name: isEn ? "Bekasi Regency" : "Kabupaten Bekasi" },
      { "@type": "AdministrativeArea", name: isEn ? "Depok City" : "Kota Depok" },
      { "@type": "AdministrativeArea", name: isEn ? "Bogor City" : "Kota Bogor" },
      { "@type": "AdministrativeArea", name: isEn ? "Bogor Regency" : "Kabupaten Bogor" },
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
      ? "Precision hydraulic concrete paving block manufacturer and material supplier in Cisauk, Tangerang Regency, serving Greater Jakarta (Jabodetabek)."
      : "Pabrik produsen dan supplier paving block berkualitas presisi dengan mesin full otomatis hidrolik di Cisauk, Kabupaten Tangerang, melayani Jabodetabek.",
    publisher: { "@id": `${baseUrl}/#organization` },
    inLanguage: ["id", "en"],
  };

  // 3. BreadcrumbList Entity (for non-home pages)
  let breadcrumbEntity: Record<string, unknown> | null = null;
  if (page !== "home") {
    const homeName = isEn ? "Home" : "Beranda";
    const items: Array<{ "@type": string; position: number; name: string; item: string }> = [
      { "@type": "ListItem", position: 1, name: homeName, item: `${baseUrl}/${lang}` },
    ];

    if (page === "about") {
      items.push({ "@type": "ListItem", position: 2, name: isEn ? "About Us" : "Tentang Kami", item: canonicalUrl });
    } else if (page === "products") {
      items.push({ "@type": "ListItem", position: 2, name: isEn ? "Products" : "Produk", item: canonicalUrl });
    } else if (page === "productDetail" && product) {
      items.push({ "@type": "ListItem", position: 2, name: isEn ? "Products" : "Produk", item: `${baseUrl}/${lang}/products` });
      items.push({ "@type": "ListItem", position: 3, name: product.name, item: canonicalUrl });
    } else if (page === "projects") {
      items.push({ "@type": "ListItem", position: 2, name: isEn ? "Project Gallery" : "Galeri Proyek", item: canonicalUrl });
    } else if (page === "projectsProduction") {
      items.push({ "@type": "ListItem", position: 2, name: isEn ? "Production Gallery" : "Galeri Produksi", item: canonicalUrl });
    } else if (page === "videoWatch" && videoItem) {
      items.push({ "@type": "ListItem", position: 2, name: isEn ? "Production Gallery" : "Galeri Produksi", item: `${baseUrl}/${lang}/projects/production` });
      items.push({ "@type": "ListItem", position: 3, name: isEn ? videoItem.title.en : videoItem.title.id, item: canonicalUrl });
    } else if (page === "contact") {
      items.push({ "@type": "ListItem", position: 2, name: isEn ? "Contact & Consultation" : "Kontak & Konsultasi", item: canonicalUrl });
    } else if (page === "blog") {
      items.push({ "@type": "ListItem", position: 2, name: isEn ? "Pricing Info & Articles" : "Info Harga & Artikel", item: canonicalUrl });
    } else if (page === "blogPost" && post) {
      items.push({ "@type": "ListItem", position: 2, name: isEn ? "Pricing Info & Articles" : "Info Harga & Artikel", item: `${baseUrl}/${lang}/blog` });
      items.push({ "@type": "ListItem", position: 3, name: post.title, item: canonicalUrl });
    } else if (page === "jasaPemasangan") {
      items.push({ "@type": "ListItem", position: 2, name: isEn ? "Installation Services" : "Jasa Pemasangan", item: canonicalUrl });
    } else if (page === "areaLayanan") {
      items.push({ "@type": "ListItem", position: 2, name: isEn ? "Service Areas" : "Area Layanan", item: canonicalUrl });
    } else if (
      page === "areaJakarta" || page === "areaTangerang" || page === "areaBekasi" || page === "areaDepok" || page === "areaBogor"
    ) {
      items.push({ "@type": "ListItem", position: 2, name: isEn ? "Service Areas" : "Area Layanan", item: `${baseUrl}/${lang}/area-layanan` });
      const regionName = page === "areaJakarta" ? "DKI Jakarta" : page === "areaTangerang" ? "Tangerang" : page === "areaBekasi" ? "Bekasi" : page === "areaDepok" ? "Depok" : "Bogor";
      items.push({ "@type": "ListItem", position: 3, name: regionName, item: canonicalUrl });
    }

    breadcrumbEntity = { "@type": "BreadcrumbList", "@id": `${canonicalUrl}#breadcrumb`, itemListElement: items };
  }

  // 4. WebPage / Specific Page Entity
  let pageType = "WebPage";
  let pageName = "Kaha Block";
  let pageDescription = "";

  switch (page) {
    case "home":
      pageType = "WebPage";
      pageName = isEn ? "Kaha Block | Precision Paving Block Manufacturer" : "Kaha Block | Pabrik Paving Block Berkualitas Mesin Hidrolik";
      pageDescription = isEn
        ? "Direct manufacturer and supplier of hydraulic concrete paving blocks, Truepave, Hexagonal, and curb stones in Cisauk, Tangerang Regency, serving Greater Jakarta (Jabodetabek)."
        : "Pabrik produsen dan supplier conblock serta paving block presisi mesin hidrolik otomatis mutu K-250, K-300, dan K-400 di Cisauk, Kabupaten Tangerang, melayani Jabodetabek.";
      break;
    case "about":
      pageType = "AboutPage";
      pageName = isEn ? "About PT Kaha Sukses Mandiri (Kaha Block)" : "Tentang PT Kaha Sukses Mandiri (Kaha Block)";
      pageDescription = isEn
        ? "Learn about Kaha Block's 9,080 m² manufacturing facility in Cisauk, Tangerang Regency, hydraulic automated production, and quality commitment since 2015."
        : "Profil PT Kaha Sukses Mandiri (Kaha Block), fasilitas pabrik 9.080 m² di Cisauk, Kabupaten Tangerang, mesin hidrolik otomatis, dan komitmen mutu sejak 2015.";
      break;
    case "products":
      pageType = "CollectionPage";
      pageName = isEn ? "Paving Block & Curb Stone Products | Kaha Block" : "Produk Paving Block & Kanstein Beton | Kaha Block";
      pageDescription = isEn
        ? "Explore Kaha Block concrete paving product specifications: Truepave, Half, Hexagonal, Bishop Hat, and Curb Stones with delivery across Greater Jakarta."
        : "Jual paving block langsung produsen: spesifikasi Truepave bata, paving tahu, hexagon, ubin, topi uskup, dan kanstein beton dengan pengiriman gratis Jabodetabek.";
      break;
    case "productDetail":
      pageType = "ItemPage";
      pageName = product ? product.metaTitle : isEn ? "Product | Kaha Block" : "Produk | Kaha Block";
      pageDescription = product ? product.metaDescription : "";
      break;
    case "projects":
      pageType = "CollectionPage";
      pageName = isEn ? "Project Portfolio & Installation Gallery | Kaha Block" : "Portofolio & Galeri Pemasangan Paving Block | Kaha Block";
      pageDescription = isEn
        ? "Documentation of paving block applications and installation projects across Greater Jakarta (Jabodetabek) by Kaha Block."
        : "Dokumentasi aplikasi pengadaan material dan jasa pemasangan paving block Kaha Block untuk berbagai proyek di wilayah Jabodetabek.";
      break;
    case "projectsProduction":
      pageType = "CollectionPage";
      pageName = isEn ? "Paving Block Production Gallery | Kaha Block" : "Galeri Produksi Paving Block | Kaha Block";
      pageDescription = isEn
        ? "Production documentation from Kaha Block's 9,080 m² paving plant in Cisauk, Tangerang Regency with automated hydraulic machinery."
        : "Dokumentasi fasilitas pabrik paving block Cisauk seluas 9.080 m² PT Kaha Sukses Mandiri di Tangerang dengan mesin paving block otomatis hidrolik.";
      break;
    case "contact":
      pageType = "ContactPage";
      pageName = isEn ? "Contact & Consultation | Kaha Block" : "Kontak & Konsultasi Teknis | Kaha Block";
      pageDescription = isEn
        ? "Contact Kaha Block for price estimates, product consultations, and installation services in Cisauk, Tangerang Regency, serving Greater Jakarta."
        : "Hubungi Kaha Block via WhatsApp atau telepon untuk estimasi kebutuhan material, konsultasi teknis, dan jasa pemasangan di Cisauk, Kabupaten Tangerang.";
      break;
    case "blog":
      pageType = "CollectionPage";
      pageName = isEn ? "Paving Block Pricing Info & Articles | Kaha Block" : "Info Harga & Artikel Paving Block | Kaha Block";
      pageDescription = isEn
        ? "Explore paving block pricing information, product selection guides, concrete grades, installation guidance, and project references from Kaha Block."
        : "Temukan informasi harga paving block, panduan memilih produk, mutu beton, pemasangan, serta referensi kebutuhan proyek dari Kaha Block.";
      break;
    case "blogPost":
      if (post) {
        pageType = "WebPage";
        pageName = post.title;
        pageDescription = post.seoDescription;
      }
      break;
    case "jasaPemasangan":
      pageType = "ItemPage";
      pageName = isEn ? "Paving Block Installation Services Jabodetabek | Kaha Block" : "Jasa Pemasangan Paving Block Jabodetabek | Kaha Block";
      pageDescription = isEn
        ? "Material supply and experienced installation services across Greater Jakarta (Jabodetabek) by PT Kaha Sukses Mandiri."
        : "Pengadaan material dan jasa pemasangan paving block presisi di seluruh wilayah Jabodetabek oleh tim berpengalaman PT Kaha Sukses Mandiri.";
      break;
    case "areaLayanan":
      pageType = "CollectionPage";
      pageName = isEn ? "Paving Block Service Areas Greater Jakarta | Kaha Block" : "Area Layanan Paving Block Jabodetabek | Kaha Block";
      pageDescription = isEn
        ? "Service area coverage across Greater Jakarta including Jakarta, Tangerang, Bekasi, Depok, and Bogor."
        : "Cakupan wilayah pengadaan material dan jasa pemasangan paving block Kaha Block di Jabodetabek.";
      break;
    case "areaJakarta":
      pageType = "WebPage";
      pageName = isEn ? "Paving Block Supplier for Jakarta & Installation | Kaha Block" : "Produsen Paving Block untuk Jakarta & Jasa Pemasangan | Kaha Block";
      pageDescription = isEn
        ? "Direct factory paving block supply and installation across South, East, West, North, and Central Jakarta."
        : "Pengadaan material paving block presisi dan jasa pemasangan untuk seluruh wilayah DKI Jakarta.";
      break;
    case "areaTangerang":
      pageType = "WebPage";
      pageName = isEn ? "Paving Block Factory Cisauk Tangerang & Installation | Kaha Block" : "Pabrik Paving Block Cisauk Tangerang & Jasa Pemasangan | Kaha Block";
      pageDescription = isEn
        ? "Primary manufacturing facility in Cisauk, Tangerang Regency, supplying pavers and installation teams across Tangerang Region."
        : "Fasilitas pabrik utama Kaha Block di Cisauk, Kabupaten Tangerang, melayani pengadaan dan pemasangan di seluruh Tangerang Raya.";
      break;
    case "areaBekasi":
      pageType = "WebPage";
      pageName = isEn ? "Paving Block Supplier for Bekasi & Installation | Kaha Block" : "Produsen Paving Block untuk Bekasi & Jasa Pemasangan | Kaha Block";
      pageDescription = isEn ? "Precision paving block supply and installation for Bekasi City and Bekasi Regency." : "Pengadaan material paving block presisi dan jasa pemasangan untuk Kota Bekasi dan Kabupaten Bekasi.";
      break;
    case "areaDepok":
      pageType = "WebPage";
      pageName = isEn ? "Paving Block Supplier for Depok & Installation | Kaha Block" : "Produsen Paving Block untuk Depok & Jasa Pemasangan | Kaha Block";
      pageDescription = isEn ? "Paving block material supply and installation services for Depok City." : "Pengadaan material paving block presisi dan jasa pemasangan untuk wilayah Kota Depok.";
      break;
    case "areaBogor":
      pageType = "WebPage";
      pageName = isEn ? "Paving Block Supplier for Bogor & Installation | Kaha Block" : "Produsen Paving Block untuk Bogor & Jasa Pemasangan | Kaha Block";
      pageDescription = isEn ? "Precision paving block supply and installation services for Bogor City and Bogor Regency." : "Pengadaan material paving block presisi dan jasa pemasangan untuk Kota dan Kabupaten Bogor.";
      break;
    case "videoWatch":
      pageType = "ItemPage";
      pageName = videoItem ? `${isEn ? videoItem.title.en : videoItem.title.id} | Kaha Block` : "Video | Kaha Block";
      pageDescription = videoItem ? (isEn ? videoItem.description.en : videoItem.description.id) : "";
      break;
  }

  const webPageEntity: Record<string, unknown> = {
    "@type": pageType,
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: pageName,
    description: pageDescription,
    isPartOf: { "@id": `${baseUrl}/#website` },
    about: { "@id": `${baseUrl}/#organization` },
    inLanguage: lang,
  };

  if (breadcrumbEntity) webPageEntity.breadcrumb = { "@id": `${canonicalUrl}#breadcrumb` };

  if (page === "products") {
    webPageEntity.mainEntity = { "@id": `${canonicalUrl}#products` };
  } else if (page === "productDetail" && product) {
    webPageEntity.mainEntity = { "@id": `${canonicalUrl}#product` };
  } else if (
    page === "jasaPemasangan" || page === "areaLayanan" || page === "areaJakarta" || page === "areaTangerang" || page === "areaBekasi" || page === "areaDepok" || page === "areaBogor"
  ) {
    webPageEntity.mainEntity = { "@id": `${canonicalUrl}#service` };
  } else if (page === "videoWatch") {
    webPageEntity.mainEntity = { "@id": `${canonicalUrl}#video` };
  }

  if (page === "home") {
    webPageEntity.hasPart = [
      { "@id": `${canonicalUrl}#featured-products` },
      { "@id": `${canonicalUrl}#installation-service` },
      { "@id": `${canonicalUrl}#faq` },
    ];
  } else if (
    page === "jasaPemasangan" || page === "areaLayanan" || page === "areaJakarta" || page === "areaTangerang" || page === "areaBekasi" || page === "areaDepok" || page === "areaBogor"
  ) {
    webPageEntity.hasPart = { "@id": `${canonicalUrl}#faq` };
  }

  if (page === "home" || (page === "productDetail" && product) || page === "projects" || page === "projectsProduction" || (page === "videoWatch" && videoItem) || (page === "blogPost" && post)) {
    webPageEntity.primaryImageOfPage = { "@id": `${canonicalUrl}#primaryimage` };
  }

  const graph: Array<Record<string, unknown>> = [organizationEntity, websiteEntity, webPageEntity];
  if (breadcrumbEntity) graph.push(breadcrumbEntity);

  if (page === "home") {
    graph.push({ "@type": "ImageObject", "@id": `${canonicalUrl}#primaryimage`, contentUrl: `${baseUrl}/images/hero/hero-main.webp`, url: `${baseUrl}/images/hero/hero-main.webp`, caption: isEn ? "Kaha Block Paving Plant & Products" : "Pabrik & Produk Paving Block Kaha Block" });
  } else if (page === "productDetail" && product) {
    graph.push({ "@type": "ImageObject", "@id": `${canonicalUrl}#primaryimage`, contentUrl: `${baseUrl}${product.image}`, url: `${baseUrl}${product.image}`, caption: product.imageAlt });
  } else if (page === "projects") {
    graph.push({ "@type": "ImageObject", "@id": `${canonicalUrl}#primaryimage`, contentUrl: `${baseUrl}/images/projects/kaha-block-dokumentasi-03.webp`, url: `${baseUrl}/images/projects/kaha-block-dokumentasi-03.webp`, caption: isEn ? "Paving Block Completed Field Results" : "Hasil Jadi Pemasangan Paving Block" });
  } else if (page === "projectsProduction") {
    graph.push({ "@type": "ImageObject", "@id": `${canonicalUrl}#primaryimage`, contentUrl: `${baseUrl}/images/production/kaha-block-produksi-02.webp`, url: `${baseUrl}/images/production/kaha-block-produksi-02.webp`, caption: isEn ? "Hydraulic Process" : "Proses Hidrolik" });
  } else if (page === "videoWatch" && videoItem) {
    graph.push({ "@type": "ImageObject", "@id": `${canonicalUrl}#primaryimage`, contentUrl: `${baseUrl}${videoItem.posterSrc}`, url: `${baseUrl}${videoItem.posterSrc}`, caption: isEn ? videoItem.title.en : videoItem.title.id });
  } else if (page === "blogPost" && post) {
    graph.push({ "@type": "ImageObject", "@id": `${canonicalUrl}#primaryimage`, contentUrl: `${baseUrl}${post.image}`, url: `${baseUrl}${post.image}`, caption: post.imageAlt });
  }

  // Homepage semantic sections: visible featured products, installation service, and FAQ.
  if (page === "home") {
    const homeDictionary = dictionaries[lang].home;
    const featuredSlugs = [
      "truepave",
      "half-tahu",
      "paving-hexagonal",
      "topi-uskup",
      "kanstein-jepit",
    ];
    const featuredProducts = getAllProducts(lang).filter((product) =>
      featuredSlugs.includes(product.slug)
    );

    graph.push({
      "@type": "ItemList",
      "@id": `${canonicalUrl}#featured-products`,
      name: homeDictionary.featuredProducts.title,
      numberOfItems: featuredProducts.length,
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      itemListElement: featuredProducts.map((product, index) => {
        const productUrl = `${baseUrl}/${lang}/products/${product.slug}`;
        return {
          "@type": "ListItem",
          position: index + 1,
          name: product.name,
          url: productUrl,
          item: productUrl,
        };
      }),
    });

    graph.push({
      "@type": "Service",
      "@id": `${canonicalUrl}#installation-service`,
      name: homeDictionary.installation.title,
      serviceType: isEn
        ? "Paving block material supply and installation"
        : "Pengadaan material dan jasa pemasangan paving block",
      description: homeDictionary.installation.subtitle,
      url: `${baseUrl}/${lang}/jasa-pemasangan-paving-block`,
      provider: {
        "@id": `${baseUrl}/#organization`,
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: isEn ? "Greater Jakarta (Jabodetabek)" : "Jabodetabek",
      },
    });

    if (homeDictionary.faq.items.length > 0) {
      graph.push({
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        url: canonicalUrl,
        isPartOf: {
          "@id": `${canonicalUrl}#webpage`,
        },
        mainEntity: homeDictionary.faq.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      });
    }
  }

  if (page === "products") {
    const products = getAllProducts(lang);
    graph.push({
      "@type": "ItemList",
      "@id": `${canonicalUrl}#products`,
      name: isEn ? "Kaha Block Product Catalogue" : "Katalog Produk Kaha Block",
      numberOfItems: products.length,
      itemListElement: products.map((prod, idx) => {
        const productUrl = `${baseUrl}/${lang}/products/${prod.slug}`;
        return { "@type": "ListItem", position: idx + 1, name: prod.name, url: productUrl, item: productUrl };
      }),
    });
  }

  if (page === "productDetail" && product) {
    graph.push({
      "@type": "Product",
      "@id": `${canonicalUrl}#product`,
      url: canonicalUrl,
      name: product.name,
      ...(product.alternateName ? { alternateName: product.alternateName } : {}),
      description: product.intro,
      image: [`${baseUrl}${product.image}`],
      category: product.badge,
      brand: { "@type": "Brand", name: BUSINESS_FACTS.brandName },
      manufacturer: { "@id": `${baseUrl}/#organization` },
      mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
      additionalProperty: product.specs.map((spec) => ({ "@type": "PropertyValue", name: spec.label, value: spec.value })),
    });
  }

  if (page === "blogPost" && post) {
    const articleEntity: Record<string, unknown> = {
      "@type": "BlogPosting",
      "@id": `${canonicalUrl}#article`,
      mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
      headline: post.title,
      description: post.seoDescription,
      url: canonicalUrl,
      datePublished: `${post.publishedAt}T00:00:00+07:00`,
      dateModified: `${post.updatedAt}T00:00:00+07:00`,
      author: { "@id": `${baseUrl}/#organization` },
      publisher: { "@id": `${baseUrl}/#organization` },
      inLanguage: lang,
      articleSection: post.category,
      image: `${baseUrl}${post.image}`,
    };
    graph.push(articleEntity);
    if (post.faq && post.faq.items && post.faq.items.length > 0) {
      graph.push({
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        mainEntity: post.faq.items.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
      });
    }
  }

  if (page === "jasaPemasangan") {
    const installation = INSTALLATION_DATA[lang];
    graph.push({
      "@type": "Service",
      "@id": `${canonicalUrl}#service`,
      name: isEn ? "Paving Block Installation Service" : "Jasa Pemasangan Paving Block",
      serviceType: isEn ? "Paving block material supply and installation" : "Pengadaan material dan jasa pemasangan paving block",
      description: installation.heroDesc,
      url: canonicalUrl,
      provider: { "@id": `${baseUrl}/#organization` },
      areaServed: { "@type": "AdministrativeArea", name: isEn ? "Greater Jakarta (Jabodetabek)" : "Jabodetabek" },
      mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
    });
  }

  const regionalSlug = page === "areaJakarta" ? "jakarta" : page === "areaTangerang" ? "tangerang" : page === "areaBekasi" ? "bekasi" : page === "areaDepok" ? "depok" : page === "areaBogor" ? "bogor" : null;

  if (page === "areaLayanan") {
    const areaHub = AREA_HUB_DATA[lang];
    graph.push({
      "@type": "Service",
      "@id": `${canonicalUrl}#service`,
      name: areaHub.h1,
      serviceType: isEn ? "Paving block material supply and installation" : "Pengadaan material dan jasa pemasangan paving block",
      description: areaHub.heroDesc,
      url: canonicalUrl,
      provider: { "@id": `${baseUrl}/#organization` },
      areaServed: { "@type": "AdministrativeArea", name: isEn ? "Greater Jakarta (Jabodetabek)" : "Jabodetabek" },
      mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
    });
  } else if (regionalSlug) {
    const regional = REGIONAL_PAGES_DATA[regionalSlug][lang];
    const regionName = regionalSlug === "jakarta" ? "DKI Jakarta" : regionalSlug === "tangerang" ? (isEn ? "Tangerang Region" : "Tangerang Raya") : regionalSlug === "bekasi" ? "Bekasi" : regionalSlug === "depok" ? "Depok" : "Bogor";
    graph.push({
      "@type": "Service",
      "@id": `${canonicalUrl}#service`,
      name: regional.h1,
      serviceType: isEn ? "Paving block material supply and installation" : "Pengadaan material dan jasa pemasangan paving block",
      description: regional.heroDesc,
      url: canonicalUrl,
      provider: { "@id": `${baseUrl}/#organization` },
      areaServed: { "@type": "AdministrativeArea", name: regionName },
      mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
    });
  }

  const serviceFaqs = page === "jasaPemasangan" ? INSTALLATION_DATA[lang].faqs : page === "areaLayanan" ? AREA_HUB_DATA[lang].faqs : regionalSlug ? REGIONAL_PAGES_DATA[regionalSlug][lang].faqs : [];

  if (serviceFaqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${canonicalUrl}#faq`,
      url: canonicalUrl,
      isPartOf: { "@id": `${canonicalUrl}#webpage` },
      mainEntity: serviceFaqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
    });
  }

  if (page === "videoWatch" && videoItem) {
    const localizedTitle = isEn ? videoItem.title.en : videoItem.title.id;
    const localizedDesc = isEn ? videoItem.description.en : videoItem.description.id;
    graph.push({
      "@type": "VideoObject",
      "@id": `${canonicalUrl}#video`,
      name: localizedTitle,
      description: localizedDesc,
      thumbnailUrl: [`${baseUrl}${videoItem.posterSrc}`],
      uploadDate: videoItem.publishedAt,
      contentUrl: `${baseUrl}${videoItem.videoSrc}`,
      duration: videoItem.isoDuration,
      creator: { "@id": `${baseUrl}/#organization` },
      mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

