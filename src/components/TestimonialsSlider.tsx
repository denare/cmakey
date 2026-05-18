"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const testimonials = [
  {
    quoteEn: "Cmakey delivered the heavy machinery clearance through the Dar es Salaam Port in record time. Their clearing team is professional, highly responsive, and compliant.",
    quoteSw: "Cmakey ilikamilisha taratibu za kutoa mitambo yetu mizito katika Bandari ya Dar es Salaam kwa muda mfupi wa rekodi. Timu yao ya ushuru ni ya kitaalamu na inajibu haraka sana.",
    author: "Logistics Director",
    company: "Geita Gold Mine",
    rating: 5,
  },
  {
    quoteEn: "The Kilwa Road Expansion Phase II structural enhancements met our rigorous standards. Cmakey Company Limited has proven to be an excellent infrastructure partner.",
    quoteSw: "Uboreshaji wa kimuundo wa Awamu ya Pili ya Upanuzi wa Barabara ya Kilwa ulikidhi viwango vyetu vikali. Cmakey Company Limited imethibitisha kuwa mshirika bora wa miundombinu.",
    author: "Senior Civil Engineer",
    company: "TANROADS",
    rating: 5,
  },
  {
    quoteEn: "Managing accommodation, catering, and audio-visual setups for over 500 delegates at our annual summit was flawless. The corporate hospitality package was premium and highly professional.",
    quoteSw: "Kusimamia malazi, chakula, na mipangilio ya sauti na picha kwa wajumbe zaidi ya 500 kwenye mkutano wetu wa kila mwaka ilikuwa bila dosari. Kifurushi chao cha ukaribu kilikuwa cha kiwango cha juu sana.",
    author: "Events Manager",
    company: "Investment Promotion Center",
    rating: 5,
  },
];

export default function TestimonialsSlider() {
  const { language } = useLanguage();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1: left, 1: right

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [index]);

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[index];
  const quote = language === "en" ? current.quoteEn : current.quoteSw;

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0
    })
  };

  return (
    <section className="section-padding bg-gray-50 overflow-hidden relative">
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-4 md:px-12 z-20 pointer-events-none">
        <button
          onClick={handlePrev}
          className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center text-brand-navy hover:bg-brand-gold hover:text-brand-navy transition-all shadow-md pointer-events-auto cursor-pointer"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center text-brand-navy hover:bg-brand-gold hover:text-brand-navy transition-all shadow-md pointer-events-auto cursor-pointer"
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <div className="flex justify-center mb-6 text-brand-gold">
          <Quote size={48} className="opacity-20 transform -scale-y-100" />
        </div>
        
        <p className="text-brand-gold font-semibold text-sm uppercase tracking-widest mb-3">
          {language === "en" ? "Client Endorsements" : "Wateja Wetu Wanasemaje"}
        </p>
        <h2 className="text-3xl md:text-4xl font-black text-brand-navy mb-12">
          {language === "en" ? "Trusted by Leading Organizations" : "Inaaminiwa na Taasisi Kuu"}
        </h2>

        <div className="min-h-[220px] md:min-h-[180px] flex items-center justify-center relative">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full"
            >
              <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed italic mb-8 max-w-3xl mx-auto">
                "{quote}"
              </p>
              
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-brand-gold fill-brand-gold" />
                ))}
              </div>
              
              <div className="font-bold text-brand-navy text-lg">{current.author}</div>
              <div className="text-brand-gold text-sm font-semibold tracking-wider uppercase mt-0.5">{current.company}</div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination indicators */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index ? "bg-brand-gold w-8" : "bg-gray-300 hover:bg-gray-400"
              } cursor-pointer`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
