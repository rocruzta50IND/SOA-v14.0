"use client";

import { motion } from "framer-motion";
import { Cloud, Server, Shield, Zap, ChevronRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/20 blur-[120px] rounded-full -z-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-medium text-primary-foreground/80 tracking-wide uppercase">New: StratoVive v4.0 is live</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 leading-tight">
            The Operating System for <br /> Modern Infrastructure
          </h1>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            StratoVive empowers enterprise teams to deploy, scale, and secure cloud workloads with unprecedented speed. One platform, zero friction, infinite possibilities.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/register"
              className={cn(
                "inline-flex items-center justify-center rounded-xl text-sm font-semibold transition-all h-12 px-8",
                "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_rgba(79,70,229,0.4)]"
              )}
            >
              Start Free Trial <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
            <button 
              className={cn(
                "inline-flex items-center justify-center rounded-xl text-sm font-semibold transition-all h-12 px-8",
                "bg-white/5 text-white border border-white/10 backdrop-blur-md hover:bg-white/10"
              )}
            >
              <Play className="mr-2 h-4 w-4 fill-current" /> Watch Demo
            </button>
          </div>
        </motion.div>

        {/* Fake UI Preview */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 30, delay: 0.2 }}
          className="mt-20 relative"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden p-1">
            <div className="bg-background/40 rounded-xl overflow-hidden aspect-[16/9] flex items-center justify-center border border-white/5">
                <div className="grid grid-cols-12 gap-4 p-8 w-full h-full opacity-40 grayscale group-hover:grayscale-0 transition-all">
                    <div className="col-span-3 space-y-4">
                        <div className="h-8 bg-white/10 rounded w-full" />
                        <div className="h-32 bg-white/5 rounded w-full" />
                        <div className="h-32 bg-white/5 rounded w-full" />
                    </div>
                    <div className="col-span-9 space-y-4">
                        <div className="h-12 bg-white/10 rounded w-full" />
                        <div className="grid grid-cols-3 gap-4">
                            <div className="h-40 bg-white/5 rounded" />
                            <div className="h-40 bg-white/5 rounded" />
                            <div className="h-40 bg-white/5 rounded" />
                        </div>
                        <div className="h-64 bg-white/5 rounded w-full" />
                    </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <Zap className="w-16 h-16 text-primary animate-pulse" />
                </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
