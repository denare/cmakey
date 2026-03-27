"use client";

import { useState } from "react";
import { Upload, X, Loader2, ImagePlus } from "lucide-react";
import Image from "next/image";

interface ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
  className?: string;
}

export default function ImageUpload({ value, onChange, className = "" }: ImageUploadProps) {
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.url) {
        onChange(data.url);
      } else {
        alert("Upload failed: " + (data.error || "Unknown error"));
      }
    } catch (error) {
      console.error("Upload failed", error);
      alert("An error occurred during upload.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`space-y-4 w-full ${className}`}>
      {value ? (
        <div className="relative w-full h-48 rounded-xl overflow-hidden border border-gray-200 group">
          <Image
            src={value}
            alt="Upload display"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button
              onClick={() => onChange("")}
              className="px-4 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition-colors shadow-lg flex items-center gap-2"
              type="button"
            >
              <X size={16} /> Remove Image
            </button>
          </div>
        </div>
      ) : (
        <div className="relative">
          <input 
            type="file" 
            id="image-upload"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
            accept="image/*" 
            onChange={handleUpload}
            disabled={loading}
          />
          <div className={`flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-xl transition-all ${
            loading ? "border-brand-gold bg-brand-gold/5" : "border-gray-200 bg-gray-50 hover:bg-gray-100 hover:border-brand-gold/50"
          }`}>
            <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center px-4">
              {loading ? (
                <Loader2 className="w-10 h-10 text-brand-gold animate-spin mb-3" />
              ) : (
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-3">
                  <ImagePlus className="w-6 h-6 text-gray-400" />
                </div>
              )}
              <p className="mb-1 focus:outline-none text-brand-navy font-bold">
                {loading ? "Uploading to Cloudinary..." : "Click or drag to upload"}
              </p>
              <p className="text-xs text-gray-400 font-medium">Auto-populates direct URL</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
