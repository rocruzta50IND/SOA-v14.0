"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Server, 
  Network, 
  ShieldCheck, 
  BarChart3, 
  Settings, 
  LogOut 
} from "lucide-react";

const NAV_ITEMS = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Instances", href: "/instances", icon: Server },
  { label: "Networking", href: "/networking", icon: Network },
  { label: "Security", href: "/security", icon: ShieldCheck },
  { label: "Analytics", href: "/analytics", icon: BarChart3 },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r border-border/40 bg-background flex flex-col z-50">
      <div className="p-8">
        <Link href="/dashboard" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-primary rounded-none flex items-center justify-center rotate-45 group-hover:rotate-90 transition-transform duration-700">
            <div className="-rotate-45 group-hover:-rotate-90 transition-transform duration-700">
              <div className="w-3 h-3 border-2 border-background" />
            </div>
          </div>
          <span className="font-serif text-xl tracking-tighter uppercase font-bold">StratoVault</span>
        </Link>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        <div className="px-4 mb-4">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/50">Infrastructure</span>
        </div>
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 text-sm transition-all duration-300 group",
                isActive 
                  ? "text-foreground bg-secondary/50 font-medium" 
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/30"
              )}
            >
              <Icon className={cn(
                "w-4 h-4 transition-transform duration-500 group-hover:scale-110",
                isActive ? "text-primary" : "text-muted-foreground/60"
              )} />
              <span className="tracking-wide">{item.label}</span>
              {isActive && (
                <div className="ml-auto w-1 h-4 bg-primary" />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 mt-auto border-t border-border/40">
        <Link
          href="/settings"
          className="flex items-center gap-3 px-4 py-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
        >
          <Settings className="w-4 h-4 group-hover:rotate-90 transition-transform duration-700" />
          <span className="tracking-wide">Settings</span>
        </Link>
        <button
          onClick={() => window.location.href = '/'}
          className="w-full flex items-center gap-3 px-4 py-3 text-sm text-muted-foreground hover:text-red-400 transition-colors group"
        >
          <LogOut className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="tracking-wide">Sign Out</span>
        </button>
      </div>
    </aside>
  );
}
