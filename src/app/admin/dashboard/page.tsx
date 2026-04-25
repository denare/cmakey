"use client";

import React, { useEffect, useState } from "react";
import { 
  Settings, 
  Briefcase, 
  ArrowRight, 
  Users, 
  Activity as ActivityIcon,
  Plus,
  MessageSquare,
  ShieldAlert,
  Edit,
  Trash
} from "lucide-react";
import Link from "next/link";
import { Activity } from "@/types";

export default function DashboardPage() {
  const [stats, setStats] = useState({ services: 0, projects: 0 });
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    const fetchStats = async () => {
      const [svcRes, projRes, actRes] = await Promise.all([
        fetch("/api/services"),
        fetch("/api/projects"),
        fetch("/api/admin/activities")
      ]);
      const [svcData, projData, actData] = await Promise.all([
        svcRes.json(),
        projRes.json(),
        actRes.json()
      ]);
      setStats({ services: svcData.length, projects: projData.length });
      setActivities(actData.slice(0, 5)); // Show top 5
    };
    fetchStats();
  }, []);

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-black text-brand-navy mb-2">Dashboard Overview</h1>
        <p className="text-gray-500 font-medium">Welcome to the Cmakey Content Management System.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-6">
          <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold">
            <Settings size={32} />
          </div>
          <div>
            <p className="text-gray-400 text-sm font-bold uppercase tracking-wider">Total Services</p>
            <p className="text-4xl font-black text-brand-navy">{stats.services}</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-6">
          <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500">
            <Briefcase size={32} />
          </div>
          <div>
            <p className="text-gray-400 text-sm font-bold uppercase tracking-wider">Total Projects</p>
            <p className="text-4xl font-black text-brand-navy">{stats.projects}</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-6">
          <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-500">
            <ActivityIcon size={32} />
          </div>
          <div>
            <p className="text-gray-400 text-sm font-bold uppercase tracking-wider">System Status</p>
            <p className="text-xl font-black text-green-500 uppercase">Live & Ready</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-brand-navy rounded-3xl p-10 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl" />
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-black mb-2">Ready to update your content?</h2>
            <p className="text-white/60">Manage your services and projects to keep your website fresh and engaging for your clients.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/admin/services" 
              className="px-6 py-4 bg-brand-gold text-brand-navy font-bold rounded-2xl hover:bg-brand-gold-light transition-all flex items-center gap-2 group"
            >
              <Plus size={20} />
              Add New Service
            </Link>
            <Link 
              href="/admin/projects" 
              className="px-6 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 transition-all flex items-center gap-2"
            >
              <Plus size={20} />
              Add New Project
            </Link>
          </div>
        </div>
      </div>

      {/* Recent Activity Placeholder */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-brand-navy uppercase tracking-tight">Recent Site Updates</h2>
          <Link href="/" target="_blank" className="text-brand-gold font-bold text-sm flex items-center gap-2 hover:underline">
            View Live Site <ArrowRight size={14} />
          </Link>
        </div>
        <div className="space-y-4">
          {activities.length === 0 ? (
            <p className="text-center text-gray-400 text-sm italic">No recent activities found.</p>
          ) : (
            activities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-2xl transition-colors border-b border-gray-50 last:border-0 border-x border-t">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  activity.type === "message" ? "bg-blue-100 text-blue-600" :
                  activity.type === "project" ? "bg-green-100 text-green-600" :
                  activity.type === "service" ? "bg-purple-100 text-purple-600" :
                  activity.type === "auth" ? "bg-orange-100 text-orange-600" :
                  "bg-gray-100 text-gray-600"
                }`}>
                  {activity.type === "message" && <MessageSquare size={18} />}
                  {activity.type === "project" && <Briefcase size={18} />}
                  {activity.type === "service" && <Settings size={18} />}
                  {activity.type === "auth" && <ShieldAlert size={18} />}
                  {activity.type === "system" && <ActivityIcon size={18} />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-bold text-brand-navy text-sm">{activity.action}</p>
                    <span className="text-xs text-gray-400">
                      {new Date(activity.timestamp).toLocaleDateString()} {new Date(activity.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{activity.details}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
