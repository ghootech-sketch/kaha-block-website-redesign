import { dictionaries, Locale } from "@/lib/dictionary";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default async function About({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const currentLang = lang as Locale;
  const dict = dictionaries[currentLang].about;

  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B2447] tracking-tight">
            {dict.title}
          </h1>
          <div className="w-24 h-1 bg-[#D90429] mx-auto mt-6 rounded-full" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="right" className="space-y-6 text-lg text-[#0B2447]/80 leading-relaxed">
            <p>{dict.description1}</p>
            <p>{dict.description2}</p>
            <p>{dict.description3}</p>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={0.2} className="relative h-[400px] rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <Image
              src="https://picsum.photos/seed/kaha-about/800/800"
              alt="About KAHA BLOCK"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
