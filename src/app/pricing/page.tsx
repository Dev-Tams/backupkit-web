import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    features: ["2 databases", "7-day retention", "Email alerts"],
    featured: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/mo",
    features: ["Unlimited databases", "90-day retention", "Webhook + priority alerts"],
    featured: true,
  },
  {
    name: "Team",
    price: "$49",
    period: "/mo",
    features: ["5 seats", "Audit logs", "1-year retention"],
    featured: false,
  },
] as const;

export default function PricingPage() {
  return (
    <div className="landing-page mk-page">
      <div className="grid-bg" />

      <header className="landing-nav mk-nav">
        <Link href="/" className="nav-logo">
          <div className="nav-logo-icon">B</div>
          <span className="nav-logo-text">BackupKit</span>
        </Link>

        <div className="landing-nav-actions">
          <Link href="/" className="btn btn-ghost">
            Home
          </Link>
          <Link href="/login" className="btn btn-ghost">
            Log in
          </Link>
          <Link href="/signup" className="btn btn-primary">
            Join Free
          </Link>
        </div>
      </header>

      <main className="landing-main mk-main">
        <section className="mk-section">
          <p className="landing-kicker">Pricing</p>
          <h1 className="mk-title">Choose the plan that fits your backups</h1>
          <p className="landing-sub">Start free, upgrade when you need more databases and retention.</p>
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
                <Link href="/signup" className={`btn ${plan.featured ? "btn-primary" : "btn-ghost"}`}>
                  {plan.featured ? "Choose Pro" : "Start Free"}
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
