const catchAsync = require("../../../utils/CatchAync");
const sendResponse = require("../../../utils/SendResponse");
const { AuthServices } = require("./auth.services");

const loginUser = catchAsync(async (req, res) => {
  const result = await AuthServices.loginUserIntoDB(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User logined Successfully",
    data: result,
  });
});

module.exports = {
  AuthControllers: {
    loginUser,
  },
};
