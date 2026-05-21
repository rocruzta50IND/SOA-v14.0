"use client";

import { 
  User, 
  Bell, 
  Lock, 
  Key, 
  CreditCard, 
  Users, 
  Globe, 
  Database,
  ChevronRight,
  Save
} from "lucide-react";
import { cn } from "@/lib/utils";

const SETTINGS_SECTIONS = [
  { id: 'profile', label: 'Profile Settings', icon: User, description: 'Manage your personal information and avatar.' },
  { id: 'security', label: 'Security & Auth', icon: Lock, description: 'Configure 2FA, password, and session management.' },
  { id: 'billing', label: 'Billing & Plans', icon: CreditCard, description: 'Manage subscriptions, payment methods, and invoices.' },
  { id: 'team', label: 'Team Management', icon: Users, description: 'Invite team members and manage role-based access.' },
  { id: 'api', label: 'API Keys', icon: Key, description: 'Generate and manage API keys for external integrations.' },
  { id: 'notifications', label: 'Notifications', icon: Bell, description: 'Configure email and system alert preferences.' },
];

export default function SettingsPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            Settings
          </h1>
          <p className="text-muted-foreground">Configure your infrastructure and account preferences.</p>
        </div>
        <button className="bg-primary text-white hover:bg-primary/90 shadow-[0_0_20px_rgba(79,70,229,0.3)] rounded-xl px-5 py-2.5 font-medium transition-all flex items-center gap-2">
          <Save size={18} /> Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Navigation Sidebar (Mobile Horizontal, Desktop Vertical) */}
        <div className="lg:col-span-1 space-y-2">
          {SETTINGS_SECTIONS.map((section) => (
            <button 
              key={section.id}
              className={cn(
                "w-full flex items-center justify-between p-3 rounded-xl border transition-all duration-200 group",
                section.id === 'profile' 
                  ? "bg-primary/10 border-primary/20 text-white" 
                  : "bg-white/5 border-transparent text-muted-foreground hover:bg-white/10 hover:text-white"
              )}
            >
              <div className="flex items-center gap-3">
                <section.icon size={18} className={section.id === 'profile' ? "text-primary" : "group-hover:text-primary transition-colors"} />
                <span className="text-sm font-medium">{section.label}</span>
              </div>
              <ChevronRight size={14} className={cn("transition-transform", section.id === 'profile' ? "rotate-90 text-primary" : "group-hover:translate-x-1")} />
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3 space-y-8">
          
          {/* Profile Section */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Account Profile</h3>
              <p className="text-sm text-muted-foreground">Update your personal information and how others see you.</p>
            </div>

            <div className="flex items-center gap-8">
              <div className="relative group">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-primary/30 border-2 border-white/10 flex items-center justify-center relative overflow-hidden group-hover:border-primary transition-all shadow-xl shadow-primary/10">
                  <User size={40} className="text-white" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">Change</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Full Name</label>
                    <input 
                      type="text" 
                      defaultValue="Rodrigo Forge" 
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all text-white"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Email Address</label>
                    <input 
                      type="email" 
                      defaultValue="rodrigo@stratovive.io" 
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all text-white"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/5 space-y-6">
              <div>
                <h4 className="text-sm font-bold text-white mb-1">Regional Preferences</h4>
                <p className="text-xs text-muted-foreground">Default deployment regions and currency settings.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs text-muted-foreground">Preferred Region</label>
                  <div className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-2 text-sm text-white flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-2">
                      <Globe size={14} className="text-primary" /> US East (N. Virginia)
                    </div>
                    <ChevronRight size={14} className="rotate-90" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-muted-foreground">Default Currency</label>
                  <div className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-2 text-sm text-white flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-2">
                      <Database size={14} className="text-primary" /> USD ($) - US Dollar
                    </div>
                    <ChevronRight size={14} className="rotate-90" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="bg-red-500/5 border border-red-500/10 rounded-2xl p-8">
            <h3 className="text-lg font-bold text-red-500 mb-2">Danger Zone</h3>
            <p className="text-sm text-muted-foreground mb-6">Permanently delete your account and all associated infrastructure data.</p>
            <button className="px-4 py-2 rounded-xl border border-red-500/20 text-red-500 text-sm font-medium hover:bg-red-500/10 transition-all">
              Delete StratoVive Account
            </button>
          </div>

        </div>
      </div>
    </>
  );
}
