const runs = [
  ["2026-03-03 02:00:11", "app_db", "Success", "142 MB", "8.3s", "s3-production", "gz+enc"],
  ["2026-03-03 02:00:09", "analytics_db", "Success", "891 MB", "41.2s", "s3-production", "gz+enc"],
  ["2026-03-02 02:00:08", "app_db", "Success", "140 MB", "7.9s", "s3-production", "gz+enc"],
  ["2026-02-22 02:00:00", "app_db", "Failed", "-", "-", "s3-production", "gz+enc"],
];

export default function HistoryPage() {
  return (
    <div className="card">
      <div className="card-header">
        <span className="card-title">Backup Runs</span>
        <span className="tiny-muted">28 total</span>
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Timestamp (UTC)</th>
              <th>Database</th>
              <th>Status</th>
              <th>Size</th>
              <th>Duration</th>
              <th>Destination</th>
              <th>Pipeline</th>
            </tr>
          </thead>
          <tbody>
            {runs.map((run) => (
              <tr key={`${run[0]}-${run[1]}`}>
                <td className="td-mono">{run[0]}</td>
                <td>
                  <strong className="bright">{run[1]}</strong>
                </td>
                <td>
                  <span className={`badge ${run[2] === "Success" ? "badge-ok" : "badge-fail"}`}>
                    {run[2]}
                  </span>
                </td>
                <td>{run[3]}</td>
                <td>{run[4]}</td>
                <td className="td-mono">{run[5]}</td>
                <td className="td-mono">{run[6]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
