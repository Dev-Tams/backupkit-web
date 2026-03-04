export default function SettingsPage() {
  return (
    <div className="col-2">
      <div className="card section">
        <div className="card-header">
          <span className="card-title">Account</span>
        </div>
        <div className="card-body">
          <div className="form-group">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input className="form-input" id="name" defaultValue="Dev Tams" />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input className="form-input" id="email" defaultValue="dev@tams.dev" />
          </div>
        </div>
      </div>

      <div className="card section">
        <div className="card-header">
          <span className="card-title">Plan</span>
        </div>
        <div className="card-body">
          <div className="badge badge-run">Current: Free</div>
        </div>
      </div>
    </div>
  );
}
