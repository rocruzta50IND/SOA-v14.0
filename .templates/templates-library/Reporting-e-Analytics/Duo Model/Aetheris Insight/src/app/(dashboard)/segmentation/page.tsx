"use client";

import React from "react";
import { motion } from "framer-motion";
import { USER_SEGMENTS } from "@/lib/mock-data";
import { Users, Target, Fingerprint, MoveUpRight, MoveDownRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SegmentationPage() {
  return (
    <div className="p-12 space-y-16">
      <section>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-between items-end mb-12"
        >
          <div>
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] font-bold text-muted-foreground mb-4 block">
              Behavioral Mapping
            </span>
            <h1 className="font-serif text-6xl tracking-tighter leading-none mb-4">
              Neural <span className="italic">Segments</span>
            </h1>
            <p className="text-sm text-muted-foreground max-w-lg">
              Dynamic clustering of global entities based on interaction frequency, 
              value retention, and neural engagement patterns.
            </p>
          </div>
          <div className="flex gap-4">
             <button className="bg-foreground text-background px-8 py-4 rounded-full text-[10px] uppercase tracking-widest font-bold hover:opacity-80 transition-all">
               NEW CLUSTER
             </button>
          </div>
        </motion.div>

        {/* Segments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/30 border border-border/30">
          {USER_SEGMENTS.map((segment, index) => (
            <motion.div
              key={segment.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="p-12 bg-background hover:bg-secondary/20 transition-all duration-500 group"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="flex items-center gap-3">
                  <Fingerprint className="w-5 h-5 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                  <span className="font-sans text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                    {segment.id}
                  </span>
                </div>
                <div className={cn(
                  "flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest",
                  segment.growth > 0 ? "text-primary" : "text-red-500"
                )}>
                  {segment.growth > 0 ? <MoveUpRight className="w-3 h-3" /> : <MoveDownRight className="w-3 h-3" />}
                  {Math.abs(segment.growth)}% GROWTH
                </div>
              </div>

              <h3 className="font-serif text-3xl tracking-tight mb-2 group-hover:text-primary transition-colors">
                {segment.name}
              </h3>
              <p className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground mb-12">
                {segment.behavior}
              </p>

              <div className="flex items-end justify-between border-t border-border/30 pt-8">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Entity Count</p>
                  <p className="text-4xl font-serif tracking-tighter font-black">{segment.size.toLocaleString()}</p>
                </div>
                <button className="text-[10px] uppercase tracking-widest font-bold border-b border-foreground/30 hover:border-foreground transition-all pb-1">
                  VIEW ENTITIES
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Demographic Deep-Dive */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 p-12 border border-border/50 bg-card/30 flex flex-col justify-between min-h-[400px]">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Target className="w-4 h-4 text-primary" />
              <h2 className="font-serif text-2xl tracking-tight">Geo-Spatial Distribution</h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Mapping segments across physical nodes to optimize latency and localized interaction logic.
            </p>
          </div>
          
          <div className="flex items-baseline gap-12 mt-12">
             {[
               { l: 'NORTH AM', v: 42 },
               { l: 'EUROPE', v: 31 },
               { l: 'ASIA PAC', v: 18 },
               { l: 'LATAM', v: 9 }
             ].map((item) => (
               <div key={item.l} className="space-y-4 flex-1">
                 <div className="h-24 w-full bg-secondary/30 relative flex items-end">
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: `${item.v}%` }}
                      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full bg-primary/40 group-hover:bg-primary/60 transition-colors"
                    />
                 </div>
                 <div>
                   <p className="text-[9px] uppercase tracking-widest font-bold text-muted-foreground">{item.l}</p>
                   <p className="text-lg font-serif">{item.v}%</p>
                 </div>
               </div>
             ))}
          </div>
        </div>

        <div className="p-12 border border-border/50 bg-foreground text-background flex flex-col justify-between">
          <Users className="w-8 h-8 opacity-50" />
          <div>
            <h2 className="font-serif text-3xl tracking-tighter mb-4 leading-tight">Sync Segment <br/>Across Vaults?</h2>
            <p className="text-xs opacity-70 leading-relaxed mb-8">
              Enabling global sync will mirror behavioral weights across all secondary intelligence nodes.
            </p>
            <button className="w-full py-4 border border-background/20 hover:bg-background hover:text-foreground transition-all duration-500 text-[10px] uppercase tracking-widest font-bold">
              INITIATE SYNC
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
