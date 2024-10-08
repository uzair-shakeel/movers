const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  contactInfo: {
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
  },
  loadingAddress: {
    street: String,
    apt: String,
    city: String,
    state: String,
    zip: String,
    stairs: String,
  },
  unloadingAddress: {
    street: String,
    apt: String,
    city: String,
    state: String,
    zip: String,
    stairs: String,
  },
  arrivalDate: String,
  arrivalTime: String,
  pricing: Number,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Booking", bookingSchema);
