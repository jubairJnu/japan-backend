const jwt = require("jsonwebtoken");
const AppError = require("../error/AppError");
const config = require("../config");
const User = require("../modules/user/user.model");

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    // check if token exist
    if (!token) {
      throw new AppError(401, "Your are not authorized");
    }

    // if token is valid or not

    const decoded = jwt.verify(token, config.jwt_access_token);
    if (!decoded) {
      throw new AppError(403, "Invalid or expired token");
    }

    // eslint-disable-next-line no-unused-vars
    const { email, iat } = decoded;

    // check user

    const user = await User.findOne({ email });

    if (!user) {
      throw new AppError(404, "User Not Found");
    }

    req.user = decoded;
    next();
  } catch (error) {
    res.status(error?.statusCode ? error.statusCode : 500).json({
      error,
      success: false,
      message: error?.message,
    });
  }
};

module.exports = auth;
