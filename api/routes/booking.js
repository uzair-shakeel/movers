const express = require("express");
const Booking = require("../models/booking");
const router = express.Router();

// Create a new booking
router.post("/", async (req, res) => {
  try {
    const {
      contactInfo,
      loadingAddress,
      unloadingAddress,
      arrivalDate,
      arrivalTime,
      pricing,
    } = req.body;

    const newBooking = new Booking({
      contactInfo,
      loadingAddress,
      unloadingAddress,
      arrivalDate,
      arrivalTime,
      pricing,
    });

    await newBooking.save();
    res
      .status(201)
      .json({ message: "Booking created successfully", booking: newBooking });
  } catch (error) {
    res.status(500).json({ error: "Failed to create booking" });
  }
});

// Fetch all bookings
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
});

module.exports = router;
