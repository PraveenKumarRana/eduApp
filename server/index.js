require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
const errorHandler = require("./handlers/error");
const authRoutes = require("./routes/authRoutes");
const courseRoutes = require("./routes/courseRoutes");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

// All routes will be go here...
app.use("/api/auth", authRoutes);
app.use("/api",courseRoutes);

app.use(function(req, res, next){
   let err = new Error("Page not Found!");
   err.status = 404;
   next(err);
});
app.use(errorHandler);

app.listen(port, function(req,res){
    console.log(`The app is running at port no : ${port}`);
});