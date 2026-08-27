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
        ? "Hydraulic automatic concrete paving blocks in K-250, K-300, and K-400 grades."
        : "Paving block hidrolik otomatis mutu K-250, K-300, dan K-400.",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Product",
            "name": isEn ? "Truepave (Brick) Paving" : "Paving Truepave (Bata)",
            "description": isEn
              ? "Size 21x10.5 cm, height options 6, 8, 10 cm, coverage 45 pcs/m2. For roads, parking lots, and industrial areas."
              : "Ukuran 21x10.5 cm, pilihan tinggi 6, 8, 10 cm, daya tutup 45 pcs/m2. Untuk jalan raya, parkir, dan kawasan industri.",
          },
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Product",
            "name": isEn ? "Half Paving" : "Paving Half (Setengah)",
            "description": isEn
              ? "Size 10.5x10.5 cm, height options 6, 8 cm, coverage 90 pcs/m2. Pattern locker, color border, pedestrian."
              : "Ukuran 10.5x10.5 cm, pilihan tinggi 6, 8 cm, daya tutup 90 pcs/m2. Pengunci pola, pembatas warna, pedestrian.",
          },
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Product",
            "name": isEn ? "Hexagonal & Tile Paving" : "Paving Hexagonal & Ubin",
            "description": isEn
              ? "Height options 6, 8 cm. Geometric shape, sturdy and regular for commercial and public spaces."
              : "Pilihan tinggi 6, 8 cm. Bentuk geometris, kokoh, dan teratur untuk area komersial dan ruang publik.",
          },
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "Product",
            "name": isEn ? "Bishop Hat (Topi Uskup)" : "Topi Uskup",
            "description": isEn
              ? "Size 30x6x21 cm, height options 6, 8 cm, coverage 3.3 pcs/m. Edge locker to keep arrangements tight and stable."
              : "Ukuran 30x6x21 cm, pilihan tinggi 6, 8 cm, daya tutup 3.3 pcs/m. Pengunci tepi susunan agar rapat dan stabil.",
          },
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "Product",
            "name": "Kanstein Jepit",
            "description": isEn
              ? "Size 10x20x40 cm, high grade heavy duty, coverage 2.5 pcs/m2. Keeps road shoulders and sidewalks neat."
              : "Ukuran 10x20x40 cm, high grade heavy duty, daya tutup 2.5 pcs/m2. Menjaga tepi bahu jalan dan trotoar tetap rapi.",
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
