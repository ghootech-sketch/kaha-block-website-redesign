import { dictionaries, isValidLocale, Locale } from "@/lib/dictionary";
import { constructPageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import JsonLd from "@/components/JsonLd";
import { Mail, Phone, MapPin, MessageCircle, Globe, Instagram, Facebook } from "lucide-react";
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
            <p className="text-base sm:text-lg text-[#0B2447]/80 max-w-2xl mx-auto font-sans leading-relaxed">
              {dict.description}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
            {/* Contact Details Card (Left) */}
            <ScrollReveal
              direction="right"
              className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-xs border border-gray-200/80 space-y-6 sm:space-y-7 flex flex-col justify-center"
            >
              {/* Address */}
              <div className="flex items-start space-x-3.5 sm:space-x-4">
                <div className="bg-[#FFC300]/20 p-3 rounded-xl text-[#0B2447] flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#D90429]" aria-hidden="true" />
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

              {/* Main Phone & WhatsApp */}
              <div className="flex items-start space-x-3.5 sm:space-x-4">
                <div className="bg-[#FFC300]/20 p-3 rounded-xl text-[#0B2447] flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#D90429]" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-base sm:text-lg font-bold text-[#0B2447] mb-1 font-heading">
                    {dict.phoneLabel}
                  </h2>
                  <a
                    href={`tel:${dict.phone.replace(/\D/g, "")}`}
                    className="text-[#0B2447] hover:text-[#D90429] font-bold text-base sm:text-lg transition-colors break-words inline-block py-1 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300] rounded"
                  >
                    {dict.phone}
                  </a>

                  {/* Additional phone numbers */}
                  <div className="mt-2 pt-2 border-t border-gray-100">
                    <span className="text-xs text-slate-500 font-medium block mb-1">
                      {dict.additionalPhonesLabel}:
                    </span>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs sm:text-sm font-semibold text-slate-700">
                      {dict.additionalPhones.map((phoneNum) => (
                        <a
                          key={phoneNum}
                          href={`tel:${phoneNum.replace(/\D/g, "")}`}
                          className="hover:text-[#D90429] transition-colors py-1 min-h-[36px] inline-flex items-center"
                        >
                          {phoneNum}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3.5 sm:space-x-4">
                <div className="bg-[#FFC300]/20 p-3 rounded-xl text-[#0B2447] flex-shrink-0 mt-0.5">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#D90429]" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-base sm:text-lg font-bold text-[#0B2447] mb-1 font-heading">
                    {dict.emailLabel}
                  </h2>
                  <a
                    href={`mailto:${dict.email}`}
                    className="text-[#D90429] hover:underline font-bold text-sm sm:text-base md:text-lg break-words inline-block py-1 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300] rounded"
                  >
                    {dict.email}
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-start space-x-3.5 sm:space-x-4 pt-2 border-t border-gray-100">
                <div className="bg-[#FFC300]/20 p-3 rounded-xl text-[#0B2447] flex-shrink-0 mt-0.5">
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-[#0B2447]" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1 space-y-2 text-xs sm:text-sm">
                  <h2 className="text-base sm:text-lg font-bold text-[#0B2447] mb-1 font-heading">
                    {dict.socialMediaLabel}
                  </h2>
                  <div className="flex items-start space-x-2 text-slate-700">
                    <Instagram className="w-4 h-4 text-[#D90429] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="flex flex-wrap items-center gap-x-1.5 break-words">
                      <a
                        href="https://www.instagram.com/kahablock/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram Kaha Block @kahablock"
                        className="text-[#0B2447] hover:text-[#D90429] hover:underline font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300] rounded py-0.5"
                      >
                        @kahablock
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-700">
                    <Facebook className="w-4 h-4 text-[#0B2447] flex-shrink-0" aria-hidden="true" />
                    <span className="font-semibold text-[#0B2447]">{dict.facebookText}</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Dominant CTA */}
              <div className="pt-4">
                  <a
                    href={dict.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center min-h-[48px] bg-[#D90429] hover:bg-[#b50322] text-white px-6 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FFC300]"
                  >
                    <MessageCircle className="w-5 h-5 mr-2.5" aria-hidden="true" />
                    {dict.whatsapp}
                  </a>
              </div>
            </ScrollReveal>

            {/* Google Maps Card (Right) */}
            <ScrollReveal
              direction="left"
              delay={0.1}
              className="flex flex-col h-full bg-white rounded-2xl sm:rounded-3xl shadow-xs border border-gray-200/80 overflow-hidden"
            >
               <div className="w-full h-64 sm:h-full min-h-[300px]">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14168.049405624779!2d106.63471018868615!3d-6.355152862804557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e46a78ce6c8f%3A0xe549bd8084ff1047!2sPT%20Kaha%20Sukses%20Mandiri!5e0!3m2!1sid!2sid!4v1740880199341!5m2!1sid!2sid" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="PT Kaha Sukses Mandiri Google Maps"
                    className="w-full h-full"
                  />
               </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </>
  );
}
