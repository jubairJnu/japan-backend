const config = require("../config");
const handleCastError = require("../error/handleCastError");
const handleDuplicateError = require("../error/handleDuplicateError");
const handleValidationError = require("../error/handleValidationError");

const globalErrorHandler = (err, req, res, next) => {
  // console.log("Error:", err);

  // Setting default values
  let statusCode = 500;
  let message = "Something went wrong!";
  let errorSources = [
    {
      path: "",
      message: "Something went wrong",
    },
  ];

  // Handling specific error types
  if (err?.name === "ValidationError") {
    const simplifiedError = handleValidationError(err);
    statusCode = simplifiedError?.statusCode || 400;
    message = simplifiedError?.message || "Validation Error";
    errorSources = simplifiedError?.errorSources;
  } else if (err?.name === "CastError") {
    const simplifiedError = handleCastError(err);
    statusCode = simplifiedError?.statusCode || 400;
    message = simplifiedError?.message || "Invalid Data Format";
    errorSources = simplifiedError?.errorSources;
  } else if (err?.code === 11000) {
    const simplifiedError = handleDuplicateError(err);
    statusCode = simplifiedError?.statusCode || 400;
    message = simplifiedError?.message || "Duplicate Key Error";
    errorSources = simplifiedError?.errorSources;
  } else if (err instanceof AppError) {
    statusCode = err?.statusCode || 500;
    message = err?.message || "Application Error";
    errorSources = [
      {
        path: "",
        message: err?.message,
      },
    ];
  } else if (err instanceof Error) {
    message = err?.message || "Server Error";
    errorSources = [
      {
        path: "",
        message: err?.message,
      },
    ];
  }

  // Final error response
  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    stack: config.node_env === "development" ? err?.stack : null, // Show stack trace only in development
  });
};

module.exports = globalErrorHandler;
