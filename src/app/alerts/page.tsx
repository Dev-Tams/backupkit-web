import { PageHeader } from "@/components/PageHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { alerts, databases } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";

const typeLabel: Record<string, string> = {
  backup_failed: "Backup failed",
  backup_missed: "Backup missed",
  size_anomaly: "Size anomaly",
};

export default function AlertsPage() {
  const criticalCount = alerts.filter((alert) => alert.severity === "critical").length;

  return (
    <div className="space-y-8">
      <PageHeader
        title="Alerts"
        subtitle="Failures and anomalies that need review."
        actions={
          <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100">
            Mark all acknowledged
          </button>
        }
      />

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-700">Critical</p>
          <p className="mt-2 font-display text-3xl font-semibold text-rose-900">{criticalCount}</p>
        </div>
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">Warnings</p>
          <p className="mt-2 font-display text-3xl font-semibold text-amber-900">{alerts.length - criticalCount}</p>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Open alerts</p>
          <p className="mt-2 font-display text-3xl font-semibold text-slate-900">{alerts.length}</p>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-100 bg-white p-5">
        <h2 className="font-display text-lg font-semibold text-slate-900">Alert feed</h2>
        <div className="mt-4 space-y-3">
          {alerts.map((alert) => {
            const db = databases.find((item) => item.id === alert.databaseId);
            return (
              <div
                key={alert.id}
                className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{db?.name ?? "Unknown database"}</p>
                    <p className="text-xs text-slate-500">{typeLabel[alert.type] ?? alert.type}</p>
                  </div>
                  <StatusBadge tone={alert.severity === "critical" ? "failure" : "warning"} label={alert.severity} />
                </div>
                <p className="mt-2 text-sm text-slate-700">{alert.message}</p>
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                  <p className="text-xs text-slate-500">{formatDate(alert.createdAt)}</p>
                  <button className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-white">
                    Acknowledge
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
