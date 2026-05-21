/**
 * AETHERIS INSIGHT - CENTRAL MOCK DATABASE (DTO PATTERN)
 * This file prepares the data boundaries for future backend integration.
 */

// --- TYPES & INTERFACES ---

export interface KPIStatus {
  label: string;
  value: string;
  trend: number; // Percentage
  trendLabel: string;
}

export interface ChartDataPoint {
  date: string;
  value: number;
  secondaryValue?: number;
}

export interface RealTimeEvent {
  id: string;
  timestamp: string;
  event: string;
  location: string;
  status: 'active' | 'processed' | 'flagged';
}

export interface PredictionModel {
  id: string;
  name: string;
  accuracy: number;
  lastRun: string;
  status: 'optimal' | 'training' | 'drift-detected';
  impact: string;
}

export interface UserSegment {
  id: string;
  name: string;
  size: number;
  growth: number;
  behavior: string;
}

export interface ExportJob {
  id: string;
  name: string;
  type: 'PDF' | 'CSV' | 'JSON' | 'XLSX';
  date: string;
  status: 'completed' | 'processing' | 'failed';
  size: string;
}

// --- MOCK DATA ---

export const DASHBOARD_KPIS: KPIStatus[] = [
  { label: "Total Revenue", value: "$4.2M", trend: 12.5, trendLabel: "vs last month" },
  { label: "Active Nodes", value: "1,284", trend: 5.2, trendLabel: "vs last week" },
  { label: "Predictive Accuracy", value: "98.4%", trend: 1.1, trendLabel: "vs last run" },
  { label: "Data Velocity", value: "42 GB/s", trend: -2.4, trendLabel: "vs average" },
];

export const REVENUE_CHART: ChartDataPoint[] = [
  { date: "Jan", value: 400, secondaryValue: 240 },
  { date: "Feb", value: 300, secondaryValue: 139 },
  { date: "Mar", value: 200, secondaryValue: 980 },
  { date: "Apr", value: 278, secondaryValue: 390 },
  { date: "May", value: 189, secondaryValue: 480 },
  { date: "Jun", value: 239, secondaryValue: 380 },
  { date: "Jul", value: 349, secondaryValue: 430 },
];

export const REAL_TIME_EVENTS: RealTimeEvent[] = [
  { id: "EV-001", timestamp: "10:42:15", event: "API Request Cluster Alpha", location: "Tokyo, JP", status: "active" },
  { id: "EV-002", timestamp: "10:42:12", event: "User Authentication Sync", location: "New York, US", status: "processed" },
  { id: "EV-003", timestamp: "10:41:58", event: "Anomaly Detected: Latency Spike", location: "London, UK", status: "flagged" },
  { id: "EV-004", timestamp: "10:41:45", event: "Database Replication", location: "Frankfurt, DE", status: "processed" },
  { id: "EV-005", timestamp: "10:41:30", event: "Edge Cache Invalidation", location: "Singapore, SG", status: "active" },
];

export const PREDICTIVE_MODELS: PredictionModel[] = [
  { id: "MDL-A1", name: "Churn Propensity V4", accuracy: 94.2, lastRun: "2h ago", status: "optimal", impact: "High" },
  { id: "MDL-A2", name: "Revenue Forecast Q3", accuracy: 89.5, lastRun: "1d ago", status: "training", impact: "Critical" },
  { id: "MDL-B1", name: "LTV Projection", accuracy: 91.8, lastRun: "6h ago", status: "optimal", impact: "Medium" },
  { id: "MDL-C4", name: "Anomaly Detection Engine", accuracy: 99.1, lastRun: "12m ago", status: "drift-detected", impact: "High" },
];

export const USER_SEGMENTS: UserSegment[] = [
  { id: "SEG-1", name: "Enterprise Whales", size: 1240, growth: 15.2, behavior: "High Engagement" },
  { id: "SEG-2", name: "Early Adopters", size: 8400, growth: 22.1, behavior: "Feature Focused" },
  { id: "SEG-3", name: "At-Risk Churn", size: 450, growth: -5.4, behavior: "Low Frequency" },
  { id: "SEG-4", name: "Trial Conversions", size: 2300, growth: 12.8, behavior: "Exploring" },
];

export const EXPORT_HISTORY: ExportJob[] = [
  { id: "EXP-88", name: "Quarterly Financial Audit", type: "PDF", date: "2026-05-20", status: "completed", size: "12.4 MB" },
  { id: "EXP-87", name: "User Behavior Raw Data", type: "JSON", date: "2026-05-19", status: "completed", size: "1.2 GB" },
  { id: "EXP-86", name: "Predictive Trends Report", type: "CSV", date: "2026-05-18", status: "failed", size: "0 KB" },
  { id: "EXP-85", name: "Segment Analysis Deep-Dive", type: "XLSX", date: "2026-05-17", status: "completed", size: "45.2 MB" },
];
