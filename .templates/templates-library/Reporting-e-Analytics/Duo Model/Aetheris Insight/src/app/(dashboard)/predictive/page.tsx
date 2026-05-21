"use client";

import React from "react";
import { motion } from "framer-motion";
import { PREDICTIVE_MODELS } from "@/lib/mock-data";
import { Brain, Cpu, TrendingUp, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PredictivePage() {
  return (
    <div className="p-12 space-y-16">
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] font-bold text-muted-foreground mb-4 block">
            Future Horizon
          </span>
          <h1 className="font-serif text-6xl tracking-tighter leading-none mb-6">
            Predictive <span className="italic text-primary">Alpha</span>
          </h1>
          <p className="font-sans text-sm text-muted-foreground tracking-wide max-w-xl">
            Neural forecasting engines analyzing multi-dimensional data points to project 
            market trajectories and risk probabilities.
          </p>
        </motion.div>

        {/* Model Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PREDICTIVE_MODELS.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: index * 0.15 }}
              className="group relative p-10 border border-border/50 bg-card/30 hover:border-primary/30 transition-all duration-700"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center border border-border/50 group-hover:bg-primary/10 transition-colors">
                    <Brain className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif tracking-tight">{model.name}</h3>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">ID: {model.id}</p>
                  </div>
                </div>
                <div className={cn(
                  "px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest border",
                  model.status === 'optimal' ? "border-primary/50 text-primary" :
                  model.status === 'training' ? "border-blue-500/50 text-blue-500" :
                  "border-orange-500/50 text-orange-500"
                )}>
                  {model.status.replace('-', ' ')}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-8 mb-8 border-y border-border/30 py-8">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Accuracy</p>
                  <p className="text-2xl font-serif tracking-tighter">{model.accuracy}%</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Impact</p>
                  <p className="text-2xl font-serif tracking-tighter">{model.impact}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Last Run</p>
                  <p className="text-2xl font-serif tracking-tighter">{model.lastRun}</p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Cpu className="w-3 h-3 text-muted-foreground" />
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Tensor Engine V4.2</span>
                </div>
                <button className="bg-foreground text-background text-[10px] uppercase tracking-widest font-bold px-6 py-3 rounded-full hover:bg-primary transition-colors duration-500">
                  RECALIBRATE
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Probability Matrix */}
      <section className="p-12 border border-border/50 bg-[radial-gradient(circle_at_top_right,var(--color-primary)_0%,transparent_20%)] relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="font-serif text-4xl tracking-tighter mb-4">Probability <span className="italic">Matrix</span></h2>
            <p className="text-sm text-muted-foreground mb-8 max-w-md">
              The underlying correlation engine has identified a 14% deviation in the expected 
              convergence of Segment Alpha and Revenue Stream Beta.
            </p>
            <div className="flex gap-4">
              <div className="p-4 bg-background/50 border border-border/50 flex-1">
                <TrendingUp className="w-4 h-4 text-primary mb-2" />
                <p className="text-[10px] uppercase tracking-widest font-bold mb-1">Convergence</p>
                <p className="text-xl font-serif tracking-tight">88.4%</p>
              </div>
              <div className="p-4 bg-background/50 border border-border/50 flex-1">
                <AlertTriangle className="w-4 h-4 text-orange-500 mb-2" />
                <p className="text-[10px] uppercase tracking-widest font-bold mb-1">Risk Score</p>
                <p className="text-xl font-serif tracking-tight">1.2/10</p>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/3 aspect-square border border-border/50 bg-secondary/20 flex items-center justify-center relative group overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10 group-hover:opacity-30 transition-opacity" />
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="w-32 h-32 border-2 border-primary/20 rounded-full flex items-center justify-center"
            >
              <div className="w-24 h-24 border border-primary/40 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-primary rounded-full animate-ping" />
              </div>
            </motion.div>
            <span className="absolute bottom-4 text-[9px] uppercase tracking-[0.4em] font-bold text-muted-foreground">SCANNING HORIZON</span>
          </div>
        </div>
      </section>
    </div>
  );
}
