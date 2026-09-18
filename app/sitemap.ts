import { MetadataRoute } from "next";
import { allArticlesId, allArticlesEn } from "@/lib/blog-data";
import { SITE_URL } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["id", "en"] as const;
  const coreRoutes = ["", "/about", "/products", "/projects", "/projects/production", "/blog", "/contact"] as const;

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Core static pages
  locales.forEach((locale) => {
    coreRoutes.forEach((route) => {
      sitemapEntries.push({
        url: `${SITE_URL}/${locale}${route}`,
        changeFrequency: "monthly",
        priority: route === "" ? 1.0 : route === "/products" || route === "/blog" ? 0.9 : 0.8,
        alternates: {
          languages: {
            "id-ID": `${SITE_URL}/id${route}`,
            en: `${SITE_URL}/en${route}`,
            "x-default": `${SITE_URL}/id${route}`,
          },
        },
      });
    });
  });

  // Indonesian Blog Articles
  allArticlesId.forEach((article) => {
    sitemapEntries.push({
      url: `${SITE_URL}/id/blog/${article.slug}`,
      lastModified: new Date(`${article.updatedAt}T00:00:00.000Z`),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          "id-ID": `${SITE_URL}/id/blog/${article.slug}`,
          en: `${SITE_URL}/en/blog/${article.slug}`,
          "x-default": `${SITE_URL}/id/blog/${article.slug}`,
        },
      },
    });
  });

  // English Blog Articles
  allArticlesEn.forEach((article) => {
    sitemapEntries.push({
      url: `${SITE_URL}/en/blog/${article.slug}`,
      lastModified: new Date(`${article.updatedAt}T00:00:00.000Z`),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          "id-ID": `${SITE_URL}/id/blog/${article.slug}`,
          en: `${SITE_URL}/en/blog/${article.slug}`,
          "x-default": `${SITE_URL}/id/blog/${article.slug}`,
        },
      },
    });
  });

  return sitemapEntries;
}
