import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServices, getServiceBySlug } from "@/lib/services";
import { ArrowRight, CheckCircle, Phone, Mail } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const svc = await getServiceBySlug(slug);
  if (!svc) return { title: "Service Not Found" };
  return {
    title: svc.title,
    description: svc.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const svc = await getServiceBySlug(slug);
  if (!svc) notFound();

  const services = await getServices();
  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <Image
          src={svc.heroImage}
          alt={svc.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white/60 hover:text-brand-gold text-sm mb-4 transition-colors"
          >
            ← Back to Services
          </Link>
          <div className="text-6xl mb-4">{svc.icon}</div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 max-w-3xl">
            {svc.title}
          </h1>
          <p className="text-white/80 text-xl max-w-2xl">{svc.shortDescription}</p>
        </div>
      </section>

      {/* ── DESCRIPTION ──────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-black text-brand-navy mb-6">
                About This Service
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-10">
                {svc.longDescription}
              </p>

              <h3 className="text-2xl font-bold text-brand-navy mb-6">
                Key Features &amp; Benefits
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {svc.features.map((f) => (
                  <div
                    key={f}
                    className="flex items-start gap-3 bg-gray-50 rounded-xl p-4"
                  >
                    <CheckCircle
                      size={20}
                      className="text-brand-gold mt-0.5 shrink-0"
                    />
                    <span className="text-gray-700 text-sm leading-relaxed">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <div className="bg-brand-navy rounded-3xl p-8 sticky top-24">
                <h3 className="text-xl font-bold text-white mb-3">
                  Interested in This Service?
                </h3>
                <p className="text-white/60 text-sm mb-6">
                  Contact our team for a free consultation and a tailored
                  proposal for your project.
                </p>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-brand-gold text-brand-navy font-bold rounded-xl hover:bg-brand-gold-light transition-all mb-4"
                >
                  Request a Quote <ArrowRight size={16} />
                </Link>
                <div className="border-t border-white/10 pt-6 space-y-4">
                  <a
                    href="tel:+255658173232"
                    className="flex items-center gap-3 text-white/70 hover:text-white text-sm transition-colors"
                  >
                    <Phone size={16} className="text-brand-gold" />
                    +255 658 173 232
                  </a>
                  <a
                    href="tel:+255714562710"
                    className="flex items-center gap-3 text-white/70 hover:text-white text-sm transition-colors"
                  >
                    <Phone size={16} className="text-brand-gold" />
                    +255 714 562 710
                  </a>
                  <a
                    href="mailto:cmakeycompanylimited@gmail.com"
                    className="flex items-center gap-3 text-white/70 hover:text-white text-sm transition-colors break-all"
                  >
                    <Mail size={16} className="text-brand-gold shrink-0" />
                    cmakeycompanylimited@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OTHER SERVICES ───────────────────────────────── */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-brand-navy mb-10">
            Explore Other Services
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={s.heroImage}
                    alt={s.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-brand-navy/40" />
                  <div className="absolute bottom-3 left-3 text-3xl">{s.icon}</div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-brand-navy group-hover:text-brand-gold transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed line-clamp-2">
                    {s.shortDescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
