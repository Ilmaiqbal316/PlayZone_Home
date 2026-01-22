# PlayZone Home Dashboard React

## Features

- **Session Tracking**: Monitor active sessions with visual indicators for status:
  - **Active**: Session is currently running within time limits.
  - **Ending**: Session is approaching its time limit.
  - **Overtime**: Session has exceeded the allocated time.
- **Waiting List Management**: Sidebar display of customers waiting for stations, including readiness status and estimated times.
- **Pagination**: Built-in pagination support for managing large numbers of active sessions.
- **Responsive Layout**: A flexible grid layout that adapts to different screen sizes using Tailwind CSS.
- **404 Error Handling**: Custom "Page Not Found" route with navigation back to home.



- **Framework**: [React](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Charts**: [Recharts](https://recharts.org/)
- **Calendar**: [React Day Picker](https://daypicker.dev/)
- **Positioning**: [Floating UI](https://floating-ui.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Primitives**: [Radix UI](https://www.radix-ui.com/)

### Installation

1.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

2.  **Run the development server:**

    ```bash
    npm run dev
    ```

## Project Structure

- `src/pages/Index.tsx`: The main dashboard controller. Handles mock data for sessions and waiting lists, and composes the primary UI layout.
- `src/pages/NotFound.tsx`: A utility page for handling invalid routes, logging 404 errors to the console for debugging.
- `src/components/`: (Implied) Contains UI components such as `Header`, `SessionCard`, `WaitingList`, `Pagination`, and `NewEntryButton`.
