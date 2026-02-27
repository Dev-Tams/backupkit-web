import { PageHeader } from "@/components/PageHeader";
import { teams } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";

export default function TeamsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Teams"
        subtitle="Organize access by product area or client."
        actions={
          <button className="rounded-full bg-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800">
            Create team
          </button>
        }
      />

      <section className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="rounded-3xl border border-slate-100 bg-white p-5">
          <h2 className="font-display text-lg font-semibold text-slate-900">New team</h2>
          <p className="text-sm text-slate-500">Teams group subscribers and audit logs.</p>
          <div className="mt-4 space-y-3">
            <input
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm"
              placeholder="Team name"
            />
            <textarea
              className="h-28 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm"
              placeholder="What does this team own?"
            />
            <button className="w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white">
              Save team
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-100 bg-white p-5">
          <h2 className="font-display text-lg font-semibold text-slate-900">Active teams</h2>
          <p className="text-sm text-slate-500">3 teams tracked this week.</p>
          <div className="mt-4 space-y-3">
            {teams.map((team) => (
              <div
                key={team.id}
                className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-900">{team.name}</p>
                  <p className="text-xs text-slate-500">Created {formatDate(team.createdAt)}</p>
                </div>
                <button className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600">
                  Manage
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
