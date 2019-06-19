const express = require("express");
const router = express.Router();
const {createNews} = require("../handlers/news");

router.post("/user/:id/news/create", createNews);

module.exports = router;