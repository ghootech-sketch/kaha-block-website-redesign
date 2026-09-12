import { dictionaries, isValidLocale, Locale } from "@/lib/dictionary";
import { BUSINESS_FACTS } from "@/lib/business-facts";
import { constructPageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Instagram,
  Facebook,
  ExternalLink,
  ChevronDown,
  CheckCircle2,
  Truck,
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
  return constructPageMetadata("contact", lang as Locale);
}

export default async function Contact({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    notFound();
  }
  const currentLang = lang as Locale;
  const dict = dictionaries[currentLang].contact;

  return (
    <>
      <JsonLd page="contact" lang={currentLang} />

      <PageHero
        eyebrow={dict.eyebrow}
        title={dict.title}
        description={dict.description}
      />

      {/* =========================================================================
          2. FOUR QUICK CONTACT CARDS (WhatsApp 1, WhatsApp 2, Email, Instagram)
         ========================================================================= */}
      <section className="bg-surface border-b border-stone-200/40 py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-10 sm:mb-14">
            {/* Card 1: WhatsApp 1 */}
            <ScrollReveal delay={0.05} className="h-full">
              <a
                href={BUSINESS_FACTS.contact.whatsappPrimaryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-slate-200 hover:border-primary rounded-xl p-6 sm:p-7 flex flex-col justify-between h-full shadow-xs hover:shadow-md transition-[border-color,box-shadow] duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent min-h-[44px]"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                    <MessageSquare className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1 font-heading">
                    {dict.quickActions.whatsappLabel}
                  </span>
                  <p className="text-xl sm:text-2xl font-bold font-heading text-slate-900 mb-2 tracking-tight">
                    {BUSINESS_FACTS.contact.whatsappPrimaryDisplay}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                    {dict.quickActions.whatsappDesc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-bold text-primary">
                  <span>{dict.quickActions.whatsappAction}</span>
                  <ExternalLink className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </div>
              </a>
            </ScrollReveal>

            {/* Card 2: WhatsApp 2 */}
            <ScrollReveal delay={0.1} className="h-full">
              <a
                href={BUSINESS_FACTS.contact.whatsappSecondaryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-slate-200 hover:border-primary rounded-xl p-6 sm:p-7 flex flex-col justify-between h-full shadow-xs hover:shadow-md transition-[border-color,box-shadow] duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent min-h-[44px]"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                    <MessageSquare className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1 font-heading">
                    {dict.quickActions.whatsapp2Label}
                  </span>
                  <p className="text-xl sm:text-2xl font-bold font-heading text-slate-900 mb-2 tracking-tight">
                    {BUSINESS_FACTS.contact.whatsappSecondaryDisplay}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                    {dict.quickActions.whatsapp2Desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-bold text-primary">
                  <span>{dict.quickActions.whatsapp2Action}</span>
                  <ExternalLink className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </div>
              </a>
            </ScrollReveal>

            {/* Card 3: Email */}
            <ScrollReveal delay={0.1} className="h-full">
              <a
                href={`mailto:${dict.quickActions.emailAddress}`}
                className="bg-white border border-slate-200 hover:border-accent rounded-xl p-6 sm:p-7 flex flex-col justify-between h-full shadow-xs hover:shadow-md transition-[border-color,box-shadow] duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent min-h-[44px]"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-slate-900 border border-accent/30 flex items-center justify-center mb-5">
                    <Mail className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1 font-heading">
                    {dict.quickActions.emailLabel}
                  </span>
                  <p className="text-lg sm:text-xl font-bold font-sans text-slate-900 mb-2 break-all">
                    {dict.quickActions.emailAddress}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                    {dict.quickActions.emailDesc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-bold text-slate-800 group-hover:text-primary transition-colors">
                  <span>{dict.quickActions.emailAction}</span>
                  <ExternalLink className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </div>
              </a>
            </ScrollReveal>

            {/* Card 3: Instagram */}
            <ScrollReveal delay={0.15} className="h-full">
              <a
                href={BUSINESS_FACTS.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-slate-200 hover:border-accent rounded-xl p-6 sm:p-7 flex flex-col justify-between h-full shadow-xs hover:shadow-md transition-[border-color,box-shadow] duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent min-h-[44px]"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-slate-900 border border-accent/30 flex items-center justify-center mb-5">
                    <Instagram className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1 font-heading">
                    {dict.quickActions.instagramLabel}
                  </span>
                  <p className="text-xl sm:text-2xl font-bold font-heading text-slate-900 mb-2 tracking-tight">
                    {dict.quickActions.instagramHandle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                    {dict.quickActions.instagramDesc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-bold text-slate-800 group-hover:text-primary transition-colors">
                  <span>{dict.quickActions.instagramAction}</span>
                  <ExternalLink className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </div>
              </a>
            </ScrollReveal>
          </div>

          {/* =========================================================================
              3. FULL-WIDTH FACTORY MAP
             ========================================================================= */}
          <ScrollReveal className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-xs overflow-hidden mb-6 sm:mb-8">
            {/* Map Header */}
            <div className="p-6 sm:p-8 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white">
              <div className="space-y-1">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-accent block mb-1 font-heading">
                  {dict.factoryLocationEyebrow}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                  {dict.factoryLocationHeading}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 font-sans flex items-start sm:items-center gap-1.5 pt-0.5">
                  <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" />
                  <span>{dict.address}</span>
                </p>
              </div>
              <div className="pt-2 sm:pt-0">
                <a
                  href={dict.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 hover:border-accent bg-white hover:bg-slate-50 text-slate-900 font-semibold text-xs sm:text-sm transition-colors shrink-0 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <MapPin className="w-4 h-4 text-accent" aria-hidden="true" />
                  <span>{dict.openGoogleMaps}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Map Iframe with Full-Area Clickable Overlay */}
            <div className="relative group w-full h-[360px] sm:h-[460px] lg:h-[520px] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.2738484247357!2d106.64021975454531!3d-6.358589787390475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e46e589e68b5%3A0xfbfdcc6d2b296521!2sPaving%20Block%20Kaha!5e0!3m2!1sid!2sid!4v1788076236518!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title={dict.mapIframeTitle}
                className="w-full h-full block pointer-events-none"
              />
              {/* Full-area clickable overlay to Google Maps */}
              <a
                href={dict.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={
                  lang === "en"
                    ? "Open Kaha Block factory location in Google Maps"
                    : "Buka lokasi pabrik Kaha Block di Google Maps"
                }
                className="absolute inset-0 z-10 flex items-start justify-end p-3 sm:p-4 bg-black/0 hover:bg-black/5 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
              >
                {/* One clear visual hint: Open in Google Maps ↗ (>= 44px touch target) */}
                <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/95 group-hover:bg-white text-slate-900 group-hover:text-primary font-semibold text-xs sm:text-sm shadow-md border border-slate-200/80 backdrop-blur-xs transition-all min-h-[44px]">
                  <MapPin className="w-4 h-4 text-accent" aria-hidden="true" />
                  <span>
                    {lang === "en" ? "Open in Google Maps" : "Buka di Google Maps"}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" />
                </span>
              </a>
            </div>
          </ScrollReveal>

          {/* =========================================================================
              4. ADDITIONAL INFORMATION STRIP
             ========================================================================= */}
          <ScrollReveal className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Column 1: Alternative Contact */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 text-slate-900 border border-accent/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-slate-900" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1 font-heading">
                    {dict.infoStrip.altContactLabel}
                  </span>
                  <a
                    href={dict.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg font-bold text-slate-900 hover:text-primary transition-colors inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                  >
                    {dict.infoStrip.altContactValue}
                  </a>
                  <p className="text-xs sm:text-sm text-slate-600 font-sans mt-1 leading-relaxed">
                    {dict.infoStrip.altContactDesc}
                  </p>
                  <div className="pt-2.5 mt-2.5 border-t border-slate-100">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-0.5 font-heading">
                      {dict.infoStrip.secondaryContactLabel}
                    </span>
                    <a
                      href={`tel:${BUSINESS_FACTS.contact.secondaryPhoneE164}`}
                      className="text-sm sm:text-base font-bold text-slate-700 hover:text-primary transition-colors inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                    >
                      {dict.infoStrip.secondaryContactValue}
                    </a>
                  </div>
                </div>
              </div>

              {/* Column 2: Service Coverage */}
              <div className="flex items-start gap-4 md:border-l md:border-slate-100 md:pl-8">
                <div className="w-10 h-10 rounded-xl bg-accent/10 text-slate-900 border border-accent/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Truck className="w-5 h-5 text-slate-900" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1 font-heading">
                    {dict.infoStrip.coverageLabel}
                  </span>
                  <p className="text-base sm:text-lg font-bold text-slate-900">
                    {dict.infoStrip.coverageValue}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 font-sans mt-1 leading-relaxed">
                    {dict.infoStrip.coverageDesc}
                  </p>
                </div>
              </div>

              {/* Column 3: Facebook */}
              <div className="flex items-start gap-4 md:border-l md:border-slate-100 md:pl-8">
                <div className="w-10 h-10 rounded-xl bg-accent/10 text-slate-900 border border-accent/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Facebook className="w-5 h-5 text-slate-900" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1 font-heading">
                    {dict.infoStrip.facebookLabel}
                  </span>
                  <a
                    href={BUSINESS_FACTS.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg font-bold text-slate-900 hover:text-primary transition-colors inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                  >
                    {dict.infoStrip.facebookValue}
                  </a>
                  <p className="text-xs sm:text-sm text-slate-600 font-sans mt-1 leading-relaxed">
                    {dict.infoStrip.facebookDesc}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          5. CONSULTATION PREPARATION CHECKLIST (White Section)
         ========================================================================= */}
      {dict.prepChecklist && (
        <section className="bg-white py-16 sm:py-20 lg:py-28 border-b border-stone-200/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-10 md:mb-14 flex flex-col items-center">
              <div className="flex items-center space-x-3 mb-4">
                <span className="w-8 h-px bg-accent" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 font-heading">
                  {dict.prepChecklist.eyebrow}
                </span>
                <span className="w-8 h-px bg-accent" aria-hidden="true" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-slate-900 font-heading tracking-tight mb-4">
                {dict.prepChecklist.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-500 font-sans leading-relaxed">
                {dict.prepChecklist.subtitle}
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {dict.prepChecklist.items.map((item, idx) => (
                <ScrollReveal
                  key={item.number}
                  delay={idx * 0.04}
                  className="flex flex-col group border border-stone-200/40 p-6 sm:p-8 hover:border-accent/40 transition-colors bg-surface/50"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-3xl font-light font-heading text-slate-300 group-hover:text-accent transition-colors block">
                      {item.number}
                    </span>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600/80" aria-hidden="true" />
                  </div>
                  <div className="h-px w-8 bg-accent mb-4" aria-hidden="true" />
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
          6. WHAT HAPPENS NEXT (Process Timeline on Surface Background)
         ========================================================================= */}
      {dict.processFlow && (
        <section className="bg-surface py-16 sm:py-20 lg:py-28 border-b border-stone-200/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-10 md:mb-14 flex flex-col items-center">
              <div className="flex items-center space-x-3 mb-4">
                <span className="w-8 h-px bg-accent" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 font-heading">
                  {dict.processFlow.eyebrow}
                </span>
                <span className="w-8 h-px bg-accent" aria-hidden="true" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-slate-900 font-heading tracking-tight mb-4">
                {dict.processFlow.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-500 font-sans leading-relaxed">
                {dict.processFlow.subtitle}
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {dict.processFlow.steps.map((step, idx) => (
                <ScrollReveal
                  key={step.number}
                  delay={idx * 0.04}
                  className="flex flex-col group border border-stone-200/40 p-6 sm:p-8 hover:border-accent/40 transition-colors bg-white/50 text-center items-center"
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
          </div>
        </section>
      )}

      {/* =========================================================================
          7. CONTACT FAQ (Semantic Details & Summary on White Background)
         ========================================================================= */}
      {dict.faq && (
        <section className="bg-white py-16 sm:py-20 lg:py-28 border-b border-stone-200/40">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-10 md:mb-14 flex flex-col items-center">
              <div className="flex items-center space-x-3 mb-4">
                <span className="w-8 h-px bg-accent" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 font-heading">
                  {dict.faq.eyebrow}
                </span>
                <span className="w-8 h-px bg-accent" aria-hidden="true" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-slate-900 font-heading tracking-tight mb-4">
                {dict.faq.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-500 font-sans leading-relaxed">
                {dict.faq.subtitle}
              </p>
            </ScrollReveal>

            <div className="space-y-4">
              {dict.faq.items.map((item, index) => (
                <ScrollReveal key={index} delay={index * 0.03}>
                  <details
                    className="group border border-stone-200/40 open:border-accent/40 transition-all duration-200 hover:border-accent/40 bg-white"
                  >
                    <summary className="flex items-center justify-between p-5 sm:p-6 cursor-pointer list-none select-none font-heading font-medium text-base sm:text-lg text-slate-900 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-none">
                      <span className="pr-4">{item.q}</span>
                      <span className="shrink-0 w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-slate-800 group-hover:border-accent group-open:rotate-180 transition-transform duration-200">
                        <ChevronDown className="w-4 h-4" aria-hidden="true" />
                      </span>
                    </summary>
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-sm text-slate-600 font-sans leading-relaxed border-t border-stone-100">
                      {item.a}
                    </div>
                  </details>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          8. FINAL CONTACT CTA (Dark Background)
         ========================================================================= */}
      <section className="bg-dark text-white relative overflow-hidden py-16 sm:py-20 lg:py-28">
        <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up" className="flex flex-col items-center">
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-8 h-px bg-accent" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent font-heading">
                {dict.finalCta?.eyebrow || "Mulai Konsultasi"}
              </span>
              <span className="w-8 h-px bg-accent" aria-hidden="true" />
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white font-heading tracking-tight mb-6">
              {dict.finalCta?.heading || "Siap Mendiskusikan Kebutuhan Proyek Anda?"}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-400 font-sans leading-relaxed mb-10 max-w-2xl mx-auto">
              {dict.finalCta?.description || "Hubungi Kaha Block untuk membahas produk, volume, pengiriman, dan kebutuhan pemasangan."}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <a 
                href={BUSINESS_FACTS.contact.whatsappPrimaryUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent font-heading tracking-wide uppercase"
              >
                <MessageSquare className="w-4 h-4 mr-2.5" aria-hidden="true" />
                WhatsApp 1
              </a>
              <a 
                href={BUSINESS_FACTS.contact.whatsappSecondaryUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent font-heading tracking-wide uppercase"
              >
                <MessageSquare className="w-4 h-4 mr-2.5" aria-hidden="true" />
                WhatsApp 2
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

