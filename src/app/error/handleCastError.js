const handleCastError = (err) => {
  const errorSource = [
    {
      path: err?.path,
      message: err?.message,
    },
  ];

  const statusCode = 400;

  return {
    statusCode,
    message: "validation Error",
    errorSource,
  };
};

module.exports = handleCastError;
