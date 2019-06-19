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
    },
    time :{
        type : Number, 
        default: Date.now
    }
});

newsSchema.pre("remove", async function(next){
    try{
        // find a user
        let user = await User.findById(this.user);
        // remove the id of the message from their messages list
        user.news.remove(this.id);
        // save that user
        await user.save();
        // return next
        return next();
    } catch(err) {
        return next(err);
    }
});

const News = mongoose.model("News", newsSchema);
module.exports = News;