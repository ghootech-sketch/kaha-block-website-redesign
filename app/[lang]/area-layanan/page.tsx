import { isValidLocale, Locale } from "@/lib/dictionary";
import { constructPageMetadata } from "@/lib/metadata";
import { AREA_HUB_DATA } from "@/lib/local-service-data";
import { BUSINESS_FACTS } from "@/lib/business-facts";
import { notFound } from "next/navigation";
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
  Factory,
} from "lucide-react";
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
  return constructPageMetadata("areaLayanan", lang as Locale);
}

export default async function AreaLayananHubPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    notFound();
  }
  const currentLang = lang as Locale;
  const isEn = currentLang === "en";
  const data = AREA_HUB_DATA[currentLang];

  return (
    <>
      <JsonLd page="areaLayanan" lang={currentLang} />

      <PageHero
        eyebrow={data.eyebrow}
        title={data.h1}
        description={data.heroDesc}
      />

      {/* Main Factory Location & Logistics Notice */}
      <section className="bg-surface border-b border-stone-200/40 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-2 border-primary/20 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold font-heading mb-4">
                  <Factory className="w-4 h-4" aria-hidden="true" />
                  <span>
                    {isEn ? "Single Central Plant" : "Pabrik Utama Cisauk Tangerang"}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading text-slate-900 mb-3">
                  {isEn
                    ? "Direct Plant Shipments Across Greater Jakarta"
                    : "Pengiriman Langsung Pabrik ke Seluruh Wilayah Jabodetabek"}
                </h2>
                <p className="text-slate-600 text-sm sm:text-base font-sans leading-relaxed mb-4">
                  {data.hubIntro}
                </p>
                <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-700 font-semibold">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-primary" aria-hidden="true" />
                    {BUSINESS_FACTS.address.street},{" "}
                    {BUSINESS_FACTS.address.locality}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Truck className="w-4 h-4 text-accent" aria-hidden="true" />
                    {data.deliveryStatement}
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
                  <span>{isEn ? "Contact Factory" : "Hubungi Pabrik"}</span>
                </a>
                <a
                  href={BUSINESS_FACTS.maps.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-surface hover:bg-stone-200/60 text-slate-900 font-semibold px-6 py-3.5 rounded-xl inline-flex items-center justify-center gap-2 text-sm border border-slate-300 transition-colors min-h-[44px]"
                >
                  <MapPin className="w-4 h-4 text-primary" aria-hidden="true" />
                  <span>{isEn ? "Open Google Maps" : "Buka Google Maps"}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional City Hub Cards Grid */}
      <section className="bg-white border-b border-stone-200/40 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent block mb-2 font-heading">
              {isEn ? "Regional Coverage" : "Cakupan Area Layanan"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 tracking-tight">
              {isEn
                ? "Select Your Region in Jabodetabek"
                : "Pilih Wilayah Proyek Anda di Jabodetabek"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {data.regionalCards.map((card, idx) => (
              <ScrollReveal key={card.slug} delay={0.05 * idx} className="h-full">
                <div className="bg-surface border border-slate-200 rounded-xl p-6 sm:p-7 h-full flex flex-col justify-between hover:border-primary transition-colors shadow-xs group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                        <MapPin className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                        {card.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-heading text-slate-900 mb-1 group-hover:text-primary transition-colors">
                      {card.name}
                    </h3>
                    <p className="text-xs text-primary font-bold font-heading mb-3">
                      {card.subdivisionText}
                    </p>
                    <p className="text-slate-600 text-sm font-sans leading-relaxed mb-6">
                      {card.description}
                    </p>
                  </div>

                  <Link
                    href={`/${currentLang}/area-layanan/${card.slug}`}
                    className="bg-primary group-hover:bg-primary-hover text-white font-bold py-3 px-5 rounded-xl flex items-center justify-between text-sm transition-colors min-h-[44px]"
                  >
                    <span>
                      {isEn ? `Paving Block ${card.name}` : `Paving Block ${card.name}`}
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Hub FAQs */}
      <section className="bg-surface border-b border-stone-200/40 py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 tracking-tight">
              {isEn
                ? "Frequently Asked Questions About Regional Service"
                : "Pertanyaan Umum Layanan Wilayah Jabodetabek"}
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
                {isEn ? "WhatsApp Consultation" : "Konsultasi WhatsApp"}
              </span>
            </a>
            <Link
              href={`/${currentLang}/contact`}
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
