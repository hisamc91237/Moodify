const express = require("express");

const authRouter = express.Router();

const authController = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth.middleware");

/*
 * @post : /api/auth/register
 * @description : use to register a new user
 */
authRouter.post("/register", authController.registerUser);

/*
 * @post /api/auth/login
 * @description - Api to login the user
 */
authRouter.post("/login", authController.loginUser);

/*
 * @get /api/auth/get-me
 * @description : Get the user info
 */
authRouter.get("/get-me", authMiddleware.authUser, authController.getUserData);

module.exports = authRouter;
