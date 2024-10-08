// controllers/packingMaterialController.js

const PackingMaterial = require("../models/PackingMateial");

// Get all packing materials
const getPackingMaterials = async (req, res) => {
  try {
    const materials = await PackingMaterial.find();
    res.status(200).json(materials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new packing material
const createPackingMaterial = async (req, res) => {
  try {
    const packingMaterial = new PackingMaterial(req.body);
    await packingMaterial.save();
    res.status(201).json(packingMaterial);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const createManyPackingMaterials = async (req, res) => {
  try {
    const packingMaterials = await PackingMaterial.insertMany(req.body);
    console.log(packingMaterials);
    res.status(201).json(packingMaterials);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

// Update a packing material
const updatePackingMaterial = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedMaterial = await PackingMaterial.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    if (!updatedMaterial) {
      return res.status(404).json({ message: "Packing material not found" });
    }
    res.status(200).json(updatedMaterial);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a packing material
const deletePackingMaterial = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMaterial = await PackingMaterial.findByIdAndDelete(id);
    if (!deletedMaterial) {
      return res.status(404).json({ message: "Packing material not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getPackingMaterials,
  createPackingMaterial,
  updatePackingMaterial,
  deletePackingMaterial,
  createManyPackingMaterials,
};
