const { Schema, model } = require("mongoose");

const token = new Schema (
  {
    guildId: {
      type: String,
      required: true,
    },
    botType: {
      type: String,
      required: true,
    },
    botToken: {
      type: String,
      required: true,
    },

  }
)
module.exports = model ('token' , token)