import Supplier from "../models/supplierModels.js";
import errorHandler from "../utils/errorHandler.js";

export const addSupplier = async (req, res) => {
  let supplier = await Supplier.findOne({ name: req.body.name });
  if (supplier) {
    return errorHandler("Supplier Exist", 400, res);
  }
  supplier = await Supplier.create(req.body);

  res.status(200).json({ success: true, supplier });
};

export const allSupplier = async (req, res) => {
  const supplier = await Supplier.find();

  res.status(200).json({ success: true, supplier });
};
