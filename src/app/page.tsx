import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    features: ["2 databases", "7-day retention", "Email alerts"],
    cta: "Start Free",
    href: "/signup",
    featured: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/mo",
    features: ["Unlimited databases", "90-day retention", "Webhook + priority alerts"],
    cta: "Go Pro",
    href: "/signup",
    featured: true,
  },
  {
    name: "Team",
    price: "$49",
    period: "/mo",
    features: ["5 seats", "Audit logs", "1-year retention"],
    cta: "Contact Sales",
    href: "/signup",
    featured: false,
  },
] as const;

export default function Home() {
  return (
    <div className="landing-page">
      <div className="grid-bg" />

      <header className="landing-nav">
        <Link href="/" className="nav-logo">
          <div className="nav-logo-icon">B</div>
          <span className="nav-logo-text">BackupKit</span>
        </Link>

        <div className="landing-nav-actions">
          <Link href="/dashboard" className="btn btn-ghost">
            Dashboard
          </Link>
          <Link href="/login" className="btn btn-ghost">
            Log in
          </Link>
          <Link href="/signup" className="btn btn-primary">
            Join Free
          </Link>
        </div>
      </header>

      <main className="landing-main">
        <section className="landing-hero">
          <p className="landing-kicker">BackupKit Cloud</p>
          <h1>Database backups that just work</h1>
          <p className="landing-sub">
            Protect PostgreSQL, MySQL, and SQLite with automated schedules, verification, and restore-ready snapshots.
          </p>
          <div className="landing-hero-actions">
            <Link href="/signup" className="btn btn-primary">
              Create account
            </Link>
            <Link href="/login" className="btn btn-ghost">
              I already have an account
            </Link>
          </div>
        </section>

        <section className="landing-pricing" id="pricing">
          <div className="landing-section-head">
            <p className="landing-kicker">Pricing</p>
            <h2>Simple plans, no lock-in</h2>
          </div>

          <div className="pricing-grid">
            {plans.map((plan) => (
              <article key={plan.name} className={`pricing-card ${plan.featured ? "featured" : ""}`}>
                <h3>{plan.name}</h3>
                <p className="pricing-price">
                  {plan.price}
                  <span>{plan.period}</span>
                </p>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <Link href={plan.href} className={`btn ${plan.featured ? "btn-primary" : "btn-ghost"}`}>
                  {plan.cta}
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
