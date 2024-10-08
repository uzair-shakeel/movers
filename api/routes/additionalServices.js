// routes/additionalServiceRoutes.js
const express = require("express");
const router = express.Router();
const {
  createAdditionalService,
  getAdditionalServices,
  getAdditionalServiceById,
  updateAdditionalService,
  deleteAdditionalService,
} = require("../controllers/additionalServices");

// Create a new service
router.post("/", createAdditionalService);

// Get all services
router.get("/", getAdditionalServices);

// Get a specific service by ID
router.get("/:id", getAdditionalServiceById);

// Update a service by ID
router.put("/:id", updateAdditionalService);

// Delete a service by ID
router.delete("/:id", deleteAdditionalService);

module.exports = router;
