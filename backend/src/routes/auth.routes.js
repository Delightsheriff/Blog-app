const loginUser = require("../controllers/auth.controller/login-user");
const registerUser = require("../controllers/auth.controller/register-user");

const authRouter = require("express").Router();

authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);

module.exports = authRouter;
