"use client";

import Link from "next/link";
import { Shield, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegisterPage() {
  const benefits = [
    "Institutional-grade security",
    "Real-time liquidity management",
    "Automated compliance reporting",
    "Dedicated account manager",
  ];

  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-primary" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Shield className="mr-2 h-6 w-6" />
          Nexos Enterprise
        </div>
        <div className="relative z-20 mt-auto">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">
              Scale your digital asset operations with confidence.
            </h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-sm">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary-foreground/70" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an enterprise account
            </h1>
            <p className="text-sm text-muted-foreground">
              Join the world&apos;s leading institutions managing digital assets
            </p>
          </div>
          <div className="grid gap-6">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="John" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Doe" required />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" placeholder="Acme Inc." required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Work Email</Label>
                  <Input
                    id="email"
                    placeholder="name@company.com"
                    type="email"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" required />
                </div>
                <Button asChild className="w-full mt-2">
                  <Link href="/dashboard">Create Account</Link>
                </Button>
              </div>
            </form>
          </div>
          <p className="px-8 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className="underline underline-offset-4 hover:text-primary"
            >
              Sign in
            </Link>
          </p>
          <p className="px-8 text-center text-[10px] text-muted-foreground uppercase tracking-widest">
            By clicking continue, you agree to our{" "}
            <Link href="/terms" className="hover:text-primary">Terms of Service</Link> and{" "}
            <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
