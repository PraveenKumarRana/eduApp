const express = require("express");
const router = express.Router();
const {createNews, getNews} = require("../handlers/news");


router.get("/news/news_item/:id", getNews);
router.post("/user/:id/news/create", createNews);


module.exports = router;