"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users } from "lucide-react";
import { TeamMember } from "@/types";

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

export default function TeamCard({ member, index }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:border-brand-gold transition-all duration-500"
    >
      <div className="relative h-72 overflow-hidden bg-gray-100 flex items-center justify-center">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <Users size={64} className="text-gray-300" />
        )}
        <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-transparent transition-colors duration-300" />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-brand-navy mb-1">{member.name}</h3>
        <p className="text-brand-gold font-medium text-sm">{member.role}</p>
        {member.bio && (
          <p className="text-gray-500 text-xs mt-2 line-clamp-2">{member.bio}</p>
        )}
      </div>
    </motion.div>
  );
}
