"use client";

type StatusBadgeProps = {
  tone: "success" | "warning" | "failure" | "info";
  label: string;
};

const toneMap: Record<StatusBadgeProps["tone"], string> = {
  success: "bg-emerald-100 text-emerald-900 border-emerald-200",
  warning: "bg-amber-100 text-amber-900 border-amber-200",
  failure: "bg-rose-100 text-rose-900 border-rose-200",
  info: "bg-sky-100 text-sky-900 border-sky-200",
};

export function StatusBadge({ tone, label }: StatusBadgeProps) {
  return (
    <span className={`pill inline-flex items-center border px-2.5 py-1 text-xs font-semibold ${toneMap[tone]}`}>
      {label}
    </span>
  );
}
