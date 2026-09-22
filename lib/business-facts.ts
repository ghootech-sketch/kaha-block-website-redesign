/**
 * Centralized Single Source of Truth for Kaha Block Business Facts
 * All entity data, addresses, contacts, and operational facts must reference this file.
 */

import { SITE_URL } from "./site-config";

export const BUSINESS_FACTS = {
  brandName: "Kaha Block",
  legalName: "PT Kaha Sukses Mandiri",
  foundingYear: 2015,
  foundingDate: "2015",
  domain: SITE_URL,

  // Factory & Office Physical Location
  address: {
    street: "Jl. Raya Cibadak No. 7, Suradita",
    locality: "Cisauk",
    city: "Kabupaten Tangerang",
    cityEn: "Tangerang Regency",
    region: "Banten",
    postalCode: "15343",
    country: "Indonesia",
    countryCode: "ID",
    formatted: "Jl. Raya Cibadak No. 7, Suradita, Kec. Cisauk, Kabupaten Tangerang, Banten 15343",
    formattedEn: "Jl. Raya Cibadak No. 7, Suradita, Cisauk, Tangerang Regency, Banten 15343",
  },

  // Geographic Coordinates & Map Reference
  geo: {
    latitude: -6.358589787390475,
    longitude: 106.64021975454531,
  },
  maps: {
    googleMapsUrl: "https://maps.google.com/?q=-6.358589787390475,106.64021975454531",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.2738484247357!2d106.64021975454531!3d-6.358589787390475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e46e589e68b5%3A0xfbfdcc6d2b296521!2sPaving%20Block%20Kaha!5e0!3m2!1sid!2sid!4v1788076236518!5m2!1sid!2sid",
  },

  // Contact Channels
  contact: {
    primaryPhoneDisplay: "0812 8381 2475",
    primaryPhoneE164: "+6281283812475",
    secondaryPhoneDisplay: "0855 889 3030",
    secondaryPhoneE164: "+628558893030",
    altPhoneDisplay: "0855 889 3030",
    altPhoneE164: "+628558893030",
    email: "sanliong68@gmail.com",
    // Compatibility for existing code
    whatsappUrl: "https://wa.me/6281283812475?text=Halo%20Kaha%20Block%2C%20saya%20ingin%20konsultasi%20kebutuhan%20paving%20block.",
    
    // Official WhatsApp contacts with consistent prefilled message
    whatsappConsultationMessage: "Halo Kaha Block, saya ingin konsultasi kebutuhan paving block.",
    whatsappPrimaryDisplay: "0812 8381 2475",
    whatsappPrimaryE164: "+6281283812475",
    whatsappPrimaryBaseUrl: "https://wa.me/6281283812475",
    whatsappPrimaryUrl: "https://wa.me/6281283812475?text=Halo%20Kaha%20Block%2C%20saya%20ingin%20konsultasi%20kebutuhan%20paving%20block.",

    whatsappSecondaryDisplay: "0855 889 3030",
    whatsappSecondaryE164: "+628558893030",
    whatsappSecondaryBaseUrl: "https://wa.me/628558893030",
    whatsappSecondaryUrl: "https://wa.me/628558893030?text=Halo%20Kaha%20Block%2C%20saya%20ingin%20konsultasi%20kebutuhan%20paving%20block.",
  },

  // Operational & Production Metrics (Verified First-Party Data)
  operations: {
    facilityAreaM2: 9080,
    facilityAreaDisplay: "9.080 m²",
    serviceArea: {
      id: "Jabodetabek",
      en: "Greater Jakarta (Jabodetabek)",
    },
    machineryType: {
      id: "Mesin full otomatis hidrolik",
      en: "Fully automated hydraulic block machines",
    },
    concreteGrades: {
      id: "Pilihan mutu beton K-250, K-300, dan K-400",
      en: "Concrete grade options K-250, K-300, and K-400",
    },
    rawMaterials: {
      id: "Semen curah Holcim Dynamix, semen zak SCG, abu batu Bravo Cilegon, pasir Bangka",
      en: "Holcim Dynamix bulk cement, SCG bag cement, Bravo Cilegon stone dust, Bangka sand",
    },
  },

  // Verified Online Profiles
  social: {
    instagram: "https://www.instagram.com/kahablock/",
    facebook: "https://web.facebook.com/richardkahablock.id",
    facebookProfileText: "Richard Kahablock id",
  },
} as const;

export type BusinessFacts = typeof BUSINESS_FACTS;
