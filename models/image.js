const { Schema, model } = require("mongoose");
const image = new  Schema({
  id: { type: String},
  Image : {type : String},
  Role : {type : String}

});

module.exports = model("image",image)