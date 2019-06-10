const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    userProfileImage:{
        type: String
    },
    courses:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course"
    },
    news: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "News"
    },
    comments: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }
});

userSchema.pre("save", async function(req, res, next){
    try{
        if(!this.isModified("password")){
            return next();
        }
        let hashedPassword = await bcrypt.hash(this.password,10);
        this.password = hashedPassword;
        next();
    } catch(err){
        return next(err);
    }
});

// making helper function for comparing password.
userSchema.methods.comparePassword = async function(candidatePassword, next){
    try{
        let isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    } catch(err) {
        return next(err);
    }
};

const User = mongoose.model("User",userSchema);
module.exports = User;