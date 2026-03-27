import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Target, Eye, Heart, Users } from "lucide-react";
import { getTeamMembers } from "@/lib/db";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Cmakey Company Limited — our story, mission, vision, and the values that drive our work across Tanzania.",
};

const coreValues = [
  {
    icon: "⚖️",
    title: "Integrity",
    desc: "We operate with complete honesty and transparency in every interaction.",
  },
  {
    icon: "🏆",
    title: "Excellence",
    desc: "Our standard is nothing short of the best in every service we deliver.",
  },
  {
    icon: "💡",
    title: "Innovation",
    desc: "We embrace modern approaches and creative solutions to complex challenges.",
  },
  {
    icon: "🤝",
    title: "Reliability",
    desc: "We honour our commitments — on time, within budget, every time.",
  },
  {
    icon: "🌱",
    title: "Sustainability",
    desc: "We grow responsibly, caring for our communities and environment.",
  },
  {
    icon: "🌍",
    title: "Partnership",
    desc: "We build lasting, mutually beneficial relationships with all stakeholders.",
  },
];

export default async function AboutPage() {
  const team = await getTeamMembers();

  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────────────── */}
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
            About Us
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Our Story &amp; Our Purpose
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">
            Discover the company that is unlocking opportunities across Tanzania
            — one project at a time.
          </p>
        </div>
      </section>

      {/* ── COMPANY STORY ─────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden h-[500px] shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
                  alt="The Cmakey team"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              {/* Motto badge */}
              <div className="absolute -bottom-6 -right-6 bg-brand-gold text-brand-navy rounded-2xl px-8 py-5 shadow-2xl">
                <p className="font-black text-xl italic">"Unlock The World"</p>
              </div>
            </div>
            <div className="pt-8 lg:pt-0">
              <p className="text-brand-gold font-semibold text-sm uppercase tracking-widest mb-3">
                Who We Are
              </p>
              <h2 className="text-4xl font-black text-brand-navy mb-6 leading-tight">
                A Multi-Sector Powerhouse in Tanzania
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5 text-lg">
                Cmakey Company Limited is a proudly Tanzanian enterprise
                headquartered in Dar es Salaam. We operate across six strategic
                sectors — Construction, Hospitality, Entertainment, Clearing
                &amp; Forwarding, Logistics, and General Material Supply — making
                us one of the most versatile service companies in the region.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our team of seasoned professionals brings decades of collective
                experience, combining regional knowledge with international best
                practices to deliver results that exceed expectations. We are
                committed to contributing to Tanzania&#39;s economic growth while
                upholding the highest standards of service delivery.
              </p>
              <ul className="space-y-3">
                {[
                  "Headquartered in Dar es Salaam",
                  "Serving clients across Tanzania and East Africa",
                  "Government and private sector experience",
                  "Bilingual service delivery (English &amp; Kiswahili)",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <CheckCircle size={18} className="text-brand-gold shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ─────────────────────────────── */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand-gold font-semibold text-sm uppercase tracking-widest mb-3">
              Our Purpose
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-brand-navy">
              Mission &amp; Vision
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-brand-navy rounded-2xl flex items-center justify-center mb-6">
                <Target size={28} className="text-brand-gold" />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To provide innovative, high-quality, and reliable services that
                empower our clients to achieve their goals — delivering value
                across every sector we operate in, with integrity and
                professionalism at the forefront of everything we do.
              </p>
            </div>
            <div className="bg-brand-navy rounded-3xl p-10 shadow-lg">
              <div className="w-14 h-14 bg-brand-gold/20 border border-brand-gold/40 rounded-2xl flex items-center justify-center mb-6">
                <Eye size={28} className="text-brand-gold" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-white/70 leading-relaxed text-lg">
                To be the leading multi-sector company in East Africa —
                recognized for excellence, trusted by our clients, and committed
                to sustainable growth that benefits our people, our communities,
                and our continent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ──────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand-gold font-semibold text-sm uppercase tracking-widest mb-3">
              What Guides Us
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-brand-navy">
              Our Core Values
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((v) => (
              <div
                key={v.title}
                className="group bg-gray-50 hover:bg-brand-navy rounded-2xl p-8 transition-all duration-300 border border-gray-100 hover:border-brand-navy hover:shadow-xl"
              >
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-gold mb-3 transition-colors">
                  {v.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/70 leading-relaxed text-sm transition-colors">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR TEAM ─────────────────────────────────────── */}
      <section className="section-padding bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-brand-gold font-semibold text-sm uppercase tracking-widest mb-3">
              The People Behind Cmakey
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-brand-navy">
              Our <span className="text-brand-gold">Leadership Team</span>
            </h2>
          </div>
          {team.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((m, i) => (
                <div key={m.id} className={`group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:border-brand-gold transition-all duration-500 animate-fade-in-up animation-delay-${(i + 1) * 100}`}>
                  <div className="relative h-72 overflow-hidden bg-gray-100 flex items-center justify-center">
                    {m.image ? (
                      <Image src={m.image} alt={m.name} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <Users size={64} className="text-gray-300" />
                    )}
                    <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-transparent transition-colors duration-300" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-brand-navy mb-1">{m.name}</h3>
                    <p className="text-brand-gold font-medium text-sm">{m.role}</p>
                    {m.bio && <p className="text-gray-500 text-xs mt-2 line-clamp-2">{m.bio}</p>}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10 bg-white rounded-3xl border border-gray-100">
              <p className="text-gray-500 font-medium">Leadership team profiles are currently being updated.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="section-padding bg-brand-gold">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Heart size={40} className="text-brand-navy mx-auto mb-6" />
          <h2 className="text-4xl font-black text-brand-navy mb-4">
            Let&#39;s Build Something Great Together
          </h2>
          <p className="text-brand-navy/70 text-lg mb-8">
            Whether you are a business, government agency, or individual — we
            have the expertise to meet your needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-brand-navy text-white font-bold rounded-xl hover:bg-brand-navy-dark transition-all shadow-xl hover:scale-105 text-lg"
          >
            Get In Touch <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
