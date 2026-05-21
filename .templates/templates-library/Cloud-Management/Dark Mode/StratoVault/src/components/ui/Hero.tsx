"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cloud, Shield, Zap } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 blur-[120px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-5xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/50 bg-secondary/50 backdrop-blur-sm mb-8">
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
            V2.0 Protocol Active — Enterprise Infrastructure
          </span>
        </div>

        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.85] mb-8">
          Orchestrate <br />
          <span className="text-primary italic">Absolute</span> Scale.
        </h1>

        <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          StratoVault provides the sovereign infrastructure layer for global enterprise clusters. 
          Unify your multi-cloud architecture with zero-latency precision.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/dashboard" className="w-full sm:w-auto">
            <button className="w-full bg-foreground text-background hover:opacity-90 rounded-full px-10 py-5 text-sm font-medium tracking-[0.2em] uppercase transition-all duration-500 flex items-center justify-center gap-2 group">
              Initialize Vault
              <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
            </button>
          </Link>
          <Link href="#features" className="w-full sm:w-auto text-muted-foreground hover:text-foreground transition-colors duration-300">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Explore Architecture</span>
          </Link>
        </div>
      </motion.div>

      {/* Metric Preview */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="mt-32 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-border/30 pt-12"
      >
        {[
          { label: "Infrastructure Uptime", value: "99.999%", sub: "Sovereign Reliability" },
          { label: "Global Latency", value: "<14ms", sub: "Neural Routing" },
          { label: "Encrypted Clusters", value: "4.2k+", sub: "Secure Nodes" },
        ].map((stat, i) => (
          <div key={i} className="space-y-2">
            <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">{stat.label}</p>
            <p className="text-5xl font-serif tracking-tighter">{stat.value}</p>
            <p className="text-xs text-primary font-medium tracking-wide italic">{stat.sub}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
