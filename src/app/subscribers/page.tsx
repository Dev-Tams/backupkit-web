import { PageHeader } from "@/components/PageHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { subscribers, teams } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";

export default function SubscribersPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Subscribers"
        subtitle="People who receive backup alerts and reports."
        actions={
          <button className="rounded-full bg-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800">
            Add subscriber
          </button>
        }
      />

      <section className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-3xl border border-slate-100 bg-white p-5">
          <h2 className="font-display text-lg font-semibold text-slate-900">New subscriber</h2>
          <p className="text-sm text-slate-500">Subscribers map to notification channels.</p>
          <div className="mt-4 space-y-3">
            <input
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm"
              placeholder="Full name"
            />
            <input
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm"
              placeholder="Email address"
            />
            <select className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm">
              {teams.map((team) => (
                <option key={team.id} value={team.id}>
                  {team.name}
                </option>
              ))}
            </select>
            <button className="w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white">
              Save subscriber
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-100 bg-white p-5">
          <h2 className="font-display text-lg font-semibold text-slate-900">Active subscribers</h2>
          <p className="text-sm text-slate-500">
            Add a subscriber to start receiving backup updates.
          </p>
          <div className="mt-4 space-y-3">
            {subscribers.map((sub) => {
              const team = teams.find((item) => item.id === sub.teamId);
              return (
                <div
                  key={sub.id}
                  className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{sub.name}</p>
                    <p className="text-xs text-slate-500">{sub.email}</p>
                    <p className="text-xs text-slate-500">Added {formatDate(sub.createdAt)}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <StatusBadge tone="info" label={team?.name ?? "Unassigned"} />
                    <button className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600">
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
