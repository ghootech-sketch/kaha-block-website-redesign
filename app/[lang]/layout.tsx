import "../globals.css";
import { Poppins, Montserrat } from "next/font/google";
import { notFound } from "next/navigation";
import { Locale, isValidLocale } from "@/lib/dictionary";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const dynamicParams = false;

export async function generateStaticParams() {
  return [{ lang: "id" }, { lang: "en" }];
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    notFound();
  }
  const currentLang = lang as Locale;

  return (
    <html lang={currentLang} className={`${poppins.variable} ${montserrat.variable}`}>
      <body suppressHydrationWarning className="min-h-screen flex flex-col bg-white font-sans text-[#0B2447]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-[#0B2447] focus:outline-none focus:ring-2 focus:ring-[#FFC300]"
        >
          {currentLang === "en" ? "Skip to content" : "Lewati ke konten"}
        </a>
        <Navbar lang={currentLang} />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer lang={currentLang} />
      </body>
    </html>
  );
}
