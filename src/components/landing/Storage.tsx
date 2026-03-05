const destinations = [
  { icon: '☁️', name: 'AWS S3', sub: 'Any region, custom prefix', dashed: false },
  { icon: '🔥', name: 'Backblaze B2', sub: 'S3-compatible, cheap egress', dashed: false },
  { icon: '💾', name: 'Local Filesystem', sub: 'NFS, mounted drives, dev', dashed: false },
  { icon: '🌐', name: 'Google Cloud Storage', sub: 'Coming post-MVP', dashed: true },
]

export default function Storage() {
  return (
    <section id="storage" style={{ padding: '100px 40px', maxWidth: 1100, margin: '0 auto' }}>
      <p className="section-label">// storage</p>
      <h2 className="section-title">Your data, your storage.</h2>
      <p className="section-sub">Push backups to the destinations you already use. No vendor lock-in.</p>
      <div style={{ maxWidth: 600 }}>
        <div className="storage-grid">
          {destinations.map(({ icon, name, sub, dashed }) => (
            <div key={name} className="storage-card" style={dashed ? { borderStyle: 'dashed', opacity: 0.5 } : {}}>
              <span className="storage-icon">{icon}</span>
              <div>
                <div style={{ fontWeight: 600, color: 'var(--text-bright)', marginBottom: 2 }}>{name}</div>
                <div style={{ fontSize: 11, color: 'var(--text-dim)' }}>{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}