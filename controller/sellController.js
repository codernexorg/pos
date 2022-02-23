import Sell from "../models/sellModels.js";
import Product from "../models/productModels.js";
import errorHandler from "../utils/errorHandler.js";
import ApiFeatures from "../utils/apiFeatures.js";
import mongoose from "mongoose";
const query = new mongoose.Query();
export const addSell = async (req, res) => {
  const { productName, productQty } = req.body;

  let products = await Product.find({ name: productName }).then((products) =>
    products.filter((item) =>
      parseInt(productQty.filter((qty) => item.qty >= qty).join())
    )
  );

  if (products.length < 1) {
    return errorHandler("out of stock, maybe add some product", 400, res);
  }

  for (let i = 0; i < productQty.length; i++) {
    products[i].qty = products[i].qty - productQty[i];
  }
  products.forEach(async (product) => await product.save());

  let sell = await Sell.create(req.body);

  res.status(200).json({ success: true, sell });
};

export const allSell = async (req, res) => {
  const sells = await Sell.find();

  res.status(200).json({ success: true, sells });
};
