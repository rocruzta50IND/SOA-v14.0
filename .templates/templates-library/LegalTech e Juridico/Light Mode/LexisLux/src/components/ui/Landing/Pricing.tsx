"use client";

import { motion, Transition } from "framer-motion";
import { Button } from "../Button";
import { Check } from "lucide-react";

const transition: Transition = { duration: 1.2, ease: [0.16, 1, 0.3, 1] };

const tiers = [
  {
    name: "Associate",
    price: "2,500",
    description: "For boutique firms scaling their digital presence.",
    features: ["Up to 10 Seats", "Core Case Management", "Standard Security", "Email Support"]
  },
  {
    name: "Partner",
    price: "7,500",
    description: "The standard for elite mid-sized legal practices.",
    features: ["Unlimited Seats", "Advanced Analytics", "Global Compliance Suite", "Priority Concierge"]
  },
  {
    name: "Foundry",
    price: "Custom",
    description: "Bespoke infrastructure for global enterprise entities.",
    features: ["Sovereign Hosting", "White-glove Implementation", "Dedicated Architect", "24/7 Strategic Support"]
  }
];

export function Pricing() {
  return (
    <section className="py-32 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={transition}
            viewport={{ once: true }}
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground block mb-4"
          >
            Investment
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={transition}
            viewport={{ once: true }}
            className="font-serif text-5xl md:text-7xl font-bold tracking-tighter"
          >
            Tailored Access.
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-12 bg-card border border-border/50 flex flex-col"
            >
              <div className="mb-8">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-4">
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-5xl font-bold">
                    {tier.price !== "Custom" && "$"}
                    {tier.price}
                  </span>
                  {tier.price !== "Custom" && (
                    <span className="text-muted-foreground">/mo</span>
                  )}
                </div>
              </div>
              
              <p className="text-muted-foreground mb-12 font-sans italic">
                {tier.description}
              </p>

              <ul className="space-y-6 mb-12 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-4 text-sm font-sans">
                    <Check className="w-4 h-4 text-primary" strokeWidth={3} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant={index === 1 ? "primary" : "outline"} className="w-full">
                Acquire Membership
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
