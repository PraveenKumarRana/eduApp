const express = require("express");
const router = express.Router();
const {getPageViews} = require("../handlers/pageViews");

router.get("/get",getPageViews);

module.exports = router;