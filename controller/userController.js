import errorHandler from "../utils/errorHandler.js";
import User from "../models/userModels.js";
import sendToken from "../utils/sendToken.js";
//Create User
export const createUSer = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(errorHandler("Email & Password Required", 400, res));
  }

  const userExist = await User.findOne({ email });
  if (userExist) {
    return next(errorHandler("User Already Exist", 400, res));
  }
  const user = await User.create(req.body);
  sendToken(user, res, 201);
};

//Login User

export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(errorHandler("Email & Password Required", 400, res));
  }
  let user = await User.findOne({ email });
  if (!user) {
    return errorHandler("Invalid Email or Password", 401, res);
  }

  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return errorHandler("Invalid Email or Password", 401, res);
  }

  sendToken(user, res, 200);
};

//Get User Pofile

export const getUser = async (req, res) => {
  const user = req.user;
  console.log(user);

  res.status(200).json({ success: true, user });
};
