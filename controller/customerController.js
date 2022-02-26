import Customer from "../models/customerModels.js";
import errorHandler from "../utils/errorHandler.js";

export const addCustomer = async (req, res) => {
  const { mobile } = req.body;

  let customer = await Customer.findOne({ mobile });

  if (customer) {
    return errorHandler("Customer Exist", 400, res);
  }
  customer = await Customer.create(req.body);

  res.status(200).json({ success: true, customer });
};

export const getCustomer = async (req, res) => {
  let customers = await Customer.find();
  res.status(200).json({ success: true, customers });
};
