import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getProjects } from "@/lib/projects";
import { ArrowRight, MapPin, Calendar, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Projects",
  description: "Explore the diverse portfolio of Cmakey Company Limited — showcasing our excellence in construction, logistics, and multi-sector services across Tanzania.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();
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
          <p className="text-brand-gold font-semibold text-sm uppercase tracking-widest mb-3 animate-fade-in-up">
            Portfolio
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 animate-fade-in-up animation-delay-100">
            Our <span className="text-brand-gold">Projects</span>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Showcasing our commitment to quality and excellence across every sector we operate in.
          </p>
        </div>
      </section>

      {/* ── PROJECTS GRID ────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <div
                key={p.id}
                className={`group bg-gray-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 animate-fade-in-up animation-delay-${(i % 3 + 1) * 100}`}
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
                    {p.category}
                  </div>
                </div>
                <div className="p-6">
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
                      className="w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center text-brand-navy hover:bg-brand-gold hover:border-brand-gold transition-all group/btn shadow-sm"
                    >
                      <ArrowRight size={18} className="group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
            Looking for a Professional Partner for Your Next Project?
          </h2>
          <p className="text-white/60 text-lg mb-10">
            Let&#39;s discuss how Cmakey Company Limited can bring your vision to life with world-class standards and local expertise.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-brand-gold text-brand-navy font-bold rounded-xl hover:bg-brand-gold-light transition-all shadow-xl shadow-brand-gold/20 hover:scale-105 text-lg"
          >
            Start a Conversation <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
