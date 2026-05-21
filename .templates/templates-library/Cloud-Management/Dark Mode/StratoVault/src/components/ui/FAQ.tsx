"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    question: "How does Neural Routing differ from standard load balancing?",
    answer: "Standard balancers react to traffic. Our Neural Routing engine predicts congestion using ML models trained on global telemetry, rerouting packets before bottlenecks occur.",
  },
  {
    question: "Can I integrate StratoVault with my existing AWS/GCP stack?",
    answer: "StratoVault is designed as a sovereign orchestration layer that sits above your existing infrastructure, unifying multi-cloud providers into a single command interface.",
  },
  {
    question: "What is L1 Latency Protection?",
    answer: "It is our premium tier of connectivity that ensures your most critical nodes are physically prioritized within our global backbone, achieving sub-10ms response times globally.",
  },
];

export default function FAQ() {
  return (
    <section className="py-32 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-20">
        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground mb-4">Intelligence</p>
        <h2 className="font-serif text-5xl tracking-tighter mb-8">Frequenty Asked.</h2>
      </div>

      <div className="space-y-12">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="border-b border-border/30 pb-12"
          >
            <h3 className="text-2xl font-serif tracking-tight mb-4">{faq.question}</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {faq.answer}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
