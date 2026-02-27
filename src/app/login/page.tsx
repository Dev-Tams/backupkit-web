import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md items-center justify-center">
      <section className="w-full rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">BackupKit</p>
        <h1 className="mt-1 font-display text-2xl font-semibold text-slate-900">Sign in</h1>
        <p className="mt-1 text-sm text-slate-500">Placeholder auth flow for MVP builds.</p>

        <div className="mt-5 space-y-3">
          <input
            type="email"
            placeholder="you@company.com"
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm"
          />
          <Link
            href="/overview"
            className="block w-full rounded-2xl bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Continue to dashboard
          </Link>
        </div>
      </section>
    </div>
  );
}
