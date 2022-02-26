import Customer from "../models/customerModels.js";
import errorHandler from "../utils/errorHandler.js";

export const getAllDue = async (req, res) => {
  let due = await Customer.find();
  due = due.map((item) => {
    if (item.due) {
      return {
        customerName: item.name,
        due: item.due,
      };
    }
  });
  res.status(200).json({ success: true, due });
};

export const dueCollection = async (req, res) => {
  const { customerName, amount } = req.body;
  let customer = await Customer.findOne({ name: customerName });
  if (amount > customer.due) {
    return errorHandler(`Paying Amount Can't Bigger Than Due`, 400, res);
  }
  customer.due -= amount;
  customer.paid += amount;
  await customer.save();
  console.log(customer);
  res.status(200).json({ success: true, customer });
};
