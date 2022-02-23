import Category from "../models/categoryModels.js";
import errorHandler from "../utils/errorHandler.js";

export const addCategory = async (req, res, next) => {
  const { categoryName } = req.body;

  const isCat = await Category.findOne({ categoryName });

  if (isCat) {
    return errorHandler("Catergory Exist", 400, res);
  }

  const category = await Category.create(req.body);

  res.status(200).json({ success: true, category });
};

export const allCategory = async (req, res, next) => {
  const categories = await Category.find();
  !categories &&
    res.json({ success: true, message: "Not Found, Maybe add some" });

  res.status(200).json({ success: true, categories });
};

export const updateCat = async (req, res) => {
  const { id } = req.params;

  const category = await Category.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.status(200).json({ success: true, category });
};
export const deleteCat = async (req, res) => {
  const { id } = req.params;

  await Category.findByIdAndRemove(id);
  res.status(200).json({ success: true, message: "Deleted Successgully" });
};
