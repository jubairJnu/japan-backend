const { Schema, model } = require("mongoose");

const LessonSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
      unique: true,
      index: true,
    },
    vocabularyCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Lesson = model("Lesson", LessonSchema);

module.exports = Lesson;
