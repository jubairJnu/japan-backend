const catchAsync = require("../../../utils/CatchAync");
const sendResponse = require("../../../utils/SendResponse");
const { LessonServices } = require("./lesson.service");

const createLesson = catchAsync(async (req, res) => {
  const result = await LessonServices.createLessonIntoDB(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Lesson Created Successfully",
    data: result,
  });
});
const getAllLesson = catchAsync(async (req, res) => {
  const result = await LessonServices.getAllLessonIntoDB();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Lesson retrived Successfully",
    data: result,
  });
});
const updateLesson = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await LessonServices.updateLessonIntoDB(id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Lesson update Successfully",
    data: result,
  });
});
const deleteLesson = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await LessonServices.deleteLessonIntoDB(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Lesson Deleted Successfully",
    data: result,
  });
});

module.exports = {
  LessonControllers: {
    createLesson,
    getAllLesson,
    updateLesson,
    deleteLesson,
  },
};
