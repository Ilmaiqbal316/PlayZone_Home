import { useState } from "react";
import { Header } from "../components/Header";
import { SessionCard } from "../components/SessionCard";
import { WaitingList } from "../components/WaitingList";
import { Pagination } from "../components/Pagination";
import { NewEntryButton } from "../components/NewEntryButton";

// Mock data for sessions
const sessions = [
  { id: "1", name: "Emma Johnson", status: "active" as const, elapsedMinutes: 45, totalMinutes: 120 },
  { id: "2", name: "Liam Smith", status: "ending" as const, elapsedMinutes: 105, totalMinutes: 120 },
  { id: "3", name: "Olivia Williams", status: "active" as const, elapsedMinutes: 30, totalMinutes: 120 },
  { id: "4", name: "Noah Brown", status: "overtime" as const, elapsedMinutes: 135, totalMinutes: 120 },
  { id: "5", name: "Ava Davis", status: "active" as const, elapsedMinutes: 60, totalMinutes: 120 },
  { id: "6", name: "Ethan Martinez", status: "ending" as const, elapsedMinutes: 110, totalMinutes: 120 },
];

// Mock data for waiting list
const waitingCustomers = [
  { id: "1", name: "Sarah Johnson", initials: "SJ", time: "2:30 PM", isReady: true },
  { id: "2", name: "Mike Chen", initials: "MC", time: "2:45 PM" },
  { id: "3", name: "Emily Rodriguez", initials: "ER", time: "3:00 PM" },
  { id: "4", name: "Chris Anderson", initials: "CA", time: "3:15 PM" },
  { id: "5", name: "Jessica Lee", initials: "JL", time: "3:30 PM" },
];

export default function Index() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  return (
    <div className="flex min-h-screen flex-col bg-main-gradient">
      {/* Header */}
      <Header userName="Kavin" userInitials=" KV" />

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="flex gap-6 h-full">
          {/* Sessions Grid */}
          <div className="flex-1 flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {sessions.map((session) => (
                <SessionCard
                  key={session.id}
                  name={session.name}
                  status={session.status}
                  elapsedMinutes={session.elapsedMinutes}
                  totalMinutes={session.totalMinutes}
                />
              ))}
            </div>

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              className="mb-6"
            />

            {/* New Entry Button */}
            <div className="mt-auto">
              <NewEntryButton />
            </div>
          </div>

          {/* Waiting List Sidebar */}
          <div className="w-72 shrink-0">
            <WaitingList customers={waitingCustomers} />
          </div>
        </div>
      </main>
    </div>
  );
}
