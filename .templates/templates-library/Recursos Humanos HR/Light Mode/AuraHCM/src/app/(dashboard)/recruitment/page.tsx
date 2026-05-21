"use client";

import { JOB_OPENINGS } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { Plus, Briefcase, Users, Clock, ArrowRight } from "lucide-react";

export default function RecruitmentPage() {
  return (
    <div className="space-y-16">
      <header className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-col gap-4">
          <p className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">
            Strategic Acquisition
          </p>
          <h1 className="font-playfair text-6xl tracking-tighter leading-none">
            Recruitment <span className="italic">Pipeline</span>
          </h1>
        </div>
        
        <button className="bg-foreground text-background hover:opacity-80 rounded-full px-8 py-4 text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-500 flex items-center gap-3">
          <Plus className="w-4 h-4" />
          Initiate New Search
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Pipeline Summary */}
        <div className="lg:col-span-1 space-y-8">
          <div className="p-8 border border-border/50 bg-card">
            <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-4">Total Active Roles</p>
            <p className="font-playfair text-5xl tracking-tighter">14</p>
          </div>
          <div className="p-8 border border-border/50 bg-card">
            <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-4">Total Applicants</p>
            <p className="font-playfair text-5xl tracking-tighter">274</p>
          </div>
          <div className="p-8 border border-border/50 bg-primary text-primary-foreground">
            <p className="text-[10px] uppercase tracking-widest font-bold opacity-70 mb-4">Interviews Today</p>
            <p className="font-playfair text-5xl tracking-tighter">03</p>
          </div>
        </div>

        {/* Job List */}
        <div className="lg:col-span-3 space-y-6">
          <h3 className="font-playfair text-3xl tracking-tight">Active Executive Searches</h3>
          
          <div className="grid grid-cols-1 gap-4">
            {JOB_OPENINGS.map((job) => (
              <div 
                key={job.id}
                className="group p-8 border border-border/50 bg-card hover:border-primary/50 transition-all duration-700 flex flex-col md:flex-row md:items-center justify-between gap-8"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-muted flex items-center justify-center rounded-full border border-border/50">
                    <Briefcase className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h4 className="font-playfair text-2xl tracking-tight group-hover:text-primary transition-colors">{job.title}</h4>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                        <Users className="w-3 h-3" />
                        {job.applicants} Applicants
                      </span>
                      <span className="w-1 h-1 bg-border rounded-full" />
                      <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {job.stage}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-8">
                  <div className="text-right hidden md:block">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-1">Priority</p>
                    <span className={cn(
                      "px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold",
                      job.urgency === "high" ? "bg-rose-50 text-rose-600" :
                      job.urgency === "medium" ? "bg-amber-50 text-amber-600" : "bg-blue-50 text-blue-600"
                    )}>
                      {job.urgency}
                    </span>
                  </div>
                  <button className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center hover:bg-foreground hover:text-background transition-all group-hover:translate-x-2">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
