"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    price: "$49",
    description: "Perfect for early-stage startups and internal projects.",
    features: ["Up to 10 instances", "Standard Support", "Basic Analytics", "Public Cloud only"],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Enterprise",
    price: "$499",
    description: "The industry standard for scaling high-traffic systems.",
    features: ["Unlimited instances", "24/7 Priority Support", "Advanced Observability", "Hybrid Cloud Mesh", "Custom SLAs"],
    cta: "Contact Sales",
    popular: true,
  },
  {
    name: "Dedicated",
    price: "Custom",
    description: "Custom infrastructure tailored to your specific needs.",
    features: ["Private Regions", "White-glove Onboarding", "Dedicated Success Manager", "Custom Integrations"],
    cta: "Request Quote",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Transparent Pricing</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the plan that best fits your infrastructure needs. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 30, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "relative p-8 rounded-3xl border transition-all flex flex-col",
                plan.popular 
                  ? "bg-white/10 border-primary/50 shadow-[0_0_40px_rgba(79,70,229,0.15)]" 
                  : "bg-white/5 border-white/10"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground">/mo</span>}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={cn(
                "w-full h-12 rounded-xl text-sm font-semibold transition-all",
                plan.popular
                  ? "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20"
                  : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
              )}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
