const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
const errorHandler = require("./handlers/errorHandler");

app.use(cors());
app.use(express.json());

// All routes will be go here...

app.use(function(req, res, next){
   let err = new Error("Page not Found!");
   err.status = 404;
   next(err);
});
app.use(errorHandler);

app.listen(port, function(req,res){
    console.log(`The app is running at port no : ${port}`);
});