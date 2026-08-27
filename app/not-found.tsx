import Link from 'next/link';

export default function NotFound() {
  return (
    <html lang="id">
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen bg-white text-[#0B2447]">
          <h2 className="text-4xl font-bold mb-4">404 - Halaman Tidak Ditemukan</h2>
          <Link href="/" className="text-blue-500 hover:underline">
            Kembali ke Beranda
          </Link>
        </div>
      </body>
    </html>
  );
}
