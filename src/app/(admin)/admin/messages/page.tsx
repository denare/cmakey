"use client";

import React, { useEffect, useState } from "react";
import { MessageSquare, Mail, Phone, Calendar, CheckCircle } from "lucide-react";
import { Message } from "@/types";

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const res = await fetch("/api/admin/messages");
      const data = await res.json();
      setMessages(data);
    } catch (error) {
      console.error("Failed to fetch messages:", error);
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (id: string, currentRead: boolean) => {
    if (currentRead) return;
    try {
      await fetch(`/api/admin/messages/${id}/read`, { method: "POST" });
      setMessages(messages.map(m => m.id === id ? { ...m, read: true } : m));
    } catch (error) {
      console.error("Failed to mark read:", error);
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
    <div className="animate-fade-in space-y-8">
      <div>
        <h1 className="text-3xl font-black text-brand-navy mb-2 flex items-center gap-3">
          <MessageSquare size={28} className="text-brand-gold" />
          User Feedback
        </h1>
        <p className="text-gray-500 font-medium">Manage inquiries and messages from the contact form.</p>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        {messages.length === 0 ? (
          <div className="p-12 text-center text-gray-500 flex flex-col items-center">
            <MessageSquare size={48} className="text-gray-200 mb-4" />
            <p className="text-lg">No messages received yet.</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-50">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`p-6 transition-colors ${!msg.read ? "bg-blue-50/30" : "hover:bg-gray-50"}`}
                onClick={() => markAsRead(msg.id, msg.read)}
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Sender Info */}
                  <div className="lg:w-1/4 space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-lg">
                        {msg.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-bold text-brand-navy leading-tight">{msg.name}</p>
                        <p className="text-xs text-brand-gold font-semibold uppercase tracking-wider">
                          {msg.service === "other" ? "General Inquiry" : msg.service}
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-500 space-y-1 pl-12">
                      <p className="flex items-center gap-2"><Mail size={14} /> <a href={`mailto:${msg.email}`} className="hover:text-brand-gold transition-colors break-all">{msg.email}</a></p>
                      {msg.phone && <p className="flex items-center gap-2"><Phone size={14} /> <a href={`tel:${msg.phone}`} className="hover:text-brand-gold transition-colors">{msg.phone}</a></p>}
                    </div>
                  </div>

                  {/* Message Content */}
                  <div className="lg:w-3/4 bg-gray-50 rounded-2xl p-5 border border-gray-100 relative group">
                    <div className="flex items-center justify-between mb-3 border-b border-gray-200 pb-3">
                      <h3 className="font-bold text-brand-navy flex items-center gap-2">
                        {msg.subject}
                        {!msg.read && <span className="px-2 py-0.5 bg-blue-500 text-white text-[10px] uppercase font-black tracking-wider rounded-lg">New</span>}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          <Calendar size={12} /> {new Date(msg.createdAt).toLocaleDateString()} {new Date(msg.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                        </span>
                        {msg.read ? (
                          <span title="Read" className="flex items-center">
                            <CheckCircle size={16} className="text-green-500" />
                          </span>
                        ) : (
                          <button 
                            onClick={(e) => { e.stopPropagation(); markAsRead(msg.id, false); }}
                            className="text-xs text-blue-500 hover:text-blue-700 font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            Mark Read
                          </button>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm whitespace-pre-wrap leading-relaxed">
                      {msg.message}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
