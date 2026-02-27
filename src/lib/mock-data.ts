import type { Alert, BackupRun, Database, Subscriber, Team } from "./types";

export const teams: Team[] = [
  { id: "t-1", name: "Core Platform", createdAt: "2026-02-20T10:30:00Z" },
  { id: "t-2", name: "Growth", createdAt: "2026-02-22T09:10:00Z" },
  { id: "t-3", name: "Client Ops", createdAt: "2026-02-23T14:05:00Z" },
];

export const subscribers: Subscriber[] = [
  {
    id: "s-1",
    name: "Ava Moreno",
    email: "ava@backupkit.dev",
    teamId: "t-1",
    createdAt: "2026-02-24T08:00:00Z",
  },
  {
    id: "s-2",
    name: "Ishan Rao",
    email: "ishan@backupkit.dev",
    teamId: "t-2",
    createdAt: "2026-02-24T10:45:00Z",
  },
  {
    id: "s-3",
    name: "Nia Brooks",
    email: "nia@backupkit.dev",
    teamId: "t-3",
    createdAt: "2026-02-25T13:15:00Z",
  },
];

export const databases: Database[] = [
  {
    id: "db-1",
    name: "production",
    engine: "postgres",
    schedule: "0 2 * * *",
    storageName: "s3-production",
    lastBackupAt: "2026-02-27T02:00:00Z",
    lastStatus: "success",
  },
  {
    id: "db-2",
    name: "staging",
    engine: "mysql",
    schedule: "0 3 * * *",
    storageName: "s3-staging",
    lastBackupAt: "2026-02-27T03:00:00Z",
    lastStatus: "success",
  },
  {
    id: "db-3",
    name: "analytics",
    engine: "postgres",
    schedule: "0 1 * * *",
    storageName: "s3-analytics",
    lastBackupAt: "2026-02-26T01:00:00Z",
    lastStatus: "failure",
  },
  {
    id: "db-4",
    name: "local-dev",
    engine: "sqlite",
    schedule: "@hourly",
    storageName: "local-dev",
    lastBackupAt: "2026-02-27T10:00:00Z",
    lastStatus: "running",
  },
];

export const recentRuns: BackupRun[] = [
  {
    id: "r-1",
    databaseId: "db-1",
    startedAt: "2026-02-27T02:00:00Z",
    endedAt: "2026-02-27T02:00:52Z",
    durationSeconds: 52,
    sizeBytes: 985432100,
    status: "success",
  },
  {
    id: "r-2",
    databaseId: "db-2",
    startedAt: "2026-02-27T03:00:00Z",
    endedAt: "2026-02-27T03:01:15Z",
    durationSeconds: 75,
    sizeBytes: 652139120,
    status: "success",
  },
  {
    id: "r-3",
    databaseId: "db-3",
    startedAt: "2026-02-26T01:00:00Z",
    endedAt: "2026-02-26T01:00:18Z",
    durationSeconds: 18,
    sizeBytes: 0,
    status: "failure",
    errorMessage: "S3 upload failed: access denied",
  },
  {
    id: "r-4",
    databaseId: "db-4",
    startedAt: "2026-02-27T10:00:00Z",
    status: "running",
  },
];

export const alerts: Alert[] = [
  {
    id: "a-1",
    databaseId: "db-3",
    severity: "critical",
    type: "backup_failed",
    message: "Analytics backup failed to upload. Check IAM permissions.",
    createdAt: "2026-02-26T01:02:00Z",
  },
  {
    id: "a-2",
    databaseId: "db-1",
    severity: "warning",
    type: "size_anomaly",
    message: "Production backup grew 23% week-over-week.",
    createdAt: "2026-02-25T02:05:00Z",
  },
];
