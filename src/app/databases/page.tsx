import { PageHeader } from "@/components/PageHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { databases } from "@/lib/mock-data";
import { formatDate, statusTone } from "@/lib/utils";

export default function DatabasesPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Databases"
        subtitle="All monitored databases and their latest backup health."
        actions={
          <button className="rounded-full bg-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800">
            Register database
          </button>
        }
      />

      <section className="grid gap-4 lg:grid-cols-2">
        {databases.map((db) => (
          <div
            key={db.id}
            className="rounded-3xl border border-slate-100 bg-white p-5"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                  {db.engine}
                </p>
                <h2 className="font-display text-lg font-semibold text-slate-900">
                  {db.name}
                </h2>
              </div>
              <StatusBadge
                tone={statusTone(db.lastStatus)}
                label={db.lastStatus ?? "unknown"}
              />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-slate-600">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Schedule</p>
                <p className="font-semibold text-slate-800">{db.schedule}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Storage</p>
                <p className="font-semibold text-slate-800">{db.storageName}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Last backup</p>
                <p className="font-semibold text-slate-800">
                  {db.lastBackupAt ? formatDate(db.lastBackupAt) : "Not run"}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Next run</p>
                <p className="font-semibold text-slate-800">in 3h 12m</p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <button className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600">
                View history
              </button>
              <button className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600">
                Run now
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
