import { dictionaries, isValidLocale, Locale } from "@/lib/dictionary";
import { constructPageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import Gallery from "@/components/Gallery";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { MessageSquare, ArrowRight, Factory, Calendar, Move, Award } from "lucide-react";
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

  return (
    <>
      <JsonLd page="projectsProduction" lang={currentLang} />

      <PageHero
        eyebrow={dict.heroEyebrow}
        title={dict.heroTitle}
        description={dict.heroDesc}
      />

      {/* =========================================================================
          2. GALLERY SECTION
         ========================================================================= */}
      <section className="bg-white py-14 sm:py-18 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Gallery 
            images={productionImages} 
            featuredItems={featuredList}
            featuredHeader={{
              eyebrow: currentLang === 'en' ? "Featured Visuals" : "Visual Unggulan",
              title: currentLang === 'en' ? "Production Highlights" : "Sorotan Produksi",
              subtitle: dict.heroDesc,
            }}
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
          3. PRODUCTION FACT STRIP
         ========================================================================= */}
      <section className="bg-surface border-y border-slate-200/80 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-x-0 md:divide-x md:divide-slate-200">
              <div className="flex flex-col items-center text-center px-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 text-primary">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1 font-heading">{dict.stripSince}</h3>
                <p className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">{dict.stripSinceValue}</p>
              </div>
              <div className="flex flex-col items-center text-center px-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 text-primary">
                  <Move className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1 font-heading">{dict.stripArea}</h3>
                <p className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">{dict.stripAreaValue}</p>
              </div>
              <div className="flex flex-col items-center text-center px-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 text-primary">
                  <Factory className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1 font-heading">{dict.stripMachine}</h3>
                <p className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">{dict.stripMachineValue}</p>
              </div>
              <div className="flex flex-col items-center text-center px-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 text-primary">
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
          4. CTA SECTION
         ========================================================================= */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="bg-surface-card rounded-[2rem] p-8 sm:p-12 border border-slate-200/80 shadow-xs text-center">
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
