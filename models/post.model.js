const { Schema, model } = require("mongoose")

const post_schema = new Schema({
    title: {
        type: String,
        require: true,
    },
    desc: {
        type: String,
        require: true,
    },
    author_username: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        default: "",
    }
}, { timestamps: true })

module.exports = model("post", post_schema)