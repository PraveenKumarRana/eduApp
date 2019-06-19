const mongoose = require("mongoose");
const User = require('./user');

const newsSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    comment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }
},{
    timestamp: true
})

const News = mongoose.model("News", newsSchema);
module.exports = News;