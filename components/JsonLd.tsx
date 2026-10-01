import React from "react";
import { Locale } from "@/lib/dictionary";
import { BlogPost } from "@/lib/blog-types";
import { ProductData } from "@/lib/products-data";
import { generateStructuredDataGraph, SchemaPageType } from "@/lib/schema";

interface JsonLdProps {
  page?: SchemaPageType;
  lang?: Locale;
  post?: BlogPost;
  product?: ProductData;
}

export default function JsonLd({ page = "home", lang = "id", post, product }: JsonLdProps) {
  const structuredData = generateStructuredDataGraph({ page, lang, post, product });

  return (
    <script
      id={`json-ld-${page}${product ? `-${product.slug}` : ""}`}
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
