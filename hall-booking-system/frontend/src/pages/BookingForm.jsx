import { useState } from "react";
import { createBooking } from "../services/bookingService";
import { useNavigate } from "react-router-dom";

export default function BookingForm() {
  const navigate = useNavigate();

  const [bookingDate, setBookingDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bookingDate || !startTime || !endTime) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    createBooking({
      booking_date: bookingDate,
      start_time: startTime,
      end_time: endTime,
    })
      .then(() => {
        alert("Booking created successfully");
        navigate("/bookings");
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to create booking");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <h2>Create New Booking</h2>

      <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
        <div style={{ marginBottom: "10px" }}>
          <label>Date</label>
          <input
            type="date"
            value={bookingDate}
            onChange={(e) => setBookingDate(e.target.value)}
            required
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Start Time</label>
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            required
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>End Time</label>
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Saving..." : "Create Booking"}
        </button>
      </form>
    </div>
  );
}
