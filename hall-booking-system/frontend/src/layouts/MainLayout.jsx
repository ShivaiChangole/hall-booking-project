import { Link } from "react-router-dom";

export default function MainLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col">
        <div className="px-6 py-5 text-2xl font-bold border-b border-slate-700">
          Hall Booking
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="/bookings">Bookings</NavLink>
          <NavLink to="/bookings/new">New Booking</NavLink>
          <NavLink to="/calendar">Calendar</NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-white border-b flex items-center px-6">
          <h1 className="text-lg font-semibold text-gray-800">
            Hall Booking Management System
          </h1>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="block px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition"
    >
      {children}
    </Link>
  );
}
