const Vocabulary = require("./vocab.model.");

const createVocabIntoDB = async (payload, email) => {
  payload.adminEmail = email;

  const result = await Vocabulary.create(payload);
  return result;
};

// get all

const getAllVocabFromDB = async (lesson) => {
  const query = lesson ? { lessonNo: new RegExp(lesson, "i") } : {};

  const result = await Vocabulary.find(query);
  return result;
};

// update

const updateVocabIntoDB = async (id, payload) => {
  const result = await Vocabulary.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

// delete

const deleteVocabIntoDB = async (id) => {
  const result = await Vocabulary.findByIdAndDelete(id);
  return result;
};

// exports ''

module.exports = {
  VocabServices: {
    createVocabIntoDB,
    getAllVocabFromDB,
    updateVocabIntoDB,
    deleteVocabIntoDB,
  },
};
