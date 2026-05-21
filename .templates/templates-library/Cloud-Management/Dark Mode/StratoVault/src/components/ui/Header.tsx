"use client";

import { cn } from "@/lib/utils";
import { Bell, Search, User } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 right-0 left-64 h-20 border-b border-border/40 bg-background/80 backdrop-blur-md z-40 flex items-center justify-between px-12">
      <div className="flex items-center gap-4 bg-secondary/30 px-4 py-2 border border-border/40 min-w-[300px] group transition-all duration-500 hover:border-primary/40">
        <Search className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
        <input 
          type="text" 
          placeholder="Search infrastructure..." 
          className="bg-transparent border-none outline-none text-xs tracking-wider w-full placeholder:text-muted-foreground/50"
        />
      </div>

      <div className="flex items-center gap-8">
        <div className="flex items-center gap-6 border-r border-border/40 pr-8">
          <button className="relative group">
            <Bell className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-none" />
          </button>
        </div>
        
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="text-right">
            <p className="text-xs font-bold tracking-widest uppercase">Rodrigo Admin</p>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Enterprise Tier</p>
          </div>
          <div className="w-10 h-10 border border-border group-hover:border-primary transition-colors p-1">
            <div className="w-full h-full bg-secondary flex items-center justify-center">
              <User className="w-5 h-5 text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
