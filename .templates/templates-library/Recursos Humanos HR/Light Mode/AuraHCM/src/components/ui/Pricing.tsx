"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "./Button";

const plans = [
  {
    name: "Essential",
    price: "$2,500",
    description: "Foundational HR for growing enterprises.",
    features: ["Global Payroll Integration", "Performance Basics", "Standard Analytics", "14/5 Support"],
    popular: false
  },
  {
    name: "Professional",
    price: "$5,000",
    description: "Advanced orchestration for global leaders.",
    features: ["Full Talent Cloud", "AI-Predictive Insights", "Custom Compliance", "24/7 Priority Support", "Dedicated Strategist"],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Bespoke solutions for the Fortune 500.",
    features: ["White-glove Implementation", "Unlimited Jurisdictions", "Custom API Mesh", "On-premise Options", "Executive Advisory"],
    popular: false
  }
];

export function Pricing() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary block mb-4">
            Investment
          </span>
          <h2 className="font-serif text-5xl md:text-7xl tracking-tighter leading-none mb-6">
            Scalable <span className="italic">Luxury.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Select the tier that aligns with your organizational vision. 
            All plans include our core boutique service model.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`p-10 border flex flex-col justify-between ${
                plan.popular 
                  ? "border-primary bg-primary/[0.02] shadow-2xl shadow-primary/5" 
                  : "border-border/50 bg-card"
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <h3 className="font-serif text-3xl">{plan.name}</h3>
                  {plan.popular && (
                    <span className="text-[10px] uppercase tracking-widest font-bold bg-primary text-primary-foreground px-3 py-1 rounded-full">
                      Most Selected
                    </span>
                  )}
                </div>
                <div className="mb-8">
                  <span className="text-4xl font-serif">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground text-sm ml-2">/month</span>}
                </div>
                <p className="text-muted-foreground text-sm mb-10">{plan.description}</p>
                <div className="space-y-4 mb-12">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm font-sans">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Button variant={plan.popular ? "primary" : "outline"} className="w-full">
                Begin Partnership
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
