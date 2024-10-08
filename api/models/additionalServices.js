// models/AdditionalService.js
const mongoose = require("mongoose");

const additionalServiceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const AdditionalService = mongoose.model(
  "AdditionalService",
  additionalServiceSchema
);

module.exports = AdditionalService;
