const { Schema, model } = require("mongoose");
const toto= new  Schema({
  id: { type: String},
  price : {type : Number},
  ownerId : {type : String},
  steck: { tokens : {
    type : Array , default : [],
  } }
});

module.exports = model("toto",toto)