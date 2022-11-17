const mongoose = require('mongoose')

const Schema = mongoose.Schema

const fileSchema = new Schema({
    name: {type: String, required: true}
})

const fileEntity = mongoose.model('File', fileSchema)

module.exports = fileEntity