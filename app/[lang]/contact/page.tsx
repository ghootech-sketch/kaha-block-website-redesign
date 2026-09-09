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
  HelpCircle,
  Layers,
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
          2. THREE QUICK CONTACT CARDS (WhatsApp, Email, Instagram)
         ========================================================================= */}
      <section className="bg-surface border-b border-slate-200/80 py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-10 sm:mb-14">
            {/* Card 1: WhatsApp Utama */}
            <ScrollReveal delay={0.05} className="h-full">
              <a
                href={dict.whatsappUrl}
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
                  <p className="text-2xl font-bold font-heading text-slate-900 mb-2 tracking-tight">
                    {dict.quickActions.whatsappNumber}
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

            {/* Card 2: Email */}
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
                href="https://www.instagram.com/kahablock/"
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
                <span className="text-xs font-bold uppercase tracking-wider text-primary block font-heading">
                  {dict.factoryLocationEyebrow}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                  {dict.factoryLocationHeading}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 font-sans flex items-start sm:items-center gap-1.5 pt-0.5">
                  <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" />
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
                  <MapPin className="w-4 h-4 text-primary" aria-hidden="true" />
                  <span>{dict.openGoogleMaps}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Map Iframe */}
            <div className="relative w-full h-[360px] sm:h-[460px] lg:h-[520px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.2738484247357!2d106.64021975454531!3d-6.358589787390475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e46e589e68b5%3A0xfbfdcc6d2b296521!2sPaving%20Block%20Kaha!5e0!3m2!1sid!2sid!4v1788076236518!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title={dict.mapIframeTitle}
                className="w-full h-full block"
              />
              {/* Corner Map Action Affordance */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 pointer-events-auto">
                <a
                  href={dict.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/95 hover:bg-white text-slate-900 hover:text-primary font-semibold text-xs sm:text-sm shadow-md border border-slate-200/80 backdrop-blur-xs transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent min-h-[38px]"
                  aria-label={dict.openGoogleMaps}
                >
                  <MapPin className="w-4 h-4 text-primary" aria-hidden="true" />
                  <span>{dict.openGoogleMaps}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" />
                </a>
              </div>
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
                      href={BUSINESS_FACTS.contact.secondaryWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
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
        <section className="bg-white py-14 sm:py-18 md:py-24 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary mb-2 block font-heading">
                {dict.prepChecklist.eyebrow}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-slate-900">
                {dict.prepChecklist.title}
              </h2>
              <div className="w-16 h-1 bg-accent mx-auto mt-4 mb-4 rounded-full" />
              <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                {dict.prepChecklist.subtitle}
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {dict.prepChecklist.items.map((item, idx) => (
                <ScrollReveal
                  key={item.number}
                  delay={idx * 0.04}
                  className="bg-surface border border-slate-200/90 border-t-2 border-t-accent/60 rounded-xl p-6 flex flex-col justify-between hover:border-accent hover:shadow-xs transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <span className="w-8 h-8 rounded-lg bg-accent text-slate-900 font-mono text-xs font-bold flex items-center justify-center shadow-xs">
                        {item.number}
                      </span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold font-heading text-slate-900 mb-2">
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
          6. WHAT HAPPENS NEXT (Process Timeline on Warm Neutral Background)
         ========================================================================= */}
      {dict.processFlow && (
        <section className="bg-surface py-14 sm:py-18 md:py-24 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary mb-2 block font-heading">
                {dict.processFlow.eyebrow}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-slate-900">
                {dict.processFlow.title}
              </h2>
              <div className="w-16 h-1 bg-accent mx-auto mt-4 mb-4 rounded-full" />
              <p className="text-sm sm:text-base text-slate-600 font-sans">
                {dict.processFlow.subtitle}
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {dict.processFlow.steps.map((step, idx) => (
                <ScrollReveal
                  key={step.number}
                  delay={idx * 0.04}
                  className="bg-white border border-slate-200/90 border-t-2 border-t-accent/60 rounded-xl p-6 flex flex-col justify-between hover:border-accent hover:shadow-xs transition-[border-color,box-shadow] duration-300"
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
          </div>
        </section>
      )}

      {/* =========================================================================
          7. CONTACT FAQ (Semantic Details & Summary on White Background)
         ========================================================================= */}
      {dict.faq && (
        <section className="bg-white py-14 sm:py-18 md:py-24 border-b border-slate-200/80">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-3">
                <HelpCircle className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900 font-heading">
                  {dict.faq.eyebrow}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-slate-900">
                {dict.faq.title}
              </h2>
              <div className="w-16 h-1 bg-accent mx-auto mt-4 mb-4 rounded-full" />
              <p className="text-sm sm:text-base text-slate-600 font-sans">
                {dict.faq.subtitle}
              </p>
            </ScrollReveal>

            <div className="space-y-4">
              {dict.faq.items.map((item, index) => (
                <ScrollReveal key={index} delay={index * 0.03}>
                  <details
                    className="group border-b border-slate-200/90 open:border-accent/40 transition-all duration-200 hover:border-accent/40"
                  >
                    <summary className="flex items-center justify-between p-5 sm:p-6 cursor-pointer list-none select-none font-heading font-bold text-base sm:text-lg text-slate-900 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-none">
                      <span className="pr-4">{item.q}</span>
                      <span className="shrink-0 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-800 group-hover:border-primary group-open:rotate-180 transition-transform duration-200">
                        <ChevronDown className="w-4 h-4" aria-hidden="true" />
                      </span>
                    </summary>
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-xs sm:text-sm text-slate-700 font-sans leading-relaxed border-t border-slate-200/80">
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
          8. FINAL CONTACT CTA (Venetian Red Background)
         ========================================================================= */}
      <section className="bg-primary text-white py-16 sm:py-20 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-bl-full opacity-30 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-tr-full opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 mb-4">
              <Layers className="w-4 h-4 text-accent" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-wider text-white font-heading">
                {dict.finalCta?.eyebrow || "Mulai Konsultasi"}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 font-heading">
              {dict.finalCta?.heading || "Siap Mendiskusikan Kebutuhan Proyek Anda?"}
            </h2>
            <p className="text-base sm:text-lg opacity-90 leading-relaxed font-sans max-w-2xl mx-auto mb-8 sm:mb-10">
              {dict.finalCta?.description || "Hubungi Kaha Block untuk membahas produk, volume, pengiriman, dan kebutuhan pemasangan."}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={dict.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-white hover:bg-stone-100 text-primary px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-bold text-base shadow-lg transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white min-h-[44px]"
              >
                <MessageSquare className="w-4 h-4 mr-2 text-primary" aria-hidden="true" />
                {dict.finalCta?.button || "Hubungi via WhatsApp"}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

