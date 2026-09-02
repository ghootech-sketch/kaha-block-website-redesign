"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col items-center justify-center bg-surface text-slate-900 font-sans p-4">
        <div className="max-w-md text-center">
          <h1 className="text-4xl font-bold mb-4 font-heading text-slate-900">Terjadi Kesalahan</h1>
          <p className="text-slate-600 mb-8">Silakan coba beberapa saat lagi.</p>
          <button
            onClick={() => reset()}
            className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-full font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Coba Lagi
          </button>
        </div>
      </body>
    </html>
  );
}
