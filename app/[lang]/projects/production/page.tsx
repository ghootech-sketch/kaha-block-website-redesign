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
  const contactDict = dictionaries[currentLang].contact;
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

  // 23 production videos: 01-06 preserved, 07-23 added
  // Videos 07 and 23 prioritized first (confirmed red paving block production)
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
      id: "prod-vid-01",
      videoSrc: "/videos/factory/factory-production-01.mp4",
      posterSrc: "/images/factory/factory-production-01.webp",
      title: currentLang === 'en' ? "Automatic Hydraulic Press Machine" : "Mesin Press Hidrolik Otomatis",
    },
    {
      id: "prod-vid-05",
      videoSrc: "/videos/factory/factory-production-05.mp4",
      posterSrc: "/images/factory/factory-production-05.webp",
      title: currentLang === 'en' ? "Automated Stacking & Curing Transit" : "Penataan Otomatis & Transit Curing",
    },
    {
      id: "prod-vid-06",
      videoSrc: "/videos/factory/factory-production-06.mp4",
      posterSrc: "/images/factory/factory-production-06.webp",
      title: currentLang === 'en' ? "Production Floor & Heavy Machinery" : "Lantai Produksi & Alat Berat Pabrik",
    },
    {
      id: "prod-vid-02",
      videoSrc: "/videos/factory/factory-production-02.mp4",
      posterSrc: "/images/factory/factory-production-02.webp",
      title: currentLang === 'en' ? "High-Pressure Compaction Process" : "Proses Pemadatan Tekanan Tinggi",
    },
    {
      id: "prod-vid-12",
      videoSrc: "/videos/factory/factory-production-12.mp4",
      posterSrc: "/images/factory/factory-production-12.webp",
      title: currentLang === 'en' ? "Production Process Documentation" : "Dokumentasi Proses Produksi",
    },
    {
      id: "prod-vid-13",
      videoSrc: "/videos/factory/factory-production-13.mp4",
      posterSrc: "/images/factory/factory-production-13.webp",
      title: currentLang === 'en' ? "Hydraulic Unit Operation" : "Operasional Unit Hidrolik",
    },
    {
      id: "prod-vid-19",
      videoSrc: "/videos/factory/factory-production-19.mp4",
      posterSrc: "/images/factory/factory-production-19.webp",
      title: currentLang === 'en' ? "Production Plant Overview" : "Dokumentasi Fasilitas Produksi",
    },
    {
      id: "prod-vid-20",
      videoSrc: "/videos/factory/factory-production-20.mp4",
      posterSrc: "/images/factory/factory-production-20.webp",
      title: currentLang === 'en' ? "Conveyor & Material Handling" : "Konveyor & Distribusi Material",
    },
    {
      id: "prod-vid-21",
      videoSrc: "/videos/factory/factory-production-21.mp4",
      posterSrc: "/images/factory/factory-production-21.webp",
      title: currentLang === 'en' ? "Continuous Molding Workflow" : "Alur Cetak Berkelanjutan",
    },
    {
      id: "prod-vid-22",
      videoSrc: "/videos/factory/factory-production-22.mp4",
      posterSrc: "/images/factory/factory-production-22.webp",
      title: currentLang === 'en' ? "Quality Inspection & Stacking" : "Inspeksi & Penataan Produk Jadi",
    },
    {
      id: "prod-vid-03",
      videoSrc: "/videos/factory/factory-production-03.mp4",
      posterSrc: "/images/factory/factory-production-03.webp",
      title: currentLang === 'en' ? "Curing Area & Stock Management" : "Area Curing & Manajemen Stok",
    },
    {
      id: "prod-vid-04",
      videoSrc: "/videos/factory/factory-production-04.mp4",
      posterSrc: "/images/factory/factory-production-04.webp",
      title: currentLang === 'en' ? "Batching & Raw Material Loading" : "Pengisian Material & Batching Plant",
    },
    {
      id: "prod-vid-08",
      videoSrc: "/videos/factory/factory-production-08.mp4",
      posterSrc: "/images/factory/factory-production-02.webp",
      title: currentLang === 'en' ? "Production Documentation" : "Dokumentasi Produksi",
    },
    {
      id: "prod-vid-09",
      videoSrc: "/videos/factory/factory-production-09.mp4",
      posterSrc: "/images/factory/factory-production-03.webp",
      title: currentLang === 'en' ? "Production Process" : "Proses Produksi",
    },
    {
      id: "prod-vid-10",
      videoSrc: "/videos/factory/factory-production-10.mp4",
      posterSrc: "/images/factory/factory-production-04.webp",
      title: currentLang === 'en' ? "Factory Operations" : "Operasional Pabrik",
    },
    {
      id: "prod-vid-11",
      videoSrc: "/videos/factory/factory-production-11.mp4",
      posterSrc: "/images/factory/factory-production-05.webp",
      title: currentLang === 'en' ? "Production Documentation" : "Dokumentasi Produksi",
    },
    {
      id: "prod-vid-14",
      videoSrc: "/videos/factory/factory-production-14.mp4",
      posterSrc: "/images/factory/factory-production-06.webp",
      title: currentLang === 'en' ? "Hydraulic Machinery" : "Mesin Hidrolik Produksi",
    },
    {
      id: "prod-vid-15",
      videoSrc: "/videos/factory/factory-production-15.mp4",
      posterSrc: "/images/factory/factory-production-01.webp",
      title: currentLang === 'en' ? "Production Workflow" : "Alur Produksi Paving",
    },
    {
      id: "prod-vid-16",
      videoSrc: "/videos/factory/factory-production-16.mp4",
      posterSrc: "/images/factory/factory-production-02.webp",
      title: currentLang === 'en' ? "Factory Operations" : "Operasional Pabrik",
    },
    {
      id: "prod-vid-17",
      videoSrc: "/videos/factory/factory-production-17.mp4",
      posterSrc: "/images/factory/factory-production-03.webp",
      title: currentLang === 'en' ? "Production Documentation" : "Dokumentasi Produksi",
    },
    {
      id: "prod-vid-18",
      videoSrc: "/videos/factory/factory-production-18.mp4",
      posterSrc: "/images/factory/factory-production-04.webp",
      title: currentLang === 'en' ? "Production Process" : "Proses Produksi",
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
      <section className="bg-surface border-b border-slate-200/80 py-12 sm:py-16">
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
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          3. FEATURED PRODUCTION HIGHLIGHTS
         ========================================================================= */}
      <section className="bg-white py-14 sm:py-18 md:py-24 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealGroup>
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
              <Reveal delay={0}>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-accent mb-2 block font-heading">
                  {currentLang === 'en' ? "Production Highlights" : "Sorotan Produksi"}
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-slate-900">
                  {currentLang === 'en' ? "Key Manufacturing Phases" : "Tahapan Utama Manufaktur"}
                </h2>
                <div className="w-16 h-1 bg-accent mx-auto mt-4 mb-4 rounded-full" />
              </Reveal>
              <Reveal delay={0.08}>
                <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                  {dict.heroDesc}
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {featuredList.map((item, index) => (
                <Reveal key={index} staggerIndex={index} baseDelay={0.1}>
                  <div className="text-left w-full bg-surface-card rounded-xl sm:rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col h-full group">
                    <div className="relative aspect-[3/2] w-full bg-slate-100 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.label}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 bg-black/80 text-accent px-3 py-1 rounded-full text-xs font-mono font-bold shadow-sm backdrop-blur-xs border border-accent/30">
                        {item.badge}
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between bg-surface-card border-t border-slate-100">
                      <div>
                        <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-accent mb-1.5 font-heading">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                          <span>{item.label}</span>
                        </div>
                        <p className="text-sm sm:text-base text-slate-900 font-semibold font-sans leading-snug">
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
          4. PRODUCTION VIDEO GALLERY (23 Videos, 6 Initial, Load More)
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
          5. EXISTING 35-PHOTO PRODUCTION GALLERY (Unmixed, Pure Photo Documentation)
         ========================================================================= */}
      <section className="bg-white py-14 sm:py-18 md:py-24 border-t border-slate-200/80">
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
          />
        </div>
      </section>

      {/* =========================================================================
          6. CTA SECTION
         ========================================================================= */}
      <section className="bg-surface py-16 sm:py-24 border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="bg-surface-card rounded-2xl p-8 sm:p-12 border border-slate-200/80 shadow-xs text-center">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-accent mb-2 block font-heading">
              {currentLang === 'en' ? "Factory Direct" : "Langsung Dari Pabrik"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading mb-4">
              {dict.ctaHeading}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-2xl mx-auto font-sans">
              {dict.ctaDesc}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={contactDict.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold transition-all bg-primary hover:bg-primary-hover text-white shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent font-heading w-full sm:w-auto"
              >
                <MessageSquare className="w-5 h-5 mr-2.5 text-white" aria-hidden="true" />
                {dict.ctaButton}
              </a>
              <Link
                href={`/${currentLang}/contact`}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold transition-all bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 shadow-xs hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent font-heading w-full sm:w-auto"
              >
                {currentLang === 'en' ? "Contact Us" : "Hubungi Kami"}
                <ArrowRight className="w-5 h-5 ml-2.5 text-slate-400" aria-hidden="true" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
