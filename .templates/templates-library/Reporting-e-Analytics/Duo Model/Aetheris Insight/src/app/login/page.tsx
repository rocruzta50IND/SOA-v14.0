"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function LoginPage() {
  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Side: Visual/Branding */}
      <div className="relative hidden lg:flex flex-col justify-between p-12 bg-foreground text-background overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,var(--color-primary)_0%,transparent_50%)] opacity-20" />
        
        <Link href="/" className="relative z-10 flex items-center gap-2">
          <div className="size-8 bg-background flex items-center justify-center">
            <div className="size-4 bg-foreground" />
          </div>
          <span className="font-serif text-xl tracking-tighter font-bold">Aetheris</span>
        </Link>

        <div className="relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl tracking-tighter mb-8 leading-none"
          >
            Access the <br />
            <span className="italic opacity-50">Sanctum</span> of Intelligence.
          </motion.h2>
          <p className="text-background/60 max-w-sm text-sm uppercase tracking-widest leading-relaxed">
            Identity verification required for terminal access.
          </p>
        </div>

        <div className="relative z-10 flex items-center gap-8 pt-12 border-t border-background/10">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest font-bold opacity-40 mb-2">Network Status</span>
            <span className="text-[10px] uppercase tracking-widest font-bold text-primary flex items-center gap-2">
              <div className="size-1 rounded-full bg-primary animate-pulse" />
              Operational // Tier 3
            </span>
          </div>
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="flex flex-col justify-center p-8 md:p-12 lg:p-24 bg-background">
        <div className="max-w-md w-full mx-auto">
          <Link href="/" className="lg:hidden flex items-center gap-2 mb-12">
            <div className="size-6 bg-foreground flex items-center justify-center">
              <div className="size-3 bg-background" />
            </div>
            <span className="font-serif text-lg tracking-tighter font-bold uppercase">Aetheris</span>
          </Link>

          <div className="mb-12">
            <h1 className="font-serif text-4xl tracking-tighter mb-4">Identity Verification</h1>
            <p className="text-muted-foreground text-sm uppercase tracking-widest">Enter your credentials to continue.</p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Corporate Email</label>
                <input 
                  type="email" 
                  placeholder="name@institution.com"
                  className="w-full bg-transparent border-b border-border py-4 text-sm focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/30"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Access Key</label>
                <input 
                  type="password" 
                  placeholder="••••••••••••"
                  className="w-full bg-transparent border-b border-border py-4 text-sm focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/30"
                />
              </div>
            </div>

            <Link
              href="/dashboard"
              className="group w-full bg-foreground text-background hover:bg-primary hover:text-primary-foreground py-6 flex items-center justify-center gap-3 text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-700"
            >
              Verify Identity
              <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-2" />
            </Link>
          </form>

          <div className="mt-12 pt-12 border-t border-border/50 flex flex-col items-center gap-6">
            <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground text-center">
              Awaiting credentials?
            </span>
            <Link 
              href="/register" 
              className="text-[10px] uppercase tracking-widest font-bold hover:text-primary transition-colors border-b border-transparent hover:border-primary"
            >
              Request Partnership Access
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
