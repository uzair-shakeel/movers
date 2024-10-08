const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

// Import routes
const blogRoutes = require("./routes/blog");
const bookingRoutes = require("./routes/booking");
const packingMaterialRoutes = require("./routes/packingMaterial");
const additionalServiceRoutes = require("./routes/additionalServices");
const basicPricing = require("./routes/basicPricing");

// Initialize express app
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes middleware
app.use("/api/blogs/", blogRoutes);
app.use("/api/bookings/", bookingRoutes);
app.use("/api/pricing/basic", basicPricing);
app.use("/api/pricing/packing", packingMaterialRoutes);
app.use("/api/pricing/additional", additionalServiceRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 20000, // Increase to 20 seconds
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Failed to connect to MongoDB:", err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
