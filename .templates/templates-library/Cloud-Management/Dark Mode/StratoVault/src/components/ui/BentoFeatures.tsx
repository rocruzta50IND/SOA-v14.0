"use client";

import { motion } from "framer-motion";
import { Cpu, Globe, Lock, Share2, ShieldCheck, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Neural Edge Routing",
    description: "Our proprietary algorithm predicts traffic surges and redirects nodes in sub-millisecond cycles.",
    icon: Zap,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Quantum Encryption",
    description: "Military-grade sovereign security for your most sensitive data clusters.",
    icon: Lock,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Global Mesh",
    description: "Connect 400+ data centers into a single virtualized workspace.",
    icon: Globe,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Auto-Scale Core",
    description: "Elastic infrastructure that expands before the demand arrives.",
    icon: Cpu,
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Sovereign Control",
    description: "Full governance over data residency and compliance protocols.",
    icon: ShieldCheck,
    className: "md:col-span-2 md:row-span-1",
  },
];

export default function BentoFeatures() {
  return (
    <section id="features" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-20">
        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-4 italic">Capabilities</p>
        <h2 className="font-serif text-5xl md:text-7xl tracking-tighter leading-none mb-6">
          Architected for <br />
          Elite Performance.
        </h2>
        <p className="text-muted-foreground max-w-xl text-lg">
          The StratoVault engine isn't just a manager; it's a sentient orchestration layer for modern business.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className={cn(
              "group relative p-8 rounded-[2rem] border border-border/50 bg-secondary/10 overflow-hidden hover:border-primary/50 transition-colors duration-500",
              feature.className
            )}
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-100 transition-opacity duration-500 group-hover:text-primary">
              <feature.icon className="w-12 h-12" />
            </div>
            
            <div className="h-full flex flex-col justify-end">
              <h3 className="text-2xl font-serif tracking-tight mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[260px]">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
