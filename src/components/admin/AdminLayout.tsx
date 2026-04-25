"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { 
  LayoutDashboard, 
  Briefcase, 
  Settings, 
  LogOut, 
  Menu, 
  X, 
  ChevronRight,
  Globe,
  MessageSquare,
  User,
  Users
} from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Services", href: "/admin/services", icon: Settings },
  { name: "Projects", href: "/admin/projects", icon: Briefcase },
  { name: "Team", href: "/admin/team", icon: Users },
  { name: "Messages", href: "/admin/messages", icon: MessageSquare },
  { name: "Profile", href: "/admin/profile", icon: User },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isLoginPage = pathname === "/admin" || pathname === "/admin/";

  useEffect(() => {
    const session = document.cookie.includes("admin_session=active");
    if (!session && !isLoginPage) {
      router.push("/admin");
    }
  }, [pathname, router, isLoginPage]);

  const handleLogout = () => {
    document.cookie = "admin_session=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    router.push("/admin");
  };

  if (isLoginPage) return <>{children}</>;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 flex">
      {/* Mobile Sidebar Toggle */}
      <button
        className="lg:hidden fixed bottom-6 right-6 z-50 p-4 bg-brand-navy text-white rounded-full shadow-2xl"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-40 w-72 bg-brand-navy text-white transition-transform duration-300 transform
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}>
        <div className="h-full flex flex-col p-6">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 bg-brand-gold rounded-xl flex items-center justify-center text-brand-navy">
              <Globe size={24} />
            </div>
            <div>
              <h1 className="font-black text-xl tracking-tighter text-white">CMAKEY</h1>
              <p className="text-[10px] text-brand-gold font-bold uppercase tracking-wider">Admin Panel</p>
            </div>
          </div>

          <nav className="flex-1 space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`
                    flex items-center justify-between p-4 rounded-xl transition-all group
                    ${isActive ? "bg-brand-gold text-brand-navy shadow-lg shadow-brand-gold/20" : "hover:bg-white/5 text-white/70 hover:text-white"}
                  `}
                >
                  <div className="flex items-center gap-3">
                    <item.icon size={20} />
                    <span className="font-semibold">{item.name}</span>
                  </div>
                  <ChevronRight size={16} className={`transition-transform ${isActive ? "rotate-90" : "group-hover:translate-x-1"}`} />
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto pt-6 border-t border-white/10">
            <button 
              onClick={handleLogout}
              className="flex items-center gap-3 w-full p-4 rounded-xl text-white/60 hover:text-red-400 hover:bg-red-400/10 transition-all"
            >
              <LogOut size={20} />
              <span className="font-semibold">Sign Out</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-12 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
           {children}
        </div>
      </main>
    </div>
  );
}
