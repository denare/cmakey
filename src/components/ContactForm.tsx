"use client";

import { useState, useEffect } from "react";
import { Service } from "@/types";
import { Send, MapPin, Phone, Mail, CheckCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [servicesList, setServicesList] = useState<Service[]>([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    // Fetch services dynamically for the dropdown
    fetch("/api/services")
      .then(res => res.json())
      .then(data => setServicesList(data))
      .catch(err => console.error("Failed to fetch services for form:", err));
  }, []);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Full name is required.";
    if (!form.email.trim()) e.email = "Email address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email address.";
    if (form.phone && !/^\+?[\d\s\-()]{7,15}$/.test(form.phone))
      e.phone = "Please enter a valid phone number.";
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setIsLoading(true);
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
        window.scrollTo({ top: 300, behavior: 'smooth' });
      } else {
        setErrors({ general: "Submission failed. Please try again later." });
      }
    } catch (err) {
      setErrors({ general: "An error occurred. Check your connection." });
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-[2.5rem] p-12 md:p-20 text-center shadow-2xl border border-gray-50 animate-fade-in-up">
        <div className="relative w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
          <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-20" />
          <CheckCircle size={48} className="text-green-500 relative z-10" />
        </div>
        <h3 className="text-3xl font-black text-brand-navy mb-4">
          Message Received!
        </h3>
        <p className="text-gray-500 text-lg leading-relaxed max-w-md mx-auto">
          Thank you for reaching out to Cmakey Company Limited. One of our experts will review your inquiry and contact you within 24 hours.
        </p>
        <button 
          onClick={() => {
            setSubmitted(false);
            setForm({ name: "", email: "", phone: "", subject: "", service: "", message: "" });
          }}
          className="mt-10 text-brand-gold font-bold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  const field = (
    id: keyof typeof form,
    label: string,
    type = "text",
    placeholder = ""
  ) => (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1.5"
      >
        {label} {id !== "phone" && id !== "service" && id !== "subject" && <span className="text-red-500">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={form[id]}
        onChange={(e) => setForm({ ...form, [id]: e.target.value })}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-xl border text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all ${
          errors[id] ? "border-red-400 bg-red-50" : "border-gray-200 bg-white"
        }`}
      />
      {errors[id] && (
        <p className="text-red-500 text-xs mt-1">{errors[id]}</p>
      )}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-10 shadow-lg space-y-5">
      {errors.general && (
        <div className="p-4 bg-red-50 border border-red-100 text-red-500 rounded-xl text-sm font-medium">
          {errors.general}
        </div>
      )}
      <div className="grid sm:grid-cols-2 gap-5">
        {field("name", "Full Name", "text", "e.g. John Doe")}
        {field("email", "Email Address", "email", "you@example.com")}
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        {field("phone", "Phone Number", "tel", "+255 XXX XXX XXX")}
        {field("subject", "Subject", "text", "How can we help?")}
      </div>
      <div>
        <label
          htmlFor="service"
          className="block text-sm font-medium text-gray-700 mb-1.5"
        >
          Service of Interest
        </label>
        <select
          id="service"
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/50 bg-white"
        >
          <option value="">Select a service...</option>
          {servicesList.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.title}
            </option>
          ))}
          <option value="other">Other / General Inquiry</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1.5"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell us about your project or inquiry..."
          className={`w-full px-4 py-3 rounded-xl border text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/50 resize-none transition-all ${
            errors.message ? "border-red-400 bg-red-50" : "border-gray-200"
          }`}
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className={`w-full flex items-center justify-center gap-3 py-4 bg-brand-navy text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-[1.01] ${isLoading ? "opacity-70 cursor-not-allowed" : "hover:bg-brand-navy-dark"}`}
      >
        {isLoading ? (
          <>
            <Loader2 className="animate-spin" size={20} />
            Sending Message...
          </>
        ) : (
          <>
            Send Message <Send size={18} />
          </>
        )}
      </button>
      <p className="text-xs text-gray-400 text-center">
        Your data is safe with us. We never share your information with third parties.
      </p>
    </form>
  );
}
