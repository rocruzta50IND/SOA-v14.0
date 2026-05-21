"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-48 px-6 md:px-12 bg-foreground text-background overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,var(--color-primary)_0%,transparent_50%)] opacity-20 pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-6xl md:text-9xl tracking-tighter mb-12"
        >
          Begin the <br />
          <span className="italic opacity-50 text-primary">Ascension.</span>
        </motion.h2>

        <p className="text-xl text-background/60 mb-16 max-w-xl mx-auto leading-relaxed">
          Join the elite circle of institutions that demand absolute clarity 
          and predictive dominance.
        </p>

        <Link
          href="/register"
          className="group inline-flex items-center gap-4 bg-background text-foreground hover:bg-primary hover:text-primary-foreground rounded-full px-12 py-6 text-sm font-bold tracking-[0.2em] uppercase transition-all duration-700"
        >
          Request Partnership
          <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-2" />
        </Link>
      </div>
    </section>
  );
}
