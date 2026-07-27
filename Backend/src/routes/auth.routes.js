const express = require("express");

const authRouter = express.Router();

const authController = require("../controllers/auth.controller");

/*
 * @post : /api/auth/register
 * @description : use to register a new user
 */
authRouter.post("/register", authController.registerUser);

/*
 * @post /login
 * @description - Api to login the user
 */
authRouter.post("/login", authController.loginUser);

module.exports = authRouter;
