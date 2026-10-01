import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { isValidLocale, Locale } from "@/lib/dictionary";
import { getProductData, PRODUCT_SLUGS } from "@/lib/products-data";
import { constructProductMetadata } from "@/lib/metadata";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import JsonLd from "@/components/JsonLd";
import ScrollReveal from "@/components/ScrollReveal";
import {
  ChevronRight,
  Phone,
  ArrowRight,
  ArrowLeft,
  Truck,
  Layers,
  CheckCircle2,
  Building2,
} from "lucide-react";

export async function generateStaticParams() {
  const locales = ["id", "en"];
  const params: Array<{ lang: string; slug: string }> = [];

  for (const lang of locales) {
    for (const slug of PRODUCT_SLUGS) {
      params.push({ lang, slug });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isValidLocale(lang)) {
    return {};
  }
  const product = getProductData(slug, lang as Locale);
  if (!product) {
    return {};
  }

  return constructProductMetadata({
    slug: product.slug,
    lang: lang as Locale,
    title: product.metaTitle,
    description: product.metaDescription,
    image: product.image,
  });
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isValidLocale(lang)) {
    notFound();
  }
  const currentLang = lang as Locale;
  const product = getProductData(slug, currentLang);

  if (!product) {
    notFound();
  }

  const isEn = currentLang === "en";
  const relatedProducts = product.relatedProductSlugs
    .map((s) => getProductData(s, currentLang))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const homeLabel = isEn ? "Home" : "Beranda";
  const productsLabel = isEn ? "Products" : "Produk";
  const catalogCtaLabel = isEn ? "View Complete Catalog" : "Lihat Semua Katalog";
  const orderCtaLabel = isEn ? "Order / Inquire via WhatsApp" : "Pesan via WhatsApp";
  const consultationTitle = isEn
    ? "Factory-Direct Consultation & Quotation"
    : "Konsultasi Pengadaan Langsung Pabrik";
  const consultationDesc = isEn
    ? "Connect with Kaha Block's sales team directly to request an official quotation tailored to your model, thickness, color, and area volume (m²). Deliveries across Greater Jakarta (Jabodetabek) include free shipping and material offloading."
    : "Hubungi tim sales Kaha Block via WhatsApp untuk mendapatkan surat penawaran harga resmi yang disesuaikan dengan tipe model, ketebalan, pilihan warna, dan volume luas area (m²). Pengiriman ke seluruh Jabodetabek dilengkapi fasilitas gratis pengiriman dan penurunan barang.";
  const specsTitle = isEn ? "Technical Specifications" : "Spesifikasi Teknis";
  const applicationsTitle = isEn ? "Applications & Use Cases" : "Peruntukan & Aplikasi Lapangan";
  const functionsTitle = isEn ? "Key Characteristics & Functions" : "Karakteristik & Fungsi Produk";
  const relatedTitle = isEn ? "Related Products" : "Produk Terkait";
  const installationLabel = isEn
    ? "Need Installation? View Paving Installation Service"
    : "Butuh Pemasangan? Pelajari Jasa Pemasangan Paving Block";

  return (
    <>
      <JsonLd page="productDetail" lang={currentLang} product={product} />

      <main className="min-h-screen bg-surface">
        {/* =========================================================================
            BREADCRUMB & HEADER SECTION
           ========================================================================= */}
        <section className="bg-white border-b border-stone-200/60 pt-28 sm:pt-32 pb-8 sm:pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center flex-wrap gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-500 font-sans">
                <li>
                  <Link
                    href={`/${currentLang}`}
                    className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                  >
                    {homeLabel}
                  </Link>
                </li>
                <li>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                </li>
                <li>
                  <Link
                    href={`/${currentLang}/products`}
                    className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                  >
                    {productsLabel}
                  </Link>
                </li>
                <li>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                </li>
                <li className="font-semibold text-slate-900 truncate" aria-current="page">
                  {product.name}
                </li>
              </ol>
            </nav>

            {/* Back link to catalog */}
            <div className="mb-6">
              <Link
                href={`/${currentLang}/products`}
                className="inline-flex items-center text-xs font-bold text-slate-600 hover:text-primary uppercase tracking-wider font-heading transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5 mr-1.5" aria-hidden="true" />
                {catalogCtaLabel}
              </Link>
            </div>

            {/* Product Hero Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Product Visual Container (5 cols on lg) */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[3/2] w-full bg-slate-100 rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-slate-900 px-3.5 py-1 rounded-full text-xs font-mono font-bold shadow-xs">
                    {product.badge}
                  </div>
                </div>

                {/* Factory Trust Note under Image */}
                <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200/70 space-y-2.5 text-xs text-slate-600 font-sans">
                  <div className="flex items-center gap-2 font-medium text-slate-900">
                    <Building2 className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                    <span>PT Kaha Sukses Mandiri • Cisauk, Kab. Tangerang</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                    <span>
                      {isEn
                        ? "Direct delivery across Greater Jakarta (Jabodetabek) with offloading"
                        : "Pengiriman langsung ke Jabodetabek gratis ongkir & penurunan barang"}
                    </span>
                  </div>
                  <div className="pt-2 border-t border-slate-200/60 flex flex-wrap gap-x-4 gap-y-1 font-medium">
                    <Link
                      href={`/${currentLang}/projects/production`}
                      className="text-primary hover:underline inline-flex items-center gap-1 font-semibold"
                    >
                      <span>{isEn ? "Factory Production Documentation" : "Dokumentasi Produksi Pabrik"}</span>
                      <ArrowRight className="w-3 h-3 text-accent" aria-hidden="true" />
                    </Link>
                    <Link
                      href={`/${currentLang}/about`}
                      className="text-slate-700 hover:text-primary hover:underline inline-flex items-center gap-1"
                    >
                      <span>{isEn ? "Company Profile" : "Profil PT Kaha Sukses Mandiri"}</span>
                      <ArrowRight className="w-3 h-3 text-accent" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Product Info & Actions (7 cols on lg) */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className="w-6 h-px bg-accent" aria-hidden="true" />
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary font-heading">
                      {product.eyebrow}
                    </span>
                  </div>

                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 font-heading tracking-tight mb-3">
                    {product.name}
                  </h1>

                  {product.alternateName && (
                    <p className="text-sm font-medium text-slate-500 font-heading mb-4">
                      {product.alternateName}
                    </p>
                  )}

                  <p className="text-base sm:text-lg text-slate-700 font-sans leading-relaxed mb-6">
                    {product.intro}
                  </p>

                  {/* Highlights Bar */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                    {product.specs.slice(0, 3).map((spec, i) => (
                      <div
                        key={i}
                        className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-xs"
                      >
                        <span className="text-slate-500 block text-[11px] font-medium mb-0.5">
                          {spec.label}
                        </span>
                        <span className="font-semibold text-slate-900 block truncate">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Primary CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={getWhatsAppUrl("primary", "products", currentLang)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white px-6 sm:px-8 py-3.5 rounded-xl font-bold text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent font-heading uppercase tracking-wide min-h-[44px] shadow-xs"
                  >
                    <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                    {orderCtaLabel}
                  </a>
                  <Link
                    href={`/${currentLang}/jasa-pemasangan-paving-block`}
                    className="inline-flex items-center justify-center bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 px-5 sm:px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent font-heading min-h-[44px]"
                  >
                    <span>{isEn ? "Paving Installation Service" : "Jasa Pemasangan Paving"}</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 text-accent" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            TECHNICAL SPECIFICATIONS SECTION
           ========================================================================= */}
        <section className="py-14 sm:py-18 lg:py-24 border-b border-stone-200/60 bg-surface">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary font-heading block mb-2">
                {isEn ? "VERIFIED SPECIFICATIONS" : "DATA SPESIFIKASI"}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-slate-900 font-heading tracking-tight mb-3">
                {specsTitle}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-sans">
                {isEn
                  ? "Standard technical data verified directly from PT Kaha Sukses Mandiri's production facility in Cisauk, Tangerang Regency."
                  : "Data teknis spesifikasi faktual langsung dari fasilitas produksi PT Kaha Sukses Mandiri di Cisauk, Kabupaten Tangerang."}
              </p>
            </ScrollReveal>

            {/* Specifications Table Card */}
            <ScrollReveal className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs">
              <div className="divide-y divide-slate-100">
                {product.specs.map((item, idx) => (
                  <div
                    key={idx}
                    className={`grid grid-cols-1 sm:grid-cols-12 p-4 sm:p-5 text-sm ${
                      idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                    }`}
                  >
                    <div className="sm:col-span-4 font-semibold text-slate-900 font-heading">
                      {item.label}
                    </div>
                    <div className="sm:col-span-8 text-slate-700 font-sans mt-1 sm:mt-0">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* =========================================================================
            APPLICATIONS & FUNCTIONS SECTION
           ========================================================================= */}
        <section className="py-14 sm:py-18 lg:py-24 border-b border-stone-200/60 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Applications Card */}
              <ScrollReveal className="bg-surface border border-slate-200/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Layers className="w-5 h-5 text-accent" aria-hidden="true" />
                    <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
                      {applicationsTitle}
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mb-6 font-sans">
                    {isEn
                      ? "Recommended surface applications based on site load requirements:"
                      : "Rekomendasi penerapan permukaan perkerasan sesuai rencana peruntukan lahan:"}
                  </p>
                  <ul className="space-y-3.5 text-sm text-slate-700 font-sans">
                    {product.applications.map((app, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/80">
                  <Link
                    href={`/${currentLang}/jasa-pemasangan-paving-block`}
                    className="inline-flex items-center text-xs sm:text-sm font-bold text-primary hover:text-primary-hover font-heading uppercase tracking-wide transition-colors"
                  >
                    <span>{installationLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" aria-hidden="true" />
                  </Link>
                </div>
              </ScrollReveal>

              {/* Functions & Features Card */}
              <ScrollReveal className="bg-surface border border-slate-200/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" aria-hidden="true" />
                    <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
                      {functionsTitle}
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mb-6 font-sans">
                    {isEn
                      ? "Engineering benefits and structural functions of this product:"
                      : "Fungsi struktural dan keunggulan teknis dari model produk ini:"}
                  </p>
                  <ul className="space-y-3.5 text-sm text-slate-700 font-sans">
                    {product.functions.map((fn, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" aria-hidden="true" />
                        <span>{fn}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/80">
                  <Link
                    href={`/${currentLang}/area-layanan`}
                    className="inline-flex items-center text-xs sm:text-sm font-bold text-slate-700 hover:text-primary font-heading uppercase tracking-wide transition-colors"
                  >
                    <span>{isEn ? "View Greater Jakarta Service Coverage" : "Cek Wilayah Layanan Pengiriman Jabodetabek"}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" aria-hidden="true" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* =========================================================================
            WHATSAPP CONSULTATION & ORDERING SECTION
           ========================================================================= */}
        <section className="py-14 sm:py-18 lg:py-20 bg-dark text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal className="flex flex-col items-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent font-heading block mb-3">
                {isEn ? "DIRECT ORDER & INQUIRY" : "PEMESANAN & PENAWARAN HARGA"}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white font-heading tracking-tight mb-4">
                {consultationTitle}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed mb-8 max-w-2xl">
                {consultationDesc}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <a
                  href={getWhatsAppUrl("secondary", "products", currentLang)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white px-8 sm:px-10 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent font-heading tracking-wide uppercase min-h-[44px]"
                >
                  <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                  {orderCtaLabel}
                </a>
                <Link
                  href={`/${currentLang}/products`}
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 sm:px-8 py-3.5 rounded-xl font-semibold text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent font-heading min-h-[44px]"
                >
                  {catalogCtaLabel}
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* =========================================================================
            RELATED PRODUCTS SECTION
           ========================================================================= */}
        {relatedProducts.length > 0 && (
          <section className="py-14 sm:py-18 lg:py-24 bg-surface border-b border-stone-200/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ScrollReveal className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8 sm:mb-12">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary font-heading block mb-2">
                    {isEn ? "CONTEXTUAL SELECTION" : "REKOMENDASI KOMBINASI"}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-light text-slate-900 font-heading tracking-tight">
                    {relatedTitle}
                  </h2>
                </div>
                <Link
                  href={`/${currentLang}/products`}
                  className="inline-flex items-center text-xs font-bold text-slate-700 hover:text-primary font-heading uppercase tracking-wide transition-colors"
                >
                  <span>{catalogCtaLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" aria-hidden="true" />
                </Link>
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((rel, idx) => (
                  <ScrollReveal
                    key={rel.slug}
                    delay={idx * 0.04}
                    className="bg-white rounded-xl overflow-hidden border border-slate-200/80 hover:border-accent hover:shadow-md transition-all duration-300 flex flex-col group"
                  >
                    <Link
                      href={`/${currentLang}/products/${rel.slug}`}
                      className="block relative aspect-[3/2] w-full bg-slate-100 overflow-hidden"
                    >
                      <Image
                        src={rel.image}
                        alt={rel.imageAlt}
                        fill
                        loading="lazy"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-2.5 right-2.5 bg-accent text-slate-900 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold shadow-xs">
                        {rel.badge}
                      </div>
                    </Link>

                    <div className="p-4 sm:p-5 flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading mb-1.5 group-hover:text-primary transition-colors">
                          <Link href={`/${currentLang}/products/${rel.slug}`}>
                            {rel.name}
                          </Link>
                        </h3>
                        <p className="text-xs text-slate-600 font-sans line-clamp-2 mb-4">
                          {rel.intro}
                        </p>
                      </div>

                      <Link
                        href={`/${currentLang}/products/${rel.slug}`}
                        className="inline-flex items-center text-xs font-bold text-primary group-hover:text-primary-hover font-heading uppercase tracking-wider pt-2 border-t border-slate-100"
                      >
                        <span>{isEn ? "View Specs" : "Lihat Spesifikasi"}</span>
                        <ArrowRight className="w-3 h-3 ml-1" aria-hidden="true" />
                      </Link>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
