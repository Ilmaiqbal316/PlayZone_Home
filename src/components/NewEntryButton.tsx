import { cn } from "../lib/utils";

interface NewEntryButtonProps {
  onClick?: () => void;
  className?: string;
}

export function NewEntryButton({ onClick, className }: NewEntryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full rounded-xl bg-gradient-orange py-4 text-lg font-semibold text-primary-foreground transition-all hover:opacity-90 active:scale-[0.99]",
        className
      )}
    >
      New Entry
    </button>
  );
}
