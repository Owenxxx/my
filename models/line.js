const {model , Schema} = require ('mongoose')
const linee = new Schema (
    {
        id : {type : String} ,
        Channel : {type : Array , default : []} , 
        Line : {type : String}
    }
)
module.exports = model ('linee' , linee)