"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Overview", href: "/overview" },
  { label: "Databases", href: "/databases" },
  { label: "Schedule", href: "/schedule" },
  { label: "Alerts", href: "/alerts" },
  { label: "Trends", href: "/trends" },
  { label: "Teams", href: "/teams" },
  { label: "Subscribers", href: "/subscribers" },
  { label: "Settings", href: "/settings" },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen">
      <div className="mx-auto flex min-h-screen w-full max-w-[1200px] flex-col px-4 py-6 lg:flex-row lg:gap-6">
        <aside className="panel flex flex-row items-center justify-between gap-4 px-4 py-4 lg:min-h-[680px] lg:w-64 lg:flex-col lg:items-stretch">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                BackupKit
              </p>
              <p className="font-display text-lg font-semibold text-slate-900">
                Control Room
              </p>
            </div>
            <div className="hidden rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800 lg:block">
              MVP
            </div>
          </div>

          <nav className="mt-0 flex flex-wrap gap-2 lg:mt-6 lg:flex-col">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-3 py-2 text-sm font-semibold transition ${
                    active
                      ? "bg-emerald-700 text-white shadow-sm"
                      : "bg-amber-50 text-slate-700 hover:bg-amber-100"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto hidden flex-col gap-3 text-xs text-slate-500 lg:flex">
            <div className="rounded-2xl border border-amber-100 bg-amber-50 px-3 py-3">
              <p className="text-[11px] uppercase tracking-[0.2em] text-amber-700">
                Status
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-900">
                All systems nominal
              </p>
            </div>
            <p>Week 2 MVP build</p>
          </div>
        </aside>

        <main className="mt-6 flex-1 lg:mt-0">
          <div className="panel px-6 py-6 lg:px-8 lg:py-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
