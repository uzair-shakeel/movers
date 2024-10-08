// models/BasicPricing.js
const mongoose = require("mongoose");

const basicPricingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const BasicPricing = mongoose.model("BasicPricing", basicPricingSchema);

module.exports = BasicPricing;
