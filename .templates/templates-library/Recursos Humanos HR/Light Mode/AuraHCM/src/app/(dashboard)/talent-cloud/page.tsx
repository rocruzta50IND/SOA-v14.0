"use client";

import { TALENT_LIST } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { Search, Filter, MoreHorizontal, ShieldCheck } from "lucide-react";

export default function TalentCloudPage() {
  return (
    <div className="space-y-16">
      <header className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-col gap-4">
          <p className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">
            Human Capital Index
          </p>
          <h1 className="font-playfair text-6xl tracking-tighter leading-none">
            Talent <span className="italic">Cloud</span>
          </h1>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Filter by skill or role..."
              className="bg-muted/50 border-none rounded-full py-3 pl-12 pr-6 text-sm focus:ring-1 focus:ring-primary transition-all outline-none w-64"
            />
          </div>
          <button className="p-3 border border-border/50 rounded-full hover:bg-muted transition-colors">
            <Filter className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
      </header>

      {/* Talent Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TALENT_LIST.map((talent) => (
          <div 
            key={talent.id}
            className="group relative p-8 border border-border/50 bg-card hover:border-primary/50 transition-all duration-700"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="relative">
                <img 
                  src={talent.image} 
                  alt={talent.name}
                  className="w-20 h-20 rounded-full grayscale hover:grayscale-0 transition-all duration-700 object-cover border border-border/50 p-1"
                />
                {talent.status === "active" && (
                  <span className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 rounded-full border-2 border-card" />
                )}
              </div>
              <button className="p-2 hover:bg-muted rounded-full transition-colors">
                <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-playfair text-2xl tracking-tight flex items-center gap-2">
                  {talent.name}
                  <ShieldCheck className="w-4 h-4 text-primary" />
                </h3>
                <p className="text-sm text-muted-foreground italic">{talent.role} — {talent.department}</p>
              </div>

              <div className="pt-6 border-t border-border/50 flex justify-between items-end">
                <div>
                  <p className="font-sans text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-1">
                    Performance Index
                  </p>
                  <p className="font-playfair text-3xl tracking-tighter">{talent.score.toFixed(1)}</p>
                </div>
                
                <div className="flex gap-2">
                  <span className={cn(
                    "px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold",
                    talent.status === "active" ? "bg-emerald-50 text-emerald-600" :
                    talent.status === "remote" ? "bg-blue-50 text-blue-600" : "bg-amber-50 text-amber-600"
                  )}>
                    {talent.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
