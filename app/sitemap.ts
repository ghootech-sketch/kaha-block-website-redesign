import { MetadataRoute } from "next";
import { allArticlesId, allArticlesEn } from "@/lib/blog-data";
import { PRODUCT_SLUGS } from "@/lib/products-data";
import { getAllVideos } from "@/lib/video-data";
import { SITE_URL } from "@/lib/site-config";

/**
 * Helper to derive blog hub lastModified date from the latest article.updatedAt in a given locale.
 * Prevents arbitrary hardcoding while maintaining truthful source-driven freshness.
 */
function getLatestArticleUpdate(posts: Array<{ updatedAt: string }>): Date | undefined {
  const timestamps = posts
    .map((post) => new Date(`${post.updatedAt}T00:00:00.000Z`).getTime())
    .filter(Number.isFinite);

  if (timestamps.length === 0) return undefined;

  return new Date(Math.max(...timestamps));
}

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

  /**
   * Timestamps for core static routes correspond strictly to verified repository material changes.
   * These timestamps are intentionally stable and must ONLY change when a route receives a meaningful
   * content or architecture update. Do NOT use request/build time (new Date() or Date.now()).
   * 
   * - Homepage "": 2026-10-01T10:50:24.000Z (commit b532f51b - homepage product-link correction)
   * - About "/about": 2026-10-01T17:18:11.000Z (commit 838afe61 - Phase 3 first-party evidence pass)
   * - Products Hub "/products": 2026-10-01T10:50:24.000Z (commit b532f51b - products catalog single source of truth)
   * - Production Gallery "/projects/production": 2026-10-01T17:18:11.000Z (commit 838afe61 - Phase 3 first-party evidence pass)
   * - Installation Service "/jasa-pemasangan-paving-block": 2026-10-01T11:39:19.000Z (commit e60e2d3c - service copy cleanup)
   * - Regional Pages "/area-layanan/*": 2026-10-01T11:39:19.000Z (commit e60e2d3c - regional template copy cleanup)
   * 
   * Note: Routes without established material modification dates (e.g., /projects, /contact, /area-layanan)
   * intentionally omit lastModified rather than fabricating an arbitrary date.
   */
  const CORE_ROUTE_LAST_MODIFIED: Record<string, string> = {
    "": "2026-10-01T10:50:24.000Z",
    "/about": "2026-10-01T17:18:11.000Z",
    "/products": "2026-10-01T10:50:24.000Z",
    "/projects/production": "2026-10-01T17:18:11.000Z",
    "/jasa-pemasangan-paving-block": "2026-10-01T11:39:19.000Z",
    "/area-layanan/jakarta": "2026-10-01T11:39:19.000Z",
    "/area-layanan/tangerang": "2026-10-01T11:39:19.000Z",
    "/area-layanan/bekasi": "2026-10-01T11:39:19.000Z",
    "/area-layanan/depok": "2026-10-01T11:39:19.000Z",
    "/area-layanan/bogor": "2026-10-01T11:39:19.000Z",
  };

  // Shared product page template timestamp (commit 838afe61 - shared product detail page evidence update)
  const SHARED_PRODUCT_PAGE_LASTMOD = new Date("2026-10-01T17:18:11.000Z");

  // 1. Core static pages
  locales.forEach((locale) => {
    coreRoutes.forEach((route) => {
      let lastModifiedDate: Date | undefined = undefined;

      if (route === "/blog") {
        lastModifiedDate =
          locale === "id"
            ? getLatestArticleUpdate(allArticlesId)
            : getLatestArticleUpdate(allArticlesEn);
      } else if (CORE_ROUTE_LAST_MODIFIED[route]) {
        lastModifiedDate = new Date(CORE_ROUTE_LAST_MODIFIED[route]);
      }

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

  // 2. Individual Product Detail Pages
  locales.forEach((locale) => {
    PRODUCT_SLUGS.forEach((slug) => {
      sitemapEntries.push({
        url: `${SITE_URL}/${locale}/products/${slug}`,
        lastModified: SHARED_PRODUCT_PAGE_LASTMOD,
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

  // 3. Indonesian Blog Articles
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

  // 4. English Blog Articles
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

  // 5. Video Watch Pages (15 videos x 2 locales = 30 URLs)
  const videoItems = getAllVideos();
  locales.forEach((locale) => {
    videoItems.forEach((video) => {
      sitemapEntries.push({
        url: `${SITE_URL}/${locale}/videos/${video.slug}`,
        lastModified: new Date(video.publishedAt),
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          languages: {
            "id-ID": `${SITE_URL}/id/videos/${video.slug}`,
            en: `${SITE_URL}/en/videos/${video.slug}`,
            "x-default": `${SITE_URL}/id/videos/${video.slug}`,
          },
        },
      });
    });
  });

  return sitemapEntries;
}
