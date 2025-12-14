const Hall = require("./Hall");
const Booking = require("./Booking");
const User = require("./User");

// Relationships
Hall.hasMany(Booking, { foreignKey: "hall_id" });
Booking.belongsTo(Hall, { foreignKey: "hall_id" });

User.hasMany(Booking, { foreignKey: "created_by" });
Booking.belongsTo(User, { foreignKey: "created_by" });

module.exports = {
  Hall,
  Booking,
  User,
};
