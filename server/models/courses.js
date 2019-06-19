const mongoose = require("mongoose");
const User = require("./user");

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc:{
        type: String,
        required: true,
    },
    course_image_url:{
        type: String,
        required: true
    },
    time :{ 
        type : Date, 
        default: Date.now
    }
});

// This hook will help us to get rid of the situation that when user deletes the course then it should not be the case that the message id is present in the list of the user's courses list.
courseSchema.pre("remove", async function(next){
    try{
        // find a user
        let user = await User.findById(this.user);
        // remove the id of the message from their messages list
        user.courses.remove(this.id);
        // save that user
        await user.save();
        // return next
        return next();
    } catch(err) {
        return next(err);
    }
});

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;