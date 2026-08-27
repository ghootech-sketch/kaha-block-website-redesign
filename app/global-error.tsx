"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col items-center justify-center bg-white text-[#0B2447] font-sans p-4">
        <div className="max-w-md text-center">
          <h1 className="text-4xl font-bold mb-4 font-heading text-[#0B2447]">Terjadi Kesalahan</h1>
          <p className="text-gray-600 mb-8">Silakan coba beberapa saat lagi.</p>
          <button
            onClick={() => reset()}
            className="bg-[#0B2447] text-white px-8 py-3 rounded-full font-bold hover:bg-[#D90429] transition-colors"
          >
            Coba Lagi
          </button>
        </div>
      </body>
    </html>
  );
}
