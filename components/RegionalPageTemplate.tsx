import { Locale } from "@/lib/dictionary";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { SchemaPageType } from "@/lib/schema";
import { REGIONAL_PAGES_DATA, RegionalSlug } from "@/lib/local-service-data";
import { BUSINESS_FACTS } from "@/lib/business-facts";
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
  ShieldCheck,
  Factory,
  HardHat,
  Building2,
} from "lucide-react";

interface RegionalPageTemplateProps {
  slug: RegionalSlug;
  lang: Locale;
  schemaPage: SchemaPageType;
}

export default function RegionalPageTemplate({
  slug,
  lang,
  schemaPage,
}: RegionalPageTemplateProps) {
  const isEn = lang === "en";
  const data = REGIONAL_PAGES_DATA[slug][lang];

  // Get other regional slugs for cross-linking
  const otherRegions = (
    Object.keys(REGIONAL_PAGES_DATA) as RegionalSlug[]
  ).filter((s) => s !== slug);

  const regionName = slug === "jakarta" ? "DKI Jakarta" : slug.charAt(0).toUpperCase() + slug.slice(1);

  const customFaqsId = [
    {
      q: `Berapa estimasi harga paving block per meter di ${regionName} 2026?`,
      a: `Harga paving block per meter di ${regionName} pada 2026 bersifat kustom dan tidak memiliki tarif tunggal. Biaya ditentukan oleh beberapa variabel fisik seperti model paving conblock, ketebalan (6 cm, 8 cm, atau 10 cm), mutu beton (K-250, K-300, atau K-400), volume pemesanan, dan lokasi pengiriman. Pengiriman material dikirim langsung dari pabrik utama kami di Cisauk, Kabupaten Tangerang.`,
    },
    {
      q: `Berapa biaya pasang paving block per meter di ${regionName}?`,
      a: `Biaya pemasangan paving block per meter di ${regionName} bervariasi bergantung pada beberapa faktor kondisi lapangan, meliputi luas area keseluruhan (m²), kondisi tanah dasar, kebutuhan pemadatan tanah, penggunaan lapisan pasir abu batu, kanstein pengunci, pola pemasangan conblock, serta tingkat kemudahan akses lokasi proyek.`,
    },
    {
      q: `Mencari kontraktor pasang paving block untuk proyek di ${regionName}?`,
      a: `Kaha Block menyediakan layanan kontraktor pemasangan paving block terintegrasi untuk wilayah ${regionName}. Kami menggarap seluruh tahapan pengerjaan mulai dari perataan tanah, pemadatan tanah dasar, pengisian pasir abu batu, penyusunan paving block presisi, hingga penguncian dengan kanstein dan pemadatan akhir. Hubungi kami untuk penawaran harga resmi paket material dan jasa pasang.`,
    },
  ];

  const customFaqsEn = [
    {
      q: `What is the estimated paving block price per meter in ${regionName} for 2026?`,
      a: `The paving block price per square meter in ${regionName} for 2026 is highly customized without a single fixed rate. Pricing is determined by physical variables including the paving model, thickness (6 cm / 8 cm / 10 cm), concrete grade (K-250, K-300, or K-400), order volume, and delivery site. All materials are dispatched directly from our primary manufacturing plant in Cisauk, Tangerang Regency.`,
    },
    {
      q: `How much does paving block installation cost per meter in ${regionName}?`,
      a: `Paving block installation costs per square meter in ${regionName} vary depending on several site conditions, including total area size (m²), subgrade soil conditions, compaction needs, stone dust bedding (pasir abu batu), edge curb (kanstein) locks, paving layout pattern, and accessibility of the project site.`,
    },
    {
      q: `Looking for a paving block installation contractor for a project in ${regionName}?`,
      a: `Kaha Block provides professional turnkey paving block contractor services across the ${regionName} area. We manage all phases from site grading, subgrade soil compaction, bedding sand application, precision paver laying, up to curbstone lock installation and final vibration compaction. Contact us to receive a complete material and installation package quote.`,
    },
  ];

  const baseCustomFaqs = isEn ? customFaqsEn : customFaqsId;
  const faqsToRender = [...baseCustomFaqs];

  // Append other baseline FAQs, skipping any that duplicate the questions we just added
  data.faqs.forEach((bf) => {
    const q = bf.q.toLowerCase();

    const isCommercialDuplicate =
      q.includes("estimasi harga") ||
      q.includes("biaya pasang") ||
      q.includes("biaya pemasangan") ||
      q.includes("estimated paving block price") ||
      q.includes("installation cost") ||
      q.includes("paving block price per") ||
      q.includes("biaya per meter") ||
      q.includes("harga per meter");

    if (!isCommercialDuplicate) {
      faqsToRender.push(bf);
    }
  });

  if (slug === "tangerang") {
    if (lang === "id") {
      faqsToRender.push({
        q: "Di mana pabrik paving block K-300 press hidrolik di Tangerang?",
        a: "Pabrik utama kami yang memproduksi paving block press hidrolik berlokasi di Cisauk, Kabupaten Tangerang. Di fasilitas seluas 9.080 m² ini, PT Kaha Sukses Mandiri menggunakan mesin cetak press hidrolik full otomatis. Kami memproduksi conblock berkualitas dengan pilihan mutu beton K-250, K-300, dan K-400 sesuai dengan jenis produk dan kebutuhan spesifikasi proyek Anda.",
      });
    } else {
      faqsToRender.push({
        q: "Where is the K-300 hydraulic press paving block factory in Tangerang?",
        a: "Our primary manufacturing plant producing hydraulic press paving blocks is located in Cisauk, Tangerang Regency. Within this 9,080 m² facility, PT Kaha Sukses Mandiri operates fully automatic hydraulic press machinery. We manufacture quality concrete pavers with compressive strength options of K-250, K-300, and K-400 depending on the specific product type and project requirements.",
      });
    }
  }

  return (
    <>
      <JsonLd page={schemaPage} lang={lang} />

      <PageHero
        eyebrow={data.eyebrow}
        title={data.h1}
        description={data.heroDesc}
      />

      {/* Factual Factory Origin & Logistics Transparency Banner */}
      <section className="bg-surface border-b border-stone-200/40 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-2 border-primary/20 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold font-heading mb-4">
                  <Factory className="w-4 h-4" aria-hidden="true" />
                  <span>
                    {isEn
                      ? "Factory Plant: Cisauk, Tangerang Regency"
                      : "Pabrik Utama: Cisauk, Kabupaten Tangerang"}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading text-slate-900 mb-3">
                  {isEn
                    ? "Direct Plant Shipments & Guaranteed Offloading"
                    : "Pengiriman Langsung Pabrik & Penurunan Material"}
                </h2>
                <p className="text-slate-600 text-sm sm:text-base font-sans leading-relaxed mb-4">
                  {data.factoryContextNotice}
                </p>
                <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-700 font-semibold">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-primary" aria-hidden="true" />
                    {BUSINESS_FACTS.address.street},{" "}
                    {BUSINESS_FACTS.address.locality}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Truck className="w-4 h-4 text-accent" aria-hidden="true" />
                    {data.deliveryNotice}
                  </span>
                </div>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
                <a
                  href={getWhatsAppUrl("primary", slug, lang)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary-hover text-white font-bold px-6 py-3.5 rounded-xl inline-flex items-center justify-center gap-2 text-sm transition-colors min-h-[44px]"
                >
                  <MessageSquare className="w-4 h-4" aria-hidden="true" />
                  <span>
                    {isEn ? "Request Quote" : "Minta Penawaran Harga"}
                  </span>
                </a>
                <Link
                  href={`/${lang}/jasa-pemasangan-paving-block`}
                  className="bg-surface hover:bg-stone-200/60 text-slate-900 font-semibold px-6 py-3.5 rounded-xl inline-flex items-center justify-center gap-2 text-sm border border-slate-300 transition-colors min-h-[44px]"
                >
                  <HardHat className="w-4 h-4 text-primary" aria-hidden="true" />
                  <span>
                    {isEn ? "Installation Info" : "Info Jasa Pasang"}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Grid */}
      <section className="bg-white border-b border-stone-200/40 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.keyBenefits.map((benefit, idx) => (
              <ScrollReveal key={idx} delay={0.05 * idx} className="h-full">
                <div className="bg-surface border border-slate-200 rounded-xl p-6 h-full flex flex-col justify-between shadow-xs">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                      <ShieldCheck className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 text-sm font-sans leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Districts & Subregions */}
      <section className="bg-surface border-b border-stone-200/40 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent block mb-2 font-heading">
              {isEn ? "Subregion Coverage" : "Cakupan Wilayah"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 tracking-tight">
              {data.subregionsTitle}
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base font-sans leading-relaxed">
              {data.subregionsIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {data.subregions.map((sub, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-5 hover:border-primary transition-colors shadow-xs"
              >
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                  <h3 className="text-base font-bold font-heading text-slate-900">
                    {sub.name}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  {sub.useCase}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-white border-b border-stone-200/40 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary block mb-2 font-heading">
              {isEn ? "Applications" : "Aplikasi Proyek"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 tracking-tight">
              {data.useCaseSectionTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.useCases.map((uc, idx) => (
              <ScrollReveal key={idx} delay={0.05 * idx} className="h-full">
                <div className="bg-surface border border-slate-200 rounded-xl p-6 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4">
                      <Building2 className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold font-heading text-slate-900 mb-2">
                      {uc.title}
                    </h3>
                    <p className="text-slate-600 text-sm font-sans leading-relaxed">
                      {uc.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Service Context Notice / Commercial Contractor Focus */}
      <section className="bg-surface border-b border-stone-200/40 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-3">
            <HardHat className="w-6 h-6 text-primary shrink-0" aria-hidden="true" />
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
              {data.contractorSectionTitle || (isEn ? "Professional Laying & Sub-Base Preparation" : "Layanan Pemasangan Paving Block Presisi")}
            </h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base font-sans leading-relaxed">
            {data.contractorSectionDesc || data.installationNotice}
          </p>
        </div>
      </section>

      {/* Trust Facts Grid */}
      <section className="bg-white border-b border-stone-200/40 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 tracking-tight">
              {data.trustFactsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.trustFacts.map((tf, idx) => (
              <div
                key={idx}
                className="bg-surface border border-slate-200 rounded-xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <ShieldCheck className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-bold font-heading text-slate-900 mb-1">
                    {tf.label}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm font-sans leading-relaxed">
                    {tf.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          7B. REGIONAL AIO OPERATIONS BLOCK (Answer-First Section)
         ========================================================================= */}
      <section className="bg-white py-16 sm:py-20 border-b border-stone-200/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="flex flex-col gap-6">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 tracking-tight">
              {isEn ? (
                slug === "tangerang" ? (
                  "Paving Block Factory Operations & Installation Services in Tangerang"
                ) : (
                  `Paving Block Delivery Operations & Installation Services in ${slug === "jakarta" ? "DKI Jakarta" : slug.charAt(0).toUpperCase() + slug.slice(1)}`
                )
              ) : (
                slug === "tangerang" ? (
                  "Operasi Pabrik & Jasa Pemasangan Paving Block Tangerang"
                ) : (
                  `Operasi Pengiriman & Jasa Pemasangan Paving Block ${slug === "jakarta" ? "DKI Jakarta" : slug.charAt(0).toUpperCase() + slug.slice(1)}`
                )
              )}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
              {isEn ? (
                slug === "tangerang" ? (
                  "Kaha Block provides direct manufacturer supply and professional installation services in Tangerang Regency, Tangerang City, and South Tangerang directly from our plant in Cisauk, Tangerang Regency. Operating since 2015, we manufacture K-250, K-300, and K-400 concrete grade paving blocks using fully automatic hydraulic press machinery. We guarantee direct plant shipments and expert contractor support from ground preparation to final compacting."
                ) : (
                  `To serve your paving needs in ${slug === "jakarta" ? "DKI Jakarta" : slug.charAt(0).toUpperCase() + slug.slice(1)}, all shipments are dispatched directly from our primary manufacturing plant in Cisauk, Tangerang Regency. Kaha Block offers free shipping across the Jabodetabek region with material offloading included, along with turnkey paving block installation services led by our highly experienced team. We ensure consistent high-quality concrete pavers and professional laying standards across all districts in ${slug === "jakarta" ? "DKI Jakarta" : slug.charAt(0).toUpperCase() + slug.slice(1)}.`
                )
              ) : (
                slug === "tangerang" ? (
                  "Kaha Block melayani pengadaan conblock dan jasa pemasangan paving block di Tangerang Raya secara langsung dari fasilitas pabrik kami di Cisauk, Kabupaten Tangerang. Proses produksi menggunakan mesin otomatis hidrolik untuk mutu beton K-250, K-300, dan K-400. Kami melayani pengiriman langsung ke lokasi proyek dengan fasilitas gratis ongkos kirim serta tim kontraktor berpengalaman yang siap menggarap persiapan lahan hingga finishing perkerasan jalan."
                ) : (
                  `Untuk melayani kebutuhan di wilayah ${slug === "jakarta" ? "DKI Jakarta" : slug.charAt(0).toUpperCase() + slug.slice(1)}, kami melakukan pengiriman langsung dari pabrik utama kami di Cisauk, Kabupaten Tangerang. Pengiriman material ke wilayah Jabodetabek gratis dan sudah termasuk penurunan barang. Kami juga menyediakan layanan kontraktor pemasangan paving block terpadu oleh tim berpengalaman untuk memastikan pasokan conblock berkualitas tinggi dan pengerjaan yang presisi di seluruh kecamatan di ${slug === "jakarta" ? "DKI Jakarta" : slug.charAt(0).toUpperCase() + slug.slice(1)}.`
                )
              )}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* City Specific FAQs */}
      <section className="bg-surface border-b border-stone-200/40 py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 tracking-tight">
              {isEn
                ? "Frequently Asked Questions"
                : "Pertanyaan Umum Pengadaan & Pemasangan"}
            </h2>
          </div>

          <div className="space-y-4">
            {faqsToRender.map((item, idx) => (
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

      {/* Other Regions Navigation */}
      <section className="bg-white border-b border-stone-200/40 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900">
              {isEn
                ? "Explore Other Service Regions in Jabodetabek"
                : "Lihat Area Layanan Paving Block Lainnya di Jabodetabek"}
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {otherRegions.map((otherSlug) => {
              const otherReg = REGIONAL_PAGES_DATA[otherSlug][lang];
              return (
                <Link
                  key={otherSlug}
                  href={`/${lang}/area-layanan/${otherSlug}`}
                  className="bg-surface border border-slate-200 hover:border-primary rounded-xl p-4 text-center block transition-all group min-h-[44px]"
                >
                  <MapPin className="w-4 h-4 text-primary mx-auto mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-xs sm:text-sm font-bold font-heading text-slate-900 block capitalize">
                    Paving Block {otherReg.slug}
                  </span>
                </Link>
              );
            })}
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
              href={getWhatsAppUrl("secondary", slug, lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent-hover text-slate-900 font-bold px-7 py-3.5 rounded-xl inline-flex items-center gap-2.5 transition-colors text-sm sm:text-base shadow-sm min-h-[44px]"
            >
              <MessageSquare className="w-5 h-5" aria-hidden="true" />
              <span>
                {isEn ? "WhatsApp Fast Quote" : "Konsultasi Fast-Response"}
              </span>
            </a>
            <Link
              href={`/${lang}/contact`}
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
