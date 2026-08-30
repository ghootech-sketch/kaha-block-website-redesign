import { dictionaries, isValidLocale, Locale } from "@/lib/dictionary";
import { constructPageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import PlaceholderImage from "@/components/PlaceholderImage";
import JsonLd from "@/components/JsonLd";
import { Phone } from "lucide-react";
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
  return constructPageMetadata("products", lang as Locale);
}

export default async function Products({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    notFound();
  }
  const currentLang = lang as Locale;
  const dict = dictionaries[currentLang].products;
  
  const productKeys = Object.keys(dict.items) as Array<keyof typeof dict.items>;

  return (
    <>
      <JsonLd page="products" lang={currentLang} />
      <div className="bg-gray-50 min-h-screen py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10 md:mb-14 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B2447] tracking-tight font-heading">
              {dict.title}
            </h1>
            <div className="w-16 sm:w-24 h-1 sm:h-1.5 bg-[#D90429] mx-auto mt-4 sm:mt-6 mb-4 sm:mb-6 rounded-full" />
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-[#0B2447]/80 max-w-2xl mx-auto font-sans">
              {dict.specs}
            </p>
            <p className="mt-2 text-sm sm:text-base text-[#D90429] font-bold max-w-2xl mx-auto font-sans">
              {dict.availability}
            </p>
          </ScrollReveal>

          {/* 3-Column Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {productKeys.map((key, index) => {
              const product = dict.items[key];

              return (
                <ScrollReveal
                  key={key}
                  delay={index * 0.05}
                  className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs border border-gray-200/80 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col h-full"
                >
                  <div className="relative h-56 sm:h-64 w-full bg-gray-100">
                    <PlaceholderImage
                      text={product.name}
                      className="w-full h-full"
                    />
                    <div className="absolute top-3 right-3 bg-[#0B2447]/90 text-[#FFC300] px-3 py-1 rounded-full text-xs font-mono font-bold shadow-sm backdrop-blur-xs">
                      {product.badge}
                    </div>
                  </div>
                  <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#0B2447] mb-3 font-heading">
                        {product.name}
                      </h2>
                      <ul className="space-y-2 text-[#0B2447]/80 font-sans text-xs sm:text-sm mb-5">
                        <li><strong>{product.size.split(":")[0]}:</strong> {product.size.split(":")[1]}</li>
                        <li><strong>{product.height.split(":")[0]}:</strong> {product.height.split(":")[1]}</li>
                        <li><strong>{product.coverage.split(":")[0]}:</strong> {product.coverage.split(":")[1]}</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-[#0B2447] font-medium p-3.5 sm:p-4 bg-gray-50 rounded-xl mb-5 border border-gray-100">
                        {product.application}
                      </p>
                      <a 
                        href={dictionaries[currentLang].contact.whatsappUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full min-h-[44px] bg-[#0B2447] text-white py-3 rounded-full font-bold text-sm hover:bg-[#D90429] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300]"
                      >
                        <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                        {dict.orderCta}
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal delay={0.2} direction="up" className="mt-12 sm:mt-16 md:mt-20 bg-[#0B2447] text-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 text-center shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#FFC300] rounded-bl-full opacity-10 transform translate-x-12 -translate-y-12 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#D90429] rounded-tr-full opacity-20 transform -translate-x-12 translate-y-12 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 font-heading">{dict.installation}</h2>
              <p className="text-base sm:text-lg opacity-90 max-w-3xl mx-auto leading-relaxed font-sans mb-8">
                {dict.installationDesc}
              </p>
              <a 
                href={dictionaries[currentLang].contact.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-[#D90429] text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-[#FFC300] hover:text-[#0B2447] transition-colors shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white min-h-[44px]"
              >
                {dict.consultCta}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </>
  );
}
