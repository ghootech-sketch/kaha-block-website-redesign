import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Building2,
  Calculator,
  CheckCircle2,
  Factory,
  HardHat,
  MapPin,
  MessageSquare,
  Package,
} from "lucide-react";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { BUSINESS_FACTS } from "@/lib/business-facts";
import { isValidLocale, Locale } from "@/lib/dictionary";
import { constructPageMetadata } from "@/lib/metadata";
import { PRICE_PAGE_DATA } from "@/lib/price-page-data";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  return constructPageMetadata("hargaPaving", lang as Locale);
}

export default async function HargaPavingBlockPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const currentLang = lang as Locale;
  const isEn = currentLang === "en";
  const data = PRICE_PAGE_DATA[currentLang];

  const productLinks = [
    { href: "/" + currentLang + "/products/truepave", label: isEn ? "Rectangular / Truepave" : "Paving Bata / Truepave" },
    { href: "/" + currentLang + "/products/half-tahu", label: isEn ? "Half Block" : "Paving Half / Tahu 10,5 × 10,5 cm" },
    { href: "/" + currentLang + "/products/paving-hexagonal", label: isEn ? "Hexagonal Paver" : "Paving Hexagonal / Segi Enam" },
    { href: "/" + currentLang + "/products/ubin", label: isEn ? "Tile Paver" : "Paving Ubin 8 cm" },
    { href: "/" + currentLang + "/products/topi-uskup", label: isEn ? "Bishop Hat Edge Paver" : "Topi Uskup" },
    { href: "/" + currentLang + "/products/kanstein-jepit", label: isEn ? "Edge Curb" : "Kanstein / Kanstin Jepit" },
  ];

  const areaLinks = [
    { slug: "tangerang", label: "Tangerang" },
    { slug: "jakarta", label: "Jakarta" },
    { slug: "bekasi", label: "Bekasi" },
    { slug: "depok", label: "Depok" },
    { slug: "bogor", label: "Bogor" },
  ];

  const factorIcons = [Package, Calculator, Building2, Factory, MapPin, HardHat, CheckCircle2, MessageSquare];

  return (
    <>
      <JsonLd page="hargaPaving" lang={currentLang} />

      <PageHero eyebrow={data.eyebrow} title={data.h1} description={data.heroDesc} />

      <main className="bg-surface">
        <section className="bg-white border-b border-stone-200/50 py-14 sm:py-18 lg:py-22">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="max-w-4xl mx-auto text-center mb-10">
              <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase font-heading">
                {isEn ? "PRICE UNITS & SCOPE" : "SATUAN HARGA & RUANG LINGKUP"}
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-bold font-heading text-slate-900">{data.unitTitle}</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">{data.unitIntro}</p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {data.unitCards.map((item, index) => (
                <ScrollReveal
                  key={item.title}
                  delay={index * 0.04}
                  className="bg-surface rounded-2xl border border-slate-200 p-6 sm:p-7"
                >
                  <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{item.desc}</p>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal className="mt-8 bg-dark text-white rounded-2xl border border-stone-800 p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <span className="text-xs text-accent font-bold tracking-[0.18em] uppercase font-heading">
                  {isEn ? "CURRENT MATERIAL BASELINE" : "ACUAN MATERIAL SAAT INI"}
                </span>
                <div className="mt-2 text-3xl sm:text-4xl font-light font-heading">
                  {isEn ? BUSINESS_FACTS.pricing.materialStartingPriceDisplay.en : BUSINESS_FACTS.pricing.materialStartingPriceDisplay.id}*
                </div>
                <p className="mt-2 text-sm text-slate-300 max-w-2xl">
                  {isEn ? BUSINESS_FACTS.pricing.scope.en : BUSINESS_FACTS.pricing.scope.id}
                </p>
              </div>
              <a
                href={getWhatsAppUrl("primary", "price-page", currentLang)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-primary px-7 py-3.5 font-bold text-white hover:bg-primary-hover transition-colors"
              >
                <MessageSquare className="w-4 h-4 mr-2" aria-hidden="true" />
                {isEn ? "Check My Project Price" : "Cek Harga Proyek Saya"}
              </a>
            </ScrollReveal>
          </div>
        </section>

        <section className="border-b border-stone-200/50 py-14 sm:py-18 lg:py-22">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="max-w-3xl mb-9">
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900">{data.factorsTitle}</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">{data.factorsIntro}</p>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {data.factors.map((item, index) => {
                const Icon = factorIcons[index % factorIcons.length];
                return (
                  <ScrollReveal key={item} delay={index * 0.03} className="bg-white border border-slate-200 rounded-xl p-5">
                    <Icon className="w-5 h-5 text-primary mb-3" aria-hidden="true" />
                    <p className="text-sm text-slate-700 leading-relaxed">{item}</p>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white border-b border-stone-200/50 py-14 sm:py-18 lg:py-22">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ScrollReveal className="rounded-2xl border border-slate-200 p-6 sm:p-8">
              <Factory className="w-7 h-7 text-primary mb-4" aria-hidden="true" />
              <h2 className="text-2xl font-bold font-heading text-slate-900">{data.buyerTitle}</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">{data.buyerDesc}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={"/" + currentLang + "/products"} className="inline-flex items-center text-sm font-bold text-primary hover:underline">
                  {isEn ? "View Product Catalog" : "Lihat Katalog Produk"}
                  <ArrowRight className="w-4 h-4 ml-1.5" aria-hidden="true" />
                </Link>
                <Link href={"/" + currentLang + "/jasa-pemasangan-paving-block"} className="inline-flex items-center text-sm font-bold text-primary hover:underline">
                  {isEn ? "Installation Services" : "Jasa Pasang / Kontraktor"}
                  <ArrowRight className="w-4 h-4 ml-1.5" aria-hidden="true" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal className="rounded-2xl border border-slate-200 p-6 sm:p-8">
              <Package className="w-7 h-7 text-accent mb-4" aria-hidden="true" />
              <h2 className="text-2xl font-bold font-heading text-slate-900">{data.specTitle}</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">{data.specDesc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {productLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="inline-flex items-center rounded-lg border border-slate-200 bg-surface px-3 py-2 text-xs sm:text-sm font-semibold text-slate-800 hover:border-accent"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                <Link href={"/" + currentLang + "/blog/perbedaan-ketebalan-paving-block-6cm-8cm-10cm"} className="text-primary font-semibold hover:underline">
                  {isEn ? "6 / 8 / 10 cm thickness guide" : "Panduan tebal 6 / 8 / 10 cm"}
                </Link>
                <Link href={"/" + currentLang + "/blog/mutu-beton-k250-k300-k400-paving-block"} className="text-primary font-semibold hover:underline">
                  {isEn ? "K-250 / K-300 / K-400 guide" : "Panduan mutu K-250 / K-300 / K-400"}
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="border-b border-stone-200/50 py-14 sm:py-18 lg:py-22">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="max-w-3xl mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900">{data.areaTitle}</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">{data.areaDesc}</p>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {areaLinks.map((item) => (
                <Link
                  key={item.slug}
                  href={"/" + currentLang + "/area-layanan/" + item.slug}
                  className="rounded-xl border border-slate-200 bg-white p-4 text-center font-bold text-slate-900 hover:border-accent hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-6 text-sm text-slate-600">
              <Link
                href={"/" + currentLang + "/blog/harga-paving-block-conblock-jabodetabek-2026"}
                className="font-semibold text-primary hover:underline inline-flex items-center"
              >
                {isEn ? "Read the 2026 Greater Jakarta pricing methodology" : "Baca panduan metodologi harga Jabodetabek 2026"}
                <ArrowRight className="w-4 h-4 ml-1.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white border-b border-stone-200/50 py-14 sm:py-18 lg:py-22">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center mb-9">
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900">
                {isEn ? "Paving Block Price FAQ" : "FAQ Harga Paving Block"}
              </h2>
            </ScrollReveal>
            <div className="space-y-3">
              {data.faqs.map((item) => (
                <details key={item.q} className="group rounded-xl border border-slate-200 bg-surface p-5">
                  <summary className="cursor-pointer list-none font-bold text-slate-900 font-heading">{item.q}</summary>
                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-dark text-white py-14 sm:py-18">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-4xl font-light font-heading">{data.ctaTitle}</h2>
            <p className="mt-3 text-slate-300 leading-relaxed">{data.ctaDesc}</p>
            <div className="mt-7 flex flex-col sm:flex-row justify-center gap-3">
              <a
                href={getWhatsAppUrl("primary", "price-page-final", currentLang)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-primary px-7 py-3.5 font-bold text-white hover:bg-primary-hover"
              >
                <MessageSquare className="w-4 h-4 mr-2" aria-hidden="true" />
                {isEn ? "Request a Quote" : "Minta Penawaran Harga"}
              </a>
              <Link
                href={"/" + currentLang + "/products"}
                className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-white/20 px-7 py-3.5 font-bold text-white hover:bg-white/5"
              >
                {isEn ? "Browse Products" : "Lihat Produk"}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
