import { PageHeader } from "@/components/PageHeader";
import { recentRuns } from "@/lib/mock-data";
import { formatBytes } from "@/lib/utils";

type Point = {
  label: string;
  sizeBytes: number;
  durationSec: number;
  successRate: number;
};

const points: Point[] = [
  { label: "Mon", sizeBytes: 720_000_000, durationSec: 48, successRate: 100 },
  { label: "Tue", sizeBytes: 765_000_000, durationSec: 52, successRate: 100 },
  { label: "Wed", sizeBytes: 810_000_000, durationSec: 66, successRate: 75 },
  { label: "Thu", sizeBytes: 852_000_000, durationSec: 58, successRate: 100 },
  { label: "Fri", sizeBytes: 896_000_000, durationSec: 63, successRate: 100 },
  { label: "Sat", sizeBytes: 868_000_000, durationSec: 59, successRate: 100 },
  { label: "Sun", sizeBytes: 920_000_000, durationSec: 61, successRate: 100 },
];

function maxValue(items: number[]) {
  return Math.max(...items, 1);
}

export default function TrendsPage() {
  const maxSize = maxValue(points.map((point) => point.sizeBytes));
  const maxDuration = maxValue(points.map((point) => point.durationSec));
  const avgSuccess = Math.round(points.reduce((acc, point) => acc + point.successRate, 0) / points.length);
  const latestRunSize = recentRuns.find((run) => run.sizeBytes)?.sizeBytes ?? 0;

  return (
    <div className="space-y-8">
      <PageHeader
        title="Trends"
        subtitle="Backup size, runtime, and reliability over the last 7 days."
        actions={
          <select className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
        }
      />

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-100 bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Average success</p>
          <p className="mt-2 font-display text-3xl font-semibold text-slate-900">{avgSuccess}%</p>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Latest backup size</p>
          <p className="mt-2 font-display text-3xl font-semibold text-slate-900">{formatBytes(latestRunSize)}</p>
        </div>
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">Anomaly watch</p>
          <p className="mt-2 text-sm font-semibold text-amber-900">Wednesday runtime spike detected</p>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-100 bg-white p-5">
          <h2 className="font-display text-lg font-semibold text-slate-900">Backup size</h2>
          <p className="text-sm text-slate-500">Stored payload per day</p>
          <div className="mt-5 grid grid-cols-7 items-end gap-2">
            {points.map((point) => {
              const height = `${Math.max((point.sizeBytes / maxSize) * 140, 16)}px`;
              return (
                <div key={point.label} className="flex flex-col items-center gap-2">
                  <div className="w-full rounded-t-xl bg-emerald-500" style={{ height }} />
                  <p className="text-xs font-semibold text-slate-500">{point.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-100 bg-white p-5">
          <h2 className="font-display text-lg font-semibold text-slate-900">Duration</h2>
          <p className="text-sm text-slate-500">Runtime in seconds per day</p>
          <div className="mt-5 space-y-3">
            {points.map((point) => (
              <div key={point.label}>
                <div className="mb-1 flex items-center justify-between text-xs text-slate-500">
                  <span>{point.label}</span>
                  <span>{point.durationSec}s</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-sky-500"
                    style={{ width: `${Math.round((point.durationSec / maxDuration) * 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
