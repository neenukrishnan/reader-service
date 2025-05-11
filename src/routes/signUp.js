const express = require("express");
const ownerSignUp = require("../controller/signUp/owner-sign-up");


const signUpRouter = express.Router();

signUpRouter.post("/owner-sign-up", ownerSignUp)
module.exports = signUpRouter;
