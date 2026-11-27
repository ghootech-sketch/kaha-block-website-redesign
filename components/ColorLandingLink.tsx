import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PAVING_COLORS, colorLabel } from "@/lib/paving-colors";
import type { Locale } from "@/lib/dictionary";

export default function ColorLandingLink({ lang }: { lang: Locale }) {
  const en = lang === "en";
  return <section className="bg-white border-b border-stone-200 py-6 sm:py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h2 className="font-heading font-bold text-lg sm:text-xl text-slate-900">{en ? "Looking for colored paving blocks?" : "Cari Paving Block Warna?"}</h2>
        <div className="flex flex-wrap gap-3 mt-3">{PAVING_COLORS.map(c => <span key={c.id} className="inline-flex items-center gap-1.5 text-xs text-slate-700"><span className="w-5 h-5 rounded border border-black/10" style={{backgroundColor:c.hex}} aria-hidden="true"/>{colorLabel(c.id,lang)}</span>)}</div>
        <p className="text-xs text-slate-600 mt-2">{en ? "Illustrative colors; availability depends on model." : "Ilustrasi warna; pilihan tersedia sesuai model."}</p>
      </div>
      <Link href={`/${lang}/paving-block-warna`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover text-white px-5 py-3 font-semibold text-sm focus-visible:ring-2 focus-visible:ring-accent">{en ? "Choose Color & Model" : "Lihat Pilihan Warna & Model"} <ArrowRight size={17}/></Link>
    </div>
  </section>;
}
