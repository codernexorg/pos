import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  thumbnail: {
    type: String,
  },
  type: {
    type: String,
    default: "Standard",
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  productCode: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
  },
  supplier: {
    type: String,
    required: true,
  },
  barcode: {
    type: String,
  },
  unit: {
    type: String,
    required: true,
  },
  purchasePrice: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: String,
  },
  tax: {
    type: String,
  },
  store: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    default: 0,
  },
  alertQty: {
    type: Number,
    required: true,
    default: 10,
  },
  status: {
    type: String,
    default: "Active",
  },
  createdAt: {
    type: String,
    default: new Date(Date.now()).toISOString(),
  },
});

const Product = mongoose.model("product", productSchema);

export default Product;
