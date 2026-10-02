"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  const params = useParams();
  const lang = (params?.lang as string) === "en" ? "en" : "id";
  const isEn = lang === "en";

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16 sm:py-24 text-slate-900">
      <div className="max-w-md w-full text-center">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 border border-accent/20 rounded-full font-heading">
          404 Not Found
        </span>
        <h1 className="text-4xl sm:text-5xl font-black mb-3 font-heading text-slate-900 tracking-tight">
          404
        </h1>
        <h2 className="text-xl sm:text-2xl font-bold mb-3 font-heading text-slate-900">
          {isEn ? "Page Not Found" : "Halaman Tidak Ditemukan"}
        </h2>
        <p className="text-slate-600 mb-8 font-sans leading-relaxed text-sm sm:text-base">
          {isEn
            ? "The page you are looking for does not exist or has been moved to a new address."
            : "Halaman yang Anda tuju tidak tersedia atau telah dipindahkan ke tautan lain."}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href={`/${lang}`}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-bold transition-all bg-primary hover:bg-primary-hover text-white shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent font-heading"
          >
            <Home className="w-4 h-4 mr-2" aria-hidden="true" />
            {isEn ? "Back to Home" : "Kembali ke Beranda"}
          </Link>
          <Link
            href={`/${lang}/products`}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-bold transition-all bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent font-heading"
          >
            <ArrowLeft className="w-4 h-4 mr-2 text-slate-400" aria-hidden="true" />
            {isEn ? "Browse Products" : "Lihat Produk Kami"}
          </Link>
        </div>
      </div>
    </div>
  );
}
