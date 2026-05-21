"use client";

import { 
  ShieldCheck, 
  ShieldAlert, 
  ShieldX, 
  Search, 
  MoreVertical, 
  ExternalLink,
  Lock,
  Eye,
  Zap
} from "lucide-react";
import { SECURITY_EVENTS } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export default function SecurityHubPage() {
  return (
    <>
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
          Security Hub
        </h1>
        <p className="text-muted-foreground">Monitor and respond to infrastructure security threats.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 relative group overflow-hidden">
          <div className="absolute top-0 right-0 p-6">
            <ShieldCheck size={48} className="text-emerald-500/20 group-hover:text-emerald-500/40 transition-colors" />
          </div>
          <p className="text-sm font-medium text-muted-foreground mb-1">Security Score</p>
          <h3 className="text-4xl font-bold text-white tracking-tight">98%</h3>
          <div className="mt-4 flex items-center gap-2 text-xs text-emerald-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500" /> All systems compliant
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 relative group overflow-hidden">
          <div className="absolute top-0 right-0 p-6">
            <ShieldAlert size={48} className="text-amber-500/20 group-hover:text-amber-500/40 transition-colors" />
          </div>
          <p className="text-sm font-medium text-muted-foreground mb-1">Active Alerts</p>
          <h3 className="text-4xl font-bold text-white tracking-tight">12</h3>
          <div className="mt-4 flex items-center gap-2 text-xs text-amber-500">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" /> 2 High severity
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 relative group overflow-hidden">
          <div className="absolute top-0 right-0 p-6">
            <Zap size={48} className="text-primary/20 group-hover:text-primary/40 transition-colors" />
          </div>
          <p className="text-sm font-medium text-muted-foreground mb-1">Auto-Remediations</p>
          <h3 className="text-4xl font-bold text-white tracking-tight">254</h3>
          <div className="mt-4 flex items-center gap-2 text-xs text-primary">
            <span className="w-2 h-2 rounded-full bg-primary" /> Past 30 days
          </div>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-lg font-bold text-white">Recent Security Events</h3>
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={14} />
            <input 
              type="text" 
              placeholder="Filter events..." 
              className="bg-black/20 border border-white/10 rounded-lg py-1.5 pl-9 pr-4 text-xs focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
            />
          </div>
        </div>

        <div className="space-y-4">
          {SECURITY_EVENTS.map((event) => (
            <div key={event.id} className="p-4 rounded-xl bg-white/5 border border-white/10 group hover:bg-white/10 transition-all border-l-4" style={{ 
              borderLeftColor: event.severity === 'critical' ? '#ef4444' : event.severity === 'high' ? '#f59e0b' : '#3b82f6'
            }}>
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <div className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center shrink-0",
                    event.severity === 'critical' ? "bg-red-500/10 text-red-500" : 
                    event.severity === 'high' ? "bg-amber-500/10 text-amber-500" : "bg-blue-500/10 text-blue-500"
                  )}>
                    {event.severity === 'critical' ? <ShieldX size={20} /> : <ShieldAlert size={20} />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-bold text-white">{event.type}</span>
                      <span className="text-[10px] text-muted-foreground font-mono">ID: {event.id}</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed max-w-2xl">{event.description}</p>
                    <div className="flex items-center gap-4 mt-3">
                      <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground bg-white/5 px-2 py-1 rounded-md border border-white/5">
                        <Lock size={10} /> {event.source}
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground bg-white/5 px-2 py-1 rounded-md border border-white/5">
                        <Eye size={10} /> {new Date(event.timestamp).toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className={cn(
                    "text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border",
                    event.status === 'open' ? "bg-red-500/10 text-red-500 border-red-500/20" : 
                    event.status === 'investigating' ? "bg-amber-500/10 text-amber-500 border-amber-500/20" : 
                    "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
                  )}>
                    {event.status}
                  </div>
                  <button className="p-1 text-muted-foreground hover:text-white transition-colors">
                    <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
