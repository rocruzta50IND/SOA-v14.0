"use client";

import { motion } from "framer-motion";
import { User, Shield, Bell, CreditCard, ExternalLink } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="max-w-4xl space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">System Settings</h1>
        <p className="text-muted-foreground mt-1">Manage your enterprise account and security preferences.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar Nav */}
        <div className="space-y-1">
          {[
            { label: "Profile", icon: User, active: true },
            { label: "Security", icon: Shield, active: false },
            { label: "Notifications", icon: Bell, active: false },
            { label: "Billing", icon: CreditCard, active: false },
          ].map((item) => (
            <button
              key={item.label}
              className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                item.active 
                  ? "bg-primary text-primary-foreground" 
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="md:col-span-3 space-y-6">
          
          {/* Section: Profile */}
          <div className="rounded-md border border-border bg-background p-6 shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">Personal Identity</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Rodrigo Lima" 
                    className="w-full h-10 rounded-md border border-border bg-background px-3 text-sm outline-none focus:border-primary" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Professional Email</label>
                  <input 
                    type="email" 
                    placeholder="rodrigo@nexos.enterprise" 
                    className="w-full h-10 rounded-md border border-border bg-background px-3 text-sm outline-none focus:border-primary" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Biography / Status</label>
                <textarea 
                  placeholder="Enterprise administrator for the Nexos Fintech platform." 
                  rows={3}
                  className="w-full rounded-md border border-border bg-background p-3 text-sm outline-none focus:border-primary"
                />
              </div>
            </div>
          </div>

          {/* Section: Security */}
          <div className="rounded-md border border-border bg-background p-6 shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">Access Control</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-md border border-border bg-muted/30">
                <div>
                  <div className="text-sm font-bold">Two-Factor Authentication</div>
                  <div className="text-xs text-muted-foreground mt-0.5">Add an extra layer of security to your account.</div>
                </div>
                <button className="rounded-md bg-primary text-primary-foreground px-4 py-1.5 text-xs font-bold uppercase tracking-widest hover:opacity-90">
                  Enable
                </button>
              </div>
              <div className="flex items-center justify-between p-4 rounded-md border border-border bg-muted/30">
                <div>
                  <div className="text-sm font-bold">API Access Tokens</div>
                  <div className="text-xs text-muted-foreground mt-0.5">Manage keys for external programmatic access.</div>
                </div>
                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:underline">
                  Configure <ExternalLink className="h-3 w-3" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3">
             <button className="px-4 py-2 text-sm font-medium hover:underline">Discard Changes</button>
             <button className="rounded-md bg-primary text-primary-foreground px-6 py-2 text-sm font-bold uppercase tracking-widest hover:opacity-90 shadow-sm">
               Update Profile
             </button>
          </div>

        </div>
      </div>
    </div>
  );
}
