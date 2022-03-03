import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import cors from "cors";
/**
 * Import Routes
 */
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import purchaseRoutes from "./routes/purchaseRoutes.js";
import supplierRoutes from "./routes/supplierRoutes.js";
import sellRoutes from "./routes/sellRoutes.js";
import accountRoutes from "./routes/accountRoutes.js";
import expenseRoutes from "./routes/expenseRoutes.js";
import reportRoutes from "./routes/reportRoutes.js";
import dueRoutes from "./routes/dueRoutes.js";
import customerRoutes from "./routes/customerRoutes.js";
/**
 * Import Middleware
 */
import { isAuthenticatedUser } from "./middleware/auth.js";

/**
 * ENV
 */
dotenv.config();
const app = express();

/**
 * Middleware
 */
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "30mb" }));

/**
 * Root Path
 */
app.get("/", express.static("static"));

/**
 * Using Routes
 */
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/product", isAuthenticatedUser, productRoutes);
app.use("/api/v1/category", isAuthenticatedUser, categoryRoutes);
app.use("/api/v1/purchase", isAuthenticatedUser, purchaseRoutes);
app.use("/api/v1/supplier", isAuthenticatedUser, supplierRoutes);
app.use("/api/v1/sell", isAuthenticatedUser, sellRoutes);
app.use("/api/v1/accounts", isAuthenticatedUser, accountRoutes);
app.use("/api/v1/expense", isAuthenticatedUser, expenseRoutes);
app.use("/api/v1/report", isAuthenticatedUser, reportRoutes);
app.use("/api/v1/due", isAuthenticatedUser, dueRoutes);
app.use("/api/v1/customer", isAuthenticatedUser, customerRoutes);

/**
 * Listening Server & DB Connection
 */

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server Running On ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));
