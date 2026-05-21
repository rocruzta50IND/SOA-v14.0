"use client";

import { motion, Transition } from "framer-motion";

const transition: Transition = { duration: 1.2, ease: [0.16, 1, 0.3, 1] };

const faqs = [
  {
    question: "How secure is LexisLux?",
    answer: "We employ end-to-end HSM-backed encryption and private cloud infrastructure to ensure your data remains sovereign and protected against all vectors."
  },
  {
    question: "Can we migrate existing data?",
    answer: "Our white-glove onboarding team handles the entire transition from legacy systems, ensuring zero downtime and complete data integrity."
  },
  {
    question: "What support is provided?",
    answer: "From dedicated architects to 24/7 concierge support, we provide a level of service that matches the prestige of your firm."
  }
];

export function FAQ() {
  return (
    <section className="py-32 bg-secondary/30 border-t border-border/50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={transition}
            viewport={{ once: true }}
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground block mb-4"
          >
            Inquiries
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={transition}
            viewport={{ once: true }}
            className="font-serif text-5xl md:text-7xl font-bold tracking-tighter"
          >
            Frequently Asked.
          </motion.h2>
        </div>

        <div className="space-y-12">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-b border-border/50 pb-12"
            >
              <h3 className="font-serif text-2xl font-bold mb-6">{faq.question}</h3>
              <p className="text-muted-foreground leading-relaxed font-sans">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
