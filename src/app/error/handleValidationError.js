const handleValidationError = (err) => {
  const errorSource = Object.values(err.errors).map((val) => {
    return {
      path: val?.path,
      message: val?.message,
    };
  });
  const statusCode = 400;

  return {
    statusCode,
    message: "validation Error",
    errorSource,
  };
};

module.exports = handleValidationError;
