"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12"
    >
      <Link href="/" className="group flex items-center gap-2">
        <div className="size-8 bg-foreground rounded-none flex items-center justify-center transition-transform duration-500 group-hover:rotate-90">
          <div className="size-4 bg-background" />
        </div>
        <span className="font-serif text-xl tracking-tighter font-bold">Aetheris</span>
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        {["Solutions", "Enterprise", "Methodology", "Pricing"].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground hover:text-foreground transition-colors"
          >
            {item}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-6">
        <Link
          href="/login"
          className="text-[10px] uppercase tracking-[0.2em] font-bold hover:text-primary transition-colors"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="bg-foreground text-background hover:opacity-80 rounded-full px-6 py-2.5 text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-500"
        >
          Request Access
        </Link>
      </div>
    </motion.header>
  );
}
