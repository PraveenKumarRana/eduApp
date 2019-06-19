const db = require("../models");


exports.createCourse = async function(req, res, next){
    try{
        let course = await db.Course.create({
            name: req.body.name,
            desc: req.body.text,
            course_image_url: req.body.image_url
        });
        let foundUser = await db.User.findById(req.params.id);
        console.log("Printing from the createCourse")
        console.log(foundUser.courses);
        foundUser.courses.push(course.id);
        await foundUser.save();

        let foundCourse = await db.Course.findById(course._id).populate("user", {
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
        let foundCourses = await db.courses.findById(req.params.id);
        if(foundCourses){
            return res.status(200).json(foundCourses);
        } else {
            return res.status(400).json({
                message: "No courses present."
            })
        }
    } catch(e){
        next(e);
    }
}