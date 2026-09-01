/**
 * Centralized Single Source of Truth for Kaha Block Business Facts
 * All entity data, addresses, contacts, and operational facts must reference this file.
 */

export const BUSINESS_FACTS = {
  brandName: "Kaha Block",
  legalName: "PT Kaha Sukses Mandiri",
  foundingYear: 2015,
  foundingDate: "2015",
  domain: "https://kahablock.com",

  // Factory & Office Physical Location
  address: {
    street: "Jl. Raya Cibadak No. 7, Suradita",
    locality: "Cisauk",
    city: "Tangerang",
    region: "Banten",
    postalCode: "15343",
    country: "Indonesia",
    countryCode: "ID",
    formatted: "Jl. Raya Cibadak No. 7, Suradita, Cisauk, Tangerang 15343",
  },

  // Contact Channels
  contact: {
    primaryPhoneDisplay: "0811 975 3030",
    primaryPhoneE164: "+628119753030",
    altPhoneDisplay: "0855 889 3030",
    altPhoneE164: "+628558893030",
    email: "sanliong68@gmail.com",
    whatsappUrl: "https://wa.me/628119753030",
  },

  // Operational & Production Metrics (Verified First-Party Data)
  operations: {
    facilityAreaM2: 9080,
    facilityAreaDisplay: "9.080 m²",
    serviceArea: {
      id: "Jabodetabek dan luar kota",
      en: "Greater Jakarta (Jabodetabek) and surrounding regions",
    },
    machineryType: {
      id: "Mesin full otomatis hidrolik",
      en: "Fully automated hydraulic block machines",
    },
    concreteGrades: {
      id: "Pilihan mutu beton K-300 hingga K-350",
      en: "Concrete strength grades K-300 to K-350",
    },
    rawMaterials: {
      id: "Semen curah Holcim Dynamix, semen zak SCG, abu batu Bravo Cilegon, pasir Bangka",
      en: "Holcim Dynamix bulk cement, SCG bag cement, Bravo Cilegon stone dust, Bangka sand",
    },
  },

  // Verified Online Profiles
  social: {
    instagram: "https://www.instagram.com/kahablock/",
    facebookProfileText: "Richard Kahablock id",
  },
} as const;

export type BusinessFacts = typeof BUSINESS_FACTS;
