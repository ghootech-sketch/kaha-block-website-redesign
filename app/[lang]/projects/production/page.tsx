import { getWhatsAppUrl } from "@/lib/whatsapp";
import { dictionaries, isValidLocale, Locale } from "@/lib/dictionary";
import { constructPageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import Image from "next/image";
import ScrollReveal, { Reveal, RevealGroup } from "@/components/ScrollReveal";
import Gallery from "@/components/Gallery";
import FactoryVideoGallery, { FactoryVideoData } from "@/components/FactoryVideoGallery";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { MessageSquare, ArrowRight, Factory, Calendar, Move, Award, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    return {};
  }
  return constructPageMetadata("projectsProduction", lang as Locale);
}

export default async function ProductionGalleryPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    notFound();
  }
  const currentLang = lang as Locale;
  const dict = dictionaries[currentLang].productionGallery;
  const projectDict = dictionaries[currentLang].projects;

  const productionImages = Array.from({ length: 35 }, (_, i) => 
    `/images/production/kaha-block-produksi-${String(i + 1).padStart(2, "0")}.webp`
  );

  const featuredList = [
    {
      label: currentLang === 'en' ? "Hydraulic Process" : "Proses Hidrolik",
      caption: currentLang === 'en' ? "Precision paving block molding using fully automatic hydraulic machinery." : "Pencetakan paving block presisi menggunakan mesin full otomatis hidrolik.",
      badge: currentLang === 'en' ? "Manufacturing" : "Manufaktur",
      image: productionImages[1],
    },
    {
      label: currentLang === 'en' ? "Curing Area" : "Area Pengeringan",
      caption: currentLang === 'en' ? "Controlled curing environment to achieve consistent K-250, K-300, and K-400 concrete grades." : "Lingkungan pengeringan terkontrol untuk mencapai mutu beton K-250, K-300, dan K-400 yang konsisten.",
      badge: currentLang === 'en' ? "Quality Control" : "Quality Control",
      image: productionImages[0],
    },
    {
      label: currentLang === 'en' ? "Ready for Delivery" : "Siap Kirim",
      caption: currentLang === 'en' ? "Finished paving blocks stacked neatly, ready for dispatch to project sites." : "Paving block jadi ditumpuk rapi, siap untuk dikirimkan ke lokasi proyek.",
      badge: currentLang === 'en' ? "Logistics" : "Logistik",
      image: "/images/production/kaha-block-produksi-26.webp",
    }
  ];

  // 15 unique production videos (01-04 duplicates removed)
  // Recommended order: 07, 23, 05, 06, 12, 13, 19, 20, 21, 22, 08, 09, 10, 11, 18
  const productionVideos: FactoryVideoData[] = [
    {
      id: "prod-vid-07",
      videoSrc: "/videos/factory/factory-production-07.mp4",
      posterSrc: "/images/factory/factory-production-07.webp",
      title: currentLang === 'en' ? "Red Paving Block Press & Production" : "Pencetakan & Produksi Paving Block Merah",
      tag: currentLang === 'en' ? "Red Paving" : "Paving Merah",
    },
    {
      id: "prod-vid-23",
      videoSrc: "/videos/factory/factory-production-23.mp4",
      posterSrc: "/images/factory/factory-production-23.webp",
      title: currentLang === 'en' ? "Red Paving Block Molding Cycle" : "Siklus Pencetakan Paving Block Merah",
      tag: currentLang === 'en' ? "Red Paving" : "Paving Merah",
    },
    {
      id: "prod-vid-05",
      videoSrc: "/videos/factory/factory-production-05.mp4",
      posterSrc: "/images/factory/factory-production-05.webp",
      title: currentLang === 'en' ? "Production Documentation" : "Dokumentasi Produksi",
    },
    {
      id: "prod-vid-06",
      videoSrc: "/videos/factory/factory-production-06.mp4",
      posterSrc: "/images/factory/factory-production-06.webp",
      title: currentLang === 'en' ? "Production Process" : "Proses Produksi",
    },
    {
      id: "prod-vid-12",
      videoSrc: "/videos/factory/factory-production-12.mp4",
      posterSrc: "/images/factory/factory-production-12.webp",
      title: currentLang === 'en' ? "Production Operations" : "Operasional Produksi",
    },
    {
      id: "prod-vid-13",
      videoSrc: "/videos/factory/factory-production-13.mp4",
      posterSrc: "/images/factory/factory-production-13.webp",
      title: currentLang === 'en' ? "Production Documentation" : "Dokumentasi Produksi",
    },
    {
      id: "prod-vid-19",
      videoSrc: "/videos/factory/factory-production-19.mp4",
      posterSrc: "/images/factory/factory-production-19.webp",
      title: currentLang === 'en' ? "Production Process" : "Proses Produksi",
    },
    {
      id: "prod-vid-20",
      videoSrc: "/videos/factory/factory-production-20.mp4",
      posterSrc: "/images/factory/factory-production-20.webp",
      title: currentLang === 'en' ? "Production Operations" : "Operasional Produksi",
    },
    {
      id: "prod-vid-21",
      videoSrc: "/videos/factory/factory-production-21.mp4",
      posterSrc: "/images/factory/factory-production-21.webp",
      title: currentLang === 'en' ? "Production Documentation" : "Dokumentasi Produksi",
    },
    {
      id: "prod-vid-22",
      videoSrc: "/videos/factory/factory-production-22.mp4",
      posterSrc: "/images/factory/factory-production-22.webp",
      title: currentLang === 'en' ? "Production Process" : "Proses Produksi",
    },
    {
      id: "prod-vid-08",
      videoSrc: "/videos/factory/factory-production-08.mp4",
      posterSrc: "/images/factory/factory-production-08.webp",
      title: currentLang === 'en' ? "Production Operations" : "Operasional Produksi",
    },
    {
      id: "prod-vid-09",
      videoSrc: "/videos/factory/factory-production-09.mp4",
      posterSrc: "/images/factory/factory-production-09.webp",
      title: currentLang === 'en' ? "Production Documentation" : "Dokumentasi Produksi",
    },
    {
      id: "prod-vid-10",
      videoSrc: "/videos/factory/factory-production-10.mp4",
      posterSrc: "/images/factory/factory-production-10.webp",
      title: currentLang === 'en' ? "Production Process" : "Proses Produksi",
    },
    {
      id: "prod-vid-11",
      videoSrc: "/videos/factory/factory-production-11.mp4",
      posterSrc: "/images/factory/factory-production-11.webp",
      title: currentLang === 'en' ? "Production Operations" : "Operasional Produksi",
    },
    {
      id: "prod-vid-18",
      videoSrc: "/videos/factory/factory-production-18.mp4",
      posterSrc: "/images/factory/factory-production-18.webp",
      title: currentLang === 'en' ? "Production Documentation" : "Dokumentasi Produksi",
    },
  ];

  return (
    <>
      <JsonLd page="projectsProduction" lang={currentLang} />

      {/* =========================================================================
          1. PAGE HERO
         ========================================================================= */}
      <PageHero
        eyebrow={dict.heroEyebrow}
        title={dict.heroTitle}
        description={dict.heroDesc}
      />

      {/* =========================================================================
          2. PRODUCTION FACT & CAPABILITY STRIP
         ========================================================================= */}
      <section className="bg-surface border-b border-stone-200/40 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-x-0 md:divide-x md:divide-slate-200">
              <div className="flex flex-col items-center text-center px-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/25 flex items-center justify-center mb-4 text-slate-900">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1 font-heading">{dict.stripSince}</h3>
                <p className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">{dict.stripSinceValue}</p>
              </div>
              <div className="flex flex-col items-center text-center px-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/25 flex items-center justify-center mb-4 text-slate-900">
                  <Move className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1 font-heading">{dict.stripArea}</h3>
                <p className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">{dict.stripAreaValue}</p>
              </div>
              <div className="flex flex-col items-center text-center px-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/25 flex items-center justify-center mb-4 text-slate-900">
                  <Factory className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1 font-heading">{dict.stripMachine}</h3>
                <p className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">{dict.stripMachineValue}</p>
              </div>
              <div className="flex flex-col items-center text-center px-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/25 flex items-center justify-center mb-4 text-slate-900">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1 font-heading">{dict.stripGrade}</h3>
                <p className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">{dict.stripGradeValue}</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-bold font-heading">
              <Link
                href={`/${currentLang}/about`}
                className="inline-flex items-center text-slate-800 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent min-h-[36px]"
              >
                <span>
                  {currentLang === "en"
                    ? "Learn about PT Kaha Sukses Mandiri"
                    : "Pelajari profil PT Kaha Sukses Mandiri"}
                </span>
                <ArrowRight className="w-4 h-4 ml-1.5 text-accent" aria-hidden="true" />
              </Link>

              <Link
                href={`/${currentLang}/products`}
                className="inline-flex items-center text-primary hover:text-primary-hover transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent min-h-[36px]"
              >
                <span>
                  {currentLang === "en"
                    ? "View Kaha Block products"
                    : "Lihat katalog produk Kaha Block"}
                </span>
                <ArrowRight className="w-4 h-4 ml-1.5 text-accent" aria-hidden="true" />
              </Link>

              <Link
                href={`/${currentLang}/area-layanan/tangerang`}
                className="inline-flex items-center text-slate-600 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent min-h-[36px]"
              >
                <span>
                  {currentLang === "en"
                    ? "Main Plant Location: Cisauk, Tangerang Regency"
                    : "Pabrik Utama: Cisauk, Kabupaten Tangerang"}
                </span>
                <ArrowRight className="w-4 h-4 ml-1.5 text-accent" aria-hidden="true" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          2B. HYDRAULIC PRESS PRODUCTION AUTHORITY (Answer-First Section)
         ========================================================================= */}
      <section className="bg-white py-16 sm:py-20 lg:py-24 border-b border-stone-200/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="flex flex-col gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-slate-900 tracking-tight mb-4">
                {currentLang === "en"
                  ? "K-250, K-300 & K-400 Paving Block Factory with Fully Automatic Hydraulic Press Machine"
                  : "Pabrik Paving Block K-250, K-300 & K-400 dengan Mesin Press Hidrolik Full Otomatis"}
              </h2>
              <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
                {currentLang === "en"
                  ? "Kaha Block manufactures paving blocks at PT Kaha Sukses Mandiri's 9,080 m² facility in Cisauk, Tangerang Regency. The molding process uses fully automatic hydraulic press machines to help maintain density, compressive strength, and dimensional consistency according to product specifications."
                  : "Kaha Block memproduksi paving block di fasilitas PT Kaha Sukses Mandiri seluas 9.080 m² di Cisauk, Kabupaten Tangerang. Proses pencetakan menggunakan mesin press hidrolik full otomatis untuk membantu menjaga kepadatan, kuat tekan, dan konsistensi dimensi sesuai spesifikasi produk."}
              </p>
            </div>

            <div className="bg-surface p-6 sm:p-8 rounded-xl border border-slate-200/80">
              <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900 mb-3">
                {currentLang === "en"
                  ? "Are Kaha Block paving blocks produced using hydraulic press machines?"
                  : "Apakah paving block Kaha Block diproduksi menggunakan mesin press hidrolik?"}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                {currentLang === "en"
                  ? "Yes. The Kaha Block production process at the Cisauk plant utilizes fully automatic hydraulic machines. Products are available in K-250, K-300, and K-400 concrete grades according to product type and project requirements."
                  : "Ya. Proses produksi Kaha Block di pabrik Cisauk menggunakan mesin full otomatis hidrolik. Produk tersedia dengan pilihan mutu K-250, K-300, dan K-400 sesuai jenis produk dan kebutuhan proyek."}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          3. FEATURED PRODUCTION HIGHLIGHTS
          ========================================================================= */}
      <section className="bg-white py-16 sm:py-20 lg:py-28 border-b border-stone-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealGroup>
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 flex flex-col items-center">
              <Reveal delay={0}>
                <div className="flex items-center space-x-3 mb-4">
                  <span className="w-8 h-px bg-accent" aria-hidden="true" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 font-heading">
                    {currentLang === 'en' ? "Production Highlights" : "Sorotan Produksi"}
                  </span>
                  <span className="w-8 h-px bg-accent" aria-hidden="true" />
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-slate-900 font-heading tracking-tight mb-4">
                  {currentLang === 'en' ? "Key Manufacturing Phases" : "Tahapan Utama Manufaktur"}
                </h2>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="text-sm sm:text-base text-slate-500 font-sans leading-relaxed">
                  {dict.heroDesc}
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {featuredList.map((item, index) => (
                <Reveal key={index} staggerIndex={index} baseDelay={0.1}>
                  <div className="text-left w-full bg-white border border-stone-200/40 overflow-hidden hover:border-accent/40 transition-colors flex flex-col h-full group">
                    <div className="relative aspect-[3/2] w-full bg-slate-100 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.label}
                        fill
                        loading="lazy"
                        fetchPriority="low"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 bg-dark/90 text-accent px-3 py-1 text-xs font-mono font-bold shadow-sm backdrop-blur-xs border border-accent/30">
                        {item.badge}
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between bg-white border-t border-stone-200/40">
                      <div>
                        <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 font-heading">
                          <CheckCircle2 className="w-4 h-4 text-accent" aria-hidden="true" />
                          <span>{item.label}</span>
                        </div>
                        <p className="text-sm sm:text-base text-slate-900 font-medium font-sans leading-relaxed">
                          {item.caption}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </RevealGroup>
        </div>
      </section>

      {/* =========================================================================
          4. PRODUCTION VIDEO GALLERY (15 Unique Videos, 6 Initial, Load More)
         ========================================================================= */}
      <FactoryVideoGallery
        eyebrow={dict.factoryVideos.eyebrow}
        title={dict.factoryVideos.title}
        subtitle={dict.factoryVideos.subtitle}
        playLabelPrefix={dict.factoryVideos.playLabel}
        loadMoreLabel={dict.factoryVideos.loadMore}
        videos={productionVideos}
        initialCount={6}
        batchSize={6}
      />

      {/* =========================================================================
          5. EXISTING 35-PHOTO PRODUCTION GALLERY (Surface Background)
         ========================================================================= */}
      <section className="bg-surface py-16 sm:py-20 lg:py-28 border-t border-stone-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Gallery 
            images={productionImages} 
            completeGalleryHeading={dict.galleryHeading}
            dict={{
              loadMore: projectDict.loadMore,
              showLess: projectDict.showLess,
              closeLightbox: projectDict.closeLightbox,
              nextImage: projectDict.nextImage,
              prevImage: projectDict.prevImage,
              imageAlt: dict.heroTitle
            }} 
            galleryType="production"
          />
        </div>
      </section>

      {/* =========================================================================
          6. CTA SECTION (Dark Background)
         ========================================================================= */}
      <section className="bg-dark text-white relative overflow-hidden py-16 sm:py-20 lg:py-28">
        <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up" className="flex flex-col items-center">
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-8 h-px bg-accent" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent font-heading">
                {currentLang === 'en' ? "Factory Direct" : "Langsung Dari Pabrik"}
              </span>
              <span className="w-8 h-px bg-accent" aria-hidden="true" />
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white font-heading tracking-tight mb-6">
              {dict.ctaHeading}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-400 font-sans leading-relaxed mb-10 max-w-2xl mx-auto">
              {dict.ctaDesc}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={getWhatsAppUrl("secondary", "production", currentLang)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent font-heading tracking-wide uppercase"
              >
                <MessageSquare className="w-4 h-4 mr-2.5" aria-hidden="true" />
                {dict.ctaButton}
              </a>
              <Link
                href={`/${currentLang}/contact`}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent hover:bg-white/5 text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base border border-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white font-heading tracking-wide uppercase"
              >
                {currentLang === 'en' ? "Contact Us" : "Hubungi Kami"}
                <ArrowRight className="w-4 h-4 ml-2.5 text-accent" aria-hidden="true" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
