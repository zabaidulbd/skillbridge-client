"use client";

import {
  CalendarDays,
  LayoutDashboard,
  LogOut,
  UserCircle,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";

const studentMenus = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "My Bookings", href: "/dashboard/bookings", icon: CalendarDays },
  { name: "Profile", href: "/dashboard/profile", icon: UserCircle },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-64 bg-slate-900 text-white min-h-screen">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-blue-400">SkillBridge</h2>
        <p className="text-xs text-slate-400">Student Panel</p>
      </div>

      <nav className="flex-grow px-4 space-y-2">
        {studentMenus.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm font-medium",
              pathname === item.href
                ? "bg-blue-600 text-white"
                : "text-slate-400 hover:bg-slate-800 hover:text-white",
            )}
          >
            <item.icon className="w-5 h-5" />
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <button className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-red-400 transition-colors w-full">
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}
