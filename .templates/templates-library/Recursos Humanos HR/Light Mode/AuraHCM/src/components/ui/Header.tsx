"use client";

import { Bell, Search, User } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="fixed top-0 right-0 left-72 h-24 bg-background/80 backdrop-blur-md border-b border-border/50 z-40 px-12 flex items-center justify-between">
      <div className="relative w-96 group">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
        <input 
          type="text" 
          placeholder="Search human capital..."
          className="w-full bg-muted/50 border-none rounded-full py-2.5 pl-12 pr-6 text-sm focus:ring-1 focus:ring-primary transition-all outline-none"
        />
      </div>

      <div className="flex items-center gap-8">
        <button className="relative group">
          <Bell className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full" />
        </button>
        
        <div className="h-8 w-px bg-border/50" />
        
        <div className="flex items-center gap-4 cursor-pointer group">
          <div className="text-right">
            <p className="text-sm font-bold tracking-tight group-hover:text-primary transition-colors">Julius von H.</p>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Chief HR Officer</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-muted border border-border/50 flex items-center justify-center overflow-hidden group-hover:border-primary transition-colors">
            <User className="w-6 h-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </header>
  );
}
