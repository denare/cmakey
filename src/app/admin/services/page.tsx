"use client";

import React, { useState, useEffect } from "react";
import { 
  Plus, 
  Search, 
  Edit2, 
  Trash2, 
  ExternalLink,
  Loader2,
  X,
  Check
} from "lucide-react";
import Link from "next/link";
import { Service } from "@/lib/services";
import ImageUpload from "@/components/ImageUpload";

export default function AdminServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentService, setCurrentService] = useState<Partial<Service>>({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/services");
      const data = await res.json();
      setServices(data);
    } catch (error) {
      console.error("Failed to fetch services:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch("/api/services", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(currentService),
      });
      if (res.ok) {
        await fetchServices();
        setIsModalOpen(false);
        setCurrentService({});
      }
    } catch (error) {
      console.error("Failed to save service:", error);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (slug: string) => {
    if (!confirm("Are you sure you want to delete this service?")) return;
    try {
      const res = await fetch(`/api/services?slug=${slug}`, { method: "DELETE" });
      if (res.ok) await fetchServices();
    } catch (error) {
      console.error("Failed to delete service:", error);
    }
  };

  const filteredServices = services.filter(s => 
    s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.slug.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 animate-fade-in relative min-h-screen">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-brand-navy mb-2">Manage Services</h1>
          <p className="text-gray-500 font-medium">Add, edit, or remove your business service offerings.</p>
        </div>
        <button 
          onClick={() => {
            setCurrentService({ features: [] });
            setIsModalOpen(true);
          }}
          className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-brand-navy font-bold rounded-2xl hover:bg-brand-gold-light transition-all shadow-xl shadow-brand-gold/20 hover:scale-105 active:scale-95"
        >
          <Plus size={20} />
          Create New Service
        </button>
      </div>

      {/* Search & Stats */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 relative">
          <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none text-gray-400">
            <Search size={20} />
          </div>
          <input 
            type="text" 
            placeholder="Search services by name or slug..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-2xl py-5 pl-16 pr-6 text-brand-navy placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-brand-gold/10 focus:border-brand-gold transition-all"
          />
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-5 flex items-center gap-4 min-w-[200px]">
          <div className="w-12 h-12 bg-brand-navy/5 rounded-xl flex items-center justify-center text-brand-navy font-black text-xl">
            {services.length}
          </div>
          <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">Active Services</span>
        </div>
      </div>

      {/* Table/List */}
      <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden overflow-x-auto">
        <table className="w-full text-left min-w-[800px]">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-8 py-6 text-xs font-black text-brand-navy uppercase tracking-widest">Service</th>
              <th className="px-8 py-6 text-xs font-black text-brand-navy uppercase tracking-widest">Icon</th>
              <th className="px-8 py-6 text-xs font-black text-brand-navy uppercase tracking-widest">Description</th>
              <th className="px-8 py-6 text-xs font-black text-brand-navy uppercase tracking-widest text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {loading ? (
              <tr>
                <td colSpan={4} className="px-8 py-20 text-center">
                  <div className="flex flex-col items-center gap-4">
                    <Loader2 className="animate-spin text-brand-gold" size={40} />
                    <p className="text-gray-400 font-medium italic">Loading your services...</p>
                  </div>
                </td>
              </tr>
            ) : filteredServices.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-8 py-20 text-center">
                  <p className="text-gray-400 font-medium">No services found matching your search.</p>
                </td>
              </tr>
            ) : (
              filteredServices.map((svc) => (
                <tr key={svc.slug} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex flex-col">
                      <span className="font-bold text-brand-navy text-lg leading-none mb-1">{svc.title}</span>
                      <span className="text-gray-400 text-xs font-mono">/{svc.slug}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-3xl">{svc.icon}</td>
                  <td className="px-8 py-6">
                    <p className="text-gray-500 text-sm line-clamp-2 max-w-xs">{svc.shortDescription}</p>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Link 
                        href={`/services/${svc.slug}`} 
                        target="_blank"
                        className="p-3 text-gray-400 hover:text-brand-navy hover:bg-gray-200 transition-all rounded-xl"
                        title="View Live"
                      >
                        <ExternalLink size={18} />
                      </Link>
                      <button 
                        onClick={() => {
                          setCurrentService(svc);
                          setIsModalOpen(true);
                        }}
                        className="p-3 text-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-all rounded-xl"
                        title="Edit Service"
                      >
                        <Edit2 size={18} />
                      </button>
                      <button 
                        onClick={() => handleDelete(svc.slug)}
                        className="p-3 text-red-400 hover:text-red-600 hover:bg-red-50 transition-all rounded-xl"
                        title="Delete Service"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Side Panel Modal for Edit/Add */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <div 
            className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="relative w-full max-w-2xl bg-white h-full shadow-2xl flex flex-col animate-slide-in-right">
            <div className="p-8 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-black text-brand-navy">
                  {currentService.slug ? "Edit Service" : "Add New Service"}
                </h2>
                <p className="text-sm text-gray-400 mt-1 uppercase tracking-wider font-bold">Brand Identity & Infrastructure</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-3 bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-brand-navy transition-all rounded-full"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSave} className="flex-1 overflow-y-auto p-8 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="label-style">Service Title</label>
                  <input 
                    type="text" 
                    required
                    value={currentService.title || ""}
                    onChange={(e) => setCurrentService({...currentService, title: e.target.value})}
                    className="input-style"
                    placeholder="e.g. Construction Works"
                  />
                </div>
                <div>
                  <label className="label-style">Slug (URL Name)</label>
                  <input 
                    type="text" 
                    required
                    value={currentService.slug || ""}
                    onChange={(e) => setCurrentService({...currentService, slug: e.target.value.toLowerCase().replace(/\s+/g, "-")})}
                    className="input-style"
                    placeholder="e.g. construction"
                    disabled={!!currentService.slug && services.some(s => s.slug === currentService.slug)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="label-style">Icon (Emoji or SVG)</label>
                  <input 
                    type="text" 
                    required
                    value={currentService.icon || ""}
                    onChange={(e) => setCurrentService({...currentService, icon: e.target.value})}
                    className="input-style text-2xl"
                    placeholder="🏗️"
                  />
                </div>
                <div>
                  <label className="label-style">Hero Image</label>
                  <ImageUpload 
                    value={currentService.heroImage || ""}
                    onChange={(url) => setCurrentService({...currentService, heroImage: url})}
                  />
                </div>
              </div>

              <div>
                <label className="label-style">Short Description</label>
                <textarea 
                  required
                  rows={2}
                  value={currentService.shortDescription || ""}
                  onChange={(e) => setCurrentService({...currentService, shortDescription: e.target.value})}
                  className="input-style resize-none"
                  placeholder="Appears on listing cards..."
                />
              </div>

              <div>
                <label className="label-style">Long Description</label>
                <textarea 
                  required
                  rows={6}
                  value={currentService.longDescription || ""}
                  onChange={(e) => setCurrentService({...currentService, longDescription: e.target.value})}
                  className="input-style resize-none"
                  placeholder="Detailed explanation of the service..."
                />
              </div>

              <div>
                <label className="label-style">Core Features (comma separated)</label>
                <input 
                  type="text" 
                  value={currentService.features?.join(", ") || ""}
                  onChange={(e) => setCurrentService({...currentService, features: e.target.value.split(",").map(f => f.trim())})}
                  className="input-style"
                  placeholder="Feature 1, Feature 2, Feature 3"
                />
              </div>
            </form>

            <div className="p-8 border-t border-gray-100 bg-gray-50 flex gap-4">
              <button 
                type="button" 
                onClick={() => setIsModalOpen(false)}
                className="flex-1 py-4 border border-gray-200 text-gray-500 font-bold rounded-2xl hover:bg-white transition-all"
              >
                Cancel
              </button>
              <button 
                onClick={handleSave}
                disabled={saving}
                className="flex-[2] py-4 bg-brand-navy text-white font-bold rounded-2xl hover:bg-brand-navy-dark transition-all flex items-center justify-center gap-2 group shadow-xl shadow-brand-navy/20 active:scale-95 disabled:opacity-50"
              >
                {saving ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : (
                  <>
                    <Check size={20} />
                    {currentService.slug && services.some(s => s.slug === currentService.slug) ? "Update Service" : "Publish Service"}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .label-style {
          @apply block text-brand-navy/40 uppercase tracking-widest text-[10px] font-black mb-2;
        }
        .input-style {
          @apply w-full bg-gray-50 border border-gray-200 rounded-2xl p-4 text-brand-navy focus:outline-none focus:ring-4 focus:ring-brand-gold/10 focus:border-brand-gold transition-all font-medium placeholder:text-gray-300;
        }
      `}</style>
    </div>
  );
}
