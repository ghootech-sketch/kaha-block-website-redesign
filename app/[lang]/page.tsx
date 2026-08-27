import { dictionaries, Locale } from "@/lib/dictionary";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import PlaceholderImage from "@/components/PlaceholderImage";
import { CheckCircle2, Factory, Truck, ShieldCheck } from "lucide-react";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const currentLang = lang as Locale;
  const dict = dictionaries[currentLang].home;

  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: dict.integrity,
      desc: dict.integrityDesc,
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: dict.fastService,
      desc: dict.fastServiceDesc,
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: dict.quality,
      desc: dict.qualityDesc,
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: dict.qc,
      desc: dict.qcDesc,
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] bg-[#0B2447] text-white flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <PlaceholderImage text="TODO: Replace with actual Factory/Product Hero Image from PDF" className="w-full h-full opacity-20 bg-black grayscale mix-blend-overlay" />
        </div>
        <ScrollReveal className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6 pt-20 pb-12">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight font-heading leading-tight">
            {dict.title}
          </h1>
          <p className="text-xl md:text-3xl font-semibold text-[#FFC300] font-heading">
            {dict.subtitle}
          </p>
          <div className="w-24 h-1.5 bg-[#D90429] mx-auto my-8 rounded-full" />
          <h2 className="text-3xl md:text-5xl font-bold font-heading">
            {dict.heroHeadline}
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200 leading-relaxed font-sans">
            {dict.heroSubheadline}
          </p>
          <div className="pt-10">
            <a
              href={dictionaries[currentLang].contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#D90429] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#FFC300] hover:text-[#0B2447] transition-colors duration-300 shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white"
            >
              {dict.cta}
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* Brief Intro */}
      <section className="py-16 bg-white border-b border-gray-100">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <ScrollReveal>
               <p className="text-xl md:text-2xl font-medium text-[#0B2447] leading-relaxed">
                 {dict.companyBrief}
               </p>
            </ScrollReveal>
         </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B2447] font-heading">
              {dict.whyChooseUs}
            </h2>
            <div className="w-20 h-1.5 bg-[#D90429] mx-auto mt-6 rounded-full" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
               <ScrollReveal key={idx} delay={idx * 0.1} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 hover:border-[#FFC300]/50 transition-all duration-300">
                 <div className="w-20 h-20 bg-[#0B2447]/5 rounded-full flex items-center justify-center text-[#D90429] mb-6">
                   {feature.icon}
                 </div>
                 <h3 className="text-xl font-bold text-[#0B2447] font-heading mb-4">{feature.title}</h3>
                 <p className="text-[#0B2447]/70 leading-relaxed font-sans">{feature.desc}</p>
               </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action pre-footer */}
      <section className="py-24 bg-white relative overflow-hidden">
         <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFC300] rounded-bl-full opacity-10 transform translate-x-16 -translate-y-16"></div>
         <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D90429] rounded-tr-full opacity-5 transform -translate-x-16 translate-y-16"></div>
         <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <ScrollReveal>
               <h2 className="text-3xl md:text-5xl font-bold text-[#0B2447] font-heading mb-8">
                 {dict.bestPrice}
               </h2>
               <p className="text-xl text-[#0B2447]/80 font-sans mb-10">
                 {dict.bestPriceDesc}
               </p>
               <Link
                 href={`/${currentLang}/contact`}
                 className="inline-block bg-[#0B2447] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#D90429] transition-colors shadow-lg"
               >
                 {dictionaries[currentLang].nav.contact}
               </Link>
            </ScrollReveal>
         </div>
      </section>
    </div>
  );
}
