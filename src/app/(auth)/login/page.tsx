import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <div className="grid-bg" />

      <nav className="auth-nav">
        <Link href="/" className="nav-logo">
          <div className="nav-logo-icon">B</div>
          <span className="nav-logo-text">BackupKit</span>
        </Link>
        <div className="nav-right">
          New here? <Link href="/signup">Create account</Link>
        </div>
      </nav>

      <div className="auth-wrap">
        <div className="auth-card">
          <div className="auth-card-header">
            <div className="auth-title">Welcome back</div>
            <div className="auth-sub">Log in to your BackupKit Cloud account.</div>
          </div>

          <div className="auth-body">
            <button className="btn btn-oauth" type="button">
              Continue with GitHub
            </button>
            <div className="or-divider">or</div>

            <div className="form-group">
              <label className="form-label" htmlFor="login-email">
                Email
              </label>
              <input className="form-input" type="email" id="login-email" placeholder="example@mail.com" />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="login-password">
                Password
              </label>
              <input className="form-input" type="password" id="login-password" placeholder="Your password" />
            </div>

            <button className="btn btn-primary" type="button">
              Log In
            </button>
          </div>

          <div className="auth-footer">
            Don&apos;t have an account? <Link href="/signup">Sign up free</Link>
          </div>
        </div>
      </div>
    </>
  );
}
