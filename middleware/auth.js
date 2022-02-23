import jwt from "jsonwebtoken";
import errorHandler from "../utils/errorHandler.js";
import User from "../models/userModels.js";

export const isAuthenticatedUser = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return errorHandler("Please Login to access", 401, res);
  }
  let { id } = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(id);

  next();
};

export const verifyUser = async (req, res, next) => {
  const { token } = req.body;
  if (!token || token === "undefined") {
    return errorHandler("Unauthenticated User", 401, res);
  }
  let { id } = jwt.verify(token, process.env.JWT_SECRET);
  if (!id) {
    return errorHandler("Unauthenticated User", 401, res);
  }
  req.user = await User.findById(id);
  next();
};
