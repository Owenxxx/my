const mongoose = require("mongoose");

module.exports = mongoose.model("Users", mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  accounts: {
    type: Array,
    default: []
  }
}));