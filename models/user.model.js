const mongoose = require('mongoose')

const user_schema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
        min: 8,
        max: 20,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    }
}, {timestamps: true})

module.exports = mongoose.model("user", user_schema)