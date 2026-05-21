"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Standard",
    price: "$2,400",
    description: "Ideal for growing infrastructure clusters.",
    features: ["100 Edge Nodes", "L2 Latency Protection", "Standard Encryption", "24/7 Support"],
    cta: "Start Scaling",
    featured: false,
  },
  {
    name: "Enterprise",
    price: "$9,800",
    description: "The gold standard for sovereign cloud orchestration.",
    features: ["Unlimited Nodes", "L1 Neural Routing", "Quantum Encryption", "Dedicated Architect", "SLA Guarantee"],
    cta: "Deploy Vault",
    featured: true,
  },
  {
    name: "Sovereign",
    price: "Custom",
    description: "Bespoke infrastructure for global conglomerates.",
    features: ["Private Mesh Network", "Physical Hardware Control", "Custom Governance", "White-glove Concierge"],
    cta: "Contact Sales",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-4 italic">Investment</p>
        <h2 className="font-serif text-5xl md:text-7xl tracking-tighter leading-none mb-8">
          Sovereign Value.
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg">
          Predictable pricing for unpredictable growth. Secure your digital sovereignty today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className={cn(
              "relative p-10 rounded-[2.5rem] border transition-all duration-500 flex flex-col",
              plan.featured 
                ? "bg-foreground text-background border-primary scale-105 z-10 shadow-2xl" 
                : "bg-secondary/10 border-border/50 hover:border-primary/30"
            )}
          >
            {plan.featured && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-background text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                Most Reliable
              </div>
            )}
            
            <div className="mb-8">
              <h3 className={cn("text-2xl font-serif mb-2", plan.featured ? "text-background" : "text-foreground")}>{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-serif tracking-tighter">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-sm opacity-60">/mo</span>}
              </div>
              <p className="text-sm opacity-70 leading-relaxed">{plan.description}</p>
            </div>

            <ul className="space-y-4 mb-12 flex-grow">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm opacity-80">
                  <Check className={cn("w-4 h-4", plan.featured ? "text-primary" : "text-primary")} />
                  {feature}
                </li>
              ))}
            </ul>

            <Link href="/register">
              <button className={cn(
                "w-full rounded-full py-4 text-[10px] font-bold uppercase tracking-widest transition-all duration-500",
                plan.featured 
                  ? "bg-primary text-background hover:bg-primary/90" 
                  : "bg-foreground text-background hover:opacity-80"
              )}>
                {plan.cta}
              </button>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
