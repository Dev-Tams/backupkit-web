"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/dashboard", label: "Overview", section: "Monitor" },
  { href: "/history", label: "Backup History", section: "Monitor" },
  { href: "/databases", label: "Databases", section: "Configure" },
  { href: "/storage", label: "Storage", section: "Configure" },
  { href: "/notifications", label: "Notifications", section: "Configure" },
  { href: "/settings", label: "Settings", section: "Account" },
] as const;

const titles: Record<string, string> = {
  "/dashboard": "Overview",
  "/history": "Backup History",
  "/databases": "Databases",
  "/storage": "Storage",
  "/notifications": "Notifications",
  "/settings": "Settings",
};

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const title = titles[pathname] ?? "BackupKit";

  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="sb-logo">
          <div className="sb-logo-icon">B</div>
          <span className="sb-logo-text">BackupKit</span>
        </div>

        <nav className="sb-nav">
          <div className="sb-section">Monitor</div>
          {navItems
            .filter((item) => item.section === "Monitor")
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-item ${pathname === item.href ? "active" : ""}`}
              >
                {item.label}
              </Link>
            ))}

          <div className="sb-section">Configure</div>
          {navItems
            .filter((item) => item.section === "Configure")
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-item ${pathname === item.href ? "active" : ""}`}
              >
                {item.label}
              </Link>
            ))}

          <div className="sb-section">Account</div>
          {navItems
            .filter((item) => item.section === "Account")
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-item ${pathname === item.href ? "active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
        </nav>

        <div className="sb-bottom">
          <div className="plan-badge">
            <div>
              <div className="plan-name">Free Plan</div>
              <div className="plan-tier">2 / 2 databases</div>
            </div>
            <button className="btn btn-primary btn-compact">Upgrade</button>
          </div>
        </div>
      </aside>

      <main className="main">
        <div className="topbar">
          <span className="page-title">{title}</span>
          <div className="topbar-right">
            <span className="user-tag">dev-tams</span>
            <div className="avatar">DT</div>
          </div>
        </div>

        <div className="page active">{children}</div>
      </main>
    </div>
  );
}
