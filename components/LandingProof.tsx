import Image from "next/image";
import Link from "next/link";
import { GOOGLE_REVIEWS_DATA } from "@/components/GoogleReviews";
import type { Locale } from "@/lib/dictionary";

export default function LandingProof({ lang }: { lang: Locale }) {
  const en = lang === "en";
  const review = GOOGLE_REVIEWS_DATA[0];
  return <section aria-label={en ? "Factory documentation and customer experience" : "Dokumentasi pabrik dan pengalaman pelanggan"} className="border-b border-stone-200 bg-white py-7 sm:py-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-5 sm:gap-8">
      <Link href={`/${lang}/projects/production`} className="flex items-center gap-4 rounded-xl border border-stone-200 p-4 hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
        <div className="relative w-24 sm:w-32 aspect-[4/3] shrink-0 overflow-hidden rounded-lg"><Image unoptimized src="/images/production/kaha-block-produksi-02.webp" alt={en ? "Kaha Block hydraulic production process" : "Dokumentasi proses produksi hidrolik Kaha Block"} fill sizes="128px" className="object-cover" /></div>
        <div><h2 className="font-bold text-slate-900">{en ? "See our Cisauk factory" : "Lihat Pabrik Kami di Cisauk"}</h2><p className="mt-1 text-sm text-slate-600">{en ? "View original production photos and videos." : "Kenali proses produksi melalui foto dan video pabrik."}</p><span className="mt-2 inline-block text-sm font-semibold text-primary underline">{en ? "View production documentation" : "Lihat dokumentasi produksi"}</span></div>
      </Link>
      <figure className="rounded-xl bg-surface border border-stone-200 p-5 flex flex-col justify-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">{en ? "Customer review on Google" : "Ulasan pelanggan di Google"}</p>
        <blockquote className="text-base text-slate-900">“{review.text}”</blockquote>
        <figcaption className="mt-3 text-sm text-slate-600">{review.name} · <a href={review.url} target="_blank" rel="noopener noreferrer" className="underline text-primary font-semibold">{en ? "View review source" : "Lihat sumber ulasan"}</a></figcaption>
      </figure>
    </div>
  </section>;
}
