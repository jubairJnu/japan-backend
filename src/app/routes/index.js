const { Router } = require("express");
const { UserRouters } = require("../modules/user/user.routes");

const router = Router();

const moduleRoutes = [
  {
    path: "/users",
    route: UserRouters,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

module.exports = router;
