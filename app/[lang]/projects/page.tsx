import { dictionaries, Locale } from "@/lib/dictionary";
import ScrollReveal from "@/components/ScrollReveal";
import PlaceholderImage from "@/components/PlaceholderImage";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = dictionaries[lang as Locale].projects;
  return {
    title: dict.title,
    description: dict.description,
  };
}

export default async function Projects({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const currentLang = lang as Locale;
  const dict = dictionaries[currentLang].projects;

  // Provide 6 neutral documentation placeholders
  const galleryPlaceholders = [
    "TODO: Documentation 1 from PDF",
    "TODO: Documentation 2 from PDF",
    "TODO: Documentation 3 from PDF",
    "TODO: Documentation 4 from PDF",
    "TODO: Documentation 5 from PDF",
    "TODO: Documentation 6 from PDF",
  ];

  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-[#0B2447] tracking-tight font-heading">
            {dict.title}
          </h1>
          <div className="w-24 h-1.5 bg-[#D90429] mx-auto mt-8 rounded-full" />
          <p className="mt-8 text-xl text-[#0B2447]/80 max-w-2xl mx-auto font-sans leading-relaxed">
            {dict.description}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-24">
          {galleryPlaceholders.map((text, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1} direction="none" className="relative h-72 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group border border-gray-100 flex flex-col">
              <PlaceholderImage text={text} className="w-full h-full flex-grow group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm font-medium text-center">
                  Hasil Aplikasi di Lapangan {idx + 1}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
