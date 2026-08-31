import { dictionaries, isValidLocale, Locale } from "@/lib/dictionary";
import { constructPageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import { Phone, ChevronDown, CheckCircle2, MessageSquare, Layers } from "lucide-react";
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
  return constructPageMetadata("products", lang as Locale);
}

export default async function Products({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    notFound();
  }
  const currentLang = lang as Locale;
  const dict = dictionaries[currentLang].products;
  const contactDict = dictionaries[currentLang].contact;
  
  const productKeys = Object.keys(dict.items) as Array<keyof typeof dict.items>;

  return (
    <>
      <JsonLd page="products" lang={currentLang} />
      <div className="bg-gray-50 min-h-screen py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10 md:mb-14 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B2447] tracking-tight font-heading">
              {dict.title}
            </h1>
            <div className="w-16 sm:w-24 h-1 sm:h-1.5 bg-[#D90429] mx-auto mt-4 sm:mt-6 mb-4 sm:mb-6 rounded-full" />
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-[#0B2447]/80 max-w-2xl mx-auto font-sans">
              {dict.specs}
            </p>
            <p className="mt-2 text-sm sm:text-base text-[#D90429] font-bold max-w-2xl mx-auto font-sans">
              {dict.availability}
            </p>
          </ScrollReveal>

          {/* 3-Column Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {productKeys.map((key, index) => {
              const product = dict.items[key];
              const hasDetails = 'detailSpecs' in product && Array.isArray(product.detailSpecs) && product.detailSpecs.length > 0;

              return (
                <ScrollReveal
                  key={key}
                  delay={index * 0.04}
                  className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs border border-gray-200/80 hover:shadow-lg transition-all duration-300 group flex flex-col h-full"
                >
                  {/* 3:2 Product Image Container */}
                  <div className="relative aspect-[3/2] w-full bg-gray-100 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={`${dict.imageAltPrefix} ${product.name}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-[#0B2447]/90 text-[#FFC300] px-3 py-1 rounded-full text-xs font-mono font-bold shadow-sm backdrop-blur-xs">
                      {product.badge}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#0B2447] mb-3.5 font-heading">
                        {product.name}
                      </h2>

                      {/* Normalized 3-Line Quick Specifications */}
                      <ul className="space-y-2 text-[#0B2447]/85 font-sans text-xs sm:text-sm mb-4">
                        {product.quickSpecs.map((spec, i) => {
                          const parts = spec.split(":");
                          const isPendingConfirm =
                            spec.includes("Konfirmasi sebelum pemesanan") ||
                            spec.includes("Confirm before ordering");

                          return (
                            <li key={i} className="flex items-start">
                              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D90429] mt-1.5 mr-2 shrink-0" aria-hidden="true" />
                              <span className="leading-snug">
                                {parts.length > 1 ? (
                                  <>
                                    <strong className="text-[#0B2447] font-semibold">{parts[0]}:</strong>{" "}
                                    <span className={isPendingConfirm ? "text-amber-800 font-medium" : ""}>
                                      {parts.slice(1).join(":")}
                                    </span>
                                  </>
                                ) : (
                                  spec
                                )}
                              </span>
                            </li>
                          );
                        })}
                      </ul>

                      {/* Collapsible Detail Section (Only if extra verified data exists) */}
                      {hasDetails && product.detailSpecs && (
                        <details className="mb-4 group/detail rounded-xl bg-slate-50 border border-slate-200/80 p-3 text-xs sm:text-sm">
                          <summary className="font-semibold text-[#0B2447] cursor-pointer hover:text-[#D90429] transition-colors list-none flex items-center justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D90429] rounded select-none">
                            <span>{dict.detailsLabel}</span>
                            <ChevronDown className="w-4 h-4 text-slate-500 group-open/detail:rotate-180 transition-transform duration-200" aria-hidden="true" />
                          </summary>
                          <ul className="mt-2.5 pt-2.5 border-t border-slate-200/80 space-y-1.5">
                            {product.detailSpecs.map((detail, idx) => {
                              const parts = detail.split(":");
                              return (
                                <li key={idx} className="flex items-start text-xs text-[#0B2447]/80">
                                  <span className="inline-block w-1 h-1 rounded-full bg-slate-400 mt-1.5 mr-2 shrink-0" aria-hidden="true" />
                                  <span className="leading-snug">
                                    {parts.length > 1 ? (
                                      <>
                                        <strong className="text-[#0B2447] font-semibold">{parts[0]}:</strong>{" "}
                                        {parts.slice(1).join(":")}
                                      </>
                                    ) : (
                                      detail
                                    )}
                                  </span>
                                </li>
                              );
                            })}
                          </ul>
                        </details>
                      )}
                    </div>

                    {/* Bottom-Aligned WhatsApp CTA */}
                    <div className="mt-auto pt-2">
                      <a 
                        href={contactDict.whatsappUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full min-h-[44px] bg-[#0B2447] text-white py-3 px-4 rounded-full font-bold text-sm hover:bg-[#D90429] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300]"
                      >
                        <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                        {dict.orderCta}
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Clean Bilingual Disclaimer Note Under Grid */}
          <div className="mt-10 sm:mt-12 text-center max-w-3xl mx-auto px-4">
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic bg-white/90 border border-slate-200 rounded-2xl py-3.5 px-6 shadow-2xs">
              {dict.disclaimer}
            </p>
          </div>

          {/* =========================================================================
              SECTION: HAL YANG PERLU DIPASTIKAN SEBELUM MEMESAN (6 Points)
             ========================================================================= */}
          {dict.beforeOrder && (
            <ScrollReveal className="mt-16 sm:mt-20 md:mt-24 bg-white border border-gray-200/80 rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xs">
              <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#D90429] mb-2 block font-heading">
                  {dict.beforeOrder.eyebrow}
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-[#0B2447]">
                  {dict.beforeOrder.title}
                </h2>
                <div className="w-16 h-1 bg-[#D90429] mx-auto mt-4 mb-4 rounded-full" />
                <p className="text-sm sm:text-base text-slate-600 font-sans">
                  {dict.beforeOrder.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dict.beforeOrder.items.map((item) => (
                  <div
                    key={item.number}
                    className="bg-[#FAF9F6] border border-gray-200/80 rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-[#0B2447]/30 transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="w-8 h-8 rounded-lg bg-[#0B2447] text-[#FFC300] font-mono text-xs font-bold flex items-center justify-center">
                          {item.number}
                        </span>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold font-heading text-[#0B2447] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          )}

          {/* =========================================================================
              SECTION: BUTUH BANTUAN MEMILIH PRODUK & LAYANAN PEMASANGAN
             ========================================================================= */}
          <ScrollReveal delay={0.2} direction="up" className="mt-12 sm:mt-16 bg-[#0B2447] text-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 text-center shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#FFC300] rounded-bl-full opacity-10 transform translate-x-12 -translate-y-12 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#D90429] rounded-tr-full opacity-20 transform -translate-x-12 translate-y-12 pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 mb-4">
                <Layers className="w-4 h-4 text-[#FFC300]" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-wider text-white font-heading">
                  {dict.installation}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 font-heading">
                {dict.needHelp?.title || dict.installation}
              </h2>
              <p className="text-base sm:text-lg opacity-90 leading-relaxed font-sans mb-8">
                {dict.needHelp?.desc || dict.installationDesc}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href={contactDict.whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-[#D90429] hover:bg-[#b50322] text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold text-base shadow-lg transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white min-h-[44px]"
                >
                  <MessageSquare className="w-4 h-4 mr-2" aria-hidden="true" />
                  {dict.needHelp?.cta || dict.consultCta}
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </>
  );
}
