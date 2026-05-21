"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    name: "Essential",
    price: "$2,400",
    period: "/mo",
    description: "For established family offices and emerging portfolios.",
    features: ["Standard Predictive Models", "Daily Reporting Synthesis", "Email Implementation Support"],
    cta: "Start Basic",
    popular: false,
  },
  {
    name: "Sovereign",
    price: "$8,900",
    period: "/mo",
    description: "The industry standard for high-ticket enterprise assets.",
    features: ["Advanced Neural Synthesis", "Real-time Whale Tracking", "Dedicated Quant Liaison", "Custom Data Mesh"],
    cta: "Establish Access",
    popular: true,
  },
  {
    name: "Infinity",
    price: "Custom",
    period: "",
    description: "Bespoke architectural solutions for global institutions.",
    features: ["Private Instance Deployment", "On-site Implementation Team", "24/7 War-room Access", "Quantum-Safe Encryption"],
    cta: "Contact Partners",
    popular: false,
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6 md:px-12 bg-muted/20">
      <div className="text-center mb-24">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-4 block">
          // Investment Tiers
        </span>
        <h2 className="font-serif text-5xl md:text-7xl tracking-tighter mb-8">
          Value Beyond <span className="italic">Measure.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/50 max-w-7xl mx-auto border border-border/50">
        {PLANS.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "relative p-12 bg-background flex flex-col justify-between group",
              plan.popular && "bg-muted/50"
            )}
          >
            <div>
              {plan.popular && (
                <span className="absolute top-6 right-12 text-[8px] uppercase tracking-[0.2em] font-bold text-primary">
                  Most Preferred
                </span>
              )}
              <h3 className="font-serif text-3xl mb-4 tracking-tighter">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold tracking-tighter">{plan.price}</span>
                <span className="text-xs text-muted-foreground uppercase tracking-widest">{plan.period}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-12 leading-relaxed">
                {plan.description}
              </p>
              
              <ul className="space-y-6 mb-16">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-4 text-[10px] uppercase tracking-[0.15em] font-bold text-muted-foreground">
                    <Check className="size-3 text-primary mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/register"
              className={cn(
                "w-full py-5 text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-700 text-center rounded-none",
                plan.popular 
                  ? "bg-foreground text-background hover:bg-primary hover:text-primary-foreground" 
                  : "border border-border hover:border-foreground"
              )}
            >
              {plan.cta}
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
