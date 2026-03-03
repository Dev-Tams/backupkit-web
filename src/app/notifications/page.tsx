export default function NotificationsPage() {
  return (
    <div className="card">
      <div className="card-header">
        <span className="card-title">Notification Routes</span>
      </div>
      <div className="card-body">
        <div className="notif-row">
          <span>Email - on failure</span>
          <span className="badge badge-fail">Failure</span>
        </div>
        <div className="notif-row">
          <span>Webhook</span>
          <span className="badge badge-warn">Both</span>
        </div>
      </div>
    </div>
  );
}
