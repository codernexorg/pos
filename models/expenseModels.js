import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  type: { type: String, required: true },
  createdAt: {
    type: String,
    default: new Date(Date.now()).toISOString(),
  },
});

const expenseCategory = new mongoose.Schema({
  name: { type: String, required: true },
  createdAt: {
    type: String,
    default: new Date(Date.now()).toISOString(),
  },
});

export const Expense = mongoose.model("expense", expenseSchema);

export const ExpenseCat = mongoose.model("expenseCategory", expenseCategory);
