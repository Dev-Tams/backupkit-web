"use client";

type StatCardProps = {
  label: string;
  value: string;
  delta?: string;
  tone?: "default" | "good" | "warn" | "bad";
};

const toneStyles: Record<NonNullable<StatCardProps["tone"]>, string> = {
  default: "border-slate-200 bg-white text-slate-900",
  good: "border-emerald-200 bg-emerald-50 text-emerald-900",
  warn: "border-amber-200 bg-amber-50 text-amber-900",
  bad: "border-rose-200 bg-rose-50 text-rose-900",
};

export function StatCard({ label, value, delta, tone = "default" }: StatCardProps) {
  return (
    <div className={`rounded-2xl border px-4 py-4 ${toneStyles[tone]}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
        {label}
      </p>
      <div className="mt-2 flex items-end gap-3">
        <p className="font-display text-2xl font-semibold">{value}</p>
        {delta ? (
          <span className="rounded-full bg-white/70 px-2 py-0.5 text-xs font-semibold text-slate-600">
            {delta}
          </span>
        ) : null}
      </div>
    </div>
  );
}
