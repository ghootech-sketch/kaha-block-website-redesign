import React from "react";
import { Locale } from "@/lib/dictionary";
import { BlogPost } from "@/lib/blog-types";
import { generateStructuredDataGraph, SchemaPageType } from "@/lib/schema";

interface JsonLdProps {
  page?: SchemaPageType;
  lang?: Locale;
  post?: BlogPost;
}

export default function JsonLd({ page = "home", lang = "id", post }: JsonLdProps) {
  const structuredData = generateStructuredDataGraph({ page, lang, post });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
