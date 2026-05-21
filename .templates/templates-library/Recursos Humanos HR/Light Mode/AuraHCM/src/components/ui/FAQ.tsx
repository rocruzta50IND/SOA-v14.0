"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    question: "How long is the typical implementation process?",
    answer: "For Essential plans, we typically go live in 4 weeks. Enterprise solutions involve a 12-week bespoke architectural phase to ensure seamless integration with your existing infrastructure."
  },
  {
    question: "Does AuraHCM handle localized payroll compliance?",
    answer: "Yes. Our platform automates compliance across 140+ jurisdictions, including tax filings, social security, and local labor law adherence, all updated in real-time."
  },
  {
    question: "Can we migrate data from our current legacy HCM?",
    answer: "Absolutely. Our specialized Migration Desk handles the end-to-end transfer of historical records from platforms like Workday, SAP, or Oracle with zero downtime."
  }
];

export function FAQ() {
  return (
    <section className="py-32 px-6 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary block mb-4">
            Inquiries
          </span>
          <h2 className="font-serif text-5xl md:text-6xl tracking-tighter leading-none mb-6">
            Frequently Asked <span className="italic">Questions.</span>
          </h2>
        </div>

        <div className="space-y-12">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="border-b border-border/50 pb-12"
            >
              <h3 className="font-serif text-2xl mb-6">{faq.question}</h3>
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
