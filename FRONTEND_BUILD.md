# BackupKit Frontend Build Spec

## 1. Product Overview

**Product:** BackupKit  
**Tagline:** Dead-simple database backups that just work

BackupKit is a backup platform for developers and small teams who need reliable backups without enterprise complexity.  
This frontend spec covers:

- MVP Dashboard (Week 2)
- Managed Service Dashboard foundation (Week 4)

## 2. Users and Jobs-To-Be-Done

### Primary Personas

1. Solo Developer Dan
- 2-5 PostgreSQL databases
- wants fast setup and low/no cost
- needs confidence backups are happening

2. Startup CTO Sarah
- 5-15 databases across environments
- needs team visibility and reliability
- needs auditability and alerting

3. Freelance DevOps Dave
- many client environments
- needs multi-tenant organization and low overhead

### Core Jobs

- Confirm backups are successful without opening logs
- See failed/missed backups quickly and fix them
- Manage teams and subscribers for alerts/reporting
- Track trends (duration, size, success rate)

## 3. Frontend Scope

## 3.1 MVP (Week 1-2)

- Auth shell (placeholder/local dev auth accepted)
- Team management
- Subscriber management
- Overview dashboard
- Database list with last backup status/time
- Alerts list (failures, missed runs)

## 3.2 Managed Service Foundation (Week 3-4)

- Multi-tenant org/team model
- Plan/paywall placeholders (Free/Pro/Team)
- Trends charts (size, duration, success rate)
- Seat management UI
- Audit log view placeholder

## 4. Information Architecture

### App Sections

1. Overview
- KPIs: total databases, backups (24h), success rate, failed jobs
- recent runs table

2. Databases
- cards/table by database
- fields: name, engine, last backup time, last status, storage destination

3. Schedule
- upcoming backup times
- cron display and human-readable schedule

4. Alerts
- failures/missed backup events
- severity, timestamp, database, message

5. Trends
- backup size over time
- duration over time
- success/failure ratio

6. Teams
- create/edit/delete teams
- team member count

7. Subscribers
- create/edit/delete subscribers
- assign subscriber to team
- notification channels/status

## 5. Suggested Tech Stack

Use one of these:

1. Preferred: `Next.js + TypeScript + Tailwind + shadcn/ui + Recharts`
2. Lightweight: `Vite + React + TypeScript + Tailwind + TanStack Router`

Shared recommendations:

- State/data: TanStack Query
- Forms: React Hook Form + Zod
- Date handling: date-fns
- Tables: TanStack Table
- API types: OpenAPI-generated or hand-written typed client

## 6. UX and Design Direction

- Tone: operational, clear, low-noise
- Style: light theme default with strong status colors
- Status colors:
  - Success: green
  - Warning: amber
  - Failure: red
  - Info: blue
- Dense but readable tables
- Mobile support required for overview + alerts + database list

## 7. Data Model (Frontend-Facing)

```ts
type Team = {
  id: string
  name: string
  createdAt: string
}

type Subscriber = {
  id: string
  name: string
  email: string
  teamId: string
  createdAt: string
}

type Database = {
  id: string
  name: string
  engine: "postgres" | "mysql" | "sqlite"
  schedule: string
  storageName: string
  lastBackupAt?: string
  lastStatus?: "success" | "failure" | "running"
}

type BackupRun = {
  id: string
  databaseId: string
  startedAt: string
  endedAt?: string
  durationSeconds?: number
  sizeBytes?: number
  status: "success" | "failure" | "running"
  errorMessage?: string
}

type Alert = {
  id: string
  databaseId: string
  severity: "warning" | "critical"
  type: "backup_failed" | "backup_missed" | "size_anomaly"
  message: string
  createdAt: string
}
```

## 8. API Contract (Initial)

Use these endpoints as the initial contract between frontend and backend.

### Teams

- `GET /api/teams`
- `POST /api/teams`
- `PATCH /api/teams/:id`
- `DELETE /api/teams/:id`

### Subscribers

- `GET /api/subscribers`
- `POST /api/subscribers`
- `PATCH /api/subscribers/:id`
- `DELETE /api/subscribers/:id`

### Databases and Runs

- `GET /api/databases`
- `GET /api/databases/:id/runs?limit=50`
- `GET /api/runs/recent?limit=50`
- `POST /api/databases/:id/backup-now`

### Alerts and Trends

- `GET /api/alerts?status=open`
- `POST /api/alerts/:id/ack`
- `GET /api/trends?databaseId=:id&range=7d|30d|90d`

## 9. Required Pages

1. `/login` (placeholder auth for MVP)
2. `/overview`
3. `/databases`
4. `/schedule`
5. `/alerts`
6. `/trends`
7. `/teams`
8. `/subscribers`
9. `/settings` (env keys, notifications, billing placeholder)

## 10. MVP Components Checklist

- App shell with sidebar + top status bar
- KPI stat cards
- Reusable status badge
- Reusable data table with empty/loading/error states
- Team create/edit/delete form
- Subscriber create/edit/delete form
- Backup run history table
- Alerts list with acknowledge action
- Basic chart components for trends

## 11. Non-Functional Requirements

- Time-to-first-load under 2.5s on typical broadband
- Keyboard accessible core actions
- Form validation with clear error text
- Retry/error states for all API calls
- UTC display with optional local-time toggle
- No secrets in frontend bundle

## 12. Delivery Plan

### Week 1

- Project scaffold
- App shell
- Teams/Subscribers pages
- Mock API layer

### Week 2

- Overview/Databases/Alerts pages
- Real API integration (or adapter to CLI/daemon backend)
- MVP polish + QA

### Week 3

- Trends page + charts
- Multi-tenant structure
- Billing/plan placeholder UI

### Week 4

- Team seats and access controls
- Audit log placeholder
- Production hardening and deployment

## 13. Repo Setup (Recommended)

```text
apps/
  web/
    src/
      app/
      components/
      features/
        overview/
        databases/
        alerts/
        trends/
        teams/
        subscribers/
      lib/
        api/
        auth/
        utils/
      styles/
```

## 14. Copy Snippets

- Header: "BackupKit"
- Subheader: "Dead-simple database backups that just work"
- Empty state (alerts): "No active alerts. Backups look healthy."
- Empty state (subscribers): "Add a subscriber to start receiving backup updates."

## 15. Acceptance Criteria (MVP)

1. User can create, list, and delete teams.
2. User can create, list, and delete subscribers assigned to teams.
3. User can view overview KPIs and recent runs.
4. User can view databases with last backup status.
5. User can view alerts and acknowledge one.
6. UI is responsive on desktop and mobile.
7. App runs locally with documented startup commands.

## 16. Local Run Commands (Example)

```bash
# install
pnpm install

# run frontend
pnpm dev

# test
pnpm test

# build
pnpm build
```

