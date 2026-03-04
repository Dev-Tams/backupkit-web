import Link from "next/link";

export default function SignupPage() {
  return (
    <>
      <div className="grid-bg" />

      <nav className="auth-nav">
        <Link href="/" className="nav-logo">
          <div className="nav-logo-icon">B</div>
          <span className="nav-logo-text">BackupKit</span>
        </Link>
        <div className="nav-right">
          Already have an account? <Link href="/login">Log in</Link>
        </div>
      </nav>

      <div className="auth-wrap">
        <div className="auth-card">
          <div className="auth-card-header">
            <div className="auth-title">Create your account</div>
            <div className="auth-sub">Start protecting your databases in minutes.</div>
          </div>

          <div className="auth-body">
            <button className="btn btn-oauth" type="button">
              Continue with GitHub
            </button>
            <div className="or-divider">or</div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="first-name">
                  First name
                </label>
                <input className="form-input" id="first-name" placeholder="Dev" />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="last-name">
                  Last name
                </label>
                <input className="form-input" id="last-name" placeholder="Tams" />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input className="form-input" type="email" id="email" placeholder="dev@tams.dev" />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <input className="form-input" type="password" id="password" placeholder="Min. 8 characters" />
              <div className="form-hint">Use at least 8 characters, including upper/lowercase and a number.</div>
            </div>

            <div className="form-hint terms-hint">
              By signing up you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
            </div>

            <button className="btn btn-primary" type="button">
              Create Account
            </button>
          </div>

          <div className="auth-footer">
            Already have an account? <Link href="/login">Log in</Link>
          </div>
        </div>
      </div>
    </>
  );
}
