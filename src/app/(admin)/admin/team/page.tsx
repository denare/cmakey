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
  Users
} from "lucide-react";
import ImageUpload from "@/components/ImageUpload";
import { TeamMember } from "@/types";

export default function AdminTeamPage() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMember, setCurrentMember] = useState<Partial<TeamMember>>({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchTeam();
  }, []);

  const fetchTeam = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/team");
      const data = await res.json();
      setTeam(data);
    } catch (error) {
      console.error("Failed to fetch team:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch("/api/team", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(currentMember),
      });
      if (res.ok) {
        await fetchTeam();
        setIsModalOpen(false);
        setCurrentMember({});
      }
    } catch (error) {
      console.error("Failed to save team member:", error);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to remove this team member?")) return;
    try {
      const res = await fetch(`/api/team?id=${id}`, { method: "DELETE" });
      if (res.ok) await fetchTeam();
    } catch (error) {
      console.error("Failed to delete member:", error);
    }
  };

  const filteredTeam = team.filter(m => 
    m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 animate-fade-in relative min-h-screen">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-brand-navy mb-2">Leadership Team</h1>
          <p className="text-gray-500 font-medium">Manage the faces behind Cmakey's success.</p>
        </div>
        <button 
          onClick={() => {
            setCurrentMember({ order: team.length + 1 });
            setIsModalOpen(true);
          }}
          className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-brand-navy font-bold rounded-2xl hover:bg-brand-gold-light transition-all shadow-xl shadow-brand-gold/20 hover:scale-105 active:scale-95"
        >
          <Plus size={20} />
          Add Member
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
            placeholder="Search by name or role..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-2xl py-5 pl-16 pr-6 text-brand-navy placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-brand-gold/10 focus:border-brand-gold transition-all"
          />
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-5 flex items-center gap-4 min-w-[200px]">
          <div className="w-12 h-12 bg-brand-navy/5 rounded-xl flex items-center justify-center text-brand-navy font-black text-xl">
            {team.length}
          </div>
          <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">Total Members</span>
        </div>
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {loading ? (
          <div className="col-span-full py-20 flex flex-col items-center gap-4 text-center">
            <Loader2 className="animate-spin text-brand-gold" size={40} />
            <p className="text-gray-400 font-medium italic">Loading team...</p>
          </div>
        ) : filteredTeam.length === 0 ? (
          <div className="col-span-full py-20 text-center flex flex-col items-center">
            <Users size={48} className="text-gray-200 mb-4" />
            <p className="text-gray-400 font-medium">No team members found.</p>
          </div>
        ) : (
          filteredTeam.map((m) => (
            <div key={m.id} className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden group hover:shadow-xl transition-all h-full flex flex-col relative text-center">
              <div className="relative h-64 w-full bg-gray-100">
                {m.image ? (
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-300 group-hover:scale-105 transition-transform duration-500">
                    <Users size={64} />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6 gap-3">
                    <button 
                      onClick={() => {
                        setCurrentMember(m);
                        setIsModalOpen(true);
                      }}
                      className="p-3 bg-white/20 hover:bg-white text-white hover:text-brand-navy rounded-full backdrop-blur-md transition-all shadow-lg"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button 
                      onClick={() => handleDelete(m.id)}
                      className="p-3 bg-red-500/80 hover:bg-red-500 text-white rounded-full backdrop-blur-md transition-all shadow-lg"
                    >
                      <Trash2 size={16} />
                    </button>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-black text-brand-navy mb-1">{m.name}</h3>
                <p className="text-sm text-brand-gold font-bold uppercase tracking-wide mb-3">{m.role}</p>
                {m.bio && <p className="text-gray-500 text-sm line-clamp-3 mb-2">{m.bio}</p>}
                <div className="mt-auto pt-4 border-t border-gray-100 text-xs text-gray-400 font-bold uppercase">
                  Order: {m.order || 0}
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
          <div className="relative w-full max-w-xl bg-white h-full shadow-2xl flex flex-col animate-slide-in-right">
            <div className="p-8 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-black text-brand-navy">
                  {currentMember.id ? "Edit Member" : "Add Team Member"}
                </h2>
                <p className="text-sm text-gray-400 mt-1 uppercase tracking-wider font-bold">Leadership Team</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-3 bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-brand-navy transition-all rounded-full"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSave} className="flex-1 overflow-y-auto p-8 space-y-6">
              
              <div>
                <label className="label-style">Profile Image</label>
                <ImageUpload 
                  value={currentMember.image || ""}
                  onChange={(url) => setCurrentMember({...currentMember, image: url})}
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2">
                  <label className="label-style">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={currentMember.name || ""}
                    onChange={(e) => setCurrentMember({...currentMember, name: e.target.value})}
                    className="input-style"
                    placeholder="e.g. John Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-2">
                  <label className="label-style">Role / Title</label>
                  <input 
                    type="text" 
                    required
                    value={currentMember.role || ""}
                    onChange={(e) => setCurrentMember({...currentMember, role: e.target.value})}
                    className="input-style"
                    placeholder="e.g. Managing Director"
                  />
                </div>
                <div className="col-span-1">
                  <label className="label-style">Display Order</label>
                  <input 
                    type="number" 
                    value={currentMember.order || 0}
                    onChange={(e) => setCurrentMember({...currentMember, order: parseInt(e.target.value) || 0})}
                    className="input-style"
                  />
                </div>
              </div>

              <div>
                <label className="label-style">Short Bio (Optional)</label>
                <textarea 
                  rows={4}
                  value={currentMember.bio || ""}
                  onChange={(e) => setCurrentMember({...currentMember, bio: e.target.value})}
                  className="input-style resize-none"
                  placeholder="Brief background..."
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
                disabled={saving || !currentMember.name || !currentMember.role}
                className="flex-[2] py-4 bg-brand-navy text-white font-bold rounded-2xl hover:bg-brand-navy-dark transition-all flex items-center justify-center gap-2 group shadow-xl shadow-brand-navy/20 active:scale-95 disabled:opacity-50"
              >
                {saving ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : (
                  <>
                    <Check size={20} />
                    {currentMember.id ? "Update Member" : "Save Member"}
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
