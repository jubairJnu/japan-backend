const { Router } = require("express");
const { AuthControllers } = require("./auth.controller");

const router = Router();

router.post("/login", AuthControllers.loginUser);

module.exports = {
  AuthRouters: router,
};
