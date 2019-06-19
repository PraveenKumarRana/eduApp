const express = require("express");
const router = express.Router();
const {createCourse, getCourses} = require("../handlers/courses");

router.post("/user/:id/course/add",createCourse);
router.get("/courses/:id",getCourses);

module.exports = router;