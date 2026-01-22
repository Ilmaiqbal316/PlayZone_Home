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
  // { id: "7", name: "Sophia Garcia", status: "active" as const, elapsedMinutes: 15, totalMinutes: 60 },
  // { id: "8", name: "Mason Rodriguez", status: "active" as const, elapsedMinutes: 75, totalMinutes: 120 },
  // { id: "9", name: "Isabella Wilson", status: "overtime" as const, elapsedMinutes: 125, totalMinutes: 120 },
  // { id: "10", name: "James Anderson", status: "ending" as const, elapsedMinutes: 95, totalMinutes: 120 },
  // { id: "11", name: "Charlotte Thomas", status: "active" as const, elapsedMinutes: 20, totalMinutes: 120 },
  // { id: "12", name: "Benjamin Taylor", status: "active" as const, elapsedMinutes: 80, totalMinutes: 120 },
  // { id: "13", name: "Amelia Moore", status: "ending" as const, elapsedMinutes: 115, totalMinutes: 120 },
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
  // const itemsPerPage = 6;

  // const totalPages = Math.ceil(sessions.length / itemsPerPage);

  // const paginatedSessions = sessions.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="flex min-h-screen flex-col bg-main-gradient">
      {/* Header */}
      <Header userName="Kavin" userInitials=" KV" />

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="flex flex-col lg:flex-row gap-6 h-full">
          {/* Sessions Grid */}
          <div className="flex-1 flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
               {sessions.map((session) => (
              // {paginatedSessions.map((session) => (
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
          <div className="w-full lg:w-72 shrink-0">
            <WaitingList customers={waitingCustomers} />
          </div>
        </div>
      </main>
    </div>
  );
}
