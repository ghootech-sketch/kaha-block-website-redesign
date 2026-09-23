import { BUSINESS_FACTS } from "@/lib/business-facts";
import { dictionaries, isValidLocale, Locale } from "@/lib/dictionary";
import { constructPageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import Gallery from "@/components/Gallery";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageSquare } from "lucide-react";
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

  const featuredList = dict.featured
    ? [dict.featured.item1, dict.featured.item2, dict.featured.item3]
    : [];

  return (
    <>
      <JsonLd page="projects" lang={currentLang} />

      <PageHero
        eyebrow={dict.editorialIntro?.eyebrow || dict.title}
        title={dict.editorialIntro?.title || dict.title}
        description={dict.editorialIntro?.description || dict.description}

      />

      {/* 4 Scope Badges Moved Below Hero */}
      {dict.editorialIntro?.scopeItems && (
        <section className="bg-surface border-b border-slate-200/80 py-8">
          <div className="max-w-[1500px] mx-auto px-6 sm:px-8 xl:px-12">
            <ScrollReveal immediate>
              <div className="flex flex-wrap items-center justify-start gap-2 sm:gap-3">
                {dict.editorialIntro.scopeItems.map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-4 py-2 rounded-lg bg-white border border-slate-200 text-xs sm:text-sm font-semibold text-slate-900 shadow-none"
                  >
                    <CheckCircle2 className="w-4 h-4 mr-2 text-accent" aria-hidden="true" />
                    {item}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* =========================================================================
          2. GALLERY SECTION: FEATURED & ALL 33 DOCUMENTATION PHOTOS (White Canvas)
         ========================================================================= */}
      <section className="bg-white py-16 sm:py-20 lg:py-28 border-b border-stone-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Gallery 
            images={Array.from({ length: 33 }, (_, i) => `/images/projects/kaha-block-dokumentasi-${String(i + 1).padStart(2, '0')}.webp`)} 
            featuredItems={featuredList}
            featuredHeader={dict.featured ? {
              eyebrow: dict.featured.eyebrow,
              title: dict.featured.title,
              subtitle: dict.featured.subtitle,
            } : undefined}
            completeGalleryHeading={dict.completeGalleryHeading}
            completeGallerySubheading={dict.completeGallerySubheading}
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
          3. DOCUMENTATION SCOPE SECTION (Surface Background)
         ========================================================================= */}
      {dict.scope && (
        <section className="bg-surface py-16 sm:py-20 lg:py-28 border-b border-stone-200/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-10 md:mb-14 flex flex-col items-center">
              <div className="flex items-center space-x-3 mb-4">
                <span className="w-8 h-px bg-accent" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 font-heading">
                  {dict.scope.eyebrow}
                </span>
                <span className="w-8 h-px bg-accent" aria-hidden="true" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-slate-900 font-heading tracking-tight mb-4">
                {dict.scope.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-500 font-sans leading-relaxed">
                {dict.scope.subtitle}
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {dict.scope.items.map((item, idx) => (
                <ScrollReveal
                  key={item.number}
                  delay={idx * 0.05}
                  className="flex flex-col group border border-stone-200/40 p-6 sm:p-8 hover:border-accent/40 transition-colors bg-white/50"
                >
                  <div className="mb-4">
                    <span className="text-3xl font-light font-heading text-slate-300 group-hover:text-accent transition-colors block mb-4">
                      {item.number}
                    </span>
                    <div className="h-px w-8 bg-accent" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-medium text-slate-900 font-heading mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 font-sans leading-relaxed">
                    {item.desc}
                  </p>
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
        <section className="bg-white py-16 sm:py-20 lg:py-28 border-b border-stone-200/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-10 md:mb-14 flex flex-col items-center">
              <div className="flex items-center space-x-3 mb-4">
                <span className="w-8 h-px bg-accent" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 font-heading">
                  {dict.projectSupport.eyebrow}
                </span>
                <span className="w-8 h-px bg-accent" aria-hidden="true" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-slate-900 font-heading tracking-tight mb-4">
                {dict.projectSupport.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-500 font-sans leading-relaxed">
                {dict.projectSupport.subtitle}
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {dict.projectSupport.steps.map((step, idx) => (
                <ScrollReveal
                  key={step.number}
                  delay={idx * 0.04}
                  className="flex flex-col group border border-stone-200/40 p-6 sm:p-8 hover:border-accent/40 transition-colors bg-surface/50 text-center items-center"
                >
                  <span className="flex items-center justify-center w-12 h-12 rounded-full border border-accent text-slate-900 font-heading font-medium text-lg mb-6 group-hover:bg-accent transition-colors">
                    {step.number}
                  </span>
                  <h3 className="text-lg sm:text-xl font-medium text-slate-900 font-heading mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 font-sans leading-relaxed">
                    {step.desc}
                  </p>
                </ScrollReveal>
              ))}
            </div>

            {/* Link to Contact */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/${currentLang}/contact`}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-dark hover:bg-slate-800 text-white px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent min-h-[44px] uppercase tracking-wide font-heading"
              >
                <span>{currentLang === "id" ? "Lihat Kontak & Lokasi Pabrik" : "View Contact & Factory Location"}</span>
                <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          5. FINAL PROJECT CONSULTATION CTA (Dark Background)
         ========================================================================= */}
      <section className="bg-dark text-white py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up" className="flex flex-col items-center">
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-8 h-px bg-accent" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent font-heading">
                {dict.projectCta?.eyebrow || "Kebutuhan Proyek"}
              </span>
              <span className="w-8 h-px bg-accent" aria-hidden="true" />
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white font-heading tracking-tight mb-6">
              {dict.projectCta?.heading || "Punya Area yang Ingin Dipasang Paving Block?"}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-400 font-sans leading-relaxed mb-10 max-w-2xl mx-auto">
              {dict.projectCta?.description || "Kirimkan informasi lokasi, perkiraan luas area, dan kebutuhan pekerjaan untuk memulai konsultasi."}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={BUSINESS_FACTS.contact.whatsappPrimaryUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent uppercase font-heading tracking-wide"
              >
                <MessageSquare className="w-4 h-4 mr-2.5" aria-hidden="true" />
                {dict.projectCta?.button || "Diskusikan Proyek Anda"}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

