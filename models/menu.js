const {model , Schema} = require ('mongoose')
const menu = new Schema({
    id : {type : String} ,
    Label :  { label : {
        type : Array , default : [] }} ,
    Description :  { description : {
        type : Array , default : [] }},
    Value : { value : {
        type : Array , default : [], }}
})
module.exports = model('menu' , menu)