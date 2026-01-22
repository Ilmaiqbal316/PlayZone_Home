import { Clock } from "lucide-react";
import { StatusBadge } from "./StatusBadge";
import { cn } from "../lib/utils";

interface WaitingListItemProps {
  name: string;
  initials: string;
  time: string;
  isReady?: boolean;
  className?: string;
}

export function WaitingListItem({
  name,
  initials,
  time,
  isReady = false,
  className,
}: WaitingListItemProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-xl bg-secondary/50 p-3",
        className
      )}
    >
      {/* Avatar */}
      <div className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium",
        isReady ? "bg-status-ready-bg text-status-ready" : "bg-muted text-muted-foreground"
      )}>
        {initials}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-foreground truncate">{name}</p>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" />
          <span>{time}</span>
        </div>
      </div>

      {/* Status */}
      <StatusBadge status={isReady ? "ready" : "waiting"} />
    </div>
  );
}
