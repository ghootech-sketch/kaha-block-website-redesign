import { NextResponse } from "next/server";
import { getAllProducts } from "@/lib/products-data";
import { getAllVideos } from "@/lib/video-data";
import { allArticlesId, allArticlesEn } from "@/lib/blog-data";
import { SITE_URL } from "@/lib/site-config";
import { Locale } from "@/lib/dictionary";

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const baseUrl = SITE_URL;
  const locales: Locale[] = ["id", "en"];
  const products = getAllProducts("id");
  const videos = getAllVideos();

  // Project documentation images (1 to 33)
  const projectImages = Array.from(
    { length: 33 },
    (_, i) => `/images/projects/kaha-block-dokumentasi-${String(i + 1).padStart(2, "0")}.webp`
  );

  // Production documentation images (1 to 35)
  const productionImages = Array.from(
    { length: 35 },
    (_, i) => `/images/production/kaha-block-produksi-${String(i + 1).padStart(2, "0")}.webp`
  );

  // Video posters (15 assets)
  const videoPosters = videos.map((v) => v.posterSrc);

  // Product catalog images (9 assets)
  const productImages = products.map((p) => p.image);

  // Homepage featured images
  const homepageImages = [
    "/images/hero/hero-main.webp",
    "/images/hero/hero-mobile.webp",
    ...productImages,
    "/images/projects/kaha-block-dokumentasi-25.webp",
    "/images/projects/kaha-block-dokumentasi-24.webp",
    "/images/projects/kaha-block-dokumentasi-03.webp",
  ];

  interface PageImageEntry {
    pageUrl: string;
    imageUrls: string[];
  }

  const entries: PageImageEntry[] = [];

  locales.forEach((lang) => {
    // 1. Homepage
    entries.push({
      pageUrl: `${baseUrl}/${lang}`,
      imageUrls: Array.from(new Set(homepageImages)),
    });

    // 2. Products Hub
    entries.push({
      pageUrl: `${baseUrl}/${lang}/products`,
      imageUrls: Array.from(new Set(productImages)),
    });

    // 3. Product Detail Pages (9 products)
    products.forEach((prod) => {
      entries.push({
        pageUrl: `${baseUrl}/${lang}/products/${prod.slug}`,
        imageUrls: [prod.image],
      });
    });

    // 4. Projects Gallery
    entries.push({
      pageUrl: `${baseUrl}/${lang}/projects`,
      imageUrls: Array.from(new Set(projectImages)),
    });

    // 5. Production Gallery (35 photos + 15 video posters)
    entries.push({
      pageUrl: `${baseUrl}/${lang}/projects/production`,
      imageUrls: Array.from(new Set([...productionImages, ...videoPosters])),
    });

    // 6. Video Watch Pages (15 videos)
    videos.forEach((vid) => {
      entries.push({
        pageUrl: `${baseUrl}/${lang}/videos/${vid.slug}`,
        imageUrls: [vid.posterSrc],
      });
    });

    // 7. Blog Article Pages (9 articles per locale)
    const blogPosts = lang === "id" ? allArticlesId : allArticlesEn;
    blogPosts.forEach((post) => {
      entries.push({
        pageUrl: `${baseUrl}/${lang}/blog/${post.slug}`,
        imageUrls: [post.image],
      });
    });
  });

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
  xml += `        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;

  entries.forEach((entry) => {
    xml += `  <url>\n`;
    xml += `    <loc>${escapeXml(entry.pageUrl)}</loc>\n`;
    entry.imageUrls.forEach((img) => {
      const fullImgUrl = `${baseUrl}${img}`;
      xml += `    <image:image>\n`;
      xml += `      <image:loc>${escapeXml(fullImgUrl)}</image:loc>\n`;
      xml += `    </image:image>\n`;
    });
    xml += `  </url>\n`;
  });

  xml += `</urlset>\n`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=43200",
    },
  });
}
