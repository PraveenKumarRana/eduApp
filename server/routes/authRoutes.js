const express = require("express");
const router = express.Router();

const {signup, signin, querySendMail} = require("../handlers/auth");

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/querymail", querySendMail);

module.exports = router;