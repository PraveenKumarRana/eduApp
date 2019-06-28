const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect("mongodb://Praveen:praveen123@ds257241.mlab.com:57241/eduapp", {
    keepAlive: true,
    useNewUrlParser: true
});

module.exports.User = require("./user");
module.exports.News = require("./news");
module.exports.Course = require("./courses");
module.exports.Counter = require("./totalPageViews");