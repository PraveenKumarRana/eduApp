require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
const errorHandler = require("./handlers/error");
const authRoutes = require("./routes/authRoutes");
const courseRoutes = require("./routes/courseRoutes");
const bodyParser = require("body-parser");
const {ensureCorrectUser, loginRequired} = require("./middleware/auth");
const db = require("./models");
const newsRoutes = require("./routes/newsRoutes");

app.use(cors());
app.use(bodyParser.json());

// All routes will be go here...
app.use("/api/auth", authRoutes);
app.use("/api",courseRoutes);
app.use("/api/courses", async function(req, res, next){
    try{
        let courses = await db.Course.find()
        .populate("user", {
            username: true,
            profileImageUrl: true
        });
        console.log("Inside /courses/all");
        console.log(courses);
        return res.status(200).json(courses);
    } catch(err){
        return next(err);
    }
})

app.use("/api/news", async function(req, res, next){
    try{
        let news = await db.News.find().sort({time:"desc"})
        .populate("user", {
            username: true,
            profileImageUrl: true
        });
        console.log("Inside /news");
        return res.status(200).json(news);
    } catch(err){
        return next(err);
    }
})

app.use("/api", newsRoutes);

app.use(function(req, res, next){
   let err = new Error("Page not Found!");
   err.status = 404;
   next(err);
});
app.use(errorHandler);

app.listen(port, function(req,res){
    console.log(`The app is running at port no : ${port}`);
});