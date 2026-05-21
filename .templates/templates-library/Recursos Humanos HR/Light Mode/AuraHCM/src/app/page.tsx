"use client";

import { Hero } from "@/components/ui/Hero";
import { SocialProof } from "@/components/ui/SocialProof";
import { Features } from "@/components/ui/Features";
import { Showcase } from "@/components/ui/Showcase";
import { Pricing } from "@/components/ui/Pricing";
import { FAQ } from "@/components/ui/FAQ";
import { CTA } from "@/components/ui/CTA";
import { Footer } from "@/components/ui/Footer";

export default function LandingPage() {
  return (
    <main className="bg-background">
      <Hero />
      <SocialProof />
      <Features />
      <Showcase />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
