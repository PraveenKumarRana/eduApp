const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/eduapp", {
    keepAlive: true,
    useMongoClient: true
});

module.exports.User = require("./user");
module.exports.Course = require("./courses");