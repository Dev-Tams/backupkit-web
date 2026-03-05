export default function CliSection() {
  return (
    <div className="cli-section" id="commands">
      <div className="cli-inner">
        <div>
          <p className="section-label">// cli</p>
          <h2 className="section-title" style={{ fontSize: 'clamp(28px, 3vw, 42px)' }}>
            Seven commands.<br />Full control.
          </h2>
          <p className="section-sub" style={{ marginBottom: 32 }}>
            A complete backup workflow in a single binary. From initializing a config to restoring from disaster.
          </p>
          <div className="db-chips">
            {[
              { color: '#336791', label: 'PostgreSQL' },
              { color: '#00758f', label: 'MySQL / MariaDB' },
              { color: '#5aa9d6', label: 'SQLite' },
            ].map(({ color, label }) => (
              <div key={label} className="db-chip">
                <span className="db-chip-dot" style={{ background: color }} />
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="cli-terminal">
          <div className="terminal-bar">
            <span className="terminal-dot dot-red" />
            <span className="terminal-dot dot-yellow" />
            <span className="terminal-dot dot-green" />
            <span className="terminal-title">backupkit</span>
          </div>
          <div className="terminal-body">
            <span className="t-comment t-line"># Generate sample config</span>
            <span className="t-line"><span className="t-prompt">$</span> <span className="t-cmd">backupkit init</span></span>
            <span className="t-success t-line">✓ Created backup.yaml</span>
            <span className="t-blank" />
            <span className="t-comment t-line"># Test connections</span>
            <span className="t-line"><span className="t-prompt">$</span> <span className="t-cmd">backupkit test</span></span>
            <span className="t-success t-line">✓ production-db → postgres OK</span>
            <span className="t-success t-line">✓ s3-production → S3 bucket OK</span>
            <span className="t-blank" />
            <span className="t-comment t-line"># Run a backup now</span>
            <span className="t-line"><span className="t-prompt">$</span> <span className="t-cmd">backupkit backup</span></span>
            <span className="t-out t-line">  Dumping production-db...</span>
            <span className="t-out t-line">  Compressing (gzip)...</span>
            <span className="t-out t-line">  Encrypting (AES-256)...</span>
            <span className="t-success t-line">✓ Backup complete — 142MB in 8.3s</span>
            <span className="t-blank" />
            <span className="t-comment t-line"># Start the scheduler</span>
            <span className="t-line"><span className="t-prompt">$</span> <span className="t-cmd">backupkit daemon</span></span>
          </div>
        </div>
      </div>
    </div>
  )
}