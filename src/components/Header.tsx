"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Globe } from "lucide-react";

const navLinks = [
  { href: "/", labelKey: "navHome" as const },
  { href: "/about", labelKey: "navAbout" as const },
  { href: "/services", labelKey: "navServices" as const },
  { href: "/projects", labelKey: "navProjects" as const },
  { href: "/contact", labelKey: "navContact" as const },
];

import { useLanguage } from "@/lib/LanguageContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || !isHome
        ? "bg-brand-navy/90 backdrop-blur-md shadow-lg shadow-black/20"
        : "bg-transparent"
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-2">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group -ml-1 mt-4">
            <div className="relative h-16 w-16 group-hover:scale-110 transition-transform duration-300">
              <Image
                src="/logo.png"
                alt="Cmakey Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-black text-2xl tracking-tighter leading-none group-hover:text-brand-gold transition-colors">
                CMAKEY
              </span>
              <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.2em] mt-1">
                Company Limited
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href))
                  ? "text-brand-gold bg-white/10"
                  : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
              >
                {t(link.labelKey)}
              </Link>
            ))}
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="ml-2 p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider cursor-pointer border-0"
              title={language === "en" ? "Badili kwenda Kiswahili" : "Switch to English"}
            >
              <Globe size={15} className="text-brand-gold" />
              <span>{language === "en" ? "SW" : "EN"}</span>
            </button>

            <Link
              href="/contact"
              className="ml-4 px-5 py-2.5 bg-brand-gold text-brand-navy font-semibold rounded-lg text-sm hover:bg-brand-gold-light transition-all duration-200 hover:shadow-lg hover:shadow-brand-gold/30"
            >
              {t("getInTouch")}
            </Link>
          </div>

          {/* mobile toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-brand-navy-dark border-t border-white/10 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 text-sm font-medium border-b border-white/5 transition-colors ${pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href))
                  ? "text-brand-gold"
                  : "text-white/80 hover:text-white"
                  }`}
              >
                {t(link.labelKey)}
              </Link>
            ))}
            
            {/* Mobile Language Switcher */}
            <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between">
              <span className="text-white/60 text-sm font-medium">Language / Lugha:</span>
              <button
                onClick={toggleLanguage}
                className="px-3 py-1.5 bg-white/10 rounded-lg text-brand-gold hover:text-white hover:bg-white/20 transition-all flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider"
              >
                <Globe size={14} />
                <span>{language === "en" ? "Kiswahili (SW)" : "English (EN)"}</span>
              </button>
            </div>

            <div className="px-4 pt-3">
              <Link
                href="/contact"
                className="block w-full text-center px-5 py-3 bg-brand-gold text-brand-navy font-semibold rounded-lg text-sm"
              >
                {t("getInTouch")}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
