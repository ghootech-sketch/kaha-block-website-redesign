import type { Metadata } from 'next';
import { Poppins, Montserrat } from "next/font/google";
import './globals.css';
import JsonLd from "@/components/JsonLd";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kahablock.com'),
  title: {
    default: 'KAHA BLOCK - Pabrik Paving Block Berkualitas',
    template: '%s | KAHA BLOCK',
  },
  description: 'Pabrik Paving Block Full Otomatis Hidrolik K-250, K-300, dan K-400 dengan Kualitas Terbaik. Solusi tepat untuk pemasangan baru atau perbaikan di Indonesia.',
  openGraph: {
    title: 'KAHA BLOCK - Pabrik Paving Block Berkualitas',
    description: 'Pabrik Paving Block Full Otomatis Hidrolik dengan Kualitas Terbaik.',
    url: 'https://kahablock.com',
    siteName: 'KAHA BLOCK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KAHA BLOCK',
    description: 'Pabrik Paving Block Full Otomatis Hidrolik K-250, K-300, K-400.',
  },
  alternates: {
    canonical: 'https://kahablock.com',
    languages: {
      'id-ID': 'https://kahablock.com/id',
      'en': 'https://kahablock.com/en',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${poppins.variable} ${montserrat.variable}`}>
      <body suppressHydrationWarning className="min-h-screen flex flex-col bg-white font-sans text-[#0B2447]">
        
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-[#0B2447]">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
