"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Users2, 
  Target, 
  UserPlus, 
  Wallet, 
  Settings, 
  LogOut 
} from "lucide-react";

const navItems = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "Talent Cloud", href: "/talent-cloud", icon: Users2 },
  { label: "Performance", href: "/performance", icon: Target },
  { label: "Recruitment", href: "/recruitment", icon: UserPlus },
  { label: "Compensation", href: "/compensation", icon: Wallet },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-full w-72 bg-background border-r border-border/50 flex flex-col p-8 z-50">
      <div className="mb-16">
        <Link href="/dashboard" className="group">
          <h1 className="font-playfair text-3xl tracking-tighter group-hover:opacity-70 transition-opacity">
            Aura<span className="text-primary italic">HCM</span>
          </h1>
          <p className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground mt-2">
            Enterprise Elite
          </p>
        </Link>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-4 px-4 py-3 rounded-full transition-all duration-500 group",
                isActive 
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon className={cn("w-5 h-5", isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-primary")} />
              <span className="text-sm font-medium tracking-wide">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto space-y-4 pt-8 border-t border-border/50">
        <button className="flex items-center gap-4 px-4 py-3 w-full text-muted-foreground hover:text-foreground transition-colors group">
          <Settings className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
          <span className="text-sm font-medium tracking-wide">Settings</span>
        </button>
        <button className="flex items-center gap-4 px-4 py-3 w-full text-muted-foreground hover:text-destructive transition-colors group">
          <LogOut className="w-5 h-5" />
          <span className="text-sm font-medium tracking-wide">Logout</span>
        </button>
      </div>
    </aside>
  );
}
