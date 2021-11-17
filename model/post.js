var {model, Schema} = require('mongoose')

var PostSchema = Schema({
    title: String,
    author: String,
    post_date: Date,
    post_data: {
        type: Date,
        default: Date.now
    }
})

module.exports = model('posts', PostSchema)