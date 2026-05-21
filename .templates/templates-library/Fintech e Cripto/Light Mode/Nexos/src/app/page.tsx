"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Shield, 
  Zap, 
  BarChart3, 
  Lock, 
  Globe, 
  ArrowRight, 
  Check, 
  Plus,
  Minus,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Mock Data for the Showcase Chart
const chartData = [
  { date: "2026-01", value: 4500000 },
  { date: "2026-02", value: 5200000 },
  { date: "2026-03", value: 4800000 },
  { date: "2026-04", value: 6100000 },
  { date: "2026-05", value: 5900000 },
  { date: "2026-06", value: 7200000 },
  { date: "2026-07", value: 8500000 },
];

const logos = [
  "GlobalCorp", "TechFlow", "Nexus", "Aetheris", "Veloce", "Lumina"
];

const features = [
  {
    title: "Institutional Custody",
    description: "MPC-based multi-signature security for enterprise-grade asset protection.",
    icon: Shield,
  },
  {
    title: "Real-time Settlement",
    description: "Execute cross-border transactions in seconds with automated liquidity routing.",
    icon: Zap,
  },
  {
    title: "Treasury Analytics",
    description: "Deep insights into your digital asset portfolio with real-time risk modeling.",
    icon: BarChart3,
  },
  {
    title: "Automated Compliance",
    description: "Built-in AML/KYC workflows and automated reporting for global regulations.",
    icon: Globe,
  },
  {
    title: "Smart Contract Guard",
    description: "Formal verification and real-time monitoring of all treasury interactions.",
    icon: Lock,
  },
  {
    title: "Unified API",
    description: "Seamlessly integrate with existing ERP and core banking systems.",
    icon: ExternalLink,
  },
];

const pricing = [
  {
    name: "Starter",
    price: "$2,500",
    description: "For emerging fintech companies scaling their operations.",
    features: ["Up to $10M AUM", "5 User Seats", "Standard MPC Wallet", "Email Support"],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Enterprise",
    price: "$10,000",
    description: "The gold standard for institutional digital asset management.",
    features: ["Unlimited AUM", "Unlimited Seats", "Custom MPC Policies", "24/7 Priority Support", "Dedicated Node"],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Custom",
    price: "Custom",
    description: "Tailored solutions for global banks and financial institutions.",
    features: ["White-label Solution", "On-premise Deployment", "Custom Integrations", "SLA Guarantee"],
    cta: "Contact Sales",
    popular: false,
  },
];

