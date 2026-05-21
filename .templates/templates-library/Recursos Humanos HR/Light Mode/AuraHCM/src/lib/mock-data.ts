/**
 * AURAHCM MOCK DATABASE & DTOs
 * Tier 3 Boutique / Awwwards Persona
 */

// --- DTOs ---

export interface Metric {
  label: string;
  value: string | number;
  change: number;
  trend: "up" | "down" | "neutral";
}

export interface ChartDataPoint {
  date: string;
  value: number;
}

export interface Talent {
  id: string;
  name: string;
  role: string;
  department: string;
  status: "active" | "on-leave" | "remote";
  image: string;
  score: number;
}

export interface PerformanceMetric {
  category: string;
  score: number;
  fullMark: number;
}

export interface JobOpening {
  id: string;
  title: string;
  applicants: number;
  stage: string;
  urgency: "high" | "medium" | "low";
}

export interface CompensationRecord {
  id: string;
  employee: string;
  amount: string;
  status: "paid" | "pending";
  date: string;
}

// --- MOCK DATA ---

export const DASHBOARD_METRICS: Metric[] = [
  { label: "Total Capital", value: "2.4M", change: 12.5, trend: "up" },
  { label: "Talent Retention", value: "98.2%", change: 2.1, trend: "up" },
  { label: "Open Positions", value: 14, change: -4, trend: "down" },
  { label: "Monthly Growth", value: "8.4%", change: 0.5, trend: "neutral" },
];

export const RETENTION_CHART_DATA: ChartDataPoint[] = [
  { date: "Jan", value: 95 },
  { date: "Feb", value: 96 },
  { date: "Mar", value: 95.5 },
  { date: "Apr", value: 97 },
  { date: "May", value: 98 },
  { date: "Jun", value: 98.2 },
];

export const TALENT_LIST: Talent[] = [
  { id: "1", name: "Alexander Thorne", role: "Principal Architect", department: "Engineering", status: "active", image: "https://i.pravatar.cc/150?u=1", score: 9.8 },
  { id: "2", name: "Elena Volkov", role: "Lead Designer", department: "Creative", status: "remote", image: "https://i.pravatar.cc/150?u=2", score: 9.9 },
  { id: "3", name: "Marcus Chen", role: "VP of Product", department: "Management", status: "active", image: "https://i.pravatar.cc/150?u=3", score: 9.5 },
  { id: "4", name: "Sophia Loren", role: "Senior Analyst", department: "Finance", status: "on-leave", image: "https://i.pravatar.cc/150?u=4", score: 9.2 },
  { id: "5", name: "Julian Pierce", role: "Data Scientist", department: "R&D", status: "active", image: "https://i.pravatar.cc/150?u=5", score: 9.7 },
  { id: "6", name: "Isabella Cruz", role: "Operations Lead", department: "Operations", status: "remote", image: "https://i.pravatar.cc/150?u=6", score: 9.4 },
];

export const PERFORMANCE_STATS: PerformanceMetric[] = [
  { category: "Innovation", score: 120, fullMark: 150 },
  { category: "Execution", score: 98, fullMark: 150 },
  { category: "Collaboration", score: 86, fullMark: 150 },
  { category: "Leadership", score: 99, fullMark: 150 },
  { category: "Adaptability", score: 85, fullMark: 150 },
];

export const JOB_OPENINGS: JobOpening[] = [
  { id: "j1", title: "Global Design Director", applicants: 42, stage: "Interview", urgency: "high" },
  { id: "j2", title: "Senior Rust Engineer", applicants: 128, stage: "Technical Test", urgency: "high" },
  { id: "j3", title: "Product Marketing Lead", applicants: 15, stage: "Sourcing", urgency: "medium" },
  { id: "j4", title: "Operations Manager", applicants: 89, stage: "Final Round", urgency: "low" },
];

export const COMPENSATION_HISTORY: CompensationRecord[] = [
  { id: "c1", employee: "Alexander Thorne", amount: "$18,500.00", status: "paid", date: "May 20, 2026" },
  { id: "c2", employee: "Elena Volkov", amount: "$16,200.00", status: "paid", date: "May 20, 2026" },
  { id: "c3", employee: "Marcus Chen", amount: "$22,000.00", status: "pending", date: "May 21, 2026" },
  { id: "c4", employee: "Sophia Loren", amount: "$12,400.00", status: "paid", date: "May 20, 2026" },
  { id: "c5", employee: "Julian Pierce", amount: "$14,800.00", status: "paid", date: "May 20, 2026" },
];
