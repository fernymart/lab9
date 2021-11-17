var {model, Schema} = require('mongoose')

var PostSchema = Schema({
    title: String,
    author: String,
    post_data: String,
    post_date: {
        type: Date,
        default: Date.now
    }
})

module.exports = model('posts', PostSchema)