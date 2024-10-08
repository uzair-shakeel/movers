// routes/packingMaterialRoutes.js

const express = require("express");
const {
  getPackingMaterials,
  createPackingMaterial,
  updatePackingMaterial,
  deletePackingMaterial,
  createManyPackingMaterials,
} = require("../controllers/packingMaterial");

const router = express.Router();

// GET all packing materials
router.get("/", getPackingMaterials);

// POST a new packing material
router.post("/", createPackingMaterial);

router.post("/bulk", createManyPackingMaterials);

// PUT (update) a packing material by ID
router.put("/:id", updatePackingMaterial);

// DELETE a packing material by ID
router.delete("/:id", deletePackingMaterial);

module.exports = router;
