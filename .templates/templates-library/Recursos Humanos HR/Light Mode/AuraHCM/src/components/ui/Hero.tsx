"use client";

import { motion } from "framer-motion";
import { Button } from "./Button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary px-4 py-1.5 border border-primary/20 rounded-full">
            Version 4.0 Now Live
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-7xl md:text-9xl tracking-tighter leading-[0.9] mb-8"
        >
          The Future of Human <br />
          <span className="text-primary italic">Capital.</span> Elevated.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground font-sans leading-relaxed mb-12"
        >
          Orchestrate your global workforce with precision-engineered intelligence. 
          AuraHCM combines boutique design with enterprise-grade HR orchestration.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link href="/register">
            <Button size="lg">Get Started</Button>
          </Link>
          <Link href="/login">
            <Button variant="outline" size="lg">
              View Demo
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Decorative Micro-labels */}
      <div className="absolute bottom-10 left-10 hidden xl:block">
        <div className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground/40 rotate-90 origin-left">
          EST. 2026 // BEYOND MANAGEMENT
        </div>
      </div>
      <div className="absolute bottom-10 right-10 hidden xl:block text-right">
        <div className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground/40">
          SCROLL TO EXPLORE
          <div className="mt-2 h-px w-20 bg-muted-foreground/20 ml-auto" />
        </div>
      </div>
    </section>
  );
}
