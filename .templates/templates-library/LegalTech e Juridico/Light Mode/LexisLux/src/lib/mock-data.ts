/**
 * LEXISLUX CENTRAL MOCK DATABASE
 * This file defines the DTOs and realistic data for the LexisLux internal dashboard.
 * Designed for Tier 3 (Boutique / High-Ticket Legal Intelligence).
 */

export interface Case {
  id: string;
  reference: string;
  title: string;
  client: string;
  status: 'active' | 'pending' | 'resolved';
  value: number;
  priority: 'low' | 'medium' | 'high';
  date: string;
}

export interface Client {
  id: string;
  name: string;
  industry: string;
  totalRevenue: number;
  status: 'active' | 'inactive';
  contact: string;
}

export interface Invoice {
  id: string;
  caseRef: string;
  amount: number;
  status: 'paid' | 'unpaid' | 'overdue';
  dueDate: string;
}

export interface ChartData {
  month: string;
  revenue: number;
  cases: number;
}

export const MOCK_CASES: Case[] = [
  { id: "1", reference: "LL-2024-001", title: "Merger & Acquisition: Solaris Corp vs Luna Tech", client: "Solaris Corp", status: "active", value: 4500000, priority: "high", date: "2024-05-12" },
  { id: "2", reference: "LL-2024-002", title: "Intellectual Property Dispute: Arcanum AI", client: "Arcanum AI", status: "pending", value: 1200000, priority: "high", date: "2024-05-14" },
  { id: "3", reference: "LL-2024-003", title: "Corporate Restructuring: Veloce Group", client: "Veloce Group", status: "resolved", value: 850000, priority: "medium", date: "2024-04-20" },
  { id: "4", reference: "LL-2024-004", title: "Employment Liability: Global Logistics Ltd", client: "Global Logistics Ltd", status: "active", value: 320000, priority: "low", date: "2024-05-10" },
  { id: "5", reference: "LL-2024-005", title: "Strategic Investment: Sovereign Wealth Fund", client: "Sovereign Wealth Fund", status: "active", value: 12000000, priority: "high", date: "2024-05-18" },
  { id: "6", reference: "LL-2024-006", title: "Real Estate Acquisition: Mayfair Plaza", client: "Mayfair Holdings", status: "pending", value: 2750000, priority: "medium", date: "2024-05-19" },
];

export const MOCK_CLIENTS: Client[] = [
  { id: "C1", name: "Solaris Corp", industry: "Renewable Energy", totalRevenue: 15400000, status: "active", contact: "marcus.v@solaris.com" },
  { id: "C2", name: "Arcanum AI", industry: "Technology / AI", totalRevenue: 2300000, status: "active", contact: "elara.s@arcanum.ai" },
  { id: "C3", name: "Veloce Group", industry: "Logistics", totalRevenue: 4500000, status: "active", contact: "jean.p@veloce.com" },
  { id: "C4", name: "Global Logistics Ltd", industry: "Shipping", totalRevenue: 890000, status: "inactive", contact: "sarah.k@globallog.com" },
  { id: "C5", name: "Sovereign Wealth Fund", industry: "Finance", totalRevenue: 45000000, status: "active", contact: "ahmed.m@swf.gov" },
];

export const MOCK_BILLING: Invoice[] = [
  { id: "INV-001", caseRef: "LL-2024-001", amount: 125000, status: "paid", dueDate: "2024-05-01" },
  { id: "INV-002", caseRef: "LL-2024-002", amount: 45000, status: "unpaid", dueDate: "2024-05-30" },
  { id: "INV-003", caseRef: "LL-2024-005", amount: 300000, status: "unpaid", dueDate: "2024-06-15" },
  { id: "INV-004", caseRef: "LL-2024-003", amount: 15000, status: "paid", dueDate: "2024-04-15" },
  { id: "INV-005", caseRef: "LL-2024-004", amount: 8000, status: "overdue", dueDate: "2024-05-05" },
];

export const MOCK_CHART_DATA: ChartData[] = [
  { month: "Jan", revenue: 450000, cases: 12 },
  { month: "Feb", revenue: 520000, cases: 15 },
  { month: "Mar", revenue: 480000, cases: 14 },
  { month: "Apr", revenue: 610000, cases: 18 },
  { month: "May", revenue: 750000, cases: 22 },
  { month: "Jun", revenue: 890000, cases: 25 },
];

export const MOCK_DASHBOARD_STATS = {
  activeAUM: 254000000,
  pendingRevenue: 3450000,
  activeCases: 42,
  clientSatisfaction: 98.4,
};
