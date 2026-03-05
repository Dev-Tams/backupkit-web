const features = [
  { icon: '⏰', green: false, name: 'Cron Scheduling', desc: 'Run backups on any schedule. Uses standard cron syntax or human-friendly shortcuts like @daily and @hourly.' },
  { icon: '🔐', green: true,  name: 'AES-256 Encryption', desc: 'Encrypt backups at rest. Password stored in env vars, never in config files. Zero plaintext on disk or in transit.' },
  { icon: '🗜️', green: false, name: 'Gzip Compression', desc: 'Enabled by default. Drastically reduces storage costs, especially on large Postgres and MySQL dumps.' },
  { icon: '♻️', green: true,  name: 'Retention Policies', desc: 'Automatically prune old backups. Configure daily, weekly, and monthly retention independently per database.' },
  { icon: '✅', green: false, name: 'Backup Verification', desc: 'Checksum verification after every upload. Know immediately if a backup is corrupt or incomplete.' },
  { icon: '🔔', green: true,  name: 'Notifications', desc: 'SMTP email and webhook alerts on success or failure. Never find out about a failed backup during an incident.' },
]

export default function Features() {
  return (
    <section id="features" style={{ padding: '100px 40px', maxWidth: 1100, margin: '0 auto' }}>
      <p className="section-label">// features</p>
      <h2 className="section-title">Everything you need.<br />Nothing you don't.</h2>
      <p className="section-sub">
        Built for developers who want their data protected without spending a weekend on custom scripts.
      </p>

      <div className="feature-grid">
        {features.map(({ icon, green, name, desc }) => (
          <div key={name} className="feature-card">
            <div className={`feature-icon${green ? ' green' : ''}`}>{icon}</div>
            <div className="feature-name">{name}</div>
            <div className="feature-desc">{desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}