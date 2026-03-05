"use client";

import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

const items: NavItem[] = [
  { label: "Features", href: "#features" },
  { label: "CLI", href: "#commands" },
  { label: "Pricing", href: "/pricing" },
  { label: "Docs", href: "https://github.com/dev-tams/backupkit", external: true },
];

export default function Nav() {
  return (
    <nav className="landing-nav">
      <Link href="/" className="nav-logo">
        <div className="nav-logo-icon">B</div>
        <span className="nav-logo-text">BackupKit</span>
      </Link>

      <ul className="nav-links">
        {items.map(({ label, href, external }) => (
          <li key={label}>
            <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
              {label}
            </a>
          </li>
        ))}

        <li>
          <Link href="/login" className="nav-cta">
            Log in
          </Link>
        </li>
        <li>
          <Link href="/signup" className="nav-cta">
            Sign up
          </Link>
        </li>
      </ul>
    </nav>
  );
}
