"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const FAQS = [
  {
    question: "How does Aetheris handle proprietary data security?",
    answer: "We employ end-to-end quantum-safe encryption and offer private instance deployments for institutions requiring total data sovereignty."
  },
  {
    question: "Can we integrate existing legacy data streams?",
    answer: "Yes. Our implementation team specializes in bridging legacy architectures with our modern neural synthesis mesh via custom adapters."
  },
  {
    question: "What is the typical time-to-implementation?",
    answer: "For standard portfolios, full integration and predictive training are completed within 4 to 6 weeks."
  }
];

export function FAQ() {
  return (
    <section className="py-32 px-6 md:px-12 border-t border-border/50">
      <div className="max-w-4xl mx-auto">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-8 block text-center">
          // Inquiries
        </span>
        <h2 className="font-serif text-5xl md:text-6xl tracking-tighter mb-20 text-center">
          Commonly Asked.
        </h2>

        <div className="space-y-12">
          {FAQS.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group border-b border-border/50 pb-12 cursor-default"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif text-2xl tracking-tighter">{faq.question}</h3>
                <Plus className="size-5 text-muted-foreground transition-transform duration-500 group-hover:rotate-45" />
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
