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

type StructuredDataNode = Record<string, unknown>;

export default function JsonLd({
  page = "home",
  lang = "id",
  post,
  product,
  videoItem,
}: JsonLdProps) {
  const structuredData = generateStructuredDataGraph({
    page,
    lang,
    post,
    product,
    videoItem,
  }) as StructuredDataNode;

  const context =
    typeof structuredData["@context"] === "string"
      ? structuredData["@context"]
      : "https://schema.org";

  const graph = Array.isArray(structuredData["@graph"])
    ? (structuredData["@graph"] as StructuredDataNode[])
    : null;

  // Render each graph node as its own top-level JSON-LD block.
  // @id references stay unchanged, so entity relationships remain connected.
  const jsonLdBlocks: StructuredDataNode[] = graph
    ? graph.map((node) => ({
        "@context": context,
        ...node,
      }))
    : [structuredData];

  const idSuffix = `${product ? `-${product.slug}` : ""}${
    videoItem ? `-${videoItem.slug}` : ""
  }`;
  const baseId = `json-ld-${page}${idSuffix}`;

  return (
    <>
      {jsonLdBlocks.map((block, index) => {
        const serialized = JSON.stringify(block).replace(/</g, "\\u003c");

        return (
          <script
            key={`${baseId}-${index + 1}`}
            id={`${baseId}-${index + 1}`}
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{ __html: serialized }}
          />
        );
      })}
    </>
  );
}
