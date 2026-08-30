import React from "react";
import { Locale } from "@/lib/dictionary";

interface JsonLdProps {
  page?: "home" | "about" | "products" | "projects" | "contact";
  lang?: Locale;
}

export default function JsonLd({ page = "home", lang = "id" }: JsonLdProps) {
  const isEn = lang === "en";
  const baseUrl = "https://kahablock.com";

  // 1. LocalBusiness schema (Verified company data only)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "PT Kaha Sukses Mandiri (Kaha Block)",
    "url": baseUrl,
    "telephone": "+628119753030",
    "email": "sanliong68@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Raya Cibadak No. 7, Suradita",
      "addressLocality": "Cisauk",
      "addressRegion": "Tangerang",
      "postalCode": "15343",
      "addressCountry": "ID",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -6.358589787390475,
      "longitude": 106.64021975454531
    },
    "sameAs": [
      "https://instagram.com/kahablock",
    ],
  };

  // 2. WebSite schema
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "KAHA BLOCK",
    "url": baseUrl,
  };

  // 3. BreadcrumbList schema for internal pages
  let breadcrumbSchema = null;
  if (page !== "home") {
    const pageTitles: Record<string, { id: string; en: string }> = {
      about: { id: "Tentang Kami", en: "About Us" },
      products: { id: "Produk", en: "Products" },
      projects: { id: "Proyek", en: "Projects" },
      contact: { id: "Kontak", en: "Contact" },
    };

    const currentTitle = isEn ? pageTitles[page].en : pageTitles[page].id;

    breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": isEn ? "Home" : "Beranda",
          "item": `${baseUrl}/${lang}`,
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": currentTitle,
          "item": `${baseUrl}/${lang}/${page}`,
        },
      ],
    };
  }

  // 4. ItemList schema for products page
  let productsSchema = null;
  if (page === "products") {
    productsSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": isEn ? "Kaha Block Paving Block Products" : "Katalog Produk Paving Block Kaha Block",
      "description": isEn
        ? "Precision concrete paving blocks and installation services."
        : "Produk paving block beton presisi dan jasa pemasangan.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Product",
            "name": "Truepave",
          },
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Product",
            "name": "Half / Tahu",
          },
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Product",
            "name": "Topi Uskup",
          },
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "Product",
            "name": "Hexa 8 cm",
          },
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "Product",
            "name": "Ubin 8 cm",
          },
        },
        {
          "@type": "ListItem",
          "position": 6,
          "item": {
            "@type": "Product",
            "name": "Kanstein Jepit",
          },
        },
        {
          "@type": "ListItem",
          "position": 7,
          "item": {
            "@type": "Product",
            "name": "Kanstein S",
          },
        },
        {
          "@type": "ListItem",
          "position": 8,
          "item": {
            "@type": "Product",
            "name": "Kanstein B1",
          },
        },
        {
          "@type": "ListItem",
          "position": 9,
          "item": {
            "@type": "Product",
            "name": "Stoper",
          },
        },
      ],
    };
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
      {productsSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productsSchema) }}
        />
      )}
    </>
  );
}
