"use client";

import { PERFORMANCE_STATS, TALENT_LIST } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  ResponsiveContainer 
} from "recharts";
import { Award, Zap, Heart, Coffee } from "lucide-react";

export default function PerformancePage() {
  return (
    <div className="space-y-16">
      <header className="flex flex-col gap-4">
        <p className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">
          Organizational Velocity
        </p>
        <h1 className="font-playfair text-6xl tracking-tighter leading-none">
          Performance <span className="italic">Metrics</span>
        </h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Institutional Radar */}
        <div className="p-12 border border-border/50 bg-card flex flex-col items-center">
          <div className="w-full mb-12">
            <h3 className="font-playfair text-3xl tracking-tight mb-2">Institutional Balance</h3>
            <p className="text-sm text-muted-foreground">Aggregated performance across core strategic pillars.</p>
          </div>
          
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={PERFORMANCE_STATS}>
                <PolarGrid stroke="var(--color-border)" />
                <PolarAngleAxis 
                  dataKey="category" 
                  tick={{ fill: "var(--color-muted-foreground)", fontSize: 10, fontWeight: "bold" }} 
                />
                <Radar
                  name="Organization"
                  dataKey="score"
                  stroke="var(--color-primary)"
                  fill="var(--color-primary)"
                  fillOpacity={0.4}
                  animationDuration={2500}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Elite Performers */}
        <div className="space-y-8">
          <h3 className="font-playfair text-3xl tracking-tight italic">Top Institutional Contributors</h3>
          
          <div className="space-y-4">
            {TALENT_LIST.slice(0, 4).map((talent) => (
              <div 
                key={talent.id}
                className="p-6 border border-border/50 bg-card hover:border-primary/50 transition-all duration-500 flex items-center justify-between group"
              >
                <div className="flex items-center gap-6">
                  <img src={talent.image} className="w-12 h-12 rounded-full grayscale group-hover:grayscale-0 transition-all" alt="" />
                  <div>
                    <h4 className="font-bold tracking-tight">{talent.name}</h4>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">{talent.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-playfair text-2xl tracking-tighter text-primary">{talent.score.toFixed(1)}</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Score Index</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 bg-muted/50 border border-border/50">
            <div className="flex items-center gap-4 mb-4">
              <Award className="w-5 h-5 text-primary" />
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold">Annual Recognition</h4>
            </div>
            <p className="text-sm italic leading-relaxed text-muted-foreground">
              Institutional performance is currently exceeding the 2026 strategic baseline by 14.2%. The 'Innovation' pillar shows the strongest growth trajectory.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
