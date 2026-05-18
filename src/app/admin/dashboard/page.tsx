"use client";

import React, { useEffect, useState } from "react";
import { 
  Settings, 
  Briefcase, 
  ArrowRight, 
  Activity as ActivityIcon,
  Plus,
  MessageSquare,
  ShieldAlert,
  Mail,
  Phone,
  Calendar,
  CheckCircle,
  X,
  User
} from "lucide-react";
import Link from "next/link";
import { Activity, Message } from "@/types";

export default function DashboardPage() {
  const [stats, setStats] = useState({ services: 0, projects: 0, unreadMessages: 0 });
  const [activities, setActivities] = useState<Activity[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchData = async () => {
    try {
      const [svcRes, projRes, actRes, msgRes] = await Promise.all([
        fetch("/api/services"),
        fetch("/api/projects"),
        fetch("/api/admin/activities"),
        fetch("/api/admin/messages")
      ]);
      const [svcData, projData, actData, msgData] = await Promise.all([
        svcRes.json(),
        projRes.json(),
        actRes.json(),
        msgRes.json()
      ]);
      
      const unreadCount = msgData.filter((m: Message) => !m.read).length;

      setStats({ 
        services: svcData.length, 
        projects: projData.length,
        unreadMessages: unreadCount
      });
      setActivities(actData.slice(0, 5));
      setMessages(msgData.slice(0, 5));
    } catch (err) {
      console.error("Error fetching dashboard statistics:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOpenModal = (msg: Message) => {
    setSelectedMessage(msg);
    setIsModalOpen(true);
    // Auto mark as read when opened
    if (!msg.read) {
      handleMarkRead(msg.id);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMessage(null);
  };

  const handleMarkRead = async (id: string) => {
    try {
      await fetch(`/api/admin/messages/${id}/read`, { method: "POST" });
      // Update local state
      setMessages(prev => prev.map(m => m.id === id ? { ...m, read: true } : m));
      setStats(prev => ({ ...prev, unreadMessages: Math.max(0, prev.unreadMessages - 1) }));
    } catch (error) {
      console.error("Failed to mark message as read:", error);
    }
  };

  return (
    <div className="space-y-8 animate-fade-in relative">
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
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${stats.unreadMessages > 0 ? 'bg-red-500/10 text-red-500' : 'bg-green-500/10 text-green-500'}`}>
            <MessageSquare size={32} />
          </div>
          <div>
            <p className="text-gray-400 text-sm font-bold uppercase tracking-wider">Unread Inquiries</p>
            <p className={`text-4xl font-black ${stats.unreadMessages > 0 ? 'text-red-500' : 'text-brand-navy'}`}>
              {stats.unreadMessages}
            </p>
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
              className="px-6 py-4 bg-brand-gold text-brand-navy font-bold rounded-2xl hover:bg-brand-gold-light transition-all flex items-center gap-2 group cursor-pointer"
            >
              <Plus size={20} />
              Add New Service
            </Link>
            <Link 
              href="/admin/projects" 
              className="px-6 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Plus size={20} />
              Add New Project
            </Link>
          </div>
        </div>
      </div>

      {/* Split grid for Updates & Messages */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left column: Recent Site Updates */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-brand-navy uppercase tracking-tight flex items-center gap-2">
              <ActivityIcon size={20} className="text-brand-gold" />
              Recent Site Updates
            </h2>
            <Link href="/" target="_blank" className="text-brand-gold font-bold text-sm flex items-center gap-2 hover:underline">
              View Live Site <ArrowRight size={14} />
            </Link>
          </div>
          <div className="space-y-4 flex-1">
            {activities.length === 0 ? (
              <p className="text-center text-gray-400 text-sm italic py-10">No recent activities found.</p>
            ) : (
              activities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-2xl transition-colors border border-gray-50">
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
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-bold text-brand-navy text-sm truncate pr-2">{activity.action}</p>
                      <span className="text-[10px] text-gray-400 shrink-0">
                        {new Date(activity.timestamp).toLocaleDateString()} {new Date(activity.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{activity.details}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right column: Recent Customer Inquiries with Quick Read */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-brand-navy uppercase tracking-tight flex items-center gap-2">
              <MessageSquare size={20} className="text-brand-gold" />
              Recent Feedback
            </h2>
            <Link href="/admin/messages" className="text-brand-gold font-bold text-sm flex items-center gap-2 hover:underline">
              All Inquiries <ArrowRight size={14} />
            </Link>
          </div>
          <div className="space-y-4 flex-1">
            {messages.length === 0 ? (
              <p className="text-center text-gray-400 text-sm italic py-10">No messages received yet.</p>
            ) : (
              messages.map((msg) => (
                <div 
                  key={msg.id} 
                  onClick={() => handleOpenModal(msg)}
                  className={`flex items-start gap-4 p-4 rounded-2xl transition-all border cursor-pointer hover:border-brand-gold hover:shadow-md ${
                    !msg.read 
                      ? "bg-brand-navy/[0.02] border-brand-gold/40 shadow-sm" 
                      : "bg-white border-gray-50 hover:bg-gray-50"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-bold ${
                    !msg.read ? "bg-brand-gold text-brand-navy" : "bg-gray-150 text-gray-600"
                  }`}>
                    {msg.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-bold text-brand-navy text-sm truncate pr-2">{msg.name}</p>
                      <span className="text-[10px] text-gray-400 shrink-0">
                        {new Date(msg.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] bg-brand-navy/5 text-brand-navy font-bold px-2 py-0.5 rounded-md uppercase tracking-wider">
                        {msg.service === "other" ? "General" : msg.service}
                      </span>
                      {!msg.read && (
                        <span className="text-[9px] bg-red-500 text-white font-extrabold px-1.5 py-0.5 rounded uppercase tracking-wider">
                          New
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 truncate leading-relaxed">
                      {msg.message}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

      </div>

      {/* ── QUICK READ GLASSMORPHIC MODAL ───────────────────────── */}
      {isModalOpen && selectedMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Glass backdrop */}
          <div 
            onClick={handleCloseModal}
            className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm transition-opacity" 
          />
          
          {/* Modal Container */}
          <div className="relative bg-white rounded-[2rem] w-full max-w-lg overflow-hidden shadow-2xl border border-white/20 animate-scale-in z-10">
            {/* Header banner */}
            <div className="bg-brand-navy text-white px-8 py-6 relative">
              <button 
                onClick={handleCloseModal}
                className="absolute top-6 right-6 p-1.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-gold text-brand-navy rounded-xl flex items-center justify-center font-bold text-xl">
                  {selectedMessage.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h3 className="font-black text-lg leading-tight">{selectedMessage.name}</h3>
                  <span className="text-xs text-brand-gold font-bold uppercase tracking-wider">
                    {selectedMessage.service === "other" ? "General Inquiry" : `${selectedMessage.service} Division`}
                  </span>
                </div>
              </div>
            </div>

            {/* Content body */}
            <div className="p-8 space-y-6">
              {/* Meta information tags */}
              <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <div className="space-y-1">
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest flex items-center gap-1">
                    <Mail size={10} /> Email Address
                  </p>
                  <a href={`mailto:${selectedMessage.email}`} className="text-xs text-brand-navy font-semibold hover:underline block truncate">
                    {selectedMessage.email}
                  </a>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest flex items-center gap-1">
                    <Phone size={10} /> Phone Number
                  </p>
                  <a href={`tel:${selectedMessage.phone}`} className="text-xs text-brand-navy font-semibold hover:underline block truncate">
                    {selectedMessage.phone || "Not provided"}
                  </a>
                </div>
              </div>

              {/* Message Details */}
              <div className="space-y-2">
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest flex items-center gap-1">
                  Subject Header
                </p>
                <h4 className="font-bold text-brand-navy text-sm border-b border-gray-100 pb-2">
                  {selectedMessage.subject || "No Subject"}
                </h4>
              </div>

              <div className="space-y-2">
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                  Message Content
                </p>
                <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 max-h-[180px] overflow-y-auto">
                  <p className="text-xs text-gray-600 leading-relaxed whitespace-pre-wrap">
                    {selectedMessage.message}
                  </p>
                </div>
              </div>

              {/* Footer actions */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-[10px] text-gray-400 flex items-center gap-1">
                  <Calendar size={12} /> 
                  Received: {new Date(selectedMessage.createdAt).toLocaleDateString()}
                </span>
                
                <div className="flex gap-2">
                  <button 
                    onClick={handleCloseModal}
                    className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold rounded-xl text-xs transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                  {selectedMessage.read ? (
                    <span className="px-4 py-2.5 bg-green-50 text-green-600 font-bold rounded-xl text-xs flex items-center gap-1">
                      <CheckCircle size={14} /> Read
                    </span>
                  ) : (
                    <button 
                      onClick={() => { handleMarkRead(selectedMessage.id); handleCloseModal(); }}
                      className="px-5 py-2.5 bg-brand-gold text-brand-navy hover:bg-brand-gold-light font-bold rounded-xl text-xs transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <CheckCircle size={14} /> Mark Read
                    </button>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
