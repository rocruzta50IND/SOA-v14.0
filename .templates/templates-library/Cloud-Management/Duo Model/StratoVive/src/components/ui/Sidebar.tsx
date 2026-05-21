"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Server, 
  BarChart3, 
  ShieldAlert, 
  Settings, 
  Zap,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Infrastructure", href: "/infrastructure", icon: Server },
  { label: "Cost Analytics", href: "/cost-analytics", icon: BarChart3 },
  { label: "Security Hub", href: "/security-hub", icon: ShieldAlert },
  { label: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-white/10 bg-black/20 backdrop-blur-xl hidden lg:flex flex-col h-screen sticky top-0">
      <div className="p-6">
        <Link href="/dashboard" className="flex items-center gap-2 font-bold text-xl tracking-tighter">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
            <Zap size={18} className="text-white fill-current" />
          </div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            StratoVive
          </span>
        </Link>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center justify-between px-3 py-2 rounded-xl transition-all duration-200 group",
                isActive 
                  ? "bg-primary/10 text-primary border border-primary/20 shadow-[0_0_15px_rgba(79,70,229,0.1)]" 
                  : "text-muted-foreground hover:text-white hover:bg-white/5 border border-transparent"
              )}
            >
              <div className="flex items-center gap-3">
                <item.icon size={18} className={cn(
                  "transition-colors",
                  isActive ? "text-primary" : "group-hover:text-white"
                )} />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
              {isActive && <ChevronRight size={14} className="text-primary" />}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/5">
        <div className="bg-white/5 rounded-2xl p-4 border border-white/10 relative overflow-hidden group hover:border-white/20 transition-colors">
          <div className="absolute -right-4 -top-4 w-16 h-16 bg-primary/10 blur-2xl rounded-full" />
          <p className="text-xs font-semibold text-white mb-1">Enterprise Plan</p>
          <p className="text-[10px] text-muted-foreground mb-3">85% of resources used</p>
          <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
            <div className="h-full w-[85%] bg-primary shadow-[0_0_10px_rgba(79,70,229,0.5)]" />
          </div>
        </div>
      </div>
    </aside>
  );
}
