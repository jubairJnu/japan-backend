const config = require("../../config");
const AppError = require("../../error/AppError");
const User = require("../user/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginUserIntoDB = async (payload) => {
  // checking if the user is exist
  const user = await User.findOne({ email: payload.email }).select("+password");

  if (!user) {
    throw new AppError(404, "This user is not found !");
  }

  if (!user || !(await bcrypt.compare(payload?.password, user?.password))) {
    throw new AppError(403, "Password does not match");
  }

  //create token and sent to the  client

  const jwtPayload = {
    email: user.email,
    userId: user.id,
    role: user.role,
  };

  const accessToken = jwt.sign(jwtPayload, config.jwt_access_token, {
    expiresIn: "10d",
  });

  // create refresh token
  const refreshToken = jwt.sign(jwtPayload, config.jwt_refresh_token, {
    expiresIn: "15d",
  });

  return {
    accessToken,
    refreshToken,
  };
};

// exports

module.exports = {
  AuthServices: {
    loginUserIntoDB,
  },
};
