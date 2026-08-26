import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'KAHA BLOCK - Pabrik Paving Block Berkualitas',
  description: 'Pabrik Paving Block Full Otomatis Hidrolik K350 dengan Kualitas Terbaik. Solusi tepat untuk pemasangan baru atau perbaikan di Indonesia.',
  openGraph: {
    title: 'KAHA BLOCK - Pabrik Paving Block Berkualitas',
    description: 'Pabrik Paving Block Full Otomatis Hidrolik K350 dengan Kualitas Terbaik.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KAHA BLOCK',
    description: 'Pabrik Paving Block Full Otomatis Hidrolik K350 dengan Kualitas Terbaik.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
