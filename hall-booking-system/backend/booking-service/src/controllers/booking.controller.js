const { Booking, Hall, User } = require("../models");

// GET all bookings
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll({
      where: { is_deleted: false },
      include: [Hall, User],
      order: [["createdAt", "DESC"]],
    });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET booking by ID
exports.getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findByPk(req.params.id, {
      include: [Hall, User],
    });

    if (!booking || booking.is_deleted) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// CREATE booking
exports.createBooking = async (req, res) => {
  try {
    const { booking_date, start_time, end_time } = req.body;

    if (!booking_date || !start_time || !end_time) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Optional conflict check (no hall yet)
    const conflict = await Booking.findOne({
      where: {
        booking_date,
        start_time,
        end_time,
        is_deleted: false,
      },
    });

    if (conflict) {
      return res
        .status(400)
        .json({ message: "Time slot already booked" });
    }

    const booking = await Booking.create({
      booking_date,
      start_time,
      end_time,
    });

    res.status(201).json(booking);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};


// UPDATE booking
exports.updateBooking = async (req, res) => {
  try {
    const booking = await Booking.findByPk(req.params.id);

    if (!booking || booking.is_deleted) {
      return res.status(404).json({ message: "Booking not found" });
    }

    await booking.update(req.body);
    res.json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE booking (soft delete)
exports.deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByPk(req.params.id);

    if (!booking || booking.is_deleted) {
      return res.status(404).json({ message: "Booking not found" });
    }

    booking.is_deleted = true;
    await booking.save();

    res.json({ message: "Booking deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
