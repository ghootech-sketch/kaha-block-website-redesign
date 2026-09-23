import { isValidLocale, Locale } from "@/lib/dictionary";
import { constructPageMetadata } from "@/lib/metadata";
import { INSTALLATION_DATA } from "@/lib/local-service-data";
import { BUSINESS_FACTS } from "@/lib/business-facts";
import { notFound } from "next/navigation";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import {
  ChevronDown,
  Layers,
  HardHat,
  Ruler,
  ShieldCheck,
  MapPin,
  MessageSquare,
  ArrowRight,
  Wrench,
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
  return constructPageMetadata("jasaPemasangan", lang as Locale);
}

export default async function JasaPemasanganPage({
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
  const data = INSTALLATION_DATA[currentLang];

  const advantageIcons = [ShieldCheck, HardHat, Ruler, Layers];

  return (
    <>
      <JsonLd page="jasaPemasangan" lang={currentLang} />

      <PageHero
        eyebrow={data.eyebrow}
        title={data.h1}
        description={data.heroDesc}
      />

      {/* Overview & Key Advantages Grid */}
      <section className="bg-surface border-b border-stone-200/40 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 tracking-tight">
              {data.advantagesTitle}
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base font-sans leading-relaxed">
              {data.advantagesIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {data.advantages.map((item, idx) => {
              const IconComp = advantageIcons[idx % advantageIcons.length];
              return (
                <ScrollReveal key={idx} delay={0.05 * idx} className="h-full">
                  <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-7 h-full flex flex-col justify-between shadow-xs">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                        <IconComp className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm font-sans leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contractor Focus Banner */}
      {data.contractorSectionTitle && (
        <section className="bg-white border-b border-stone-200/40 py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-surface border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-3 mb-3">
              <HardHat className="w-6 h-6 text-primary shrink-0" aria-hidden="true" />
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
                {data.contractorSectionTitle}
              </h2>
            </div>
            <p className="text-slate-600 text-sm sm:text-base font-sans leading-relaxed">
              {data.contractorSectionDesc}
            </p>
          </div>
        </section>
      )}

      {/* Scope of Work */}
      <section className="bg-white border-b border-stone-200/40 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent block mb-2 font-heading">
              {isEn ? "Scope of Services" : "Cakupan Pekerjaan"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 tracking-tight">
              {data.scopeTitle}
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base font-sans leading-relaxed">
              {data.scopeIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.scopes.map((scopeItem, idx) => (
              <ScrollReveal key={idx} delay={0.05 * idx} className="h-full">
                <div className="bg-surface border border-slate-200 rounded-xl p-6 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4">
                      <Wrench className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
                      {scopeItem.title}
                    </h3>
                    <p className="text-slate-600 text-sm font-sans leading-relaxed">
                      {scopeItem.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow & Process Steps */}
      <section className="bg-surface border-b border-stone-200/40 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary block mb-2 font-heading">
              {isEn ? "Standard Operating Procedure" : "Prosedur Pemasangan Lapangan"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 tracking-tight">
              {data.workflowTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {data.workflowSteps.map((step, idx) => (
              <ScrollReveal key={idx} delay={0.05 * idx} className="h-full">
                <div className="bg-white border border-slate-200 rounded-xl p-6 h-full flex flex-col relative shadow-xs">
                  <span className="text-3xl font-black font-heading text-primary/20 mb-3 block">
                    0{step.step}
                  </span>
                  <h3 className="text-base font-bold font-heading text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm font-sans leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Service Coverage Links */}
      <section className="bg-white border-b border-stone-200/40 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent block mb-2 font-heading">
              {isEn ? "Service Coverage" : "Cakupan Wilayah Layanan"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 tracking-tight">
              {data.coverageTitle}
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base font-sans leading-relaxed">
              {data.coverageDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
            {data.regionalLinks.map((linkItem) => (
              <Link
                key={linkItem.slug}
                href={`/${currentLang}/area-layanan/${linkItem.slug}`}
                className="bg-surface border border-slate-200 hover:border-primary rounded-xl p-5 block transition-all duration-200 hover:shadow-md group min-h-[44px]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                  <h3 className="text-base font-bold font-heading text-slate-900 group-hover:text-primary transition-colors">
                    {linkItem.name}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 line-clamp-2 mb-3">
                  {linkItem.desc}
                </p>
                <div className="flex items-center text-xs font-bold text-primary gap-1">
                  <span>{isEn ? "View Regional Info" : "Lihat Info Area"}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="bg-surface border-b border-stone-200/40 py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 tracking-tight">
              {isEn
                ? "Frequently Asked Questions About Paving Installation"
                : "Pertanyaan Umum Jasa Pemasangan Paving Block"}
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

      {/* Direct Contact / Consultation CTA */}
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
