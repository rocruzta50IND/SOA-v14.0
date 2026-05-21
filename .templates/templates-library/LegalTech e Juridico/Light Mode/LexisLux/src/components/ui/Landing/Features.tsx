"use client";

import { motion, Transition } from "framer-motion";
import { Shield, Zap, Scale, Globe } from "lucide-react";

const transition: Transition = { duration: 1.2, ease: [0.16, 1, 0.3, 1] };

const features = [
  {
    title: "Sovereign Security",
    description: "Military-grade encryption for the world's most sensitive legal data assets.",
    icon: Shield
  },
  {
    title: "Bespoke Workflow",
    description: "Tailored automation that respects the nuances of high-ticket litigation.",
    icon: Zap
  },
  {
    title: "Global Compliance",
    description: "Multi-jurisdictional intelligence built into the core of every case.",
    icon: Globe
  },
  {
    title: "Elite Analytics",
    description: "Clarity beyond traditional metrics. Real-time insights for partners.",
    icon: Scale
  }
];

export function Features() {
  return (
    <section className="py-32 bg-secondary/30 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={transition}
            viewport={{ once: true }}
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground block mb-4"
          >
            Unrivaled Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={transition}
            viewport={{ once: true }}
            className="font-serif text-5xl md:text-7xl font-bold tracking-tighter"
          >
            Engineered for <br /> Perfection.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-12 bg-card border border-border/50 hover:border-primary/30 transition-colors duration-500"
            >
              <div className="mb-8">
                <feature.icon className="w-8 h-8 text-primary" strokeWidth={1} />
              </div>
              <h3 className="font-serif text-3xl font-bold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-sans">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
