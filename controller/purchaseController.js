import Purchase from "../models/purchaseModels.js";
import Product from "../models/productModels.js";
import errorHandler from "../utils/errorHandler.js";

export const addPurchase = async (req, res) => {
  const { name, qty, purchasePrice } = req.body;
  console.log(qty);

  let product = await Product.findOne({ name });

  if (!product) return errorHandler("No Product Maybe Add some", 400, res);
  product.qty += qty;
  product.purchasePrice = purchasePrice;
  await product.save();
  let purchase = await Purchase.create(req.body);

  res.status(200).json({ success: true, purchase });
};

export const allPurchase = async (req, res) => {
  const purchase = await Purchase.find();

  res.status(200).json({ success: true, purchase });
};
