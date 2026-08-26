import { dictionaries, Locale } from "@/lib/dictionary";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default async function Projects({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const currentLang = lang as Locale;
  const dict = dictionaries[currentLang].projects;

  const galleryImages = [
    "https://picsum.photos/seed/kaha-p1/600/400",
    "https://picsum.photos/seed/kaha-p2/600/400",
    "https://picsum.photos/seed/kaha-p3/600/400",
    "https://picsum.photos/seed/kaha-p4/600/400",
    "https://picsum.photos/seed/kaha-p5/600/400",
    "https://picsum.photos/seed/kaha-p6/600/400",
    "https://picsum.photos/seed/kaha-p7/600/400",
    "https://picsum.photos/seed/kaha-p8/600/400",
    "https://picsum.photos/seed/kaha-p9/600/400",
  ];

  const clients = [
    "Summarecon", "Gardens at Candi Sawangan", "Abipraya", "Indomaret", 
    "AEON Mall", "Citaville", "Swiss-Belinn", "Amazon", "Waskita Karya", 
    "Wijaya Karya", "Paramount Land"
  ];

  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B2447] tracking-tight">
            {dict.title}
          </h1>
          <div className="w-24 h-1 bg-[#D90429] mx-auto mt-6 rounded-full" />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-24">
          {galleryImages.map((src, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1} direction="none" className="relative h-64 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group border border-gray-100">
              <Image
                src={src}
                alt={`Project Gallery ${idx + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2447] tracking-tight">
            {dict.clients}
          </h2>
          <div className="w-16 h-1 bg-[#FFC300] mx-auto mt-6 rounded-full" />
        </ScrollReveal>

        <div className="flex flex-wrap justify-center gap-4">
          {clients.map((client, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.05} direction="up" className="bg-gray-50 border border-gray-200 hover:border-[#FFC300] px-6 py-3 rounded-full text-[#0B2447] font-medium shadow-sm transition-colors hover:bg-[#FFC300]/10 cursor-default">
              {client}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
