import { MetadataRoute } from "next";
import { allArticlesId, allArticlesEn } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kahablock.com";
  const locales = ["id", "en"] as const;
  const coreRoutes = ["", "/about", "/products", "/projects", "/projects/production", "/blog", "/contact"] as const;
  const coreLastModified = new Date("2026-09-04T00:00:00.000Z");

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Core static pages
  locales.forEach((locale) => {
    coreRoutes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: coreLastModified,
        changeFrequency: "monthly",
        priority: route === "" ? 1.0 : route === "/products" || route === "/blog" ? 0.9 : 0.8,
        alternates: {
          languages: {
            "id-ID": `${baseUrl}/id${route}`,
            en: `${baseUrl}/en${route}`,
            "x-default": `${baseUrl}/id${route}`,
          },
        },
      });
    });
  });

  // Indonesian Blog Articles
  allArticlesId.forEach((article) => {
    sitemapEntries.push({
      url: `${baseUrl}/id/blog/${article.slug}`,
      lastModified: new Date(`${article.updatedAt}T00:00:00.000Z`),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          "id-ID": `${baseUrl}/id/blog/${article.slug}`,
          en: `${baseUrl}/en/blog/${article.slug}`,
          "x-default": `${baseUrl}/id/blog/${article.slug}`,
        },
      },
    });
  });

  // English Blog Articles
  allArticlesEn.forEach((article) => {
    sitemapEntries.push({
      url: `${baseUrl}/en/blog/${article.slug}`,
      lastModified: new Date(`${article.updatedAt}T00:00:00.000Z`),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          "id-ID": `${baseUrl}/id/blog/${article.slug}`,
          en: `${baseUrl}/en/blog/${article.slug}`,
          "x-default": `${baseUrl}/id/blog/${article.slug}`,
        },
      },
    });
  });

  return sitemapEntries;
}
