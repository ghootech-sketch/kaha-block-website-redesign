import { dictionaries, isValidLocale, Locale } from "@/lib/dictionary";
import { constructPageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import Gallery from "@/components/Gallery";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";
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

  return (
    <>
      <JsonLd page="projects" lang={currentLang} />
      <div className="bg-white min-h-screen py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* =========================================================================
              EDITORIAL INTRO SECTION
             ========================================================================= */}
          <ScrollReveal className="text-center mb-10 md:mb-14">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#D90429] mb-2 block font-heading">
              {dict.editorialIntro?.eyebrow || dict.title}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B2447] tracking-tight font-heading">
              {dict.editorialIntro?.title || dict.title}
            </h1>
            <div className="w-16 sm:w-24 h-1 sm:h-1.5 bg-[#D90429] mx-auto mt-4 sm:mt-6 mb-4 sm:mb-6 rounded-full" />
            <p className="text-base sm:text-lg text-[#0B2447]/80 max-w-3xl mx-auto font-sans leading-relaxed mb-8">
              {dict.editorialIntro?.description || dict.description}
            </p>

            {/* 4 Scope Badges */}
            {dict.editorialIntro?.scopeItems && (
              <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-4xl mx-auto">
                {dict.editorialIntro.scopeItems.map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-xs sm:text-sm font-semibold text-[#0B2447]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-[#D90429]" aria-hidden="true" />
                    {item}
                  </span>
                ))}
              </div>
            )}
          </ScrollReveal>

          {/* =========================================================================
              26-IMAGE DOCUMENTATION GALLERY
             ========================================================================= */}
          <div className="mb-16 sm:mb-20 md:mb-24">
            <Gallery 
              images={Array.from({ length: 26 }, (_, i) => `/images/projects/kaha-block-dokumentasi-${String(i + 1).padStart(2, '0')}.webp`)} 
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

          {/* =========================================================================
              SECTION: BAGAIMANA KAMI MENDAMPINGI KEBUTUHAN PROYEK (4 Steps)
             ========================================================================= */}
          {dict.projectSupport && (
            <ScrollReveal className="bg-[#FAF9F6] border border-gray-200/80 rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xs">
              <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#D90429] mb-2 block font-heading">
                  {dict.projectSupport.eyebrow}
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-[#0B2447]">
                  {dict.projectSupport.title}
                </h2>
                <div className="w-16 h-1 bg-[#D90429] mx-auto mt-4 mb-4 rounded-full" />
                <p className="text-sm sm:text-base text-slate-600 font-sans">
                  {dict.projectSupport.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {dict.projectSupport.steps.map((step) => (
                  <div
                    key={step.number}
                    className="bg-white border border-gray-200/80 rounded-2xl p-6 flex flex-col justify-between hover:border-[#0B2447]/30 hover:shadow-xs transition-[border-color,box-shadow] duration-300"
                  >
                    <div>
                      <span className="w-9 h-9 rounded-xl bg-[#0B2447] text-[#FFC300] font-mono text-xs font-bold flex items-center justify-center mb-4">
                        {step.number}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold font-heading text-[#0B2447] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Consultation Action */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-gray-200/60">
                <a
                  href={contactDict.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-[#D90429] hover:bg-[#b50322] text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300] min-h-[44px]"
                >
                  <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                  {dict.projectSupport.ctaText}
                </a>

                <Link
                  href={`/${currentLang}/contact`}
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-white hover:bg-slate-100 text-[#0B2447] border border-gray-300 px-8 py-3.5 rounded-full font-bold text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2447] min-h-[44px]"
                >
                  <span>{currentLang === "id" ? "Lihat Kontak & Lokasi" : "View Contact & Location"}</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" aria-hidden="true" />
                </Link>
              </div>
            </ScrollReveal>
          )}
        </div>
      </div>
    </>
  );
}
