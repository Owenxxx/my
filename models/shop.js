const { Schema, model } = require("mongoose");

module.exports = model("Shop", Schema({
  id: { type: String, required: true, unique: true },
  stocks: { type: Array, default: [] }
}));