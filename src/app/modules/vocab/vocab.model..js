const { model, Schema } = require("mongoose");

const VocabularySchema = new Schema(
  {
    word: {
      type: String,
      required: true,
    },
    meaning: {
      type: String,
      required: true,
    },
    pronunciation: {
      type: String,
      required: true,
    },
    whenToSay: {
      type: String,
      required: true,
    },
    lessonNo: {
      type: Number,
      required: true,
      index: true,
    },
    adminEmail: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Vocabulary = model("Vocabulary", VocabularySchema);

module.exports = Vocabulary;
