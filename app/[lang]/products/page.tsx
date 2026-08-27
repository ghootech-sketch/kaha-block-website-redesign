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

  // Mapping target assets for development reference
  // truepave -> /public/images/products/truepave.jpg
  // half -> /public/images/products/half.jpg
  // hexagonal -> /public/images/products/hexagonal-ubin.jpg
  // topiUskup -> /public/images/products/topi-uskup.jpg
  // kanstein -> /public/images/products/kanstein-jepit.jpg

  return (
    <>
      <JsonLd page="products" lang={currentLang} />
      <div className="bg-gray-50 min-h-screen py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-[#0B2447] tracking-tight font-heading">
              {dict.title}
            </h1>
            <div className="w-24 h-1.5 bg-[#D90429] mx-auto mt-8 rounded-full" />
            <p className="mt-6 text-xl text-[#0B2447]/70 max-w-2xl mx-auto font-sans">
              {dict.specs}
            </p>
            <p className="mt-2 text-md text-[#D90429] font-semibold max-w-2xl mx-auto font-sans">
              {dict.availability}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {productKeys.map((key, index) => {
              const product = dict.items[key];
              return (
                <ScrollReveal
                  key={index}
                  delay={index * 0.1}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col"
                >
                  {/* Target Asset: /public/images/products/{key}.jpg */}
                  <div className="relative h-72 w-full bg-gray-100">
                    <PlaceholderImage
                      text={`${dict.imageAltPrefix}: ${product.name}`}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="p-8 flex-grow flex flex-col justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-[#0B2447] mb-4 font-heading">{product.name}</h2>
                      <ul className="space-y-2 text-[#0B2447]/80 font-sans text-sm mb-6">
                        <li><strong>{product.size.split(":")[0]}:</strong> {product.size.split(":")[1]}</li>
                        <li><strong>{product.height.split(":")[0]}:</strong> {product.height.split(":")[1]}</li>
                        <li><strong>{product.coverage.split(":")[0]}:</strong> {product.coverage.split(":")[1]}</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm text-[#0B2447] font-medium p-4 bg-gray-50 rounded-xl mb-6">
                        {product.application}
                      </p>
                      <a 
                        href={dictionaries[currentLang].contact.whatsappUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full bg-[#0B2447] text-white py-3 rounded-full font-bold text-sm hover:bg-[#D90429] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300]"
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

          <ScrollReveal delay={0.2} direction="up" className="mt-24 bg-[#0B2447] text-white rounded-[2.5rem] p-12 md:p-20 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#FFC300] rounded-bl-full opacity-10 transform translate-x-12 -translate-y-12" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#D90429] rounded-tr-full opacity-20 transform -translate-x-12 translate-y-12" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 font-heading">{dict.installation}</h2>
              <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto leading-relaxed font-sans mb-10">
                {dict.installationDesc}
              </p>
              <a 
                href={dictionaries[currentLang].contact.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-[#D90429] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#FFC300] hover:text-[#0B2447] transition-colors shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white"
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
