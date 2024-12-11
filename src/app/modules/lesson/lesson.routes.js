const { Router } = require("express");
const { LessonControllers } = require("./lesson.controller");

const router = Router();

router.get("/", LessonControllers.getAllLesson);
router.post("/", LessonControllers.createLesson);
router.patch("/:id", LessonControllers.updateLesson);
router.delete("/:id", LessonControllers.deleteLesson);

module.exports = {
  LessonRouters: router,
};
