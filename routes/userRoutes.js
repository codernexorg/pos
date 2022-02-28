import express from "express";
import {
  createUSer,
  getUser,
  loginUser,
  logOut,
} from "../controller/userController.js";
import { verifyUser, isAuthenticatedUser } from "../middleware/auth.js";

const userRoutes = express.Router();

userRoutes.post("/register", createUSer);
userRoutes.post("/login", loginUser);
userRoutes.get("/profile", isAuthenticatedUser, getUser);
userRoutes.post("/logout", isAuthenticatedUser, logOut);
userRoutes.post("/", verifyUser, (req, res) => {
  const user = req.user;
  res.status(200).json({ success: true, user });
});

export default userRoutes;
