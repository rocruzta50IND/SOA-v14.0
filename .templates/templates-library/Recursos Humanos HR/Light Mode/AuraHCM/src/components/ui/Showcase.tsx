"use client";

import { motion } from "framer-motion";

export function Showcase() {
  return (
    <section className="py-32 bg-foreground text-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-20">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary block mb-4">
              Visual Intelligence
            </span>
            <h2 className="font-serif text-5xl md:text-7xl tracking-tighter leading-none">
              A Dashboard designed for <span className="italic">Clarity.</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground/80 font-sans leading-relaxed lg:mb-4">
            Experience an interface that disappears, leaving only the data you need to make critical decisions.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-video w-full bg-background/5 border border-white/10 rounded-2xl p-4 md:p-8"
        >
          {/* Fake UI Structure */}
          <div className="h-full w-full bg-card rounded-lg overflow-hidden border border-border/50 flex">
            {/* Sidebar */}
            <div className="w-20 md:w-64 border-r border-border/50 hidden md:block p-6">
              <div className="w-8 h-8 bg-primary rounded-full mb-12" />
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-2 w-full bg-muted/50 rounded-full mb-6" />
              ))}
            </div>
            {/* Main */}
            <div className="flex-1 p-8">
              <div className="flex justify-between items-center mb-12">
                <div className="h-8 w-48 bg-muted rounded-md" />
                <div className="h-10 w-10 bg-muted rounded-full" />
              </div>
              <div className="grid grid-cols-3 gap-6 mb-12">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-32 bg-muted/30 border border-border/50 rounded-xl" />
                ))}
              </div>
              <div className="h-64 bg-muted/20 border border-border/50 rounded-xl w-full" />
            </div>
          </div>

          {/* Floating Accents */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-[60px] rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary/10 blur-[80px] rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
