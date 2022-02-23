import mongoose from "mongoose";

const sellSchema = new mongoose.Schema({
  productName: {
    type: [String],
    required: true,
  },
  productQty: {
    type: [Number],
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  paid: String,
  due: String,
  discount: String,
  tax: String,
  shippingCharge: String,
  createdAt: {
    type: String,
    default: new Date(Date.now()).toISOString(),
  },
});

const Sell = mongoose.model("sell", sellSchema);

export default Sell;
