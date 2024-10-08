// controllers/basicPricingController.js
const BasicPricing = require("../models/basicPricing");

// Create a new basic pricing
const createBasicPricing = async (req, res) => {
  try {
    const basicPricing = new BasicPricing(req.body);
    await basicPricing.save();
    res.status(201).json(basicPricing);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all basic pricing items
const getBasicPricings = async (req, res) => {
  try {
    const pricings = await BasicPricing.find();
    res.status(200).json(pricings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single basic pricing by ID
const getBasicPricingById = async (req, res) => {
  try {
    const pricing = await BasicPricing.findById(req.params.id);
    if (!pricing) return res.status(404).json({ message: "Pricing not found" });
    res.status(200).json(pricing);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a basic pricing by ID
const updateBasicPricing = async (req, res) => {
  try {
    const pricing = await BasicPricing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!pricing) return res.status(404).json({ message: "Pricing not found" });
    res.status(200).json(pricing);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a basic pricing by ID
const deleteBasicPricing = async (req, res) => {
  try {
    const pricing = await BasicPricing.findByIdAndDelete(req.params.id);
    if (!pricing) return res.status(404).json({ message: "Pricing not found" });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createBasicPricing,
  getBasicPricings,
  getBasicPricingById,
  updateBasicPricing,
  deleteBasicPricing,
};
