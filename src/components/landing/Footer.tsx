import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)', padding: '32px 40px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      maxWidth: 1100, margin: '0 auto',
    }}>
      <span style={{ fontSize: 12, color: 'var(--text-dim)' }}>BackupKit — Apache 2.0 License</span>
      <ul style={{ display: 'flex', gap: 24, listStyle: 'none' }}>
        {[
          { label: 'GitHub', href: 'https://github.com/dev-tams/backupkit' },
          { label: 'Docs', href: 'https://github.com/dev-tams/backupkit#readme' },
          { label: 'Releases', href: 'https://github.com/dev-tams/backupkit/releases' },
        ].map(({ label, href }) => (
          <li key={label}>
            <a href={href} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 11, color: 'var(--text-dim)', textDecoration: 'none',
                textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}