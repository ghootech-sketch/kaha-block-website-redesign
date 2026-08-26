import { dictionaries, Locale } from "@/lib/dictionary";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default async function Contact({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const currentLang = lang as Locale;
  const dict = dictionaries[currentLang].contact;

  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B2447] tracking-tight">
            {dict.title}
          </h1>
          <div className="w-24 h-1 bg-[#D90429] mx-auto mt-6 rounded-full" />
          <p className="mt-6 text-lg text-[#0B2447]/70 max-w-2xl mx-auto">
            {dict.description}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <ScrollReveal direction="right" className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 space-y-8">
            <div className="flex items-start space-x-4">
              <div className="mt-1 bg-[#FFC300]/20 p-3 rounded-full text-[#D90429]">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0B2447] mb-2">Alamat</h3>
                <p className="text-[#0B2447]/70 leading-relaxed">{dict.address}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="mt-1 bg-[#FFC300]/20 p-3 rounded-full text-[#D90429]">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0B2447] mb-2">Email</h3>
                <a href={`mailto:${dict.email}`} className="text-[#D90429] hover:underline font-medium">
                  {dict.email}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="mt-1 bg-[#FFC300]/20 p-3 rounded-full text-[#D90429]">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0B2447] mb-2">Telepon</h3>
                <div className="space-y-1">
                  <a href={`tel:${dict.phone1}`} className="block text-[#0B2447]/80 hover:text-[#D90429] font-medium transition-colors">
                    {dict.phone1}
                  </a>
                  <a href={`tel:${dict.phone2}`} className="block text-[#0B2447]/80 hover:text-[#D90429] font-medium transition-colors">
                    {dict.phone2}
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.2} className="flex flex-col justify-center space-y-6">
            <div className="bg-[#0B2447] text-white p-10 rounded-3xl text-center space-y-6 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFC300] rounded-bl-full opacity-20 transform translate-x-4 -translate-y-4"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold">Fast Response</h3>
                <p className="opacity-90">{dict.description}</p>
                <Link 
                  href={`https://wa.me/6281283812475?text=Halo%20Kahablock,%20saya%20mau%20order...`}
                  target="_blank"
                  className="inline-block bg-[#D90429] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#FFC300] hover:text-[#0B2447] transition-colors w-full mt-4 shadow-md"
                >
                  {dict.whatsapp}
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
