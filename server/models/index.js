const mongoose = require("mongoose");
mongoose.set("debug", ture);
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/eduapp", {
    keepAlive: true,
    useMongoClient: true
});