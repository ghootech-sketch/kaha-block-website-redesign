import { Locale } from "@/lib/dictionary";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "id" }];
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const currentLang = lang as Locale;
  
  return (
    <>
      <Navbar lang={currentLang} />
      <main id="main-content" className="flex-grow">
        {children}
      </main>
      <Footer lang={currentLang} />
    </>
  );
}
