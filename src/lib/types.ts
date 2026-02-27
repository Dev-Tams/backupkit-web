export type Team = {
  id: string;
  name: string;
  createdAt: string;
};

export type Subscriber = {
  id: string;
  name: string;
  email: string;
  teamId: string;
  createdAt: string;
};

export type Database = {
  id: string;
  name: string;
  engine: "postgres" | "mysql" | "sqlite";
  schedule: string;
  storageName: string;
  lastBackupAt?: string;
  lastStatus?: "success" | "failure" | "running";
};

export type BackupRun = {
  id: string;
  databaseId: string;
  startedAt: string;
  endedAt?: string;
  durationSeconds?: number;
  sizeBytes?: number;
  status: "success" | "failure" | "running";
  errorMessage?: string;
};

export type Alert = {
  id: string;
  databaseId: string;
  severity: "warning" | "critical";
  type: "backup_failed" | "backup_missed" | "size_anomaly";
  message: string;
  createdAt: string;
};
