import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";
import { services } from "@/lib/services";

export default function Footer() {
  return (
    <footer className="bg-brand-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative h-20 w-72 scale-125 origin-left">
                <Image
                  src="/logo.png"
                  alt="Cmakey Company Limited"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Your multi-sector partner for growth across Tanzania and East
              Africa. We unlock opportunities in every industry we serve.
            </p>
            <p className="text-brand-gold font-semibold italic">
              "Unlock The World"
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-5">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-gold hover:text-brand-navy flex items-center justify-center transition-all text-white/70"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                >
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3l-.5 3H13v6.8c4.56-.93 8-4.96 8-9.8z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-gold hover:text-brand-navy flex items-center justify-center transition-all text-white/70"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a2.7 2.7 0 0 0-2.7-2.7c-.8 0-1.2.4-1.6.9v-.9H11.5v8h2.7v-4.3c0-.6.5-1.1 1.1-1.1.6 0 1 .5 1 1.1v4.3h2.7M8.1 7.3c-.9 0-1.6.7-1.6 1.6S7.2 10.5 8.1 10.5s1.6-.7 1.6-1.6-.7-1.6-1.6-1.6m1.3 11.2V9.5H6.8v9h2.6z" />
                </svg>
              </a>
              <a
                href="https://wa.me/255658173232"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-gold hover:text-brand-navy flex items-center justify-center transition-all text-white/70"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-brand-gold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Our Services" },
                { href: "/contact", label: "Contact Us" },
                { href: "/privacy", label: "Privacy Policy" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-brand-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-brand-gold mb-4 text-sm uppercase tracking-wider">
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.map((svc) => (
                <li key={svc.slug}>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="text-white/60 hover:text-brand-gold text-sm transition-colors"
                  >
                    {svc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-brand-gold mb-4 text-sm uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <MapPin size={16} className="text-brand-gold mt-1 shrink-0" />
                <span className="text-white/60 text-sm">
                  P.O. Box 70307, Dar es Salaam, Tanzania
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={16} className="text-brand-gold shrink-0" />
                <div className="text-sm">
                  <a
                    href="tel:+255658173232"
                    className="block text-white/60 hover:text-brand-gold transition-colors"
                  >
                    +255 658 173 232
                  </a>
                  <a
                    href="tel:+255714562710"
                    className="block text-white/60 hover:text-brand-gold transition-colors"
                  >
                    +255 714 562 710
                  </a>
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={16} className="text-brand-gold shrink-0" />
                <a
                  href="mailto:cmakeycompanylimited@gmail.com"
                  className="text-white/60 hover:text-brand-gold text-sm transition-colors break-all"
                >
                  cmakeycompanylimited@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-sm">
            © 2026 Cmakey Company Limited. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Built with excellence in Tanzania.
          </p>
        </div>
      </div>
    </footer>
  );
}
