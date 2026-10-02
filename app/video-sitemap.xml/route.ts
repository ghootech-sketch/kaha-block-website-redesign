import { NextResponse } from "next/server";
import { getAllVideos, getLocalizedVideoData } from "@/lib/video-data";
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
  const videos = getAllVideos();
  const locales: Locale[] = ["id", "en"];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
  xml += `        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">\n`;

  locales.forEach((lang) => {
    videos.forEach((video) => {
      const loc = getLocalizedVideoData(video, lang);
      const watchUrl = `${baseUrl}/${lang}/videos/${video.slug}`;
      const posterUrl = `${baseUrl}${video.posterSrc}`;
      const mp4Url = `${baseUrl}${video.videoSrc}`;

      xml += `  <url>\n`;
      xml += `    <loc>${escapeXml(watchUrl)}</loc>\n`;
      xml += `    <video:video>\n`;
      xml += `      <video:thumbnail_loc>${escapeXml(posterUrl)}</video:thumbnail_loc>\n`;
      xml += `      <video:title>${escapeXml(loc.localizedTitle)}</video:title>\n`;
      xml += `      <video:description>${escapeXml(loc.localizedDescription)}</video:description>\n`;
      xml += `      <video:content_loc>${escapeXml(mp4Url)}</video:content_loc>\n`;
      xml += `      <video:duration>${video.durationSeconds}</video:duration>\n`;
      xml += `      <video:publication_date>${escapeXml(video.publishedAt)}</video:publication_date>\n`;
      xml += `    </video:video>\n`;
      xml += `  </url>\n`;
    });
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
