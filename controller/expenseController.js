import { Expense, ExpenseCat } from "../models/expenseModels.js";
import errorHandler from "../utils/errorHandler.js";
import actions from "../utils/actions.js";
import { DEBIT } from "../utils/constant.js";

export const addCat = async (req, res) => {
  const { name } = req.body;

  let expenseCat = await ExpenseCat.findOne({ name });
  if (expenseCat) return errorHandler("Category Already exist", 400, res);

  expenseCat = await ExpenseCat.create(req.body);

  res.status(201).json({ success: true, expenseCat });
};
export const getCat = async (req, res) => {
  let expenseCat = await ExpenseCat.find();

  res.status(200).json({ success: true, expenseCat });
};
export const getExpense = async (req, res) => {
  let expenses = await Expense.find();

  res.status(200).json({ success: true, expenses });
};
export const addExpense = async (req, res) => {
  let expense = await Expense.create(req.body);
  // actions(DEBIT, expense);
  res.status(201).json({ success: true, expense });
};
