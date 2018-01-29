const mongoose = require('mongoose');

let messagesSchema = new mongoose.Schema(
    {
        name: {type: String},
        message: {type: String},
        date: {type: Date, default: Date.now}
    }   
)

module.exports = messagesSchema;