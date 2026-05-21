"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { User, Shield, Bell, Zap, Globe, Save } from "lucide-react";

const itemVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  },
};

const settingsSections = [
  {
    title: "Profile Intelligence",
    description: "Manage your professional identity and credentials.",
    icon: User,
    fields: [
      { label: "Full Name", value: "Dr. Julian Vance" },
      { label: "Designation", value: "Senior Associate, Corporate Law" },
      { label: "Email", value: "j.vance@lexislux.pro" },
    ]
  },
  {
    title: "Security & Access",
    description: "Multi-factor authentication and vault security settings.",
    icon: Shield,
    fields: [
      { label: "Authentication", value: "Hardware Key Enabled" },
      { label: "Last Login", value: "2 hours ago from Zurich, CH" },
    ]
  },
  {
    title: "Intelligence Alerts",
    description: "Configure real-time monitoring for case updates.",
    icon: Bell,
    fields: [
      { label: "Email Notifications", value: "High Priority Only" },
      { label: "Slack Integration", value: "Active - Workspace 'LegalElite'" },
    ]
  }
];

export default function SettingsPage() {
  return (
    <motion.div 
      initial="initial"
      animate="animate"
      className="space-y-16 pb-20"
    >
      {/* Header Section */}
      <motion.div variants={itemVariants} className="flex justify-between items-end">
        <div className="space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Configuration
          </span>
          <h2 className="font-serif text-5xl font-bold tracking-tighter">System Settings</h2>
        </div>
        
        <button className="bg-foreground text-background hover:opacity-80 rounded-full px-10 py-4 text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-500 flex items-center gap-3">
          <Save className="w-4 h-4" />
          Synchronize
        </button>
      </motion.div>

      {/* Settings Sections */}
      <div className="space-y-24">
        {settingsSections.map((section, idx) => (
          <motion.div key={idx} variants={itemVariants} className="grid md:grid-cols-3 gap-12 pt-12 border-t border-border/50">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <section.icon className="w-5 h-5" />
                <h3 className="font-serif text-2xl font-bold">{section.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[280px]">
                {section.description}
              </p>
            </div>
            
            <div className="md:col-span-2 space-y-8">
              {section.fields.map((field, fIdx) => (
                <div key={fIdx} className="space-y-2 group">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    {field.label}
                  </label>
                  <div className="flex items-center justify-between pb-4 border-b border-border/30 group-focus-within:border-primary transition-colors">
                    <p className="text-lg font-medium tracking-tight">{field.value}</p>
                    <button className="text-[10px] font-bold uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Advanced Tools */}
      <motion.div variants={itemVariants} className="p-12 border border-border/50 bg-muted/30">
        <div className="flex items-center gap-4 mb-8">
          <Zap className="w-5 h-5 text-primary" />
          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em]">Developer & API Access</h4>
        </div>
        <p className="text-sm text-muted-foreground mb-8 max-w-2xl">
          Access your platform API keys and webhook configurations for custom integration with external legal research engines and firm databases.
        </p>
        <div className="flex gap-4">
          <button className="px-8 py-3 border border-border/50 text-[10px] font-bold uppercase tracking-widest hover:bg-background transition-colors">
            Manage Keys
          </button>
          <button className="px-8 py-3 border border-border/50 text-[10px] font-bold uppercase tracking-widest hover:bg-background transition-colors">
            Documentation
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
