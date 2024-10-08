const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

// Import routes
const blogRoutes = require("./routes/blog");
const bookingRoutes = require("./routes/booking");

// Initialize express app
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes middleware
app.use("/api", blogRoutes);
app.use("/api", bookingRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Failed to connect to MongoDB:", err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
