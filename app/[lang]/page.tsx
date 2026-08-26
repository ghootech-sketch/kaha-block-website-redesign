import { dictionaries, Locale } from "@/lib/dictionary";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const currentLang = lang as Locale;
  const dict = dictionaries[currentLang].home;

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] bg-[#0B2447] text-white flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/seed/kaha-paving-hero/1920/1080"
            alt="Paving Block Background"
            fill
            className="object-cover opacity-20 grayscale mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
        </div>
        <ScrollReveal className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            {dict.title}
          </h1>
          <p className="text-xl md:text-2xl font-medium text-[#FFC300]">
            {dict.subtitle}
          </p>
          <div className="w-24 h-1 bg-[#D90429] mx-auto my-6 rounded-full" />
          <h2 className="text-3xl md:text-4xl font-semibold">
            {dict.heroHeadline}
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            {dict.heroSubheadline}
          </p>
          <div className="pt-8">
            <Link
              href={`/${currentLang}/contact`}
              className="inline-block bg-[#D90429] text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-[#FFC300] hover:text-[#0B2447] transition-colors duration-300 shadow-lg"
            >
              {dict.cta}
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B2447]">
              {dict.whyChooseUs}
            </h2>
            <div className="w-16 h-1 bg-[#D90429] mx-auto mt-4 rounded-full" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Item 1 */}
            <ScrollReveal delay={0.1} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center space-y-4 hover:shadow-md hover:border-[#FFC300]/50 transition-all">
              <div className="w-16 h-16 bg-[#0B2447]/5 rounded-full flex items-center justify-center text-[#D90429]">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0B2447]">{dict.integrity}</h3>
              <p className="text-[#0B2447]/70 leading-relaxed">{dict.integrityDesc}</p>
            </ScrollReveal>

            {/* Item 2 */}
            <ScrollReveal delay={0.2} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center space-y-4 hover:shadow-md hover:border-[#FFC300]/50 transition-all">
              <div className="w-16 h-16 bg-[#0B2447]/5 rounded-full flex items-center justify-center text-[#D90429]">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0B2447]">{dict.fastService}</h3>
              <p className="text-[#0B2447]/70 leading-relaxed">{dict.fastServiceDesc}</p>
            </ScrollReveal>

            {/* Item 3 */}
            <ScrollReveal delay={0.3} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center space-y-4 hover:shadow-md hover:border-[#FFC300]/50 transition-all">
              <div className="w-16 h-16 bg-[#0B2447]/5 rounded-full flex items-center justify-center text-[#D90429]">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0B2447]">{dict.quality}</h3>
              <p className="text-[#0B2447]/70 leading-relaxed">{dict.qualityDesc}</p>
            </ScrollReveal>

            {/* Item 4 */}
            <ScrollReveal delay={0.4} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center space-y-4 hover:shadow-md hover:border-[#FFC300]/50 transition-all">
              <div className="w-16 h-16 bg-[#0B2447]/5 rounded-full flex items-center justify-center text-[#D90429]">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0B2447]">{dict.qc}</h3>
              <p className="text-[#0B2447]/70 leading-relaxed">{dict.qcDesc}</p>
            </ScrollReveal>

            {/* Item 5 */}
            <ScrollReveal delay={0.5} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center space-y-4 hover:shadow-md hover:border-[#FFC300]/50 transition-all">
              <div className="w-16 h-16 bg-[#0B2447]/5 rounded-full flex items-center justify-center text-[#D90429]">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0B2447]">{dict.bestPrice}</h3>
              <p className="text-[#0B2447]/70 leading-relaxed">{dict.bestPriceDesc}</p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
