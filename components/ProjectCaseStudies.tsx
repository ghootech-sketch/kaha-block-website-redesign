import Image from "next/image";
import Link from "next/link";
import { Locale } from "@/lib/dictionary";

const studies = [
  {
    image: "/images/projects/kaha-block-dokumentasi-24.webp",
    id: { title: "Persiapan lahan sebelum pemasangan", evidence: "Foto dokumentasi persiapan area pekerjaan paving block.", focus: "Kondisi lahan menjadi dasar penentuan pekerjaan perataan, lapisan dasar, akses material, dan urutan pemasangan.", check: "Saat meminta penawaran, sertakan foto kondisi awal, perkiraan luas, fungsi area, dan akses kendaraan. Ruang lingkup persiapan harus tertulis agar penawaran dapat dibandingkan." },
    en: { title: "Site preparation before installation", evidence: "Documentation of a paving installation preparation area.", focus: "Site conditions inform levelling, base preparation, material access, and installation sequencing.", check: "Provide site photos, estimated area, intended use, and vehicle access when requesting a quotation. Agree the preparation scope in writing." },
  },
  {
    image: "/images/projects/kaha-block-dokumentasi-25.webp",
    id: { title: "Pemilihan produk Truepave / bata", evidence: "Dokumentasi bentuk produk paving block Truepave / bata Kaha Block.", focus: "Pemilihan bentuk perlu dibaca bersama ukuran, ketebalan, mutu, pola susun, dan kebutuhan pengunci tepi.", check: "Cocokkan spesifikasi pada penawaran dengan kebutuhan proyek. Foto produk membantu mengenali bentuk, tetapi tidak membuktikan kuat tekan atau hasil uji laboratorium." },
    en: { title: "Selecting Truepave / rectangular pavers", evidence: "Documentation of Kaha Block Truepave / rectangular paving products.", focus: "Product shape should be considered alongside dimensions, thickness, grade, laying pattern, and edge restraint.", check: "Match the quotation specifications to the project requirements. Product photos illustrate shape but do not establish compressive strength or laboratory results." },
  },
  {
    image: "/images/projects/kaha-block-dokumentasi-03.webp",
    id: { title: "Hasil aplikasi paving di lapangan", evidence: "Dokumentasi hasil jadi pemasangan paving block dalam galeri Kaha Block.", focus: "Dokumentasi hasil membantu diskusi mengenai tampilan, pola susun, sambungan, dan hubungan area paving dengan elemen di sekitarnya.", check: "Untuk serah terima, cocokkan pekerjaan dengan scope yang disepakati, termasuk permukaan, tepi, sambungan, dan aliran air. Foto hasil tidak menggantikan pemeriksaan lapangan." },
    en: { title: "Completed paving application", evidence: "A completed paving installation documented in the Kaha Block gallery.", focus: "Completed-work documentation supports discussion of appearance, laying patterns, joints, and surrounding elements.", check: "At handover, compare the work with the agreed scope, including surfaces, edges, joints, and drainage. Photos do not replace a site inspection." },
  },
];

export default function ProjectCaseStudies({ lang }: { lang: Locale }) {
  const en = lang === "en";
  return (
    <section aria-labelledby="case-studies-heading" className="bg-surface py-16 border-b border-stone-200/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="case-studies-heading" className="text-3xl font-heading text-slate-900 mb-4">{en ? "Case studies from field documentation" : "Studi Kasus dari Dokumentasi Lapangan"}</h2>
        <p className="text-slate-600 max-w-3xl mb-8">{en ? "Three documented stages provide context for planning your own project. Each entry discusses its own photo and is not presented as one continuous project." : "Tiga dokumentasi berikut memberi konteks untuk merencanakan kebutuhan proyek Anda. Setiap pembahasan mengacu pada fotonya masing-masing, bukan rangkaian satu proyek yang sama."}</p>
        <div className="grid md:grid-cols-3 gap-6">
          {studies.map((study) => {
            const copy = study[lang];
            return <article key={study.image} className="bg-white border border-stone-200 rounded-xl overflow-hidden">
              <div className="relative aspect-[4/3]"><Image src={study.image} alt={copy.evidence} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" /></div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-heading text-slate-900">{copy.title}</h3>
                <p className="text-sm text-slate-600">{copy.evidence}</p>
                <p className="text-sm text-slate-700">{copy.focus}</p>
                <p className="text-sm text-slate-700">{copy.check}</p>
              </div>
            </article>;
          })}
        </div>
        <div className="mt-8 flex flex-wrap gap-5 text-sm font-semibold underline">
          <Link href={`/${lang}/projects/production`}>{en ? "Factory production documentation" : "Dokumentasi produksi pabrik"}</Link>
          <Link href={`/${lang}/jasa-pemasangan-paving-block`}>{en ? "Installation scope" : "Lingkup jasa pemasangan"}</Link>
          <Link href={`/${lang}/contact`}>{en ? "Discuss your project" : "Diskusikan kebutuhan proyek"}</Link>
        </div>
      </div>
    </section>
  );
}
