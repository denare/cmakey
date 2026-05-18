"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Calendar, Briefcase, Filter } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  client: string;
  location: string;
  year: string;
  description: string;
  image: string;
}

interface ProjectGridProps {
  projects: ProjectItem[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All");

  // Get distinct categories from database dynamically
  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

  // Filter list
  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());

  const getTranslatedFilterName = (cat: string) => {
    switch (cat.toLowerCase()) {
      case "all": return t("filterAll");
      case "construction": return t("filterConstruction");
      case "logistics": return t("filterLogistics");
      case "hospitality": return t("filterHospitality");
      case "entertainment": return t("filterEntertainment");
      case "clearing": return t("filterClearing");
      case "supply": return t("filterSupply");
      default: return cat;
    }
  };

  const getTranslatedCategoryBadge = (cat: string) => {
    const catLower = cat.toLowerCase();
    if (catLower.includes("construction")) return t("filterConstruction");
    if (catLower.includes("logistics")) return t("filterLogistics");
    if (catLower.includes("hospitality")) return t("filterHospitality");
    if (catLower.includes("entertainment")) return t("filterEntertainment");
    if (catLower.includes("clearing")) return t("filterClearing");
    if (catLower.includes("supply")) return t("filterSupply");
    return cat;
  };

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 bg-brand-navy overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-gold font-semibold text-sm uppercase tracking-widest mb-3">
            {language === "en" ? "Portfolio" : "Kwingineko Wetu"}
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            {language === "en" ? (
              <>Our <span className="text-brand-gold">Projects</span></>
            ) : (
              <>Miradi <span className="text-brand-gold">Yetu</span></>
            )}
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">
            {language === "en"
              ? "Showcasing our commitment to quality and excellence across every sector we operate in."
              : "Kuonyesha kujitolea kwetu kwa ubora katika kila sekta tunayofanya kazi."}
          </p>
        </div>
      </section>

      {/* ── INTERACTIVE FILTER BAR ─────────────────────────── */}
      <section className="bg-gray-50 border-y border-gray-150 py-6 sticky top-18 z-40 shadow-sm backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-brand-navy font-bold">
            <Filter size={18} className="text-brand-gold" />
            <span>{language === "en" ? "Filter Divisions:" : "Chuja Idara:"}</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = cat.toLowerCase() === activeCategory.toLowerCase();
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer border ${
                    isActive
                      ? "bg-brand-gold border-brand-gold text-brand-navy shadow-md shadow-brand-gold/20 scale-105"
                      : "bg-white border-gray-200 text-gray-600 hover:border-brand-gold hover:text-brand-gold"
                  }`}
                >
                  {getTranslatedFilterName(cat)}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROJECTS LIST GRID ─────────────────────────────── */}
      <section className="section-padding bg-white min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            layout 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((p) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group bg-gray-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-brand-navy/90 backdrop-blur-md text-brand-gold text-xs font-bold px-3 py-1 rounded-full border border-white/10 uppercase tracking-wider">
                      {getTranslatedCategoryBadge(p.category)}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-1.5 text-brand-gold text-xs font-semibold mb-3">
                      <Briefcase size={12} />
                      <span>{p.client}</span>
                    </div>
                    <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-gold transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                      {p.description}
                    </p>
                    <div className="flex items-center justify-between pt-6 border-t border-gray-200 mt-auto">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-1 text-gray-400 text-xs">
                          <MapPin size={10} />
                          <span>{p.location}</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-400 text-xs">
                          <Calendar size={10} />
                          <span>{p.year}</span>
                        </div>
                      </div>
                      <Link
                        href="/contact"
                        className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-brand-navy hover:bg-brand-gold hover:border-brand-gold transition-all group/btn shadow-sm cursor-pointer"
                      >
                        <ArrowRight size={18} className="group-hover/btn:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="py-20 text-center text-gray-400">
              <Briefcase size={48} className="mx-auto mb-4 opacity-30" />
              <p className="text-lg italic">
                {language === "en" ? "No projects found in this division." : "Hakuna miradi iliyopatikana katika idara hii."}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="section-padding bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
           <div className="absolute inset-0"
            style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }}
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            {language === "en" 
              ? "Looking for a Professional Partner for Your Next Project?"
              : "Unatafuta Mshirika wa Kitaalamu kwa Miradi Yako Ijayo?"}
          </h2>
          <p className="text-white/60 text-lg mb-10">
            {language === "en"
              ? "Let's discuss how Cmakey Company Limited can bring your vision to life with world-class standards and local expertise."
              : "Hebu tujadili jinsi Cmakey Company Limited inavyoweza kuleta maono yako katika hali halisi kwa viwango vya kiwango cha kimataifa na utaalamu wa ndani."}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-brand-gold text-brand-navy font-bold rounded-xl hover:bg-brand-gold-light transition-all shadow-xl shadow-brand-gold/20 hover:scale-105 text-lg cursor-pointer"
          >
            {language === "en" ? "Start a Conversation" : "Anzisha Mazungumzo"} <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
