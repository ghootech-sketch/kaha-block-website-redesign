import { Locale } from "@/lib/dictionary";
import { SchemaPageType } from "@/lib/schema";
import { REGIONAL_PAGES_DATA, RegionalSlug } from "@/lib/local-service-data";
import { BUSINESS_FACTS } from "@/lib/business-facts";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import {
  MapPin,
  Truck,
  ChevronDown,
  ArrowRight,
  MessageSquare,
  ShieldCheck,
  Factory,
  HardHat,
  Building2,
} from "lucide-react";

interface RegionalPageTemplateProps {
  slug: RegionalSlug;
  lang: Locale;
  schemaPage: SchemaPageType;
}

export default function RegionalPageTemplate({
  slug,
  lang,
  schemaPage,
}: RegionalPageTemplateProps) {
  const isEn = lang === "en";
  const data = REGIONAL_PAGES_DATA[slug][lang];

  // Get other regional slugs for cross-linking
  const otherRegions = (
    Object.keys(REGIONAL_PAGES_DATA) as RegionalSlug[]
  ).filter((s) => s !== slug);

  return (
    <>
      <JsonLd page={schemaPage} lang={lang} />

      <PageHero
        eyebrow={data.eyebrow}
        title={data.h1}
        description={data.heroDesc}
      />

      {/* Factual Factory Origin & Logistics Transparency Banner */}
      <section className="bg-surface border-b border-stone-200/40 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-2 border-primary/20 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold font-heading mb-4">
                  <Factory className="w-4 h-4" aria-hidden="true" />
                  <span>
                    {isEn
                      ? "Factory Plant: Cisauk, Tangerang Regency"
                      : "Pabrik Utama: Cisauk, Kabupaten Tangerang"}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading text-slate-900 mb-3">
                  {isEn
                    ? "Direct Plant Shipments & Guaranteed Offloading"
                    : "Pengiriman Langsung Pabrik & Penurunan Material"}
                </h2>
                <p className="text-slate-600 text-sm sm:text-base font-sans leading-relaxed mb-4">
                  {data.factoryContextNotice}
                </p>
                <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-700 font-semibold">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-primary" aria-hidden="true" />
                    {BUSINESS_FACTS.address.street},{" "}
                    {BUSINESS_FACTS.address.locality}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Truck className="w-4 h-4 text-accent" aria-hidden="true" />
                    {data.deliveryNotice}
                  </span>
                </div>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
                <a
                  href={BUSINESS_FACTS.contact.whatsappPrimaryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary-hover text-white font-bold px-6 py-3.5 rounded-xl inline-flex items-center justify-center gap-2 text-sm transition-colors min-h-[44px]"
                >
                  <MessageSquare className="w-4 h-4" aria-hidden="true" />
                  <span>
                    {isEn ? "Request Quote" : "Minta Penawaran Harga"}
                  </span>
                </a>
                <Link
                  href={`/${lang}/jasa-pemasangan-paving-block`}
                  className="bg-surface hover:bg-stone-200/60 text-slate-900 font-semibold px-6 py-3.5 rounded-xl inline-flex items-center justify-center gap-2 text-sm border border-slate-300 transition-colors min-h-[44px]"
                >
                  <HardHat className="w-4 h-4 text-primary" aria-hidden="true" />
                  <span>
                    {isEn ? "Installation Info" : "Info Jasa Pasang"}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Grid */}
      <section className="bg-white border-b border-stone-200/40 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.keyBenefits.map((benefit, idx) => (
              <ScrollReveal key={idx} delay={0.05 * idx} className="h-full">
                <div className="bg-surface border border-slate-200 rounded-xl p-6 h-full flex flex-col justify-between shadow-xs">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                      <ShieldCheck className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 text-sm font-sans leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Districts & Subregions */}
      <section className="bg-surface border-b border-stone-200/40 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent block mb-2 font-heading">
              {isEn ? "Subregion Coverage" : "Cakupan Wilayah"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 tracking-tight">
              {data.subregionsTitle}
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base font-sans leading-relaxed">
              {data.subregionsIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {data.subregions.map((sub, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-5 hover:border-primary transition-colors shadow-xs"
              >
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                  <h3 className="text-base font-bold font-heading text-slate-900">
                    {sub.name}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  {sub.useCase}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-white border-b border-stone-200/40 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary block mb-2 font-heading">
              {isEn ? "Applications" : "Aplikasi Proyek"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 tracking-tight">
              {data.useCaseSectionTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.useCases.map((uc, idx) => (
              <ScrollReveal key={idx} delay={0.05 * idx} className="h-full">
                <div className="bg-surface border border-slate-200 rounded-xl p-6 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4">
                      <Building2 className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
                      {uc.title}
                    </h3>
                    <p className="text-slate-600 text-sm font-sans leading-relaxed">
                      {uc.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Service Context Notice */}
      <section className="bg-surface border-b border-stone-200/40 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-3">
            <HardHat className="w-6 h-6 text-primary" aria-hidden="true" />
            <h2 className="text-xl font-bold font-heading text-slate-900">
              {isEn ? "Professional Laying & Sub-Base Preparation" : "Layanan Pemasangan Paving Block Presisi"}
            </h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base font-sans leading-relaxed">
            {data.installationNotice}
          </p>
        </div>
      </section>

      {/* Trust Facts Grid */}
      <section className="bg-white border-b border-stone-200/40 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 tracking-tight">
              {data.trustFactsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.trustFacts.map((tf, idx) => (
              <div
                key={idx}
                className="bg-surface border border-slate-200 rounded-xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <ShieldCheck className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-bold font-heading text-slate-900 mb-1">
                    {tf.label}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm font-sans leading-relaxed">
                    {tf.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City Specific FAQs */}
      <section className="bg-surface border-b border-stone-200/40 py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 tracking-tight">
              {isEn
                ? "Frequently Asked Questions"
                : "Pertanyaan Umum Pengadaan & Pemasangan"}
            </h2>
          </div>

          <div className="space-y-4">
            {data.faqs.map((item, idx) => (
              <details
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-6 group [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer font-bold font-heading text-slate-900 text-base sm:text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm min-h-[44px]">
                  <span>{item.q}</span>
                  <ChevronDown className="w-5 h-5 text-slate-500 shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-slate-600 text-sm sm:text-base font-sans leading-relaxed border-t border-slate-100 pt-4">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Other Regions Navigation */}
      <section className="bg-white border-b border-stone-200/40 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900">
              {isEn
                ? "Explore Other Service Regions in Jabodetabek"
                : "Lihat Area Layanan Paving Block Lainnya di Jabodetabek"}
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {otherRegions.map((otherSlug) => {
              const otherReg = REGIONAL_PAGES_DATA[otherSlug][lang];
              return (
                <Link
                  key={otherSlug}
                  href={`/${lang}/area-layanan/${otherSlug}`}
                  className="bg-surface border border-slate-200 hover:border-primary rounded-xl p-4 text-center block transition-all group min-h-[44px]"
                >
                  <MapPin className="w-4 h-4 text-primary mx-auto mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-xs sm:text-sm font-bold font-heading text-slate-900 block capitalize">
                    Paving Block {otherReg.slug}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold font-heading tracking-tight mb-4">
            {data.ctaHeading}
          </h2>
          <p className="text-slate-200 text-sm sm:text-lg max-w-2xl mx-auto mb-8 font-sans leading-relaxed">
            {data.ctaDesc}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={BUSINESS_FACTS.contact.whatsappPrimaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent-hover text-slate-900 font-bold px-7 py-3.5 rounded-xl inline-flex items-center gap-2.5 transition-colors text-sm sm:text-base shadow-sm min-h-[44px]"
            >
              <MessageSquare className="w-5 h-5" aria-hidden="true" />
              <span>
                {isEn ? "WhatsApp Fast Quote" : "Konsultasi Fast-Response"}
              </span>
            </a>
            <Link
              href={`/${lang}/contact`}
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-xl inline-flex items-center gap-2 transition-colors text-sm sm:text-base border border-white/20 min-h-[44px]"
            >
              <span>{isEn ? "Contact Page" : "Halaman Kontak"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
