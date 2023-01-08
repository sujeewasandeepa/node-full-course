const express = require("express");
const authRouter = express.Router();
const AuthController = require('../controllers/AuthController');

authRouter.post("/signup", AuthController.signup);
authRouter.post("/login", AuthController.login);

module.exports = authRouter;