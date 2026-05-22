"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Language = "en" | "sw";

export const translations = {
  en: {
    // Navigation
    navHome: "Home",
    navAbout: "About Us",
    navServices: "Services",
    navProjects: "Projects",
    navContact: "Contact",
    getInTouch: "Get In Touch",

    // Hero Section
    mottoTag: "Dar es Salaam, Tanzania",
    mottoTitle: "Unlock The World",
    mottoSubtitle:
      "Cmakey Company Limited is your trusted multi-sector partner in Tanzania — delivering excellence in Construction, Logistics, Hospitality, and beyond.",
    exploreServices: "Explore Services",
    contactUs: "Contact Us",

    // About Section
    whoWeAre: "Who We Are",
    aboutTitle: "A Company Built on Trust & Excellence",
    aboutDesc:
      "Founded in Dar es Salaam, Cmakey Company Limited is a dynamic multi-sector enterprise committed to delivering world-class services across construction, logistical operations, hospitality, entertainment, clearing & forwarding, and material supply.",
    aboutMotto:
      'Our motto — "Unlock The World" — reflects our vision of opening doors for businesses and individuals across Tanzania and the wider East African region.',
    sectorStat: "Industry Sectors",
    experienceStat: "Years Experience",
    learnMoreAboutUs: "Learn More About Us",

    // Services Section
    whatWeOffer: "What We Offer",
    coreServices: "Our Core Services",
    servicesDesc:
      "From construction to logistics, we offer comprehensive services to meet the diverse needs of businesses and individuals in Tanzania.",
    learnMore: "Learn More",

    // Featured Projects
    trackRecord: "Proven Track Record",
    featuredProjects: "Featured Projects",
    viewAllProjects: "View All Projects",
    readDetails: "Read Details",

    // Mission/Vision
    ourPurpose: "Our Purpose",
    drivenByPurpose: "Driven by Purpose, Guided by Values",
    ourMission: "Our Mission",
    ourVision: "Our Vision",
    coreValues: "Core Values",
    missionText:
      "To provide innovative, high-quality, and reliable services that empower our clients to achieve their goals — delivering value across every sector we operate in, with integrity and professionalism at the forefront.",
    visionText:
      "To be the leading multi-sector company in East Africa — recognized for excellence, trusted by our clients, and committed to sustainable growth that benefits our people, our communities, and our continent.",

    // Core Values Dictionary
    valIntegrity: "Integrity",
    valExcellence: "Excellence",
    valInnovation: "Innovation",
    valReliability: "Reliability",
    valPartnership: "Partnership",
    valSustainability: "Sustainability",

    // Contact Teaser
    readyToWork: "Ready to Work Together?",
    readyDesc:
      "Get in touch with our team today and let us help you unlock new opportunities for your business.",
    sendUsMessage: "Send Us a Message",

    // Footer Address details
    quickLinks: "Quick Links",
    contactTitle: "Contact Us",
    officeLabel: "Victoria Office:",
    officeAddress:
      "4th Floor, Tanzanite Park, New Bagamoyo Road, Dar es Salaam",
    poBox: "P.O. Box 70307, Tanzania",
    allRightsReserved: "© 2026 Cmakey Company Limited. All rights reserved.",
    builtInTanzania: "Built with excellence in Tanzania.",

    // Project filters
    filterAll: "All",
    filterConstruction: "Construction",
    filterLogistics: "Logistics",
    filterHospitality: "Hospitality",
    filterEntertainment: "Entertainment",
    filterClearing: "Clearing & Forwarding",
    filterSupply: "General Supply",
  },
  sw: {
    // Navigation
    navHome: "Nyumbani",
    navAbout: "Kuhusu Sisi",
    navServices: "Huduma",
    navProjects: "Miradi",
    navContact: "Mawasiliano",
    getInTouch: "Wasiliana Nasi",

    // Hero Section
    mottoTag: "Dar es Salaam, Tanzania",
    mottoTitle: "Fungua Ulimwengu",
    mottoSubtitle:
      "Cmakey Company Limited ni mshirika wako wa kuaminika wa sekta mbalimbali nchini Tanzania — anayetoa ubora wa hali ya juu katika Ujenzi, Usafirishaji, Ukarimu, na kwingineko.",
    exploreServices: "Gundua Huduma",
    contactUs: "Wasiliana Nasi",

    // About Section
    whoWeAre: "Sisi ni Nani",
    aboutTitle: "Kampuni Iliyojengwa kwa Uaminifu na Ubora",
    aboutDesc:
      "Ilianzishwa Dar es Salaam, Cmakey Company Limited ni kampuni mahiri ya sekta mbalimbali inayojitolea kutoa huduma za kiwango cha kimataifa katika ujenzi, usafirishaji, ukarimu, burudani, kibali cha forodha (Clearing & Forwarding), na usambazaji wa vifaa vya jumla.",
    aboutMotto:
      'Wito wetu — "Fungua Ulimwengu" — unaonyesha maono yetu ya kufungua milango kwa biashara na watu binafsi kote nchini Tanzania na ukanda mzima wa Afrika Mashariki.',
    sectorStat: "Sekta za Viwanda",
    experienceStat: "Miaka ya Uzoefu",
    learnMoreAboutUs: "Jifunze Zaidi Kuhusu Sisi",

    // Services Section
    whatWeOffer: "Tunachotoa",
    coreServices: "Huduma Zetu Kuu",
    servicesDesc:
      "Kuanzia ujenzi hadi usafirishaji, tunatoa huduma za kina ili kukidhi mahitaji mbalimbali ya biashara na watu binafsi nchini Tanzania.",
    learnMore: "Soma Zaidi",

    // Featured Projects
    trackRecord: "Uzoefu Uliothibitishwa",
    featuredProjects: "Miradi yetu Muhimu",
    viewAllProjects: "Angalia Miradi Yote",
    readDetails: "Angalia Maelezo",

    // Mission/Vision
    ourPurpose: "Malengo Yetu",
    drivenByPurpose: "Tunaongozwa na Malengo na Maadili",
    ourMission: "Dhamira Yetu",
    ourVision: "Maono Yetu",
    coreValues: "Maadili ya Msingi",
    missionText:
      "Kutoa huduma za kibunifu, za hali ya juu, na za kuaminika zinazowawezesha wateja wetu kufikia malengo yao — tukileta thamani katika kila sekta tunayofanya kazi, tukiweka uaminifu na taaluma mbele.",
    visionText:
      "Kuwa kampuni inayoongoza ya sekta mbalimbali katika Afrika Mashariki — inayotambulika kwa ubora, inayoaminiwa na wateja wetu, na inayojitolea kwa ukuaji endelevu unaofaidi watu wetu, jamii zetu, na bara letu.",

    // Core Values Dictionary
    valIntegrity: "Uaminifu",
    valExcellence: "Ubora",
    valInnovation: "Ubunifu",
    valReliability: "Uthabiti",
    valPartnership: "Ushirikiano",
    valSustainability: "Uendelevu",

    // Contact Teaser
    readyToWork: "Uko Tayari Kufanya Kazi Pamoja?",
    readyDesc:
      "Wasiliana na timu yetu leo na uturuhusu kukusaidia kufungua fursa mpya kwa biashara yako.",
    sendUsMessage: "Tutumie Ujumbe",

    // Footer Address details
    quickLinks: "Viungo vya Haraka",
    contactTitle: "Wasiliana Nasi",
    officeLabel: "Ofisi ya Victoria:",
    officeAddress:
      "Ghorofa ya 4, Tanzanite Park, Barabara ya New Bagamoyo, Dar es Salaam",
    poBox: "S.L.P 70307, Tanzania",
    allRightsReserved:
      "© 2026 Cmakey Company Limited. Haki zote zimehifadhiwa.",
    builtInTanzania: "Imejengwa kwa ubora nchini Tanzania.",

    // Project filters
    filterAll: "Vyote",
    filterConstruction: "Ujenzi",
    filterLogistics: "Usafirishaji",
    filterHospitality: "Ukarimu",
    filterEntertainment: "Burudani",
    filterClearing: "Kibali cha Forodha",
    filterSupply: "Usambazaji Vifaa",
  },
};

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  t: (key: keyof typeof translations.en) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  // Load language preference from localStorage
  useEffect(() => {
    const savedLang = localStorage.getItem("cmakey-lang") as Language;
    if (savedLang === "en" || savedLang === "sw") {
      setLanguage(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "en" ? "sw" : "en";
    setLanguage(newLang);
    localStorage.setItem("cmakey-lang", newLang);
  };

  const t = (key: keyof typeof translations.en): string => {
    return (
      translations[language][key] || translations["en"][key] || String(key)
    );
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
