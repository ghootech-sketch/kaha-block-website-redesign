import type { NextConfig } from "next";

const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "frame-src 'self' https://www.google.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/id",
        permanent: true,
      },
      {
        source: "/tips-memilih-paving-beton-yang-tahan-lama",
        destination: "/id/blog/panduan-memilih-paving-block-hunian-proyek",
        permanent: true,
      },
      {
        source: "/desain-paving-rumah-minimalis-yang-menawan",
        destination: "/id/products",
        permanent: true,
      },
      {
        source: "/inspirasi-desain-menarik-dengan-paving-block-merah",
        destination: "/id/products",
        permanent: true,
      },
      {
        source: "/supplier-paving-block-terpercaya-kuat-rapi-dan-estetis",
        destination: "/id",
        permanent: true,
      },
      {
        source: "/jual-paving-block-murah",
        destination: "/id/products",
        permanent: true,
      },
      {
        source: "/panduan-pasang-paving-hexagon-agar-rapi-dan-tahan-lama",
        destination: "/id/blog/persiapan-sebelum-pemasangan-paving-block",
        permanent: true,
      },
      {
        source: "/kelebihan-paving-hexagon-untuk-halaman-rumah-dan-taman",
        destination: "/id/products",
        permanent: true,
      },
      {
        source: "/proses-pemasangan-paving-block-yang-benar-dan-rapi",
        destination: "/id/blog/persiapan-sebelum-pemasangan-paving-block",
        permanent: true,
      },
      {
        source: "/inspirasi-desain-lantai-dengan-paving-bata",
        destination: "/id/products",
        permanent: true,
      },
      {
        source: "/paving-bata-vs-beton-mana-yang-lebih-baik",
        destination: "/id/blog/perbandingan-paving-block-aspal-cor-beton",
        permanent: true,
      },
      {
        source: "/paving-block-sebagai-alternatif-material-ramah-lingkungan",
        destination: "/id/blog/paving-block-ramah-lingkungan-resapan-air",
        permanent: true,
      },
      {
        source: "/paving-block-interlocking-keunggulan-dan-cara-pemasangannya",
        destination: "/id/blog/persiapan-sebelum-pemasangan-paving-block",
        permanent: true,
      },
      {
        source: "/cara-menghitung-kebutuhan-paving-block-per-meter-persegi",
        destination: "/id/blog/cara-merencanakan-kebutuhan-paving-block",
        permanent: true,
      },
      {
        source: "/paving-block-aman-dan-estetik-untuk-sekolah-dan-fasilitas-umum",
        destination: "/id/blog/panduan-memilih-paving-block-hunian-proyek",
        permanent: true,
      },
      {
        source: "/paving-block-untuk-drainase-manfaat-dan-cara-kerjanya",
        destination: "/id/blog/paving-block-ramah-lingkungan-resapan-air",
        permanent: true,
      },
      {
        source: "/cara-memilih-kontraktor-pemasangan-paving-block-terpercaya",
        destination: "/id/contact",
        permanent: true,
      },
      {
        source: "/paving-block-custom-untuk-tampilan-halaman-lebih-estetik",
        destination: "/id/products",
        permanent: true,
      },
      {
        source: "/tren-desain-paving-block-tahun-ini-minimalis-dan-elegan",
        destination: "/id/products",
        permanent: true,
      },
      {
        source: "/mengapa-paving-block-ramah-lingkungan-ini-penjelasannya",
        destination: "/id/blog/paving-block-ramah-lingkungan-resapan-air",
        permanent: true,
      },
      {
        source: "/mengatasi-paving-block-yang-tenggelam-atau-bergelombang",
        destination: "/id/blog/tips-merawat-paving-block",
        permanent: true,
      },
      {
        source: "/jual-paving-block-berkualitas-solusi-kuat-dan-estetis-untuk-lantai-eksterior",
        destination: "/id/products",
        permanent: true,
      },
      {
        source: "/jual-conblock-custom-desain-unik-untuk-tampilan-lebih-menarik",
        destination: "/id/products",
        permanent: true,
      },
      {
        source: "/jual-paving-block-segi-enam-pilihan-tepat-untuk-jalan-dan-taman",
        destination: "/id/products",
        permanent: true,
      },
      {
        source: "/teknik-pemasangan-paving-block-yang-benar-agar-tahan-lama",
        destination: "/id/blog/persiapan-sebelum-pemasangan-paving-block",
        permanent: true,
      },
      {
        source: "/jual-conblock-murah-untuk-halaman-jalan-dan-area-komersial",
        destination: "/id/products",
        permanent: true,
      },
      {
        source: "/jual-paving-block-interlock-pilihan-ideal-untuk-jalan-raya-dan-trotoar",
        destination: "/id/blog/panduan-memilih-paving-block-hunian-proyek",
        permanent: true,
      },
      {
        source: "/inspirasi-desain-paving-block-untuk-halaman-rumah-yang-estetik",
        destination: "/id/products",
        permanent: true,
      },
      {
        source: "/perbandingan-paving-block-dan-cor-beton-mana-yang-lebih-baik",
        destination: "/id/blog/perbandingan-paving-block-aspal-cor-beton",
        permanent: true,
      },
      {
        source: "/jual-conblock-berbagai-model-dan-ukuran-cocok-untuk-semua-kebutuhan",
        destination: "/id/products",
        permanent: true,
      },
      {
        source: "/kelebihan-paving-block-untuk-jalan-perumahan-dan-area-parkir",
        destination: "/id/blog/panduan-memilih-paving-block-hunian-proyek",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Content-Security-Policy",
            value: contentSecurityPolicy,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
