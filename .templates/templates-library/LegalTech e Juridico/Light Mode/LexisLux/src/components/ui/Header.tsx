"use client";

import { Search, Bell, User } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 right-0 left-72 h-20 border-b border-border/50 bg-background/50 backdrop-blur-xl z-40 flex items-center justify-between px-12">
      <div className="flex items-center gap-4 bg-muted/50 px-6 py-2.5 rounded-full w-96 border border-border/50 group focus-within:border-primary transition-colors">
        <Search className="w-4 h-4 text-muted-foreground" />
        <input 
          type="text" 
          placeholder="Search records..." 
          className="bg-transparent border-none outline-none text-sm w-full placeholder:text-muted-foreground"
        />
      </div>

      <div className="flex items-center gap-8">
        <button className="relative p-2 text-muted-foreground hover:text-foreground transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-background"></span>
        </button>
        
        <div className="flex items-center gap-4 pl-8 border-l border-border/50">
          <div className="text-right">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground leading-none mb-1">Associate</p>
            <p className="text-sm font-serif font-bold tracking-tight">Dr. Julian Vance</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-serif font-bold">
            JV
          </div>
        </div>
      </div>
    </header>
  );
}
