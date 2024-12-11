const { Router } = require("express");
const { UserRouters } = require("../modules/user/user.routes");
const { LessonRouters } = require("../modules/lesson/lesson.routes");

const router = Router();

const moduleRoutes = [
  {
    path: "/users",
    route: UserRouters,
  },
  {
    path: "/lessons",
    route: LessonRouters,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

module.exports = router;
