const {model , Schema} = require('mongoose')
const UserSchema = new Schema(
    {
        discordId: { type: String, required: true },
        serverId: { type: String, required: true },
        language: { type: String, required: true }
    }
)
module.exports = model('UserSchema' , UserSchema)