import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import {
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  Target,
  Eye,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cmakey Company Limited – Unlock The World",
  description:
    "Cmakey Company Limited is a multi-sector company based in Dar es Salaam, Tanzania, offering construction, logistics, hospitality, entertainment, clearing, and supply services.",
};

const coreValues = [
  { title: "Integrity", desc: "We operate with honesty and transparency in all our business dealings." },
  { title: "Excellence", desc: "We are committed to delivering the highest quality in every service." },
  { title: "Innovation", desc: "We embrace modern solutions to meet evolving client needs." },
  { title: "Reliability", desc: "We follow through on our promises, on time and within budget." },
  { title: "Partnership", desc: "We build lasting relationships with clients, communities, and stakeholders." },
  { title: "Sustainability", desc: "We grow responsibly, considering the long-term impact of our work." },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80"
          alt="Dar es Salaam skyline"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/40 text-brand-gold px-4 py-1.5 rounded-full text-sm font-medium mb-6 animate-fade-in-up">
              <Star size={14} fill="currentColor" />
              Dar es Salaam, Tanzania
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 animate-fade-in-up animation-delay-100">
              Unlock <span className="gradient-text">The World</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-10 animate-fade-in-up animation-delay-200">
              Cmakey Company Limited is your trusted multi-sector partner in
              Tanzania — delivering excellence in Construction, Logistics,
              Hospitality, and beyond.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-300">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-brand-navy font-bold rounded-xl hover:bg-brand-gold-light transition-all shadow-xl shadow-brand-gold/30 hover:shadow-brand-gold/50 hover:scale-105"
              >
                Explore Services <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* ── ABOUT SNIPPET ────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-brand-gold font-semibold text-sm uppercase tracking-widest mb-3">
                Who We Are
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-brand-navy mb-6 leading-tight">
                A Company Built on{" "}
                <span className="text-brand-gold">Trust &amp; Excellence</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                Founded in Dar es Salaam, Cmakey Company Limited is a dynamic
                multi-sector enterprise committed to delivering world-class
                services across construction, logistical operations, hospitality,
                entertainment, clearing &amp; forwarding, and material supply.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our motto — <em className="text-brand-navy font-semibold">"Unlock The World"</em> — reflects our
                vision of opening doors for businesses and individuals across
                Tanzania and the wider East African region.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "ISO-aligned service delivery standards",
                  "Experienced and certified professional team",
                  "Pan-Tanzania and East Africa reach",
                ].map((item) => (
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
                Learn More About Us{" "}
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
                <div className="text-sm text-white/70 mt-1">Industry Sectors</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-brand-gold text-brand-navy rounded-2xl p-6 shadow-2xl">
                <div className="text-3xl font-black">10+</div>
                <div className="text-sm text-brand-navy/80 mt-1">Years Experience</div>
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
              What We Offer
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-brand-navy mb-4">
              Our Core Services
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              From construction to logistics, we offer comprehensive services to
              meet the diverse needs of businesses and individuals in Tanzania.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col animation-delay-${(i + 1) * 100} animate-fade-in-up`}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={svc.heroImage}
                    alt={svc.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-4xl">{svc.icon}</div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-bold text-brand-navy text-xl mb-2 group-hover:text-brand-gold transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">
                    {svc.shortDescription}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-brand-gold font-semibold text-sm">
                    Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ────────────────────────────────── */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-xl">
              <p className="text-brand-gold font-semibold text-sm uppercase tracking-widest mb-3">
                Proven Track Record
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-brand-navy leading-tight">
                Featured <span className="text-brand-gold">Projects</span>
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-brand-navy font-bold hover:text-brand-gold transition-colors group"
            >
              View All Projects{" "}
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects
              .filter((p) => p.featured)
              .slice(0, 3)
              .map((p, i) => (
                <div
                  key={p.id}
                  className={`group relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl animate-fade-in-up animation-delay-${(i + 1) * 100}`}
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/20 to-transparent opacity-90" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="bg-brand-gold/90 backdrop-blur-sm text-brand-navy text-[10px] font-bold px-3 py-1 rounded-full w-fit mb-3 uppercase tracking-tighter">
                      {p.category}
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
                      Read Details <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ────────────────────────────────── */}
      <section className="section-padding bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0"
            style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand-gold font-semibold text-sm uppercase tracking-widest mb-3">Our Purpose</p>
            <h2 className="text-4xl md:text-5xl font-black text-white">
              Driven by Purpose, Guided by Values
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/8 transition-all">
              <div className="w-14 h-14 bg-brand-gold/20 border border-brand-gold/30 rounded-2xl flex items-center justify-center mb-6">
                <Target size={28} className="text-brand-gold" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-white/70 leading-relaxed text-lg">
                To provide innovative, high-quality, and reliable services that
                empower our clients to achieve their goals — delivering value
                across every sector we operate in, with integrity and
                professionalism at the forefront.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/8 transition-all">
              <div className="w-14 h-14 bg-brand-gold/20 border border-brand-gold/30 rounded-2xl flex items-center justify-center mb-6">
                <Eye size={28} className="text-brand-gold" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-white/70 leading-relaxed text-lg">
                To be the leading multi-sector company in East Africa — recognized
                for excellence, trusted by our clients, and committed to
                sustainable growth that benefits our people, our communities,
                and our continent.
              </p>
            </div>
          </div>

          {/* Core values strip */}
          <div>
            <h3 className="text-center text-xl font-bold text-white/60 uppercase tracking-wider mb-8">Core Values</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {coreValues.map((v) => (
                <div key={v.title} className="text-center bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-brand-gold/40 hover:bg-white/10 transition-all group">
                  <div className="w-2 h-2 bg-brand-gold rounded-full mx-auto mb-3 group-hover:scale-150 transition-transform" />
                  <div className="font-bold text-white text-sm">{v.title}</div>
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
                Ready to Work Together?
              </h2>
              <p className="text-white/70 text-xl mb-10 max-w-2xl mx-auto">
                Get in touch with our team today and let us help you unlock new
                opportunities for your business.
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
                Send Us a Message <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
