const express = require("express");
const router = express.Router();
const {createCourse, getCourses} = require("../handlers/courses");

router.post("/course/add",createCourse);
router.get("/courses",getCourses);

module.exports = router;