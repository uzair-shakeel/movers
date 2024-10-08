// models/PackingMaterial.js

const mongoose = require("mongoose");

const PackingMaterialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const PackingMaterial = mongoose.model(
  "PackingMaterial",
  PackingMaterialSchema
);
module.exports = PackingMaterial;
