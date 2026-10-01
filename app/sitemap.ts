import { MetadataRoute } from "next";
import { allArticlesId, allArticlesEn } from "@/lib/blog-data";
import { PRODUCT_SLUGS } from "@/lib/products-data";
import { SITE_URL } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["id", "en"] as const;
  const coreRoutes = [
    "",
    "/about",
    "/products",
    "/projects",
    "/projects/production",
    "/blog",
    "/contact",
    "/jasa-pemasangan-paving-block",
    "/area-layanan",
    "/area-layanan/jakarta",
    "/area-layanan/tangerang",
    "/area-layanan/bekasi",
    "/area-layanan/depok",
    "/area-layanan/bogor",
  ] as const;

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Core static routes updated in the current SEO pass with stable recrawl signal date
  const UPDATED_CORE_ROUTES: Record<string, string> = {
    "": "2026-09-27T00:00:00.000Z",
    "/products": "2026-09-27T00:00:00.000Z",
    "/projects/production": "2026-09-27T00:00:00.000Z",
    "/jasa-pemasangan-paving-block": "2026-09-27T00:00:00.000Z",
    "/area-layanan/tangerang": "2026-09-27T00:00:00.000Z",
    "/area-layanan/jakarta": "2026-09-27T00:00:00.000Z",
    "/area-layanan/bekasi": "2026-09-27T00:00:00.000Z",
    "/area-layanan/depok": "2026-09-27T00:00:00.000Z",
    "/area-layanan/bogor": "2026-09-27T00:00:00.000Z",
  };

  // Core static pages
  locales.forEach((locale) => {
    coreRoutes.forEach((route) => {
      const lastModifiedDate = UPDATED_CORE_ROUTES[route]
        ? new Date(UPDATED_CORE_ROUTES[route])
        : undefined;

      sitemapEntries.push({
        url: `${SITE_URL}/${locale}${route}`,
        ...(lastModifiedDate ? { lastModified: lastModifiedDate } : {}),
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

  // Individual Product Pages
  locales.forEach((locale) => {
    PRODUCT_SLUGS.forEach((slug) => {
      sitemapEntries.push({
        url: `${SITE_URL}/${locale}/products/${slug}`,
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: {
          languages: {
            "id-ID": `${SITE_URL}/id/products/${slug}`,
            en: `${SITE_URL}/en/products/${slug}`,
            "x-default": `${SITE_URL}/id/products/${slug}`,
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
