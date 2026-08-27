export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "PT Kaha Sukses Mandiri (Kaha Block)",
    "image": "https://kahablock.com/images/company/logo.png",
    "url": "https://kahablock.com",
    "telephone": "+628119753030",
    "email": "sanliong68@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Raya Cibadak No. 7, Suradita",
      "addressLocality": "Cisauk",
      "addressRegion": "Tangerang",
      "postalCode": "15343",
      "addressCountry": "ID"
    },
    "sameAs": [
      "https://instagram.com/kahablock"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
