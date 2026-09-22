import { isValidLocale, Locale } from "@/lib/dictionary";
import { constructPageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import RegionalPageTemplate from "@/components/RegionalPageTemplate";
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
  return constructPageMetadata("areaBogor", lang as Locale);
}

export default async function BogorRegionalPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    notFound();
  }
  return (
    <RegionalPageTemplate
      slug="bogor"
      lang={lang as Locale}
      schemaPage="areaBogor"
    />
  );
}
