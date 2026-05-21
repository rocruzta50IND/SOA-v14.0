import { Sidebar } from "@/components/ui/Sidebar";
import { Header } from "@/components/ui/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar />
      <div className="pl-72 pt-24">
        <Header />
        <main className="p-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out">
          {children}
        </main>
      </div>
    </div>
  );
}
