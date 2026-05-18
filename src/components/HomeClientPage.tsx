"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Phone, Mail, Target, Eye } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import HomeHero from "@/components/HomeHero";
import TestimonialsSlider from "@/components/TestimonialsSlider";

interface ServiceItem {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  heroImage: string;
}

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  client: string;
  location: string;
  year: string;
  description: string;
  image: string;
  featured?: boolean;
}

interface HomeClientPageProps {
  initialServices: ServiceItem[];
  initialProjects: ProjectItem[];
}

export default function HomeClientPage({ initialServices, initialProjects }: HomeClientPageProps) {
  const { t, language } = useLanguage();

  const getTranslatedServiceInfo = (slug: string, defaultTitle: string, defaultDesc: string) => {
    switch (slug) {
      case "construction":
        return {
          title: t("filterConstruction"),
          desc: language === "en" 
            ? "Expert construction services for commercial, residential, and infrastructure projects across Tanzania."
            : "Huduma za kitaalamu za ujenzi kwa miradi ya kibiashara, makazi, na miundombinu kote nchini Tanzania."
        };
      case "hospitality":
        return {
          title: t("filterHospitality"),
          desc: language === "en" 
            ? "Premier hospitality solutions covering accommodation, catering, and event management in Dar es Salaam."
            : "Ufumbuzi wa kiwango cha juu wa ukarimu unaojumuisha malazi, chakula, na usimamizi wa matukio Dar es Salaam."
        };
      case "entertainment":
        return {
          title: t("filterEntertainment"),
          desc: language === "en" 
            ? "Dynamic entertainment solutions for events, corporate functions, and cultural celebrations."
            : "Ufumbuzi wa burudani wa kusisimua kwa matukio, shughuli za makampuni, na sherehe za kitamaduni."
        };
      case "clearing":
        return {
          title: t("filterClearing"),
          desc: language === "en" 
            ? "Efficient customs clearance and freight forwarding services through all Tanzanian ports and borders."
            : "Kibali cha forodha na usafirishaji wa mizigo kwa ufanisi kupitia bandari na mipaka yote ya Tanzania."
        };
      case "logistics":
        return {
          title: t("filterLogistics"),
          desc: language === "en" 
            ? "Comprehensive logistics and supply chain management for businesses of all sizes."
            : "Usimamizi wa kina wa usafirishaji na ugavi kwa biashara za ukubwa wote."
        };
      case "supply":
        return {
          title: t("filterSupply"),
          desc: language === "en" 
            ? "Reliable procurement and supply of general materials, equipment, and consumables."
            : "Ununuzi na usambazaji wa kuaminika wa vifaa vya jumla, mitambo, na bidhaa za matumizi."
        };
      default:
        return { title: defaultTitle, desc: defaultDesc };
    }
  };

  const getTranslatedCategory = (category: string) => {
    const catLower = category.toLowerCase();
    if (catLower.includes("construction") || catLower.includes("ujenzi")) return t("filterConstruction");
    if (catLower.includes("logistics") || catLower.includes("usafirishaji")) return t("filterLogistics");
    if (catLower.includes("hospitality") || catLower.includes("ukarimu")) return t("filterHospitality");
    if (catLower.includes("entertainment") || catLower.includes("burudani")) return t("filterEntertainment");
    if (catLower.includes("clearing") || catLower.includes("kibali")) return t("filterClearing");
    if (catLower.includes("supply") || catLower.includes("usambazaji")) return t("filterSupply");
    return category;
  };

  const coreValues = [
    { titleKey: "valIntegrity" as const, descEn: "We operate with honesty and transparency in all our business dealings.", descSw: "Tunafanya kazi kwa uaminifu na uwazi katika shughuli zetu zote za biashara." },
    { titleKey: "valExcellence" as const, descEn: "We are committed to delivering the highest quality in every service.", descSw: "Tumejitolea kutoa ubora wa hali ya juu katika kila huduma yetu." },
    { titleKey: "valInnovation" as const, descEn: "We embrace modern solutions to meet evolving client needs.", descSw: "Tunakubali suluhisho za kisasa ili kukidhi mahitaji ya wateja wetu yanayobadilika." },
    { titleKey: "valReliability" as const, descEn: "We follow through on our promises, on time and within budget.", descSw: "Tunatimiza ahadi zetu, kwa wakati na ndani ya bajeti iliyopangwa." },
    { titleKey: "valPartnership" as const, descEn: "We build lasting relationships with clients, communities, and stakeholders.", descSw: "Tunajenga uhusiano wa kudumu na wateja, jamii, na wadau wetu." },
    { titleKey: "valSustainability" as const, descEn: "We grow responsibly, considering the long-term impact of our work.", descSw: "Tunakua kwa kuwajibika, tukizingatia athari za muda mrefu za kazi yetu." },
  ];

  const bulletPoints = language === "en"
    ? ["ISO-aligned service delivery standards", "Experienced and certified professional team", "Pan-Tanzania and East Africa reach"]
    : ["Viwango vya utoaji huduma vilivyooanishwa na ISO", "Timu ya wataalamu wenye uzoefu na vyeti", "Ufikiaji wa nchi nzima ya Tanzania na Afrika Mashariki"];

  return (
    <>
      <HomeHero />

      {/* ── ABOUT SNIPPET ────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-brand-gold font-semibold text-sm uppercase tracking-widest mb-3">
                {t("whoWeAre")}
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-brand-navy mb-6 leading-tight">
                {language === "en" ? (
                  <>A Company Built on <span className="text-brand-gold">Trust &amp; Excellence</span></>
                ) : (
                  <>Kampuni Iliyojengwa kwa <span className="text-brand-gold">Uaminifu na Ubora</span></>
                )}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                {t("aboutDesc")}
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                {language === "en" 
                  ? <>Our motto — <em className="text-brand-navy font-semibold">"Unlock The World"</em> — reflects our vision of opening doors for businesses and individuals across Tanzania and the wider East African region.</>
                  : <>Wito wetu — <em className="text-brand-navy font-semibold">"Fungua Ulimwengu"</em> — unaonyesha maono yetu ya kufungua milango kwa biashara na watu binafsi kote nchini Tanzania na ukanda mzima wa Afrika Mashariki.</>
                }
              </p>
              <ul className="space-y-3 mb-8">
                {bulletPoints.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle size={18} className="text-brand-gold shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-brand-navy font-semibold hover:text-brand-gold transition-colors group"
              >
                {t("learnMoreAboutUs")}{" "}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[480px]">
                <Image
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80"
                  alt="Cmakey team at work"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Stat badge */}
              <div className="absolute -bottom-6 -left-6 bg-brand-navy text-white rounded-2xl p-6 shadow-2xl">
                <div className="text-3xl font-black text-brand-gold">6+</div>
                <div className="text-sm text-white/70 mt-1">{t("sectorStat")}</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-brand-gold text-brand-navy rounded-2xl p-6 shadow-2xl">
                <div className="text-3xl font-black">10+</div>
                <div className="text-sm text-brand-navy/80 mt-1">{t("experienceStat")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ────────────────────────────────────── */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-brand-gold font-semibold text-sm uppercase tracking-widest mb-3">
              {t("whatWeOffer")}
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-brand-navy mb-4">
              {t("coreServices")}
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              {t("servicesDesc")}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {initialServices.map((svc, i) => {
              const trans = getTranslatedServiceInfo(svc.slug, svc.title, svc.shortDescription);
              return (
                <Link
                  key={svc.slug}
                  href={`/services/${svc.slug}`}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={svc.heroImage}
                      alt={trans.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-4xl">{svc.icon}</div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-bold text-brand-navy text-xl mb-2 group-hover:text-brand-gold transition-colors">
                      {trans.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1">
                      {trans.desc}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-brand-gold font-semibold text-sm">
                      {t("learnMore")} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ────────────────────────────────── */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-xl">
              <p className="text-brand-gold font-semibold text-sm uppercase tracking-widest mb-3">
                {t("trackRecord")}
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-brand-navy leading-tight">
                {language === "en" ? (
                  <>Featured <span className="text-brand-gold">Projects</span></>
                ) : (
                  <>Miradi Yetu <span className="text-brand-gold">Muhimu</span></>
                )}
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-brand-navy font-bold hover:text-brand-gold transition-colors group"
            >
              {t("viewAllProjects")}{" "}
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {initialProjects
              .slice(0, 3)
              .map((p, i) => (
                <div
                  key={p.id}
                  className="group relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl"
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/20 to-transparent opacity-90" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="bg-brand-gold/90 backdrop-blur-sm text-brand-navy text-[10px] font-bold px-3 py-1 rounded-full w-fit mb-3 uppercase tracking-tighter">
                      {getTranslatedCategory(p.category)}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                      {p.title}
                    </h3>
                    <p className="text-white/70 text-sm line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {p.description}
                    </p>
                    <Link
                      href="/projects"
                      className="inline-flex items-center gap-2 text-brand-gold text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0"
                    >
                      {t("readDetails")} <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* ── CLIENT TESTIMONIALS SLIDER ─────────────────────────── */}
      <TestimonialsSlider />

      {/* ── MISSION & VISION ────────────────────────────────── */}
      <section className="section-padding bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0"
            style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand-gold font-semibold text-sm uppercase tracking-widest mb-3">{t("ourPurpose")}</p>
            <h2 className="text-4xl md:text-5xl font-black text-white">
              {t("drivenByPurpose")}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/8 transition-all">
              <div className="w-14 h-14 bg-brand-gold/20 border border-brand-gold/30 rounded-2xl flex items-center justify-center mb-6">
                <Target size={28} className="text-brand-gold" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{t("ourMission")}</h3>
              <p className="text-white/70 leading-relaxed text-lg">
                {t("missionText")}
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/8 transition-all">
              <div className="w-14 h-14 bg-brand-gold/20 border border-brand-gold/30 rounded-2xl flex items-center justify-center mb-6">
                <Eye size={28} className="text-brand-gold" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{t("ourVision")}</h3>
              <p className="text-white/70 leading-relaxed text-lg">
                {t("visionText")}
              </p>
            </div>
          </div>

          {/* Core values strip */}
          <div>
            <h3 className="text-center text-xl font-bold text-white/60 uppercase tracking-wider mb-8">{t("coreValues")}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {coreValues.map((v) => (
                <div key={v.titleKey} className="text-center bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-brand-gold/40 hover:bg-white/10 transition-all group">
                  <div className="w-2 h-2 bg-brand-gold rounded-full mx-auto mb-3 group-hover:scale-150 transition-transform" />
                  <div className="font-bold text-white text-sm">{t(v.titleKey)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT TEASER ──────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-brand-navy to-brand-navy-dark rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                {t("readyToWork")}
              </h2>
              <p className="text-white/70 text-xl mb-10 max-w-2xl mx-auto">
                {t("readyDesc")}
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-10">
                <a
                  href="tel:+255658173232"
                  className="flex items-center gap-3 bg-white/10 border border-white/20 text-white px-6 py-3 rounded-xl hover:bg-white/20 transition-all"
                >
                  <Phone size={18} className="text-brand-gold" />
                  +255 658 173 232
                </a>
                <a
                  href="mailto:cmakeycompanylimited@gmail.com"
                  className="flex items-center gap-3 bg-white/10 border border-white/20 text-white px-6 py-3 rounded-xl hover:bg-white/20 transition-all"
                >
                  <Mail size={18} className="text-brand-gold" />
                  cmakeycompanylimited@gmail.com
                </a>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-4 bg-brand-gold text-brand-navy font-bold rounded-xl hover:bg-brand-gold-light transition-all shadow-xl shadow-brand-gold/30 hover:scale-105 text-lg"
              >
                {t("sendUsMessage")} <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