const faqs = [
  {
    question: "How does Nexos ensure the security of assets?",
    answer: "We use Multi-Party Computation (MPC) to eliminate single points of failure. Private keys are never reconstituted in a single location, and transactions require policy-based multi-signature approval."
  },
  {
    question: "Is Nexos compliant with global regulations?",
    answer: "Yes, Nexos is built with a compliance-first architecture. We provide automated AML/KYC screenings, Travel Rule compliance, and real-time reporting tools for various jurisdictions."
  },
  {
    question: "Can we integrate Nexos with our existing ERP?",
    answer: "Absolutely. Our Unified API and SDKs are designed for enterprise integration, supporting standard protocols and providing webhooks for real-time data synchronization."
  }
];

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="font-bold tracking-tight text-xl">Nexos</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link href="#features" className="hover:text-primary transition-colors">Features</Link>
            <Link href="#showcase" className="hover:text-primary transition-colors">Showcase</Link>
            <Link href="#pricing" className="hover:text-primary transition-colors">Pricing</Link>
            <Link href="#faq" className="hover:text-primary transition-colors">FAQ</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/login">Log in</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 md:py-32 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium"
              >
                <span className="text-primary mr-1">New:</span> V3 Engine is now live with 0.1s settlement.
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight"
              >
                The Enterprise Engine for <br /> Digital Asset Treasury
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.2 }}
                className="text-xl text-muted-foreground max-w-[700px]"
              >
                Nexos provides the infrastructure global institutions need to manage, settle, and scale their digital asset operations with military-grade security and total regulatory compliance.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 w-full justify-center"
              >
                <Button size="lg" className="px-8" asChild>
                  <Link href="/register">Request Demo <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="px-8" asChild>
                  <Link href="#showcase">View Architecture</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-12 border-b border-border bg-muted/30">
          <div className="container mx-auto px-4">
            <p className="text-center text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-8">
              Trusted by leading global institutions
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {logos.map((logo) => (
                <span key={logo} className="text-xl font-bold opacity-30 grayscale hover:opacity-100 transition-opacity cursor-default">
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Features Bento Grid */}
        <section id="features" className="py-24 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-[10px] uppercase tracking-widest font-bold text-primary mb-4">Infrastructure</h2>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight">Built for Institutional Scale</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, i) => (
                <Card key={i} className="group hover:border-primary/50 transition-colors">
                  <CardContent className="p-8">
                    <feature.icon className="h-8 w-8 text-primary mb-6" />
                    <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Showcase Visual */}
        <section id="showcase" className="py-24 border-b border-border bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Unified Command Center</h2>
                <p className="text-lg text-muted-foreground">
                  Gain total visibility over your entire digital asset ecosystem. Manage multi-signature policies, monitor real-time flows, and generate compliance reports from a single, high-density dashboard.
                </p>
                <ul className="space-y-4">
                  {[
                    "Multi-tenant wallet architecture",
                    "Granular RBAC and policy engine",
                    "Automated gas management",
                    "Global liquidity aggregation"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-sm font-medium">
                      <div className="mr-3 h-5 w-5 rounded-full border border-primary/20 flex items-center justify-center">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="mt-4" asChild>
                  <Link href="/login">Explore the Dashboard <ChevronRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
              <div className="relative">
                <Card className="overflow-hidden border-2 border-border shadow-2xl">
                  <div className="h-12 border-b border-border bg-muted/50 flex items-center px-4 space-x-2">
                    <div className="w-3 h-3 rounded-full bg-border" />
                    <div className="w-3 h-3 rounded-full bg-border" />
                    <div className="w-3 h-3 rounded-full bg-border" />
                    <div className="ml-4 h-5 w-32 rounded bg-border/50" />
                  </div>
                  <CardContent className="p-0">
                    <div className="p-6 grid grid-cols-3 gap-4 border-b border-border">
                      {[
                        { label: "Total AUM", value: "$8.5B", trend: "+12.4%" },
                        { label: "Daily Vol", value: "$1.2B", trend: "+5.2%" },
                        { label: "Active Nodes", value: "24", trend: "Steady" },
                      ].map((stat, i) => (
                        <div key={i} className="space-y-1">
                          <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">{stat.label}</p>
                          <p className="text-lg font-bold">{stat.value}</p>
                          <p className="text-[10px] text-green-600 font-bold">{stat.trend}</p>
                        </div>
                      ))}
                    </div>
                    <div className="h-[300px] w-full p-6">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData}>
                          <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#000" stopOpacity={0.1}/>
                              <stop offset="95%" stopColor="#000" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                          <XAxis 
                            dataKey="date" 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{fontSize: 10, fill: '#888'}} 
                          />
                          <YAxis 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{fontSize: 10, fill: '#888'}} 
                            tickFormatter={(value) => `$${value/1000000}M`}
                          />
                          <Tooltip 
                            contentStyle={{borderRadius: '4px', border: '1px solid #e5e7eb', boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)'}}
                            itemStyle={{fontSize: '12px', fontWeight: 'bold'}}
                          />
                          <Area 
                            type="monotone" 
                            dataKey="value" 
                            stroke="#000" 
                            strokeWidth={2}
                            fillOpacity={1} 
                            fill="url(#colorValue)" 
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-[10px] uppercase tracking-widest font-bold text-primary mb-4">Pricing</h2>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight">Predictable Scale</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing.map((plan, i) => (
                <Card key={i} className={cn(
                  "relative flex flex-col h-full",
                  plan.popular && "border-primary border-2 shadow-lg scale-105 z-10"
                )}>
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                      Most Popular
                    </div>
                  )}
                  <CardContent className="p-8 flex-1">
                    <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
                    <div className="flex items-baseline mb-4">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      {plan.price !== "Custom" && <span className="text-muted-foreground ml-2">/month</span>}
                    </div>
                    <p className="text-sm text-muted-foreground mb-8">{plan.description}</p>
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-center text-sm">
                          <Check className="h-4 w-4 text-primary mr-3 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <div className="p-8 pt-0 mt-auto">
                    <Button variant={plan.popular ? "default" : "outline"} className="w-full" asChild>
                      <Link href="/register">{plan.cta}</Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 border-b border-border bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-[10px] uppercase tracking-widest font-bold text-primary mb-4">Support</h2>
                <h3 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h3>
              </div>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <Card key={i}>
                    <CardContent className="p-6">
                      <h4 className="text-lg font-bold mb-2">{faq.question}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 border-b border-border bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Ready to secure your treasury?</h2>
            <p className="text-xl opacity-80 max-w-[600px] mx-auto">
              Join the future of institutional finance today. Start your 14-day trial or schedule a deep-dive with our experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link href="/register">Get Started Now</Link>
              </Button>
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-6 w-6 text-primary" />
                <span className="font-bold tracking-tight text-xl">Nexos</span>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs">
                The leading institutional-grade infrastructure for digital asset management. Built for security, designed for compliance.
              </p>
            </div>
            <div>
              <h5 className="text-sm font-bold mb-4 uppercase tracking-widest text-[10px]">Product</h5>
              <ul className="space-y-2 text-sm text-muted-foreground font-medium">
                <li><Link href="#" className="hover:text-primary transition-colors">Infrastructure</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Custody</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Settlement</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Compliance</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-sm font-bold mb-4 uppercase tracking-widest text-[10px]">Company</h5>
              <ul className="space-y-2 text-sm text-muted-foreground font-medium">
                <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Legal</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-sm font-bold mb-4 uppercase tracking-widest text-[10px]">Resources</h5>
              <ul className="space-y-2 text-sm text-muted-foreground font-medium">
                <li><Link href="#" className="hover:text-primary transition-colors">Documentation</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">API Status</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Whitepapers</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Security</Link></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border gap-4">
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
              © 2026 Nexos Enterprise Inc. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Globe className="h-4 w-4" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Lock className="h-4 w-4" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Shield className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
