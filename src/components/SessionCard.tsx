import { Plus, Timer } from "lucide-react";
import { StatusBadge } from "./StatusBadge";
import { cn } from "../lib/utils";

type SessionStatus = "active" | "ending" | "overtime";

interface SessionCardProps {
  name: string;
  status: SessionStatus;
  elapsedMinutes: number;
  totalMinutes: number;
  className?: string;
}

function formatTime(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}`;
}

function getStatusStyles(status: SessionStatus): string {
  switch (status) {
    case "active":
      return "border-status-active shadow-[0px_25px_50px_-12px_var(--tw-shadow-color)] shadow-status-active/20";
    case "ending":
      return "border-status-ending shadow-[0px_25px_50px_-12px_var(--tw-shadow-color)] shadow-status-ending/20";
    case "overtime":
      return "border-status-overtime shadow-[0px_25px_50px_-12px_var(--tw-shadow-color)] shadow-status-overtime/20";
    default:
      return "border-primary shadow-[0px_25px_50px_-12px_var(--tw-shadow-color)] shadow-primary/20";
  }
}

export function SessionCard({
  name,
  status,
  elapsedMinutes,
  totalMinutes,
  className,
}: SessionCardProps) {
  const progressPercent = Math.min((elapsedMinutes / totalMinutes) * 100, 100);

  return (
    <div
      className={cn(
        "relative rounded-xl border p-5 transition-all",
        getStatusStyles(status),
        className
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <StatusBadge status={status} className="bg-secondary" />
        <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
          <Plus className="h-4 w-4" />
        </button>
      </div>

      {/* Name */}
      <h3 className="text-lg font-semibold text-foreground mb-4">{name}</h3>

      {/* Timer */}
      <div className="flex items-center gap-3 mb-4">
        <Timer className={cn("h-10 w-10", "text-primary")} />
        <span className={cn("timer-display", "text-primary")}>
          {formatTime(elapsedMinutes)}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="progress-bar-track">
          <div
            className={cn("progress-bar-fill", "bg-primary")}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <p className="text-sm text-muted-foreground">
          {elapsedMinutes} / {totalMinutes} minutes
        </p>
      </div>
    </div>
  );
}
