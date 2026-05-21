"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Zap, 
  BrainCircuit, 
  Users2, 
  FileOutput, 
  LogOut,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { name: "Executive Summary", href: "/dashboard", icon: LayoutDashboard },
  { name: "Live Intelligence", href: "/real-time", icon: Zap },
  { name: "Predictive Alpha", href: "/predictive", icon: BrainCircuit },
  { name: "Neural Segments", href: "/segmentation", icon: Users2 },
  { name: "Vault & Exports", href: "/export-center", icon: FileOutput },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-72 h-screen border-r border-border/50 bg-background flex flex-col sticky top-0 overflow-hidden">
      {/* Brand Header */}
      <div className="p-8 pb-12">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-3 h-3 bg-primary rotate-45" />
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground">
            Aetheris
          </span>
        </div>
        <h1 className="font-serif text-3xl tracking-tighter leading-none">
          Insight<span className="text-primary">.</span>
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-2">
        <div className="mb-6 px-4">
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/60">
            Systems
          </span>
        </div>
        
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <div
                className={cn(
                  "group relative flex items-center gap-4 px-4 py-3 transition-all duration-500",
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-nav"
                    className="absolute inset-0 bg-secondary/50 rounded-lg -z-10"
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
                
                <item.icon className={cn("w-4 h-4 transition-transform duration-500", isActive && "text-primary")} />
                <span className="font-sans text-sm tracking-wide flex-1">
                  {item.name}
                </span>
                {isActive && <ChevronRight className="w-3 h-3 text-primary" />}
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Footer / Account */}
      <div className="p-8 border-t border-border/30">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center border border-border/50 overflow-hidden">
             <div className="w-full h-full bg-gradient-to-tr from-primary/20 to-transparent" />
          </div>
          <div>
            <p className="text-xs font-bold font-sans tracking-tight">Alexander Gray</p>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Director</p>
          </div>
        </div>
        
        <Link href="/login">
          <button className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-xs uppercase tracking-widest font-bold">
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </Link>
      </div>
    </div>
  );
}
