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
    type: [Number],
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  paid: Number,
  due: Number,
  discount: Number,
  tax: Number,
  shippingCharge: String,
  createdAt: {
    type: String,
    default: new Date(Date.now()).toISOString(),
  },
});

const Sell = mongoose.model("sell", sellSchema);

export default Sell;
