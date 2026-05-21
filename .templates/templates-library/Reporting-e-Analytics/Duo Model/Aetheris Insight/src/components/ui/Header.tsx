"use client";

import React from "react";
import { Search, Bell, Settings, Command } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="h-20 border-b border-border/50 bg-background/50 backdrop-blur-md flex items-center justify-between px-12 sticky top-0 z-50">
      {/* Breadcrumb / Page Context */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary/50 rounded-full border border-border/50">
          <Command className="w-3 h-3 text-primary" />
          <span className="font-sans text-[10px] uppercase tracking-widest font-bold">
            System Terminal
          </span>
        </div>
        <div className="w-1 h-1 rounded-full bg-border" />
        <span className="text-xs text-muted-foreground font-sans tracking-wide">
          Intelligence / Real-time View
        </span>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4 group cursor-pointer">
          <Search className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors font-sans tracking-widest border-b border-border/50 pb-0.5">
            SEARCH DATA...
          </span>
        </div>

        <div className="flex items-center gap-4 border-l border-border/50 pl-8">
          <button className="relative group">
            <Bell className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full border-2 border-background" />
          </button>
          
          <button className="group">
            <Settings className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          </button>
        </div>
      </div>
    </header>
  );
}
