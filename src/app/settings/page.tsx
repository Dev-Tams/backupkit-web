import { PageHeader } from "@/components/PageHeader";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Settings"
        subtitle="Environment keys, notification policies, and billing placeholders."
      />

      <section className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-3xl border border-slate-100 bg-white p-5">
          <h2 className="font-display text-lg font-semibold text-slate-900">Environment</h2>
          <p className="text-sm text-slate-500">Used for agent auth and backup orchestration.</p>
          <div className="mt-4 space-y-3">
            <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              API key
              <input
                type="password"
                value="bk_live_xxxxxxxxxxxxxxxxx"
                readOnly
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700"
              />
            </label>
            <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Region
              <select className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700">
                <option>us-east-1</option>
                <option>us-west-2</option>
                <option>eu-central-1</option>
              </select>
            </label>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-100 bg-white p-5">
          <h2 className="font-display text-lg font-semibold text-slate-900">Notifications</h2>
          <p className="text-sm text-slate-500">Channel defaults and escalation policy.</p>
          <div className="mt-4 space-y-3 text-sm text-slate-700">
            <label className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3">
              <input type="checkbox" defaultChecked />
              Send critical alerts instantly
            </label>
            <label className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3">
              <input type="checkbox" defaultChecked />
              Send daily summary at 09:00 UTC
            </label>
            <label className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3">
              <input type="checkbox" />
              Open PagerDuty incident on backup failure
            </label>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-amber-200 bg-amber-50 p-5">
        <h2 className="font-display text-lg font-semibold text-slate-900">Billing and plan</h2>
        <p className="mt-1 text-sm text-slate-700">Managed service foundation placeholder for Free, Pro, and Team plans.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <button className="rounded-full border border-amber-300 bg-white px-4 py-2 text-sm font-semibold text-amber-900">
            Free
          </button>
          <button className="rounded-full border border-slate-300 bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
            Pro (current)
          </button>
          <button className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
            Team
          </button>
        </div>
      </section>
    </div>
  );
}
