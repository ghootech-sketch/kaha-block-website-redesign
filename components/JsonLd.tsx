import React from "react";
import { Locale } from "@/lib/dictionary";
import { BlogPost } from "@/lib/blog-types";
import { ProductData } from "@/lib/products-data";
import { VideoItem } from "@/lib/video-data";
import { generateStructuredDataGraph, SchemaPageType } from "@/lib/schema";

interface JsonLdProps {
  page?: SchemaPageType;
  lang?: Locale;
  post?: BlogPost;
  product?: ProductData;
  videoItem?: VideoItem;
}

export default function JsonLd({ page = "home", lang = "id", post, product, videoItem }: JsonLdProps) {
  const structuredData = generateStructuredDataGraph({ page, lang, post, product, videoItem });

  return (
    <script
      id={`json-ld-${page}${product ? `-${product.slug}` : ""}${videoItem ? `-${videoItem.slug}` : ""}`}
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
