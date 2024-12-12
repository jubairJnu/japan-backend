const { Router } = require("express");
const { UsersControllers } = require("./user.controller");
const auth = require("../../middleware/auth");

const router = Router();

router.get("/", auth, UsersControllers.getAllUsers);
router.post("/register", UsersControllers.createUser);
router.patch("/", auth, UsersControllers.updateAllUsers);

module.exports = {
  UserRouters: router,
};
