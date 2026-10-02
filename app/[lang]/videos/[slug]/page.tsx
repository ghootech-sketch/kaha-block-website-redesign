import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { isValidLocale, Locale } from "@/lib/dictionary";
import { constructVideoMetadata } from "@/lib/metadata";
import {
  getVideoBySlug,
  getAllVideoSlugs,
  getLocalizedVideoData,
  getAllVideos,
} from "@/lib/video-data";
import JsonLd from "@/components/JsonLd";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import {
  Factory,
  ArrowLeft,
  Clock,
  MapPin,
  MessageSquare,
  Play,
} from "lucide-react";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const locales: Locale[] = ["id", "en"];
  const slugs = getAllVideoSlugs();
  const params: Array<{ lang: string; slug: string }> = [];

  locales.forEach((lang) => {
    slugs.forEach((slug) => {
      params.push({ lang, slug });
    });
  });

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isValidLocale(lang)) {
    return {};
  }
  const videoItem = getVideoBySlug(slug);
  if (!videoItem) {
    return {};
  }

  const currentLang = lang as Locale;
  const localized = getLocalizedVideoData(videoItem, currentLang);

  return constructVideoMetadata({
    slug,
    lang: currentLang,
    title: localized.localizedTitle,
    description: localized.localizedDescription,
    posterImage: videoItem.posterSrc,
  });
}

