"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
}

export function Button({ 
  className, 
  variant = "primary", 
  ...props 
}: ButtonProps) {
  const variants = {
    primary: "bg-foreground text-background hover:opacity-80",
    outline: "border border-border/50 bg-transparent text-foreground hover:bg-muted",
    ghost: "bg-transparent text-foreground hover:bg-muted",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full transition-all duration-500",
        "px-10 py-4 text-sm font-medium tracking-[0.2em] uppercase",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
