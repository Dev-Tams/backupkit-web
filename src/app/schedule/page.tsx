import { PageHeader } from "@/components/PageHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { databases } from "@/lib/mock-data";
import { formatDate, statusTone } from "@/lib/utils";

const nextRuns: Record<string, string> = {
  "db-1": "2026-02-28T02:00:00Z",
  "db-2": "2026-02-28T03:00:00Z",
  "db-3": "2026-02-28T01:00:00Z",
  "db-4": "2026-02-27T11:00:00Z",
};

const cadenceHint: Record<string, string> = {
  "0 2 * * *": "Daily at 02:00",
  "0 3 * * *": "Daily at 03:00",
  "0 1 * * *": "Daily at 01:00",
  "@hourly": "Every hour",
};

export default function SchedulePage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Schedule"
        subtitle="Upcoming backup windows and execution cadence."
        actions={
          <button className="rounded-full bg-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800">
            Add schedule
          </button>
        }
      />

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-100 bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Daily Jobs</p>
          <p className="mt-2 font-display text-3xl font-semibold text-slate-900">3</p>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Hourly Jobs</p>
          <p className="mt-2 font-display text-3xl font-semibold text-slate-900">1</p>
        </div>
        <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">Next Backup</p>
          <p className="mt-2 text-sm font-semibold text-slate-900">Local-dev in 22m</p>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-100 bg-white p-5">
        <h2 className="font-display text-lg font-semibold text-slate-900">Upcoming runs</h2>
        <div className="mt-4 space-y-3">
          {databases.map((db) => (
            <div
              key={db.id}
              className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3"
            >
              <div>
                <p className="text-sm font-semibold text-slate-900">{db.name}</p>
                <p className="text-xs text-slate-500">{cadenceHint[db.schedule] ?? db.schedule}</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Next run</p>
                <p className="text-sm font-semibold text-slate-900">{formatDate(nextRuns[db.id])}</p>
              </div>
              <StatusBadge tone={statusTone(db.lastStatus)} label={db.lastStatus ?? "unknown"} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
