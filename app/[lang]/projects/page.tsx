import { dictionaries, isValidLocale, Locale } from "@/lib/dictionary";
import { constructPageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import Gallery from "@/components/Gallery";
import JsonLd from "@/components/JsonLd";
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

  return (
    <>
      <JsonLd page="projects" lang={currentLang} />
      <div className="bg-white min-h-screen py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10 md:mb-14 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B2447] tracking-tight font-heading">
              {dict.title}
            </h1>
            <div className="w-16 sm:w-24 h-1 sm:h-1.5 bg-[#D90429] mx-auto mt-4 sm:mt-6 mb-4 sm:mb-6 rounded-full" />
            <p className="text-base sm:text-lg text-[#0B2447]/80 max-w-2xl mx-auto font-sans leading-relaxed">
              {dict.description}
            </p>
          </ScrollReveal>

          <div className="mb-12 sm:mb-16 md:mb-20">
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
        </div>
      </div>
    </>
  );
}
