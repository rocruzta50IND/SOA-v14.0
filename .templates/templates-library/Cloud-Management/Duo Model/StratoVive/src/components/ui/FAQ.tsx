"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    question: "How does StratoVive handle multi-cloud deployments?",
    answer: "Our Hybrid Cloud Mesh technology abstracts provider-specific APIs into a single unified control plane, allowing you to move workloads between AWS, Azure, and GCP without changing a single line of code.",
  },
  {
    question: "Is there a limit on the number of nodes I can manage?",
    answer: "No. Our architecture is horizontally scalable. Whether you manage 10 nodes or 10,000, StratoVive provides the same millisecond-latency management experience.",
  },
  {
    question: "Can I use StratoVive with my existing CI/CD pipelines?",
    answer: "Absolutely. StratoVive offers a robust CLI and REST API that integrates seamlessly with GitHub Actions, GitLab CI, Jenkins, and any other CI/CD tool you use.",
  },
  {
    question: "What kind of support do you offer for enterprise customers?",
    answer: "Enterprise customers receive a dedicated Success Manager, 24/7 priority phone and Slack support, and guaranteed 99.99% Uptime SLAs.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 relative bg-white/[0.02]">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Common Questions</h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about StratoVive.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
            >
              <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
