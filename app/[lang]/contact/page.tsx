import { dictionaries, Locale } from "@/lib/dictionary";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
const ScrollReveal = ({ children, className }: any) => <div className={className}>{children}</div>;
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = dictionaries[lang as Locale].contact;
  return {
    title: dict.title,
    description: dict.description,
  };
}

export default async function Contact({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const currentLang = lang as Locale;
  const dict = dictionaries[currentLang].contact;

  return (
    <div className="bg-gray-50 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-[#0B2447] tracking-tight font-heading">
            {dict.title}
          </h1>
          <div className="w-24 h-1.5 bg-[#D90429] mx-auto mt-8 rounded-full" />
          <p className="mt-8 text-xl text-[#0B2447]/70 max-w-2xl mx-auto font-sans leading-relaxed">
            {dict.description}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <ScrollReveal direction="right" className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100 space-y-10">
            <div className="flex items-start space-x-6">
              <div className="mt-1 bg-[#FFC300]/20 p-4 rounded-full text-[#D90429]">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0B2447] mb-2 font-heading">Lokasi Pabrik</h3>
                <p className="text-[#0B2447]/80 leading-relaxed font-sans text-lg">{dict.address}</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="mt-1 bg-[#FFC300]/20 p-4 rounded-full text-[#D90429]">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0B2447] mb-2 font-heading">Email</h3>
                <a href={`mailto:${dict.email}`} className="text-[#D90429] hover:underline font-bold text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300] rounded">
                  {dict.email}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="mt-1 bg-[#FFC300]/20 p-4 rounded-full text-[#D90429]">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0B2447] mb-2 font-heading">Telepon & WhatsApp</h3>
                <a href={`tel:${dict.phone.replace(/\D/g, '')}`} className="block text-[#0B2447]/80 hover:text-[#D90429] font-bold text-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300] rounded">
                  {dict.phone}
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.2} className="flex flex-col justify-center h-full">
            <div className="bg-[#0B2447] text-white p-12 rounded-[2.5rem] text-center space-y-8 shadow-xl relative overflow-hidden h-full flex flex-col justify-center items-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFC300] rounded-bl-full opacity-20 transform translate-x-4 -translate-y-4"></div>
              <div className="relative z-10 w-full max-w-sm">
                <MessageCircle className="w-16 h-16 text-[#FFC300] mx-auto mb-6" />
                <h3 className="text-3xl font-bold font-heading mb-4">Fast Response</h3>
                <p className="opacity-90 font-sans text-lg mb-8 leading-relaxed">Konsultasi langsung dengan representatif kami melalui WhatsApp untuk mendapatkan penawaran terbaik.</p>
                <a 
                  href={dict.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#D90429] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#FFC300] hover:text-[#0B2447] transition-all w-full shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white"
                >
                  <MessageCircle className="w-5 h-5 mr-3" />
                  {dict.whatsapp}
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
