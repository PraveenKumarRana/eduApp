const db = require("../models");

exports.createCourse = async function(req, res, next){
    try{
        let course = await db.Course.create({
            name: req.body.name,
            desc: req.body.text,
            instructor: req.body.instructor
        });
        let foundUser = db.User.findById(req.params.id);
        foundUser.courses.push(course.id);
        await foundUser.save();

        let foundCourse = await db.Course.findById(message._id).populate("user", {
            username: true,
            profileImageUrl: true
        });
        return res.status(200).json(foundCourse);
    } catch(er){
        console.log(er);
        return res.status(400);
    }
}

exports.getCourses = async function(req, res, next){
    try{
        let foundCourses = await db.courses.find();
        if(foundCourses){
            return res.status(200).json(foundCourses);
        } else {
            return res.status(400).json({
                message: "No course present."
            })
        }
    } catch(e){
        next(e);
    }
}