import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import LandingProof from "@/components/LandingProof";
import QualityValueStrip from "@/components/QualityValueStrip";
import PavingColorQuote from "@/components/PavingColorQuote";
import { isValidLocale, type Locale } from "@/lib/dictionary";
import { constructPageMetadata } from "@/lib/metadata";
import { PAVING_COLORS, colorLabel } from "@/lib/paving-colors";
import { getColorProducts } from "@/lib/paving-color-products";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { BUSINESS_FACTS } from "@/lib/business-facts";

export async function generateMetadata({params}: {params: Promise<{lang:string}>}): Promise<Metadata> {
  const {lang} = await params;
  return isValidLocale(lang) ? constructPageMetadata("pavingColors", lang as Locale) : {};
}

export default async function PavingColorsPage({params}: {params: Promise<{lang:string}>}) {
  const {lang} = await params;
  if (!isValidLocale(lang)) notFound();
  const locale = lang as Locale;
  const en = locale === "en";
  const products = getColorProducts(locale);
  return <>
    <PageHero variant="sales" eyebrow={en ? "DIRECT FROM CISAUK FACTORY" : "LANGSUNG DARI PABRIK CISAUK"} title={en ? "Colored Paving Blocks: Grey, Red, Black & Yellow" : "Paving Block Warna: Abu-abu, Merah, Hitam & Kuning"} description={en ? "Choose your paving model and color for courtyards, pathways, parking areas and projects. Confirm availability and request a factory quotation." : "Pilihan paving block warna untuk halaman, jalur pedestrian, area parkir, dan proyek. Pilih model sesuai kebutuhan, lalu cek ketersediaan dan penawaran langsung dari pabrik."}>
      <div className="flex flex-wrap gap-3">
        <a id="color-hero-whatsapp" href={getWhatsAppUrl("primary","colors",locale)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-[#166534] hover:bg-[#14532d] px-6 py-3 text-white font-bold"><MessageCircle size={20}/>{en ? "Check Color & Price" : "Cek Warna & Harga via WhatsApp"}</a>
        <a href="#pilih-warna" className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-white/60 px-6 py-3 text-white font-semibold hover:bg-white/10">{en ? "Choose Color & Model" : "Pilih Warna & Model"} <ArrowRight size={16}/></a>
      </div>
      <p className="mt-3 text-sm text-white/90">{BUSINESS_FACTS.operations.deliveryPolicy.freeDeliveryAndOffloading[locale]}</p>
    </PageHero>
    <div className="bg-white px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <QualityValueStrip lang={locale} />
      </div>
    </div>
    <section className="bg-surface">
      <PavingColorQuote lang={locale} products={products} />
    </section>
    <LandingProof lang={locale} />
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900">{en ? "Available colors by paving model" : "Pilihan Warna Berdasarkan Model Paving"}</h2>
        <p className="mt-3 mb-7 text-sm text-slate-600">{en ? "Existing catalog options. Confirm stock, sample color and lead time with our sales team before ordering." : "Pilihan berdasarkan spesifikasi katalog. Konfirmasikan stok, sampel warna asli, dan jadwal produksi sebelum memesan."}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map(p => <article key={p.slug} className="rounded-xl border border-stone-200 overflow-hidden flex flex-col">
            <div className="relative aspect-[4/3] bg-surface"><Image src={p.image} alt={p.name} fill sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw" className="object-cover" /></div>
            <div className="p-4 flex flex-col flex-1">
              <h3 className="font-heading font-bold text-lg">{p.name}</h3>
              {p.thickness && <p className="text-sm text-slate-600 mt-1">{en ? "Thickness: " : "Tebal: "}{p.thickness}</p>}
              <div className="flex flex-wrap gap-2 my-4">{PAVING_COLORS.filter(c => p.colors.includes(c.id)).map(c => <span key={c.id} className="inline-flex items-center gap-1 text-xs"><span className="w-5 h-5 rounded border border-black/10" style={{backgroundColor:c.hex}}/>{colorLabel(c.id,locale)}</span>)}</div>
              <Link href={`/${locale}/products/${p.slug}`} className="mt-auto inline-flex min-h-11 items-center gap-2 text-primary font-semibold text-sm hover:underline">{en ? "Product specifications" : "Lihat spesifikasi produk"}<ArrowRight size={14}/></Link>
            </div>
          </article>)}
        </div>
        <p className="mt-5 text-xs text-slate-500">{en ? "Photos show catalog models, not a guarantee of the selected color. Swatches are illustrative." : "Foto menampilkan model katalog, bukan jaminan warna yang dipilih. Swatch merupakan ilustrasi."}</p>
      </div>
    </section>
    <section className="bg-surface py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
        <article className="bg-white border border-stone-200 rounded-xl p-6"><h2 className="font-heading font-bold text-xl">{en ? "How much does colored paving cost?" : "Berapa Harga Paving Block Warna?"}</h2><p className="mt-3 text-sm leading-relaxed text-slate-600">{en ? "The quotation depends on model, color, thickness, grade, quantity and destination. General starting prices do not apply automatically to every color." : "Harga paving warna merah, hitam, kuning, maupun abu-abu menyesuaikan model, ketebalan, mutu, volume, dan lokasi. Harga mulai material umum tidak otomatis berlaku untuk setiap warna."}</p><Link href={`/${locale}/harga-paving-block`} className="inline-flex min-h-11 items-center gap-2 text-primary font-semibold hover:underline">{en ? "View pricing guide" : "Lihat panduan harga per m²"}<ArrowRight size={15}/></Link></article>
        <article className="bg-white border border-stone-200 rounded-xl p-6"><h2 className="font-heading font-bold text-xl">{en ? "Color combinations and installation" : "Kombinasi Warna & Jasa Pemasangan"}</h2><p className="mt-3 text-sm leading-relaxed text-slate-600">{en ? "Combine colors for borders, patterns or visual demarcation. Confirm model, loading conditions and scope with our team." : "Kombinasikan warna untuk pembatas pola, aksen, atau marka visual. Diskusikan model, kondisi beban area, dan kebutuhan pemasangan agar spesifikasi sesuai."}</p><Link href={`/${locale}/jasa-pemasangan-paving-block`} className="inline-flex min-h-11 items-center gap-2 text-primary font-semibold hover:underline">{en ? "View installation services" : "Lihat jasa pemasangan"}<ArrowRight size={15}/></Link></article>
      </div>
    </section>
  </>;
}
