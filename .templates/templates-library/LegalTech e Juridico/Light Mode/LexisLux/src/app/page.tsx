import { Hero } from "@/components/ui/Landing/Hero";
import { SocialProof } from "@/components/ui/Landing/SocialProof";
import { Features } from "@/components/ui/Landing/Features";
import { Pricing } from "@/components/ui/Landing/Pricing";
import { FAQ } from "@/components/ui/Landing/FAQ";
import { Footer } from "@/components/ui/Landing/Footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <SocialProof />
      <Features />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
