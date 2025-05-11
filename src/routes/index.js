const express = require("express");
const signUpRouter = require("./signUp");

const router = express.Router();

router.use("/sign-up", signUpRouter)

module.exports = router;
