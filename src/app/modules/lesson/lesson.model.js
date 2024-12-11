const { Schema } = require("mongoose");

const LessonSchema = new Schema(
  {
    lessonName: {
      type: String,
      required: true,
    },
    lessonNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    vocabularyCount: {
      type: Number,
      default: 0, // Automatically starts at 0
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

module.exports = model("Lesson", LessonSchema);
