const { Schema, model } = require("mongoose");

const avatar = new Schema({
    id : String , 
    avatar : String
})

module.exports = model ("avatar" , avatar)