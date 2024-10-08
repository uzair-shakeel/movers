// routes/basicPricingRoutes.js
const express = require("express");
const router = express.Router();
const {
  createBasicPricing,
  getBasicPricings,
  getBasicPricingById,
  updateBasicPricing,
  deleteBasicPricing,
} = require("../controllers/basicPricing");

// Create a new basic pricing
router.post("/", createBasicPricing);

// Get all basic pricings
router.get("/", getBasicPricings);

// Get a specific basic pricing by ID
router.get("/:id", getBasicPricingById);

// Update a basic pricing by ID
router.put("/:id", updateBasicPricing);

// Delete a basic pricing by ID
router.delete("/:id", deleteBasicPricing);

module.exports = router;
