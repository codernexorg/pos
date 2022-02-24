const errorHandler = (err, statusCode, res) => {
  if (err.code === 11000) {
    err = `Duplicate ${Object.keys(err.keyValue)}:${Object.values(
      err.keyValue
    )} `;
  }
  res.status(statusCode).json({ success: false, message: err });
};

export default errorHandler;
