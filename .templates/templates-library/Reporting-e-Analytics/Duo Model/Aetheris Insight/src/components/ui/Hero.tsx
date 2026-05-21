"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl aspect-square bg-[radial-gradient(circle_at_center,var(--color-primary)_0%,transparent_70%)] opacity-[0.03] blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-8">
            // Intelligence for the 0.1%
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.85] mb-12"
        >
          Precision <br />
          <span className="italic text-muted-foreground/30">Analytics</span> <br />
          Redefined.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed mb-12"
        >
          Aetheris Insight delivers boutique reporting and predictive intelligence 
          for high-ticket enterprise portfolios. We don't just visualize data; 
          we architect clarity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-6"
        >
          <Link
            href="/register"
            className="group bg-foreground text-background hover:bg-primary hover:text-primary-foreground rounded-full px-10 py-5 text-sm font-bold tracking-[0.2em] uppercase transition-all duration-700 flex items-center gap-3"
          >
            Start Implementation
            <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-2" />
          </Link>
          <Link
            href="#methodology"
            className="px-10 py-5 text-sm font-bold tracking-[0.2em] uppercase border border-border hover:border-foreground transition-all duration-700 rounded-full"
          >
            Explore Methodology
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-12 right-12 hidden lg:block"
      >
        <div className="flex flex-col items-end gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">Portfolio Volume</span>
          <span className="font-serif text-4xl tracking-tighter">$4.2B+</span>
        </div>
      </motion.div>
    </section>
  );
}
