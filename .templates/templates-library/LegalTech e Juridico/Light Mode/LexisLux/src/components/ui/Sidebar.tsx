"use client";

import { cn } from "@/lib/utils";
import { LayoutDashboard, Briefcase, FileText, Users, Settings, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Briefcase, label: "Cases", href: "/cases" },
  { icon: FileText, label: "Billing", href: "/billing" },
  { icon: Users, label: "Clients", href: "/clients" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-72 border-r border-border/50 bg-background/50 backdrop-blur-xl z-50 flex flex-col p-8">
      <div className="mb-12">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground block mb-2">
          Enterprise
        </span>
        <h1 className="font-serif text-3xl font-bold tracking-tighter">LexisLux</h1>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-4 px-4 py-3 rounded-full transition-all duration-300 group",
                isActive 
                  ? "bg-foreground text-background" 
                  : "hover:bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              <item.icon className={cn("w-5 h-5", isActive ? "text-background" : "text-muted-foreground group-hover:text-foreground")} />
              <span className="text-sm font-medium tracking-wide">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="pt-8 border-t border-border/50">
        <button className="flex items-center gap-4 px-4 py-3 w-full text-muted-foreground hover:text-foreground transition-colors group">
          <LogOut className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          <span className="text-sm font-medium tracking-wide">Sign Out</span>
        </button>
      </div>
    </aside>
  );
}
