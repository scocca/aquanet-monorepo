const mongoose = require('mongoose')

const personasSchema = new mongoose.Schema({
    userName: String,
    email:String,
    password:String
})

const PersonasModel = mongoose.model("personas1", personasSchema)
module.exports = PersonasModel