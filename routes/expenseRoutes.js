import express from "express";
import {
  getExpense,
  addCat,
  getCat,
  addExpense,
} from "../controller/expenseController.js";

const expenseRoutes = express.Router();

expenseRoutes.get("/", getExpense);
expenseRoutes.post("/add", addExpense);
expenseRoutes.post("/add/category", addCat);
expenseRoutes.get("/category", getCat);

export default expenseRoutes;
