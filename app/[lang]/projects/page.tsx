import { dictionaries, isValidLocale, Locale } from "@/lib/dictionary";
import { constructPageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import Gallery from "@/components/Gallery";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageSquare, Layers, Eye } from "lucide-react";
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
  return constructPageMetadata("projects", lang as Locale);
}

export default async function Projects({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    notFound();
  }
  const currentLang = lang as Locale;
  const dict = dictionaries[currentLang].projects;
  const contactDict = dictionaries[currentLang].contact;

  const featuredList = dict.featured
    ? [dict.featured.item1, dict.featured.item2, dict.featured.item3]
    : [];

  return (
    <>
      <JsonLd page="projects" lang={currentLang} />

      {/* =========================================================================
          1. EDITORIAL INTRO HERO (Warm White Background)
         ========================================================================= */}
      <section className="bg-surface border-b border-slate-200/80 pt-12 pb-14 sm:pt-16 sm:pb-16 md:pt-20 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal immediate className="text-center max-w-4xl mx-auto">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary mb-2.5 block font-heading">
              {dict.editorialIntro?.eyebrow || dict.title}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight font-heading">
              {dict.editorialIntro?.title || dict.title}
            </h1>
            <div className="w-16 sm:w-24 h-1 sm:h-1.5 bg-primary mx-auto mt-4 sm:mt-5 mb-4 sm:mt-6 rounded-full" />
            <p className="text-base sm:text-lg text-slate-700 max-w-3xl mx-auto font-sans leading-relaxed mb-6 sm:mb-8">
              {dict.editorialIntro?.description || dict.description}
            </p>

            {/* 4 Scope Badges */}
            {dict.editorialIntro?.scopeItems && (
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                {dict.editorialIntro.scopeItems.map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs sm:text-sm font-semibold text-slate-900 shadow-2xs"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-primary" aria-hidden="true" />
                    {item}
                  </span>
                ))}
              </div>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          2. GALLERY SECTION: FEATURED & ALL 26 DOCUMENTATION PHOTOS (White Canvas)
         ========================================================================= */}
      <section className="bg-white py-14 sm:py-18 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Gallery 
            images={Array.from({ length: 26 }, (_, i) => `/images/projects/kaha-block-dokumentasi-${String(i + 1).padStart(2, '0')}.webp`)} 
            featuredItems={featuredList}
            featuredHeader={dict.featured ? {
              eyebrow: dict.featured.eyebrow,
              title: dict.featured.title,
              subtitle: dict.featured.subtitle,
            } : undefined}
            completeGalleryHeading={dict.completeGalleryHeading}
            dict={{
              loadMore: dict.loadMore,
              showLess: dict.showLess,
              closeLightbox: dict.closeLightbox,
              nextImage: dict.nextImage,
              prevImage: dict.prevImage,
              imageAlt: dict.imageAlt
            }} 
          />
        </div>
      </section>

      {/* =========================================================================
          3. DOCUMENTATION SCOPE SECTION (Warm Neutral Background)
         ========================================================================= */}
      {dict.scope && (
        <section className="bg-surface border-y border-slate-200/80 py-14 sm:py-18 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 mb-3.5">
                <Eye className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900 font-heading">
                  {dict.scope.eyebrow}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-slate-900">
                {dict.scope.title}
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto mt-4 mb-4 rounded-full" />
              <p className="text-sm sm:text-base text-slate-700 font-sans leading-relaxed">
                {dict.scope.subtitle}
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {dict.scope.items.map((item, idx) => (
                <ScrollReveal
                  key={item.number}
                  delay={idx * 0.05}
                  className="bg-white border border-slate-200/90 border-t-2 border-t-accent/60 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-accent hover:shadow-xs transition-all"
                >
                  <div>
                    <span className="w-9 h-9 rounded-xl bg-accent text-slate-900 font-mono text-xs font-bold flex items-center justify-center mb-4 shadow-xs">
                      {item.number}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900 mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          4. HOW WE SUPPORT PROJECT WORKFLOW (4 Steps)
         ========================================================================= */}
      {dict.projectSupport && (
        <section className="bg-white py-14 sm:py-18 md:py-24 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary mb-2 block font-heading">
                {dict.projectSupport.eyebrow}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-slate-900">
                {dict.projectSupport.title}
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto mt-4 mb-4 rounded-full" />
              <p className="text-sm sm:text-base text-slate-600 font-sans">
                {dict.projectSupport.subtitle}
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {dict.projectSupport.steps.map((step, idx) => (
                <ScrollReveal
                  key={step.number}
                  delay={idx * 0.04}
                  className="bg-surface border border-slate-200/80 border-t-2 border-t-accent/60 rounded-2xl p-6 flex flex-col justify-between hover:border-accent hover:shadow-xs transition-[border-color,box-shadow] duration-300"
                >
                  <div>
                    <span className="w-9 h-9 rounded-xl bg-accent text-slate-900 font-mono text-xs font-bold flex items-center justify-center mb-4 shadow-xs">
                      {step.number}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold font-heading text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Link to Contact */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 border-t border-slate-200/80">
              <Link
                href={`/${currentLang}/contact`}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-full font-bold text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent min-h-[44px]"
              >
                <span>{currentLang === "id" ? "Lihat Kontak & Lokasi Pabrik" : "View Contact & Factory Location"}</span>
                <ArrowRight className="w-4 h-4 ml-1.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          5. FINAL PROJECT CONSULTATION CTA (Venetian Red Background)
         ========================================================================= */}
      <section className="bg-primary text-white py-16 sm:py-20 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-bl-full opacity-30 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-tr-full opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 mb-4">
              <Layers className="w-4 h-4 text-accent" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-wider text-white font-heading">
                {dict.projectCta?.eyebrow || "Kebutuhan Proyek"}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 font-heading">
              {dict.projectCta?.heading || "Punya Area yang Ingin Dipasang Paving Block?"}
            </h2>
            <p className="text-base sm:text-lg opacity-90 leading-relaxed font-sans max-w-2xl mx-auto mb-8 sm:mb-10">
              {dict.projectCta?.description || "Kirimkan informasi lokasi, perkiraan luas area, dan kebutuhan pekerjaan untuk memulai konsultasi."}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={contactDict.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-white hover:bg-stone-100 text-primary px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold text-base shadow-lg transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white min-h-[44px]"
              >
                <MessageSquare className="w-4 h-4 mr-2 text-primary" aria-hidden="true" />
                {dict.projectCta?.button || "Diskusikan Proyek Anda"}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

