import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col items-center justify-center bg-white text-[#0B2447] font-sans p-4">
        <div className="max-w-md text-center py-16">
          <h1 className="text-5xl font-black mb-4 font-heading text-[#0B2447]">404</h1>
          <h2 className="text-2xl font-bold mb-4 font-heading">Halaman Tidak Ditemukan</h2>
          <p className="text-gray-600 mb-8 font-sans">
            Halaman yang Anda tuju tidak tersedia atau telah dipindahkan.
          </p>
          <Link
            href="/id"
            className="inline-block bg-[#0B2447] text-white px-8 py-3.5 rounded-full font-bold hover:bg-[#D90429] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300]"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </body>
    </html>
  );
}
