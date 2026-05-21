import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/ui/Hero";
import { SocialProof } from "@/components/ui/SocialProof";
import { BentoFeatures } from "@/components/ui/BentoFeatures";
import { Showcase } from "@/components/ui/Showcase";
import { Pricing } from "@/components/ui/Pricing";
import { FAQ } from "@/components/ui/FAQ";
import { FinalCTA } from "@/components/ui/FinalCTA";
import { Footer } from "@/components/ui/Footer";

export default function LandingPage() {
  return (
    <main className="relative flex flex-col">
      <Navbar />
      <Hero />
      <SocialProof />
      <BentoFeatures />
      <Showcase />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
