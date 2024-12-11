const catchAsync = require("../../../utils/CatchAync");
const sendResponse = require("../../../utils/SendResponse");
const { VocabServices } = require("./vocab.service");

const createVocab = catchAsync(async (req, res) => {
  const { email } = req.user;
  const result = await VocabServices.createVocabIntoDB(req.body, email);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Vocab Created Successfully",
    data: result,
  });
});
const getAllVocab = catchAsync(async (req, res) => {
  const { lesson } = req.query;
  const result = await VocabServices.getAllVocabFromDB(lesson);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Vocab retrived Successfully",
    data: result,
  });
});
const updateVocab = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await VocabServices.updateVocabIntoDB(id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Vocab Update Successfully",
    data: result,
  });
});
const deleteVocab = catchAsync(async (req, res) => {
  const { id } = req.user;
  const result = await VocabServices.deleteVocabIntoDB(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Vocab Deleted Successfully",
    data: result,
  });
});

// exports

module.exports = {
  VocabControllers: {
    createVocab,
    getAllVocab,
    updateVocab,
    deleteVocab,
  },
};
