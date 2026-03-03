export default function DashboardPage() {
  return (
    <>
      <div className="intro-block">
        <div className="intro-date">Tuesday, March 3 2026</div>
        <div className="intro-title">Good morning. All systems nominal.</div>
      </div>

      <div className="stat-grid stat-grid-4">
        <div className="stat-card">
          <div className="stat-label">Total Databases</div>
          <div className="stat-num stat-accent">2</div>
          <div className="stat-sub">2 active · 0 paused</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Success Rate (7d)</div>
          <div className="stat-num stat-green">98%</div>
          <div className="stat-sub stat-green">27/28 runs succeeded</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Total Stored</div>
          <div className="stat-num">4.2 GB</div>
          <div className="stat-sub">across 1 destination</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Next Backup</div>
          <div className="stat-num stat-sm">02:00</div>
          <div className="stat-sub">UTC - in 5h 38m</div>
        </div>
      </div>

      <div className="card section">
        <div className="card-header">
          <span className="card-title">Database Status</span>
          <button className="btn btn-primary">+ Add Database</button>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Database</th>
                <th>Type</th>
                <th>Schedule</th>
                <th>Last Backup</th>
                <th>Size</th>
                <th>Storage</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong className="bright">app_db</strong>
                </td>
                <td>
                  <span className="badge badge-pg">postgres</span>
                </td>
                <td className="td-mono">0 2 * * *</td>
                <td className="td-mono">Today 02:00 UTC</td>
                <td>142 MB</td>
                <td>s3-production</td>
                <td>
                  <span className="badge badge-ok">Healthy</span>
                </td>
              </tr>
              <tr>
                <td>
                  <strong className="bright">analytics_db</strong>
                </td>
                <td>
                  <span className="badge badge-pg">postgres</span>
                </td>
                <td className="td-mono">0 2 * * *</td>
                <td className="td-mono">Today 02:00 UTC</td>
                <td>891 MB</td>
                <td>s3-production</td>
                <td>
                  <span className="badge badge-ok">Healthy</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
