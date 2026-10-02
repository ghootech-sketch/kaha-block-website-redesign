import { getWhatsAppUrl } from "@/lib/whatsapp";
import { dictionaries, isValidLocale, Locale } from "@/lib/dictionary";
import { constructPageMetadata } from "@/lib/metadata";
import { getAllProducts } from "@/lib/products-data";
import { notFound } from "next/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { Phone, ChevronDown, MessageSquare, ArrowDown, ArrowRight } from "lucide-react";
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
  const products = getAllProducts(currentLang);

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
            {products.map((product, index) => {
              const productDetailUrl = `/${currentLang}/products/${product.slug}`;
              const anchorId = product.anchorId;

              return (
                <ScrollReveal
                  key={product.slug}
                  delay={index * 0.03}
                  className="bg-white rounded-xl overflow-hidden shadow-xs border border-gray-200/80 border-t-2 border-t-accent/60 hover:border-accent hover:shadow-md transition-all duration-300 group flex flex-col h-full scroll-mt-28"
                  id={anchorId}
                >
                  {/* 3:2 Product Image Container */}
                  <Link
                    href={productDetailUrl}
                    className="relative aspect-[3/2] w-full bg-gray-100 overflow-hidden block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <Image
                      src={product.image}
                      alt={`${dict.imageAltPrefix} ${product.name}`}
                      fill
                      loading="lazy"
                      fetchPriority="low"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-accent text-slate-900 px-3 py-1 rounded-full text-xs font-mono font-bold shadow-xs">
                      {product.badge}
                    </div>
                  </Link>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3.5 font-heading">
                        <Link
                          href={productDetailUrl}
                          className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                        >
                          {product.name}
                        </Link>
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
                    </div>

                    {/* Bottom-Aligned CTAs: Detail Specs Link + WhatsApp Order */}
                    <div className="mt-auto pt-3 space-y-2.5">
                      <Link
                        href={productDetailUrl}
                        className="inline-flex items-center justify-center w-full min-h-[40px] bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200/90 rounded-xl font-semibold text-xs sm:text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent font-heading"
                      >
                        <span>{dict.detailsLabel}</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1.5 text-accent" aria-hidden="true" />
                      </Link>
                      <a 
                        href={getWhatsAppUrl(index % 2 === 0 ? "primary" : "secondary", "products", currentLang)} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full min-h-[44px] bg-primary text-white py-3 px-4 rounded-xl font-bold text-sm hover:bg-primary-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent font-heading uppercase tracking-wide shadow-xs"
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
          2A-PRICING. PANDUAN HARGA PAVING BLOCK PER METER 2026 (Answer-First Section)
         ========================================================================= */}
      <section className="bg-white py-16 sm:py-20 border-b border-stone-200/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="flex flex-col gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-slate-900 tracking-tight mb-4">
                {currentLang === "en"
                  ? "2026 Paving Block Price per Square Meter Guide"
                  : "Panduan Harga Paving Block per Meter 2026"}
              </h2>
              <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
                {currentLang === "en"
                  ? "Paving block prices per square meter in 2026 adapt to the specific model, thickness, concrete grade, order volume, and project location. Kaha Block provides direct manufacturer sales from Cisauk and delivery across Greater Jakarta (Jabodetabek). For actual pricing, please send your desired product type, estimated surface area, and project location via WhatsApp."
                  : "Harga paving block per meter pada 2026 menyesuaikan model, ketebalan, mutu beton, volume pemesanan, dan lokasi proyek. Kaha Block melayani penjualan langsung dari produsen di Cisauk serta pengiriman Jabodetabek. Untuk harga aktual, kirim tipe produk, estimasi luas area, dan lokasi proyek melalui WhatsApp."}
              </p>
            </div>

            <div className="bg-surface p-6 sm:p-8 rounded-xl border border-slate-200/80">
              <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900 mb-3">
                {currentLang === "en"
                  ? "How much does paving block cost per square meter in 2026?"
                  : "Berapa harga paving block per meter 2026?"}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed mb-4">
                {currentLang === "en"
                  ? "The price of paving blocks per square meter is determined by several specific factors rather than a single flat rate:"
                  : "Harga paving block per meter ditentukan oleh beberapa faktor spesifik berikut, sehingga tidak ada satu tarif tunggal yang universal:"}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span>{currentLang === "en" ? "Paving Model & Design" : "Model & Pola Paving Block"}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span>{currentLang === "en" ? "Thickness (6cm / 8cm / 10cm)" : "Ketebalan (6 cm / 8 cm / 10 cm)"}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span>{currentLang === "en" ? "Concrete Grade (K-250 / K-300 / K-400)" : "Mutu Beton (K-250 / K-300 / K-400)"}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span>{currentLang === "en" ? "Total Order Volume (m²)" : "Volume Pemesanan Keseluruhan"}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span>{currentLang === "en" ? "Project Delivery Location" : "Lokasi Pengiriman Proyek"}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span>{currentLang === "en" ? "Material Only vs Full Installation Package" : "Paket Material Saja vs Jasa Pemasangan Lengkap"}</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          2A. DIRECT FACTORY PRICING STARTING CONVERSION BLOCK
         ========================================================================= */}
      <section className="bg-dark text-white border-b border-stone-800 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="bg-stone-900/90 border border-stone-700/80 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-md text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent font-heading block mb-2">
              {dict.pricingBlock?.eyebrow || (currentLang === "en" ? "DIRECT FACTORY QUOTATION" : "PENAWARAN HARGA LANGSUNG PABRIK")}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white font-heading tracking-tight mb-3">
              {dict.pricingBlock?.title || (currentLang === "en" ? "Paving Block Prices Available Starting from Rp80,000/m²*" : "Harga Paving Block Tersedia Mulai Rp80.000/m²*")}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-2xl mx-auto mb-8">
              {dict.pricingBlock?.subtitle || (currentLang === "en" ? "For pricing based on specific models, volume, and project location, consult your requirements directly with the Kaha Block team." : "Untuk harga sesuai model, volume, dan lokasi proyek, konsultasikan kebutuhan Anda langsung dengan tim Kaha Block.")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-4">
              <a
                href={getWhatsAppUrl("primary", "pricing", currentLang)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent font-heading tracking-wide uppercase min-h-[44px]"
              >
                <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                <span>{dict.pricingBlock?.primaryCta || (currentLang === "en" ? "Request Best Project Price" : "Minta Harga Terbaik")}</span>
              </a>
              <a
                href={getWhatsAppUrl("secondary", "pricing", currentLang)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent hover:bg-white/5 text-white px-7 py-3.5 rounded-xl font-bold text-sm border border-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white font-heading tracking-wide uppercase min-h-[44px]"
              >
                <MessageSquare className="w-4 h-4 mr-2 text-accent" aria-hidden="true" />
                <span>{dict.pricingBlock?.secondaryCta || (currentLang === "en" ? "Check Price via WhatsApp" : "Cek Harga via WhatsApp")}</span>
              </a>
            </div>
            <p className="text-xs text-slate-400 font-sans italic max-w-xl mx-auto">
              {dict.pricingBlock?.disclaimer || (currentLang === "en" ? "*Final pricing may vary based on specifications, order volume, project location, and service requirements." : "*Harga dapat menyesuaikan spesifikasi, jumlah pemesanan, lokasi proyek, dan kebutuhan layanan.")}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          2B. COMMERCIAL INTENT & DIRECT PRODUCER SECTION
         ========================================================================= */}
      {dict.commercialSection && (
        <section className="bg-white border-b border-stone-200/40 py-12 sm:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="bg-surface border border-stone-200/80 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary font-heading block mb-2">
                {dict.commercialSection.eyebrow}
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-slate-900 font-heading tracking-tight mb-3">
                {dict.commercialSection.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                {dict.commercialSection.desc}
              </p>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* =========================================================================
          2C. FACTORY DIRECT DELIVERY & INSTALLATION BANNER (Local Geo Relevance)
         ========================================================================= */}
      {dict.deliveryService && (
        <section id="delivery-installation" className="bg-stone-50 border-b border-stone-200/40 py-12 sm:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="bg-white border border-stone-200/80 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
              <div className="flex-1 space-y-3">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary font-heading">
                  {dict.deliveryService.eyebrow}
                </span>
                <h3 className="text-2xl sm:text-3xl font-light text-slate-900 font-heading tracking-tight">
                  {dict.deliveryService.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                  {dict.deliveryService.desc}
                </p>
                <p className="text-xs sm:text-sm text-slate-500 font-sans italic">
                  {dict.deliveryService.installNote}
                </p>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 text-xs font-bold font-heading uppercase tracking-wider">
                  <Link
                    href={`/${currentLang}/jasa-pemasangan-paving-block`}
                    className="inline-flex items-center text-primary hover:text-primary-hover transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent min-h-[36px]"
                  >
                    <span>{currentLang === "id" ? "Info Jasa Pemasangan" : "Installation Info"}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" aria-hidden="true" />
                  </Link>
                  <span className="text-slate-300 hidden sm:inline" aria-hidden="true">|</span>
                  <Link
                    href={`/${currentLang}/area-layanan`}
                    className="inline-flex items-center text-slate-700 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent min-h-[36px]"
                  >
                    <span>{currentLang === "id" ? "Lihat Area Layanan" : "View Service Areas"}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" aria-hidden="true" />
                  </Link>
                </div>
              </div>
              <div className="shrink-0 w-full md:w-auto">
                <a
                  href={getWhatsAppUrl("primary", "products", currentLang)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white px-6 sm:px-8 py-3.5 rounded-xl font-bold text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent font-heading tracking-wide uppercase shadow-xs min-h-[44px]"
                >
                  <MessageSquare className="w-4 h-4 mr-2" aria-hidden="true" />
                  {dict.deliveryService.ctaConsult}
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

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
                href={getWhatsAppUrl("secondary", "products", currentLang)} 
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
