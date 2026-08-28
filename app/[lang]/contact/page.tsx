import { dictionaries, isValidLocale, Locale } from "@/lib/dictionary";
import { constructPageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import JsonLd from "@/components/JsonLd";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
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
  return constructPageMetadata("contact", lang as Locale);
}

export default async function Contact({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    notFound();
  }
  const currentLang = lang as Locale;
  const dict = dictionaries[currentLang].contact;

  return (
    <>
      <JsonLd page="contact" lang={currentLang} />
      <div className="bg-gray-50 min-h-screen py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10 md:mb-14 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B2447] tracking-tight font-heading">
              {dict.title}
            </h1>
            <div className="w-16 sm:w-24 h-1 sm:h-1.5 bg-[#D90429] mx-auto mt-4 sm:mt-6 mb-4 sm:mb-6 rounded-full" />
            <p className="text-base sm:text-lg text-[#0B2447]/70 max-w-2xl mx-auto font-sans leading-relaxed">
              {dict.description}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-5xl mx-auto">
            {/* Contact Details Card */}
            <ScrollReveal
              direction="right"
              className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-sm border border-gray-200/80 space-y-6 sm:space-y-8 flex flex-col justify-center"
            >
              {/* Address */}
              <div className="flex items-start space-x-3.5 sm:space-x-4">
                <div className="bg-[#FFC300]/20 p-2.5 sm:p-3 rounded-xl text-[#D90429] flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-base sm:text-lg font-bold text-[#0B2447] mb-1 font-heading">
                    {dict.factoryLocation}
                  </h2>
                  <p className="text-[#0B2447]/80 leading-relaxed font-sans text-sm sm:text-base break-words">
                    {dict.address}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3.5 sm:space-x-4">
                <div className="bg-[#FFC300]/20 p-2.5 sm:p-3 rounded-xl text-[#D90429] flex-shrink-0 mt-0.5">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-base sm:text-lg font-bold text-[#0B2447] mb-1 font-heading">
                    {dict.emailLabel}
                  </h2>
                  <a
                    href={`mailto:${dict.email}`}
                    className="text-[#D90429] hover:underline font-bold text-sm sm:text-base md:text-lg break-words block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300] rounded"
                  >
                    {dict.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3.5 sm:space-x-4">
                <div className="bg-[#FFC300]/20 p-2.5 sm:p-3 rounded-xl text-[#D90429] flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-base sm:text-lg font-bold text-[#0B2447] mb-1 font-heading">
                    {dict.phoneLabel}
                  </h2>
                  <a
                    href={`tel:${dict.phone.replace(/\D/g, "")}`}
                    className="text-[#0B2447]/80 hover:text-[#D90429] font-bold text-base sm:text-lg transition-colors break-words block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300] rounded"
                  >
                    {dict.phone}
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* WhatsApp Fast Response Card */}
            <ScrollReveal
              direction="left"
              delay={0.15}
              className="flex flex-col justify-center h-full"
            >
              <div className="bg-[#0B2447] text-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-xl relative overflow-hidden h-full flex flex-col justify-center items-center text-center">
                <div
                  className="absolute top-0 right-0 w-32 h-32 bg-[#FFC300] rounded-bl-full opacity-20 transform translate-x-4 -translate-y-4 pointer-events-none"
                  aria-hidden="true"
                />
                <div className="relative z-10 w-full max-w-sm flex flex-col items-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-4 sm:mb-6">
                    <MessageCircle
                      className="w-8 h-8 sm:w-9 sm:h-9 text-[#FFC300]"
                      aria-hidden="true"
                    />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-3 text-white">
                    {dict.fastResponseTitle}
                  </h2>
                  <p className="opacity-90 font-sans text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed text-slate-200">
                    {dict.fastResponseDesc}
                  </p>
                  <a
                    href={dict.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center bg-[#D90429] text-white px-6 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-[#FFC300] hover:text-[#0B2447] transition-all shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white"
                  >
                    <MessageCircle className="w-5 h-5 mr-2.5" aria-hidden="true" />
                    {dict.whatsapp}
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </>
  );
}
