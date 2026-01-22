import { Clock, UserCheck } from "lucide-react";
import { cn } from "../lib/utils";

type StatusType = "active" | "ending" | "overtime" | "waiting" | "ready";

interface StatusBadgeProps {
  status: StatusType;
  className?: string;
}

const statusConfig = {
  active: {
    label: "Active",
    bgClass: "bg-status-active-bg",
    textClass: "text-status-active",
    icon: null,
  },
  ending: {
    label: "Ending Soon",
    bgClass: "bg-status-ending-bg",
    textClass: "text-status-ending",
    icon: null,
  },
  overtime: {
    label: "Overtime",
    bgClass: "bg-status-overtime-bg",
    textClass: "text-status-overtime",
    icon: Clock,
  },
  waiting: {
    label: "Waiting",
    bgClass: "bg-status-waiting-bg",
    textClass: "text-status-waiting",
    icon: null,
  },
  ready: {
    label: "Ready",
    bgClass: "bg-status-ready-bg",
    textClass: "text-status-ready",
    icon: UserCheck,
  },
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
        config.bgClass,
        config.textClass,
        className
      )}
    >
      {Icon && <Icon className="h-3 w-3" />}
      {config.label}
    </span>
  );
}
