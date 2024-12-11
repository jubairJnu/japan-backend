const Lesson = require("./lesson.model");

const createLessonIntoDB = async (payload) => {
  const result = await Lesson.create(payload);
  return result;
};
const getAllLessonIntoDB = async () => {
  const result = await Lesson.find();
  return result;
};
const updateLessonIntoDB = async (id, payload) => {
  const result = await Lesson.findByIdAndUpdate(id, payload, { new: true });
  return result;
};
const deleteLessonIntoDB = async (id) => {
  const result = await Lesson.findByIdAndDelete(id);
  return result;
};

module.exports = {
  LessonServices: {
    createLessonIntoDB,
    getAllLessonIntoDB,
    updateLessonIntoDB,
    deleteLessonIntoDB,
  },
};
