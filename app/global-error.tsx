"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col items-center justify-center bg-[#F7F5F0] text-[#0F2042] font-sans p-4">
        <div className="max-w-md text-center">
          <h1 className="text-4xl font-bold mb-4 font-heading text-[#0F2042]">Terjadi Kesalahan</h1>
          <p className="text-slate-600 mb-8">Silakan coba beberapa saat lagi.</p>
          <button
            onClick={() => reset()}
            className="bg-[#0F2042] text-white px-8 py-3 rounded-full font-bold hover:bg-[#7A1C1C] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            Coba Lagi
          </button>
        </div>
      </body>
    </html>
  );
}
