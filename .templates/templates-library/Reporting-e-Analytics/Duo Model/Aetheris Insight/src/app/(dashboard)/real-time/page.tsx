"use client";

import React from "react";
import { motion } from "framer-motion";
import { REAL_TIME_EVENTS } from "@/lib/mock-data";
import { Activity, ShieldCheck, AlertCircle, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export default function RealTimePage() {
  return (
    <div className="p-12 space-y-16">
      <section>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-between items-end mb-12"
        >
          <div>
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] font-bold text-muted-foreground mb-4 block">
              Global Stream
            </span>
            <h1 className="font-serif text-6xl tracking-tighter leading-none">
              Live <span className="italic">Intelligence</span>
            </h1>
          </div>
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
             <span className="text-[10px] font-bold uppercase tracking-widest text-primary">System Live</span>
          </div>
        </motion.div>

        {/* Event List */}
        <div className="space-y-4">
          <div className="grid grid-cols-5 px-8 mb-4">
            <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground/50">Timestamp</span>
            <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground/50 col-span-2">Event Description</span>
            <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground/50">Origin</span>
            <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground/50 text-right">Status</span>
          </div>

          {REAL_TIME_EVENTS.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="grid grid-cols-5 items-center px-8 py-6 border border-border/30 bg-card/10 hover:bg-card/30 transition-all duration-500 group"
            >
              <span className="font-mono text-xs text-muted-foreground">{event.timestamp}</span>
              <div className="col-span-2 flex items-center gap-4">
                <div className="w-8 h-8 rounded-full border border-border/50 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                  <Activity className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="text-sm font-sans tracking-tight">{event.event}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3 h-3 text-muted-foreground/50" />
                <span className="text-xs text-muted-foreground">{event.location}</span>
              </div>
              <div className="flex justify-end">
                <div className={cn(
                  "px-3 py-1 rounded-full border text-[9px] font-bold uppercase tracking-widest",
                  event.status === 'active' ? "border-primary/50 text-primary bg-primary/5" :
                  event.status === 'flagged' ? "border-red-500/50 text-red-500 bg-red-500/5" :
                  "border-muted-foreground/30 text-muted-foreground bg-muted/5"
                )}>
                  {event.status}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="p-12 border border-border/50 bg-secondary/20 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="font-serif text-2xl mb-4">Traffic Velocity</h3>
            <div className="space-y-6 mt-8">
              {[80, 45, 90, 60].map((w, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-[10px] uppercase tracking-widest text-muted-foreground">
                    <span>Cluster {String.fromCharCode(65 + i)}</span>
                    <span>{w}%</span>
                  </div>
                  <div className="h-0.5 w-full bg-border/30 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${w}%` }}
                      transition={{ duration: 1.5, delay: 0.5 + (i * 0.2) }}
                      className="h-full bg-primary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[60px]" />
        </div>

        <div className="p-12 border border-border/50 flex flex-col justify-center items-center text-center bg-card/30">
          <ShieldCheck className="w-12 h-12 text-primary mb-6" />
          <h3 className="font-serif text-2xl mb-2">Protocol Integrity</h3>
          <p className="text-sm text-muted-foreground max-w-[280px]">
            All data streams are currently flowing through encrypted neural pathways with zero packet loss.
          </p>
          <button className="mt-8 font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-primary border-b border-primary/30 pb-1">
            VIEW SECURITY LOGS
          </button>
        </div>
      </section>
    </div>
  );
}
