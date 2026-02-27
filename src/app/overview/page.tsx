import { PageHeader } from "@/components/PageHeader";
import { StatCard } from "@/components/StatCard";
import { StatusBadge } from "@/components/StatusBadge";
import { alerts, databases, recentRuns } from "@/lib/mock-data";
import { formatBytes, formatDate, statusTone } from "@/lib/utils";

export default function OverviewPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Overview"
        subtitle="Pulse of every backup pipeline. Focus on what needs attention."
        actions={
          <button className="rounded-full bg-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800">
            Run backup now
          </button>
        }
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Databases" value={`${databases.length}`} />
        <StatCard label="Success Rate" value="96.4%" tone="good" delta="+1.2%" />
        <StatCard label="Failures (7d)" value="2" tone="bad" delta="-1" />
        <StatCard label="Avg Runtime" value="1m 08s" tone="warn" delta="+8s" />
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-slate-100 bg-white p-6">
          <h2 className="font-display text-lg font-semibold text-slate-900">Recent Runs</h2>
          <p className="text-sm text-slate-500">Latest backup executions across environments.</p>
          <div className="mt-4 space-y-3">
            {recentRuns.map((run) => {
              const db = databases.find((item) => item.id === run.databaseId);
              return (
                <div
                  key={run.id}
                  className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{db?.name}</p>
                    <p className="text-xs text-slate-500">
                      {formatDate(run.startedAt)} • {run.durationSeconds ? `${run.durationSeconds}s` : "running"}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <p className="text-xs font-semibold text-slate-500">
                      {formatBytes(run.sizeBytes)}
                    </p>
                    <StatusBadge
                      tone={statusTone(run.status)}
                      label={run.status === "running" ? "running" : run.status}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-3xl border border-amber-100 bg-amber-50 p-6">
          <h2 className="font-display text-lg font-semibold text-slate-900">Active Alerts</h2>
          <p className="text-sm text-slate-600">Anything needing a human response.</p>
          <div className="mt-4 space-y-3">
            {alerts.map((alert) => {
              const db = databases.find((item) => item.id === alert.databaseId);
              return (
                <div key={alert.id} className="rounded-2xl border border-amber-100 bg-white px-4 py-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-900">{db?.name}</p>
                    <StatusBadge
                      tone={alert.severity === "critical" ? "failure" : "warning"}
                      label={alert.severity}
                    />
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{alert.message}</p>
                  <p className="mt-2 text-xs text-slate-500">{formatDate(alert.createdAt)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
