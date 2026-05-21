"use client";

import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "00:00", value: 400 },
  { name: "04:00", value: 300 },
  { name: "08:00", value: 900 },
  { name: "12:00", value: 700 },
  { name: "16:00", value: 1200 },
  { name: "20:00", value: 800 },
  { name: "23:59", value: 1100 },
];

export default function Showcase() {
  return (
    <section className="py-32 bg-foreground text-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-20">
          <div className="max-w-2xl">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-background/50 mb-4">The Interface</p>
            <h2 className="font-serif text-5xl md:text-7xl tracking-tighter leading-none">
              Control your empire <br />
              from a <span className="text-background/40 italic">single lens.</span>
            </h2>
          </div>
          <p className="text-background/60 max-w-xs text-sm leading-relaxed mb-2">
            Visualizing trillion-byte data flows with elegant, low-latency telemetry. 
            Real-time insight, infinite precision.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-video w-full bg-background rounded-[2rem] border border-background/10 shadow-2xl overflow-hidden p-8"
        >
          {/* Mock UI Header */}
          <div className="flex items-center justify-between mb-12 border-b border-foreground/5 pb-6">
            <div className="flex gap-4">
              <div className="w-3 h-3 rounded-full bg-foreground/10" />
              <div className="w-3 h-3 rounded-full bg-foreground/10" />
              <div className="w-3 h-3 rounded-full bg-foreground/10" />
            </div>
            <div className="text-[10px] font-bold tracking-widest uppercase text-foreground/40">StratoVault OS — Kernel v4.0</div>
          </div>

          {/* Mock Dashboard Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-3 space-y-8">
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="var(--color-primary)" 
                      fillOpacity={1} 
                      fill="url(#colorValue)" 
                      strokeWidth={3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-20 rounded-xl bg-foreground/5 border border-foreground/5" />
                ))}
              </div>
            </div>
            <div className="space-y-4">
               {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-12 rounded-lg bg-foreground/5 border border-foreground/5 flex items-center px-4">
                    <div className="w-2 h-2 rounded-full bg-primary/40 mr-3" />
                    <div className="h-2 w-24 bg-foreground/10 rounded" />
                  </div>
                ))}
            </div>
          </div>

          {/* Overlay Glow */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background via-transparent to-transparent opacity-40" />
        </motion.div>
      </div>
    </section>
  );
}
