const mongoose = require("mongoose");
const User = require('./user');

const counterSchema = new mongoose.Schema({
    totalViews:{
        type: Number,
        required: true
    }
});

const Counter = mongoose.model("Counter", counterSchema);
module.exports  = Counter;