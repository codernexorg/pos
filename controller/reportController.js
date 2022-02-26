import Purchase from "../models/purchaseModels.js";
import Sell from "../models/sellModels.js";
import Product from "../models/productModels.js";
export const purchaseReport = async (req, res) => {
  let purchases = await Purchase.find();
  res.status(200).json({ success: true, purchases });
};
export const sellReport = async (req, res) => {
  let sells = await Sell.find();
  res.status(200).json({ success: true, sells });
};

export const stockReport = async (req, res) => {
  let stocks = await Product.find();
  res.status(200).json({ success: true, stocks });
};
