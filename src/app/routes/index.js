const { Router } = require("express");
const { UserRouters } = require("../modules/user/user.routes");
const { LessonRouters } = require("../modules/lesson/lesson.routes");
const { VocabRouters } = require("../modules/vocab/vocab.routes");
const { AuthRouters } = require("../modules/auth/auth.routes");

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
  {
    path: "/vocabs",
    route: VocabRouters,
  },
  {
    path: "/auth",
    route: AuthRouters,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

module.exports = router;
