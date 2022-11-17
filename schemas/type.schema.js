const mongoose = require('mongoose')

const Schema = mongoose.Schema

const typeSchema = new Schema({
    title: {type: String, required: true},
    text: {type: String, required: true}
})

const typeEntity = mongoose.model('Type', typeSchema)

module.exports = typeEntity