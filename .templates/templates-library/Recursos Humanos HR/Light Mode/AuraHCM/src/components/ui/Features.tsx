"use client";

import { motion } from "framer-motion";
import { Users, Zap, BarChart3, Shield, Globe, Award } from "lucide-react";

const features = [
  {
    title: "Talent Cloud",
    description: "Unify your global workforce data in a single, high-fidelity source of truth.",
    icon: Users,
    size: "md"
  },
  {
    title: "Performance Intelligence",
    description: "Real-time AI-driven insights into employee growth and organizational health.",
    icon: Zap,
    size: "lg"
  },
  {
    title: "Global Compliance",
    description: "Automated legal orchestration across 140+ jurisdictions seamlessly.",
    icon: Shield,
    size: "md"
  },
  {
    title: "Predictive Analytics",
    description: "Foresee turnover trends and talent gaps before they impact your bottom line.",
    icon: BarChart3,
    size: "md"
  },
  {
    title: "Seamless Integration",
    description: "Connect your entire tech stack with our enterprise-grade API mesh.",
    icon: Globe,
    size: "md"
  },
  {
    title: "Award Winning UX",
    description: "Designed for the modern executive who demands beauty and performance.",
    icon: Award,
    size: "lg"
  }
];

export function Features() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary block mb-4">
            Our Architecture
          </span>
          <h2 className="font-serif text-5xl md:text-7xl tracking-tighter leading-none max-w-3xl">
            Precision tools for the modern <span className="italic">Enterprise.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`p-10 border border-border/50 bg-card hover:border-primary/30 transition-colors duration-500 flex flex-col justify-between min-h-[300px] ${
                feature.size === "lg" ? "md:col-span-2" : ""
              }`}
            >
              <feature.icon className="w-8 h-8 text-primary mb-8" />
              <div>
                <h3 className="font-serif text-2xl mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
