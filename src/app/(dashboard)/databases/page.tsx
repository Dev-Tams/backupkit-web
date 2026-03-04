const databases = [
  { name: "app_db", type: "postgres", schedule: "0 2 * * *", storage: "s3-production", last: "Today 02:00", size: "142 MB" },
  { name: "analytics_db", type: "postgres", schedule: "0 2 * * *", storage: "s3-production", last: "Today 02:00", size: "891 MB" },
];

export default function DatabasesPage() {
  return (
    <>
      <div className="page-actions">
        <button className="btn btn-primary">+ Add Database</button>
      </div>

      <div className="alert alert-warn">
        You&apos;re on the <strong>Free plan</strong> and have reached your 2-database limit.
      </div>

      <div className="col-2">
        {databases.map((db) => (
          <div key={db.name} className="db-card">
            <div className="db-name">{db.name}</div>
            <div className="db-type">{db.type}</div>
            <div className="db-meta">
              <div>
                <div className="lbl">Schedule</div>
                <div className="val">{db.schedule}</div>
              </div>
              <div>
                <div className="lbl">Storage</div>
                <div className="val">{db.storage}</div>
              </div>
              <div>
                <div className="lbl">Last Backup</div>
                <div className="val">{db.last}</div>
              </div>
              <div>
                <div className="lbl">Size</div>
                <div className="val">{db.size}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
