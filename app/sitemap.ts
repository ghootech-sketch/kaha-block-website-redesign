import { MetadataRoute } from "next";
import { allArticlesId, allArticlesEn } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kahablock.com";
  const locales = ["id", "en"] as const;
  const coreRoutes = ["", "/about", "/products", "/projects", "/blog", "/contact"] as const;
  const lastModified = new Date("2025-01-20T00:00:00.000Z");

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Core static pages
  locales.forEach((locale) => {
    coreRoutes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified,
        changeFrequency: "monthly",
        priority: route === "" ? 1.0 : route === "/products" || route === "/blog" ? 0.9 : 0.8,
      });
    });
  });

  // Indonesian Blog Articles
  allArticlesId.forEach((article) => {
    sitemapEntries.push({
      url: `${baseUrl}/id/blog/${article.slug}`,
      lastModified: new Date(article.updatedAt),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  });

  // English Blog Articles
  allArticlesEn.forEach((article) => {
    sitemapEntries.push({
      url: `${baseUrl}/en/blog/${article.slug}`,
      lastModified: new Date(article.updatedAt),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  });

  return sitemapEntries;
}