export default async function VideoWatchPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isValidLocale(lang)) {
    notFound();
  }

  const videoItem = getVideoBySlug(slug);
  if (!videoItem) {
    notFound();
  }

  const currentLang = lang as Locale;
  const isEn = currentLang === "en";
  const localized = getLocalizedVideoData(videoItem, currentLang);
  const allVideos = getAllVideos();
  const otherVideos = allVideos
    .filter((v) => v.slug !== videoItem.slug)
    .slice(0, 3);

  const waUrl = getWhatsAppUrl(
    "primary",
    `video: ${localized.localizedTitle}`,
    currentLang
  );

  return (
    <>
      <JsonLd page="videoWatch" lang={currentLang} videoItem={videoItem} />
      <main className="min-h-screen bg-slate-50 pt-24 pb-16">
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <nav className="flex items-center text-xs sm:text-sm text-slate-500 font-sans space-x-2">
            <Link
              href={`/${currentLang}`}
              className="hover:text-slate-900 transition-colors"
            >
              {isEn ? "Home" : "Beranda"}
            </Link>
            <span>/</span>
            <Link
              href={`/${currentLang}/projects/production`}
              className="hover:text-slate-900 transition-colors"
            >
              {isEn ? "Production Gallery" : "Galeri Produksi"}
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-medium truncate max-w-[200px] sm:max-w-xs">
              {localized.localizedTitle}
            </span>
          </nav>
        </div>

        {/* Primary Video Player Container */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 mb-8">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <Link
                href={`/${currentLang}/projects/production`}
                className="inline-flex items-center text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors font-heading"
              >
                <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
                {isEn ? "Back to Production Gallery" : "Kembali ke Galeri Produksi"}
              </Link>
              {localized.localizedTag && (
                <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 border border-accent/20 rounded-full font-heading">
                  {localized.localizedTag}
                </span>
              )}
            </div>

            {/* Title & Eyebrow */}
            <div className="mb-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-accent font-heading block mb-2">
                {isEn ? "Kaha Block Factory Video" : "Video Pabrik Kaha Block"}
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-heading leading-tight">
                {localized.localizedTitle}
              </h1>
            </div>

            {/* Direct HTML5 Video Player - Present in Server HTML */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-950 shadow-lg border border-slate-200 mb-6">
              <video
                controls
                playsInline
                preload="metadata"
                poster={videoItem.posterSrc}
                className="w-full h-full object-cover"
              >
                <source src={videoItem.videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Video Details & Meta Badges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 mb-6">
              <div className="flex items-center text-slate-700">
                <Clock className="w-4 h-4 text-accent mr-3 shrink-0" aria-hidden="true" />
                <div>
                  <span className="text-xs text-slate-500 block font-heading">
                    {isEn ? "Duration" : "Durasi Video"}
                  </span>
                  <span className="text-sm font-bold font-sans">
                    {Math.floor(videoItem.durationSeconds / 60)} min {videoItem.durationSeconds % 60} sec
                  </span>
                </div>
              </div>
              <div className="flex items-center text-slate-700">
                <Factory className="w-4 h-4 text-accent mr-3 shrink-0" aria-hidden="true" />
                <div>
                  <span className="text-xs text-slate-500 block font-heading">
                    {isEn ? "Manufacturer" : "Produsen"}
                  </span>
                  <span className="text-sm font-bold font-sans">PT Kaha Sukses Mandiri</span>
                </div>
              </div>
              <div className="flex items-center text-slate-700">
                <MapPin className="w-4 h-4 text-accent mr-3 shrink-0" aria-hidden="true" />
                <div>
                  <span className="text-xs text-slate-500 block font-heading">
                    {isEn ? "Factory Location" : "Lokasi Pabrik"}
                  </span>
                  <span className="text-sm font-bold font-sans">Cisauk, Kab. Tangerang</span>
                </div>
              </div>
            </div>

            {/* Video Description */}
            <div className="prose max-w-none text-slate-700 font-sans leading-relaxed mb-8">
              <p className="text-base sm:text-lg text-slate-800 font-medium">
                {localized.localizedDescription}
              </p>
              <p className="text-sm text-slate-600 mt-3">
                {isEn
                  ? "All Kaha Block concrete paving products are manufactured at our 9,080 m² production facility in Cisauk, Tangerang Regency using fully automated hydraulic machinery to ensure precise dimensions, high density, and consistent concrete strength grades (K-250, K-300, K-400)."
                  : "Seluruh produk paving block beton Kaha Block diproduksi di fasilitas pabrik seluas 9.080 m² di Cisauk, Kabupaten Tangerang menggunakan mesin hidrolik otomatis untuk menjamin kepresisian ukuran, kepadatan tinggi, serta mutu beton konsisten (K-250, K-300, K-400)."}
              </p>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-100">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-bold text-white bg-primary hover:bg-primary-hover shadow-xs transition-colors font-heading"
              >
                <MessageSquare className="w-4 h-4 mr-2" aria-hidden="true" />
                {isEn ? "Consult Factory Sales" : "Konsultasi Pabrik via WhatsApp"}
              </a>
              <Link
                href={`/${currentLang}/products`}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors font-heading"
              >
                {isEn ? "Explore Paving Products" : "Lihat Produk Paving Block"}
              </Link>
            </div>
          </div>

          {/* Related Production Videos */}
          <div className="mt-12">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-heading mb-6">
              {isEn ? "Other Production Documentation" : "Dokumentasi Produksi Lainnya"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {otherVideos.map((otherVid) => {
                const otherLoc = getLocalizedVideoData(otherVid, currentLang);
                return (
                  <Link
                    key={otherVid.slug}
                    href={`/${currentLang}/videos/${otherVid.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col"
                  >
                    <div className="relative aspect-video bg-slate-900 overflow-hidden">
                      <Image
                        src={otherVid.posterSrc}
                        alt={otherLoc.localizedTitle}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, 33vw"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/10 transition-colors flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform">
                          <Play className="w-4 h-4 fill-current ml-0.5" aria-hidden="true" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <h3 className="text-sm font-bold text-slate-900 font-heading group-hover:text-accent transition-colors line-clamp-2">
                        {otherLoc.localizedTitle}
                      </h3>
                      <span className="text-xs text-slate-500 font-sans mt-2 block">
                        {Math.floor(otherVid.durationSeconds / 60)} min {otherVid.durationSeconds % 60} sec
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
