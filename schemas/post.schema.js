const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema({
    author: {type: String, required: true},
    subject: {type: String, required: true},
    theme: {type: String, required: true},
    group: {type: String, required: true},
    course: {type: String, required: true},
    description: {type: String, required: true},
    date: {type: Date, default: Date.now},
    files: [{type: Schema.Types.ObjectId, ref: 'File'}],
    type: {type: Schema.Types.ObjectId, ref: 'Type'}
})

const postEntity = mongoose.model('Post', postSchema)

module.exports = postEntity