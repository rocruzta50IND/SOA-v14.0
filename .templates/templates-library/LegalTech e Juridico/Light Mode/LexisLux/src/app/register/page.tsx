"use client";

import { motion, Transition } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const transition: Transition = { duration: 1.2, ease: [0.16, 1, 0.3, 1] };

export default function RegisterPage() {
  return (
    <main className="min-h-screen grid lg:grid-cols-2">
      {/* Left: Visual Side */}
      <section className="hidden lg:flex flex-col justify-between p-24 bg-foreground text-background relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...transition, delay: 0.5 }}
          className="z-10"
        >
          <span className="font-serif text-3xl font-bold tracking-tighter block mb-12">
            LéxisLux
          </span>
          <h2 className="font-serif text-6xl leading-none tracking-tighter mb-8">
            The Gates <br /> to the Foundry.
          </h2>
          <p className="text-background/60 max-w-sm font-sans leading-relaxed text-lg">
            Join the most exclusive legal intelligence network. Our verification process ensures only elite practitioners gain access.
          </p>
        </motion.div>

        <div className="z-10 flex items-center gap-8">
          <div className="w-12 h-[1px] bg-background/30" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-background/60">
            Foundry Application Protocol v.4.0
          </span>
        </div>

        {/* Decorative Background */}
        <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none opacity-10">
          <div className="absolute bottom-0 left-0 w-[1000px] h-[1000px] border border-background rounded-full -ml-[500px] -mb-[500px]" />
        </div>
      </section>

      {/* Right: Form Side */}
      <section className="flex flex-col justify-center px-12 md:px-24 py-12 bg-background relative">
        <Link 
          href="/" 
          className="absolute top-12 right-12 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
        >
          Back to Terminal
          <ArrowLeft className="w-3 h-3 rotate-180" />
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className="max-w-md w-full mx-auto lg:ml-0"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-4 block">
            Membership Application
          </span>
          <h1 className="font-serif text-5xl font-bold tracking-tighter mb-8">
            Initiate <br /> Application.
          </h1>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2 border-b border-border/50 pb-2 focus-within:border-primary transition-colors">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  First Name
                </label>
                <input 
                  type="text" 
                  placeholder="Julian"
                  className="w-full bg-transparent border-none outline-none font-sans text-lg py-2"
                />
              </div>
              <div className="space-y-2 border-b border-border/50 pb-2 focus-within:border-primary transition-colors">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Last Name
                </label>
                <input 
                  type="text" 
                  placeholder="Vance"
                  className="w-full bg-transparent border-none outline-none font-sans text-lg py-2"
                />
              </div>
            </div>

            <div className="space-y-2 border-b border-border/50 pb-2 focus-within:border-primary transition-colors">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Firm Email
              </label>
              <input 
                type="email" 
                placeholder="vance@global-legal.com"
                className="w-full bg-transparent border-none outline-none font-sans text-lg py-2"
              />
            </div>

            <div className="space-y-2 border-b border-border/50 pb-2 focus-within:border-primary transition-colors">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Security Key
              </label>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full bg-transparent border-none outline-none font-sans text-lg py-2"
              />
            </div>

            <div className="flex items-start gap-3 py-4">
              <input type="checkbox" className="mt-1 accent-primary" id="terms" />
              <label htmlFor="terms" className="text-xs text-muted-foreground font-sans leading-relaxed">
                I acknowledge that this application is subject to the LexisLux Sovereignty Protocol and strict verification.
              </label>
            </div>

            <div className="pt-2 flex flex-col gap-6">
              <Link href="/dashboard" className="w-full">
                <Button className="w-full">Submit Application</Button>
              </Link>
              <p className="text-sm text-muted-foreground font-sans text-center">
                Already a member?{" "}
                <Link href="/login" className="text-foreground font-medium underline underline-offset-4 hover:text-primary transition-colors">
                  Identify Yourself
                </Link>
              </p>
            </div>
          </form>
        </motion.div>
      </section>
    </main>
  );
}
