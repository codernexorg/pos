import Purchase from "../models/purchaseModels.js";
import Product from "../models/productModels.js";

export const addPurchase = async (req, res) => {
  const { name } = req.body;

  let product = await Product.findOne({ name });
  product.qty = req.body.qty;
  await product.save();

  let purchase = await Purchase.create(req.body);

  res.status(200).json({ success: true, purchase });
};

export const allPurchase = async (req, res) => {
  const purchase = await Purchase.find();

  res.status(200).json({ success: true, purchase });
};
