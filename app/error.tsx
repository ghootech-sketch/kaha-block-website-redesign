"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RotateCcw, Home } from "lucide-react";

export default function RootError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Root error boundary caught:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-surface text-slate-900 font-sans p-4">
      <div className="max-w-md w-full text-center py-16">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 border border-accent/20 rounded-full font-heading">
          Sistem Kaha Block
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 font-heading text-slate-900">
          Terjadi Kendala Teknis
        </h1>
        <p className="text-slate-600 mb-8 font-sans leading-relaxed text-sm sm:text-base">
          Kami mendapati kendala saat memuat halaman ini. Silakan muat ulang halaman atau kembali ke beranda.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-bold transition-all bg-primary hover:bg-primary-hover text-white shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent font-heading"
          >
            <RotateCcw className="w-4 h-4 mr-2" aria-hidden="true" />
            Coba Lagi
          </button>
          <Link
            href="/id"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-bold transition-all bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent font-heading"
          >
            <Home className="w-4 h-4 mr-2 text-slate-400" aria-hidden="true" />
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
