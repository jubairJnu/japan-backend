const catchAsync = require("../../../utils/CatchAync");
const sendResponse = require("../../../utils/SendResponse");
const { UsersSerivces } = require("./user.services");

const createUser = catchAsync(async (req, res) => {
  const result = await UsersSerivces.creatUserIntoDB(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User Created Successfully",
    data: result,
  });
});

const getAllUsers = catchAsync(async (req, res) => {
  const result = await UsersSerivces.getAllUsersFromDB();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User Retrived Successfully",
    data: result,
  });
});

const updateAllUsers = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await UsersSerivces.updateUserIntoDB(id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User Update Successfully",
    data: result,
  });
});

module.exports = {
  UsersControllers: {
    createUser,
    getAllUsers,
    updateAllUsers,
  },
};
