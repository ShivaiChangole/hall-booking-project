const express = require("express");
const cors = require("cors");
const path = require("path");

// ✅ LOAD ENV ONCE, FROM ABSOLUTE PATH
require("dotenv").config({
  path: path.resolve(__dirname, "../../../config/db.env"),
});

const sequelize = require("./config/database");
require("./models"); // load all models

// ✅ IMPORT ROUTES (ADD HERE)
const bookingRoutes = require("./routes/booking.routes");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ REGISTER ROUTES (ADD HERE)
app.use("/api/v1", bookingRoutes);

// Health check
app.get("/api/v1/health", (req, res) => {
  res.status(200).json({ status: "Booking service is running" });
});

const PORT = process.env.PORT || 5001;

// (Optional debug – can remove later)
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD type:", typeof process.env.DB_PASSWORD);

// ✅ DB SYNC + SERVER START (MUST BE LAST)
sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("✅ Database synced successfully");
    app.listen(PORT, () =>
      console.log(`🚀 Booking service running on port ${PORT}`)
    );
  })
  .catch((err) => {
    console.error("❌ Database sync failed:", err);
  });
