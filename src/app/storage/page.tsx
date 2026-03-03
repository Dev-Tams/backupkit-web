export default function StoragePage() {
  return (
    <>
      <div className="stat-grid stat-grid-3">
        <div className="stat-card">
          <div className="stat-label">Total Backups</div>
          <div className="stat-num">196</div>
          <div className="stat-sub">across all destinations</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Total Stored</div>
          <div className="stat-num">4.2 GB</div>
          <div className="stat-sub">~$0.10/mo estimated S3 cost</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Oldest Backup</div>
          <div className="stat-num stat-sm">Jan 3</div>
          <div className="stat-sub">2026 · 59 days ago</div>
        </div>
      </div>

      <div className="storage-card">
        <div className="card-title">s3-production</div>
        <div className="tiny-muted">AWS S3 · us-east-1 · myapp-backups/production/</div>
      </div>
    </>
  );
}
