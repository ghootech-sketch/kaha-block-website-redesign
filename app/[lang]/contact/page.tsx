import { dictionaries, isValidLocale, Locale } from "@/lib/dictionary";
import { constructPageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import JsonLd from "@/components/JsonLd";
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Instagram,
  Facebook,
  ExternalLink,
  ChevronDown,
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
      <div className="bg-[#FAF9F6] min-h-screen py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* =========================================================================
              SECTION 1: CONTACT HERO
             ========================================================================= */}
          <ScrollReveal className="text-center mb-10 md:mb-14 lg:mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#D90429] mb-2 block font-heading">
              {dict.eyebrow}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B2447] tracking-tight font-heading">
              {dict.title}
            </h1>
            <div className="w-16 sm:w-20 h-1 bg-[#D90429] mx-auto mt-4 mb-4 sm:mb-5 rounded-full" />
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-sans leading-relaxed">
              {dict.description}
            </p>
          </ScrollReveal>

          {/* =========================================================================
              SECTION 2: THREE QUICK CONTACT CARDS (WhatsApp, Email, Instagram)
             ========================================================================= */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-10 sm:mb-14">
            {/* Card 1: WhatsApp Utama */}
            <ScrollReveal delay={0.05} className="h-full">
              <a
                href={dict.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-gray-200/90 hover:border-[#D90429] rounded-2xl p-6 sm:p-7 flex flex-col justify-between h-full shadow-xs hover:shadow-sm transition-[border-color,box-shadow] duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300] min-h-[44px]"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#D90429]/10 text-[#D90429] flex items-center justify-center mb-5">
                    <MessageSquare className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1 font-heading">
                    {dict.quickActions.whatsappLabel}
                  </span>
                  <p className="text-2xl font-bold font-heading text-[#0B2447] mb-2 tracking-tight">
                    {dict.quickActions.whatsappNumber}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                    {dict.quickActions.whatsappDesc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs sm:text-sm font-bold text-[#D90429]">
                  <span>{dict.quickActions.whatsappAction}</span>
                  <ExternalLink className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </div>
              </a>
            </ScrollReveal>

            {/* Card 2: Email */}
            <ScrollReveal delay={0.1} className="h-full">
              <a
                href={`mailto:${dict.quickActions.emailAddress}`}
                className="bg-white border border-gray-200/90 hover:border-[#0B2447]/40 rounded-2xl p-6 sm:p-7 flex flex-col justify-between h-full shadow-xs hover:shadow-sm transition-[border-color,box-shadow] duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300] min-h-[44px]"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#0B2447]/5 text-[#0B2447] flex items-center justify-center mb-5">
                    <Mail className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1 font-heading">
                    {dict.quickActions.emailLabel}
                  </span>
                  <p className="text-lg sm:text-xl font-bold font-sans text-[#0B2447] mb-2 break-all">
                    {dict.quickActions.emailAddress}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                    {dict.quickActions.emailDesc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs sm:text-sm font-bold text-[#0B2447] group-hover:text-[#D90429] transition-colors">
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
                className="bg-white border border-gray-200/90 hover:border-[#0B2447]/40 rounded-2xl p-6 sm:p-7 flex flex-col justify-between h-full shadow-xs hover:shadow-sm transition-[border-color,box-shadow] duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300] min-h-[44px]"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#0B2447]/5 text-[#0B2447] flex items-center justify-center mb-5">
                    <Instagram className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1 font-heading">
                    {dict.quickActions.instagramLabel}
                  </span>
                  <p className="text-xl sm:text-2xl font-bold font-heading text-[#0B2447] mb-2 tracking-tight">
                    {dict.quickActions.instagramHandle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                    {dict.quickActions.instagramDesc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs sm:text-sm font-bold text-[#0B2447] group-hover:text-[#D90429] transition-colors">
                  <span>{dict.quickActions.instagramAction}</span>
                  <ExternalLink className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </div>
              </a>
            </ScrollReveal>
          </div>

          {/* =========================================================================
              SECTION 3: FULL-WIDTH FACTORY MAP
             ========================================================================= */}
          <ScrollReveal className="bg-white border border-gray-200/90 rounded-2xl sm:rounded-3xl shadow-xs overflow-hidden mb-6 sm:mb-8">
            {/* Map Header */}
            <div className="p-6 sm:p-8 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D90429] block font-heading">
                  {dict.factoryLocationEyebrow}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0B2447] font-heading">
                  {dict.factoryLocationHeading}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 font-sans flex items-start sm:items-center gap-1.5 pt-0.5">
                  <MapPin className="w-4 h-4 text-[#D90429] shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" />
                  <span>{dict.address}</span>
                </p>
              </div>
              <div className="pt-2 sm:pt-0">
                <a
                  href={dict.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-gray-300 hover:border-[#0B2447] bg-white hover:bg-gray-50 text-[#0B2447] font-semibold text-xs sm:text-sm transition-colors shrink-0 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300]"
                >
                  <MapPin className="w-4 h-4 text-[#D90429]" aria-hidden="true" />
                  <span>{dict.openGoogleMaps}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Map Iframe */}
            <div className="w-full h-[360px] sm:h-[460px] lg:h-[520px]">
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
            </div>
          </ScrollReveal>

          {/* =========================================================================
              SECTION 4: ADDITIONAL INFORMATION STRIP (Single lightweight horizontal container)
             ========================================================================= */}
          <ScrollReveal className="bg-white border border-gray-200/90 rounded-2xl p-6 sm:p-8 shadow-xs mb-12 sm:mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Column 1: Alternative Contact */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0B2447]/5 text-[#0B2447] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-[#0B2447]" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1 font-heading">
                    {dict.infoStrip.altContactLabel}
                  </span>
                  <a
                    href={`tel:${dict.infoStrip.altContactValue.replace(/\D/g, "")}`}
                    className="text-base sm:text-lg font-bold text-[#0B2447] hover:text-[#D90429] transition-colors inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300] rounded"
                  >
                    {dict.infoStrip.altContactValue}
                  </a>
                  <p className="text-xs sm:text-sm text-slate-600 font-sans mt-1 leading-relaxed">
                    {dict.infoStrip.altContactDesc}
                  </p>
                </div>
              </div>

              {/* Column 2: Service Coverage */}
              <div className="flex items-start gap-4 md:border-l md:border-gray-100 md:pl-8">
                <div className="w-10 h-10 rounded-xl bg-[#0B2447]/5 text-[#0B2447] flex items-center justify-center shrink-0 mt-0.5">
                  <Truck className="w-5 h-5 text-[#0B2447]" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1 font-heading">
                    {dict.infoStrip.coverageLabel}
                  </span>
                  <p className="text-base sm:text-lg font-bold text-[#0B2447]">
                    {dict.infoStrip.coverageValue}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 font-sans mt-1 leading-relaxed">
                    {dict.infoStrip.coverageDesc}
                  </p>
                </div>
              </div>

              {/* Column 3: Facebook */}
              <div className="flex items-start gap-4 md:border-l md:border-gray-100 md:pl-8">
                <div className="w-10 h-10 rounded-xl bg-[#0B2447]/5 text-[#0B2447] flex items-center justify-center shrink-0 mt-0.5">
                  <Facebook className="w-5 h-5 text-[#0B2447]" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1 font-heading">
                    {dict.infoStrip.facebookLabel}
                  </span>
                  <p className="text-base sm:text-lg font-bold text-[#0B2447]">
                    {dict.infoStrip.facebookValue}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 font-sans mt-1 leading-relaxed">
                    {dict.infoStrip.facebookDesc}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* =========================================================================
              SECTION 5: CONTACT FAQ (4 Questions with semantic details & summary)
             ========================================================================= */}
          {dict.faq && (
            <ScrollReveal className="bg-white border border-gray-200/90 rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xs">
              <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#D90429] mb-2 block font-heading">
                  {dict.faq.eyebrow}
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-[#0B2447]">
                  {dict.faq.title}
                </h2>
                <div className="w-16 h-1 bg-[#D90429] mx-auto mt-4 mb-4 rounded-full" />
                <p className="text-sm sm:text-base text-slate-600 font-sans">
                  {dict.faq.subtitle}
                </p>
              </div>

              <div className="max-w-4xl mx-auto space-y-4">
                {dict.faq.items.map((item, index) => (
                  <details
                    key={index}
                    className="group bg-[#FAF9F6] rounded-2xl border border-gray-200/90 open:border-[#0B2447]/30 open:shadow-xs transition-[border-color,box-shadow] duration-200"
                  >
                    <summary className="flex items-center justify-between p-5 sm:p-6 cursor-pointer list-none select-none font-heading font-bold text-base sm:text-lg text-[#0B2447] hover:text-[#D90429] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300] rounded-2xl">
                      <span className="pr-4">{item.q}</span>
                      <span className="shrink-0 w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#0B2447] group-hover:border-[#D90429] group-open:rotate-180 transition-transform duration-200">
                        <ChevronDown className="w-4 h-4" aria-hidden="true" />
                      </span>
                    </summary>
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-sm sm:text-base text-slate-600 font-sans leading-relaxed border-t border-gray-200/50">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </ScrollReveal>
          )}
        </div>
      </div>
    </>
  );
}
