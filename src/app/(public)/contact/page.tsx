import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import ServiceReveal from "@/components/ServiceReveal";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Cmakey Company Limited. Call us, email us, or fill in our contact form and we'll respond within 24 hours.",
};

const contactDetails = [
  {
    icon: MapPin,
    label: "Our Address",
    lines: ["P.O. Box 70307", "Dar es Salaam, Tanzania"],
  },
  {
    icon: Phone,
    label: "Call Us",
    lines: ["+255 658 173 232", "+255 714 562 710"],
    hrefs: ["tel:+255658173232", "tel:+255714562710"],
  },
  {
    icon: Mail,
    label: "Email Us",
    lines: ["cmakeycompanylimited@gmail.com"],
    hrefs: ["mailto:cmakeycompanylimited@gmail.com"],
  },
  {
    icon: Clock,
    label: "Business Hours",
    lines: ["Mon – Fri: 8:00 AM – 5:00 PM", "Sat: 9:00 AM – 1:00 PM"],
  },
];

export default function ContactPage() {
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
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl -translate-x-1/2" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-gold font-semibold text-sm uppercase tracking-widest mb-3">
            Get In Touch
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Contact Us
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">
            We&#39;d love to hear from you. Send us a message and our team will
            respond within 24 hours.
          </p>
        </div>
      </section>

      {/* ── CONTENT ──────────────────────────────────────── */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact info */}
            <div className="space-y-5">
              {contactDetails.map((cd, i) => (
                <ServiceReveal key={cd.label} index={i}>
                  <div
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-brand-navy rounded-xl flex items-center justify-center">
                        <cd.icon size={18} className="text-brand-gold" />
                      </div>
                      <h3 className="font-semibold text-brand-navy">{cd.label}</h3>
                    </div>
                    {cd.lines.map((line, idx) =>
                      cd.hrefs ? (
                        <a
                          key={idx}
                          href={cd.hrefs[idx]}
                          className="block text-gray-600 text-sm hover:text-brand-gold transition-colors leading-relaxed break-all"
                        >
                          {line}
                        </a>
                      ) : (
                        <p key={idx} className="text-gray-600 text-sm leading-relaxed">
                          {line}
                        </p>
                      )
                    )}
                  </div>
                </ServiceReveal>
              ))}

              {/* Map embed */}
              <ServiceReveal index={4}>
                <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-52 grayscale hover:grayscale-0 transition-all duration-700">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254906.48820063506!2d39.11946394!3d-6.79234495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4bae169bd6f1%3A0x940f6b26a086a1cc!2sDar%20es%20Salaam%2C%20Tanzania!5e0!3m2!1sen!2sus!4v1698000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dar es Salaam location"
                  />
                </div>
              </ServiceReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <ServiceReveal index={2}>
                <h2 className="text-3xl font-black text-brand-navy mb-2">
                  Send Us a Message
                </h2>
                <p className="text-gray-500 mb-8">
                  Fill in the form below and one of our team members will reach
                  out to you shortly.
                </p>
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                  <ContactForm />
                </div>
              </ServiceReveal>
            </div>
          </div>
        </div>
      </section>
      {/* ── FAQ SECTION ──────────────────────────────────── */}
      <section className="pb-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceReveal index={3}>
            <div className="bg-white rounded-[2rem] p-10 md:p-16 shadow-xl border border-gray-100">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-black text-brand-navy mb-4">Frequently Asked Questions</h2>
                <p className="text-gray-500">Find quick answers to common inquiries about our services.</p>
              </div>
              
              <div className="space-y-6 text-left">
                {[
                  { q: "What is your typical turnaround time for port clearing?", a: "For Dar es Salaam Port, standard clearing typically takes 3-7 working days after receipt of all necessary documentation, depending on the cargo type and required inspections." },
                  { q: "Do you offer cross-border logistics outside of Tanzania?", a: "Yes, we operate throughout the East African region, including Kenya, Uganda, Rwanda, Burundi, and DRC, handling all regional customs and transit requirements." },
                  { q: "Are you licensed for government construction projects?", a: "Absolutely. Cmakey Company Limited is a fully registered contractor with the relevant authorities in Tanzania, experienced in both public and private sector projects." },
                  { q: "Can you handle specialized supply of industrial materials?", a: "Yes, we have a robust procurement network that allows us to source and supply technical and industrial materials according to strict ISO-aligned client specifications." }
                ].map((item, i) => (
                  <div key={i} className="group border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                    <h3 className="text-lg font-bold text-brand-navy mb-3 group-hover:text-brand-gold transition-colors flex gap-3">
                      <span className="text-brand-gold">Q.</span> {item.q}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed pl-8">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ServiceReveal>
        </div>
      </section>
    </>
  );
}
