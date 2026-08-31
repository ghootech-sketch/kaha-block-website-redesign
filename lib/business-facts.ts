/**
 * Centralized Single Source of Truth for Kaha Block Business Facts
 * All entity data, addresses, contacts, and operational facts must reference this file.
 */

export const BUSINESS_FACTS = {
  brandName: "Kaha Block",
  legalName: "PT Kaha Sukses Mandiri",
  foundingYear: 2015,
  foundingDate: "2015-01-01",
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
    primaryPhoneDisplay: "0811-9753-030",
    primaryPhoneE164: "+628119753030",
    altPhoneDisplay: "0855-8893-030",
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
      id: "Pilihan mutu beton K-250, K-300, dan K-400",
      en: "Concrete strength grades K-250, K-300, and K-400",
    },
  },

  // Verified Online Profiles
  social: {
    instagram: "https://www.instagram.com/kahablock/",
    facebookProfileText: "Richard KahaBlock id",
  },
} as const;

export type BusinessFacts = typeof BUSINESS_FACTS;
