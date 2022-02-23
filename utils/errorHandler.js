const errorHandler = (message, statusCode, res) => {
  res.status(statusCode).json({ success: false, message });
};

export default errorHandler;
