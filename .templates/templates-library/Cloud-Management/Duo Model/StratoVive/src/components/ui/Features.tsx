"use client";

import { motion } from "framer-motion";
import { Cloud, Shield, Zap, BarChart3, Globe, Cpu } from "lucide-react";

const features = [
  {
    title: "Global Distribution",
    description: "Deploy workloads to over 300 edge locations worldwide with millisecond latency.",
    icon: Globe,
  },
  {
    title: "Military-Grade Security",
    description: "Automatic TLS, DDoS protection, and isolated runtime environments by default.",
    icon: Shield,
  },
  {
    title: "Instant Scalability",
    description: "Auto-scaling groups that respond to traffic spikes in real-time without manual intervention.",
    icon: Zap,
  },
  {
    title: "Advanced Analytics",
    description: "Deep observability into every request, CPU cycle, and network packet across your stack.",
    icon: BarChart3,
  },
  {
    title: "Hybrid Cloud Mesh",
    description: "Seamlessly bridge on-premise infrastructure with multiple public cloud providers.",
    icon: Cloud,
  },
  {
    title: "Bare Metal Power",
    description: "The performance of bare metal with the flexibility of serverless orchestration.",
    icon: Cpu,
  },
];

export function Features() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Engineered for Reliability</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to manage complex cloud ecosystems at any scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 30, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-white/20 hover:bg-white/10 transition-all shadow-xl"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
