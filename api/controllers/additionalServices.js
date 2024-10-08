// controllers/additionalServiceController.js
const AdditionalService = require("../models/additionalServices");

// Create a new additional service
const createAdditionalService = async (req, res) => {
  try {
    const additionalService = new AdditionalService(req.body);
    console.log(req.body);
    await additionalService.save();
    res.status(201).json(additionalService);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all additional services
const getAdditionalServices = async (req, res) => {
  try {
    const services = await AdditionalService.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single additional service
const getAdditionalServiceById = async (req, res) => {
  try {
    const service = await AdditionalService.findById(req.params.id);
    if (!service) return res.status(404).json({ message: "Service not found" });
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an additional service
const updateAdditionalService = async (req, res) => {
  try {
    const service = await AdditionalService.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!service) return res.status(404).json({ message: "Service not found" });
    res.status(200).json(service);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an additional service
const deleteAdditionalService = async (req, res) => {
  try {
    const service = await AdditionalService.findByIdAndDelete(req.params.id);
    if (!service) return res.status(404).json({ message: "Service not found" });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createAdditionalService,
  getAdditionalServices,
  getAdditionalServiceById,
  updateAdditionalService,
  deleteAdditionalService,
};
