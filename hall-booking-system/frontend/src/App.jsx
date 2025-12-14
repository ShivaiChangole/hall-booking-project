import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";

import Dashboard from "./pages/Dashboard.jsx";
import BookingsList from "./pages/BookingsList.jsx";

import BookingForm from "./pages/BookingForm.jsx";
import CalendarView from "./pages/CalendarView.jsx";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/bookings" element={<BookingsList />} />

        <Route path="/bookings/new" element={<BookingForm />} />
        <Route path="/calendar" element={<CalendarView />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
