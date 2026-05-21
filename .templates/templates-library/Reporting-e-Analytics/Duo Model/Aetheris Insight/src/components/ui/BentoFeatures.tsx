"use client";

import { motion } from "framer-motion";
import { Layers, Zap, Shield, BarChart3, Globe, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    title: "Predictive Synthesis",
    description: "Neural networks that anticipate market shifts before they manifest in standard reporting.",
    icon: BrainIcon,
    className: "md:col-span-2 md:row-span-2 bg-foreground text-background",
  },
  {
    title: "High-Ticket Auditing",
    description: "Zero-latency verification for transactions exceeding $10M+.",
    icon: Shield,
    className: "md:col-span-1 md:row-span-1 border border-border/50",
  },
  {
    title: "Global Mesh",
    description: "Distributed analytics nodes across 42 high-frequency centers.",
    icon: Globe,
    className: "md:col-span-1 md:row-span-1 border border-border/50",
  },
  {
    title: "Liquidity Mapping",
    description: "Real-time heatmaps of institutional liquidity flows and whale movements.",
    icon: BarChart3,
    className: "md:col-span-2 md:row-span-1 border border-border/50",
  },
];

function BrainIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

export function BentoFeatures() {
  return (
    <section id="solutions" className="py-32 px-6 md:px-12">
      <div className="mb-20">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-4 block">
          // Core Capabilities
        </span>
        <h2 className="font-serif text-5xl md:text-7xl tracking-tighter max-w-3xl">
          Architected for <span className="italic">Certainty.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
        {FEATURES.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "group relative p-8 flex flex-col justify-between overflow-hidden",
              feature.className
            )}
          >
            <div className="relative z-10">
              <feature.icon className="size-8 mb-6 transition-transform duration-500 group-hover:scale-110" />
              <h3 className="font-serif text-2xl mb-4 tracking-tighter">{feature.title}</h3>
              <p className={cn(
                "text-sm leading-relaxed max-w-[240px]",
                feature.className.includes("bg-foreground") ? "text-background/70" : "text-muted-foreground"
              )}>
                {feature.description}
              </p>
            </div>
            
            <div className="absolute bottom-4 right-4 text-[10px] font-mono opacity-20 group-hover:opacity-40 transition-opacity">
              {String(index + 1).padStart(2, '0')}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
