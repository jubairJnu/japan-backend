const handleDuplicateError = () => {
  const errorSource = [
    {
      path: "",
      message: "Already Exist",
    },
  ];

  const statusCode = 400;

  return {
    statusCode,
    message: "validation Error",
    errorSource,
  };
};

module.exports = handleDuplicateError;
