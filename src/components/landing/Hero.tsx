'use client'

import { useEffect, useRef } from 'react'

const ICONS = ['🐘', '🗄️', '☁️', '🔐', '🐬', '📦', '⚡', '🔒']

export default function Hero() {
  const copyRef = useRef<HTMLButtonElement>(null)

  const handleCopy = () => {
    navigator.clipboard.writeText('go install github.com/dev-tams/backupkit@latest')
    if (copyRef.current) {
      copyRef.current.textContent = '✓'
      setTimeout(() => { if (copyRef.current) copyRef.current.textContent = '⌘' }, 1500)
    }
  }

  return (
    <div className="hero" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '80px 40px 60px', position: 'relative', textAlign: 'center',
    }}>
      {/* Floating icons */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        {ICONS.map((icon, i) => (
          <div key={i} className={`float-icon float-icon-${i + 1}`}>{icon}</div>
        ))}
      </div>

      {/* Glow */}
      <div style={{
        position: 'absolute', width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(0,200,255,0.06) 0%, transparent 70%)',
        top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
      }} />

      <div className="hero-badge">
        <span className="badge-dot" />
        Open source · Go-powered · Single binary
      </div>

      <h1 className="hero-title">
        Database backups<br />that <em>just work</em>
      </h1>

      <p className="hero-sub">
        BackupKit automates PostgreSQL, MySQL, and SQLite backups to S3,
        Backblaze B2, or local storage. One config file. No babysitting.
      </p>

      <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href="https://github.com/dev-tams/backupkit" target="_blank" rel="noopener noreferrer" className="btn-primary">
          View on GitHub
        </a>
        <a href="#commands" className="btn-secondary">See CLI commands</a>
      </div>

      {/* Install box */}
      <div style={{ marginTop: 48 }}>
        <div className="install-box">
          <span style={{ color: 'var(--accent)' }}>$</span>
          <span style={{ color: 'var(--text-bright)' }}>go install github.com/dev-tams/backupkit@latest</span>
          <button ref={copyRef} onClick={handleCopy} className="copy-btn">⌘</button>
        </div>
      </div>

      {/* Stats */}
      <div className="stats-row">
        {[
          { num: '3', label: 'Databases' },
          { num: 'S3 · B2', label: 'Storage targets' },
          { num: 'AES-256', label: 'Encryption' },
          { num: '1', label: 'Binary' },
        ].map(({ num, label }) => (
          <div key={label} className="stat">
            <span className="stat-num">{num}</span>
            <span className="stat-label">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
