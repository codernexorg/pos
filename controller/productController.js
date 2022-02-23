import Product from "../models/productModels.js";
import ApiFeatures from "../utils/apiFeatures.js";
import errorHandler from "../utils/errorHandler.js";
export const allProduct = async (req, res, next) => {
  const apiFeatures = new ApiFeatures(Product.find(), req.query).filter();
  let products = await apiFeatures.query;
  res.status(200).json({ success: true, products });
};

export const addProduct = async (req, res, next) => {
  try {
    const { name } = req.body;
    const productExist = await Product.findOne({ name });
    if (productExist) {
      return errorHandler("Product Already Exist", 400, res);
    }
    const product = await Product.create(req.body);
    res.status(200).json({ success: true, product });
  } catch (err) {
    return errorHandler(err.message, 400, res);
  }
};
