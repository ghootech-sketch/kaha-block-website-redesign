"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { RotateCcw, Home } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const params = useParams();
  const lang = (params?.lang as string) === "en" ? "en" : "id";

  useEffect(() => {
    // Log error cleanly for debugging if needed
    console.error("Route error boundary caught:", error);
  }, [error]);

  const isEn = lang === "en";

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16 sm:py-24 text-slate-900">
      <div className="max-w-md w-full text-center">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 border border-accent/20 rounded-full font-heading">
          {isEn ? "System Notice" : "Pemberitahuan Sistem"}
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 font-heading text-slate-900">
          {isEn ? "Something Went Wrong" : "Terjadi Kendala Teknis"}
        </h1>
        <p className="text-slate-600 mb-8 font-sans leading-relaxed text-sm sm:text-base">
          {isEn
            ? "We encountered an unexpected error while loading this page. Please try refreshing or return to the home page."
            : "Kami mendapati kendala saat memuat halaman ini. Silakan muat ulang halaman atau kembali ke beranda."}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-bold transition-all bg-primary hover:bg-primary-hover text-white shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent font-heading"
          >
            <RotateCcw className="w-4 h-4 mr-2" aria-hidden="true" />
            {isEn ? "Try Again" : "Coba Lagi"}
          </button>
          <Link
            href={`/${lang}`}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-bold transition-all bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent font-heading"
          >
            <Home className="w-4 h-4 mr-2 text-slate-400" aria-hidden="true" />
            {isEn ? "Back to Home" : "Kembali ke Beranda"}
          </Link>
        </div>
      </div>
    </div>
  );
}
