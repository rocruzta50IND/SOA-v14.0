"use client";

import { motion, Transition } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const transition: Transition = { duration: 1.2, ease: [0.16, 1, 0.3, 1] };

export default function LoginPage() {
  return (
    <main className="min-h-screen grid lg:grid-cols-2">
      {/* Left: Form Side */}
      <section className="flex flex-col justify-center px-12 md:px-24 py-12 bg-background relative">
        <Link 
          href="/" 
          className="absolute top-12 left-12 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-3 h-3" />
          Back to Terminal
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className="max-w-md w-full mx-auto lg:mx-0"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-4 block">
            Member Access
          </span>
          <h1 className="font-serif text-5xl font-bold tracking-tighter mb-8">
            Identify <br /> Yourself.
          </h1>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
            <div className="space-y-2 border-b border-border/50 pb-2 focus-within:border-primary transition-colors">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Registry ID
              </label>
              <input 
                type="email" 
                placeholder="name@firm.com"
                className="w-full bg-transparent border-none outline-none font-sans text-lg py-2"
              />
            </div>

            <div className="space-y-2 border-b border-border/50 pb-2 focus-within:border-primary transition-colors">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Access Key
              </label>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full bg-transparent border-none outline-none font-sans text-lg py-2"
              />
            </div>

            <div className="pt-4 flex flex-col gap-6">
              <Link href="/dashboard" className="w-full">
                <Button className="w-full">Authorize</Button>
              </Link>
              <p className="text-sm text-muted-foreground font-sans text-center">
                New to the Foundry?{" "}
                <Link href="/register" className="text-foreground font-medium underline underline-offset-4 hover:text-primary transition-colors">
                  Apply for Access
                </Link>
              </p>
            </div>
          </form>
        </motion.div>
      </section>

      {/* Right: Visual Side */}
      <section className="hidden lg:flex flex-col justify-between p-24 bg-secondary/50 relative overflow-hidden border-l border-border/50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...transition, delay: 0.5 }}
          className="z-10"
        >
          <span className="font-serif text-3xl font-bold tracking-tighter block mb-12">
            LéxisLux
          </span>
          <blockquote className="font-serif text-4xl leading-tight tracking-tight italic text-muted-foreground">
            "True intelligence is the <br /> 
            unveiling of clarity in the <br />
            midst of complexity."
          </blockquote>
        </motion.div>

        <div className="z-10">
          <div className="flex gap-12">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">Global Nodes</div>
              <div className="font-serif text-2xl">014</div>
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">Sovereignty Status</div>
              <div className="font-serif text-2xl text-primary">Active</div>
            </div>
          </div>
        </div>

        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] border border-primary/20 rounded-full -mr-[400px] -mt-[400px]" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] border border-primary/10 rounded-full -mr-[300px] -mt-[300px]" />
        </div>
      </section>
    </main>
  );
}
