import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import type { Locale } from "@/lib/dictionary";
import { BUSINESS_FACTS } from "@/lib/business-facts";

export default function QualityValueStrip({ lang }: { lang: Locale }) {
  const en = lang === "en";
  return (
    <aside aria-label={en ? "Material quality" : "Kualitas material"} className="flex items-start gap-3 rounded-xl border border-accent/30 border-l-4 border-l-accent bg-stone-50 p-4 sm:items-center sm:gap-4 sm:p-5">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-slate-800" aria-hidden="true">
        <ShieldCheck className="h-6 w-6" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-heading text-base font-bold leading-snug text-slate-900 sm:text-lg">
          {en ? "Compare More Than Price. Compare Quality." : "Jangan Hanya Bandingkan Harga. Bandingkan Kualitasnya."}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-slate-600">
          {en ? "Fully automatic hydraulic pressing supports density, dimensional precision and consistent concrete quality. Choose the grade and thickness suited to your project." : "Mesin press hidrolik full otomatis mendukung kepadatan, presisi ukuran dan konsistensi mutu beton. Pilih mutu dan ketebalan sesuai kebutuhan proyek."}
        </p>
        <p className="mt-2 text-sm font-semibold text-slate-800">{BUSINESS_FACTS.purchaseTerms.testedQuality[lang]}</p>
        <Link href={"/" + lang + "/projects/production"} className="mt-1 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
          {en ? "See our production process" : "Lihat proses produksi kami"} <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
        </Link>
        <dl className="mt-3 grid gap-3 border-t border-stone-200 pt-3 sm:grid-cols-3">
          <div>
            <dt className="text-xs font-bold text-slate-800">{en ? "Flexible orders" : "Pemesanan fleksibel"}</dt>
            <dd className="mt-1 text-xs leading-relaxed text-slate-600">{BUSINESS_FACTS.purchaseTerms.minimumOrder[lang]}</dd>
          </div>
          <div>
            <dt className="text-xs font-bold text-slate-800">{en ? "Fast delivery" : "Pengiriman cepat"}</dt>
            <dd className="mt-1 text-xs leading-relaxed text-slate-600">{BUSINESS_FACTS.purchaseTerms.deliveryTiming[lang]}</dd>
          </div>
          <div>
            <dt className="text-xs font-bold text-slate-800">{en ? "Payment options" : "Pembayaran fleksibel"}</dt>
            <dd className="mt-1 text-xs leading-relaxed text-slate-600">{BUSINESS_FACTS.purchaseTerms.payment[lang]}</dd>
          </div>
        </dl>
      </div>
    </aside>
  );
}
