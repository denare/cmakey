"use client";

import React, { useState, useEffect } from "react";
import {
  Plus,
  Search,
  Edit2,
  Trash2,
  Loader2,
  X,
  Check,
  Star
} from "lucide-react";
import { Project } from "@/lib/projects";
import ImageUpload from "@/components/ImageUpload";


export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<Partial<Project>>({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/projects");
      const data = await res.json();
      setProjects(data);
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(currentProject),
      });
      if (res.ok) {
        await fetchProjects();
        setIsModalOpen(false);
        setCurrentProject({});
      }
    } catch (error) {
      console.error("Failed to save project:", error);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this project?")) return;
    try {
      const res = await fetch(`/api/projects?id=${id}`, { method: "DELETE" });
      if (res.ok) await fetchProjects();
    } catch (error) {
      console.error("Failed to delete project:", error);
    }
  };

  const filteredProjects = projects.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 animate-fade-in relative min-h-screen">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-brand-navy mb-2">Manage Projects</h1>
          <p className="text-gray-500 font-medium">Showcase your successful track record across Tanzania.</p>
        </div>
        <button
          onClick={() => {
            setCurrentProject({ featured: false });
            setIsModalOpen(true);
          }}
          className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-brand-navy font-bold rounded-2xl hover:bg-brand-gold-light transition-all shadow-xl shadow-brand-gold/20 hover:scale-105 active:scale-95"
        >
          <Plus size={20} />
          Add New Project
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
            placeholder="Search projects by name, category, or client..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-2xl py-5 pl-16 pr-6 text-brand-navy placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-brand-gold/10 focus:border-brand-gold transition-all"
          />
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-5 flex items-center gap-4 min-w-[200px]">
          <div className="w-12 h-12 bg-brand-navy/5 rounded-xl flex items-center justify-center text-brand-navy font-black text-xl">
            {projects.length}
          </div>
          <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">Total Projects</span>
        </div>
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <div className="col-span-full py-20 flex flex-col items-center gap-4 text-center">
            <Loader2 className="animate-spin text-brand-gold" size={40} />
            <p className="text-gray-400 font-medium italic">Loading your portfolio...</p>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="col-span-full py-20 text-center">
            <p className="text-gray-400 font-medium">No projects found. Ready to add your first completion?</p>
          </div>
        ) : (
          filteredProjects.map((p) => (
            <div key={p.id} className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden group hover:shadow-xl transition-all h-full flex flex-col">
              <div className="relative h-48">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <div className="bg-brand-navy/80 backdrop-blur-md text-brand-gold text-[10px] font-bold px-2.5 py-1 rounded-lg border border-white/10 uppercase tracking-widest">
                    {p.category}
                  </div>
                  {p.featured && (
                    <div className="bg-brand-gold text-brand-navy text-[10px] font-black px-2.5 py-1 rounded-lg flex items-center gap-1 uppercase tracking-widest">
                      <Star size={10} fill="currentColor" /> Featured
                    </div>
                  )}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-xs text-brand-gold font-bold uppercase tracking-wide mb-1">{p.client}</p>
                <h3 className="text-lg font-black text-brand-navy mb-2 line-clamp-1">{p.title}</h3>
                <p className="text-gray-400 text-sm line-clamp-2 mb-6 flex-1">{p.description}</p>

                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="text-xs text-gray-400 font-medium">
                    {p.location} • {p.year}
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => {
                        setCurrentProject(p);
                        setIsModalOpen(true);
                      }}
                      className="p-2 text-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-all rounded-lg"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(p.id)}
                      className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 transition-all rounded-lg"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal side panel */}
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
                  {currentProject.id ? "Edit Project" : "Add New Project"}
                </h2>
                <p className="text-sm text-gray-400 mt-1 uppercase tracking-wider font-bold">Project Excellence & Portfolio</p>
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
                <div className="col-span-2">
                  <label className="label-style">Project Title</label>
                  <input
                    type="text"
                    required
                    value={currentProject.title || ""}
                    onChange={(e) => setCurrentProject({ ...currentProject, title: e.target.value })}
                    className="input-style"
                    placeholder="e.g. Dar es Salaam Infrastructure Hub"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="label-style">Category</label>
                  <select
                    required
                    value={currentProject.category || ""}
                    onChange={(e) => setCurrentProject({ ...currentProject, category: e.target.value as any })}
                    className="input-style appearance-none"
                  >
                    <option value="">Select Category</option>
                    <option value="Construction">Construction</option>
                    <option value="Logistics">Logistics</option>
                    <option value="Hospitality">Hospitality</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Clearing">Clearing</option>
                    <option value="Supply">Supply</option>
                  </select>
                </div>
                <div>
                  <label className="label-style">Featured Project</label>
                  <div className="flex items-center gap-3 mt-3">
                    <input
                      type="checkbox"
                      id="featured"
                      checked={currentProject.featured || false}
                      onChange={(e) => setCurrentProject({ ...currentProject, featured: e.target.checked })}
                      className="w-6 h-6 rounded-lg text-brand-gold focus:ring-brand-gold bg-gray-50 border-gray-200"
                    />
                    <label htmlFor="featured" className="text-sm font-bold text-brand-navy">Show on Home Page</label>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="label-style">Client Name</label>
                  <input
                    type="text"
                    required
                    value={currentProject.client || ""}
                    onChange={(e) => setCurrentProject({ ...currentProject, client: e.target.value })}
                    className="input-style"
                    placeholder="e.g. TANROADS"
                  />
                </div>
                <div>
                  <label className="label-style">Location</label>
                  <input
                    type="text"
                    required
                    value={currentProject.location || ""}
                    onChange={(e) => setCurrentProject({ ...currentProject, location: e.target.value })}
                    className="input-style"
                    placeholder="e.g. Dar es Salaam"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="label-style">Completion Year</label>
                  <input
                    type="text"
                    required
                    value={currentProject.year || ""}
                    onChange={(e) => setCurrentProject({ ...currentProject, year: e.target.value })}
                    className="input-style"
                    placeholder="e.g. 2024"
                  />
                </div>
                <div>
                  <label className="label-style">Project Image</label>
                  <ImageUpload
                    value={currentProject.image || ""}
                    onChange={(url) => setCurrentProject({ ...currentProject, image: url })}
                  />
                </div>
              </div>

              <div>
                <label className="label-style">Project Description</label>
                <textarea
                  required
                  rows={4}
                  value={currentProject.description || ""}
                  onChange={(e) => setCurrentProject({ ...currentProject, description: e.target.value })}
                  className="input-style resize-none"
                  placeholder="Summarize the project scope and success..."
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
                    {currentProject.id ? "Update Project" : "Publish Project"}
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
