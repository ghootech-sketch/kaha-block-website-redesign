import { dictionaries, Locale } from "@/lib/dictionary";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default async function Products({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const currentLang = lang as Locale;
  const dict = dictionaries[currentLang].products;

  const productList = [
    { name: dict.items.bata, image: "https://picsum.photos/seed/kaha-bata/400/400" },
    { name: dict.items.cacing, image: "https://picsum.photos/seed/kaha-cacing/400/400" },
    { name: dict.items.ubin, image: "https://picsum.photos/seed/kaha-ubin/400/400" },
    { name: dict.items.hexagon, image: "https://picsum.photos/seed/kaha-hexagon/400/400" },
    { name: dict.items.topiUskup, image: "https://picsum.photos/seed/kaha-topiuskup/400/400" },
    { name: dict.items.grassBlock, image: "https://picsum.photos/seed/kaha-grassblock/400/400" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B2447] tracking-tight">
            {dict.title}
          </h1>
          <div className="w-24 h-1 bg-[#D90429] mx-auto mt-6 rounded-full" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productList.map((product, index) => (
            <ScrollReveal key={index} delay={index * 0.1} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:border-[#FFC300]/50 transition-all group">
              <div className="relative h-64 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-[#0B2447] mb-2">{product.name}</h3>
                <p className="text-sm font-semibold text-[#D90429] mb-1">{dict.specs}</p>
                <p className="text-sm text-[#0B2447]/60 font-medium">{dict.availability}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2} direction="up" className="mt-20 bg-[#0B2447] text-white rounded-3xl p-10 md:p-16 text-center shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFC300] rounded-bl-full opacity-20 transform translate-x-8 -translate-y-8"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">{dict.installation}</h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
              {dict.installationDesc}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
