import { Users } from "lucide-react";
import { WaitingListItem } from "./WaitingListItem";

interface WaitingCustomer {
  id: string;
  name: string;
  initials: string;
  time: string;
  isReady?: boolean;
}

interface WaitingListProps {
  customers: WaitingCustomer[];
}

export function WaitingList({ customers }: WaitingListProps) {
  return (
    <div className="rounded-xl  border border-border p-4 h-full">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-status-ready-bg">
          <Users className="h-5 w-5 text-status-ready" />
        </div>
        <div>
          <h2 className="text-base font-semibold text-foreground">Waiting List</h2>
          <p className="text-sm text-muted-foreground">
            {customers.length} customers waiting
          </p>
        </div>
      </div>

      {/* List */}
      <div className="space-y-2">
        {customers.map((customer) => (
          <WaitingListItem
            key={customer.id}
            name={customer.name}
            initials={customer.initials}
            time={customer.time}
            isReady={customer.isReady}
          />
        ))}
      </div>
    </div>
  );
}
