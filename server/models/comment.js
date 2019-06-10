const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
},{
    timestamp: true
}
);

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;