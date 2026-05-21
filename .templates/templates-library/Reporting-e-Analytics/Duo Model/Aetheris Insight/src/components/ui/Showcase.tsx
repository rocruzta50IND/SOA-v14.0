"use client";

import { motion } from "framer-motion";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";

const MOCK_DATA = [
  { value: 400 }, { value: 300 }, { value: 600 }, { value: 800 }, { value: 500 }, { value: 900 }, { value: 1100 }
];

export function Showcase() {
  return (
    <section className="py-32 bg-foreground text-background overflow-hidden">
      <div className="px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-8 block">
              // The Interface
            </span>
            <h2 className="font-serif text-5xl md:text-7xl tracking-tighter mb-8">
              Cognitive <br />
              <span className="italic opacity-50">Clarity</span> at Scale.
            </h2>
            <p className="text-lg text-background/60 leading-relaxed max-w-md mb-12">
              Our interface is designed to reduce cognitive load while maximizing 
              data density. Every pixel is engineered for the elite decision-maker.
            </p>
            
            <ul className="space-y-6">
              {["Real-time latency under 10ms", "Custom proprietary typography", "Military-grade data encryption"].map((item) => (
                <li key={item} className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-bold">
                  <div className="size-1.5 bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="bg-background/5 border border-background/10 aspect-[4/3] rounded-sm p-8 flex flex-col gap-8">
              <div className="flex items-center justify-between border-b border-background/10 pb-6">
                <div className="flex gap-2">
                  <div className="size-2 rounded-full bg-background/20" />
                  <div className="size-2 rounded-full bg-background/20" />
                  <div className="size-2 rounded-full bg-background/20" />
                </div>
                <div className="text-[8px] uppercase tracking-widest font-bold opacity-40">System Live // Node 042</div>
              </div>
              
              <div className="flex-1 w-full opacity-50">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={MOCK_DATA}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="var(--color-primary)" 
                      fillOpacity={1} 
                      fill="url(#colorValue)" 
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-16 bg-background/5 border border-background/10" />
                ))}
              </div>
            </div>
            
            {/* Decorative floaters */}
            <div className="absolute -top-12 -right-12 size-48 bg-primary/20 blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 size-48 bg-primary/10 blur-[80px] pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
