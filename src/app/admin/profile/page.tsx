"use client";

import React, { useEffect, useState } from "react";
import { User, Lock, Save, ShieldCheck, Loader2 } from "lucide-react";

export default function ProfilePage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await fetch("/api/admin/profile");
      const data = await res.json();
      if (data.username) setUsername(data.username);
    } catch (err) {
      console.error("Failed to fetch profile");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password && password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!username.trim()) {
      setError("Username cannot be empty.");
      return;
    }

    setSaving(true);
    try {
      const payload: any = { username };
      if (password) payload.password = password;

      const res = await fetch("/api/admin/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSuccess("Profile updated successfully!");
        setPassword("");
        setConfirmPassword("");
      } else {
        setError("Failed to update profile.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-navy"></div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-brand-navy mb-2 flex items-center gap-3">
          <User size={28} className="text-brand-gold" />
          Admin Profile
        </h1>
        <p className="text-gray-500 font-medium">Customize your login credentials and personal preferences.</p>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
        <form onSubmit={handleSave} className="space-y-6">
          
          {error && (
            <div className="p-4 bg-red-50 border border-red-100 text-red-500 rounded-xl text-sm font-medium">
              {error}
            </div>
          )}
          
          {success && (
            <div className="p-4 bg-green-50 border border-green-100 text-green-600 rounded-xl text-sm font-medium flex items-center gap-2">
              <ShieldCheck size={18} />
              {success}
            </div>
          )}

          <div>
            <label className="block text-sm font-bold text-brand-navy uppercase tracking-wider mb-2">
              Admin Username
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <User size={18} />
              </div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-12 pr-4 text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:bg-white transition-all"
                required
              />
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100">
            <h3 className="font-bold text-gray-700 mb-4">Change Password</h3>
            <p className="text-xs text-gray-400 mb-6">Leave blank if you do not wish to change your current password.</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-brand-navy uppercase tracking-wider mb-2">
                  New Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <Lock size={18} />
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-12 pr-4 text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-brand-navy uppercase tracking-wider mb-2">
                  Confirm New Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <Lock size={18} />
                  </div>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-12 pr-4 text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:bg-white transition-all"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <button
              type="submit"
              disabled={saving}
              className="px-8 py-4 bg-brand-navy text-white font-bold rounded-xl hover:bg-brand-navy-dark transition-all flex items-center gap-2 group shadow-xl shadow-brand-navy/10 disabled:opacity-50"
            >
              {saving ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} className="group-hover:scale-110 transition-transform" />}
              {saving ? "Saving Changes..." : "Save Profile Settings"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
