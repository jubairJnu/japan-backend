const { Router } = require("express");
const { UsersControllers } = require("./user.controller");

const router = Router();

router.get("/", UsersControllers.getAllUsers);
router.post("/", UsersControllers.createUser);
router.patch("/", UsersControllers.updateAllUsers);

module.exports = {
  UserRouters: router,
};
