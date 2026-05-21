"use client";

import { motion, Transition } from "framer-motion";
import { Button } from "../Button";
import Link from "next/link";

const transition: Transition = { duration: 1.2, ease: [0.16, 1, 0.3, 1] };

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className="mb-8"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
            Elite Legal Intelligence
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.1 }}
          className="font-serif text-7xl md:text-9xl font-bold leading-none tracking-tighter mb-12"
        >
          LéxisLux <br />
          <span className="italic text-primary">Prestige</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 font-sans"
        >
          The definitive operating system for high-ticket law firms. 
          Uncompromising security, bespoke automation, and unparalleled clarity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <Link href="/register">
            <Button>Begin Journey</Button>
          </Link>
          <Link href="/login">
            <Button variant="outline">Member Access</Button>
          </Link>
        </motion.div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[120px]" />
      </div>
    </section>
  );
}
