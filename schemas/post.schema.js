const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    subject: {type: String, required: true},
    theme: {type: String, required: true},
    group: {type: String, required: true},
    course: {type: String, required: true},
    description: {type: String, required: true},
    date: {type: Date, default: Date.now},
    filetitle: {type: String},
    fileid: {type: String},
    type: {type: String, required: true},
})

const postEntity = mongoose.model('Post', postSchema)

module.exports = postEntity
