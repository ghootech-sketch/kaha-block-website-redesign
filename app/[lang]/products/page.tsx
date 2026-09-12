import { dictionaries, isValidLocale, Locale } from "@/lib/dictionary";
import { constructPageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { Phone, ChevronDown, MessageSquare, ArrowDown } from "lucide-react";
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

const PRODUCT_ANCHOR_MAP: Record<string, string> = {
  truepave: "product-truepave",
  half: "product-half-tahu",
  hexagonal: "product-hexa",
  ubin: "product-ubin",
  topiUskup: "product-topi-uskup",
  kanstein: "product-kanstin-jepit",
  kansteinB1: "product-kanstin-b1",
  kansteinS: "product-kanstin-s",
  stoper: "product-stoper",
};

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

      <PageHero
        eyebrow={dict.eyebrow}
        title={dict.title}
        description={
          <>
            {dict.specs}
            <br />
            <span className="text-accent font-bold block mt-2">{dict.availability}</span>
          </>
        }

      />

      {/* =========================================================================
          1. PRODUCT NAVIGATOR (White Canvas)
         ========================================================================= */}
      <section className="bg-white border-b border-stone-200/40 py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Product Navigator Panel */}
          {dict.navigator && (
            <ScrollReveal immediate className="max-w-4xl mx-auto bg-surface/50 border border-stone-200/40 p-6 sm:p-8 hover:border-accent/40 transition-colors">
              <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="flex items-center space-x-2 text-slate-900">
                  <ArrowDown className="w-4 h-4 text-accent" aria-hidden="true" />
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider font-heading">
                    {dict.navigator.title}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* Category 1: Paving Block */}
                <div className="bg-slate-50/80 rounded-xl p-3.5 sm:p-4 border border-slate-200/70">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2.5 font-heading">
                    {dict.navigator.pavingBlockCategory}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {dict.navigator.pavingItems.map((item) => (
                      <a
                        key={item.targetId}
                        href={`#${item.targetId}`}
                        className="inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-900 hover:border-accent hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Category 2: Supporting Products */}
                <div className="bg-slate-50/80 rounded-xl p-3.5 sm:p-4 border border-slate-200/70">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2.5 font-heading">
                    {dict.navigator.supportingCategory}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {dict.navigator.supportingItems.map((item) => (
                      <a
                        key={item.targetId}
                        href={`#${item.targetId}`}
                        className="inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-900 hover:border-accent hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* =========================================================================
          2. PRODUCT GRID SECTION (Surface Background)
         ========================================================================= */}
      <section className="bg-surface border-b border-stone-200/40 py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {productKeys.map((key, index) => {
              const product = dict.items[key];
              const hasDetails = 'detailSpecs' in product && Array.isArray(product.detailSpecs) && product.detailSpecs.length > 0;
              const anchorId = PRODUCT_ANCHOR_MAP[key] || `product-${key}`;

              return (
                <ScrollReveal
                  key={key}
                  delay={index * 0.03}
                  className="bg-white rounded-xl overflow-hidden shadow-xs border border-gray-200/80 border-t-2 border-t-accent/60 hover:border-accent hover:shadow-md transition-all duration-300 group flex flex-col h-full scroll-mt-28"
                  id={anchorId}
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
                    <div className="absolute top-3 right-3 bg-accent text-slate-900 px-3 py-1 rounded-full text-xs font-mono font-bold shadow-xs">
                      {product.badge}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3.5 font-heading">
                        {product.name}
                      </h2>

                      {/* Normalized 3-Line Quick Specifications */}
                      <ul className="space-y-2 text-slate-700 font-sans text-xs sm:text-sm mb-4">
                        {product.quickSpecs.map((spec, i) => {
                          const parts = spec.split(":");
                          const isPendingConfirm =
                            spec.includes("Konfirmasi sebelum pemesanan") ||
                            spec.includes("Confirm before ordering");

                          return (
                            <li key={i} className="flex items-start">
                              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mt-1.5 mr-2 shrink-0" aria-hidden="true" />
                              <span className="leading-snug">
                                {parts.length > 1 ? (
                                  <>
                                    <strong className="text-slate-900 font-semibold">{parts[0]}:</strong>{" "}
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
                          <summary className="font-semibold text-slate-900 cursor-pointer hover:text-accent transition-colors list-none flex items-center justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded select-none">
                            <span>{dict.detailsLabel}</span>
                            <ChevronDown className="w-4 h-4 text-slate-500 group-open/detail:rotate-180 transition-transform duration-200" aria-hidden="true" />
                          </summary>
                          <ul className="mt-2.5 pt-2.5 border-t border-slate-200/80 space-y-1.5">
                            {product.detailSpecs.map((detail, idx) => {
                              const parts = detail.split(":");
                              return (
                                <li key={idx} className="flex items-start text-xs text-slate-600">
                                  <span className="inline-block w-1 h-1 rounded-full bg-slate-400 mt-1.5 mr-2 shrink-0" aria-hidden="true" />
                                  <span className="leading-snug">
                                    {parts.length > 1 ? (
                                      <>
                                        <strong className="text-slate-900 font-semibold">{parts[0]}:</strong>{" "}
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
                        className="flex items-center justify-center w-full min-h-[44px] bg-primary text-white py-3 px-4 rounded-xl font-bold text-sm hover:bg-primary-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
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
        </div>
      </section>

      {/* =========================================================================
          3. BUYING CONSIDERATION SECTION (White Editorial Section)
         ========================================================================= */}
      {dict.beforeOrder && (
        <section className="bg-white border-b border-stone-200/40 py-16 sm:py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-10 md:mb-14 flex flex-col items-center">
              <div className="flex items-center space-x-3 mb-4">
                <span className="w-8 h-px bg-accent" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 font-heading">
                  {dict.beforeOrder.eyebrow}
                </span>
                <span className="w-8 h-px bg-accent" aria-hidden="true" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-slate-900 font-heading tracking-tight mb-4">
                {dict.beforeOrder.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-500 font-sans leading-relaxed">
                {dict.beforeOrder.subtitle}
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {dict.beforeOrder.items.map((item, idx) => (
                <ScrollReveal
                  key={item.number}
                  delay={idx * 0.04}
                  className="flex flex-col group border border-stone-200/40 p-6 sm:p-8 hover:border-accent/40 transition-colors bg-surface/50"
                >
                  <div className="mb-4">
                    <span className="text-3xl font-light font-heading text-slate-300 group-hover:text-accent transition-colors block mb-4">
                      {item.number}
                    </span>
                    <div className="h-px w-8 bg-accent" aria-hidden="true" />
                  </div>
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
          4. PRODUCT FAQ (Surface Accordion Section)
         ========================================================================= */}
      {dict.faq && (
        <section className="bg-surface py-16 sm:py-20 lg:py-28 border-b border-stone-200/40">
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
              {dict.faq.items.map((item, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.03}>
                  <details className="group border border-stone-200/40 bg-white p-5 sm:p-6 transition-all duration-200 hover:border-accent/40">
                    <summary className="font-medium text-base sm:text-lg text-slate-900 cursor-pointer list-none flex items-center justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded select-none hover:text-primary">
                      <span className="pr-4 font-heading">{item.q}</span>
                      <ChevronDown className="w-5 h-5 text-slate-500 shrink-0 group-open:rotate-180 transition-transform duration-200" aria-hidden="true" />
                    </summary>
                    <div className="mt-3.5 pt-3.5 border-t border-stone-100 text-sm sm:text-base text-slate-500 font-sans leading-relaxed">
                      <p>{item.a}</p>
                    </div>
                  </details>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================================
          5. FINAL CONSULTATION CTA (Dark Background)
         ========================================================================= */}
      <section className="bg-dark text-white relative overflow-hidden py-16 sm:py-20 lg:py-28">
        <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up" className="flex flex-col items-center">
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-8 h-px bg-accent" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent font-heading">
                {dict.finalCta?.eyebrow || dict.installation}
              </span>
              <span className="w-8 h-px bg-accent" aria-hidden="true" />
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white font-heading tracking-tight mb-6">
              {dict.finalCta?.heading || dict.needHelp?.title}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-400 font-sans leading-relaxed mb-10 max-w-2xl mx-auto">
              {dict.finalCta?.description || dict.needHelp?.desc}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={contactDict.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent font-heading tracking-wide uppercase"
              >
                <MessageSquare className="w-4 h-4 mr-2.5" aria-hidden="true" />
                {dict.finalCta?.button || dict.needHelp?.cta}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
