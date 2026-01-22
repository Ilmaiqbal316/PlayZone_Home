import { useState, useEffect } from "react";
import { Play, Calendar, LayoutGrid, LogOut } from "lucide-react";


interface HeaderProps {
  userName: string;
  userInitials: string;
}

export function Header({ userName, userInitials }: HeaderProps) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };

  // const formatDate = (date: Date) => {
  //   return date.toLocaleDateString("en-US", {
  //     weekday: "long",
  //     month: "short",
  //     day: "numeric",
  //   });
  // };

  return (
    //<header className="flex items-center justify-between bg-[#000000] border-b border-border px-6 py-4">
      <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between bg-[#000000] px-4 py-4 md:px-6">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-orange">
          <Play className="h-6 w-6 text-primary-foreground fill-current" />
        </div>
        <div>
          <h1 className="text-lg font-bold text-foreground">PlayZone Manager</h1>
          <p className="text-sm text-muted-foreground">Active Sessions</p>
        </div>
      </div>

      {/* Right Section */}
      {/* <div className="flex items-center gap-4"> */}
        {/* Admin Badge */}
        {/* <button className="flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors">
          <Shield className="h-4 w-4" />
          Admin
        </button> */}

        {/* Divider */}
        {/* <div className="h-8 w-px bg-border" /> */}
        <div className="flex items-center justify-between md:justify-end gap-3 w-full md:w-auto">

        {/* Time */}
        <div className="text-center">
          <p className="text-2xl font-bold text-[#FF8904]">{formatTime(currentTime)}</p>
          {/* <p className="text-sm text-muted-foreground">{formatDate(currentTime)}</p> */}
        </div>

        {/* User */}
        {/* <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
            {userInitials}
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Logged in as</p>
            <p className="text-sm font-medium text-foreground">{userName}</p>
          </div>
        </div> */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-blue text-sm font-bold text-white">
          {userInitials}
        </div>
        <p className="text-sm font-medium text-foreground">{userName}</p>

        {/* Calendar */}
        <button className="flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">
          <Calendar className="h-5 w-5" />
        </button>

       {/* Grid */}
        <button className="flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">
          <LayoutGrid className="h-5 w-5" />
        </button>

        {/* Logout */}
        <button className="flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">
          <LogOut className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
