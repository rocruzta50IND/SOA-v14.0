"use client";

import { Bell, Search, User } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="fixed top-0 right-0 z-30 flex h-16 w-[calc(100%-16rem)] items-center justify-between border-b border-border bg-background/80 backdrop-blur-sm px-8">
      {/* Search */}
      <div className="relative w-96">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search assets, transactions..."
          className="h-9 w-full rounded-md border border-border bg-muted/50 pl-10 pr-4 text-sm outline-none transition-colors focus:border-primary focus:bg-background"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <button className="relative rounded-md p-2 hover:bg-muted">
          <Bell className="h-5 w-5 text-muted-foreground" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-primary border-2 border-background" />
        </button>
        
        <div className="h-8 w-px bg-border mx-2" />

        <div className="flex items-center gap-3 pl-2">
          <div className="text-right">
            <p className="text-sm font-medium leading-none">Rodrigo Lima</p>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mt-1">Enterprise Admin</p>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-muted">
            <User className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </header>
  );
}
