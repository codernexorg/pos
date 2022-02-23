import express from "express";
import {
  createUSer,
  getUser,
  loginUser,
} from "../controller/userController.js";
import { verifyUser, isAuthenticatedUser } from "../middleware/auth.js";

const userRoutes = express.Router();

userRoutes.post("/register", createUSer);
userRoutes.post("/login", loginUser);
userRoutes.get("/profile", isAuthenticatedUser, getUser);
userRoutes.post("/logout", verifyUser, (req, res) => {
  res
    .cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    })
    .status(200)
    .json({ success: true, messgae: "Logout Succesfull" });
});
userRoutes.post("/", verifyUser, (req, res) => {
  const user = req.user;
  res.status(200).json({ success: true, user });
});

export default userRoutes;
