import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getServices } from "@/lib/services";
import { ArrowRight } from "lucide-react";
import ServiceReveal from "@/components/ServiceReveal";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Cmakey Company Limited's six core service areas: Construction, Hospitality, Entertainment, Clearing & Forwarding, Logistics, and General Material Supply.",
};

export default async function ServicesPage() {
  const services = await getServices();
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
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl -translate-x-1/2" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-gold font-semibold text-sm uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Services We Offer
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">
            Six sectors. One reliable partner. We deliver across the full
            spectrum of Tanzania&#39;s business needs.
          </p>
        </div>
      </section>

      {/* ── SERVICES LIST ─────────────────────────────── */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((svc, i) => (
              <ServiceReveal key={svc.slug} index={i}>
                <div
                  className={`grid lg:grid-cols-2 gap-10 items-center bg-white rounded-[2.5rem] overflow-hidden shadow-md hover:shadow-xl transition-shadow ${
                    i % 2 !== 0 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image side — swap order for even/odd */}
                  <div
                    className={`relative h-80 lg:h-96 ${
                      i % 2 !== 0 ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={svc.heroImage}
                      alt={svc.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/40 to-transparent" />
                    <div className="absolute top-6 left-6 text-5xl">{svc.icon}</div>
                  </div>
                  {/* Content side */}
                  <div className={`p-10 lg:p-14 ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                    <h2 className="text-4xl font-black text-brand-navy mb-4">
                      {svc.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                      {svc.shortDescription}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-3 mb-10">
                      {svc.features.slice(0, 4).map((f) => (
                        <li key={f} className="flex items-center gap-2 text-gray-600 text-sm">
                          <span className="w-2 h-2 bg-brand-gold rounded-full shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/services/${svc.slug}`}
                      className="inline-flex items-center gap-3 px-8 py-4 bg-brand-navy text-white font-bold rounded-xl hover:bg-brand-navy-dark transition-all group"
                    >
                      Explore Service Details{" "}
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                  </div>
                </div>
              </ServiceReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-brand-navy mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Our team is happy to consult with you and find the right solution
            for your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-brand-gold text-brand-navy font-bold rounded-xl hover:bg-brand-gold-light transition-all shadow-xl shadow-brand-gold/30 hover:scale-105 text-lg"
          >
            Contact Our Team <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
