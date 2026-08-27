import { dictionaries, isValidLocale, Locale } from "@/lib/dictionary";
import { constructPageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import PlaceholderImage from "@/components/PlaceholderImage";
import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    return {};
  }
  return constructPageMetadata("about", lang as Locale);
}

export default async function About({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    notFound();
  }
  const currentLang = lang as Locale;
  const dict = dictionaries[currentLang].about;

  return (
    <>
      <JsonLd page="about" lang={currentLang} />
      <div className="bg-white min-h-screen py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-[#0B2447] tracking-tight font-heading">
              {dict.title}
            </h1>
            <div className="w-24 h-1.5 bg-[#D90429] mx-auto mt-8 rounded-full" />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <ScrollReveal direction="right" className="space-y-6 text-lg text-[#0B2447]/80 leading-relaxed font-sans">
              <h2 className="text-3xl font-bold text-[#0B2447] font-heading mb-6">{dict.companyName}</h2>
              <p>{dict.description1}</p>
              <p>{dict.description2}</p>
              <p>{dict.description3}</p>
            </ScrollReveal>

            {/* Target Asset: /public/images/company/factory.jpg */}
            <ScrollReveal direction="left" delay={0.2} className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <PlaceholderImage text={dict.facilityImageAlt} className="w-full h-full" />
            </ScrollReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <ScrollReveal delay={0.3} className="bg-gray-50 p-10 rounded-3xl border-l-8 border-[#0B2447] shadow-sm">
              <h3 className="text-2xl font-bold text-[#0B2447] font-heading mb-4">{dict.vision}</h3>
              <p className="text-lg text-[#0B2447]/80 font-sans leading-relaxed">{dict.visionDesc}</p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.4} className="bg-gray-50 p-10 rounded-3xl border-l-8 border-[#D90429] shadow-sm">
              <h3 className="text-2xl font-bold text-[#0B2447] font-heading mb-4">{dict.mission}</h3>
              <p className="text-lg text-[#0B2447]/80 font-sans leading-relaxed">{dict.missionDesc}</p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </>
  );
}
